

-   System Events
    -   Further separation of events into distinct before\* and after\* handling, with some restrictions on the execution of state updates in a before event:
    -   All before events moved from _events_ into _world.beforeEvents_ property. The "before" prefix has been removed. Functions that alter world state are prohibited in before event callbacks. Read-only methods and properties are allowed. Set methods are limited to the event object itself. Any use of restricted methods and properties will throw an exception.
    -   For example, _events.beforeWatchdogTerminate_ is now considered a "before" event. Functions that alter world state are prohibited in before event callbacks. Read-only methods and properties are allowed. Set methods are limited to the event object itself. Any use of restricted methods and properties will throw an exception
    -   For example, _events.scriptEventReceived_ is now considered an "after" event. After event callbacks are executed in a deferred manner. Using _/scriptEvent something_ will queue script to execute at a later point
-   Renamed Scripting Events
    -   Before Events renamed to _\*BeforeEvent_ and event signals renamed to _\*BeforeEventSignal_
        -   Example: _BeforeItemUseEvent_ renamed to _ItemUseBeforeEvent_ and _BeforeItemUseEventSignal_ renamed to _ItemUseBeforeEventSignal_
    -   Other events renamed to _\*AfterEvent_ and event signals renamed to _\*AfterEventSignal_
        -   Example: _WeatherChangedEvent_ renamed to _WeatherChangedAfterEvent_ and _WeatherChangedEventSignal_ renamed to _WeatherChangedAfterEventSignal_
    -   _chat_ event renamed to _chatSend_
        -   _events.beforeChat_ renamed to _world.events.beforeChatSend_
        -   _events.chat_ renamed to _world.events.chatSend_
        -   _BeforeChatEvent_ renamed to _ChatSendBeforeEvent_
        -   _BeforeChatEventSignal_ renamed to _ChatSendBeforeEventSignal_
        -   _ChatEvent_ renamed to _ChatSendAfterEvent_
        -   _ChatEventSignal_ renamed to _ChatSendAfterEventSignal_
    -   Fixed a bug where _resolve()_ would fail to resolve custom block properties
    -   Renamed _scoreboard_ to _Entity.scoreboardIdentity_
    -   Item Events
        -   The _ItemStartUseOnEvent_ now only fires for the first block that is interacted with when performing a build action
        -   The _ItemUseOnEvent_ now only fires if the item is successfully used on a block
        -   _ItemUseOnEvent_ property _blockLocation: Vec3_ has been changed to _block: Block_
        -   _ItemStartUseOnEvent_ property _blockLocation: Vec3_ has been changed to _block: Block_
        -   _ItemStopUseOnEvent_ property _blockLocation: Vec3_ has been changed to _block: Block_
        -   _ProjectileHitEvent_ property _faceLocation: Vec2_ has been changed to _faceLocation: Vec3_ - This position is relative to the bottom north-west corner of the block
        -   _ItemUseOnEvent_ property _faceLocation: Vec2_ has been changed to _faceLocation: Vec3_ - This position is relative to the bottom north-west corner of the block
    -   Entity
        -   Added interface _teleportOptions \{dimension?: Dimension, rotation?: Vector2, keepVelocity?: boolean, facingLocation?: Vector3, checkForBlocks?: boolean\}_
        -   Added interface _Vector2 \{x: number, y: number\}_
        -   Added function _tryTeleport(location: Vector3, teleportOptions?: teleportOptions) : boolean_ - Attempts to teleport the entity and returns false if the entity is unable to teleport safely (blocks surrounding teleport location or unloaded chunk)
        -   Changed function _teleport_ to _teleport(location: Vector3, teleportOptions?: teleportOptions) : void_ - Teleports an entity
    -   _Changed function setRotation to setRotation(rotation: Vector2) : void_ - Sets the entity's rotation
    -   Changed function _getRotation_ to _getRotation() : Vector2_ - Gets the entity's rotation
    -   Updated function _addTag(tag: string): boolean_ - The tag must be less than 256 characters
    -   Updated method _kill_ to return boolean instead of void. If return value is true, entity can be killed, otherwise false
    -   Added interface _EntityApplyDamageOptions_. Additional options about the source of damage to use as input in _applyDamage_
    -   Added interface _EntityApplyDamageByProjectileOptions_. Additional options about the source of damage to use as input in _applyDamage_ in case of projectile damage
        -   Updated method _applyDamage_. Renamed parameter _source_ to _options_. Parameter type also changed from _EntityDamageSource_ to _EntityApplyDamageOptions | EntityApplyDamageByProjectileOptions_
    -   SimulatedPlayer
        -   Changed function _getHeadRotation_ to _getHeadRotation() : Vector2_ - Gets the simulated players head rotation
    -   _TitleDisplayOptions_ will now accept floating point values
    -   Added new _WorldSoundOptions_ and _PlayerSoundOptions_ interface types for use with the _playSound_ and _player.playSound_ respectively
        -   _playSound_ now requires a _location_ argument
        -   When calling _playMusic_ and _queueMusic_, an error will now be thrown if _volume_ is less than _0.0_
        -   When calling _playMusic_ and _queueMusic_, an error will now be thrown if _fade_ is less than _0.0_
        -   When calling _playSound_, an error will now be thrown if _pitch_ is less than _0.01_
        -   When calling _playSound_, an error will now be thrown if _volume_ is less than _0.0_
        -   When calling _playSound_, an error will now be thrown if _pitch_ is less than _0.01_
        -   When calling _playSound_, an error will now be thrown if _volume_ is less than _0.0_
    -   Removed "dye\_powder" item component
    -   Entity objects now persist across dimension changes and chunk reloading. This means that if you have a reference to an invalid Entity, it will become usable once the Entity has been transferred or reloaded. You can check whether an Entity is loaded or unloaded by reading its _lifetimeState_ property
    -   Added read-only property _lifetimeState_ - Returns the lifetime state of the Entity. Valid values include "loaded" and unloaded"
    -   ItemDefinitionTriggeredEvent
        -   Renamed property _item_ to _itemStack_
    -   ItemStartUseOnEvent
        -   Renamed property _item_ to _itemStack_
        -   Replaced function _getBlockLocation_ with read-only _property_ _blockLocation: Vector3_
        -   Removed function _getBuildBlockLocation_
    -   ItemStopUseOnEvent
        -   Renamed property _item_ to _itemStack_
        -   Replaced function _getBlockLocation_ with read-only _property_ _blockLocation: Vector3_
    -   ItemUseEvent
        -   Renamed property _item_ to _itemStack_
    -   ItemUseOnEvent
        -   Renamed property _item_ to _itemStack_
        -   Replaced function _getBlockLocation_ with read-only property _blockLocation: Vector3_
        -   Replaced properties _faceLocationX_ and _faceLocation_ with read-only property _faceLocation: Vector2_
    -   BlockHitInformation
        -   Replaced properties _faceLocationX_ and _faceLocation_ with read-only property _faceLocation: Vector2_