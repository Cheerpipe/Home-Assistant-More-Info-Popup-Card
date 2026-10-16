# More-Info Popup Card — Plan de diseño e implementación

> Estado: **v0.1.0 implementada** (fases 0–3 y parte de la 4, ver §11) · decisiones cerradas en §10 · Objetivo: Home Assistant **2026.10** (frontend `20260930.x`)
> Nombre del recurso: `custom:more-info-popup-card` · Bundle: `dist/more-info-popup-card.js` (ya referenciado en `.github/workflows/release.yml`)

---

## 1. Objetivo

Una card **contenedora** que, al abrirse, se muestra como un popup **indistinguible del diálogo
more-info nativo** (mismo componente, misma cabecera, mismas animaciones, mismo bottom sheet en
móvil, mismo botón atrás). Su cuerpo funciona como una **sección de la vista Sections** (grid de 12
columnas con tarjetas hijas), y se edita con el **mismo editor visual nativo**: arrastrar, cambiar
tamaño, copiar/cortar/pegar, duplicar, borrar con deshacer, visibilidad por tarjeta, etc.

Opcionalmente se asocia a una **entidad**, lo que habilita los botones nativos de la cabecera
(historial, ajustes, menú ⋮) y permite **reemplazar el more-info nativo** de esa entidad.

### Criterios de aceptación de "indistinguible"

1. Captura del header del popup vs. captura del more-info nativo de la misma entidad: **diff visual
   ≈ 0** en tema claro, oscuro y RTL, en escritorio y móvil (test de regresión visual automatizado).
2. Mismo comportamiento de: Esc, clic en el scrim, botón atrás del navegador/Android, swipe-down del
   bottom sheet, foco al cerrar, transición al cambiar de vista, clic en el título (ampliar).
3. Ninguna entrada huérfana en el historial del navegador tras abrir/cerrar.
4. Todos los textos de UI que existen en HA se toman de `hass.localize` (cero traducciones propias
   para "Historial", "Ajustes", "Cerrar", "Relacionado", etc.).

---

## 2. Hallazgos de la investigación (código fuente HA frontend `20260930.4`)

| Tema               | Hallazgo                                                                                                                                                                                                                                                                                                                                                                                 | Fuente                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Diálogo more-info  | Renderiza `<ha-adaptive-dialog>` con `.width` `medium`/`large`/`full`, `flexcontent`, `preventScrimClose`; slots `headerNavigationIcon` (X o flecha atrás), `headerTitle` (breadcrumb _área ▸ dispositivo_ + título), `headerActionItems` (historial, ajustes, `ha-dropdown` ⋮).                                                                                                         | `src/dialogs/more-info/ha-more-info-dialog.ts:663-990`                                                |
| Precarga           | `more-info-mixin` importa `ha-more-info-dialog` tras el primer render ⇒ `ha-adaptive-dialog`, `ha-dialog`, `ha-bottom-sheet`, `ha-dialog-header`, `ha-dropdown`, `ha-more-info-history-and-logbook`, `ha-more-info-settings`, `ha-more-info-related`, `ha-more-info-details`, `ha-more-info-add-to`, `ha-more-info-info` y **`hui-section`** están definidos en cualquier página.        | `src/state/more-info-mixin.ts:30-31`, `more-info-content.ts:19`                                       |
| Precedente nativo  | El propio more-info ya dibuja un `<hui-section>` dentro del diálogo (miembros de grupos) ⇒ cuerpo-sección dentro de more-info es un patrón nativo.                                                                                                                                                                                                                                       | `src/dialogs/more-info/more-info-content.ts:86-96`                                                    |
| Adaptive           | Bottom sheet si `(max-width: 870px), (max-height: 500px)`; el modo se fija al montar salvo `allow-mode-change`.                                                                                                                                                                                                                                                                          | `src/components/ha-adaptive-dialog.ts:16-17,134-145`                                                  |
| Tamaños            | `ha-dialog` widths: small 320, medium 580, large 1024, full ≈95vw; vars `--ha-dialog-width-md`, `--ha-dialog-max-width`, `--ha-dialog-min-height`, `--ha-dialog-max-height`, `--dialog-surface-margin-top`. Bottom sheet: `--ha-bottom-sheet-height`, `--ha-bottom-sheet-max-height`, `--ha-bottom-sheet-max-width`. `haStyleDialogFixedTop` fija el diálogo arriba para que no "salte". | `ha-dialog.ts:347-460`, `ha-bottom-sheet.ts:24-37`, `resources/styles.ts:199`                         |
| Gestor de diálogos | Evento `show-dialog {dialogTag, dialogImport, dialogParams, addHistory}`; **un elemento singleton por tag**; añade entrada de historial (`opensDialog` + `pushState({dialog})`); back ⇒ `closeLastDialog()`; el elemento debe emitir `dialog-closed {dialog}`; restaura foco. Acepta tags custom.                                                                                        | `src/dialogs/make-dialog-manager.ts`                                                                  |
| Navegación         | `navigate("#x")` hace `pushState` (sin `hashchange`) y emite `location-changed {replace}`; **cierra antes todos los diálogos**.                                                                                                                                                                                                                                                          | `src/common/navigate.ts:62-82,194-233`                                                                |
| Sections           | Grid de 12 col × `--column-span`, filas 56px, gaps 8px; `grid_options` (`columns`, `rows`, `min_*`, `max_*`).                                                                                                                                                                                                                                                                            | `panels/lovelace/sections/hui-grid-section.ts:223-282`, `common/compute-card-grid-size.ts`            |
| `hui-card`         | Wrapper nativo: visibilidad, `grid_options`, `ll-rebuild`. `element.hidden` oculta **incluso en preview** ⇒ hay que alternar `hidden` según `preview` + `connectedWhileHidden` + `card-visibility-changed` (patrón de `conditional`).                                                                                                                                                    | `cards/hui-card.ts:244-286`, `components/hui-conditional-base.ts`                                     |
| Modo edición       | `hui-section` usa `lovelace.config/saveConfig` con rutas `[view, section, card]`; overlay `hui-card-edit-mode` (editar, duplicar, copiar, cortar, borrar), `ha-sortable` grupo `card`. **No hay rutas anidadas**.                                                                                                                                                                        | `sections/hui-section.ts:315-395`, `components/hui-card-edit-mode.ts`, `editor/lovelace-path.ts:9-10` |
| Portapapeles       | `sessionStorage["dashboardCardClipboard"]` (JSON de la card) con caché en memoria; "Pegar" solo en `hui-card-picker`.                                                                                                                                                                                                                                                                    | `common/decorators/storage.ts:40-99`, `editor/card-editor/hui-card-picker.ts:452-482`                 |
| Editor             | `hui-dialog-edit-card` → `hui-card-element-editor` (pestañas Config/Visibilidad/Diseño si recibe `sectionConfig`); configs **deep-frozen**; `lovelace` se inyecta solo si el editor declara la propiedad.                                                                                                                                                                                | `editor/card-editor/hui-dialog-edit-card.ts`, `editor/hui-element-editor.ts:367-446`                  |
| Undo               | `performDeleteCard` muestra toast con acción `fireEvent(window, "undo-change")` ⇒ deshace en el **dashboard real**. ⚠️ Peligroso si se reutiliza tal cual.                                                                                                                                                                                                                               | `editor/delete-card.ts:21-38`                                                                         |

