"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61055,64137,40214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var k=a(72389);const b="tabList_TRJ7",f="tabItem_hGfb";function N(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u,rightElement:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),g=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:g},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),c?r.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=d(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function P(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},16260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.16/20/gameplay",id:"changelog_source/stable/1.16/20/gameplay",title:"gameplay",description:"Posted:\xa0August 11, 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.16/20/gameplay.mdx",sourceDirName:"changelog_source/stable/1.16/20",slug:"/changelog_source/stable/1.16/20/gameplay",permalink:"/en/docs/changelog_source/stable/1.16/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.16/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Piglin Brute</strong>",id:"piglin-brute",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:"),"\xa0August 11, 2020"),(0,r.kt)("p",null,"Our developers have been hard at work to bring you another hotfix. Some of these issues were reported by players, so keep those reports coming at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"!"),(0,r.kt)("h1",{id:"new-features"},(0,r.kt)("strong",{parentName:"h1"},"New Features:")),(0,r.kt)("h2",{id:"piglin-brute"},(0,r.kt)("strong",{parentName:"h2"},"Piglin Brute")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Piglin Brutes are stronger versions of Piglins that live in bastion remnants and protect the treasures there"),(0,r.kt)("li",{parentName:"ul"},"Unlike their cowardly and greedy counterparts, the Piglin Brutes cannot be distracted by gold and aren't afraid of anything"),(0,r.kt)("li",{parentName:"ul"},"Piglin Brutes attack players on sight, no matter how the player is dressed"),(0,r.kt)("li",{parentName:"ul"},"Piglin Brutes wield axes and don't need any armor because they're just that tough!")),(0,r.kt)("h1",{id:"crafting-interface-changes"},(0,r.kt)("strong",{parentName:"h1"},"Crafting Interface Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recipe Select button prompt shows when hovering over a non-craftable\xa0recipe book item using controller\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79725"},"MCPE-79725"),")"),(0,r.kt)("li",{parentName:"ul"},"Recipe selected items put in crafting input grid can now be hovered over with controller to see their tooltip names"),(0,r.kt)("li",{parentName:"ul"},"On controller, hovering over recipes will show them in the crafting grid when no recipe is selected"),(0,r.kt)("li",{parentName:"ul"},"On controller, you can deselect a selected recipe when hovering above that selection in the recipe book. You can also clear the crafting grid by clicking the right thumbstick")),(0,r.kt)("h1",{id:"fixes"},(0,r.kt)("strong",{parentName:"h1"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Performance / Stability")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that\xa0occurred\xa0on PlayStation 4\xa0due to other players using custom skins"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur\xa0when pressing\xa0the\xa0Manage\xa0Account button in Profile\xa0settings"),(0,r.kt)("li",{parentName:"ul"},"Loom blocks no longer cause an out of memory crash when using high resolution resource packs\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69848"},"MCPE-69848"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Worlds can once again be uploaded to Realms on Nintendo Switch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-474"},"REALMS-474"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can\xa0once again\xa0host 8 max player worlds\xa0on PlayStation 4\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85009"},"MCPE-85009"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where the Hot Tourist Destination\xa0trophy would not unlock after visiting the last required Nether biome\xa0on PlayStation 4\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85496"},"MCPE-85496"),")"),(0,r.kt)("li",{parentName:"ul"},"Meeting requirements for some\xa0achievements offline\xa0will now\xa0unlock it after reconnecting"),(0,r.kt)("li",{parentName:"ul"},"Custom skins once again work properly in multiplayer (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48207"},"MCPE-48207"),")"),(0,r.kt)("li",{parentName:"ul"},"Emotes can no longer be equipped before unlocking them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-84810"},"MCPE-84810"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0notifications\xa0not\xa0appearing\xa0on iOS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Breaking a Furnace will now drop the stored experience from smelting (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71651"},"MCPE-71651"),")"),(0,r.kt)("li",{parentName:"ul"},"Boats are no longer slowed down by objects with no collision (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-81316"},"MCPE-81316"),")"),(0,r.kt)("li",{parentName:"ul"},"Legacy chunk upgrades will no longer cause chunks to become 100% air (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-58514"},"MCPE-58514"),")"),(0,r.kt)("li",{parentName:"ul"},"New Nether biomes, blocks, and structures no longer generates into worlds with a fixed version (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66357"},"MCPE-66357"),")"),(0,r.kt)("li",{parentName:"ul"},"Parity:\xa0Fixed chests with loot tables\xa0not\xa0generating\xa0loot until opened or destroyed"),(0,r.kt)("li",{parentName:"ul"},"Local split-screen players can once again see the Ender Dragon and Ender Crystal\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-67596"},"MCPE-67596"),")"),(0,r.kt)("li",{parentName:"ul"},"The bounding box of the player used for spawning is now the correct\xa0size,\xa0so we\xa0don't think a player is in a dangerous spot when they are\xa0actually\xa0safe"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mobs max spawn radius is now 44 blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79359"},"MCPE-79359"),")"),(0,r.kt)("li",{parentName:"ul"},"Zombies can spawn underground again\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52743"},"MCPE-52743"),")"),(0,r.kt)("li",{parentName:"ul"},"Dolphins, fish, and squid now spawn in bubble columns again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73967"},"MCPE-73967"),")"),(0,r.kt)("li",{parentName:"ul"},"Baby pigs now despawn properly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76373"},"MCPE-76373"),")"),(0,r.kt)("li",{parentName:"ul"},"Hoglins no longer attack on Peaceful mode when too close (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-71939"},"MCPE-71939"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglins\xa0and Brutes can now spawn with enchanted weapons\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-83536"},"MCPE-83536"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglins now spawn on Peaceful difficulty"),(0,r.kt)("li",{parentName:"ul"},"Piglins no longer naturally spawn on Shroomlights"),(0,r.kt)("li",{parentName:"ul"},"Piglin arms are now behaving more like the players arms and less like zombie arms (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74089"},"MCPE-74089"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglins killed with a single blow while admiring Gold Ingots now drop the admired the Gold Ingot :("),(0,r.kt)("li",{parentName:"ul"},"Gold Ingots given to baby Piglins are no longer consumed"),(0,r.kt)("li",{parentName:"ul"},"Piglins no longer drop up to a full stack of Gold Ingots upon giving them one by right-clicking and reloading a world while they are admiring it, instead it drops something from its loot table"),(0,r.kt)("li",{parentName:"ul"},"Piglins no longer pick up entire stacks of Gold\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-76080"},"MCPE-76080"),")"),(0,r.kt)("li",{parentName:"ul"},"Piglins no longer spawn with enchanted gear"),(0,r.kt)("li",{parentName:"ul"},"Tweaked arm animation for mobs that have their weapons removed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-83581"},"MCPE-83581"),")"),(0,r.kt)("li",{parentName:"ul"},"Tamed wolves no longer disappear when returning to overworld through a Nether portal"),(0,r.kt)("li",{parentName:"ul"},"Husks now prefer iron armor over chain armor"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Walls now connect to open trapdoors (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79490"},"MCPE-79490"),")"),(0,r.kt)("li",{parentName:"ul"},"Walls now connect to glass blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79483"},"MCPE-79483"),")"),(0,r.kt)("li",{parentName:"ul"},"Pressure plates have been fixed to have no collision again\u202f(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80276"},"MCPE-80276"),")"),(0,r.kt)("li",{parentName:"ul"},"Melon and pumpkin stems now break again when the block below them is destroyed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79577"},"MCPE-79577"),")"),(0,r.kt)("li",{parentName:"ul"},"Slime blocks pushed by pistons launch players correctly again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62419"},"MCPE-62419"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented\xa0players\xa0from being able to place beehives or bee\xa0nests from their inventory after an update\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62067"},"MCPE-62067"),")"),(0,r.kt)("li",{parentName:"ul"},"Soul Campfires now emit the correct light level\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73890"},"MCPE-73890"),")"),(0,r.kt)("li",{parentName:"ul"},"Hyphae blocks now take as long as stem blocks to destroy\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72045"},"MCPE-72045"),")"),(0,r.kt)("li",{parentName:"ul"},"Quartz Block can no longer be created from Chiseled Quartz Block and Pillar Quartz Block in a Furnace"),(0,r.kt)("li",{parentName:"ul"},"Fixed recipes when crafting a Barrel from Warped or Crimson Slabs"),(0,r.kt)("li",{parentName:"ul"},"Quartz Bricks can no longer be crafted from anything but Quartz Blocks on the Stonecutter"),(0,r.kt)("li",{parentName:"ul"},"Target Block's zones for particular redstone signal strength are no longer misplaced because of old Arrow geometry"),(0,r.kt)("li",{parentName:"ul"},"Setting Soul Sand on fire no longer produces a placeholder Soul Fire block on pre-Nether version locked content"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Netherite items no longer bounce on lava\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65372"},"MCPE-65372"),")"),(0,r.kt)("li",{parentName:"ul"},"Using Bone Meal on flowers or grass blocks no longer consumes the item if nothing can grow (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73889"},"MCPE-73889"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed issues around duplicating items when reloading a world while Piglin is admiring an item"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Audio")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Zoglins now have sounds distinct from pigs\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73220"},"MCPE-73220"),")"),(0,r.kt)("li",{parentName:"ul"},"Netherite armor now has a unique sound when equipped\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69047"},"MCPE-69047"),")"),(0,r.kt)("li",{parentName:"ul"},"Climbing vines now plays sound\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69741"},"MCPE-69741"),")"),(0,r.kt)("li",{parentName:"ul"},"Corrected sound for placing Nether Wart"),(0,r.kt)("li",{parentName:"ul"},"Placing or stepping on Warped or Crimson processed materials or planks now make wood sounds\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-69029"},"MCPE-69029"),")"),(0,r.kt)("li",{parentName:"ul"},"Ambient cave sounds are no longer played in Marketplace content prior to 1.16"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wither health bar no longer depletes to zero after half of the health is gone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79661"},"MCPE-79661"),")"),(0,r.kt)("li",{parentName:"ul"},"Wither health bar now reappears when returning from another dimension"),(0,r.kt)("li",{parentName:"ul"},"The 'Open' tooltip is no longer displayed when looking at Piglins\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79376"},"MCPE-79376"),")"),(0,r.kt)("li",{parentName:"ul"},"Speed of credits roll is no longer dependent on framerate"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with several commands being used while cheats were disabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92557"},"MCPE-92557"),")"),(0,r.kt)("li",{parentName:"ul"},"Made\xa0using the\xa0'/fill'\xa0command more efficient, improving performance"),(0,r.kt)("li",{parentName:"ul"},"Using the '/locate' command to find a Ruined Portal will no longer return placeholder text\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-79323"},"MCPE-79323"),")"),(0,r.kt)("li",{parentName:"ul"},"The '/clear' command now correctly removes all blocks with the same block name when no data argument\xa0is passed in"),(0,r.kt)("li",{parentName:"ul"},"Making command selectors use the current position of an actor rather than the previous position of an actor"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause\xa0Command Blocks\xa0to stop working\xa0unexpectedly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updated Piglin geometry and entity files: Fixed issue with scaling carried item for baby humanoid mobs"),(0,r.kt)("li",{parentName:"ul"},"Accessing a Beacon no longer spams the content log with warnings\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66357"},"MCPE-66357"),")"),(0,r.kt)("li",{parentName:"ul"},"The\xa0'rider","_","can","_","interact'\xa0field\xa0on\xa0'minecraft:rideable'\xa0is\xa0now\xa0used again"),(0,r.kt)("li",{parentName:"ul"},"Behavior\xa0animation components will no longer try to reload after a suspend resume and a mob/player rides something"),(0,r.kt)("li",{parentName:"ul"},"Drowned geometry\xa0is\xa0no longer broken in content packs")))))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}g.isMDXComponent=!0},64874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(16260);const i={sidebar_position:99999937,title:"1.16.20",tags:["Official","Changelog","Stable","1.16"]},s="Minecraft - 1.16.20 (Bedrock)",u={unversionedId:"official_changelog/stable/1.16/20",id:"official_changelog/stable/1.16/20",title:"1.16.20",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.16/20.mdx",sourceDirName:"official_changelog/stable/1.16",slug:"/official_changelog/stable/1.16/20",permalink:"/en/docs/official_changelog/stable/1.16/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.16/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.16",permalink:"/en/docs/tags/1-16"}],version:"current",sidebarPosition:99999937,frontMatter:{sidebar_position:99999937,title:"1.16.20",tags:["Official","Changelog","Stable","1.16"]},sidebar:"changelogSidebar",previous:{title:"1.16.21",permalink:"/en/docs/official_changelog/stable/1.16/21"},next:{title:"1.16.10",permalink:"/en/docs/official_changelog/stable/1.16/10"}},c={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---11620-bedrock"},"Minecraft - 1.16.20 (Bedrock)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);