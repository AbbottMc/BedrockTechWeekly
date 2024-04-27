"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"ExplosionOptions",title:"Interface: ExplosionOptions",sidebar_label:"ExplosionOptions",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/interfaces/ExplosionOptions",id:"sapi/preview/server/interfaces/ExplosionOptions",title:"Interface: ExplosionOptions",description:"Additional configuration options for the createExplosion method.",source:"@site/docs/sapi/preview/server/interfaces/ExplosionOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/ExplosionOptions",permalink:"/en/docs/sapi/preview/server/interfaces/ExplosionOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ExplosionOptions",title:"Interface: ExplosionOptions",sidebar_label:"ExplosionOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EqualsComparison",permalink:"/en/docs/sapi/preview/server/interfaces/EqualsComparison"},next:{title:"GreaterThanComparison",permalink:"/en/docs/sapi/preview/server/interfaces/GreaterThanComparison"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"allowUnderwater",id:"allowunderwater",level:3},{value:"breaksBlocks",id:"breaksblocks",level:3},{value:"causesFire",id:"causesfire",level:3},{value:"source",id:"source",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Additional configuration options for the ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension#createexplosion"},"createExplosion")," method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"createExplosions.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Creates an explosion of radius 15 that does not break blocks\nimport { DimensionLocation } from '@minecraft/server';\n\nfunction createExplosions(location: DimensionLocation) {\n    // Creates an explosion of radius 15 that does not break blocks\n    location.dimension.createExplosion(location, 15, { breaksBlocks: false });\n\n    // Creates an explosion of radius 15 that does not cause fire\n    location.dimension.createExplosion(location, 15, { causesFire: true });\n\n    // Creates an explosion of radius 10 that can go underwater\n    location.dimension.createExplosion(location, 10, { allowUnderwater: true });\n}\n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"allowunderwater"},"allowUnderwater"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"allowUnderwater"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Whether parts of the explosion also impact underwater."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"breaksblocks"},"breaksBlocks"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"breaksBlocks"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Whether the explosion will break blocks within the blast\nradius."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"causesfire"},"causesFire"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"causesFire"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"If true, the explosion is accompanied by fires within or\nnear the blast radius."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"source"},"source"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"source"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Optional source of the explosion."))}u.isMDXComponent=!0}}]);