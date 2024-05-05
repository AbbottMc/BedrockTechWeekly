"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[33940],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=g(a),m=r,c=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(c,l(l({ref:t},h),{},{components:a})):n.createElement(c,l({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.19/70/gameplay",id:"changelog_source/stable/1.19/70/gameplay",title:"gameplay",description:"Posted: March 14, 2023",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.19/70/gameplay.mdx",sourceDirName:"changelog_source/stable/1.19/70",slug:"/changelog_source/stable/1.19/70/gameplay",permalink:"/en/docs/changelog_source/stable/1.19/70/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/70/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>Changes:</strong>",id:"changes",level:2},{value:"<strong>Player Emotes</strong>",id:"player-emotes",level:2},{value:"<strong>Vanilla Parity:</strong>",id:"vanilla-parity",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Experimental Features:</strong>",id:"experimental-features",level:2},{value:"<strong>Archaeology</strong>",id:"archaeology",level:2},{value:"<strong>Brush</strong>",id:"brush",level:2},{value:"<strong>Pottery Shards and Decorated Pots</strong>",id:"pottery-shards-and-decorated-pots",level:2},{value:"<strong>Suspicious Sand</strong>",id:"suspicious-sand",level:2},{value:"<strong>Sniffer</strong>",id:"sniffer",level:2},{value:"<strong>Torchflower</strong>",id:"torchflower",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay-1",level:2},{value:"<strong>Mobs</strong>",id:"mobs-1",level:2},{value:"<strong>Blocks</strong>",id:"blocks-1",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:2},{value:"<strong>Realms</strong>",id:"realms",level:2}],h={toc:g},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," March 14, 2023"),(0,r.yg)("p",null,"The latest Minecraft update has arrived! This release brings several quality of life improvements to the game, changes to horse breeding, plus early versions of Archaeology and the Sniffer as new experimental features from the upcoming 1.20 update. Let\u2019s see what\u2019s inside!"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed multiple crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"When breeding horses, the baby horse now has a chance of being better than its parents in speed, jump strength, and health"),(0,r.yg)("li",{parentName:"ul"},"Improvements to player emotes"),(0,r.yg)("li",{parentName:"ul"},"Take an early look at archaeology and the sniffer mob with experimental features"),(0,r.yg)("li",{parentName:"ul"},"Fixes to over 30 community-reported issues")),(0,r.yg)("p",null,"Please continue to upvote and report any new bugs at ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and leave us your feedback at ",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/13956491959949",alt:"patchnotes_r19u7.png"})),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes:")),(0,r.yg)("h2",{id:"player-emotes"},(0,r.yg)("strong",{parentName:"h2"},"Player Emotes")),(0,r.yg)("p",null,"Several improvements have come to the emote system in Bedrock Edition!"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Emote usage now appears in chat"),(0,r.yg)("li",{parentName:"ul"},"The emote wheel now has four slots with an improved interface"),(0,r.yg)("li",{parentName:"ul"},"Quick emoting with new hotkeys"),(0,r.yg)("li",{parentName:"ul"},"Easier sorting of emotes"),(0,r.yg)("li",{parentName:"ul"},"Creating a new character now automatically applies four default emotes")),(0,r.yg)("p",null,"Check out the ",(0,r.yg)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/article/new-emote-features-bedrock-edition"},"New Emote Features for Bedrock Edition")," article for more details.  "),(0,r.yg)("h2",{id:"vanilla-parity"},(0,r.yg)("strong",{parentName:"h2"},"Vanilla Parity:")),(0,r.yg)("p",null,"Improvements have been made with vanilla parity to align with Java Edition, especially with horse breeding, mobs, and blocks."),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where night could not be skipped if one or more players were on the death screen"),(0,r.yg)("li",{parentName:"ul"},"Eating and drinking animations are now always centered, regardless of screen aspect ratio")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Breeding horses can now produce random variants (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129071"},"MCPE-129071"),")"),(0,r.yg)("li",{parentName:"ul"},"When breeding horses, the baby Horse now has a chance of being better than its parents in speed, jump strength, and health. This change is intended to make Horse breeding a viable way of getting great Horses, if a player starts with good parents and puts in enough time and Golden Carrots"),(0,r.yg)("li",{parentName:"ul"},"Horses cannot be pushed over Fences covered by Carpets anymore (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164717"},"MCPE-164717"),")"),(0,r.yg)("li",{parentName:"ul"},"Ghasts\u2019 sound volume will now fade the further they are from the player (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35222"},"MCPE-35222"),")"),(0,r.yg)("li",{parentName:"ul"},"Villagers will now emit anger particles when hit by a player outside of a village"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Zombified Piglins would spawn in the Nether in light levels above 11"),(0,r.yg)("li",{parentName:"ul"},"Minecarts can now eject mobs into liquid blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-120078"},"MCPE-120078"),")"),(0,r.yg)("li",{parentName:"ul"},"Witches will now drink a Fire Resistance Potion when standing on a Campfire")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bells that are connected to multiple blocks no longer drop when one block is broken"),(0,r.yg)("li",{parentName:"ul"},"Note Block sound attenuation over a distance is now linear (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164935"},"MCPE-164935"),")"),(0,r.yg)("li",{parentName:"ul"},"Impact sounds of projectiles on Amethyst blocks and clusters are now audible"),(0,r.yg)("li",{parentName:"ul"},"Dead Bush will now drop Sticks when broken with any tool except Shears, even those with the Silk Touch enchantment. Vines will drop nothing in the same situation (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163246"},"MCPE-163246"),")  ")),(0,r.yg)("h2",{id:"experimental-features"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Features:")),(0,r.yg)("p",null,"The Sniffer and Archaeology are now available for testing that are coming to Minecraft 1.20, ",(0,r.yg)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/article/the-trails---tales-update"},"now known as ",(0,r.yg)("strong",{parentName:"a"},"Trails & Tales")),"! The sniffer and archeology are two experimental features that you can try out in this release."),(0,r.yg)("p",null,"As these features are still incomplete, in development, and considered a work in progress, be sure to backup your worlds before enabling experimental features. The features can be enabled by turning on the \u201cNext Major Update\u201d toggle in world settings."),(0,r.yg)("h2",{id:"archaeology"},(0,r.yg)("strong",{parentName:"h2"},"Archaeology")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added the Brush item"),(0,r.yg)("li",{parentName:"ul"},"Added the Decorated Pot block"),(0,r.yg)("li",{parentName:"ul"},"Added four Pottery Shards (Arms Up, Skull, Prize, and Archer)"),(0,r.yg)("li",{parentName:"ul"},"Added the Suspicious Sand block"),(0,r.yg)("li",{parentName:"ul"},"Added Suspicious Sand to the Desert Temple"),(0,r.yg)("li",{parentName:"ul"},"Added Suspicious Sand to the Desert Well")),(0,r.yg)("h2",{id:"brush"},(0,r.yg)("strong",{parentName:"h2"},"Brush")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Brush is a craftable item you can use to brush things")),(0,r.yg)("h2",{id:"pottery-shards-and-decorated-pots"},(0,r.yg)("strong",{parentName:"h2"},"Pottery Shards and Decorated Pots")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pottery Shards have pictures on them. They cannot be crafted and must be found in the world. Hint: you will need a Brush! By crafting four of these together you can create a Decorated Pot with a picture on each side."),(0,r.yg)("li",{parentName:"ul"},"You can also use Brick items instead of Pottery Shards in the crafting recipe. The sides that were made from Brick items will not have pictures."),(0,r.yg)("li",{parentName:"ul"},"Smash a Decorated Pot with any block-breaking tool to break it apart and get the Pottery Shards back! Or hit it with your fist to pick up the pot without breaking it.")),(0,r.yg)("h2",{id:"suspicious-sand"},(0,r.yg)("strong",{parentName:"h2"},"Suspicious Sand")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Desert Temples and Desert Wells now contain Suspicious Sand. This fragile block is hard to spot and easy to destroy, so be careful!"),(0,r.yg)("li",{parentName:"ul"},"If you manage to find the Suspicious Sand and brush it with your Brush, you will extract objects that were buried long ago."),(0,r.yg)("li",{parentName:"ul"},"We're giving you an early look at these Archaeology features. We want to spend more time developing them. Please let us know where you think we can improve or expand!")),(0,r.yg)("h2",{id:"sniffer"},(0,r.yg)("strong",{parentName:"h2"},"Sniffer")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Sniffer is the mob vote winner of Minecraft Live 2022 and the first ","[","HS1","]","\xa0extinct mob brought to life and added to the game"),(0,r.yg)("li",{parentName:"ul"},"Sniffers cannot be tempted or tamed"),(0,r.yg)("li",{parentName:"ul"},"Sniffers are passive friendly mobs"),(0,r.yg)("li",{parentName:"ul"},"Sniffer sniffs in the air and occasionally dig for seeds")),(0,r.yg)("h2",{id:"torchflower"},(0,r.yg)("strong",{parentName:"h2"},"Torchflower")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Torchflower seed can be planted on farmland and grows into a flower"),(0,r.yg)("li",{parentName:"ul"},"The seed can be used to breed two Sniffers"),(0,r.yg)("li",{parentName:"ul"},"The full-grown flower can be harvested and replanted but can also be crafted into a dye  ")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("h2",{id:"stability-and-performance"},(0,r.yg)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed an issue where simultaneously pressing the "Mine" and "Place" button on any input device while targeting a Structure Block could cause the game to crash (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155689"},"MCPE-155689"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash on Nintendo Switch when attempting to log in while set to local network mode"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when entering a 1.7.1.0 world in 1.8 or above (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165564"},"MCPE-165564"),")")),(0,r.yg)("h2",{id:"gameplay-1"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The player's crosshair now properly mines/interacts with items in front of them while swimming/gliding, rather than 1 block above their position (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-57257"},"MCPE-57257"),")"),(0,r.yg)("li",{parentName:"ul"},"Players no longer take rapid damage when touching damaging blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165347"},"MCPE-165347"),")"),(0,r.yg)("li",{parentName:"ul"},"Projectiles shot while swimming/gliding no longer spawn from above the player's position (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31896"},"MCPE-31896"),")"),(0,r.yg)("li",{parentName:"ul"},"Items dropped while swimming/gliding, manually or on death, no longer spawn from above the player's position (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31896"},"MCPE-31896"),")")),(0,r.yg)("h2",{id:"mobs-1"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where an Allay holding a Lead wasn't able to be leashed unless the player held a full stack of 64 Leads in hand"),(0,r.yg)("li",{parentName:"ul"},"Parrots will no longer shake while on a player riding a Horse that is turning mid-jump"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug causing global entities (e.g. Ender Dragon and projectiles) to stop rendering when out of normal entity render distance (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161136"},"MCPE-161136"),")")),(0,r.yg)("h2",{id:"blocks-1"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Sounds from all Button types and Lever are now controlled by "Blocks" slider in Audio Settings (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166420"},"MCPE-166420"),")"),(0,r.yg)("li",{parentName:"ul"},"Redstone source can now power a single block from different sides at the same time (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163651"},"MCPE-163651"),")"),(0,r.yg)("li",{parentName:"ul"},"Destroying Mangrove Log or Mangrove Wood now properly cause leaves to decay"),(0,r.yg)("li",{parentName:"ul"},"End Crystals occupying the same space as a block will no longer cause that block to disappear"),(0,r.yg)("li",{parentName:"ul"},"Players are now able to place top Slabs in blocks that are only partially blocked by an entity (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155016"},"MCPE-155016"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer see through partial blocks when sneaking or riding in third person (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156273"},"MCPE-156273"),")"),(0,r.yg)("li",{parentName:"ul"},"Composter now always consumes an item when becoming full (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162020"},"MCPE-162020"),")"),(0,r.yg)("li",{parentName:"ul"},"Importing experimental blocks into a non-experimental world using the Structure Block will now correctly place unknown blocks, which are not interactable"),(0,r.yg)("li",{parentName:"ul"},"Error messages about building outside the world height limits no longer appear when simply interacting with blocks at the world height limits from certain angles (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152935"},"MCPE-152935"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Observers would not detect changes due to corrupted data (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150506"},"MCPE-150506"),")"),(0,r.yg)("li",{parentName:"ul"},"Hoppers now pull in items from above them through all blocks that have a lower height than a full block (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-55824"},"MCPE-55824"),")")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Crossbows now shake while charging arrows (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152952"},"MCPE-152952"),")"),(0,r.yg)("li",{parentName:"ul"},"Spawn eggs for Snow Golem, Wither, and Trader Llama now appear correctly in the inventory and hotbar"),(0,r.yg)("li",{parentName:"ul"},"Written Books can now be moved in the inventory even when the player has identical Written Books")),(0,r.yg)("h2",{id:"touch-controls"},(0,r.yg)("strong",{parentName:"h2"},"Touch Controls")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated the How to Play screen with information on new touch controls"),(0,r.yg)("li",{parentName:"ul"},"Changing input modes from Gamepad to Touch while an item is selected will return the selected to the inventory or drop it"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue on the Furnace screen where double-tapping the output window caused other slots to become unselectable (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164589"},"MCPE-164589"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where stack splitting was automatically initiated on the first slot when opening a small Chest"),(0,r.yg)("li",{parentName:"ul"},"Allowed left and right D-pad buttons to keep input when the forward button is pressed (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155199"},"MCPE-155199"),")"),(0,r.yg)("li",{parentName:"ul"},"Added the leave Boat button when the player falls from a height within in the Boat (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158489"},"MCPE-158489"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that prevented players from removing equipped armor by tapping on an item or block in the Creative inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165790"},"MCPE-165790"),")"),(0,r.yg)("li",{parentName:"ul"},"Tweaked the keyboard interaction on Android devices for text input fields")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Fixed an issue where the "Mine" tooltip was appearing when targeting a block with a Trident in Creative game mode (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44846"},"MCPE-44846"),")"),(0,r.yg)("li",{parentName:"ul"},"Navigating right with controller left stick on the Marketplace sidebar now collapses it"),(0,r.yg)("li",{parentName:"ul"},"Added a new 'Marketplace' icon to the Marketplace screen sidebar"),(0,r.yg)("li",{parentName:"ul"},"Ocean Explorer, Woodland Explorer, and Treasure Maps now show the proper icon in the inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163464"},"MCPE-163464"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where mouse scrolling on the Friend Options dropdown would not scroll the dropdown contents"),(0,r.yg)("li",{parentName:"ul"},"Resolved an issue where graphical elements of the Sign-In/Sign-Up screen could extend beyond the bounds of the dialog container"),(0,r.yg)("li",{parentName:"ul"},'When starting a new world in Pocket UI, removed the "Press Open Chat to open chat" message for players with text-to-speech turned off'),(0,r.yg)("li",{parentName:"ul"},"Double-clicking on the Furnace output slot will no longer drop the item (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165079"},"MCPE-165079"),")"),(0,r.yg)("li",{parentName:"ul"},'Fixed a bug where moving the player or camera with a controller while text-to-speech for UI was turned on would cause the narrator to say "X of Y"'),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where the Edit World screen couldn't be opened for a world if the corresponding world directory had a space in it (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166763"},"MCPE-166763"),")"),(0,r.yg)("li",{parentName:"ul"},"The loading screen no longer flickers when entering the Nether in immersive VR mode"),(0,r.yg)("li",{parentName:"ul"},"The swap item animation now plays when switching hotbar items of the same type with the same durability")),(0,r.yg)("h2",{id:"spectator-mode"},(0,r.yg)("strong",{parentName:"h2"},"Spectator Mode")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Phasing through blocks in third person view no longer makes the camera zoom in and out towards the player\u2019s head (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160467"},"MCPE-160467"),")"),(0,r.yg)("li",{parentName:"ul"},"End Gateways can no longer be used in Spectator Mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165689"},"MCPE-165689"),")")),(0,r.yg)("h2",{id:"realms"},(0,r.yg)("strong",{parentName:"h2"},"Realms")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added a Sign In button on the Realms screen if player is not yet signed in"),(0,r.yg)("li",{parentName:"ul"},'Fixed the issue that the "Find Friends" button and the "Close Realm" buttons would be autofocused when the "Members" or "Subscription" tab was clicked'),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where players were not able to create another world on Realms if the first Create World on Realms attempt was interrupted"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where players could see duplicate applied packs with unknown titles the first time they entered the Realms settings screen"),(0,r.yg)("li",{parentName:"ul"},"Resetting a Realms World now correctly updates the World settings"),(0,r.yg)("li",{parentName:"ul"},"Removed the Close button in the Play on Realm popup dialog when using controllers"),(0,r.yg)("li",{parentName:"ul"},"Updated the reset/replace world confirmation text to make it clearer what each function does"),(0,r.yg)("li",{parentName:"ul"},"Fixed the world list not updating with a new Realm immediately after accepting an invite"),(0,r.yg)("li",{parentName:"ul"},"In Realms Settings-",">","Members, the dropdown '...' menu can now be open/closed with the Enter key and navigated with arrow keys")))}u.isMDXComponent=!0}}]);