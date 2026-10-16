# Documentation

Every example in these pages was installed in a real Home Assistant 2026.10 and
captured from it. The YAML shown is exactly what produced each screenshot.

| Page                              | What it covers                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Popup card](popup-card.md)       | The container: basics, sizes, dialog / bottom sheet, entity views, ways to open it, behavior     |
| [State card](state-card.md)       | The more-info state header and every native big control                                          |
| [Controls card](controls-card.md) | Select, toggle, number, action and button chips, and how to customize them                       |
| [Recipes](recipes.md)             | Complete custom more-info popups for vacuums, fans, thermostats, lights, covers, security, rooms |
| [Visual editor](editor.md)        | Editing popups and their cards with the native editor                                            |
| [UIX theming](uix.md)             | Styling cards and popups with UIX / card-mod                                                     |
| [Test plan](testing.md)           | Every case that was verified, and how to run the checks yourself                                 |

## At a glance

| Popup (dialog)                                      | Bottom sheet on a phone                 | Custom more-info                                     |
| --------------------------------------------------- | --------------------------------------- | ---------------------------------------------------- |
| ![Popup bound to an entity](images/with_entity.png) | ![Bottom sheet](images/auto_mobile.png) | ![Custom vacuum more-info](images/recipe_vacuum.png) |

| State card                                             | Controls card                            | Visual editor                     |
| ------------------------------------------------------ | ---------------------------------------- | --------------------------------- |
| ![Thermostat state card](images/state_temperature.png) | ![Controls chips](images/many_chips.png) | ![Editor](images/editor_grid.png) |

## Regenerating the docs

The examples live in [`catalog.mjs`](catalog.mjs). With the development Home
Assistant running (`npm run dev:ha` and `node dev/onboard.mjs`):

```bash
node dev/docs.mjs dashboard   # installs every example in the "Popup docs" dashboard
node dev/docs.mjs plan        # lists the screenshots to take (id, view, viewport, setup)
node dev/docs.mjs markdown    # rewrites popup-card.md, state-card.md, controls-card.md, recipes.md
```

To capture, paste [`dev/docs-capture.js`](../dev/docs-capture.js) in the browser
console, run `__shot(example)` for each plan entry, take a screenshot and crop it
to `__doc.rect()` with [`dev/docs-crop.py`](../dev/docs-crop.py).

Screenshots are stored in [`images/`](images) as `<example id>.png`. They were
taken at 900 × 700 (desktop, dialog mode) and 375 × 812 (phone), light theme,
English UI.
