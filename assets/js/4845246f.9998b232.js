"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[91104],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85389:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},s=void 0,i={unversionedId:"changelog_source/stable/1.16/201/gameplay",id:"changelog_source/stable/1.16/201/gameplay",title:"gameplay",description:"Posted: December 15, 2020",source:"@site/docs/changelog_source/stable/1.16/201/gameplay.mdx",sourceDirName:"changelog_source/stable/1.16/201",slug:"/changelog_source/stable/1.16/201/gameplay",permalink:"/docs/changelog_source/stable/1.16/201/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.16/201/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"<strong>For players on Windows 10</strong>, some issues can be fixed by updating your graphics drivers. Please see the article on Updating your Drivers on Minecraft for Windows 10 to ensure you\u2019re running the latest updates provided by your graphics hardware manufacturer.",id:"for-players-on-windows-10-some-issues-can-be-fixed-by-updating-your-graphics-drivers-please-see-the-article-on-updating-your-drivers-on-minecraft-for-windows-10-to-ensure-youre-running-the-latest-updates-provided-by-your-graphics-hardware-manufacturer",level:2},{value:"<strong>February 9, 2021 Realms Fix:</strong>",id:"february-9-2021-realms-fix",level:2},{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:l};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Posted:")," December 15, 2020"),(0,a.kt)("p",null,"The team has been hard at work fixing some top reported issues in Minecraft. Please report any bugs you find on ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and post feedback to ",(0,a.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),". Happy mining and happy crafting!"),(0,a.kt)("h2",{id:"for-players-on-windows-10-some-issues-can-be-fixed-by-updating-your-graphics-drivers-please-see-the-article-on-updating-your-drivers-on-minecraft-for-windows-10-to-ensure-youre-running-the-latest-updates-provided-by-your-graphics-hardware-manufacturer"},(0,a.kt)("strong",{parentName:"h2"},"For players on Windows 10"),", some issues can be fixed by updating your graphics drivers. Please see the article on ",(0,a.kt)("a",{parentName:"h2",href:"https://help.minecraft.net/hc/en-us/articles/360053233651-Update-your-Drivers-on-Minecraft-for-Windows-10"},"Updating your Drivers on Minecraft for Windows 10")," to ensure you\u2019re running the latest updates provided by your graphics hardware manufacturer."),(0,a.kt)("h2",{id:"february-9-2021-realms-fix"},(0,a.kt)("strong",{parentName:"h2"},"February 9, 2021 Realms Fix:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an crash with Realms/Dedicated servers that caused world progress to roll back. This fix does not require a game update, but requires a server update if you host a ",(0,a.kt)("a",{parentName:"li",href:"https://www.minecraft.net/en-us/download/server/bedrock/"},"Bedrock Dedicated Server")," (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-6812"},"REALMS-6812"),")  ")),(0,a.kt)("h2",{id:"fixes"},(0,a.kt)("strong",{parentName:"h2"},"Fixes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed the game failing to launch on multiple Windows 10 devices (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-102530"},"MCPE-102530"),")"),(0,a.kt)("li",{parentName:"ul"},"Double Chests placed at chunk borders no longer become partially invisible and don't crash the game when they are opened (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106030"},"MCPE-106030"),")"),(0,a.kt)("li",{parentName:"ul"},"Shulker boxes no longer lose everything inside their inventory when undyed using a cauldron (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108196"},"MCPE-108196"),")"),(0,a.kt)("li",{parentName:"ul"},"Fixed main menu buttons being invisible on older AMD graphics cards"),(0,a.kt)("li",{parentName:"ul"},"Fixed a crash that could occur after suspending and resuming while creating new world on Android")))}p.isMDXComponent=!0}}]);