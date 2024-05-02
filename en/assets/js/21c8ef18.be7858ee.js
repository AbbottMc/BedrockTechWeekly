"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[36101,81791,79934,21e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),r=c[n].value;r!==l&&(d(t),s(r))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},87223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(3997),i=(n(58604),n(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/60/24/tech",id:"changelog_source/preview/1.20/60/24/tech",title:"tech",description:"AI Goals",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"AI Goals",id:"ai-goals",level:2},{value:"Biomes",id:"biomes",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Event Responses",id:"entity-event-responses",level:2},{value:"Molang",id:"molang",level:2},{value:"Performance",id:"performance",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Scripting",id:"scripting",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ai-goals"},"AI Goals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"behavior.follow',"_",'parent" now interrupts navigation on stop for content using engine version 1.20.60 or higher\xa0')),(0,a.kt)("h2",{id:"biomes"},"Biomes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Biome tags in JSON files are now specified under a "minecraft:tags" component, in a "tags" array, rather than as loose JSON objects, for files with a format',"_","version of 1.20.60 or higher\xa0")),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "interact" component now supports the additional "entity',"_",'act" value for the "vibration" field')),(0,a.kt)("h2",{id:"editor"},"Editor"),(0,a.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,a.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,a.kt)("p",null,"Learn\xa0",(0,a.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use"),"\xa0the Editor,\xa0join the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion"),"\xa0discussion forum to engage with the team, and get started building extensions via the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit"),"\xa0and\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,a.kt)("p",null,"Updates this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed addSeparator function from IMenu API\xa0"),(0,a.kt)("li",{parentName:"ul"},"Fixed issue where resource packs were not being retained during editing and testing - now they are retained!"),(0,a.kt)("li",{parentName:"ul"},"Added\xa0addEntityPicker\xa0function to\xa0IPropertyPane\xa0API for selecting an entity type"),(0,a.kt)("li",{parentName:"ul"},"Added interface\xa0IPropertyItemOptionsDataPicker\xa0for both entity and block picker optional properties, removed\xa0IPropertyItemOptionsBlocks"),(0,a.kt)("li",{parentName:"ul"},"Introducing Void World generation! The Flat World toggle found on the Advanced tab of the Create New Project page has been replaced with a drop down, allowing new Editor projects to be created in a Vanilla, Flat, or Void world. The Void world project experience will be iterated on in the coming months. Upon starting a Void world project, swap Selection to Fixed Distance to place blocks to kickstart your build."),(0,a.kt)("li",{parentName:"ul"},"Added\xa0toolGroupId\xa0optional property to\xa0IRegisterExtensionOptionalParameters\xa0API for organizing tools in custom groups!")),(0,a.kt)("h2",{id:"entity-event-responses"},"Entity Event Responses"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Added the "emit',"_",'vibration" entity event response, which allows the entity to emit a vibration having the entity itself as its source')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The "vibration" field allows to specify the vibration to be emitted')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'The allowed values are "shear", "entity',"_",'act", and "entity',"_",'interact"'))),(0,a.kt)("h2",{id:"molang"},"Molang"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added content errors that state\xa0",(0,a.kt)("em",{parentName:"li"},"query.remaining","_","durability"),"\xa0and\xa0",(0,a.kt)("em",{parentName:"li"},"query.max","_","durability"),"\xa0are only to be used with Item contexts.")),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Feature toggle\xa0",(0,a.kt)("em",{parentName:"li"},"Enable New Geometry Tessellation Pipeline"),"\xa0defaults to true")),(0,a.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,a.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The block component "minecraft:random',"_",'ticking" is\xa0now supported again')),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(i.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"graphical"},"Graphical"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue where shadows for alpha tested geometry (doors, leaves, etc.) were no longer rendering in the Deferred Technical Preview\xa0"),(0,a.kt)("li",{parentName:"ul"},"Banner shields now render when equipped in both left and right hands in the Deferred Technical Preview"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where light emitting items glowed in the player's hand in dark rooms during the day in the Deferred Technical Preview"),(0,a.kt)("li",{parentName:"ul"},"Improved upscaling stability on Android in the Deferred Technical Preview"),(0,a.kt)("li",{parentName:"ul"},"On Android, pixelated artifacts are no longer visible on the right half of the screen when upscaling is turned on in the Deferred Technical Preview"),(0,a.kt)("li",{parentName:"ul"},"Fixed unstable and incorrect light clustering results in the Deferred Technical Preview")),(0,a.kt)("h2",{id:"scripting"},"Scripting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added\xa0",(0,a.kt)("em",{parentName:"li"},"ScriptBiomeTypes"),"\xa0and\xa0",(0,a.kt)("em",{parentName:"li"},"ScriptBiomeType"),"\xa0to allow Scripting API to enumerate the BiomeRegistry."),(0,a.kt)("li",{parentName:"ul"},"Added a\xa0",(0,a.kt)("em",{parentName:"li"},"findClosestBiome"),"\xa0function to\xa0",(0,a.kt)("em",{parentName:"li"},"Dimension"),"\xa0to find the closest biome of a specified type, to a given position in the world.")))}m.isMDXComponent=!0},3997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/24/tech_sapi_exp",id:"changelog_source/preview/1.20/60/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   system.runJob()",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"system.runJob()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"system.clearJob()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Added runJob and clearJob for optimizing long running tasks using JavaScript generators. system.runJob takes a generator function and returns a jobId. See documentation for usage examples.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"@minecraft/server.BlockPermutation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Moved getState and withStates APIs from beta to stable"))))}p.isMDXComponent=!0},58604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(31792),i=n(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,a.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}m.isMDXComponent=!0}}]);