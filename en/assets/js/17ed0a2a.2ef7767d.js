"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34822,64137,81791,45389,1371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},64598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/20/gameplay",id:"changelog_source/preview/1.17/10/20/gameplay",title:"gameplay",description:"Posted: May 26, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/10/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/10/20",slug:"/changelog_source/preview/1.17/10/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/10/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Known Issue:</strong>\xa0",id:"known-issue",level:2},{value:"<strong>Features and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Axolotl</strong>",id:"axolotl",level:2},{value:"<strong>Azalea</strong>",id:"azalea",level:2},{value:"<strong>Copper Ore</strong>",id:"copper-ore",level:2},{value:"<strong>Deepslate</strong>",id:"deepslate",level:2},{value:"<strong>Glow Item Frame</strong>",id:"glow-item-frame",level:2},{value:"<strong>Hanging Roots</strong>",id:"hanging-roots",level:2},{value:"<strong>Lightning Rod</strong>",id:"lightning-rod",level:2},{value:"<strong>Rooted Dirt</strong>",id:"rooted-dirt",level:2},{value:"<strong>Character Creator</strong>",id:"character-creator",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Dressing Room</strong>",id:"dressing-room",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Lush Caves</strong>",id:"lush-caves",level:2},{value:"<strong>Skeleton</strong>",id:"skeleton",level:2},{value:"<strong>Powder Snow</strong>",id:"powder-snow",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," May 26, 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,"It's time for another Caves & Cliffs beta update! Please continue to leave us your feedback in the threads at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),".  "),(0,r.kt)("h2",{id:"known-issue"},(0,r.kt)("strong",{parentName:"h2"},"Known Issue:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"May 27, 2021 - The team is aware of a crash that occurs when breaking blocks while the Caves & Cliffs experimental toggle is enabled. While we work on a fix, avoid playing on worlds with the experimental toggle.  ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360096550071/axolotl_crystal.jpg",alt:"axolotl_crystal.jpg"})),(0,r.kt)("h2",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Thunderstorms now happen as often as on Minecraft: Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72798"},"MCPE-72798"),")")),(0,r.kt)("h2",{id:"axolotl"},(0,r.kt)("strong",{parentName:"h2"},"Axolotl")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axolotls no longer move their tails while playing dead (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123309"},"MCPE-123309"),")"),(0,r.kt)("li",{parentName:"ul"},"Feeding Axolotls with Bucket of Tropical Fish now returns Water Bucket instead of empty Bucket (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127382"},"MCPE-127382"),")"),(0,r.kt)("li",{parentName:"ul"},"Axolotl's hitbox is now smaller to match the size of the mob"),(0,r.kt)("li",{parentName:"ul"},"Guardians and Elder Guardians now attack Axolotl on sight"),(0,r.kt)("li",{parentName:"ul"},"Drowned now attack Axolotls on sight")),(0,r.kt)("h2",{id:"azalea"},(0,r.kt)("strong",{parentName:"h2"},"Azalea")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azalea can now be bone-mealed when placed on Clay"),(0,r.kt)("li",{parentName:"ul"},"Using Pick Block on Azalea Leaves and Flowering Azalea Leaves now results in the correct blocks being picked (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128092"},"MCPE-128092"),")")),(0,r.kt)("h2",{id:"copper-ore"},(0,r.kt)("strong",{parentName:"h2"},"Copper Ore")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copper Ore is now placed after other overworld ores in the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119724"},"MCPE-119724"),")")),(0,r.kt)("h2",{id:"deepslate"},(0,r.kt)("strong",{parentName:"h2"},"Deepslate")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deepslate is now placed after other stones in the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127592"},"MCPE-127592"),")")),(0,r.kt)("h2",{id:"glow-item-frame"},(0,r.kt)("strong",{parentName:"h2"},"Glow Item Frame")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow Item Frame is now placed after regular Item Frame in the Creative inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117532"},"MCPE-117532"),")")),(0,r.kt)("h2",{id:"hanging-roots"},(0,r.kt)("strong",{parentName:"h2"},"Hanging Roots")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hanging Roots are now destroyed by water (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121676"},"MCPE-121676,")," ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127677"},"MCPE-127677"),")")),(0,r.kt)("h2",{id:"lightning-rod"},(0,r.kt)("strong",{parentName:"h2"},"Lightning Rod")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lightning Rod no longer breaks falling blocks that land on it (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116545"},"MCPE-116545"),")")),(0,r.kt)("h2",{id:"rooted-dirt"},(0,r.kt)("strong",{parentName:"h2"},"Rooted Dirt")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rooted Dirt texture is now randomly rotated, matching the behaviour of the regular Dirt Block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123197"},"MCPE-123197"),")")),(0,r.kt)("h2",{id:"character-creator"},(0,r.kt)("strong",{parentName:"h2"},"Character Creator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items can now be previewed in the Character Creator and equipped using the Equip button"),(0,r.kt)("li",{parentName:"ul"},"Added Equip button to Classic Skins and Capes tab")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'/title clear' now correctly clears the title and subtitle from the HUD (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-97636"},"MCPE-97636"),")")),(0,r.kt)("h2",{id:"dressing-room"},(0,r.kt)("strong",{parentName:"h2"},"Dressing Room")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile screen reload button is now localized")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed split-screen players not able to rename items on Anvils (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108405"},"MCPE-108405"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Projectiles such as Snowballs and Eggs no longer cast shadows")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All dropped items now have a similar floating height"),(0,r.kt)("li",{parentName:"ul"},"Data-driven items now swing faster when not targeting blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119702"},"MCPE-119702"),")"),(0,r.kt)("li",{parentName:"ul"},"Firework Rockets obtained from '/replaceitem' command now have a flight duration (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109037"},"MCPE-109037"),")"),(0,r.kt)("li",{parentName:"ul"},"Firework Stars obtained from '/replaceitem' command now have proper color values (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109037"},"MCPE-109037"),")")),(0,r.kt)("h2",{id:"lush-caves"},(0,r.kt)("strong",{parentName:"h2"},"Lush Caves")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Small Dripleaf now only drops itself when broken with Shears")),(0,r.kt)("h2",{id:"skeleton"},(0,r.kt)("strong",{parentName:"h2"},"Skeleton")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Skeletons now turn into Strays after 20 seconds in Powder Snow, reduced from 45 seconds")),(0,r.kt)("h2",{id:"powder-snow"},(0,r.kt)("strong",{parentName:"h2"},"Powder Snow")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Burning mobs can no longer destroy Powder Snow when the Mob Griefing gamerule is disabled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MC-221842"},"MC-221842"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hotbar item tooltip duration now scales with the length of the tooltip's text"),(0,r.kt)("li",{parentName:"ul"},"Added a new accessibility icon in the Settings menu")))}p.isMDXComponent=!0},50290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/10/20/tech",id:"changelog_source/preview/1.17/10/20/tech",title:"tech",description:"Gameplay",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/10/20/tech.mdx",sourceDirName:"changelog_source/preview/1.17/10/20",slug:"/changelog_source/preview/1.17/10/20/tech",permalink:"/en/docs/changelog_source/preview/1.17/10/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/10/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Data Driven Mobs</strong>",id:"data-driven-mobs",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Actors</strong>",id:"actors",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Loot chests with Seed=0 now correctly randomize if placed on the same coordinates. Note that pickblocking a Vanilla loot chest before opening it will now result in identical loot in each copy unless you set the seed to 0 in the NBT")),(0,r.kt)("h2",{id:"data-driven-mobs"},(0,r.kt)("strong",{parentName:"h2"},"Data Driven Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Ender Dragon rendering and animations are now fully data-driven"),(0,r.kt)("li",{parentName:"ul"},"The Ender Crystal rendering and animations are now fully data-driven")),(0,r.kt)("h2",{id:"graphics"},(0,r.kt)("strong",{parentName:"h2"},"Graphics")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Graphics hardware that supports a maximum D3D11 feature level of 9","_","3 or below are no longer supported")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added better error handling for json parsing. Also added several new content errors for item parsing as well as for loot tables")),(0,r.kt)("h2",{id:"actors"},(0,r.kt)("strong",{parentName:"h2"},"Actors")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incoming client-sync properties for newly seen types will properly register with client-side Actor Property Manager groups")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"query.wing',"_","flap","_",'position" now works with the Ender Dragon'),(0,r.kt)("li",{parentName:"ul"},'Added "query.show',"_","bottom\" - a query for determining whether or not the entity's bottom is rendered"),(0,r.kt)("li",{parentName:"ul"},'Added "query.death',"_",'time" - a query for determining the elapsed ticks since a mob started dying'),(0,r.kt)("li",{parentName:"ul"},'Added "math.min',"_",'angle" - a math expression for minimizing the angle magnitude (in degrees) into the range ',"[","-180, 180)")),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Features")),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Updated the '/clearall ' command to also clear tests outside of loaded areas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dimension"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getEntitiesAtBlockLocation(location : BlockLocation) : Entity","[","]"," - Returns an array of all entities at the given block location"),(0,r.kt)("li",{parentName:"ul"},"spawnEntity(identifier : String, location : BlockLocation) : Entity - Spawns an entity with the given identifier at the given block location"),(0,r.kt)("li",{parentName:"ul"},"[","Removed","]"," function getName()"),(0,r.kt)("li",{parentName:"ul"},"property id : String - Gets the entity's identifier"),(0,r.kt)("li",{parentName:"ul"},"property nameTag : String - Gets or sets the entity's name tag"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"property name : String - Gets the player's name"),(0,r.kt)("li",{parentName:"ul"},"method getPlayers() : Player","[","]"," - Returns all players in the server")))))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},22539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(64598),i=a(50290);const s={sidebar_position:99999864,title:"1.17.10.20",tags:["Official","Changelog","Preview","1.17"]},c="Minecraft Beta - 1.17.10.20 (Xbox One/Windows 10/Android)",u={unversionedId:"official_changelog/preview/1.17/10/20",id:"official_changelog/preview/1.17/10/20",title:"1.17.10.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/10/20.mdx",sourceDirName:"official_changelog/preview/1.17/10",slug:"/official_changelog/preview/1.17/10/20",permalink:"/en/docs/official_changelog/preview/1.17/10/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/10/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999864,frontMatter:{sidebar_position:99999864,title:"1.17.10.20",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.10.21",permalink:"/en/docs/official_changelog/preview/1.17/10/21"},next:{title:"1.17.0.58",permalink:"/en/docs/official_changelog/preview/1.17/0/58"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1171020-xbox-onewindows-10android"},"Minecraft Beta - 1.17.10.20 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);