**Comunidad:** Bubble Card (hash `#popup`, réplica CSS, problemas recurrentes con historial, scroll iOS
y editor), browser_mod (usa `ha-adaptive-dialog`, se rompe con cada refactor de diálogos; `popup-card`
intercepta more-info). Ninguno ofrece cuerpo tipo sección + editor nativo completo. Hilo WTH
"can't I use a card as more-info popup" pide exactamente esto.

---

## 3. Principios de diseño

1. **Reutilizar, no imitar.** Usar los elementos nativos ya registrados (`ha-adaptive-dialog`,
   `hui-section`, `hui-card-element-editor`, `hui-card-picker`, vistas `ha-more-info-*`). Solo se
   copia CSS cuando no hay componente (p. ej. estilos del título/breadcrumb, ~60 líneas).
2. **Integrarse en los contratos de HA**: diálogo vía `show-dialog`, acciones nativas (`navigate`),
   eventos `hass-more-info`, `ll-*`, `config-changed`, portapapeles compartido.
3. **Capa de compatibilidad única** (`src/ha/`): toda dependencia interna pasa por un módulo con
   detección de características, timeouts y fallback. Nada de selectores frágiles repartidos.
4. **Coste cero cuando está cerrado**: las tarjetas hijas se crean al abrir y se destruyen al cerrar
   (streams de cámara y suscripciones liberados), salvo `keep_alive`.
5. **Tokens de diseño HA** (`--ha-space-*`, `--ha-font-size-*`, `--ha-border-radius-*`,
   `--ha-dialog-*`), nunca valores fijos.

---

## 4. Arquitectura

