"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94309,97983,58185,29933,82468,44423,65330,14668,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=h({queryString:a,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),k=(()=>{const e=s??u;return d({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=a(72389);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),r=c[a].value;r!==i&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",f)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(w,(0,r.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},51701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/60/20/gameplay",id:"changelog_source/preview/1.20/60/20/gameplay",title:"gameplay",description:"Posted: 15 November 2023",source:"@site/docs/changelog_source/preview/1.20/60/20/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/gameplay",permalink:"/docs/changelog_source/preview/1.20/60/20/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"Added Breeze mob",id:"added-breeze-mob",level:2},{value:"Known Parity Breaks",id:"known-parity-breaks",level:2},{value:"Trial Spawner",id:"trial-spawner",level:2},{value:"Trial Chambers",id:"trial-chambers",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"Trial Key",id:"trial-key",level:2},{value:"Crafter",id:"crafter",level:2},{value:"Tuff Bricks",id:"tuff-bricks",level:2},{value:"Boat",id:"boat",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"General",id:"general",level:2},{value:"Character Creator",id:"character-creator",level:2},{value:"\u2018How To Play\u2019 Section",id:"how-to-play-section",level:2},{value:"Items",id:"items",level:2},{value:"Realms",id:"realms",level:2},{value:"User Interface",id:"user-interface",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 15 November 2023"),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/21355297216269",alt:"A darkened Trial Chamber with Breeze mobs and Skeletons around the Trial Spawners"})),(0,n.kt)("p",null,"What do trial chambers, trial spawners, and the breeze all have in common? As well as all being features of the 1.21 update, they\u2019re all coming to testing for Minecraft: Bedrock Edition Beta and Preview\xa0",(0,n.kt)("em",{parentName:"p"},"today"),"! As a lover of chaos and an avid explorer of the unexplored, I can\u2019t wait to\xa0",(0,n.kt)("em",{parentName:"p"},"leap"),"\xa0into this preview and see who can jump the furthest, me (no elytra allowed) or the breeze: a mischievous hostile mob which attacks using the power of wind! Venture down sprawling copper-bulb filled corridors, step through doorways into the unknown, and test yourself (pun intended!) against the trial spawner, a cunning device which spews out a number of mobs based on the size of your party. As always, we\u2019d love your feedback on these features, so please send us your thoughts\xa0",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/Minecraft121Feedback"},"here"),"\xa0and report any bugs at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"!"),(0,n.kt)("h1",{id:"experimental-features"},"Experimental Features"),(0,n.kt)("h2",{id:"added-breeze-mob"},"Added Breeze mob"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Breeze is a cunning, hostile mob that can spawn via Trial Spawner in some rooms within the Trial Chambers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Breeze moves primarily by leaping around the target, sometimes jumping quite long distances")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An aggressive adversary, the Breeze shoots volatile wind energy in the form of wind charge projectiles at its target")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wind charges deal a small amount of damage when colliding directly with an entity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After colliding with an entity or a block, wind charge projectiles produce a wind burst, which knocks back entities in the area by several blocks")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wind bursts also have the effect of 'activating' certain blocks:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Non-Iron Doors and Trapdoors are flipped")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fence Gates are flipped")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Buttons are pressed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Levers are flipped")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bells are rung and swung")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lit Candles (both standalone and on cake) are extinguished")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Wind bursts do not have any effect on Iron Doors, Iron Trapdoors, or any block being held in its position by a Redstone signal"))),(0,n.kt)("h2",{id:"known-parity-breaks"},"Known Parity Breaks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Breeze does not have any non-jump movement during combat"),(0,n.kt)("li",{parentName:"ul"},"Breeze does not deflect projectiles"),(0,n.kt)("li",{parentName:"ul"},"Breeze does not avoid trapdoors")),(0,n.kt)("h2",{id:"trial-spawner"},"Trial Spawner"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Spawner is a new variant of Monster Spawners that ejects rewards upon completion and can have variable levels of challenge in multiplayer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The challenge level will increase for each new player a Trial Spawner notices nearby")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Challenge level will not decrease until it is reset during a Trial Spawner's cooldown")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Unlike normal spawners, a Trial Spawner will spawn a limited number of mobs proportional to its current challenge level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It can only spawn a mob at positions that are within line of sight")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It can spawn a mob regardless of any light level requirement the mob has")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spawned mobs are persistent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Once all mobs are defeated, the Trial Spawner will eject a set of rewards proportional to the current challenge level")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the rewards have been ejected, the Trial Spawner goes into cooldown for 30 minutes during which it will no longer spawn mobs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Spawners cannot be crafted nor obtained by players in Survival - instead, they can be found naturally placed throughout Trial Chambers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Spawners are extremely slow to mine and resistant to explosions, and will not drop even with Silk Touch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When placed in Creative, Trial Spawners have no mob type set by default")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The mob type can be set by interacting with it while holding a Spawn Egg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Creative and Spectator players cannot be detected or noticed by Trial Spawners"))),(0,n.kt)("h2",{id:"trial-chambers"},"Trial Chambers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Chambers are a new structure in the Overworld where players can explore and take on combat challenges during the mid-game")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Chambers are made out of a variety of Copper and Tuff blocks and can be found in different sizes from large to small")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Trial Chambers are a relatively common find throughout the Deepslate layer of the underground")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The layout of each Trial Chamber is procedurally generated, and can include traps, reward chests and a variety of combat spaces")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supply chests can be found between different rooms, and give you blocks and items which help you navigate your trials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reward chests are guarded by challenges in each room, and can be a source of enchanted books and equipment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The loot found in reward chests are still being iterated, and are absolutely not final")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each Trial Chamber will include Trial Spawners with a melee, small melee, or ranged category:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Melee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Zombie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Husk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Slime")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Small Melee")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Spider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cave Spider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Baby Zombie")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Silverfish")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ranged")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Skeleton")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stray")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Each Trial Spawner category will only use one mob for the entire structure when generated, and these mobs are randomized for each Trial Chamber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For example, one Trial Chamber might only spawn Zombies, Cave Spiders and Strays, while another might only spawn Slimes, Silverfish and Skeletons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The exceptions to this are some Trial Spawners in unique rooms which always spawn Breezes"))),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The corridors sometimes end with a dead end"),(0,n.kt)("li",{parentName:"ul"},"Aquifers, Lush Caves, and Sculk Veins sometimes intersect with the Trial Chamber"),(0,n.kt)("li",{parentName:"ul"},"Loot tables can contain wrong items or wrong quantities of items")),(0,n.kt)("h2",{id:"trial-key"},"Trial Key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An item that can only be obtained from Trial Spawners"),(0,n.kt)("li",{parentName:"ul"},"Trial Keys do not currently have any functionality")),(0,n.kt)("h2",{id:"crafter"},"Crafter"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated Crafter textures")),(0,n.kt)("h2",{id:"tuff-bricks"},"Tuff Bricks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated Tuff Bricks texture")),(0,n.kt)("h1",{id:"features-and-bug-fixes"},"Features and Bug Fixes"),(0,n.kt)("h2",{id:"boat"},"Boat"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that made Boats clip through blocks when placed")),(0,n.kt)("h2",{id:"gameplay"},"Gameplay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Container blocks triggered with Redstone (e.g. hopper, dispenser) can now be interacted with consistently when powered by a fast Redstone clock"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue that could inflict unexpected fall damage in certain cases when building blocks while moving (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120140"},"MCPE-120140"),",\xa0",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175791"},"MCPE-175791"),")"),(0,n.kt)("li",{parentName:"ul"},"Players no longer fall through the block they stand on when switching to Spectator mode and back (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170522"},"MCPE-170522"),")")),(0,n.kt)("h2",{id:"general"},"General"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added more informative error messaging in case world exports fails due to external OS issue (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-41898"},"MCPE-41898"),")"),(0,n.kt)("li",{parentName:"ul"},"Improved delay between 100% Loaded and when main menu appears on console platforms")),(0,n.kt)("h2",{id:"character-creator"},"Character Creator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In horizontal split screen, second player can now navigate to the profile screen, and both players can now see each others' character changes")),(0,n.kt)("h2",{id:"how-to-play-section"},"\u2018How To Play\u2019 Section"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated the information about Conduits in the How to Play section (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-65038"},"MCPE-65038"),")"),(0,n.kt)("li",{parentName:"ul"},"Added Netherite as a block type in the Encyclopedia Beacon tab (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-175929"},"MCPE-175929"),")")),(0,n.kt)("h2",{id:"items"},"Items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed issue where eating an Apple does not slow down player movement (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176556"},"MCPE-176556"),")")),(0,n.kt)("h2",{id:"realms"},"Realms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Increased the maximum render distance in Preview on Realms to 20 chunks. We will be collecting data and feedback on the change to determine what render distance increase we can bring to normal Realms. Please share your feedback with us on the feedback discord server or on the\xa0",(0,n.kt)("a",{parentName:"li",href:"https://feedback.minecraft.net/hc/en-us/community/posts/21353469341581"},"feedback site"),"."),(0,n.kt)("li",{parentName:"ul"},"Add an unread post count indicator to the Feed button on the play screen and slots screen")),(0,n.kt)("h2",{id:"user-interface"},"User Interface"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where certain chat messages would briefly be incorrectly shown on the new death screen")))}u.isMDXComponent=!0},63980:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(88715),o=a(86735),i=(a(73353),a(29908),a(47153));const s={},c=void 0,p={unversionedId:"changelog_source/preview/1.20/60/20/tech",id:"changelog_source/preview/1.20/60/20/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.20/60/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech",permalink:"/docs/changelog_source/preview/1.20/60/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Items",id:"items",level:2},{value:"Loot Tables",id:"loot-tables",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2}],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"script-api"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(l.default,{mdxType:"TechSapiStable"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,n.kt)("h2",{id:"editor"},"Editor"),(0,n.kt)("p",null,"The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,n.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,n.kt)("p",null,"Learn\xa0",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},(0,n.kt)("strong",{parentName:"a"},"how to use")),"\xa0the Editor,\xa0join the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},(0,n.kt)("strong",{parentName:"a"},"GitHub Discussion")),"\xa0discussion forum to engage with the team, and get started building extensions via the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit"},(0,n.kt)("strong",{parentName:"a"},"starter kit")),"\xa0and\xa0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor-extension-samples"},(0,n.kt)("strong",{parentName:"a"},"samples")),"."),(0,n.kt)("p",null,"Updates this week:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed editor screen freeze bug caused by CTRL+TAB shortcut.\xa0"),(0,n.kt)("li",{parentName:"ul"},"New API! Simulation paused state is now available for editor scripting via the\xa0editor\xa0global object's\xa0simulation\xa0property.\xa0"),(0,n.kt)("li",{parentName:"ul"},"Menu items now have a\xa0checked\xa0property, of type\xa0boolean | undefined. If the value is defined, the menu will show a checkmark if the value is true."),(0,n.kt)("li",{parentName:"ul"},"Added an ","`","all","`"," optional parameter to the ","`","/reload","`"," slash command when running in Editor mode which enables a full warm reload of the entire Editor.\xa0")),(0,n.kt)("h2",{id:"entity-components"},"Entity Components"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Entity event response run","_","command has been renamed to queue","_","command and has been released out of experimental. Commands run via queue","_","command may be deferred until the next tick. If the entity is removed before the command is run, the command will not execute. Content using run","_","command under experimental will still work for now but the experimental feature is now considered deprecated")),(0,n.kt)("h2",{id:"items"},"Items"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unrecognized fields in component item jsons will now give a warning to the content log in format versions 1.20.60 and higher")),(0,n.kt)("h2",{id:"loot-tables"},"Loot Tables"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decorated Pots now support the use of loot tables")),(0,n.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,n.kt)("h2",{id:"graphical"},"Graphical"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improved performance by fixing a GPU resource allocation bug that resulted in constant reallocations every frame in the Deferred Technical Preview")),(0,n.kt)("h2",{id:"script-api-1"},(0,n.kt)("strong",{parentName:"h2"},"Script API")),(0,n.kt)(i.default,{techSapi:(0,n.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}h.isMDXComponent=!0},86735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_exp",id:"changelog_source/preview/1.20/60/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PlayerPlaceBlockBeforeEvent",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"PlayerPlaceBlockBeforeEvent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Removed\xa0",(0,n.kt)("em",{parentName:"p"},"itemStack: ItemStack"),"\xa0from event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added\xa0",(0,n.kt)("em",{parentName:"p"},"readonly permutationBeingPlaced: BlockPermutation"),"\xa0to event")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Updating\xa0",(0,n.kt)("em",{parentName:"p"},"createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions)"),"\xa0to return a boolean. True if the explosion is successful and false if the explosion is unsuccessful or is cancelled.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Class Player")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added method\xa0",(0,n.kt)("em",{parentName:"p"},"spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;"),"."))))}u.isMDXComponent=!0},29908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},88715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_stable",id:"changelog_source/preview/1.20/60/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Changed\xa0itemStack\xa0in\xa0ItemReleaseUseAfterEvent\xa0to be optional",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changed\xa0",(0,n.kt)("em",{parentName:"li"},"itemStack"),"\xa0in\xa0",(0,n.kt)("em",{parentName:"li"},"ItemReleaseUseAfterEvent"),"\xa0to be optional"),(0,n.kt)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEvent from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEventSignal from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released DataDrivenEntityTriggerAfterEventSignalOptions from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released DefinitionModifier from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},"Released WorldAfterEvents.dataDrivenEntityTriggerEvent from\xa0",(0,n.kt)("em",{parentName:"li"},"beta"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.8.0")),(0,n.kt)("li",{parentName:"ul"},'Improved error messages for "Unsupported or out of bounds value." errors to include the bounds')))}u.isMDXComponent=!0},73353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",id:"changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/20",slug:"/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905),o=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,l.kt)(i.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}h.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=a(67294),l=a(3905),o=a(74866),i=a(85162);const s={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0},30479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905)),l=a(61499),o=a(51701),i=a(63980);const s={sidebar_position:99999960,title:"1.20.60.20",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},c="Minecraft Beta & Preview - 1.20.60.20",p={unversionedId:"official_changelog/preview/1.20/60/20",id:"official_changelog/preview/1.20/60/20",title:"1.20.60.20",description:"} techChangelog={}/>",source:"@site/docs/official_changelog/preview/1.20/60/20.mdx",sourceDirName:"official_changelog/preview/1.20/60",slug:"/official_changelog/preview/1.20/60/20",permalink:"/docs/official_changelog/preview/1.20/60/20",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/60/20.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999960,frontMatter:{sidebar_position:99999960,title:"1.20.60.20",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.60.21",permalink:"/docs/official_changelog/preview/1.20/60/21"},next:{title:"1.20.50.24",permalink:"/docs/official_changelog/preview/1.20/50/24"}},u={},m=[],d={toc:m};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1206020"},"Minecraft Beta & Preview - 1.20.60.20"),(0,n.kt)(l.default,{gameplayChangelog:(0,n.kt)(o.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,n.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}h.isMDXComponent=!0}}]);