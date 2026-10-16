# UIX theming

[← Documentation index](README.md)

[UIX](https://github.com/Lint-Free-Technology/uix) (the successor of card-mod)
styles every piece of this project. `card_mod:` keys keep working.

> These examples are not captured: UIX is not installed in the documentation
> instance. They follow the selectors and theme keys documented by UIX 8.

## Cards

All cards (the popup's children, the state card and the controls card) take the
usual `uix:` key, applied by UIX like on any native card.

```yaml
type: custom:more-info-controls-card
controls:
  - entity: switch.ac
  - entity: fan.living_room_fan
    attribute: preset_mode
uix:
  style: |
    ha-card {
      --control-select-menu-background-color: var(--primary-color);
      --control-select-menu-background-opacity: 0.15;
      --control-select-menu-border-radius: 24px;
    }
```

Useful variables, all native:

| Piece                    | Variables                                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Select and other chips   | `--control-select-menu-background-color`, `-background-opacity`, `-border-radius`, `-height`, `-padding`, `-text-color`, `-focus-color` |
| Command buttons          | `--control-button-background-color`, `--control-button-border-radius`, `--control-button-group-thickness`                               |
| Big sliders and switches | `--control-slider-thickness`, `--control-slider-border-radius`, `--control-switch-thickness`, `--control-switch-border-radius`          |

## The popup

`uix:` on the popup card styles that popup's dialog. Selectors are relative to the
popup element (`:host`), so the native dialog variables work directly:

```yaml
type: custom:more-info-popup-card
popup_id: living_room
uix:
  style: |
    :host {
      --ha-dialog-surface-background: rgba(20, 20, 30, 0.85);
      --ha-dialog-surface-backdrop-filter: blur(12px);
      --ha-dialog-border-radius: 32px;
      --ha-bottom-sheet-border-radius: 32px;
    }
cards: []
```

### Theme keys

In a theme with `uix-theme: <theme name>`:

| Key                                                | Applies to                                                       |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| `uix-more-info-popup` / `uix-more-info-popup-yaml` | every popup of this card (dialog and bottom sheet)               |
| `uix-more-info` / `uix-more-info-yaml`             | the native more-info **and** every popup, so both always match   |
| `uix-dialog` / `uix-dialog-yaml`                   | every dialog; popups get the class `type-more-info-popup-dialog` |
| `uix-card` / `uix-card-yaml`                       | every card, including the state and controls cards               |

```yaml
my_theme:
  uix-theme: my_theme
  uix-more-info-popup-yaml: |
    .: |
      :host {
        --ha-dialog-surface-background: var(--primary-background-color);
      }
```

Both the dialog and the bottom sheet are covered, including `mode: bottom_sheet`,
which UIX's generic dialog patch does not reach.
