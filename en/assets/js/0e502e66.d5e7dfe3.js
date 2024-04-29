"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77743,81791,93461,96665],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:r,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=r(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return a.createElement(_,(0,n.Z)({key:String(t)},e))}},42839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(13117),l=(r(85306),r(9071));const i={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/70/20/tech",id:"changelog_source/preview/1.20/70/20/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/70/20",slug:"/changelog_source/preview/1.20/70/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/70/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Entity Filters</strong>",id:"entity-filters",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>NBT Parsing</strong>",id:"nbt-parsing",level:2},{value:"<strong>Preview Realms</strong>",id:"preview-realms",level:2},{value:"<strong>Spawn Rules</strong>",id:"spawn-rules",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(l.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"components"},(0,a.kt)("strong",{parentName:"h2"},"Components")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The \u201centity","_","sensor\u201d component\u2019s \u201crange\u201d field now supports two values, the first one for horizontal range and the second one for vertical range"),(0,a.kt)("li",{parentName:"ul"},"This requires a \u201cformat","_","version\u201d of 1.20.70 or higher")),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("strong",{parentName:"h2"},"Editor")),(0,a.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,a.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,a.kt)("p",null,"Learn ",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," forum to engage with the team, and get started building extensions via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.kt)("p",null,"Updates this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The PropertyPane.addDropdown function now returns an IDropdownPropertyItem that can be used to call the new \u201cupdateDropdownItems\u201d to change the Dropdown items in an existing Dropdown and optionally set a new currently-selected index. \u201cupdateDropdownItems\u201d calls the corresponding \u201conChange\u201d function but passes -1 in for the oldValue because the list is changing entries"),(0,a.kt)("li",{parentName:"ul"},"Added Cursor delta relative to Player position and the name of the block at the cursor position to the Player position status bar entry"),(0,a.kt)("li",{parentName:"ul"},"Vector3 panes now have a default \u201cminX/Y/Z\u201d of \u201cMIN","_","SAFE","_","INTEGER\u201d, allowing negative values to be used",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The player will now correctly spawn at the current location when the \u201cSpawn at current location\u201d option is checked in the test world property pane"))),(0,a.kt)("li",{parentName:"ul"},"Viewport in the editor is no longer incorrectly offset while in a world with deferred graphics enabled")),(0,a.kt)("h2",{id:"entity-filters"},(0,a.kt)("strong",{parentName:"h2"},"Entity Filters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added new entity filter \u201cwas","_","last","_","hurt","_","by\u201d, which checks if the subject is the last player or mob to have recently attack the entity")),(0,a.kt)("h2",{id:"molang"},(0,a.kt)("strong",{parentName:"h2"},"Molang")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed experimental Molang queries",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"biome","_","has","_","any","_","tag"),(0,a.kt)("li",{parentName:"ul"},"biome","_","has","_","all","_","tags"),(0,a.kt)("li",{parentName:"ul"},"self"),(0,a.kt)("li",{parentName:"ul"},"target"),(0,a.kt)("li",{parentName:"ul"},"client","_","input","_","type"),(0,a.kt)("li",{parentName:"ul"},"get","_","nearby","_","entities"),(0,a.kt)("li",{parentName:"ul"},"get","_","nearby","_","entities","_","except","_","self"))),(0,a.kt)("li",{parentName:"ul"},"Added new Molang API\u2019s that give read access to rider body and head rotations",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rider","_","body","_","x","_","rotation(riderIndex) =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"rider","_","body","_","y","_","rotation(riderIndex) =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"rider","_","head","_","x","_","rotation(riderIndex) =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"rider","_","head","_","y","_","rotation(riderIndex,clampRotation?) =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"ride","_","body","_","x","_","rotation =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"ride","_","body","_","y","_","rotation =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"ride","_","head","_","x","_","rotation =",">"," float"),(0,a.kt)("li",{parentName:"ul"},"ride","_","head","_","y","_","rotation(clampRotation?) =",">"," float")))),(0,a.kt)("h2",{id:"nbt-parsing"},(0,a.kt)("strong",{parentName:"h2"},"NBT Parsing")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Loading of NBT data is now more restrictive. Negative-length arrays, invalid tag ids, and not enough bytes in a payload are now all treated as errors which will prevent a tag loading where before those conditions were sometimes ignored")),(0,a.kt)("h2",{id:"preview-realms"},(0,a.kt)("strong",{parentName:"h2"},"Preview Realms")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where pressing the back button at the Choose a Subscription screen would cause the \u201cPreview Realms couldn\u2019t load\u201d message under some circumstances")),(0,a.kt)("h2",{id:"spawn-rules"},(0,a.kt)("strong",{parentName:"h2"},"Spawn Rules")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u201cminecraft:spawns","_","on","_","block","_","filter\u201d now supports block descriptors"),(0,a.kt)("li",{parentName:"ul"},"\u201cminecraft:spawns","_","on","_","block","_","prevented","_","filter\u201d now supports block descriptors"),(0,a.kt)("li",{parentName:"ul"},"\u201cminecraft:spawns","_","above","_","block","_","filter\u201d now supports block descriptors")))}m.isMDXComponent=!0},13117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/70/20/tech_sapi_stable",id:"changelog_source/preview/1.20/70/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added ScriptGameRules and gameRules for accessing & modifying game rules",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/70/20",slug:"/changelog_source/preview/1.20/70/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/70/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"ScriptGameRules")," and ",(0,a.kt)("em",{parentName:"li"},"gameRules")," for accessing & modifying game rules")))}p.isMDXComponent=!0},85306:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/70/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/70/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/70/20",slug:"/changelog_source/preview/1.20/70/20/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/70/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);