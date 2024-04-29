"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[62707,29933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),m=a(67392),p=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,m]=h({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??d;return c({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),k(e)}),[m,k,l]),tabValues:l}}var g=a(72389);const f="tabList__CuJ",N="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:m}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=p.indexOf(t),n=m[a].value;n!==o&&(d(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:u},i,{className:(0,l.Z)("tabs__item",N,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},83801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));a(47153);const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.19/60/tech",id:"changelog_source/stable/1.19/60/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.19/60/tech.mdx",sourceDirName:"changelog_source/stable/1.19/60",slug:"/changelog_source/stable/1.19/60/tech",permalink:"/docs/changelog_source/stable/1.19/60/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/60/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Performance / Stability</strong>",id:"performance--stability",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Recipes</strong>",id:"recipes",level:2},{value:"<strong>Particles</strong>",id:"particles",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Commands (Experimental)</strong>",id:"commands-experimental",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Actor Filters</strong>",id:"actor-filters",level:2},{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Particle Effects</strong>",id:"particle-effects",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>API (Experimental)</strong>",id:"api-experimental",level:2},{value:"<strong>Entities/Players/SimulatedPlayer: Fire, levels, experience, and more</strong>",id:"entitiesplayerssimulatedplayer-fire-levels-experience-and-more",level:2},{value:"<strong>Blocks &amp; Redstone</strong>",id:"blocks--redstone",level:2},{value:"<strong>Fill Block APIs</strong>",id:"fill-block-apis",level:2},{value:"<strong>Command to script message passing</strong>",id:"command-to-script-message-passing",level:2},{value:"<strong>Item Stacks</strong>",id:"item-stacks",level:2},{value:"<strong>Refactored and Improved Player events</strong>",id:"refactored-and-improved-player-events",level:2},{value:"<strong>Say/Tell/sendMessage APIs</strong>",id:"saytellsendmessage-apis",level:2},{value:"<strong>Scoreboard get/set value APIs</strong>",id:"scoreboard-getset-value-apis",level:2},{value:"<strong>EntityHurtEvent updates</strong>",id:"entityhurtevent-updates",level:2}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-add-on-template-packs"},(0,r.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Add-On templates for1.19.60 with new resources, behaviors, and documentation are available to download at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddonPacks",(0,r.kt)("br",{parentName:"a"})))),(0,r.kt)("h2",{id:"performance--stability"},(0,r.kt)("strong",{parentName:"h2"},"Performance / Stability")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when teleporting players to other dimensions using commands (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164940"},"MCPE-164940"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when using the \u201cinstant","_","despawn\u201d component"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when loading actors")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a content error for the condition that custom blocks with permutations or properties fail to load in non-experimental worlds for JSON formats 1.19.60 and onwards"),(0,r.kt)("li",{parentName:"ul"},"Ensure Block Permutation Conditions cannot have side effects (i.e. 'math.random', 'math.random","_","integer', and variable assignment)"),(0,r.kt)("li",{parentName:"ul"},"Released ",(0,r.kt)("em",{parentName:"li"},"BlockSelectionBoxComponent")," outside of experimental toggle in json formats 1.19.60 and higher"),(0,r.kt)("li",{parentName:"ul"},"Released ",(0,r.kt)("em",{parentName:"li"},"BlockDisplayNameComponent")," outside of experimental toggle in json formats 1.19.60 and higher"),(0,r.kt)("li",{parentName:"ul"},"Ensure Block Permutation Conditions can only use ",(0,r.kt)("em",{parentName:"li"},"'query.block","_","property'")," Molang Query"),(0,r.kt)("li",{parentName:"ul"},"Fixed albedo color arrays in texture sets for custom blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163622"},"MCPE-163622"),")")),(0,r.kt)("h2",{id:"recipes"},(0,r.kt)("strong",{parentName:"h2"},"Recipes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed and converted all Smithing Table recipes to use the newly introduced \u201cminecraft:recipe","_","smithing","_","transform\u201d recipe format")),(0,r.kt)("h2",{id:"particles"},(0,r.kt)("strong",{parentName:"h2"},"Particles")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated particles documentation with descriptions of new materials and included example particles in the example resource pack")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Executing the \u2018/say\u2019 command via the new execute syntax now displays the entity\u2019s name that produced the message (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161450"},"MCPE-161450"),")"),(0,r.kt)("li",{parentName:"ul"},'When teleporting a group of leashed mobs using "/tp @e" a far enough distance away to unleash them, all mobs now get properly unleashed (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159617"},"MCPE-159617"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing players to not wake up when teleported while sleeping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162346"},"MCPE-162346"),")"),(0,r.kt)("li",{parentName:"ul"},"Running \u2018/execute if|unless score\u2019 on a player that doesn\u2019t have a score set will now return false (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156279"},"MCPE-156279"),")"),(0,r.kt)("li",{parentName:"ul"},"\u2018/execute if|unless score\u2019 no longer accepts selectors that can return multiple entities (ie. @e, @a)")),(0,r.kt)("h2",{id:"commands-experimental"},(0,r.kt)("strong",{parentName:"h2"},"Commands (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the @initiator selector would not work with the Upcoming Creator Features experiment enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164727"},"MCPE-164727"),")")),(0,r.kt)("h2",{id:"components"},(0,r.kt)("strong",{parentName:"h2"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released ",(0,r.kt)("em",{parentName:"li"},"BlockPlacementFilterComponent")," outside of experimental toggle in JSON formats 1.19.60 and higher"),(0,r.kt)("li",{parentName:"ul"},'Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters'),(0,r.kt)("li",{parentName:"ul"},"Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack"),(0,r.kt)("li",{parentName:"ul"},"Projectiles that teleport their owner will no longer do so while their owner is sleeping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")"),(0,r.kt)("li",{parentName:"ul"},'Added "inventory" as a possible "domain" value for the "has',"_","equipment\" filter, which allows to check for items stored in the actor's inventory"),(0,r.kt)("li",{parentName:"ul"},'Added an "equip',"_","item","_",'slot" field to the "interact" component',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If set, an item held by the player will be equipped to the specified slot upon successful interaction"),(0,r.kt)("li",{parentName:"ul"},"If an item is already present in the specified slot, it will be moved to the player's inventory"),(0,r.kt)("li",{parentName:"ul"},"Equipping an item removes it from the player's inventory, unless the player is in Creative Mode"))),(0,r.kt)("li",{parentName:"ul"},"Players now respond correctly to speed changes using the ",(0,r.kt)("em",{parentName:"li"},"minecraft:movement")," component")),(0,r.kt)("h2",{id:"actor-filters"},(0,r.kt)("strong",{parentName:"h2"},"Actor Filters")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Created new actor filters "on',"_",'fire", "on',"_","hot","_",'block", "target',"_",'distance", and "actor',"_",'health"')),(0,r.kt)("h2",{id:"ai-goals"},(0,r.kt)("strong",{parentName:"h2"},"AI Goals")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "celebrate',"_",'survive" AI behavior will now consider the highest rain passable block in addition to sky visibility before firing Fireworks'),(0,r.kt)("li",{parentName:"ul"},'The "move',"_",'outdoors" AI behavior will now consider the highest rain passable block in addition to sky visibility when searching for a place to consider as being outdoors'),(0,r.kt)("li",{parentName:"ul"},'Exposed new data parameters for the "trade',"_","with","_",'player" AI behavior to specify such things as the conditions that need to be met for the goal to start and the max distance the mob can be from its trading player before exiting the goal')),(0,r.kt)("h2",{id:"particle-effects"},(0,r.kt)("strong",{parentName:"h2"},"Particle Effects")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug causing particles with collision and "expire',"_","on","_",'contact" to not expire when collided'),(0,r.kt)("li",{parentName:"ul"},"Added support for mixed color blending on particle effects")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new Molang ",(0,r.kt)("em",{parentName:"li"},"query.is","_","local","_","player")," to allow detection of the current player"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.19.60 or higher")))),(0,r.kt)("h2",{id:"api-experimental"},(0,r.kt)("strong",{parentName:"h2"},"API (Experimental)")),(0,r.kt)("h2",{id:"entitiesplayerssimulatedplayer-fire-levels-experience-and-more"},(0,r.kt)("strong",{parentName:"h2"},"Entities/Players/SimulatedPlayer: Fire, levels, experience, and more")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added method\xa0_setOnFire(seconds: number, useEffects?: boolean = true): boolean)_which sets an entity on fire (if it is not in water or rain)"),(0,r.kt)("li",{parentName:"ul"},"Added method\xa0",(0,r.kt)("em",{parentName:"li"},"extinguishFire(useEffects?: boolean = true): void")," which extinguishes the fire"),(0,r.kt)("li",{parentName:"ul"},"If an entity is on fire, you can call\xa0",(0,r.kt)("em",{parentName:"li"},"getComponent('minecraft:onfire')_on it, which returns an object of type\xa0_EntityOnFireComponent"),", which has a property\xa0",(0,r.kt)("em",{parentName:"li"},"onFireTicksRemaining")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0_viewDirection_would return the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0_getEntitiesFromViewDirection_would use the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0_getBlockFromViewDirection_would use the direction from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0_headLocation_would return the location from the previous tick"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the ",(0,r.kt)("em",{parentName:"li"},"getEffect")," method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)"),(0,r.kt)("li",{parentName:"ul"},"Added method\xa0_getEffects_which returns an array of all active effects on the entity"))),(0,r.kt)("li",{parentName:"ul"},"EntityHealthComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where health could be modified on dead entities (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130687"},"MCPE-130687"),")"))),(0,r.kt)("li",{parentName:"ul"},"Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"addLevels(amount: number): number")," - Adds/Removes level to/from the player and returns the current level of the player"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"addExperience(amount: number): number")," - Adds/Removes experience to/from the player and returns the current experience of the player"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"resetLevel(): void")," - Resets the level of the player"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getTotalXp(): number")," - Gets the total experience of the player"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property ",(0,r.kt)("em",{parentName:"li"},"level")," - Gets the level of the player"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property ",(0,r.kt)("em",{parentName:"li"},"xpEarnedAtCurrentLevel")," - Gets the experience earned at the current level of the player"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property ",(0,r.kt)("em",{parentName:"li"},"totalXpNeededForNextLevel")," - Gets the total experience required for the current level of the player"))),(0,r.kt)("li",{parentName:"ul"},"Simulated Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"isSprinting"),"-"," Used to get or set if the sprinting state of the simulated player is set to true"))),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"respawn()"),"-"," Respawns the SimulatedPlayer if it's dead"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"disconnect()"),"-"," Removes the SimulatedPlayer from the world")),(0,r.kt)("h2",{id:"blocks--redstone"},(0,r.kt)("strong",{parentName:"h2"},"Blocks & Redstone")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getRedstonePower(): number"),"-"," Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined")),(0,r.kt)("h2",{id:"fill-block-apis"},(0,r.kt)("strong",{parentName:"h2"},"Fill Block APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"dimension.fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fills an area between ",(0,r.kt)("em",{parentName:"li"},"begin")," and ",(0,r.kt)("em",{parentName:"li"},"end")," with block of type ",(0,r.kt)("em",{parentName:"li"},"block"),". Returns number of blocks placed"))),(0,r.kt)("li",{parentName:"ul"},"Added new interface ",(0,r.kt)("em",{parentName:"li"},"BlockFillOptions")," with member ",(0,r.kt)("em",{parentName:"li"},"matchingBlock?: BlockPermutation | BlockType"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used with ",(0,r.kt)("em",{parentName:"li"},"fillBlocks")," to apply additional options, such as only filling blocks matching ",(0,r.kt)("em",{parentName:"li"},"matchingBlock"))))),(0,r.kt)("h2",{id:"command-to-script-message-passing"},(0,r.kt)("strong",{parentName:"h2"},"Command to script message passing")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the '/scriptevent' command as part of the Beta APIs experiment. This is what will trigger ",(0,r.kt)("em",{parentName:"li"},"events.scriptEventReceive")," events (see below)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Usage: /scriptevent \\<messsageId: string",">"," ","[","message: ???","]"),(0,r.kt)("li",{parentName:"ul"},'messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my',"_","scripts:spawn","_",'sheep")'),(0,r.kt)("li",{parentName:"ul"},"message is optional, with a max length of 256 characters"))),(0,r.kt)("li",{parentName:"ul"},"events.scriptEventReceive",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added system event\xa0",(0,r.kt)("em",{parentName:"li"},"events.scriptEventReceive")),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"id: String__","-")," The namespaced ID of the event"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0message: String- The content of the message the event was sent with"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"sourceBlock: Block"),"-"," The command block that triggered/executed the command call if applicable, otherwise undefined"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"sourceEntity: Entity"),"-"," The player/entity that executed the command call if applicable, otherwise undefined"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"initiator: Entity"),"-"," The player that caused an NPC to execute the command call if applicable, otherwise undefined"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"sourceType: MessageSourceType"),"-"," The type of source the event was triggered by"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"subscribe()_can filter by valid namespace string using the\xa0_ScriptEventMessageFilterOptions"),"\xa0class"))),(0,r.kt)("li",{parentName:"ul"},"ScriptEventMessageFilterOptions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"ScriptEventMessageFilterOptions")," class"),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"namespaces: string","[","]"),"-"," An array of namespaces to filter on")))),(0,r.kt)("h2",{id:"item-stacks"},(0,r.kt)("strong",{parentName:"h2"},"Item Stacks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ContainerSlot",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added class\xa0",(0,r.kt)("em",{parentName:"li"},"ContainerSlot"),"-"," Used to directly manipulate items stored within a container"),(0,r.kt)("li",{parentName:"ul"},"Renamed entity property\xa0",(0,r.kt)("em",{parentName:"li"},"viewVector_to\xa0_viewDirection"),"\xa0and now returns\xa0Vector3"),(0,r.kt)("li",{parentName:"ul"},"Renamed entity function\xa0g",(0,r.kt)("em",{parentName:"li"},"etEntitiesFromViewVector_to\xa0_getEntitiesFromViewDirection")),(0,r.kt)("li",{parentName:"ul"},"Renamed entity function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockFromViewVector_to\xa0_getBlockFromViewDirection")))),(0,r.kt)("li",{parentName:"ul"},"Container",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getSlot(slot: number): ContainerSlot"),"-"," Returns the slot at the given container slot index"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearItem(slot: number): void"),"-"," Clears the item at the given slot index"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearAll(): void"),"-"," Clears all items in the container"),(0,r.kt)("li",{parentName:"ul"},"Made the\xa0",(0,r.kt)("em",{parentName:"li"},"itemStack_argument of function\xa0_setItem"),"\xa0optional - If not provided, the slot is cleared"),(0,r.kt)("li",{parentName:"ul"},"Added event\xa0",(0,r.kt)("em",{parentName:"li"},"events.playerSpawn"),"-"," Fires when a player spawns in the world"),(0,r.kt)("li",{parentName:"ul"},"Renamed event\xa0",(0,r.kt)("em",{parentName:"li"},"events.entityCreate_to\xa0_world.events.entitySpawn"),". This event no longer fires for players")))),(0,r.kt)("h2",{id:"refactored-and-improved-player-events"},(0,r.kt)("strong",{parentName:"h2"},"Refactored and Improved Player events")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PlayerJoinEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"playerId"),"-"," The unique ID of the player that joined the world"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"playerName"),"-"," The name of the player that joined the world"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"player")))),(0,r.kt)("li",{parentName:"ul"},"PlayerLeaveEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"playerId"),"-"," The unique ID of the player that left the world")))),(0,r.kt)("h2",{id:"saytellsendmessage-apis"},(0,r.kt)("strong",{parentName:"h2"},"Say/Tell/sendMessage APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("em",{parentName:"li"},"IRawMessage")," to ",(0,r.kt)("em",{parentName:"li"},"RawMessage")," for naming consistency"),(0,r.kt)("li",{parentName:"ul"},"RawMessage",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed the signature of property\xa0withfrom\xa0",(0,r.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)","[","]","?")," \xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)?"))))),(0,r.kt)("h2",{id:"scoreboard-getset-value-apis"},(0,r.kt)("strong",{parentName:"h2"},"Scoreboard get/set value APIs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scoreboard",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, ScoreboardIdentity, Number)")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective, ScoreboardIdentity)")))),(0,r.kt)("li",{parentName:"ul"},"ScoreboardObjective",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"setScore(ScoreboardIdentity, Number)")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"getScore(ScoreboardIdentity)")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"removeParticipant(ScoreboardIdentity)")))),(0,r.kt)("li",{parentName:"ul"},"ScoreboardIdentity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, Number)")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective)")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"removeFromObjective(ScoreboardObjective)"))))),(0,r.kt)("h2",{id:"entityhurtevent-updates"},(0,r.kt)("strong",{parentName:"h2"},"EntityHurtEvent updates")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added read-only property ",(0,r.kt)("em",{parentName:"li"},"damageSource: EntityDamageSource")," - Gets information about the damage source"),(0,r.kt)("li",{parentName:"ul"},"EntityDamageSource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("em",{parentName:"li"},"cause: EntityDamageCause")," - Gets the damage cause"),(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("em",{parentName:"li"},"damagingEntity?: Entity")," - Gets the damaging Entity"),(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("em",{parentName:"li"},"damagingProjectile?: Entity")," - Gets the damaging projectile Entity"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"applyDamage(amount: number, source?: EntityDamageSource): boolean")," - Applies damage to the Entity and returns the result of the operation")))))}d.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(67294),l=a(3905),i=a(74866),o=a(85162);const s={},m=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[],c={toc:u};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(o.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);