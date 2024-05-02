"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[41347,29933,72698,46144],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>_});var n=r(87462),a=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=r(72389);const v="tabList_TRJ7",k="tabItem_hGfb";function b(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==l&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},i,{className:(0,o.Z)("tabs__item",k,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(b,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function _(e){const t=(0,f.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},58678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),o=r(87162),i=(r(17561),r(47153));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.19/80/21/tech",id:"changelog_source/preview/1.19/80/21/tech",title:"tech",description:"AI Goals",source:"@site/docs/changelog_source/preview/1.19/80/21/tech.mdx",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech",permalink:"/docs/changelog_source/preview/1.19/80/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>ItemStack</strong>",id:"itemstack",level:2},{value:"<strong>EntityEquipmentInventoryComponent</strong>",id:"entityequipmentinventorycomponent",level:3},{value:"<strong>ItemDurabilityComponent</strong>",id:"itemdurabilitycomponent",level:3},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ai-goals"},(0,a.kt)("strong",{parentName:"h2"},"AI Goals")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Added "cooldown" field to target descriptors in "minecraft:behavior.nearest',"_","attackable","_",'target" goal')),(0,a.kt)("h2",{id:"blocks"},(0,a.kt)("strong",{parentName:"h2"},"Blocks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sponges no longer emit water drop particles underwater (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122138"},"MCPE-122138"),")")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'For worlds using game version 1.19.80 and above, acquiring a custom spawn egg through a command can only succeed with their full name rather than with an aux value, eg. "/give @s namespace:actor',"_","spawn","_",'egg"'),(0,a.kt)("li",{parentName:"ul"},"Removed requirement for blockState argument(s) when using other optional args in /fill /setblock and /clone (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167959"},"MCPE-167959"),")"),(0,a.kt)("li",{parentName:"ul"},'Implemented the "inputpermission" command, which allows for setting the player\'s camera or movement as enabled or disabled',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Syntax: /inputpermission set \\<target: player",">"," \\<permission: camera | movement",">"," \\<state: enabled | disabled",">"))),(0,a.kt)("li",{parentName:"ul"},'Implemented the "haspermission" target selector, which allows for selection based on player permission levels')),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'For behavior packs using version 1.19.80 and above, recipes no longer accept a Molang query for the item\'s data field, instead use the item\'s full name, eg. use { "item": "namespace:actor',"_","spawn","_",'egg" } instead of { "item": "spawn',"_",'egg", "data": "query.get',"_","actor","_","info","_","id('namespace:actor')\" }")),(0,a.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,a.kt)("h2",{id:"editor"},(0,a.kt)("strong",{parentName:"h2"},"Editor")),(0,a.kt)("p",null,"The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Join our Discussion forum, post bugs, view more detailed release notes, and share your creations on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor"},"GitHub.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Custom blocks are now listed in the block selector"),(0,a.kt)("li",{parentName:"ul"},"Fixed z-fighting on paste preview over selection volume")),(0,a.kt)("h2",{id:"script-api"},(0,a.kt)("strong",{parentName:"h2"},"Script API")),(0,a.kt)(i.default,{techSapi:(0,a.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,a.kt)("h2",{id:"itemstack"},(0,a.kt)("strong",{parentName:"h2"},"ItemStack")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getTags(): string","[","]"),"-"," Returns all tags for the item"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"hasTag(tag: string): boolean"),"-"," Returns true if the item has the specified tag")),(0,a.kt)("h3",{id:"entityequipmentinventorycomponent"},(0,a.kt)("strong",{parentName:"h3"},"EntityEquipmentInventoryComponent")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This component is used to manipulate the equipment of mobs and players. To use it, call\xa0",(0,a.kt)("em",{parentName:"li"},"getComponent('equipment","_","inventory')")),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined__","-")," Returns the item in the given equipment slot"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot"),"-"," Returns the container slot for the given equipment slot"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void"),"-"," Sets the item in the given equipment slot")),(0,a.kt)("h3",{id:"itemdurabilitycomponent"},(0,a.kt)("strong",{parentName:"h3"},"ItemDurabilityComponent")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ItemDurabilityComponent now works with all damageable items, not just custom items"),(0,a.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,a.kt)("em",{parentName:"li"},"damageRange")),(0,a.kt)("li",{parentName:"ul"},"Setting damage will now throw an exception if it is outside of the range ","[","0, maxDurability","]")),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Update specific GameTest exceptions to be thrown as GameTestError error objects")))}d.isMDXComponent=!0},87162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/80/21/tech_sapi_exp",id:"changelog_source/preview/1.19/80/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Form promises are now rejected using typed errors, vs. strings as used previously",source:"@site/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Form promises are now rejected using typed errors, vs. strings as used previously")))}p.isMDXComponent=!0},17561:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/80/21",slug:"/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/80/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},47153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=r(87462),a=r(67294),o=r(3905),i=r(31792),l=r(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==r.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,o.kt)(a.Fragment,null,r.techSapi)))}g.isMDXComponent=!0}}]);