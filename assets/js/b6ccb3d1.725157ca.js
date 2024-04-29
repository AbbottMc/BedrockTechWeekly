"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59151,48801,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),p=a(67392),m=a(50012);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var k=a(72389);const b="tabList__CuJ",w="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:u},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},74475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.13/0/9/gameplay",id:"changelog_source/preview/1.13/0/9/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.13/0/9/gameplay.mdx",sourceDirName:"changelog_source/preview/1.13/0/9",slug:"/changelog_source/preview/1.13/0/9/gameplay",permalink:"/docs/changelog_source/preview/1.13/0/9/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.13/0/9/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added Wither Rose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added Suspicious Stew")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Item Frames can now be placed on the floor and ceiling!\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added the Brown Mooshroom")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Forged by lightning bolts!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added abandoned Villages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added the Light Block for mapmakers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This supports auxiliary data from 0 to 15 for light level")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The invisible end rod (variant 6) is now auto-upgraded to the new light block")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Light blocks are supported via /give, /fill, and /setblock.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added successful Village Raid celebration\xa0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added game credits"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These can be viewed after defeating the Ender Dragon, and also through a new button found in the Settings menu"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"New note block sounds!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added note block functionality for glowstone, haybale, block of emerald, pumpkin, soul sand, block of Iron, bone block, wool, packed ice, clay, and block of gold\xa0"))),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Squid can now spawn in rivers!"),(0,r.kt)("li",{parentName:"ul"},"Added Dead Coral Plants"),(0,r.kt)("li",{parentName:"ul"},"Updated and added new Note Block sounds"),(0,r.kt)("li",{parentName:"ul"},"Players are now 1.8 blocks tall (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31710"},"MCPE-31710"),")"),(0,r.kt)("li",{parentName:"ul"},"Villagers can now heal if they have bread in their inventory"),(0,r.kt)("li",{parentName:"ul"},'Added a "How to Play" section for Structure Blocks\xa0')),(0,r.kt)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.kt)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New Data Driven Items:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Turtle Lightning interactions are now data driven"),(0,r.kt)("li",{parentName:"ul"},"Pufferfish puffed states are now data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Brewing Stand potion recipes are now data driven\xa0"))),(0,r.kt)("li",{parentName:"ul"},"Changed Breathable, RideTick, and Transformation systems to use ViewedEntityContext"),(0,r.kt)("li",{parentName:"ul"},"Added precompiled header targeting for ScriptAPI\xa0"),(0,r.kt)("li",{parentName:"ul"},"Significantly increased the maximum \u201cspawnRadius\u201d distance")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"The game no longer appears frozen after starting a world\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved world loading times\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash from mismatched components/definitions from legacy actor updating\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when trying to brew certain potions"),(0,r.kt)("li",{parentName:"ul"},"Optimized terrain light calculation"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur on low and mid-end Android devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed crash from missing component definition\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur after a guest tries to join a game through an invite\xa0"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when a split screen player picks up log blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crashing issue that affected certain worlds when approaching spawn (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46686"},"MCPE-46686"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur after changing the File Storage location\xa0"),(0,r.kt)("li",{parentName:"ul"},"Running commands from a mine cart with command block no longer crashes the game\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when trying to double tap on an item in the Beacon UI\xa0"),(0,r.kt)("li",{parentName:"ul"},"Optimised FPS during gameplay on Xbox One"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that would occur when dispensing bone meal onto a one-high flower (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50760"},"MCPE-50760"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Optimised the time taken to load mobs into the world"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that was sometimes occurring on some Android and iOS devices with lower memory"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The "We are being attacked!" and "I\'ve got a bad feeling about this" achievements can now be unlocked (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45060"},"MCPE-45060"),")"),(0,r.kt)("li",{parentName:"ul"},"Powered rails placed using /fill should now work correctly when powered by Redstone"),(0,r.kt)("li",{parentName:"ul"},"Fixed a download loop after purchasing certain content packs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using /setblock on a piston base no longer leaves an invisible piston arm\xa0"),(0,r.kt)("li",{parentName:"ul"},"When you delete a global resource pack, it will now remove itself from the active stack\xa0"),(0,r.kt)("li",{parentName:"ul"},"The info at the top of the global resource pack screen will now fit correctly when using various language settings\xa0"),(0,r.kt)("li",{parentName:"ul"},'Tweaked the "Host and Player Options" section in the "How to Play" guide (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-28976"},"MCPE-28976"),")"),(0,r.kt)("li",{parentName:"ul"},"Cloned active mob spawners now have an animated mob when placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-23106"},"MCPE-23106"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed some instances of skin selections not saving and reverting to Steve or Alex (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32089"},"MCPE-32089"),")"),(0,r.kt)("li",{parentName:"ul"},'Fixed the "Multiplayer Restricted Skin!" error message that would pops up when trying to join a world before the skin had loaded in (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48494"},"MCPE-48494"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that was causing many small and empty Villages to be created when trying to expand an existing Village\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed an infinite loading screen when opening the skin picker"),(0,r.kt)("li",{parentName:"ul"},'Fixed a missing armor layer for "Tiny Footprints" Marketplace pack'),(0,r.kt)("li",{parentName:"ul"},'Updated the "How to Play" section about taming cats (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43490"},"MCPE-43490"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fire aspect swords no longer set Creative players on fire (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-14036"},"MCPE-14036"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now teleport on top of non-full or transparent blocks when eating a Chorus Fruit\xa0"),(0,r.kt)("li",{parentName:"ul"},"Endermen holding Red Sand no longer drop regular Sand when killed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-25926"},"MCPE-25926"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented the player from moving while sneaking on top of shulkers or boats (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44644"},"MCPE-44644"),")"),(0,r.kt)("li",{parentName:"ul"},"Killing Cod, Salmon, Tropical Fish, and Pufferfish now drops XP"),(0,r.kt)("li",{parentName:"ul"},"Boat paddling animation now matches Java and resynchronizes when paddling stops"),(0,r.kt)("li",{parentName:"ul"},"Lightning now strikes less frequently (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38768"},"MCPE-38768"),")"),(0,r.kt)("li",{parentName:"ul"},"The LT controller button can now be used to quickly equip or replace armor"),(0,r.kt)("li",{parentName:"ul"},"Players are now able to use items like fishing rods while aiming at nearby mobs"),(0,r.kt)("li",{parentName:"ul"},"Lightning from channelling trident now affects more than a single mob in a small area"),(0,r.kt)("li",{parentName:"ul"},"The player no longer keeps on rowing when opening the inventory UI during boat rides (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36522"},"MCPE-36522"),")"),(0,r.kt)("li",{parentName:"ul"},"Arrows now destroy armor stands properly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47785"},"MCPE-47785"),")"),(0,r.kt)("li",{parentName:"ul"},"Flowers no longer become invisible in flower pots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40806"},"MCPE-40806"),")"),(0,r.kt)("li",{parentName:"ul"},"Sneaking on Redstone Ore no longer triggers glow\xa0"),(0,r.kt)("li",{parentName:"ul"},"Breaking an extended piston in Creative no longer drops an item (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37492"},"MCPE-37492"),")"),(0,r.kt)("li",{parentName:"ul"},"Drinking sound for milk and potions now plays correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38340"},"MCPE-38340"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs now drop armour and tools correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48891"},"MCPE-48891"),")"),(0,r.kt)("li",{parentName:"ul"},"Nether Wart now has a chance to drop more items when broken with Fortune tools (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31107"},"MCPE-31107"),")"),(0,r.kt)("li",{parentName:"ul"},"Animal breeding cooldowns no longer reset after reloading the world"),(0,r.kt)("li",{parentName:"ul"},"Explosions other than TNT now deal damage in water"),(0,r.kt)("li",{parentName:"ul"},"Parrots can now be picked in creative using pickblock"),(0,r.kt)("li",{parentName:"ul"},"Dispensers now place boats correctly"),(0,r.kt)("li",{parentName:"ul"},"Anvils now take damage correctly after use\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now enter into boats and minecarts correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48596"},"MCPE-48596"),")"),(0,r.kt)("li",{parentName:"ul"},"Buttons are now craftable from the recipe book\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed player swimming state when exiting water"),(0,r.kt)("li",{parentName:"ul"},"Area of effect clouds such as lingering potions now work correctly if world is set to 'Always Day' (\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39595"},"MCPE-39595"),")"),(0,r.kt)("li",{parentName:"ul"},"Water being dispensed from a dispenser no longer breaks end portals and gateways"),(0,r.kt)("li",{parentName:"ul"},"The Beacon block can now suffocate players and mobs like other opaque blocks (when being clipped into when using a minecart, for example)"),(0,r.kt)("li",{parentName:"ul"},"The player respawn location now favours shallow water rather than deep water"),(0,r.kt)("li",{parentName:"ul"},"Multiple Ender Dragons will no longer spawn in the End if the player dies or moves away (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37590"},"MCPE-37590"),")"),(0,r.kt)("li",{parentName:"ul"},"Hoppers now pick up items from above correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31393"},"MCPE-31393"),")"),(0,r.kt)("li",{parentName:"ul"},"The Renewable Energy achievement will now unlock correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39661"},"MCPE-39661"),")"),(0,r.kt)("li",{parentName:"ul"},"Pillagers now spawn around Pillager Outposts more frequently (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43396"},"MCPE-43396"),")"),(0,r.kt)("li",{parentName:"ul"},"Player movement speed is no longer slowed down after stepping onto a Shulker Box from certain blocks\xa0"),(0,r.kt)("li",{parentName:"ul"},'The "Where have you been?" Achievement now unlocks correctly on Android'),(0,r.kt)("li",{parentName:"ul"},"Placing and breaking blocks from within a boat now works correctly\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs no longer drop fully repaired items (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45953"},"MCPE-45953"),")"),(0,r.kt)("li",{parentName:"ul"},"End Gateway Portals can no longer generate on the main Obsidian platform in the End"),(0,r.kt)("li",{parentName:"ul"},"The locator map marker now points in the correct direction when riding a boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-50512"},"MCPE-50512"),")"),(0,r.kt)("li",{parentName:"ul"},"Falling snow layers no longer breaks blocks in Redstone contraptions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49773"},"MCPE-49773"),")"),(0,r.kt)("li",{parentName:"ul"},"Players now receive stored XP from furnaces correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47324"},"MCPE-47324"),")"),(0,r.kt)("li",{parentName:"ul"},'Maps are now drawn more quickly when exploring, meaning the "Map Room" achievement now unlocks more consistently (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27720"},"MCPE-27720"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Entity hit and collision boxes no longer exist during mob death animations (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-9999"},"MCPE-9999"),")"),(0,r.kt)("li",{parentName:"ul"},"Wither Skeletons are no longer affected by the Wither Effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46317"},"MCPE-46317"),")"),(0,r.kt)("li",{parentName:"ul"},"Foxes now sleep and find cover during thunderstorms"),(0,r.kt)("li",{parentName:"ul"},"Mobs and entities are no longer slowed when walking one block above ice"),(0,r.kt)("li",{parentName:"ul"},"Baby zombies are now able to ride zombie pigmen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-20163"},"MCPE-20163"),")"),(0,r.kt)("li",{parentName:"ul"},"The Wither no longer runs away from the player after being spawned\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed the held sword position for Vex mobs"),(0,r.kt)("li",{parentName:"ul"},"The Phantom wing flapping animation is faster now (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42935"},"MCPE-42935"),")"),(0,r.kt)("li",{parentName:"ul"},"Endermen are correctly affected by invisibility effect when applied (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44492"},"MCPE-44492"),")"),(0,r.kt)("li",{parentName:"ul"},"Parrots can now fly over fences and walls"),(0,r.kt)("li",{parentName:"ul"},"Drowned on land now attack based on brightness levels rather than time of day\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs standing on slabs are no longer immune to sunlight damage after reloading the world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32822"},"MCPE-32822"),")"),(0,r.kt)("li",{parentName:"ul"},"Witches no longer spawn in 1.8 high gaps (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45935"},"MCPE-45935"),")"),(0,r.kt)("li",{parentName:"ul"},"Cured Zombie Villagers now keep their trade level"),(0,r.kt)("li",{parentName:"ul"},"Zombies no longer become stuck on doors when pathfinding"),(0,r.kt)("li",{parentName:"ul"},"The parrot dancing animation is the correct speed now (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48356"},"MCPE-48356"),")"),(0,r.kt)("li",{parentName:"ul"},"Jockeys no longer get stuck trying to move to unreachable mounts\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Barrier blocks no longer stop grass growth"),(0,r.kt)("li",{parentName:"ul"},"Farmland blocks now prevent grass growing underneath\xa0\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Turtle Egg items now have the same 2D icon as Java\xa0"),(0,r.kt)("li",{parentName:"ul"},"Leaves collected with silk touch now stack correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-32347"},"MCPE-32347"),")"),(0,r.kt)("li",{parentName:"ul"},"Trapdoor items now have the correct inventory icon textures (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44214"},"MCPE-44214"),")"),(0,r.kt)("li",{parentName:"ul"},"Six-sided wood block variants can now be smelted or used as furnace fuel\xa0"),(0,r.kt)("li",{parentName:"ul"},"Grass Path block is no longer missing from the creative inventory"),(0,r.kt)("li",{parentName:"ul"},"Items dropped from breaking blocks underwater now show bubbles"),(0,r.kt)("li",{parentName:"ul"},"Damaged Elytra now have their own texture"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented certain items not being suggested in the recipe book correctly\xa0"),(0,r.kt)("li",{parentName:"ul"},"Items cooked on the campfire now stack together correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47684"},"MCPE-47684"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The paperdoll model now properly reloads animations when the app suspends and resumes\xa0"),(0,r.kt)("li",{parentName:"ul"},"The player model is now visible again while sleeping on a bed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved the texture for the stonecutter with non-fancy graphics (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42487"},"MCPE-42487"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed shield block animation in third person view"),(0,r.kt)("li",{parentName:"ul"},"Iron bars no longer lose some of their textures when surrounded by other bars (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47324"},"MCPE-47324"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the smooth player sneaking animation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-49586"},"MCPE-49586"),")"),(0,r.kt)("li",{parentName:"ul"},"The screen now fades to black when sleeping in a bed"),(0,r.kt)("li",{parentName:"ul"},"Leads rendered in the structure block UI will no longer stretch really far away"),(0,r.kt)("li",{parentName:"ul"},"Added correct hue to the Ender Dragon's death animation\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect tooltip text showing for various potions\xa0"),(0,r.kt)("li",{parentName:"ul"},"Keyboard inputs now work correctly when the game loads out of window focus"),(0,r.kt)("li",{parentName:"ul"},"Fixed HUD positioning after sleeping on VR immersive mode\xa0"),(0,r.kt)("li",{parentName:"ul"},'Fixed the "Open Chat" message for touch screen devices\xa0'),(0,r.kt)("li",{parentName:"ul"},"Flight controls will no longer show when sleeping in a bed in creative (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44928"},"MCPE-44928"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pistons with data values 6 and 7 can no longer be placed using slash commands (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-21558"},"MCPE-21558"),")"),(0,r.kt)("li",{parentName:"ul"},"Using the /clear @p item now clears correctly auxiliary values\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer use the /spawnpoint command in the Nether dimension"),(0,r.kt)("li",{parentName:"ul"},"Using the /replaceitem command now works correctly with Barrels (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48184"},"MCPE-48184"),")"),(0,r.kt)("li",{parentName:"ul"},"The /clear command now works correctly with damageable items\xa0"),(0,r.kt)("li",{parentName:"ul"},'Running the "/clear" command message now shows correct amount of items removed (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-34750"},"MCPE-34750"),")"),(0,r.kt)("li",{parentName:"ul"},'Carpet is now removed correctly when using the "/clear" command\xa0'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed the death override event firing twice when leaving world from the death screen"),(0,r.kt)("li",{parentName:"ul"},"Fixed ","`","minecraft:scale","`"," component failing to scale certain Actor models"),(0,r.kt)("li",{parentName:"ul"},'Running the "tick',"_",'world" component now removes ticking areas correctly and consistently\xa0'),(0,r.kt)("li",{parentName:"ul"},"Fixed double damage events being sent when mobs are hurt by non-magic"),(0,r.kt)("li",{parentName:"ul"},"Behaviour Pack animations now run correctly when set"),(0,r.kt)("li",{parentName:"ul"},"Timer component now works on projectiles"),(0,r.kt)("li",{parentName:"ul"},'"minecraft:spell',"_",'effects" no longer trigger a second time incorrectly'),(0,r.kt)("li",{parentName:"ul"},"Fixed player entity components that were not getting added"),(0,r.kt)("li",{parentName:"ul"},"Added stone slab aliases to allow backwards compatibility on Marketplace maps")))))}c.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},p=void 0,m={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],d={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},3540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(74475);const i={sidebar_position:99999948,title:"1.13.0.9",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},s="Minecraft Beta - 1.13.0.9 (Xbox One/Windows 10/Android)",p={unversionedId:"official_changelog/preview/1.13/0/9",id:"official_changelog/preview/1.13/0/9",title:"1.13.0.9",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.13/0/9.mdx",sourceDirName:"official_changelog/preview/1.13/0",slug:"/official_changelog/preview/1.13/0/9",permalink:"/docs/official_changelog/preview/1.13/0/9",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.13/0/9.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.13",permalink:"/docs/tags/1-13"}],version:"current",sidebarPosition:99999948,frontMatter:{sidebar_position:99999948,title:"1.13.0.9",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},sidebar:"changelogSidebar",previous:{title:"1.13.0.13",permalink:"/docs/official_changelog/preview/1.13/0/13"},next:{title:"1.13.0.6",permalink:"/docs/official_changelog/preview/1.13/0/6"}},m={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11309-xbox-onewindows-10android"},"Minecraft Beta - 1.13.0.9 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);