"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6708,84093,29933,96475,96730,19626,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),c=a(91980),s=a(67392),p=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,s]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),g=(()=>{const e=c??m;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,o]),tabValues:o}}var g=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=p.indexOf(t),n=s[a].value;n!==i&&(m(t),c(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:u},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},38686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/gameplay",id:"changelog_source/preview/1.19/70/22/gameplay",title:"gameplay",description:"Posted:\xa08 February, 2023",source:"@site/docs/changelog_source/preview/1.19/70/22/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/gameplay",permalink:"/docs/changelog_source/preview/1.19/70/22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Camel</strong>",id:"camel",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:3},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:3},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:3},{value:"<strong>Mobs</strong>",id:"mobs",level:3},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>User Interface</strong>",id:"user-interface-1",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:"),"\xa08 February, 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," This week's Android Beta version may be delayed. We apologize for the inconvenience and are working to resolve the issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/12940611585293",alt:"A Minecraft screenshot of a village with mobs."})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Minecraft Preview and Beta! We are still working on the tech needed to add Armor Trims to the Bedrock Edition Beta and Preview. We will let you know as soon as they are ready so you can experiment with them. Keep your eyes on\u202f",(0,r.kt)("a",{parentName:"p",href:"https://minecraft.net/"},"Minecraft.net"),"\xa0for the latest updates!"),(0,r.kt)("p",null,"As always, you can send us all your feedback and ideas at\u202f",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\u202fand report any bugs to\u202f",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed black lines along the edges of Bamboo Fences and Bamboo Fence Gates (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163360"},"MCPE-163360"),")"),(0,r.kt)("li",{parentName:"ul"},"Importing experimental blocks into a non-experimental world using the Structure Block will now correctly place unknown blocks, which are not interactable")),(0,r.kt)("h2",{id:"camel"},(0,r.kt)("strong",{parentName:"h2"},"Camel")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Camels can once again overcome obstacles as high as one block and a half (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166452"},"MCPE-166452"),")")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove and Bamboo Hanging Signs are now placed correctly in the Creative Inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163340"},"MCPE-163340"),")")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h3",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h3"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Impact sounds of projectiles on Amethyst blocks and clusters are now audible"),(0,r.kt)("li",{parentName:"ul"},"Dead Bush will now drop Sticks when broken with any tool except Shears, even those with the Silk Touch enchantment. Vines will drop nothing in the same situation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163246"},"MCPE-163246"),")"),(0,r.kt)("li",{parentName:"ul"},"Bells no longer break when a block is placed underneath or above them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166742"},"MCPE-166742"),")")),(0,r.kt)("h3",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h3"},"Spectator Mode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Phasing through blocks in third person view no longer makes the camera zoom in and out towards the player\u2019s head (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160467"},"MCPE-160467"),")"),(0,r.kt)("li",{parentName:"ul"},"End Gateways can no longer be used in Spectator Mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165689"},"MCPE-165689"),")")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redstone source can now power a single block from different sides at the same time (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163651"},"MCPE-163651"),")"),(0,r.kt)("li",{parentName:"ul"},"Players are no longer able to begin flying if they have no space to stand up (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166413"},"MCPE-166413"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now fall off of an edge while sneaking if not holding the sneak button")),(0,r.kt)("h3",{id:"blocks-1"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Composter now always consumes an item when becoming full (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162020"},"MCPE-162020"),")")),(0,r.kt)("h3",{id:"mobs"},(0,r.kt)("strong",{parentName:"h3"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Witches will drink a Fire Resistance Potion when standing on a Campfire")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crossbow now shakes while charging arrows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152952"},"MCPE-152952"),")"),(0,r.kt)("li",{parentName:"ul"},"Loot table conditions are no longer ignored in-game when used inside functions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164582"},"MCPE-164582"),")"),(0,r.kt)("li",{parentName:"ul"},"Spawn eggs for Snow Golem, Wither, and Trader Llama now appear correctly in the inventory and hotbar")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new 'Marketplace' icon to the Marketplace screen sidebar")),(0,r.kt)("h2",{id:"user-interface-1"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Carrots now display the proper name in item tooltips when used in ",(0,r.kt)("em",{parentName:"li"},"can","_","place","_","on")," and ",(0,r.kt)("em",{parentName:"li"},"can","_","destroy")," item components (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160838"},"MCPE-160838"),")"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the keyboard interaction on Android devices for text input fields")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Summon command no longer causes some entities to be spawned in at an angle")))}m.isMDXComponent=!0},99239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(51546),l=(a(58632),a(47153));const i={},c=void 0,s={unversionedId:"changelog_source/preview/1.19/70/22/tech",id:"changelog_source/preview/1.19/70/22/tech",title:"tech",description:"Entity Properties",source:"@site/docs/changelog_source/preview/1.19/70/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech",permalink:"/docs/changelog_source/preview/1.19/70/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"<strong>Entity Properties</strong>",id:"entity-properties",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"entity-properties"},(0,r.kt)("strong",{parentName:"h2"},"Entity Properties")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Entity Property value changes could be discarded if done by events fired as part of removal of active behaviors caused by other events")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0},51546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/tech_sapi_exp",id:"changelog_source/preview/1.19/70/22/tech_sapi_exp",title:"tech_sapi_exp",description:"Replaced general setVelocity call with methods to apply impulses to entities:",source:"@site/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Replaced general ",(0,r.kt)("em",{parentName:"p"},"setVelocity")," call with methods to apply impulses to entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearVelocity(): void"),"-"," Sets the current velocity of the Entity to zero"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"applyImpulse(vector: Vector3): void"),"-"," Applies impulse vector to the current velocity of the Entity"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"function"),"\xa0",(0,r.kt)("em",{parentName:"li"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void"),"-"," Applies knockback to the Entity in specified direction based on vertical and horizontal strength"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"setVelocity"))),(0,r.kt)("p",null,"General changes to more consistently use methods when working with simple data-only objects vs. properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BeforeExplosionEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setImpactedBlocks(blocks: Vector3","[","]","): void"),"-"," Sets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"impactedBlocks")))),(0,r.kt)("li",{parentName:"ul"},"BeforeItemUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"BlockInventoryComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockLavaContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockPistonComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getAttachedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted by the activation of this piston"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"attachedBlocks")),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockPotionContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockRecordPlayerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockSignComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockSnowContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockWaterContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Entity"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"headLocation")))),(0,r.kt)("li",{parentName:"ul"},"ExplosionEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"impactedBlocks")))),(0,r.kt)("li",{parentName:"ul"},"ItemStartUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBuildBlockLocation(): Vector3"),"-"," Gets the location of the resulting build block"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"buildBlockLocation")))),(0,r.kt)("li",{parentName:"ul"},"ItemStopUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"ItemUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"NavigationResult",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getPath(): Vector3","[","]"),"-"," Gets the locations of the blocks that comprise the navigation route"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"path")))),(0,r.kt)("li",{parentName:"ul"},"Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Player"),(0,r.kt)("li",{parentName:"ul"},"Removed property",(0,r.kt)("em",{parentName:"li"},"headLocation"))))),(0,r.kt)("p",null,"ItemStack API improvements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"getMaxAmount: number"),"-"," Returns the maximum stack size for the item"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isStackable: bool"),"-"," Returns whether the item is stackable"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"isStackableWith(itemStack: ItemStack): bool"),"-"," Returns whether the item can be stacked with the given item"),(0,r.kt)("li",{parentName:"ul"},"Added read-only ",(0,r.kt)("em",{parentName:"li"},"property"),"\xa0",(0,r.kt)("em",{parentName:"li"},"type: ItemType"),"-"," Returns the type of the item"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clone(): ItemStack"),"-"," Returns a copy of the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"keepOnDeath: bool"),"-"," Sets whether the item is kept on death"),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"lockMode: ItemLockMode"),"-"," Sets whether the item can be moved or dropped"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setCanPlaceOn(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks the item can be placed on"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setCanDestroy(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks this item can destroy")))}m.isMDXComponent=!0},58632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},s=[],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const c={},s=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[],d={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(67294),o=a(3905),l=a(74866),i=a(85162);const c={},s=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[],d={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},83830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),l=a(38686),i=a(99239);const c={sidebar_position:99999780,title:"1.19.70.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},s="Minecraft Beta & Preview - 1.19.70.22",p={unversionedId:"official_changelog/preview/1.19/70/22",id:"official_changelog/preview/1.19/70/22",title:"1.19.70.22",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.19/70/22.mdx",sourceDirName:"official_changelog/preview/1.19/70",slug:"/official_changelog/preview/1.19/70/22",permalink:"/docs/official_changelog/preview/1.19/70/22",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/70/22.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999780,frontMatter:{sidebar_position:99999780,title:"1.19.70.22",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.70.23",permalink:"/docs/official_changelog/preview/1.19/70/23"},next:{title:"1.19.70.21",permalink:"/docs/official_changelog/preview/1.19/70/21"}},m={},u=[],d={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1197022"},"Minecraft Beta & Preview - 1.19.70.22"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);