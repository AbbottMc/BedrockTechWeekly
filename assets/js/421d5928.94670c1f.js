"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[68526],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,s(s({ref:r},c),{},{components:n})):t.createElement(f,s({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79715:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const o={id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server-ui/classes/ModalFormResponse",id:"sapi/preview/server-ui/classes/ModalFormResponse",title:"Class: ModalFormResponse",description:"Returns data about player responses to a modal form.",source:"@site/docs/sapi/preview/server-ui/classes/ModalFormResponse.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/ModalFormResponse",permalink:"/docs/sapi/preview/server-ui/classes/ModalFormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ModalFormData",permalink:"/docs/sapi/preview/server-ui/classes/ModalFormData"},next:{title:"FormCancelationReason",permalink:"/docs/sapi/preview/server-ui/enums/FormCancelationReason"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"formValues",id:"formvalues",level:3}],c={toc:p};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns data about player responses to a modal form."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"FormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ModalFormResponse"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancelationreason"},"cancelationReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"cancelationReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/enums/FormCancelationReason"},(0,a.kt)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,a.kt)("p",null,"Contains additional details as to why a form was canceled."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#cancelationreason"},"cancelationReason")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"canceled"},"canceled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"canceled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#canceled"},"canceled")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"formvalues"},"formValues"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"formValues"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"[]"),(0,a.kt)("p",null,"An ordered set of values based on the order of controls\nspecified by ModalFormData."))}d.isMDXComponent=!0}}]);