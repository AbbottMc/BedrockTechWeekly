

-   _WorldInitializeBeforeEvent_
    -   Renamed property _blockTypeRegistry_ to _blockComponentRegistry_
-   Moved _BlockComponentRegistry_ from _beta_ to _1.12.0_
-   Moved _BlockCustomComponentAlreadyRegisteredError_ from _beta_ to _1.12.0_
-   Moved _BlockCustomComponentReloadVersionError_ from _beta_ to _1.12.0_
-   Moved _BlockCustomComponentReloadNewEventError_ from _beta_ to _1.12.0_
-   Moved _BlockCustomComponentReloadNewComponentError_ from _beta_ to _1.12.0_
-   Moved _BlockCustomComponent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentStepOnEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentTickEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentRandomTickEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentEntityFallOnEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentStepOffEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentPlayerInteractEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentPlayerPlaceBeforeEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentPlayerDestroyEvent_ from _beta_ to _1.12.0_
-   Moved _BlockComponentOnPlaceEvent_ from _beta_ to _1.12.0_
-   Added four new error class types used for custom block component registration
    -   _ScriptBlockCustomComponentAlreadyRegisteredError_ - When registering a custom block component and it has already been registered
    -   _ScriptBlockCustomComponentReloadVersionError_ - When registering a custom block component with a different script version between reloading
    -   _ScriptBlockCustomComponentReloadNewEventError_ - When registering a custom block component and it implements a new event between reloading
    -   _ScriptBlockCustomComponentReloadNewComponentError_ - When registering a custom block component between reloading
-   Added _Block::getMapColor_ binding to Script Block API (Beta)

