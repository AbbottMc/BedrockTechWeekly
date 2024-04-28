

-   Removed _EntityHealableComponent.filters_ as they currently have no backing implementation
-   Fixing some component _isValid_ methods where they didn’t properly return false in cases where the component had been removed from the Entity.
-   Added _PaletteColor_ enum to _beta_ for use with _ItemColorComponent/ItemColor2Component_
-   Added _ItemColor2Component_ to _beta_ for reading _minecraft:color2_
-   Setting a dynamic property with a key larger than 32kb now will result in an exception

