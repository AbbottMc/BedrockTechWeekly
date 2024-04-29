"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43364,75496,73204,29933,78447,33406],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=a(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),r=c[a].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(_,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},64144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(33075),i=a(61942),l=(a(9026),a(5281),a(47153));const s={},c=void 0,u={unversionedId:"changelog_source/preview/1.20/80/20/tech",id:"changelog_source/preview/1.20/80/20/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/80/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech",permalink:"/docs/changelog_source/preview/1.20/80/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Cameras",id:"cameras",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"Molang",id:"molang",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"Blocks",id:"blocks-1",level:2},{value:"Commands",id:"commands",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u201csapling\u201d block is now split into unique instances: \u201coak","_","sapling\u201d, \u201cspruce","_","sapling\u201d, \u201cbirch","_","sapling\u201d, \u201cjungle","_","sapling\u201d, \u201cacacia","_","sapling\u201d and \u201cdark","_","oak","_","sapling\u201d."),(0,n.kt)("li",{parentName:"ul"},"\u201ccoral","_","fan\u201d block is now split into unique instances: \u201ctube","_","coral","_","fan\u201d, \u201cbrain","_","coral","_","fan\u201d, \u201cbubble","_","coral","_","fan\u201d, \u201cfire","_","coral","_","fan\u201d and \u201chorn","_","coral","_","fan\u201d")),(0,n.kt)("h2",{id:"cameras"},"Cameras"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the \u201cextend","_","player","_","rendering\u201d camera component which allows for players (and any entities they are connected to through riding and leashes) to be rendered even if they are beyond the max entity render distance"),(0,n.kt)("li",{parentName:"ul"},"Added \u201cextend","_","player","_","rendering\u201d component to the \u201cminecraft:free\u201d camera",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This component is intended to be an enhancement and improvement to current functionality and as such will be \u201cset to true\u201d by default"),(0,n.kt)("li",{parentName:"ul"},"Setting this component to false will remove the added rendering capability. Documentation will be undated prior to release"))),(0,n.kt)("li",{parentName:"ul"},"The server now sends chunks and actors around the camera to the client if that information already exists on the server even when the camera is placed far away from the player")),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The \u201cinteract\u201d component\u2019s fields \u201cequip","_","item","_","slot\u201d and \u201cdrop","_","item","_","slot\u201d now support both armor and inventory slots:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Armor slots are specified as \u2018slot.armor.head\u2019, \u2018slot.armor.chest\u2019, \u2018slot.armor.legs\u2019, and \u2018slot.armor.feet\u2019"),(0,n.kt)("li",{parentName:"ul"},"Inventory slots are specified as positive numbers, now expressed as strings"),(0,n.kt)("li",{parentName:"ul"},"This change requires a world version of 1.20.80 or higher"))),(0,n.kt)("li",{parentName:"ul"},"Added \u201crepair","_","entity","_","item\u201d field to the \u201cinteract\u201d component, which allows to repair an item in one of the entity\u2019s inventory or armor slots")),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added support for addImage to property pane"),(0,n.kt)("li",{parentName:"ul"},"Added icon property to IPropertyItemOptionsButton API to display icons in buttons"),(0,n.kt)("li",{parentName:"ul"},"Added the concept of WidgetManager and CustomWidget - allowing the server to instantiate in-world widgets which should facilitate manipulation of world tools. We currently only support CustomWidgets (which are server driven Custom Entities)"),(0,n.kt)("li",{parentName:"ul"},"Adjusted default editor UI scale to optimize screen space")),(0,n.kt)("h2",{id:"entity-filters"},"Entity Filters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added new entity filter \u201cis","_","sitting\u201d, which checks if the entity is sitting"),(0,n.kt)("li",{parentName:"ul"},"Added new entity filter \u201chas","_","damaged","_","equipment\u201d, which checks if the entity has a certain damaged piece of equipment in the specified slot")),(0,n.kt)("h2",{id:"molang"},"Molang"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added new query \u201cquery.armor","_","slot","_","damage\u201d, which returns the damage value of the armor item in the specified slot")),(0,n.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed\xa0",(0,n.kt)("em",{parentName:"li"},"FilterTextPacket"),"  ")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"blocks-1"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added \u2018minecraft:custom","_","components\u2019 block component under the Beta APIs feature flag")),(0,n.kt)("h2",{id:"commands"},"Commands"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed /hud command so that changes only effect the targeted player(s)")),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Partially fixed full block shapes (e.g. Redstone Lamps, Froglights, Glowstone, etc.) that are marked as point lights in resource packs in the Deferred Technical Preview. They can still be turned into point lights, but will not have occlusion/shadows"),(0,n.kt)("li",{parentName:"ul"},"Added a dedicated quality slider for Point Light Shadows in the Deferred Video Settings menu"),(0,n.kt)("li",{parentName:"ul"},"Added a new feature to the lighting model in the Deferred Technical Preview: Sub Surface Scattering. This effect approximates rays of light passing through translucent surfaces. For now, this feature is limited to only affect Leaves"),(0,n.kt)("li",{parentName:"ul"},"Increased the contrast and saturation of the world in the Deferred Technical Preview")),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(l.default,{techSapi:(0,n.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},61942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_exp",id:"changelog_source/preview/1.20/80/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Block Custom Components \u2013 see\xa0https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents",source:"@site/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block Custom Components \u2013 see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents"},"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents"),"\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"BlockComponentStepOnEvent"),"\xa0for\xa0",(0,n.kt)("em",{parentName:"li"},"beta")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"BlockRegistry"),"\xa0for\xa0",(0,n.kt)("em",{parentName:"li"},"beta")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"WorldInitializeBeforeEvent")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"BlockCustomComponent")))),(0,n.kt)("li",{parentName:"ul"},"Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command"),(0,n.kt)("li",{parentName:"ul"},"Added class\xa0",(0,n.kt)("em",{parentName:"li"},"ListBlockVolume"),"\xa0which extends\xa0",(0,n.kt)("em",{parentName:"li"},"BaseBlockVolume"),"\xa0","-"," A volume that stores multiple block locations"),(0,n.kt)("li",{parentName:"ul"},"Structure",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed class\xa0",(0,n.kt)("em",{parentName:"li"},"StructureTemplate"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"Structure")),(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,n.kt)("em",{parentName:"li"},"size: Vector3"),"\xa0- Returns the size of the structure in blocks"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getBlockPermutation(location: Vector3): BlockPermutation | undefined;"),"\xa0- Returns the block permutation at the given location within the structure"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"isValid(): boolean"),"\xa0- Returns false if the structure has been deleted"),(0,n.kt)("li",{parentName:"ul"},"Added function\xa0",(0,n.kt)("em",{parentName:"li"},"getIsWaterlogged(location: Vector3): boolean;"),"\xa0- Returns whether the block at the given location is waterlogged")))))}p.isMDXComponent=!0},5281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},33075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_stable",id:"changelog_source/preview/1.20/80/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Removed\xa0EntityHealableComponent.filters\xa0as they currently have no backing implementation",source:"@site/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed\xa0",(0,n.kt)("em",{parentName:"li"},"EntityHealableComponent.filters"),"\xa0as they currently have no backing implementation"),(0,n.kt)("li",{parentName:"ul"},"Fixing some component\xa0",(0,n.kt)("em",{parentName:"li"},"isValid"),"\xa0methods where they didn\u2019t properly return false in cases where the component had been removed from the Entity."),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"PaletteColor"),"\xa0enum to\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0for use with\xa0",(0,n.kt)("em",{parentName:"li"},"ItemColorComponent/ItemColor2Component")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"ItemColor2Component"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0for reading\xa0",(0,n.kt)("em",{parentName:"li"},"minecraft:color2")),(0,n.kt)("li",{parentName:"ul"},"Setting a dynamic property with a key larger than 32kb now will result in an exception")))}p.isMDXComponent=!0},9026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(67294),o=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);