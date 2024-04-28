

-   Entity Components
    -   Added _EntityTypeFamilyComponent_with functions _getTypeFamilies(): string\[\]_ and _hasTypeFamily(typeFamily: string): boolean_
-   Item
    -   Moved _ItemFoodComponent_from _beta_ to _1.9.0_
    -   Added function _matches(itemName: string, states?: Record\<string, boolean | number | string\>): boolean_
-   Removed class _BlockVolumeUtils_. Moving utility functions onto _BlockVolumeBase_and _BlockVolume_
-   Added class _BlockVolumeBase_. Is the base class from which block volumes will extend
-   BlockVolume
    -   **Breaking Change** Converted _BlockVolume_ from an interface to a class which extends _BlockVolumeBase_
-   _@minecraft/server.Entity.playAnimation_
    -   Moved Entity.playAnimation from _beta_ to _stable_
-   Moved enum _BlockPistonState_from _beta_ to _1.9.0_
-   Moved class _BlockPistonComponent_from _beta to 1.9.0_
-   Moved class _PistonActivateAfterEvent_from _beta_ to _1.9.0_
-   Moved class _PistonActivateAfterEventSignal_from _beta to 1.9.0_

