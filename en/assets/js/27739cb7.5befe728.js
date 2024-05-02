"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14684,81791,23745,78714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),c=r(91980),s=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=c??p;return d({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var f=r(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==i&&(m(t),c(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?n.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},61483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(219),l=(r(12232),r(9071));const i={},c=void 0,s={unversionedId:"changelog_source/preview/1.20/10/21/tech",id:"changelog_source/preview/1.20/10/21/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Dedicated Server</strong>\xa0",id:"dedicated-server",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Camera</strong>",id:"camera",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"general"},(0,n.kt)("strong",{parentName:"h2"},"General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Converted ",(0,n.kt)("em",{parentName:"li"},'"properties"')," to ",(0,n.kt)("em",{parentName:"li"},'"states"')," for custom blocks"),(0,n.kt)("li",{parentName:"ul"},"Fix a crash that could happen when running the ",(0,n.kt)("em",{parentName:"li"},"\u201cgo","_","and","_","give","_","items","_","to","_","noteblock\u201d")," goal\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when attempting to change a mob\u2019s scale while it was colliding with blocks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170645"},"MCPE-170645"),")")),(0,n.kt)("h2",{id:"dedicated-server"},(0,n.kt)("strong",{parentName:"h2"},"Dedicated Server"),"\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note for Linux users:")," Ubuntu 18.04 LTS (Bionic Beaver) will reach End of Standard Support in 2023. Accordingly, the Linux Minecraft Dedicated Server will also raise its minimum target Ubuntu version to 20.04 LTS (Focal Fossa) in a later R20 update (exact release to be determined). Minecraft server operators using Ubuntu are encouraged to prepare for this transition by updating their deployments to 20.04 LTS as soon as possible.\xa0")),(0,n.kt)("h2",{id:"items"},(0,n.kt)("strong",{parentName:"h2"},"Items")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Items with the ",(0,n.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," component will now place blocks with correct orientation\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released the ",(0,n.kt)("em",{parentName:"li"},'"minecraft:max',"_","stack","_",'size"')," item component out of experimental in json formats 1.20.10 and higher"),(0,n.kt)("li",{parentName:"ul"},"Custom items with ",(0,n.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," will no longer place certain blocks in the wrong location\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released the ",(0,n.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," item component out of experimental in json formats 1.20.10 and higher"),(0,n.kt)("li",{parentName:"ul"},"Released the ",(0,n.kt)("em",{parentName:"li"},'"minecraft:record"')," item component out of experimental in json formats 1.20.10 and higher")),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"camera"},(0,n.kt)("strong",{parentName:"h2"},"Camera")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Limit free cam JSON to not pitch camera beyond plus or minus 90 degrees"),(0,n.kt)("li",{parentName:"ul"},"Fixed /",(0,n.kt)("em",{parentName:"li"},"camerashake")," command to shake camera without also shaking player"),(0,n.kt)("li",{parentName:"ul"},"Rendering of experimental minecraft:free camera no longer affected by player state like night vision")))}d.isMDXComponent=!0},219:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   System",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"System",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Replaced\xa0",(0,n.kt)("em",{parentName:"li"},"events_with\xa0_system.beforeEvents"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"system.afterEvents"),"."),(0,n.kt)("li",{parentName:"ul"},"Renamed event\xa0",(0,n.kt)("em",{parentName:"li"},"beforeWatchdogTerminate_to\xa0_watchdogTerminate"),"\xa0and moved it to\xa0",(0,n.kt)("em",{parentName:"li"},"beforeEvents")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"scriptEventReceive_to\xa0_afterEvents")))),(0,n.kt)("li",{parentName:"ul"},"MessageReceiveAfterEvent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,n.kt)("em",{parentName:"li"},"sourceType")))),(0,n.kt)("li",{parentName:"ul"},"ScriptEventSource",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Replaced enum\xa0",(0,n.kt)("em",{parentName:"li"},"MessageSourceType_with a new enum\xa0_ScriptEventSource")))),(0,n.kt)("li",{parentName:"ul"},"ScriptEventCommandMessageAfterEvent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed property\xa0",(0,n.kt)("em",{parentName:"li"},"sourceType_from\xa0_MessageSourceType"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"ScriptEventSource")),(0,n.kt)("li",{parentName:"ul"},"Increased maximum message length from 256 to 2048 characters")))))}p.isMDXComponent=!0},12232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/10/21",slug:"/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(31792),l=r(85162);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}d.isMDXComponent=!0}}]);