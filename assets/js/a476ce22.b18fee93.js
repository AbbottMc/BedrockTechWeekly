"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46680,29933,42998,29180,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},35441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/30-31/gameplay",id:"changelog_source/preview/1.19/0/30-31/gameplay",title:"gameplay",description:"Information on the Minecraft Preview and Beta:",source:"@site/docs/changelog_source/preview/1.19/0/30-31/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/0/30-31",slug:"/changelog_source/preview/1.19/0/30-31/gameplay",permalink:"/docs/changelog_source/preview/1.19/0/30-31/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/30-31/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Information on the Minecraft Preview and Beta:\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Minecraft Beta</strong>",id:"minecraft-beta",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Ancient Cities</strong>",id:"ancient-cities",level:2},{value:"<strong>Warden</strong>",id:"warden",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Mangrove</strong>",id:"mangrove",level:3},{value:"<strong>Mud Block</strong>",id:"mud-block",level:3},{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Pathfinding</strong>",id:"pathfinding",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Warden</strong>",id:"warden-1",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},"Information on the Minecraft Preview and Beta:\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beta Version: 1.19.0.30 | Preview Version: 1.19.0.31 | Xbox Preview Version: 1.19.0.65"),(0,r.kt)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content"),(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/5992809822861/beta19_5_16x9.jpg",alt:"A Minecraft screenshot"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:""}),(0,r.kt)("h2",{id:"minecraft-beta"},(0,r.kt)("strong",{parentName:"h2"},"Minecraft Beta")),(0,r.kt)("p",null,"The Minecraft Beta on Windows will be retiring soon! To continue testing out new pre-release features, you will need to install the Minecraft Preview version. More information can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"),"\xa0"),(0,r.kt)("h1",{id:"spectator-mode-experimental"},(0,r.kt)("strong",{parentName:"h1"},"Spectator Mode (Experimental)")),(0,r.kt)("p",null,"Just as a reminder, we won't be accepting bug reports related to spectator mode until we let you know, as the feature is likely to change a lot during development. Here are some of the fixes and changes we have made in this update:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom input mapping for Spectator Mode added"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to attack"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to build"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to drop items"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to use items"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to open inventory"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to interact with the world through input"),(0,r.kt)("li",{parentName:"ul"},"Spectators are now unable to interact with chests or other container UI"),(0,r.kt)("li",{parentName:"ul"},"Spectators no longer fly slowly when entering Spectator Mode from ground"),(0,r.kt)("li",{parentName:"ul"},"Players enter noclip and flying when enabling Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Players stop riding, using items, sleeping, and gliding when entering Spectator Mode"),(0,r.kt)("li",{parentName:"ul"},"Double-jump no longer breaks Spectator Mode")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"accessibility"},(0,r.kt)("strong",{parentName:"h2"},"Accessibility")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Submit Feedback button is now described as a link by Text-To-Speech"),(0,r.kt)("li",{parentName:"ul"},'"Controller connection lost" popup now will also be shown on Main Menu screen')),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allay no longer stops moving when attempting to reach an item that is too far away while being leashed")),(0,r.kt)("h2",{id:"ancient-cities"},(0,r.kt)("strong",{parentName:"h2"},"Ancient Cities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ancient Cities are no longer flooded with water or lava as often (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153568"},"MCPE-153568"),")"),(0,r.kt)("li",{parentName:"ul"},"Darkness effect in water no longer creates colorful jumping lines around sources of light (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145696"},"MCPE-145696"),")"),(0,r.kt)("li",{parentName:"ul"},"Darkness effect fade-in is no longer abrupt (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153708"},"MCPE-153708"),")"),(0,r.kt)("li",{parentName:"ul"},"Breaking an activated Sculk Shrieker no longer stops the Warden from spawning (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154000"},"MCPE-154000"),")"),(0,r.kt)("li",{parentName:"ul"},"Structure Void block no longer generate in Ancient City with Sculk Vein generated around it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153541"},"MCPE-153541"),")"),(0,r.kt)("li",{parentName:"ul"},"Trap mechanism variant under main central structure in Ancient City now works properly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154409"},"MCPE-154409"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers can once again be waterlogged")),(0,r.kt)("h2",{id:"warden"},(0,r.kt)("strong",{parentName:"h2"},"Warden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Warden now emits darkness every 6 seconds"),(0,r.kt)("li",{parentName:"ul"},"Prevent Warden from building anger towards and targeting experience orbs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154210"},"MCPE-154210"),")"),(0,r.kt)("li",{parentName:"ul"},"Prevent Warden from attacking non mob type actors such as the Trident"),(0,r.kt)("li",{parentName:"ul"},"Warden can now detect vibrations emitted by a Sculk Shrieker shrieking"),(0,r.kt)("li",{parentName:"ul"},"Warden now prefers investigating the closest mobs position after sniffing"),(0,r.kt)("li",{parentName:"ul"},"Warden now doesn't play anger listening sounds when getting angry through an attack"),(0,r.kt)("li",{parentName:"ul"},"Warden\u2019s heartbeat now reflects the anger towards either the Warden\u2019s target or the highest recorded anger")),(0,r.kt)("h2",{id:"sculk-sensor"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors correctly detect when Turtle Eggs and Slab Blocks are placed on their respective existing blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153109"},"MCPE-153109"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors now activate repeatedly when an entity is on top of them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153818"},"MCPE-153818"),")"),(0,r.kt)("li",{parentName:"ul"},"A projectile hitting Wool or Wool Carpet does not produce vibration anymore\xa0"),(0,r.kt)("li",{parentName:"ul"},"A player looking at a tamed animal does not produce vibrations anymore"),(0,r.kt)("li",{parentName:"ul"},"A player crouching with a Shield in the offhand slot does not produce vibrations anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153971"},"MCPE-153971"),")"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Sensor correctly detects when a Dirt, Coarse Dirt, or Rooted Dirt Block is tilled with a Hoe (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153734"},"MCPE-153734"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors can now detect Boat movement"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors can now detect a Boat above a bubble column making splashes"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Sensor correctly detects when a Dirt, Coarse Dirt, or Rooted Dirt Block is turned into a Mud block when interacted with while holding a Water Bottle (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154057"},"MCPE-154057"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors can be waterlogged once again"),(0,r.kt)("li",{parentName:"ul"},"The lower face of Sculk Sensors can now provide support to other blocks"),(0,r.kt)("li",{parentName:"ul"},"A Sculk Sensor can no longer detect a player sneaking on another Sculk Sensor")),(0,r.kt)("h3",{id:"mangrove"},(0,r.kt)("strong",{parentName:"h3"},"Mangrove")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove Propagule now grow into trees at the same speed as in Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154001"},"MCPE-154001"),")"),(0,r.kt)("li",{parentName:"ul"},"Bees can now pollinate Mangrove Propagules (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153783"},"MCPE-153783"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Planks can now be crafted from Stripped Mangrove Logs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154017"},"MCPE-154017"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove blocks are now sorted next to other Overworld wood types (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153835"},"MCPE-153835"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Roots are no longer located in the 'Woods' section of the Creative Inventory"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Wood map colors now match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153802"},"MCPE-153802"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Log and Stripped Mangrove Log map colors now match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153799"},"MCPE-153799"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Roots are now flammable (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153742"},"MCPE-153742"),")")),(0,r.kt)("h3",{id:"mud-block"},(0,r.kt)("strong",{parentName:"h3"},"Mud Block")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gravity blocks now break when falling on Mud blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153812"},"MCPE-153812"),")"),(0,r.kt)("li",{parentName:"ul"},"Turning Dirt to Mud now produces a splash sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153716"},"MCPE-153716"),")"),(0,r.kt)("li",{parentName:"ul"},"Mud block is now placed beside Dirt in the Creative Inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153836"},"MCPE-153836"),")"),(0,r.kt)("li",{parentName:"ul"},"Mud Brick Slabs now play sounds when two Slabs are stacked into a full block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153775"},"MCPE-153775"),")")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frogs now provide same experience points as other animals like Cows and Goats (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154185"},"MCPE-154185"),")"),(0,r.kt)("li",{parentName:"ul"},"Frogspawn is no longer affected by random tick speed (Vanilla Parity)"),(0,r.kt)("li",{parentName:"ul"},"Tadpoles hurt sounds volume has been increased, and Tadpoles now have a grow-up sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151538"},"MCPE-151538"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When in the Nether, Endermen, Piglins, Skeletons, and Wither Skeletons now spawn in a wider range of light levels (from light level 0 to 11)"),(0,r.kt)("li",{parentName:"ul"},"Torches can no longer be placed on Bells"),(0,r.kt)("li",{parentName:"ul"},'Added Wild Update Achievements; "It spreads", "Birthday song", "With our powers combined!", and "Sneak 100"')),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Leads would render on top of Glass (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145764"},"MCPE-145764"),")"),(0,r.kt)("li",{parentName:"ul"},"Reverted mirrored mob parts in Wolf model according to current Art Direction")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Boat with Chest now drops a single item when destroyed instead of two items (Boat and Chest) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153392"},"MCPE-153392"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Roots can no longer be used as fuel in Furnaces"),(0,r.kt)("li",{parentName:"ul"},"When broken each Minecart variant (Chest/Hopper/TNT) drops itself as a single item, instead of splitting into two items (such as Chest and Minecart)")),(0,r.kt)("h2",{id:"pathfinding"},(0,r.kt)("strong",{parentName:"h2"},"Pathfinding")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs do not get stuck into open Trapdoors anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154106"},"MCPE-154106"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when players are battling and both players are wearing Thorns enchanted Armor (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153593"},"MCPE-153593"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash that could occur when blending worlds with air filled chunks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur during splitscreen play")),(0,r.kt)("h2",{id:"warden-1"},(0,r.kt)("strong",{parentName:"h2"},"Warden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the little jumping bug after Warden has emerged from the ground (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154544"},"MCPE-154544"),")"),(0,r.kt)("li",{parentName:"ul"},"The sonic explosion particle has been updated to a new texture")))}p.isMDXComponent=!0},42162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/30-31/tech",id:"changelog_source/preview/1.19/0/30-31/tech",title:"tech",description:'-   Updated documentation for specific string types "Localization String", "Path String", and "Identifier String"',source:"@site/docs/changelog_source/preview/1.19/0/30-31/tech.mdx",sourceDirName:"changelog_source/preview/1.19/0/30-31",slug:"/changelog_source/preview/1.19/0/30-31/tech",permalink:"/docs/changelog_source/preview/1.19/0/30-31/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/30-31/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Updated documentation for specific string types "Localization String", "Path String", and "Identifier String"')),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("em",{parentName:"li"},"target","_","block","_","filters"),' to "',(0,r.kt)("em",{parentName:"li"},"behavior.move","_","to","_","block"),'" and "',(0,r.kt)("em",{parentName:"li"},"is","_","waterlogged"),'" filter test to prevent mobs from moving to blocks underwater (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153783"},"MCPE-153783"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when attempting to access a null entity"),(0,r.kt)("li",{parentName:"ul"},"Game no longer crashes when creating a world from Cruise Ship Roleplay template (3P)")),(0,r.kt)("h2",{id:"gametest-framework-experimental"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IMPORTANT BREAKING CHANGE"),"  ",'GameTest module type changed from "javascript" to "script" in manifest.json. Added an optional attribute \u201clanguage\u201d which has only one supported value \u2013 javascript.')),(0,r.kt)("p",null,"New JavaScript modules in manifest.json should look as follows:"),(0,r.kt)("p",null,'\xa0 "modules": ',"[",(0,r.kt)("br",{parentName:"p"}),"\n","{",(0,r.kt)("br",{parentName:"p"}),"\n",'"description": "JavaScript module code",',(0,r.kt)("br",{parentName:"p"}),"\n",'"language": "javascript",',(0,r.kt)("br",{parentName:"p"}),"\n",'"type": "script",',(0,r.kt)("br",{parentName:"p"}),"\n",'"uuid": "\\<your UUID',">",'",',(0,r.kt)("br",{parentName:"p"}),"\n",'"version": ',"[","0, 0, 1","]",",",(0,r.kt)("br",{parentName:"p"}),"\n",'"entry": "scripts/main.js"',(0,r.kt)("br",{parentName:"p"}),"\n","}",(0,r.kt)("br",{parentName:"p"}),"\n","","]",",  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commands",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0_/script profiler_command to create GameTest script performance traces. Script profiles should be written to the Minecraft logging folder."))),(0,r.kt)("li",{parentName:"ul"},"Removed constraint on maximum travel distance from GameTest structure for SimulatedPlayer")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}g.isMDXComponent=!0},52461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(35441),i=a(42162);const s={sidebar_position:99999818,title:"1.19.0.30-31",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview - 1.19.0.30/31",u={unversionedId:"official_changelog/preview/1.19/0/30-31",id:"official_changelog/preview/1.19/0/30-31",title:"1.19.0.30-31",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/0/30-31.mdx",sourceDirName:"official_changelog/preview/1.19/0",slug:"/official_changelog/preview/1.19/0/30-31",permalink:"/docs/official_changelog/preview/1.19/0/30-31",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/0/30-31.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999818,frontMatter:{sidebar_position:99999818,title:"1.19.0.30-31",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.0.32-33",permalink:"/docs/official_changelog/preview/1.19/0/32-33"},next:{title:"1.19.0.28-29",permalink:"/docs/official_changelog/preview/1.19/0/28-29"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---11903031"},"Minecraft Beta & Preview - 1.19.0.30/31"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);