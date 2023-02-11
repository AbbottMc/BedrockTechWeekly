"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[39004],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8500:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={id:"MessageFormResponse",title:"Class: MessageFormResponse",sidebar_label:"MessageFormResponse",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server-ui/classes/MessageFormResponse",id:"sapi/preview/server-ui/classes/MessageFormResponse",title:"Class: MessageFormResponse",description:"Returns data about the player results from a modal message",source:"@site/docs/sapi/preview/server-ui/classes/MessageFormResponse.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/MessageFormResponse",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MessageFormResponse",title:"Class: MessageFormResponse",sidebar_label:"MessageFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"MessageFormData",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormData"},next:{title:"ModalFormData",permalink:"/docs/sapi/preview/server-ui/classes/ModalFormData"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Overrides",id:"overrides",level:4},{value:"canceled",id:"canceled",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"selection",id:"selection",level:3}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns data about the player results from a modal message\nform."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"FormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MessageFormResponse"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancelationreason"},"cancelationReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"cancelationReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/enums/FormCancelationReason"},(0,a.kt)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,a.kt)("p",null,"Contains additional details as to why a form was canceled."),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#cancelationreason"},"cancelationReason")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"canceled"},"canceled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"canceled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#canceled"},"canceled")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"selection"},"selection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"selection"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Returns the index of the button that was pushed."))}u.isMDXComponent=!0}}]);