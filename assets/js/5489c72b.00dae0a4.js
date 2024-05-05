"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40379],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/100/53/gameplay",id:"changelog_source/preview/1.16/100/53/gameplay",title:"gameplay",description:"Posted: 26\xa0August 2020",source:"@site/docs/changelog_source/preview/1.16/100/53/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/100/53",slug:"/changelog_source/preview/1.16/100/53/gameplay",permalink:"/docs/changelog_source/preview/1.16/100/53/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/100/53/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Structure Blocks</strong>",id:"structure-blocks",level:2},{value:"<strong>Technical/Commands</strong>",id:"technicalcommands",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," 26\xa0August 2020"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PLEASE READ before participating in the Minecraft Beta:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,a.yg)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,a.yg)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,a.yg)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,a.yg)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see\xa0",(0,a.yg)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta"),"\xa0for detailed instructions")),(0,a.yg)("h2",{id:"general"},(0,a.yg)("strong",{parentName:"h2"},"General")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Lava and water textures are now visible after placing Slime block or Honey block next to or above them (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-62255"},"MCPE-62255"),")"),(0,a.yg)("li",{parentName:"ul"},"End gateways will now correctly calculate distance to the center block when searching for an exit position (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-48922"},"MCPE-48922"),")"),(0,a.yg)("li",{parentName:"ul"},"Plants and crops now grow more consistently when near chunk borders")),(0,a.yg)("h2",{id:"structure-blocks"},(0,a.yg)("strong",{parentName:"h2"},"Structure Blocks")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Removed the name field from the structure block 3D Export screen"),(0,a.yg)("li",{parentName:"ul"},"Fixed incorrect chunk position calculation for block changes that occur during the structure block preview window"),(0,a.yg)("li",{parentName:"ul"},"Structure loading/saving no longer affects ticking blocks in nearby chunks"),(0,a.yg)("li",{parentName:"ul"},"Fixed the Reset button not re-rendering the wireframe bounding box")),(0,a.yg)("h2",{id:"technicalcommands"},(0,a.yg)("strong",{parentName:"h2"},"Technical/Commands")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed the logic that decides whether or not an entity can be summoned. Now you can summon an entity using the execute command, which this bug disallowed"),(0,a.yg)("li",{parentName:"ul"},"Fixed particles when using animation controllers to play particles and switching to a different state that also plays particles")))}g.isMDXComponent=!0}}]);