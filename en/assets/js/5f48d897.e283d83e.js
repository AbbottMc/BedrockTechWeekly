"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[65702],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(y,c(c({ref:t},g),{},{components:n})):r.createElement(y,c({ref:t},g))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(58168),a=(n(96540),n(15680));const o={},c=void 0,l={unversionedId:"changelog_source/stable/1.17/11/gameplay",id:"changelog_source/stable/1.17/11/gameplay",title:"gameplay",description:"Posted: August 9, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.17/11/gameplay.mdx",sourceDirName:"changelog_source/stable/1.17/11",slug:"/changelog_source/stable/1.17/11/gameplay",permalink:"/en/docs/changelog_source/stable/1.17/11/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.17/11/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[{value:"<strong>Fixes:</strong>\xa0",id:"fixes",level:2}],g={toc:i},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Posted:")," August 9, 2021"),(0,a.yg)("p",null,"Please\xa0search for\xa0any bugs you find on\xa0",(0,a.yg)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com"),"\xa0and\xa0let us know what you think at\xa0",(0,a.yg)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4406740275597/Screen_Shot_08-09-21_at_11.08_AM.JPG",alt:"Screen_Shot_08-09-21_at_11.08_AM.JPG"})),(0,a.yg)("h2",{id:"fixes"},(0,a.yg)("strong",{parentName:"h2"},"Fixes:"),"\xa0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Players no longer\xa0die and instantly respawn after traveling back to Overworld from the End in certain circumstances\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-135226"},"MCPE-135226"),")"),(0,a.yg)("li",{parentName:"ul"},"Players no longer\xa0die and\xa0get stuck on the respawn screen\xa0when entering an End Portal after dying in the End\xa0in certain seeds\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-132484"},"MCPE-132484"),")"),(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that could occur on Xbox when suspending and resuming the title for the second time"),(0,a.yg)("li",{parentName:"ul"},"Items can no longer be duplicated using Beacons"),(0,a.yg)("li",{parentName:"ul"},"Horses\xa0no longer become invisible\xa0after being dismounted\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-108568"},"MCPE-108568"),")"),(0,a.yg)("li",{parentName:"ul"},"On Realms, the\xa0'/msg'\xa0command\xa0once again works\xa0when the\xa0world is in Survival mode\xa0and\xa0cheats\xa0are\xa0disabled\xa0(",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-7760"},"REALMS-7760"),")"),(0,a.yg)("li",{parentName:"ul"},"After renewing an expired Realm, the Realm is now properly renewed instead of a new Realm being created (",(0,a.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/REALMS-7263"},"REALMS-7263"),")")))}u.isMDXComponent=!0}}]);