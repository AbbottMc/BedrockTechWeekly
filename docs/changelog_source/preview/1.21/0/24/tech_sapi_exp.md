

-   Fixed issue where block with custom components could not have a block placed onto them without crouching
-   Added new interface _VectorXZ_
-   Added method _getTopmostBlock_which will perform a raycast from the top of the world downwards, trying to find the first solid block
-   Added method _getBlockAbove_which will perform a raycast from a given position, trying to find the first solid block above
-   Added method _getBlockBelow_which will perform a raycast from a given position, trying to find the first solid block below