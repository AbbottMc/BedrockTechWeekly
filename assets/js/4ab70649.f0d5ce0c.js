"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[36393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/80/22/tech_sapi_stable",id:"changelog_source/preview/1.20/80/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Moved EntityType and EntityTypes from beta to 1.11.0",source:"@site/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/22",slug:"/changelog_source/preview/1.20/80/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Moved ",(0,a.kt)("em",{parentName:"li"},"EntityType")," and ",(0,a.kt)("em",{parentName:"li"},"EntityTypes")," from ",(0,a.kt)("em",{parentName:"li"},"beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.11.0")),(0,a.kt)("li",{parentName:"ul"},"Released ",(0,a.kt)("em",{parentName:"li"},"playMusic",(0,a.kt)("strong",{parentName:"em"},","),"Player.queueMusic"),", ",(0,a.kt)("em",{parentName:"li"},"Player.stopMusic")," from ",(0,a.kt)("em",{parentName:"li"},"beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.11.0")),(0,a.kt)("li",{parentName:"ul"},"Removed ",(0,a.kt)("em",{parentName:"li"},"BlockAreaSize")," from ",(0,a.kt)("em",{parentName:"li"},"beta")," and replaced usages with ",(0,a.kt)("em",{parentName:"li"},"Vector3")),(0,a.kt)("li",{parentName:"ul"},"Renamed parameter ",(0,a.kt)("em",{parentName:"li"},"itemCategory")," in ",(0,a.kt)("em",{parentName:"li"},"getItemCooldown")," and ",(0,a.kt)("em",{parentName:"li"},"player.startItemCooldown")," to ",(0,a.kt)("em",{parentName:"li"},"cooldownCategory")),(0,a.kt)("li",{parentName:"ul"},"Changed ",(0,a.kt)("em",{parentName:"li"},"type")," to only ",(0,a.kt)("em",{parentName:"li"},"EnchantmentType")," to follow API guidelines"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"EnchantmentSlot")," and ",(0,a.kt)("em",{parentName:"li"},"slots")," to ",(0,a.kt)("em",{parentName:"li"},"beta")," for determining the enchantable slots of an item"),(0,a.kt)("li",{parentName:"ul"},"Added 'minecraft:custom","_","components' block component under the Beta APIs feature flag")))}s.isMDXComponent=!0}}]);