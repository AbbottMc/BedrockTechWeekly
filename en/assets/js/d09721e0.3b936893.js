"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81875,31164,43115,43281,98292,7566,80136],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),l=a(56347),s=a(57485),c=a(31682),u=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=g(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==l&&(g(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},15168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/gameplay",id:"changelog_source/preview/1.20/10/21/gameplay",title:"gameplay",description:"Posted: 1 June 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/10/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Recipe Unlocking</strong>",id:"recipe-unlocking",level:2},{value:"<strong>Sneak and Crawl</strong>",id:"sneak-and-crawl",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 1 June 2023"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/16316195911949",alt:"A Minecraft screenshot featuring a villager standing beside a crafting table. There is an armour stand in the background, with a camel nearby, too."})),(0,r.yg)("p",null,"A new Minecraft Preview and Beta update is here, more tweaks and changes to improve your gameplay experience! Please continue to send us your ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),"! Here\u2019s an overview of what\u2019s in the update:"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/16316164692237",alt:"New recipe unlocked!"})),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"recipe-unlocking"},(0,r.yg)("strong",{parentName:"h2"},"Recipe Unlocking")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Recipe unlocking \u2013 now in Bedrock!",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added recipe unlocking as an experiment"),(0,r.yg)("li",{parentName:"ul"},"Collect materials to unlock relevant recipes"),(0,r.yg)("li",{parentName:"ul"},"A notification will tell you when you've found a new crafting material"),(0,r.yg)("li",{parentName:"ul"},"Picking up an item teaches you how to craft that item. Great for when a friend gives you a tool you haven\u2019t crafted before"),(0,r.yg)("li",{parentName:"ul"},"We\u2019d love to hear what you think of this feature, so please send us your feedback at ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MCRecipeUnlocks"},"aka.ms/MCRecipeUnlocks"))))),(0,r.yg)("h2",{id:"sneak-and-crawl"},(0,r.yg)("strong",{parentName:"h2"},"Sneak and Crawl")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Players will no longer be stuck inside Cauldrons or Composters when crawling inside with a Trapdoor (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170836"},"MCPE-170836"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"The paperdoll will now show up properly when crawling\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where gliding or swimming could sometimes give the player an incorrect bounding box (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170882"},"MCPE-170882"),")")),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Suspicious Gravel and Suspicious Sand blocks now display correctly on maps"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when placing an End Crystal in The End (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170858"},"MCPE-170858"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Shield no longer clips inside the Armor Stand model while in the riposte pose"),(0,r.yg)("li",{parentName:"ul"},"Fixed Boats on Ice disappearing when Client-Side Chunk-Generation was enabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169313"},"MCPE-169313"),")\xa0")),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Underwater and fog effects are now based on camera position rather than player position\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that allowed FOV to affect appearance of first-person hands and Spyglass frame (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170832"},"MCPE-170832"),")"),(0,r.yg)("li",{parentName:"ul"},"Fancy Leaves setting is now applied immediately and will no longer cause x-ray effect (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123608"},"MCPE-123608"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mobs are back to normal despawn rate during night (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170208"},"MCPE-170208"),")"),(0,r.yg)("li",{parentName:"ul"},"Camels now play a walking animation when taking damage while standing still (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166566"},"MCPE-166566"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Sniffer can no longer dig up seeds in the air")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Reordered the gamepad tooltips for UI screens so that the buttons align with the same side as a controller")),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated Bamboo Raft recipe to not include Shovel as an ingredient (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170896"},"MCPE-170896"),")")))}g.isMDXComponent=!0},83676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(69272),i=(a(84672),a(88502));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/10/21/tech",id:"changelog_source/preview/1.20/10/21/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Dedicated Server</strong>\xa0",id:"dedicated-server",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Camera</strong>",id:"camera",level:2}],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Converted ",(0,r.yg)("em",{parentName:"li"},'"properties"')," to ",(0,r.yg)("em",{parentName:"li"},'"states"')," for custom blocks"),(0,r.yg)("li",{parentName:"ul"},"Fix a crash that could happen when running the ",(0,r.yg)("em",{parentName:"li"},"\u201cgo","_","and","_","give","_","items","_","to","_","noteblock\u201d")," goal\xa0"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when attempting to change a mob\u2019s scale while it was colliding with blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170645"},"MCPE-170645"),")")),(0,r.yg)("h2",{id:"dedicated-server"},(0,r.yg)("strong",{parentName:"h2"},"Dedicated Server"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Note for Linux users:")," Ubuntu 18.04 LTS (Bionic Beaver) will reach End of Standard Support in 2023. Accordingly, the Linux Minecraft Dedicated Server will also raise its minimum target Ubuntu version to 20.04 LTS (Focal Fossa) in a later R20 update (exact release to be determined). Minecraft server operators using Ubuntu are encouraged to prepare for this transition by updating their deployments to 20.04 LTS as soon as possible.\xa0")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Items with the ",(0,r.yg)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," component will now place blocks with correct orientation\xa0"),(0,r.yg)("li",{parentName:"ul"},"Released the ",(0,r.yg)("em",{parentName:"li"},'"minecraft:max',"_","stack","_",'size"')," item component out of experimental in json formats 1.20.10 and higher"),(0,r.yg)("li",{parentName:"ul"},"Custom items with ",(0,r.yg)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," will no longer place certain blocks in the wrong location\xa0"),(0,r.yg)("li",{parentName:"ul"},"Released the ",(0,r.yg)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," item component out of experimental in json formats 1.20.10 and higher"),(0,r.yg)("li",{parentName:"ul"},"Released the ",(0,r.yg)("em",{parentName:"li"},'"minecraft:record"')," item component out of experimental in json formats 1.20.10 and higher")),(0,r.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"camera"},(0,r.yg)("strong",{parentName:"h2"},"Camera")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Limit free cam JSON to not pitch camera beyond plus or minus 90 degrees"),(0,r.yg)("li",{parentName:"ul"},"Fixed /",(0,r.yg)("em",{parentName:"li"},"camerashake")," command to shake camera without also shaking player"),(0,r.yg)("li",{parentName:"ul"},"Rendering of experimental minecraft:free camera no longer affected by player state like night vision")))}d.isMDXComponent=!0},69272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   System",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"System",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Replaced\xa0",(0,r.yg)("em",{parentName:"li"},"events_with\xa0_system.beforeEvents"),"\xa0and\xa0",(0,r.yg)("em",{parentName:"li"},"system.afterEvents"),"."),(0,r.yg)("li",{parentName:"ul"},"Renamed event\xa0",(0,r.yg)("em",{parentName:"li"},"beforeWatchdogTerminate_to\xa0_watchdogTerminate"),"\xa0and moved it to\xa0",(0,r.yg)("em",{parentName:"li"},"beforeEvents")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"scriptEventReceive_to\xa0_afterEvents")))),(0,r.yg)("li",{parentName:"ul"},"MessageReceiveAfterEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed property\xa0",(0,r.yg)("em",{parentName:"li"},"sourceType")))),(0,r.yg)("li",{parentName:"ul"},"ScriptEventSource",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Replaced enum\xa0",(0,r.yg)("em",{parentName:"li"},"MessageSourceType_with a new enum\xa0_ScriptEventSource")))),(0,r.yg)("li",{parentName:"ul"},"ScriptEventCommandMessageAfterEvent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Changed property\xa0",(0,r.yg)("em",{parentName:"li"},"sourceType_from\xa0_MessageSourceType"),"\xa0to\xa0",(0,r.yg)("em",{parentName:"li"},"ScriptEventSource")),(0,r.yg)("li",{parentName:"ul"},"Increased maximum message length from 256 to 2048 characters")))))}g.isMDXComponent=!0},84672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}g.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),i=a(19365);const l={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(i.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),i=a(19365);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(i.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},37185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),i=a(15168),l=a(83676);const s={sidebar_position:99999764,title:"1.20.10.21",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.10.21",u={unversionedId:"official_changelog/preview/1.20/10/21",id:"official_changelog/preview/1.20/10/21",title:"1.20.10.21",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/10/21.mdx",sourceDirName:"official_changelog/preview/1.20/10",slug:"/official_changelog/preview/1.20/10/21",permalink:"/en/docs/official_changelog/preview/1.20/10/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/10/21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999764,frontMatter:{sidebar_position:99999764,title:"1.20.10.21",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.10.23",permalink:"/en/docs/official_changelog/preview/1.20/10/23"},next:{title:"1.20.10.20",permalink:"/en/docs/official_changelog/preview/1.20/10/20"}},p={},g=[],m={toc:g},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1201021"},"Minecraft Beta & Preview - 1.20.10.21"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);