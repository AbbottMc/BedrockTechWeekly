"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[10831,81791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(72389);const f="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:m},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},79321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(9071);const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.17/10/tech",id:"changelog_source/stable/1.17/10/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.17/10/tech.mdx",sourceDirName:"changelog_source/stable/1.17/10",slug:"/changelog_source/stable/1.17/10/tech",permalink:"/en/docs/changelog_source/stable/1.17/10/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/10/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Dedicated Server</strong>",id:"dedicated-server",level:2},{value:"<strong>NPC Dialogue</strong>",id:"npc-dialogue",level:2},{value:"<strong>Data-Driven Mobs</strong>",id:"data-driven-mobs",level:2},{value:"<strong>Data-Driven Items</strong>",id:"data-driven-items",level:2},{value:"<strong>Data-Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>MoLang</strong>",id:"molang",level:2},{value:"<strong>Chunk Loading</strong>",id:"chunk-loading",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2}],c={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-add-on-template-packs"},(0,r.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.17.10 are available for download with new resources, behaviors, and documentation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Resource Pack Template: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/resourcepacktemplate"},"aka.ms/resourcepacktemplate")),(0,r.kt)("li",{parentName:"ul"},"Behavior Pack Template (Includes documentation): ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/behaviorpacktemplate"},"aka.ms/behaviorpacktemplate"))))),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added better error handling for JSON parsing. Also added several new content errors for item parsing as well as for loot tables")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players are given a content error when custom recipes are invalid"),(0,r.kt)("li",{parentName:"ul"},'Renamed "minecraft:scaffolding',"_",'climber" to "minecraft:block',"_",'climber". It now processes climbing both Scaffolding and Powder Snow')),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loot chests with Seed=0 now correctly randomize if placed on the same coordinates. Note that Pick Blocking a Vanilla loot chest before opening it will now result in identical loot in each copy unless the seed is set to 0 in the NBT")),(0,r.kt)("h2",{id:"dedicated-server"},(0,r.kt)("strong",{parentName:"h2"},"Dedicated Server")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added back missing symbols for Bedrock Dedicated Server on Linux (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/BDS-13482"},"BDS-13482"),")")),(0,r.kt)("h2",{id:"npc-dialogue"},(0,r.kt)("strong",{parentName:"h2"},"NPC Dialogue")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content creators can now create multi-page dialogues with branching narrative for NPCs using the '/dialogue' command and dialogue JSON files")),(0,r.kt)("h2",{id:"data-driven-mobs"},(0,r.kt)("strong",{parentName:"h2"},"Data-Driven Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Ender Dragon rendering and animations are now fully data-driven"),(0,r.kt)("li",{parentName:"ul"},"The Ender Crystal rendering and animations are now fully data-driven"),(0,r.kt)("li",{parentName:"ul"},"The Horse rendering and animations are now fully data-driven"),(0,r.kt)("li",{parentName:"ul"},"This work supports all Horse variants (Horse, Mule, Donkey, Zombie Horse, Skeleton Horse) and all Horse versions including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"v1 (engine version 1.2.5 and earlier)"),(0,r.kt)("li",{parentName:"ul"},"v2 (engine version 1.2.6 to 1.17.0)"),(0,r.kt)("li",{parentName:"ul"},"v3 (engine version 1.17.10 and onward). This will be a cleaner version of the v2 model, with less confusing bone naming")))),(0,r.kt)("h2",{id:"data-driven-items"},(0,r.kt)("strong",{parentName:"h2"},"Data-Driven Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated documentation for 'DisplayNameItemComponent'")),(0,r.kt)("h2",{id:"data-driven-blocks"},(0,r.kt)("strong",{parentName:"h2"},"Data-Driven Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated documentation for 'BlockUnwalkableComponent'")),(0,r.kt)("h2",{id:"actors"},(0,r.kt)("strong",{parentName:"h2"},"Actors")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incoming client-sync properties for newly seen types will properly register with client-side Actor Property Manager groups")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"MoLang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"query.wing',"_","flap","_",'position" now works with the Ender Dragon'),(0,r.kt)("li",{parentName:"ul"},'Added "query.show',"_","bottom\" - a query for determining whether or not the entity's bottom is rendered"),(0,r.kt)("li",{parentName:"ul"},'Added "query.death',"_",'time" - a query for determining the elapsed ticks since a mob started dying'),(0,r.kt)("li",{parentName:"ul"},'Added "math.min',"_",'angle" - a math expression for minimizing the angle magnitude (in degrees) into the range ',"[","-180, 180","]"),(0,r.kt)("li",{parentName:"ul"},"Fixed experimental 'query.target' to work on client-side queries")),(0,r.kt)("h2",{id:"chunk-loading"},(0,r.kt)("strong",{parentName:"h2"},"Chunk Loading")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limits writing of chunks unless necessary. Chunks upgraded from older formats will not automatically save when loaded, but when modified (Through blocks or actors, for example) they will be marked for saving")),(0,r.kt)("h2",{id:"gametest-framework-experimental"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated the '/clearall' command to also clear tests outside of loaded areas"),(0,r.kt)("li",{parentName:"ul"},"Dimension",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getEntitiesAtBlockLocation(location : BlockLocation) : Entity","[","]"," - Returns an array of all entities at the given block location"),(0,r.kt)("li",{parentName:"ul"},"spawnEntity(identifier : String, location : BlockLocation) : Entity - Spawns an entity with the given identifier at the given block location"),(0,r.kt)("li",{parentName:"ul"},"[","Removed","]"," function getName()"),(0,r.kt)("li",{parentName:"ul"},"property id : String - Gets the entity's identifier"),(0,r.kt)("li",{parentName:"ul"},"property nameTag : String - Gets or sets the entity's name tag"))),(0,r.kt)("li",{parentName:"ul"},"Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"property name : String - Gets the player's name"))),(0,r.kt)("li",{parentName:"ul"},"method getPlayers() : Player","[","]"," - Returns all players in the server"),(0,r.kt)("li",{parentName:"ul"},"Updates to how blocks are handled in APIs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BlockType, BlockPermutation, and Block instances replace BlockState-based updating"))),(0,r.kt)("li",{parentName:"ul"},"Exposed chest block component and Container"),(0,r.kt)("li",{parentName:"ul"},"Added location and velocity read-only properties to Entity"),(0,r.kt)("li",{parentName:"ul"},"function createExplosion(location : Location, radius : number, explosionOptions : ExplosionOptions) - Creates an explosion",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ExplosionOptions : class - Provides additional configuration parameters for createExplosion"))),(0,r.kt)("li",{parentName:"ul"},"method triggerEvent(eventName : string) - Triggers an event on an entity"),(0,r.kt)("li",{parentName:"ul"},"Added 'thenExecuteFor' to 'GameTestSequence', which repeatedly calls the callback for the specified number of ticks"),(0,r.kt)("li",{parentName:"ul"},"Events",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed 'World.event.weatherChanged' to 'World.event.changeWeather'"),(0,r.kt)("li",{parentName:"ul"},"Added event 'World.event.addEffect' - Fires when an effect is applied to an entity."),(0,r.kt)("li",{parentName:"ul"},"Added event 'World.event.createEntity' - Fires when an entity is added to the world."),(0,r.kt)("li",{parentName:"ul"},"Removed function 'World.addEventListener'"),(0,r.kt)("li",{parentName:"ul"},"Changed function 'getDuration()' to property 'duration'"),(0,r.kt)("li",{parentName:"ul"},"Changed function 'getAmplifier()' to property 'amplifier'"),(0,r.kt)("li",{parentName:"ul"},"Added property 'displayName' - Gets the display name of the effect")))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),o=a(85162);const i={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0}}]);