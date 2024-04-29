"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14877,73106,57302,29933,16731,58819,20958,88349,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=s??u;return d({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==i&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(y,(0,r.Z)({key:String(t)},e))}},22639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/gameplay",id:"changelog_source/preview/1.21/0/23/gameplay",title:"gameplay",description:"Posted: 24 April 2024",source:"@site/docs/changelog_source/preview/1.21/0/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/gameplay",permalink:"/docs/changelog_source/preview/1.21/0/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Trial Explorer Map",id:"trial-explorer-map",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Mace",id:"mace",level:2},{value:"Mob Effects",id:"mob-effects",level:2},{value:"Infested",id:"infested",level:3},{value:"Weaving",id:"weaving",level:3},{value:"Ominous Bottle",id:"ominous-bottle",level:2},{value:"Ominous Trial Spawner",id:"ominous-trial-spawner",level:2},{value:"Portals",id:"portals",level:2},{value:"Sounds",id:"sounds",level:2},{value:"Trial Chambers",id:"trial-chambers",level:2},{value:"Trial Spawners",id:"trial-spawners",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Vanilla Parity",id:"vanilla-parity",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Vault",id:"vault",level:2},{value:"Wind Charge",id:"wind-charge",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 24 April 2024"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Information on Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/26100457788045",alt:"A Minecraft cartographer villager is standing next to a cartography table in a village, holding a trial chamber map."})),(0,n.kt)("p",null,"Here\u2019s a list of what\u2019s new in this week\u2019s Preview and Beta! We\u2019d love your feedback, as always, so please let us know what you think at ",(0,n.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net"},"feedback.minecraft.net"),", and report any bugs at\xa0",(0,n.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,n.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.kt)("h2",{id:"trial-explorer-map"},"Trial Explorer Map"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Trial Chambers Map item has been renamed to Trial Explorer Map")),(0,n.kt)("h2",{id:"blocks"},"Blocks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decorated Pots made with Pottery Sherds in Trial Chambers are now oriented correctly (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180380"},"MCPE-180380"),")"),(0,n.kt)("li",{parentName:"ul"},'"stone',"_","block","_",'slab" block is now split into unique instances "smooth',"_","stone","_",'slab", "sandstone',"_",'slab", "oak',"_",'slab", "cobblestone',"_",'slab", "brick',"_",'slab", "stone',"_","brick","_",'slab", "quartz',"_",'slab" and "nether',"_","brick","_",'slab". The id "oak',"_",'slab" had already been split from "wooden',"_",'slab", as a result, any "stone',"_","block","_",'slab:2" will be turned into the already existing "oak',"_",'slab" id\xa0'),(0,n.kt)("li",{parentName:"ul"},"Copper Trapdoor now oxidizes with time"),(0,n.kt)("li",{parentName:"ul"},"Added missing crafting recipes for the following blocks (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176613"},"MCPE-176613"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Exposed Chiseled Copper from Exposed Cut Copper Slab x 2"),(0,n.kt)("li",{parentName:"ul"},"Waxed Chiseled Copper from Waxed Cut Copper Slab x 2")))),(0,n.kt)("h2",{id:"gameplay"},"Gameplay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Entities affected by Weaving can now move through Cobweb with 50% of their normal speed instead of 25%"),(0,n.kt)("li",{parentName:"ul"},"Flower forests now generate all expected flower types (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180417"},"MCPE-180417"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed issue where Spectator mode would have noclip and flying disabled when returning to a Hardcore world after dying (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180279"},"MCPE-180279"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed a recipe bug where any type of Stone Slab could be used to craft a Grindstone with Crimson, Mangrove, or Warped Planks. It can now only accept the actual normal Stone Slab, no other type of stones")),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue where the Torch icon was vertically centered in the inventory slot (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180527"},"MCPE-180527"),")\xa0")),(0,n.kt)("h2",{id:"mace"},"Mace"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mace can now also be enchanted with Unbreaking, Smite, Fire Aspect, and Bane of Arthropods (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179679"},"MCPE-179679"),")"),(0,n.kt)("li",{parentName:"ul"},"Tweaked the cost of applying the Mace's exclusive enchantments in the Enchanting Table\xa0")),(0,n.kt)("h2",{id:"mob-effects"},"Mob Effects"),(0,n.kt)("h3",{id:"infested"},"Infested"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Silverfish will now spawn at the center of the Infested entity's bounding box and fling out in the direction the entity is facing"),(0,n.kt)("li",{parentName:"ul"},"Now has a 10% chance to spawn 1-2 Silverfish instead of 5%\xa0")),(0,n.kt)("h3",{id:"weaving"},"Weaving"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now more consistently spawns 2-3 cobwebs on death\xa0"),(0,n.kt)("li",{parentName:"ul"},'No longer places Cobwebs if the "mob griefing" gamerule is turned off\xa0')),(0,n.kt)("h2",{id:"ominous-bottle"},"Ominous Bottle"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bad Omen gained by drinking an Ominous Bottle will no longer emit particles around the player\xa0")),(0,n.kt)("h2",{id:"ominous-trial-spawner"},"Ominous Trial Spawner"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Players are now chosen 50% of the time (instead of mobs) for dropping projectiles on top of\xa0")),(0,n.kt)("h2",{id:"portals"},"Portals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When using touch controls, Nether Portals can once again be destroyed by destroying the Portal surface\xa0")),(0,n.kt)("h2",{id:"sounds"},"Sounds"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed the sounds of Bad Omen effect being applied, the Ominous Bottle breaking after use, and when Bad Omen converts into Raid Omen"),(0,n.kt)("li",{parentName:"ul"},"Added 4 new ambient cave sounds")),(0,n.kt)("h2",{id:"trial-chambers"},"Trial Chambers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added new trap dispenser style to chambers"),(0,n.kt)("li",{parentName:"ul"},"Fixed various broken jigsaw connections in corridors"),(0,n.kt)("li",{parentName:"ul"},"Added new intersection variation"),(0,n.kt)("li",{parentName:"ul"},'Remade "Chamber 6", and renamed it to "Assembly"'),(0,n.kt)("li",{parentName:"ul"},"Chamber Eruption:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adding missing Water Bucket to the Dispenser"))),(0,n.kt)("li",{parentName:"ul"},"Added new wall dispenser style")),(0,n.kt)("h2",{id:"trial-spawners"},"Trial Spawners"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trial Spawners now emit Trial Omen particles instead of Sculk Soul particles when becoming Ominous"),(0,n.kt)("li",{parentName:"ul"},"Adjusted loot tables for projectiles dropped when in ominous state to match Java Edition\xa0")),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Added a new HUD overlay that displays the number of days played in a world. The overlay is enabled with the "Show days played" world setting')),(0,n.kt)("h2",{id:"vanilla-parity"},"Vanilla Parity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Splash potions now have the same duration as drinkable potions")),(0,n.kt)("h2",{id:"mobs"},"Mobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Removed unnecessary "min',"_","engine","_",'version" from the Bogged client',"_","entity json, which broke resource packs (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178910"},"MCPE-178910"),")"),(0,n.kt)("li",{parentName:"ul"},"The Breeze now aims slightly higher when shooting at the player"),(0,n.kt)("li",{parentName:"ul"},"Breeze Wind Charge can now hurt mobs in Boats and Minecarts"),(0,n.kt)("li",{parentName:"ul"},"The types of damage that can cause a mob to panic have been restricted (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-167513"},"MCPE-167513"),")\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Only the following damage causes now induce panic:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'"campfire"'),(0,n.kt)("li",{parentName:"ul"},'"entity',"_",'attack"'),(0,n.kt)("li",{parentName:"ul"},'"entity',"_",'explosion"'),(0,n.kt)("li",{parentName:"ul"},'"fire"'),(0,n.kt)("li",{parentName:"ul"},'"fire',"_",'tick"'),(0,n.kt)("li",{parentName:"ul"},'"fireworks"'),(0,n.kt)("li",{parentName:"ul"},'"freezing"'),(0,n.kt)("li",{parentName:"ul"},'"lava"'),(0,n.kt)("li",{parentName:"ul"},'"lightning"'),(0,n.kt)("li",{parentName:"ul"},'"magic"'),(0,n.kt)("li",{parentName:"ul"},'"magma"'),(0,n.kt)("li",{parentName:"ul"},'"projectile"'),(0,n.kt)("li",{parentName:"ul"},'"ram',"_",'attack"'),(0,n.kt)("li",{parentName:"ul"},'"sonic',"_",'boom"'),(0,n.kt)("li",{parentName:"ul"},'"soul',"_",'campfire"'),(0,n.kt)("li",{parentName:"ul"},'"temperature"'),(0,n.kt)("li",{parentName:"ul"},'"wither"'))),(0,n.kt)("li",{parentName:"ul"},"Java Edition will also be adjusted to match this new behavior")))),(0,n.kt)("h2",{id:"vault"},"Vault"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated loot tables of Vaults and Ominous Vaults to match Java Edition (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180499"},"MCPE-180499"),")\xa0"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where Vaults could not be opened with a Trial Key (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-180291"},"MCPE-180291"),")")),(0,n.kt)("h2",{id:"wind-charge"},"Wind Charge"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue with fall damage not being negated when falling onto Slime Blocks or Powder Snow after using a Wind Charge (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178878"},"MCPE-178878"),") (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178891"},"MCPE-178891"),")")))}u.isMDXComponent=!0},38301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(15684),o=a(86897),i=(a(25412),a(38272),a(47153));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.21/0/23/tech",id:"changelog_source/preview/1.21/0/23/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/0/23/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech",permalink:"/docs/changelog_source/preview/1.21/0/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},{value:"Graphical",id:"graphical",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'The default values for the "damage',"_",'sources" field of "behavior.panic" have been updated',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'For the complete list of the new default values, refer to the "Vanilla Parity" section of the changelog'),(0,n.kt)("li",{parentName:"ul"},"This change only affects entities with a format version of 1.21.0 or higher"))),(0,n.kt)("li",{parentName:"ul"},"Multiple items with the same custom component will now correctly trigger custom component logic")),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Selection volumes can no longer be created when they would exceed the world height limits"),(0,n.kt)("li",{parentName:"ul"},"When filling up a volume and dragging the volume during the filling operation the filling volume would also change. Now the filling operation happens in the original volume"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where camera collision caused third-person view to display inside the player's head in Crosshair mode")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Fixed a bug with volumetric fog shading in the Deferred Technical Preview that was causing fog to be much brighter than it should have been. Volumetric fog in the Deferred Technical Preview now matches the look of volumetric fog in RTX much more closely. Fog definitions in resource packs developed for the Deferred Technical Preview will need to be updated after this change. To maintain a similar look, the values for either "max',"_",'density" or "scattering" should be increased by a factor of 12.')))}h.isMDXComponent=!0},86897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_exp",id:"changelog_source/preview/1.21/0/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityTameMountComponent",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EntityTameMountComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added method\xa0",(0,n.kt)("em",{parentName:"li"},"tameToPlayer")),(0,n.kt)("li",{parentName:"ul"},"Added properties\xa0",(0,n.kt)("em",{parentName:"li"},"isTamed"),",\xa0",(0,n.kt)("em",{parentName:"li"},"isTamedToPlayer"),",\xa0",(0,n.kt)("em",{parentName:"li"},"tamedToPlayer"),", and\xa0",(0,n.kt)("em",{parentName:"li"},"tamedToPlayerId")))),(0,n.kt)("li",{parentName:"ul"},"GameRules",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added property\xa0",(0,n.kt)("em",{parentName:"li"},"showDaysPlayed")," to\xa0",(0,n.kt)("em",{parentName:"li"},"beta")))),(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0_PlayerInputPermissions_input-lock category property-setters so that changes are propagated to clients")))}u.isMDXComponent=!0},38272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},15684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_stable",id:"changelog_source/preview/1.21/0/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0GameRules rule property-setters so that changes are propagated to clients",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed\xa0",(0,n.kt)("em",{parentName:"li"},"GameRules")," rule property-setters so that changes are propagated to clients"),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"startItemCooldown")," and\xa0",(0,n.kt)("em",{parentName:"li"},"player.getItemCooldown"),"\xa0from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"playSound")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"playSound")," is now deprecated and will be removed in a future major version. Use\xa0",(0,n.kt)("em",{parentName:"li"},"Dimension.playSound")," as the alternative"),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"ListBlockVolume_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockVolumeBase_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"BlockLocationIterator_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"getGameMode(): GameMode_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved method\xa0",(0,n.kt)("em",{parentName:"li"},"setGameMode(gameMode?: GameMode): void_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeAfterEventSignal_from\xa0_beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved member\xa0",(0,n.kt)("em",{parentName:"li"},"playerGameModeChange: PlayerGameModeChangeBeforeEventSignal_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeAfterEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to ",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEvent_from\xa0_beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,n.kt)("em",{parentName:"li"},"PlayerGameModeChangeBeforeEventSignal")," from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0")),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("em",{parentName:"li"},"ItemComponentConsumeEvent")," for ",(0,n.kt)("em",{parentName:"li"},"beta")),(0,n.kt)("li",{parentName:"ul"},"Change\xa0",(0,n.kt)("em",{parentName:"li"},"waitTick(ticks?: number)")," to\xa0",(0,n.kt)("em",{parentName:"li"},"system.waitTicks(ticks: number);")),(0,n.kt)("li",{parentName:"ul"},"Renamed property\xa0",(0,n.kt)("em",{parentName:"li"},"selectedSlot_to\xa0_selectedSlotIndex"),"\xa0and moved it from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.11.0"))))}u.isMDXComponent=!0},25412:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",id:"changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905),o=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905),o=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},21443:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(61499),o=a(22639),i=a(38301);const s={sidebar_position:99999721,title:"1.21.0.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.21"]},c="Minecraft Beta & Preview - 1.21.0.23",p={unversionedId:"official_changelog/preview/1.21/0/23",id:"official_changelog/preview/1.21/0/23",title:"1.21.0.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.21/0/23.mdx",sourceDirName:"official_changelog/preview/1.21/0",slug:"/official_changelog/preview/1.21/0/23",permalink:"/docs/official_changelog/preview/1.21/0/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.21/0/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.21",permalink:"/docs/tags/1-21"}],version:"current",sidebarPosition:99999721,frontMatter:{sidebar_position:99999721,title:"1.21.0.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.21"]},sidebar:"changelogSidebar",previous:{title:"\u5b98\u65b9\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/official_changelog/"},next:{title:"1.21.0.22",permalink:"/docs/official_changelog/preview/1.21/0/22"}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---121023"},"Minecraft Beta & Preview - 1.21.0.23"),(0,n.kt)(l.default,{gameplayChangelog:(0,n.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);