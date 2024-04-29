"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[49120,29933,80567,41189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==i&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},52929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(33473),l=(r(26322),r(47153));const i={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/80/22/tech",id:"changelog_source/preview/1.19/80/22/tech",title:"tech",description:"Editor",source:"@site/docs/changelog_source/preview/1.19/80/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech",permalink:"/docs/changelog_source/preview/1.19/80/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"editor"},(0,n.kt)("strong",{parentName:"h2"},"Editor")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issues with UI not scaling properly when the resolution or game window size is updated."),(0,n.kt)("li",{parentName:"ul"},"Item drops have been disabled in Editor. This allows for Undo/Redo and Cut/Copy/Paste to work properly.\xa0 Items will no longer be left floating in the world."),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where Tool mode would use the 3rd person camera if it was the active camera. when switching from Crosshair mode. The 1st person camera is always used in Tool mode."),(0,n.kt)("li",{parentName:"ul"},"Fixed issues where camera control was disabled when using a Nether or End Portal in Crosshair mode."),(0,n.kt)("li",{parentName:"ul"},"Removed the old stonecutter and Nether reactor core from the block picker.")),(0,n.kt)("h2",{id:"graphical"},(0,n.kt)("strong",{parentName:"h2"},"Graphical")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Changed the debug HUD text available in Preview & Beta builds to append "RTX" to the renderer information only when RTX content is being played instead of when the GPU is capable of running RTX content. As a consequence, the DXR-capable D3D12 backend will now report itself as "D3D12+"')),(0,n.kt)("h1",{id:"technical-experimental-features"},(0,n.kt)("strong",{parentName:"h1"},"Technical Experimental Features")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"gametest-framework"},(0,n.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added two new commands:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/gametest stopall used to manually stop all tests while they are running"),(0,n.kt)("li",{parentName:"ul"},"/gametest runsetuntilfail used to run a set of tests but will automatically stop if any of the tests fail")))))}d.isMDXComponent=!0},33473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/80/22/tech_sapi_stable",id:"changelog_source/preview/1.19/80/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Signs",source:"@site/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Signs",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where text set on Signs using\xa0",(0,n.kt)("em",{parentName:"li"},"setText")," wasn't reflected on Signs on the client until the Sign was reloaded"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getComponent('minecraft:sign')")," now works with Hanging Signs")))),(0,n.kt)("p",null,"The following APIs have been moved from beta to stable @minecraft/server (1.1.0):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"dimension")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"typeId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getVelocity()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"location")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getHeadLocation()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"nameTag")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"id")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getViewDirection()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getEntities")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getEntitiesAtBlockLocation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getPlayers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"EntityQueryOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"EntityQueryScoreOptions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"GameType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"getPlayers"))))}p.isMDXComponent=!0},26322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/80/22",slug:"/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=r(87462),n=r(67294),o=r(3905),l=r(74866),i=r(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(n.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);