```
src/
  more-info-popup-card.ts         # La card (placeholder en edición, oculta en uso normal)
  popup-dialog.ts                 # <more-info-popup-dialog> singleton gestionado por HA
  popup-header.ts                 # Cabecera clonada del more-info (título, breadcrumb, acciones)
  popup-body.ts                   # <hui-section> con las cards hijas
  registry.ts                     # Registro global de popups + disparadores (hash, more-info, ll-custom)
  history.ts                      # Algoritmo de historial (una sola entrada por apertura)
  editor/
    popup-card-editor.ts          # getConfigElement (pestañas Tarjetas / Popup)
    virtual-lovelace.ts           # Adaptador Lovelace → edición nativa sobre config propia
    child-card-editor.ts          # Subvista de edición inline (← Volver)
    schema.ts                     # Esquema ha-form (expandables)
  ha/
    internals.ts                  # whenDefined + timeout + feature detection + versión
    load-components.ts            # Fuerza carga de ha-form, hui-card-picker, etc.
    entity-views.ts               # Wrappers de ha-more-info-history/settings/related/details/add_to
  config.ts                       # Tipos, normalización, migraciones, defaults
  localize/                       # Solo textos propios del editor (en, es, …)
```

### 4.1 La card en el dashboard

- **Modo normal**: `hidden = true`, `connectedWhileHidden = true`. No ocupa hueco (la sección la
  ignora; una sección con solo popups se oculta sola, como en nativo).
- **Modo edición del dashboard** (`preview = true` dentro de `hui-card-edit-mode`): placeholder con
  estética de tile nativa (`ha-tile-icon` + `ha-tile-info`): icono, nombre, secundario
  `#salon · 4 tarjetas`, borde discontinuo e icono _eye-off_ indicando que no se ve en uso normal.
  `getGridOptions()` → `{columns: 6, rows: 1, min_columns: 3}`.
- **Preview del diálogo de edición** (`preview = true` fuera de `hui-card-edit-mode`): se dibuja la
  **superficie del popup inline** (cabecera + cuerpo sin scrim) para WYSIWYG. `columns: "full"`.
- Al conectarse, registra su config en `registry` (clave `popup_id`); al desconectarse, la retira.

### 4.2 El diálogo `<more-info-popup-dialog>`

- Se abre con `fireEvent(cardEl, "show-dialog", { dialogTag, dialogImport: () => customElements.whenDefined(tag), dialogParams })`.
  Implementa `showDialog(params)`, `closeDialog()` (devuelve `false` si hay cambios sin guardar) y
  emite `dialog-closed`. El gestor le provee `hass` (`provideHass`) y gestiona historial y foco.
- Es singleton (el gestor reutiliza el elemento por tag): los params incluyen la config completa.
- **Modo de presentación**:
  - `auto` (por defecto) → `<ha-adaptive-dialog>` tal cual (idéntico al nativo).
  - `dialog` → `<ha-dialog>` siempre centrado (en <450px HA lo hace a pantalla completa, igual que nativo).
  - `bottom_sheet` → `<ha-bottom-sheet>` siempre, con `ha-dialog-header` replicando la plantilla de
    `ha-adaptive-dialog` (~40 líneas).
- Aplica `haStyleDialogFixedTop` equivalente (anclado arriba) y las variables CSS de tamaño
  derivadas de la config.
- Fades de scroll superior/inferior iguales a `ScrollableFadeMixin` (réplica pequeña: no exportado).
- Clic en el título alterna `width="full"` con `view-transition`, como el nativo (`_enlarge`).

### 4.3 Cabecera

Reproducción literal de `ha-more-info-dialog.ts:677-908`:

- **Navegación**: X en vista raíz; `ha-icon-button-prev` en subvistas.
- **Título**: `name` o nombre de la entidad; **breadcrumb** _área ▸ dispositivo_ calculado con
  `hass.areas/devices/entities` (o `hass.formatEntityName` si está disponible); clicable para
  admins → vista _Relacionado_; separador `◂` en RTL.
- **Acciones** (solo si hay `entity`, respetando las mismas condiciones que el nativo):
  - Historial (`mdiChartBoxOutline`) si el dominio tiene historial/logbook.
  - Ajustes (`mdiCogOutline`) solo admin.
  - Menú ⋮ (`ha-dropdown`): _Añadir a_, _Información del dispositivo_, _Editar_ (automatización,
    script…), _Relacionado_, _Detalles/atributos_; + ítem propio opcional **"Controles de la entidad"**
    (muestra `ha-more-info-info` nativo).
  - Sin entidad: solo X (y opcionalmente acciones personalizadas, ver §9).

### 4.4 Pila de vistas (igual que el nativo)

El diálogo mantiene una pila: `root (cuerpo personalizado)` → vistas de entidad (`history`,
`settings`, `related`, `details`, `add_to`) → _child views_ (`show-child-view`, como hace el nativo
con `dynamicElement(viewTag, {hass, entry, params})`).

- Las vistas usan los **componentes nativos precargados** (`ha-more-info-history-and-logbook`,
  `ha-more-info-settings`, …) con `entry` obtenido por WS `config/entity_registry/get` (lo mismo que `getExtendedEntityRegistryEntry`).
