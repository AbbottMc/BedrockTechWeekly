

-   Dynamic Property identifiers are now limited to 1024 characters.
-   Removed MinecraftEffectTypes defined in _@minecraft/server. See @minecraft/vanilla-data NPM package for an equivalent._

_Moved several APIs to stable 1.3.0:_

-   Moving _tryTeleport(location: Vector3, duration: number, options: ScriptTeleportOptions)_ to _1.3.0_
-   Moving _teleport(location: Vector3, options: ScriptTeleportOptions)_ to _1.3.0_
-   Moved function _getComponent_ to _1.3.0_
-   Moved world event _PlayerJoinAfterEvent_ to _1.3.0_
-   Moved world event _PlayerLeaveAfterEvent_ to _1.3.0_
-   Moved world event _PlayerSpawnAfterEvent_ to _1.3.0_
-   Moved EntityComponent _EntityHealableComponent_ to _1.3.0_
-   Moved EntityComponent _EntityHealthComponent_ to _1.3.0_
-   Moved class _FeedItem_ to _1.3.0_
-   Moved class _FeedItemEffect_ to _1.3.0_
-   Moving _addEffect(effectType: string | EffectType, duration: number, options: EntityEffectOptions)_ to _1.3.0_
-   Moved _getEffect(effectType: string | EffectType)_ to _1.3.0_
-   Moved _getEffects_ to _1.3.0_
-   Moved _removeEffect(effectType: string | EffectType)_ to _1.3.0_
-   AfterEvents
    -   Moving _ButtonPushEvent_ to _1.3.0_
    -   Moving _LeverActivateEvent_ to _1.3.0_
-   Moved function _spawnEntity_ to _1.3.0_
-   Moved function _spawnItem_ to _1.3.0_

_Spawn Point Updates:_

-   Removed function _clearSpawn_
-   Removed property _spawnDimension_
-   Added function _getSpawnPoint: DimensionLocation | undefined_\- Returns the player's spawn point
-   Added function _setSpawnPoint(spawnPoint?: DimensionLocation): void_\- Sets the player's spawn point, or clears it if _spawnPoint_ is _undefined_
-   Renamed function _getDefaultSpawnPosition_ to _getDefaultSpawnLocation_
-   Renamed function _setDefaultSpawn_ to _setDefaultSpawnLocation_
-   DimensionLocation
    -   Added new interface _DimensionLocation_\- Represents a location in a dimension
-   Added _hasParticipant_ function to _ScoreboardObjective_.
-   The following functions in _ScoreboardObjective_ can now accept _Entity_ or _string_ types as _participants_:
    -   _getScore_
    -   _setScore_
    -   _removeParticipant_
-   Removed _getScore_, _setScore_ from _ScoreboardIdentity_ and _Scoreboard_.

Removed the _removeFromObjective_ function from _ScoreboardIdentity_.

-   Fixed bug where scoreboard values would not be updated on the client when updated from script.
-   Raycasting
    -   Changed function _getBlockFromRay_
        -   Changed return type from _Block_ to _BlockRaycastHit | undefined_
    -   Changed function _getEntitiesFromRay_
        -   Changed return type from _Entity\[\]_ to _EntityRaycastHit\[\]_
    -   Changed function _getBlockFromViewDirection_
        -   Changed return type from _Block_ to _BlockRaycastHit | undefined_
    -   Changed function _getEntitiesFromViewDirection_
        -   Changed return type from _Entity\[\]_ to _EntityRaycastHit\[\]_
    -   Added interface _BlockRaycastHit_
    -   Added interface _EntityRaycastHit_
-   Renamed leverActivate after event to leverAction
    -   Removed class _EntityHitAfterEvent_.
    -   Added class _EntityHitBlockAfterEvent_
    -   Added class _EntityHitEntityAfterEvent_
    -   Class _WorldAfterEvents_
        -   Removed property _entityHit_
        -   Added property _entityHitBlock_
        -   Added property _entityHitEntity_
    -   Added helper function _isValid_ to several classes in order to check if the object is valid. This can safely be used on any handle to a native object before accessing or using the object, to ensure the underlying object still exists and is valid to use.
        -   Block (checks the block is a valid position in bounds and the containing chunk is loaded & ticking)
        -   Container (checks the relevent container inventory exists and is valid)
        -   Effect (checks the owning entity is valid and the effect exists on that entity)
        -   ScreenDisplay (checks the owning player is valid)
        -   ScoreboardObjective (checks the objective entry exists and is attached to a valid scoreboard)
        -   Entity (checks that the entity exists in the world. Will return true if the entity is dead)
            -   Player
            -   SimulatedPlayer (Note simulated players do not automatically get removed from the world, so _isValid_ will return true long after they are dead)
        -   ContainerSlot (checks the item context is valid: Container exists in the world, such as the owning entity, and the slot is within the container bounds)
            -   Already existed as a readonly property, changed to a method for consistency
        -   Component
            -   EntityAttributeComponent (checks the owning entity is valid and the attribute exists on the entity)
            -   BlockLiquidContainerComponent (checks block exists and is a valid cauldron type)
                -   Added read only method _isValidLiquid_ which checks if the liquid in the cauldron matches the component in question (EG. BlockLavaContainerComponent checks for lava liquid)
            -   EntityComponent (checks the owning entity exists)
            -   ItemComponent (checks the owning item exists)

-   World
-   Renamed _getTime_ to _getTimeOfDay_.
-   Renamed _setTime_ to _setTimeOfDay_.
-   _setTimeOfDay_ now accepts a _TimeOfDay_ enum as an argument.
-   The _timeOfDay_ argument for _setTime_ must now be within 0-23999 (inclusive).
-   Added _getDay_

Updated the following enums' values to be PascalCase instead of camelCase:

-   _ClipboardMirrorAxis_
-   _ClipboardRotation_
-   _HttpRequestMethod_
-   _FormCancelationReason_
-   _Direction_
-   _DisplaySlotId_
-   _EntityLifetimeState_
-   _FluidType_
-   _ObjectiveSortOrder_
-   _ScoreboardIdentityType_
-   _ScriptEventSource_
-   _SignSide_
-   _WatchdogTerminateReason_
-   _WeatherType_ 

