

-   _PropertyOutOfBoundsError_
    -   Added a new _PropertyOutOfBoundsError_ that throws when a property that is bounded is set out of bounds
-   _ContainerSlot_ APIs now throw an _InvalidContainerSlotError_ if the container slot is invalid, or if a property is set on an empty slot
-   Property _typeId_ no longer returns undefined for empty slots, but instead throws an _InvalidContainerSlotError_
-   Added function _hasItem_ \- Returns whether the slot contains an item
-   Added function _getCanPlaceOn_ \- Returns an array of block identifiers that the item can be placed on
-   Added function _getCanDestroy_ \- Returns an array of block identifiers that the item can destroy when used

