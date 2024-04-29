"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[54853,64137,81791,50471,78870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),l=a(67294),r=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,l.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var k=a(72389);const w="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",f,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",w)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},52360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={},o=void 0,i={unversionedId:"changelog_source/preview/1.17/0/50/gameplay",id:"changelog_source/preview/1.17/0/50/gameplay",title:"gameplay",description:"Posted: April 21, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/0/50/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/0/50",slug:"/changelog_source/preview/1.17/0/50/gameplay",permalink:"/en/docs/changelog_source/preview/1.17/0/50/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/50/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Experimental Features",id:"experimental-features",level:2},{value:"Amethysts and Geodes",id:"amethysts-and-geodes",level:3},{value:"Spyglass",id:"spyglass",level:3},{value:"Smeltable Ore Drops",id:"smeltable-ore-drops",level:3},{value:"Raw Ore Blocks",id:"raw-ore-blocks",level:3},{value:"Tuff",id:"tuff",level:3},{value:"Tweaks and Fixes",id:"tweaks-and-fixes",level:2},{value:"Axolotl",id:"axolotl",level:3},{value:"Caves",id:"caves",level:3},{value:"Copper",id:"copper",level:3},{value:"Copper Block",id:"copper-block",level:3},{value:"Deepslate",id:"deepslate",level:3},{value:"Dripstone",id:"dripstone",level:3},{value:"Glow Item Frame",id:"glow-item-frame",level:3},{value:"Lightning Rod",id:"lightning-rod",level:3},{value:"Lush Caves",id:"lush-caves",level:3},{value:"Pointed Dripstone",id:"pointed-dripstone",level:3},{value:"Bone Meal",id:"bone-meal",level:3},{value:"Player",id:"player",level:3},{value:"Features No Longer Behind the Experimental Toggle",id:"features-no-longer-behind-the-experimental-toggle",level:2},{value:"Powder Snow",id:"powder-snow",level:3},{value:"Glow Lichen",id:"glow-lichen",level:3},{value:"Features and Bug Fixes",id:"features-and-bug-fixes",level:3},{value:"Accessibility Features",id:"accessibility-features",level:3},{value:"Commands",id:"commands",level:3},{value:"Gameplay",id:"gameplay",level:3},{value:"Graphical",id:"graphical",level:3},{value:"Items",id:"items",level:3},{value:"Vanilla Parity",id:"vanilla-parity",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Posted:")," April 21, 2021"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,l.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,l.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,l.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,l.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,l.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,l.kt)("p",null,"It\u2019s Wednesday, and we all know what that means \u2013 it\u2019s time for another Bedrock beta\xa0update,\xa0",(0,l.kt)("em",{parentName:"p"},"of quartz!"),"\xa0Get ready to discover\xa0new features\xa0and\xa0tweaks, and\xa0involuntarily\xa0exclaim\xa0\u201coooh, shiny!\u201d\xa0several times per game session. Maybe more.\xa0You will need to enable the Caves & Cliffs Experimental Features Toggle to check out\xa0some of\xa0these features in your beta worlds. Find out more about using the toggles at ",(0,l.kt)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),".\xa0\xa0\xa0"),(0,l.kt)("p",null,"You can leave us your feedback for these features in the threads at ",(0,l.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,l.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360093174772/amethyst_1170x500.jpg",alt:"amethyst_1170x500.jpg"})),(0,l.kt)("h2",{id:"experimental-features"},"Experimental Features"),(0,l.kt)("h3",{id:"amethysts-and-geodes"},"Amethysts and Geodes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Geodes have been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"These huge geodes can be found anywhere underground in the Overworld")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst geodes have an outer layer of a new block called Smooth Basalt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst geodes have a second layer of another new block called Calcite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst geodes have an inner layer of various Amethyst blocks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Calcite, Tuff, and Smooth Basalt have been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Just smelt basalt to obtain smooth basalt!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Clusters have been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Clusters grow from Budding Amethyst, which can be found inside geodes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clusters have four growth stages: Small Amethyst Bud, Medium Amethyst Bud, Large Amethyst Bud, and Amethyst Cluster")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clusters can only grow when they are placed on Budding Amethyst blocks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fully-grown Amethyst Clusters drop four Amethyst Shards (or more with Fortune) when an Iron Pickaxe or higher is used, and otherwise drop nothing when broken")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clusters can be Silk Touched at any stage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Budding Amethyst has been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"On any side of a Budding Amethyst block where there is air or a water source block, a Small Amethyst Bud will eventually grow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Buds can only grow when attached to Budding Amethyst, and will grow until they become Amethyst")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Clusters Amethyst Blocks have been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst comes in block form inside the geodes in two ways: Block of Amethyst and Budding Amethyst")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"All types of Amethyst blocks (clusters included) create beautiful sounds when you walk on them, break them, place them, or hit them with a projectile \u2013 go make some music!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tinted Glass has been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tinted Glass is a type of glass that does not allow light to pass through")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tinted Glass is crafted by putting a Glass block in the middle of four Amethyst Shards")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tinted Glass can be obtained without Silk Touch; it does not shatter like normal glass")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Shards have been added to the game!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Amethyst Clusters drop four Amethyst Shards (or more with Fortune)"))),(0,l.kt)("h3",{id:"spyglass"},"Spyglass"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Spyglass item has been added to game, and can be crafted with Copper Ingots and an Amethyst Shard"),(0,l.kt)("li",{parentName:"ul"},"Camera movement when looking through a Spyglass is slowed to make it more comfortable to use. This is adjustable using the Spyglass Damping slider in Settings")),(0,l.kt)("h3",{id:"smeltable-ore-drops"},"Smeltable Ore Drops"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added Raw Copper, Raw Iron and Raw Gold items"),(0,l.kt)("li",{parentName:"ul"},"Ores that are smeltable now drop raw item forms of the ore instead of the ore block, and these can be smelted just like before"),(0,l.kt)("li",{parentName:"ul"},"This is to open up the design space for more base stones with ores without cluttering the inventory, and have consistency with Fortune on all ores"),(0,l.kt)("li",{parentName:"ul"},"Ore blocks will continue to be smeltable, meaning you can smelt ore blocks from inventories on old worlds")),(0,l.kt)("h3",{id:"raw-ore-blocks"},"Raw Ore Blocks"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added Block of Raw Iron, Copper, and Gold"),(0,l.kt)("li",{parentName:"ul"},"Just like other ore materials, you can craft a compact version with raw ore items in order to save inventory space")),(0,l.kt)("h3",{id:"tuff"},"Tuff"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Blobs of tuff now generate in the world at y-levels below 16")),(0,l.kt)("h2",{id:"tweaks-and-fixes"},"Tweaks and Fixes"),(0,l.kt)("h3",{id:"axolotl"},"Axolotl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Bucketing an Axolotl no longer unlocks the "I am a Marine Biologist" achievement'),(0,l.kt)("li",{parentName:"ul"},"Axolotls are now much more likely to spawn"),(0,l.kt)("li",{parentName:"ul"},"Axolotls no longer grant themselves regeneration when killing their target"),(0,l.kt)("li",{parentName:"ul"},"Player now receives experience points after breeding Axolotls (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123708"},"MCPE-123708"),")")),(0,l.kt)("h3",{id:"caves"},"Caves"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cobwebs no longer generate suspended in the air in mineshafts")),(0,l.kt)("h3",{id:"copper"},"Copper"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copper surfaces now deoxidize in a more random pattern when struck by lightning")),(0,l.kt)("h3",{id:"copper-block"},"Copper Block"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Horizontally placed Lightning Rods now interact properly with respect to de-oxidizing Copper Blocks (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121671"},"MCPE-121671"),")"),(0,l.kt)("li",{parentName:"ul"},"Copper Blocks struck by lightning now deoxidize even if there's no lightning rod present (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121546"},"MCPE-121546"),")"),(0,l.kt)("li",{parentName:"ul"},"Copper stairs now produce their unique footstep sounds at positions below y=0 (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121955"},"MCPE-121955"),")")),(0,l.kt)("h3",{id:"deepslate"},"Deepslate"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cobbled Deepslate, Deepslate Bricks, and Deepslate Tiles now give experience from smelting in a Furnace (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123671"},"MCPE-123671"),")"),(0,l.kt)("li",{parentName:"ul"},"Cobbled deepslate can now be used as crafting material for tools, furnace and brewing stand (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123669"},"MCPE-123669"),")")),(0,l.kt)("h3",{id:"dripstone"},"Dripstone"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Landing on dripstone no longer deals fall damage when gamerule falldamage is set to false"),(0,l.kt)("li",{parentName:"ul"},"Dripstone Block is now correctly named (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119573"},"MCPE-119573"),")"),(0,l.kt)("li",{parentName:"ul"},"Only the tips of stalagmites deal increased fall damage (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119917"},"MCPE-119917"),")"),(0,l.kt)("li",{parentName:"ul"},"Cauldrons fill slightly faster with water from dripping stalactites")),(0,l.kt)("h3",{id:"glow-item-frame"},"Glow Item Frame"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Glow Item Frame's textures are no longer inconsistent between Bedrock and Java"),(0,l.kt)("li",{parentName:"ul"},"Glow Item Frame now produces Redstone signal (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119726"},"MCPE-119726"),")")),(0,l.kt)("h3",{id:"lightning-rod"},"Lightning Rod"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lightning Rod is now rendered correctly when held in hand"),(0,l.kt)("li",{parentName:"ul"},"Throwing a Channeling trident at a rod during a thunderstorm now correctly converts nearby mobs (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116137"},"MCPE-116137"),")"),(0,l.kt)("li",{parentName:"ul"},"Blocks connected to a Lightning Rod now correctly conduct redstone signal when the rod is hit by lightning"),(0,l.kt)("li",{parentName:"ul"},"Throwing a Channeling trident at a rod during a thunderstorm now correctly affects villagers")),(0,l.kt)("h3",{id:"lush-caves"},"Lush Caves"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lush Cave biomes now randomly generate underground")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Azalea and Flowering Azalea leaves now have a chance to drop Azalea or Flowering Azalea when broken (",(0,l.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-122165"},"MCPE-122165"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Moss Carpet now has Block Placing sound (",(0,l.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-121663"},"MCPE-121663"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Azalea and Flowering Azalea now have ambient occlusion (",(0,l.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-121660"},"MCPE-121660"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bonemealing Small Dripleaves now creates Big Dripleaves of a random height between 1-5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Changed which blocks some world generation features can replace with Moss blocks and Lush Ground:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Moss blocks can replace: Dirt, Podzol, Rooted Dirt, Stone, Cave Vines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lush Ground can replace: Dirt, Podzol, Rooted Dirt, Stone, Cave Vines, Clay, Moss Block, Sand, Gravel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Moss block bonemealing behavior tweaks:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bonemealing a Moss block can now also replace Grass and Mycelium")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The maximum radius covered by Moss bonemealing has been reduced by 1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The chance of growing vegetation when bonemealing a Moss block has been decreased"))),(0,l.kt)("h3",{id:"pointed-dripstone"},"Pointed Dripstone"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If a Stalactite is hanging from a Dripstone block with a water source above, it will slowly grow both the Stalactite from above and a Stalagmite from below"),(0,l.kt)("li",{parentName:"ul"},"Growth speed is random but very slow, a single growth step can take several Minecraft days"),(0,l.kt)("li",{parentName:"ul"},"A Stalactite will only trigger growth if it is max 7 in length, and if the Stalagmite or floor is max 10 blocks below"),(0,l.kt)("li",{parentName:"ul"},"If the stalactite tip is inside water it won't drip, and therefore won't trigger any growth"),(0,l.kt)("li",{parentName:"ul"},"If the Stalagmite tip is underwater it won't receive drops, and therefore won't be grown by a dripping Stalactite. Same thing if there is any fluid between the two tips"),(0,l.kt)("li",{parentName:"ul"},"A Stalagmite or Stalactite will never grow into a fluid")),(0,l.kt)("h3",{id:"bone-meal"},"Bone Meal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Bone Meal now makes a sound when used")),(0,l.kt)("h3",{id:"player"},"Player"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added distinct damage sounds for burning, freezing and drowning (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-111645"},"MCPE-111645"),")"),(0,l.kt)("li",{parentName:"ul"},"Walking sound will now play at positions below y=0 (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121807"},"MCPE-121807"),")")),(0,l.kt)("h2",{id:"features-no-longer-behind-the-experimental-toggle"},"Features No Longer Behind the Experimental Toggle"),(0,l.kt)("h3",{id:"powder-snow"},"Powder Snow"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Powder Snow is now available in the Creative inventory in the game, outside of the Experimental Features"),(0,l.kt)("li",{parentName:"ul"},"Most mobs cannot walk on Powder Snow, but fall into the block instead"),(0,l.kt)("li",{parentName:"ul"},"Mobs inside a block of Powder Snow start to freeze and eventually take damage"),(0,l.kt)("li",{parentName:"ul"},"Players can protect themselves from Powder Snow by equipping leather armor"),(0,l.kt)("li",{parentName:"ul"},"Buckets can be used to scoop up and place Powder Snow"),(0,l.kt)("li",{parentName:"ul"},"Powder Snow blocks are now removed by flowing water and lava (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-111729"},"MCPE-111729"),")"),(0,l.kt)("li",{parentName:"ul"},"Foxes can now walk on Powder Snow (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116836"},"MCPE-116836"),")"),(0,l.kt)("li",{parentName:"ul"},"Exiting a world while being slowed down from freezing will no longer keep the Character slowed after rejoining (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117814"},"MCPE-117814"),")"),(0,l.kt)("li",{parentName:"ul"},"Powder Snow now only applies the freeze component to entities server-side")),(0,l.kt)("h3",{id:"glow-lichen"},"Glow Lichen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Glow Lichen is now available outside the Caves & Cliffs experiment"),(0,l.kt)("li",{parentName:"ul"},"Glow Lichen can now be placed with all six faces set"),(0,l.kt)("li",{parentName:"ul"},"Glow Lichen no longer generates floating in air"),(0,l.kt)("li",{parentName:"ul"},"Glow Lichen can no longer exist with no faces present")),(0,l.kt)("h3",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed invite icon remaining on start screen after signing out of Microsoft account")),(0,l.kt)("h3",{id:"accessibility-features"},"Accessibility Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a bug where Text-to-speech read the wrong text when displaying toasts")),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed issue where /structure delete command is listed in the middle of both /structure load commands (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-114022"},"MCPE-114022"),")"),(0,l.kt)("li",{parentName:"ul"},"Fixed issue where the /stopsound command crashes/freezes the game completely (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120336"},"MCPE-120336"),")")),(0,l.kt)("h3",{id:"gameplay"},"Gameplay"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Renamed Structure Blocks will no longer have the incorrect data mode on creation (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41625"},"MCPE-41625"),")")),(0,l.kt)("h3",{id:"graphical"},"Graphical"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cubemap no longer blinks when loading the game, loading into a world or leaving a world (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-103842"},"MCPE-103842"),")"),(0,l.kt)("li",{parentName:"ul"},"Fixed Strider, Hoglin, Zoglin, Piglin, Piglin Brute Spawn Eggs turning red when quick-moved inside any Inventory in RenderDragon builds"),(0,l.kt)("li",{parentName:"ul"},"Fixed enchantment glint shape of Charged Bow and Crossbow icons in RenderDragon builds")),(0,l.kt)("h3",{id:"items"},"Items"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using an axe on Wood blocks turns them into Stripped Wood blocks (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105998"},"MCPE-105998"),")"),(0,l.kt)("li",{parentName:"ul"},"Fixed items playing \u201cattack\u201d and \u201cusing\u201d animations at the same time on touch input (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117133"},"MCPE-117133"),")")),(0,l.kt)("h3",{id:"vanilla-parity"},"Vanilla Parity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Critical hit particles now generate around a mob instead of under it (",(0,l.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-39599"},"MCPE-39599"),")")))}p.isMDXComponent=!0},26526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));a(9071);const r={},o=void 0,i={unversionedId:"changelog_source/preview/1.17/0/50/tech",id:"changelog_source/preview/1.17/0/50/tech",title:"tech",description:"Actors",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/0/50/tech.mdx",sourceDirName:"changelog_source/preview/1.17/0/50",slug:"/changelog_source/preview/1.17/0/50/tech",permalink:"/en/docs/changelog_source/preview/1.17/0/50/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/50/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Actors",id:"actors",level:3},{value:"General",id:"general",level:3},{value:"Scoreboards",id:"scoreboards",level:3},{value:"Stability and Performance",id:"stability-and-performance",level:3}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"actors"},"Actors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Internal state flag CAN","_","RIDE","_","TARGET that was stopping interactions with items will be properly set/cleared when looking at a mob that cannot be ridden")),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added two new variables to the biomes","_",'client.json file: "remove',"_","all","_","prior","_",'fog" and "inherit',"_","from","_","prior","_",'fog",which control fog merging and/or inheritance'),(0,l.kt)("li",{parentName:"ul"},'"remove',"_","all","_","prior","_",'fog", when true, will clear all previous fog definitions stored on the stack, making the current pack the new "starting point" for fogs'),(0,l.kt)("li",{parentName:"ul"},'"inherit',"_","from","_","prior","_","fog\", when true, will merge a biome's fog definition with matching biomes on the stack then create a new merged definition for it"),(0,l.kt)("li",{parentName:"ul"},"transparentattachable tag should only affect rendering in first person camera perspective")),(0,l.kt)("h3",{id:"scoreboards"},"Scoreboards"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed a crash that sometimes happened when an entity with a scoreboard value was removed from the level")),(0,l.kt)("h3",{id:"stability-and-performance"},"Stability and Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added content warnings for invalid map item parent id caused by the outdated Marketplace world templates")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),o=a(85162);const i={},s=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,l.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),o=a(85162);const i={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,l.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}m.isMDXComponent=!0},80684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(88247),o=a(52360),i=a(26526);const s={sidebar_position:99999869,title:"1.17.0.50",tags:["Official","Changelog","Preview","1.17"]},u="Minecraft Beta - 1.17.0.50 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.17/0/50",id:"official_changelog/preview/1.17/0/50",title:"1.17.0.50",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.17/0/50.mdx",sourceDirName:"official_changelog/preview/1.17/0",slug:"/official_changelog/preview/1.17/0/50",permalink:"/en/docs/official_changelog/preview/1.17/0/50",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/0/50.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.17",permalink:"/en/docs/tags/1-17"}],version:"current",sidebarPosition:99999869,frontMatter:{sidebar_position:99999869,title:"1.17.0.50",tags:["Official","Changelog","Preview","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.0.52",permalink:"/en/docs/official_changelog/preview/1.17/0/52"},next:{title:"1.16.230.56",permalink:"/en/docs/official_changelog/preview/1.16/230/56"}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"minecraft-beta---117050-xbox-onewindows-10android"},"Minecraft Beta - 1.17.0.50 (Xbox One/Windows 10/Android)"),(0,l.kt)(r.default,{gameplayChangelog:(0,l.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,l.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);