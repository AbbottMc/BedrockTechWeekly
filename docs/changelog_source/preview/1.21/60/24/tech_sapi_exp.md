

-   `system.scriptEvent` updated to return a new error for exceeding the message size
-   Structure
    -   Added `waterlogged: boolean` parameter to `setBlockPermutation`. This can be used to set whether the specified block within a structure is waterlogged.
-   Removed `ScriptBlockType.canBeWaterlogged` from Beta - instead, `ScriptBlock.canContainLiquid` or `ScriptBlockPermutation.canContainLiquid` can be used to check if a block can be waterlogged.

