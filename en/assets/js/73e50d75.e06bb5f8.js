"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(n),k=a,f=s["".concat(c,".").concat(k)]||s[k]||u[k]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},84985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.20/70/21/tech_sapi_exp",id:"changelog_source/preview/1.20/70/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Entity Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/70/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/70/21",slug:"/changelog_source/preview/1.20/70/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},m=[],p={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Entity Components",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added\xa0",(0,a.kt)("em",{parentName:"li"},"EntityTypeFamilyComponent_with functions\xa0_getTypeFamilies(): string","[","]"),"\xa0and\xa0",(0,a.kt)("em",{parentName:"li"},"hasTypeFamily(typeFamily: string): boolean")))),(0,a.kt)("li",{parentName:"ul"},"Item",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Moved\xa0",(0,a.kt)("em",{parentName:"li"},"ItemFoodComponent_from\xa0_beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.9.0")),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"matches(itemName: string, states?: Record\\<string, boolean | number | string",">","): boolean")))),(0,a.kt)("li",{parentName:"ul"},"Removed class\xa0",(0,a.kt)("em",{parentName:"li"},"BlockVolumeUtils"),". Moving utility functions onto\xa0",(0,a.kt)("em",{parentName:"li"},"BlockVolumeBase_and\xa0_BlockVolume")),(0,a.kt)("li",{parentName:"ul"},"Added class\xa0",(0,a.kt)("em",{parentName:"li"},"BlockVolumeBase"),". Is the base class from which block volumes will extend"),(0,a.kt)("li",{parentName:"ul"},"BlockVolume",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Breaking Change")," Converted\xa0",(0,a.kt)("em",{parentName:"li"},"BlockVolume"),"\xa0from an interface to a class which extends\xa0",(0,a.kt)("em",{parentName:"li"},"BlockVolumeBase")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"@minecraft/server.Entity.playAnimation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Moved Entity.playAnimation from ",(0,a.kt)("em",{parentName:"li"},"beta")," to ",(0,a.kt)("em",{parentName:"li"},"stable")))),(0,a.kt)("li",{parentName:"ul"},"Moved enum\xa0",(0,a.kt)("em",{parentName:"li"},"BlockPistonState_from\xa0_beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.9.0")),(0,a.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,a.kt)("em",{parentName:"li"},"BlockPistonComponent_from\xa0_beta to 1.9.0")),(0,a.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,a.kt)("em",{parentName:"li"},"PistonActivateAfterEvent_from\xa0_beta")," to ",(0,a.kt)("em",{parentName:"li"},"1.9.0")),(0,a.kt)("li",{parentName:"ul"},"Moved class\xa0",(0,a.kt)("em",{parentName:"li"},"PistonActivateAfterEventSignal_from\xa0_beta to 1.9.0"))))}s.isMDXComponent=!0}}]);