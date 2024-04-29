"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27933,81791,45600,38443,68337,18655],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(87462),n=r(67294),i=r(86010),o=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,c]=h({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),f=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,n.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var f=r(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,i.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t})}),r??t)})))}function _(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",k)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(_,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(N,(0,a.Z)({key:String(t)},e))}},11830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(8498),o=r(46811),l=(r(73159),r(23234),r(9071));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/60/21/tech",id:"changelog_source/preview/1.20/60/21/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"AI Goals",id:"ai-goals",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Biomes",id:"biomes",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"General",id:"general",level:2},{value:"Molang",id:"molang",level:2},{value:"Performance and Stability",id:"performance-and-stability",level:2},{value:"Picture2.jpg",id:"picture2jpg",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],d={toc:m};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a\xa0_Project Through Liquid_property to the 3D Block Cursor"),(0,n.kt)("li",{parentName:"ul"},"Added a\xa0_CursorPropertiesChangeAfterEvent_to notify Editor script when the cursor properties are changed"),(0,n.kt)("li",{parentName:"ul"},"Wandering Traders can now correctly display custom entity spawn eggs in their trade menus (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170184"},"MCPE-170184"),")")),(0,n.kt)("h2",{id:"ai-goals"},"AI Goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"behavior.breed" now interrupts navigation on stop for content using engine version 1.20.60 or higher')),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"biomes"},"Biomes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Biome JSON files no longer support inheriting fields from other Biome JSON files. If this affects any content those files should be updated by manually copying the desired JSON text")),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The "entity',"_",'sensor" component now supports multiple "subsensors":'),(0,n.kt)("li",{parentName:"ul"},'"event", "require',"_",'all", "minimum',"_",'count", "maximum',"_",'count", "range" and "event',"_",'filter" are now individually configurable fields of each subsensor'),(0,n.kt)("li",{parentName:"ul"},'Subsensors also have a new "cooldown" field, which defines how often each subsensor should sense for entities'),(0,n.kt)("li",{parentName:"ul"},'All these changes require a "format',"_",'version" of 1.20.60 or higher')),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix in ",(0,n.kt)("em",{parentName:"li"},"CompoundBlockVolumeIterator")," that removes the addition of an extra block location in certain ",(0,n.kt)("em",{parentName:"li"},"CompoundBlockVolume")," configurations"),(0,n.kt)("li",{parentName:"ul"},"Update Pause Actors in world options menu using stateful menus"),(0,n.kt)("li",{parentName:"ul"},"Added tool grouping support to Tool Rail"),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"toolGroupId_property to\xa0_ExtensionOptionalParameters"),"\xa0API for organizing tools created in an extension"),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"name"),",\xa0",(0,n.kt)("em",{parentName:"li"},"description"),",\xa0",(0,n.kt)("em",{parentName:"li"},"notes_and\xa0_defaultToolGroupId"),"\xa0properties to\xa0",(0,n.kt)("em",{parentName:"li"},"Extension"),"\xa0API"),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"extensionInfo: Extension_property to\xa0_ExtensionContext"),"\xa0API and removed\xa0",(0,n.kt)("em",{parentName:"li"},"extensionName"),"\xa0property")),(0,n.kt)("h2",{id:"entity-filters"},"Entity Filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Added new entity filter "is',"_",'panicking", which checks if the entity is executing "behavior.panic"'),(0,n.kt)("li",{parentName:"ul"},'Added new entity filter "is',"_",'sprinting", which checks if the entity is sprinting')),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"water","_","spash","_","manual.__json")," to\xa0",(0,n.kt)("em",{parentName:"li"},"water","_","splash","_","manual.json"),"\xa0in\xa0",(0,n.kt)("em",{parentName:"li"},"resource","_","packs","\\","vanilla","\\","particles"),"\xa0(",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176784"},"MCPE-176784"),")")),(0,n.kt)("h2",{id:"molang"},"Molang"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved the context of content logs when an evaluated Molang expressions results in an error")),(0,n.kt)("h2",{id:"performance-and-stability"},"Performance and Stability"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Require block","_","id for each block in the StartGamePacket blockProperties")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"picture2jpg"},(0,n.kt)("img",{parentName:"h2",src:"https://feedback.minecraft.net/hc/article_attachments/21755225955725",alt:"Picture2.jpg"})),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed texture z-fighting issues in Deferred Technical Preview"),(0,n.kt)("li",{parentName:"ul"},"Added Volumetric Fog and Light Shafts to the Deferred Technical Preview. This new feature works by approximating the scattering that occurs as light rays travel through the air, resulting in more realistic fog and a greater sense of scene depth. It also plugs into existing data-driving capabilities in Resource Packs for fog and volumes, so that Creators can customize the look and feel of fog under a variety of conditions; see the updated ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable"},"Getting Started with Deferred Lighting")," article on the Minecraft Creator Portal for more information")),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},46811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/21/tech_sapi_exp",id:"changelog_source/preview/1.20/60/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error"),(0,n.kt)("li",{parentName:"ul"},"Updated ",(0,n.kt)("em",{parentName:"li"},"SimulatedPlayer")," so it can continuously build"),(0,n.kt)("li",{parentName:"ul"},"Updated ",(0,n.kt)("em",{parentName:"li"},"SimulatedPlayer")," so it can Move and look in different directions"),(0,n.kt)("li",{parentName:"ul"},"ChatSendAfter & ChatSendBeforeEvent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed\xa0",(0,n.kt)("em",{parentName:"li"},"message"),"\xa0and\xa0",(0,n.kt)("em",{parentName:"li"},"sender"),"\xa0to readonly properties"),(0,n.kt)("li",{parentName:"ul"},"Removed\xa0",(0,n.kt)("em",{parentName:"li"},"setTargets"),",\xa0",(0,n.kt)("em",{parentName:"li"},"getTargets"),",\xa0",(0,n.kt)("em",{parentName:"li"},"sendToTargets"),"\xa0and replaced with an optional player list property\xa0",(0,n.kt)("em",{parentName:"li"},"targets")))),(0,n.kt)("li",{parentName:"ul"},"Class ItemDurabilityComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"unbreaking")," to ",(0,n.kt)("em",{parentName:"li"},"unbreakingEnchantmentLevel")),(0,n.kt)("li",{parentName:"ul"},"Renmaed ",(0,n.kt)("em",{parentName:"li"},"getDamageRange")," to ",(0,n.kt)("em",{parentName:"li"},"getDamageChanceRange")))),(0,n.kt)("li",{parentName:"ul"},"EntityTypes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed\xa0",(0,n.kt)("em",{parentName:"li"},"getAll"),"\xa0return type from\xa0",(0,n.kt)("em",{parentName:"li"},"EntityTypeIterator"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"EntityType","[","]")))),(0,n.kt)("li",{parentName:"ul"},"EntityEquippableComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where functions ",(0,n.kt)("em",{parentName:"li"},"getEquipment")," and ",(0,n.kt)("em",{parentName:"li"},"getEquipmentSlot"),' could not be called within "before" event handlers'))),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where an ItemStack could not be stacked after clearing its lore")))}p.isMDXComponent=!0},23234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},8498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/21/tech_sapi_stable",id:"changelog_source/preview/1.20/60/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Released DataDrivenEntityTriggerAfterEvent from\xa0beta\xa0to\xa01.8.0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"DataDrivenEntityTriggerAfterEvent")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"DataDrivenEntityTriggerAfterEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"DataDrivenEntityTriggerAfterEventSignalOptions")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"DefinitionModifier")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released ",(0,n.kt)("em",{parentName:"li"},"WorldAfterEvents"),".dataDrivenEntityTrigger from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"EffectAddBeforeEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"EffectAddAfterEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"EffectAddAfterEvent"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"getTags"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"hasTag"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"RGBA")," interface now inherits from ",(0,n.kt)("em",{parentName:"li"},"RGB"))))}p.isMDXComponent=!0},73159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=r(74866),o=r(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}d.isMDXComponent=!0}}]);