- _Ajustes_ inline (D9); fallback a more-info nativo `view: "settings"`. En esta vista se activa `preventScrimClose` (aproximación del dirty-state nativo).
- **More-info anidado**: si una tarjeta hija emite `hass-more-info`, el popup lo captura en su
  contenido y **navega dentro del mismo diálogo** (flecha atrás), mostrando `ha-more-info-info` de
  esa entidad con su propia cabecera completa — exactamente lo que hace el nativo con entidades
  relacionadas (D2). Configurable: `nested_more_info: inline | dialog`.

### 4.5 Cuerpo

`<hui-section>` nativo con `config = { type: "grid", column_span, cards }`, `hass`, `preview=false`.
Una única sección en v1 (D3). Se le asigna `--column-span` y el padding del `ha-more-info-info` nativo
(`var(--ha-space-6)`, inferior `max(safe-area-inset-bottom, var(--ha-space-6))`).
Resultado: misma rejilla, tamaños, visibilidad condicional y ordenación densa que una sección.

### 4.6 Disparadores (`registry.ts`)

| Disparador                                           | Uso                                                                                                                                                                                                                                                               | UI nativa                      |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **Hash** `#<popup_id>`                               | Acción _Navegar_ a `#salon` desde cualquier card/badge/botón                                                                                                                                                                                                      | ✅ selector de acciones nativo |
| **Reemplazar more-info** (`replace_more_info: true`) | Listener en `window` (fase captura) de `hass-more-info`; si la entidad coincide, se cancela el nativo y se abre el popup (respetando `view`: `history`/`settings` abren esa vista). Incluye búsqueda/quick bar. Sin bucles: el popup no se intercepta a sí mismo. | ✅ automático                  |
| **`fire-dom-event`**                                 | `ll-custom` con `more_info_popup: { open: salon }` (también `close`, `toggle`)                                                                                                                                                                                    | YAML                           |
| **Deep link**                                        | Al cargar con `#salon` en la URL                                                                                                                                                                                                                                  | —                              |

Limitación conocida (igual que Bubble/browser_mod): un popup existe solo en las vistas donde está
su card (decisión D6).

### 4.7 Historial (una sola entrada por apertura)

- `navigate` con `replace: true` o deep link: `replaceState` para quitar el hash → abrir con
  `addHistory: true` ⇒ historial `[url (opensDialog)] [dialog]`. ✅
