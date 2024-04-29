"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47825,29933,42102,95107,76681],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},90662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/23/gameplay",id:"changelog_source/preview/1.17/20/23/gameplay",title:"gameplay",description:"Posted: 22 July 2021",source:"@site/docs/changelog_source/preview/1.17/20/23/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/20/23",slug:"/changelog_source/preview/1.17/20/23/gameplay",permalink:"/docs/changelog_source/preview/1.17/20/23/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/23/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Stability and Performance</strong>\xa0",id:"stability-and-performance",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>Blocks</strong>\xa0",id:"blocks",level:2},{value:"<strong>User Interface</strong>\xa0",id:"user-interface",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 22 July 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4405554717581/Screen_Shot_07-22-21_at_02.38_PM.JPG",alt:"Screen_Shot_07-22-21_at_02.38_PM.JPG"})),(0,r.kt)("p",null,"We have another Bedrock Beta update today, and we've fixed a bunch of bugs!\xa0\xa0"),(0,r.kt)("p",null,"Please send us your feedback in the threads at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"https://aka.ms/CavesCliffsFeedback"),", and search and report any new bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"https://bugs.mojang.com"),".\xa0\xa0"),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes"),"\xa0"),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0several crashes that could occur during gameplay\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Optimized pasting unicode text into Book & Quill (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119651"},"MCPE-119651"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when crafting a Crafting Table with Gameplay Tips enabled\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0Bed display if the\xa0foot\xa0of the\xa0Bed is in a brighter area than the head (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123592"},"MCPE-123592"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed\xa0Large\xa0Chest display so the brightest end of the\xa0Chest is chosen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123592"},"MCPE-123592"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Travelling through\xa0End portals can no longer cause\xa0players\xa0to take fall damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-135226"},"MCPE-135226"),",\xa0",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132484"},"MCPE-132484"),")\xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Made projectile items move more smoothly when far from players (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101102"},"MCPE-101102"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Holding\xa0a\xa0Shield in\xa0Marketplace\xa0maps no longer shows a content error\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Strong/long/splash/lingering potions can be placed in the Brewing Stand manually (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-86636"},"MCPE-86636"),")\xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Undead mobs standing near\xa0Powder\xa0Snow\xa0now burn normally\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131005"},"MCPE-131005"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Powder Snow above undead mobs now prevents burning effect\xa0"),(0,r.kt)("li",{parentName:"ul"},"Multiple\xa0Shulkers\xa0will no longer be able to spawn in the same position from spawn eggs or End City generation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43972"},"MCPE-43972"),")"),(0,r.kt)("li",{parentName:"ul"},"Mobs can now\xa0pathfind correctly\xa0when standing on Amethyst Buds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130010"},"MCPE-130010"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed Horses sometimes becoming invisible after players dismount them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108568"},"MCPE-108568"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Grown up Goats no longer lose their Horns when reloading a world\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lightning no longer randomly strikes mobs that are under blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121688"},"MCPE-121688"),")\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spore Blossom no longer has a randomly offset hitbox (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121658"},"MCPE-121658"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Moss Block and Moss Carpet now break when moved by Pistons and Sticky Pistons can no longer pull them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121751"},"MCPE-121751"),") (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122004"},"MCPE-122004"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Water dripping from Pointed Dripstone can no longer fill Cauldrons with Potions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131180"},"MCPE-131180"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Measurements of hitbox of Spore Blossom now match Java Edition\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue causing Slime and Honey Block movement slowdown to not be fully applied to players\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Emote wheel no longer appears when\xa0pressing\xa0Ctrl+B\xa0in-game\xa0 (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125246"},"MCPE-125246"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Input Method Editor (IME)\xa0not working after suspending the game on Windows 10\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-59722"},"MCPE-59722"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added a new sidebar to Marketplace and Dressing Room related screens to help better improve the experience of navigating these areas\xa0"),(0,r.kt)("li",{parentName:"ul"},"There is now an item transferring animation when deselecting a recipe\xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Loading a structure with the "/structure" command now displays the correct output messages (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132813"},"MCPE-132813"),")")))}m.isMDXComponent=!0},64857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/23/tech",id:"changelog_source/preview/1.17/20/23/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/docs/changelog_source/preview/1.17/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/23",slug:"/changelog_source/preview/1.17/20/23/tech",permalink:"/docs/changelog_source/preview/1.17/20/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Molang</strong>\xa0",id:"molang",level:2},{value:"<strong>User\xa0Interface</strong>\xa0",id:"userinterface",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gametestframework-experimental"},(0,r.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Renamed module "Minecraft" to "mojang-minecraft"\xa0'),(0,r.kt)("li",{parentName:"ul"},'Renamed module "GameTest" to "mojang-gametest"\xa0',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renamed function\xa0assertBlockTypePresent\xa0to\xa0assertBlockPresent\xa0"),(0,r.kt)("li",{parentName:"ul"},"Renamed function\xa0assertEntityData\xa0to\xa0assertEntityState\xa0"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0assertBlockTypeNotPresent\xa0"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotPresent\xa0"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotPresentInArea\xa0"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotTouching\xa0"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0succeedWhenEntityNotPresent\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertBlockState(blockLocation:\xa0BlockLocation,\xa0callback: (Block) =",">","\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertBlockPresent(blockType:\xa0BlockType,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityPresent(entityTypeIdentifier: string,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityPresentInArea(entityTypeIdentifier: string,\xa0isPresent:\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityTouching(entityTypeIdentifier: string, location: Location,\xa0isTouching:\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Modified signature of function\xa0succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location,\xa0isPresent:\xa0boolean)\xa0"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0GameTestExtension\xa0function\xa0assertBlockProperty(propertyName: string, value: number | string |\xa0boolean,\xa0blockLocation:\xa0BlockLocation)\xa0")))),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command position argument is now optional (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128379"},"MCPE-128379"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command will now output on success (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80348"},"MCPE-80348"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command no longer shows an error when run\xa0successfully\xa0through\xa0'/execute'\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129001"},"MCPE-129001"),")\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data-driven blocks can now be added to the\xa0Creative menu\xa0\xa0")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'min","_","engine","_","version'\xa0from\xa0Resource\xa0Pack\xa0and\xa0Behavior\xa0Pack manifests is now passed into\xa0Molang\xa0expression parsing. This allows for future breaking changes tied to a specific engine version\xa0\xa0")),(0,r.kt)("h2",{id:"userinterface"},(0,r.kt)("strong",{parentName:"h2"},"User\xa0Interface"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UI bind objects can now utilize the ignore field")))}m.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}g.isMDXComponent=!0},82100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(90662),i=a(64857);const s={sidebar_position:99999857,title:"1.17.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},c="Minecraft Beta - 1.17.20.23 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/20/23",id:"official_changelog/preview/1.17/20/23",title:"1.17.20.23",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.17/20/23.mdx",sourceDirName:"official_changelog/preview/1.17/20",slug:"/official_changelog/preview/1.17/20/23",permalink:"/docs/official_changelog/preview/1.17/20/23",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/20/23.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.17",permalink:"/docs/tags/1-17"}],version:"current",sidebarPosition:99999857,frontMatter:{sidebar_position:99999857,title:"1.17.20.23",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.30.20",permalink:"/docs/official_changelog/preview/1.17/30/20"},next:{title:"1.17.20.22",permalink:"/docs/official_changelog/preview/1.17/20/22"}},m={},p=[],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1172023-xbox-onewindows-10android"},"Minecraft Beta - 1.17.20.23 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);