"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[87651,8162,31164],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>m});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=l,m=g["".concat(s,".").concat(d)]||g[d]||c[d]||r;return n?t.createElement(m,o(o({ref:a},u),{},{components:n})):t.createElement(m,o({ref:a},u))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:n},a)}},18228:(e,a,n)=>{n.d(a,{A:()=>k});var t=n(58168),l=n(96540),r=n(20053),o=n(23104),i=n(56347),s=n(57485),p=n(31682),u=n(89466);function g(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function c(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??g(n);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function h(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=c(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[s,p]=m({queryString:n,groupId:t}),[g,h]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,u.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),y=(()=>{const e=s??g;return d({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,r]),tabValues:r}}var y=n(92303);const w={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:n,selectedValue:i,selectValue:s,tabValues:p,rightElement:u}=e;const g=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const a=e.currentTarget,n=g.indexOf(a),t=p[n].value;t!==i&&(c(a),s(t))},m=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=g.indexOf(e.currentTarget)+1;a=g[n]??g[0];break}case"ArrowLeft":{const n=g.indexOf(e.currentTarget)-1;a=g[n]??g[g.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},p.map((e=>{let{value:a,label:n,attributes:o}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>g.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.A)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),n??a)})),u?l.createElement("div",{className:"w-full"},u):void 0)}function f(e){let{lazy:a,children:n,selectedValue:t}=e;if(a){const e=n.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function N(e){const a=h(e);return l.createElement("div",{className:(0,r.A)("tabs-container",w.tabList)},l.createElement(b,(0,t.A)({},e,a)),l.createElement(f,(0,t.A)({},e,a)))}function k(e){const a=(0,y.A)();return l.createElement(N,(0,t.A)({key:String(a)},e))}},8456:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=n(58168),l=(n(96540),n(15680));const r={},o=void 0,i={unversionedId:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",id:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay.mdx",sourceDirName:"changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1",slug:"/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",permalink:"/en/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:p},g="wrapper";function c(e){let{components:a,...n}=e;return(0,l.yg)(g,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,l.yg)("h2",{id:"new-features"},(0,l.yg)("strong",{parentName:"h2"},"New Features:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Stained Glass")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Fireworks (with Elytra boosting!)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Parrots")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Banners")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Armor Stands")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Jukebox and music discs")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Recipe Book")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Book and Quill")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Ravines")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Coarse Dirt")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"New world start options:")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Starting Map")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Bonus Chest")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Trust Players")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"New game rules:")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"TNT Explodes")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Natural Regeneration")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Added '/tickingarea' command to create areas that still update when no players are there")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Player permissions")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Zombie Villager spawn egg")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"In-game host options")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"New loading screens with funny and helpful tips")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"How to Play screen")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Remix 3D export functionality (Windows 10 only)"))),(0,l.yg)("h2",{id:"tweaks"},(0,l.yg)("strong",{parentName:"h2"},"Tweaks:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Blaze Powder is now needed to fuel brewing stands"),(0,l.yg)("li",{parentName:"ul"},"Ice blocks are now transparent"),(0,l.yg)("li",{parentName:"ul"},"Maps can now be held off-hand and show the heads of players' skins"),(0,l.yg)("li",{parentName:"ul"},"Locator maps now track the owner's position, regardless of dimension"),(0,l.yg)("li",{parentName:"ul"},"Worlds can now be set to Invite Only, Friends Only, or Friends of Friends"),(0,l.yg)("li",{parentName:"ul"},"Various improvements and changes to navigating the user interface"),(0,l.yg)("li",{parentName:"ul"},"Redesigned button mapping and added Pick Block for controllers"),(0,l.yg)("li",{parentName:"ul"},"Render Clouds and Fancy Leaves can now be toggled in Video Settings"),(0,l.yg)("li",{parentName:"ul"},"Skins can now be changed from the pause menu"),(0,l.yg)("li",{parentName:"ul"},"Chat messages can now be muted"),(0,l.yg)("li",{parentName:"ul"},"Items picked up are now animated on the hotbar"),(0,l.yg)("li",{parentName:"ul"},"Stained glass and banners will now spawn on End Cities"),(0,l.yg)("li",{parentName:"ul"},"Increased the default player limit on worlds from 5 to 8 on higher-end devices"),(0,l.yg)("li",{parentName:"ul"},"Block placement speed now matches the player's movement speed"),(0,l.yg)("li",{parentName:"ul"},"Temperature decreases with height and it can now snow at high elevations"),(0,l.yg)("li",{parentName:"ul"},"Observer blocks have updated textures and will now blink red when outputting a redstone pulse"),(0,l.yg)("li",{parentName:"ul"},"Adjusted the color that flashes when mobs are attacked"),(0,l.yg)("li",{parentName:"ul"},"Brick Blocks, Nether Brick Blocks, and Clay Blocks have been renamed to better differentiate from other items"),(0,l.yg)("li",{parentName:"ul"},"Underwater particles"),(0,l.yg)("li",{parentName:"ul"},"Block outline selections and Paper Doll can be toggled in the settings")),(0,l.yg)("h2",{id:"bug-fixes"},(0,l.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"The moon is now properly oriented, while the stars correctly traverse the heavens"),(0,l.yg)("li",{parentName:"ul"},"Ghasts will no longer shoot fireballs from farther than they can be seen"),(0,l.yg)("li",{parentName:"ul"},"Fixed missing walking sounds for mobs"),(0,l.yg)("li",{parentName:"ul"},"Arrows now shake upon impact with blocks"),(0,l.yg)("li",{parentName:"ul"},"Players will no longer burn when standing near lava in the Nether"),(0,l.yg)("li",{parentName:"ul"},"Observer blocks can now detect many more block changes"),(0,l.yg)("li",{parentName:"ul"},"Optimized chunk generation and loading"),(0,l.yg)("li",{parentName:"ul"},"The Lapis Lazuli icon is no longer missing from the Enchantment Table screen"),(0,l.yg)("li",{parentName:"ul"},"Endermen will now drop the blocks they're carrying when they die"),(0,l.yg)("li",{parentName:"ul"},"Wolves tamed by players not present in a session will no longer change their whole body color"),(0,l.yg)("li",{parentName:"ul"},"End rods now give off light particles"),(0,l.yg)("li",{parentName:"ul"},"Increased the strength of the redstone pulse outputted by Observer blocks and they no longer pulse twice when observing a retracting piston"),(0,l.yg)("li",{parentName:"ul"},"Glazed Terracotta now shows proper colors on maps"),(0,l.yg)("li",{parentName:"ul"},"Dandelions can now be crafted into yellow dye when Pocket UI is enabled"),(0,l.yg)("li",{parentName:"ul"},"Fixed quartz pillars not being craftable using Pocket UI"),(0,l.yg)("li",{parentName:"ul"},"Fixed the level up sound not playing for every five levels gained"),(0,l.yg)("li",{parentName:"ul"},"Other players should no longer be seen levitating in their sleep"),(0,l.yg)("li",{parentName:"ul"},"Woodland Mansions will now spawn with birch wood floors instead of oak"),(0,l.yg)("li",{parentName:"ul"},"Witches will now drink Potion of Fire Resistance when standing on Magma blocks"),(0,l.yg)("li",{parentName:"ul"},"Sounds now play when witches drink potions"),(0,l.yg)("li",{parentName:"ul"},"Skeletons, Strays, and Zombie Pigmen now have a chance of spawning with enchanted gear and weapons"),(0,l.yg)("li",{parentName:"ul"},"Skeleton horses can now be saddled"),(0,l.yg)("li",{parentName:"ul"},"Lingering water bottles will now deal damage to Blazes, Endermen, and Snow Golems"),(0,l.yg)("li",{parentName:"ul"},"Only one bucket can be placed in a furnace at a time so buckets will no longer be lost"),(0,l.yg)("li",{parentName:"ul"},"Ghast fireballs can now set obsidian on fire and open Nether portals"),(0,l.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when destroying maps"),(0,l.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when the host enters a portal in multiplayer"),(0,l.yg)("li",{parentName:"ul"},"Empty maps can now be combined with a compass on an anvil to create a locator map"),(0,l.yg)("li",{parentName:"ul"},"Fixed the texture of fences in the inventory and in-hand"),(0,l.yg)("li",{parentName:"ul"},"Fishing now uses the proper loot tables to acquire enchanted items and books"),(0,l.yg)("li",{parentName:"ul"},"The available enchants on enchantment tables will no longer revert back to the originally available enchants upon world reload"),(0,l.yg)("li",{parentName:"ul"},"Evokers will no longer attack players on Peaceful difficulty"),(0,l.yg)("li",{parentName:"ul"},"Fixed mobs not attacking Evokers after being attacked by Evokers"),(0,l.yg)("li",{parentName:"ul"},"The proper sound now plays when Evokers are transforming blue sheep"),(0,l.yg)("li",{parentName:"ul"},"Mining speed with Haste II and Efficiency V has been increased to its correct speed"),(0,l.yg)("li",{parentName:"ul"},"Signs can no longer be set on fire"),(0,l.yg)("li",{parentName:"ul"},"The snow golem's face can now only be seen once it's sheered. No peaking!"),(0,l.yg)("li",{parentName:"ul"},"Fixed the hand placement of tools on the inventory screen"),(0,l.yg)("li",{parentName:"ul"},"Text chat can now be opened with controllers and touch screens when sleeping in a bed"),(0,l.yg)("li",{parentName:"ul"},"Players can now go to bed if there are monsters nearby on Peaceful difficulty"),(0,l.yg)("li",{parentName:"ul"},"Colored beds can no longer be dyed using the same color of dye"),(0,l.yg)("li",{parentName:"ul"},"Trapdoors will now open when placed to adjacent, active power sources"),(0,l.yg)("li",{parentName:"ul"},"Fixed names above baby animals being too high"),(0,l.yg)("li",{parentName:"ul"},"The underside of sandstone slabs now have the cracked texture"),(0,l.yg)("li",{parentName:"ul"},"Directional audio will continue to match the player's point of view while standing still"),(0,l.yg)("li",{parentName:"ul"},"Fixed an item duplication issue that occurred when Pocket UI was enabled"),(0,l.yg)("li",{parentName:"ul"},"Mobs will now avoid cacti, fire, and lava"),(0,l.yg)("li",{parentName:"ul"},"Fixed the position of several items when held in the off-hand"),(0,l.yg)("li",{parentName:"ul"},"Players can now spawn into areas occupied by partial blocks"),(0,l.yg)("li",{parentName:"ul"},"Horses can no longer run off when loading a world if they were leashed to a fence"),(0,l.yg)("li",{parentName:"ul"},"Lead knots can now be untied using right-click"),(0,l.yg)("li",{parentName:"ul"},"Lead knots now play a sound when placed"),(0,l.yg)("li",{parentName:"ul"},"Eating and using bows can now be done while riding in a Minecart for maximum multi-tasking!"),(0,l.yg)("li",{parentName:"ul"},"Incrementally zooming out a map and renaming it on an anvil now costs only experience level"),(0,l.yg)("li",{parentName:"ul"},"Particles will now appear when the Ender Dragon uses its dragon's breath attack while perched"),(0,l.yg)("li",{parentName:"ul"},"Fixed graphical issues that sometimes occurred at sunset"),(0,l.yg)("li",{parentName:"ul"},"The cellular data warning message will now appear in Settings when using a controller"),(0,l.yg)("li",{parentName:"ul"},"Singleplayer worlds no longer appear in the Friends tab"),(0,l.yg)("li",{parentName:"ul"},"Anvils will no longer consume the entire input stack when crafting a map"),(0,l.yg)("li",{parentName:"ul"},"Sheared sheep will no longer drop wool when they die"),(0,l.yg)("li",{parentName:"ul"},"Fixed some players appearing invisible in-game when they should not be"),(0,l.yg)("li",{parentName:"ul"},"Fixed a crash when placing Glazed Terracotta with '/fill' and '/setblock' commands"),(0,l.yg)("li",{parentName:"ul"},"Fixed the controller tooltips shown on the inventory screen when placing and taking items"),(0,l.yg)("li",{parentName:"ul"},"Fixed icons stretching in the inventory when Pocket UI was enabled"),(0,l.yg)("li",{parentName:"ul"},"Increased the pace and smoothness of moving up stairs while riding a mob"),(0,l.yg)("li",{parentName:"ul"},"The crosshair now points at the correct block when sneaking"),(0,l.yg)("li",{parentName:"ul"},"Opening and closing the command block screen will no longer activate an observer block"),(0,l.yg)("li",{parentName:"ul"},"Maps, including exploration maps, can now be obtained using the '/give' command"),(0,l.yg)("li",{parentName:"ul"},"Mooshroom now only spawns on Mycelium blocks"),(0,l.yg)("li",{parentName:"ul"},"Mycelium no longer turns into dirt when there's a giant mushroom above it"),(0,l.yg)("li",{parentName:"ul"},"Fixed seeing through stairs, End portal and hoppers when they are placed next to each other"),(0,l.yg)("li",{parentName:"ul"},"Hoppers will no longer intake items from the side when there is a full block above"),(0,l.yg)("li",{parentName:"ul"},"The chat screen can now be closed by pressing Enter when no text is present"),(0,l.yg)("li",{parentName:"ul"},"Fixed milking a cow with the last bucket in a stack not giving milk"),(0,l.yg)("li",{parentName:"ul"},"Players can no longer drink milk instantly after milking a cow"),(0,l.yg)("li",{parentName:"ul"},"Blocks can now be placed on top of fences that have Lead knots attached"),(0,l.yg)("li",{parentName:"ul"},"Explosions near water will now properly deal damage to players and mobs"),(0,l.yg)("li",{parentName:"ul"},"The Wither will no longer play overlapping sounds"),(0,l.yg)("li",{parentName:"ul"},"Items will now be pushed when a transparent block is placed over them"),(0,l.yg)("li",{parentName:"ul"},"Creepers now flash properly when they're about to explode"),(0,l.yg)("li",{parentName:"ul"},"Boats no longer continue to move when the player leaves the boat and a mob is still in it"),(0,l.yg)("li",{parentName:"ul"},"Controller sensitivity is now set to 50 by default"),(0,l.yg)("li",{parentName:"ul"},"The pause button now appears on the HUD (Android Only)"),(0,l.yg)("li",{parentName:"ul"},"Chicken jockeys will no longer sink in the water"),(0,l.yg)("li",{parentName:"ul"},"Players with Op status will now receive messages about commands that were entered by another Op"),(0,l.yg)("li",{parentName:"ul"},"Lingering potions will no longer clip through the player that threw them"),(0,l.yg)("li",{parentName:"ul"},"Block highlighting will no longer appear when Hide GUI is enabled"),(0,l.yg)("li",{parentName:"ul"},"Different top slab types no longer override each other"),(0,l.yg)("li",{parentName:"ul"},"Arrows will no longer infinitely bounce off the top of players in Creative mode"),(0,l.yg)("li",{parentName:"ul"},"Fixed a rogue pixel on the nametag texture"),(0,l.yg)("li",{parentName:"ul"},"Creepers will now take damage if they fall while following players"),(0,l.yg)("li",{parentName:"ul"},"End Stone now has the proper blast resistance"),(0,l.yg)("li",{parentName:"ul"},"Evocation fangs can now be summoned using commands"),(0,l.yg)("li",{parentName:"ul"},"Mobs will now drop loot and XP orbs when killed with a splash or lingering Potion of Decay"),(0,l.yg)("li",{parentName:"ul"},"Evokers no longer run away from invisible players"),(0,l.yg)("li",{parentName:"ul"},"Vexes will now attack villagers and iron golems"),(0,l.yg)("li",{parentName:"ul"},"Fixed several issues with excessive mob spawning and despawning"),(0,l.yg)("li",{parentName:"ul"},"Fixed hostile mobs spawning in well-lit areas"),(0,l.yg)("li",{parentName:"ul"},"Improved performance of mob AI"),(0,l.yg)("li",{parentName:"ul"},"Arrows are no longer deflected when shooting at burning mobs"),(0,l.yg)("li",{parentName:"ul"},"When fishing, the bobber will now submerge and play the right sound when a fish bites"),(0,l.yg)("li",{parentName:"ul"},"A message will now display when a bed is too far away when attempting to sleep"),(0,l.yg)("li",{parentName:"ul"},"Realms that were named with the '\xa7' symbol can now be renamed"),(0,l.yg)("li",{parentName:"ul"},"Command block chat messages will no longer appear on the pause menu"),(0,l.yg)("li",{parentName:"ul"},"Slimes will no longer clip through blocks"),(0,l.yg)("li",{parentName:"ul"},"Fish hooks will now properly stick to mobs"),(0,l.yg)("li",{parentName:"ul"},"Adventure mode can now be selected in the world settings for imported template worlds that were set to Adventure by default"),(0,l.yg)("li",{parentName:"ul"},"Baby villagers have learned how to hold items the right way"),(0,l.yg)("li",{parentName:"ul"},"Farmer villagers now trade 5-7 apples for one emerald"),(0,l.yg)("li",{parentName:"ul"},"Open fence gates can no longer push or pull entities"),(0,l.yg)("li",{parentName:"ul"},"The Ender Dragon's wings will no longer flicker"),(0,l.yg)("li",{parentName:"ul"},"Diorite, andesite, and granite can no longer be used as a replacement for stone in crafting recipes"),(0,l.yg)("li",{parentName:"ul"},"The texture on top of TNT no longer rotates when ignited"),(0,l.yg)("li",{parentName:"ul"},"Adult polar bears now drop the correct amount of XP"),(0,l.yg)("li",{parentName:"ul"},"Cauldron water will no longer briefly change color when pushed by a piston"),(0,l.yg)("li",{parentName:"ul"},"Llamas will no longer creepily turn their heads to stare at you while riding them"),(0,l.yg)("li",{parentName:"ul"},"Various fixes to the Marketplace screens"),(0,l.yg)("li",{parentName:"ul"},"Bats can no longer swim underwater"),(0,l.yg)("li",{parentName:"ul"},"Redstone repeaters and comparators now have the proper bottom texture"),(0,l.yg)("li",{parentName:"ul"},"Paintings can now occupy same space as snow and carpet"),(0,l.yg)("li",{parentName:"ul"},"The '/effect instant","_","damage' command will now cause damage if ","[","amplifier: int","]"," is 255"),(0,l.yg)("li",{parentName:"ul"},"The GUI can now be hidden by pressing F1 while riding in boats"),(0,l.yg)("li",{parentName:"ul"},"Villagers no longer accept Charcoal as Coal whole trading"),(0,l.yg)("li",{parentName:"ul"},"Fishing rods are now held properly in-hand"),(0,l.yg)("li",{parentName:"ul"},"The base of end crystals have been adjusted"),(0,l.yg)("li",{parentName:"ul"},"Nether Brick block side textures have been brightened"),(0,l.yg)("li",{parentName:"ul"},"The title now displays properly on the dispenser screen"),(0,l.yg)("li",{parentName:"ul"},"Iron Golems can no longer be knocked back with Punch arrows"),(0,l.yg)("li",{parentName:"ul"},"Iron Golems will now avoid fire"),(0,l.yg)("li",{parentName:"ul"},"Beds can no longer be placed in a way that clips through snow layers"),(0,l.yg)("li",{parentName:"ul"},"New trade offers from villagers can be observed quicker, after the trades are unlocked"),(0,l.yg)("li",{parentName:"ul"},"Various fixes to the Storage screen"),(0,l.yg)("li",{parentName:"ul"},"Setting the 'sendcommandfeedback' gamerule to false no longer prevents players from displaying non-op commands such as '/list' and '/help'"),(0,l.yg)("li",{parentName:"ul"},"Fixed texture clipping on the inside of Shulker boxes"),(0,l.yg)("li",{parentName:"ul"},"Shulker box opening and closing animations are now much faster"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes are now held properly in-hand"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes will now remain open until all players have closed the inventory"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes can now be opened when placed adjacent to Shulkers"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes placed by dispensers will now rotate based on the surrounding blocks"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes are no longer misaligned in item frames"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes now play the proper sound when placed and broken"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes dropped as an item can now be destroyed by explosions"),(0,l.yg)("li",{parentName:"ul"},"Shulker boxes now change their collision box when opened"),(0,l.yg)("li",{parentName:"ul"},"Shulkers can now be teleported using commands"),(0,l.yg)("li",{parentName:"ul"},"Shulkers can no longer be set on fire"),(0,l.yg)("li",{parentName:"ul"},"Shulkers have improved their camouflage and have restored their original color"),(0,l.yg)("li",{parentName:"ul"},"Shulkers can now be spawned upside-down from spawn eggs"),(0,l.yg)("li",{parentName:"ul"},"Shulkers can no longer teleport into a block already occupied by another Shulker"),(0,l.yg)("li",{parentName:"ul"},"Shulkers will now teleport out of water"),(0,l.yg)("li",{parentName:"ul"},"The hand will no longer wave repeatedly when a player can't build"),(0,l.yg)("li",{parentName:"ul"},"Bone meal is now properly consumed on tall grass and ferns"),(0,l.yg)("li",{parentName:"ul"},"Minecarts now wobble correctly when passing over activator rails"),(0,l.yg)("li",{parentName:"ul"},"Giving a resistance amplifier of 8 or higher no longer causes players to gain absorption health when hurt"),(0,l.yg)("li",{parentName:"ul"},"Creepers stop exploding now if they lose their target"),(0,l.yg)("li",{parentName:"ul"},"Fixed up the Ender Dragon's death animation so its wings no longer turn white"),(0,l.yg)("li",{parentName:"ul"},"Riding a horse while eating or drinking will no longer slow it down"),(0,l.yg)("li",{parentName:"ul"},"Light no longer stays visible after burning a two-block tall plant"),(0,l.yg)("li",{parentName:"ul"},"Entities that are teleported while in boats or minecarts will no longer be teleported underground"),(0,l.yg)("li",{parentName:"ul"},"Improved performance when there are many items on the ground, like during Wither fights"),(0,l.yg)("li",{parentName:"ul"},"Adult polar bears now panic when on fire"),(0,l.yg)("li",{parentName:"ul"},"Pistons now push arrows"),(0,l.yg)("li",{parentName:"ul"},"Fixed the text height on signs in the Greek Mythology Texture Pack"),(0,l.yg)("li",{parentName:"ul"},"Custom skins will now show properly on the skin picker without having to re-launch the game"),(0,l.yg)("li",{parentName:"ul"},"The '/fill' command will now return proper results, if failed"),(0,l.yg)("li",{parentName:"ul"},"The '/fill' command now gives repeaters the correct delay"),(0,l.yg)("li",{parentName:"ul"},"'Pick block' will no longer behave strangely after dropping items from the inventory"),(0,l.yg)("li",{parentName:"ul"},"Blocks that are affected by gravity will no longer break when pushed by a piston facing up"),(0,l.yg)("li",{parentName:"ul"},"Repeating command blocks that are copied with 'pick block' and then placed will now activate repeatedly"),(0,l.yg)("li",{parentName:"ul"},'The ""Open"" button will no longer appear when looking at a command block in minecart while playing Survival'),(0,l.yg)("li",{parentName:"ul"},"Fixed redstone ore producing too many particles when items are dropped on top of them"),(0,l.yg)("li",{parentName:"ul"},"Fixed jittery squid movement after a player or mob touches it"),(0,l.yg)("li",{parentName:"ul"},"Mobs will now immediately take damage from magma blocks"),(0,l.yg)("li",{parentName:"ul"},"The Wither will now die in the void"),(0,l.yg)("li",{parentName:"ul"},"The Wither's heads will now look around more and skulls will now shoot from multiple heads"),(0,l.yg)("li",{parentName:"ul"},"Adjusted the look of Buttons that are equipped in-hand"),(0,l.yg)("li",{parentName:"ul"},"Large chests will now clone correctly when using the '/clone' command"),(0,l.yg)("li",{parentName:"ul"},"Fixed the missing wolf idle sounds"),(0,l.yg)("li",{parentName:"ul"},"Fixed some mismatched villager trading sounds"),(0,l.yg)("li",{parentName:"ul"},"Cats now purrrrrr again"),(0,l.yg)("li",{parentName:"ul"},"Beds placed with the '/fill' and '/setblock' commands will no longer be invisible"),(0,l.yg)("li",{parentName:"ul"},"Players will no longer fall one block when teleporting with an ender pearl"),(0,l.yg)("li",{parentName:"ul"},"Magma Cubes will now take drowning damage"),(0,l.yg)("li",{parentName:"ul"},"Villagers will now run away from Vindicators, Evokers, and Vexes"),(0,l.yg)("li",{parentName:"ul"},"Can no longer see through blocks when viewed from below and underwater"),(0,l.yg)("li",{parentName:"ul"},"Non-dyed leather armor with no longer use up water from a cauldron"),(0,l.yg)("li",{parentName:"ul"},"'Pick Block' now works on llamas to get llama spawn eggs"),(0,l.yg)("li",{parentName:"ul"},"Arrows are now destroyed by end crystal explosions"),(0,l.yg)("li",{parentName:"ul"},'Arrows are now destroyed when using ""/kill @e',"[","type=arrow","]",'""'),(0,l.yg)("li",{parentName:"ul"},"Other mob heads no longer appear momentarily when a mob head is placed"),(0,l.yg)("li",{parentName:"ul"},"Fixed exploration maps showing as blank until the game is re-launched"),(0,l.yg)("li",{parentName:"ul"},"Fixed Add-Ons with dependencies not loading if there was another activated pack with dependencies"),(0,l.yg)("li",{parentName:"ul"},"Baby mob heads are now scaled properly with Add-Ons"),(0,l.yg)("li",{parentName:"ul"},"When an Ocelot spawns with two baby Ocelots, the baby Ocelots can now be tamed"),(0,l.yg)("li",{parentName:"ul"},"Mobs are now properly affected by Splash Potion of Strength"),(0,l.yg)("li",{parentName:"ul"},"Seeds will no longer pop off of covered farmland at night"),(0,l.yg)("li",{parentName:"ul"},"Farmland will only dry up if there is no nearby water and nothing is planted on it"),(0,l.yg)("li",{parentName:"ul"},"Monster spawners are now only able to spawn up to 4 mobs at a time"),(0,l.yg)("li",{parentName:"ul"},"Arrows can now be picked up after shooting at Endermen"),(0,l.yg)("li",{parentName:"ul"},"Air bubbles will no longer appear on the HUD when suffocating inside blocks"),(0,l.yg)("li",{parentName:"ul"},"The '/setworldspawn' command can no longer be executed if the Y coordinate has a negative value"),(0,l.yg)("li",{parentName:"ul"},"Zombie Villagers now sit at the proper height in boats and minecarts"),(0,l.yg)("li",{parentName:"ul"},"Baby Zombie Jockeys will now properly mount mobs"),(0,l.yg)("li",{parentName:"ul"},"Rabbits now hop at the proper speed"),(0,l.yg)("li",{parentName:"ul"},"The 'mobgriefing' gamerule now applies to Monster Egg blocks"),(0,l.yg)("li",{parentName:"ul"},"Blocks can no longer be seen through when flying close to the ground with Elytra in third-person"),(0,l.yg)("li",{parentName:"ul"},"Players and mobs can no longer activate pressure plates beside them"),(0,l.yg)("li",{parentName:"ul"},"Fixed an issue that showed the mining animation for blocks that were being stood on"),(0,l.yg)("li",{parentName:"ul"},"The '/clear' command will now properly clear glazed terracotta that has been renamed"),(0,l.yg)("li",{parentName:"ul"},"Moss stone is now much easier to find in mega taiga biomes"),(0,l.yg)("li",{parentName:"ul"},"Fixed and issue that caused frosted ice not to form when walking very slowly and sneaking while wearing Frost Walker boots"),(0,l.yg)("li",{parentName:"ul"},"Fixed End Portal block top texture rotating when being placed"),(0,l.yg)("li",{parentName:"ul"},"Beds, pistons, and enchantment tables will now render properly on the edge of the screen")))}c.isMDXComponent=!0},34922:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var t=n(58168),l=(n(96540),n(15680)),r=n(18228),o=n(19365);const i={},s=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},g=[],c={toc:g},d="wrapper";function m(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,l.yg)(o.A,{value:"Full Changelog",mdxType:"TabItem"},(0,l.yg)("div",null,(0,l.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,l.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},38664:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var t=n(58168),l=(n(96540),n(15680)),r=n(34922),o=n(8456);const i={sidebar_position:99999978,title:"Minecraft Win10/Android Beta - 1.2 Build 1",tags:["Official","Changelog","Pocket","undefined"]},s="Minecraft Win10/Android Beta - 1.2 Build 1",p={unversionedId:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README",id:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README",title:"Minecraft Win10/Android Beta - 1.2 Build 1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README.mdx",sourceDirName:"official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1",slug:"/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999978,frontMatter:{sidebar_position:99999978,title:"Minecraft Win10/Android Beta - 1.2 Build 1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"Minecraft Win10/Android Beta - 1.2 Build 2",permalink:"/en/docs/official_changelog/pocket/Minecraft_Win10-Android_Beta_-_1.2_Build_2/"},next:{title:"MCPE Android Beta - 1.1.3 Build 2",permalink:"/en/docs/official_changelog/pocket/MCPE_Android_Beta_-_1.1.3_Build_2/"}},u={},g=[],c={toc:g},d="wrapper";function m(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"minecraft-win10android-beta---12-build-1"},"Minecraft Win10/Android Beta - 1.2 Build 1"),(0,l.yg)(r.default,{gameplayChangelog:(0,l.yg)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);