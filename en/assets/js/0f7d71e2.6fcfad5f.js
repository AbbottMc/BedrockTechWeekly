"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11705,58685,64137,81791,39563,32399,33752,48735,65459],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==l&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},82355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/22/gameplay",id:"changelog_source/preview/1.20/70/22/gameplay",title:"gameplay",description:"Posted: 7 February 2024",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/70/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"Armadillo",id:"armadillo",level:2},{value:"Vault",id:"vault",level:2},{value:"Breeze",id:"breeze",level:2},{value:"Blocks",id:"blocks",level:2},{value:"In-Game Tips",id:"in-game-tips",level:2},{value:"Inventory",id:"inventory",level:2},{value:"Realms",id:"realms",level:2},{value:"Realms Stories",id:"realms-stories",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"World Generation",id:"world-generation",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 7 February 2024"),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/23935504574349",alt:"Armadillos in their rolled up position, with their legs and faces peeking out."})),(0,n.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,n.kt)("h2",{id:"armadillo"},"Armadillo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Armadillos have a brand-new unrolling animation\xa0"),(0,n.kt)("li",{parentName:"ul"},"Armadillos now randomly peek out of their shell while rolled-up"),(0,n.kt)("li",{parentName:"ul"},"To accommodate these new animations, the time for a rolled-up Armadillo to stay without threats before unrolling has been increased from 3 to 4 seconds")),(0,n.kt)("h2",{id:"vault"},"Vault"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Vault texture has been updated\xa0"),(0,n.kt)("li",{parentName:"ul"},"If any nearby player has not unlocked a Vault, the keyhole will be open"),(0,n.kt)("li",{parentName:"ul"},"If all nearby players have unlocked a Vault, the keyhole will be closed")),(0,n.kt)("h2",{id:"breeze"},"Breeze"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Breeze is only suggested in the type selector when the appropriate experimental toggle is enabled\xa0"),(0,n.kt)("li",{parentName:"ul"},"The Breeze's attack damage has been tweaked\xa0")),(0,n.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cave Vines without Glow Berries no longer drop a Glow Berry when Silk Touched (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151348"},"MCPE-151348"),")"),(0,n.kt)("li",{parentName:"ul"},"Blue and Black Candle Cakes now display and drop the correct type of Candle (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162868"},"MCPE-162868"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},'"wood" block is now split into unique instances: "oak',"_",'wood", "spruce',"_",'wood", "birch',"_",'wood", "jungle',"_",'wood", "acacia',"_",'wood", "dark',"_","oak","_",'wood", "stripped',"_","oak","_",'wood", "stripped',"_","spruce","_",'wood", "stripped',"_","birch","_",'wood", "stripped',"_","jungle","_",'wood", "stripped',"_","acacia","_",'wood", and "stripped',"_","dark","_","oak","_",'wood"\xa0')),(0,n.kt)("h2",{id:"in-game-tips"},"In-Game Tips"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You may have noticed that in an earlier preview we launched a dynamic game tips feature. It will help players learn basic things necessary to explore and enjoy Minecraft. With the tips being mainly aimed at new players, you're not very likely to ever encounter them, however, feel free to leave feedback if you do see them at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/mcgametipsfeedback"},"aka.ms/mcgametipsfeedback"))),(0,n.kt)("h2",{id:"inventory"},"Inventory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"End Portal Frame item has been moved to Nature category in the Creative inventory menu\xa0")),(0,n.kt)("h2",{id:"realms"},"Realms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On Realms, we no longer will keep the chunks loaded in The End unless a player is in the area (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-11358"},"REALMS-11358"),") (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-11290"},"REALMS-11290"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where text in the Realms Subscription landing page was slightly truncated\xa0")),(0,n.kt)("h2",{id:"realms-stories"},"Realms Stories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added four new Realm Events\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added two extra-special LARGE Realm Events"),(0,n.kt)("li",{parentName:"ul"},"Fixed gamepad back button input not working correctly on the Realms Stories Settings screen\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed issue with time blocks not rendering in the correct time zones on Switch"),(0,n.kt)("li",{parentName:"ul"},"Added screen-reader narration for Comments screen"),(0,n.kt)("li",{parentName:"ul"},"When in split-screen mode, only the primary user can access Realms Stories")),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The updated Death Screen is now enabled by default, even when resource packs are applied to a world\xa0"),(0,n.kt)("li",{parentName:"ul"},"The grid/list layout button in the new Play screen now retains the selected layout mode on restart (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177975"},"MCPE-177975"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"The feedback button in the Friends Drawer in the new Play screen now leads to the correct feedback page\xa0")),(0,n.kt)("h2",{id:"world-generation"},"World Generation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug that could sometimes prevent the Stronghold portal room from being generated (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19426"},"MCPE-19426"),")")))}p.isMDXComponent=!0},52565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88346),i=a(27581),l=(a(51991),a(67866),a(9071));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/70/22/tech",id:"changelog_source/preview/1.20/70/22/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/70/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Molang",id:"molang",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Graphical",id:"graphical",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed 'minecraft:geometry.full","_","block' faces not rotating to match transform component"),(0,n.kt)("li",{parentName:"ul"},"Fixed 'minecraft:geometry.full","_","block' blocks not culling faces against some vanilla blocks\xa0")),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Entities with a "damage',"_",'sensor" component can once again be killed via commands'),(0,n.kt)("li",{parentName:"ul"},'The "damage',"_",'sensor" component can once again trigger entity events on entities other than the owner\xa0')),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn\xa0",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use"),"\xa0the Editor,\xa0join the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion"),"\xa0forum to engage with the team, and get started building extensions via the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit"),"\xa0and\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,n.kt)("p",null,"Updates this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renamed enum\xa0ClipboardMirrorAxis\xa0to\xa0StructureMirrorAxis\xa0and moved it to module @minecraft/server"),(0,n.kt)("li",{parentName:"ul"},"Renamed enum\xa0ClipboardRotation\xa0to\xa0StructureRotation\xa0and moved it to module @minecraft/server"),(0,n.kt)("li",{parentName:"ul"},"Panel booleans can now be represented as a toggleswitch as an alternative to a checkbox")),(0,n.kt)("h2",{id:"molang"},"Molang"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"query.is","_","attached"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"query.has","_","player","_","rider"),"\xa0from experimental"),(0,n.kt)("li",{parentName:"ul"},"Removed experimental Molang queries\xa0",(0,n.kt)("em",{parentName:"li"},"query.get","_","ride"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"query.get","_","riders")),(0,n.kt)("li",{parentName:"ul"},"Deprecated the Molang Features experiment"),(0,n.kt)("li",{parentName:"ul"},"Released Molang\xa0",(0,n.kt)("em",{parentName:"li"},"query.scoreboard"),"\xa0for use with behavior packs from experimental (resource packs will return 0)\xa0")),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a crash on Android devices when entering Deferred Technical Preview worlds\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a circular visual artifact that could occur when using the new Point Light Shadows feature in the Deferred Technical Preview")))}h.isMDXComponent=!0},27581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/22/tech_sapi_exp",id:"changelog_source/preview/1.20/70/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/70/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where item dynamic properties could sometimes be applied to items with a stack size greater than 1\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removing function\xa0",(0,n.kt)("em",{parentName:"li"},"triggerEvent()")))),(0,n.kt)("li",{parentName:"ul"},"WorldBeforeEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removing property\xa0",(0,n.kt)("em",{parentName:"li"},"itemDefinitionEvent")))),(0,n.kt)("li",{parentName:"ul"},"WorldAfterEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removing property\xa0",(0,n.kt)("em",{parentName:"li"},"itemDefinitionEvent")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"explosion"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.9.0")))),(0,n.kt)("li",{parentName:"ul"},"WorldBeforeEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"explosion"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.9.0"))))))}p.isMDXComponent=!0},67866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/70/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/70/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88346:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/22/tech_sapi_stable",id:"changelog_source/preview/1.20/70/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed the timing of\xa0PlayerInteractWithEntityAfterEvent\xa0and\xa0PlayerInteractWithBlockAfterEvent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/70/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed the timing of\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerInteractWithEntityAfterEvent"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerInteractWithBlockAfterEvent"),"\xa0"),(0,n.kt)("li",{parentName:"ul"},"Adding\xa0",(0,n.kt)("em",{parentName:"li"},"Player.setGameMode"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"Player.getGameMode"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0for changing the Player's\xa0",(0,n.kt)("em",{parentName:"li"},"GameMode"),"\xa0"),(0,n.kt)("li",{parentName:"ul"},"Adding events\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEvent"),",\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEvent"),"\xa0with signals\xa0",(0,n.kt)("em",{parentName:"li"},"world.afterEvents.playerGameModeChange"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"world.beforeEvents.playerGameModeChange"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0"),(0,n.kt)("li",{parentName:"ul"},"Adding\xa0",(0,n.kt)("em",{parentName:"li"},"GameRuleChangeAfterEvent"),",\xa0",(0,n.kt)("em",{parentName:"li"},"GameRule"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"world.afterEvents.gameRuleChange"),"\xa0for responding to GameRules changes")))}p.isMDXComponent=!0},51991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/70/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/70/22",slug:"/changelog_source/preview/1.20/70/22/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/70/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(31792),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,n.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,n.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),o=a(31792),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},49864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(88247),i=a(82355),l=a(52565);const s={sidebar_position:99999732,title:"1.20.70.22",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.70.22",u={unversionedId:"official_changelog/preview/1.20/70/22",id:"official_changelog/preview/1.20/70/22",title:"1.20.70.22",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/70/22.mdx",sourceDirName:"official_changelog/preview/1.20/70",slug:"/official_changelog/preview/1.20/70/22",permalink:"/en/docs/official_changelog/preview/1.20/70/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/70/22.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999732,frontMatter:{sidebar_position:99999732,title:"1.20.70.22",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.70.24",permalink:"/en/docs/official_changelog/preview/1.20/70/24"},next:{title:"1.20.70.21",permalink:"/en/docs/official_changelog/preview/1.20/70/21"}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1207022"},"Minecraft Beta & Preview - 1.20.70.22"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);