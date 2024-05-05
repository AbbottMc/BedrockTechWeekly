"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44275],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=g(a),c=r,m=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=a[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76818:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=a(58168),r=(a(96540),a(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/220/50/gameplay",id:"changelog_source/preview/1.16/220/50/gameplay",title:"gameplay",description:"Posted: 4th March 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/220/50/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/220/50",slug:"/changelog_source/preview/1.16/220/50/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/220/50/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/220/50/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},g=[{value:"<strong>New Experimental Features:</strong>",id:"new-experimental-features",level:2},{value:"<strong>Please note:</strong> The blending between the old generation and the new generation in this beta is not finalized yet. We want to make sure we respect players&#39; old worlds being upgraded to the new world generation and are working hard to improve the biome blending for the full Caves and Cliffs release!",id:"please-note-the-blending-between-the-old-generation-and-the-new-generation-in-this-beta-is-not-finalized-yet-we-want-to-make-sure-we-respect-players-old-worlds-being-upgraded-to-the-new-world-generation-and-are-working-hard-to-improve-the-biome-blending-for-the-full-caves-and-cliffs-release",level:2},{value:"<strong>Mountains</strong>",id:"mountains",level:2},{value:"<strong>Glow Squid</strong>",id:"glow-squid",level:2},{value:"<strong>Dripstone Fixes:</strong>",id:"dripstone-fixes",level:2},{value:"<strong>Performance and Stability:</strong>",id:"performance-and-stability",level:2},{value:"<strong>General:</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Villages</strong>",id:"villages",level:2},{value:"<strong>Technical Fixes and Changes</strong>",id:"technical-fixes-and-changes",level:2},{value:"<strong>Various updates to GameTest Framework:</strong>",id:"various-updates-to-gametest-framework",level:2},{value:"<strong>Movement prediction</strong>",id:"movement-prediction",level:2},{value:"<strong>Other:</strong>",id:"other",level:2},{value:"<strong>Network Packets</strong>",id:"network-packets",level:2}],p={toc:g},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 4th March 2021"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:"),"\xa0"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of\xa0Minecraft\xa0"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the\xa0beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing\xa0them\xa0"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version\xa0quality\xa0"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed\xa0instructions\xa0")),(0,r.yg)("h2",{id:"new-experimental-features"},(0,r.yg)("strong",{parentName:"h2"},"New Experimental Features:")),(0,r.yg)("p",null,'In this week\'s beta we have some exciting new Caves and Cliffs features that are accessible by enabling the "Experimental Features" toggle on your worlds! (You can find out more about using the toggles at ',(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),".)"),(0,r.yg)("h2",{id:"please-note-the-blending-between-the-old-generation-and-the-new-generation-in-this-beta-is-not-finalized-yet-we-want-to-make-sure-we-respect-players-old-worlds-being-upgraded-to-the-new-world-generation-and-are-working-hard-to-improve-the-biome-blending-for-the-full-caves-and-cliffs-release"},(0,r.yg)("strong",{parentName:"h2"},"Please note:")," The blending between the old generation and the new generation in this beta is not finalized yet. We want to make sure we respect players' old worlds being upgraded to the new world generation and are working hard to improve the biome blending for the full Caves and Cliffs release!"),(0,r.yg)("p",null,"You can leave us your feedback for these features in the threads at ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/CavesCliffsFeedback"},"aka.ms/CavesCliffsFeedback"),", and search and reports any new bugs you may encounter at ",(0,r.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360088354971/img_752.JPG",alt:"img_752.JPG"})),(0,r.yg)("h2",{id:"mountains"},(0,r.yg)("strong",{parentName:"h2"},"Mountains")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Introducing the new mountain sub biomes: Lofty Peaks, Snow Capped Peaks, Snowy Slopes, Mountain Grove, and Mountain Meadow!"),(0,r.yg)("li",{parentName:"ul"},"To accommodate the new Mountains we are raising the world height from 256 to 320 blocks with new Mountain generation up to a maximum of 256 blocks height"),(0,r.yg)("li",{parentName:"ul"},"For true alpinists: Iron, Coal and Emerald ores are generated in mountains"),(0,r.yg)("li",{parentName:"ul"},"Updated textures for Iron, Coal, Emerald, Diamond, Gold, Lapis, Copper, and Redstone ores"),(0,r.yg)("li",{parentName:"ul"},"Mountain terrain will now generate as part of Overworld world generation"),(0,r.yg)("li",{parentName:"ul"},"Move goat spawn from Extreme Hills to Snowy Slopes and allow rabbits to spawn in Mountain Grove")),(0,r.yg)("h2",{id:"glow-squid"},(0,r.yg)("strong",{parentName:"h2"},"Glow Squid")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The glow squid has been reintroduced to the beta!"),(0,r.yg)("li",{parentName:"ul"},"Glow Squid now emits glow colored ink particles when hurt (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117500"},"MCPE-117500"),")"),(0,r.yg)("li",{parentName:"ul"},"Players can now use dye to color sign text"),(0,r.yg)("li",{parentName:"ul"},"Squid's model is no longer offset in the -Y direction (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-114253"},"MCPE-114253"),")"),(0,r.yg)("li",{parentName:"ul"},"Added Glow Squid, Glow Ink Sacs and Glow Item Frames")),(0,r.yg)("h1",{id:"bug-fixes"},(0,r.yg)("strong",{parentName:"h1"},"Bug Fixes")),(0,r.yg)("h2",{id:"dripstone-fixes"},(0,r.yg)("strong",{parentName:"h2"},"Dripstone Fixes:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Placing Pointed Dripstone blocks in water no longer results in the water being removed"),(0,r.yg)("li",{parentName:"ul"},"When hanging Pointed Dripstones start falling their position now has the correct offset"),(0,r.yg)("li",{parentName:"ul"},"Tweaked the visual shape of Pointed Dripstone to match Java"),(0,r.yg)("li",{parentName:"ul"},"Crouching while placing pointed dripstone prevents the opposing stalactite and stalagmite to merge"),(0,r.yg)("li",{parentName:"ul"},"Standing on a Stalagmite and jumping will cause half heart fall damage when landing"),(0,r.yg)("li",{parentName:"ul"},"Pointed Dripstone now has the correct hitbox"),(0,r.yg)("li",{parentName:"ul"},"Pointed Dripstone blocks are no longer destroyed by flowing lava"),(0,r.yg)("li",{parentName:"ul"},"Pointed Dripstone now has the correct size and rotation when held in hand"),(0,r.yg)("li",{parentName:"ul"},"Stalactite death message is no longer ending with a dot"),(0,r.yg)("li",{parentName:"ul"},"Falling stalactite now deals correct fall damage"),(0,r.yg)("li",{parentName:"ul"},"Pointed Dripstone drips only lava in the Nether (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115393"},"MCPE-115393"),")"),(0,r.yg)("li",{parentName:"ul"},"Being killed by dripstone now displays correct death message"),(0,r.yg)("li",{parentName:"ul"},"Correct sounds are now played for Dripstone and Pointed Dripstone blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115283"},"MCPE-115283"),")"),(0,r.yg)("li",{parentName:"ul"},"Cauldrons can now fill up with water or lava when below stalactites that are dripping one of those liquids (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115363"},"MCPE-115363"),")"),(0,r.yg)("li",{parentName:"ul"},"Throwing a trident on a pointed dripstone block breaks it (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-115281"},"MCPE-115281"),")"),(0,r.yg)("li",{parentName:"ul"},"Added Dripstone block. It can be crafted from four Pointed Dripstones")),(0,r.yg)("h2",{id:"performance-and-stability"},(0,r.yg)("strong",{parentName:"h2"},"Performance and Stability:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,r.yg)("li",{parentName:"ul"},"Fixed a crash that could occur when trying to rename a map on anvil while having its second slot occupied (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-112905"},"MCPE-112905"),")")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Powder Snow can no longer be placed in positions that already contain other blocks, such as Fence Posts or Iron Bars"),(0,r.yg)("li",{parentName:"ul"},"Glow signs are no longer unlit on DX11 and Mobile platforms (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-117524"},"MCPE-117524"),")"),(0,r.yg)("li",{parentName:"ul"},"Actor selectors no longer allow self selection with cheats disabled (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-92635"},"MCPE-92635"),")"),(0,r.yg)("li",{parentName:"ul"},"Projectiles now pass through Structure Void blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-103579"},"MCPE-103579"),")"),(0,r.yg)("li",{parentName:"ul"},"Zombie, Zombie Villager, Husk, Pillager, Vindicator use correct bone to attach shields (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-98606"},"MCPE-98606"),")"),(0,r.yg)("li",{parentName:"ul"},"Mobs that pick up Shield now place it to their off-hand"),(0,r.yg)("li",{parentName:"ul"},"Visitors now drop inventory on death (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47563"},"MCPE-47563"),")"),(0,r.yg)("li",{parentName:"ul"},"Improved placement rules for placing blocks on sides of Stair, Slab and Top Snow block"),(0,r.yg)("li",{parentName:"ul"},'Controllers are now able to select the "Button Mode" toggle in the Advanced Settings NPC screen in the Jurassic World pack (',(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-66446"},"MCPE-66446"),")")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Command block in a command block chain will list the correct amount of ticking areas when a new ticking area is added before listing"),(0,r.yg)("li",{parentName:"ul"},"Title command no longer duplicates % symbols in message (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-51033"},"MCPE-51033"),")"),(0,r.yg)("li",{parentName:"ul"},"Using teleport with execute command now uses the dimension of the origin for its operations (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-44104"},"MCPE-44104"),")")),(0,r.yg)("h2",{id:"marketplace"},(0,r.yg)("strong",{parentName:"h2"},"Marketplace")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'The "Results" field for search within the marketplace inventory now updates properly between different sections within the screen')),(0,r.yg)("h2",{id:"accessibility"},(0,r.yg)("strong",{parentName:"h2"},"Accessibility")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enabled screen narration with touch input on the new achievements screen"),(0,r.yg)("li",{parentName:"ul"},"Fixed a bug where Text-to-speech read the wrong text while using VR")),(0,r.yg)("h2",{id:"villages"},(0,r.yg)("strong",{parentName:"h2"},"Villages")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Villagers are no longer able to go through walls to sleep in a bed if the bed is adjacent to them")),(0,r.yg)("h2",{id:"technical-fixes-and-changes"},(0,r.yg)("strong",{parentName:"h2"},"Technical Fixes and Changes")),(0,r.yg)("h2",{id:"various-updates-to-gametest-framework"},(0,r.yg)("strong",{parentName:"h2"},"Various updates to GameTest Framework:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated Blocks shorthand helpers to be camelCase"),(0,r.yg)("li",{parentName:"ul"},"Updated Blocks shorthand to only include vanilla blocks"),(0,r.yg)("li",{parentName:"ul"},"Added Blocks.get to fetch a block and return null if it doesn't exist"),(0,r.yg)("li",{parentName:"ul"},"Added BlockStates to enumerate all block states"),(0,r.yg)("li",{parentName:"ul"},"Added setState to Block to update its block state"),(0,r.yg)("li",{parentName:"ul"},"Added BlockPos class"),(0,r.yg)("li",{parentName:"ul"},"Added ItemStack class GameTest Module:"),(0,r.yg)("li",{parentName:"ul"},"Added Tags to enumerate all built-in tags"),(0,r.yg)("li",{parentName:"ul"},"Updated all methods that took x, y, z position to take a BlockPos"),(0,r.yg)("li",{parentName:"ul"},"Exposed padding when registering game test"),(0,r.yg)("li",{parentName:"ul"},"Fixed issue where previous failed GameTest markers still show up in new worlds")),(0,r.yg)("h2",{id:"movement-prediction"},(0,r.yg)("strong",{parentName:"h2"},"Movement prediction")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed projectiles on 3rd-party servers ignoring server movement packets"),(0,r.yg)("li",{parentName:"ul"},"The server will adjust the player's fall distance to take into account the client player's position when a player movement correction or anomaly is detected")),(0,r.yg)("h2",{id:"other"},(0,r.yg)("strong",{parentName:"h2"},"Other:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Changed the way GameTest packs are loaded. Additional files are referenced by the primary file as specified by the 'entry' field in the manifest.json"),(0,r.yg)("li",{parentName:"ul"},"A black screen no longer covers the player icon in the pause menu in some worlds. Content creators no longer need to override both focus","_","border","_","frame.png and pause","_","screen","_","border.png for correct behavior"),(0,r.yg)("li",{parentName:"ul"},"Assertion is changed to content log error for the missing textures caused by the outdated resource packs of the Marketplace world templates"),(0,r.yg)("li",{parentName:"ul"},'Items can now have the "transparentattachable" tag applied to make attachable items not render for the player wearing them in the first person perspective'),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue where V2 Villagers were not properly updating their molang variables on initialization")),(0,r.yg)("h2",{id:"network-packets"},(0,r.yg)("strong",{parentName:"h2"},"Network Packets")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Changed cipher algorithm to AESGCM256 for UDP stream")))}u.isMDXComponent=!0}}]);