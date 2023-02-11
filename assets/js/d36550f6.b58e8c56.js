"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79162],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||y[u]||a;return n?i.createElement(h,l(l({ref:e},c),{},{components:n})):i.createElement(h,l({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70648:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"EntityHitEvent",title:"Class: EntityHitEvent",sidebar_label:"EntityHitEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/EntityHitEvent",id:"sapi/stable/server/classes/EntityHitEvent",title:"Class: EntityHitEvent",description:"Contains information related to an entity hitting (melee",source:"@site/docs/sapi/stable/server/classes/EntityHitEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityHitEvent",permalink:"/docs/sapi/stable/server/classes/EntityHitEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityHitEvent",title:"Class: EntityHitEvent",sidebar_label:"EntityHitEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityHealthComponent",permalink:"/docs/sapi/stable/server/classes/EntityHealthComponent"},next:{title:"EntityHitEventSignal",permalink:"/docs/sapi/stable/server/classes/EntityHitEventSignal"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"hitBlock",id:"hitblock",level:3},{value:"hitEntity",id:"hitentity",level:3}],c={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains information related to an entity hitting (melee\nattacking) another entity."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"entity"},"entity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Entity that made a hit/melee attack."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hitblock"},"hitBlock"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hitBlock"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("p",null,"Block that was hit by the attack, or undefined if the hit\nattack did not hit a block. If both hitEntity and hitBlock\nare undefined, then the entity basically swiped into the\nair."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hitentity"},"hitEntity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hitEntity"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Entity that was hit by the attack, or undefined if the hit\nattack did not hit an entity. If both hitEntity and hitBlock\nare undefined, then the entity basically swiped into the\nair."))}d.isMDXComponent=!0}}]);