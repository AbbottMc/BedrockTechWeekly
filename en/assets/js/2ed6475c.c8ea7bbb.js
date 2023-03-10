"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56392],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>v});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),l=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?t.createElement(v,s(s({ref:r},c),{},{components:n})):t.createElement(v,s({ref:r},c))}));function v(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22600:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(87462),a=(n(67294),n(3905));const o={id:"FormResponse",title:"Class: FormResponse",sidebar_label:"FormResponse",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server-ui/classes/FormResponse",id:"sapi/preview/server-ui/classes/FormResponse",title:"Class: FormResponse",description:"Base type for a form response.",source:"@site/docs/sapi/preview/server-ui/classes/FormResponse.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/FormResponse",permalink:"/en/docs/sapi/preview/server-ui/classes/FormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FormResponse",title:"Class: FormResponse",sidebar_label:"FormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ActionFormResponse",permalink:"/en/docs/sapi/preview/server-ui/classes/ActionFormResponse"},next:{title:"MessageFormData",permalink:"/en/docs/sapi/preview/server-ui/classes/MessageFormData"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"canceled",id:"canceled",level:3}],c={toc:l};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Base type for a form response."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"FormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-ui/classes/ActionFormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"ActionFormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-ui/classes/MessageFormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageFormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-ui/classes/ModalFormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"ModalFormResponse"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancelationreason"},"cancelationReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"cancelationReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-ui/enums/FormCancelationReason"},(0,a.kt)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,a.kt)("p",null,"Contains additional details as to why a form was canceled."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"canceled"},"canceled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"canceled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."))}u.isMDXComponent=!0}}]);