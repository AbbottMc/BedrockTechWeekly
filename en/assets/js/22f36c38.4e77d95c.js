"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,b=m["".concat(l,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},38567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,c={unversionedId:"changelog_source/preview/1.19/60/26/tech_sapi_exp",id:"changelog_source/preview/1.19/60/26/tech_sapi_exp",title:"tech_sapi_exp",description:"-   RawMessage",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/26/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/60/26",slug:"/changelog_source/preview/1.19/60/26/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/26/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"RawMessage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Changed the signature of property\xa0withfrom\xa0",(0,a.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)","[","]","?")," \xa0to\xa0",(0,a.kt)("em",{parentName:"li"},"(string","[","]"," | RawMessage)?"),"  "))),(0,a.kt)("li",{parentName:"ul"},"EntityHealthComponent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where health could be modified on dead entities (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-130687"},"MCPE-130687"),")"))),(0,a.kt)("li",{parentName:"ul"},"Scoreboard",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, ScoreboardIdentity, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective, ScoreboardIdentity)")))),(0,a.kt)("li",{parentName:"ul"},"ScoreboardObjective",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardIdentity, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardIdentity)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"removeParticipant(ScoreboardIdentity)")))),(0,a.kt)("li",{parentName:"ul"},"ScoreboardIdentity",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"setScore(ScoreboardObjective, Number)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"getScore(ScoreboardObjective)")),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"removeFromObjective(ScoreboardObjective)"))))))}m.isMDXComponent=!0}}]);