"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.16/200/55/gameplay",id:"changelog_source/preview/1.16/200/55/gameplay",title:"gameplay",description:"Posted: 11 November 2020",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.16/200/55/gameplay.mdx",sourceDirName:"changelog_source/preview/1.16/200/55",slug:"/changelog_source/preview/1.16/200/55/gameplay",permalink:"/en/docs/changelog_source/preview/1.16/200/55/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.16/200/55/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"General",id:"general",level:3},{value:"Technical Changes",id:"technical-changes",level:3},{value:"MoLang",id:"molang",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Posted:")," 11 November 2020"),(0,a.kt)("p",null,"PLEASE READ before participating in the Minecraft Beta:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Joining the beta will replace your game with a work in progress version of Minecraft"),(0,a.kt)("li",{parentName:"ul"},"You will not have access to Realms and will not be able to join non-beta players while you're previewing the beta"),(0,a.kt)("li",{parentName:"ul"},"Any worlds played while in the beta cannot be opened in previous versions of the game so please make copies of worlds to prevent losing them"),(0,a.kt)("li",{parentName:"ul"},"Beta builds can be unstable and are not representative of final version quality"),(0,a.kt)("li",{parentName:"ul"},"The beta is available only on Xbox One, Windows 10, and Android (Google Play). To join or leave the beta, see ",(0,a.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"ms/JoinMCBeta")," for detailed instructions")),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed a bug that caused mobs such as Pillagers to hide away from sunlight"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where some mobile devices would lose audio after suspend and resume (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-101027"},"MCPE-101027"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug that caused Vertical Knockback to be too weak"),(0,a.kt)("li",{parentName:"ul"},"Fixed an issue in RTX when flying around would stutter and have poor frame rate (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-103532"},"MCPE-103532"),")"),(0,a.kt)("li",{parentName:"ul"},"Added UI start up screen to inform players if they are on outdated graphics drivers")),(0,a.kt)("h3",{id:"technical-changes"},"Technical Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix so that old command versions use the previous position instead of current one",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed issue where 'query.cardinal","_","block","_","face","_","placed","_","on' no longer worked with 'on","_","player","_","placing'"))),(0,a.kt)("li",{parentName:"ul"},"Changed texture atlas padding size from 0 to 1 when disabling mipmap"),(0,a.kt)("li",{parentName:"ul"},'Fixed issue of blocks listed in the "minecraft:block',"_","placer\" component wouldn't work correctly")),(0,a.kt)("h3",{id:"molang"},"MoLang"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Geometry, Material, and Texture variable names can once again contain dots")))}p.isMDXComponent=!0}}]);