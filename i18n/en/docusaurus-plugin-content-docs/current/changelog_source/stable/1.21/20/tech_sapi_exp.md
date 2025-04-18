

-   Camera
    -   Added \`CameraFixedBoomOptions\` to the options for the \`setCamera\` function in _beta_
    -   CameraFixedBoomOptions
        -   New interface added to _beta_
        -   Allows you to customize \`minecraft:follow\_orbit\` cameras only when the third person camera presets toggle is enabled
        -   Introduced \`viewOffset?: Vector2\`. This property allows you to change the offset of the camera relative to the player to create an over the shoulder effect
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
    -   EntityBreathableComponent
        -   Changed function _setAirSupply(value: number): void_ to property _airSupply: number_ in _beta_
        -   Added property _readonly canBreathe: boolean_ to _beta_
    -   EntityComponent
        -   Moved class _EntityMovementComponent_ from _beta_ to _1.12.0_
        -   Moved class _EntityLavaMovementComponent_ from _beta_ to _1.12.0_
        -   Moved class _EntityMovementGlideComponent_ from _beta_ to _1.12.0_
        -   Moved class _EntityMovementSwayComponent_ from _beta_ to _1.12.0_
        -   Moved class _EntityUnderwaterMovementComponent_ from _beta_ to _1.12.0_
    -   Added class _PlayerCursorInventoryComponent_ which adds read-only access to the players cursor inventory and the ability to clear it
    -   Added playerEmote which fires after a player uses an emote
    -   Block Custom Components
        -   Use of the ‘onTick’ event requires the block has the ‘minecraft:tick’ component to configure how the block ticks
        -   Blocks that are world generated, and have the ‘minecraft:tick’ component, will now tick
    -   EntityBreathableComponent
        -   Changed function _setAirSupply(value: number): void_ to property _airSupply: number_ in _beta_
        -   Added property _readonly canBreathe: boolean_ to _beta_
    -   Added _isHardcore_ to _1.14.0 beta_

