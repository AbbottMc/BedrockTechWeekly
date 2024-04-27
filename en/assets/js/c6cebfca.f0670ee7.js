"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[23387],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(k,o(o({ref:r},u),{},{components:t})):n.createElement(k,o({ref:r},u))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80097:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const i={id:"IMenuCreationParams",title:"Interface: IMenuCreationParams",sidebar_label:"IMenuCreationParams",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server-editor/interfaces/IMenuCreationParams",id:"sapi/preview/server-editor/interfaces/IMenuCreationParams",title:"Interface: IMenuCreationParams",description:"Properties required to create a Menu",source:"@site/docs/sapi/preview/server-editor/interfaces/IMenuCreationParams.md",sourceDirName:"sapi/preview/server-editor/interfaces",slug:"/sapi/preview/server-editor/interfaces/IMenuCreationParams",permalink:"/en/docs/sapi/preview/server-editor/interfaces/IMenuCreationParams",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IMenuCreationParams",title:"Interface: IMenuCreationParams",sidebar_label:"IMenuCreationParams",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"IMenuContainer",permalink:"/en/docs/sapi/preview/server-editor/interfaces/IMenuContainer"},next:{title:"IModalTool",permalink:"/en/docs/sapi/preview/server-editor/interfaces/IModalTool"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"checked",id:"checked",level:3},{value:"displayStringId",id:"displaystringid",level:3},{value:"name",id:"name",level:3},{value:"uniqueId",id:"uniqueid",level:3}],u={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Properties required to create a Menu"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"checked"},"checked"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"checked"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Whether the menu should show a checkmark"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"displaystringid"},"displayStringId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"displayStringId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Loc ID (resolved on client)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The name of the menu"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"uniqueid"},"uniqueId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"uniqueId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Custom unique identifier that will replace random id"))}c.isMDXComponent=!0}}]);