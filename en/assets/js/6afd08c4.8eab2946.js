"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95752,64137,81791,45469,15343,35988,54949],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},48798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/40/23/gameplay",id:"changelog_source/preview/1.19/40/23/gameplay",title:"gameplay",description:"Posted: 29th September 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/40/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Spectator Mode (Experimental)</strong>",id:"spectator-mode-experimental",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Mobile Touch Controls</strong>",id:"mobile-touch-controls",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>NPC (EDU)</strong>",id:"npc-edu",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 29th September 2022"),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/9527542833677/R19U4_4_16x9.jpg",alt:"A Minecraft screenshot related to the fixes in this week's preview, with nether portal ruins, a wither skeleton, a villager, and various other mobs in the scene."})),(0,n.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! As always, please search and report any bugs you may find at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and feel free to send us ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),"."),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"vanilla-parity"},(0,n.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Getting killed by a mob with a renamed weapon now produces a death message with the item name (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162055"},"MCPE-162055"),")"),(0,n.kt)("li",{parentName:"ul"},"Wither Skeletons can now spawn inside of Wither Roses (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110127"},"MCPE-110127"),")"),(0,n.kt)("li",{parentName:"ul"},"Decreased the amount of hunger used while swimming to match Java Edition (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154452"},"MCPE-154452"),")"),(0,n.kt)("li",{parentName:"ul"},"Librarian Villagers can now offer Enchanted Books with Curse of Vanishing and Curse of Binding (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84906"},"MCPE-84906"),")")),(0,n.kt)("h2",{id:"spectator-mode-experimental"},(0,n.kt)("strong",{parentName:"h2"},"Spectator Mode (Experimental)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Shulker bullets no longer follow Spectators (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162069"},"MCPE-162069"),")"),(0,n.kt)("li",{parentName:"ul"},"Spectators are now invisible to normal players"),(0,n.kt)("li",{parentName:"ul"},"If a player is in Spectator Mode and other non-spectating players are present on the server, the spectating player won't affect mob despawning anymore"),(0,n.kt)("li",{parentName:"ul"},"If there are only spectating players on the server, mob despawning is now put on hold")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where death messages were sometimes too long to fit on screen (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156550"},"MCPE-156550"),")"),(0,n.kt)("li",{parentName:"ul"},"The inventory button for touch devices is now reset to its default appearance after closing the inventory"),(0,n.kt)("li",{parentName:"ul"},"Fixed the crafting screen search string not saving correctly"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue with the durability bar missing on inventory screens on Xbox (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162063"},"MCPE-162063"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the sign in button on Create New World didn't work on some platforms")),(0,n.kt)("h2",{id:"mobile-touch-controls"},(0,n.kt)("strong",{parentName:"h2"},"Mobile Touch Controls")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where items could not be removed from the hotbar by moving them onto other items in Creative Inventory on mobile devices"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the stack splitting progress bar was not aligned on touch mode"),(0,n.kt)("li",{parentName:"ul"},"Adjusted layout of the touch toolbar and status effect icons based on user feedback"),(0,n.kt)("li",{parentName:"ul"},"Temporarily disabled the preview of our new Touch Stack Splitting UX while we work through feedback")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When a mob is a passenger in a Boat, neither the Boat nor the mob are allowed to change dimension (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154919"},"MCPE-154919"),")")),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The book of an Enchanting Table now properly faces a nearby player (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-29924"},"MCPE-29924"),")")),(0,n.kt)("h2",{id:"npc-edu"},(0,n.kt)("strong",{parentName:"h2"},"NPC (EDU)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NPCs can now have no name, hiding the nametag above their head")),(0,n.kt)("h2",{id:"marketplace"},(0,n.kt)("strong",{parentName:"h2"},"Marketplace")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue with Marketplace bundle prices not showing as free after purchasing")),(0,n.kt)("h2",{id:"performance-and-stability"},(0,n.kt)("strong",{parentName:"h2"},"Performance and Stability")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a potential crash source in explosions"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when leaving a split screen session")))}p.isMDXComponent=!0},70236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(49617),i=(a(72853),a(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/40/23/tech",id:"changelog_source/preview/1.19/40/23/tech",title:"tech",description:"Experimental Features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Major breaking change to experimental JavaScript APIs:</strong>",id:"major-breaking-change-to-experimental-javascript-apis",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"experimental-features"},(0,n.kt)("strong",{parentName:"h2"},"Experimental Features")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"major-breaking-change-to-experimental-javascript-apis"},(0,n.kt)("strong",{parentName:"h2"},"Major breaking change to experimental JavaScript APIs:")),(0,n.kt)("p",null,"All script modules have been renamed to follow a new convention.\xa0\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"mojang-gametest"),"-",">","\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-gametest")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"mojang-minecraft"),"-",">","\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"mojang-minecraft-ui"),"-",">","\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-ui")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"mojang-minecraft-server-admin"),"-",">","\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-admin")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"mojang-net"),"-",">","\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-net"))),(0,n.kt)("p",null,"For example, rather than using:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import * as mc from "mojang-minecraft";\n')),(0,n.kt)("p",null,"Use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import * as mc from "@minecraft/server";\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use of script\xa0eval()and\xa0Function()\xa0must be explicitly enabled in \xa0json\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To do this, set\xa0script","_","evalin\xa0capabilities")))),(0,n.kt)("p",null,'"capabilities": ',"[",'\xa0 "script',"_",'eval"',"]"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Root path for imports has changed; scripts/prefix are no longer allowed."),(0,n.kt)("li",{parentName:"ul"},'For imports, use\xa0import "./source.js" or import "source.js"'),(0,n.kt)("li",{parentName:"ul"},'Deprecated use of\xa0import "scripts/source.js"')),(0,n.kt)("h2",{id:"actor-properties"},(0,n.kt)("strong",{parentName:"h2"},"Actor Properties")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Fixed "bool',"_",'property" filters that didn\'t specify a "value"')),(0,n.kt)("h2",{id:"commands"},(0,n.kt)("strong",{parentName:"h2"},"Commands")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Temporarily disabled the rotation for the /summon command while a bug is worked on"),(0,n.kt)("li",{parentName:"ul"},"Fixed a rotation issue when a Command Block executes 'execute facing' and 'execute rotated' (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162256"},"MCPE-162256"),")"),(0,n.kt)("li",{parentName:"ul"},"Implemented the '/execute in' command"),(0,n.kt)("li",{parentName:"ul"},"Implemented the \u2018/execute anchored \\<eyes|feet",">","\u2019 command")),(0,n.kt)("h2",{id:"general"},(0,n.kt)("strong",{parentName:"h2"},"General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Release BlockGeometryComponent out of experimental in JSON formats 1.19.40 and higher"),(0,n.kt)("li",{parentName:"ul"},"Release BlockMaterialInstancesComponent out of experimental in JSON formats 1.19.40 and higher"),(0,n.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,n.kt)("em",{parentName:"li"},"minecraft:block","_","light","_","filter_component to\xa0_minecraft:light","_","dampening"))))}d.isMDXComponent=!0},49617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/40/23/tech_sapi_stable",id:"changelog_source/preview/1.19/40/23/tech_sapi_stable",title:"tech_sapi_stable",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},72853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},1478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(88247),i=a(48798),l=a(70236);const s={sidebar_position:99999797,title:"1.19.40.23",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.40.23",u={unversionedId:"official_changelog/preview/1.19/40/23",id:"official_changelog/preview/1.19/40/23",title:"1.19.40.23",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/40/23.mdx",sourceDirName:"official_changelog/preview/1.19/40",slug:"/official_changelog/preview/1.19/40/23",permalink:"/en/docs/official_changelog/preview/1.19/40/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/40/23.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999797,frontMatter:{sidebar_position:99999797,title:"1.19.40.23",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.40.24",permalink:"/en/docs/official_changelog/preview/1.19/40/24"},next:{title:"1.19.40.22",permalink:"/en/docs/official_changelog/preview/1.19/40/22"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1194023"},"Minecraft Beta & Preview - 1.19.40.23"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);