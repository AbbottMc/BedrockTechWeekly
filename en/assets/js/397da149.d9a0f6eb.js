"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[91068,37368,81791,61327,44398,46983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),c=r(91980),s=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=r(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==l&&(d(t),c(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function _(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(_,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},93256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(92709),i=r(77205),l=(r(3316),r(68548),r(9071));const c={},s=void 0,u={unversionedId:"changelog_source/preview/1.20/60/22/tech",id:"changelog_source/preview/1.20/60/22/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/22",slug:"/changelog_source/preview/1.20/60/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/60/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/22/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Graphical</strong>",id:"graphical-1",level:2},{value:"<strong>Scripting</strong>",id:"scripting",level:2}],m={toc:d};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"blocks"},(0,n.kt)("strong",{parentName:"h2"},"Blocks")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changing the ",(0,n.kt)("em",{parentName:"li"},"brightness","_","gamma")," value for blocks now darkens the block correctly (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167836"},"MCPE-167836"),")")),(0,n.kt)("h2",{id:"components"},(0,n.kt)("strong",{parentName:"h2"},"Components")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Added a "drop',"_","item","_",'slot" field to the "interact" component, which allows to specify an inventory slot to remove and drop items from')),(0,n.kt)("h2",{id:"editor"},(0,n.kt)("strong",{parentName:"h2"},"Editor")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tool\xa0Test World\xa0was moved from toolrail and is now under menu\xa0World Options")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when players placed or destroyed any block and then Save & Quit with Ray Tracing enabled")),(0,n.kt)("h2",{id:"stability-and-performance"},(0,n.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Send "material" for vanilla data-driven blocks in the StartGamePacket blockProperties. "block',"_",'id" is also moved to the "vanilla',"_","block","_",'data" object')),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical-1"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adjusted the falloff of point light sources (e.g., torches, lanterns, etc...) to use a square, Manhattan-based distance metric in the Deferred Technical Preview."),(0,n.kt)("li",{parentName:"ul"},"Tinted ambient light color with point light color for better multi-colored lighting over large distances in the Deferred Technical Preview")),(0,n.kt)("h2",{id:"scripting"},(0,n.kt)("strong",{parentName:"h2"},"Scripting")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issue where\xa0",(0,n.kt)("em",{parentName:"li"},"ActionFormData"),"\xa0buttons could not be clicked if there were more than 255 buttons in the form")))}h.isMDXComponent=!0},77205:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/22/tech_sapi_exp",id:"changelog_source/preview/1.20/60/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added method\xa0eatItem(itemStack void;.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/22",slug:"/changelog_source/preview/1.20/60/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added method\xa0",(0,n.kt)("em",{parentName:"li"},"eatItem(itemStack: ItemStack): void;.")),(0,n.kt)("li",{parentName:"ul"},"BlockSignComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed signature of function\xa0",(0,n.kt)("em",{parentName:"li"},"setWaxed"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"setWaxed(waxed: boolean)")),(0,n.kt)("li",{parentName:"ul"},"Removed event/property\xa0",(0,n.kt)("em",{parentName:"li"},"pistonActivate")))),(0,n.kt)("li",{parentName:"ul"},'Added enum BlockPistonState export enum BlockPistonState { Expanded = "Expanded", Expanding = "Expanding", Retracted = "Retracted", Retracting = "Retracting" }'),(0,n.kt)("li",{parentName:"ul"},"Class BlockPistonComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removed property isExpanded"),(0,n.kt)("li",{parentName:"ul"},"Removed property isExpanding"),(0,n.kt)("li",{parentName:"ul"},"Removed property isRetracted"),(0,n.kt)("li",{parentName:"ul"},"Removed property isRetracting"),(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"readonly state: BlockPistonState")),(0,n.kt)("li",{parentName:"ul"},"Changed function\xa0",(0,n.kt)("em",{parentName:"li"},"getAttachedBlocks"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"return type\xa0Block","[","]")),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getAttachedBlocksLocations(): Vector3","[","]")))),(0,n.kt)("li",{parentName:"ul"},"Removed class ",(0,n.kt)("em",{parentName:"li"},"PistonActivateBeforeEvent")),(0,n.kt)("li",{parentName:"ul"},"Removed class ",(0,n.kt)("em",{parentName:"li"},"PistonActivateBeforeEventSignal")),(0,n.kt)("li",{parentName:"ul"},"Types",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moved\xa0BlockType\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0FluidType\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")))),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"NavigationResult"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server-gametest"))))}p.isMDXComponent=!0},68548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/22",slug:"/changelog_source/preview/1.20/60/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},92709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/22/tech_sapi_stable",id:"changelog_source/preview/1.20/60/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Made the display name parameter optional in Scoreboard addObjective",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/22",slug:"/changelog_source/preview/1.20/60/22/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/60/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Made the display name parameter optional in Scoreboard ",(0,n.kt)("em",{parentName:"li"},"addObjective"))))}p.isMDXComponent=!0},3316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/22",slug:"/changelog_source/preview/1.20/60/22/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(31792),i=r(85162);const l={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);