"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[21581,43115],{21950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(74848),r=t(28453);t(74450);const s={},o=void 0,l={id:"changelog_source/stable/1.19/0/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.19/0/tech.mdx",sourceDirName:"changelog_source/stable/1.19/0",slug:"/changelog_source/stable/1.19/0/tech",permalink:"/en/docs/changelog_source/stable/1.19/0/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/0/tech.mdx",tags:[],version:"current",frontMatter:{}},a={},d=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Performance / Stability</strong>",id:"performance--stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Dedicated Server</strong>",id:"dedicated-server",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Fog</strong>",id:"fog",level:2},{value:"<strong>Item Components</strong>",id:"item-components",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>IMPORTANT BREAKING CHANGE</strong>",id:"important-breaking-change",level:2},{value:"<strong>mojang-gametest module</strong>: Test",id:"mojang-gametest-module-test",level:2},{value:"<strong>mojang-minecraft module</strong>",id:"mojang-minecraft-module",level:2}];function c(e){const n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"updated-add-on-template-packs",children:(0,i.jsx)(n.strong,{children:"Updated Add-On Template Packs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Updated Add-On templates for 1.19.0 with new resources, behaviors, and documentation, are available to download at ",(0,i.jsx)(n.a,{href:"https://aka.ms/MCAddOnPacks",children:"aka.ms/MCAddonPacks"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"performance--stability",children:(0,i.jsx)(n.strong,{children:"Performance / Stability"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Fixed a crash when loading a Behavior Pack with non-JSON object in entity components, component_groups, and "add"/"remove" events (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-151377",children:"MCPE-151377"}),", ",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-151380",children:"MCPE-151380"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed a crash that could occur when attempting to render blocks that rely on biome data"}),"\n",(0,i.jsx)(n.li,{children:"Fixed a crash when attempting to access a null entity"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed a crash in ",(0,i.jsx)(n.em,{children:"variant"})," related to thrown potions and invalid potion IDs"]}),"\n",(0,i.jsx)(n.li,{children:"Avoid crashes on certain devices when parsing Molang expressions with many OR or AND operators"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:(0,i.jsx)(n.strong,{children:"General"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Volume instances are now stored in the world, persisting between play sessions"}),"\n",(0,i.jsx)(n.li,{children:"Limit path strings and localized ID strings in data-driven blocks to 256 characters"}),"\n",(0,i.jsxs)(n.li,{children:["Limit the length of crafting tag strings in ",(0,i.jsx)(n.em,{children:"CraftingTableComponent"})," to 64 characters"]}),"\n",(0,i.jsxs)(n.li,{children:["Limit the number of elements in the\xa0_material_instances_field of the ",(0,i.jsx)(n.em,{children:"BlockMaterialInstancesComponent"})," to 64"]}),"\n",(0,i.jsxs)(n.li,{children:["Limit the number of elements in the\xa0conditionsand\xa0block_filter\xa0fields of the ",(0,i.jsx)(n.em,{children:"BlockPlacementFieldComponent"})," to 64"]}),"\n",(0,i.jsxs)(n.li,{children:["Updated documentation for\xa0originand\xa0size\xa0fields of the\xa0",(0,i.jsxs)(n.em,{children:["minecraft",":block","_collision"]}),"\xa0and\xa0",(0,i.jsxs)(n.em,{children:["minecraft",":aim","_collision"]}),"\xa0components"]}),"\n",(0,i.jsx)(n.li,{children:"Set stack limit for brewing station result slot to 1, as to avoid getting input stacks being overwritten when the brew is complete"}),"\n",(0,i.jsx)(n.li,{children:"Tied consume animation to consume duration"}),"\n",(0,i.jsx)(n.li,{children:"Content errors for data-driven blocks improved to log resource pack, file, and block identifier"}),"\n",(0,i.jsxs)(n.li,{children:["Limit length of the\xa0_minecraft",":geometry_field"," of ",(0,i.jsx)(n.em,{children:"BlockGeometryComponent"})," to 256 characters"]}),"\n",(0,i.jsx)(n.li,{children:'Updated documentation for specific string types "Localization String", "Path String", and "Identifier String"'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:(0,i.jsx)(n.strong,{children:"Commands"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The '/spreadplayers' command will now avoid more hazardous locations"}),"\n",(0,i.jsx)(n.li,{children:"Reload command will now discover new function and script files"}),"\n",(0,i.jsxs)(n.li,{children:["When a Command Block clones itself twice with the '/clone' command, the cloned Command Block will now activate on the first try (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-122188",children:"MCPE-122188"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Command selectors now correctly identify players by name instead of their name tag"}),"\n",(0,i.jsx)(n.li,{children:"Title commands fired before a client was done joining will now show instead of being ignored"}),"\n",(0,i.jsx)(n.li,{children:"Added the 'replace entity' overload to the '/loot' command"}),"\n",(0,i.jsx)(n.li,{children:"Fixed an issue with teleporting an entity to a chunk that has not been loaded since before 1.18.30 would result in the loss of that entity"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dedicated-server",children:(0,i.jsx)(n.strong,{children:"Dedicated Server"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Enabled the Windows Dedicated Server console to read UTF-16 encoded Unicode input (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/BDS-3791",children:"BDS-3791"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mobs",children:(0,i.jsx)(n.strong,{children:"Mobs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entities that use ",(0,i.jsx)(n.em,{children:"KnockbackRoarGoal"})," can once again properly use entity filters to determine damage"]}),"\n",(0,i.jsxs)(n.li,{children:["Actor properties can now be applied to player entities. Updated network protocol version to support this (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-129628",children:"MCPE-129628"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Actors using movement prediction will once again teleport smoothly"}),"\n",(0,i.jsxs)(n.li,{children:["Added in a check to prevent an actor that is a passenger from being ridden by the vehicle it is on, preventing an infinite loop looking for the root vehicle (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-133774",children:"MCPE-133774"}),")"]}),"\n",(0,i.jsx)(n.li,{children:'Exposed new data parameter "can_sleep_while_riding" for "minecraft.behavior.sleep". If set to false, the goal will not start if the mob is riding'}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.em,{children:"is_moving"})," filter now returns the correct value when an actor is moving"]}),"\n",(0,i.jsxs)(n.li,{children:["Added a ",(0,i.jsx)(n.em,{children:"target_block_filters"}),' to "',(0,i.jsx)(n.em,{children:"behavior.move_to_block"}),'" and "',(0,i.jsx)(n.em,{children:"is_waterlogged"}),'" filter test to prevent mobs from moving to blocks underwater (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-153783",children:"MCPE-153783"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fog",children:(0,i.jsx)(n.strong,{children:"Fog"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updated fog JSON schema to allow distance fog settings to use negative value as 'fog_start'. Allowing nearby blocks to also be tinted with fog color"}),"\n",(0,i.jsx)(n.li,{children:"Added adjustable fog effect that can expand or shrink over time. Users will get the sense of eyes adjusting when going into water"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"item-components",children:(0,i.jsx)(n.strong,{children:"Item Components"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added new data-driven Item component\xa0",(0,i.jsx)(n.em,{children:"minecraft:chargeable"}),"- Allows the item to be charged (like Apples or Bows) when the use action button is held\xa0",(0,i.jsx)(n.em,{children:"on_complete"}),"\xa0- Trigger executed when the items use duration has been completed"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"molang",children:(0,i.jsx)(n.strong,{children:"Molang"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avoid clearing temp Molang variables during hand rendering"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gametest-framework",children:(0,i.jsx)(n.strong,{children:"GameTest Framework"})}),"\n",(0,i.jsx)(n.h2,{id:"important-breaking-change",children:(0,i.jsx)(n.strong,{children:"IMPORTANT BREAKING CHANGE"})}),"\n",(0,i.jsx)(n.p,{children:'GameTest module type changed from "javascript" to "script" in manifest.json. Added an optional attribute \u201clanguage\u201d which has only one supported value \u2013 javascript.'}),"\n",(0,i.jsx)(n.p,{children:"New JavaScript modules in manifest.json should look as follows:"}),"\n",(0,i.jsxs)(n.p,{children:["\xa0 ",(0,i.jsx)(n.em,{children:'"modules": ['}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:"{"}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"description": "JavaScript module code",'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"language": "javascript",'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"type": "script",'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"uuid": "<your UUID>",'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"version": [0, 0, 1],'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:'"entry": "scripts/main.js"'}),(0,i.jsx)(n.br,{}),"\n","\xa0\xa0\xa0 ",(0,i.jsx)(n.em,{children:"}"}),(0,i.jsx)(n.br,{}),"\n","\xa0 ",(0,i.jsx)(n.em,{children:"],"})]}),"\n",(0,i.jsxs)(n.h2,{id:"mojang-gametest-module-test",children:[(0,i.jsx)(n.strong,{children:"mojang-gametest module"}),": Test"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"rotateVector"}),"- Rotates a vector relative to the GameTest structure rotation"]}),"\n",(0,i.jsx)(n.li,{children:"Removed constraint on maximum travel distance from GameTest structure for SimulatedPlayer."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mojang-minecraft-module",children:(0,i.jsx)(n.strong,{children:"mojang-minecraft module"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Entity","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setRotation(degreesX: number, degreesY: number)"}),"- Sets the rotation of the Entity"]}),"\n",(0,i.jsxs)(n.li,{children:["Added read-only property\xa0",(0,i.jsx)(n.em,{children:"rotation: XYRotation"}),"- Gets the rotation of the Entity"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed property\xa0",(0,i.jsx)(n.em,{children:"bodyRotation"}),"- Note: Use ",(0,i.jsx)(n.em,{children:"rotation.y"})," instead"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["XYRotation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Renamed class\xa0_PitchYawRotation_to\xa0",(0,i.jsx)(n.em,{children:"XYRotation"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed property\xa0_pitch_to\xa0",(0,i.jsx)(n.em,{children:"x"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed property\xa0_yaw_to\xa0",(0,i.jsx)(n.em,{children:"y"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["New events:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added event ",(0,i.jsx)(n.em,{children:"buttonPushEvent"})," - fires when a button is pushed"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.projectileHit"}),"- Fires when a projectile hits a Block or Entity"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemStartUseOn"}),"- Sent when the player first interacts with a block"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemStopUseOn"}),"- Sent when fire if the block is successfully interacted with and the block has changed - such as when grass is turned to a path with a Shovel"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemStartCharge"}),"\u2013 Sent when the player first starts using a charging/animated item"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemCompleteCharge"}),"- Sent when the item has completed its charge action"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemReleaseCharge"}),"- Sent when the user has finished using the item and released the build action"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.itemStopCharge"}),"- Sent either when the player has finished an items use cycle or when the player has released the use action with the item"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ItemStartUseOnEvent"})," Added read only property\xa0",(0,i.jsx)(n.em,{children:"buildBlockLocation"}),"- The result build block position. Useful for determining where a block was placed"]}),"\n",(0,i.jsxs)(n.li,{children:["Added member\xa0_player?: Player_to the\xa0",(0,i.jsx)(n.em,{children:"LeverActivate"}),"\xa0event - The player that activated the lever"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"New property on Player_: onScreenDisplay : ScreenDisplay_ - exposes a new interface to trigger on screen content."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ScreenDisplay Type","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"setTitle(title : String, options? : TitleDisplayOptions)"})," - cause a title to show up on the player's HUD, optionally specifying the subtitle and fade in, stay and fade out times"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"clearTitle()"})," - clear title and subtitle"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"updateSubtitle(subtitle : String)"})," - update the subtitle (but not the title)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"setActionBar(text : String)"})," - set the action bar text"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TitleDisplayOptions object","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"subtitle? : String"})," - optional subtitle"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"fadeInSeconds : Int"})," - number of seconds to fade in new title and subtitle"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"staySeconds : Int"})," - number of seconds to have the title and subtitle stay on screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"fadeOutSeconds : Int"})," - number of seconds to fade out title and subtitle"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Support of dynamic properties that script can use to persist data per-World or per-Entity. Note that properties must be registered using the propertyRegistry in the new WorldInitialize event."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["DynamicPropertiesDefinition","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"defineNumber(identifier: string): void"}),"- Defines a dynamic number property"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"defineString(identifier: string, maxLength: number): void"}),"- Defines a dynamic string property"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"defineBoolean(identifier: string): void"}),"- Defines a dynamic boolean property"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"worldInitialize(worldInitializeEvent: WorldInitializeEvent)"}),"- Fires during world load and contains the property registry used for declaring dynamic properties"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PropertyRegistry","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"registerEntityTypeDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition, entityType: EntityType)"}),"- Registers dynamic property definitions for the given EntityType"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"registerWorldDynamicProperties(propertiesDefinition: DynamicPropertiesDefinition)"}),"- Registers property definitions for the world"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["World object/Entity object additions:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setDynamicProperty(identifier: string, value: boolean | string | number)"}),"- Adds a dynamic property to the world/entity"]}),"\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.em,{children:"function"}),"\xa0",(0,i.jsx)(n.em,{children:"getDynamicProperty(identifier: string): boolean | string | number"}),"- Gets a dynamic property from the world/entity if it exists, otherwise returns undefined"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"removeDynamicProperty(identifier: string): boolean"}),"- Removes a dynamic property value from the world/entity"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Updated the GameTest Framework interface to add read-only scoreboard support."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["World","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"scoreboard : Scoreboard"})," - Access world's scoreboard"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Entity","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"scoreboard : ScoreboardIdentity"})," - Access the entities scoreboard identity"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Scoreboard - Object representing the scoreboard data","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getObjective(objectiveId : String) : ScoreboardObjective"})," - Method to get a specific objective (by id)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getObjectives : ScoreboardObjective[]"})," - Method to get all objectives"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getParticipants : ScoreboardIdentity[]"})," - Method to get all scoreboard identities"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ScoreboardObjective"})," - Object representing a scoreboard objective","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"id : String"})," - (read-only) scoreboard identifier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"displayName : String"})," - (read-only) scoreboard display name"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getParticipants : ScoreboardIdentity[]"})," - Method to get all objective participant identities"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getScores : ScoreboardScoreInfo[] -"})," Method to get the score info for all participants"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getScore(participant : ScoreboardIdentity) : Int"})," - Method to get the score value of a participant"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ScoreboardIdentity"})," - Object representing a scoreboard participant","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"type : ScoreboardIdentityType"})," - (read-only) enum representing the type of identity"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"id : Int"})," - (read-only) Unique identifier for the identity"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"displayName : String"})," - (read-only) display name for the identity"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"getEntity : Entity"})," - get the Entity handle associated with the identity"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ScoreboardIdentityType"})," - Enum representing identity ",(0,i.jsx)(n.em,{children:"types : .Entity"})," - An entity .FakePlayer - A fake identity .Player - A player"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"ScoreboardScoreInfo"})," - Score-Identity pair for an objective","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"participant : ScoreboardIdentity"})," - (read-only) The participant"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"score : Int"})," - (read-only) The score"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Commands","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added\xa0_/script profiler_command to create GameTest script performance traces. Script profiles should be written to the Minecraft logging folder. See ",(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/minecraft/creator/documents/scriptdevelopertools",children:"this article"})," for more information on the Script Profiler."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Dedicated Server has been updated to allow servers to explicitly list which script modules they want loaded when running scripts. A default configuration file is located at\xa0",(0,i.jsx)(n.em,{children:"/config/default/permissions.json"}),". Without this new file, all script modules are disabled by default. See ",(0,i.jsx)(n.a,{href:"https://aka.ms/mcserverscripts",children:"this article"})," for more information on usage of scripts plus servers."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=t(74848),r=t(28453),s=t(18228),o=t(19365);const l={},a=void 0,d={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},h=[];function u(e){return(0,i.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,i.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),r=t(34164),s=t(23104),o=t(56347),l=t(205),a=t(57485),d=t(31682),c=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,a]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[d,h]=p({queryString:t,groupId:r}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=d??j;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(92303);const g={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var f=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l,rightElement:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=d.indexOf(n),r=l[t].value;r!==i&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,f.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,f.jsx)("div",{className:"w-full",children:a}):void 0]})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(y,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(v,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);