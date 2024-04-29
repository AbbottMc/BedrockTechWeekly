"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[93418,81791,62957,26910,30589,78403],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function N(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(_,(0,a.Z)({key:String(t)},e))}},96326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),o=r(46666),i=r(1735),l=(r(27586),r(41868),r(9071));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/80/21/tech",id:"changelog_source/preview/1.20/80/21/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/21",slug:"/changelog_source/preview/1.20/80/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/80/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/21/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],d={toc:m};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"editor"},(0,n.kt)("strong",{parentName:"h2"},"Editor")),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," forum to engage with the team, and get started building extensions via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,n.kt)("p",null,"Fixes this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a \u201cReload\u201d button that allows for reloading of the UI when an Ore UI error occurs"),(0,n.kt)("li",{parentName:"ul"},"Line tool bar icon updated to correct design icon  ")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reduced the strength of saturation in the Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when Point Light Shadows were turned on in the Deferred Technical Preview")),(0,n.kt)("h2",{id:"commands"},(0,n.kt)("strong",{parentName:"h2"},"Commands")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added item text, status effects, and absorption hearts to the hud command\u2019s list of hud elements (Ex: /hud @s hide item","_","text)")),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},1735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/21/tech_sapi_exp",id:"changelog_source/preview/1.20/80/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityQueryOptions",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/21",slug:"/changelog_source/preview/1.20/80/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/80/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EntityQueryOptions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added field ",(0,n.kt)("em",{parentName:"li"},"propertyOptions?: EntityQueryPropertyOptions","[","]",";")))),(0,n.kt)("li",{parentName:"ul"},"EntityQueryPropertyOptions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added field ",(0,n.kt)("em",{parentName:"li"},"exclude")," - If exclude ",(0,n.kt)("em",{parentName:"li"},"propertyId")),(0,n.kt)("li",{parentName:"ul"},"Added field ",(0,n.kt)("em",{parentName:"li"},"propertyId")," - Property ID"),(0,n.kt)("li",{parentName:"ul"},"Added field ",(0,n.kt)("em",{parentName:"li"},"value")," - Target value or comparison"))),(0,n.kt)("li",{parentName:"ul"},"EqualsComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"equals")))),(0,n.kt)("li",{parentName:"ul"},"GreaterThanComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"greaterThan")))),(0,n.kt)("li",{parentName:"ul"},"GreaterThanOrEqualsComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"greaterThanOrEquals")))),(0,n.kt)("li",{parentName:"ul"},"LessThanComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"lessThan")))),(0,n.kt)("li",{parentName:"ul"},"LessThanOrEqualsComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"lessThanOrEquals")))),(0,n.kt)("li",{parentName:"ul"},"NotEqualsComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"notEquals")))),(0,n.kt)("li",{parentName:"ul"},"RangeComparison",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"lowerBound")," and ",(0,n.kt)("em",{parentName:"li"},"upperBound")),(0,n.kt)("li",{parentName:"ul"},"Moved ",(0,n.kt)("em",{parentName:"li"},"worldInitialize")," from ",(0,n.kt)("em",{parentName:"li"},"beta")," to ",(0,n.kt)("em",{parentName:"li"},"1.10.0")))),(0,n.kt)("li",{parentName:"ul"},"Moved ",(0,n.kt)("em",{parentName:"li"},"EntityProjectileComponent")," from ",(0,n.kt)("em",{parentName:"li"},"beta")," to ",(0,n.kt)("em",{parentName:"li"},"1.10.0")),(0,n.kt)("li",{parentName:"ul"},"Removed old Vector Please use ",(0,n.kt)("em",{parentName:"li"},"Vector3Utils")," ",(0,n.kt)("em",{parentName:"li"},"from")," ",(0,n.kt)("em",{parentName:"li"},"@minecraft/math")," as a replacement"),(0,n.kt)("li",{parentName:"ul"},"ModalFormData",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"submitButton")," method for setting the text of the form\u2019s submit button"))),(0,n.kt)("li",{parentName:"ul"},"Structure APIs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function ",(0,n.kt)("em",{parentName:"li"},"setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void")," - Sets the block permutation at a given location within the structure"))),(0,n.kt)("li",{parentName:"ul"},"StructureManager\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function ",(0,n.kt)("em",{parentName:"li"},"saveToWorld(): void")," - Persists the structure as part of the broader world storage"),(0,n.kt)("li",{parentName:"ul"},"Added function ",(0,n.kt)("em",{parentName:"li"},"saveAs(identifier: string, saveMode?: StructureSaveMode): Structure")," - Saves a copy of the structure with a new identifier"))),(0,n.kt)("li",{parentName:"ul"},"EntityHitBlockAfterEvent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property ",(0,n.kt)("em",{parentName:"li"},"hitBlockPermutation")," to ",(0,n.kt)("em",{parentName:"li"},"beta"))))))}p.isMDXComponent=!0},41868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/80/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/80/21",slug:"/changelog_source/preview/1.20/80/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},46666:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/21/tech_sapi_stable",id:"changelog_source/preview/1.20/80/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Block Custom Components are temporarily removed as of 1.20.80.21 preview, but should be returning in an upcoming preview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/21",slug:"/changelog_source/preview/1.20/80/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/80/21/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block Custom Components are temporarily removed as of 1.20.80.21 preview, but should be returning in an upcoming preview"),(0,n.kt)("li",{parentName:"ul"},'Dynamic imports (e.g., import("/my-module.js")) should be functional again'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"BlockTypes")," will now return valid types for flattened or refactored block names"),(0,n.kt)("li",{parentName:"ul"},"EntityMountTamingComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"EntityMountTamingComponent")," to ",(0,n.kt)("em",{parentName:"li"},"EntityTameMountComponent")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"setTamed")," to ",(0,n.kt)("em",{parentName:"li"},"tame")))),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"BlockComponentTypes")," from ",(0,n.kt)("em",{parentName:"li"},"beta")," to ",(0,n.kt)("em",{parentName:"li"},"1.10.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"EntityComponentTypes")," from ",(0,n.kt)("em",{parentName:"li"},"beta")," to ",(0,n.kt)("em",{parentName:"li"},"1.10.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"ItemComponentTypes")," from ",(0,n.kt)("em",{parentName:"li"},"beta")," to ",(0,n.kt)("em",{parentName:"li"},"1.10.0"))))}p.isMDXComponent=!0},27586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/21/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/80/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/80/21",slug:"/changelog_source/preview/1.20/80/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/21/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),i=r(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}d.isMDXComponent=!0}}]);