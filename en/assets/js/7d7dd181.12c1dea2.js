"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40848,24079,64137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),i=a(16550),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=h({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var g=a(72389);const w="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",w)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},5214:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={},o=void 0,i={unversionedId:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",id:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1",slug:"/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",permalink:"/en/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,l.kt)("h2",{id:"new-features"},(0,l.kt)("strong",{parentName:"h2"},"New Features:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Stained Glass")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fireworks (with Elytra boosting!)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Parrots")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Banners")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Armor Stands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Jukebox and music discs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Recipe Book")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Book and Quill")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ravines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Coarse Dirt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New world start options:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Starting Map")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bonus Chest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Trust Players")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New game rules:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"TNT Explodes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Natural Regeneration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added '/tickingarea' command to create areas that still update when no players are there")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Player permissions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Zombie Villager spawn egg")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In-game host options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New loading screens with funny and helpful tips")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"How to Play screen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remix 3D export functionality (Windows 10 only)"))),(0,l.kt)("h2",{id:"tweaks"},(0,l.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Blaze Powder is now needed to fuel brewing stands"),(0,l.kt)("li",{parentName:"ul"},"Ice blocks are now transparent"),(0,l.kt)("li",{parentName:"ul"},"Maps can now be held off-hand and show the heads of players' skins"),(0,l.kt)("li",{parentName:"ul"},"Locator maps now track the owner's position, regardless of dimension"),(0,l.kt)("li",{parentName:"ul"},"Worlds can now be set to Invite Only, Friends Only, or Friends of Friends"),(0,l.kt)("li",{parentName:"ul"},"Various improvements and changes to navigating the user interface"),(0,l.kt)("li",{parentName:"ul"},"Redesigned button mapping and added Pick Block for controllers"),(0,l.kt)("li",{parentName:"ul"},"Render Clouds and Fancy Leaves can now be toggled in Video Settings"),(0,l.kt)("li",{parentName:"ul"},"Skins can now be changed from the pause menu"),(0,l.kt)("li",{parentName:"ul"},"Chat messages can now be muted"),(0,l.kt)("li",{parentName:"ul"},"Items picked up are now animated on the hotbar"),(0,l.kt)("li",{parentName:"ul"},"Stained glass and banners will now spawn on End Cities"),(0,l.kt)("li",{parentName:"ul"},"Increased the default player limit on worlds from 5 to 8 on higher-end devices"),(0,l.kt)("li",{parentName:"ul"},"Block placement speed now matches the player's movement speed"),(0,l.kt)("li",{parentName:"ul"},"Temperature decreases with height and it can now snow at high elevations"),(0,l.kt)("li",{parentName:"ul"},"Observer blocks have updated textures and will now blink red when outputting a redstone pulse"),(0,l.kt)("li",{parentName:"ul"},"Adjusted the color that flashes when mobs are attacked"),(0,l.kt)("li",{parentName:"ul"},"Brick Blocks, Nether Brick Blocks, and Clay Blocks have been renamed to better differentiate from other items"),(0,l.kt)("li",{parentName:"ul"},"Underwater particles"),(0,l.kt)("li",{parentName:"ul"},"Block outline selections and Paper Doll can be toggled in the settings")),(0,l.kt)("h2",{id:"bug-fixes"},(0,l.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The moon is now properly oriented, while the stars correctly traverse the heavens"),(0,l.kt)("li",{parentName:"ul"},"Ghasts will no longer shoot fireballs from farther than they can be seen"),(0,l.kt)("li",{parentName:"ul"},"Fixed missing walking sounds for mobs"),(0,l.kt)("li",{parentName:"ul"},"Arrows now shake upon impact with blocks"),(0,l.kt)("li",{parentName:"ul"},"Players will no longer burn when standing near lava in the Nether"),(0,l.kt)("li",{parentName:"ul"},"Observer blocks can now detect many more block changes"),(0,l.kt)("li",{parentName:"ul"},"Optimized chunk generation and loading"),(0,l.kt)("li",{parentName:"ul"},"The Lapis Lazuli icon is no longer missing from the Enchantment Table screen"),(0,l.kt)("li",{parentName:"ul"},"Endermen will now drop the blocks they're carrying when they die"),(0,l.kt)("li",{parentName:"ul"},"Wolves tamed by players not present in a session will no longer change their whole body color"),(0,l.kt)("li",{parentName:"ul"},"End rods now give off light particles"),(0,l.kt)("li",{parentName:"ul"},"Increased the strength of the redstone pulse outputted by Observer blocks and they no longer pulse twice when observing a retracting piston"),(0,l.kt)("li",{parentName:"ul"},"Glazed Terracotta now shows proper colors on maps"),(0,l.kt)("li",{parentName:"ul"},"Dandelions can now be crafted into yellow dye when Pocket UI is enabled"),(0,l.kt)("li",{parentName:"ul"},"Fixed quartz pillars not being craftable using Pocket UI"),(0,l.kt)("li",{parentName:"ul"},"Fixed the level up sound not playing for every five levels gained"),(0,l.kt)("li",{parentName:"ul"},"Other players should no longer be seen levitating in their sleep"),(0,l.kt)("li",{parentName:"ul"},"Woodland Mansions will now spawn with birch wood floors instead of oak"),(0,l.kt)("li",{parentName:"ul"},"Witches will now drink Potion of Fire Resistance when standing on Magma blocks"),(0,l.kt)("li",{parentName:"ul"},"Sounds now play when witches drink potions"),(0,l.kt)("li",{parentName:"ul"},"Skeletons, Strays, and Zombie Pigmen now have a chance of spawning with enchanted gear and weapons"),(0,l.kt)("li",{parentName:"ul"},"Skeleton horses can now be saddled"),(0,l.kt)("li",{parentName:"ul"},"Lingering water bottles will now deal damage to Blazes, Endermen, and Snow Golems"),(0,l.kt)("li",{parentName:"ul"},"Only one bucket can be placed in a furnace at a time so buckets will no longer be lost"),(0,l.kt)("li",{parentName:"ul"},"Ghast fireballs can now set obsidian on fire and open Nether portals"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when destroying maps"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when the host enters a portal in multiplayer"),(0,l.kt)("li",{parentName:"ul"},"Empty maps can now be combined with a compass on an anvil to create a locator map"),(0,l.kt)("li",{parentName:"ul"},"Fixed the texture of fences in the inventory and in-hand"),(0,l.kt)("li",{parentName:"ul"},"Fishing now uses the proper loot tables to acquire enchanted items and books"),(0,l.kt)("li",{parentName:"ul"},"The available enchants on enchantment tables will no longer revert back to the originally available enchants upon world reload"),(0,l.kt)("li",{parentName:"ul"},"Evokers will no longer attack players on Peaceful difficulty"),(0,l.kt)("li",{parentName:"ul"},"Fixed mobs not attacking Evokers after being attacked by Evokers"),(0,l.kt)("li",{parentName:"ul"},"The proper sound now plays when Evokers are transforming blue sheep"),(0,l.kt)("li",{parentName:"ul"},"Mining speed with Haste II and Efficiency V has been increased to its correct speed"),(0,l.kt)("li",{parentName:"ul"},"Signs can no longer be set on fire"),(0,l.kt)("li",{parentName:"ul"},"The snow golem's face can now only be seen once it's sheered. No peaking!"),(0,l.kt)("li",{parentName:"ul"},"Fixed the hand placement of tools on the inventory screen"),(0,l.kt)("li",{parentName:"ul"},"Text chat can now be opened with controllers and touch screens when sleeping in a bed"),(0,l.kt)("li",{parentName:"ul"},"Players can now go to bed if there are monsters nearby on Peaceful difficulty"),(0,l.kt)("li",{parentName:"ul"},"Colored beds can no longer be dyed using the same color of dye"),(0,l.kt)("li",{parentName:"ul"},"Trapdoors will now open when placed to adjacent, active power sources"),(0,l.kt)("li",{parentName:"ul"},"Fixed names above baby animals being too high"),(0,l.kt)("li",{parentName:"ul"},"The underside of sandstone slabs now have the cracked texture"),(0,l.kt)("li",{parentName:"ul"},"Directional audio will continue to match the player's point of view while standing still"),(0,l.kt)("li",{parentName:"ul"},"Fixed an item duplication issue that occurred when Pocket UI was enabled"),(0,l.kt)("li",{parentName:"ul"},"Mobs will now avoid cacti, fire, and lava"),(0,l.kt)("li",{parentName:"ul"},"Fixed the position of several items when held in the off-hand"),(0,l.kt)("li",{parentName:"ul"},"Players can now spawn into areas occupied by partial blocks"),(0,l.kt)("li",{parentName:"ul"},"Horses can no longer run off when loading a world if they were leashed to a fence"),(0,l.kt)("li",{parentName:"ul"},"Lead knots can now be untied using right-click"),(0,l.kt)("li",{parentName:"ul"},"Lead knots now play a sound when placed"),(0,l.kt)("li",{parentName:"ul"},"Eating and using bows can now be done while riding in a Minecart for maximum multi-tasking!"),(0,l.kt)("li",{parentName:"ul"},"Incrementally zooming out a map and renaming it on an anvil now costs only experience level"),(0,l.kt)("li",{parentName:"ul"},"Particles will now appear when the Ender Dragon uses its dragon's breath attack while perched"),(0,l.kt)("li",{parentName:"ul"},"Fixed graphical issues that sometimes occurred at sunset"),(0,l.kt)("li",{parentName:"ul"},"The cellular data warning message will now appear in Settings when using a controller"),(0,l.kt)("li",{parentName:"ul"},"Singleplayer worlds no longer appear in the Friends tab"),(0,l.kt)("li",{parentName:"ul"},"Anvils will no longer consume the entire input stack when crafting a map"),(0,l.kt)("li",{parentName:"ul"},"Sheared sheep will no longer drop wool when they die"),(0,l.kt)("li",{parentName:"ul"},"Fixed some players appearing invisible in-game when they should not be"),(0,l.kt)("li",{parentName:"ul"},"Fixed a crash when placing Glazed Terracotta with '/fill' and '/setblock' commands"),(0,l.kt)("li",{parentName:"ul"},"Fixed the controller tooltips shown on the inventory screen when placing and taking items"),(0,l.kt)("li",{parentName:"ul"},"Fixed icons stretching in the inventory when Pocket UI was enabled"),(0,l.kt)("li",{parentName:"ul"},"Increased the pace and smoothness of moving up stairs while riding a mob"),(0,l.kt)("li",{parentName:"ul"},"The crosshair now points at the correct block when sneaking"),(0,l.kt)("li",{parentName:"ul"},"Opening and closing the command block screen will no longer activate an observer block"),(0,l.kt)("li",{parentName:"ul"},"Maps, including exploration maps, can now be obtained using the '/give' command"),(0,l.kt)("li",{parentName:"ul"},"Mooshroom now only spawns on Mycelium blocks"),(0,l.kt)("li",{parentName:"ul"},"Mycelium no longer turns into dirt when there's a giant mushroom above it"),(0,l.kt)("li",{parentName:"ul"},"Fixed seeing through stairs, End portal and hoppers when they are placed next to each other"),(0,l.kt)("li",{parentName:"ul"},"Hoppers will no longer intake items from the side when there is a full block above"),(0,l.kt)("li",{parentName:"ul"},"The chat screen can now be closed by pressing Enter when no text is present"),(0,l.kt)("li",{parentName:"ul"},"Fixed milking a cow with the last bucket in a stack not giving milk"),(0,l.kt)("li",{parentName:"ul"},"Players can no longer drink milk instantly after milking a cow"),(0,l.kt)("li",{parentName:"ul"},"Blocks can now be placed on top of fences that have Lead knots attached"),(0,l.kt)("li",{parentName:"ul"},"Explosions near water will now properly deal damage to players and mobs"),(0,l.kt)("li",{parentName:"ul"},"The Wither will no longer play overlapping sounds"),(0,l.kt)("li",{parentName:"ul"},"Items will now be pushed when a transparent block is placed over them"),(0,l.kt)("li",{parentName:"ul"},"Creepers now flash properly when they're about to explode"),(0,l.kt)("li",{parentName:"ul"},"Boats no longer continue to move when the player leaves the boat and a mob is still in it"),(0,l.kt)("li",{parentName:"ul"},"Controller sensitivity is now set to 50 by default"),(0,l.kt)("li",{parentName:"ul"},"The pause button now appears on the HUD (Android Only)"),(0,l.kt)("li",{parentName:"ul"},"Chicken jockeys will no longer sink in the water"),(0,l.kt)("li",{parentName:"ul"},"Players with Op status will now receive messages about commands that were entered by another Op"),(0,l.kt)("li",{parentName:"ul"},"Lingering potions will no longer clip through the player that threw them"),(0,l.kt)("li",{parentName:"ul"},"Block highlighting will no longer appear when Hide GUI is enabled"),(0,l.kt)("li",{parentName:"ul"},"Different top slab types no longer override each other"),(0,l.kt)("li",{parentName:"ul"},"Arrows will no longer infinitely bounce off the top of players in Creative mode"),(0,l.kt)("li",{parentName:"ul"},"Fixed a rogue pixel on the nametag texture"),(0,l.kt)("li",{parentName:"ul"},"Creepers will now take damage if they fall while following players"),(0,l.kt)("li",{parentName:"ul"},"End Stone now has the proper blast resistance"),(0,l.kt)("li",{parentName:"ul"},"Evocation fangs can now be summoned using commands"),(0,l.kt)("li",{parentName:"ul"},"Mobs will now drop loot and XP orbs when killed with a splash or lingering Potion of Decay"),(0,l.kt)("li",{parentName:"ul"},"Evokers no longer run away from invisible players"),(0,l.kt)("li",{parentName:"ul"},"Vexes will now attack villagers and iron golems"),(0,l.kt)("li",{parentName:"ul"},"Fixed several issues with excessive mob spawning and despawning"),(0,l.kt)("li",{parentName:"ul"},"Fixed hostile mobs spawning in well-lit areas"),(0,l.kt)("li",{parentName:"ul"},"Improved performance of mob AI"),(0,l.kt)("li",{parentName:"ul"},"Arrows are no longer deflected when shooting at burning mobs"),(0,l.kt)("li",{parentName:"ul"},"When fishing, the bobber will now submerge and play the right sound when a fish bites"),(0,l.kt)("li",{parentName:"ul"},"A message will now display when a bed is too far away when attempting to sleep"),(0,l.kt)("li",{parentName:"ul"},"Realms that were named with the '\xa7' symbol can now be renamed"),(0,l.kt)("li",{parentName:"ul"},"Command block chat messages will no longer appear on the pause menu"),(0,l.kt)("li",{parentName:"ul"},"Slimes will no longer clip through blocks"),(0,l.kt)("li",{parentName:"ul"},"Fish hooks will now properly stick to mobs"),(0,l.kt)("li",{parentName:"ul"},"Adventure mode can now be selected in the world settings for imported template worlds that were set to Adventure by default"),(0,l.kt)("li",{parentName:"ul"},"Baby villagers have learned how to hold items the right way"),(0,l.kt)("li",{parentName:"ul"},"Farmer villagers now trade 5-7 apples for one emerald"),(0,l.kt)("li",{parentName:"ul"},"Open fence gates can no longer push or pull entities"),(0,l.kt)("li",{parentName:"ul"},"The Ender Dragon's wings will no longer flicker"),(0,l.kt)("li",{parentName:"ul"},"Diorite, andesite, and granite can no longer be used as a replacement for stone in crafting recipes"),(0,l.kt)("li",{parentName:"ul"},"The texture on top of TNT no longer rotates when ignited"),(0,l.kt)("li",{parentName:"ul"},"Adult polar bears now drop the correct amount of XP"),(0,l.kt)("li",{parentName:"ul"},"Cauldron water will no longer briefly change color when pushed by a piston"),(0,l.kt)("li",{parentName:"ul"},"Llamas will no longer creepily turn their heads to stare at you while riding them"),(0,l.kt)("li",{parentName:"ul"},"Various fixes to the Marketplace screens"),(0,l.kt)("li",{parentName:"ul"},"Bats can no longer swim underwater"),(0,l.kt)("li",{parentName:"ul"},"Redstone repeaters and comparators now have the proper bottom texture"),(0,l.kt)("li",{parentName:"ul"},"Paintings can now occupy same space as snow and carpet"),(0,l.kt)("li",{parentName:"ul"},"The '/effect instant","_","damage' command will now cause damage if ","[","amplifier: int","]"," is 255"),(0,l.kt)("li",{parentName:"ul"},"The GUI can now be hidden by pressing F1 while riding in boats"),(0,l.kt)("li",{parentName:"ul"},"Villagers no longer accept Charcoal as Coal whole trading"),(0,l.kt)("li",{parentName:"ul"},"Fishing rods are now held properly in-hand"),(0,l.kt)("li",{parentName:"ul"},"The base of end crystals have been adjusted"),(0,l.kt)("li",{parentName:"ul"},"Nether Brick block side textures have been brightened"),(0,l.kt)("li",{parentName:"ul"},"The title now displays properly on the dispenser screen"),(0,l.kt)("li",{parentName:"ul"},"Iron Golems can no longer be knocked back with Punch arrows"),(0,l.kt)("li",{parentName:"ul"},"Iron Golems will now avoid fire"),(0,l.kt)("li",{parentName:"ul"},"Beds can no longer be placed in a way that clips through snow layers"),(0,l.kt)("li",{parentName:"ul"},"New trade offers from villagers can be observed quicker, after the trades are unlocked"),(0,l.kt)("li",{parentName:"ul"},"Various fixes to the Storage screen"),(0,l.kt)("li",{parentName:"ul"},"Setting the 'sendcommandfeedback' gamerule to false no longer prevents players from displaying non-op commands such as '/list' and '/help'"),(0,l.kt)("li",{parentName:"ul"},"Fixed texture clipping on the inside of Shulker boxes"),(0,l.kt)("li",{parentName:"ul"},"Shulker box opening and closing animations are now much faster"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes are now held properly in-hand"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes will now remain open until all players have closed the inventory"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes can now be opened when placed adjacent to Shulkers"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes placed by dispensers will now rotate based on the surrounding blocks"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes are no longer misaligned in item frames"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes now play the proper sound when placed and broken"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes dropped as an item can now be destroyed by explosions"),(0,l.kt)("li",{parentName:"ul"},"Shulker boxes now change their collision box when opened"),(0,l.kt)("li",{parentName:"ul"},"Shulkers can now be teleported using commands"),(0,l.kt)("li",{parentName:"ul"},"Shulkers can no longer be set on fire"),(0,l.kt)("li",{parentName:"ul"},"Shulkers have improved their camouflage and have restored their original color"),(0,l.kt)("li",{parentName:"ul"},"Shulkers can now be spawned upside-down from spawn eggs"),(0,l.kt)("li",{parentName:"ul"},"Shulkers can no longer teleport into a block already occupied by another Shulker"),(0,l.kt)("li",{parentName:"ul"},"Shulkers will now teleport out of water"),(0,l.kt)("li",{parentName:"ul"},"The hand will no longer wave repeatedly when a player can't build"),(0,l.kt)("li",{parentName:"ul"},"Bone meal is now properly consumed on tall grass and ferns"),(0,l.kt)("li",{parentName:"ul"},"Minecarts now wobble correctly when passing over activator rails"),(0,l.kt)("li",{parentName:"ul"},"Giving a resistance amplifier of 8 or higher no longer causes players to gain absorption health when hurt"),(0,l.kt)("li",{parentName:"ul"},"Creepers stop exploding now if they lose their target"),(0,l.kt)("li",{parentName:"ul"},"Fixed up the Ender Dragon's death animation so its wings no longer turn white"),(0,l.kt)("li",{parentName:"ul"},"Riding a horse while eating or drinking will no longer slow it down"),(0,l.kt)("li",{parentName:"ul"},"Light no longer stays visible after burning a two-block tall plant"),(0,l.kt)("li",{parentName:"ul"},"Entities that are teleported while in boats or minecarts will no longer be teleported underground"),(0,l.kt)("li",{parentName:"ul"},"Improved performance when there are many items on the ground, like during Wither fights"),(0,l.kt)("li",{parentName:"ul"},"Adult polar bears now panic when on fire"),(0,l.kt)("li",{parentName:"ul"},"Pistons now push arrows"),(0,l.kt)("li",{parentName:"ul"},"Fixed the text height on signs in the Greek Mythology Texture Pack"),(0,l.kt)("li",{parentName:"ul"},"Custom skins will now show properly on the skin picker without having to re-launch the game"),(0,l.kt)("li",{parentName:"ul"},"The '/fill' command will now return proper results, if failed"),(0,l.kt)("li",{parentName:"ul"},"The '/fill' command now gives repeaters the correct delay"),(0,l.kt)("li",{parentName:"ul"},"'Pick block' will no longer behave strangely after dropping items from the inventory"),(0,l.kt)("li",{parentName:"ul"},"Blocks that are affected by gravity will no longer break when pushed by a piston facing up"),(0,l.kt)("li",{parentName:"ul"},"Repeating command blocks that are copied with 'pick block' and then placed will now activate repeatedly"),(0,l.kt)("li",{parentName:"ul"},'The ""Open"" button will no longer appear when looking at a command block in minecart while playing Survival'),(0,l.kt)("li",{parentName:"ul"},"Fixed redstone ore producing too many particles when items are dropped on top of them"),(0,l.kt)("li",{parentName:"ul"},"Fixed jittery squid movement after a player or mob touches it"),(0,l.kt)("li",{parentName:"ul"},"Mobs will now immediately take damage from magma blocks"),(0,l.kt)("li",{parentName:"ul"},"The Wither will now die in the void"),(0,l.kt)("li",{parentName:"ul"},"The Wither's heads will now look around more and skulls will now shoot from multiple heads"),(0,l.kt)("li",{parentName:"ul"},"Adjusted the look of Buttons that are equipped in-hand"),(0,l.kt)("li",{parentName:"ul"},"Large chests will now clone correctly when using the '/clone' command"),(0,l.kt)("li",{parentName:"ul"},"Fixed the missing wolf idle sounds"),(0,l.kt)("li",{parentName:"ul"},"Fixed some mismatched villager trading sounds"),(0,l.kt)("li",{parentName:"ul"},"Cats now purrrrrr again"),(0,l.kt)("li",{parentName:"ul"},"Beds placed with the '/fill' and '/setblock' commands will no longer be invisible"),(0,l.kt)("li",{parentName:"ul"},"Players will no longer fall one block when teleporting with an ender pearl"),(0,l.kt)("li",{parentName:"ul"},"Magma Cubes will now take drowning damage"),(0,l.kt)("li",{parentName:"ul"},"Villagers will now run away from Vindicators, Evokers, and Vexes"),(0,l.kt)("li",{parentName:"ul"},"Can no longer see through blocks when viewed from below and underwater"),(0,l.kt)("li",{parentName:"ul"},"Non-dyed leather armor with no longer use up water from a cauldron"),(0,l.kt)("li",{parentName:"ul"},"'Pick Block' now works on llamas to get llama spawn eggs"),(0,l.kt)("li",{parentName:"ul"},"Arrows are now destroyed by end crystal explosions"),(0,l.kt)("li",{parentName:"ul"},'Arrows are now destroyed when using ""/kill @e',"[","type=arrow","]",'""'),(0,l.kt)("li",{parentName:"ul"},"Other mob heads no longer appear momentarily when a mob head is placed"),(0,l.kt)("li",{parentName:"ul"},"Fixed exploration maps showing as blank until the game is re-launched"),(0,l.kt)("li",{parentName:"ul"},"Fixed Add-Ons with dependencies not loading if there was another activated pack with dependencies"),(0,l.kt)("li",{parentName:"ul"},"Baby mob heads are now scaled properly with Add-Ons"),(0,l.kt)("li",{parentName:"ul"},"When an Ocelot spawns with two baby Ocelots, the baby Ocelots can now be tamed"),(0,l.kt)("li",{parentName:"ul"},"Mobs are now properly affected by Splash Potion of Strength"),(0,l.kt)("li",{parentName:"ul"},"Seeds will no longer pop off of covered farmland at night"),(0,l.kt)("li",{parentName:"ul"},"Farmland will only dry up if there is no nearby water and nothing is planted on it"),(0,l.kt)("li",{parentName:"ul"},"Monster spawners are now only able to spawn up to 4 mobs at a time"),(0,l.kt)("li",{parentName:"ul"},"Arrows can now be picked up after shooting at Endermen"),(0,l.kt)("li",{parentName:"ul"},"Air bubbles will no longer appear on the HUD when suffocating inside blocks"),(0,l.kt)("li",{parentName:"ul"},"The '/setworldspawn' command can no longer be executed if the Y coordinate has a negative value"),(0,l.kt)("li",{parentName:"ul"},"Zombie Villagers now sit at the proper height in boats and minecarts"),(0,l.kt)("li",{parentName:"ul"},"Baby Zombie Jockeys will now properly mount mobs"),(0,l.kt)("li",{parentName:"ul"},"Rabbits now hop at the proper speed"),(0,l.kt)("li",{parentName:"ul"},"The 'mobgriefing' gamerule now applies to Monster Egg blocks"),(0,l.kt)("li",{parentName:"ul"},"Blocks can no longer be seen through when flying close to the ground with Elytra in third-person"),(0,l.kt)("li",{parentName:"ul"},"Players and mobs can no longer activate pressure plates beside them"),(0,l.kt)("li",{parentName:"ul"},"Fixed an issue that showed the mining animation for blocks that were being stood on"),(0,l.kt)("li",{parentName:"ul"},"The '/clear' command will now properly clear glazed terracotta that has been renamed"),(0,l.kt)("li",{parentName:"ul"},"Moss stone is now much easier to find in mega taiga biomes"),(0,l.kt)("li",{parentName:"ul"},"Fixed and issue that caused frosted ice not to form when walking very slowly and sneaking while wearing Frost Walker boots"),(0,l.kt)("li",{parentName:"ul"},"Fixed End Portal block top texture rotating when being placed"),(0,l.kt)("li",{parentName:"ul"},"Beds, pistons, and enchantment tables will now render properly on the edge of the screen")))}c.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),o=a(85162);const i={},s=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,l.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},34282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),r=a(88247),o=a(5214);const i={sidebar_position:99999978,title:"Minecraft Win10/Android Beta - 1.2 Build 1",tags:["Official","Changelog","Pocket","undefined"]},s="Minecraft Win10/Android Beta - 1.2 Build 1",p={unversionedId:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README",id:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README",title:"Minecraft Win10/Android Beta - 1.2 Build 1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1",slug:"/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999978,frontMatter:{sidebar_position:99999978,title:"Minecraft Win10/Android Beta - 1.2 Build 1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Win10/Android Beta - 1.2 Build 2",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/"},next:{title:"MCPE Android Beta - 1.1.3 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1.3_Build_2/"}},u={},c=[],d={toc:c};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minecraft-win10android-beta---12-build-1"},"Minecraft Win10/Android Beta - 1.2 Build 1"),(0,l.kt)(r.default,{gameplayChangelog:(0,l.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);