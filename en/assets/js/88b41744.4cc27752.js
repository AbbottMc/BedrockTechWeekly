"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53281,49837,43115,99474,85114,51163],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,d=p["".concat(c,".").concat(g)]||p[g]||m[g]||l;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(96540),n=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>_});var r=a(58168),n=a(96540),l=a(20053),o=a(23104),i=a(56347),c=a(57485),s=a(31682),u=a(89466);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,s]=d({queryString:a,groupId:r}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=c??p;return g({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var h=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),g=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==i&&(m(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:g},o,{className:(0,l.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function b(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},n.createElement(v,(0,r.A)({},e,t)),n.createElement(b,(0,r.A)({},e,t)))}function _(e){const t=(0,h.A)();return n.createElement(N,(0,r.A)({key:String(t)},e))}},3301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=a(58168),n=(a(96540),a(15680)),l=a(8919),o=a(62509),i=(a(5133),a(67299),a(88502));const c={},s=void 0,u={unversionedId:"changelog_source/preview/1.20/30/24/tech",id:"changelog_source/preview/1.20/30/24/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],g={toc:m},d="wrapper";function y(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"script-api"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(i.default,{techSapi:(0,n.yg)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"items"},(0,n.yg)("strong",{parentName:"h2"},"Items")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed an issue where content errors for items at the latest format version would appear for other items\xa0")),(0,n.yg)("h2",{id:"mobs"},(0,n.yg)("strong",{parentName:"h2"},"Mobs")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Exposed new data parameter "can',"_","spread","_","on","_",'fire" for the "minecraft:behavior.melee',"_",'attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire (',(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,n.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.yg)("h2",{id:"script-api-1"},(0,n.yg)("strong",{parentName:"h2"},"Script API")),(0,n.yg)(i.default,{techSapi:(0,n.yg)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.yg)("h2",{id:"graphical"},(0,n.yg)("strong",{parentName:"h2"},"Graphical")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview"),(0,n.yg)("li",{parentName:"ul"},"Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview"),(0,n.yg)("li",{parentName:"ul"},"Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview")))}y.isMDXComponent=!0},62509:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   World Events",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"World Events",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"BlockBreakAfterEvent")," to ",(0,n.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"readonly itemStackAfterBreak?: ItemStack")," (undefined if empty hand)"),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"readonly itemStackBeforeBreak?: ItemStack")," (undefined if empty hand)"))),(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"BlockBreakAfterEventSignal")," to ",(0,n.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.yg)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent")," with the following members",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"itemStack?: ItemStack"),", the item stack in use by the player (undefined if empty hand)"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"readonly player: Player"),", the player breaking the block"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal")),(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"BlockPlaceAfterEvent")," to ",(0,n.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent")),(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"BlockPlaceAfterEventSignal")," to ",(0,n.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.yg)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")," with the following members",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"readonly face: Direction"),", the face the block is being placed on"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"readonly faceLocation: Vector3"),", the location on the face the block was placed on"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"itemStack: ItemStack"),", the item stack being used to place the block"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"readonly player: Player"),", the player placing the block"))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEventSignal")),(0,n.yg)("li",{parentName:"ul"},"Modified ",(0,n.yg)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"blockBreak")," to ",(0,n.yg)("em",{parentName:"li"},"playerBreakBlock")),(0,n.yg)("li",{parentName:"ul"},"Renamed ",(0,n.yg)("em",{parentName:"li"},"blockPlace")," to ",(0,n.yg)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.yg)("li",{parentName:"ul"},"Modified ",(0,n.yg)("em",{parentName:"li"},"WorldBeforeEvents"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"playerBreakBlock")),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"BlockEventOptions")," with the following members",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"blockTypes?: string","[","]"),", names of blocks to be filtered against"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"permutations?: BlockPermutation","[","]"),", specific block permutations to be filtered against"))),(0,n.yg)("li",{parentName:"ul"},"Added class ",(0,n.yg)("em",{parentName:"li"},"EntityLoadAfterEvent"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"New field ",(0,n.yg)("em",{parentName:"li"},"entity: Entity")),(0,n.yg)("li",{parentName:"ul"},"Added class ",(0,n.yg)("em",{parentName:"li"},"EntityLoadAfterEventSignal")))),(0,n.yg)("li",{parentName:"ul"},"Class ",(0,n.yg)("em",{parentName:"li"},"EntitySpawnAfterEvent"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added property ",(0,n.yg)("em",{parentName:"li"},"readonly cause: EntityInitializationCause"),"_"))),(0,n.yg)("li",{parentName:"ul"},"Class ",(0,n.yg)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Added property ",(0,n.yg)("em",{parentName:"li"},"readonly entityLoad: EntityLoadAfterEventSignal")))),(0,n.yg)("li",{parentName:"ul"},"Added enum ",(0,n.yg)("em",{parentName:"li"},"EntityInitializationCause"))))))}m.isMDXComponent=!0},67299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},8919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed scoreboardIdentity to be valid even after the entity has been killed",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Changed ",(0,n.yg)("em",{parentName:"li"},"scoreboardIdentity")," to be valid even after the entity has been killed")))}m.isMDXComponent=!0},5133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(58168),n=(a(96540),a(15680));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},88502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(96540),a(15680)),l=a(18228),o=a(19365);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p},g="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.yg)(o.A,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,n.yg)(o.A,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0}}]);