"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78068,81791,9600,11970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:r,className:c}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,c),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),o=r(86010),c=r(12466),l=r(16550),i=r(91980),s=r(67392),u=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[c,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,s]=h({queryString:r,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=r(72389);const v="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),n=s[r].value;n!==l&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:c}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},c,{className:(0,o.Z)("tabs__item",b,c?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},36073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(49935),c=r(40592),l=r(9071);const i={},s=void 0,u={unversionedId:"changelog_source/preview/1.19.70.24-25/tech",id:"changelog_source/preview/1.19.70.24-25/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech.mdx",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[{value:"<strong>Script API</strong>",id:"script-api",level:2}],m={toc:p};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(l.default,{techSapi:(0,a.kt)(c.default,{mdxType:"TechSapi"}),techSapiDiff:(0,a.kt)(o.default,{mdxType:"TechSapiChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0},40592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,l={unversionedId:"changelog_source/preview/1.19.70.24-25/tech_sapi",id:"changelog_source/preview/1.19.70.24-25/tech_sapi",title:"tech_sapi",description:"Removed docs of some internal methods that were accidentally released before that were not actually accessible to the public (just a docs change)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech_sapi.md",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech_sapi",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech_sapi",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech_sapi.md",tags:[],version:"current",frontMatter:{}},i={},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Removed docs of some internal methods that were accidentally released before that were not actually accessible to the public (just a docs change)"))}d.isMDXComponent=!0},49935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,l={unversionedId:"changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",id:"changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",title:"tech_sapi_changelog",description:"Changed module @minecraft/server-gametest@1.0.0-beta",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog.md",sourceDirName:"changelog_source/preview/1.19.70.24-25",slug:"/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",permalink:"/en/docs/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.24-25/tech_sapi_changelog.md",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"Changed module <code>@minecraft/server-gametest@1.0.0-beta</code>",id:"changed-module-minecraftserver-gametest100-beta",level:3},{value:"Changed module <code>@minecraft/server-net@1.0.0-beta</code>",id:"changed-module-minecraftserver-net100-beta",level:3},{value:"Changed module <code>@minecraft/server@1.1.0-beta</code>",id:"changed-module-minecraftserver110-beta",level:3}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"changed-module-minecraftserver-gametest100-beta"},"Changed module ",(0,a.kt)("inlineCode",{parentName:"h3"},"@minecraft/server-gametest@1.0.0-beta")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed class ",(0,a.kt)("inlineCode",{parentName:"li"},"SimulatedPlayer")),(0,a.kt)("li",{parentName:"ul"},"Removed function ",(0,a.kt)("inlineCode",{parentName:"li"},"sendTestSkin"))),(0,a.kt)("h3",{id:"changed-module-minecraftserver-net100-beta"},"Changed module ",(0,a.kt)("inlineCode",{parentName:"h3"},"@minecraft/server-net@1.0.0-beta")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed class ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpClient")),(0,a.kt)("li",{parentName:"ul"},"Removed function ",(0,a.kt)("inlineCode",{parentName:"li"},"testOnly_fulfillRequest")),(0,a.kt)("li",{parentName:"ul"},"Removed function ",(0,a.kt)("inlineCode",{parentName:"li"},"testOnly_getRequests")),(0,a.kt)("li",{parentName:"ul"},"Removed function ",(0,a.kt)("inlineCode",{parentName:"li"},"testOnly_rejectRequest"))),(0,a.kt)("h3",{id:"changed-module-minecraftserver110-beta"},"Changed module ",(0,a.kt)("inlineCode",{parentName:"h3"},"@minecraft/server@1.1.0-beta")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Changed class ",(0,a.kt)("inlineCode",{parentName:"li"},"MinecraftItemTypes")),(0,a.kt)("li",{parentName:"ul"},"Removed constant ",(0,a.kt)("inlineCode",{parentName:"li"},"debugStick"))))}d.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),c=r(85162);const l={},i=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(c.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);