"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[1124,55933,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??u;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const b="tabList__CuJ",w="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(u(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",w,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},91605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.13/0/1/gameplay",id:"changelog_source/preview/1.13/0/1/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.13/0/1/gameplay.mdx",sourceDirName:"changelog_source/preview/1.13/0/1",slug:"/changelog_source/preview/1.13/0/1/gameplay",permalink:"/docs/changelog_source/preview/1.13/0/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.13/0/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:2},{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>For Map Makers and Add-On Creators:</strong>",id:"for-map-makers-and-add-on-creators",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.kt)("h2",{id:"experimental-gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Gameplay:")),(0,r.kt)("p",null,"(Work in progress features that are only available when Experimental Gameplay is enabled in world settings)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New and improved Structure Blocks!\xa0")),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the Fox!",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added the arctic Fox as a variant"),(0,r.kt)("li",{parentName:"ul"},"Foxes now spawn as arctic variants when in snowy climates, and polar bears will attack them unprovoked"),(0,r.kt)("li",{parentName:"ul"},"Trusted Foxes defend trusted players"),(0,r.kt)("li",{parentName:"ul"},"Foxes can pick up and carry items in their mouths"),(0,r.kt)("li",{parentName:"ul"},"Foxes may eat what they are carrying, sometimes with interesting results!"))),(0,r.kt)("li",{parentName:"ul"},"Coordinates can now be tab-completed when writing commands"),(0,r.kt)("li",{parentName:"ul"},"Added new \u201cPersistComponent\u201d for mob persistence"),(0,r.kt)("li",{parentName:"ul"},"Added new and improved Structure Blocks",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Save and Load features are behind the Experimental Toggle")))),(0,r.kt)("h2",{id:"changes"},(0,r.kt)("strong",{parentName:"h2"},"Changes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a message that informs players whether a Marketplace pack is compatible with their version of Minecraft (specifically if it includes blocks from a newer version of the game)"),(0,r.kt)("li",{parentName:"ul"},'Minecraft on iOS will no longer show the "Do you want to Close Minecraft" pop-up since iOS doesn\'t support that app behaviour'),(0,r.kt)("li",{parentName:"ul"},"Added new chat settings options to improve accessibility\xa0")),(0,r.kt)("h2",{id:"for-map-makers-and-add-on-creators"},(0,r.kt)("strong",{parentName:"h2"},"For Map Makers and Add-On Creators:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New Data Driven Items"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added shake animation to data-driven arrow (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-40744"},"MCPE-40744"),")"),(0,r.kt)("li",{parentName:"ul"},"Data driven actor push logic and behaviour\xa0"),(0,r.kt)("li",{parentName:"ul"},"Breaking item particles are now data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Implemented data driven environment damage\xa0"),(0,r.kt)("li",{parentName:"ul"},"Data driven sparkler particles\xa0"),(0,r.kt)("li",{parentName:"ul"},"Data driven Guardian/Elder Guardian animation and rendering",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed unparented geometry on pre 1.8 guardians\xa0"),(0,r.kt)("li",{parentName:"ul"},"Elder Guardian Spike animation\xa0"))),(0,r.kt)("li",{parentName:"ul"},"Added new feature rules data that implements existing biome decoration through json\xa0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Final infrastructure changes required to support fully data driven features. Rules themselves must be provided in a behaviour pack with experimental turned on"))),(0,r.kt)("li",{parentName:"ul"},"Converted the Fishing Hook actor to be Data-Driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Converted the Balloon actor to be Data-Driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Data Driven Player Rendering"),(0,r.kt)("li",{parentName:"ul"},"Snow Golem trail behaviour is now data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"Horse models/animations are now data driven\xa0"),(0,r.kt)("li",{parentName:"ul"},"User Story Dragon Breath Particles are now data driven"),(0,r.kt)("li",{parentName:"ul"},"Ores are now data driven (OreFeature)"))),(0,r.kt)("li",{parentName:"ul"},"Added Scripting Documentation for ActorDamageSource\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added additional Scripting information to death events\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added block container Scripting component\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added 'Projectile Hit' Scripting event\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added 'Actor Hurt' Scripting event\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added new Actor tags to the Scripting API"),(0,r.kt)("li",{parentName:"ul"},"Added Block Destruction Scripting event for Explosions\xa0"),(0,r.kt)("li",{parentName:"ul"},"Actor Definition Events can now be triggered from scripts"),(0,r.kt)("li",{parentName:"ul"},"Added 'actor","_","sneak' Scripting event\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added 'actor attacked' Scripting event"),(0,r.kt)("li",{parentName:"ul"},"Levers now have their own block state\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a scripting error that would show when shooting arrows from a dispenser\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added 'build document' code for data-driven recipes"),(0,r.kt)("li",{parentName:"ul"},"Players can now open and view scripting logs while the game is running\xa0"),(0,r.kt)("li",{parentName:"ul"},"All pillar blocks now have their own block state instead of using some values of the direction block state. This allows mirror and rotating with structure blocks\xa0")),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Crashes/Performance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.kt)("li",{parentName:"ul"},"Fixed inconsistent crash while navigating the game's UI"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash related to cached resources that could sometimes occur\xa0"),(0,r.kt)("li",{parentName:"ul"},"Improved graphics rendering performance"),(0,r.kt)("li",{parentName:"ul"},"Improved world launch time by optimising network and resource tasks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when launching the game on Oculus Rift"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when exiting the game on Windows 10"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when resuming the game on Oculus Rift"),(0,r.kt)("li",{parentName:"ul"},"Fixed a freezing issue that could sometimes occur when resuming the game on Windows 10 Mobile"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crashing issue on iOS when relaunching the game with a global resource pack applied"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when exploring world templates\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when launching the game on Xbox"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when launching the game on Xbox\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when typing some characters onto a sign"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when playing the Inspiration Hub World"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when trying to create new world or when joining a multiplayer game"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when signing into Microsoft account"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could sometimes occur when choosing certain skins"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when creating a new world using some marketplace packs\xa0"),(0,r.kt)("li",{parentName:"ul"},"Optimised grass growth block ticking"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that would happen when typing certain characters into chat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44419"},"MCPE-44419"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when switching profiles on Xbox One"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when breaking a block underneath Detector Rail blocks"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur if a split screen player leaves the game while an execute command targets them in a function"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when leaving and rejoining a world whilst an adult panda is eating bamboo"),(0,r.kt)("li",{parentName:"ul"},'Fixed a crash that could occur after a player leaves on 3-4 player split screen on the "Wildlife: Jungle" map\xa0'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"General")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Beacons no longer play conduit ambient sound, but play the correct beacon ambient sound now (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-34413"},"MCPE-34413"),")"),(0,r.kt)("li",{parentName:"ul"},'Tweaked the "How to play" section so that it specifies carved pumpkins should be used as protection from Enderman'),(0,r.kt)("li",{parentName:"ul"},'Tweaked the wording in the Raids "How to play" section'),(0,r.kt)("li",{parentName:"ul"},"Accessibility colour and contrast fixes and tweaks for dropdowns, buttons and the Play screen"),(0,r.kt)("li",{parentName:"ul"},"Players can now switch between user accounts on Xbox One without restarting the game"),(0,r.kt)("li",{parentName:"ul"},"Fixed the messaging when trying to import a world template made in a newer version\xa0"),(0,r.kt)("li",{parentName:"ul"},"Leads now connect to mobs at the correct position\xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated the information about repairing Elytra in the How To Play section, which now describes using Phantom Membranes to repair them instead of Leather (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41608"},"MCPE-41608"),")"),(0,r.kt)("li",{parentName:"ul"},"The world loading screen now closes if acceptable amount of chunks loaded (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44815"},"MCPE-44815"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(Partial fix for ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44815"},"MCPE-44815"),", the issue with chunks sometimes not loading in correctly is still being worked on)"))),(0,r.kt)("li",{parentName:"ul"},"Furnaces now play all applicable sounds, and at the correct pitch (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43915"},"MCPE-43915"),")"),(0,r.kt)("li",{parentName:"ul"},"Recently viewed skins now appear in the correct order in the Skin Picker menu\xa0\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Gameplay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Equipment on Armor Stands now renders correctly if the Armor Stand is affected by the invisibility effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39779"},"MCPE-39779"),")"),(0,r.kt)("li",{parentName:"ul"},"TNT no longer falls through blocks when lit (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41313"},"MCPE-41313"),")"),(0,r.kt)("li",{parentName:"ul"},"Using pickblock on lit Redstone now gives the player the correct block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43450"},"MCPE-43450"),")"),(0,r.kt)("li",{parentName:"ul"},"Equipment on Armor Stands now renders correctly if the Armor Stand is affected by the invisibility effect (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39779"},"MCPE-39779"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Mason Trades"),(0,r.kt)("li",{parentName:"ul"},"Splash Water Bottle now deals damage to Blaze and Enderman mobs again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42589"},"MCPE-42589"),")"),(0,r.kt)("li",{parentName:"ul"},"Split-screen players that join a world will now spawn in the correct safe place and no longer spawn in void"),(0,r.kt)("li",{parentName:"ul"},"Arrows will cause sand and gravel to fall again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-18257"},"MCPE-18257"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed pitch issue with camera that caused player to walk backwards when looking straight up"),(0,r.kt)("li",{parentName:"ul"},"The camera will now rotate correctly when in third person view"),(0,r.kt)("li",{parentName:"ul"},"Changed how the Bell item is held in the player's hand, so that it is held with an item rather than a weapon (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43638"},"MCPE-43638"),")"),(0,r.kt)("li",{parentName:"ul"},"Damage sound is no longer heard when a player falls or lands in creative (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-515"},"MCPE-515"),")"),(0,r.kt)("li",{parentName:"ul"},'Camera is no longer present in Creative inventory without "Education Edition" toggle being turned ON'),(0,r.kt)("li",{parentName:"ul"},"Players in water are now knocked back by TNT explosions"),(0,r.kt)("li",{parentName:"ul"},"Fire Charges launched from Dispensers will now ignite Minecarts with TNT"),(0,r.kt)("li",{parentName:"ul"},"Using bone meal on a flower now generates more flowers of that type around it, rather than just dandelions and poppies (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-7979"},"MCPE-7979"),")"),(0,r.kt)("li",{parentName:"ul"},"Shulker boxes can no longer be placed in the same space as the player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39674"},"MCPE-39674"),")"),(0,r.kt)("li",{parentName:"ul"},"Standing in a cauldron of lava now deals the correct amount of damage to players (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39356"},"MCPE-39356"),")"),(0,r.kt)("li",{parentName:"ul"},"Using 'Place All' (Y) on the Cartography output slot only crafts as many of the shown result possible"),(0,r.kt)("li",{parentName:"ul"},"The player now correctly receives the bad omen effect whenever the Illager captain dies in combat with the player (195068)"),(0,r.kt)("li",{parentName:"ul"},"Mobs will no longer break turtle eggs when mob griefing is disabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-36245"},"MCPE-36245"),")"),(0,r.kt)("li",{parentName:"ul"},"Falling snow can no longer replace other blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44613"},"MCPE-44613"),")"),(0,r.kt)("li",{parentName:"ul"},"Cartographer trade now requires 11 glass panes instead of 10"),(0,r.kt)("li",{parentName:"ul"},"Loyalty Tridents now return to the correct player after bouncing off a Shield (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44225"},"MCPE-44225"),")"),(0,r.kt)("li",{parentName:"ul"},"Nether portals now spawn zombie pigmen in easy difficulty (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45934"},"MCPE-45934"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue of riptide tridents not propelling players forward correctly"),(0,r.kt)("li",{parentName:"ul"},"Balanced enchants on books - those with 3 or more enchantments no longer always have Featherfalling IV and/or Blast Protection IV (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41944"},"MCPE-41944"),")"),(0,r.kt)("li",{parentName:"ul"},"Campfires can be doused with splash water potions only, to match the Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Explosions no longer destroy and drop End Gateway blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47174"},"MCPE-47174"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed creeper farms by adjusting mob height spawning logic (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45935"},"MCPE-45935"),")"),(0,r.kt)("li",{parentName:"ul"},"Lava now correctly affects mobs that come into contact with it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45531"},"MCPE-45531"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"World Generation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chests that generate in Desert Temples now face the correct way (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37393"},"MCPE-37393"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mobs")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Iron Golems are no longer pushed back by explosions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43662"},"MCPE-43662"),")"),(0,r.kt)("li",{parentName:"ul"},"Ravagers will now pathfind through water"),(0,r.kt)("li",{parentName:"ul"},"Fixed sitting position for baby zombie jockey"),(0,r.kt)("li",{parentName:"ul"},"Fixed the death animation for Spiders (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41417"},"MCPE-41417"),")"),(0,r.kt)("li",{parentName:"ul"},"Lazy pandas no longer float above the ground when lying on their backs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43164"},"MCPE-43164"),")"),(0,r.kt)("li",{parentName:"ul"},"Baby pigs turn into baby pigmen when struck by lightning (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38134"},"MCPE-38134"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed player alignment to bed when sleeping"),(0,r.kt)("li",{parentName:"ul"},"Zombies can no longer break Iron Doors (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43725"},"MCPE-43725"),")"),(0,r.kt)("li",{parentName:"ul"},"Village mobs (Such as Iron Golem and Cats) no longer spawn inside of blocks (such as grass path and farmland blocks) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44442"},"MCPE-44442"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41886"},"MCPE-41886"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now path find correctly through waterlogged blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37005"},"MCPE-37005"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now path find correctly on unlit campfire blocks"),(0,r.kt)("li",{parentName:"ul"},"Mobs no longer attempt to path find over 1.5 block high obstacles (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45256"},"MCPE-45256"),")"),(0,r.kt)("li",{parentName:"ul"},"Villagers will now all go to sleep correctly when the night comes"),(0,r.kt)("li",{parentName:"ul"},"Strays and Skeletons now show enchanted bows when held\xa0"),(0,r.kt)("li",{parentName:"ul"},"Villagers now show angry particles when hit by a player, even if they haven't been traded with yet (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-29700"},"MCPE-29700"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs now attack the player correctly while standing on soul sand"),(0,r.kt)("li",{parentName:"ul"},"Villagers now close doors that have been opened by a player or Redstone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-21946"},"MCPE-21946"),")"),(0,r.kt)("li",{parentName:"ul"},"Villager trade levels now match Java with 5 profession level badges (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43206"},"MCPE-43206"),")"),(0,r.kt)("li",{parentName:"ul"},'Fixed the "Toast" rabbit easter egg (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44510"},"MCPE-44510"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Blocks")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TNT no longer falls through blocks when lit (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41313"},"MCPE-41313"),")"),(0,r.kt)("li",{parentName:"ul"},"Using pickblock on lit Redstone now gives the player the correct block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43450"},"MCPE-43450"),")"),(0,r.kt)("li",{parentName:"ul"},"Frosted Ice no longer causes lag when it is waiting to melt underground (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39698"},"MCPE-39698"),")"),(0,r.kt)("li",{parentName:"ul"},"Granite, Diorite and Andesite can no longer be smelted into Smooth Stone (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-45914"},"MCPE-45914"),")"),(0,r.kt)("li",{parentName:"ul"},"Coarse dirt is no longer replaced with dirt when a tree is grown on top (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-26215"},"MCPE-26215"),")"),(0,r.kt)("li",{parentName:"ul"},"Wood blocks are now directional when placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43367"},"MCPE-43367"),")\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Items")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Buttons no longer appear rotated in the player hotbar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-11365"},"MCPE-11365"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-42584"},"MCPE-42584"),")"),(0,r.kt)("li",{parentName:"ul"},"The durability bar for Shields now update correctly when sustaining damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44788"},"MCPE-44788"),")"),(0,r.kt)("li",{parentName:"ul"},"Locked Maps now have a unique inventory icon\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Graphical")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pistons now have the correct textures when placed in any direction (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38053"},"MCPE-38053"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause the home screen to show black corrupted textures after resuming the game on Android (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39031"},"MCPE-39031"),")"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the position of the shield when held in the off-hand to fix a minor texture clipping issue"),(0,r.kt)("li",{parentName:"ul"},"Invisible bedrock no longer emits stone particles when fallen on"),(0,r.kt)("li",{parentName:"ul"},"Tweaked first person hand attack animations"),(0,r.kt)("li",{parentName:"ul"},"Fixed hand animation when switching to empty hand from held item"),(0,r.kt)("li",{parentName:"ul"},"Fix an issue that caused block entities (such as beds) to not render after suspending and resuming the game"),(0,r.kt)("li",{parentName:"ul"},"Fixed some graphical errors when launching the game on Oculus Rift"),(0,r.kt)("li",{parentName:"ul"},"Fixed trident position issues when being held and thrown\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"User Interface")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The background tint of the player coordinates is now consistent with the chat background (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43791"},"MCPE-43791"),")"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the controller cursor position when auto crafting with a full inventory"),(0,r.kt)("li",{parentName:"ul"},"Players using touch screen can no longer break blocks when using touch-and-hold to use Fishing Rod\xa0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Execute detect command now uses local coordinates correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-29942"},"MCPE-29942"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Modified CommandPosition so that an optional offset can be specified to move the rotation point in case of a local coordinate"),(0,r.kt)("li",{parentName:"ul"},"Fixed the ExecuteCommand detect option to correctly use an entity rather than a position so that it can use the entity orientation to calculate camera relative offsets\xa0"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add-Ons and Script Engine")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fixed MoLang scripting errors that were being logged for older content"),(0,r.kt)("li",{parentName:"ul"},"Endermen with modified behaviour can now be shot and damaged with projectiles\xa0"),(0,r.kt)("li",{parentName:"ul"},"Entities crossing chunk boundaries can no longer get corrupted due to the move\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed humanoid eating animation"),(0,r.kt)("li",{parentName:"ul"},"Fix issue of the mini bows rendering on all mobs other than players in scripting packs\xa0"),(0,r.kt)("li",{parentName:"ul"},'The "has',"_",'equipment" filter work correctly with damageable items'),(0,r.kt)("li",{parentName:"ul"},"Loading packs with lots of custom items now works correctly\xa0"),(0,r.kt)("li",{parentName:"ul"},'Creating new End Gateway portal in the "Abstraction Cubes" marketplace map now works correctly'),(0,r.kt)("li",{parentName:"ul"},"Particle UVs no longer include lines of textures next to the selected UV"),(0,r.kt)("li",{parentName:"ul"},'Custom entities using the "nearest',"_","attackable","_",'target" now re-evaluate current target validity')))))}u.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],h={toc:m};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}d.isMDXComponent=!0},76154:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(91605);const i={sidebar_position:99999953,title:"1.13.0.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},s="Minecraft Beta - 1.13.0.1 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.13/0/1",id:"official_changelog/preview/1.13/0/1",title:"1.13.0.1",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.13/0/1.mdx",sourceDirName:"official_changelog/preview/1.13/0",slug:"/official_changelog/preview/1.13/0/1",permalink:"/docs/official_changelog/preview/1.13/0/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.13/0/1.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.13",permalink:"/docs/tags/1-13"}],version:"current",sidebarPosition:99999953,frontMatter:{sidebar_position:99999953,title:"1.13.0.1",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.13"]},sidebar:"changelogSidebar",previous:{title:"1.13.0.2",permalink:"/docs/official_changelog/preview/1.13/0/2"},next:{title:"1.12.0.14",permalink:"/docs/official_changelog/preview/1.12/0/14"}},p={},u=[],m={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---11301-xbox-onewindows-10android"},"Minecraft Beta - 1.13.0.1 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);