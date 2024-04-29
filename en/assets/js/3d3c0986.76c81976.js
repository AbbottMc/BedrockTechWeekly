"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59013,84295,81791,75930,36868,74992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,k=p["".concat(m,".").concat(d)]||p[d]||u[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),i=a(86010),l=a(12466),o=a(16550),m=a(91980),s=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,m._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=u(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[m,s]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=m??p;return d({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var f=a(72389);const g="tabList__CuJ",N="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:m,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(p(t),m(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},l,{className:(0,i.Z)("tabs__item",N,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},25716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),i=a(48393),l=a(2746),o=(a(66419),a(20810),a(9071));const m={},s=void 0,c={unversionedId:"changelog_source/stable/1.20/50/tech",id:"changelog_source/stable/1.20/50/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech.mdx",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech",permalink:"/en/docs/changelog_source/stable/1.20/50/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Performance / Stability</strong>",id:"performance--stability",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Animations</strong>",id:"animations",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>API</strong>",id:"api",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Gametest</strong>",id:"gametest",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-2",level:2}],d={toc:u};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-add-on-template-packs"},(0,r.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.20.50 with new resources, behaviors, and documentation are available to download at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddonPacks"},"aka.ms/MCAddonPacks"))),(0,r.kt)("h2",{id:"performance--stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance / Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed ",(0,r.kt)("em",{parentName:"li"},"CraftingEventPacket"))),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved some of the common scripting error messages to provide better context and information"),(0,r.kt)("li",{parentName:"ul"},"Added a\xa0",(0,r.kt)("em",{parentName:"li"},"Clear")," button to the content log screen")),(0,r.kt)("h2",{id:"animations"},(0,r.kt)("strong",{parentName:"h2"},"Animations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed unreliability around ",(0,r.kt)("em",{parentName:"li"},"is","_","alive")," on Server")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Blocks with the "minecraft:cardinal',"_",'direction", "minecraft:facing',"_",'direction", or "minecraft:block',"_",'face" states as part of the "minecraft:placement',"_",'direction" or "minecraft:placement',"_",'position" BlockTraits are rotated/mirrored properly by Structure Blocks'),(0,r.kt)("li",{parentName:"ul"},"Structure Void blocks once again prevents interaction with blocks and entities placed behind them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175237"},"MCPE-175237"),")"),(0,r.kt)("li",{parentName:"ul"},'"planks" block is now split into unique instances "oak',"_",'planks", "spruce',"_",'planks", "birch',"_",'planks", "jungle',"_",'planks", "acacia',"_",'planks", "dark',"_","oak","_",'planks"'),(0,r.kt)("li",{parentName:"ul"},'Commands will still work with "planks", however, "planks" block will not be suggested'),(0,r.kt)("li",{parentName:"ul"},'"stone" block is now split into unique instances: "stone", "granite", "polished',"_",'granite", "diorite", "polished',"_",'diorite", "andesite" and "polished',"_",'andesite"')),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a particle emitter is added to an entity but particles simulate in world, particles now correctly collide with the world")),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(o.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"api"},(0,r.kt)("strong",{parentName:"h2"},"API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"BlockComponentTypeMap"),",\xa0",(0,r.kt)("em",{parentName:"li"},"EntityComponentTypeMap"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"ItemComponentTypeMap")," aliases which map Component IDs to their TypeScript types"),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"getComponent"),",\xa0",(0,r.kt)("em",{parentName:"li"},"Entity.getComponent"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"ItemStack.getComponent")," to return the correct derived Component type"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"BlockComponentTypes"),",\xa0",(0,r.kt)("em",{parentName:"li"},"EntityComponentTypes"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"ItemComponentTypes")," enums that enumerate component ID strings"),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerInteractWithBlockAfterEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerInteractWithBlockBeforeEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerInteractWithEntityAfterEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerInteractWithEntityBeforeEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerLeaveBeforeEvent")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"NumberRange_interface to\xa0_minecraft/common"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"heightRange: NumberRange")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"matches_from\xa0_beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicProperties")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicProperties")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")))),(0,r.kt)("li",{parentName:"ul"},"TicksPerSecond",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"offset")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"above")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"below")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"north")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"east")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"south")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"west")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"center")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"bottomCenter")," from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0")))),(0,r.kt)("li",{parentName:"ul"},"Added initial NPC support to scripting with the\xa0",(0,r.kt)("em",{parentName:"li"},"EntityNpcComponent")),(0,r.kt)("li",{parentName:"ul"},"Moved",(0,r.kt)("em",{parentName:"li"},"Entity"),".",(0,r.kt)("em",{parentName:"li"},"remove"),"\xa0from\xa0",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.7.0"))),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Deprecated the "tag:" legacy item component and released the "minecraft:tags" item component out of experimental in json formats 1.20.50 and higher')),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue preventing mobs from spawning further than 6 chunks away from the nearest player even if the server's simulation range is larger than 6 chunks"),(0,r.kt)("li",{parentName:"ul"},'Added "minecraft:can',"_","join","_",'raid" component to allow entities to join existing raids')),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed animation controller loading to use the pack's ",(0,r.kt)("em",{parentName:"li"},"min","_","engine","_","version")," rather than the file's ",(0,r.kt)("em",{parentName:"li"},"format","_","version")," to determine the Molang Version. This fix applies to animation controllers in packs with a ",(0,r.kt)("em",{parentName:"li"},"min","_","engine","_","version")," of 1.20.50 or higher"),(0,r.kt)("li",{parentName:"ul"},"The following Molang queries are Deprecated and will no longer be available in packs with a ",(0,r.kt)("em",{parentName:"li"},"min","_","engine","_","version")," of 1.20.50 or higher",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"is","_","scenting"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced with ",(0,r.kt)("em",{parentName:"li"},"timer","_","flag","_","1"),", set by ",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"is","_","rising"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced with ",(0,r.kt)("em",{parentName:"li"},"timer","_","flag","_","2"),", set by ",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","2")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"is","_","feeling","_","happy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced with ",(0,r.kt)("em",{parentName:"li"},"timer","_","flag","_","3"),", set by ",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","3")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"dash","_","cooldown","_","progress"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It was only used to adjust the head animation of the camel as it came out of dash cooldown"),(0,r.kt)("li",{parentName:"ul"},"Camel animation uses ",(0,r.kt)("em",{parentName:"li"},"dash","_","cooldown","_","progress")," in camel.entity.json now"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"query.is","_","moving")," now detects vertical motion for the player again  ")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"gametest"},(0,r.kt)("strong",{parentName:"h2"},"Gametest")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"SimulatedPlayer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"stopUsingItem")," now returns the item that was being used"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NBT change: Dynamic properties are now stored using the behavior pack manifest UUID, rather than the module UUID. Existing worlds using dynamic properties will continue to work, and will be migrated to the new format when properties are read or modified")))),(0,r.kt)("h2",{id:"script-api-1"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0_@minecraft/server-ui_forms not correctly rendering player scoreboard information when embedded in rawtext")),(0,r.kt)("h2",{id:"script-api-2"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(o.default,{techSapi:(0,r.kt)(l.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}k.isMDXComponent=!0},2746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/stable/1.20/50/tech_sapi_exp",id:"changelog_source/stable/1.20/50/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added effectAddBeforeEvent and removed effectState from effectAddAfterEvent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/1.20/50/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},m={},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"effectAddBeforeEvent")," and removed ",(0,r.kt)("em",{parentName:"li"},"effectState")," from ",(0,r.kt)("em",{parentName:"li"},"effectAddAfterEvent")),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,r.kt)("em",{parentName:"li"},"target")," property to be of type\xa0",(0,r.kt)("em",{parentName:"li"},"Entity"),"\xa0or\xa0",(0,r.kt)("em",{parentName:"li"},"undefined")," as the entity may not have a target"),(0,r.kt)("li",{parentName:"ul"},"EntityHitInformation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,r.kt)("em",{parentName:"li"},"entity")," property to be of type\xa0",(0,r.kt)("em",{parentName:"li"},"Entity"),"\xa0or\xa0",(0,r.kt)("em",{parentName:"li"},"undefined")," as the entity may be undefined"))),(0,r.kt)("li",{parentName:"ul"},"EntityInventoryComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"container")," member variable now correctly reflects it can be a Container or undefined"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"entity")," member variable now correctly reflects it can be an Entity or undefined"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ItemStartUseOnAfterEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"itemStack")," is now optional"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ItemStopUseAfterEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"itemStack")," is now optional"))),(0,r.kt)("li",{parentName:"ul"},"DataDrivenEntityTriggerAfterEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed property\xa0",(0,r.kt)("em",{parentName:"li"},"id")," to\xa0",(0,r.kt)("em",{parentName:"li"},"eventId"),"\xa0for clarity"),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"getModifier")," to work in read-only mode"))),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"DefinitionModifier")," from a\xa0",(0,r.kt)("em",{parentName:"li"},"class"),"\xa0to an\xa0",(0,r.kt)("em",{parentName:"li"},"interface"),"\xa0with properties"),(0,r.kt)("li",{parentName:"ul"},"Made\xa0",(0,r.kt)("em",{parentName:"li"},"get_properly reflect that it can return\xa0_EntityType | undefined"),"\xa0instead of just\xa0",(0,r.kt)("em",{parentName:"li"},"EntityType"))))}p.isMDXComponent=!0},20810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/stable/1.20/50/tech_sapi_exp_diff",id:"changelog_source/stable/1.20/50/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/stable/1.20/50/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},m={},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},48393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/stable/1.20/50/tech_sapi_stable",id:"changelog_source/stable/1.20/50/tech_sapi_stable",title:"tech_sapi_stable",description:"Items",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech_sapi_stable",permalink:"/en/docs/changelog_source/stable/1.20/50/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},m={},s=[{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Cameras</strong>",id:"cameras",level:2},{value:"<strong>AI Goal Components</strong>",id:"ai-goal-components",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Renamed "minecraft:use',"_",'duration" to "minecraft:use',"_",'modifiers" and added a "movement',"_",'modifier" parameter in json format versions 1.20.50 and higher'),(0,r.kt)("li",{parentName:"ul"},'Deprecated "minecraft:chargeable" in json format versions 1.20.50 and higher. Use "minecraft:use',"_",'modifiers" instead for "movement',"_",'modifier" behavior'),(0,r.kt)("li",{parentName:"ul"},'Deprecated "on',"_",'dig" event triggers from "minecraft:digger" in format versions 1.20.50 and higher')),(0,r.kt)("h2",{id:"cameras"},(0,r.kt)("strong",{parentName:"h2"},"Cameras")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a content warning for when the camera is placed outside of the player's chunk radius")),(0,r.kt)("h2",{id:"ai-goal-components"},(0,r.kt)("strong",{parentName:"h2"},"AI Goal Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added "minecraft:behavior.melee',"_","box","_",'attack" behavior which functions the same as "minecraft:behavior.melee',"_",'attack" but uses bounds based attack reach calculations',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The\xa0",(0,r.kt)("em",{parentName:"li"},"reach","_","multiplier_attribute is removed and replaced with\xa0_box","_","increase")),(0,r.kt)("li",{parentName:"ul"},"Reach is calculated by increasing the bounds of the attacking mobs in the xz-plane by\xa0_box","_",'increase_blocks to create an "attack box". If the attack box intersects with the target\'s bounds the attacking mob can reach it')))))}p.isMDXComponent=!0},66419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},l=void 0,o={unversionedId:"changelog_source/stable/1.20/50/tech_sapi_stable_diff",id:"changelog_source/stable/1.20/50/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/50/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/stable/1.20/50",slug:"/changelog_source/stable/1.20/50/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/stable/1.20/50/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/50/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},m={},s=[],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const o={},m=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0}}]);