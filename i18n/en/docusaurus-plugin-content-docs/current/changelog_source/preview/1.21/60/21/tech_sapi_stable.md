

-   Updated numeric JavaScript enums now properly handle and support reverse value mappings. 
-   Fixed a bug where calling `Player.hideAllExcept` could crash the server.
-   InputPermissions
    -   Moved the following `InputPermissionCategory` enum values to 1.17.0: `LateralMovement`, `Sneak`, `Jump`, `Mount`, `Dismount`, `MoveForward`, `MoveBackward`, `MoveLeft`, and `MoveRight`
    -   Moved the following methods on `PlayerInputPermissions` to 1.17.0:
        -   `isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;`
        -   `setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;`
-   Removed the "compostingChance" available from the ItemStack API. The composting chance for Vanilla items can now be accessed via the singular CompostableItemComponent-\>compostingChance in the Item Component API. 
-   Fixed edge cases where `ModalFormData` scrolls to the bottom when UI is opened.

