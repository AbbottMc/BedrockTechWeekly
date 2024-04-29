"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80624,43853,13178,29933,21618,39867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),s=r(16550),l=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==s&&(p(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":s===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(_,(0,n.Z)({key:String(t)},e))}},35632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(87277),i=r(4765),s=(r(48608),r(34480),r(47153));const l={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/60/25/tech",id:"changelog_source/preview/1.20/60/25/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/60/25/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech",permalink:"/docs/changelog_source/preview/1.20/60/25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Dimension API</strong>",id:"dimension-api",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],m={toc:d};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(s.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"blocks"},(0,a.kt)("strong",{parentName:"h2"},"Blocks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added the ability for data-driven blocks to remove faces in the geometry when abutting a full and opaque block. A new field has been added to the Block Geometry Component, which references a new Culling .json file (found in the resource pack block","_","culling directory) that sets up culling rules for the tessellated geometry\xa0")),(0,a.kt)("h2",{id:"dimension-api"},(0,a.kt)("strong",{parentName:"h2"},"Dimension API")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"setWeather"),"\xa0method argument duration now uses\xa0",(0,a.kt)("em",{parentName:"li"},"ArgumentOutOfBoundsError"),"\xa0Error type")),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("strong",{parentName:"h2"},"Editor")),(0,a.kt)("p",null,"The Editor and its\xa0",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/EditorAPI"},"corresponding API"),"\xa0are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,a.kt)("strong",{parentName:"p"},"#BedrockEditor"),"."),(0,a.kt)("p",null,"Learn\xa0",(0,a.kt)("a",{parentName:"p",href:"https://www.aka.ms/LearnEditor"},"how to use"),"\xa0the Editor, join the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion forum"),"\xa0to engage with the team, and get started building extensions via the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit"),"\xa0and\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.kt)("p",null,"Update this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where submenu items were incorrectly added to the root level upon refreshing the editor screen")),(0,a.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.kt)("h2",{id:"script-api-1"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(s.default,{techSapi:(0,a.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Healthbar of mounted rideable mobs is now properly displayed (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177696"},"MCPE-177696"),")"),(0,a.kt)("li",{parentName:"ul"},"Execute command now fails when comparing unloaded blocks (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177195"},"MCPE-177195"),")"),(0,a.kt)("li",{parentName:"ul"},"Hud command now works as expected \u2013 the /hud command allows creators to show/hide each element individually as well as show/hide all. Hiding one element no longer hides 'all' elements.")),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue causing caves to appear illuminated by the sun (aka \u201cLight Leaking\u201d) in the Deferred Technical Preview"),(0,a.kt)("li",{parentName:"ul"},"Volumetric fog is no longer affected by sunlight in enclosed spaces in the Deferred Technical Preview")))}h.isMDXComponent=!0},4765:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_exp",id:"changelog_source/preview/1.20/60/25/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PropertyOutOfBoundsError",source:"@site/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"PropertyOutOfBoundsError"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added a new\xa0",(0,a.kt)("em",{parentName:"li"},"PropertyOutOfBoundsError"),"\xa0that throws when a property that is bounded is set out of bounds"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ContainerSlot"),"\xa0APIs now throw an\xa0",(0,a.kt)("em",{parentName:"li"},"InvalidContainerSlotError"),"\xa0if the container slot is invalid, or if a property is set on an empty slot"),(0,a.kt)("li",{parentName:"ul"},"Property\xa0",(0,a.kt)("em",{parentName:"li"},"typeId"),"\xa0no longer returns undefined for empty slots, but instead throws an\xa0",(0,a.kt)("em",{parentName:"li"},"InvalidContainerSlotError")),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"hasItem"),"\xa0","-"," Returns whether the slot contains an item"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getCanPlaceOn"),"\xa0","-"," Returns an array of block identifiers that the item can be placed on"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getCanDestroy"),"\xa0","-"," Returns an array of block identifiers that the item can destroy when used")))}p.isMDXComponent=!0},34480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},87277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_stable",id:"changelog_source/preview/1.20/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:'-   Changed "Unsupported or out of bounds value.." errors to use\xa0ArgumentOutOfBoundsError\xa0Error type',source:"@site/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Changed "Unsupported or out of bounds value.." errors to use\xa0',(0,a.kt)("em",{parentName:"li"},"ArgumentOutOfBoundsError"),"\xa0Error type")))}p.isMDXComponent=!0},48608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(87462),a=r(67294),o=r(3905),i=r(74866),s=r(85162);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(s.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(a.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);