"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"changelog_source/stable/1.2/1/gameplay",id:"changelog_source/stable/1.2/1/gameplay",title:"gameplay",description:"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update.",source:"@site/docs/changelog_source/stable/1.2/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.2/1",slug:"/changelog_source/stable/1.2/1/gameplay",permalink:"/docs/changelog_source/stable/1.2/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.2/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>New Features:</strong>",id:"new-features",level:2},{value:"<strong>Tweaks:</strong>",id:"tweaks",level:2},{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2},{value:"<strong>World Conversion Bug Fixes:</strong>",id:"world-conversion-bug-fixes",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you find any bugs, be sure to report them here! Click here to give us feedback & tell us what you think about the update."),(0,r.kt)("h2",{id:"new-features"},(0,r.kt)("strong",{parentName:"h2"},"New Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a free cursor to the inventory screen when navigating with a controller")),(0,r.kt)("h2",{id:"tweaks"},(0,r.kt)("strong",{parentName:"h2"},"Tweaks:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a video setting to toggle gameplay field of view changes"),(0,r.kt)("li",{parentName:"ul"},"When selecting an item from the Creative inventory when the hotbar is full and using a controller, the item will be placed on the cursor and focus will shift to the hotbar, offering them the opportunity to replace an existing item in the hotbar with the new item"),(0,r.kt)("li",{parentName:"ul"},"Adjusted block placement speed when using a controller"),(0,r.kt)("li",{parentName:"ul"},"Added a white outline to highlighted inventory slots and recipes")),(0,r.kt)("h2",{id:"bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Made several fixes to make navigating Settings, Create New World, Edit World, and How to Play screens more intuitive when using a controller"),(0,r.kt)("li",{parentName:"ul"},"Increased performance on third-party servers"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred due to rendering issues"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when changing to a user profile that had no save data"),(0,r.kt)("li",{parentName:"ul"},'Fixed a crash that occurred when ""Saving World"" message appeared and a player signed out of their profile while in a world'),(0,r.kt)("li",{parentName:"ul"},"Descriptions will now save if it is the last field interacted with before exporting to Remix 3D (Windows 10 only)"),(0,r.kt)("li",{parentName:"ul"},'Fixed the Recipe Book ""Search"" text marker becoming blocked in certain circumstances'),(0,r.kt)("li",{parentName:"ul"},'""@r"" will no longer target the oldest entity and will now target a random entity'),(0,r.kt)("li",{parentName:"ul"},"Fixed the particles and animation when using the '/summon' command to spawn a firework rocket"),(0,r.kt)("li",{parentName:"ul"},"Minecart with Command Block now has collision with other blocks after going off rails"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when going to the Settings screen after being disconnected from a server"),(0,r.kt)("li",{parentName:"ul"},"The menu no longer needs to be scrolled to see Adventure mode in the game mode dropdown menu"),(0,r.kt)("li",{parentName:"ul"},"Players can no longer take fall damage when jumping into an End Portal in Creative mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed the Creative inventory being empty after connecting to an external server"),(0,r.kt)("li",{parentName:"ul"},"Jumping into a minecart while directly under a block will no longer place the player above the block"),(0,r.kt)("li",{parentName:"ul"},"Fixed Settings sliders not appearing correctly"),(0,r.kt)("li",{parentName:"ul"},"Fixed navigation of the Villager trading screen when using a controller so it's a much more intuitive experience"),(0,r.kt)("li",{parentName:"ul"},"Slimes will once again spawn below layer 40, regardless of light level"),(0,r.kt)("li",{parentName:"ul"},"Experience orbs are now easier to pick up"),(0,r.kt)("li",{parentName:"ul"},"Fixed several issues with the MINECON 2015 Skin Pack"),(0,r.kt)("li",{parentName:"ul"},"Templates on the Create screen are now sorted by owned items first"),(0,r.kt)("li",{parentName:"ul"},"The GUI Scale slider will now adjust based on how many scales are available per device"),(0,r.kt)("li",{parentName:"ul"},"Fixed the transparency of several skins"),(0,r.kt)("li",{parentName:"ul"},"Music change is now synchronized when moving between dimensions"),(0,r.kt)("li",{parentName:"ul"},"Crop blocks will no longer break if a block is placed above them"),(0,r.kt)("li",{parentName:"ul"},"The player list in Host Options will now properly scroll (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed firework explosion sound range being too low"),(0,r.kt)("li",{parentName:"ul"},"Mobs will no longer play sound effects twice when being spawned"),(0,r.kt)("li",{parentName:"ul"},"The crosshair will no longer appear when in third-person camera modes"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue with charged Creeper and Wither shields not appearing (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when gliding with Elytra wings in split-screen (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Players can now use the A button to remove items when the Open Containers permission is set"),(0,r.kt)("li",{parentName:"ul"},"Fixed the missing sound effect when combining two items on an anvil"),(0,r.kt)("li",{parentName:"ul"},"The Host Options button is now visible on the chat screen while playing Realms with cheats enabled"),(0,r.kt)("li",{parentName:"ul"},"Fixed the arrow texture of the Observer item being flipped 180 degrees"),(0,r.kt)("li",{parentName:"ul"},"Fixed mobs not spawning in parts of the overworld"),(0,r.kt)("li",{parentName:"ul"},"Fixed the jump animation of ignited TNT"),(0,r.kt)("li",{parentName:"ul"},"Using '/execute tp' will now work with tildes and positive coordinates"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when trying to load a Realms member list with a large amount of members (iOS only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed the player permissions screen in the pause menu showing no options"),(0,r.kt)("li",{parentName:"ul"},"Fixed the How to Play screen in the pause menu showing no text"),(0,r.kt)("li",{parentName:"ul"},"When giving a player an item in the same tick as a '/clear' command, the item is no longer invisible until the player right-clicks on a block"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when using 'spawn","_","entity' in an Add-On 'min","_","wait","_","time' and 'max","_","wait","_","time' is the same"),(0,r.kt)("li",{parentName:"ul"},"Using middle mouse button to collect blocks when the first hotbar slot is left empty no longer causes items to vanish from the hotbar"),(0,r.kt)("li",{parentName:"ul"},"Chunks will now reappear without having to do move after resuming the game (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that occurred when suspending the game (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Pages will no longer disappear when editing Book & Quill by saving the content upon pressing the next and previous arrows"),(0,r.kt)("li",{parentName:"ul"},"Footstep audio is no longer played twice when one player is moving on split-screen (Xbox One only)"),(0,r.kt)("li",{parentName:"ul"},"Certain mobs that attack from a distance can no longer fire projectiles from their sides or backs due to their rotation being too slow"),(0,r.kt)("li",{parentName:"ul"},"Fixed the error message that appeared when attempting to download content without an internet connection"),(0,r.kt)("li",{parentName:"ul"},"Fixed the running animation speed while flying in Creative mode after pressing Fly Up for Fly Down"),(0,r.kt)("li",{parentName:"ul"},"Magma blocks no longer make the area around them darker than other blocks do"),(0,r.kt)("li",{parentName:"ul"},"Slightly increased the spawn rate of Ghasts"),(0,r.kt)("li",{parentName:"ul"},"Fixed the length of explosion particle animations"),(0,r.kt)("li",{parentName:"ul"},"Fixed trees taking too long to grow from saplings"),(0,r.kt)("li",{parentName:"ul"},"Dying an undyed Shulker box will no longer destroy the items contained in it"),(0,r.kt)("li",{parentName:"ul"},"The Recipe Book can now be used to dye a Shulker box that has been placed in the world at least once"),(0,r.kt)("li",{parentName:"ul"},"Crops will now grow roughly twice as fast as they used to"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when dropping items"),(0,r.kt)("li",{parentName:"ul"},"The Global Resources list will now properly update after closing Settings"),(0,r.kt)("li",{parentName:"ul"},'Clicking ""Save & Quit"" will now quickly lead to the Leave Level screen and the saving icon animation has been smoothed out'),(0,r.kt)("li",{parentName:"ul"},'The Host Options menu can now be used to change weather when the \'doweathercycle\' game rule is ""false""'),(0,r.kt)("li",{parentName:"ul"},"Fixed the controller hint when opening and closing the Recipe Book"),(0,r.kt)("li",{parentName:"ul"},"Fixed placeholder names for several skin packs")),(0,r.kt)("h2",{id:"world-conversion-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"World Conversion Bug Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed Nether Fortresses missing parts of floors and walls after world conversion"),(0,r.kt)("li",{parentName:"ul"},"Converted Witches and Bats no longer move faster than non-converted Witches and Bats"),(0,r.kt)("li",{parentName:"ul"},"Fixed converted Vindicators not having axes"),(0,r.kt)("li",{parentName:"ul"},"Fixed converted hopper minecarts not picking up items"),(0,r.kt)("li",{parentName:"ul"},"Fixed converted tame wolves not acting tame, although they visually appear to be tamed"),(0,r.kt)("li",{parentName:"ul"},"Fixed converted Endermen, spiders, cave spiders, and polar bears not becoming aggressive"),(0,r.kt)("li",{parentName:"ul"},"Bed spawn points are no longer being reversed to world spawn point coordinates"),(0,r.kt)("li",{parentName:"ul"},"Players will now spawn where they left off, instead of the initial world spawn after conversion"),(0,r.kt)("li",{parentName:"ul"},"Fixed banners that were created before conversion not stacking with new banners"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash when loading a converted world in the End after defeating the dragon"),(0,r.kt)("li",{parentName:"ul"},"Firework stars no longer have the black firework star icon after conversion")))}u.isMDXComponent=!0}}]);