"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82503],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},g=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?t.createElement(d,l(l({ref:a},g),{},{components:n})):t.createElement(d,l({ref:a},g))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31346:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/210/53/gameplay",id:"changelog_source/preview/1.16/210/53/gameplay",title:"gameplay",description:"Posted: 17 December, 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/210/53/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/210/53",slug:"/changelog_source/preview/1.16/210/53/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/210/53/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/210/53/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"<strong>Experimental Caves and Cliffs Features</strong>",id:"experimental-caves-and-cliffs-features",level:2},{value:"<strong>Powder Snow</strong>",id:"powder-snow",level:2},{value:"<strong>Nether Ambient Sounds</strong>",id:"nether-ambient-sounds",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Gameplay</strong>",id:"gameplay",level:2},{value:"<strong>Technical</strong>",id:"technical",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2}],g={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Posted:")," 17 December, 2020"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,r.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,r.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,r.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,r.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,r.yg)("p",null,"This week's beta is extra cool as we've made some changes to powder snow, along with some important bug fixes! Powder snow and goats are both Caves and Cliffs features that can be accessed by using the Experimental Features toggle in the world settings in this beta. For more information about the toggle, please head over to ",(0,r.yg)("a",{parentName:"p",href:"https://aka.ms/MCExperimentalToggle"},"aka.ms/MCExperimentalToggle"),"."),(0,r.yg)("h2",{id:"experimental-caves-and-cliffs-features"},(0,r.yg)("strong",{parentName:"h2"},"Experimental Caves and Cliffs Features")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/360079858472/Screen_Shot_12-15-20_at_02.50_PM_002.JPG",alt:"Screen_Shot_12-15-20_at_02.50_PM_002.JPG"}),"  "),(0,r.yg)("h2",{id:"powder-snow"},(0,r.yg)("strong",{parentName:"h2"},"Powder Snow")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The powder snow block now emits particles when an entity is moving inside of it, or landing on it"),(0,r.yg)("li",{parentName:"ul"},"A freezing effect is gradually applied to the player and any mobs that are inside powder snow blocks"),(0,r.yg)("li",{parentName:"ul"},"Freezing effect is removed from any mobs or players that catch fire"),(0,r.yg)("li",{parentName:"ul"},'Players in survival mode can now turn damage from freezing effect on/off using game rule, e.g: "/gamerule freezedamage false"'),(0,r.yg)("li",{parentName:"ul"},"Mobs that have sunk into powder snow now can navigate through it"),(0,r.yg)("li",{parentName:"ul"},"Entities on fire now have their fires extinguished when stepping into powder snow"),(0,r.yg)("li",{parentName:"ul"},"Redstone dust, torches and item frames can no longer be placed on powder snow"),(0,r.yg)("li",{parentName:"ul"},"Gravity blocks no longer break when landing on powder snow"),(0,r.yg)("li",{parentName:"ul"},"While within powder snow blocks third person camera is no longer pushed to the inside of the character's head"),(0,r.yg)("li",{parentName:"ul"},"Mobs spawned inside Powder Block no longer have a risk of spawning underground"),(0,r.yg)("li",{parentName:"ul"},"Powder snow block is not present in Creative Inventory anymore (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105407"},"MCPE-105407"),")"),(0,r.yg)("li",{parentName:"ul"},"Powder snow no longer stops projectiles in Bedrock (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-104940"},"MCPE-104940"),")"),(0,r.yg)("li",{parentName:"ul"},"Lightweight mobs now can climb and navigate through powder snow blocks"),(0,r.yg)("li",{parentName:"ul"},"Rabbits, silverfish and Endermites don't fall through powder snow blocks"),(0,r.yg)("li",{parentName:"ul"},"It is now possible to specify a list of blocks that an entity should avoid"),(0,r.yg)("li",{parentName:"ul"},"Goats are smart enough to avoid powder snow blocks when pathing"),(0,r.yg)("li",{parentName:"ul"},"An entity walking through powder snow will make the correct step sound regardless of which block is being walked on"),(0,r.yg)("li",{parentName:"ul"},"Wearing Leather Boots now allows entities to climb powder snow Blocks (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-105410"},"MCPE-105410"),")"),(0,r.yg)("li",{parentName:"ul"},"Powder snow Blocks have unique interaction sounds"),(0,r.yg)("li",{parentName:"ul"},"When the camera is inside a powder snow block fog is rendered around it and an overlay texture is rendered on it"),(0,r.yg)("li",{parentName:"ul"},"Buckets can be used to pick up and place powder snow"),(0,r.yg)("li",{parentName:"ul"},"Powder snow blocks have a slightly different texture than regular Snow blocks"),(0,r.yg)("li",{parentName:"ul"},"Entities can enter powder snow blocks, but their movement is slowed down while inside",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fall damage is ignored"))),(0,r.yg)("li",{parentName:"ul"},"Leather boots make it easier for players to traverse powder snow"),(0,r.yg)("li",{parentName:"ul"},"Fixed occlusion for powder snow; adjacent blocks no longer appear transparent when inside powder snow")),(0,r.yg)("h2",{id:"nether-ambient-sounds"},(0,r.yg)("strong",{parentName:"h2"},"Nether Ambient Sounds")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Mobile players now experience ambient sounds in The Nether (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-74756"},"MCPE-74756"),")"),(0,r.yg)("li",{parentName:"ul"},"Be sure to update the Minecraft Original Music Pack via the Marketplace to hear these new sounds!")),(0,r.yg)("h2",{id:"general"},(0,r.yg)("strong",{parentName:"h2"},"General")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Shulker Boxes no longer lose their inventory when undyed in cauldrons (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108196"},"MCPE-108196"),")"),(0,r.yg)("li",{parentName:"ul"},"Added new logic for mobs dismounting rideables",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This also introduces a more fine grained entity height check allowing different dismount places for entities of different heights"))),(0,r.yg)("li",{parentName:"ul"},"The player will no longer dismount into liquids (lava or water) from rideables such as boats"),(0,r.yg)("li",{parentName:"ul"},"Added F11 as a keyboard shortcut for full screen mode"),(0,r.yg)("li",{parentName:"ul"},"Sign in failures now have a more helpful error message and provide error codes")),(0,r.yg)("h2",{id:"gameplay"},(0,r.yg)("strong",{parentName:"h2"},"Gameplay")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In all worlds created with the same seed, the same chest will now always generate the same content in the same order (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-72432"},"MCPE-72432"),")"),(0,r.yg)("li",{parentName:"ul"},"Double Chests placed at chunk borders don't become partially invisible and don't crash the title when they are opened (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106030"},"MCPE-106030"),")"),(0,r.yg)("li",{parentName:"ul"},"Golden Apple and Enchanted Apple now have colored hotbar text when selecting them (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-64427"},"MCPE-64427"),")")),(0,r.yg)("h2",{id:"technical"},(0,r.yg)("strong",{parentName:"h2"},"Technical")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added new slash command options for '/setblock', '/fill', and '/clone' commands for passing in a list of block states to set on the block being spawned"),(0,r.yg)("li",{parentName:"ul"},"Changing 'RideableComponent' property \"rotate","_","rider","_",'by" to function for custom mobs')),(0,r.yg)("h2",{id:"graphics"},(0,r.yg)("strong",{parentName:"h2"},"Graphics")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Added Fog Documentation"),(0,r.yg)("li",{parentName:"ul"},'Added the "fogs" folder to the Resource Pack template',(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Resource Pack Template: ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MinecraftBetaResources"},"aka.ms/MinecraftBetaResources")),(0,r.yg)("li",{parentName:"ul"},"Behavior Pack Template: (Includes documentation): ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MinecraftBetaBehaviors"},"aka.ms/MinecraftBetaBehaviors"))))))}u.isMDXComponent=!0}}]);