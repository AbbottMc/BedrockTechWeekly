

-   Fixed an issue where @minecraft/server-ui version 1.3.0 was not accessible

## Editor

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **#BedrockEditor**. Learn [how to use](https://learn.microsoft.com/en-us/minecraft/creator/documents/editoroverview?view=minecraft-bedrock-stable)  the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions)  forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit)  and [samples](https://github.com/Mojang/minecraft-editor-extension-samples) .

Updates this week:

-   Added `Water` dropdown inside the `Deferred Lighting Settings` panel.
-   Added `Export` pane inside the file menu to allow customizing world settings before exporting to file.
-   Updated Brush Tool with additional features and improved performance.
    -   Added `Single Block` brush shape to allow more fine grain editing.
    -   Added `Masking Mode` to customize how brushes interact with the world.
        -   `Replace` will create a list of blocks that will be replaced when brushing. Blocks not in this list will not be impacted.
        -   `Mask` will create a list of blocks that will be masked/ignored when brushing. Only blocks not in the list will be impacted.
-   Added `IRootPropertyPane` and `ISubPanePropertyItem` interfaces to improve property pane API usability 
    -   Renamed `createPropertyPane` and `removePropertyPane` functions for `IPropertyPane` to `createSubPane` and `removeSubPane`.
    -   Added action button support for root property pane header.
    -   Added visual customization support for sub panes.
-   Added Ruler tool for measuring distances with new client widget framework.
-   Added constraint on the weight value in a Block palette item. Valid values are in the range \[1,100\]. 
-   Added missing Widget binding export 

