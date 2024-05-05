"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42704],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,m=u["".concat(c,".").concat(y)]||u[y]||g[y]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},53408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(58168),a=(r(96540),r(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/60/gameplay",id:"changelog_source/preview/1.16/100/60/gameplay",title:"gameplay",description:"PLEASE READ before participating in the Minecraft Beta:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/100/60/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/60",slug:"/changelog_source/preview/1.16/100/60/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/100/60/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/60/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>Performance and Stability</strong>\xa0",id:"performance-and-stability",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>G**</strong>raphical**\xa0",id:"graphical",level:2},{value:"<strong>Technical Changes</strong>\xa0",id:"technical-changes",level:2}],p={toc:s},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,a.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,a.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,a.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions")),(0,a.yg)("h2",{id:"performance-and-stability"},(0,a.yg)("strong",{parentName:"h2"},"Performance and Stability"),"\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash on\xa0that could occur\xa0when Player 1 in a split-screen session disconnects their controller (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-99565"},"MCPE-99565)"))),(0,a.yg)("h2",{id:"gameplay"},(0,a.yg)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When the\xa0'/clone' command replaces a double chest with another double chest, it now sets their pairing correctly upon load. This way it doesn't cause errors before it ticks to match up the pair")),(0,a.yg)("h2",{id:"graphical"},(0,a.yg)("strong",{parentName:"h2"},"G**"),"raphical**\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Touchscreen input "Chat and Commands" UI element now has a darker border \xa0'),(0,a.yg)("li",{parentName:"ul"},'"Tip" messages no longer appear off screen \xa0'),(0,a.yg)("li",{parentName:"ul"},"Added the ability to animate the placement of a structure with the\xa0'/structure'\xa0command\xa0 \xa0"),(0,a.yg)("li",{parentName:"ul"},"Changed vignette layer from 4 to 5 to prevent drawing vignette\xa0in between hotbar items")),(0,a.yg)("h2",{id:"technical-changes"},(0,a.yg)("strong",{parentName:"h2"},"Technical Changes"),"\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed updating of bounding box to happen after proper scale has been set")))}g.isMDXComponent=!0}}]);