- `navigate` con push (el caso común): el hash creó una entrada extra. Se hace `history.back()`,
  se espera el `popstate` y entonces se abre con `addHistory: true` ⇒ mismo historial limpio, sin
  la entrada huérfana que reportan los usuarios de Bubble Card (#2563). A validar con tests E2E
  (Chrome, Safari/iOS, app Companion Android/iOS).
- Navegar a otro `#popup` desde dentro de un popup: `navigate` cierra el actual y abre el nuevo
  (encadenado). Apilado real solo vía `fire-dom-event`.

### 4.8 Editor visual

Se abre en el `hui-dialog-edit-card` nativo (vía `getConfigElement`). _Cambio respecto al
borrador:_ en vez de pestañas propias se usan secciones `expandable` de `ha-form` seguidas de la
rejilla, porque el diálogo ya pinta sus pestañas (Configuración/Visibilidad/Diseño) y cada hija
las suyas: con pestañas propias habría tres niveles.

**Rejilla "Tarjetas"** (bajo el formulario) — **modo edición nativo**:

- `<hui-section>` con `lovelace = VirtualLovelace` (`editMode: true`) y `viewIndex = 0, index = 0`.
  El adaptador expone `config = { views: [{ type: "sections", sections: [mySection] }] }` y su
  `saveConfig` extrae `views[0].sections[0].cards` y emite `config-changed` del editor.
- Así se obtienen **nativamente**: overlay de edición, arrastrar y soltar (`ha-sortable`), botón
  "Añadir tarjeta", copiar/cortar (escribe en el portapapeles compartido con el dashboard), borrar.
- Se interceptan en **fase de captura** (antes que `hui-section`) los eventos que abrirían un
  segundo `hui-dialog-edit-card` (el gestor es singleton y machacaría el diálogo actual):
  - `ll-edit-card` / `ll-duplicate-card` → **subvista inline** "← Editar _Tile_" con
    `hui-card-element-editor` + `sectionConfig` ⇒ pestañas nativas Config / **Visibilidad** /
    **Diseño** (slider de columnas/filas) para cada hija. Iconos: código, duplicar, copiar, cortar,
    borrar.
  - `ll-create-card` → subvista "← Añadir tarjeta" con `hui-card-picker` (incluye la baldosa
    **Pegar** nativa y tarjetas sugeridas para la entidad del popup).
- `showToast` del adaptador sustituye la acción "Deshacer" por **nuestro propio undo** (pila local)
  para no disparar `undo-change` sobre el dashboard real. Se muestra como aviso **dentro del
  editor** (`ha-alert` + Deshacer): los toasts de HA quedan fuera del diálogo modal (top layer) y su
  botón no se puede pulsar mientras está abierto (verificado en HA 2026.10).
- Las configs llegan congeladas: clonar siempre antes de mutar.

**Opciones del popup** — `ha-form` con secciones `expandable` (estilo editor de _tile_), encima de la rejilla:

1. _General_: `popup_id` (validado, único en la vista), `entity`, `name`, `icon`.
2. _Apariencia_: `mode`, `width` (+ `custom_width`), `height` (+ `min_height`/`max_height`),
   `column_span`, `breadcrumb`, `show_header_actions`.
3. _Comportamiento_: `replace_more_info`, `nested_more_info`, `dismissable`, `auto_close`, `keep_alive`.

**Extras del editor**: botón **"Probar popup"** que abre el diálogo real (apilado sobre el editor)
con la config sin guardar; el modo YAML nativo funciona automáticamente.

**Carga perezosa**: `ha/internals.ts` (`ensureEditorElements`) fuerza la carga de `ha-form` y `hui-card-picker`
(p. ej. `customElements.get("hui-grid-card").getConfigElement()`) y espera `whenDefined`.
`hui-card-picker` necesita `lovelace` asignado **antes** de conectarse.

---

## 5. Configuración (YAML)

Claves planas al estilo de las cards nativas; se evitan nombres reservados por HA para la card
contenedora (`visibility`, `grid_options`, `layout_options`, `disabled`, `view_layout`).

```yaml
type: custom:more-info-popup-card
popup_id: salon # → #salon
entity: light.salon # opcional: habilita historial/ajustes/menú
name: Salón # por defecto: nombre de la entidad
icon: mdi:sofa # placeholder en edición
breadcrumb: auto # auto | none | "texto libre"
mode: auto # auto | dialog | bottom_sheet
width: medium # small | medium | large | full | custom
custom_width: 720px
height: auto # auto | custom
min_height: 300px
max_height: 80vh
column_span: 1 # 1 = 12 columnas; 2 = 24 (popups anchos)
show_header_actions: true # historial/ajustes/menú cuando hay entidad
replace_more_info: false
nested_more_info: inline # inline | dialog
dismissable: true # Esc / scrim / swipe
auto_close: 0 # segundos; 0 = nunca
keep_alive: false # mantener hijas montadas al cerrar
cards:
  - type: heading
    heading: Iluminación
  - type: tile
    entity: light.salon_lampara
    grid_options: { columns: 6 }
```

`getStubConfig` genera `popup_id` único a partir de la entidad sugerida o `popup_<n>`, y `cards: []`.
`window.customCards` con `name`, `description`, `preview: true`, `documentationURL`.

---

## 6. Calidad y prácticas

- **Stack**: TypeScript estricto, Lit 3 (bundle propio, registro con guarda
  `if (!customElements.get(...))`), Rollup/Vite → un único ES module minificado + sourcemap.
- **Lint/format**: ESLint (`eslint-plugin-lit`, `lit-a11y`, `wc`) + Prettier (`.prettierrc` existente).
- **Tests**:
  - Unit (Vitest + happy-dom): normalización de config, registro, algoritmo de historial con
    `History` simulado, adaptador `VirtualLovelace`, undo.
  - E2E (Playwright) contra contenedor `homeassistant/home-assistant:2026.10` con dashboard de
    fixtures: hash, back, Esc, scrim, swipe, 390px/1280px, vistas de entidad, more-info anidado,
    editor (añadir, editar, mover, copiar en dashboard → pegar en popup y viceversa, borrar +
    deshacer), tema claro/oscuro, RTL.
  - **Regresión visual vs. nativo**: abrir el more-info nativo y el popup de la misma entidad y
    comparar la región del header (criterio §1.1).
- **CI**: `ci.yml` en PR (typecheck, lint, test, build, e2e) + **job canario semanal** contra la
  imagen `beta`/`dev` de HA para detectar rupturas de internals antes de cada release mensual.
  Actualizar `release.yml` (Node 24 LTS, versiones vigentes de actions).
- **HACS**: repo `more-info-popup-card`, `hacs.json` `{ name, filename: "more-info-popup-card.js",
homeassistant: "2026.10.0" }` (D5), releases de GitHub reales con el asset adjunto.
- **A11y**: `aria-labelledby` al título, trampa de foco nativa, foco restaurado por el gestor,
  objetivos táctiles ≥ 48px, `prefers-reduced-motion` respetado por los componentes nativos.
- **i18n**: `hass.localize` para todo lo que existe; textos propios del editor en `en` y `es`.
- **Rendimiento**: hijas creadas al abrir; `hass` solo se propaga con el popup abierto; sin
  listeners globales por instancia (un único registro compartido).

---

## 7. Fases

| Fase                    | Entregable                                                                                                                                                         | Hecho cuando…                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| **0. Base**             | `git init`, package, build, lint, test, CI, `hacs.json`, entorno Docker HA 2026.10, `ha/internals.ts`                                                              | `npm run build` genera el bundle y se carga en HA de pruebas                    |
| **1. Contenedor**       | Card oculta/placeholder, registro, hash + historial, diálogo con `ha-adaptive-dialog`, cabecera sin entidad, cuerpo `hui-section`, modos/tamaños. Config solo YAML | Abrir/cerrar sin diferencias con el nativo en los 3 modos; historial limpio     |
| **2. Entidad**          | Breadcrumb, historial, ajustes, menú, vistas inline, `replace_more_info`, more-info anidado inline                                                                 | Test de regresión visual del header verde                                       |
| **3. Editor**           | Formulario, `VirtualLovelace`, subvistas inline, picker con Pegar, undo propio, preview inline, "Probar popup"                                                     | Todo el flujo de edición de §4.8 en E2E, incluido copiar/pegar con el dashboard |
| **4. Pulido y release** | i18n, a11y, rendimiento, docs (README con GIFs), canario CI, release HACS v1.0.0                                                                                   | Checklist de calidad completa                                                   |
| **5. v1.x**             | §9, empezando por edición en vivo (D4) y varias secciones (D3)                                                                                                     | Planificado tras v1.0.0                                                         |

---

## 8. Riesgos y mitigaciones

| Riesgo                                                                                             | Mitigación                                                                                                                             |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Internals cambian (precedente: 2026.3 rompió card-mod/browser_mod al pasar a `ha-adaptive-dialog`) | Toda dependencia en `src/ha/`; `whenDefined` con timeout; canario CI semanal contra beta; aviso en consola con versión de HA detectada |
| Si falta `ha-adaptive-dialog`/`hui-section`                                                        | Fallback: grid propio con `hui-card` (CSS calcado de `hui-grid-section`) y, en último caso, abrir el more-info nativo de la entidad    |
| Undo del dashboard real disparado desde el editor                                                  | `showToast` del adaptador con undo propio (§4.8)                                                                                       |
| Segundo `hui-dialog-edit-card` machaca el actual                                                   | Interceptar `ll-edit-card`/`ll-duplicate-card`/`ll-create-card` en captura → subvistas inline                                          |
| Portapapeles: HA cachea en memoria                                                                 | Copiar siempre a través de `hui-section` nativo (`ll-copy-card`), nunca escribiendo directamente en `sessionStorage`                   |
| `ha-sortable` grupo global `card`                                                                  | El popup es modal (dashboard inerte), sin arrastre cruzado; verificar en E2E                                                           |
| Historial en iOS/Companion                                                                         | Matriz de tests E2E específica (§4.7)                                                                                                  |
| Gestos del bottom sheet vs. sliders/mapas hijos                                                    | Mismo comportamiento que el nativo; documentar                                                                                         |

---

## 9. Hoja de ruta v1.x (fuera del alcance de v1)

1. **Edición en vivo desde el propio popup** (D4): ítem ⋮ "Editar tarjetas" (admin, dashboard en modo
   storage) que pone el cuerpo en modo edición nativo y guarda en el dashboard real (ruta localizada
   por identidad de la config en `hui-root.lovelace`). Aquí sí se pueden usar los diálogos nativos.
2. **Varias secciones** (D3) dentro del popup (popups `large`/`full` tipo mini-vista Sections).
3. **Apertura automática por condición** (como `trigger` de Bubble) y `auto_close`.
4. **Tema por popup** (`theme`), como las secciones nativas.
5. **Acciones de cabecera personalizadas** para popups sin entidad (iconos con `ui_action`).
6. **Popups globales** (D6) (disponibles en todas las vistas) mediante un dashboard "biblioteca" oculto.
7. **Mantener `#id` en la URL** mientras el popup está abierto, para que recargar lo reabra (D7).

---

## 10. Decisiones cerradas

Aceptadas el 2026-10-16. Donde la pregunta original no llevaba recomendación explícita (P3, P4,
P6, P7) se adopta la opción más conservadora para la v1.

| #      | Tema                           | Decisión                                                                                                                                                                                               |
| ------ | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **D1** | Disparadores                   | Hash `#<popup_id>` (principal, 100% UI nativa) + `replace_more_info` + `fire-dom-event` (`ll-custom`). Abrir desde automatizaciones queda **fuera de alcance** (requeriría integración o browser_mod). |
| **D2** | More-info anidado              | **Inline**: navega dentro del mismo popup con flecha atrás, como el nativo. `nested_more_info: inline` por defecto; `dialog` disponible como opción.                                                   |
| **D3** | Secciones                      | **Una sola sección** en v1 (`column_span` para popups anchos). Varias secciones → v1.x (§9.2).                                                                                                         |
| **D4** | Edición en vivo desde el popup | **v1.x** (§9.1). La v1 edita solo desde el diálogo de edición de la card.                                                                                                                              |
| **D5** | Versión mínima de HA           | **2026.10.0**. `hacs.json` → `"homeassistant": "2026.10.0"`. Se avisa en consola si la versión es menor.                                                                                               |
| **D6** | Alcance de los popups          | Solo en las vistas donde está la card (igual que Bubble Card/browser_mod). Popups globales → v1.x (§9.6).                                                                                              |
| **D7** | URL mientras está abierto      | **No** se mantiene `#id` en la URL en v1: el hash se consume al abrir para garantizar historial limpio (§4.7). El deep link al cargar con `#id` sí funciona. Revisable en v1.x.                        |
| **D8** | Nombre y repo                  | `more-info-popup-card` (repo, tipo `custom:more-info-popup-card`, bundle `more-info-popup-card.js`).                                                                                                   |
| **D9** | Ajustes de la entidad          | **Inline** con `ha-more-info-settings` nativo (idéntico al nativo); fallback a abrir el more-info nativo en `view: "settings"` si el componente no está disponible.                                    |

---

## 11. Estado de la implementación (2026-10-16)

Verificado a mano en un HA **2026.10** real (Docker, `dev/`), escritorio 1024×768 y móvil 375×812:

| Área                                                                                                                                                                              | Estado                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Card oculta en uso normal (sin hueco; la sección se oculta si solo tiene popups) y placeholder en edición                                                                         | ✅                                                                  |
| Apertura por `#hash` (push/replace/deep link), `fire-dom-event`, `replace_more_info`                                                                                              | ✅ · historial sin entradas huérfanas (tests unitarios + navegador) |
| Diálogo con `ha-adaptive-dialog` / `ha-dialog` / `ha-bottom-sheet`, Esc, scrim, atrás, apilado sobre otros diálogos                                                               | ✅                                                                  |
| Cabecera nativa (X/atrás, breadcrumb, historial, ajustes, ⋮) y vistas inline (historial, ajustes, relacionado, detalles, añadir a)                                                | ✅ · cabecera comparada con el more-info nativo de la misma entidad |
| More-info anidado inline con flecha atrás                                                                                                                                         | ✅                                                                  |
| Editor: formulario, rejilla nativa (arrastrar, menú ⋮, copiar → Pegar en el picker), subeditor con pestañas Config/Visibilidad/Diseño, borrar + deshacer, "Probar popup", guardar | ✅                                                                  |
| Unit tests (Vitest), typecheck, ESLint, Prettier, CI (`ci.yml`), `hacs.json`, README                                                                                              | ✅                                                                  |

**Pendiente / desviaciones conocidas**

- E2E automatizado con Playwright y **regresión visual automática** del header (§6): no
  implementados; hoy la verificación es manual. Siguiente paso recomendado.
- Job **canario semanal** contra la beta de HA (§6): no creado.
- Ítems de **favoritos** del menú ⋮ nativo (editar/restablecer/copiar favoritos de luces y
  persianas) no se replican: dependen de lógica interna no expuesta.
- Ajustes inline: `preventScrimClose` se activa siempre en esa vista (aproximación del
  dirty-state nativo).
- Botón de historial del popup raíz: se muestra para cualquier dominio con historial (el nativo lo
  limita a dominios con control propio porque, por ejemplo, los sensores ya muestran el gráfico
  en su vista; el popup sustituye esa vista).
- Ítem propio **"Controles de la entidad"** en el ⋮ del popup raíz (muestra `ha-more-info-info`).
- `documentationURL` y el enlace del README apuntan a `github.com/cheerpipe/more-info-popup-card`:
  confirmar el repositorio real. Falta elegir **licencia** (HACS la recomienda).

---

## 12. Fase 6 — Piezas para componer more-info a medida (2026-10-16)

**Objetivo:** no solo replicar el more-info actual, sino ofrecer sus piezas nativas como cards
para construir more-info personalizados dentro del popup. Por defecto cada pieza es idéntica al
nativo; cada opción configurada se aplica encima.

### 12.1 `custom:more-info-state-card` — cabecera de estado + control grande

- `ha-more-info-state-header` nativo ("Off · hace 3 horas", "75 %").
- Control grande nativo (`src/state-control/*`), elegido por dominio o forzado con `control`:
  `toggle`, `brightness`, `fan_speed`, `position`, `tilt`, `cover_buttons`, `valve_position`,
  `valve_buttons`, `lock`, `alarm_modes`, `temperature`, `humidity`, `water_heater`, `status`, `none`.
- Opciones: `show_state`, `show_last_changed`, `state_override` (texto propio), `icon_on` / `icon_off`.
- Estilos de layout copiados de `more-info-control-style.ts` (`.controls`, espaciados `--ha-space-6`).
- Carga perezosa: `loadCardHelpers().importMoreInfoControl(domain)` + `whenDefined`.

### 12.2 `custom:more-info-controls-card` — fila de chips del pie del more-info

Contenedor nativo `ha-more-info-control-select-container` (centrado, salto de línea, scroll en
móvil). Cada elemento de `controls` puede ser:

| `type`   | Pieza                                                              | Comportamiento                                                                                                                                                                                                                                                                                                                                                                          |
| -------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `select` | `ha-control-select-menu` nativo                                    | Entidad `select` / `input_select`, o atributo con lista (`effect`, `preset_mode`, `fan_mode`, `hvac_mode`, `swing_mode`, `fan_speed`, `mode`, `direction`, `oscillating`, `operation_mode`, `away_mode`, `source`, `sound_mode`). El servicio lo deduce la card y se puede sobrescribir con `perform_action` + `data_key`. `options` filtra, ordena y renombra (`{value, name, icon}`). |
| `toggle` | Chip con el estilo nativo (copiado del botón "Cleaning › By area") | Enciende y apaga; icono con el color de estado.                                                                                                                                                                                                                                                                                                                                         |
| `number` | Chip − valor + con el mismo estilo                                 | `number` / `input_number` (o `min`/`max`/`step` propios); llama a `set_value`.                                                                                                                                                                                                                                                                                                          |
| `action` | Chip con chevron opcional                                          | `tap_action` cualquiera: `navigate` a `#otro_popup`, `perform-action`, `more-info`…                                                                                                                                                                                                                                                                                                     |

Textos e iconos por defecto con los formateadores de HA (`formatEntityAttributeName/Value`,
`ha-attribute-icon`). Editor visual con `getConfigForm` y el selector `object` (`multiple`) nativo.

### 12.3 UIX (Lint-Free-Technology/uix)

- **Cards:** se estilan automáticamente (vía `hui-card`). Requisito: dibujar `ha-card` y conservar
  la config original en `_config` (con `uix:` / `card_mod:`).
- **Popup:** UIX ya aplica `uix-dialog` (genérico de `show-dialog`). Además el diálogo llama a
  `uix-node.applyToElement` sobre su elemento interno con:
  - tipo `more-info` (sin config), para heredar el tema de more-info del usuario;
  - tipo `more-info-popup`, con la `uix:` del popup (estilos por popup) y la clave de tema
    `uix-more-info-popup(-yaml)`. Esto cubre también `ha-bottom-sheet`, que el parche genérico no busca.
- No se reutiliza el tipo `dialog` (UIX lo reaplica sin config en cada `updated()`).

### 12.4 Estado (2026-10-16)

Implementado y probado a mano en HA 2026.10 (vista "Composición" de `dev/onboard.mjs`):
aspiradora (estado + botones de comando + succión renombrada + chip de acción que abre otro
popup), ventilador (velocidad + preset/dirección/oscilación + interruptor), termostato
(control circular + modos HVAC filtrados), luz (efecto, interruptor, número, acción) y ajustes
(`select`, `number`, entidad inexistente). Añadido el tipo `button` (botones de comando
nativos, como en el more-info de la aspiradora). Editor visual: `getConfigForm` con la lista
nativa reordenable (`object` selector); renombrar opciones queda en YAML.

**Hallazgo:** HA carga el polyfill `scoped-custom-element-registry`; un módulo cargado con
`frontend: extra_module_url` puede ejecutarse antes y registrar sus elementos fuera del
registro que usan los dashboards. El entorno de desarrollo usa ahora un recurso de dashboard
(como HACS) y el README lo advierte.

**Pendiente:** verificar UIX instalado en el HA de pruebas (requiere descargar UIX);
`icon_on` / `icon_off` del plan no se implementaron (los controles nativos solo aceptan paths SVG).

## 13. Documentación (2026-10-16)

- `docs/catalog.mjs`: catálogo único de 64 ejemplos con captura (popup, card de estado, card de
  controles y recetas) + ejemplos solo-texto (disparadores, comportamiento).
- `dev/docs.mjs`: instala el dashboard "Popup docs", lista el plan de capturas y genera
  `docs/popup-card.md`, `state-card.md`, `controls-card.md`, `recipes.md`.
- Páginas escritas a mano: `docs/README.md` (índice), `editor.md` (8 capturas), `uix.md`, `testing.md`.
- Capturas con el navegador integrado + `dev/docs-capture.js` y `dev/docs-crop.py` (72 en total).
- Bugs encontrados al documentar y corregidos: `attribute: state` rechazado por la validación;
  `select` con opciones y acción propias sin `attribute` no se pintaba; chips sin icono
  (oscilación, modo ausente, potencia de succión).
