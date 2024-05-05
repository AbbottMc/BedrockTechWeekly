"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[48073,31164,43115,92012,28854],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=g(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),g=a(31682),u=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,g.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,g]=m({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),g(e),h(e)}),[g,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:g,rightElement:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=g[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},9666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/40/20/gameplay",id:"changelog_source/preview/1.17/40/20/gameplay",title:"gameplay",description:"Posted: 15 September 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/40/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/40/20",slug:"/changelog_source/preview/1.17/40/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/40/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/40/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Lush Caves</strong>",id:"lush-caves",level:2},{value:"<strong>Villages</strong>",id:"villages",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Candle Cake Blocks</strong>",id:"candle-cake-blocks",level:3},{value:"<strong>Character Creator</strong>",id:"character-creator",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>World Generation</strong>",id:"world-generation",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Powder Snow</strong>",id:"powder-snow",level:2},{value:"<strong>Structure Block</strong>",id:"structure-block",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:g},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 15 September 2021"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4409288020237/bedrock-beta17U4-1-header.jpg",alt:"bedrock-beta17U4-1-header.jpg"})),(0,r.yg)("p",null,"Yodelay hee hoooooo! Ahem, excuse me! Ever since I set up shop on top of this stony peak, I\u2019ve been communicating exclusively through yodels. I\u2019ll switch back to words for this Bedrock Beta update, that brings you updates from these heights all the way down to dripstone and lush caves. We hope you enjoy this beta, and please let us know what you think by sending your feedback to\xa0",(0,r.yg)("a",{parentName:"p",href:"http://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),"\xa0and any bugs you catch at\xa0",(0,r.yg)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,"We would also love to hear your feedback on the game's performance! After you've enabled the Caves & Cliffs Experimental Features, let us know if you experienced any lag in your worlds in this short survey: ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MCPerfPoll"},"aka.ms/MCPerfPoll")),(0,r.yg)("h1",{id:"known-issues-in-this-beta"},(0,r.yg)("strong",{parentName:"h1"},"Known Issues in this Beta")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bee Nests generate too frequently in the world")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a new mountain biome: Stony Peaks!",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This is just a variant of lofty/snow-capped peaks that uses stone and gravel instead of snow and ice, and is used to avoid temperature clashes such as a snow-capped peak sticking up from a jungle"))),(0,r.yg)("li",{parentName:"ul"},"Corrected vegetation in Mountain Meadows"),(0,r.yg)("li",{parentName:"ul"},"Dripstone Clusters can now only be found in the Dripstone biome"),(0,r.yg)("li",{parentName:"ul"},"Dripstone features now only generate in Dripstone biome"),(0,r.yg)("li",{parentName:"ul"},"Mountain biomes now have correct feature places to match the Java Edition side-snapshot"),(0,r.yg)("li",{parentName:"ul"},"Infested Stone can be found under new mountains"),(0,r.yg)("li",{parentName:"ul"},"Tweaked ore distribution to match the Java Edition side-snapshot"),(0,r.yg)("li",{parentName:"ul"},"Clouds are now at Y level 192"),(0,r.yg)("li",{parentName:"ul"},"Tweaked biome placement, river size, and terrain shapes for a better overworld experience"),(0,r.yg)("li",{parentName:"ul"},"Tweaked mob spawning in mountain and cave biomes to match the Java Edition side-snapshot"),(0,r.yg)("li",{parentName:"ul"},"Trees in swamps can now generate slightly deeper when in water"),(0,r.yg)("li",{parentName:"ul"},"Deepslate now generates at lower depths (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125117"},"MCPE-125117"),")"),(0,r.yg)("li",{parentName:"ul"},"Dripstone features now generate at Deepslate depths"),(0,r.yg)("li",{parentName:"ul"},"The placement logic of Small Dripstone feature has been refactored, frequency is similar but exact positions will differ"),(0,r.yg)("li",{parentName:"ul"},"Maps now correctly show the colors of blocks below a Y level of zero (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-136638"},"MCPE-136638"),")")),(0,r.yg)("h2",{id:"lush-caves"},(0,r.yg)("strong",{parentName:"h2"},"Lush Caves")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Vines now generate in Lush Caves instead of generating above the surface (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125800"},"MCPE-125800"),")"),(0,r.yg)("li",{parentName:"ul"},"Vines can now grow down below zero height")),(0,r.yg)("h3",{id:"villages"},(0,r.yg)("strong",{parentName:"h3"},"Villages")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Villages now generate in the style of the biome they are located in (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-136939"},"MCPE-136939"),")")),(0,r.yg)("h1",{id:"non-experimental-features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Non-Experimental Features and Bug Fixes")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Falling stalactites are now offset properly to avoid interacting with entities outside their intended hitbox (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132772"},"MCPE-132772"),")"),(0,r.yg)("li",{parentName:"ul"},"Beehives now generate in the world facing south")),(0,r.yg)("h3",{id:"candle-cake-blocks"},(0,r.yg)("strong",{parentName:"h3"},"Candle Cake Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pressing the 'use' button on a Candle Cake now consumes the correct amount of cake slices (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-135519"},"MCPE-135519"),")")),(0,r.yg)("h2",{id:"character-creator"},(0,r.yg)("strong",{parentName:"h2"},"Character Creator")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when using Character Creator"),(0,r.yg)("li",{parentName:"ul"},"Tweaked color tint for default Steve skin to match default Steve (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120818"},"MCPE-120818"),")"),(0,r.yg)("li",{parentName:"ul"},"Altered message for when friends change skins (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92772"},"MCPE-92772"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Education Edition items are no longer shown as an option when using @e","[","type=","]"," (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-78363"},"MCPE-78363"),")")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that caused players to be set on fire upon changing dimensions if there was Lava underneath the Nether Portal (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28765"},"MCPE-28765"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer eat food at full hunger in Survival mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-60807"},"MCPE-60807"),")"),(0,r.yg)("li",{parentName:"ul"},"Sea Grass no longer spawns under Lily Pads during world generation to avoid breaking them"),(0,r.yg)("li",{parentName:"ul"},"Villagers can no longer spam doors open and closed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28055"},"MCPE-28055"),")"),(0,r.yg)("li",{parentName:"ul"},"Cartographers now more consistently give new maps on all platforms")),(0,r.yg)("h2",{id:"world-generation"},(0,r.yg)("strong",{parentName:"h2"},"World Generation")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Amethyst geodes are now much less likely to generate in Strongholds, and if they do they will not destroy End Portals (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129861"},"MCPE-129861"),",\xa0",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128799"},"MCPE-128799"),")")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved world visibility culling for underground situations to eliminate seeing sky at the end of tunnels/stairs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128372"},"MCPE-128372"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Improved mob pathing around partial blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127381"},"MCPE-127381"),")"),(0,r.yg)("li",{parentName:"ul"},"Armor no longer renders on Pillagers and Vindicators, but are still granted armor effects (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74242"},"MCPE-74242"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue with mob rendering that caused Vindicator Axes to be visible even when they're not attacking on older Resource Packs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123229"},"MCPE-123229"),")"),(0,r.yg)("li",{parentName:"ul"},"More mobs will spawn underground in the Overworld")),(0,r.yg)("h2",{id:"powder-snow"},(0,r.yg)("strong",{parentName:"h2"},"Powder Snow")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Powder Snow no longer disappears when looking at it from a distance (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127565"},"MCPE-127565"),")")),(0,r.yg)("h2",{id:"structure-block"},(0,r.yg)("strong",{parentName:"h2"},"Structure Block")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Trapdoors now rotate correctly when loaded from a Structure block (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66933"},"MCPE-66933"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where the d-pad and directional keys could not be used to navigate in certain parts of the UI (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132826"},"MCPE-132826"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where an error message could be shown after suspending the game on the achievements screens with screen animations disabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132269"},"MCPE-132269"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where an obscure gamerule was added to settings (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139025"},"MCPE-139025"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix keyboard/d-pad navigation from custom server to edit server button"),(0,r.yg)("li",{parentName:"ul"},"New achievements screens are available on Windows 10 ARM-based PCs"),(0,r.yg)("li",{parentName:"ul"},"The sign in text on the start screen will no longer overlap the Marketplace button"),(0,r.yg)("li",{parentName:"ul"},"Add space between tab title and the word 'Tab' for text-to-speech on Settings screen"),(0,r.yg)("li",{parentName:"ul"},'Added "More Info" button to failed sign-in modal')))}p.isMDXComponent=!0},88094:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));a(88502);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/40/20/tech",id:"changelog_source/preview/1.17/40/20/tech",title:"tech",description:"Data Driven Items",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/40/20/tech.mdx",sourceDirName:"changelog_source/preview/1.17/40/20",slug:"/changelog_source/preview/1.17/40/20/tech",permalink:"/en/docs/changelog_source/preview/1.17/40/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/40/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>Data Driven Items</strong>",id:"data-driven-items",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>Player</strong>",id:"player",level:2},{value:"<strong>Block</strong>",id:"block",level:2},{value:"<strong>BlockType</strong>",id:"blocktype",level:2},{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:2}],u={toc:g},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"data-driven-items"},(0,r.yg)("strong",{parentName:"h2"},"Data Driven Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated documentation for Block Rotation Component"),(0,r.yg)("li",{parentName:"ul"},"Added required toggles to documentation and to content error for block components")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Command blocks with 'Needs Redstone' and a non-zero 'Delay in Ticks' will now execute only if they remain powered for the delay duration (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74281"},"MCPE-74281"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix alignment of the sidebar display from the /scoreboard command when text length changes")),(0,r.yg)("h2",{id:"data-driven-blocks"},(0,r.yg)("strong",{parentName:"h2"},"Data Driven Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockExplosionResistance")),(0,r.yg)("h2",{id:"graphics"},(0,r.yg)("strong",{parentName:"h2"},"Graphics")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed failure to render leash when attached to a mob outside of viewport (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-63931"},"MCPE-63931"),")"),(0,r.yg)("li",{parentName:"ul"},"Added a content error for using a material but not providing the required number of textures to the render controller"),(0,r.yg)("li",{parentName:"ul"},"Testing RenderDragon engine across subset of Android devices (ARMv7)")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed ability to summon experience orbs via /summon command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130835"},"MCPE-130835"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed display only entity destruction in chunk discard scenarios")),(0,r.yg)("h2",{id:"molang"},(0,r.yg)("strong",{parentName:"h2"},"Molang")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed query.item","_","remaining","_","use","_","duration having improperly scaled or inverted results (This fix is a Versioned Change as of engine version 1.17.30)"),(0,r.yg)("li",{parentName:"ul"},"Add new compile errors for expressions like\xa0'text' + 3, which were previously ignored (This is a Versioned Change as of engine version 1.17.40)")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added an ImGUI window for easier viewing of content errors")),(0,r.yg)("h2",{id:"gametest-framework-experimental"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed method succeedWhenBlockTypePresent to succeedWhenBlockPresent"),(0,r.yg)("li",{parentName:"ul"},'Fixed a bug where property\xa0idwould return "Unknown" for custom entities (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137786"},"MCPE-137786"),")"),(0,r.yg)("li",{parentName:"ul"},"Identifier strings returned from property\xa0idnow include the item's namespace")),(0,r.yg)("p",null,"\xa0\xa0\xa0\xa0 ",(0,r.yg)("strong",{parentName:"p"},"GameTestSequence")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed method thenWaitWithDelay"),(0,r.yg)("li",{parentName:"ul"},"Added method thenWaitAfter(delayTicks: number, callback: () =",">"," undefined) - After a delay, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution")),(0,r.yg)("h2",{id:"player"},(0,r.yg)("strong",{parentName:"h2"},"Player")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the location property would return an incorrect height for players"),(0,r.yg)("li",{parentName:"ul"},"Added property\xa0id")),(0,r.yg)("h2",{id:"block"},(0,r.yg)("strong",{parentName:"h2"},"Block")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0getLocationwith property\xa0location"),(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0getPermutationwith property\xa0permutation"),(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0getTypewith property\xa0type"),(0,r.yg)("li",{parentName:"ul"},"Replaced methods\xa0isWaterloggedand\xa0setWaterlogged\xa0with property\xa0isWaterlogged"),(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0getBlockDatawith property\xa0permutation"),(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0isEmptywith property\xa0isEmpty"),(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0canBeWaterlogged")),(0,r.yg)("h2",{id:"blocktype"},(0,r.yg)("strong",{parentName:"h2"},"BlockType")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0getNamewith property\xa0id"),(0,r.yg)("li",{parentName:"ul"},"Replaced method\xa0canBeWaterloggedwith property\xa0canBeWaterlogged")),(0,r.yg)("h2",{id:"blockpermutation"},(0,r.yg)("strong",{parentName:"h2"},"BlockPermutation")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Replaced method getTypewith property type")))}p.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,g={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>c});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,g={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},41559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>g,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(9666),i=a(88094);const s={sidebar_position:99999850,title:"1.17.40.20",tags:["Official","Changelog","Preview","1.17"]},g="Minecraft Beta - 1.17.40.20 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/40/20",id:"official_changelog/preview/1.17/40/20",title:"1.17.40.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/40/20.mdx",sourceDirName:"official_changelog/preview/1.17/40",slug:"/official_changelog/preview/1.17/40/20",permalink:"/en/docs/official_changelog/preview/1.17/40/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/40/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999850,frontMatter:{sidebar_position:99999850,title:"1.17.40.20",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.40.21",permalink:"/en/docs/official_changelog/preview/1.17/40/21"},next:{title:"1.17.30.25",permalink:"/en/docs/official_changelog/preview/1.17/30/25"}},c={},p=[],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta---1174020-xbox-onewindows-10android"},"Minecraft Beta - 1.17.40.20 (Xbox One/Windows 10/Android)"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);