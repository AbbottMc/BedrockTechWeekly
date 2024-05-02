"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60954,29933,47505,79754],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),s=a(91980),u=a(67392),m=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=k({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),g=(()=>{const e=s??c;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var g=a(72389);const f="tabList_TRJ7",N="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u,rightElement:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},l,{className:(0,i.Z)("tabs__item",N,l?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),a??t)})),m?r.createElement("div",{className:"w-full"},m):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},28613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(35903),l=(a(8599),a(47153));const o={},s=void 0,u={unversionedId:"changelog_source/preview/1.19/80/20/tech",id:"changelog_source/preview/1.19/80/20/tech",title:"tech",description:"Bedrock Editor",source:"@site/docs/changelog_source/preview/1.19/80/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/80/20",slug:"/changelog_source/preview/1.19/80/20/tech",permalink:"/docs/changelog_source/preview/1.19/80/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/20/tech.mdx",tags:[],version:"current",frontMatter:{}},m={},c=[{value:"<strong>Bedrock Editor</strong>",id:"bedrock-editor",level:2},{value:"<strong>Game Events</strong>",id:"game-events",level:2},{value:"<strong>Data-Driven Components</strong>",id:"data-driven-components",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Entity Filters</strong>",id:"entity-filters",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"\xa0<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Servers</strong>",id:"servers",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"bedrock-editor"},(0,r.kt)("strong",{parentName:"h2"},"Bedrock Editor")),(0,r.kt)("p",null,"The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. It is an in-engine, multiblock editing experience focused on making it possible for creators of all skillsets to easily craft high-quality experiences in Bedrock! We're working to add more capabilities, and it will change significantly as we get feedback from creators like you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor"),(0,r.kt)("li",{parentName:"ul"},"Join our Discussion forum, post bugs, view more detailed release notes, and share your creations on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Mojang/minecraft-editor"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},"Tag us on social channels with ",(0,r.kt)("strong",{parentName:"li"},"#BedrockEditor"))),(0,r.kt)("h2",{id:"game-events"},(0,r.kt)("strong",{parentName:"h2"},"Game Events")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"item","_","interact","_","finish")," game event now has a vibration frequency of 2 instead of 14"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"item","_","interact","_","start")," is no longer considered a detectable vibration"),(0,r.kt)("li",{parentName:"ul"},"Reeling a fishing rod now emits\xa0",(0,r.kt)("em",{parentName:"li"},"projectile","_","shoot")," vibration")),(0,r.kt)("h2",{id:"data-driven-components"},(0,r.kt)("strong",{parentName:"h2"},"Data-Driven Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added "lose',"_",'target" field to projectile data to specify if an entity should unselect its target after shooting the projectile'),(0,r.kt)("li",{parentName:"ul"},"Added a new Transformation component for blocks to support rotation, scaling and translation. The component can be added to the whole block, and/or to individual block permutations. Eg.")),(0,r.kt)("p",null,'"minecraft:transformation": {',(0,r.kt)("br",{parentName:"p"}),"\n",'"translation": ',"[","0.0, 0.1, -0.1","]",",",(0,r.kt)("br",{parentName:"p"}),"\n",'"scale": ',"[","0.5, 1, 1.5","]",",",(0,r.kt)("br",{parentName:"p"}),"\n",'"rotation": ',"[","90, 180, 0","]",(0,r.kt)("br",{parentName:"p"}),"\n","}"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transformed geometries still have the same restrictions that non-transformed geometries have, eg. a maximum size of 30/16 units")),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chance information types used in tree feature JSONs for some trunks and foliage now allow 0 as the chance (values like 0.0001 were allowed, but not 0)")),(0,r.kt)("h2",{id:"entity-filters"},(0,r.kt)("strong",{parentName:"h2"},"Entity Filters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Created new entity filter "is',"_",'raider" to determine if subject is part of a raid')),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deprecated ",(0,r.kt)("em",{parentName:"li"},"minecraft:part","_","visibility")," block component."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"bone","_","visibility")," behavior to ",(0,r.kt)("em",{parentName:"li"},"minecraft:geometry")," block component")),(0,r.kt)("h2",{id:"marketplace"},"\xa0",(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the map WDW Magic Kingdom, the carts on the Big Thunder Mountain, Snow White and the Seven Dwarves, and Space Mountain rides now properly align with the invisible Minecart they are attached to")),(0,r.kt)("h2",{id:"servers"},(0,r.kt)("strong",{parentName:"h2"},"Servers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blocks can now optionally (via a setting in StartGamePacket) use a hashed value for their network IDs. This hashed value is independent of all other blocks and remains stable across future releases")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Feedback button on the pause menu will now prompt the user with a modal before redirecting to the browser")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0},35903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/preview/1.19/80/20/tech_sapi_exp",id:"changelog_source/preview/1.19/80/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Updated versions to add new APIs to stable:",source:"@site/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/80/20",slug:"/changelog_source/preview/1.19/80/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated versions to add new APIs to stable:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added version\u202f1.1.0\u202fof\u202f@minecraft/server"),(0,r.kt)("li",{parentName:"ul"},"Added version\u202f1.2.0-beta\u202fof\u202f@minecraft/server"),(0,r.kt)("li",{parentName:"ul"},"Removed version\u202f1.1.0-beta\u202fof\u202f@minecraft/server"),(0,r.kt)("li",{parentName:"ul"},"Moved the following to\u202f@minecraft/server\u202fstable (1.1.0)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"runTimeout"),(0,r.kt)("li",{parentName:"ul"},"runInterval"),(0,r.kt)("li",{parentName:"ul"},"clearRun"),(0,r.kt)("li",{parentName:"ul"},"currentTick"),(0,r.kt)("li",{parentName:"ul"},"Vector3"),(0,r.kt)("li",{parentName:"ul"},"BlockPermutation \u202f(only a subset of functionality)"),(0,r.kt)("li",{parentName:"ul"},"Block"),(0,r.kt)("li",{parentName:"ul"},"getBlock"),(0,r.kt)("li",{parentName:"ul"},"sendMessage"),(0,r.kt)("li",{parentName:"ul"},"sendMessage  "))),(0,r.kt)("li",{parentName:"ul"},"Minecraft runtime errors are now fired as JavaScript Error objects instead of strings"),(0,r.kt)("li",{parentName:"ul"},"Fixed a number of base class inheritance issues and added several new base classes to certain class types"),(0,r.kt)("li",{parentName:"ul"},"/reload works if a script pack references a client RP."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the\xa0",(0,r.kt)("em",{parentName:"li"},"BeforeItemUseOnEvent")," function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation"),"\xa0would return undefined (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166945"},"MCPE-166945"),")"),(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("em",{parentName:"li"},"BeforeItemUseOnEvent_class now inherits from\xa0_ItemUseOnEvent"),"\xa0"),(0,r.kt)("li",{parentName:"ul"},"Moved the following to\xa0@minecraft/serverstable (1.0)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0",(0,r.kt)("em",{parentName:"li"},"sendMessage")," would fail when the message contains Unicode quotation marks"),(0,r.kt)("li",{parentName:"ul"},"Signs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"setText")," to set the text on a sign with a regular string, a\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage"),", or a\xa0",(0,r.kt)("em",{parentName:"li"},"RawText")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"getText")," to get the string on a sign, will return undefined if\xa0",(0,r.kt)("em",{parentName:"li"},"setText"),"\xa0was called with a\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage"),"\xa0or a\xa0",(0,r.kt)("em",{parentName:"li"},"RawText")),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"getRawText")," to get the\xa0",(0,r.kt)("em",{parentName:"li"},"RawText"),"\xa0on a sign, will return undefined if\xa0",(0,r.kt)("em",{parentName:"li"},"setText"),"\xa0was called with a string"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"getTextDyeColor")," and\xa0",(0,r.kt)("em",{parentName:"li"},"setTextDyeColor"),"\xa0to read/write the dye of the sign text"))),(0,r.kt)("li",{parentName:"ul"},"Dyes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"DyeColor")," enum"))),(0,r.kt)("li",{parentName:"ul"},"sendMessage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"rawtext")," is now\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage","[","]"),"\xa0instead of\xa0",(0,r.kt)("em",{parentName:"li"},"(string | RawMessage)","[","]")))),(0,r.kt)("li",{parentName:"ul"},"RawMessage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"rawtext")," property on\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage"),"\xa0is no longer\xa0",(0,r.kt)("em",{parentName:"li"},"(string | RawMessage)","[","]"),"\xa0and is instead\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage","[","]")))),(0,r.kt)("li",{parentName:"ul"},"RawText",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added a\xa0",(0,r.kt)("em",{parentName:"li"},"RawText")," class for reading\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage"),"\xa0like on Signs"))),(0,r.kt)("li",{parentName:"ul"},"Riding",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"getRiders")," to\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRideableComponent"),"\xa0which returns an array of all the entities currently riding this entity"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRidingComponent"),"-"," this component is only on entities that are currently riding on another entity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Has an\xa0",(0,r.kt)("em",{parentName:"li"},"entityRidingOn")," property that returns the entity this entity is currently riding on"))),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getEntity(id: string): Entity | undefined"),"-"," Gets an entity. Returns undefined for entities that don't exist or aren't loaded"))),(0,r.kt)("li",{parentName:"ul"},"Dimension",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getEntities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modified return type to\xa0",(0,r.kt)("em",{parentName:"li"},"Entity","[","]")),(0,r.kt)("li",{parentName:"ul"},"Modified parameter name\xa0",(0,r.kt)("em",{parentName:"li"},"getEntities")," to\xa0",(0,r.kt)("em",{parentName:"li"},"options")),(0,r.kt)("li",{parentName:"ul"},"New signature:\xa0",(0,r.kt)("em",{parentName:"li"},"getEntities(options?: EntityQueryOptions): Entity","[","]")))),(0,r.kt)("li",{parentName:"ul"},"getPlayers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modified return type to\xa0",(0,r.kt)("em",{parentName:"li"},"Player","[","]")),(0,r.kt)("li",{parentName:"ul"},"Modified parameter name\xa0",(0,r.kt)("em",{parentName:"li"},"getPlayers")," to\xa0",(0,r.kt)("em",{parentName:"li"},"options")),(0,r.kt)("li",{parentName:"ul"},"New signature:\xa0",(0,r.kt)("em",{parentName:"li"},"getPlayers(options?: EntityQueryOptions): Player","[","]",";")))),(0,r.kt)("li",{parentName:"ul"},"@minecraft/server-ui",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When building forms, all read-only user-facing strings (e.g., text labels, dropdown options etc.) now accept\xa0",(0,r.kt)("em",{parentName:"li"},"RawMessage")," This affects the following classes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ActionFormData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ModalFormData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"MessageFormData")))),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getItemStack(amount?: number, withData?: boolean): ItemStack"),"-"," Gets an item stack of the block. Returns undefined for blocks that don't have a corresponding item (e.g. air)"))),(0,r.kt)("li",{parentName:"ul"},"BlockPermutation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getItemStack(amount?: number): ItemStack"),"\u2013 Creates an item stack of the block permutation. Returns undefined for blocks that don't have a corresponding item (e.g. air)"),(0,r.kt)("li",{parentName:"ul"},"Removed data\xa0",(0,r.kt)("em",{parentName:"li"},"property")))),(0,r.kt)("li",{parentName:"ul"},"BlockComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"block"),"-"," Gets the block that the component is attached to"))),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"IEntityComponent")," to\xa0",(0,r.kt)("em",{parentName:"li"},"EntityComponent")),(0,r.kt)("li",{parentName:"ul"},"Container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced classes\xa0",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("em",{parentName:"li"},"BlockInventoryComponentContainer"),",\xa0",(0,r.kt)("em",{parentName:"li"},"InventoryComponentContainer"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerInventoryComponentContainer")," with\xa0",(0,r.kt)("em",{parentName:"li"},"Container")),(0,r.kt)("li",{parentName:"ul"},"function\xa0",(0,r.kt)("em",{parentName:"li"},"addItem")," now returns the remainder of the added item stack if the container is full, else\xa0",(0,r.kt)("em",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"function\xa0",(0,r.kt)("em",{parentName:"li"},"transferItem")," no longer takes a destination slot and will now place the given item in the first available slot. The function now returns the remainder of the item stack if the container is full, else\xa0",(0,r.kt)("em",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"moveItem(fromSlot: number, to Slot: number, to Container: Container): void"),"-"," Moves an item from one container to another, replacing any item in the destination slot"),(0,r.kt)("li",{parentName:"ul"},"Function\xa0",(0,r.kt)("em",{parentName:"li"},"swapItems")," can now swap empty slots"),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("em",{parentName:"li"},"clearItem"),"\xa0- Please ",(0,r.kt)("em",{parentName:"li"},"use"),"\xa0",(0,r.kt)("em",{parentName:"li"},"setItem(undefined)"),"\xa0instead")))))))))}c.isMDXComponent=!0},8599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/preview/1.19/80/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/80/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/80/20",slug:"/changelog_source/preview/1.19/80/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},u=[],m={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}))}c.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=a(87462),r=a(67294),i=a(3905),l=a(31792),o=a(85162);const s={},u=void 0,m={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,i.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,i.kt)(o.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,i.kt)(r.Fragment,null,a.techSapi)))}k.isMDXComponent=!0}}]);