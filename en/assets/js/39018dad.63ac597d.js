"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29444,81791,60308,69840,65102,95733],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(87462),n=r(67294),o=r(86010),l=r(12466),i=r(16550),c=r(91980),s=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var g=r(72389);const k="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:r,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=s[r].value;a!==i&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k)},n.createElement(b,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},90646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),o=r(64726),l=r(33151),i=(r(78751),r(38459),r(9071));const c={},s=void 0,u={unversionedId:"changelog_source/preview/1.21/0/22/tech",id:"changelog_source/preview/1.21/0/22/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/22/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/22",slug:"/changelog_source/preview/1.21/0/22/tech",permalink:"/en/docs/changelog_source/preview/1.21/0/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/22/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"Add-Ons and Script Engine\xa0",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Editor\xa0",id:"editor",level:2},{value:"Entities\xa0",id:"entities",level:2},{value:"Split Screen\xa0",id:"split-screen",level:2},{value:"Items\xa0",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Graphical\xa0",id:"graphical",level:2}],m={toc:d};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deprecated the Free Creator Camera experiment\xa0")),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"editor"},"Editor\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Implemented a\u202fSimple Tool Wrapper\u202fframework to simplify the boilerplate implementation of setting up an editor tool, and manage the window visibility and lifecycle of the tool components.\xa0"),(0,n.kt)("li",{parentName:"ul"},"Editor Export API can now export a playable world \xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed the UI layout drawer content to respond properly to changes in the visibility of the PropertyPane API\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed bug for when a player switched to Test World while in the Nether/End the worlds dimension incorrectly changed to the Overworld\xa0"),(0,n.kt)("li",{parentName:"ul"},"Updated ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit/"},"Editor Extension Starter Kit")," to include samples for custom brushes and Simple Tool Wrapper\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed bug that caused crashes during deletion of Script Widget Groups\xa0")),(0,n.kt)("h2",{id:"entities"},"Entities\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated entity geometry to allow UV rotations. This allows you to rotate the specified UV rect in 90 degree increments before applying it to a cube face of an entity model. Supported from\u202fminecraft:geometry\u202fformat version 1.21.0 and up\xa0")),(0,n.kt)("h2",{id:"split-screen"},"Split Screen\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed mob animations not playing when mobs were unloaded in split screen\xa0")),(0,n.kt)("h2",{id:"items"},"Items\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Unlocking requirements are now sent to clients for "minecraft:recipe',"_",'shapeless" and "minecraft:recipe',"_",'shaped"')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'It allows the UI to suggest recipes that are always unlocked when the game rule "dolimitedcrafting" is ON\xa0')))),(0,n.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},"Graphical\xa0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added a new feature to the Deferred Technical Preview: Color Grading and Tone Mapping. This new capability allows resource packs to define their own color post processing for conveying distinct moods and themes. See the updated ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/deferredlighting?view=minecraft-bedrock-stable"},"Getting Started with Deferred Lighting")," article for full information\xa0"),(0,n.kt)("li",{parentName:"ul"},'New experimental toggle added in Video settings menu to remove texture limit and load textures instead of using the "pink texture" called "Remove Texture Limit". Textures will continue to load until the system exhausts all available graphics memory\xa0'),(0,n.kt)("li",{parentName:"ul"},"Added light pre-exposure to the Deferred Technical Preview. This new feature is enabled by default and cannot be disabled. While this won\u2019t result in any immediate visual difference for players, creators now have the freedom to specify sun or atmospheric intensities with values larger than 65,000. Previously, larger values like these would cause visual corruption on certain mobile devices (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173919"},"MCPE-173919"),")")))}h.isMDXComponent=!0},33151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/22/tech_sapi_exp",id:"changelog_source/preview/1.21/0/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Changed function from\u202ffillBlocks(begin Vector3, block BlockFillOptions) BlockVolumeBase | CompoundBlockVolume, block BlockFillOptions): ListBlockVolume",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/0/22",slug:"/changelog_source/preview/1.21/0/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/0/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed function from\u202ffillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): number\u202fto\u202ffillBlocks(volume: BlockVolumeBase | CompoundBlockVolume, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): ListBlockVolume\xa0"),(0,n.kt)("li",{parentName:"ul"},"BlockFillOptions\xa0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removed member\u202fmatchingBlock?: BlockPermutation\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added member\u202fblockFilter?: BlockFilter\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added member\u202fignoreChunkBoundErrors?: boolean\xa0")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added ItemComponentUseCompleteEvent for beta\xa0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moved\u202fsetType\u202fAPI from beta to stable 1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},'Added function\u202fwaitTick(ticks?: number): Promise\u202fwhere the returned promise is resolved after "ticks" number of ticks or 1 tick if no ticks parameter is supplied\xa0')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Removed argument\u202fwaterlogged\u202ffrom function\u202fsetBlockPermutation\u202fand moved it from\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Moved function\u202fsaveToWorld\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Moved function\u202fsaveAs\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Updated signature of\u202fcreateFromWorld\u202fand moved it from\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Renamed function\u202fgetIds\u202fto\u202fgetWorldStructureIds\u202fand moved it from\u202fbeta\u202fto\u202f1.11.0")))}p.isMDXComponent=!0},38459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.21/0/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/22",slug:"/changelog_source/preview/1.21/0/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},64726:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/22/tech_sapi_stable",id:"changelog_source/preview/1.21/0/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   GameRules",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/22",slug:"/changelog_source/preview/1.21/0/22/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.21/0/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GameRules")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Released\u202fGameRules\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fGameRuleChangeAfterEvent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fGameRuleChangeAfterEventSignal\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fWorld.gameRules\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fWorldAfterEvents.gameRuleChange\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EntityTameableComponent\xa0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Changed return type of\u202fgetTameItems\u202fto ItemStack","[","]","\xa0"),(0,n.kt)("li",{parentName:"ul"},"Changed\u202ftame\u202fto take a player\xa0"),(0,n.kt)("li",{parentName:"ul"},"Added method\u202ftamedToPlayer,\u202ftamedToPlayerId,\u202fisTamed\xa0")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityColor2Component\u202ffrom\u202fbeta\u202fto\u202f1.11.0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fPaletteColor\u202ffrom\u202fbeta\u202fto\u202f1.11.0\u202f"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fItemStack.matches\u202ffrom\u202fbeta\u202fto\u202f1.11.0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationClimbComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationFloatComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationFlyComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationGenericComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationHoverComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0\xa0"),(0,n.kt)("li",{parentName:"ul"},"Released\u202fEntityNavigationWalkComponent\u202ffrom\u202fbeta\u202fto\u202f1.11.0")))}p.isMDXComponent=!0},78751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.21/0/22/tech_sapi_stable_diff",id:"changelog_source/preview/1.21/0/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/0/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/22",slug:"/changelog_source/preview/1.21/0/22/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.21/0/22/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(74866),l=r(85162);const i={},c=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}m.isMDXComponent=!0}}]);