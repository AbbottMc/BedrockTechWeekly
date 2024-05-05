"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90074],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>h});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),m=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=m(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=m(t),d=n,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return t?r.createElement(h,o(o({ref:a},g),{},{components:t})):r.createElement(h,o({ref:a},g))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13374:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=t(58168),n=(t(96540),t(15680));const l={},o=void 0,i={unversionedId:"changelog_source/stable/1.20/80/gameplay",id:"changelog_source/stable/1.20/80/gameplay",title:"gameplay",description:"Posted: April 23, 2024",source:"@site/docs/changelog_source/stable/1.20/80/gameplay.mdx",sourceDirName:"changelog_source/stable/1.20/80",slug:"/changelog_source/stable/1.20/80/gameplay",permalink:"/docs/changelog_source/stable/1.20/80/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/80/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},m=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Armadillo</strong>",id:"armadillo",level:2},{value:"<strong>Armadillo Rolling Up Behavior</strong>",id:"armadillo-rolling-up-behavior",level:2},{value:"<strong>Armadillo Scutes</strong>",id:"armadillo-scutes",level:2},{value:"<strong>Wolf Armor</strong>",id:"wolf-armor",level:2},{value:"<strong>Tamed Wolves health and damage</strong>",id:"tamed-wolves-health-and-damage",level:2},{value:"<strong>Wolf variants</strong>",id:"wolf-variants",level:2},{value:"<strong>Realms Stories</strong>",id:"realms-stories",level:2},{value:"<strong>Enhancements to Finding Friends</strong>",id:"enhancements-to-finding-friends",level:2},{value:"<strong>Experimental Features:</strong>",id:"experimental-features",level:2},{value:"<strong>Mace</strong>",id:"mace",level:2},{value:"<strong>Breeze Rod</strong>",id:"breeze-rod",level:2},{value:"<strong>Heavy Core</strong>",id:"heavy-core",level:2},{value:"<strong>New Armor Trims</strong>",id:"new-armor-trims",level:2},{value:"<strong>New Banner Patterns</strong>",id:"new-banner-patterns",level:2},{value:"<strong>New Pottery Sherds</strong>",id:"new-pottery-sherds",level:2},{value:"<strong>Trial Chambers</strong>",id:"trial-chambers",level:2},{value:"<strong>Fixes and Changes:</strong>",id:"fixes-and-changes",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Graphical</strong>",id:"graphical",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}],g={toc:m},u="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Posted:")," April 23, 2024"),(0,n.yg)("p",null,"Eight new wolf variations, wolf armor, and armadillos are dropping in Minecraft today! Meet the armadillo, a mob found in the savanna or badlands biomes, and craft wolf armor from its scutes! Explore far and wide to gather a pack of all nine wolf variations, then take on the Overworld together with your new safely armored friends. You can even dye wolf armor the color you'd like, and repair it when it gets damaged! There's never been a better time to set out on an adventure, and fight alongside your favorite four-legged companions."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/26108200474509",alt:"1-20-80_header.jpg"})),(0,n.yg)("p",null,"Your thoughts on the game continue to shape new updates so please upvote and report any new bugs at ",(0,n.yg)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,n.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),".  "),(0,n.yg)("h2",{id:"new-features"},(0,n.yg)("strong",{parentName:"h2"},"New Features:")),(0,n.yg)("h2",{id:"armadillo"},(0,n.yg)("strong",{parentName:"h2"},"Armadillo")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The Armadillo is a new passive mob that:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"spawns in Savannas and Badlands biomes"),(0,n.yg)("li",{parentName:"ul"},"drops Armadillo Scutes periodically"),(0,n.yg)("li",{parentName:"ul"},"drops Armadillo Scutes when brushed"),(0,n.yg)("li",{parentName:"ul"},"its favorite food is Spider Eyes")))),(0,n.yg)("h2",{id:"armadillo-rolling-up-behavior"},(0,n.yg)("strong",{parentName:"h2"},"Armadillo Rolling Up Behavior")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Armadillo rolls up when it detects a threat such as:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"a sprinting player"),(0,n.yg)("li",{parentName:"ul"},"a player in a vehicle or mounted"),(0,n.yg)("li",{parentName:"ul"},"undead mobs"),(0,n.yg)("li",{parentName:"ul"},"a mob, or a player that has attacked it recently"))),(0,n.yg)("li",{parentName:"ul"},"It does not roll up when:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"it is fleeing"),(0,n.yg)("li",{parentName:"ul"},"in water"),(0,n.yg)("li",{parentName:"ul"},"in the air or"),(0,n.yg)("li",{parentName:"ul"},"on a leash"))),(0,n.yg)("li",{parentName:"ul"},"When an Armadillo is rolled up it does not walk, cannot eat, and will not be tempted by food",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"It will continue to scan for threats, occasionally peeking to check the surroundings: if none are detected for 4 seconds, it will unroll"),(0,n.yg)("li",{parentName:"ul"},"In a rolled up state, its shell will protect it, and reduce the damage dealt to it, even allowing it to fully resist weak attacks"),(0,n.yg)("li",{parentName:"ul"},"Spiders and Cave Spiders will run away from Armadillos, and only if they are not in a rolled up state")))),(0,n.yg)("h2",{id:"armadillo-scutes"},(0,n.yg)("strong",{parentName:"h2"},"Armadillo Scutes")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Armadillo Scutes can be used to craft Wolf Armor"),(0,n.yg)("li",{parentName:"ul"},"They are dropped by Armadillos"),(0,n.yg)("li",{parentName:"ul"},"Dispensers can be used to brush Armadillo Scutes off Armadillos")),(0,n.yg)("h2",{id:"wolf-armor"},(0,n.yg)("strong",{parentName:"h2"},"Wolf Armor")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The Wolf Armor will protect the wolf from most damage sources until the armor loses all durability and breaks"),(0,n.yg)("li",{parentName:"ul"},"Wolf Armor shows signs of increased breakage as durability goes down"),(0,n.yg)("li",{parentName:"ul"},"Players can repair the Wolf Armor with Armadillo Scutes while it is equipped on the Wolf, or on an Anvil using Armadillo Scutes"),(0,n.yg)("li",{parentName:"ul"},"Wolf armor can be dyed in similar fashion to Leather Armor"),(0,n.yg)("li",{parentName:"ul"},"Using Wolf Armor on an adult tamed Wolf will equip the armor on the Wolf"),(0,n.yg)("li",{parentName:"ul"},"Only a Wolf's owner can put a Wolf Armor on their tamed Wolf, and with this in mind; Dispensers cannot put Wolf Armor on wolves"),(0,n.yg)("li",{parentName:"ul"},"Using Shears on a Wolf that is wearing armor will make it drop the armor"),(0,n.yg)("li",{parentName:"ul"},"Only a Wolf's owner can repair a Wolf Armor on a Wolf or shear a Wolf Armor from it, and with this in mind; Dispensers cannot remove Wolf Armor from wolves"),(0,n.yg)("li",{parentName:"ul"},"If a Wolf dies while wearing armor, it will drop the armor")),(0,n.yg)("h2",{id:"tamed-wolves-health-and-damage"},(0,n.yg)("strong",{parentName:"h2"},"Tamed Wolves health and damage")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Tamed Wolves now have 40 health points (20 hearts) instead of 20 health points (10 hearts)"),(0,n.yg)("li",{parentName:"ul"},"They no longer take half of the damage from most environmental sources like they used to do",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"In most cases this change will make no difference given the health boost, but now they can withstand more damage from players and arrows"))),(0,n.yg)("li",{parentName:"ul"},"Feeding a Wolf now heals twice as many health points"),(0,n.yg)("li",{parentName:"ul"},"Adjusted spawning conditions for Wolves, allowing them to spawn on Coarse Dirt and Podzol blocks")),(0,n.yg)("h2",{id:"wolf-variants"},(0,n.yg)("strong",{parentName:"h2"},"Wolf variants")),(0,n.yg)("p",null,"New Wolf variants have been added. The variant is determined by the biome they spawn in. Read about each one in this ",(0,n.yg)("a",{parentName:"p",href:"https://www.minecraft.net/article/new-minecraft-wolves"},"paw-some article"),"!"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pale Wolf - The familiar Wolf variant that now spawns in the Taiga biome, with a default pack size of 4"),(0,n.yg)("li",{parentName:"ul"},"Woods Wolf - A variant that spawns in the Forest biome. This will be the dominant Wolf variant that you will be able to find in the Overworld, since the Forest biome is very common"),(0,n.yg)("li",{parentName:"ul"},"Ashen Wolf - A variant that spawns in the Snowy Taiga biome"),(0,n.yg)("li",{parentName:"ul"},"Black Wolf - A variant that spawns in the Old Growth Pine Taiga biome, in smaller packs of 2 to 4"),(0,n.yg)("li",{parentName:"ul"},"Chestnut Wolf - A variant that spawns in the Old Growth Spruce Taiga biome, in smaller packs of 2 to 4"),(0,n.yg)("li",{parentName:"ul"},"Rusty Wolf - A variant that spawns in a new location for wolves - the Sparse Jungle biome, in smaller packs of 2 to 4"),(0,n.yg)("li",{parentName:"ul"},"Spotted Wolf - A variant that spawns in a new location for wolves - the Savanna Plateau biome, in larger packs of 4 to 8"),(0,n.yg)("li",{parentName:"ul"},"Striped Wolf - A variant that spawns in a new location for wolves, the Wooded Badlands biome, in larger packs of 4 to 8"),(0,n.yg)("li",{parentName:"ul"},"Snowy Wolf - A variant that spawns in the Grove biome. A rare type, that always walks alone")),(0,n.yg)("p",null,"When summoned in other ways (e.g. using the Spawn Egg or using the\xa0summon\xa0command), the variant selection follows the natural spawning biome rules with the following extensions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Rusty Wolf: will be selected in all Jungle biomes, including Jungle and Bamboo Jungle Biomes"),(0,n.yg)("li",{parentName:"ul"},"Spotted Wolf: will be selected in all Savanna biomes, including Savanna and Windswept Savanna Biomes"),(0,n.yg)("li",{parentName:"ul"},"Striped Wolf: will be selected in all Badlands biomes, including Badlands and Eroded Badlands Biomes")),(0,n.yg)("h2",{id:"realms-stories"},(0,n.yg)("strong",{parentName:"h2"},"Realms Stories")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Introducing Realms Stories, a new social hub for your Realm",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Realms Stories features include:\xa0",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"The Story Feed \u2013 lets you share your greatest gameplay moments with your fellow Realm members"),(0,n.yg)("li",{parentName:"ul"},"The Timeline \u2013 lets you see when other members are playing on the Realm"),(0,n.yg)("li",{parentName:"ul"},"The Members tab \u2013 shows a list of all Realm members and their permission levels"),(0,n.yg)("li",{parentName:"ul"},"Realm Events \u2013 Stories that get posted automatically when certain player actions are taken in the Realm. There are 19 unique Realm Events so far \u2013 can you discover all of them?"))))),(0,n.yg)("li",{parentName:"ul"},"Known issues:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"We need a little more time to deliver the best possible experience for iOS & Android, and will be rolling out Realms Stories on these platforms in the near future."),(0,n.yg)("li",{parentName:"ul"},"Xbox-only: If multiple users are signed into an Xbox, then the users might not be able to post to Realms Stories from that Xbox (unless all users besides the primary user log out)."),(0,n.yg)("li",{parentName:"ul"},"Xbox-only: If multiple users are signed into an Xbox, Realm Events will not be posted, but they will be recorded. If all users but the primary user sign out of Xbox, and the primary user returns to the Minecraft play screen, the Realm Events that were recorded before should get posted. However, the Realm Events may be credited to the wrong user."),(0,n.yg)("li",{parentName:"ul"},"If users are in split-screen mode, only the primary user will be able to open Realms Stories."),(0,n.yg)("li",{parentName:"ul"},"If users are in with a guest (user who is not signed into their Microsoft account), and the primary user attempts to make a post, the post may fail, or be credited to the wrong user.")))),(0,n.yg)("h2",{id:"enhancements-to-finding-friends"},(0,n.yg)("strong",{parentName:"h2"},"Enhancements to Finding Friends")),(0,n.yg)("p",null,"We\u2019ve improved the way you connect with players in Minecraft! To help you follow & friend players we added multiple features including:\xa0\xa0"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Lists of recommended and suggested friends"),(0,n.yg)("li",{parentName:"ul"},"Improved search to give partial results while you are typing"),(0,n.yg)("li",{parentName:"ul"},"Ability to share your profile information through a QR code or a share link"),(0,n.yg)("li",{parentName:"ul"},"A handy button that copies your Gamertag to the clipboard  ")),(0,n.yg)("h2",{id:"experimental-features"},(0,n.yg)("strong",{parentName:"h2"},"Experimental Features:")),(0,n.yg)("h2",{id:"mace"},(0,n.yg)("strong",{parentName:"h2"},"Mace")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A new heavy weapon to smash your enemies!"),(0,n.yg)("li",{parentName:"ul"},"Leverage the weight of this new weapon to deal additional damage the farther you fall before hitting your target",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Try it out by jumping down toward your target, and hit them before you hit the ground"),(0,n.yg)("li",{parentName:"ul"},"Successfully striking a target in this way will negate any damage accumulated from the fall, similar to how a Wind Charge works"),(0,n.yg)("li",{parentName:"ul"},"Other entities near the struck enemy will be knocked back by the immense force of the Mace"))),(0,n.yg)("li",{parentName:"ul"},"Using a Mace will decrease its durability like any other weapon; repair it with Breeze Rods at an Anvil"),(0,n.yg)("li",{parentName:"ul"},"Players can use a Mace in combination with Wind Charges to launch up and deliver devastating smash attacks on their enemies")),(0,n.yg)("h2",{id:"breeze-rod"},(0,n.yg)("strong",{parentName:"h2"},"Breeze Rod")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A new item dropped by the Breeze that can be crafted into 4 Wind Charges, or used with the Heavy Core to craft the Mace")),(0,n.yg)("h2",{id:"heavy-core"},(0,n.yg)("strong",{parentName:"h2"},"Heavy Core")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A mysterious, dense block which can be combined with a Breeze Rod to craft the Mace"),(0,n.yg)("li",{parentName:"ul"},"Heavy Cores can be obtained from Vaults")),(0,n.yg)("h2",{id:"new-armor-trims"},(0,n.yg)("strong",{parentName:"h2"},"New Armor Trims")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Bolt and Flow Armor Trims and Smithing Templates"),(0,n.yg)("li",{parentName:"ul"},"These new Armor Trims can be obtained from Vaults"),(0,n.yg)("li",{parentName:"ul"},"Bolt can be duplicated using a Copper Block or Waxed Copper"),(0,n.yg)("li",{parentName:"ul"},"Flow can be duplicated using a Breeze Rod")),(0,n.yg)("h2",{id:"new-banner-patterns"},(0,n.yg)("strong",{parentName:"h2"},"New Banner Patterns")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Flow and Guster Banner Patterns"),(0,n.yg)("li",{parentName:"ul"},"These new Banner Patterns can be obtained from Vaults")),(0,n.yg)("h2",{id:"new-pottery-sherds"},(0,n.yg)("strong",{parentName:"h2"},"New Pottery Sherds")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Added Flow, Guster, and Scrape Pottery Sherds"),(0,n.yg)("li",{parentName:"ul"},"These new Pottery Sherds appear on Decorated Pots throughout Trial Chambers")),(0,n.yg)("h2",{id:"trial-chambers"},(0,n.yg)("strong",{parentName:"h2"},"Trial Chambers")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Struggle no more to locate a Trial Chamber - level up your nearest Cartographer to Journeyman for the opportunity to trade for a Locator Map pointing to a nearby Trial Chamber"),(0,n.yg)("li",{parentName:"ul"},"Added new chambers and variations, with new challenges!",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Remade chamber","_","9, and renamed it to \u201cslanted\u201d"),(0,n.yg)("li",{parentName:"ul"},"Remade chamber","_","3, and renamed it to \u201cpedestal\u201d"))),(0,n.yg)("li",{parentName:"ul"},"Added Flow, Guster, and Scrape Pottery Sherds to the Decorated Pots in the decor structure pool"),(0,n.yg)("li",{parentName:"ul"},"Trial Spawners will now appear more frequently in the corridors"),(0,n.yg)("li",{parentName:"ul"},"Changed the layout of blocks around the Vaults"),(0,n.yg)("li",{parentName:"ul"},"The loot tables of Vaults in Trial Chambers have been updated to address some inventory management issues",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"You will now get no more than 1 unstackable item per Vault"),(0,n.yg)("li",{parentName:"ul"},"You will more often get rewards which can stack together"),(0,n.yg)("li",{parentName:"ul"},"Horse Armor and Saddles have been removed from the loot table"))),(0,n.yg)("li",{parentName:"ul"},"Vaults in Trial Chambers can now eject:",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Wind Charges"),(0,n.yg)("li",{parentName:"ul"},"Bolt Armor Trim Smithing Template"),(0,n.yg)("li",{parentName:"ul"},"Flow Armor Trim Smithing Template"),(0,n.yg)("li",{parentName:"ul"},"Flow Banner Pattern"),(0,n.yg)("li",{parentName:"ul"},"Guster Banner Pattern"),(0,n.yg)("li",{parentName:"ul"},"Heavy Core  ")))),(0,n.yg)("h2",{id:"fixes-and-changes"},(0,n.yg)("strong",{parentName:"h2"},"Fixes and Changes:")),(0,n.yg)("h2",{id:"general"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed an issue preventing iOS devices from auto-locking and going to sleep when idle after the player left any world (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-179214"},"MCPE-179214"),")")),(0,n.yg)("h2",{id:"gameplay"},(0,n.yg)("strong",{parentName:"h2"},"Gameplay")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Holding the jump button while swimming underwater no longer results in a player drowning while appearing to be swimming at water\u2019s surface (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170969"},"MCPE-170969"),")"),(0,n.yg)("li",{parentName:"ul"},"Holding the jump button while swimming horizontally (not upwards) at or near water\u2019s surface will keep the player swimming at the surface at a height where breathing is possible (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170969"},"MCPE-170969"),")"),(0,n.yg)("li",{parentName:"ul"},"Players no longer crawl after sneaking onto a Bed with a 1.5 block gap above it (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178370"},"MCPE-178370"),")"),(0,n.yg)("li",{parentName:"ul"},"Trail Ruins now generate correctly on 32 bit-devices (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178549"},"MCPE-178549"),")"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug where guest players could not add trims to custom armor (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170317"},"MCPE-170317"),")"),(0,n.yg)("li",{parentName:"ul"},"Buckets can once again pick up liquids immediately after being placed (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-176634"},"MCPE-176634"),")")),(0,n.yg)("h2",{id:"mobs"},(0,n.yg)("strong",{parentName:"h2"},"Mobs")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Wolves\u2019 tails are now correctly positioned when sitting (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31121"},"MCPE-31121"),")"),(0,n.yg)("li",{parentName:"ul"},"Wolves now correctly leap at their targets (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-19740"},"MCPE-19740"),")"),(0,n.yg)("li",{parentName:"ul"},"Fixed vertical position of tamed mobs from the clients/guests perspective after they teleport to their owner (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-139168"},"MCPE-139168"),")"),(0,n.yg)("li",{parentName:"ul"},"Horses and Boats no longer slide to unexpected previous locations upon mounting or dismounting"),(0,n.yg)("li",{parentName:"ul"},"Rabbits are now more likely to spawn in Groves than before"),(0,n.yg)("li",{parentName:"ul"},"Foxes are now less likely to spawn in Groves than before")),(0,n.yg)("h2",{id:"blocks"},(0,n.yg)("strong",{parentName:"h2"},"Blocks")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Fixed occasional double placement of blocks when bridging (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-123455"},"MCPE-123455"),")"),(0,n.yg)("li",{parentName:"ul"},"Sweet Berry Bush now drops up to 6 Sweet Berries when mined using a Fortune enchanted tool (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172622"},"MCPE-172622"),")"),(0,n.yg)("li",{parentName:"ul"},"Fully grown Cocoa Pods now consistently drop 3 Cocoa Beans"),(0,n.yg)("li",{parentName:"ul"},"Fixed an issue causing Beds placed across chunk borders to sometimes break or turn invisible (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-31389"},"MCPE-31389"),")")),(0,n.yg)("h2",{id:"items"},(0,n.yg)("strong",{parentName:"h2"},"Items")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Shields can now partially block damage dealt by Guardians and Elder Guardians\u2019 laser attack")),(0,n.yg)("h2",{id:"graphical"},(0,n.yg)("strong",{parentName:"h2"},"Graphical")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Increased maximum render distance to 36 for Xbox Series consoles"),(0,n.yg)("li",{parentName:"ul"},"Updated the missing tile texture to a dirt block with brown question mark"),(0,n.yg)("li",{parentName:"ul"},"The Lead item now renders correctly when the \u201cHide Hand\u201d option is selected")),(0,n.yg)("h2",{id:"user-interface"},(0,n.yg)("strong",{parentName:"h2"},"User Interface")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The updated \u201cYou Died!\u201d screen is no longer experimental. Thank you for all of the feedback you have sent in about this updated feature!"),(0,n.yg)("li",{parentName:"ul"},"The feedback button has been moved from Main Menu to the Settings screen under the General tab with label \u201cHelp Center\u201d"),(0,n.yg)("li",{parentName:"ul"},"Increased the time interval for showing a standard loading tip"),(0,n.yg)("li",{parentName:"ul"},"Increased range for the \u201cmove up\u201d button, such that you can now slide off slowly to the near buttons without stopping the movement (",(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-178399"},"MCPE-178399"),")"),(0,n.yg)("li",{parentName:"ul"},"On touch devices, when items are swapped, the icons now move in the correct direction"),(0,n.yg)("li",{parentName:"ul"},"On touch devices, the selected item now has a blue background on all screens"),(0,n.yg)("li",{parentName:"ul"},"Flying item animation is no longer missing on touch-screen versions of Beacon, Cartography, and Smithing Table screens"),(0,n.yg)("li",{parentName:"ul"},"Reduced frame stutter when encountering a Character Creator skin in-game"),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug that prevented recipes without unlock criteria from showing up in the recipe book"),(0,n.yg)("li",{parentName:"ul"},"On touch devices, item transfer animation is now rendered above static items"),(0,n.yg)("li",{parentName:"ul"},"Resolved an issue where \u201cSigning in\u2026\u201d text might not have appeared on the main menu while sign in was actually in progress")))}p.isMDXComponent=!0}}]);