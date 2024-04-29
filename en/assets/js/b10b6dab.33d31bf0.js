"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86234,81791,15600,54526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),l=r(16550),c=r(91980),s=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=r(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:l,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=s[r].value;n!==l&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(_,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},17917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(67697),i=(r(5299),r(9071));const l={},c=void 0,s={unversionedId:"changelog_source/preview/1.20/0/21/tech",id:"changelog_source/preview/1.20/0/21/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Entities</strong>",id:"entities",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Recipes</strong>",id:"recipes",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("strong",{parentName:"h2"},"Editor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed bug where Editor could be accessed during a regular gameplay session")),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fix "get',"_","equipped","_","item","_",'name" Molang query not being able to return the old name of some flattened items, eg. red',"_","wool to wool")),(0,a.kt)("h2",{id:"entities"},(0,a.kt)("strong",{parentName:"h2"},"Entities")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Introduced new entity filters "all',"_","slots","_",'empty" and "any',"_","slot","_",'empty" to allow searching for empty item slots in a designated equipment location (',(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153909"},"MCPE-153909"),")")),(0,a.kt)("h2",{id:"graphical"},(0,a.kt)("strong",{parentName:"h2"},"Graphical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a crash when enabling ray tracing in ray tracing compatible content that was loaded into with ray tracing turned off (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168894"},"MCPE-168894"),")")),(0,a.kt)("h2",{id:"items"},(0,a.kt)("strong",{parentName:"h2"},"Items")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom items with 'minecraft:durability' and 'minecraft:repairable' can be combined to repair them without requiring a custom item entry")),(0,a.kt)("h2",{id:"recipes"},(0,a.kt)("strong",{parentName:"h2"},"Recipes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed incorrect content warnings for recipes that use the same blocks but with different data (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168717"},"MCPE-168717"),")")),(0,a.kt)("h2",{id:"components"},(0,a.kt)("strong",{parentName:"h2"},"Components")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Attribute "speed',"_",'multiplier" in the "minecraft:boostable" component is now being parsed correctly from json file. Old behavior is maintained for "format',"_",'version" lower than 1.20 with 1.35 value rather than what the json file specifies (',(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164424"},"MCPE-164424"),")")),(0,a.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.kt)("h2",{id:"add-ons"},(0,a.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Added "minecraft:facing',"_",'direction" state to the "minecraft:placement',"_",'direction" block trait.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"minecraft:facing',"_",'direction" is a six value integer state (down, up, south, west, north, east)'),(0,a.kt)("li",{parentName:"ul"},'Can enable and access this state on blocks through the "minecraft:placement',"_",'direction" trait'),(0,a.kt)("li",{parentName:"ul"},'Can access the "minecraft:cardinal',"_",'direction" state on blocks that apply the "minecraft:placement',"_",'direction" trait in block',"_","property Molang queries and set","_","block","_","property EventResponses"))),(0,a.kt)("li",{parentName:"ul"},'Pumpkin blocks use state "minecraft:cardinal',"_",'direction" instead of "direction"')),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(i.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0},67697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where modified equipment and container slots were not being synced to clients",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where modified equipment and container slots were not being synced to clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"@minecraft/server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,a.kt)("em",{parentName:"li"},"BlockProperties_to\xa0_BlockStates")),(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,a.kt)("em",{parentName:"li"},"getAllProperties_to\xa0_BlockPermutation.getAllStates")),(0,a.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,a.kt)("em",{parentName:"li"},"getProperty_to\xa0_BlockPermutation.getState"))))))}p.isMDXComponent=!0},5299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/0/21",slug:"/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),i=r(85162);const l={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);