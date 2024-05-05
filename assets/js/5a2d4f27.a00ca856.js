"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[19664],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.16/20/52/gameplay",id:"changelog_source/preview/1.16/20/52/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/docs/changelog_source/preview/1.16/20/52/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/20/52",slug:"/changelog_source/preview/1.16/20/52/gameplay",permalink:"/docs/changelog_source/preview/1.16/20/52/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/20/52/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Fixes\xa0",id:"fixes",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,a.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,a.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,a.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.yg)("h2",{id:"fixes"},"Fixes\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Pressure plates have been fixed to have no collision again\u202f",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80276"},"MCPE-80276"),"\xa0"),(0,a.yg)("li",{parentName:"ul"},"Local split-screen players can\xa0once again\xa0see the\xa0Ender\xa0Dragon\xa0and\xa0Ender\xa0Crystal\u202f",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-67596"},"MCPE-67596"),"\u202f"),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that\xa0occurred\xa0on PlayStation 4\xa0due to other players using custom skins\u202f"),(0,a.yg)("li",{parentName:"ul"},"The Angry system now checks if the mob with the angry component can attack before broadcasting anger to others, rather than after broadcasting anger to others.\xa0This avoids a\xa0never-ending\xa0loop when multiple mobs triggered\xa0each\xa0other\u2019s\xa0anger\xa0indefinitely\xa0on peaceful"),(0,a.yg)("li",{parentName:"ul"},"The\xa0'rider","_","can","_","interact'\xa0field\xa0on\xa0'minecraft:rideable'\xa0is\xa0now\xa0used again"),(0,a.yg)("li",{parentName:"ul"},"Behavior\xa0animation components will no longer try to reload after a suspend resume and a mob/player rides something"),(0,a.yg)("li",{parentName:"ul"},"Drowned geometry\xa0is\xa0no longer broken in content packs\xa0"),(0,a.yg)("li",{parentName:"ul"},"Zombies can spawn underground again\xa0",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-52743"},"MCPE-52743")),(0,a.yg)("li",{parentName:"ul"},"Making command selectors use the current position of an actor rather than the previous position of an actor"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue that could prevent the Marketplace\xa0loading correctly"),(0,a.yg)("li",{parentName:"ul"},"Meeting requirements for some\xa0achievements offline\xa0will now\xa0unlock it after reconnecting"),(0,a.yg)("li",{parentName:"ul"},"Fixed an issue that could cause\xa0Command Blocks\xa0to stop working\xa0unexpectedly"),(0,a.yg)("li",{parentName:"ul"},"The bounding box of the player used for spawning is now the correct\xa0size,\xa0so we\xa0don't think a player is in a dangerous spot when they are\xa0actually\xa0safe"),(0,a.yg)("li",{parentName:"ul"},"Parity:\xa0Fixed the issue with chests with loot tables\xa0not\xa0generating\xa0loot until opened or destroyed\xa0"),(0,a.yg)("li",{parentName:"ul"},"Made\xa0using the\xa0'/fill'\xa0command more efficient, improving performance\xa0"),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur\xa0when pressing\xa0the\xa0Manage\xa0Account button in Profile\xa0settings"),(0,a.yg)("li",{parentName:"ul"},"Fixed\xa0notifications\xa0not\xa0appearing\xa0on iOS")))}g.isMDXComponent=!0}}]);