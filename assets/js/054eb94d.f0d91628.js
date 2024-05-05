"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[37400],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),g=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=g(e.components);return n.createElement(i.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=g(t),c=r,h=p["".concat(i,".").concat(c)]||p[c]||u[c]||o;return t?n.createElement(h,l(l({ref:a},m),{},{components:t})):n.createElement(h,l({ref:a},m))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var g=2;g<o;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9305:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));const o={},l=void 0,s={unversionedId:"changelog_source/stable/1.17/10/gameplay",id:"changelog_source/stable/1.17/10/gameplay",title:"gameplay",description:"Posted: July 13, 2021",source:"@site/docs/changelog_source/stable/1.17/10/gameplay.mdx",sourceDirName:"changelog_source/stable/1.17/10",slug:"/changelog_source/stable/1.17/10/gameplay",permalink:"/docs/changelog_source/stable/1.17/10/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/10/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},g=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Candles</strong>",id:"candles",level:2},{value:"<strong>Potted Azaleas</strong>",id:"potted-azaleas",level:2},{value:"<strong>Realms World Slots</strong>",id:"realms-world-slots",level:2},{value:"<strong>Experimental Gameplay:</strong>",id:"experimental-gameplay",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2},{value:"<strong>Performance / Stability</strong>",id:"performance--stability",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2}],m={toc:g},p="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(p,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," July 13, 2021"),(0,r.yg)("p",null,"Welcome to the Minecraft 1.17.10 update! The team has been working hard on gameplay improvements since the release Caves & Cliffs: Part I. We have also introduced some fun new additions, as well as some Caves & Cliffs: Part II features as part of Experimental Gameplay."),(0,r.yg)("p",null,"Please search for any bugs you find on ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and let us know what you think at ",(0,r.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4404464234381/patchnotes_r17u1.png",alt:"patchnotes_r17u1.png"})),(0,r.yg)("h2",{id:"new-features"},(0,r.yg)("strong",{parentName:"h2"},"New Features:")),(0,r.yg)("h2",{id:"candles"},(0,r.yg)("strong",{parentName:"h2"},"Candles")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Candles are now available in the game!"),(0,r.yg)("li",{parentName:"ul"},"Can be placed in clusters up to four and lit using Flint & Steel"),(0,r.yg)("li",{parentName:"ul"},"Put a Candle on a Cake and make a wish!"),(0,r.yg)("li",{parentName:"ul"},"Candles can be crafted using a Honeycomb and String"),(0,r.yg)("li",{parentName:"ul"},"Combine with dye on a crafting grid to craft different colored Candles")),(0,r.yg)("h2",{id:"potted-azaleas"},(0,r.yg)("strong",{parentName:"h2"},"Potted Azaleas")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added potted Azalea and Flowering Azalea variants"),(0,r.yg)("li",{parentName:"ul"},"Just place an Azalea in a Flower Pot!")),(0,r.yg)("h2",{id:"realms-world-slots"},(0,r.yg)("strong",{parentName:"h2"},"Realms World Slots")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Each Realm subscription now has three world upload slots"),(0,r.yg)("li",{parentName:"ul"},"One world can be active at a time and Realms owners have the ability to switch the Realm's active world between the three world slots  ")),(0,r.yg)("h2",{id:"experimental-gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Gameplay:")),(0,r.yg)("p",null,"Experimental features from Caves & Cliffs: Part II are available in this update and can be enabled on the world creation screen!"),(0,r.yg)("p",null,"Please keep in mind that these features are work in progress, still under in development, and subject to change. If you activate them, your world might crash, break, or not work with future updates. Experimental features cannot be turned off after world creation."),(0,r.yg)("p",null,"For more information, please see the article about enabling experimental features at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalFeatures"},"aka.ms/MCExperimentalFeatures"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"World height now goes up to 320 blocks and down to -64 blocks"),(0,r.yg)("li",{parentName:"ul"},"New surface biomes including Lofty Peaks, Snow Capped Peaks, Snowy Slopes, Mountain Grove, and Mountain Meadow"),(0,r.yg)("li",{parentName:"ul"},"New cave biomes including Lush Caves and Dripstone Caves"),(0,r.yg)("li",{parentName:"ul"},"Revamped cave generation adds cheese caves, spaghetti caves, lava aquifers, and flooded aquifer caves"),(0,r.yg)("li",{parentName:"ul"},"New ore distribution"),(0,r.yg)("li",{parentName:"ul"},"Skulk Sensor"),(0,r.yg)("li",{parentName:"ul"},"Goat Horn  ")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes:")),(0,r.yg)("h2",{id:"performance--stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance / Stability")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur if a structure was placed with a command in an unloaded area and that structure was deleted")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Underwater fog is once again dependent on biome and appears as it should (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-124266"},"MCPE-124266"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug that could cause\xa0Nether\xa0Portals\xa0to sometimes\xa0take players to wrong coordinates (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115933"},"MCPE-115933"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed split-screen players not able to rename items on Anvils (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108405"},"MCPE-108405"),")"),(0,r.yg)("li",{parentName:"ul"},"Thunderstorms now happen as often as Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72798"},"MCPE-72798"),")"),(0,r.yg)("li",{parentName:"ul"},"Bastion loot now closely matches Java Edition (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104330"},"MCPE-104330"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer swim through the air under a platform, though it looked pretty cool (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48958"},"MCPE-48958"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed players going through Cobwebs taking fall damage before hitting the ground (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121550"},"MCPE-121550"),")"),(0,r.yg)("li",{parentName:"ul"},"Descending through Powder Snow with touch controls now uses the same button as descending through Scaffolding"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that was causing the player's head to not animate properly with emotes (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126902"},"MCPE-126902"),")")),(0,r.yg)("h2",{id:"mobs"},(0,r.yg)("strong",{parentName:"h2"},"Mobs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Empty Buckets can no longer be used to collect Fish"),(0,r.yg)("li",{parentName:"ul"},"Axolotls no longer move their tails while playing dead (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123309"},"MCPE-123309"),")"),(0,r.yg)("li",{parentName:"ul"},"Feeding Axolotls with Bucket of Tropical Fish now returns a Water Bucket instead of an empty Bucket (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127382"},"MCPE-127382"),")"),(0,r.yg)("li",{parentName:"ul"},"Axolotls now only spawn in complete darkness to prevent spawning in unwanted places"),(0,r.yg)("li",{parentName:"ul"},"The hitbox on Axolotls is now smaller to match the size of the mob"),(0,r.yg)("li",{parentName:"ul"},"Drowned, Guardians, and Elder Guardians now attacks Axolotls on sight"),(0,r.yg)("li",{parentName:"ul"},"Skeletons now turn into Strays after 20 seconds in Powder Snow, reduced from 45 seconds"),(0,r.yg)("li",{parentName:"ul"},"Strays no longer drop Wither Skeleton Skulls when killed by Charged Creepers (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-35876"},"MCPE-35876"),")"),(0,r.yg)("li",{parentName:"ul"},"Burning mobs can no longer destroy Powder Snow when the Mob Griefing world option is disabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-221842"},"MCPE-221842"),")"),(0,r.yg)("li",{parentName:"ul"},"Tempted Goats now move at the same speed as goats in Java Edition, and other similar mobs that are being tempted (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123261"},"MCPE-123261"),")"),(0,r.yg)("li",{parentName:"ul"},"When Goats are performing a ram attack, mobs no longer retaliate against the Goats (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129619"},"MCPE-129619"),")"),(0,r.yg)("li",{parentName:"ul"},"Goat fall damage reduction is now in parity with Java Edition (-10 reduced fall damage)"),(0,r.yg)("li",{parentName:"ul"},"Goats can now continue ramming when on Slime Blocks and Honey Blocks"),(0,r.yg)("li",{parentName:"ul"},"Baby Sea Turtles no longer despawn after being hatched (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-70664"},"MCPE-70664"),")"),(0,r.yg)("li",{parentName:"ul"},"Baby Horses, including their variants, are now taller and no longer exhibit Z-fighting from their legs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92462"},"MCPE-92462"),")"),(0,r.yg)("li",{parentName:"ul"},"Iron Golems and Evokers are no longer sometimes aggressive on Peaceful difficulty (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47012"},"MCPE-47012"),")"),(0,r.yg)("li",{parentName:"ul"},"Amphibious mobs no longer get stuck when pathing over slabs and Daylight Sensors"),(0,r.yg)("li",{parentName:"ul"},"Attacked Glow Squids no longer go dark only for the aggressor in multiplayer sessions"),(0,r.yg)("li",{parentName:"ul"},"Glow Squid now darkens to match the surrounding light level when hurt (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121754"},"MCPE-121754"),")"),(0,r.yg)("li",{parentName:"ul"},"Villagers spawned from Villager spawners on Marketplace worlds that were created after version 1.11 now correctly spawn as V2 villagers"),(0,r.yg)("li",{parentName:"ul"},"Fixed a warning that could appear in split-screen when encountering Guardians")),(0,r.yg)("h2",{id:"blocks"},(0,r.yg)("strong",{parentName:"h2"},"Blocks")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Falling Anvils and Stalactites now deal damage to mobs when landing in liquid"),(0,r.yg)("li",{parentName:"ul"},"Azaleas can now be Bone Mealed when placed on Clay"),(0,r.yg)("li",{parentName:"ul"},"Using Pick Block on Azalea Leaves and Flowering Azalea Leaves now results in the correct blocks being picked (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128092"},"MCPE-128092"),")"),(0,r.yg)("li",{parentName:"ul"},"Hanging Roots are now destroyed by water (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-121676"},"MCPE-121676"),") (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127677"},"MCPE-127677"),")"),(0,r.yg)("li",{parentName:"ul"},"Lightning Rods no longer break falling blocks that land on them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-116545"},"MCPE-116545"),")"),(0,r.yg)("li",{parentName:"ul"},"Rooted Dirt texture is now randomly rotated, matching the behavior of regular Dirt blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123197"},"MCPE-123197"),")"),(0,r.yg)("li",{parentName:"ul"},"Small Dripleaf now only drops itself when broken with Shears"),(0,r.yg)("li",{parentName:"ul"},"Glow Lichen now only drops itself when broken with Shears"),(0,r.yg)("li",{parentName:"ul"},"Jukeboxes now only ejects Music Disks into non-solid blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-85635"},"MCPE-85635"),")")),(0,r.yg)("h2",{id:"items"},(0,r.yg)("strong",{parentName:"h2"},"Items")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Projectiles, such as Snowballs and Eggs, no longer cast shadows"),(0,r.yg)("li",{parentName:"ul"},"All dropped items now have a similar floating height"),(0,r.yg)("li",{parentName:"ul"},"Disenchanting an item using the Grindstone once again resets the enchantment cost penalty correctly (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-107211"},"MCPE-107211"),")"),(0,r.yg)("li",{parentName:"ul"},"Data-driven items now swing faster when not targeting blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119702"},"MCPE-119702"),")"),(0,r.yg)("li",{parentName:"ul"},"Firework Rockets obtained from '/replaceitem' command now have a flight duration (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109037"},"MCPE-109037"),")"),(0,r.yg)("li",{parentName:"ul"},"Firework Stars obtained from '/replaceitem' command now have proper color values (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-109037"},"MCPE-109037"),")"),(0,r.yg)("li",{parentName:"ul"},"Glowing text on Signs now has an outline (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129123"},"MCPE-129123"),")"),(0,r.yg)("li",{parentName:"ul"},"Black text on Signs can now be lit by using a Glow Ink Sac (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128079"},"MCPE-128079"),")"),(0,r.yg)("li",{parentName:"ul"},"Tooltips are now present when holding Ink Sac and Glow Ink Sac when using a controller"),(0,r.yg)("li",{parentName:"ul"},"Ink Sac and Glow Ink Sac can no longer be used indefinitely on signs in Adventure mode"),(0,r.yg)("li",{parentName:"ul"},"Players can no longer dye text on Signs in Adventure mode (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126489"},"MCPE-126489"),")"),(0,r.yg)("li",{parentName:"ul"},"Pumpkins are once again accepted by Farmer Villagers regardless of their rotation when mined (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105540"},"MCPE-105540"),")")),(0,r.yg)("h2",{id:"user-interface"},(0,r.yg)("strong",{parentName:"h2"},"User Interface")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Glow Item Frame is now placed after regular Item Frame in the Creative inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117532"},"MCPE-117532"),")"),(0,r.yg)("li",{parentName:"ul"},"Copper Ore is now placed after other Overworld ores in the Creative inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-119724"},"MCPE-119724"),")"),(0,r.yg)("li",{parentName:"ul"},"Deepslate is now placed after other stones in the Creative inventory (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-127592"},"MCPE-127592"),")"),(0,r.yg)("li",{parentName:"ul"},"Hotbar item tooltip duration now scales with the length of the tooltip's text"),(0,r.yg)("li",{parentName:"ul"},"Added a new Accessibility icon in the Settings menu"),(0,r.yg)("li",{parentName:"ul"},"Items can now be previewed in the Character Creator and equipped using the Equip button"),(0,r.yg)("li",{parentName:"ul"},"Added Equip button to Classic Skins and Capes tabs"),(0,r.yg)("li",{parentName:"ul"},"The profile screen reload button is now properly localized to all supported languages"),(0,r.yg)("li",{parentName:"ul"},'The "Reset to Default" button in the Accessibility settings now resets the Text Background Opacity slider'),(0,r.yg)("li",{parentName:"ul"},'Fixed a typo in the "Loom" section of "How to Play" (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128735"},"MCPE-128735"),")"),(0,r.yg)("li",{parentName:"ul"},"The counters on empty tabs of the Play screen now display zero instead of an empty, grey box (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-110535"},"MCPE-110535"),")"),(0,r.yg)("li",{parentName:"ul"},"Featured Item thumbnails now fit within the Featured Items window in Character Creator"),(0,r.yg)("li",{parentName:"ul"},"When not signed into a Microsoft Account, players are now presented with a button prompting them to sign in on the Play screen so that they can view Realms"),(0,r.yg)("li",{parentName:"ul"},"Realms Plus content expiration timers now appear properly"),(0,r.yg)("li",{parentName:"ul"},"Realms Plus timers now only appear within 30 days of expiring")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"'/title clear' now correctly clears the title and subtitle from the HUD (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-97636"},"MCPE-97636"),")"),(0,r.yg)("li",{parentName:"ul"},"Frosted Ice can now be used in any command that accepts a block, such as '/setblock' and '/testforblock' (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-126741"},"MCPE-126741"),")")))}u.isMDXComponent=!0}}]);