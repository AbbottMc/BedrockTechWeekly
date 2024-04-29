"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[65544,29933,41550,95107,91944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},85206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/10/22/gameplay",id:"changelog_source/preview/1.18/10/22/gameplay",title:"gameplay",description:"Posted: 9 December 2021",source:"@site/docs/changelog_source/preview/1.18/10/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.18/10/22",slug:"/changelog_source/preview/1.18/10/22/gameplay",permalink:"/docs/changelog_source/preview/1.18/10/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 9 December 2021"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work-in-progress version of Minecraft"),(0,r.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game, so please make copies of worlds to prevent losing them"),(0,r.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"This beta is available only on Xbox and Android (Google Play). To join or leave the beta, see ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4416078376333/Screen_Shot_12-09-21_at_12.28_PM.JPG",alt:"A Snowy Minecraft Village"})),(0,r.kt)("p",null,"It's time for another Bedrock Beta! As always, we really appreciate all the feedback you send to\xa0",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),"\xa0and please report any bugs you may find at ",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),". As we often do, we have a handful of small Vanilla Parity bugs in this week's beta. If you would like to tell us what other small parity fixes and features you would like to see added to the game, please let us know in this player survey, which will be open for the next few days: ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MCParitySurvey"},"https://aka.ms/MCParitySurvey")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Worlds with inconsistent layers of bedrock between Y=1 and Y=4, inclusive, (such as those where non-bedrock has generated or been placed in those layers) now correctly and consistently replace bedrock with deepslate. (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-149251"},"MCPE-149251"),")"),(0,r.kt)("li",{parentName:"ul"},"Light Blocks can now be placed on other Light Blocks while sneaking (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137744"},"MCPE-137744"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when trading Maps with Cartographer Villagers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142388"},"MCPE-142388"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed food giving effects 20 times too long (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148553"},"MCPE-148553"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Honey Bottles not removing poison effect"),(0,r.kt)("li",{parentName:"ul"},"Fixed players not teleporting after eating Chorus Fruit"),(0,r.kt)("li",{parentName:"ul"},"Players\u2019 viewing direction will no longer snap when facing South in a Boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148460"},"MCPE-148460"),")"),(0,r.kt)("li",{parentName:"ul"},"When a player dies, the camera now tilts to the right instead of the left (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148604"},"MCPE-148604"),")"),(0,r.kt)("li",{parentName:"ul"},"Lava hitbox no longer extends beyond lava")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Dirt Path side texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148568"},"MCPE-148568"),")"),(0,r.kt)("li",{parentName:"ul"},"Changed 'door","_","oak' texture filename back to 'door","_","wood' (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148502"},"MCPE-148502"),")"),(0,r.kt)("li",{parentName:"ul"},"Reversed Parrot head and wing bottom textures (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148573"},"MCPE-148573"),")"),(0,r.kt)("li",{parentName:"ul"},"Moved Beetroot and Melon Seed textures 1 pixel row down to match Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148561"},"MCPE-148561"),")"),(0,r.kt)("li",{parentName:"ul"},"Removed unused pixels in Cocoa Beans stage 0 and stage 1 textures to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Updated Smooth Stone texture in Armor Stand base (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148565"},"MCPE-148565"),")"),(0,r.kt)("li",{parentName:"ul"},"Removed horizontal lines in Oak and Iron upper Door textures (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148566"},"MCPE-148566"),")"),(0,r.kt)("li",{parentName:"ul"},"Removed hood in Witch, Evoker, and Vindicator textures to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Changed alpha values of Red and Blue Stained Glass textures to match Java Edition (Vanilla Parity)"),(0,r.kt)("li",{parentName:"ul"},"Fixed the hammer icon's color palette on the Anvil screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148575"},"MCPE-148575"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Dark Oak Planks on the Cartography table textures (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148562"},"MCPE-148562"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Spruce Planks on the Barrel bottom texture\xa0"),(0,r.kt)("li",{parentName:"ul"},"Updated Planks on the Lectern base texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148567"},"MCPE-148567"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed highlight inconsistencies in Gold and Diamond Armor textures (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148591"},"MCPE-148591"),")"),(0,r.kt)("li",{parentName:"ul"},"Removed wandering pixel in the Carrot stage 3 texture (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148563"},"MCPE-148563"),")"),(0,r.kt)("li",{parentName:"ul"},"Centered the back texture of Axolotls (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148571"},"MCPE-148571"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Glass Pane top to match the new texture on Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148572"},"MCPE-148572"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed the top texture of Dark Oak Logs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148577"},"MCPE-148577"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Stripped Dark Oak side texture to match the new texture on Java Edition (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148576"},"MCPE-148576"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where End Crystal beams would stop rendering when an End Crystal is out of the players sight (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-149159"},"MCPE-149159"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with Drowned textures on some devices with RenderDragon not correctly discarding alpha/transparent pixels")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slimes are once again aggressive towards Snow Golems (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-146651"},"MCPE-146651"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed the player visual on the inventory screen while gliding. It was previously off-center and could hide elements of the interface"),(0,r.kt)("li",{parentName:"ul"},'The "Invite to Game" button on the pause screen now disables correctly when a server is full')))}p.isMDXComponent=!0},62169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.18/10/22/tech",id:"changelog_source/preview/1.18/10/22/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.18/10/22/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/22",slug:"/changelog_source/preview/1.18/10/22/tech",permalink:"/docs/changelog_source/preview/1.18/10/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/22/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"**",id:"",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduced the number of network packets sent with the subchunk request system and packet optimizations")),(0,r.kt)("h2",{id:"graphics"},(0,r.kt)("strong",{parentName:"h2"},"Graphics")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testing RenderDragon on all Android devices")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added 9 new shapeless recipe JSON files, replacing hard-coded Smithing Table crafting recipes")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add non-experimental is","_","name","_","any, is","_","item","_","name","_","any, and is","_","owner","_","identifier","_","any queries"),(0,r.kt)("li",{parentName:"ul"},"Fixed relative","_","block","_","has","_","all","_","tags block","_","neighbor","_","has","_","all","_","tags and biome","_","has","_","all","_","tags queries to require all tags rather than just any tags"),(0,r.kt)("li",{parentName:"ul"},"Fixed nested conditional (ternary) operator parsing to go right-to-left instead of left-to-right",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.18.10 or higher"),(0,r.kt)("li",{parentName:"ul"},"Previously nested conditional expressions like\xa0A?B:C?D:Ewould evaluate as\xa0(A?B:C)?D:E, now they evaluate as\xa0A?B:(C?D:E)")))),(0,r.kt)("h1",{id:"experimental-features"},"**Experimental Features"),(0,r.kt)("h2",{id:""},"**"),(0,r.kt)("h2",{id:"gametest-framework"},(0,r.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,r.kt)("p",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Added new entity query capabilities in the form of new methods on Dimension and World."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"World object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replaced function\xa0getPlayers : Player","[","]"," with function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players in the dimension. Optionally,\xa0options\xa0can be used to filter the result"),(0,r.kt)("li",{parentName:"ul"},"Added optional argument to\xa0events.addEffect. This argument will limit the callback to only fire for specific entities (see EntityEventOptions)"))),(0,r.kt)("li",{parentName:"ul"},"Dimension object",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players. Optionally,\xa0options\xa0can be used to filter the result"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0getEntities(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all entities in the dimension. Optionally,\xa0options\xa0can be used to filter the result"))),(0,r.kt)("li",{parentName:"ul"},"EntityQueryOptions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added class\xa0EntityQueryOptions- Provides additional filtering options when calling\xa0getEntities\xa0and\xa0getPlayers"))),(0,r.kt)("li",{parentName:"ul"},"EntityQueryScoreOptions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added class\xa0EntityQueryScoreOptions- Used with\xa0EntityQueryOptions\xa0to provide scoreboard filtering"))),(0,r.kt)("li",{parentName:"ul"},"EntityEventOptions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to filter events that fire on entities to restrict the callback to only certain ones."),(0,r.kt)("li",{parentName:"ul"},"Property\xa0entity: Entity","[","]"," - If specified, will restrict to just this entity"),(0,r.kt)("li",{parentName:"ul"},"Property\xa0entityTypes: string","[","]"," - If specified, will restrict to entities with the specified type (e.g.,\xa0minecraft:creeper)")))))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},96540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(85206),i=a(62169);const s={sidebar_position:99999838,title:"1.18.10.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},c="Minecraft Beta - 1.18.10.22 (Xbox / Android)",u={unversionedId:"official_changelog/preview/1.18/10/22",id:"official_changelog/preview/1.18/10/22",title:"1.18.10.22",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.18/10/22.mdx",sourceDirName:"official_changelog/preview/1.18/10",slug:"/official_changelog/preview/1.18/10/22",permalink:"/docs/official_changelog/preview/1.18/10/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.18/10/22.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.18",permalink:"/docs/tags/1-18"}],version:"current",sidebarPosition:99999838,frontMatter:{sidebar_position:99999838,title:"1.18.10.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.10.24",permalink:"/docs/official_changelog/preview/1.18/10/24"},next:{title:"1.18.10.21",permalink:"/docs/official_changelog/preview/1.18/10/21"}},p={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta---1181022-xbox--android"},"Minecraft Beta - 1.18.10.22 (Xbox / Android)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);