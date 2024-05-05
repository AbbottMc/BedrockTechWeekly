"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[37690,31164,43115,67471,2361],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),g=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=g(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=g(t),p=r,d=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return t?n.createElement(d,l(l({ref:a},c),{},{components:t})):n.createElement(d,l({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>l});var n=t(96540),r=t(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>N});var n=t(58168),r=t(96540),o=t(20053),l=t(23104),i=t(56347),s=t(57485),g=t(31682),c=t(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,g.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function d(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function h(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,g]=d({queryString:t,groupId:n}),[u,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,c.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),y=(()=>{const e=s??u;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),h(e)}),[g,h,o]),tabValues:o}}var y=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:g,rightElement:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.a_)(),p=e=>{const a=e.currentTarget,t=u.indexOf(a),n=g[t].value;n!==i&&(m(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},g.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===a}),style:{wordBreak:"keep-all"}}),t??a)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(w,(0,n.A)({},e,a)))}function N(e){const a=(0,y.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},10243:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/20/gameplay",id:"changelog_source/preview/1.19/10/20/gameplay",title:"gameplay",description:"Information on the Minecraft Preview and Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/10/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/10/20",slug:"/changelog_source/preview/1.19/10/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/10/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Warden</strong>",id:"warden",level:2},{value:"<strong>Sculk Sensor</strong>",id:"sculk-sensor",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Sculk Vein</strong>",id:"sculk-vein",level:3},{value:"<strong>Sculk Catalyst</strong>",id:"sculk-catalyst",level:3},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:3},{value:"<strong>Mangrove</strong>",id:"mangrove",level:2},{value:"<strong>Mangrove log</strong>",id:"mangrove-log",level:2},{value:"<strong>Mangrove Swamp</strong>",id:"mangrove-swamp",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>EDU</strong>",id:"edu",level:2},{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Froglight</strong>",id:"froglight",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Goat</strong>",id:"goat",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobile Controls</strong>",id:"mobile-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Music</strong>",id:"music",level:2},{value:"<strong>Shield</strong>",id:"shield",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:3}],c={toc:g},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.yg)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/6465718765709/beta19U1_1_16x9.jpg",alt:"A Minecraft screenshot, featuring a frog in a mangrove swamp!"})),(0,r.yg)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,r.yg)("h1",{id:"known-issues"},(0,r.yg)("strong",{parentName:"h1"},"Known Issues")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Potion effects of differing strengths do not stack correctly. We hope to have this addressed in a future beta/preview update.")),(0,r.yg)("h1",{id:"minecraft-beta"},(0,r.yg)("strong",{parentName:"h1"},"Minecraft Beta")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Minecraft Beta players on Windows and Xbox will need to install the latest Minecraft Preview version to test out the latest pre-release features. More information can be found at ",(0,r.yg)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ"))),(0,r.yg)("h2",{id:"warden"},(0,r.yg)("strong",{parentName:"h2"},"Warden")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Warden can now path through lava (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153582"},"MCPE-153582"),")"),(0,r.yg)("li",{parentName:"ul"},"Warden can now pass through water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153602"},"MCPE-153602"),")"),(0,r.yg)("li",{parentName:"ul"},"Warden is no longer pushable while emerging or digging"),(0,r.yg)("li",{parentName:"ul"},"If the Warden is in liquid when attempting to despawn, it will not do the digging animation, instead it will just despawn without any animation/sound (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155706"},"MCPE-155706"),")"),(0,r.yg)("li",{parentName:"ul"},"Warden now always chases a nuisance after it roars at it"),(0,r.yg)("li",{parentName:"ul"},"Warden now increases its anger towards an attacking nuisance by 100 anger for each attack")),(0,r.yg)("h2",{id:"sculk-sensor"},(0,r.yg)("strong",{parentName:"h2"},"Sculk Sensor")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Sculk Sensor now correctly detects when a Big Dripleaf block changes its tilting state (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153115"},"MCPE-153115"),")"),(0,r.yg)("li",{parentName:"ul"},"The Sculk Sensor now correctly detects when a Grass, Grass Path, Dirt, Coarse Dirt, or Rooted Dirt Block is tilled with a Hoe (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153734"},"MCPE-153734"),")"),(0,r.yg)("li",{parentName:"ul"},"Sculk Sensors cannot detect a player equipping a handheld item anymore (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153971"},"MCPE-153971"),")")),(0,r.yg)("h2",{id:"allay"},(0,r.yg)("strong",{parentName:"h2"},"Allay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Taking a stackable item from an Allay now correctly adds this item to existing stacks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153540"},"MCPE-153540"),")"),(0,r.yg)("li",{parentName:"ul"},"Taking a stackable item from an Allay no longer cause item duplication"),(0,r.yg)("li",{parentName:"ul"},"Allay pickup range is changed from 64 to 32 blocks to match Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156022"},"MCPE-156022"),")")),(0,r.yg)("h3",{id:"sculk-vein"},(0,r.yg)("strong",{parentName:"h3"},"Sculk Vein")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Sculk Vein block now drops as many items as its number of faces when mined with Silk Touch")),(0,r.yg)("h3",{id:"sculk-catalyst"},(0,r.yg)("strong",{parentName:"h3"},"Sculk Catalyst")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sculk Catalyst can now spread Sculk through Mud and Muddy Mangrove Roots (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153924"},"MCPE-153924"),")")),(0,r.yg)("h3",{id:"sculk-shrieker"},(0,r.yg)("strong",{parentName:"h3"},"Sculk Shrieker")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sculk Shriekers now scan for Wardens in a box with side 48 blocks, not 96 blocks"),(0,r.yg)("li",{parentName:"ul"},"Sculk Shriekers now apply Darkness effect to players with threat level 3 or 4"),(0,r.yg)("li",{parentName:"ul"},"Sculk Shrieker now detects player when riding any type of entity (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153814"},"MCPE-153814"),")"),(0,r.yg)("li",{parentName:"ul"},"Sculk Shriekers now activate repeatedly while players are standing on them (50%) (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153818"},"MCPE-153818"),")"),(0,r.yg)("li",{parentName:"ul"},"Sculk Shriekers now implicate the player that provokes it from afar")),(0,r.yg)("h2",{id:"mangrove"},(0,r.yg)("strong",{parentName:"h2"},"Mangrove")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mangrove Propagules are no longer blocked to grow by leaves (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154982"},"MCPE-154982"),")")),(0,r.yg)("h2",{id:"mangrove-log"},(0,r.yg)("strong",{parentName:"h2"},"Mangrove log")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mangrove Log is now included in Bonus Chest loot tables (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153924"},"MCPE-153924"),")")),(0,r.yg)("h2",{id:"mangrove-swamp"},(0,r.yg)("strong",{parentName:"h2"},"Mangrove Swamp")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Villagers now spawn as Swamp Villagers in Mangrove Swamp (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153731"},"MCPE-153731"),")"),(0,r.yg)("li",{parentName:"ul"},"Clay patches now correctly generate in Mangrove Swamps")),(0,r.yg)("h2",{id:"touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Player can now continuously jump while holding down the jump button (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117045"},"MCPE-117045"),")"),(0,r.yg)("li",{parentName:"ul"},"Player can now descend from the top of Scaffolding with the new touch controls (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154309"},"MCPE-154309"),")"),(0,r.yg)("li",{parentName:"ul"},"Updated the visual style of the touch control joystick")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mobs equipping items in armor slots now produce sounds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46939"},"MCPE -46939"),")"),(0,r.yg)("li",{parentName:"ul"},"Campfires can now provide full-faced bottom support to other blocks"),(0,r.yg)("li",{parentName:"ul"},"Lecterns can now provide full-faced bottom support to other blocks"),(0,r.yg)("li",{parentName:"ul"},"Weeping Vines can now be placed underneath all blocks which can provide full-faced bottom support (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153083"},"MCPE-153083"),") (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104717"},"MCPE-104717"),")"),(0,r.yg)("li",{parentName:"ul"},"Breaking a Boat with Chest or minecart with chest will now anger nearby piglins (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153393"},"MCPE-153393"),")"),(0,r.yg)("li",{parentName:"ul"},"Structure Blocks can no longer be waterlogged (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59566"},"MCPE-59566"),")"),(0,r.yg)("li",{parentName:"ul"},"Relative positioning of entities exiting Nether portals no longer have their placement snapped to a block position coordinate (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139835"},"MCPE-139835"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a visual bug where liquids could have unexpected heights in the corners depending on diagonally-adjacent blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152995"},"MCPE-152995"),")")),(0,r.yg)("h3",{id:"spectator-mode"},(0,r.yg)("strong",{parentName:"h3"},"Spectator Mode")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Player in Spectator mode can now breathe anywhere"),(0,r.yg)("li",{parentName:"ul"},"Player in Spectator mode cannot be pushed by Piston"),(0,r.yg)("li",{parentName:"ul"},"Spectator will be ignored for sleeping rules to skip the night"),(0,r.yg)("li",{parentName:"ul"},"Moving around as a Spectator will no longer affect player's hunger level"),(0,r.yg)("li",{parentName:"ul"},"Spectators no longer broadcast self-made sounds; such as footsteps, climbing, watersplash, etc."),(0,r.yg)("li",{parentName:"ul"},"Player's insomnia timer stops ticking once the player switches to Spectator mode"),(0,r.yg)("li",{parentName:"ul"},"Render only head for players in Spectator mode"),(0,r.yg)("li",{parentName:"ul"},"Render players in Spectator semi-transparently"),(0,r.yg)("li",{parentName:"ul"},"Projectiles such as Arrows, Tridents, Fireballs will now shoot through Spectators"),(0,r.yg)("li",{parentName:"ul"},"Spectators playing with gamepad no longer are shown unusable tooltips")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Advanced Pick Block now copies the items inside when used on a Boat with Chest (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153410"},"MCPE-153410"),")"),(0,r.yg)("li",{parentName:"ul"},"Nether Sprouts and Fungi can now be placed on Mud and Muddy Mangrove Roots"),(0,r.yg)("li",{parentName:"ul"},"Mangrove Leaves are no longer collected into separate stacks when using shears")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Chests with loot tables no longer drop items when removed with '/clone', '/fill' or '/setblock' (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151876"},"MCPE-151876"),")")),(0,r.yg)("h2",{id:"edu"},(0,r.yg)("strong",{parentName:"h2"},"EDU")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Small changes to size, button layout, and photo removal behavior in Book & Quill to make it function better on mobile devices")),(0,r.yg)("h2",{id:"frog"},(0,r.yg)("strong",{parentName:"h2"},"Frog")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tadpoles now grow up into Temperate Frog in Meadow and Stony Peak, and into Cold Frog in Deep Dark")),(0,r.yg)("h2",{id:"froglight"},(0,r.yg)("strong",{parentName:"h2"},"Froglight")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Froglight walk sound volume is now more similar as other blocks walk sound volume (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154879"},"MCPE-154879"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players are no longer pushed by Doors as they close (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154734"},"MCPE-154734"),")"),(0,r.yg)("li",{parentName:"ul"},"Items now stack properly in the offhand when inventory is full (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-34959"},"MCPE-34959"),")"),(0,r.yg)("li",{parentName:"ul"},"Equipping items in armor slots through inventory screen now produces sounds (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46939"},"MCPE-46939"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can now hear each other equipping items in armor slots ()"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where entities loaded by Structure Blocks and commands would cause the despawn of the original mob used to save the structure and any mobs from previous loads of the structure (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155036"},"MCPE-155036"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where after 1.18.30 teleporting an entity to a chunk that has not been loaded since before 1.18.30 would result in the loss of that entity"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Slimes would no longer spawn in flat worlds made before 1.18 (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119396"},"MCPE-119396"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where failed Slime spawn attempts would reduce the spawning rates of other mobs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153502"},"MCPE-153502"),")")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug causing riding passengers to stop riding when reloaded if they were across chunk borders"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug which reset the player's vertical camera angle upon entering a boat (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152762"},"MCPE-152762"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where players could take fall damage when walking around on Scaffolding at certain heights (even when not actually falling) (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154779"},"MCPE-154779"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where upgrading old worlds could result in water columns below y=0")),(0,r.yg)("h2",{id:"goat"},(0,r.yg)("strong",{parentName:"h2"},"Goat")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Goat Horn now correctly drops when Goats ram Mangrove Logs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154912"},"MCPE-154912"),")")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Items in off-hand are not rendered black anymore"),(0,r.yg)("li",{parentName:"ul"},"Fixed a visual issue where Barrier Blocks would show a red texture/overlay when being viewed from the inside (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98938"},"MCPE-98938"),")")),(0,r.yg)("h2",{id:"mobile-controls"},(0,r.yg)("strong",{parentName:"h2"},"Mobile Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Bluetooth mouse and keyboard support on iOS")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Trader Llama now has its own spawn egg"),(0,r.yg)("li",{parentName:"ul"},"The Trader Llama now has the correct name displayed when opening its inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47165"},"MCPE-47165"),")")),(0,r.yg)("h2",{id:"music"},(0,r.yg)("strong",{parentName:"h2"},"Music")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Music is now included in the iOS app and is no longer needed to be downloaded from the Marketplace")),(0,r.yg)("h2",{id:"shield"},(0,r.yg)("strong",{parentName:"h2"},"Shield")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shields that are disabled when struck by an Axe or by Warden now plays broken item sound (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153315"},"MCPE-153315"),")")),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when Boats are unloaded from the world"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when a Wither is loaded into the world")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added settings to change duration of notifications"),(0,r.yg)("li",{parentName:"ul"},"Friendly Fire game rule toggle has been moved to the Multiplayer tab on the Create New World screen"),(0,r.yg)("li",{parentName:"ul"},"On mobile devices, the experience bar is centered over the entire length of the hotbar, including the ellipis at the end"),(0,r.yg)("li",{parentName:"ul"},"Added copy coordinate control panel to the chat screen")),(0,r.yg)("h3",{id:"blocks-1"},(0,r.yg)("strong",{parentName:"h3"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mob Spawners now drop XP only when destroyed by a Pickaxe ()")))}m.isMDXComponent=!0},38791:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));t(88502);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/10/20/tech",id:"changelog_source/preview/1.19/10/20/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/10/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/10/20",slug:"/changelog_source/preview/1.19/10/20/tech",permalink:"/en/docs/changelog_source/preview/1.19/10/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],c={toc:g},u="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0minecraft:block","_","collisionblock component to\xa0minecraft:collision","_","box\xa0"),(0,r.yg)("li",{parentName:"ul"},"Renamed the 'minecraft:block","_","light","_","filter' component to 'minecraft:light","_","dampening' and added appropriate versioning"),(0,r.yg)("li",{parentName:"ul"},"Renamed the 'part visibility' component's field 'rules' to 'conditions' and added appropriate versioning"),(0,r.yg)("li",{parentName:"ul"},"Renamed the 'crafting","_","table' component's field 'custom","_","description' to 'table","_","name' and added appropriate versioning"),(0,r.yg)("li",{parentName:"ul"},'Updated documentation for "minecraft:map',"_",'color" and "minecraft:material',"_",'instances"')),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed\xa0minecraft:block","_","placeritem component to correctly trigger block component\xa0minecraft:on","_","player","_","placing\xa0")),(0,r.yg)("h2",{id:"actors"},(0,r.yg)("strong",{parentName:"h2"},"Actors")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Direction facing will now be preserved through a transformation from one actor type to another")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Autocomplete suggestions now show only valid parameters")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed interaction priority when using a Bucket on a waterlogged and interactable block, eg. Lever (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154221"},"MCPE-154221"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Trader Llama is now its own dedicated mob instead of being a normal Llama with specific component groups")),(0,r.yg)("h1",{id:"technical-experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,r.yg)("h2",{id:"commands-1"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'New execute command functionality is now available via the "Upcoming Creator Features" experimental toggle')),(0,r.yg)("h2",{id:"gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added argument\xa0keepVelocity: bool\xa0to functions\xa0teleport\xa0and\xa0teleportFacing\xa0- If true, preserves velocity when teleporting the Entity")))}m.isMDXComponent=!0},34922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>u});var n=t(58168),r=(t(96540),t(15680)),o=t(18228),l=t(19365);const i={},s=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},t.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),t.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),t.techChangelog))))}d.isMDXComponent=!0},88502:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>u});var n=t(58168),r=(t(96540),t(15680)),o=t(18228),l=t(19365);const i={},s=void 0,g={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],m={toc:u},p="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},t.techSapi),(0,r.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},t.techSapiChangelog)))}d.isMDXComponent=!0},47192:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>g,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=t(58168),r=(t(96540),t(15680)),o=t(34922),l=t(10243),i=t(38791);const s={sidebar_position:99999815,title:"1.19.10.20",tags:["Official","Changelog","Preview","1.19"]},g="Minecraft Beta & Preview -  1.19.10.20",c={unversionedId:"official_changelog/preview/1.19/10/20",id:"official_changelog/preview/1.19/10/20",title:"1.19.10.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/10/20.mdx",sourceDirName:"official_changelog/preview/1.19/10",slug:"/official_changelog/preview/1.19/10/20",permalink:"/en/docs/official_changelog/preview/1.19/10/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/10/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999815,frontMatter:{sidebar_position:99999815,title:"1.19.10.20",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.10.21",permalink:"/en/docs/official_changelog/preview/1.19/10/21"},next:{title:"1.19.0.34-35",permalink:"/en/docs/official_changelog/preview/1.19/0/34-35"}},u={},m=[],p={toc:m},d="wrapper";function h(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview----1191020"},"Minecraft Beta & Preview -  1.19.10.20"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);