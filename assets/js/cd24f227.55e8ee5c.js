"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53789,29933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),o=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),o=a(67294),r=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??m;return p({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var g=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(m(t),s(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}},7528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));a(47153);const r={},i=void 0,l={unversionedId:"changelog_source/stable/1.17/30/tech",id:"changelog_source/stable/1.17/30/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.17/30/tech.mdx",sourceDirName:"changelog_source/stable/1.17/30",slug:"/changelog_source/stable/1.17/30/tech",permalink:"/docs/changelog_source/stable/1.17/30/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/30/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"updated-add-on-template-packs"},(0,o.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.17.30 are available for download with new resources, behaviors, and documentation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Resource Pack Template: ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/ResourcePackTemplate"},"aka.ms/ResourcePackTemplate")),(0,o.kt)("li",{parentName:"ul"},"Behavior Pack Template (Includes documentation): ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/BehaviorPackTemplate"},"aka.ms/BehaviorPackTemplate"))))),(0,o.kt)("h2",{id:"gameplay"},(0,o.kt)("strong",{parentName:"h2"},"Gameplay")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data-driven blocks can now be added to the Creative menu"),(0,o.kt)("li",{parentName:"ul"},"New chemistry material reductions for Education Edition can now be defined in the JSON files"),(0,o.kt)("li",{parentName:"ul"},'"potion.prefix" and "potion.',(0,o.kt)("em",{parentName:"li"},'.postfix"')," potion string resources have been renamed to ",(0,o.kt)("em",{parentName:"li"},'"potion.'),'.name"'),(0,o.kt)("li",{parentName:"ul"},'Potion name string resources have been changed so there are separate "Splash" and "Lingering" string resources'),(0,o.kt)("li",{parentName:"ul"},'The old style of using "potion.prefix" and "potion.',"*",'.postfix" is still supported'),(0,o.kt)("li",{parentName:"ul"},"UI bind objects can now utilize the 'ignore' field"),(0,o.kt)("li",{parentName:"ul"},"Attachables that are visible in first person view will no longer render backwards")),(0,o.kt)("h2",{id:"fixes"},(0,o.kt)("strong",{parentName:"h2"},"Fixes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where an entity might fail to initialize its tag component"),(0,o.kt)("li",{parentName:"ul"},"Sky no longer renders through walls of a large enclosed area when using fog"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation formatting for item components and how they work within Resource Packs and Behavior Packs"),(0,o.kt)("li",{parentName:"ul"},"Using Water Buckets to collect fish has been version locked to prevent breaking old world templates"),(0,o.kt)("li",{parentName:"ul"},"Fixed controller support when editing NPC dialog (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-135175"},"MCPE-135175"),")"),(0,o.kt)("li",{parentName:"ul"},"'behavior.knockback","_","roar' now has a vertical and horizontal strength value"),(0,o.kt)("li",{parentName:"ul"},"Adjusted padding for HD Textures in mipmaps level 1 in texture atlas to fix texture bleeding"),(0,o.kt)("li",{parentName:"ul"},"Killing a custom\xa0mob with an unknown loot table entry type will no longer cause a crash, and will now throw a content error (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129006"},"MCPE-129006"),")"),(0,o.kt)("li",{parentName:"ul"},"Rabbit with\xa0initialEvent\xa0specified now scales properly to adult rabbit size\xa0(",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76643"},"MCPE-76643"),")"),(0,o.kt)("li",{parentName:"ul"},"Similar to\xa0the\xa0spawns","_","on","_","block","_","filter, the\xa0spawns","_","above","_","block","_",'filter\xa0specifies a list of blocks and a distance. The mob can then spawn only if the nearest block within the specified distance below the desired\xa0spawnpoint\xa0is in that list (water and air not included). "minecraft:spawns',"_","above","_","block","_",'filter": { "blocks": "minecraft:stone", "distance": 10 }'),(0,o.kt)("li",{parentName:"ul"},"Improved documentation for 'DamageableItemComponent'"),(0,o.kt)("li",{parentName:"ul"},"Fixed the ability to add launch point positional offset for projectiles spawned with the 'spawn","_","entity' component"),(0,o.kt)("li",{parentName:"ul"},"Fixed the ability to add angular offset to launch vector for projectiles spawned with the 'spawn","_","entity' component"),(0,o.kt)("li",{parentName:"ul"},"Fixed offset not working for projectiles summoned through an interaction"),(0,o.kt)("li",{parentName:"ul"},"Fixed projectile 'angleoffset' value only reflected if shooter is riding another entity"),(0,o.kt)("li",{parentName:"ul"},"Fixed rotation of projectile launch point around a mob when projectile offset specified"),(0,o.kt)("li",{parentName:"ul"},'Parsing of UI json field "ignored" now throws a content error if it is invalid'),(0,o.kt)("li",{parentName:"ul"},"Fixed movement prediction interpolating with invalid data in even more scenarios (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108568"},"MCPE-108568"),")"),(0,o.kt)("li",{parentName:"ul"},'Removed the "replace" element from \'sound',"_","definitions.json' for being ambiguous in its usage (and was never used) (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99304"},"MCPE-99304"),")")),(0,o.kt)("h2",{id:"commands"},(0,o.kt)("strong",{parentName:"h2"},"Commands")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms"),(0,o.kt)("li",{parentName:"ul"},"Animations and events defined in Behavior Packs can now run commands that require cheats without the player enabling cheats (such as setting certain rules with the '/gamerule' command)"),(0,o.kt)("li",{parentName:"ul"},"Target selectors ry and rym now support wrapping around north"),(0,o.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command position argument is now optional (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128379"},"MCPE-128379"),")"),(0,o.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command will now output on success (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80348"},"MCPE-80348"),")"),(0,o.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command no longer shows an error when run\xa0successfully\xa0through\xa0'/execute'\xa0(",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129001"},"MCPE-129001"),")"),(0,o.kt)("li",{parentName:"ul"},"The '/clone' command now copies signal strength for Levers and Redstone Dust"),(0,o.kt)("li",{parentName:"ul"},"The '/structure' command can now specify a \\<to: x y z",">"," position argument with y below 0 as long as it is equal or above the minimum height for that dimension"),(0,o.kt)("li",{parentName:"ul"},'Added functionality for Intellisense options: "d" and "default" in the gamemode command selector (',(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92198"},"MCPE-92198"),")"),(0,o.kt)("li",{parentName:"ul"},"Minecart with Command Block can now use the self selector (@s) in its commands to target itself (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60126"},"MCPE-60126"),")"),(0,o.kt)("li",{parentName:"ul"},'The "/time set" command now sets the correct time and day when specifying a time above 24000 or below the current time (e.g. "/time set 0" sets the day to 0, "/time set 28000" sets the day to 1), and "/time" can now set or add to a negative world time (',(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43394"},"MCPE-43394"),")"),(0,o.kt)("li",{parentName:"ul"},"The '/spawnpoint' command can now be used while the player is sleeping and outputs success when setting to the player's existing spawnpoint (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106720"},"MCPE-106720"),")"),(0,o.kt)("li",{parentName:"ul"},'The camera shake command no longer shakes every player\'s screen when "@s" is used as the selector (',(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120383"},"MCPE-120383"),")")),(0,o.kt)("h2",{id:"gametestframework-experimental"},(0,o.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Renamed module "Minecraft" to "mojang-minecraft"'),(0,o.kt)("li",{parentName:"ul"},'Renamed module "GameTest" to "mojang-gametest"'),(0,o.kt)("li",{parentName:"ul"},"GameTest (now mojang-gametest)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0spawnAtLocation(location :\xa0Location) :\xa0Entity - Spawns an entity at the given Location"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0walkToLocation(mob :\xa0Entity,\xa0location :\xa0Location,\xa0speedModifier\xa0: number)\xa0-\xa0Commands an entity to move to the given Location"),(0,o.kt)("li",{parentName:"ul"},"Added method\xa0assertCanReachLocation(mob :\xa0Entity,\xa0location :\xa0BlockLocation, bool\xa0canReach) - Asserts that the given mob can reach the target block location"),(0,o.kt)("li",{parentName:"ul"},"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)"),(0,o.kt)("li",{parentName:"ul"},"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation"),(0,o.kt)("li",{parentName:"ul"},"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest\xa0is facing based\xa0on\xa0its structure rotation"),(0,o.kt)("li",{parentName:"ul"},"Renamed function assertBlockTypePresent to assertBlockPresent"),(0,o.kt)("li",{parentName:"ul"},"Renamed function assertEntityData to assertEntityState"),(0,o.kt)("li",{parentName:"ul"},"Removed function assertBlockTypeNotPresent (added boolean isPresent to assertBlockPresent instead)"),(0,o.kt)("li",{parentName:"ul"},"Removed function assertEntityNotPresent (added boolean to assertEntityPresent instead)"),(0,o.kt)("li",{parentName:"ul"},"Removed function assertEntityNotPresentInArea (added boolean to assertEntityPresentInArea instead)"),(0,o.kt)("li",{parentName:"ul"},"Removed function assertEntityNotTouching (added boolean to assertEntityTouching)"),(0,o.kt)("li",{parentName:"ul"},"Removed function succeedWhenEntityNotPresent (added boolean to succeedWhenEntityPresent)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function assertBlockState(blockLocation: BlockLocation, callback: (Block) =",">"," boolean)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function assertBlockPresent(blockType: BlockType, blockLocation: BlockLocation, isPresent: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function assertEntityPresent(entityTypeIdentifier: string, blockLocation: BlockLocation, isPresent: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function assertEntityPresentInArea(entityTypeIdentifier: string, isPresent: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function assertEntityTouching(entityTypeIdentifier: string, location: Location, isTouching: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Modified signature of function succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location, isPresent: boolean)"))),(0,o.kt)("li",{parentName:"ul"},"Minecraft (now mojang-minecraft)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Renamed\xa0BlockTypes\xa0class to\xa0MinecraftBlockTypes"),(0,o.kt)("li",{parentName:"ul"},"Renamed Effects class to\xa0MinecraftEffectTypes"),(0,o.kt)("li",{parentName:"ul"},"Renamed Items class to\xa0MinecraftItemTypes"))),(0,o.kt)("li",{parentName:"ul"},"Events",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added event\xa0World.events.beforeExplosion\xa0- Fires before an explosion occurs"),(0,o.kt)("li",{parentName:"ul"},"Added event\xa0World.events.explosion\xa0- Fires when an explosion occurs"),(0,o.kt)("li",{parentName:"ul"},"Added event\xa0World.events.explodeBlock\xa0- Fires when a block breaks due to an explosion"),(0,o.kt)("li",{parentName:"ul"},"Added event\xa0World.event.beforeActivatePiston\xa0- Fires before a piston is activated"),(0,o.kt)("li",{parentName:"ul"},"Added event\xa0World.event.activatePiston\xa0- Fires when a piston is activated"),(0,o.kt)("li",{parentName:"ul"},"Added read-only property\xa0currentTick\xa0to tick event - Returns the current server\xa0tick"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0createEntity\xa0to\xa0entityCreate"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0addEffect\xa0to\xa0effectAdd"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0activatePiston\xa0to\xa0pistonActivate"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0beforeActivatePiston\xa0to\xa0beforePistonActivate"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0explodeBlock\xa0to\xa0blockExplode"),(0,o.kt)("li",{parentName:"ul"},"Renamed event\xa0changeWeather\xa0to\xa0weatherChange"))),(0,o.kt)("li",{parentName:"ul"},"Block",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added method\xa0getDimension() :\xa0Dimension"))),(0,o.kt)("li",{parentName:"ul"},"Added BlockPistonComponent")),(0,o.kt)("h2",{id:"molang"},(0,o.kt)("strong",{parentName:"h2"},"Molang")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added experimental queries for item cooldowns: 'query.is","_","cooldown","_","type', 'query.cooldown","_","time', and 'query.cooldown","_","time","_","remaining'"),(0,o.kt)("li",{parentName:"ul"},"Updated many Molang content errors to specify which operator or query was involved"),(0,o.kt)("li",{parentName:"ul"},"'min","_","engine","_","version' from Resource Pack and Behavior Pack manifests is now passed into Molang expression parsing. This allows for future breaking changes tied to a specific engine version"),(0,o.kt)("li",{parentName:"ul"},"Added 'BlockPartVisibilityComponent'",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Allows creators to specify Molang conditions for each \u201cbone\u201d listed in the geometry JSON that turn on/off bones based on the block state"),(0,o.kt)("li",{parentName:"ul"},"Must have the Experimental toggle enabled to use"))),(0,o.kt)("li",{parentName:"ul"},"Fixed experimental 'query.bone","_","orientation","_","trs' to have correct translation Y and scale results"),(0,o.kt)("li",{parentName:"ul"},"Added experimental 'block","_","neighbor","_","has","_","any","_","tags' and 'block","_","neighbor","_","has","_","all","_","tags' Molang queries",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Takes a block relative position and a set of tags"),(0,o.kt)("li",{parentName:"ul"},"Returns 0/1"),(0,o.kt)("li",{parentName:"ul"},"Must have the Experimental toggle enabled to use"))),(0,o.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when entering a world with a custom Resource Pack that contained 'query.armor","_","color","_","slot' (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106437"},"MCPE-106437"),")"),(0,o.kt)("li",{parentName:"ul"},"Fixed 'query.item","_","remaining","_","use","_","duration' having improperly scaled or inverted results (This is to fix a Versioned Change as of engine version 1.17.30)"),(0,o.kt)("li",{parentName:"ul"},"Added 'query.facing","_","target","_","to","_","range","_","attack', which returns whether or not the queried actor's 'minecraft:behavior.ranged","_","attack' goal is currently running"),(0,o.kt)("li",{parentName:"ul"},"Moved experimental Molang queries (other than those related to Actor Properties) to a new 'Experimental Molang Features' toggle"),(0,o.kt)("li",{parentName:"ul"},"Improved Molang documentation related to experiments",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Experimental queries and language expressions now list which experiment(s) they require to be available"))),(0,o.kt)("li",{parentName:"ul"},"Versioned Changes are now detailed in the documentation, starting with the 'query.item","_","remaining","_","use","_","duration' fix")))}m.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),o=a(67294),r=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],p={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Fragment,null,void 0!==a.techSapiDiff?(0,r.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,r.kt)(o.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);