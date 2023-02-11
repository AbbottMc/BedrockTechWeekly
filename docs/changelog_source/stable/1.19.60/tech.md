## **Updated Add-On Template Packs**

- Updated Add-On templates for 1.19.60 with new resources, behaviors, and documentation are available to download at [aka.ms/MCAddonPacks
  ](https://aka.ms/MCAddOnPacks)

## **Performance / Stability**

- Fixed a crash that could occur when teleporting players to other dimensions using commands ([MCPE-164940](https://bugs.mojang.com/browse/MCPE-164940))
- Fixed a crash that could occur when using the “instant_despawn” component
- Fixed a crash that could occur when loading actors

## **General**

- Added a content error for the condition that custom blocks with permutations or properties fail to load in non-experimental worlds for JSON formats 1.19.60 and onwards
- Ensure Block Permutation Conditions cannot have side effects (i.e. 'math.random', 'math.random_integer', and variable assignment)
- Released *BlockSelectionBoxComponent* outside of experimental toggle in json formats 1.19.60 and higher
- Released *BlockDisplayNameComponent* outside of experimental toggle in json formats 1.19.60 and higher
- Ensure Block Permutation Conditions can only use *'query.block_property'* Molang Query
- Fixed albedo color arrays in texture sets for custom blocks ([MCPE-163622](https://bugs.mojang.com/browse/MCPE-163622))

## **Recipes**

- Renamed and converted all Smithing Table recipes to use the newly introduced “minecraft:recipe_smithing_transform” recipe format

## **Particles**

- Updated particles documentation with descriptions of new materials and included example particles in the example resource pack

## **Commands**

- Executing the ‘/say’ command via the new execute syntax now displays the entity’s name that produced the message ([MCPE-161450](https://bugs.mojang.com/browse/MCPE-161450))
- When teleporting a group of leashed mobs using "/tp @e" a far enough distance away to unleash them, all mobs now get properly unleashed ([MCPE-159617](https://bugs.mojang.com/browse/MCPE-159617))
- Fixed a bug causing players to not wake up when teleported while sleeping ([MCPE-162346](https://bugs.mojang.com/browse/MCPE-162346))
- Running ‘/execute if|unless score’ on a player that doesn’t have a score set will now return false ([MCPE-156279](https://bugs.mojang.com/browse/MCPE-156279))
- ‘/execute if|unless score’ no longer accepts selectors that can return multiple entities (ie. @e, @a)

## **Commands (Experimental)**

- Fixed a bug where the @initiator selector would not work with the Upcoming Creator Features experiment enabled ([MCPE-164727](https://bugs.mojang.com/browse/MCPE-164727))

## **Components**

- Released *BlockPlacementFilterComponent* outside of experimental toggle in JSON formats 1.19.60 and higher
- Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters
- Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack
- Projectiles that teleport their owner will no longer do so while their owner is sleeping ([MCPE-161189](https://bugs.mojang.com/browse/MCPE-161189))
- Added "inventory" as a possible "domain" value for the "has_equipment" filter, which allows to check for items stored in the actor's inventory
- Added an "equip_item_slot" field to the "interact" component
  - If set, an item held by the player will be equipped to the specified slot upon successful interaction
  - If an item is already present in the specified slot, it will be moved to the player's inventory
  - Equipping an item removes it from the player's inventory, unless the player is in Creative Mode
- Players now respond correctly to speed changes using the *minecraft:movement* component

## **Actor Filters**

- Created new actor filters "on_fire", "on_hot_block", "target_distance", and "actor_health"

## **AI Goals**

- The "celebrate_survive" AI behavior will now consider the highest rain passable block in addition to sky visibility before firing Fireworks
- The "move_outdoors" AI behavior will now consider the highest rain passable block in addition to sky visibility when searching for a place to consider as being outdoors
- Exposed new data parameters for the "trade_with_player" AI behavior to specify such things as the conditions that need to be met for the goal to start and the max distance the mob can be from its trading player before exiting the goal

## **Particle Effects**

- Fixed a bug causing particles with collision and "expire_on_contact" to not expire when collided
- Added support for mixed color blending on particle effects

## **Molang**

- Added new Molang *query.is_local_player* to allow detection of the current player
- Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead
  - This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.19.60 or higher

## **API (Experimental)**

### **Entities/Players/SimulatedPlayer: Fire, levels, experience, and more**

- Entity
  - Added method *setOnFire(seconds: number, useEffects?: boolean = true): boolean)* which sets an entity on fire (if it is not in water or rain)
  - Added method *extinguishFire(useEffects?: boolean = true): void* which extinguishes the fire
  - If an entity is on fire, you can call *getComponent('minecraft:onfire')* on it, which returns an object of type *EntityOnFireComponent*, which has a property *onFireTicksRemaining*
  - Fixed a bug where *viewDirection* would return the direction from the previous tick
  - Fixed a bug where *getEntitiesFromViewDirection* would use the direction from the previous tick
  - Fixed a bug where *getBlockFromViewDirection* would use the direction from the previous tick
  - Fixed a bug where *headLocation* would return the location from the previous tick
  - Fixed a bug where the *getEffect* method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)
  - Added method *getEffects*which returns an array of all active effects on the entity
- EntityHealthComponent
  - Fixed a bug where health could be modified on dead entities ([MCPE-130687](https://bugs.mojang.com/browse/MCPE-130687))
- Player
  - Added function *addLevels(amount: number): number* - Adds/Removes level to/from the player and returns the current level of the player
  - Added function *addExperience(amount: number): number* - Adds/Removes experience to/from the player and returns the current experience of the player
  - Added function *resetLevel(): void* - Resets the level of the player
  - Added function *getTotalXp(): number* - Gets the total experience of the player
  - Added read-only property *level* - Gets the level of the player
  - Added read-only property *xpEarnedAtCurrentLevel* - Gets the experience earned at the current level of the player
  - Added read-only property *totalXpNeededForNextLevel* - Gets the total experience required for the current level of the player
- Simulated Player
  - Added property *isSprinting*- Used to get or set if the sprinting state of the simulated player is set to true
- Added function *respawn()*- Respawns the SimulatedPlayer if it's dead
- Added function *disconnect()*- Removes the SimulatedPlayer from the world

### **Blocks & Redstone**

- Added function *getRedstonePower(): number* - Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined

### **Fill Block APIs**

- Added function *dimension.fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number*
- Fills an area between *begin* and *end* with block of type *block*. Returns number of blocks placed
- Added new interface *BlockFillOptions* with member matchingBlock?: BlockPermutation | BlockType

  - Used with *fillBlocks* to apply additional options, such as only filling blocks matching *matchingBlock*

### **Command to script message passing**

- Added the '/scriptevent' command as part of the Beta APIs experiment. This is what will trigger *events.scriptEventReceive* events (see below)

  - Usage: /scriptevent <messsageId: string> [message: ???]
- messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my_scripts:spawn_sheep")
  - message is optional, with a max length of 256 characters

- events.scriptEventReceive

  - Added system event *events.scriptEventReceive*
  - Added read-only property *id: String* - The namespaced ID of the event
  - Added read-only property *message: String* - The content of the message the event was sent with
  - Added read-only property *sourceBlock: Block* - The command block that triggered/executed the command call if applicable, otherwise undefined
  - Added read-only property *sourceEntity: Entity* - The player/entity that executed the command call if applicable, otherwise undefined
  - Added read-only property *initiator: Entity* - The player that caused an NPC to execute the command call if applicable, otherwise undefined
  - Added read-only property *sourceType: MessageSourceType* - The type of source the event was triggered by
  - *subscribe()*can filter by valid namespace string using the *ScriptEventMessageFilterOptions* class

- ScriptEventMessageFilterOptions

  - Added *ScriptEventMessageFilterOptions* class
  - Added property *namespaces: string[]* - An array of namespaces to filter on

### **Item Stacks**

- ContainerSlot
  - Added class *ContainerSlot* - Used to directly manipulate items stored within a container
  - Renamed entity property *viewVector* to *viewDirection* and now returns Vector3
  - Renamed entity function g*etEntitiesFromViewVector* to *getEntitiesFromViewDirection*
  - Renamed entity function *getBlockFromViewVector* to *getBlockFromViewDirection*
- Container
  - Added function *getSlot(slot: number): ContainerSlot* - Returns the slot at the given container slot index
  - Added function *clearItem(slot: number): void* - Clears the item at the given slot index
  - Added function *clearAll(): void* - Clears all items in the container
  - Made the *itemStack*argument of function *setItem* optional - If not provided, the slot is cleared
  - Added event *events.playerSpawn* - Fires when a player spawns in the world
  - Renamed event *events.entityCreate* to *world.events.entitySpawn*. This event no longer fires for players

### **Refactored and Improved Player events**

- PlayerJoinEvent
  - Added read-only property *playerId* - The unique ID of the player that joined the world
  - Added read-only property *playerName* - The name of the player that joined the world
  - Removed property *player*
- PlayerLeaveEvent
  - Added read-only property *playerId* - The unique ID of the player that left the world

### **Say/Tell/sendMessage APIs**

- Renamed *IRawMessage* to *RawMessage* for naming consistency
- RawMessage
  - Changed the signature of property with from *(string[] | RawMessage)[]?* to *(string[] | RawMessage)?*

### **Scoreboard get/set value APIs**

- Scoreboard
  - Added *setScore(ScoreboardObjective, ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardObjective, ScoreboardIdentity)*
- ScoreboardObjective
  - Added *setScore(ScoreboardIdentity, Number)*
  - Added *getScore(ScoreboardIdentity)*
  - Added *removeParticipant(ScoreboardIdentity)*
- ScoreboardIdentity
  - Added *setScore(ScoreboardObjective, Number)*
  - Added *getScore(ScoreboardObjective)*
  - Added *removeFromObjective(ScoreboardObjective)*

### **EntityHurtEvent updates**

- Added read-only property *damageSource: EntityDamageSource* - Gets information about the damage source
- EntityDamageSource
  - Added property *cause: EntityDamageCause* - Gets the damage cause
  - Added property *damagingEntity?: Entity* - Gets the damaging Entity
  - Added property *damagingProjectile?: Entity* - Gets the damaging projectile Entity
  - Added function *applyDamage(amount: number, source?: EntityDamageSource): boolean* - Applies damage to the Entity and returns the result of the operation