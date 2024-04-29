"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52371,29933,30603,78696,24832,64991],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),c=a(91980),s=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,s]=h({queryString:a,groupId:r}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=c??u;return d({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var f=a(72389);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=s[a].value;r!==i&&(u(t),c(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=k(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",g)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},25137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(70444),o=a(1018),i=(a(72806),a(38108),a(47153));const c={},s=void 0,p={unversionedId:"changelog_source/preview/1.20/30/24/tech",id:"changelog_source/preview/1.20/30/24/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/30/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech",permalink:"/docs/changelog_source/preview/1.20/30/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"items"},(0,n.kt)("strong",{parentName:"h2"},"Items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where content errors for items at the latest format version would appear for other items\xa0")),(0,n.kt)("h2",{id:"mobs"},(0,n.kt)("strong",{parentName:"h2"},"Mobs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Exposed new data parameter "can',"_","spread","_","on","_",'fire" for the "minecraft:behavior.melee',"_",'attack" component to specify if the mob should set its target on fire when attacking if the attacking mob is on fire (',(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-77746"},"MCPE-77746"),")\xa0")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disabling Beautiful Skies or Smooth Lighting no longer affects visuals while using Deferred or Ray Tracing in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Moved Smooth Lighting and Beautiful Skies buttons to only appear in the Simple and Fancy graphics menus in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Bloom option removed from Simple, Fancy, and Ray Tracing menus in the Deferred Technical Preview")))}h.isMDXComponent=!0},1018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   World Events",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"World Events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockBreakAfterEvent")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"readonly itemStackAfterBreak?: ItemStack")," (undefined if empty hand)"),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"readonly itemStackBeforeBreak?: ItemStack")," (undefined if empty hand)"))),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockBreakAfterEventSignal")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"itemStack?: ItemStack"),", the item stack in use by the player (undefined if empty hand)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly player: Player"),", the player breaking the block"))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockPlaceAfterEvent")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"BlockPlaceAfterEventSignal")," to ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"subscribe")," function now takes ",(0,n.kt)("em",{parentName:"li"},"options?: BlockEventOptions")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"cancel: boolean"),", cancels event from happening"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly face: Direction"),", the face the block is being placed on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly faceLocation: Vector3"),", the location on the face the block was placed on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"itemStack: ItemStack"),", the item stack being used to place the block"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"readonly player: Player"),", the player placing the block"))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"PlayerPlaceBlockBeforeEventSignal")),(0,n.kt)("li",{parentName:"ul"},"Modified ",(0,n.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"blockBreak")," to ",(0,n.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"blockPlace")," to ",(0,n.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.kt)("li",{parentName:"ul"},"Modified ",(0,n.kt)("em",{parentName:"li"},"WorldBeforeEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"playerBreakBlock")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"playerPlaceBlock")))),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"BlockEventOptions")," with the following members",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"blockTypes?: string","[","]"),", names of blocks to be filtered against"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"permutations?: BlockPermutation","[","]"),", specific block permutations to be filtered against"))),(0,n.kt)("li",{parentName:"ul"},"Added class ",(0,n.kt)("em",{parentName:"li"},"EntityLoadAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New field ",(0,n.kt)("em",{parentName:"li"},"entity: Entity")),(0,n.kt)("li",{parentName:"ul"},"Added class ",(0,n.kt)("em",{parentName:"li"},"EntityLoadAfterEventSignal")))),(0,n.kt)("li",{parentName:"ul"},"Class ",(0,n.kt)("em",{parentName:"li"},"EntitySpawnAfterEvent"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property ",(0,n.kt)("em",{parentName:"li"},"readonly cause: EntityInitializationCause"),"_"))),(0,n.kt)("li",{parentName:"ul"},"Class ",(0,n.kt)("em",{parentName:"li"},"WorldAfterEvents"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property ",(0,n.kt)("em",{parentName:"li"},"readonly entityLoad: EntityLoadAfterEventSignal")))),(0,n.kt)("li",{parentName:"ul"},"Added enum ",(0,n.kt)("em",{parentName:"li"},"EntityInitializationCause"))))))}u.isMDXComponent=!0},38108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},70444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed scoreboardIdentity to be valid even after the entity has been killed",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed ",(0,n.kt)("em",{parentName:"li"},"scoreboardIdentity")," to be valid even after the entity has been killed")))}u.isMDXComponent=!0},72806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/30/24",slug:"/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905),o=a(74866),i=a(85162);const c={},s=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);