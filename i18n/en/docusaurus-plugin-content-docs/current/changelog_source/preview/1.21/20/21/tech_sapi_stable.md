

-   EntityLeashableComponent
    -   Moved class _EntityLeashableComponent_ from beta to _1.13.0_

## Blocks

-   "infested\_stone" and its derivatives now have their block sound defined ([MCPE-182290](https://bugs.mojang.com/browse/MCPE-182290))

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **#BedrockEditor.** 

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples). 

Updates this week:

-   Added settings panel to modify atmospheric, global illumination, and color grading settings for deferred lighting (requires deferred lighting resource pack and settings to be enabled)
    -   Known issue: shadows are cast from the UI elements. You can toggle crosshair mode via CTRL+TAB as a workaround
    -   Known issue: paste preview (CTRL+SHIFT+V) does not render properly when deferred lighting is enabled.

![editorPicture1.png](https://feedback.minecraft.net/hc/article_attachments/27938232806029)

-   Added _Input Mappings_ action bar item that opens a modal displaying all available key bindings and input contexts.
    -   Key bindings can be reconfigured using the shortcut field, which detects key presses to set the binding. Pending changes will highlight the text until saved or cleared. Closing the modal reverts any pending changes.
    -   Right-clicking on a selected shortcut field clears the binding, or clear button next to the field can be used.
    -   Added a toggle for exclusive (_None_ in API) key actions to support advanced input scenarios.
    -   Modified bindings can be restored by clicking restore buttons for the binding, active context, and all modified bindings.
    -   Saved bindings are accessible across different editor projects.

![editorPicture2.png](https://feedback.minecraft.net/hc/article_attachments/27938262668685)

-   Extended game options to include more export options as well as applying options to export level data
-   Added an optional _KeyBindingInfo_ argument to the key binding registration API functions to assign additional information to shortcuts.
-   Added new _BlockList_ UI element to Property Pane API.
-   Added _inputContextId_ and _inputContextLabel_ optional properties to _ModalToolCreationParameters_ API to represent user defined modal tool identifiers for modal tools.
-   Added interface _KeyBinding_ and modified key binding registration API methods to take this object.
-   Dropdown menus will attempt to open in the opposite direction when they extend beyond the window bounds.
-   Added _variant: ColorPickerVariant_ optional property to _IPropertyItemOptionsColorPicker_ API to support different types of color picker property items. Changed the default variant to respect the pane layout. Moved gradient selector for _Default_ and _Inline_ variants to a popup, accessible by clicking the selected color box.
-   Updated set of entities that appear within the Editor picker
-   Updated set of blocks that appear within the Editor picker
-   Introduced a new filter "is\_navigating" that checks to see if the entity is currently pathfinding. This requires a "minecraft:navigation" component

## General

-   Updated schema documentation for Filter Groups

