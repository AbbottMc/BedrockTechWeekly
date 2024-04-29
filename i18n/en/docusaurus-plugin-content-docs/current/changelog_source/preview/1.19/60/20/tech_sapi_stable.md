

-   Container
    -   Added function _clearItem(slot: number): void_\- Clears the item at the given slot index
    -   Added function _clearAll(): void_\- Clears all items in the container
    -   Made the _itemStack_argument of function _setItem_ optional - If not provided, the slot is cleared
    -   Added event _events.playerSpawn_\- Fires when a player spawns in the world
    -   Renamed event _events.entityCreate_to _world.events.entitySpawn_. This event no longer fires for players
-   PlayerJoinEvent
    -   Added read-only property _playerId_\- The unique ID of the player that joined the world
    -   Added read-only property _playerName_\- The name of the player that joined the world
    -   Removed property _player_
-   PlayerLeaveEvent
    -   Added read-only property _playerId_\- The unique ID of the player that left the world
-   SimulatedPlayer
    -   Added function _respawn()_\- Respawns the SimulatedPlayer if it's dead
    -   Added function _disconnect()_\- Removes the SimulatedPlayer from the world
    -   Added function _getSlot(slot: number): ContainerSlot_\- Returns the slot at the given container slot index
-   ContainerSlot
    -   Added class _ContainerSlot_\- Used to directly manipulate items stored within a container
    -   Renamed entity property _viewVector_to _viewDirection_ and now returns Vector3
    -   Renamed entity function g_etEntitiesFromViewVector_to _getEntitiesFromViewDirection_
    -   Renamed entity function _getBlockFromViewVector_to _getBlockFromViewDirection_
-   Renamed _IRawMessage_ to _RawMessage_ for naming consistency

