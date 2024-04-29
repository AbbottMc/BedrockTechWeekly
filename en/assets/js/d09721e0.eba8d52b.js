"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60738,64137,81791,14684,23745,25378,78714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},42290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/gameplay",id:"changelog_source/preview/1.20/10/21/gameplay",title:"gameplay",description:"Posted: 1 June 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/10/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Recipe Unlocking</strong>",id:"recipe-unlocking",level:2},{value:"<strong>Sneak and Crawl</strong>",id:"sneak-and-crawl",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 1 June 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/16316195911949",alt:"A Minecraft screenshot featuring a villager standing beside a crafting table. There is an armour stand in the background, with a camel nearby, too."})),(0,r.kt)("p",null,"A new Minecraft Preview and Beta update is here, more tweaks and changes to improve your gameplay experience! Please continue to send us your ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),"! Here\u2019s an overview of what\u2019s in the update:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/16316164692237",alt:"New recipe unlocked!"})),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"recipe-unlocking"},(0,r.kt)("strong",{parentName:"h2"},"Recipe Unlocking")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recipe unlocking \u2013 now in Bedrock!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added recipe unlocking as an experiment"),(0,r.kt)("li",{parentName:"ul"},"Collect materials to unlock relevant recipes"),(0,r.kt)("li",{parentName:"ul"},"A notification will tell you when you've found a new crafting material"),(0,r.kt)("li",{parentName:"ul"},"Picking up an item teaches you how to craft that item. Great for when a friend gives you a tool you haven\u2019t crafted before"),(0,r.kt)("li",{parentName:"ul"},"We\u2019d love to hear what you think of this feature, so please send us your feedback at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MCRecipeUnlocks"},"aka.ms/MCRecipeUnlocks"))))),(0,r.kt)("h2",{id:"sneak-and-crawl"},(0,r.kt)("strong",{parentName:"h2"},"Sneak and Crawl")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players will no longer be stuck inside Cauldrons or Composters when crawling inside with a Trapdoor (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170836"},"MCPE-170836"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"The paperdoll will now show up properly when crawling\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where gliding or swimming could sometimes give the player an incorrect bounding box (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170882"},"MCPE-170882"),")")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Suspicious Gravel and Suspicious Sand blocks now display correctly on maps"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when placing an End Crystal in The End (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170858"},"MCPE-170858"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Shield no longer clips inside the Armor Stand model while in the riposte pose"),(0,r.kt)("li",{parentName:"ul"},"Fixed Boats on Ice disappearing when Client-Side Chunk-Generation was enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169313"},"MCPE-169313"),")\xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Underwater and fog effects are now based on camera position rather than player position\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that allowed FOV to affect appearance of first-person hands and Spyglass frame (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170832"},"MCPE-170832"),")"),(0,r.kt)("li",{parentName:"ul"},"Fancy Leaves setting is now applied immediately and will no longer cause x-ray effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123608"},"MCPE-123608"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs are back to normal despawn rate during night (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170208"},"MCPE-170208"),")"),(0,r.kt)("li",{parentName:"ul"},"Camels now play a walking animation when taking damage while standing still (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166566"},"MCPE-166566"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Sniffer can no longer dig up seeds in the air")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reordered the gamepad tooltips for UI screens so that the buttons align with the same side as a controller")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Bamboo Raft recipe to not include Shovel as an ingredient (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170896"},"MCPE-170896"),")")))}p.isMDXComponent=!0},61483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(219),i=(a(12232),a(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/10/21/tech",id:"changelog_source/preview/1.20/10/21/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Dedicated Server</strong>\xa0",id:"dedicated-server",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Camera</strong>",id:"camera",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Converted ",(0,r.kt)("em",{parentName:"li"},'"properties"')," to ",(0,r.kt)("em",{parentName:"li"},'"states"')," for custom blocks"),(0,r.kt)("li",{parentName:"ul"},"Fix a crash that could happen when running the ",(0,r.kt)("em",{parentName:"li"},"\u201cgo","_","and","_","give","_","items","_","to","_","noteblock\u201d")," goal\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when attempting to change a mob\u2019s scale while it was colliding with blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170645"},"MCPE-170645"),")")),(0,r.kt)("h2",{id:"dedicated-server"},(0,r.kt)("strong",{parentName:"h2"},"Dedicated Server"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note for Linux users:")," Ubuntu 18.04 LTS (Bionic Beaver) will reach End of Standard Support in 2023. Accordingly, the Linux Minecraft Dedicated Server will also raise its minimum target Ubuntu version to 20.04 LTS (Focal Fossa) in a later R20 update (exact release to be determined). Minecraft server operators using Ubuntu are encouraged to prepare for this transition by updating their deployments to 20.04 LTS as soon as possible.\xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items with the ",(0,r.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," component will now place blocks with correct orientation\xa0"),(0,r.kt)("li",{parentName:"ul"},"Released the ",(0,r.kt)("em",{parentName:"li"},'"minecraft:max',"_","stack","_",'size"')," item component out of experimental in json formats 1.20.10 and higher"),(0,r.kt)("li",{parentName:"ul"},"Custom items with ",(0,r.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," will no longer place certain blocks in the wrong location\xa0"),(0,r.kt)("li",{parentName:"ul"},"Released the ",(0,r.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," item component out of experimental in json formats 1.20.10 and higher"),(0,r.kt)("li",{parentName:"ul"},"Released the ",(0,r.kt)("em",{parentName:"li"},'"minecraft:record"')," item component out of experimental in json formats 1.20.10 and higher")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"camera"},(0,r.kt)("strong",{parentName:"h2"},"Camera")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit free cam JSON to not pitch camera beyond plus or minus 90 degrees"),(0,r.kt)("li",{parentName:"ul"},"Fixed /",(0,r.kt)("em",{parentName:"li"},"camerashake")," command to shake camera without also shaking player"),(0,r.kt)("li",{parentName:"ul"},"Rendering of experimental minecraft:free camera no longer affected by player state like night vision")))}d.isMDXComponent=!0},219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   System",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced\xa0",(0,r.kt)("em",{parentName:"li"},"events_with\xa0_system.beforeEvents"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"system.afterEvents"),"."),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0",(0,r.kt)("em",{parentName:"li"},"beforeWatchdogTerminate_to\xa0_watchdogTerminate"),"\xa0and moved it to\xa0",(0,r.kt)("em",{parentName:"li"},"beforeEvents")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"scriptEventReceive_to\xa0_afterEvents")))),(0,r.kt)("li",{parentName:"ul"},"MessageReceiveAfterEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"sourceType")))),(0,r.kt)("li",{parentName:"ul"},"ScriptEventSource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced enum\xa0",(0,r.kt)("em",{parentName:"li"},"MessageSourceType_with a new enum\xa0_ScriptEventSource")))),(0,r.kt)("li",{parentName:"ul"},"ScriptEventCommandMessageAfterEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed property\xa0",(0,r.kt)("em",{parentName:"li"},"sourceType_from\xa0_MessageSourceType"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"ScriptEventSource")),(0,r.kt)("li",{parentName:"ul"},"Increased maximum message length from 256 to 2048 characters")))))}p.isMDXComponent=!0},12232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),i=a(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},57203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),i=a(42290),l=a(61483);const s={sidebar_position:99999764,title:"1.20.10.21",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.10.21",u={unversionedId:"official_changelog/preview/1.20/10/21",id:"official_changelog/preview/1.20/10/21",title:"1.20.10.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/10/21.mdx",sourceDirName:"official_changelog/preview/1.20/10",slug:"/official_changelog/preview/1.20/10/21",permalink:"/en/docs/official_changelog/preview/1.20/10/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/10/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999764,frontMatter:{sidebar_position:99999764,title:"1.20.10.21",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.10.23",permalink:"/en/docs/official_changelog/preview/1.20/10/23"},next:{title:"1.20.10.20",permalink:"/en/docs/official_changelog/preview/1.20/10/20"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1201021"},"Minecraft Beta & Preview - 1.20.10.21"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);