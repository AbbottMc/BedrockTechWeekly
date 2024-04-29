"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50154,29933,94638,20092,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},76476:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/20/gameplay",id:"changelog_source/preview/1.19/10/20/gameplay",title:"gameplay",description:"Information on the Minecraft Preview and Beta:",source:"@site/docs/changelog_source/preview/1.19/10/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/10/20",slug:"/changelog_source/preview/1.19/10/20/gameplay",permalink:"/docs/changelog_source/preview/1.19/10/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Warden</strong>",id:"warden",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Sculk Vein</strong>",id:"sculk-vein",level:3},{value:"<strong>Sculk Catalyst</strong>",id:"sculk-catalyst",level:3},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:3},{value:"<strong>Mangrove</strong>",id:"mangrove",level:2},{value:"<strong>Mangrove log</strong>",id:"mangrove-log",level:2},{value:"<strong>Mangrove Swamp</strong>",id:"mangrove-swamp",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>EDU</strong>",id:"edu",level:2},{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Froglight</strong>",id:"froglight",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Goat</strong>",id:"goat",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobile Controls</strong>",id:"mobile-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Music</strong>",id:"music",level:2},{value:"<strong>Shield</strong>",id:"shield",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/6465718765709/beta19U1_1_16x9.jpg",alt:"A Minecraft screenshot, featuring a frog in a mangrove swamp!"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.kt)("h1",{id:"known-issues"},(0,r.kt)("strong",{parentName:"h1"},"Known Issues")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Potion effects of differing strengths do not stack correctly. We hope to have this addressed in a future beta/preview update.")),(0,r.kt)("h1",{id:"minecraft-beta"},(0,r.kt)("strong",{parentName:"h1"},"Minecraft Beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minecraft Beta players on Windows and Xbox will need to install the latest Minecraft Preview version to test out the latest pre-release features. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"))),(0,r.kt)("h2",{id:"warden"},(0,r.kt)("strong",{parentName:"h2"},"Warden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Warden can now path through lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153582"},"MCPE-153582"),")"),(0,r.kt)("li",{parentName:"ul"},"Warden can now pass through water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153602"},"MCPE-153602"),")"),(0,r.kt)("li",{parentName:"ul"},"Warden is no longer pushable while emerging or digging"),(0,r.kt)("li",{parentName:"ul"},"If the Warden is in liquid when attempting to despawn, it will not do the digging animation, instead it will just despawn without any animation/sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155706"},"MCPE-155706"),")"),(0,r.kt)("li",{parentName:"ul"},"Warden now always chases a nuisance after it roars at it"),(0,r.kt)("li",{parentName:"ul"},"Warden now increases its anger towards an attacking nuisance by 100 anger for each attack")),(0,r.kt)("h2",{id:"sculk-sensor"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Sculk Sensor now correctly detects when a Big Dripleaf block changes its tilting state (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153115"},"MCPE-153115"),")"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Sensor now correctly detects when a Grass, Grass Path, Dirt, Coarse Dirt, or Rooted Dirt Block is tilled with a Hoe (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153734"},"MCPE-153734"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors cannot detect a player equipping a handheld item anymore (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153971"},"MCPE-153971"),")")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Taking a stackable item from an Allay now correctly adds this item to existing stacks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153540"},"MCPE-153540"),")"),(0,r.kt)("li",{parentName:"ul"},"Taking a stackable item from an Allay no longer cause item duplication"),(0,r.kt)("li",{parentName:"ul"},"Allay pickup range is changed from 64 to 32 blocks to match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156022"},"MCPE-156022"),")")),(0,r.kt)("h3",{id:"sculk-vein"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Vein")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Sculk Vein block now drops as many items as its number of faces when mined with Silk Touch")),(0,r.kt)("h3",{id:"sculk-catalyst"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Catalyst")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Catalyst can now spread Sculk through Mud and Muddy Mangrove Roots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153924"},"MCPE-153924"),")")),(0,r.kt)("h3",{id:"sculk-shrieker"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Shrieker")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers now scan for Wardens in a box with side 48 blocks, not 96 blocks"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers now apply Darkness effect to players with threat level 3 or 4"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shrieker now detects player when riding any type of entity (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153814"},"MCPE-153814"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers now activate repeatedly while players are standing on them (50%) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153818"},"MCPE-153818"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers now implicate the player that provokes it from afar")),(0,r.kt)("h2",{id:"mangrove"},(0,r.kt)("strong",{parentName:"h2"},"Mangrove")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove Propagules are no longer blocked to grow by leaves (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154982"},"MCPE-154982"),")")),(0,r.kt)("h2",{id:"mangrove-log"},(0,r.kt)("strong",{parentName:"h2"},"Mangrove log")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove Log is now included in Bonus Chest loot tables (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153924"},"MCPE-153924"),")")),(0,r.kt)("h2",{id:"mangrove-swamp"},(0,r.kt)("strong",{parentName:"h2"},"Mangrove Swamp")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Villagers now spawn as Swamp Villagers in Mangrove Swamp (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153731"},"MCPE-153731"),")"),(0,r.kt)("li",{parentName:"ul"},"Clay patches now correctly generate in Mangrove Swamps")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player can now continuously jump while holding down the jump button (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117045"},"MCPE-117045"),")"),(0,r.kt)("li",{parentName:"ul"},"Player can now descend from the top of Scaffolding with the new touch controls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154309"},"MCPE-154309"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated the visual style of the touch control joystick")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs equipping items in armor slots now produce sounds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46939"},"MCPE -46939"),")"),(0,r.kt)("li",{parentName:"ul"},"Campfires can now provide full-faced bottom support to other blocks"),(0,r.kt)("li",{parentName:"ul"},"Lecterns can now provide full-faced bottom support to other blocks"),(0,r.kt)("li",{parentName:"ul"},"Weeping Vines can now be placed underneath all blocks which can provide full-faced bottom support (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153083"},"MCPE-153083"),") (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104717"},"MCPE-104717"),")"),(0,r.kt)("li",{parentName:"ul"},"Breaking a Boat with Chest or minecart with chest will now anger nearby piglins (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153393"},"MCPE-153393"),")"),(0,r.kt)("li",{parentName:"ul"},"Structure Blocks can no longer be waterlogged (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59566"},"MCPE-59566"),")"),(0,r.kt)("li",{parentName:"ul"},"Relative positioning of entities exiting Nether portals no longer have their placement snapped to a block position coordinate (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139835"},"MCPE-139835"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a visual bug where liquids could have unexpected heights in the corners depending on diagonally-adjacent blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152995"},"MCPE-152995"),")")),(0,r.kt)("h3",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h3"},"Spectator Mode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player in Spectator mode can now breathe anywhere"),(0,r.kt)("li",{parentName:"ul"},"Player in Spectator mode cannot be pushed by Piston"),(0,r.kt)("li",{parentName:"ul"},"Spectator will be ignored for sleeping rules to skip the night"),(0,r.kt)("li",{parentName:"ul"},"Moving around as a Spectator will no longer affect player's hunger level"),(0,r.kt)("li",{parentName:"ul"},"Spectators no longer broadcast self-made sounds; such as footsteps, climbing, watersplash, etc."),(0,r.kt)("li",{parentName:"ul"},"Player's insomnia timer stops ticking once the player switches to Spectator mode"),(0,r.kt)("li",{parentName:"ul"},"Render only head for players in Spectator mode"),(0,r.kt)("li",{parentName:"ul"},"Render players in Spectator semi-transparently"),(0,r.kt)("li",{parentName:"ul"},"Projectiles such as Arrows, Tridents, Fireballs will now shoot through Spectators"),(0,r.kt)("li",{parentName:"ul"},"Spectators playing with gamepad no longer are shown unusable tooltips")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Advanced Pick Block now copies the items inside when used on a Boat with Chest (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153410"},"MCPE-153410"),")"),(0,r.kt)("li",{parentName:"ul"},"Nether Sprouts and Fungi can now be placed on Mud and Muddy Mangrove Roots"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Leaves are no longer collected into separate stacks when using shears")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chests with loot tables no longer drop items when removed with '/clone', '/fill' or '/setblock' (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151876"},"MCPE-151876"),")")),(0,r.kt)("h2",{id:"edu"},(0,r.kt)("strong",{parentName:"h2"},"EDU")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small changes to size, button layout, and photo removal behavior in Book & Quill to make it function better on mobile devices")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tadpoles now grow up into Temperate Frog in Meadow and Stony Peak, and into Cold Frog in Deep Dark")),(0,r.kt)("h2",{id:"froglight"},(0,r.kt)("strong",{parentName:"h2"},"Froglight")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Froglight walk sound volume is now more similar as other blocks walk sound volume (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154879"},"MCPE-154879"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players are no longer pushed by Doors as they close (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154734"},"MCPE-154734"),")"),(0,r.kt)("li",{parentName:"ul"},"Items now stack properly in the offhand when inventory is full (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-34959"},"MCPE-34959"),")"),(0,r.kt)("li",{parentName:"ul"},"Equipping items in armor slots through inventory screen now produces sounds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46939"},"MCPE-46939"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now hear each other equipping items in armor slots ()"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where entities loaded by Structure Blocks and commands would cause the despawn of the original mob used to save the structure and any mobs from previous loads of the structure (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155036"},"MCPE-155036"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where after 1.18.30 teleporting an entity to a chunk that has not been loaded since before 1.18.30 would result in the loss of that entity"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Slimes would no longer spawn in flat worlds made before 1.18 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119396"},"MCPE-119396"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where failed Slime spawn attempts would reduce the spawning rates of other mobs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153502"},"MCPE-153502"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing riding passengers to stop riding when reloaded if they were across chunk borders"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug which reset the player's vertical camera angle upon entering a boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152762"},"MCPE-152762"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where players could take fall damage when walking around on Scaffolding at certain heights (even when not actually falling) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154779"},"MCPE-154779"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where upgrading old worlds could result in water columns below y=0")),(0,r.kt)("h2",{id:"goat"},(0,r.kt)("strong",{parentName:"h2"},"Goat")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Goat Horn now correctly drops when Goats ram Mangrove Logs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154912"},"MCPE-154912"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items in off-hand are not rendered black anymore"),(0,r.kt)("li",{parentName:"ul"},"Fixed a visual issue where Barrier Blocks would show a red texture/overlay when being viewed from the inside (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98938"},"MCPE-98938"),")")),(0,r.kt)("h2",{id:"mobile-controls"},(0,r.kt)("strong",{parentName:"h2"},"Mobile Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Bluetooth mouse and keyboard support on iOS")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Trader Llama now has its own spawn egg"),(0,r.kt)("li",{parentName:"ul"},"The Trader Llama now has the correct name displayed when opening its inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47165"},"MCPE-47165"),")")),(0,r.kt)("h2",{id:"music"},(0,r.kt)("strong",{parentName:"h2"},"Music")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Music is now included in the iOS app and is no longer needed to be downloaded from the Marketplace")),(0,r.kt)("h2",{id:"shield"},(0,r.kt)("strong",{parentName:"h2"},"Shield")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Shields that are disabled when struck by an Axe or by Warden now plays broken item sound (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153315"},"MCPE-153315"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when Boats are unloaded from the world"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when a Wither is loaded into the world")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added settings to change duration of notifications"),(0,r.kt)("li",{parentName:"ul"},"Friendly Fire game rule toggle has been moved to the Multiplayer tab on the Create New World screen"),(0,r.kt)("li",{parentName:"ul"},"On mobile devices, the experience bar is centered over the entire length of the hotbar, including the ellipis at the end"),(0,r.kt)("li",{parentName:"ul"},"Added copy coordinate control panel to the chat screen")),(0,r.kt)("h3",{id:"blocks-1"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mob Spawners now drop XP only when destroyed by a Pickaxe ()")))}m.isMDXComponent=!0},94490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/20/tech",id:"changelog_source/preview/1.19/10/20/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.19/10/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/10/20",slug:"/changelog_source/preview/1.19/10/20/tech",permalink:"/docs/changelog_source/preview/1.19/10/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0minecraft:block","_","collisionblock component to\xa0minecraft:collision","_","box\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed the 'minecraft:block","_","light","_","filter' component to 'minecraft:light","_","dampening' and added appropriate versioning"),(0,r.kt)("li",{parentName:"ul"},"Renamed the 'part visibility' component's field 'rules' to 'conditions' and added appropriate versioning"),(0,r.kt)("li",{parentName:"ul"},"Renamed the 'crafting","_","table' component's field 'custom","_","description' to 'table","_","name' and added appropriate versioning"),(0,r.kt)("li",{parentName:"ul"},'Updated documentation for "minecraft:map',"_",'color" and "minecraft:material',"_",'instances"')),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0minecraft:block","_","placeritem component to correctly trigger block component\xa0minecraft:on","_","player","_","placing\xa0")),(0,r.kt)("h2",{id:"actors"},(0,r.kt)("strong",{parentName:"h2"},"Actors")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Direction facing will now be preserved through a transformation from one actor type to another")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Autocomplete suggestions now show only valid parameters")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed interaction priority when using a Bucket on a waterlogged and interactable block, eg. Lever (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154221"},"MCPE-154221"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Trader Llama is now its own dedicated mob instead of being a normal Llama with specific component groups")),(0,r.kt)("h1",{id:"technical-experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,r.kt)("h2",{id:"commands-1"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'New execute command functionality is now available via the "Upcoming Creator Features" experimental toggle')),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added argument\xa0keepVelocity: bool\xa0to functions\xa0teleport\xa0and\xa0teleportFacing\xa0- If true, preserves velocity when teleporting the Entity")))}m.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}g.isMDXComponent=!0},4038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(76476),i=a(94490);const s={sidebar_position:99999815,title:"1.19.10.20",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},c="Minecraft Beta & Preview -  1.19.10.20",u={unversionedId:"official_changelog/preview/1.19/10/20",id:"official_changelog/preview/1.19/10/20",title:"1.19.10.20",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/10/20.mdx",sourceDirName:"official_changelog/preview/1.19/10",slug:"/official_changelog/preview/1.19/10/20",permalink:"/docs/official_changelog/preview/1.19/10/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/10/20.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999815,frontMatter:{sidebar_position:99999815,title:"1.19.10.20",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.10.21",permalink:"/docs/official_changelog/preview/1.19/10/21"},next:{title:"1.19.0.34-35",permalink:"/docs/official_changelog/preview/1.19/0/34-35"}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview----1191020"},"Minecraft Beta & Preview -  1.19.10.20"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);