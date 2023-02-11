"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),g=r,h=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},72733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.19.70.22/gameplay",id:"changelog_source/preview/1.19.70.22/gameplay",title:"gameplay",description:"Experimental Features",source:"@site/docs/changelog_source/preview/1.19.70.22/gameplay.md",sourceDirName:"changelog_source/preview/1.19.70.22",slug:"/changelog_source/preview/1.19.70.22/gameplay",permalink:"/docs/changelog_source/preview/1.19.70.22/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.22/gameplay.md",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Camel</strong>",id:"camel",level:3},{value:"<strong>User Interface</strong>",id:"user-interface",level:3},{value:"<strong>Features and Bug Fixes</strong>",id:"features-and-bug-fixes",level:2},{value:"<strong>Vanilla Parity</strong>",id:"vanilla-parity",level:4},{value:"<strong>Spectator Mode</strong>",id:"spectator-mode",level:4},{value:"<strong>Gameplay</strong>",id:"gameplay",level:3},{value:"<strong>Blocks</strong>",id:"blocks-1",level:4},{value:"<strong>Mobs</strong>",id:"mobs",level:4},{value:"<strong>Items</strong>",id:"items",level:3},{value:"<strong>Marketplace</strong>",id:"marketplace",level:3},{value:"<strong>User Interface</strong>",id:"user-interface-1",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"experimental-features"},(0,r.kt)("strong",{parentName:"h2"},"Experimental Features")),(0,r.kt)("h3",{id:"blocks"},(0,r.kt)("strong",{parentName:"h3"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed black lines along the edges of Bamboo Fences and Bamboo Fence Gates (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163360"},"MCPE-163360"),")"),(0,r.kt)("li",{parentName:"ul"},"Importing experimental blocks into a non-experimental world using the Structure Block will now correctly place unknown blocks, which are not interactable")),(0,r.kt)("h3",{id:"camel"},(0,r.kt)("strong",{parentName:"h3"},"Camel")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Camels can once again overcome obstacles as high as one block and a half (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166452"},"MCPE-166452"),")")),(0,r.kt)("h3",{id:"user-interface"},(0,r.kt)("strong",{parentName:"h3"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mangrove and Bamboo Hanging Signs are now placed correctly in the Creative Inventory (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163340"},"MCPE-163340"),")")),(0,r.kt)("h2",{id:"features-and-bug-fixes"},(0,r.kt)("strong",{parentName:"h2"},"Features and Bug Fixes")),(0,r.kt)("h4",{id:"vanilla-parity"},(0,r.kt)("strong",{parentName:"h4"},"Vanilla Parity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Impact sounds of projectiles on Amethyst blocks and clusters are now audible"),(0,r.kt)("li",{parentName:"ul"},"Dead Bush will now drop Sticks when broken with any tool except Shears, even those with the Silk Touch enchantment. Vines will drop nothing in the same situation (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163246"},"MCPE-163246"),")"),(0,r.kt)("li",{parentName:"ul"},"Bells no longer break when a block is placed underneath or above them (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166742"},"MCPE-166742"),")")),(0,r.kt)("h4",{id:"spectator-mode"},(0,r.kt)("strong",{parentName:"h4"},"Spectator Mode")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Phasing through blocks in third person view no longer makes the camera zoom in and out towards the player\u2019s head (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160467"},"MCPE-160467"),")"),(0,r.kt)("li",{parentName:"ul"},"End Gateways can no longer be used in Spectator Mode (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-165689"},"MCPE-165689"),")")),(0,r.kt)("h3",{id:"gameplay"},(0,r.kt)("strong",{parentName:"h3"},"Gameplay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redstone source can now power a single block from different sides at the same time (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-163651"},"MCPE-163651"),")"),(0,r.kt)("li",{parentName:"ul"},"Players are no longer able to begin flying if they have no space to stand up (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-166413"},"MCPE-166413"),")"),(0,r.kt)("li",{parentName:"ul"},"Players can now fall off of an edge while sneaking if not holding the sneak button")),(0,r.kt)("h4",{id:"blocks-1"},(0,r.kt)("strong",{parentName:"h4"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Composter now always consumes an item when becoming full (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-162020"},"MCPE-162020"),")")),(0,r.kt)("h4",{id:"mobs"},(0,r.kt)("strong",{parentName:"h4"},"Mobs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Witches will drink a Fire Resistance Potion when standing on a Campfire")),(0,r.kt)("h3",{id:"items"},(0,r.kt)("strong",{parentName:"h3"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Crossbow now shakes while charging arrows (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152952"},"MCPE-152952"),")"),(0,r.kt)("li",{parentName:"ul"},"Loot table conditions are no longer ignored in-game when used inside functions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164582"},"MCPE-164582"),")"),(0,r.kt)("li",{parentName:"ul"},"Spawn eggs for Snow Golem, Wither, and Trader Llama now appear correctly in the inventory and hotbar")),(0,r.kt)("h3",{id:"marketplace"},(0,r.kt)("strong",{parentName:"h3"},"Marketplace")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a new 'Marketplace' icon to the Marketplace screen sidebar")),(0,r.kt)("h3",{id:"user-interface-1"},(0,r.kt)("strong",{parentName:"h3"},"User Interface")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Carrots now display the proper name in item tooltips when used in ",(0,r.kt)("em",{parentName:"li"},"can_place_on")," and ",(0,r.kt)("em",{parentName:"li"},"can_destroy")," item components (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160838"},"MCPE-160838"),")"),(0,r.kt)("li",{parentName:"ul"},"Tweaked the keyboard interaction on Android devices for text input fields")))}m.isMDXComponent=!0}}]);