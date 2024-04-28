

-   Block Custom Components – see [https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents](https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents) 
    -   Added _BlockComponentStepOnEvent_ for _beta_
    -   Added _BlockRegistry_ for _beta_
    -   Added _WorldInitializeBeforeEvent_
    -   Added _BlockCustomComponent_
-   Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command
-   Added class _ListBlockVolume_ which extends _BaseBlockVolume_ \- A volume that stores multiple block locations
-   Structure
    -   Renamed class _StructureTemplate_ to _Structure_
    -   Added read-only property _size: Vector3_ - Returns the size of the structure in blocks
    -   Added function _getBlockPermutation(location: Vector3): BlockPermutation | undefined;_ - Returns the block permutation at the given location within the structure
    -   Added function _isValid(): boolean_ - Returns false if the structure has been deleted
    -   Added function _getIsWaterlogged(location: Vector3): boolean;_ - Returns whether the block at the given location is waterlogged