"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88552,43115,13099,86513],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),s=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(m.Provider,{value:a},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),y=r,c=g["".concat(m,".").concat(y)]||g[y]||u[y]||l;return t?n.createElement(c,i(i({ref:a},p),{},{components:t})):n.createElement(c,i({ref:a},p))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},18228:(e,a,t)=>{t.d(a,{A:()=>w});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),m=t(57485),s=t(31682),p=t(89466);function g(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function u(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??g(t);return function(e){const a=(0,s.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function y(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function c(e){let{queryString:a=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,m.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function d(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=u(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!y({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:l}))),[m,s]=c({queryString:t,groupId:n}),[g,d]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,p.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),N=(()=>{const e=m??g;return y({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{N&&o(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!y({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),d(e)}),[s,d,l]),tabValues:l}}var N=t(92303);const h={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function f(e){let{className:a,block:t,selectedValue:o,selectValue:m,tabValues:s,rightElement:p}=e;const g=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),y=e=>{const a=e.currentTarget,t=g.indexOf(a),n=s[t].value;n!==o&&(u(a),m(n))},c=e=>{let a=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const t=g.indexOf(e.currentTarget)+1;a=g[t]??g[0];break}case"ArrowLeft":{const t=g.indexOf(e.currentTarget)-1;a=g[t]??g[g.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},s.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>g.push(e),onKeyDown:c,onClick:y},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===a}),style:{wordBreak:"keep-all"}}),t??a)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:a,children:t,selectedValue:n}=e;if(a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=d(e);return r.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(b,(0,n.A)({},e,a)))}function w(e){const a=(0,N.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},47990:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),l=t(86994),i=(t(60146),t(88502));const o={},m=void 0,s={unversionedId:"changelog_source/stable/1.20/40/tech",id:"changelog_source/stable/1.20/40/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/40/tech.mdx",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech",permalink:"/en/docs/changelog_source/stable/1.20/40/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},g=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Trade Tables</strong>",id:"trade-tables",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Entity Components</strong>",id:"entity-components",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],u={toc:g},y="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"updated-add-on-template-packs"},(0,r.yg)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated Add-On templates for 1.20.40 with new resources, behaviors, and documentation are available to download at\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MCAddonPacks"},"aka.ms/MCAddonPacks"))),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Sounds definition file sound","_","definitions.json will no longer crash the game if the wrong json type is used for a specific sound definition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168913"},"MCPE-168913"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Re-entering a world no longer breaks command autocomplete after a command using "@e',"[","type=item","]",'" was used (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164734"},"MCPE-164734"),")"),(0,r.yg)("li",{parentName:"ul"},'The /damage command with the "override" cause now causes damage through post hit invulnerability (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160290"},"MCPE-160290"),")"),(0,r.yg)("li",{parentName:"ul"},"The recipe command color has been changed to white instead of blue (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173362"},"MCPE-173362"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a new \u201c",(0,r.yg)("em",{parentName:"li"},"query.is","_","in","_","lava"),"\u201d Query Function to Molang, to know if a mob is currently in Lava")),(0,r.yg)("h2",{id:"molang"},(0,r.yg)("strong",{parentName:"h2"},"Molang")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Molang updated to version 1.20.40 which replaces "block',"_",'property" and "has',"_","block","_",'property" with "block',"_",'state" and "has',"_","block","_",'state"',(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.20.40 or higher")))),(0,r.yg)("h2",{id:"trade-tables"},(0,r.yg)("strong",{parentName:"h2"},"Trade Tables")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Trade items now have a "filters" property to determine if a trade should be considered'),(0,r.yg)("li",{parentName:"ul"},'Trade items no longer support the "biome" property to check villager biome types, the "is',"_","mark","_",'variant" filter can be used in the "filters" property instead to check the villager biome type')),(0,r.yg)("h2",{id:"script-api"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)(i.default,{techSapi:(0,r.yg)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'"minecraft:transformation" now prevents blocks from being transformed past the 30x30x30 pixel limit and "minecraft:unit',"_",'cube" from being translated or scaled. Invalid block will instead display the "update" block (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173799"},"MCPE-173799"),")"),(0,r.yg)("li",{parentName:"ul"},'Chest blocks, Trapped Chest blocks, Ender Chest blocks, and Stonecutter blocks now use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Added a content error when attempting to load a damage sensor with an invalid "cause" value'),(0,r.yg)("li",{parentName:"ul"},'Allow single value parsing for "minecraft:icon" item component'),(0,r.yg)("li",{parentName:"ul"},"The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using \u201cminecraft:dash\u201d"),(0,r.yg)("li",{parentName:"ul"},'Deprecated "minecraft:weapon" component starting in version 1.20.40'),(0,r.yg)("li",{parentName:"ul"},'Deprecated "minecraft:on',"_",'use" component starting in version 1.20.40'),(0,r.yg)("li",{parentName:"ul"},'Deprecated "minecraft:on',"_","use","_",'on" component starting in version 1.20.40')),(0,r.yg)("h2",{id:"entity-components"},(0,r.yg)("strong",{parentName:"h2"},"Entity Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Unlocked \u201cbehavior.random","_","search","_","and","_","dig\u201d for creators to use"),(0,r.yg)("li",{parentName:"ul"},'"target',"_",'blocks" field added. List of blocks that the mob can dig on. Default if "target',"_","blocks\" isn't added is Dirt, Grass, Podzol, Dirt with Roots, Moss, Mud, and Muddy Mangrove Roots"),(0,r.yg)("li",{parentName:"ul"},'"item',"_",'table" field added. Path to a loot table that specifies what the mob can dig up. "item',"_",'table" takes precedence over "items"'),(0,r.yg)("li",{parentName:"ul"},'Content errors added if the behavior has trouble reading or finding "item',"_",'table" and if unable to get an item from "items"'),(0,r.yg)("li",{parentName:"ul"},"'on","_","item","_","found' event now fires on item found AND digging finished. Before the event firing caused the digging to stop early"),(0,r.yg)("li",{parentName:"ul"},"The \u201c",(0,r.yg)("em",{parentName:"li"},"behavior.random","_","look","_","around","_","and","_","sit"),"\u201d now has the field \u201c",(0,r.yg)("em",{parentName:"li"},"continue","_","sitting","_","on","_","reload"),"\u201d exposed for Creators to use. This is how the Camel stays sitting on reload"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.is","_","scenting"),"\u201d renamed to generic \u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag","_","1"),"\u201d and released to creators"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.is","_","rising"),"\u201d renamed to generic \u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag","_","2"),"\u201d and released to creators"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.is","_","feeling","_","happy"),"\u201d renamed to generic \u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag","_","3"),"\u201d and released to creators"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag 1"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.yg)("em",{parentName:"li"},"query.timer","_","flag","_","1"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag 2"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.yg)("em",{parentName:"li"},"query.timer","_","flag","_","2"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise"),(0,r.yg)("li",{parentName:"ul"},"\u201c",(0,r.yg)("em",{parentName:"li"},"behavior.timer","_","flag 3"),"\u201d: Fires an event when this behavior starts, then waits for a duration before stopping. When stopping due to that timeout or due to being interrupted by another behavior, fires another event.\xa0",(0,r.yg)("em",{parentName:"li"},"query.timer","_","flag","_","3"),"\xa0will return 1.0 on both the client and server when this behavior is running, and 0.0 otherwise  ")),(0,r.yg)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.yg)("h2",{id:"script-api-1"},(0,r.yg)("strong",{parentName:"h2"},"Script API")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getWeather")),(0,r.yg)("li",{parentName:"ul"},"Added the\xa0",(0,r.yg)("em",{parentName:"li"},"chat(message: string)"),"\xa0method"),(0,r.yg)("li",{parentName:"ul"},"Changed\xa0",(0,r.yg)("em",{parentName:"li"},"ItemTypes.get"),"\xa0to return\xa0",(0,r.yg)("em",{parentName:"li"},"ItemType | undefined")),(0,r.yg)("li",{parentName:"ul"},"Changed\xa0",(0,r.yg)("em",{parentName:"li"},"source"),"\xa0on\xa0",(0,r.yg)("em",{parentName:"li"},"ItemDefinitionTriggeredAfterEvent"),"\xa0to be optional"),(0,r.yg)("li",{parentName:"ul"},"Added the following methods to\xa0",(0,r.yg)("em",{parentName:"li"},"Player"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"above(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"below(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"north(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"east(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"south(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"west(steps?: number): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"offset(offset: Vector3): Block | undefined;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"center(): Vector3;")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"bottomCenter(): Vector3;")),(0,r.yg)("li",{parentName:"ul"},"Made getItemStack function return ItemStack or undefined"))),(0,r.yg)("li",{parentName:"ul"},"BlockStates",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Made get function return BlockStateType or undefined"))),(0,r.yg)("li",{parentName:"ul"},"getSculkSpreader",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Made\xa0",(0,r.yg)("em",{parentName:"li"},"getSculkSpreader"),"\xa0return SculkSpreader or undefined"))),(0,r.yg)("li",{parentName:"ul"},"Updated\xa0",(0,r.yg)("em",{parentName:"li"},"ExplosionAfterEvent"),"\xa0and\xa0",(0,r.yg)("em",{parentName:"li"},"ExplosionBeforeEvent"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"getUpdatedBlocks()"),"\xa0will now return\xa0",(0,r.yg)("em",{parentName:"li"},"Block","[","]")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"setUpdatesBlocks(blocks: Block","[","]",")"),"\xa0now takes in a\xa0",(0,r.yg)("em",{parentName:"li"},"Block","[","]")))),(0,r.yg)("li",{parentName:"ul"},"Added the following methods to\xa0",(0,r.yg)("em",{parentName:"li"},"Player"),"\xa0playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;"),(0,r.yg)("li",{parentName:"ul"},"Dynamic Properties",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Property registration is no longer required and\xa0",(0,r.yg)("em",{parentName:"li"},"propertyRegistry"),"\xa0has been removed from the\xa0",(0,r.yg)("em",{parentName:"li"},"worldInitialize"),"\xa0event"),(0,r.yg)("li",{parentName:"ul"},"Removed limits on the count and size of properties that can set on an entity or the world"),(0,r.yg)("li",{parentName:"ul"},"Default values have been removed.\xa0",(0,r.yg)("em",{parentName:"li"},"getProperty"),"\xa0will now always return undefined for unset properties"),(0,r.yg)("li",{parentName:"ul"},"String dynamic property values are now restricted to a length of 32767 bytes"))),(0,r.yg)("li",{parentName:"ul"},"Dynamic Properties",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Removed function\xa0",(0,r.yg)("em",{parentName:"li"},"removeDynamicProperty"),"\xa0- Please use\xa0",(0,r.yg)("em",{parentName:"li"},"setDynamicProperty"),"\xa0with a value of\xa0",(0,r.yg)("em",{parentName:"li"},"undefined"),"\xa0to remove a property"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getDynamicPropertyIds"),"\xa0- Returns an array of all dynamic property ids on an entity/world used by the behavior pack"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount"),"\xa0- Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"clearDynamicProperties"),"\xa0- Removes all dynamic properties added by this behavior pack from an entity/world"))),(0,r.yg)("li",{parentName:"ul"},"Dynamic Properties",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Dynamic property numbers are now stored with double precision (64 bits)"))),(0,r.yg)("li",{parentName:"ul"},"Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events"),(0,r.yg)("li",{parentName:"ul"},"Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0",(0,r.yg)("em",{parentName:"li"},"matches"),"\xa0function called on an entity, which takes in\xa0",(0,r.yg)("em",{parentName:"li"},"EntityQueryOptions")," and returns true if the entity matches and false otherwise"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerLeaveBeforeEvent"),"\xa0- This event fires when a player leaves the server, before the Player object is removed")))}c.isMDXComponent=!0},86994:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.20/40/tech_sapi_stable",id:"changelog_source/stable/1.20/40/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Released\xa0World.getMoonPhase,\xa0MoonPhase, and\xa0MoonPhaseCount\xa0v1.6.0",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/40/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech_sapi_stable",permalink:"/en/docs/changelog_source/stable/1.20/40/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},m={},s=[],p={toc:s},g="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Released\xa0",(0,r.yg)("em",{parentName:"li"},"World.getMoonPhase"),",\xa0",(0,r.yg)("em",{parentName:"li"},"MoonPhase"),", and\xa0",(0,r.yg)("em",{parentName:"li"},"MoonPhaseCount"),"\xa0v1.6.0"),(0,r.yg)("li",{parentName:"ul"},"Camera APIs moved from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Camera\xa0",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"setCamera"),(0,r.yg)("li",{parentName:"ul"},"fade"),(0,r.yg)("li",{parentName:"ul"},"clear"))),(0,r.yg)("li",{parentName:"ul"},"EasingType"),(0,r.yg)("li",{parentName:"ul"},"CameraSetRotationOptions"),(0,r.yg)("li",{parentName:"ul"},"CameraSetFacingOptions"),(0,r.yg)("li",{parentName:"ul"},"CameraSetPostionOptions"),(0,r.yg)("li",{parentName:"ul"},"CameraDefaultOptions"),(0,r.yg)("li",{parentName:"ul"},"CameraSetLocationOptions"))),(0,r.yg)("li",{parentName:"ul"},"Changed the names of the\xa0",(0,r.yg)("em",{parentName:"li"},"CameraSetOptions")," options to not include the word 'Script'"),(0,r.yg)("li",{parentName:"ul"},"Released Entity.is","*"," APIs from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isSleeping")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isSneaking")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isSprinting")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isSwimming")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isClimbing")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isOnGround")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isInWater")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isFalling")))),(0,r.yg)("li",{parentName:"ul"},"Released Player level & XP APIs from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"addLevels")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"addExperience")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"level")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"getTotalXP")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"xpEarnedAtCurrentLevel")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"totalXpNeededForNextLevel")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"resetLevel")))),(0,r.yg)("li",{parentName:"ul"},"Released Player.is","*"," APIs from ",(0,r.yg)("em",{parentName:"li"},"beta"),"\xa0to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isEmoting")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isGliding")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isJumping")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"isFlying")))),(0,r.yg)("li",{parentName:"ul"},"Updated all methods besides show on\xa0",(0,r.yg)("em",{parentName:"li"},"ActionFormData"),",\xa0",(0,r.yg)("em",{parentName:"li"},"MessageFormData"),", and\xa0",(0,r.yg)("em",{parentName:"li"},"ModalFormData"),"\xa0to be callable in read-only mode"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"BlockInventoryComponent"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"container member variable now correctly reflects it can be a Container or undefined"))),(0,r.yg)("li",{parentName:"ul"},"Fixed a versioning bug preventing @minecraft/server-ui module from working with @minecraft/server above version ",(0,r.yg)("em",{parentName:"li"},"1.2.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"WeatherType"),"\xa0moved to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved function\xa0",(0,r.yg)("em",{parentName:"li"},"setWeather"),"\xa0to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"entityRemove"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"entityRemove"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityRemovedAfterEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityRemoveAfterEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityRemovedBeforeEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityRemoveBeforeEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"entityLoad"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityLoadAfterEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntityLoadAfterEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"entitySpawn"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved enum\xa0",(0,r.yg)("em",{parentName:"li"},"EntityInitializationCause"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntitySpawnAfterEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"EntitySpawnAfterEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"playerBreakBlock"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"playerBreakBlock"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockAfterEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerBreakBlockBeforeEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Moved event/property\xa0",(0,r.yg)("em",{parentName:"li"},"playerPlaceBlock"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEvent"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerPlaceBlockAfterEventSignal"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved class\xa0",(0,r.yg)("em",{parentName:"li"},"BlockEventSignalOptions"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Move\xa0",(0,r.yg)("em",{parentName:"li"},"isAir(): boolean"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Move\xa0",(0,r.yg)("em",{parentName:"li"},"isLiquid(): boolean"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"amount"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"keepOnDeath: boolean"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"lockMode: ItemLockMode"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"nameTag?: string"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"clone(): ItemStack"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"getTags(): string","[","]"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"hasTag(tag: string): boolean"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"setCanDestroy(blockIdentifiers?: string","[","]","): void"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"getCanDestroy(): string","[","]"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"setCanPlaceOn(blockIdentifiers?: string","[","]","): void"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"getCanPlaceOn(): string","[","]"),"\xa0from ",(0,r.yg)("em",{parentName:"li"},"beta")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved function\xa0",(0,r.yg)("em",{parentName:"li"},"getProperty"),"\xa0to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved function\xa0",(0,r.yg)("em",{parentName:"li"},"resetProperty"),"\xa0to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Moved function\xa0",(0,r.yg)("em",{parentName:"li"},"setProperty")," to ",(0,r.yg)("em",{parentName:"li"},"1.6.0")))),(0,r.yg)("li",{parentName:"ul"},"Moved\xa0",(0,r.yg)("em",{parentName:"li"},"getRotation"),"\xa0from\xa0",(0,r.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Move\xa0",(0,r.yg)("em",{parentName:"li"},"setRotation"),"\xa0from\xa0",(0,r.yg)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,r.yg)("em",{parentName:"li"},"1.6.0")),(0,r.yg)("li",{parentName:"ul"},"Released ",(0,r.yg)("em",{parentName:"li"},"PlayerDimensionChangeAfterEvent")," from ",(0,r.yg)("em",{parentName:"li"},"beta")," to\xa0",(0,r.yg)("em",{parentName:"li"},"1.6.0"))))}u.isMDXComponent=!0},60146:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.20/40/tech_sapi_stable_diff",id:"changelog_source/stable/1.20/40/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.20/40/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/stable/1.20/40",slug:"/changelog_source/stable/1.20/40/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/stable/1.20/40/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/40/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},m={},s=[],p={toc:s},g="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},88502:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=t(58168),r=(t(96540),t(15680)),l=t(18228),i=t(19365);const o={},m=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},g=[],u={toc:g},y="wrapper";function c(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Update Description",mdxType:"TabItem"},t.techSapi),(0,r.yg)(i.A,{value:"API Changelog",mdxType:"TabItem"},t.techSapiChangelog)))}c.isMDXComponent=!0}}]);