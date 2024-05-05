"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[65042],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>v});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const i={id:"CompoundBlockVolumeItem",title:"Interface: CompoundBlockVolumeItem",sidebar_label:"CompoundBlockVolumeItem",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/preview/server/interfaces/CompoundBlockVolumeItem",id:"sapi/preview/server/interfaces/CompoundBlockVolumeItem",title:"Interface: CompoundBlockVolumeItem",description:"This interface defines an entry into the @minecraft-server/CompoundBlockVolume which represents a",source:"@site/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/CompoundBlockVolumeItem",permalink:"/en/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CompoundBlockVolumeItem",title:"Interface: CompoundBlockVolumeItem",sidebar_label:"CompoundBlockVolumeItem",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"CameraSetRotOptions",permalink:"/en/docs/sapi/preview/server/interfaces/CameraSetRotOptions"},next:{title:"DefinitionModifier",permalink:"/en/docs/sapi/preview/server/interfaces/DefinitionModifier"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"action",id:"action",level:3},{value:"locationRelativity",id:"locationrelativity",level:3},{value:"volume",id:"volume",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This interface defines an entry into the ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/modules"},"@minecraft-server/CompoundBlockVolume")," which represents a\nvolume of positive or negative space."),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"action"},"action"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"action"),": ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/enums/CompoundBlockVolumeAction"},(0,o.yg)("inlineCode",{parentName:"a"},"CompoundBlockVolumeAction"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The 'action' defines how the block volume is represented in\nthe compound block volume stack.\n'Add' creates a block volume which is positively selected\n'Subtract' creates a block volume which represents a hole or\nnegative space in the overall compound block volume."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"locationrelativity"},"locationRelativity"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"locationRelativity"),": ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/enums/CompoundBlockVolumePositionRelativity"},(0,o.yg)("inlineCode",{parentName:"a"},"CompoundBlockVolumePositionRelativity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The relativity enumeration determines whether the\nBlockVolume specified is positioned relative to the parent\ncompound block volume origin, or in absolute world space."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"volume"},"volume"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"volume"),": ",(0,o.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockVolume"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockVolume"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The volume of space"))}m.isMDXComponent=!0}}]);