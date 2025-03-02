"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60182,21032],{68206:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(74848),o=t(28453);t(59938);const r={},s=void 0,a={id:"changelog_source/pocket/Minecraft_-_1.17.30_/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/pocket/Minecraft_-_1.17.30_/tech.mdx",sourceDirName:"changelog_source/pocket/Minecraft_-_1.17.30_",slug:"/changelog_source/pocket/Minecraft_-_1.17.30_/tech",permalink:"/docs/changelog_source/pocket/Minecraft_-_1.17.30_/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_-_1.17.30_/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2}];function d(e){const n={a:"a",em:"em",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"updated-add-on-template-packs",children:(0,i.jsx)(n.strong,{children:"Updated Add-On Template Packs"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Updated Add-On templates for 1.17.30 are available for download with new resources, behaviors, and documentation","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Resource Pack Template: ",(0,i.jsx)(n.a,{href:"https://aka.ms/ResourcePackTemplate",children:"aka.ms/ResourcePackTemplate"})]}),"\n",(0,i.jsxs)(n.li,{children:["Behavior Pack Template (Includes documentation): ",(0,i.jsx)(n.a,{href:"https://aka.ms/BehaviorPackTemplate",children:"aka.ms/BehaviorPackTemplate"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gameplay",children:(0,i.jsx)(n.strong,{children:"Gameplay"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data-driven blocks can now be added to the Creative menu"}),"\n",(0,i.jsx)(n.li,{children:"New chemistry material reductions for Education Edition can now be defined in the JSON files"}),"\n",(0,i.jsxs)(n.li,{children:['"potion.prefix" and "potion.',(0,i.jsx)(n.em,{children:'.postfix"'})," potion string resources have been renamed to ",(0,i.jsx)(n.em,{children:'"potion.'}),'.name"']}),"\n",(0,i.jsx)(n.li,{children:'Potion name string resources have been changed so there are separate "Splash" and "Lingering" string resources'}),"\n",(0,i.jsx)(n.li,{children:'The old style of using "potion.prefix" and "potion.*.postfix" is still supported'}),"\n",(0,i.jsx)(n.li,{children:"UI bind objects can now utilize the 'ignore' field"}),"\n",(0,i.jsx)(n.li,{children:"Attachables that are visible in first person view will no longer render backwards"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"fixes",children:(0,i.jsx)(n.strong,{children:"Fixes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed a bug where an entity might fail to initialize its tag component"}),"\n",(0,i.jsx)(n.li,{children:"Sky no longer renders through walls of a large enclosed area when using fog"}),"\n",(0,i.jsx)(n.li,{children:"Updated documentation formatting for item components and how they work within Resource Packs and Behavior Packs"}),"\n",(0,i.jsx)(n.li,{children:"Using Water Buckets to collect fish has been version locked to prevent breaking old world templates"}),"\n",(0,i.jsxs)(n.li,{children:["Fixed controller support when editing NPC dialog (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-135175",children:"MCPE-135175"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"'behavior.knockback_roar' now has a vertical and horizontal strength value"}),"\n",(0,i.jsx)(n.li,{children:"Adjusted padding for HD Textures in mipmaps level 1 in texture atlas to fix texture bleeding"}),"\n",(0,i.jsxs)(n.li,{children:["Killing a custom\xa0mob with an unknown loot table entry type will no longer cause a crash, and will now throw a content error (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-129006",children:"MCPE-129006"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Rabbit with\xa0initialEvent\xa0specified now scales properly to adult rabbit size\xa0(",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-76643",children:"MCPE-76643"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:['Similar to\xa0the\xa0spawns_on_block_filter, the\xa0spawns_above_block_filter\xa0specifies a list of blocks and a distance. The mob can then spawn only if the nearest block within the specified distance below the desired\xa0spawnpoint\xa0is in that list (water and air not included). "minecraft',":spawns",'_above_block_filter": { "blocks": "minecraft',":stone",'", "distance": 10 }']}),"\n",(0,i.jsx)(n.li,{children:"Improved documentation for 'DamageableItemComponent'"}),"\n",(0,i.jsx)(n.li,{children:"Fixed the ability to add launch point positional offset for projectiles spawned with the 'spawn_entity' component"}),"\n",(0,i.jsx)(n.li,{children:"Fixed the ability to add angular offset to launch vector for projectiles spawned with the 'spawn_entity' component"}),"\n",(0,i.jsx)(n.li,{children:"Fixed offset not working for projectiles summoned through an interaction"}),"\n",(0,i.jsx)(n.li,{children:"Fixed projectile 'angleoffset' value only reflected if shooter is riding another entity"}),"\n",(0,i.jsx)(n.li,{children:"Fixed rotation of projectile launch point around a mob when projectile offset specified"}),"\n",(0,i.jsx)(n.li,{children:'Parsing of UI json field "ignored" now throws a content error if it is invalid'}),"\n",(0,i.jsxs)(n.li,{children:["Fixed movement prediction interpolating with invalid data in even more scenarios (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-108568",children:"MCPE-108568"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed the \"replace\" element from 'sound_definitions.json' for being ambiguous in its usage (and was never used) (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-99304",children:"MCPE-99304"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:(0,i.jsx)(n.strong,{children:"Commands"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms"}),"\n",(0,i.jsx)(n.li,{children:"Animations and events defined in Behavior Packs can now run commands that require cheats without the player enabling cheats (such as setting certain rules with the '/gamerule' command)"}),"\n",(0,i.jsx)(n.li,{children:"Target selectors ry and rym now support wrapping around north"}),"\n",(0,i.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command position argument is now optional (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-128379",children:"MCPE-128379"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command will now output on success (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-80348",children:"MCPE-80348"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command no longer shows an error when run\xa0successfully\xa0through\xa0'/execute'\xa0(",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-129001",children:"MCPE-129001"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"The '/clone' command now copies signal strength for Levers and Redstone Dust"}),"\n",(0,i.jsx)(n.li,{children:"The '/structure' command can now specify a <to: x y z> position argument with y below 0 as long as it is equal or above the minimum height for that dimension"}),"\n",(0,i.jsxs)(n.li,{children:['Added functionality for Intellisense options: "d" and "default" in the gamemode command selector (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-92198",children:"MCPE-92198"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Minecart with Command Block can now use the self selector (@s) in its commands to target itself (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-60126",children:"MCPE-60126"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:['The "/time set" command now sets the correct time and day when specifying a time above 24000 or below the current time (e.g. "/time set 0" sets the day to 0, "/time set 28000" sets the day to 1), and "/time" can now set or add to a negative world time (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-43394",children:"MCPE-43394"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["The '/spawnpoint' command can now be used while the player is sleeping and outputs success when setting to the player's existing spawnpoint (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-106720",children:"MCPE-106720"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:['The camera shake command no longer shakes every player\'s screen when "@s" is used as the selector (',(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-120383",children:"MCPE-120383"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"gametestframework-experimental",children:[(0,i.jsx)(n.strong,{children:"GameTest\xa0Framework (Experimental)"}),"\xa0"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Renamed module "Minecraft" to "mojang-minecraft"'}),"\n",(0,i.jsx)(n.li,{children:'Renamed module "GameTest" to "mojang-gametest"'}),"\n",(0,i.jsxs)(n.li,{children:["GameTest (now mojang-gametest)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0spawnAtLocation(location :\xa0Location) :\xa0Entity - Spawns an entity at the given Location"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0walkToLocation(mob :\xa0Entity,\xa0location :\xa0Location,\xa0speedModifier\xa0: number)\xa0-\xa0Commands an entity to move to the given Location"}),"\n",(0,i.jsx)(n.li,{children:"Added method\xa0assertCanReachLocation(mob :\xa0Entity,\xa0location :\xa0BlockLocation, bool\xa0canReach) - Asserts that the given mob can reach the target block location"}),"\n",(0,i.jsx)(n.li,{children:"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)"}),"\n",(0,i.jsx)(n.li,{children:"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation"}),"\n",(0,i.jsx)(n.li,{children:"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest\xa0is facing based\xa0on\xa0its structure rotation"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function assertBlockTypePresent to assertBlockPresent"}),"\n",(0,i.jsx)(n.li,{children:"Renamed function assertEntityData to assertEntityState"}),"\n",(0,i.jsx)(n.li,{children:"Removed function assertBlockTypeNotPresent (added boolean isPresent to assertBlockPresent instead)"}),"\n",(0,i.jsx)(n.li,{children:"Removed function assertEntityNotPresent (added boolean to assertEntityPresent instead)"}),"\n",(0,i.jsx)(n.li,{children:"Removed function assertEntityNotPresentInArea (added boolean to assertEntityPresentInArea instead)"}),"\n",(0,i.jsx)(n.li,{children:"Removed function assertEntityNotTouching (added boolean to assertEntityTouching)"}),"\n",(0,i.jsx)(n.li,{children:"Removed function succeedWhenEntityNotPresent (added boolean to succeedWhenEntityPresent)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function assertBlockState(blockLocation: BlockLocation, callback: (Block) => boolean)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function assertBlockPresent(blockType: BlockType, blockLocation: BlockLocation, isPresent: boolean)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, isPresent: boolean)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function assertEntityTouching(entityTypeIdentifier: string, location: Location, isTouching: boolean)"}),"\n",(0,i.jsx)(n.li,{children:"Modified signature of function succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location, isPresent: boolean)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Minecraft (now mojang-minecraft)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Renamed\xa0BlockTypes\xa0class to\xa0MinecraftBlockTypes"}),"\n",(0,i.jsx)(n.li,{children:"Renamed Effects class to\xa0MinecraftEffectTypes"}),"\n",(0,i.jsx)(n.li,{children:"Renamed Items class to\xa0MinecraftItemTypes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Events","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added event\xa0World.events.beforeExplosion\xa0- Fires before an explosion occurs"}),"\n",(0,i.jsx)(n.li,{children:"Added event\xa0World.events.explosion\xa0- Fires when an explosion occurs"}),"\n",(0,i.jsx)(n.li,{children:"Added event\xa0World.events.explodeBlock\xa0- Fires when a block breaks due to an explosion"}),"\n",(0,i.jsx)(n.li,{children:"Added event\xa0World.event.beforeActivatePiston\xa0- Fires before a piston is activated"}),"\n",(0,i.jsx)(n.li,{children:"Added event\xa0World.event.activatePiston\xa0- Fires when a piston is activated"}),"\n",(0,i.jsx)(n.li,{children:"Added read-only property\xa0currentTick\xa0to tick event - Returns the current server\xa0tick"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0createEntity\xa0to\xa0entityCreate"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0addEffect\xa0to\xa0effectAdd"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0activatePiston\xa0to\xa0pistonActivate"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0beforeActivatePiston\xa0to\xa0beforePistonActivate"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0explodeBlock\xa0to\xa0blockExplode"}),"\n",(0,i.jsx)(n.li,{children:"Renamed event\xa0changeWeather\xa0to\xa0weatherChange"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Block","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added method\xa0getDimension() :\xa0Dimension"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Added BlockPistonComponent"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"molang",children:(0,i.jsx)(n.strong,{children:"Molang"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added experimental queries for item cooldowns: 'query.is_cooldown_type', 'query.cooldown_time', and 'query.cooldown_time_remaining'"}),"\n",(0,i.jsx)(n.li,{children:"Updated many Molang content errors to specify which operator or query was involved"}),"\n",(0,i.jsx)(n.li,{children:"'min_engine_version' from Resource Pack and Behavior Pack manifests is now passed into Molang expression parsing. This allows for future breaking changes tied to a specific engine version"}),"\n",(0,i.jsxs)(n.li,{children:["Added 'BlockPartVisibilityComponent'","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Allows creators to specify Molang conditions for each \u201cbone\u201d listed in the geometry JSON that turn on/off bones based on the block state"}),"\n",(0,i.jsx)(n.li,{children:"Must have the Experimental toggle enabled to use"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed experimental 'query.bone_orientation_trs' to have correct translation Y and scale results"}),"\n",(0,i.jsxs)(n.li,{children:["Added experimental 'block_neighbor_has_any_tags' and 'block_neighbor_has_all_tags' Molang queries","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Takes a block relative position and a set of tags"}),"\n",(0,i.jsx)(n.li,{children:"Returns 0/1"}),"\n",(0,i.jsx)(n.li,{children:"Must have the Experimental toggle enabled to use"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed a crash that could occur when entering a world with a custom Resource Pack that contained 'query.armor_color_slot' (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-106437",children:"MCPE-106437"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Fixed 'query.item_remaining_use_duration' having improperly scaled or inverted results (This is to fix a Versioned Change as of engine version 1.17.30)"}),"\n",(0,i.jsxs)(n.li,{children:["Added 'query.facing_target_to_range_attack', which returns whether or not the queried actor's 'minecraft",":behavior",".ranged_attack' goal is currently running"]}),"\n",(0,i.jsx)(n.li,{children:"Moved experimental Molang queries (other than those related to Actor Properties) to a new 'Experimental Molang Features' toggle"}),"\n",(0,i.jsxs)(n.li,{children:["Improved Molang documentation related to experiments","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Experimental queries and language expressions now list which experiment(s) they require to be available"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Versioned Changes are now detailed in the documentation, starting with the 'query.item_remaining_use_duration' fix"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(74848),o=t(28453),r=t(18228),s=t(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(r.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var i=t(34164);const o={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(o.tabItem,s),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>k});var i=t(96540),o=t(34164),r=t(23104),s=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=u(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:t,groupId:o}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Dv)(t);return[o,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),x=(()=>{const e=c??g;return m({value:e,tabValues:r})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==i&&(d(n),s(o))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:[a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...r,className:(0,o.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,j.jsx)("div",{className:"w-full",children:l}):void 0]})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;if(n){const e=t.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function k(e){const n=(0,f.A)();return(0,j.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);