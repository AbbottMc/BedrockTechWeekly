"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[26933],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||s;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=y;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},70041:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=n(58168),a=(n(96540),n(15680));const s={id:"FormResponse",title:"Class: FormResponse",sidebar_label:"FormResponse",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server-ui/classes/FormResponse",id:"sapi/stable/server-ui/classes/FormResponse",title:"Class: FormResponse",description:"Base type for a form response.",source:"@site/docs/sapi/stable/server-ui/classes/FormResponse.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/FormResponse",permalink:"/docs/sapi/stable/server-ui/classes/FormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FormResponse",title:"Class: FormResponse",sidebar_label:"FormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"FormRejectError",permalink:"/docs/sapi/stable/server-ui/classes/FormRejectError"},next:{title:"MessageFormData",permalink:"/docs/sapi/stable/server-ui/classes/MessageFormData"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"canceled",id:"canceled",level:3}],c={toc:p},u="wrapper";function m(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Base type for a form response."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"FormResponse"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/ActionFormResponse"},(0,a.yg)("inlineCode",{parentName:"a"},"ActionFormResponse"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/MessageFormResponse"},(0,a.yg)("inlineCode",{parentName:"a"},"MessageFormResponse"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse"},(0,a.yg)("inlineCode",{parentName:"a"},"ModalFormResponse"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new FormResponse"),"()"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"cancelationreason"},"cancelationReason"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"cancelationReason"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/enums/FormCancelationReason"},(0,a.yg)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Contains additional details as to why a form was canceled."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"canceled"},"canceled"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"canceled"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."))}m.isMDXComponent=!0}}]);