"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9845,29933,45838,75649,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var k=a(72389);const b="tabList__CuJ",f="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},52720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.17/0/52/gameplay",id:"changelog_source/preview/1.17/0/52/gameplay",title:"gameplay",description:"Posted: April 28, 2021",source:"@site/docs/changelog_source/preview/1.17/0/52/gameplay.mdx",sourceDirName:"changelog_source/preview/1.17/0/52",slug:"/changelog_source/preview/1.17/0/52/gameplay",permalink:"/docs/changelog_source/preview/1.17/0/52/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/52/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>Features No Longer Behind the Experimental Toggle</strong>\xa0",id:"features-no-longer-behind-the-experimental-toggle",level:2},{value:"<strong>Axolotl</strong>\xa0<strong>&amp; Glow Squid</strong>\xa0",id:"axolotl-glow-squid",level:2},{value:"<strong>Deepslate</strong>\xa0",id:"deepslate",level:2},{value:"<strong>Powder Snow</strong>\xa0",id:"powder-snow",level:2},{value:"<strong>Glow Lichen</strong>\xa0",id:"glow-lichen",level:2},{value:"<strong>Blocks</strong>\xa0",id:"blocks",level:2},{value:"<strong>Crystals</strong>\xa0",id:"crystals",level:2},{value:"<strong>Lush</strong>\xa0<strong>C**</strong>aves**\xa0",id:"lushcaves",level:2},{value:"<strong>Dripstone</strong>\xa0",id:"dripstone",level:2},{value:"<strong>Glow Squid</strong>\xa0",id:"glow-squid",level:2},{value:"<strong>Goat</strong>\xa0",id:"goat",level:2},{value:"<strong>Copper</strong>\xa0",id:"copper",level:2},{value:"<strong>Moss block</strong>\xa0",id:"moss-block",level:2},{value:"<strong>Pointed Dripstone</strong>\xa0",id:"pointed-dripstone",level:2},{value:"<strong>Raw</strong>\xa0<strong>O**</strong>re**\xa0",id:"rawore",level:2},{value:"<strong>Localization</strong>\xa0",id:"localization",level:2},{value:"<strong>General</strong>\xa0<strong>Tweaks and Bug Fixes</strong>",id:"generaltweaks-and-bug-fixes",level:2},{value:"<strong>Graphical</strong>\xa0",id:"graphical",level:2},{value:"<strong>Items</strong>\xa0",id:"items",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs",level:2},{value:"<strong>User Interface</strong>\xa0",id:"user-interface",level:2},{value:"<strong>Android</strong>\xa0",id:"android",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Mobs</strong>\xa0",id:"mobs-1",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," April 28, 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions")),(0,r.kt)("p",null,"It's time for another Caves\xa0&\xa0Cliffs\xa0beta\xa0update, and we're pleased to let you know that\xa0we've moved\xa0even\xa0more features\xa0out from behind the experimental\xa0toggle, and\xa0fixed a significant number of bugs!\xa0"),(0,r.kt)("p",null,"Please continue to leave us your feedback for these features in the threads at ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),".\xa0"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360093786271/beta17_2_crop2.jpg",alt:"beta17_2_crop2.jpg"})),(0,r.kt)("h2",{id:"features-no-longer-behind-the-experimental-toggle"},(0,r.kt)("strong",{parentName:"h2"},"Features No Longer Behind the Experimental Toggle"),"\xa0"),(0,r.kt)("h2",{id:"axolotl-glow-squid"},(0,r.kt)("strong",{parentName:"h2"},"Axolotl"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"& Glow Squid"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Axolotls are now available outside the Caves and Cliffs experiment \xa0"),(0,r.kt)("li",{parentName:"ul"},"Axolotls\xa0can be rehydrated with Splash Water Bottle and Lingering Water Bottle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Axolotls\xa0now have their missing sounds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123304"},"MCPE-123304"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Axolotls now swim way more often (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123263"},"MCPE-123263"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated the axolotl and glow squid spawn rules. They can now spawn in any biome and up to y=63 instead of y=30\xa0\xa0")),(0,r.kt)("h2",{id:"deepslate"},(0,r.kt)("strong",{parentName:"h2"},"Deepslate"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cobblestone and Cobbled\xa0Deepslate\xa0are now used to repair stone items on an Anvil\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123670"},"MCPE","-","123670"),")")),(0,r.kt)("h2",{id:"powder-snow"},(0,r.kt)("strong",{parentName:"h2"},"Powder Snow"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Powder Snow is now available in the Creative inventory\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using a\xa0Bucket of Powder Snow on a Cauldron filled with Powder Snow results in a Powder Snow block being placed above the Cauldron\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Cauldrons fill up in snowy weather, creating a renewable source of Powder Snow (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105412"},"MCPE-105412"),")"),(0,r.kt)("li",{parentName:"ul"},"Most mobs cannot walk on Powder Snow, but fall into the block\xa0instead\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mobs inside a block of Powder Snow start to freeze and eventually take\xa0damage\xa0"),(0,r.kt)("li",{parentName:"ul"},"Players can protect themselves from Powder Snow by equipping leather\xa0armor\xa0"),(0,r.kt)("li",{parentName:"ul"},"Buckets can be used to scoop up and place Powder\xa0Snow\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fall damage is now correctly prevented when a player or mob falls on a single powder snow block \xa0")),(0,r.kt)("h2",{id:"glow-lichen"},(0,r.kt)("strong",{parentName:"h2"},"Glow Lichen"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow Lichen is now visibly as close to the surface it is placed on as Java Edition\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122665"},"MCPE-122665"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Glow Lichen now has a map\xa0color\xa0that more closely resembles\xa0the\xa0color\xa0of the block\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126316"},"MCPE-126316"),")\xa0\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Colors\xa0applied to text on\xa0signs are no longer barely visible (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117516"},"MCPE-117516"),") \xa0")),(0,r.kt)("h2",{id:"crystals"},(0,r.kt)("strong",{parentName:"h2"},"Crystals"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amethysts, Amethyst Shards, Amethyst Cluster Variants, Amethyst Buds, Budding Amethysts, Tuff Blocks, Calcite, and Smooth Basalt are now available in the Creative inventory\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Spyglass is now available in\xa0the\xa0Creative\xa0inventory\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Deepslate\xa0is now available in the Creative inventory\xa0\xa0")),(0,r.kt)("h2",{id:"lushcaves"},(0,r.kt)("strong",{parentName:"h2"},"Lush"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"C**"),"aves**\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azalea Leaves and Flowered Azalea Leaves have correct\xa0color\xa0on maps \xa0"),(0,r.kt)("li",{parentName:"ul"},"Small\xa0dripleaf\xa0can now be placed on\xa0moss\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lush Cave blocks are now available in the Creative inventory\xa0\xa0")),(0,r.kt)("h2",{id:"dripstone"},(0,r.kt)("strong",{parentName:"h2"},"Dripstone"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dripstone is now available outside the Caves and Cliffs experimental toggle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Pointed dripstone is now available outside the Caves and Cliffs experimental toggle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Water drips from stalactites\xa0")),(0,r.kt)("h2",{id:"glow-squid"},(0,r.kt)("strong",{parentName:"h2"},"Glow Squid"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glow Squid are now available outside the Caves and Cliffs experimental toggle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Glow Item Frames are now available outside the Caves and Cliffs experimental toggle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Glow Ink\xa0is now available outside the Caves and Cliffs experimental toggle\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Maps now\xa0glow in Glow Item Frames (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117503"},"MCPE-117503"),") \xa0")),(0,r.kt)("h2",{id:"goat"},(0,r.kt)("strong",{parentName:"h2"},"Goat"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Goats no longer drop\xa0Mutton when\xa0killed\xa0"),(0,r.kt)("li",{parentName:"ul"},"Goats are now available outside the Caves and Cliffs experimental toggle\xa0\xa0")),(0,r.kt)("h2",{id:"copper"},(0,r.kt)("strong",{parentName:"h2"},"Copper"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Waxed Oxidized Cut Copper Slabs can now be merged into full Waxed Oxidized Cut Copper blocks \xa0"),(0,r.kt)("li",{parentName:"ul"},"Copper is now available in the Creative inventory\xa0\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Lightning\xa0Rod is now available in the Creative inventory\xa0\xa0")),(0,r.kt)("h2",{id:"moss-block"},(0,r.kt)("strong",{parentName:"h2"},"Moss block"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using\xa0Bone\xa0Meal on a sapling planted on a\xa0Moss block now correctly grows a tree (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-125689"},"MCPE-125689"),") \xa0")),(0,r.kt)("h2",{id:"pointed-dripstone"},(0,r.kt)("strong",{parentName:"h2"},"Pointed Dripstone"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pointed\xa0Dripstone now correctly gets destroyed after\xa0the\xa0block it was placed on are broken by block updates \xa0")),(0,r.kt)("h2",{id:"rawore"},(0,r.kt)("strong",{parentName:"h2"},"Raw"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"O**"),"re**\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fortune enchantment\xa0now cause more\xa0raw iron/gold/copper\xa0ore\xa0to be dropped \xa0"),(0,r.kt)("li",{parentName:"ul"},"Raw copper, iron and gold ore are now available outside the experimental toggle\xa0\xa0")),(0,r.kt)("h2",{id:"localization"},(0,r.kt)("strong",{parentName:"h2"},"Localization"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'The\xa0"Caves and Cliffs" toggle is now correctly localized\xa0')),(0,r.kt)("h2",{id:"generaltweaks-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"General"),"\xa0",(0,r.kt)("strong",{parentName:"h2"},"Tweaks and Bug Fixes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can\xa0once again\xa0host multiplayer games\xa0and send invites\xa0over mobile/cellular data\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55405"},"MCPE-55405"),") \xa0\xa0")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chemistry items icons no longer disappear after suspend/resume in Education Edition\xa0worlds\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue with underwater fog being the same for all Biomes and view distance not increasing over time (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124282"},"MCPE-124282"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124266"},"MCPE-124266"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Underwater view distance is\xa0increased in Rivers and land biomes\xa0to be more\xa0like\xa0Minecraft Java when\xa0\u201cCaves\xa0and\xa0Cliffs\u201d\xa0experiment toggle is enabled.\xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Boats now break when they collide with a\xa0Cactus from the side (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106044"},"MCPE-106044"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Changed\xa0the\xa0position of bow to match previous versions\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116741"},"MCPE-116741"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Crossbows in\xa0players' and\xa0mobs' hands are now rendered correctly in all perspective modes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116737"},"MCPE-116737"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed animation issue causing an off-hand held shield to appear to re-equip whenever the player changes their main-hand item\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116773"},"MCPE-116773"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Cauldrons that have been emptied after containing potion are now correctly filled with water when it rains \xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where Fireworks of all\xa0colors\xa0could be crafted from any other\xa0color\xa0of Firework Charges (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-90715"},"MCPE-90715"),") \xa0")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blazes and\xa0Enderman\xa0once again\xa0receive damage from\xa0splash\xa0water\xa0bottles (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-97483"},"MCPE-97483"),")\xa0\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where mobs would not spawn below y=0 when\xa0the\xa0Caves and Cliffs\xa0experimental toggle\xa0is enabled\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122056"},"MCPE-122056"),") \xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated the appearance of the loading screen \xa0")),(0,r.kt)("h2",{id:"android"},(0,r.kt)("strong",{parentName:"h2"},"Android"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android should\xa0once\xa0again see invite notifications and achievement toasts!\xa0(",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-54902"},"MCPE-54902)"),"\xa0")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with certain blocks which could cause them to grow too quickly when ticked \xa0")),(0,r.kt)("h2",{id:"mobs-1"},(0,r.kt)("strong",{parentName:"h2"},"Mobs"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs and entities\xa0once again\xa0make a sound when entering water\xa0\xa0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0'/setworldspawn'\xa0command is now prohibited in legacy worlds and affected worlds will reset their altered spawn positions to the original position (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-27797"},"MCPE-27797"),")")))}p.isMDXComponent=!0},74447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.17/0/52/tech",id:"changelog_source/preview/1.17/0/52/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.17/0/52/tech.mdx",sourceDirName:"changelog_source/preview/1.17/0/52",slug:"/changelog_source/preview/1.17/0/52/tech",permalink:"/docs/changelog_source/preview/1.17/0/52/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/0/52/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>Add-Ons and Script Engine</strong>\xa0",id:"add-ons-and-script-engine",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a\xa0MoLang\xa0query to get default bone pivots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116741"},"MCPE-116741"),") \xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated\xa0MoLang\xa0query to return normalized item use time remaining based off given parameters (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116737"},"MCPE-116737"),")")))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),s=a(85162);const i={},u=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),s=a(85162);const i={},u=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(s.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}g.isMDXComponent=!0},4302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(52720),s=a(74447);const i={sidebar_position:99999868,title:"1.17.0.52",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},u="Minecraft Beta - 1.17.0.52 (Xbox One/Windows 10/Android)",c={unversionedId:"official_changelog/preview/1.17/0/52",id:"official_changelog/preview/1.17/0/52",title:"1.17.0.52",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.17/0/52.mdx",sourceDirName:"official_changelog/preview/1.17/0",slug:"/official_changelog/preview/1.17/0/52",permalink:"/docs/official_changelog/preview/1.17/0/52",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.17/0/52.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.17",permalink:"/docs/tags/1-17"}],version:"current",sidebarPosition:99999868,frontMatter:{sidebar_position:99999868,title:"1.17.0.52",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.17"]},sidebar:"changelogSidebar",previous:{title:"1.17.0.54",permalink:"/docs/official_changelog/preview/1.17/0/54"},next:{title:"1.17.0.50",permalink:"/docs/official_changelog/preview/1.17/0/50"}},p={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---117052-xbox-onewindows-10android"},"Minecraft Beta - 1.17.0.52 (Xbox One/Windows 10/Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(s.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);