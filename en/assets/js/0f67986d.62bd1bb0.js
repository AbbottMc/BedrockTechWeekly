"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"BlockHitInformation",title:"Class: BlockHitInformation",sidebar_label:"BlockHitInformation",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/BlockHitInformation",id:"sapi/stable/server/classes/BlockHitInformation",title:"Class: BlockHitInformation",description:"Contains more information for events where a block is hit.",source:"@site/docs/sapi/stable/server/classes/BlockHitInformation.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockHitInformation",permalink:"/en/docs/sapi/stable/server/classes/BlockHitInformation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockHitInformation",title:"Class: BlockHitInformation",sidebar_label:"BlockHitInformation",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockExplodeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/BlockExplodeEventSignal"},next:{title:"BlockInventoryComponent",permalink:"/en/docs/sapi/stable/server/classes/BlockInventoryComponent"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"face",id:"face",level:3},{value:"faceLocationX",id:"facelocationx",level:3},{value:"faceLocationY",id:"facelocationy",level:3}],p={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains more information for events where a block is hit."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"block"},"block"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"block"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,o.kt)("inlineCode",{parentName:"a"},"Block"))),(0,o.kt)("p",null,"Block that was hit."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"face"},"face"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"face"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/enums/Direction"},(0,o.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,o.kt)("p",null,"Face of the block that was hit."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"facelocationx"},"faceLocationX"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"faceLocationX"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"X coordinate on the face that was hit."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"facelocationy"},"faceLocationY"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"faceLocationY"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Y coordinate on the face that was hit."))}f.isMDXComponent=!0}}]);