"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99296,21032],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>p});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,p=d["".concat(s,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=p({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??d;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),g=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(m(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:g},i,{className:(0,o.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(v,(0,a.A)({},e,t)))}function w(e){const t=(0,y.A)();return r.createElement(N,(0,a.A)({key:String(t)},e))}},64880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));n(57350);const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.18/10/20/tech",id:"changelog_source/preview/1.18/10/20/tech",title:"tech",description:"Add-ons and Scripting",source:"@site/docs/changelog_source/preview/1.18/10/20/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/20",slug:"/changelog_source/preview/1.18/10/20/tech",permalink:"/docs/changelog_source/preview/1.18/10/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Add-ons and Scripting</strong>",id:"add-ons-and-scripting",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data-Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>Data-Driven Entities</strong>",id:"data-driven-entities",level:2},{value:"<strong>Data-Driven Items</strong>",id:"data-driven-items",level:2},{value:"<strong>Feature Placement</strong>",id:"feature-placement",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Block Components</strong>",id:"block-components",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"add-ons-and-scripting"},(0,r.yg)("strong",{parentName:"h2"},"Add-ons and Scripting")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed custom food behaviours not being replicated to guest clients")),(0,r.yg)("h2",{id:"animation"},(0,r.yg)("strong",{parentName:"h2"},"Animation")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed a crash that could occur when an animation controller referenced itself as one of its "animations"')),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The '/spreadplayers' command no longer hangs when given a high spread range (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137793"},"MCPE-137793"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that caused performance drops when using the '/tag' command (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139609"},"MCPE-139609"),")")),(0,r.yg)("h2",{id:"data-driven-blocks"},(0,r.yg)("strong",{parentName:"h2"},"Data-Driven Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockExplosionResistance"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockFrictionComponent"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockMaterialInstances"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockBreathabilityComponent"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for CraftingTableComponent"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockLightFilterComponent"),(0,r.yg)("li",{parentName:"ul"},'Changed BlockLightDescription JSON name from "minecraft:block',"_","light","_",'absorption" to "Minecraft:block',"_","light","_",'filter" and field name from "block',"_","light","_",'absorption" to "block',"_","light","_",'filter"')),(0,r.yg)("h2",{id:"data-driven-entities"},(0,r.yg)("strong",{parentName:"h2"},"Data-Driven Entities")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed many missing "Description" entries in the documentation'),(0,r.yg)("li",{parentName:"ul"},'Added AI Goals documentation for "behavior.move',"_","to","_",'liquid" and "behavior.move',"_","to","_",'block"'),(0,r.yg)("li",{parentName:"ul"},'Added AI Goals documentation for missing parameters of "behavior.tempt", "behavior.rise',"_","to","_","liquid","_",'level", and "behavior.random',"_",'fly"'),(0,r.yg)("li",{parentName:"ul"},'Added Components documentation for missing parameters of "movement.sway"'),(0,r.yg)("li",{parentName:"ul"},"Fixed some typos and inconsistencies in the Entities documentation")),(0,r.yg)("h2",{id:"data-driven-items"},(0,r.yg)("strong",{parentName:"h2"},"Data-Driven Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockCollisionComponentDescription"),(0,r.yg)("li",{parentName:"ul"},'Changed BlockCollisionComponentDescription JSON name from "entity',"_",'collision" to "block',"_",'collision"'),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for FuelItemComponent"),(0,r.yg)("li",{parentName:"ul"},"Renamed DamageableItemComponent to DurabilityItemComponent"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for BlockRaycastComponent"),(0,r.yg)("li",{parentName:"ul"},"Updated documentation for FoodItemComponent"),(0,r.yg)("li",{parentName:"ul"},"Changed SaturationModifier in FoodItemComponent to take a float instead of a string")),(0,r.yg)("h2",{id:"feature-placement"},(0,r.yg)("strong",{parentName:"h2"},"Feature Placement")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Optimization of geode feature placement. Reduces the compute cost of geode feature placement")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The "controlling',"_",'seat" field on "minecraft:rideable" now works as intended for both Boats and Horses'),(0,r.yg)("li",{parentName:"ul"},"Mobs riding other mobs and pathing towards a target will no longer wiggle back and forth along their path"),(0,r.yg)("li",{parentName:"ul"},"Match tool conditions now work on mobs (Experimental)")),(0,r.yg)("h2",{id:"molang"},(0,r.yg)("strong",{parentName:"h2"},"Molang")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed arrow operator to return 0 if the left side is not a valid entity or item, rather than causing the entire expression to return 0",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"For example, if\xa0bis not valid\xa0variable.a = variable.b-",">","variable.c\xa0will now assign 0 to\xa0variable.a"),(0,r.yg)("li",{parentName:"ul"},"This is not a\xa0Molang Versioned Changebecause no known content is currently using the arrow operator")))),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when setting the width or height of a mob's hitbox to a negative value"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where ticking areas would occasionally skip a tick (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119312"},"MCPE-119312"),")"),(0,r.yg)("li",{parentName:"ul"},"The Content Log History panel is now accessible from the second player in split-screen without crashing the game")),(0,r.yg)("h1",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,r.yg)("h2",{id:"block-components"},(0,r.yg)("strong",{parentName:"h2"},"Block Components")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed BlockPartVisibilityComponent for multiplayer by adding network save/load tags (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-141908"},"MCPE-141908"),")")),(0,r.yg)("h2",{id:"gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.yg)("p",null,"There are some important breaking changes in APIs creators should be aware of:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Renamed\xa0mojang-minecraft:Worldobject to\xa0mojang-minecraft:world\xa0(World\xa0still exists but is the type instead of the instance of the world)",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"In practice, this means \u201cWorld.getDimension\u201d code should now read \u201cworld.getDimension\u201d"))),(0,r.yg)("li",{parentName:"ul"},"Removed mojang-minecraft:Commands- Instead, we are adding runCommand methods on dimension, entity, and player",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"In practice, this means that \u201cCommands.run(\u201csay Hello World\u201d, dimension)\u201d should now read \u201cdimension.runCommand(\u201csay Hello World\u201d)\u201d")))),(0,r.yg)("p",null,"Many exciting new API adds, as well:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"mojang-minecraft:ItemStack",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Item use events:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added event World.event.beforeItemUse - Fires before an item is used. Can be cancelled"),(0,r.yg)("li",{parentName:"ul"},"Added event World.event.itemUse - Fires when an item is used and the before event is not cancelled"),(0,r.yg)("li",{parentName:"ul"},"Added event World.event.beforeItemUseOn - Fires before an item is used on a block. Can be cancelled"),(0,r.yg)("li",{parentName:"ul"},"Added event World.event.itemUseOn - Fires when an item is used on a block and the before event is not cancelled"))),(0,r.yg)("li",{parentName:"ul"},"Note that the following definition events only function with data driven items created as part of the Holiday Creator Features experiment:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added event World.event.beforeItemDefinitionEvent - Fires before an Item definition event is processed. Can be cancelled"),(0,r.yg)("li",{parentName:"ul"},"Added event World.event.itemDefinitionEvent - Fires when the Item definition event is processed and the before event is not cancelled"),(0,r.yg)("li",{parentName:"ul"},"Added method triggerEvent(eventName : String) - Triggers an event on the ItemStack if an event with the given eventName, as defined in the Items JSON file"))),(0,r.yg)("li",{parentName:"ul"},"mojang-minecraft:Entity",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added\xa0runCommandmethod to run a command as an entity"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0dimensionproperty to get the dimension the entity is in"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0addTag(tag: string): bool- Adds a tag to this entity. Returns true if the tag does not already exist"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0hasTag(tag: string): bool- Returns true if the tag exists on this entity"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0removeTag(tag: string): bool- Removes a tag from this entity. Returns true if the tag was removed"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0getTags(): string","[","]","\xa0- Returns all tags on this entity"),(0,r.yg)("li",{parentName:"ul"},"Added target property to Entity.\xa0targetrepresents the Entity that this Entity is currently targeting, for purposes such as AI targeting"),(0,r.yg)("li",{parentName:"ul"},"Added function getEntitiesFromViewVector(options: EntityRaycastOptions): Entity","[","]","`"," - Gets all entities that intersects the ray from the entities view vector"),(0,r.yg)("li",{parentName:"ul"},"Added function getBlockFromViewVector(options: BlockRaycastOptions): Block \u2013 Gets the first block that intersects the ray from the entities view vector"))),(0,r.yg)("li",{parentName:"ul"},"mojang-minecraft:Dimension",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added\xa0runCommandmethod to run a command in a dimension"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0getEntitiesFromRay(pos: Location, direction: Location, options: EntityRaycastOptions): Entity","[","]","- Gets all entities that intersects the ray starting at a location which extends in direction"),(0,r.yg)("li",{parentName:"ul"},"Added function getBlockFromRay(pos: Location, direction: Location, options: BlockRaycastOptions) : Block - Gets the first block that intersects the ray starting at a location which extends in direction"))),(0,r.yg)("li",{parentName:"ul"},"mojang-gametest:Test",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added\xa0getDimensionto get the dimension in which the test is being ran"))),(0,r.yg)("li",{parentName:"ul"},"mojang-gametest:ScriptSimulatedPlayer",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0giveItem(itemStack: ItemStack, selectSlot: boolean)"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0setItem(itemStack: ItemStack, selectSlot: boolean, slot: number)"),(0,r.yg)("li",{parentName:"ul"},"GameTestExtensions - Removed function\xa0giveItem")))))))}m.isMDXComponent=!0},57350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=n(58168),r=n(96540),o=n(15680),i=n(18228),l=n(19365);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],g={toc:m},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.yg)(i.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.yg)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0}}]);