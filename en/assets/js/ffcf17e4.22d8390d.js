"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||o;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.19.60/gameplay",id:"changelog_source/stable/1.19.60/gameplay",title:"gameplay",description:"Vanilla Parity:",source:"@site/docs/changelog_source/stable/1.19.60/gameplay.md",sourceDirName:"changelog_source/stable/1.19.60",slug:"/changelog_source/stable/1.19.60/gameplay",permalink:"/en/docs/changelog_source/stable/1.19.60/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19.60/gameplay.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>Vanilla Parity:</strong>",id:"vanilla-parity",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Experimental Features:</strong>",id:"experimental-features",level:2},{value:"<strong>Mob Heads on Note Blocks</strong>",id:"mob-heads-on-note-blocks",level:3},{value:"<strong>Piglin Mob Head</strong>",id:"piglin-mob-head",level:3},{value:"<strong>Bamboo</strong>",id:"bamboo",level:3},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:3},{value:"<strong>Gameplay</strong>",id:"gameplay",level:3},{value:"<strong>Mobs</strong>",id:"mobs-1",level:3},{value:"<strong>Blocks</strong>",id:"blocks-1",level:3},{value:"<strong>Items</strong>",id:"items",level:3},{value:"<strong>Touch Controls</strong>",id:"touch-controls",level:3},{value:"<strong>Graphical</strong>",id:"graphical",level:3},{value:"<strong>Accessibility</strong>",id:"accessibility",level:3},{value:"<strong>User Interface</strong>",id:"user-interface",level:3},{value:"<strong>Android</strong>",id:"android",level:3},{value:"<strong>Realms</strong>",id:"realms",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h2"},"Vanilla Parity:")),(0,r.kt)("h3",{id:"mobs"},(0,r.kt)("strong",{parentName:"h3"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new Spawn Egg items for Ender Dragon, Iron Golem, Snow Golem, and Wither mobs, which can be obtained using commands"),(0,r.kt)("li",{parentName:"ul"},"Polar Bear Spawn Egg colors have changed to distinguish it from the Ghast Spawn Egg"),(0,r.kt)("li",{parentName:"ul"},"Vex hitboxes are now vertically centered with their models"),(0,r.kt)("li",{parentName:"ul"},"Vex and Allay now sit properly in Boats and Minecarts (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164441"},"MCPE-164441"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed Vex texture disparity between Bedrock and Java (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164227"},"MCPE-164227"),")"),(0,r.kt)("li",{parentName:"ul"},"Slimes and Magma Cubes no longer spawn in spaces that are 2 blocks tall or less (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-46540"},"MCPE-46540"),")"),(0,r.kt)("li",{parentName:"ul"},"Glow Squid now emit particles when spawned outside of water"),(0,r.kt)("li",{parentName:"ul"},"Using a Saddle on a tamed Horse, Donkey, or Mule now results in it being equipped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-83815"},"MCPE-83815"),")"),(0,r.kt)("li",{parentName:"ul"},"Using Horse Armor on an unarmored, tamed Horse now results in it being equipped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163336"},"MCPE-163336"),")"),(0,r.kt)("li",{parentName:"ul"},"Using a Carpet on a tamed Llama now results in it being equipped (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163336"},"MCPE-163336"),")"),(0,r.kt)("li",{parentName:"ul"},"Dispensers can now equip Saddles and Horse Armors to tamed Horses"),(0,r.kt)("li",{parentName:"ul"},"Dispensers can now equip Saddles and Chests to tamed Mules and Donkeys"),(0,r.kt)("li",{parentName:"ul"},"Dispensers can now equip Carpets and Chests to tamed Llamas"),(0,r.kt)("li",{parentName:"ul"},"Dispensers can now equip Saddles to Pigs and Striders"),(0,r.kt)("li",{parentName:"ul"},"Shears in a Dispenser now only shear one Sheep at a time"),(0,r.kt)("li",{parentName:"ul"},"Shears in a Dispenser can now shear Snow Golems and Mooshrooms"),(0,r.kt)("li",{parentName:"ul"},"The Wandering Trader no longer has a chance to offer duplicate Seed trades (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161780"},"MCPE-161780"),")"),(0,r.kt)("li",{parentName:"ul"},"Endermen, Skeletons, and Wither Skeletons now only spawn at light level 7 and below (instead of 11 and below) in the Nether (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163701"},"MCPE-163701"),")"),(0,r.kt)("li",{parentName:"ul"},"Updated the Skeleton/Zombie Horse's and Donkey/Mule's saddle and chest textures"),(0,r.kt)("li",{parentName:"ul"},"Villagers will now ensure that rain can pass through the block above them before launching Fireworks when celebrating after a raid victory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152386"},"MCPE-152386"),")"),(0,r.kt)("li",{parentName:"ul"},"Axolotls no longer tick their dry out timer when unloaded (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-131041"},"MCPE-131041"),")"),(0,r.kt)("li",{parentName:"ul"},"Husks can now fit in a two blocks high space and baby Husks in a one-high space (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105369"},"MCPE-105369"),")"),(0,r.kt)("li",{parentName:"ul"},"All mobs are now able to path through Wither Roses (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159212"},"MCPE-159212"),")")),(0,r.kt)("h3",{id:"blocks"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Crimson and Warped block sets now have a unique set of sounds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Campfires do not set players and mobs on fire anymore, but still inflict damage (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-98931"},"MCPE-98931)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Campfires do not destroy Minecarts and Boats anymore (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-109489"},"MCPE-109489"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bamboo plant placement now behaves the same way as Java Edition; it will no longer grow by clicking on the side of a Bamboo plant with a Bamboo item in-hand (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-99587"},"MCPE-99587"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bamboo sapling no longer replaces double plants when placed (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-99806"},"MCPE-99806"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pumpkins and Melons can now grow on Mycelium and Moss blocks (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-125932"},"MCPE-125932"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Sculk Shrieker block's shriek sound can now be heard at the longer distance of 32 blocks (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-163989"},"MCPE-163989"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Respawn Anchor no longer retains its charges if mined with Silk Touch or picked (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-145682"},"MCPE-145682"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Beacon effect particles are now transparent (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-17679"},"MCPE-17679"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Conduit effect particles are now transparent (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-93728"},"MCPE-93728"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Redstone Dust now emits a sound when placed on the ground (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-65423"},"MCPE-65423"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wooden Doors, Iron Doors, Wooden Trapdoors, Iron Trapdoors and Fence Gates now use the same opening and closing sounds as Java Edition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Updated Pressure Plates to have different sound pitches based on their behaviour to match Java Edition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added a unique click sound for Wooden Buttons to match Java Edition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed Frogspawn map color to match Java Edition (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-159715"},"MCPE-159715"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change Bed block map colors to match Java Edition (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-40709"},"MCPE-40709"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed various blocks\u2019 Map colors to appear correctly match Java Edition (",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/browse/MCPE-19228"},"MCPE-19228"),")"))),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In addition to experimental features added in ",(0,r.kt)("a",{parentName:"li",href:"https://feedback.minecraft.net/hc/en-us/articles/10833168748557-Minecraft-1-19-50-Bedrock-"},"19.50"),", several new experimental features are now playable from the upcoming 1.20 update!"),(0,r.kt)("li",{parentName:"ul"},"Enable the \u201cNext Major Update\u201d toggle in world settings to enable this content"),(0,r.kt)("li",{parentName:"ul"},"These features are a work in progress and are still in active development. The design and functionality of these features will likely change before they\u2019re released"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Please remember:")," Worlds that have used experimental toggles will always be flagged as \u201cExperimental\u201d. We recommend keeping these experimental worlds as separate copies from your main saves. More information can be found in ",(0,r.kt)("a",{parentName:"li",href:"https://feedback.minecraft.net/hc/en-us/articles/4403610710797"},"this article"))),(0,r.kt)("h3",{id:"mob-heads-on-note-blocks"},(0,r.kt)("strong",{parentName:"h3"},"Mob Heads on Note Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When placing a Mob Head on a Note Block, that Note Block will now play one of the ambient sounds of that mob when played by a player or powered by Redstone!")),(0,r.kt)("h3",{id:"piglin-mob-head"},(0,r.kt)("strong",{parentName:"h3"},"Piglin Mob Head")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Piglins will now drop their heads when killed by a charged Creeper!"),(0,r.kt)("li",{parentName:"ul"},"Placing the Piglin Head on a Note Block will play one of the Piglin's ambient sounds"),(0,r.kt)("li",{parentName:"ul"},"The Piglin Head will flap its ears when powered by Redstone on worn by a player!")),(0,r.kt)("h3",{id:"bamboo"},(0,r.kt)("strong",{parentName:"h3"},"Bamboo")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added Block of Bamboo, which can be crafted from 9 Bamboo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added Stripped Block of Bamboo, which can be obtained by using an Axe on a Block of Bamboo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Both Block of Bamboo and Stripped Block of Bamboo can be crafted into 2 Bamboo Planks"))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("h3",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h3"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a potential crash when gliding through an End Gateway"),(0,r.kt)("li",{parentName:"ul"},"The game no longer crashes when killing an entity with invalid conditions, functions, or pools entries in its loot table (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164623"},"MCPE-164623"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed multiple crashes that could occur when players died while affected with Withering"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash on Xbox when the Edit World Button on the Select World Screen had quick successive selections"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused players to desync from multiplayer games if they saved and quit after dying and rejoining a game (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162630"},"MCPE-162630"),")")),(0,r.kt)("h3",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h3"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug causing players\u2019 hitboxes and nameplates to be unaligned when rejoining a world after dying and returning to menu without respawning (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162630"},"MCPE-162630"),")"),(0,r.kt)("li",{parentName:"ul"},"Raids now trigger properly when the player with bad omen enters a village while riding/gliding (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152774"},"MCPE-152774"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where players could fall out of moving blocks when pushed upwards (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163725"},"MCPE-163725"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where night was being incorrectly skipped if the last player in a game was in the Nether or End"),(0,r.kt)("li",{parentName:"ul"},"A player entering the Nether or End will now trigger a night skip if all players left in Overworld are sleeping"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where dropping an item and sleeping at the same time would cause the server to hang (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162989"},"MCPE-162989"),")"),(0,r.kt)("li",{parentName:"ul"},"Orbs spawned within the same block will merge and combine XP values until orb limit is reached")),(0,r.kt)("h3",{id:"mobs-1"},(0,r.kt)("strong",{parentName:"h3"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entities no longer disappear when sent through End Gateways (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164985"},"MCPE-164985"),")"),(0,r.kt)("li",{parentName:"ul"},"Ravagers are now able to attack when standing on various partial blocks like Mud (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162483"},"MCPE-162483"),")"),(0,r.kt)("li",{parentName:"ul"},"Vex now use a separate charging animation when empty-handed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164490"},"MCPE-164490"),")"),(0,r.kt)("li",{parentName:"ul"},"Vex now render offhand items"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Vex being incorrectly lit in dark surroundings"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer see through terrain by riding a Horse, Mule, or Donkey at the edge of a 2-block-tall space"),(0,r.kt)("li",{parentName:"ul"},"Villagers will now take damage from lightning bolts on Peaceful difficulty, like other mobs"),(0,r.kt)("li",{parentName:"ul"},"Tropical Fish no longer use surface density limit when spawning underground (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157485"},"MCPE-157485"),")"),(0,r.kt)("li",{parentName:"ul"},"Evokers now play a \u2018sit\u2019 animation when riding a mount or vehicle (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-43778"},"MCPE-43778"),")")),(0,r.kt)("h3",{id:"blocks-1"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Entities no longer get pushed out by Doors activated by Redstone signals (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-158971"},"MCPE-158971"),")"),(0,r.kt)("li",{parentName:"ul"},"Using the Pick Block functionality on Fern and Grass now selects the correct item in the inventory instead of the first one between them"),(0,r.kt)("li",{parentName:"ul"},"Using the Pick Block functionality on Acacia Leaves and Dark Oak Leaves now selects the correct item in the inventory instead of the first one between them"),(0,r.kt)("li",{parentName:"ul"},"Hoppers no longer fail to collect items when trying to pull in multiple item types (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-38963"},"MCPE-38963"),")"),(0,r.kt)("li",{parentName:"ul"},"Prevent Pistons from re-creating moving blocks that were destroyed mid-move"),(0,r.kt)("li",{parentName:"ul"},"Blocks that require supporting blocks now appear properly on a Map when placed on partial blocks or above air (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159713"},"MCPE-159713"),")"),(0,r.kt)("li",{parentName:"ul"},"Scaffolding now displays particles and produces vibrations when the block under it is destroyed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163738"},"MCPE-163738"),")"),(0,r.kt)("li",{parentName:"ul"},"Stone Walls are now placed correctly in a line when continuously placing them"),(0,r.kt)("li",{parentName:"ul"},"Levers now produce the same sound effect as Stone Buttons (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163335"},"MCPE-163335"),")")),(0,r.kt)("h3",{id:"items"},(0,r.kt)("strong",{parentName:"h3"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed item degradation when rapidly attacking mobs (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-157150"},"MCPE-157150"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that prevented some Tripwire Hooks from being valid trades when trading with a Fletcher Villager (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108195"},"MCPE-108195"),")"),(0,r.kt)("li",{parentName:"ul"},"Ender Pearls will no longer teleport a sleeping player (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,r.kt)("h3",{id:"touch-controls"},(0,r.kt)("strong",{parentName:"h3"},"Touch Controls")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that prevented items from moving indirectly between Creative Mode inventory and players' extended inventory in Pocket UI (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164479"},"MCPE-164479"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed a problem where the touch d-pad's forward button was not functional when holding the strafe left/right button (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-155199"},"MCPE-155199"),")"),(0,r.kt)("li",{parentName:"ul"},"The inventory tab will now reset its hover state if the player uses a second input method and hover on another tab"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where players couldn\u2019t interact with toast notifications in Joystick and Crosshair touch controls"),(0,r.kt)("li",{parentName:"ul"},"The pressing direction of the build button in touch controls will now be visually clicked down instead of up when being pressed (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162026"},"MCPE-162026"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where players could not remove items by clicking on the inventory items in Classic profile (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162124"},"MCPE-162124"),")"),(0,r.kt)("li",{parentName:"ul"},"The touch focus circle has been reactivated with the new touch controls (not in Crosshair mode)"),(0,r.kt)("li",{parentName:"ul"},"Resolved an issue that pressing the inventory button could interact with the world instead of opening the inventory on some devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-154499"},"MCPE-154499"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that players couldn\u2019t scroll the inventory screen when one row was appearing off-screen (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-159870"},"MCPE-159870"),")"),(0,r.kt)("li",{parentName:"ul"},"Added several levels of intervals for repeat crafting when holding on the crafted items"),(0,r.kt)("li",{parentName:"ul"},"Removed the camera movement delay when the player swiped from the attack and build buttons in crosshair mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed inventory screen touch interactions not working properly on Nintendo Switch"),(0,r.kt)("li",{parentName:"ul"},"The correct tip for dismounting Boats and Minecarts now appears when not using classic touch controls"),(0,r.kt)("li",{parentName:"ul"},"Toast notifications can now be swiped away on touch devices in-game"),(0,r.kt)("li",{parentName:"ul"},"Touch Control settings section is no longer visible on Xbox")),(0,r.kt)("h3",{id:"graphical"},(0,r.kt)("strong",{parentName:"h3"},"Graphical")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Highlight selection no longer highlights the entire card for transparent objects like saplings"),(0,r.kt)("li",{parentName:"ul"},"V-sync settings are now properly configured in options (non-ARM devices) (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110006"},"MCPE-110006"),")")),(0,r.kt)("h3",{id:"accessibility"},(0,r.kt)("strong",{parentName:"h3"},"Accessibility")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The new Create New World screen is now available for text to speech users. We'd be happy to receive your feedback on it here: ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/cnwnarration"},"aka.ms/cnwnarration")),(0,r.kt)("li",{parentName:"ul"},"Fixed text to speech enumeration for world on the Play screen, select language in settings screen, select controls in settings screen, and friends in invite friends screen when there are a large number of items in the list")),(0,r.kt)("h3",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h3"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the mouse cursor was visible and is no longer usable to control the player camera on the HUD screen after exiting the menu screen with a touch while moving the mouse around"),(0,r.kt)("li",{parentName:"ul"},"Fixed text being slightly off-centered to the left for Furnace, Blast Furnace, and Smoker screens (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151597"},"MCPE-151597"),")"),(0,r.kt)("li",{parentName:"ul"},"Feedback button on the main menu will now prompt the player with a modal before redirecting to their web browser"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where text fields would not regain focus after being deselected with a gamepad (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153842"},"MCPE-153842"),")"),(0,r.kt)("li",{parentName:"ul"},"Text fields are no longer deselected with second click on them once they are selected"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where user interface elements on the Achievements screen and the new Create New World screen didn't properly trigger sound effects (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163722"},"MCPE-163722"),")"),(0,r.kt)("li",{parentName:"ul"},"Added a missing error screen that displays when attempting to create a world with too little available disk space"),(0,r.kt)("li",{parentName:"ul"},"Fixed the quality of the Mojang Studios logo loading screen on Xbox (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163036"},"MCPE-163036"),")"),(0,r.kt)("li",{parentName:"ul"},'Removed extra space around the "open chat" message that appears when entering a world (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162700"},"MCPE-162700"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that caused the Wandering Trader's trade window to show a profession (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162576"},"MCPE-162576"),")"),(0,r.kt)("li",{parentName:"ul"},"Resource packs will now be applied to the world after navigating to another screen before creation"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where some resource packs prompted an error after being downloaded")),(0,r.kt)("h3",{id:"android"},(0,r.kt)("strong",{parentName:"h3"},"Android")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The screen will no longer automatically turn off while a world is loaded when playing on Android devices"),(0,r.kt)("li",{parentName:"ul"},"Updated splash screen to be consistent between Android 12+ devices and older devices (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-151413"},"MCPE-151413"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed controller input sometimes getting stuck when a controller was disconnected on Android devices"),(0,r.kt)("li",{parentName:"ul"},"The UI no longer flickers on Android when the on-screen keyboard appears (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-142356"},"MCPE-142356"),")")),(0,r.kt)("h3",{id:"realms"},(0,r.kt)("strong",{parentName:"h3"},"Realms")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New Realm button on the two player Realm info screen now activates correctly"),(0,r.kt)("li",{parentName:"ul"},"Added a highlight to Realms terms and agreements checkbox when the UI is hovered"),(0,r.kt)("li",{parentName:"ul"},"Redirect players back to the world selection screen if they choose to leave on the Download Resource Packs prompt"),(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where the option "Require players to accept resource packs to join" did not reflect the actual state (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-10799"},"REALMS-10799"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed erroneously showing previously applied packs on Realms settings screen after a Realm reset"),(0,r.kt)("li",{parentName:"ul"},"Updated error message for failing to join an owned Realms server that is out of date. New messaging now describes the issue and provides steps to resolve issue")))}h.isMDXComponent=!0}}]);