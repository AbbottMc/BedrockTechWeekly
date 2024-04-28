

-   Dynamic imports (e.g., import("/my-module.js")) should be functional again
-   _BlockTypes_ will now return valid types for flattened or refactored block names
-   EntityMountTamingComponent
    -   Renamed _EntityMountTamingComponent_ to _EntityTameMountComponent_
    -   Renamed _setTamed_ to _tame_
-   Released _BlockComponentTypes_ from _beta_ to _1.10.0_
-   Released _EntityComponentTypes_ from _beta_ to _1.10.0_
-   Released _ItemComponentTypes_ from _beta_ to _1.10.0_
-   Removed _filters_ as they currently have no backing implementation
-   Fixing some component _isValid_ methods where they didn’t properly return false in cases where the component had been removed from the Entity
-   Added _PaletteColor_ enum to _beta_ for use with _ItemColorComponent_/_ItemColor2Component_
-   Added _ItemColor2Component_ to _beta_ for reading _minecraft:color2_
-   Setting a dynamic property with a key larger than 32kb now will result in an exception
-   Moved _EntityType_ and _EntityTypes_ from _beta_ to _1.11.0_
-   Released _playMusic__,Player.queueMusic_, _Player.stopMusic_ from _beta_ to _1.11.0_
-   Removed _BlockAreaSize_ from _beta_ and replaced usages with _Vector3_
-   Renamed parameter _itemCategory_ in _getItemCooldown_ and _player.startItemCooldown_ to _cooldownCategory_
-   Changed _type_ to only _EnchantmentType_ to follow API guidelines
-   Added _EnchantmentSlot_ and _slots_ to _beta_ for determining the enchantable slots of an item
-   Added ‘minecraft:custom\_components’ block component under the Beta APIs feature flag

