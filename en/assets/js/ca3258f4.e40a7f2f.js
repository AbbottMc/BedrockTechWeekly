"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[10457],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),s=a,y=m["".concat(p,".").concat(s)]||m[s]||g[s]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},45577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(58168),a=(r(96540),r(15680));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/60/21/tech_sapi_exp",id:"changelog_source/preview/1.20/60/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/21",slug:"/changelog_source/preview/1.20/60/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},p={},c=[],u={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a bug where the world would sometimes fail to properly shut down and disconnect clients during an unrecoverable script watchdog error"),(0,a.yg)("li",{parentName:"ul"},"Updated ",(0,a.yg)("em",{parentName:"li"},"SimulatedPlayer")," so it can continuously build"),(0,a.yg)("li",{parentName:"ul"},"Updated ",(0,a.yg)("em",{parentName:"li"},"SimulatedPlayer")," so it can Move and look in different directions"),(0,a.yg)("li",{parentName:"ul"},"ChatSendAfter & ChatSendBeforeEvent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Changed\xa0",(0,a.yg)("em",{parentName:"li"},"message"),"\xa0and\xa0",(0,a.yg)("em",{parentName:"li"},"sender"),"\xa0to readonly properties"),(0,a.yg)("li",{parentName:"ul"},"Removed\xa0",(0,a.yg)("em",{parentName:"li"},"setTargets"),",\xa0",(0,a.yg)("em",{parentName:"li"},"getTargets"),",\xa0",(0,a.yg)("em",{parentName:"li"},"sendToTargets"),"\xa0and replaced with an optional player list property\xa0",(0,a.yg)("em",{parentName:"li"},"targets")))),(0,a.yg)("li",{parentName:"ul"},"Class ItemDurabilityComponent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Renamed ",(0,a.yg)("em",{parentName:"li"},"unbreaking")," to ",(0,a.yg)("em",{parentName:"li"},"unbreakingEnchantmentLevel")),(0,a.yg)("li",{parentName:"ul"},"Renmaed ",(0,a.yg)("em",{parentName:"li"},"getDamageRange")," to ",(0,a.yg)("em",{parentName:"li"},"getDamageChanceRange")))),(0,a.yg)("li",{parentName:"ul"},"EntityTypes",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Changed\xa0",(0,a.yg)("em",{parentName:"li"},"getAll"),"\xa0return type from\xa0",(0,a.yg)("em",{parentName:"li"},"EntityTypeIterator"),"\xa0to\xa0",(0,a.yg)("em",{parentName:"li"},"EntityType","[","]")))),(0,a.yg)("li",{parentName:"ul"},"EntityEquippableComponent",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Fixed an issue where functions ",(0,a.yg)("em",{parentName:"li"},"getEquipment")," and ",(0,a.yg)("em",{parentName:"li"},"getEquipmentSlot"),' could not be called within "before" event handlers'))),(0,a.yg)("li",{parentName:"ul"},"Fixed a bug where an ItemStack could not be stacked after clearing its lore")))}g.isMDXComponent=!0}}]);