"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[21319],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),k=c(n),d=a,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||i;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[k]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75874:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"EntityHitBlockAfterEvent",title:"Class: EntityHitBlockAfterEvent",sidebar_label:"EntityHitBlockAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server/classes/EntityHitBlockAfterEvent",id:"sapi/stable/server/classes/EntityHitBlockAfterEvent",title:"Class: EntityHitBlockAfterEvent",description:"Contains information related to an entity hitting a block.",source:"@site/docs/sapi/stable/server/classes/EntityHitBlockAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityHitBlockAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/EntityHitBlockAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityHitBlockAfterEvent",title:"Class: EntityHitBlockAfterEvent",sidebar_label:"EntityHitBlockAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHealthComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityHealthComponent"},next:{title:"EntityHitBlockAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/EntityHitBlockAfterEventSignal"}},s={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"blockFace",id:"blockface",level:3},{value:"damagingEntity",id:"damagingentity",level:3},{value:"hitBlock",id:"hitblock",level:3},{value:"hitBlockPermutation",id:"hitblockpermutation",level:3}],p={toc:c};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to an entity hitting a block."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new EntityHitBlockAfterEvent"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"blockface"},"blockFace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockFace"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/enums/Direction"},(0,a.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Face of the block that was hit."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"damagingentity"},"damagingEntity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"damagingEntity"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Entity that made the attack."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hitblock"},"hitBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"hitBlock"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Block that was hit by the attack."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"hitblockpermutation"},"hitBlockPermutation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"hitBlockPermutation"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Block permutation that was hit by the attack."))}k.isMDXComponent=!0}}]);