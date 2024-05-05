"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[12460,5251,92096,43115,53045,687],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(58168),a=r(96540),o=r(20053),i=r(23104),s=r(56347),l=r(57485),c=r(31682),u=r(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=l??p;return g({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),g=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==s&&(d(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},a.createElement(b,(0,n.A)({},e,t)),a.createElement(v,(0,n.A)({},e,t)))}function _(e){const t=(0,f.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},20709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(58168),a=(r(96540),r(15680)),o=r(68503),i=r(84237),s=(r(25549),r(38563),r(88502));const l={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/60/25/tech",id:"changelog_source/preview/1.20/60/25/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/25/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech",permalink:"/en/docs/changelog_source/preview/1.20/60/25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Dimension API</strong>",id:"dimension-api",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2}],g={toc:d},m="wrapper";function h(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"script-api"},(0,a.yg)("strong",{parentName:"h2"},"Script API")),(0,a.yg)(s.default,{techSapi:(0,a.yg)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.yg)("h2",{id:"blocks"},(0,a.yg)("strong",{parentName:"h2"},"Blocks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Added the ability for data-driven blocks to remove faces in the geometry when abutting a full and opaque block. A new field has been added to the Block Geometry Component, which references a new Culling .json file (found in the resource pack block","_","culling directory) that sets up culling rules for the tessellated geometry\xa0")),(0,a.yg)("h2",{id:"dimension-api"},(0,a.yg)("strong",{parentName:"h2"},"Dimension API")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"setWeather"),"\xa0method argument duration now uses\xa0",(0,a.yg)("em",{parentName:"li"},"ArgumentOutOfBoundsError"),"\xa0Error type")),(0,a.yg)("h2",{id:"editor"},(0,a.yg)("strong",{parentName:"h2"},"Editor")),(0,a.yg)("p",null,"The Editor and its\xa0",(0,a.yg)("a",{parentName:"p",href:"https://aka.ms/EditorAPI"},"corresponding API"),"\xa0are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,a.yg)("strong",{parentName:"p"},"#BedrockEditor"),"."),(0,a.yg)("p",null,"Learn\xa0",(0,a.yg)("a",{parentName:"p",href:"https://www.aka.ms/LearnEditor"},"how to use"),"\xa0the Editor, join the\xa0",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion forum"),"\xa0to engage with the team, and get started building extensions via the\xa0",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit"),"\xa0and\xa0",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.yg)("p",null,"Update this week:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a bug where submenu items were incorrectly added to the root level upon refreshing the editor screen")),(0,a.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,a.yg)("h2",{id:"script-api-1"},(0,a.yg)("strong",{parentName:"h2"},"Script API")),(0,a.yg)(s.default,{techSapi:(0,a.yg)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.yg)("h2",{id:"commands"},(0,a.yg)("strong",{parentName:"h2"},"Commands")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Healthbar of mounted rideable mobs is now properly displayed (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177696"},"MCPE-177696"),")"),(0,a.yg)("li",{parentName:"ul"},"Execute command now fails when comparing unloaded blocks (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-177195"},"MCPE-177195"),")"),(0,a.yg)("li",{parentName:"ul"},"Hud command now works as expected \u2013 the /hud command allows creators to show/hide each element individually as well as show/hide all. Hiding one element no longer hides 'all' elements.")),(0,a.yg)("h2",{id:"graphical"},(0,a.yg)("strong",{parentName:"h2"},"Graphical")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed an issue causing caves to appear illuminated by the sun (aka \u201cLight Leaking\u201d) in the Deferred Technical Preview"),(0,a.yg)("li",{parentName:"ul"},"Volumetric fog is no longer affected by sunlight in enclosed spaces in the Deferred Technical Preview")))}h.isMDXComponent=!0},84237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_exp",id:"changelog_source/preview/1.20/60/25/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PropertyOutOfBoundsError",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/25/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"PropertyOutOfBoundsError"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Added a new\xa0",(0,a.yg)("em",{parentName:"li"},"PropertyOutOfBoundsError"),"\xa0that throws when a property that is bounded is set out of bounds"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"ContainerSlot"),"\xa0APIs now throw an\xa0",(0,a.yg)("em",{parentName:"li"},"InvalidContainerSlotError"),"\xa0if the container slot is invalid, or if a property is set on an empty slot"),(0,a.yg)("li",{parentName:"ul"},"Property\xa0",(0,a.yg)("em",{parentName:"li"},"typeId"),"\xa0no longer returns undefined for empty slots, but instead throws an\xa0",(0,a.yg)("em",{parentName:"li"},"InvalidContainerSlotError")),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"hasItem"),"\xa0","-"," Returns whether the slot contains an item"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"getCanPlaceOn"),"\xa0","-"," Returns an array of block identifiers that the item can be placed on"),(0,a.yg)("li",{parentName:"ul"},"Added function\xa0",(0,a.yg)("em",{parentName:"li"},"getCanDestroy"),"\xa0","-"," Returns an array of block identifiers that the item can destroy when used")))}d.isMDXComponent=!0},38563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},68503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_stable",id:"changelog_source/preview/1.20/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:'-   Changed "Unsupported or out of bounds value.." errors to use\xa0ArgumentOutOfBoundsError\xa0Error type',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Changed "Unsupported or out of bounds value.." errors to use\xa0',(0,a.yg)("em",{parentName:"li"},"ArgumentOutOfBoundsError"),"\xa0Error type")))}d.isMDXComponent=!0},25549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,s={unversionedId:"changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/25",slug:"/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},88502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(58168),a=(r(96540),r(15680)),o=r(18228),i=r(19365);const s={},l=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p},g="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.yg)(i.A,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.yg)(i.A,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);