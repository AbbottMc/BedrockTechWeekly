"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11122,31164,49837,43115,42057,53281,99474,85114,51163],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),o=a(20053),l=a(23104),i=a(56347),s=a(57485),c=a(31682),p=a(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:a,groupId:n}),[g,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=s??g;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:p}=e;const g=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),m=e=>{const t=e.currentTarget,a=g.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=g.indexOf(e.currentTarget)+1;t=g[a]??g[0];break}case"ArrowLeft":{const a=g.indexOf(e.currentTarget)-1;t=g[a]??g[g.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>g.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function N(e){const t=(0,y.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},51513:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/gameplay",id:"changelog_source/preview/1.20/30/24/gameplay",title:"gameplay",description:"Posted: 23 August 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/30/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Trade Changes</strong>",id:"experimental-trade-changes",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Education Features</strong>",id:"education-features",level:2},{value:"<strong>User Interface</strong>",id:"user-interface-1",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 23 August 2023"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.yg)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/18794941329549",alt:"A Minecraft screenshot of a mountain with trees and a cave."})),(0,r.yg)("p",null,"It\u2019s time for a new Minecraft Preview and Beta. Here\u2019s a list of what\u2019s new this week. Please continue to send us your ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and have fun!"),(0,r.yg)("h2",{id:"experimental-trade-changes"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Trade Changes")),(0,r.yg)("p",null,"Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change!\xa0 We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at\xa0",(0,r.yg)("a",{parentName:"p",href:"http://aka.ms/VillagerTradingFeedback"},"aka.ms/VillagerTradingFeedback"),"."),(0,r.yg)("h1",{id:"features-and-bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed feedback button behavior in the new Play Screen not linking to the feedback page"),(0,r.yg)("li",{parentName:"ul"},'New death screen now has partial support (color, static obfuscation) for "Formatting Codes"\xa0')),(0,r.yg)("h2",{id:"audio"},(0,r.yg)("strong",{parentName:"h2"},"Audio")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Player entities now play the appropriate sounds when entering/exiting water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132511"},"MCPE-132511"),")\xa0")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a problem where blocks' rendering was not updating unless the player jumped (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173706"},"MCPE-173706"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Tripwire Hooks no longer have delayed deactivation towards the south and west (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174011"},"MCPE-174011"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Concrete Powder blocks are now the correct color for worlds imported from previous versions\xa0")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Camera commands that are sent in the same tick are no longer ignored (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173524"},"MCPE-173524"),")\xa0"),(0,r.yg)("li",{parentName:"ul"},"Nametags are no longer completely invisible while sneaking with the player still visible (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168789"},"MCPE-168789"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The following mobs will now set their target on fire if the mob is on fire when attacking: Drowned, Husk, Zombie, and Zombified Villager (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,r.yg)("h2",{id:"education-features"},(0,r.yg)("strong",{parentName:"h2"},"Education Features")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Dolphins now rise properly when Balloons are attached\xa0"),(0,r.yg)("li",{parentName:"ul"},"Camels and Sniffers can now have Balloons attached")),(0,r.yg)("h2",{id:"user-interface-1"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed various pixel scaling issues on the HUD screen"),(0,r.yg)("li",{parentName:"ul"},"The game menu gamepad shortcut on the new death screen now works correctly\xa0"),(0,r.yg)("li",{parentName:"ul"},"Added three new user-friendly disconnection error messages and improved two others")))}u.isMDXComponent=!0},3301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),o=a(8919),l=a(62509),i=(a(5133),a(67299),a(88502));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/30/24/tech",id:"changelog_source/preview/1.20/30/24/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech.mdx",tags:[],version:"current",frontMatter:{}},g={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],m={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where content errors for items at the latest format version would appear for other items\xa0")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Exposed new data parameter "can',"_","spread","_","on","_",'fire" for the "minecraft:behavior.melee',"_",'attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,r.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.yg)("h2",{id:"script-api-1"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"graphical"},(0,r.yg)("strong",{parentName:"h2"},"Graphical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview"),(0,r.yg)("li",{parentName:"ul"},"Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview"),(0,r.yg)("li",{parentName:"ul"},"Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview")))}h.isMDXComponent=!0},62509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   World Events",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"World Events",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"BlockBreakAfterEvent")," to ",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"readonly itemStackAfterBreak?: ItemStack")," (undefined if empty hand)"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"readonly itemStackBeforeBreak?: ItemStack")," (undefined if empty hand)"))),(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"BlockBreakAfterEventSignal")," to ",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"subscribe")," function now takes ",(0,r.yg)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent")," with the following members",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"itemStack?: ItemStack"),", the item stack in use by the player (undefined if empty hand)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"readonly player: Player"),", the player breaking the block"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal")),(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"BlockPlaceAfterEvent")," to ",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent")),(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"BlockPlaceAfterEventSignal")," to ",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"subscribe")," function now takes ",(0,r.yg)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")," with the following members",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"readonly face: Direction"),", the face the block is being placed on"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"readonly faceLocation: Vector3"),", the location on the face the block was placed on"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"itemStack: ItemStack"),", the item stack being used to place the block"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"readonly player: Player"),", the player placing the block"))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEventSignal")),(0,r.yg)("li",{parentName:"ul"},"Modified ",(0,r.yg)("em",{parentName:"li"},"WorldAfterEvents"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"blockBreak")," to ",(0,r.yg)("em",{parentName:"li"},"playerBreakBlock")),(0,r.yg)("li",{parentName:"ul"},"Renamed ",(0,r.yg)("em",{parentName:"li"},"blockPlace")," to ",(0,r.yg)("em",{parentName:"li"},"playerPlaceBlock")))),(0,r.yg)("li",{parentName:"ul"},"Modified ",(0,r.yg)("em",{parentName:"li"},"WorldBeforeEvents"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"playerBreakBlock")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"playerPlaceBlock")))),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"BlockEventOptions")," with the following members",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"blockTypes?: string","[","]"),", names of blocks to be filtered against"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"permutations?: BlockPermutation","[","]"),", specific block permutations to be filtered against"))),(0,r.yg)("li",{parentName:"ul"},"Added class ",(0,r.yg)("em",{parentName:"li"},"EntityLoadAfterEvent"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"New field ",(0,r.yg)("em",{parentName:"li"},"entity: Entity")),(0,r.yg)("li",{parentName:"ul"},"Added class ",(0,r.yg)("em",{parentName:"li"},"EntityLoadAfterEventSignal")))),(0,r.yg)("li",{parentName:"ul"},"Class ",(0,r.yg)("em",{parentName:"li"},"EntitySpawnAfterEvent"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"readonly cause: EntityInitializationCause"),"_"))),(0,r.yg)("li",{parentName:"ul"},"Class ",(0,r.yg)("em",{parentName:"li"},"WorldAfterEvents"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added property ",(0,r.yg)("em",{parentName:"li"},"readonly entityLoad: EntityLoadAfterEventSignal")))),(0,r.yg)("li",{parentName:"ul"},"Added enum ",(0,r.yg)("em",{parentName:"li"},"EntityInitializationCause"))))))}u.isMDXComponent=!0},67299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},8919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed scoreboardIdentity to be valid even after the entity has been killed",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Changed ",(0,r.yg)("em",{parentName:"li"},"scoreboardIdentity")," to be valid even after the entity has been killed")))}u.isMDXComponent=!0},5133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},34922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},g=[],u={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,r.yg)("div",null,(0,r.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.yg)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var n=a(58168),r=(a(96540),a(15680)),o=a(18228),l=a(19365);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},g=[],u={toc:g},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},52386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(58168),r=(a(96540),a(15680)),o=a(34922),l=a(51513),i=a(3301);const s={sidebar_position:99999753,title:"1.20.30.24",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.30.24",p={unversionedId:"official_changelog/preview/1.20/30/24",id:"official_changelog/preview/1.20/30/24",title:"1.20.30.24",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/30/24.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/24",permalink:"/en/docs/official_changelog/preview/1.20/30/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/24.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999753,frontMatter:{sidebar_position:99999753,title:"1.20.30.24",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.25",permalink:"/en/docs/official_changelog/preview/1.20/30/25"},next:{title:"1.20.30.22",permalink:"/en/docs/official_changelog/preview/1.20/30/22"}},g={},u=[],m={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"minecraft-beta--preview---1203024"},"Minecraft Beta & Preview - 1.20.30.24"),(0,r.yg)(o.default,{gameplayChangelog:(0,r.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.yg)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);