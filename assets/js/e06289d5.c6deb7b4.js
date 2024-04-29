"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[45218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(a),u=n,d=k["".concat(m,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[k]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.20/20/22/tech_sapi_exp",id:"changelog_source/preview/1.20/20/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added camera scripting APIs for the following APIs:",source:"@site/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/20/22",slug:"/changelog_source/preview/1.20/20/22/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},m={},p=[],c={toc:p};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added camera scripting APIs for the following APIs:\xa0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"setCamera()"),": to set the camera to a specified preset"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"fade()"),": to start a camera fade"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"clear()"),": to clear the current settings on the camera"))),(0,n.kt)("li",{parentName:"ul"},"Released Scoreboard API's from beta to V1.4.0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Updated ",(0,n.kt)("em",{parentName:"li"},"Scoreboard.getObjective"),", ",(0,n.kt)("em",{parentName:"li"},"getObjectiveAtDisplaySlot"),", and ",(0,n.kt)("em",{parentName:"li"},"clearObjectiveAtDisplaySlot")," to return '| undefined'"))),(0,n.kt)("li",{parentName:"ul"},"Removed ",(0,n.kt)("em",{parentName:"li"},"MinecraftBlockTypes")," defined in\xa0",(0,n.kt)("em",{parentName:"li"},"@minecraft/server")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemUseBeforeEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemUseOnBeforeEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemUseAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemUseOnAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemStartUseOnAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemStopUseAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemStopUseOnAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemCompleteUseAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemReleaseUseAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"ItemStartUseAfterEvent"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"DimensionLocation"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,n.kt)("em",{parentName:"li"},"PositionInUnloadedChunkError"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"LocationInUnloadedChunkError"),"\xa0and moved it to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,n.kt)("em",{parentName:"li"},"PositionOutOfWorldBoundariesError"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"LocationOutOfWorldBoundariesError"),"\xa0and moved it to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"getSpawnPoint"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"setSpawnPoint"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"getDefaultSpawnLocation"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")),(0,n.kt)("li",{parentName:"ul"},"Moved\xa0",(0,n.kt)("em",{parentName:"li"},"setDefaultSpawnLocation"),"\xa0to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0")))),(0,n.kt)("li",{parentName:"ul"},"Released\xa0",(0,n.kt)("em",{parentName:"li"},"isValid()"),"\xa0from Beta to\xa0",(0,n.kt)("em",{parentName:"li"},"1.4.0"),"\xa0for the following classes:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Block")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Container")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Entity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Player")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"SimulatedPlayer")))),(0,n.kt)("li",{parentName:"ul"},"WorldAfterEvents",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Removed\xa0",(0,n.kt)("em",{parentName:"li"},"projectileHit")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"projectileHitBlock")),(0,n.kt)("li",{parentName:"ul"},"Added\xa0",(0,n.kt)("em",{parentName:"li"},"projectileHitEntity")))),(0,n.kt)("li",{parentName:"ul"},"Added class\xa0",(0,n.kt)("em",{parentName:"li"},"ProjectileHitBlockAfterEvent"),"\xa0export class:",(0,n.kt)("br",{parentName:"li"}),"ProjectileHitBlockAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation; }"),(0,n.kt)("li",{parentName:"ul"},"Added class\xa0",(0,n.kt)("em",{parentName:"li"},"ProjectileHitEntityAfterEvent"),"\xa0export class:",(0,n.kt)("br",{parentName:"li"}),"ProjectileHitEntityAfterEvent { readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation; }"),(0,n.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,n.kt)("em",{parentName:"li"},"ContainerSlot")," would not work with certain container types (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-172782"},"MCPE-172782)"))))}k.isMDXComponent=!0}}]);