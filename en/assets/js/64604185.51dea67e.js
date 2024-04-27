"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[75065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(r),d=o,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"ProjectileHitBlockAfterEvent",title:"Class: ProjectileHitBlockAfterEvent",sidebar_label:"ProjectileHitBlockAfterEvent",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/stable/server/classes/ProjectileHitBlockAfterEvent",id:"sapi/stable/server/classes/ProjectileHitBlockAfterEvent",title:"Class: ProjectileHitBlockAfterEvent",description:"Contains information related to a projectile hitting a",source:"@site/docs/sapi/stable/server/classes/ProjectileHitBlockAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ProjectileHitBlockAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/ProjectileHitBlockAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ProjectileHitBlockAfterEvent",title:"Class: ProjectileHitBlockAfterEvent",sidebar_label:"ProjectileHitBlockAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PressurePlatePushAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/PressurePlatePushAfterEventSignal"},next:{title:"ProjectileHitBlockAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ProjectileHitBlockAfterEventSignal"}},s={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"dimension",id:"dimension",level:3},{value:"hitVector",id:"hitvector",level:3},{value:"location",id:"location",level:3},{value:"projectile",id:"projectile",level:3},{value:"source",id:"source",level:3},{value:"Methods",id:"methods",level:2},{value:"getBlockHit",id:"getblockhit",level:3},{value:"Returns",id:"returns",level:4}],p={toc:c};function k(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains information related to a projectile hitting a\nblock."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"new ProjectileHitBlockAfterEvent"),"()"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"dimension"},"dimension"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"dimension"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension"},(0,o.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Dimension where this projectile hit took place."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"hitvector"},"hitVector"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"hitVector"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/Vector3"},(0,o.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Direction vector of the projectile as it hit a block."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"location"},"location"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"location"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/Vector3"},(0,o.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Location where the projectile hit occurred."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"projectile"},"projectile"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"projectile"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Entity for the projectile that hit a block."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"source"},"source"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"source"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Optional source entity that fired the projectile."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"getblockhit"},"getBlockHit"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("strong",{parentName:"p"},"getBlockHit"),"(): ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/BlockHitInformation"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockHitInformation"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Contains additional information about the block that was hit\nby the projectile."),(0,o.kt)("p",null,"This function can't be called in read-only mode."),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/BlockHitInformation"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockHitInformation"))))}k.isMDXComponent=!0}}]);