"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95852,64137,10404,36731],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),u=a(67392),p=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??c;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var h=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u,rightElement:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(m(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":o===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function C(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},50991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),i=a(77973),o=a(19470);const s={sidebar_position:99999999,tags:["Official","Changelog","Preview","1.19"]},u="1.19.70.21",p={unversionedId:"backup/preview/1.19.70.21",id:"backup/preview/1.19.70.21",title:"1.19.70.21",description:"[//]: # (Tab\u680f)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/backup/preview/1.19.70.21.mdx",sourceDirName:"backup/preview",slug:"/backup/preview/1.19.70.21",permalink:"/en/docs/backup/preview/1.19.70.21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/backup/preview/1.19.70.21.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999999,frontMatter:{sidebar_position:99999999,tags:["Official","Changelog","Preview","1.19"]}},c={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1197021"},"1.19.70.21"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(o.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0},77973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.19.70.21/gameplay",id:"changelog_source/preview/1.19.70.21/gameplay",title:"gameplay",description:"Experimental Features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.21/gameplay.md",sourceDirName:"changelog_source/preview/1.19.70.21",slug:"/changelog_source/preview/1.19.70.21/gameplay",permalink:"/en/docs/changelog_source/preview/1.19.70.21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.21/gameplay.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Features and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:3},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:3},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:3},{value:"<strong>Performance and Stability</strong>",id:"performance-and-stability",level:3},{value:"<strong>Marketplace</strong>",id:"marketplace",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Features")),(0,r.kt)("h3",{id:"blocks"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Piglin and Dragon Head blocks no longer animate in the hotbar or inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164535"},"MCPE-164535"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32654"},"MCPE-32654"),")")),(0,r.kt)("h2",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Features and Bug Fixes")),(0,r.kt)("h3",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h3"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players are now able to place top Slabs in blocks that are only partially blocked by an entity (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155016"},"MCPE-155016"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer see through partial blocks when sneaking or riding in third person (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156273"},"MCPE-156273"),")"),(0,r.kt)("li",{parentName:"ul"},"Error messages about building outside the world height limits no longer appear when simply interacting with blocks at the world height limits from certain angles (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152935"},"MCPE-152935"),")"),(0,r.kt)("li",{parentName:"ul"},"Players are now able to interact with functional blocks while sneaking in a gap without the sneak button held")),(0,r.kt)("h3",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h3"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed bug where Zombified Piglins would spawn in the Nether in light levels above 11"),(0,r.kt)("li",{parentName:"ul"},"Minecarts can now eject mobs into liquid blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120078"},"MCPE-120078"),")")),(0,r.kt)("h3",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h3"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allowed left and right D-pad buttons to keep input when the forward button is pressed"),(0,r.kt)("li",{parentName:"ul"},"Added the leave Boat button when the player falls from a height within in the boat."),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented players from removing equipped armor by tapping on an item or block in the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165790"},"MCPE-165790"),")")),(0,r.kt)("h3",{id:"performance-and-stability"},(0,r.kt)("strong",{parentName:"h3"},"Performance and Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed an issue where simultaneously pressing the "Mine" and "Place" button on any input device while targeting a Structure Block could cause the game to crash (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155689"},"MCPE-155689"),")")),(0,r.kt)("h3",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h3"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigating right with controller left stick on sidebar now collapses it")))}c.isMDXComponent=!0},19470:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.19.70.21/tech",id:"changelog_source/preview/1.19.70.21/tech",title:"tech",description:"Commands",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.21/tech.md",sourceDirName:"changelog_source/preview/1.19.70.21",slug:"/changelog_source/preview/1.19.70.21/tech",permalink:"/en/docs/changelog_source/preview/1.19.70.21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.21/tech.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data-driven</strong>",id:"data-driven",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Changed module <code>@minecraft/server-gametest@1.0.0-beta</code></strong>",id:"changed-module-minecraftserver-gametest100-beta",level:3},{value:"<strong>Changed module <code>@minecraft/server@1.1.0-beta</code></strong>",id:"changed-module-minecraftserver110-beta",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Removed support for field "data" in commands /clone, /execute, /fill, /setblock and /testforblock beyond version 1.19.70, eg. ',(0,r.kt)("em",{parentName:"li"},"/setblock ~ ~ ~ minecraft:wool 1"),"will only have its equivalent ",(0,r.kt)("em",{parentName:"li"},"/setblock ~ ~ ~ minecraft:wool ",'["color":"orange"]')," supported"),(0,r.kt)("li",{parentName:"ul"},"Volume arguments no longer floor the selector's position (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162237"},"MCPE-162237"),")"),(0,r.kt)("li",{parentName:"ul"},"Selecting targets by volume will now select all entities whose hitbox collides with the volume box. This is versioned for 1.19.70 and later (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162237"},"MCPE-162237"),")"),(0,r.kt)("li",{parentName:"ul"},"Previous behavior works as expected on versions less than 1.19.70"),(0,r.kt)("li",{parentName:"ul"},"Volume arguments for selectors (dx, dy, dz) now support float values (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163863"},"MCPE-163863"),")")),(0,r.kt)("h2",{id:"data-driven"},(0,r.kt)("strong",{parentName:"h2"},"Data-driven")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'In JSON formats 1.19.70 and later, blocks fail to load if the "condition" field in Block Permutations is not a valid Molang string'),(0,r.kt)("li",{parentName:"ul"},'Crafting Table component no longer appends "tile." when defaulting to use block name for crafting table label')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)("h3",{id:"changed-module-minecraftserver-gametest100-beta"},(0,r.kt)("strong",{parentName:"h3"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"strong"},"@minecraft/server-gametest@1.0.0-beta"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"Test")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"assertEntityInstancePresentInArea")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void      \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed function ",(0,r.kt)("inlineCode",{parentName:"p"},"assertEntityPresent")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added argument ",(0,r.kt)("inlineCode",{parentName:"li"},"searchDistance"))))))),(0,r.kt)("h3",{id:"changed-module-minecraftserver110-beta"},(0,r.kt)("strong",{parentName:"h3"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"strong"},"@minecraft/server@1.1.0-beta"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockAreaSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed function ",(0,r.kt)("inlineCode",{parentName:"li"},"constructor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed argument ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," type from ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"x: number, ")),(0,r.kt)("li",{parentName:"ul"},"Old Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"x: number, ")))),(0,r.kt)("li",{parentName:"ul"},"Changed argument ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," type from ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"y: number, ")),(0,r.kt)("li",{parentName:"ul"},"Old Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"y: number, ")))),(0,r.kt)("li",{parentName:"ul"},"Changed argument ",(0,r.kt)("inlineCode",{parentName:"li"},"z")," type from ",(0,r.kt)("inlineCode",{parentName:"li"},"int32")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"float"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"z: number")),(0,r.kt)("li",{parentName:"ul"},"Old Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"z: number")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"ContainerSlot")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"clearItem")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"clearLore")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"playAnimation")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"playAnimation(animationName: string, options?: PlayAnimationOptions): void      \n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemStack")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property ",(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"clearLore")),(0,r.kt)("li",{parentName:"ul"},"Changed function ",(0,r.kt)("inlineCode",{parentName:"li"},"constructor"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed return type from ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemStack")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemStack")," (throws exceptions)"),(0,r.kt)("li",{parentName:"ul"},"Changed argument ",(0,r.kt)("inlineCode",{parentName:"li"},"itemType")," type from ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemType")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"ItemType | string"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"itemType: ItemType | string, ")),(0,r.kt)("li",{parentName:"ul"},"Old Signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"itemType: ItemType, ")))),(0,r.kt)("li",{parentName:"ul"},"Removed argument ",(0,r.kt)("inlineCode",{parentName:"li"},"data")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"playAnimation")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"playAnimation(animationName: string, options?: PlayAnimationOptions): void      \n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added interface ",(0,r.kt)("inlineCode",{parentName:"p"},"PlayAnimationOptions")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface PlayAnimationOptions {\n  blendOutTime?: number;\n  controller?: string;\n  nextState?: string;\n  stopExpression?: string;\n}\n")))))}c.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),i=a(85162);const o={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],m={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0}}]);