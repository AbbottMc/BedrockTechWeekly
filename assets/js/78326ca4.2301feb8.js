"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66763,21032],{17524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(74848),s=t(28453);t(59938);const r={},l=void 0,o={id:"changelog_source/stable/1.18/30/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.18/30/tech.mdx",sourceDirName:"changelog_source/stable/1.18/30",slug:"/changelog_source/stable/1.18/30/tech",permalink:"/docs/changelog_source/stable/1.18/30/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/30/tech.mdx",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>RenderDragon</strong>",id:"renderdragon",level:2},{value:"<strong>Additional Modding Capabilities Experiment/JavaScript APIs</strong>",id:"additional-modding-capabilities-experimentjavascript-apis",level:2},{value:"<strong>Changes</strong>",id:"changes",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>WebSocket</strong>",id:"websocket",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>mojang-minecraft module updates:</strong>",id:"mojang-minecraft-module-updates",level:2},{value:"<strong>mojang-gametest module:</strong>",id:"mojang-gametest-module",level:2}];function c(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"updated-add-on-template-packs",children:(0,i.jsx)(n.strong,{children:"Updated Add-On Template Packs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Updated Add-On templates for 1.18.30 with new resources, behaviors, and documentation, are available to download at ",(0,i.jsx)(n.a,{href:"https://aka.ms/MCAddOnPacks",children:"aka.ms/MCAddonPacks"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"renderdragon",children:(0,i.jsx)(n.strong,{children:"RenderDragon"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With the release of RenderDragon for Android, iOS, Nintendo Switch, and Win10 UWP x86, HAL will no longer be available on these platforms. We know the community has found ways to build shaders on top of HAL and with this change, these shaders will no longer function. We understand that this is a valuable feature for players and the creator community, and we are working on how we may be able to deliver this sort of creative capability to players and creators in an officially supported way. While we have nothing to share right now, look out for more details in the future."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-modding-capabilities-experimentjavascript-apis",children:(0,i.jsx)(n.strong,{children:"Additional Modding Capabilities Experiment/JavaScript APIs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Important!"})," In this release, we are removing the Additional Modding Capabilities experiment. This experiment contained experimental JavaScript APIs launched in 2018 \u2013 and with this removal, JavaScript within worlds associated with this API will no longer function. GameTest Framework \u2013 a separate JavaScript API \u2013 should not be impacted, nor should behavior pack/resource pack type add-ons more broadly."]}),"\n",(0,i.jsxs)(n.li,{children:["You can read more about this ",(0,i.jsx)(n.a,{href:"https://aka.ms/mcamc",children:"via this article"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"changes",children:(0,i.jsx)(n.strong,{children:"Changes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'A world with "StorageVersion" 8 or lower will be increased to 9 and have its "RandomSeed" upgraded from using only the lower 32 bits of a 64-bit number to using the full 64-bit range while still representing the same number. This is only relevant for negative 32-bit seeds, which need a sign bit extension'}),"\n",(0,i.jsx)(n.li,{children:"The world loading screen now shows progress when loading ticking areas marked for preload"}),"\n",(0,i.jsx)(n.li,{children:"Experimental: Volume definitions are now stored and read from Behavior Packs instead of being part of the level directory"}),"\n",(0,i.jsx)(n.li,{children:'Experimental: Added an optional "mob_amount" parameter to the Damage Event Response that specifies a unique damage amount when used by mobs'}),"\n",(0,i.jsxs)(n.li,{children:['Due to engine limitations, "minecraft',":geometry",'" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the [0,0,0] to [15,15,15] space. Any blocks loaded from Behavior Packs that exceed this limit will render as the info_update block and show a content error in the log']}),"\n",(0,i.jsx)(n.li,{children:"The Interact component now has two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob"}),"\n",(0,i.jsx)(n.li,{children:"Removed\xa0_preventsjumping_component from data-driven blocks"}),"\n",(0,i.jsxs)(n.li,{children:["Removed ",(0,i.jsx)(n.em,{children:"BlockImmovable"}),", ",(0,i.jsx)(n.em,{children:"BlockBreakOnPush"}),", and ",(0,i.jsx)(n.em,{children:"BlockOnlyPistonPush"})," components from data-driven blocks"]}),"\n",(0,i.jsxs)(n.li,{children:["Limited the number of elements in the\xa0_crafting_tags_field of ",(0,i.jsx)(n.em,{children:"CraftingTableComponent"})," to 64"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:(0,i.jsx)(n.strong,{children:"Fixes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Biome-specific fog settings can once again be defined"}),"\n",(0,i.jsx)(n.li,{children:'Fixed actor definition identifiers not being recognized if the item or block name contains "."'}),"\n",(0,i.jsxs)(n.li,{children:["Mobs that are riding a boat, for example, can no longer use JumpToBlockGoal (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-150750",children:"MCPE-150750"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Custom mobs with a format version lower than 1.18.20 and using the\xa0_minecraft",":behavior",".knockback_roar_component will parse like before if it contains an extra field that the engine didn't expect"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed an issue in the Knockback goal where the incorrect owner was being passed into the filter evaluate function"}),"\n",(0,i.jsxs)(n.li,{children:["Weapon events are now correctly applied when the weapons are used by mobs (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-118692",children:"MCPE-118692"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["JumpToBlock behavior is now correctly affected by JumpBoost mob effect (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-137432",children:"MCPE-137432"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed a case where experimental BlockCollisionComponents did not allow partial specification"}),"\n",(0,i.jsx)(n.li,{children:"Rotation when riding a mob that has a locked rotation will no longer unexpectedly snap to one side when that mob is rotating"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:(0,i.jsx)(n.strong,{children:"Commands"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed an issue that would cause commands to affect players in all dimensions (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-152218",children:"MCPE-152218"}),")"]}),"\n",(0,i.jsx)(n.li,{children:'Added the "hasitem" filter for target selector of entities. This allows the player to target entities based on the items that have in their inventory or are wearing'}),"\n",(0,i.jsx)(n.li,{children:"Added '/tickingarea' command preload overload"}),"\n",(0,i.jsxs)(n.li,{children:["The '/tickingarea' command no longer modifies areas from entities with the ",(0,i.jsx)(n.em,{children:"tick_world"})," component"]}),"\n",(0,i.jsx)(n.li,{children:"Entities must now be loaded for an area to be considered fully loaded and ticking"}),"\n",(0,i.jsx)(n.li,{children:"Added a new '/volumearea ' command to create, remove, and list volumes in the world"}),"\n",(0,i.jsxs)(n.li,{children:["Using '/playanimation' command now properly plays animations on the paper doll and inventory character (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-137353",children:"MCPE-137353"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Correct error output is now displayed when attempting to use the '/loot' spawn command when passing in the position of an unloaded area and there is 0 loot to drop"}),"\n",(0,i.jsx)(n.li,{children:"Added '/loot ' command insert loot and insert kill overload"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ai-goals",children:(0,i.jsx)(n.strong,{children:"AI Goals"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Exposed new data parameter "calculate_new_path_radius" for GoHomeGoal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home'}),"\n",(0,i.jsx)(n.li,{children:"Added Knockback Height Cap value to KnockbackRoarGoal"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"websocket",children:(0,i.jsx)(n.strong,{children:"WebSocket"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"JSON format for events sent from websocket server and Code Builder APIs updated to hierarchical JSON format instead of flat format"}),"\n",(0,i.jsx)(n.li,{children:"Less useful properties removed with block and item IDs moved to newer name-based format instead of numerical format"}),"\n",(0,i.jsxs)(n.li,{children:['Agent-based commands in websockets moved to new "action',":agent",'" format, and all commands are now queued and include unique ids to correlate responses']}),"\n",(0,i.jsx)(n.li,{children:'Any future breaking changes to websocket and Code Builder APIs will now result in the "protocolVersion" being incremented'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"molang",children:(0,i.jsx)(n.strong,{children:"Molang"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Molang expressions inside animation scripts for actor resource definition (pre_animation and initialize) that contain capital letters are properly evaluated now with format_version 1.18.20 or higher"}),"\n",(0,i.jsx)(n.li,{children:"Clarified documentation for query.is_item_name_any that the slot index is required when there is more than one slot, i.e. the hotbar"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.18.20 or higher"}),"\n",(0,i.jsxs)(n.li,{children:["For example,\xa0_A && B || C_now evaluates as\xa0",(0,i.jsx)(n.em,{children:"(A && B) || C"}),"\xa0and\xa0",(0,i.jsx)(n.em,{children:"A < B == C > D"}),"\xa0now evaluates as\xa0",(0,i.jsx)(n.em,{children:"(A < B) == (C > D)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gametest-framework-experimental",children:(0,i.jsx)(n.strong,{children:"GameTest Framework (Experimental)"})}),"\n",(0,i.jsxs)(n.p,{children:["New Module! We added a ",(0,i.jsx)(n.strong,{children:"mojang-minecraft-ui"})," module with API structures for creating simple dialog boxes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Added"})," ",(0,i.jsx)(n.em,{children:"ActionFormData/ModalFormData/MessageFormData"})," types in the mojang-minecraft-ui namespace. Documentation is available on ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui",children:"the Minecraft Creator documentation site"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mojang-minecraft-module-updates",children:(0,i.jsx)(n.strong,{children:"mojang-minecraft module updates:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["World","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Changed return type of function\xa0",(0,i.jsx)(n.em,{children:"getPlayers__to"}),"\xa0",(0,i.jsx)(n.em,{children:"PlayerIterator"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"playSound(soundName: String, soundOptions: SoundOptions): void"}),"- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added ",(0,i.jsx)(n.em,{children:"queueMusic(trackName : string, musicOptions : MusicOptions)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added ",(0,i.jsx)(n.em,{children:"playMusic(trackName : string, musicOptions : MusicOptions)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added ",(0,i.jsx)(n.em,{children:"stopMusic()"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added MusicOptions JS class with ",(0,i.jsx)(n.em,{children:"volume"}),"_,_ ",(0,i.jsx)(n.em,{children:"fadeSeconds"})," and ",(0,i.jsx)(n.em,{children:"loop"})," properties"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dimension","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added\xa0_id_property"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added\xa0_MinecraftDimensionTypes_with constants for built-in dimension IDs"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added\xa0_spawnItem_to spawn an ItemStack in the dimension"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Player","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function ",(0,i.jsx)(n.em,{children:"playSound(soundID : String, soundOptions : SoundOptions)"})," - Plays a sound for a player, cannot be heard by entities other than that specific player"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Events","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Updated property\xa0_direction_to\xa0",(0,i.jsx)(n.em,{children:"blockFace"}),"\xa0in world.events.beforeItemUseOn and world.events.itemUseOn"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added event ",(0,i.jsx)(n.em,{children:"beforeDataDrivenEntityTriggerEvent"})," - Fires before the data driven trigger is applied"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added event ",(0,i.jsx)(n.em,{children:"dataDrivenEntityTriggerEvent"})," - Fires after the data driven trigger is applied"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added ",(0,i.jsx)(n.em,{children:"event"}),"\xa0",(0,i.jsx)(n.em,{children:"entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)"})," - Fires when an entity or block is hit by another entity"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)"}),"- Fires when an entity takes damage"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added event ",(0,i.jsx)(n.em,{children:"leverActivate"})," - fires when a lever is toggled"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"BlockExplodeEvent - Removed property destroyedBlockPermutation"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["DefinitionModifier - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"componentGroupsToAdd"}),"_: string[]_ - List of component groups that will be added as part of this modifier"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"componentGroupsToRemove"}),"_: string[]_ - List of component groups that will be removed as part of this modifier"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["property\xa0",(0,i.jsx)(n.em,{children:"triggers"}),"_: Trigger[]_ - List of triggers that will fire as part of this modifier"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Trigger - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["property\xa0",(0,i.jsx)(n.em,{children:"eventName"}),"_: string_ - Event name of the trigger"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["DataDrivenEntityTriggerEvent - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"entity"}),"_: Entity_ - Entity that the event triggered on"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"id"}),"_: string_ - name of the event"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["BeforeDataDrivenEntityTriggerEvent - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"entity"}),"_: Entity_ - Entity that the event triggered on"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["read only property\xa0",(0,i.jsx)(n.em,{children:"id"}),"_: string_ - name of the event"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["property\xa0",(0,i.jsx)(n.em,{children:"modifiers"}),"_: DefinitionModifier[]_ - List of modifiers that will be applied when the event triggers"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"property"}),"\xa0",(0,i.jsx)(n.em,{children:"cancel"}),"_: bool_ - If true, the event will not be triggered"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityDataDrivenTriggerEventOptions - Added and inherited from EntityEventOptions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["property\xa0",(0,i.jsx)(n.em,{children:"eventTypes"}),"_: string[]_ - If specified, will restrict to events with the specified name (i.e.,\xa0",(0,i.jsxs)(n.em,{children:["minecraft",":ageable","_grow_up"]}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityType","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added read-only property\xa0",(0,i.jsx)(n.em,{children:"id: string"}),"- The identifier for the entity type"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityTypes","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"get(identifier: string): EntityType"}),"- Returns the corresponding EntityType for the given identifier"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getAll(): EntityTypeIterator"}),"- Returns an iterator containing all registered entity types"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["MinecraftEntityTypes","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provides EntityType constants for each standard Minecraft entity type"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnchantmentType - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Read-only property\xa0i_d__: string_ - The name of the enchantment type"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Read-only property\xa0",(0,i.jsx)(n.em,{children:"maxLevel"}),"_: int_ - The maximum level this type of enchantment can have"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnchantentInstance - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Constructor"}),"\xa0",(0,i.jsx)(n.em,{children:"EnchantmentInstance(type: EnchantmentType, level : int)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Read-only property\xa0",(0,i.jsx)(n.em,{children:"type"}),"_: EnchantmentType_ - The enchantment type of this instance"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Property\xa0",(0,i.jsx)(n.em,{children:"level"}),"_: int_ - The level of this enchantment instance"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnchantmentSlot - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Represents the item slot or type that an enchantment can be applied to"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EnchantmentList - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Represents a collection of enchantments that can be applied to an item"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Constructor\xa0",(0,i.jsx)(n.em,{children:"EnchantmentList(slot : EnchantSlot)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Read-only property\xa0",(0,i.jsx)(n.em,{children:"slot"}),"_: EnchantSlot_ - The item slot/type that this collection is applied to"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Read-only property\xa0",(0,i.jsx)(n.em,{children:"allEnchantments"}),"_: EnchantmentInstance[]_ - All enchantments as part of this enchantment collection"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Method\xa0",(0,i.jsx)(n.em,{children:"canAddEnchantment(instance : EnchantmentInstance)__: bool"})," - Returns whether or not the provided EnchantmentInstance can be added to this collection"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Method\xa0",(0,i.jsx)(n.em,{children:"addEnchantment(instance : EnchantmentInstance)__: bool"})," - Attempts to add the enchantment to this collection. Returns true if successful"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Method\xa0",(0,i.jsx)(n.em,{children:"removeEnchantment(type : EnchantmentType)"}),"- Removes an EnchantmentInstance with type\xa0type\xa0from this collection if present"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Method\xa0",(0,i.jsx)(n.em,{children:"hasEnchantment(type : EnchantmentType)__: int"})," - If this collection has an EnchantmentInstance with type\xa0type, returns the level of the enchantment. Returns 0 if not present"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ItemStack","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setLore(loreList: string[]): void"}),"- Sets the lore text for the item"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getLore(): string[]"}),"- Gets the lore text for the item"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added\xa0_nameTag_property"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ItemEnchantmentComponent - Added","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Property\xa0",(0,i.jsx)(n.em,{children:"enchantments"}),"_: EnchantmentList_ - Gets a copy of the current set of enchantments on this ItemStack. Or allows the user to set the EnchantmentList for the ItemStack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Method\xa0",(0,i.jsx)(n.em,{children:"removeAllEnchantments"}),"- Removes any enchantments that might be present on this ItemStack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Vector - Added numerous new helper functions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"length(): number"}),"- Returns the length of this vector"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"normalized(): Vector"}),"- Returns this as a normalized vector"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["distance(a",":Vector",", b",":Vector","): number"]}),"- Returns distance between two vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["lerp(a",":Vector",", b",":Vector",", t: number): Vector"]}),"- Returns the linear interpolation between a and b using t as the control"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["slerp(a",":Vector",", b",":Vector",", s: number): Vector"]}),"- Returns the spherical linear interpolation between a and b using s as the control"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["cross(a",":Vector",", b",":Vector","): Vector"]}),"- Returns the cross product of these two vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["add(a",":Vector",", b",":Vector","): Vector"]}),"- Returns the addition of these vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["subtract(a",":Vector",", b",":Vector","): Vector"]}),"- Returns the subtraction of these vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["multiply(a",":Vector",", b",":Vector","): Vector"]}),"- Returns the component-wise product of these vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["divide(a",":Vector",", b",":Vector","): Vector"]}),"- Returns the component-wise division of these vectors"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["multiply(a",":Vector",", b",":number","): Vector"]}),"- Returns the product of this vector and a scalar"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["divide(a",":Vector",", b",":number","): Vector"]}),"- Returns the division of this vector and a scalar"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static ",(0,i.jsx)(n.em,{children:"function"}),"\xa0",(0,i.jsxs)(n.em,{children:["min(a",":Vector",", b",":Vector","): Vector"]}),"- Returns a vector that is made from the smallest components of two vectors."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added static function\xa0",(0,i.jsxs)(n.em,{children:["max(a",":Vector",", b",":Vector","): Vector"]}),"- Returns a vector that is made from the largest components of two vectors"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["EntityItemComponent","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added component\xa0_EntityItemComponent_that can be used to obtain an ItemStack from an item entity \u2013 e.g., _getComponent(\u201citem\u201d).itemStack"}),"\n",(0,i.jsx)(n.p,{children:"_"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["BlockInventoryComponent","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed accessing items in a double chest crashing/being inconsistent"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Exposed the following components for Entities:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":can","_climb"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":can","_fly"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":can","_power_jump"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":fire","_immune"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":floats","_in_liquid"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_dyable"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_baby"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_charged"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_chested"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_hidden_when_invisible"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_ignited"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_illager_captain"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_saddled"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_shaking"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_sheared"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_stackable"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_stunned"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":is","_tamed"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":wants","_jockey"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"minecraft:variant"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":skin","_id"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":mark","_variant"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":friction","_modifier"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":ground","_offset"]})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"minecraft:scale"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.em,{children:["minecraft",":push","_through"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mojang-gametest-module",children:(0,i.jsx)(n.strong,{children:"mojang-gametest module:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Removed\xa0_radius_argument from command\xa0",(0,i.jsx)(n.em,{children:"/gametest clearall"})]}),"\n",(0,i.jsx)(n.li,{children:"Modified the behavior of function\xa0_attack()_to make the simulated player swing even when no target is found"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=t(74848),s=t(28453),r=t(18228),l=t(19365);const o={},a=void 0,d={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},h=[];function m(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(r.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(34164);const s={tabItem:"tabItem_Ymn6"};var r=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),s=t(34164),r=t(23104),l=t(56347),o=t(205),a=t(57485),d=t(31682),c=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:s}}=e;return{value:n,label:t,attributes:i,default:s}}))}function m(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[l,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[d,h]=p({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=d??x;return u({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o,rightElement:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),s=o[t].value;s!==i&&(c(n),l(s))},m=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:m,onClick:h,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,g.jsx)("div",{className:"w-full",children:a}):void 0]})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;if(n){const e=t.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.A)();return(0,g.jsx)(y,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);