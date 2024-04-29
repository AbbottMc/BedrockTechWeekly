"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(n),m=a,u=y["".concat(l,".").concat(m)]||y[m]||d[m]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",sidebar_label:"EntityApplyDamageByProjectileOptions",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/stable/server/interfaces/EntityApplyDamageByProjectileOptions",id:"sapi/stable/server/interfaces/EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",description:"Additional options for when damage has been applied via a",source:"@site/docs/sapi/stable/server/interfaces/EntityApplyDamageByProjectileOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/EntityApplyDamageByProjectileOptions",permalink:"/en/docs/sapi/stable/server/interfaces/EntityApplyDamageByProjectileOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityApplyDamageByProjectileOptions",title:"Interface: EntityApplyDamageByProjectileOptions",sidebar_label:"EntityApplyDamageByProjectileOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Enchantment",permalink:"/en/docs/sapi/stable/server/interfaces/Enchantment"},next:{title:"EntityApplyDamageOptions",permalink:"/en/docs/sapi/stable/server/interfaces/EntityApplyDamageOptions"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"damagingEntity",id:"damagingentity",level:3},{value:"damagingProjectile",id:"damagingprojectile",level:3}],c={toc:s};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Additional options for when damage has been applied via a\nprojectile."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"damagingentity"},"damagingEntity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"damagingEntity"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Optional entity that fired the projectile."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"damagingprojectile"},"damagingProjectile"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"damagingProjectile"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Projectile that caused damage."))}y.isMDXComponent=!0}}]);