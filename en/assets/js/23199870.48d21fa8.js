"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6894,81791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),p=o,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),l=n(16550),s=n(91980),d=n(67392),u=n(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,d]=h({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,u.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??c;return p({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var k=n(72389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=d[n].value;a!==l&&(c(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(y,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},52137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));n(9071);const r={},i=void 0,l={unversionedId:"changelog_source/stable/1.18/10/tech",id:"changelog_source/stable/1.18/10/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.18/10/tech.mdx",sourceDirName:"changelog_source/stable/1.18/10",slug:"/changelog_source/stable/1.18/10/tech",permalink:"/en/docs/changelog_source/stable/1.18/10/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/10/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Performance / Stability Fixes</strong>",id:"performance--stability-fixes",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data-Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>Data-Driven Entities</strong>",id:"data-driven-entities",level:2},{value:"<strong>Data-Driven Items</strong>",id:"data-driven-items",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Block Components (Experimental)</strong>",id:"block-components-experimental",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>mojang-minecraft module</strong>",id:"mojang-minecraft-module",level:2},{value:"<strong>mojang-gametest module</strong>",id:"mojang-gametest-module",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"updated-add-on-template-packs"},(0,o.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.18.10 with new resources, behaviors, and documentation, are available to download at ",(0,o.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddonPacks"))),(0,o.kt)("h2",{id:"performance--stability-fixes"},(0,o.kt)("strong",{parentName:"h2"},"Performance / Stability Fixes")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when setting the width or height of a mob's hitbox to a negative value"),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where ticking areas would occasionally skip a tick"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug that caused performance drops when using the '/tag' command (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139609"},"MCPE-139609"),")"),(0,o.kt)("li",{parentName:"ul"},"The Content Log History panel is now accessible from the second player in split-screen without crashing the game"),(0,o.kt)("li",{parentName:"ul"},'Fixed a crash that could occur when an animation controller referenced itself as one of its "animations"'),(0,o.kt)("li",{parentName:"ul"},"The game no longer crashes when nesting schedule commands in functions (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-144730"},"MCPE-144730"),")"),(0,o.kt)("li",{parentName:"ul"},"Added log messages to help identify the cause of the BDS crash (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-12751"},"BDS-12751"),")"),(0,o.kt)("li",{parentName:"ul"},"Improved performance of RandomStrollGoal"),(0,o.kt)("li",{parentName:"ul"},"Reduced memory and load times for ticking areas")),(0,o.kt)("h2",{id:"general"},(0,o.kt)("strong",{parentName:"h2"},"General")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android\u2019s target API has been updated to API 30 for Google Play Store"),(0,o.kt)("li",{parentName:"ul"},'Reapplied changes to use "allowlist" instead of "whitelist" (',(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-14119"},"BDS-14119"),")")),(0,o.kt)("h2",{id:"commands"},(0,o.kt)("strong",{parentName:"h2"},"Commands")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added '/loot' command - Drops the given loot table into the world"),(0,o.kt)("li",{parentName:"ul"},"Added a new '/damage' command to allow players to deal damage to entities"),(0,o.kt)("li",{parentName:"ul"},"Placing Cocoa Beans with '/setblock' or '/fill' commands no longer results in an error"),(0,o.kt)("li",{parentName:"ul"},"The '/spreadplayers' command no longer hangs when given a high spread range (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137793"},"MCPE-137793"),")"),(0,o.kt)("li",{parentName:"ul"},"Order of function calls triggered by '/execute' inside a function are now consistent (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-111849"},"MCPE-111849"),")"),(0,o.kt)("li",{parentName:"ul"},"The '/effect' command no longer has the redundant argument 'empty' (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62903"},"MCPE-62903"),")"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug that caused the '/kill' command to not kill entities with the Absorption effect (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142763"},"MCPE-142763"),")")),(0,o.kt)("h2",{id:"data-driven-blocks"},(0,o.kt)("strong",{parentName:"h2"},"Data-Driven Blocks")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added support for blocks having the same name, as long as they belong to different namespaces"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation for several components:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BlockExplosionResistance"),(0,o.kt)("li",{parentName:"ul"},"BlockFrictionComponent"),(0,o.kt)("li",{parentName:"ul"},"BlockMaterialInstances"),(0,o.kt)("li",{parentName:"ul"},"BlockBreathabilityComponent"),(0,o.kt)("li",{parentName:"ul"},"CraftingTableComponent"),(0,o.kt)("li",{parentName:"ul"},"BlockLightFilterComponent"))),(0,o.kt)("li",{parentName:"ul"},'Changed BlockLightDescription JSON name from "minecraft:block',"_","light","_",'absorption" to "Minecraft:block',"_","light","_",'filter" and field name from "block',"_","light","_",'absorption" to "block',"_","light","_",'filter"')),(0,o.kt)("h2",{id:"data-driven-entities"},(0,o.kt)("strong",{parentName:"h2"},"Data-Driven Entities")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The random chance for a wild adult Ocelot to spawn with two children is now handled by components added in the entity JSON definition"),(0,o.kt)("li",{parentName:"ul"},'Fixed many missing "Description" entries in the documentation'),(0,o.kt)("li",{parentName:"ul"},'Added AI Goals documentation for "behavior.move',"_","to","_",'liquid" and "behavior.move',"_","to","_",'block"'),(0,o.kt)("li",{parentName:"ul"},'Added AI Goals documentation for missing parameters of "behavior.tempt", "behavior.rise',"_","to","_","liquid","_",'level", and "behavior.random',"_",'fly"'),(0,o.kt)("li",{parentName:"ul"},'Added Components documentation for missing parameters of "movement.sway"'),(0,o.kt)("li",{parentName:"ul"},"Fixed some typos and inconsistencies in the Entities documentation")),(0,o.kt)("h2",{id:"data-driven-items"},(0,o.kt)("strong",{parentName:"h2"},"Data-Driven Items")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added nine new shapeless recipe JSON files, replacing hard-coded Smithing Table crafting recipes"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation for BlockCollisionComponentDescription"),(0,o.kt)("li",{parentName:"ul"},'Changed BlockCollisionComponentDescription JSON name from "entity',"_",'collision" to "block',"_",'collision"'),(0,o.kt)("li",{parentName:"ul"},"Updated documentation for FuelItemComponent"),(0,o.kt)("li",{parentName:"ul"},"Renamed DamageableItemComponent to DurabilityItemComponent"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation for BlockRaycastComponent"),(0,o.kt)("li",{parentName:"ul"},"Updated documentation for FoodItemComponent"),(0,o.kt)("li",{parentName:"ul"},"Changed SaturationModifier in FoodItemComponent to take a float instead of a string"),(0,o.kt)("li",{parentName:"ul"},"Fixed custom food behaviours not being replicated to guest clients")),(0,o.kt)("h2",{id:"mobs"},(0,o.kt)("strong",{parentName:"h2"},"Mobs")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'The "controlling',"_",'seat" field on "minecraft:rideable" now works as intended for both Boats and Horses'),(0,o.kt)("li",{parentName:"ul"},"Mobs riding other mobs and pathing towards a target will no longer wiggle back and forth along their path"),(0,o.kt)("li",{parentName:"ul"},"Match tool conditions now work on mobs (Experimental)"),(0,o.kt)("li",{parentName:"ul"},"JumpToBlockGoal can no longer be used when the mob is in water"),(0,o.kt)("li",{parentName:"ul"},"JumpToBlockGoal now correctly searches the same distance upwards and downwards when looking for jumpblockcandidates, allowing a mobs that use the goal to jump equally high as low"),(0,o.kt)("li",{parentName:"ul"},"Fixed an issue where animation controller events defined in the default state would get skipped if the controller immediately transitioned to another state (This is a versioned change that will only be applied for animation controllers starting at format","_","version 1.18.10)")),(0,o.kt)("h2",{id:"animation"},(0,o.kt)("strong",{parentName:"h2"},"Animation")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Fixed an issue where animation events, sound effect events, and particle events would not trigger if the event time specified was equal to the total "animation',"_",'length"'),(0,o.kt)("li",{parentName:"ul"},'Fixed an issue where event times were not considered within the animation length calculation that happens when "animation',"_",'length" is not explicitly specified')),(0,o.kt)("h2",{id:"molang"},(0,o.kt)("strong",{parentName:"h2"},"Molang")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed arrow operator to return 0 if the left side is not a valid entity or item, rather than causing the entire expression to return 0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, if\xa0bis not valid\xa0variable.a = variable.b-",">","variable.c\xa0will now assign 0 to\xa0variable.a"),(0,o.kt)("li",{parentName:"ul"},"This is not a\xa0Molang Versioned Changebecause no known content is currently using the arrow operator"))),(0,o.kt)("li",{parentName:"ul"},"Add non-experimental is","_","name","_","any, is","_","item","_","name","_","any, and is","_","owner","_","identifier","_","any queries"),(0,o.kt)("li",{parentName:"ul"},"Fixed relative","_","block","_","has","_","all","_","tags block","_","neighbor","_","has","_","all","_","tags and biome","_","has","_","all","_","tags queries to require all tags rather than just any tags"),(0,o.kt)("li",{parentName:"ul"},"Fixed nested conditional (ternary) operator parsing to go right-to-left instead of left-to-right",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.18.10 or higher"),(0,o.kt)("li",{parentName:"ul"},"Previously nested conditional expressions like\xa0'A?B:C?D:E'would evaluate as\xa0' (A?B:C)?D:E', now they evaluate as\xa0'A?B:(C?D:E'"))),(0,o.kt)("li",{parentName:"ul"},"Access of missing public variables on other entities will return 0.0 and not cause an error"),(0,o.kt)("li",{parentName:"ul"},"Fix loading of public variables containing capital letters to not cause an error"),(0,o.kt)("li",{parentName:"ul"},'Added "slot.equippable" added as a slot option for WearableItemComponent and Molang'),(0,o.kt)("li",{parentName:"ul"},"Added alland query.any to check if a value matches all or any of the following values"),(0,o.kt)("li",{parentName:"ul"},"Added in","_","rangeto check if a value is in the (inclusive) range between a min and max value")),(0,o.kt)("h2",{id:"block-components-experimental"},(0,o.kt)("strong",{parentName:"h2"},"Block Components (Experimental)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed BlockPartVisibilityComponent for multiplayer by adding network save/load tags (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-141908"},"MCPE-141908"),")")),(0,o.kt)("h2",{id:"gametest-framework-experimental"},(0,o.kt)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,o.kt)("p",null,"There are some important breaking changes in APIs creators should be aware of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Renamed\xa0mojang-minecraft:Worldobject to\xa0mojang-minecraft:world\xa0",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In practice, this means \u201cWorld.getDimension\u201d code should now read \u201cworld.getDimension\u201d"))),(0,o.kt)("li",{parentName:"ul"},"Removed mojang-minecraft:Commands- Instead, we are adding runCommand methods on dimension, entity, and player",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In practice, this means that \u201cCommands.run(\u201csay Hello World\u201d, dimension)\u201d should now read \u201cdimension.runCommand(\u201csay Hello World\u201d)\u201d")))),(0,o.kt)("p",null,"Other major API adds and updates:"),(0,o.kt)("h2",{id:"mojang-minecraft-module"},(0,o.kt)("strong",{parentName:"h2"},"mojang-minecraft module")),(0,o.kt)("p",null,"World"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replaced function\xa0getPlayers() : Player","[","]"," with function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players in the dimension. Optionally,\xa0options\xa0can be used to filter the result")),(0,o.kt)("p",null,"World.events"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added\xa0blockBreak and\xa0blockPlace events, which are called when a player breaks or places a block in the world"),(0,o.kt)("li",{parentName:"ul"},"Added optional argument to\xa0events.addEffect. This argument will limit the callback to only fire for specific entities (see EntityEventOptions)"),(0,o.kt)("li",{parentName:"ul"},"Item use events:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added event events.beforeItemUse - Fires before an item is used. Can be canceled"),(0,o.kt)("li",{parentName:"ul"},"Added event events.itemUse - Fires when an item is used and the before event is not cancelled"),(0,o.kt)("li",{parentName:"ul"},"Added event events.beforeItemUseOn - Fires before an item is used on a block. Can be cancelled"),(0,o.kt)("li",{parentName:"ul"},"Added event events.itemUseOn - Fires when an item is used on a block and the before event is not cancelled  "))),(0,o.kt)("li",{parentName:"ul"},"Note that the following definition events only function with data driven items created as part of the Holiday Creator Features experiment:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Added event events.beforeItemDefinitionEvent - Fires before an Item definition event is processed. Can be canceled"),(0,o.kt)("li",{parentName:"ul"},"Added event events.itemDefinitionEvent - Fires when the Item definition event is processed and the before event is not canceled"),(0,o.kt)("li",{parentName:"ul"},"Added method triggerEvent(eventName : String) - Triggers an event on the ItemStack if an event with the given eventName, as defined in the Items JSON file")))),(0,o.kt)("p",null,"BlockBreakEvent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added property\xa0brokenBlockPermutationto indicate which kind of block was broken")),(0,o.kt)("p",null,"Entity (note that derived types Player and mojang-gametest:SimulatedPlayer also added these APIs as well)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added\xa0runCommandmethod to run a command as an entity"),(0,o.kt)("li",{parentName:"ul"},"Added\xa0dimensionproperty to get the dimension the entity is in"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0addTag(tag: string): bool- Adds a tag to this entity. Returns true if the tag does not already exist"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0hasTag(tag: string): bool- Returns true if the tag exists on this entity"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0removeTag(tag: string): bool- Removes a tag from this entity. Returns true if the tag was removed"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0getTags(): string","[","]","\xa0- Returns all tags on this entity"),(0,o.kt)("li",{parentName:"ul"},"Added target property to Entity. targetrepresents the Entity that this Entity is currently targeting, for purposes such as AI targeting"),(0,o.kt)("li",{parentName:"ul"},"Added function getEntitiesFromViewVector(options: EntityRaycastOptions): Entity","[","]"," - Gets all entities that intersects the ray from the entities view vector"),(0,o.kt)("li",{parentName:"ul"},"Added function getBlockFromViewVector(options: BlockRaycastOptions): Block \u2013 Gets the first block that intersects the ray from the entities view vector"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0setVelocity(velocity: Vector): bool- Sets the velocity of this entity"),(0,o.kt)("li",{parentName:"ul"},"Added property\xa0viewVector: Vector- Represents the direction that the entity is looking, as a vector"),(0,o.kt)("li",{parentName:"ul"},"Added property\xa0headLocation: Location- Represents the location of the head of the entity"),(0,o.kt)("li",{parentName:"ul"},"Added property\xa0bodyRotation: number- Represents the body rotation of the entity as a float (in degrees)"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0teleport(location: Location, dimension: Dimension, xRotation (optional): float, yRotation (optional): float)"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0teleportFacing(location: Location, dimension: Dimension, facingLocation: Location)")),(0,o.kt)("p",null,"Player"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added method startItemCooldown(itemCategory : string, durationTicks : int) - Starts or resets a cooldown on an item category (e.g., ender","_","pearl) for the given duration in ticks"),(0,o.kt)("li",{parentName:"ul"},"Added method getItemCooldown(itemCategory : string) - Returns the remaining duration in ticks that this player has of the given item category. If no cooldown is present, returns 0")),(0,o.kt)("p",null,"ItemCooldownComponent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Added ItemCooldownComponent (item.getComponent("minecraft:cooldown"))'),(0,o.kt)("li",{parentName:"ul"},"Read-only property cooldownCategory : string - Represents the cooldown category of this item."),(0,o.kt)("li",{parentName:"ul"},"Read-only property cooldownTicks : int - Represents the cooldown time in ticks for this item if cooldown is enabled"),(0,o.kt)("li",{parentName:"ul"},"method startCooldown(player : Player) - Starts or resets a cooldown for this item on the given player if cooldown is enabled for this item")),(0,o.kt)("p",null,"ItemType"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Removed\xa0getName\xa0method and added read-only property\xa0.id")),(0,o.kt)("p",null,"Dimension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added\xa0runCommandmethod to run a command in a dimension"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0getEntitiesFromRay(pos: Location, direction: Location, options: EntityRaycastOptions): Entity","[","]","- Gets all entities that intersects the ray starting at a location which extends in direction"),(0,o.kt)("li",{parentName:"ul"},"Added function getBlockFromRay(pos: Location, direction: Location, options: BlockRaycastOptions) : Block - Gets the first block that intersects the ray starting at a location which extends in direction"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players. Optionally,\xa0options\xa0can be used to filter the result"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0getEntities(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all entities in the dimension. Optionally,\xa0options\xa0can be used to filter the result"),(0,o.kt)("li",{parentName:"ul"},"Updated\xa0spawnEntityto take a\xa0Location\xa0or a\xa0BlockLocation")),(0,o.kt)("p",null,"EntityQueryOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added class\xa0EntityQueryOptions- Provides additional filtering options when calling\xa0getEntities\xa0and\xa0getPlayers")),(0,o.kt)("p",null,"EntityQueryScoreOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added class\xa0EntityQueryScoreOptions- Used with\xa0EntityQueryOptions\xa0to provide scoreboard filtering")),(0,o.kt)("p",null,"EntityEventOptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Used to filter events that fire on entities to restrict the callback to only certain ones."),(0,o.kt)("li",{parentName:"ul"},"Property\xa0entity: Entity","[","]"," - If specified, will restrict to just this entity"),(0,o.kt)("li",{parentName:"ul"},"Property\xa0entityTypes: string","[","]"," - If specified, will restrict to entities with the specified type (e.g.,\xa0minecraft:creeper)")),(0,o.kt)("p",null,"BlockExplodeEvent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Renamed destroyedBlock to block")),(0,o.kt)("h2",{id:"mojang-gametest-module"},(0,o.kt)("strong",{parentName:"h2"},"mojang-gametest module")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added\xa0registerAsync\xa0method to register and properly track the state of GameTests using\xa0async\xa0functions")),(0,o.kt)("p",null,"Test"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added\xa0getDimensionto get the dimension in which the test is being ran"),(0,o.kt)("li",{parentName:"ul"},"Added\xa0gameMode: GameModeparameter to\xa0spawnSimulatedPlayer\xa0method")),(0,o.kt)("p",null,"ScriptSimulatedPlayer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added function\xa0giveItem(itemStack: ItemStack, selectSlot: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Added function\xa0setItem(itemStack:ItemStack, slot: number, selectSlot: boolean)"),(0,o.kt)("li",{parentName:"ul"},"Renamed\xa0destroyBlockto\xa0breakBlock"),(0,o.kt)("li",{parentName:"ul"},"Renamed\xa0stopDestroyingBlockto\xa0stopBreakingBlock"),(0,o.kt)("li",{parentName:"ul"},"Removed selectSlot method"),(0,o.kt)("li",{parentName:"ul"},"Added property selectedSlot: int - Gets or sets the currently selected hotbar slot for the player")))}c.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162);const l={},s=void 0,d={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,o.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}p.isMDXComponent=!0}}]);