"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[48183,29933,91541,74082,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},46349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/21/gameplay",id:"changelog_source/preview/1.17/10/21/gameplay",title:"gameplay",description:"Posted: June 3, 2021",source:"@site/docs/changelog_source/preview/1.17/10/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/10/21",slug:"/changelog_source/preview/1.17/10/21/gameplay",permalink:"/docs/changelog_source/preview/1.17/10/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Android",id:"android",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Stability",id:"stability",level:3},{value:"Diamond Ore",id:"diamond-ore",level:3},{value:"Glow Lichen",id:"glow-lichen",level:3},{value:"Commands",id:"commands",level:3},{value:"Data-Driven Items",id:"data-driven-items",level:3},{value:"Gameplay",id:"gameplay",level:3},{value:"Glow Sign",id:"glow-sign",level:3},{value:"Graphics",id:"graphics",level:3},{value:"Items",id:"items",level:3},{value:"Jukebox",id:"jukebox",level:3},{value:"Mobs",id:"mobs",level:3},{value:"Goat",id:"goat",level:3},{value:"Strays",id:"strays",level:3},{value:"Bastion",id:"bastion",level:3},{value:"Player",id:"player",level:3},{value:"Sea Turtles",id:"sea-turtles",level:3},{value:"User Interface",id:"user-interface",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," June 3, 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One and Windows 10. To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4402347029645/Picture1.jpg",alt:"Picture1.jpg"})),(0,r.kt)("h1",{id:"known-issues"},"Known Issues:"),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Due to submission issues, this week's beta update is not available on Android devices. But don't fret, it will return soon! Multiplayer with the previous beta, version 1.17.10.20, is still compatible with this version.  ")),(0,r.kt)("h1",{id:"new-features"},"New Features:"),(0,r.kt)("h3",{id:"blocks"},"Blocks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added potted azalea and flowering azalea variants")),(0,r.kt)("h1",{id:"bug-fixes"},"Bug Fixes:"),(0,r.kt)("h3",{id:"stability"},"Stability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when breaking a block when the Caves & Cliffs experimental toggle was enabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128985"},"MCPE-128985"),")")),(0,r.kt)("h3",{id:"diamond-ore"},"Diamond Ore"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Diamond ore now generates with the correct distribution again (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127555"},"MCPE-127555"),")")),(0,r.kt)("h3",{id:"glow-lichen"},"Glow Lichen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow lichen now only drops itself when broken with shears")),(0,r.kt)("h3",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Frosted ice can now be used in any command that accepts a block, such as '/setblock' and '/testforblock' (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126741"},"MCPE-126741"),")")),(0,r.kt)("h3",{id:"data-driven-items"},"Data-Driven Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated documentation for 'DisplayNameItemComponent'")),(0,r.kt)("h3",{id:"gameplay"},"Gameplay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disenchanting an item using the grindstone once again resets the enchantment cost penalty correctly (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-107211"},"MCPE-107211"),")")),(0,r.kt)("h3",{id:"glow-sign"},"Glow Sign"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","Vanilla Parity","]"," The text on glowing signs now has an outline (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129123"},"MCPE-129123"),")"),(0,r.kt)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Black text on signs can be lit by using a glow ink sac (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128079"},"MCPE-128079"),")"),(0,r.kt)("li",{parentName:"ul"},"Tooltips are now present when holding ink sac and glow ink sac when using a controller"),(0,r.kt)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Ink sac and glow ink sac can no longer be used indefinitely on signs in Adventure mode"),(0,r.kt)("li",{parentName:"ul"},"[","Vanilla Parity","]"," Player can no longer dye text on signs in Adventure mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126489"},"MCPE-126489"),")")),(0,r.kt)("h3",{id:"graphics"},"Graphics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Underwater fog is once again dependent on biome (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124266"},"MCPE-124266"),")")),(0,r.kt)("h3",{id:"items"},"Items"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pumpkins are once again accepted by farmer villagers regardless of their rotation when mined (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105540"},"MCPE-105540"),")")),(0,r.kt)("h3",{id:"jukebox"},"Jukebox"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jukebox now only ejects disk into non-solid blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85635"},"MCPE-85635"),")")),(0,r.kt)("h3",{id:"mobs"},"Mobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Baby horses, including their variants, are now taller and no longer exhibit Z-fighting from their legs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92462"},"MCPE-92462"),")"),(0,r.kt)("li",{parentName:"ul"},"Amphibious mobs no longer get stuck when pathing over slabs and daylight sensors"),(0,r.kt)("li",{parentName:"ul"},"Attacked glow squids no longer go dark only for aggressor in multiplayer sessions"),(0,r.kt)("li",{parentName:"ul"},"Villagers spawned from villager spawners on Marketplace worlds that were created after version 1.11 now correctly spawn as V2 villagers")),(0,r.kt)("h3",{id:"goat"},"Goat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tempted goats now move at the same speed as goats in Java Edition, and other similar mobs that are being tempted"),(0,r.kt)("li",{parentName:"ul"},"Goat fall damage reduction is now in parity with Java Edition (-10 reduced fall damage)"),(0,r.kt)("li",{parentName:"ul"},"Goats can now continue ramming when on slime block and honey blocks")),(0,r.kt)("h3",{id:"strays"},"Strays"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strays no longer drop wither skeleton skulls when killed by charged creepers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35876"},"MCPE-35876"),")")),(0,r.kt)("h3",{id:"bastion"},"Bastion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bastion loot now closely matches Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104330"},"MCPE-104330"),")")),(0,r.kt)("h3",{id:"player"},"Player"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can no longer swim through the air under a platform, though it looked pretty cool (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48958"},"MCPE-48958)"))),(0,r.kt)("h3",{id:"sea-turtles"},"Sea Turtles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Baby sea turtles no longer despawn after being hatched (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70664"},"MCPE-70664"),")")),(0,r.kt)("h3",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The "Reset to Default" button in the Accessibility settings now resets the Text Background Opacity slider'),(0,r.kt)("li",{parentName:"ul"},'Fixed a typo in the "Loom" section of "How to Play" (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128735"},"MCPE-128735"),")"),(0,r.kt)("li",{parentName:"ul"},"The counters on empty tabs of the Play screen now display zero instead of an empty, grey box (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110535"},"MCPE-110535"),")")))}d.isMDXComponent=!0},98893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/21/tech",id:"changelog_source/preview/1.17/10/21/tech",title:"tech",description:"Chunks",source:"@site/docs/changelog_source/preview/1.17/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/10/21",slug:"/changelog_source/preview/1.17/10/21/tech",permalink:"/docs/changelog_source/preview/1.17/10/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Chunks",id:"chunks",level:3},{value:"Data-Driven Mobs",id:"data-driven-mobs",level:3},{value:"GameTest Framework",id:"gametest-framework",level:3}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"chunks"},"Chunks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limits writing of chunks unless necessary. Chunks upgraded from older formats will not automatically save when loaded, but when modified (Through blocks or actors, for example) they will be marked for saving")),(0,r.kt)("h3",{id:"data-driven-mobs"},"Data-Driven Mobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The horse rendering and animations are now fully data-driven"),(0,r.kt)("li",{parentName:"ul"},"This work supports all horse variants (horse, mule, donkey, zombie horse, skeleton horse) and all horse versions including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"v1 (engine version 1.2.5 and earlier)"),(0,r.kt)("li",{parentName:"ul"},"v2 (engine version 1.2.6 to 1.17.0)"),(0,r.kt)("li",{parentName:"ul"},"v3 (engine version 1.17.10 and onward). This will be a cleaner version of the v2 model, with less confusing bone naming")))),(0,r.kt)("h3",{id:"gametest-framework"},"GameTest Framework"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updates to how blocks are handled in APIs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BlockType, BlockPermutation, and Block instances replace BlockState-based updating"))),(0,r.kt)("li",{parentName:"ul"},"Exposed chest block component and Container"),(0,r.kt)("li",{parentName:"ul"},"Added location and velocity read-only properties to Entity"),(0,r.kt)("li",{parentName:"ul"},"function createExplosion(location : Location, radius : number, explosionOptions : ExplosionOptions)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates an explosion",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ExplosionOptions : class - Provides additional configuration parameters for createExplosion"))))),(0,r.kt)("li",{parentName:"ul"},"method triggerEvent(eventName : string) - Triggers an event on an entity"),(0,r.kt)("li",{parentName:"ul"},"Added 'thenExecuteFor' to 'GameTestSequence', which repeatedly calls the callback for the specified number of ticks")))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},16782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(46349),i=a(98893);const s={sidebar_position:99999863,title:"1.17.10.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},c="Minecraft Beta - 1.17.10.21 (Xbox One/Windows 10)",u={unversionedId:"official_changelog/preview/1.17/10/21",id:"official_changelog/preview/1.17/10/21",title:"1.17.10.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.17/10/21.mdx",sourceDirName:"official_changelog/preview/1.17/10",slug:"/official_changelog/preview/1.17/10/21",permalink:"/docs/official_changelog/preview/1.17/10/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/10/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.17",permalink:"/docs/tags/1-17"}],version:"current",sidebarPosition:99999863,frontMatter:{sidebar_position:99999863,title:"1.17.10.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.10.22",permalink:"/docs/official_changelog/preview/1.17/10/22"},next:{title:"1.17.10.20",permalink:"/docs/official_changelog/preview/1.17/10/20"}},d={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1171021-xbox-onewindows-10"},"Minecraft Beta - 1.17.10.21 (Xbox One/Windows 10)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);