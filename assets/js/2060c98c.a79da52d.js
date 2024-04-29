"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14067,96265,29933,3400,70856,87865,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var k=a(72389);const v="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},25474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/21/gameplay",id:"changelog_source/preview/1.20/30/21/gameplay",title:"gameplay",description:"Posted: 9 August 2023",source:"@site/docs/changelog_source/preview/1.20/30/21/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/30/21",slug:"/changelog_source/preview/1.20/30/21/gameplay",permalink:"/docs/changelog_source/preview/1.20/30/21/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/21/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Audio</strong>",id:"audio",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Village Raids</strong>",id:"village-raids",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Structures</strong>",id:"structures",level:2},{value:"<strong>Sculk Vibrations</strong>",id:"sculk-vibrations",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 9 August 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/18365286259213",alt:"A pillager standing in a pillager outpost in a Cherry Grove biome, in Minecraft"})),(0,r.kt)("p",null,"We have some more fixes and tweaks ready for you in this week\u2019s Minecraft Preview and Beta. Please report and upvote any bugs you encounter at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),". Here\u2019s a list of the latest changes:"),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"audio"},(0,r.kt)("strong",{parentName:"h2"},"Audio")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pigs now emit sounds when transformed into Zombified Piglins (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169557"},"MCPE-169557"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using Shears to carve Pumpkins now produces a carving sound like in Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Hoglins now have their own sound when transforming into Zoglins (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-87379"},"MCPE-87379"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Sound is now consistently played when an item is dropped into Lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-96015"},"MCPE-96015"),")"),(0,r.kt)("li",{parentName:"ul"},"Sound is no longer played sometimes when Netherite items are dropped into Lava (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-95872"},"MCPE-95872"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Snow Golems now play a sound when they throw Snowballs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119083"},"MCPE-119083"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Husks now play sounds when converting to Zombies underwater\xa0")),(0,r.kt)("h2",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h2"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed worlds downloaded from Realms not loading packs correctly")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes due to running out of rendering resources while entering a world through the End Portal back to the Overworld (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139021"},"MCPE-139021"),")"),(0,r.kt)("li",{parentName:"ul"},"The horizon no longer changes color when the player is standing under blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85888"},"MCPE-85888"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Crouch-jumping while aiming forward and holding down the build button will no longer continue to build blocks upwards past where the player is aiming\xa0"),(0,r.kt)("li",{parentName:"ul"},"The discount for curing a Zombie Villager no longer increases when the same Villager is reinfected and cured multiple times")),(0,r.kt)("h2",{id:"village-raids"},(0,r.kt)("strong",{parentName:"h2"},"Village Raids")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Witches now throw healing and regeneration potions at raiders during village raids")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players can now toggle flying when crawling or sneaking in Creative Mode\xa0"),(0,r.kt)("li",{parentName:"ul"},"Fence Gate icon model in UI and Item Frames now match the Fence Gate Block (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44296"},"MCPE-44296"),")\xa0")),(0,r.kt)("h2",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h2"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated menu HUD icons for touch controls")),(0,r.kt)("h2",{id:"structures"},(0,r.kt)("strong",{parentName:"h2"},"Structures")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pillager Outposts can now generate in Cherry Grove biomes (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173323"},"MCPE-173323"),")")),(0,r.kt)("h2",{id:"sculk-vibrations"},(0,r.kt)("strong",{parentName:"h2"},"Sculk Vibrations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Collecting Fish, Axolotls, and Tadpoles with Buckets now emits vibrations at the right position\xa0"),(0,r.kt)("li",{parentName:"ul"},"Applying a Nametag now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Evokers summoning Vexes or Fangs now emit vibrations"),(0,r.kt)("li",{parentName:"ul"},"Chickens laying eggs now emit vibrations"),(0,r.kt)("li",{parentName:"ul"},"Turtles and Frogs laying eggs now emit vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Using Bone Meal now emits vibrations"),(0,r.kt)("li",{parentName:"ul"},"Sculk Sensors and Sculk Shriekers no longer activate repeatedly when a projectile is stuck in them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172704"},"MCPE-172704"),")"),(0,r.kt)("li",{parentName:"ul"},"Chiseled Bookshelves now emit vibrations when Books are inserted into them using Hoppers (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168887"},"MCPE-168887"),")\xa0"),(0,r.kt)("li",{parentName:"ul"},"Extinguishing Fire now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Mounting or dismounting a vehicle now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Rabbits eating Carrot crops now emit vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Foxes eating Sweet Berry Bushes now emit vibrations"),(0,r.kt)("li",{parentName:"ul"},"Unequipping armor now emits vibrations at a different frequency than equipping it"),(0,r.kt)("li",{parentName:"ul"},"Placing a Banner now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Placing a Bamboo Sapling now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Placing a Mob Head now emits vibrations"),(0,r.kt)("li",{parentName:"ul"},"Placing a Lily Pad now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Placing Frogspawn now emits vibrations"),(0,r.kt)("li",{parentName:"ul"},"Placing or adding Sea Pickles now emits vibrations\xa0"),(0,r.kt)("li",{parentName:"ul"},"Adding a Turtle Egg to already placed ones now emits vibrations of the same frequency as placing a block\xa0"),(0,r.kt)("li",{parentName:"ul"},"Destroying a Turtle Egg now always emits vibrations of the same frequency as destroying a block, regardless of how many Turtle Eggs are left"),(0,r.kt)("li",{parentName:"ul"},"Turtle Eggs cracking now emit vibrations")))}p.isMDXComponent=!0},23521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(42634),i=(a(44828),a(47153));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/30/21/tech",id:"changelog_source/preview/1.20/30/21/tech",title:"tech",description:"Graphics",source:"@site/docs/changelog_source/preview/1.20/30/21/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/21",slug:"/changelog_source/preview/1.20/30/21/tech",permalink:"/docs/changelog_source/preview/1.20/30/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Events</strong>",id:"events",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Scripting</strong>",id:"scripting",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"graphics"},(0,r.kt)("strong",{parentName:"h2"},"Graphics")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new experimental toggle to Video menu for players on Windows which reduces input latency; enabling this setting will increase battery consumption")),(0,r.kt)("h2",{id:"editor"},(0,r.kt)("strong",{parentName:"h2"},"Editor")),(0,r.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,r.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,r.kt)("p",null,"Learn ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor, join the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," discussion forum to engage with the team, and get started building extensions via the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},"starter kit")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},"samples"),"."),(0,r.kt)("p",null,"Fixes this week:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed infinite gizmo drag and bugs around gizmo drag size, setting it as a limit to 100 units. How this works: Total volume of 100x100x100. Ability to create multiple selections within the bounds of the 100x100x100 total volumes.")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when it tries to place an invalid custom feature\xa0")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"events"},(0,r.kt)("strong",{parentName:"h2"},"Events")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ScriptEventCommandMessageAfterEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made ",(0,r.kt)("em",{parentName:"li"},"initiator"),", ",(0,r.kt)("em",{parentName:"li"},"sourceBlock"),", and ",(0,r.kt)("em",{parentName:"li"},"sourceEntity")," optional types")))),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash in the Deferred Technical Preview that could occur while generating terrain\xa0")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"isSolid"),", ",(0,r.kt)("em",{parentName:"li"},"isLiquid"),", and ",(0,r.kt)("em",{parentName:"li"},"isAir")," to be properties instead of methods\xa0")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed issue with content errors occurring with the Holiday Creator Features toggle turned on when using a json object version of "max',"_","stack","_",'size", "can',"_","destroy","_","in","_",'creative", "hover',"_","text","_",'color"\xa0')),(0,r.kt)("h2",{id:"scripting"},(0,r.kt)("strong",{parentName:"h2"},"Scripting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("em",{parentName:"li"},"removeParticipant")," is now properly synced with clients (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172920"},"MCPE-172920"),")")))}d.isMDXComponent=!0},42634:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/21/tech_sapi_exp",id:"changelog_source/preview/1.20/30/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Moved\xa0ProjectileHitBlockAfterEvent\xa0to\xa01.5.0",source:"@site/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/21",slug:"/changelog_source/preview/1.20/30/21/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ProjectileHitBlockAfterEvent"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ProjectileHitEntityAfterEvent"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ProjectileHitBlockAfterEventSignal"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ProjectileHitEntityAfterEventSignal"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"BlockHitInformation"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"EntityHitInformation"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setColorRGB(variableName: string, color: RGB)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setColorRGBA(variableName: string, color: RGBA)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setFloat(variableName: string, number: number)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setSpeedAndDirection(variableName: string, speed: number, direction: Vector3)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"setVector3(variableName: string, vector: Vector3)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")))),(0,r.kt)("li",{parentName:"ul"},"RGB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"RGB"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"RGBA"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"triggerEvent(eventName: string)"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"1.5.0")))),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"EntityEquipmentInventoryComponent"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"EntityEquippableComponent"))))}p.isMDXComponent=!0},44828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/30/21/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/30/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/21",slug:"/changelog_source/preview/1.20/30/21/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}p.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(r.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(67294),o=a(3905),i=a(74866),l=a(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}g.isMDXComponent=!0},81355:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(61499),i=a(25474),l=a(23521);const s={sidebar_position:99999974,title:"1.20.30.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.30.21",u={unversionedId:"official_changelog/preview/1.20/30/21",id:"official_changelog/preview/1.20/30/21",title:"1.20.30.21",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/30/21.mdx",sourceDirName:"official_changelog/preview/1.20/30",slug:"/official_changelog/preview/1.20/30/21",permalink:"/docs/official_changelog/preview/1.20/30/21",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/30/21.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999974,frontMatter:{sidebar_position:99999974,title:"1.20.30.21",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.30.22",permalink:"/docs/official_changelog/preview/1.20/30/22"},next:{title:"1.20.30.20",permalink:"/docs/official_changelog/preview/1.20/30/20"}},p={},m=[],d={toc:m};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1203021"},"Minecraft Beta & Preview - 1.20.30.21"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(l.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);