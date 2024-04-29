"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[23918,79210,64137],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},27676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/57/gameplay",id:"changelog_source/preview/1.16/100/57/gameplay",title:"gameplay",description:"Posted: 24 September 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/57/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/57",slug:"/changelog_source/preview/1.16/100/57/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/57/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/57/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Beta Changes</strong>",id:"beta-changes",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Character Creator</strong>",id:"character-creator",level:2},{value:"<strong>Crafting Screen</strong>",id:"crafting-screen",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Technical Changes</strong>",id:"technical-changes",level:2},{value:"<strong>Items</strong>",id:"items-1",level:2},{value:"<strong>MoveTowardsRestrictionGoal</strong>",id:"movetowardsrestrictiongoal",level:2},{value:"<strong>MoveTowardsDwellingRestrictionGoal</strong>",id:"movetowardsdwellingrestrictiongoal",level:2},{value:"<strong>MoveTowardsHomeRestrictionGoal</strong>",id:"movetowardshomerestrictiongoal",level:2},{value:"<strong>Send Event Goal</strong>",id:"send-event-goal",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 24 September 2020"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,"In this week's beta we've fixed more bugs, and we've also included more technical changes that content creators will find useful!\xa0 Please remember to keep sending us your bug reports at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE"},"bugs.mojang.com"),"!"),(0,r.kt)("h1",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Bug Fixes")),(0,r.kt)("h2",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the game could crash if suspended in one of the new achievement screens"),(0,r.kt)("li",{parentName:"ul"},"Made code optimizations to improve chunk loading performance (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85614"},"MCPE-85614"),")")),(0,r.kt)("h2",{id:"beta-changes"},(0,r.kt)("strong",{parentName:"h2"},"Beta Changes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nether portals no longer break in a ripple pattern (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99650"},"MCPE-99650"),")"),(0,r.kt)("li",{parentName:"ul"},"Spawn eggs can now be used on an underwater Mob Spawner")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with worlds disappearing from the worlds list during crash on world start (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84649"},"MCPE-84649"),")"),(0,r.kt)("li",{parentName:"ul"},'"The Beaconator" achievement can now be reliably unlocked'),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the Archer trophy would not unlock after meeting the criteria (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-86371"},"MCPE-86371"),")"),(0,r.kt)("li",{parentName:"ul"},"End City loot chests now generate correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72920"},"MCPE-72920"),")"),(0,r.kt)("li",{parentName:"ul"},"Basalt pillars now generate in Soulsand Valley again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98961"},"MCPE-98961"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed player collision box not properly sizing when swimming, gliding, etc. (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98271"},"MCPE-98271"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mob spawn range now scales with simulation distance (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-95568"},"MCPE-95568"),")"),(0,r.kt)("li",{parentName:"ul"},"Villagers from older versions now level up correctly when trading (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85013"},"MCPE-85013"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved performance of farmer villagers when harvesting or sowing crops"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug which could prevent farmer villagers from harvesting crops"),(0,r.kt)("li",{parentName:"ul"},"Phantoms wings now make a flapping sound"),(0,r.kt)("li",{parentName:"ul"},"Player-ridden Striders now jump onto magma blocks as well as non-full blocks in front of them when guided by Fungus on a Stick (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77096"},"MCPE-77096"),")"),(0,r.kt)("li",{parentName:"ul"},"Overworld animals leashed to the player no longer become unleashed when the player returns from the Nether"),(0,r.kt)("li",{parentName:"ul"},"Striders now correctly executes the 'move","_","to","_","liquid' goal"),(0,r.kt)("li",{parentName:"ul"},"Baby animals can be tamed once again, before growing up"),(0,r.kt)("li",{parentName:"ul"},"Bees can now only exit Bee Hives and Bee Nests through air blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-97185"},"MCPE-97185"),")")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beehives & Bee Nests now show the correct front facing texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92468"},"MCPE-92468"),")"),(0,r.kt)("li",{parentName:"ul"},"Crimson and Warped Stems/Hyphae are now in their correct creative inventory groups (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74611"},"MCPE-74611"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Item names now appear correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100252"},"MCPE-100252"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglin Snout banner pattern can be found in the inventory again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100269"},"MCPE-100269"),")"),(0,r.kt)("li",{parentName:"ul"},"Banner patterns can now be crafted in the 2x2 crafting grid (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-91247"},"MCPE-91247"),")"),(0,r.kt)("li",{parentName:"ul"},"Craftable items now appear correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100257"},"MCPE-100257"),")"),(0,r.kt)("li",{parentName:"ul"},"Written books no longer exist in the creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100275"},"MCPE-100275"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that meant item damage was not assigned until a world was reloaded (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62324"},"MCPE-62324"),")"),(0,r.kt)("li",{parentName:"ul"},"Player can now see item's durability immediately after crafting it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62324"},"MCPE-62324"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented an empty item from being given back after using a food like soup or stew"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where dropped item stacks could become invisible after merging with another item stack (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71139"},"MCPE-71139"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where iron, gold, and diamond horse armor would all show white (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-94432"},"MCPE-94432"),")"),(0,r.kt)("li",{parentName:"ul"},"Mob heads and Bee spawn eggs now appear correctly in the inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100251"},"MCPE-100251"),")"),(0,r.kt)("li",{parentName:"ul"},"Netherite armour items no longer takes durability loss from player standing on magma (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76532"},"MCPE-76532"),")")),(0,r.kt)("h2",{id:"audio"},(0,r.kt)("strong",{parentName:"h2"},"Audio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pitch written in sound","_","definitions.json is now correctly played (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49430"},"MCPE-49430"),")"),(0,r.kt)("li",{parentName:"ul"},"Phantoms wings now make a flapping sound")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beacon container interface no longer shuffles items around the inventory slots when trying to quick-move items from the inventory while the hotbar is full"),(0,r.kt)("li",{parentName:"ul"},'"Ride Exit" hint now clears Actionbar messages (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-75097"},"MCPE-75097"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated the profanity filter list (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64359"},"MCPE-64359"),")")),(0,r.kt)("h2",{id:"character-creator"},(0,r.kt)("strong",{parentName:"h2"},"Character Creator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Character Creator navigation problems between Featured Items, Achievement Rewards, Emotes, and the Dressing Room (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-89179"},"MCPE-89179"),")")),(0,r.kt)("h2",{id:"crafting-screen"},(0,r.kt)("strong",{parentName:"h2"},"Crafting Screen")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Various improvements to the Crafting Screen UX when using a controller!"),(0,r.kt)("li",{parentName:"ul"},"Items in the inventory will no longer move into the crafting grid when hovering over recipes"),(0,r.kt)("li",{parentName:"ul"},"The selected recipe will no longer be cleared when changing tabs, even if you don't have all the necessary ingredients for that recipe"),(0,r.kt)("li",{parentName:"ul"},"Picking up items while the cursor is hovering over a recipe now updates to the recipe's new index")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pressing the 'Leave Boat' button on touch devices will no longer make the player hit a passenger or destroy the Boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-78113"},"MCPE-78113"),")"),(0,r.kt)("li",{parentName:"ul"},"A button icon has been added to the NPC dialog screen to show which gamepad button to press to close the window"),(0,r.kt)("li",{parentName:"ul"},"The hovered slot data is now cleared properly whenever the cursor is moved off of a item slot. This way the gamepad helpers are correct when you are not hovering on an item slot anymore on any container screen"),(0,r.kt)("li",{parentName:"ul"},"The item name text that appears when the player changes the hotbar selection now anchors from the bottom. This way when it grows, it will not overlap with the hotbar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79566"},"MCPE-79566"),")"),(0,r.kt)("li",{parentName:"ul"},"Change Gamertag and Manage Account buttons on Settings screen (in the Profile section) now opens URLs correctly on iOS and Android")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ClearSpawnPoint slash command"),(0,r.kt)("li",{parentName:"ul"},"Added a new /event command that can be used to trigger an event on an entity"),(0,r.kt)("li",{parentName:"ul"},"Using\xa0/spawnpointcommand will not affect Players that are sleeping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-91565"},"MCPE-91565"),")")),(0,r.kt)("h2",{id:"technical-changes"},(0,r.kt)("strong",{parentName:"h2"},"Technical Changes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Item Lock components to allow for items to be locked in the inventory, locked in a slot, or kept on death"),(0,r.kt)("li",{parentName:"ul"},"Added a new\xa0loop","_","delayfield to skeletal animation files that controls how to wait between each iteration of a looping animation"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0start","_","delayfields in skeletal animations were being used for both the initial delay before playing an animation and for inter-loop delays"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Android and included a more descriptive content error to print shader linker problem on screen"),(0,r.kt)("li",{parentName:"ul"},"Added camerashake command to enable a camera shaking effect"),(0,r.kt)("li",{parentName:"ul"},'Villagers/zombie villagers will once again correctly spawn as a baby when using the summon command to summon them with the event "minecraft:entity',"_",'born"'),(0,r.kt)("li",{parentName:"ul"},"Older command versions using /execute will now use the proper position for command selectors when calculating the radius")),(0,r.kt)("h2",{id:"items-1"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Banners using the "set',"_","banner","_",'details" function no longer throw a content error when a "base',"_",'color" isn\'t specificed, but rather only when the "base',"_",'color" is invalid'),(0,r.kt)("li",{parentName:"ul"},"Added 'decrement","_","count' event response for items")),(0,r.kt)("h2",{id:"movetowardsrestrictiongoal"},(0,r.kt)("strong",{parentName:"h2"},"MoveTowardsRestrictionGoal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This goal has been removed in favor of the two new child goals that make the behavior more clear. The behavior works the same, but is now separated out properly into the two goals")),(0,r.kt)("h2",{id:"movetowardsdwellingrestrictiongoal"},(0,r.kt)("strong",{parentName:"h2"},"MoveTowardsDwellingRestrictionGoal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This goal is for Actors that are part of the Village construct"),(0,r.kt)("li",{parentName:"ul"},'The "DwellerComponent" is necessary for this goal')),(0,r.kt)("h2",{id:"movetowardshomerestrictiongoal"},(0,r.kt)("strong",{parentName:"h2"},"MoveTowardsHomeRestrictionGoal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "HomeComponent" is necessary for this goal'),(0,r.kt)("li",{parentName:"ul"},'Exposed a new data parameter for the range at which the Actor will stay within in relation to their home: "restriction',"_",'radius"')),(0,r.kt)("h2",{id:"send-event-goal"},(0,r.kt)("strong",{parentName:"h2"},"Send Event Goal")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"minecraft:behavior.send","_","event no longer uses -1 in max","_","activation","_","range as a value to indicate unlimited range, the default has been changed to 32"),(0,r.kt)("li",{parentName:"ul"},"Added content log warnings for when 'min","_","activation","_","range' and 'max","_","activation","_","range' is less than 0"),(0,r.kt)("li",{parentName:"ul"},"Added content log warnings for when 'min","_","activation","_","range' is greater than 'max","_","activation","_","range'"),(0,r.kt)("li",{parentName:"ul"},"Added a new json field 'look","_","at","_","target' which allows and disallows entities to turn and face their target")))}m.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}h.isMDXComponent=!0},19368:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(27676);const i={sidebar_position:99999898,title:"1.16.100.57",tags:["Official","Changelog","Preview","1.16"]},s="Minecraft Beta - 1.16.100.57 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.16/100/57",id:"official_changelog/preview/1.16/100/57",title:"1.16.100.57",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.16/100/57.mdx",sourceDirName:"official_changelog/preview/1.16/100",slug:"/official_changelog/preview/1.16/100/57",permalink:"/en/docs/official_changelog/preview/1.16/100/57",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.16/100/57.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999898,frontMatter:{sidebar_position:99999898,title:"1.16.100.57",tags:["Official","Changelog","Preview","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.100.58",permalink:"/en/docs/official_changelog/preview/1.16/100/58"},next:{title:"1.16.100.56",permalink:"/en/docs/official_changelog/preview/1.16/100/56"}},u={},m=[],p={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11610057-xbox-onewindows-10android"},"Minecraft Beta - 1.16.100.57 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);