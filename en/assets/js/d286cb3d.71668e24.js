"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[11399,64137,81791,55297,17619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=d({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??p;return h({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=a(72389);const f="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},98427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/24-25/gameplay",id:"changelog_source/preview/1.19/0/24-25/gameplay",title:"gameplay",description:"Posted: April 14, 2022",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/0/24-25/gameplay.mdx",sourceDirName:"changelog_source/preview/1.19/0/24-25",slug:"/changelog_source/preview/1.19/0/24-25/gameplay",permalink:"/en/docs/changelog_source/preview/1.19/0/24-25/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/24-25/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>\xa0",id:"information-on-the-minecraft-preview-and-beta",level:2},{value:"<strong>Recovery Compass</strong>",id:"recovery-compass",level:2},{value:"<strong>Sculk Shrieker</strong>",id:"sculk-shrieker",level:3},{value:"<strong>Warden</strong>",id:"warden",level:3},{value:"<strong>Reinforced Deepslate</strong>",id:"reinforced-deepslate",level:2},{value:"<strong>Mangrove Swamps</strong>",id:"mangrove-swamps",level:2},{value:"<strong>Frog</strong>",id:"frog",level:2},{value:"<strong>Goat Horn (Experimental)</strong>",id:"goat-horn-experimental",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>Allay</strong>",id:"allay",level:2},{value:"<strong>Boat with Chest</strong>",id:"boat-with-chest",level:2},{value:"<strong>Mud Bricks</strong>",id:"mud-bricks",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:2},{value:"<strong>Blending</strong>",id:"blending",level:3},{value:"<strong>Command Blocks</strong>",id:"command-blocks",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," April 14, 2022"),(0,r.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,r.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:"),"\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beta Version: 1.19.0.24 | Preview Version: 1.19.0.25"),(0,r.kt)("li",{parentName:"ul"},"While the version numbers between Preview and Beta are different, there is no difference in game content"),(0,r.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,r.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, Windows 10/11, and iOS devices. More information can be found at ",(0,r.kt)("a",{parentName:"li",href:"http://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,r.kt)("li",{parentName:"ul"},"The beta is available on Xbox, Windows 10/11, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"ms/JoinMCBeta")," for detailed instructions\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/5540422782989/beta19_2_16x9.jpg",alt:"A Minecraft screenshot, shoiwng the Ancient City, and a new compass!"})),(0,r.kt)("p",null,"Here's a list of what is new in this week's Beta! As always, please search and report any bugs you may find at\xa0",(0,r.kt)("a",{parentName:"p",href:"http://bugs.mojang.com/"},"bugs.mojang.com")," and send us ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/MinecraftBetaFeedback"},"your feedback"),".  "),(0,r.kt)("h1",{id:"minecraft-preview-on-xbox"},(0,r.kt)("strong",{parentName:"h1"},"Minecraft Preview on Xbox")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xbox Series X|S players may receive an error message (code 0x8b050033) when launching Minecraft Preview."),(0,r.kt)("li",{parentName:"ul"},"Uninstall and reinstall Minecraft Preview to complete the update and resolve the error.")),(0,r.kt)("h1",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h1"},"Spectator Mode")),(0,r.kt)("p",null,"Some of our more eagle-eyed players might have noticed that last week\u2019s beta and preview contained early functionality supporting the spectator gamemode, which was accidentally made available in the game. We know that this is a top feature request for the Bedrock Edition of Minecraft, and our developers have been working hard to bring you this feature."),(0,r.kt)("p",null,"We are currently working on developing the first iteration of spectator mode to get your feedback to plan for the next iteration. However, we still have a lot of work to do! The first iteration will not be finished in time for 1.19, so we will be moving it to an Experimental Toggle in an upcoming beta. Until we have a more polished version for you, please consider that any content or maps built on this feature will not be supported as this feature will change and evolve. We won't be accepting bug reports related to spectator mode until our first iteration is released, as the feature is likely to change during development."),(0,r.kt)("h1",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h1"},"Features and Bug Fixes")),(0,r.kt)("h2",{id:"recovery-compass"},(0,r.kt)("strong",{parentName:"h2"},"Recovery Compass")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new Recovery Compass can be crafted with Echo Shards which can only be found and are unique to Ancient City chests","*",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Unlike a normal Compass, the Recovery Compass will point to the last place you died"),(0,r.kt)("li",{parentName:"ul"},"If you are not in the dimension where you last died, or you haven't died yet in your world, it will randomly spin"),(0,r.kt)("li",{parentName:"ul"},"It can be crafted with 1 Compass surrounded by 8 Echo Shards"),(0,r.kt)("li",{parentName:"ul"},"*","Echo Shards will be available as loot in Ancient Cities in a future update")))),(0,r.kt)("h3",{id:"sculk-shrieker"},(0,r.kt)("strong",{parentName:"h3"},"Sculk Shrieker")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tweaked the Shrieking particles of the Sculk Shrieker (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153007"},"MCPE-153007"),")"),(0,r.kt)("li",{parentName:"ul"},"Sculk Shriekers should not be triggered by Redstone activation"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0can","_","summonblockstate to Sculk Shriekers that determines whether a Shrieker can trigger a Warden to spawn. Only Sculk Shriekers placed during world generation in the Deep Dark and Ancient Cities will have this state set to true (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153801"},"MCPE-153801"),")"),(0,r.kt)("li",{parentName:"ul"},"Running away from a Sculk Shrieker during shrieking is no longer a viable way of preventing the summoning of a Warden"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Shrieker no longer attempts to spawn the Warden in Peaceful mode"),(0,r.kt)("li",{parentName:"ul"},"The Sculk Shrieker now spreads the highest threat level amongst players in the vicinity, not the threat level of the closest player")),(0,r.kt)("h3",{id:"warden"},(0,r.kt)("strong",{parentName:"h3"},"Warden")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Warden now has a hurt animation when taking damage (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153575"},"MCPE-153575"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the Warden's ribcage UVs were overlapping their right tendril UVs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153797"},"MCPE-153797"),")"),(0,r.kt)("li",{parentName:"ul"},"Warden will now prioritize players over mobs when angry"),(0,r.kt)("li",{parentName:"ul"},"Improved Warden suspect tracking gameplay behavior, and increased the Warden\u2019s \u2018sniff\u2019 range"),(0,r.kt)("li",{parentName:"ul"},"Spawning a Warden in Creative mode no longer applies the Darkness effect to the player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153536"},"MCPE-153536"),")")),(0,r.kt)("h2",{id:"reinforced-deepslate"},(0,r.kt)("strong",{parentName:"h2"},"Reinforced Deepslate")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reinforced Deepslate can no longer be pushed by Pistons (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153548"},"MCPE-153548"),")")),(0,r.kt)("h2",{id:"mangrove-swamps"},(0,r.kt)("strong",{parentName:"h2"},"Mangrove Swamps")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove Swamp biome generation is now at parity with Java Edition")),(0,r.kt)("h2",{id:"frog"},(0,r.kt)("strong",{parentName:"h2"},"Frog")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Froglight and Frogspawn blocks now have new sounds (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153195"},"MCPE-153195"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153193"},"MCPE-153193"),")"),(0,r.kt)("li",{parentName:"ul"},"Frog Spawn is now called Frogspawn (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153210"},"MCPE-153210"),")")),(0,r.kt)("h2",{id:"goat-horn-experimental"},(0,r.kt)("strong",{parentName:"h2"},"Goat Horn (Experimental)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Goat Horn sound is now instant"),(0,r.kt)("li",{parentName:"ul"},"Added Goat Horn variations to the Pillager outposts"),(0,r.kt)("li",{parentName:"ul"},"Removed Copper Horn. Although community feedback was mostly positive, the Copper Horn was a fun experiment that didn't quite live up to our design goals, so we decided to remove it. We understand people might be sad, but to be able to try out new and interesting things we need to be able to remove experimental features sometimes. This leaves space for even better features in the future!")),(0,r.kt)("h2",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h2"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Player can now change hotbar item slot while in a Boat (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153762"},"MCPE-153762"),")")),(0,r.kt)("h2",{id:"allay"},(0,r.kt)("strong",{parentName:"h2"},"Allay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur if a non-owner player takes an item from the Allay while it was chasing its owner"),(0,r.kt)("li",{parentName:"ul"},"The Allay now regenerates two health each second")),(0,r.kt)("h2",{id:"boat-with-chest"},(0,r.kt)("strong",{parentName:"h2"},"Boat with Chest")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The group of Boats with Chests now has the correct translation in inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153345"},"MCPE-153345"),")"),(0,r.kt)("li",{parentName:"ul"},"Mangrove Boat with Chest now has a crafting recipe (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153738"},"MCPE-153738"),")")),(0,r.kt)("h2",{id:"mud-bricks"},(0,r.kt)("strong",{parentName:"h2"},"Mud Bricks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crafting Mud Bricks now correctly gives four Mud Bricks from one craft")),(0,r.kt)("h2",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h2"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set stack limit for brewing station result slot to 1, as to avoid getting input stacks being overwritten when the brew is complete"),(0,r.kt)("li",{parentName:"ul"},"Fix crash in block","_","placer component when the block parameter is an unknown block"),(0,r.kt)("li",{parentName:"ul"},"Blocks affected by gravity now fall correctly on replaceable blocks (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152937"},"MCPE-152937"),")"),(0,r.kt)("li",{parentName:"ul"},"Slabs can now be placed continuously (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151887"},"MCPE-151887"),")")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where clicking on the top row of pixels of a button in the new Create New World screen didn't properly trigger its action (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153239"},"MCPE-153239"),")")),(0,r.kt)("h2",{id:"graphical"},(0,r.kt)("strong",{parentName:"h2"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing the fire animation to flicker when the player is standing in a lava Cauldron while in creative mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-148999"},"MCPE-148999"),")")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed incorrect names for White Dye, Black Dye, Brown Dye, and Blue Dye (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153522"},"MCPE-153522"),")")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed enchantment option on Pocket UI Profile not being displayed")),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity")),(0,r.kt)("h3",{id:"blending"},(0,r.kt)("strong",{parentName:"h3"},"Blending")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Several improvements to level chunk blending")),(0,r.kt)("h2",{id:"command-blocks"},(0,r.kt)("strong",{parentName:"h2"},"Command Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a Command Block clones itself twice with the /clone command, the cloned command block will now activate on the first try (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-122188"},"MCPE-122188"),")")))}p.isMDXComponent=!0},82079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));a(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/0/24-25/tech",id:"changelog_source/preview/1.19/0/24-25/tech",title:"tech",description:"Commands",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/0/24-25/tech.mdx",sourceDirName:"changelog_source/preview/1.19/0/24-25",slug:"/changelog_source/preview/1.19/0/24-25/tech",permalink:"/en/docs/changelog_source/preview/1.19/0/24-25/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/0/24-25/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>General</strong>",id:"general",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Command selectors will now correctly identify players by name instead of their name tag"),(0,r.kt)("li",{parentName:"ul"},"Title commands fired before a client was done joining will now show instead of being ignored")),(0,r.kt)("h2",{id:"mobs"},(0,r.kt)("strong",{parentName:"h2"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The is","_","moving filter now returns the correct value when an actor is moving")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoid crashes on certain devices when parsing Molang expressions with many OR or AND operators")),(0,r.kt)("h2",{id:"general"},(0,r.kt)("strong",{parentName:"h2"},"General")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tie consume animation to consume duration")),(0,r.kt)("h1",{id:"known-issues-in-this-beta"},(0,r.kt)("strong",{parentName:"h1"},"Known Issues in this Beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interactive blocks (such as Hoppers) cannot be shift-placed continuously without opening the UI")))}p.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}h.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}h.isMDXComponent=!0},5684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(98427),i=a(82079);const s={sidebar_position:99999821,title:"1.19.0.24-25",tags:["Official","Changelog","Preview","1.19"]},c="Minecraft Beta & Preview - 1.19.0.24/25",u={unversionedId:"official_changelog/preview/1.19/0/24-25",id:"official_changelog/preview/1.19/0/24-25",title:"1.19.0.24-25",description:"} techChangelog={}/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/preview/1.19/0/24-25.mdx",sourceDirName:"official_changelog/preview/1.19/0",slug:"/official_changelog/preview/1.19/0/24-25",permalink:"/en/docs/official_changelog/preview/1.19/0/24-25",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.19/0/24-25.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Preview",permalink:"/en/docs/tags/preview"},{label:"1.19",permalink:"/en/docs/tags/1-19"}],version:"current",sidebarPosition:99999821,frontMatter:{sidebar_position:99999821,title:"1.19.0.24-25",tags:["Official","Changelog","Preview","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.19.0.26-27",permalink:"/en/docs/official_changelog/preview/1.19/0/26-27"},next:{title:"1.19.0.20-21",permalink:"/en/docs/official_changelog/preview/1.19/0/20-21"}},p={},m=[],h={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft-beta--preview---11902425"},"Minecraft Beta & Preview - 1.19.0.24/25"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:(0,r.kt)(i.default,{mdxType:"TechChangelog"}),mdxType:"Switcher"}))}d.isMDXComponent=!0}}]);