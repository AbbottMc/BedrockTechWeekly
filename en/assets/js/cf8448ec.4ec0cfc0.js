"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92932,64137,81791,33649,79461],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const f="tabList_TRJ7",b="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(m(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},80987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/40/20/gameplay",id:"changelog_source/preview/1.20/40/20/gameplay",title:"gameplay",description:"Posted: 7 September 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/40/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/40/20",slug:"/changelog_source/preview/1.20/40/20/gameplay",permalink:"/en/docs/changelog_source/preview/1.20/40/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Villager Trade Rebalancing Part 2",id:"villager-trade-rebalancing-part-2",level:2},{value:"<strong>Cartographer</strong>",id:"cartographer",level:2},{value:"<strong>Armorer</strong>",id:"armorer",level:2},{value:"<strong>Structure Loot</strong>",id:"structure-loot",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Audio",id:"audio",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"General",id:"general",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Mobs",id:"mobs",level:2},{value:"Vanilla Parity",id:"vanilla-parity",level:2},{value:"User Interface",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," 7 September 2023"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Information on the Minecraft Preview and Beta:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/19244724805773",alt:"An armorer villager standing in a doorway. Also seen in the village are other villagers, an iron golem, and a cat. There are dropped emeralds on the floor near a chest."})),(0,r.kt)("p",null,"Oh! I wasn\u2019t expecting to see you here, I was trying to find my base! Instead I seem to have stumbled upon this Preview; which includes tweaks to help directionally-challenged explorers, as well as parity adjustments, gameplay fixes, and audio tweaks (stray cats now make a sound when begging for food!) Cartographers in villages will now sell seven new maps too, as experiments to rebalance villager trading continue, making it easier to find villages and other structures. This will come in handy when exploring, as certain Enchanted Books are ",(0,r.kt)("em",{parentName:"p"},"also")," more likely to spawn in certain structures. Soon I everything I own will be Unbreakable! Just as soon as I re-find my base\u2026 As always, we really want to hear your thoughts on these experiments, so please send your feedback and ideas to\xa0",(0,r.kt)("a",{parentName:"p",href:"http://aka.ms/MC120Feedback"},"aka.ms/MC120Feedback"),"\xa0and report any bugs to\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,r.kt)("h2",{id:"villager-trade-rebalancing-part-2"},"Villager Trade Rebalancing Part 2"),(0,r.kt)("p",null,"This pre-release updates the Villager Trade Rebalance experiment. This experiment has no effect on normal worlds. If you want to try these changes, you must turn on the Feature Toggle in the Experiments Menu when creating a new world."),(0,r.kt)("p",null,"Thank you to everyone that has sent in their suggestions and feedback regarding the experimental trade change! We are trying out these changes to rebalance the villager trade system and make it more fair and fun for everyone. However, these changes are not yet final, and they will stay as experimental features while we continue to work on them. We appreciate your feedback on these changes. Visit ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/VillagerTradingFeedback"},"this link")," to share your thoughts! We have been following the discussions about the previous Librarian and Wandering Trader updates and look forward to seeing the conversation continue."),(0,r.kt)("h2",{id:"cartographer"},(0,r.kt)("strong",{parentName:"h2"},"Cartographer")),(0,r.kt)("p",null,"Before now, Cartographers only sold maps to the Ocean Monument and Woodland Mansion. In this experiment Cartographers can sell seven new maps as well. These new maps each point to a different village or structure and can be used to find seven different biomes. This will help players who want to quickly find a specific location without waiting until they come across it by chance."),(0,r.kt)("p",null,"Cartographers from different biomes will sell a different selection of maps. Starting from one village, it will be possible to find every other village type by following maps from village to village."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/19276192204301",alt:"cartographer.png"})),(0,r.kt)("p",null,"Cartographers now sell 7 new maps: Desert Village Map, Jungle Explorer Map, Plains Village Map, Savanna Village Map, Snow Village Map, Swamp Explorer Map, and Taiga Village Map."),(0,r.kt)("h2",{id:"armorer"},(0,r.kt)("strong",{parentName:"h2"},"Armorer")),(0,r.kt)("p",null,"The Armorer's trades have been updated with many changes."),(0,r.kt)("p",null,"The biggest change is that buying diamond armor now requires paying a small amount of Diamonds as well as Emeralds. This is meant to make the Armorer's diamond armor trades less useful at the start of the game when players don't have any Diamonds, while still giving a powerful advantage to advanced players who have spent some time collecting Diamonds."),(0,r.kt)("p",null,"Early-game players will find Armorers useful as a great source of iron armor, Shields, and Emeralds."),(0,r.kt)("p",null,"Other changes include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most master-level Armorers buy Iron Blocks (and pay very well for them)"),(0,r.kt)("li",{parentName:"ul"},"Chainmail armor is exclusively sold by the secret Jungle and Swamp Armorers"),(0,r.kt)("li",{parentName:"ul"},"The Savanna Armorer sells cursed diamond armor at reduced prices"),(0,r.kt)("li",{parentName:"ul"},"The Taiga Armorer can swap one piece of diamond armor for another")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/19276175921549",alt:"armorer.png"})),(0,r.kt)("h2",{id:"structure-loot"},(0,r.kt)("strong",{parentName:"h2"},"Structure Loot")),(0,r.kt)("p",null,"Certain Enchanted Books now have a high chance of generating in some structures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ancient Cities: Mending"),(0,r.kt)("li",{parentName:"ul"},"Mineshafts: Efficiency (I to V)"),(0,r.kt)("li",{parentName:"ul"},"Pillager Outposts: Quick Charge (I to III)"),(0,r.kt)("li",{parentName:"ul"},"Desert Temples: Unbreaking (I to III)"),(0,r.kt)("li",{parentName:"ul"},"Jungle Temples: Unbreaking (I to III)")),(0,r.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,r.kt)("h2",{id:"accessibility"},"Accessibility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where text to speech did not say how to open chat or emotes"),(0,r.kt)("li",{parentName:"ul"},"Text-to-speech message for popup title/description is now played properly")),(0,r.kt)("h2",{id:"audio"},"Audio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guardians and Elder Guardians make flopping sounds again when on land (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-26929"},"MCPE-26929"),")"),(0,r.kt)("li",{parentName:"ul"},"Wither Skeletons now have their own unique sounds"),(0,r.kt)("li",{parentName:"ul"},"Updated the sound that\u2019s played when Wither Skeleton Skulls are placed on top of Note Blocks"),(0,r.kt)("li",{parentName:"ul"},"The sound for picking up items is now played when using the \u2018/give\u2019 command"),(0,r.kt)("li",{parentName:"ul"},"Stray Cats now play a sound when begging for food"),(0,r.kt)("li",{parentName:"ul"},"Changes to Bottles (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157918"},"MCPE-157918"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bottles now emit sounds when filling from Water Blocks"),(0,r.kt)("li",{parentName:"ul"},"Pouring water or potions from a Glass Bottle into a Cauldron emits the appropriate sound"),(0,r.kt)("li",{parentName:"ul"},"Filling a Glass Bottle with Water or Potion from a Cauldron now emits the appropriate sound"),(0,r.kt)("li",{parentName:"ul"},"Drinking from a Glass Bottle now emits the appropriate sound")))),(0,r.kt)("h2",{id:"gameplay"},"Gameplay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sculk Block no longer drops XP when mined with Silk Touch"),(0,r.kt)("li",{parentName:"ul"},"Zombie Villager curing time is now randomized between 3 and 5 minutes, to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where moving slowly on Soul Sand would sometimes cause the player to not receive the Soul Speed movement speed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173155"},"MCPE-173155"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer sometimes clip through blocks when flying in Creative Mode and spamming the sneak button (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172785"},"MCPE-172785"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer sometimes clip through blocks when gliding with Elytra into blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-73307"},"MCPE-73307"),")"),(0,r.kt)("li",{parentName:"ul"},"Buckets can no longer pick up liquids for a few ticks after they've been placed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-100598"},"MCPE-100598"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This should help make placing and retrieving liquid in a quick succession far more consistent as well as help players that are using a water bucket to quickly avoid fall damage"))),(0,r.kt)("li",{parentName:"ul"},"Falling from a great height while in a Boat no longer deals fall damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152753"},"MCPE-152753"),")"),(0,r.kt)("li",{parentName:"ul"},"Fall damage is now absorbed by the entity that lands on the ground when mounted and passed on to passengers if the mount dies")),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Diagonal Banner patterns no longer get inverted when applied to a Shield (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169577"},"MCPE-169577"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated structure icons on Explorer Maps sold by Cartographers"),(0,r.kt)("li",{parentName:"ul"},'Chest blocks use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]","\xa0"),(0,r.kt)("li",{parentName:"ul"},'Trapped Chest blocks use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]"),(0,r.kt)("li",{parentName:"ul"},'Ender Chest blocks use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]"),(0,r.kt)("li",{parentName:"ul"},'Stonecutter blocks use state "minecraft:cardinal',"_",'direction" instead of "facing',"_",'direction", this state uses string values ',"[",'"south", "west", "north", and "east"',"]"," instead of ","[","0, 1, 2, 3, 5, 6","]")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Equipped enchanted armor now has an overall weaker glint, however its intensity more noticeably increases and decreases over time")),(0,r.kt)("h2",{id:"mobs"},"Mobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mobs no longer receive fall damage when falling into a 1 block deep water pool (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173094"},"MCPE-173094"),")"),(0,r.kt)("li",{parentName:"ul"},"Rabbits can once again eat partially and fully grown Carrot crops (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131980"},"MCPE-131980"),")")),(0,r.kt)("h2",{id:"vanilla-parity"},"Vanilla Parity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sheep that have been sheared previously and have since grown back wool will now drop wool on death (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99972"},"MCPE-99972"),")"),(0,r.kt)("li",{parentName:"ul"},"Fox can now pick up items that can be equipped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173898"},"MCPE-173898"),")"),(0,r.kt)("li",{parentName:"ul"},"Closing the inventory of Boat, Raft, or Minecart with Chest now emits vibrations"),(0,r.kt)("li",{parentName:"ul"},"Cartographers no longer offer exploration maps as a trade item when not in the overworld"),(0,r.kt)("li",{parentName:"ul"},"Zombified Villagers now have the correct biome overlays (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172377"},"MCPE-172377"),")"),(0,r.kt)("li",{parentName:"ul"},"Changed the default value of the Respawn Radius in the Advanced Settings to 10")),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Clicking off the game window will not unselect a friend. This will also not add a new invite for the currently selected friend when the game window is selected once more"),(0,r.kt)("li",{parentName:"ul"},"Smithing Table no longer shows double overlapping tooltips for some slots (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168369"},"MCPE-168369"),")"),(0,r.kt)("li",{parentName:"ul"},"Item names no longer overlaps with the absorption health bar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152131"},"MCPE-152131"),")"),(0,r.kt)("li",{parentName:"ul"},"Item names no longer overlaps with the mount health bar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152130"},"MCPE-152130"),")"),(0,r.kt)("li",{parentName:"ul"},"Item names no longer overlaps with the oxygen bar (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152129"},"MCPE-152129"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated Brewing Stand interface to always stay within its background when scaled (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154385"},"MCPE-154385"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix a bug where the tooltip for the v-sync setting was showing without being hovered")))}p.isMDXComponent=!0},12814:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/40/20/tech",id:"changelog_source/preview/1.20/40/20/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/40/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/40/20",slug:"/changelog_source/preview/1.20/40/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/40/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Commands",id:"commands",level:2},{value:"Components",id:"components",level:2},{value:"Molang",id:"molang",level:2},{value:"Trade Tables",id:"trade-tables",level:2},{value:"Script API",id:"script-api",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"User Interface",id:"user-interface",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the names of the ",(0,r.kt)("em",{parentName:"li"},"CameraSetOptions")," options to not include the word 'Script'")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Re-entering a world no longer breaks command autocomplete after a command using "@e',"[","type=item","]",'" was used (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164734"},"MCPE-164734"),")"),(0,r.kt)("li",{parentName:"ul"},'The /damage command with the "override" cause now causes damage through post hit invulnerability (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160290"},"MCPE-160290"),")"),(0,r.kt)("li",{parentName:"ul"},"The recipe command color has been changed to white instead of blue (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173362"},"MCPE-173362"),")")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a content error when attempting to load a damage sensor with an invalid "cause" value\xa0'),(0,r.kt)("li",{parentName:"ul"},'Allow single value parsing for "minecraft:icon" item component'),(0,r.kt)("li",{parentName:"ul"},"The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using \u201cminecraft:dash\u201d")),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Molang updated to version 1.20.40 which replaces "block',"_",'property" and "has',"_","block","_",'property" with "block',"_",'state" and "has',"_","block","_",'state"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.20.40 or higher")))),(0,r.kt)("h2",{id:"trade-tables"},"Trade Tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Trade items now have a "filters" property to determine if a trade should be considered\xa0'),(0,r.kt)("li",{parentName:"ul"},'Trade items no longer support the "biome" property to check villager biome types, the "is',"_","mark","_",'variant" filter can be used in the "filters" property instead to check the villager biome type')),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"script-api"},"Script API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("em",{parentName:"li"},"chat(message: string)")," method"),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"get")," to return ",(0,r.kt)("em",{parentName:"li"},"ItemType | undefined")),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"source")," on ",(0,r.kt)("em",{parentName:"li"},"ItemDefinitionTriggeredAfterEvent")," to be optional"),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"above(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"below(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"north(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"east(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"south(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"west(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"offset(offset: Vector3): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"center(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bottomCenter(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},"Made getItemStack function return ItemStack or undefined"))),(0,r.kt)("li",{parentName:"ul"},"BlockStates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made get function return BlockStateType or undefined"))),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"ExplosionAfterEvent")," and ",(0,r.kt)("em",{parentName:"li"},"ExplosionBeforeEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getUpdatedBlocks()")," will now return ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"setUpdatesBlocks(blocks: Block","[","]",")")," now takes in a ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")))),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player")," playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Property registration is no longer required and ",(0,r.kt)("em",{parentName:"li"},"propertyRegistry")," has been removed from the ",(0,r.kt)("em",{parentName:"li"},"worldInitialize")," event"),(0,r.kt)("li",{parentName:"ul"},"Removed limits on the count and size of properties that can set on an entity or the world"),(0,r.kt)("li",{parentName:"ul"},"Default values have been removed. ",(0,r.kt)("em",{parentName:"li"},"getProperty")," will now always return undefined for unset properties"),(0,r.kt)("li",{parentName:"ul"},"String dynamic property values are now restricted to a length of 32767 bytes"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("em",{parentName:"li"},"removeDynamicProperty")," - Please use ",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," with a value of ",(0,r.kt)("em",{parentName:"li"},"undefined")," to remove a property"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," - Returns an array of all dynamic property ids on an entity/world used by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," - Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," - Removes all dynamic properties added by this behavior pack from an entity/world"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dynamic property numbers are now stored with double precision (64 bits)"))),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events"),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta\xa0")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soul Torches are now treated as point lights in the Deferred Technical Preview\xa0"),(0,r.kt)("li",{parentName:"ul"},"Allow data-driving of point lights and their colors for any block via resource packs in the Deferred Technical Preview")),(0,r.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved chunk rendering performance in Deferred Technical Preview\xa0")),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where "PBR" was not included in HUD while in level using Deferred Technical Preview')))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),o=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(o.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}d.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(31792),o=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0},81166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(88247),o=a(80987),i=a(12814);const s={sidebar_position:99999751,title:"1.20.40.20",tags:["Official","Changelog","Preview","1.20"]},c="Minecraft Beta & Preview - 1.20.40.20",u={unversionedId:"official_changelog/preview/1.20/40/20",id:"official_changelog/preview/1.20/40/20",title:"1.20.40.20",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.20/40/20.mdx",sourceDirName:"official_changelog/preview/1.20/40",slug:"/official_changelog/preview/1.20/40/20",permalink:"/en/docs/official_changelog/preview/1.20/40/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/40/20.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.20",permalink:"/en/docs/tags/1-20"}],version:"current",sidebarPosition:99999751,frontMatter:{sidebar_position:99999751,title:"1.20.40.20",tags:["Official","Changelog","Preview","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.40.21",permalink:"/en/docs/official_changelog/preview/1.20/40/21"},next:{title:"1.20.30.25",permalink:"/en/docs/official_changelog/preview/1.20/30/25"}},p={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---1204020"},"Minecraft Beta & Preview - 1.20.40.20"),(0,r.kt)(l.default,{gameplayChangelog:(0,r.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);