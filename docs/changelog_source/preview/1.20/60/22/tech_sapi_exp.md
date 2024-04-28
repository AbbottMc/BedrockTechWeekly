

-   Added method _eatItem(itemStack: ItemStack): void;._
-   BlockSignComponent
    -   Changed signature of function _setWaxed_ to _setWaxed(waxed: boolean)_
    -   Removed event/property _pistonActivate_
-   Added enum BlockPistonState export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting" }
-   Class BlockPistonComponent
    -   Removed property isExpanded
    -   Removed property isExpanding
    -   Removed property isRetracted
    -   Removed property isRetracting
    -   Added property _readonly state: BlockPistonState_
    -   Changed function _getAttachedBlocks_ to _return type Block\[\]_
    -   Added function _getAttachedBlocksLocations(): Vector3\[\]_
-   Removed class _PistonActivateBeforeEvent_
-   Removed class _PistonActivateBeforeEventSignal_
-   Types
    -   Moved BlockType from _beta_ to _1.8.0_
    -   Moved FluidType from _beta_ to _1.8.0_
-   Moved _NavigationResult_ from _@minecraft/server_ to _@minecraft/server-gametest_

