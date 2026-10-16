# Test plan

[← Documentation index](README.md)

How each case was checked on Home Assistant 2026.10 (frontend 20260930.4, `demo`
integration):

- **Unit**: automated test in `test/`, run with `npm test`.
- **HA**: checked by hand in the development instance (`dev/`).
- **Shot**: captured for these docs; the screenshot is linked.
- **Not verified**: the case has not been checked yet.

## Popup card

| Case                                                         | How            | Evidence                                                                                              |
| ------------------------------------------------------------ | -------------- | ----------------------------------------------------------------------------------------------------- |
| Opens with a Navigate action to `#id` (push)                 | Unit, HA       | `registry.test.ts`, history keeps one entry                                                           |
| Opens with `navigation_replace` and with a deep link         | Unit, HA       | `registry.test.ts`                                                                                    |
| Ignores unknown hashes and hashes of other pages             | Unit           | `registry.test.ts`                                                                                    |
| Back button, Esc and ✕ close it; history stays clean         | HA             | `history.state` checked after each close                                                              |
| `fire-dom-event` open / toggle / close                       | Unit, HA       | `registry.test.ts`                                                                                    |
| `replace_more_info` (including requested views)              | Unit, HA, Shot | [history](images/view_history.png), [settings](images/view_settings.png)                              |
| Events from inside a popup are not intercepted               | Unit           | `registry.test.ts`                                                                                    |
| Header identical to the native more-info                     | HA             | compared side by side with the native dialog                                                          |
| Entity views: history, settings, related, details, menu      | HA, Shot       | [related](images/view_related.png), [details](images/view_details.png), [menu](images/view_menu.png)  |
| Nested more-info inline with back arrow                      | HA, Shot       | [nested](images/nested_inline.png)                                                                    |
| Widths small / medium / large / full / custom                | Shot           | [small](images/width_small.png), [large](images/width_large.png), [custom](images/width_custom.png)   |
| Custom height                                                | Shot           | [height](images/height_custom.png)                                                                    |
| `mode: bottom_sheet`, `auto` on a phone, `dialog` on a phone | HA, Shot       | [sheet](images/sheet_desktop.png), [auto](images/auto_mobile.png), [dialog](images/dialog_mobile.png) |
| Hidden on the dashboard, placeholder in edit mode            | HA, Shot       | [placeholders](images/editor_placeholders.png)                                                        |
| Card registered after the HA registry polyfill               | HA             | must be loaded as a dashboard resource (see README)                                                   |
| `dismissable: false`, `auto_close`, `keep_alive`             | Not verified   |                                                                                                       |
| Config validation errors                                     | Unit           | `config.test.ts`                                                                                      |

## Editor

| Case                                                     | How      | Evidence                                                                        |
| -------------------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| Popup options form (General / Appearance / Behavior)     | HA, Shot | [form](images/editor_form.png), [appearance](images/editor_appearance.png)      |
| Native grid: drag & drop reorder, saved to the dashboard | HA       | dashboard config read back over WebSocket                                       |
| Card menu: edit, duplicate, copy, cut, delete            | HA, Shot | [menu](images/editor_card_menu.png)                                             |
| Copy in popup → paste from the card picker               | HA, Shot | [paste](images/editor_picker.png)                                               |
| Delete + Undo (inside the editor)                        | HA       | restored config, Save disabled again                                            |
| Child card Config / Visibility / Layout tabs             | HA       | Layout shows a 24-column grid with `column_span: 2`                             |
| Controls card list editor and item form                  | HA, Shot | [list](images/editor_controls_list.png), [item](images/editor_control_item.png) |
| Test popup (stacked over the editor; Esc closes only it) | HA       |                                                                                 |
| Virtual Lovelace adapter                                 | Unit     | `editor-helpers.test.ts`                                                        |

## State card

| Case                                                                          | How  | Evidence                                                                         |
| ----------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------------------- |
| Automatic control per domain (same rules as more-info)                        | Unit | `controls.test.ts`                                                               |
| Every control renders (toggle … vacuum status)                                | Shot | [state card page](state-card.md)                                                 |
| Header text like more-info (brightness, speed, state · position)              | Shot | [brightness](images/state_brightness.png), [position](images/state_position.png) |
| `state_override`, `show_last_changed`, `show_state`, `control: none`          | Shot | [state card page](state-card.md#options)                                         |
| Climate / humidifier / water heater controls appear immediately on first load | HA   | regression fixed: no wait for the state header                                   |
| Interaction: fan speed, vacuum start / return to base                         | HA   | entity state changed                                                             |

## Controls card

| Case                                                             | How          | Evidence                                  |
| ---------------------------------------------------------------- | ------------ | ----------------------------------------- |
| Attribute → service mapping (preset, oscillating, hvac, select…) | Unit         | `controls.test.ts`                        |
| Type inference                                                   | Unit         | `controls.test.ts`                        |
| Every select attribute renders with native labels and icons      | Shot         | [controls card page](controls-card.md)    |
| Filtered / renamed / re-iconed options                           | HA, Shot     | [options](images/select_options.png)      |
| Custom options + `perform_action` + `data_key`                   | Shot         | [custom](images/select_custom_action.png) |
| Select changes the entity (vacuum suction → Turbo)               | HA           | entity attribute changed                  |
| Toggle chip changes the entity (AC)                              | HA           | entity state changed                      |
| Number steppers render with min / max / step / unit              | Shot         | [numbers](images/number_chips.png)        |
| Number stepper changes the entity                                | Not verified |                                           |
| Action chip navigates to another popup                           | HA           | `#ajustes` opened from the vacuum popup   |
| Action chip `perform-action` / `more-info`                       | Not verified |                                           |
| Command buttons above the chips                                  | HA, Shot     | [buttons](images/button_row.png)          |
| Missing / unavailable entity                                     | Shot         | [unavailable](images/unavailable.png)     |
| `wrap: true` on a phone (rows instead of horizontal scroll)      | HA, Shot     | [wrap](images/wrap_mobile.png)            |
| Native layout with 2, 4 and 6 chips                              | Shot         | [many](images/many_chips.png)             |

## UIX

| Case                                              | How                              |
| ------------------------------------------------- | -------------------------------- |
| Card styling through `uix:` / `card_mod:`         | Not verified (UIX not installed) |
| Popup `uix:` and `uix-more-info-popup` theme keys | Not verified (UIX not installed) |

## Running the checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```
