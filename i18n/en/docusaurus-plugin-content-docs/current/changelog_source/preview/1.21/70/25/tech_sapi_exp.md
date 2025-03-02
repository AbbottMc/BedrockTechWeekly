

-   `BlockMapColorComponent` scripting API is now read-only
-   `BlockMapColorComponent` scripting API fields color and tintMethod are now properties instead of methods
-   Fixed an issue where native constructors were not properly checking privileges when being called. Constructors now check privileges properly and produce correct errors when being used in Early Execution privilege.
-   Deprecated `ItemUseOnBeforeEvent` in `@minecraft/server` 2.0.0-beta. Use `PlayerInteractWithBlockBeforeEvent` instead
-   Deprecated `ItemUseOnAfterEvent` in `@minecraft/server` 2.0.0-beta. Use `PlayerInteractWithBlockAfterEvent` instead
-   `BlockDestructionParticlesComponent` API has been added to `@minecraft/server` 2.0.0-beta
-   `EntityScaleComponent` has been changed to read-only in version 2.0.0-beta

