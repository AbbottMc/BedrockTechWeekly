"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[54412,64137,81791,72909,54299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==s&&(m(t),i(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},64434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.19/20/22/gameplay",id:"changelog_source/preview/1.19/20/22/gameplay",title:"gameplay",description:"Posted: 13th July 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/20/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/20/22",slug:"/changelog_source/preview/1.19/20/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/20/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:3},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Deep Dark</strong>",id:"deep-dark",level:2},{value:"<strong>Ancient Cities</strong>",id:"ancient-cities",level:3},{value:"<strong>EDU</strong>",id:"edu",level:2},{value:"<strong>Fireball Entity</strong>",id:"fireball-entity",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Mobile Controls</strong>",id:"mobile-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Witch</strong>",id:"witch",level:3},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:3},{value:"<strong>Mobs</strong>",id:"mobs-1",level:3},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor-1",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 13th July 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/7647827631117/beta19U2_2_1600x900.jpg",alt:"A Minecraft screenshot showing allays and bees flying near bamboo"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h3",{id:"spectator-mode-experimental"},(0,r.kt)("strong",{parentName:"h3"},"Spectator Mode (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed emotes functionality while in Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Spectators\u2019 heads are now properly rendered as semi-transparent"),(0,r.kt)("li",{parentName:"ul"},"Character Creator head items (hats, hoods, helmets, etc.) are now properly rendered semi-transparent while in Spectator mode"),(0,r.kt)("li",{parentName:"ul"},"Capes and animated back items are no longer rendered while in Spectator mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156929"},"MCPE-156929"),")"),(0,r.kt)("li",{parentName:"ul"},"Spectators can no longer use or get affected by portals (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156684"},"MCPE-156684"),")")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allays can now pick up and drop items at their owner when in a Boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156183"},"MCPE-156183"),")"),(0,r.kt)("li",{parentName:"ul"},"Allay can now always pick up dropped Scaffolding blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157512"},"MCPE-157512"),")"),(0,r.kt)("li",{parentName:"ul"},"Allay now correctly stops dancing when music from Jukebox ends"),(0,r.kt)("li",{parentName:"ul"},"Allays now look at targets such as players (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158222"},"MCPE-158222"),")")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bells can no longer catch on fire or be destroyed by fire"),(0,r.kt)("li",{parentName:"ul"},"Sculk Catalysts now play the blooming sound effect when blooming (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153562"},"MCPE-153562"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Catalysts do not spread Sculk anymore on players' death if the Keep Inventory gamerule is set to True (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157884"},"MCPE-157884"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Catalysts do not get covered in Sculk Veins anymore if a mob dies on top of them")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved the performance of the locate biome command to mitigate stalls on the server while searching for a biome that is far away (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157609"},"MCPE-157609"),")")),(0,r.kt)("h2",{id:"deep-dark"},(0,r.kt)("strong",{parentName:"h2"},"Deep Dark")),(0,r.kt)("h3",{id:"ancient-cities"},(0,r.kt)("strong",{parentName:"h3"},"Ancient Cities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The secret door that leads to the Redstone room in the center of an Ancient City now opens/closes properly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156718"},"MCPE-156718"),")")),(0,r.kt)("h2",{id:"edu"},(0,r.kt)("strong",{parentName:"h2"},"EDU")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when swapping inputs to the Material Reducer by disabling input swapping. Players must now remove input before adding new input")),(0,r.kt)("h2",{id:"fireball-entity"},(0,r.kt)("strong",{parentName:"h2"},"Fireball Entity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modified the ",(0,r.kt)("em",{parentName:"li"},"json")," entity file so that it also contains projectile damage in addition to the explosion and fire damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153740"},"MCPE-153740"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed x-ray vision when Top Snow falls on top of player so it now behaves as a solid block when Top Snow covers player's vision (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150709"},"MCPE-150709"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the Add Server feature not saving IPV6 addresses (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66233"},"MCPE-66233"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lava in Buckets will no longer disappear when failing to be placed or dispensed into partial blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50664"},"MCPE-50664"),")"),(0,r.kt)("li",{parentName:"ul"},"Items with the\xa0_item","_","lock_component can no longer be placed in Item Frames or Armor Stands (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-138479"},"MCPE-138479"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where some items with durability would fail to be created from the Creative inventory")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implemented new Marketplace error screen art and messaging")),(0,r.kt)("h2",{id:"mobile-controls"},(0,r.kt)("strong",{parentName:"h2"},"Mobile Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where players were not able to hover over UI elements inside a scroll view if a portion of it fell outside of the view when using mouse + keyboard on iOS. This was a result of the scroll view auto focusing onto the nearest non-clipped element"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when a connected devices, like gamepads, were missing")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allays and Bees no longer get stuck in non-full blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155777"},"MCPE-155777"),")"),(0,r.kt)("li",{parentName:"ul"},"Fish do not shake anymore when placed in an isolated water block"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused Wolves to spawn red when summoned with ",(0,r.kt)("em",{parentName:"li"},"entity","_","born")," or ",(0,r.kt)("em",{parentName:"li"},"on","_","tame")," events"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where enchantments on ranged weapons on mobs were not being applied (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-113623"},"MCPE-113623"),")")),(0,r.kt)("h3",{id:"witch"},(0,r.kt)("strong",{parentName:"h3"},"Witch")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that could cause Witches to stop spawning. The Witch Hut structure is now set as a surface spawner for Witches (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60552"},"MCPE-60552"),")")),(0,r.kt)("h2",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that was caused by a Villager changing its profession while trading. The Trade screen will now close if the Villager changes professions mid trade")),(0,r.kt)("h2",{id:"sculk-sensor"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors can now also detect Bees, Chickens, Allays, Phantoms, and Ender Dragons flying (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153725"},"MCPE-153725"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154055"},"MCPE-154055"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors can now emit the whole range of Redstone signal strengths, based on the distance a vibration has been emitted at. Previously, the output was either 1, 15 or even"),(0,r.kt)("li",{parentName:"ul"},"Vibration particles are now always oriented towards the target Sculk Sensor (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156648"},"MCPE-156648"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Timeout when connecting to a multiplayer game has been reduced from 180 to 90 seconds"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when Pistons were extending or retracting near moveable blocks and Arrows")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hover text for ",(0,r.kt)("em",{parentName:"li"},"can","_","place","_","on")," blocks for items in inventory is now in a consistent order between game saves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153516"},"MCPE-153516"),")"),(0,r.kt)("li",{parentName:"ul"},"Removed the controller settings tab for Oculus")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sounds of the Smithing Table when a Villager is working are now the same as sounds when the player uses the table (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79716"},"MCPE-79716"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed volume level of Amethyst step chime sound when walked on by a mob")),(0,r.kt)("h3",{id:"blocks-1"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Amethyst Block has been renamed to "Block of Amethyst" (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125821"},"MCPE-125821"),")")),(0,r.kt)("h3",{id:"mobs-1"},(0,r.kt)("strong",{parentName:"h3"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Ender Dragon can no longer destroy Crying Obsidian, Respawn Anchor, Light, Deny, Allow, Border, and Jigsaw blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158343"},"MCPE-158343"),")")),(0,r.kt)("h3",{id:"sculk-sensor-1"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors no longer detect Boats staying still in water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155368"},"MCPE-155368"),")")))}p.isMDXComponent=!0},50241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.19/20/22/tech",id:"changelog_source/preview/1.19/20/22/tech",title:"tech",description:"Account Suspensions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/20/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/20/22",slug:"/changelog_source/preview/1.19/20/22/tech",permalink:"/en/docs/changelog_source/preview/1.19/20/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/22/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Account Suspensions</strong>",id:"account-suspensions",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>General</strong>",id:"general",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"account-suspensions"},(0,r.kt)("strong",{parentName:"h2"},"Account Suspensions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where suspended accounts could not play local worlds or navigate the menus on Xbox platforms")),(0,r.kt)("h2",{id:"actor-properties"},(0,r.kt)("strong",{parentName:"h2"},"Actor Properties")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new Molang ",(0,r.kt)("em",{parentName:"li"},"had","_","component","_","group")," to allow calculating appropriate default values from previously saved entity data"),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"'actor","_","property'")," and ",(0,r.kt)("em",{parentName:"li"},"'has","_","actor","_","property'")," Molang queries to ",(0,r.kt)("em",{parentName:"li"},"'property'")," and ",(0,r.kt)("em",{parentName:"li"},"'has","_","property'"),". Also renamed ",(0,r.kt)("em",{parentName:"li"},"'set","_","actor","_","property'")," to ",(0,r.kt)("em",{parentName:"li"},"'set","_","property'")),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("em",{parentName:"li"},"'set","_","property'")," to only allow changing properties on the local actor rather than some other target")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocks with ",(0,r.kt)("em",{parentName:"li"},"their"),"\xa0",(0,r.kt)("em",{parentName:"li"},"render","_","method_component set to\xa0_double","_","sided"),"\xa0now have their back faces properly rendered")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const s={},i=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const s={},i=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},98497:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(64434),s=a(50241);const i={sidebar_position:99999809,title:"1.19.20.22",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.20.22",u={unversionedId:"official_changelog/preview/1.19/20/22",id:"official_changelog/preview/1.19/20/22",title:"1.19.20.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/20/22.mdx",sourceDirName:"official_changelog/preview/1.19/20",slug:"/official_changelog/preview/1.19/20/22",permalink:"/en/docs/official_changelog/preview/1.19/20/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/20/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999809,frontMatter:{sidebar_position:99999809,title:"1.19.20.22",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.20.23",permalink:"/en/docs/official_changelog/preview/1.19/20/23"},next:{title:"1.19.20.20-21",permalink:"/en/docs/official_changelog/preview/1.19/20/20-21"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1192022"},"Minecraft Beta & Preview - 1.19.20.22"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);