"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[73259],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>u});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=s(r),y=o,u=g["".concat(p,".").concat(y)]||g[y]||c[y]||a;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(58168),o=(r(96540),r(15680));const a={id:"ModalToolCreationParameters",title:"Interface: ModalToolCreationParameters",sidebar_label:"ModalToolCreationParameters",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/preview/server-editor/interfaces/ModalToolCreationParameters",id:"sapi/preview/server-editor/interfaces/ModalToolCreationParameters",title:"Interface: ModalToolCreationParameters",description:"Parameters for creating a modal tool in the tool container",source:"@site/docs/sapi/preview/server-editor/interfaces/ModalToolCreationParameters.md",sourceDirName:"sapi/preview/server-editor/interfaces",slug:"/sapi/preview/server-editor/interfaces/ModalToolCreationParameters",permalink:"/docs/sapi/preview/server-editor/interfaces/ModalToolCreationParameters",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModalToolCreationParameters",title:"Interface: ModalToolCreationParameters",sidebar_label:"ModalToolCreationParameters",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"LogProperties",permalink:"/docs/sapi/preview/server-editor/interfaces/LogProperties"},next:{title:"PlaytestGameOptions",permalink:"/docs/sapi/preview/server-editor/interfaces/PlaytestGameOptions"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"displayAltText",id:"displayalttext",level:3},{value:"displayStringId",id:"displaystringid",level:3},{value:"icon",id:"icon",level:3},{value:"tooltipAltText",id:"tooltipalttext",level:3},{value:"tooltipStringId",id:"tooltipstringid",level:3}],d={toc:s},g="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(g,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Parameters for creating a modal tool in the tool container"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"displayalttext"},"displayAltText"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"displayAltText"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The displayed string for the tool"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"displaystringid"},"displayStringId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"displayStringId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Loc ID (resolved on client)"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"icon"},"icon"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"icon"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Icon, if any (from resource pack on client)"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"tooltipalttext"},"tooltipAltText"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"tooltipAltText"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"tooltipAltText alt text, if any"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"tooltipstringid"},"tooltipStringId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("strong",{parentName:"p"},"tooltipStringId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Tooltip localization string ID"))}c.isMDXComponent=!0}}]);