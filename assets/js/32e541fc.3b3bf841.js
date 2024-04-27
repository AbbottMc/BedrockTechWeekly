"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[19995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(r),m=i,u=y["".concat(l,".").concat(m)]||y[m]||d[m]||a;return r?n.createElement(u,p(p({ref:t},c),{},{components:r})):n.createElement(u,p({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:i,p[1]=o;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",sidebar_label:"EntityApplyDamageByProjectileOptions",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"sapi/preview/server/interfaces/EntityApplyDamageByProjectileOptions",id:"sapi/preview/server/interfaces/EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",description:"Additional options for when damage has been applied via a",source:"@site/docs/sapi/preview/server/interfaces/EntityApplyDamageByProjectileOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/EntityApplyDamageByProjectileOptions",permalink:"/docs/sapi/preview/server/interfaces/EntityApplyDamageByProjectileOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",sidebar_label:"EntityApplyDamageByProjectileOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Enchantment",permalink:"/docs/sapi/preview/server/interfaces/Enchantment"},next:{title:"EntityApplyDamageOptions",permalink:"/docs/sapi/preview/server/interfaces/EntityApplyDamageOptions"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"damagingEntity",id:"damagingentity",level:3},{value:"damagingProjectile",id:"damagingprojectile",level:3}],c={toc:s};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Additional options for when damage has been applied via a\nprojectile."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"damagingentity"},"damagingEntity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"damagingEntity"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Optional entity that fired the projectile."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"damagingprojectile"},"damagingProjectile"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"damagingProjectile"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,i.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Projectile that caused damage."))}y.isMDXComponent=!0}}]);