"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72363,29933,30603,78696,24832,22730,52371,64991,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),k=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==i&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},52559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/gameplay",id:"changelog_source/preview/1.20/30/24/gameplay",title:"gameplay",description:"Posted: 23 August 2023",source:"@site/docs/changelog_source/preview/1.20/30/24/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/gameplay",permalink:"/docs/changelog_source/preview/1.20/30/24/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Trade Changes</strong>",id:"experimental-trade-changes",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Education Features</strong>",id:"education-features",level:2},{value:"<strong>User Interface</strong>",id:"user-interface-1",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 23 August 2023"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/18794941329549",alt:"A Minecraft screenshot of a mountain with trees and a cave."})),(0,n.kt)("p",null,"It\u2019s time for a new Minecraft Preview and Beta. Here\u2019s a list of what\u2019s new this week. Please continue to send us your ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"feedback")," and ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bug reports"),", and have fun!"),(0,n.kt)("h2",{id:"experimental-trade-changes"},(0,n.kt)("strong",{parentName:"h2"},"Experimental Trade Changes")),(0,n.kt)("p",null,"Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change!\xa0 We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We still need your feedback to help us improve and decide, so please continue to let us know what you think of the new trades, what you like and dislike, and what suggestions you have at\xa0",(0,n.kt)("a",{parentName:"p",href:"http://aka.ms/VillagerTradingFeedback"},"aka.ms/VillagerTradingFeedback"),"."),(0,n.kt)("h1",{id:"features-and-bug-fixes"},(0,n.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,n.kt)("h2",{id:"user-interface"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed feedback button behavior in the new Play Screen not linking to the feedback page"),(0,n.kt)("li",{parentName:"ul"},'New death screen now has partial support (color, static obfuscation) for "Formatting Codes"\xa0')),(0,n.kt)("h2",{id:"audio"},(0,n.kt)("strong",{parentName:"h2"},"Audio")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Player entities now play the appropriate sounds when entering/exiting water (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132511"},"MCPE-132511"),")\xa0")),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a problem where blocks' rendering was not updating unless the player jumped (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173706"},"MCPE-173706"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Tripwire Hooks no longer have delayed deactivation towards the south and west (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-174011"},"MCPE-174011"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Concrete Powder blocks are now the correct color for worlds imported from previous versions\xa0")),(0,n.kt)("h2",{id:"gameplay"},(0,n.kt)("strong",{parentName:"h2"},"Gameplay")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Camera commands that are sent in the same tick are no longer ignored (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173524"},"MCPE-173524"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Nametags are no longer completely invisible while sneaking with the player still visible (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168789"},"MCPE-168789"),")")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The following mobs will now set their target on fire if the mob is on fire when attacking: Drowned, Husk, Zombie, and Zombified Villager (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,n.kt)("h2",{id:"education-features"},(0,n.kt)("strong",{parentName:"h2"},"Education Features")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dolphins now rise properly when Balloons are attached\xa0"),(0,n.kt)("li",{parentName:"ul"},"Camels and Sniffers can now have Balloons attached")),(0,n.kt)("h2",{id:"user-interface-1"},(0,n.kt)("strong",{parentName:"h2"},"User Interface")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed various pixel scaling issues on the HUD screen"),(0,n.kt)("li",{parentName:"ul"},"The game menu gamepad shortcut on the new death screen now works correctly\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added three new user-friendly disconnection error messages and improved two others")))}u.isMDXComponent=!0},25137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(70444),l=a(1018),i=(a(72806),a(38108),a(47153));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/30/24/tech",id:"changelog_source/preview/1.20/30/24/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/30/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech",permalink:"/docs/changelog_source/preview/1.20/30/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"items"},(0,n.kt)("strong",{parentName:"h2"},"Items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where content errors for items at the latest format version would appear for other items\xa0")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Exposed new data parameter "can',"_","spread","_","on","_",'fire" for the "minecraft:behavior.melee',"_",'attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire (',(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview")))}h.isMDXComponent=!0},1018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   World Events",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"World Events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockBreakAfterEvent")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"readonly itemStackAfterBreak?: ItemStack")," (undefined if empty hand)"),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"readonly itemStackBeforeBreak?: ItemStack")," (undefined if empty hand)"))),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockBreakAfterEventSignal")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"itemStack?: ItemStack"),", the item stack in use by the player (undefined if empty hand)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly player: Player"),", the player breaking the block"))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockPlaceAfterEvent")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockPlaceAfterEventSignal")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly face: Direction"),", the face the block is being placed on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly faceLocation: Vector3"),", the location on the face the block was placed on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"itemStack: ItemStack"),", the item stack being used to place the block"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly player: Player"),", the player placing the block"))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEventSignal")),(0,n.kt)("li",{parentName:"ul"},"Modified ",(0,n.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"blockBreak")," to ",(0,n.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"blockPlace")," to ",(0,n.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.kt)("li",{parentName:"ul"},"Modified ",(0,n.kt)("em",{parentName:"li"},"WorldBeforeEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"BlockEventOptions")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"blockTypes?: string","[","]"),", names of blocks to be filtered against"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"permutations?: BlockPermutation","[","]"),", specific block permutations to be filtered against"))),(0,n.kt)("li",{parentName:"ul"},"Added class ",(0,n.kt)("em",{parentName:"li"},"EntityLoadAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New field ",(0,n.kt)("em",{parentName:"li"},"entity: Entity")),(0,n.kt)("li",{parentName:"ul"},"Added class ",(0,n.kt)("em",{parentName:"li"},"EntityLoadAfterEventSignal")))),(0,n.kt)("li",{parentName:"ul"},"Class ",(0,n.kt)("em",{parentName:"li"},"EntitySpawnAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property ",(0,n.kt)("em",{parentName:"li"},"readonly cause: EntityInitializationCause"),"_"))),(0,n.kt)("li",{parentName:"ul"},"Class ",(0,n.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property ",(0,n.kt)("em",{parentName:"li"},"readonly entityLoad: EntityLoadAfterEventSignal")))),(0,n.kt)("li",{parentName:"ul"},"Added enum ",(0,n.kt)("em",{parentName:"li"},"EntityInitializationCause"))))))}u.isMDXComponent=!0},38108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},70444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed scoreboardIdentity to be valid even after the entity has been killed",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed ",(0,n.kt)("em",{parentName:"li"},"scoreboardIdentity")," to be valid even after the entity has been killed")))}u.isMDXComponent=!0},72806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},7450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(52559),i=a(25137);const s={sidebar_position:99999753,title:"1.20.30.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.30.24",p={unversionedId:"official_changelog/preview/1.20/30/24",id:"official_changelog/preview/1.20/30/24",title:"1.20.30.24",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/30/24.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/24",permalink:"/docs/official_changelog/preview/1.20/30/24",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/24.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999753,frontMatter:{sidebar_position:99999753,title:"1.20.30.24",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.25",permalink:"/docs/official_changelog/preview/1.20/30/25"},next:{title:"1.20.30.22",permalink:"/docs/official_changelog/preview/1.20/30/22"}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1203024"},"Minecraft Beta & Preview - 1.20.30.24"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);