"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[91121],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?t.createElement(y,i(i({ref:n},c),{},{components:r})):t.createElement(y,i({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91654:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(58168),o=(r(96540),r(15680));const a={id:"ExplosionOptions",title:"Interface: ExplosionOptions",sidebar_label:"ExplosionOptions",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/interfaces/ExplosionOptions",id:"sapi/stable/server/interfaces/ExplosionOptions",title:"Interface: ExplosionOptions",description:"Additional configuration options for the createExplosion method.",source:"@site/docs/sapi/stable/server/interfaces/ExplosionOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/ExplosionOptions",permalink:"/en/docs/sapi/stable/server/interfaces/ExplosionOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ExplosionOptions",title:"Interface: ExplosionOptions",sidebar_label:"ExplosionOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EqualsComparison",permalink:"/en/docs/sapi/stable/server/interfaces/EqualsComparison"},next:{title:"GreaterThanComparison",permalink:"/en/docs/sapi/stable/server/interfaces/GreaterThanComparison"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"allowUnderwater",id:"allowunderwater",level:3},{value:"breaksBlocks",id:"breaksblocks",level:3},{value:"causesFire",id:"causesfire",level:3},{value:"source",id:"source",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Additional configuration options for the ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension#createexplosion"},"createExplosion")," method."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,o.yg)("p",null,"createExplosions.ts"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"// Creates an explosion of radius 15 that does not break blocks\nimport { DimensionLocation } from '@minecraft/server';\n\nfunction createExplosions(location: DimensionLocation) {\n    // Creates an explosion of radius 15 that does not break blocks\n    location.dimension.createExplosion(location, 15, { breaksBlocks: false });\n\n    // Creates an explosion of radius 15 that does not cause fire\n    location.dimension.createExplosion(location, 15, { causesFire: true });\n\n    // Creates an explosion of radius 10 that can go underwater\n    location.dimension.createExplosion(location, 10, { allowUnderwater: true });\n}\n")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"allowunderwater"},"allowUnderwater"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"allowUnderwater"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Whether parts of the explosion also impact underwater."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"breaksblocks"},"breaksBlocks"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"breaksBlocks"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Whether the explosion will break blocks within the blast\nradius."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"causesfire"},"causesFire"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"causesFire"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"If true, the explosion is accompanied by fires within or\nnear the blast radius."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"source"},"source"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"source"),": ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,o.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Optional source of the explosion."))}d.isMDXComponent=!0}}]);