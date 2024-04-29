"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68518,52674,38273,29933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),m=a(91980),s=a(67392),p=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,m._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[m,s]=k({queryString:a,groupId:n}),[u,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=m??u;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),N(e)}),[s,N,l]),tabValues:l}}var h=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:m,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==o&&(u(t),m(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:c},i,{className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},93177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(94424),i=(a(22830),a(47153));const o={},m=void 0,s={unversionedId:"changelog_source/stable/1.20/40/tech",id:"changelog_source/stable/1.20/40/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.20/40/tech.mdx",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech",permalink:"/docs/changelog_source/stable/1.20/40/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Trade Tables</strong>",id:"trade-tables",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Entity Components</strong>",id:"entity-components",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-add-on-template-packs"},(0,r.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.20.40 with new resources, behaviors, and documentation are available to download at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddonPacks"},"aka.ms/MCAddonPacks"))),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Sounds definition file sound","_","definitions.json will no longer crash the game if the wrong json type is used for a specific sound definition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168913"},"MCPE-168913"),")")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Re-entering a world no longer breaks command autocomplete after a command using "@e',"[","type=item","]",'" was used (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164734"},"MCPE-164734"),")"),(0,r.kt)("li",{parentName:"ul"},'The /damage command with the "override" cause now causes damage through post hit invulnerability (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160290"},"MCPE-160290"),")"),(0,r.kt)("li",{parentName:"ul"},"The recipe command color has been changed to white instead of blue (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173362"},"MCPE-173362"),")")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new \u201c",(0,r.kt)("em",{parentName:"li"},"query.is","_","in","_","lava"),"\u201d Query Function to Molang, to know if a mob is currently in Lava")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Molang updated to version 1.20.40 which replaces "block',"_",'property" and "has',"_","block","_",'property" with "block',"_",'state" and "has',"_","block","_",'state"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.20.40 or higher")))),(0,r.kt)("h2",{id:"trade-tables"},(0,r.kt)("strong",{parentName:"h2"},"Trade Tables")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Trade items now have a "filters" property to determine if a trade should be considered'),(0,r.kt)("li",{parentName:"ul"},'Trade items no longer support the "biome" property to check villager biome types, the "is',"_","mark","_",'variant" filter can be used in the "filters" property instead to check the villager biome type')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"minecraft:transformation" now prevents blocks from being transformed past the 30x30x30 pixel limit and "minecraft:unit',"_",'cube" from being translated or scaled. Invalid block will instead display the "update" block (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173799"},"MCPE-173799"),")"),(0,r.kt)("li",{parentName:"ul"},'Chest blocks, Trapped Chest blocks, Ender Chest blocks, and Stonecutter blocks now use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a content error when attempting to load a damage sensor with an invalid "cause" value'),(0,r.kt)("li",{parentName:"ul"},'Allow single value parsing for "minecraft:icon" item component'),(0,r.kt)("li",{parentName:"ul"},"The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using \u201cminecraft:dash\u201d"),(0,r.kt)("li",{parentName:"ul"},'Deprecated "minecraft:weapon" component starting in version 1.20.40'),(0,r.kt)("li",{parentName:"ul"},'Deprecated "minecraft:on',"_",'use" component starting in version 1.20.40'),(0,r.kt)("li",{parentName:"ul"},'Deprecated "minecraft:on',"_","use","_",'on" component starting in version 1.20.40')),(0,r.kt)("h2",{id:"entity-components"},(0,r.kt)("strong",{parentName:"h2"},"Entity Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unlocked \u201cbehavior.random","_","search","_","and","_","dig\u201d for creators to use"),(0,r.kt)("li",{parentName:"ul"},'"target',"_",'blocks" field added. List of blocks that the mob can dig on. Default if "target',"_","blocks\" isn't added is Dirt, Grass, Podzol, Dirt with Roots, Moss, Mud, and Muddy Mangrove Roots"),(0,r.kt)("li",{parentName:"ul"},'"item',"_",'table" field added. Path to a loot table that specifies what the mob can dig up. "item',"_",'table" takes precedence over "items"'),(0,r.kt)("li",{parentName:"ul"},'Content errors added if the behavior has trouble reading or finding "item',"_",'table" and if unable to get an item from "items"'),(0,r.kt)("li",{parentName:"ul"},"'on","_","item","_","found' event now fires on item found AND digging finished. Before the event firing caused the digging to stop early"),(0,r.kt)("li",{parentName:"ul"},"The \u201c",(0,r.kt)("em",{parentName:"li"},"behavior.random","_","look","_","around","_","and","_","sit"),"\u201d now has the field \u201c",(0,r.kt)("em",{parentName:"li"},"continue","_","sitting","_","on","_","reload"),"\u201d exposed for Creators to use. This is how the Camel stays sitting on reload"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.is","_","scenting"),"\u201d renamed to generic \u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","1"),"\u201d and released to creators"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.is","_","rising"),"\u201d renamed to generic \u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","2"),"\u201d and released to creators"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.is","_","feeling","_","happy"),"\u201d renamed to generic \u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag","_","3"),"\u201d and released to creators"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag 1"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.kt)("em",{parentName:"li"},"query.timer","_","flag","_","1"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag 2"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.kt)("em",{parentName:"li"},"query.timer","_","flag","_","2"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise"),(0,r.kt)("li",{parentName:"ul"},"\u201c",(0,r.kt)("em",{parentName:"li"},"behavior.timer","_","flag 3"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.kt)("em",{parentName:"li"},"query.timer","_","flag","_","3"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise  ")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api-1"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getWeather")),(0,r.kt)("li",{parentName:"ul"},"Added the\xa0",(0,r.kt)("em",{parentName:"li"},"chat(message: string)"),"\xa0method"),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"ItemTypes.get"),"\xa0to return\xa0",(0,r.kt)("em",{parentName:"li"},"ItemType | undefined")),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0",(0,r.kt)("em",{parentName:"li"},"source"),"\xa0on\xa0",(0,r.kt)("em",{parentName:"li"},"ItemDefinitionTriggeredAfterEvent"),"\xa0to be optional"),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to\xa0",(0,r.kt)("em",{parentName:"li"},"Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"above(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"below(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"north(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"east(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"south(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"west(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"offset(offset: Vector3): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"center(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bottomCenter(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},"Made getItemStack function return ItemStack or undefined"))),(0,r.kt)("li",{parentName:"ul"},"BlockStates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made get function return BlockStateType or undefined"))),(0,r.kt)("li",{parentName:"ul"},"getSculkSpreader",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made\xa0",(0,r.kt)("em",{parentName:"li"},"getSculkSpreader"),"\xa0return SculkSpreader or undefined"))),(0,r.kt)("li",{parentName:"ul"},"Updated\xa0",(0,r.kt)("em",{parentName:"li"},"ExplosionAfterEvent"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"ExplosionBeforeEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getUpdatedBlocks()"),"\xa0will now return\xa0",(0,r.kt)("em",{parentName:"li"},"Block","[","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"setUpdatesBlocks(blocks: Block","[","]",")"),"\xa0now takes in a\xa0",(0,r.kt)("em",{parentName:"li"},"Block","[","]")))),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to\xa0",(0,r.kt)("em",{parentName:"li"},"Player"),"\xa0playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Property registration is no longer required and\xa0",(0,r.kt)("em",{parentName:"li"},"propertyRegistry"),"\xa0has been removed from the\xa0",(0,r.kt)("em",{parentName:"li"},"worldInitialize"),"\xa0event"),(0,r.kt)("li",{parentName:"ul"},"Removed limits on the count and size of properties that can set on an entity or the world"),(0,r.kt)("li",{parentName:"ul"},"Default values have been removed.\xa0",(0,r.kt)("em",{parentName:"li"},"getProperty"),"\xa0will now always return undefined for unset properties"),(0,r.kt)("li",{parentName:"ul"},"String dynamic property values are now restricted to a length of 32767 bytes"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"removeDynamicProperty"),"\xa0- Please use\xa0",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty"),"\xa0with a value of\xa0",(0,r.kt)("em",{parentName:"li"},"undefined"),"\xa0to remove a property"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds"),"\xa0- Returns an array of all dynamic property ids on an entity/world used by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount"),"\xa0- Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties"),"\xa0- Removes all dynamic properties added by this behavior pack from an entity/world"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dynamic property numbers are now stored with double precision (64 bits)"))),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events"),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"matches"),"\xa0function called on an entity, which takes in\xa0",(0,r.kt)("em",{parentName:"li"},"EntityQueryOptions")," and returns true if the entity matches and false otherwise"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerLeaveBeforeEvent"),"\xa0- This event fires when a player leaves the server, before the Player object is removed")))}d.isMDXComponent=!0},94424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.20/40/tech_sapi_stable",id:"changelog_source/stable/1.20/40/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Released\xa0World.getMoonPhase,\xa0MoonPhase, and\xa0MoonPhaseCount\xa0v1.6.0",source:"@site/docs/changelog_source/stable/1.20/40/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech_sapi_stable",permalink:"/docs/changelog_source/stable/1.20/40/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},m={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released\xa0",(0,r.kt)("em",{parentName:"li"},"World.getMoonPhase"),",\xa0",(0,r.kt)("em",{parentName:"li"},"MoonPhase"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"MoonPhaseCount"),"\xa0v1.6.0"),(0,r.kt)("li",{parentName:"ul"},"Camera APIs moved from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Camera\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"setCamera"),(0,r.kt)("li",{parentName:"ul"},"fade"),(0,r.kt)("li",{parentName:"ul"},"clear"))),(0,r.kt)("li",{parentName:"ul"},"EasingType"),(0,r.kt)("li",{parentName:"ul"},"CameraSetRotationOptions"),(0,r.kt)("li",{parentName:"ul"},"CameraSetFacingOptions"),(0,r.kt)("li",{parentName:"ul"},"CameraSetPostionOptions"),(0,r.kt)("li",{parentName:"ul"},"CameraDefaultOptions"),(0,r.kt)("li",{parentName:"ul"},"CameraSetLocationOptions"))),(0,r.kt)("li",{parentName:"ul"},"Changed the names of the\xa0",(0,r.kt)("em",{parentName:"li"},"CameraSetOptions")," options to not include the word 'Script'"),(0,r.kt)("li",{parentName:"ul"},"Released Entity.is","*"," APIs from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isSleeping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isSneaking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isSprinting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isSwimming")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isClimbing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isOnGround")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isInWater")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isFalling")))),(0,r.kt)("li",{parentName:"ul"},"Released Player level & XP APIs from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"addLevels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"addExperience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getTotalXP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"xpEarnedAtCurrentLevel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"totalXpNeededForNextLevel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"resetLevel")))),(0,r.kt)("li",{parentName:"ul"},"Released Player.is","*"," APIs from ",(0,r.kt)("em",{parentName:"li"},"beta"),"\xa0to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isEmoting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isGliding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isJumping")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"isFlying")))),(0,r.kt)("li",{parentName:"ul"},"Updated all methods besides show on\xa0",(0,r.kt)("em",{parentName:"li"},"ActionFormData"),",\xa0",(0,r.kt)("em",{parentName:"li"},"MessageFormData"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"ModalFormData"),"\xa0to be callable in read-only mode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"BlockInventoryComponent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"container member variable now correctly reflects it can be a Container or undefined"))),(0,r.kt)("li",{parentName:"ul"},"Fixed a versioning bug preventing @minecraft/server-ui module from working with @minecraft/server above version ",(0,r.kt)("em",{parentName:"li"},"1.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"WeatherType"),"\xa0moved to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"setWeather"),"\xa0to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"entityRemove"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"entityRemove"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRemovedAfterEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRemoveAfterEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRemovedBeforeEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityRemoveBeforeEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"entityLoad"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityLoadAfterEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntityLoadAfterEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"entitySpawn"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved enum\xa0",(0,r.kt)("em",{parentName:"li"},"EntityInitializationCause"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntitySpawnAfterEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"EntitySpawnAfterEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"playerBreakBlock"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"playerBreakBlock"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.kt)("em",{parentName:"li"},"playerPlaceBlock"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,r.kt)("em",{parentName:"li"},"BlockEventSignalOptions"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Move\xa0",(0,r.kt)("em",{parentName:"li"},"isAir(): boolean"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Move\xa0",(0,r.kt)("em",{parentName:"li"},"isLiquid(): boolean"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"amount"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"keepOnDeath: boolean"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"lockMode: ItemLockMode"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"nameTag?: string"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"clone(): ItemStack"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getTags(): string","[","]"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"hasTag(tag: string): boolean"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setCanDestroy(blockIdentifiers?: string","[","]","): void"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getCanDestroy(): string","[","]"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setCanPlaceOn(blockIdentifiers?: string","[","]","): void"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getCanPlaceOn(): string","[","]"),"\xa0from ",(0,r.kt)("em",{parentName:"li"},"beta")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"getProperty"),"\xa0to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"resetProperty"),"\xa0to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Moved function\xa0",(0,r.kt)("em",{parentName:"li"},"setProperty")," to ",(0,r.kt)("em",{parentName:"li"},"1.6.0")))),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"getRotation"),"\xa0from\xa0",(0,r.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Move\xa0",(0,r.kt)("em",{parentName:"li"},"setRotation"),"\xa0from\xa0",(0,r.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.6.0")),(0,r.kt)("li",{parentName:"ul"},"Released ",(0,r.kt)("em",{parentName:"li"},"PlayerDimensionChangeAfterEvent")," from ",(0,r.kt)("em",{parentName:"li"},"beta")," to\xa0",(0,r.kt)("em",{parentName:"li"},"1.6.0"))))}u.isMDXComponent=!0},22830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.20/40/tech_sapi_stable_diff",id:"changelog_source/stable/1.20/40/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/stable/1.20/40/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech_sapi_stable_diff",permalink:"/docs/changelog_source/stable/1.20/40/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},m={},s=[],p={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>m,metadata:()=>p,toc:()=>c});var n=a(87462),r=a(67294),l=a(3905),i=a(74866),o=a(85162);const m={},s=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],d={toc:c};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(o.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(r.Fragment,null,a.techSapi)))}k.isMDXComponent=!0}}]);