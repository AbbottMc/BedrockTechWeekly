"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27954,64137,14068],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),s=a(91980),p=a(67392),m=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=h({queryString:a,groupId:n}),[u,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??u;return g({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),d(e)}),[p,d,l]),tabValues:l}}var k=a(72389);const N="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=m.indexOf(t),n=p[a].value;n!==o&&(u(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:g,onClick:c},i,{className:(0,l.Z)("tabs__item",b,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=d(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",N)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},56814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.11/0/gameplay",id:"changelog_source/stable/1.11/0/gameplay",title:"gameplay",description:"Posted April 23, 2019",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.11/0/gameplay.mdx",sourceDirName:"changelog_source/stable/1.11/0",slug:"/changelog_source/stable/1.11/0/gameplay",permalink:"/en/docs/changelog_source/stable/1.11/0/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.11/0/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>Village:</strong>",id:"village",level:2},{value:"<strong>Pillage:</strong>",id:"pillage",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Posted April 23, 2019"),(0,r.kt)("h2",{id:"village"},(0,r.kt)("strong",{parentName:"h2"},"Village:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Updated Villages")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Many new building types and enhanced village generation"),(0,r.kt)("li",{parentName:"ul"},"Biome specific architecture for plains, desert, savannah, and taiga"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New Villagers")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Villagers have new clothing to indicate their level, profession, and biome"),(0,r.kt)("li",{parentName:"ul"},"Added Mason and Nitwit villagers"),(0,r.kt)("li",{parentName:"ul"},"Villagers now sleep in beds"),(0,r.kt)("li",{parentName:"ul"},"Villagers now visit their job sites during the day and go home at night"),(0,r.kt)("li",{parentName:"ul"},"Greatly improved villager pathfinding"),(0,r.kt)("li",{parentName:"ul"},"Villagers in existing worlds will convert to new villagers (if they are not part of a template world)"),(0,r.kt)("li",{parentName:"ul"},"Zombie Villagers now have biome-specific and profession skin layers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Village Job Sites")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Villagers can now take on a new profession when near a job site block"),(0,r.kt)("li",{parentName:"ul"},"While villagers claim these sites, they also have functions for players"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cartography Table"),"\xa0","-","\xa0Provides an easier way to copy and enlarge maps. Maps can be locked by using glass panes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Grindstone")," -\xa0Used to repair weapons and tools, plus disenchanting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Barrel")," ","-","\xa0Stores items like a chest but can still be opened with blocks on top of it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smoker")," -\xa0Cooks food much faster than a furnace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blast Furnace")," ","-","\xa0Faster ore smelting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Composter")," -\xa0Adding enough crops will produce bone meal"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stonecutter")," -\xa0Easy crafting for stone and cobblestone items"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Smithing Table and Fletching Table")," ","-","\xa0Functionality coming in a later update"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Villager Trading")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added brand new villager trades (169044)"),(0,r.kt)("li",{parentName:"ul"},"Villagers now have a visual based trading system and will hold up an item they wish to trade if the player is holding something they want"),(0,r.kt)("li",{parentName:"ul"},"When villagers make trades, they gain experience. When they gain enough experience, they level up. Leveling up unlocks new trades"),(0,r.kt)("li",{parentName:"ul"},"Villagers will resupply their trades when arriving at their job site (172559)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wandering Trader")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A villager mob that will appear at a village's gathering site periodically and stays for a period of 2-3 game days"),(0,r.kt)("li",{parentName:"ul"},"This trader offers items from a wide variety of different biomes, random dyes, and other rare materials"),(0,r.kt)("li",{parentName:"ul"},"Accompanied on their journey by two fancy llamas!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bells")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When rung, all villagers will run into their houses"),(0,r.kt)("li",{parentName:"ul"},"Bells ring when players interact with them or are powered by redstone  ")))),(0,r.kt)("h2",{id:"pillage"},(0,r.kt)("strong",{parentName:"h2"},"Pillage:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pillager Outposts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The new tower hangout for pillagers that generate in the same biomes as villages"),(0,r.kt)("li",{parentName:"ul"},"Pillagers will respawn around the tower"),(0,r.kt)("li",{parentName:"ul"},"Clear them out and score some loot!"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Illager Captain"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can be found holding a banner in pillager outposts"),(0,r.kt)("li",{parentName:"ul"},"The player that kills a captain will be given the Bad Omen effect"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Raids"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When a player enters a village with Bad Omen, a raid will be triggered"),(0,r.kt)("li",{parentName:"ul"},"Pillager enemies will attack a village in waves"),(0,r.kt)("li",{parentName:"ul"},"Players that successfully defend a village from a raid will receive the Hero of the Village effect, giving a steep discount on trades with villagers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ravager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A powerful, new enemy mob found in illager patrols and during village raids"),(0,r.kt)("li",{parentName:"ul"},"When running, it can destroy some blocks like crops so watch out!"),(0,r.kt)("li",{parentName:"ul"},"Can be ridden into battle by illagers"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pillager Patrols"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Groups of illagers, pillagers, and ravagers can be found patrolling the overworld")))),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Campfire"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new light source to cozy up your village")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Works great as a fireplace in a home, with no fire spread to worry about")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Throw some food on it and become a campfire cooking pro!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sweet Berries"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A new source of food")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sweet Berry Bushes can be found in Taiga biomes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Watch out for thorns!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bamboo Jungle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bamboo is now generated in Jungles and more densely in the new Bamboo Jungle biome")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New Achievements"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Plethora of Cats - Befriend twenty stray cats (20G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kill the Beast! - Defeat a Ravager (30G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buy Low, Sell High - Trade for the best possible price (50G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Disenchanted - Use a Grindstone to get experience from an enchanted item (20G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We're being attacked - Trigger a Pillager Raid (20G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Sound the Alarm! - Ring the bell with a hostile enemy in the village (20G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I've got a bad feeling about this - Kill a Pillager Captain (20G)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Roaming Skin Choice"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When choosing a skin from a skin pack, the selected skin will now be selected automatically on other Bedrock devices using the same account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some skin packs may not be eligible for roaming selection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Accessibility Features"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Text to Speech can now be enabled to read in-game chat")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UI Screen Reader can be enabled to say the name of interface controls and their current state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Accessibility features can be enabled in Settings  "))),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note on World Generation:")," In order to deliver the coolest generated villages possible, some world seeds may have villages generate in different areas than they used to before this update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A fresh new batch of seeds are now available in the Seed Picker when creating a new world")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added even more new textures to blocks and items, including stained glass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Increased the amount of scaffolding that can be placed out from its initial support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changes to the way cats spawn in villages:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cats now respawn based on number of beds in the village")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The number of cats = 1/4 the number of beds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cat total caps at 10 cats per village")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lecterns now emit a redstone signal when turning pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Darkened portions of the game's menus to provide stronger contrast for accessibility  "))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Crashes/Performance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Improved the performance when opening the player inventory with the crafting recipes open (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41772"},"MCPE-41772"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41166"},"MCPE-41166"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27167"},"MCPE-27167"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when using invalid characters on signs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41671"},"MCPE-41671"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when enabling Texel Anti-Aliasing"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when spawning a Vile Spider from the MINECON Add-On pack"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur on Bedrock Dedicated Server"),(0,r.kt)("li",{parentName:"ul"},"Using pick block on a nether portal no longer causes the game to crash (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41735"},"MCPE-41735"),")"),(0,r.kt)("li",{parentName:"ul"},"Giving the player a cobblestone wall variant no longer crashes the game (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41657"},"MCPE-41657"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when selecting Save & Quit on Nintendo Switch"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when signing in or out of Xbox Live on Xbox One"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when resuming gameplay while connected to a server"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when replacing a world with an unsynced world"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"General"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Windows 10 players with Minecraft installed on a different drive no longer get an error message saying that they are out of storage space, unless they are truly out of space (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32501"},"MCPE-32501"),")"),(0,r.kt)("li",{parentName:"ul"},"The Treasure Hunter Achievement can now be unlocked when using a treasure map in the off-hand slot (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33382"},"MCPE-33382"),")"),(0,r.kt)("li",{parentName:"ul"},"Global resource packs will now stay applied if you revisit the settings screen after restarting the game, then restarting the game"),(0,r.kt)("li",{parentName:"ul"},"Disabling the Multiplayer Game setting will now apply when the world is packaged as a world template"),(0,r.kt)("li",{parentName:"ul"},"Players on Xbox are no longer prompted to sign into Xbox Live if they have already done so"),(0,r.kt)("li",{parentName:"ul"},"Made further improvements to world saving, to prevent worlds becoming disappearing from the world list"),(0,r.kt)("li",{parentName:"ul"},"Players can view skin selection menu when offline on Nintendo Switch without receiving the internet connection message"),(0,r.kt)("li",{parentName:"ul"},"Nintendo Switch payers can now select the Super Mario skins from the expanded skin pack list while in game"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with renewing Realms on Windows 10 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-1319"},"REALMS-1319"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gameplay"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Players no longer float around beds while sleeping (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41344"},"MCPE-41344"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now climb vines and ladders using the jump button again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40535"},"MCPE-40535"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed players falling through blocks at around 65K blocks on the X or Z axes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39299"},"MCPE-39299"),")"),(0,r.kt)("li",{parentName:"ul"},"Players using VR Controllers no longer fly after swimming (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39833"},"MCPE-39833"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer suffocate in the ground while spawning into the world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42310"},"MCPE-42310"),")"),(0,r.kt)("li",{parentName:"ul"},"TNT now knocks back healing players"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"World Generation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed mineshaft generation - no longer generate in a giant cluster and should more closely resemble those found in the Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28485"},"MCPE-28485"),")"),(0,r.kt)("li",{parentName:"ul"},"Mesa Plateau biomes now generate more like those in the Java Edition"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mobs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Villagers will actually follow proper etiquette and close doors behind them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41170"},"MCPE-41170"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now path their way through waterlogged blocks, such as seagrass (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37005"},"MCPE-37005"),")"),(0,r.kt)("li",{parentName:"ul"},"Underwater mobs no longer spawn on land (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40783"},"MCPE-40783"),")"),(0,r.kt)("li",{parentName:"ul"},"Panda eating animation is now faster. Om nom nom! (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40743"},"MCPE-40743"),")"),(0,r.kt)("li",{parentName:"ul"},"Shulkers now have a chance to drop more shulker shells when killed with looting\xa0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39893"},"MCPE-39893"),")"),(0,r.kt)("li",{parentName:"ul"},"Vindicators no longer become passive when renamed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27927"},"MCPE-27927"),")"),(0,r.kt)("li",{parentName:"ul"},"Guardians no longer spawn outside water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39941"},"MCPE-39941"),")"),(0,r.kt)("li",{parentName:"ul"},"Pandas no longer roll into dangerous blocks"),(0,r.kt)("li",{parentName:"ul"},"Creepers can now spawn in a 1.8 high space, like under trapdoors (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-24120"},"MCPE-24120"),")"),(0,r.kt)("li",{parentName:"ul"},"Skeletons once again turn before shooting"),(0,r.kt)("li",{parentName:"ul"},"Skeleton horses spawned in from earlier versions can be ridden once again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40857"},"MCPE-40857"),")"),(0,r.kt)("li",{parentName:"ul"},"Tamed cats now lay on their sides when sleeping on a bed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40726"},"MCPE-40726"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs now rotate correctly after exiting boats (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41341"},"MCPE-41341"),")"),(0,r.kt)("li",{parentName:"ul"},"Farmer villagers no longer produce infinite amounts of bread (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-33608"},"MCPE-33608"),")"),(0,r.kt)("li",{parentName:"ul"},"Drowned converted from zombies will now attack players"),(0,r.kt)("li",{parentName:"ul"},"Villagers no longer get stuck on lanterns"),(0,r.kt)("li",{parentName:"ul"},"Reduced the range of drowned attacking the nearest player"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blocks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed particles not appearing while mining blocks"),(0,r.kt)("li",{parentName:"ul"},"Seagrass can no longer delete blocks above it as it grows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43617"},"MCPE-43617"),")"),(0,r.kt)("li",{parentName:"ul"},"XP can now be stored for auto smelters using furnaces, blast furnaces, and smokers"),(0,r.kt)("li",{parentName:"ul"},"Coral plants and sea grass now break when a supporting block is removed"),(0,r.kt)("li",{parentName:"ul"},"Smooth and Chiselled Quartz blocks no longer have directional placement (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39074"},"MCPE-39074"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding placed over the void now supports the player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38064"},"MCPE-38064"),")"),(0,r.kt)("li",{parentName:"ul"},"Using Ctrl + Pick block no longer creates a new bed with extra data attached (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42494"},"MCPE-42494"),")"),(0,r.kt)("li",{parentName:"ul"},"Surrounded leaves are now the correct color"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Items"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Banners can once again be copied in the crafting grid (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42534"},"MCPE-42534"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed some items having invisible bits when placed in item frames (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42415"},"MCPE-42415"),")"),(0,r.kt)("li",{parentName:"ul"},"Maps once again show underwater terrain differences (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40740"},"MCPE-40740"),")"),(0,r.kt)("li",{parentName:"ul"},"Smelting stone into smooth stone now gives XP (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41551"},"MCPE-41551"),")"),(0,r.kt)("li",{parentName:"ul"},"The fishing bobber now floats slightly higher in water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32976"},"MCPE-32976"),")"),(0,r.kt)("li",{parentName:"ul"},"Silk touch tools now work correctly right up to their very last use (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41789"},"MCPE-41789"),")"),(0,r.kt)("li",{parentName:"ul"},"Renamed Firework Stars and Firework Rockets now display their new names"),(0,r.kt)("li",{parentName:"ul"},"Fixed an item duplication issue that involved sticky pistons"),(0,r.kt)("li",{parentName:"ul"},"Leather horse armour is now properly coloured (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40124"},"MCPE-40124"),")"),(0,r.kt)("li",{parentName:"ul"},"Banners no longer render as wall variants when held (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41228"},"MCPE-41228"),")"),(0,r.kt)("li",{parentName:"ul"},"Shields held in the off-hand are no longer upside-down (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41221"},"MCPE-41221"),")"),(0,r.kt)("li",{parentName:"ul"},"Creative players no longer get additional buckets when collecting water or lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37070"},"MCPE-37070"),")"),(0,r.kt)("li",{parentName:"ul"},"Renaming items using an anvil no longer increases the prior work penalty (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36931"},"MCPE-36931"),")"),(0,r.kt)("li",{parentName:"ul"},"Signs can now be used as fuel in furnaces (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35740"},"MCPE-35740"),")"),(0,r.kt)("li",{parentName:"ul"},"Chorus fruit now plays the teleport sound after eating it"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Interface"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed signs not having a text limit, leading to performance issues (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42647"},"MCPE-42647"),")"),(0,r.kt)("li",{parentName:"ul"},"Items can now be split if they are spread in a crafting grid on touch devices"),(0,r.kt)("li",{parentName:"ul"},"The on-screen keyboard no longer obscures text entry when writing in a book on Xbox One"),(0,r.kt)("li",{parentName:"ul"},"The outline of the saddle item on the horse inventory screen now matches the new saddle texture"),(0,r.kt)("li",{parentName:"ul"},"Fixed the lack of controller tooltip for interacting with the lectern"),(0,r.kt)("li",{parentName:"ul"},"Global resource reset message now appears if the load screen is taking too long on some devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39045"},"MCPE-39045"),")"),(0,r.kt)("li",{parentName:"ul"},"Ratings button for server consumables now shows 'Rate this pack!' instead of the purchase button"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Commands"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed performance issues when using selectors with commands"),(0,r.kt)("li",{parentName:"ul"},"The 'replaceitem' command now takes selector arguments into account when replacing items in the offhand slot"),(0,r.kt)("li",{parentName:"ul"},"Fixed command suggestion icons offset (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41169"},"MCPE-41169"),")"),(0,r.kt)("li",{parentName:"ul"},"Different cauldron types will no longer overwrite each other in the player's inventory when using the give command"),(0,r.kt)("li",{parentName:"ul"},"End portal blocks no longer drop as items when destroyed using the 'setblock' command (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42991"},"MCPE-42991"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add-Ons and Script Engine"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed pivot point changes to Endermen made with Add-Ons"),(0,r.kt)("li",{parentName:"ul"},"A component group is now correctly removed on second activation of 'minecraft:damage","_","sensor'"),(0,r.kt)("li",{parentName:"ul"},"Target selectors are no longer case-specific"),(0,r.kt)("li",{parentName:"ul"},"Scoreboard scores are no longer saved earlier than other information when exiting a world"),(0,r.kt)("li",{parentName:"ul"},"Leash positions now use vanilla positions if not specified in the pack"),(0,r.kt)("li",{parentName:"ul"},"Renamed blocks in resource packs now keep their custom names"),(0,r.kt)("li",{parentName:"ul"},"Fixed baby Zombie Pigman sword scale with Add-Ons")))))}u.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={},s=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[],c={toc:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(i.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}g.isMDXComponent=!0},76180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),i=a(56814);const o={sidebar_position:99999958,title:"1.11.0",tags:["Official","Changelog","Stable","1.11"]},s="Minecraft - Village & Pillage - 1.11.0 (Bedrock)",p={unversionedId:"official_changelog/stable/1.11/0",id:"official_changelog/stable/1.11/0",title:"1.11.0",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.11/0.mdx",sourceDirName:"official_changelog/stable/1.11",slug:"/official_changelog/stable/1.11/0",permalink:"/en/docs/official_changelog/stable/1.11/0",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.11/0.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.11",permalink:"/en/docs/tags/1-11"}],version:"current",sidebarPosition:99999958,frontMatter:{sidebar_position:99999958,title:"1.11.0",tags:["Official","Changelog","Stable","1.11"]},sidebar:"changelogSidebar",previous:{title:"1.11.1",permalink:"/en/docs/official_changelog/stable/1.11/1"},next:{title:"1.10.1",permalink:"/en/docs/official_changelog/stable/1.10/1"}},m={},u=[],c={toc:u};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---village--pillage---1110-bedrock"},"Minecraft - Village & Pillage - 1.11.0 (Bedrock)"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);