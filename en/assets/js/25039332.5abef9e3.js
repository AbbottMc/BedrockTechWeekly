"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,v=d["".concat(s,".").concat(u)]||d[u]||y[u]||a;return n?i.createElement(v,o(o({ref:t},c),{},{components:n})):i.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={id:"EntityHitEvent",title:"Class: EntityHitEvent",sidebar_label:"EntityHitEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/classes/EntityHitEvent",id:"sapi/preview/server/classes/EntityHitEvent",title:"Class: EntityHitEvent",description:"Contains information related to an entity hitting (melee",source:"@site/docs/sapi/preview/server/classes/EntityHitEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityHitEvent",permalink:"/en/docs/sapi/preview/server/classes/EntityHitEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityHitEvent",title:"Class: EntityHitEvent",sidebar_label:"EntityHitEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityHealthComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityHealthComponent"},next:{title:"EntityHitEventSignal",permalink:"/en/docs/sapi/preview/server/classes/EntityHitEventSignal"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"hitBlock",id:"hitblock",level:3},{value:"hitEntity",id:"hitentity",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Contains information related to an entity hitting (melee\nattacking) another entity."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"entity"},"entity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Entity that made a hit/melee attack."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hitblock"},"hitBlock"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hitBlock"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,r.kt)("inlineCode",{parentName:"a"},"Block"))),(0,r.kt)("p",null,"Block that was hit by the attack, or undefined if the hit\nattack did not hit a block. If both hitEntity and hitBlock\nare undefined, then the entity basically swiped into the\nair."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hitentity"},"hitEntity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"hitEntity"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,"Entity that was hit by the attack, or undefined if the hit\nattack did not hit an entity. If both hitEntity and hitBlock\nare undefined, then the entity basically swiped into the\nair."))}d.isMDXComponent=!0}}]);