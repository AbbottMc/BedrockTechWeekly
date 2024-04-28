

-   Camera APIs moved from beta to 1.6.0
    -   Released Entity.is\* API’s from ‘beta’ to ‘1.6.0’
        -   _isSleeping_
        -   _isSneaking_
        -   _isSprinting_
        -   _isSwimming_
        -   _isClimbing_
        -   _isOnGround_
        -   _isInWater_
        -   _isFalling_
    -   Released Player level & XP APIs from ‘beta’ to ‘1.6.0’
        -   _addLevels_
        -   _addExperience_
        -   _level_
        -   _getTotalXP_
        -   _xpEarnedAtCurrentLevel_
        -   _totalXpNeededForNextLevel_
        -   _resetLevel_
    -   Released Player.is\* API’s from ‘beta’ to ‘1.6.0’
        -   _isEmoting_
        -   _isGliding_
        -   _isJumping_
        -   _isFlying_
    -   Updated all methods besides show on ActionFormData, MessageFormData, and ModalFormData to be callable in read-only mode
    -   BlockInventoryComponent
        -   container member variable now correctly reflects it can be a Container or undefined
    -   Fixed a versioning bug preventing @minecraft/server-ui module from working with @minecraft/server above version 1.2.0
    -   WeatherType moved to 1.6.0
        -   Moved function _setWeather_ to 1.6.0
        -   Moved event/property _entityRemove_ from beta to 1.6.0
        -   Moved event/property _entityRemove_ from beta to 1.6.0
    -   Moved class EntityRemovedAfterEvent from beta to 1.6.0
    -   Moved class EntityRemoveAfterEventSignal from beta to 1.6.0
    -   Moved class EntityRemovedBeforeEvent from beta to 1.6.0
    -   Moved class EntityRemoveBeforeEventSignal from beta to 1.6.0
        -   Moved event/property _entityLoad_ from beta to 1.6.0
    -   Moved class EntityLoadAfterEvent from beta to 1.6.0
    -   Moved class EntityLoadAfterEventSignal from beta to 1.6.0
        -   Moved event/property _entitySpawn_ from beta to 1.6.0
    -   Moved enum EntityInitializationCause from beta to 1.6.0
    -   Moved class EntitySpawnAfterEvent from beta to 1.6.0
    -   Moved class EntitySpawnAfterEventSignal from beta to 1.6.0
        -   Moved event/property _playerBreakBlock_ from beta to 1.6.0
        -   Moved event/property _playerBreakBlock_ from beta to 1.6.0
    -   Moved class PlayerBreakBlockAfterEvent from beta to 1.6.0
    -   Moved class PlayerBreakBlockAfterEventSignal from beta to 1.6.0
    -   Moved class PlayerBreakBlockBeforeEvent from beta to 1.6.0
    -   Moved class PlayerBreakBlockBeforeEventSignal from beta to 1.6.0
        -   Moved event/property _playerPlaceBlock_ from beta to 1.6.0
    -   Moved class PlayerPlaceBlockAfterEvent from beta to 1.6.0
    -   Moved class PlayerPlaceBlockAfterEventSignal from beta to 1.6.0
    -   Moved class BlockEventSignalOptions from beta to 1.6.0
        -   Move _isAir(): boolean_ from beta to 1.6.0
        -   Move _isLiquid(): boolean_ from beta to 1.6.0
        -   Moved _amount_ from beta to 1.6.0
        -   Moved _keepOnDeath: boolean_ from beta to 1.6.0
        -   Moved _lockMode: ItemLockMode_ from beta to 1.6.0
        -   Moved _nameTag?: string_ from beta to 1.6.0
        -   Moved _clone(): ItemStack_ from beta to 1.6.0
        -   Moved _getTags(): string\[\]_ from beta to 1.6.0
        -   Moved _hasTag(tag: string): boolean_ from beta to 1.6.0
        -   Moved _setCanDestroy(blockIdentifiers?: string\[\]): void_ from beta to 1.6.0
        -   Moved _getCanDestroy(): string\[\]_ from beta to 1.6.0
        -   Moved _setCanPlaceOn(blockIdentifiers?: string\[\]): void_ from beta to 1.6.0
        -   Moved _getCanPlaceOn(): string\[\]_ from beta to 1.6.0
        -   Moved function _getProperty_ to 1.6.0
        -   Moved function _resetProperty_ to 1.6.0
        -   Moved function _setProperty_ to 1.6.0

## **Editor**

The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with **#BedrockEditor.**

Learn [how to use](https://aka.ms/LearnEditor) the Editor, join the [GitHub Discussion](https://github.com/Mojang/minecraft-editor/discussions) forum to engage with the team, and get started building extensions via the [starter kit](https://github.com/Mojang/minecraft-editor-extension-starter-kit) and [samples](https://github.com/Mojang/minecraft-editor-extension-samples).

## **Introducing this week**...the _first_ iteration towards our v0.5: Edit/Test Lite release! Here’s the need-to-know – read more in the [GitHub Release 0.4.5 notes](https://github.com/Mojang/minecraft-editor/discussions/categories/announcements):

-   Full round-trip edit --\> (play)test experience within the context of the Editor
-   Customize your world conditions for testing
-   Changes you make in the test session will not be saved
-   Marketplace and persona are disabled in the test experience, which is also standard within the Editor
-   Available in single-player (_for now_ 😊)

Additional fixes this week:

-   Fixed a bug in the Selection tool where the Y axis of the Vector3 origin exceeded the dimension height range
-   Fixed a bug where blocks couldn’t be placed in the last block placed location after an undo

## **Entity Components**

-   The “behavior.random\_look\_around\_and\_sit” now has the field “continue\_sitting\_on\_reload” exposed for Creators to use. This is how the Camel stays sitting on reload
-   “behavior.is\_scenting” renamed to generic “behavior.timer\_flag\_1” and released to creators
-   “behavior.is\_rising” renamed to generic “behavior.timer\_flag\_2” and released to creators
-   “behavior.is\_feeling\_happy” renamed to generic “behavior.timer\_flag\_3” and released to creators
-   “behavior.timer\_flag 1”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer\_flag\_1 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
-   “behavior.timer\_flag 2”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer\_flag\_2 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise
-   “behavior.timer\_flag 3”: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event. query.timer\_flag\_3 will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise

## **Mobs**

-   Added a new “query.is\_in\_lava” Query Function to Molang, to know if a mob is currently in Lava

