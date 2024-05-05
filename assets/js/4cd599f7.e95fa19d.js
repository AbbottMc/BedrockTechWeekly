"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[13862],{15680:(e,r,t)=>{t.d(r,{xA:()=>m,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(f,o(o({ref:r},m),{},{components:t})):n.createElement(f,o({ref:r},m))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},74095:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const i={id:"CameraFadeTimeOptions",title:"Interface: CameraFadeTimeOptions",sidebar_label:"CameraFadeTimeOptions",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/interfaces/CameraFadeTimeOptions",id:"sapi/stable/server/interfaces/CameraFadeTimeOptions",title:"Interface: CameraFadeTimeOptions",description:"Contains timings for a fade transition.",source:"@site/docs/sapi/stable/server/interfaces/CameraFadeTimeOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/CameraFadeTimeOptions",permalink:"/docs/sapi/stable/server/interfaces/CameraFadeTimeOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CameraFadeTimeOptions",title:"Interface: CameraFadeTimeOptions",sidebar_label:"CameraFadeTimeOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"CameraFadeOptions",permalink:"/docs/sapi/stable/server/interfaces/CameraFadeOptions"},next:{title:"CameraSetFacingOptions",permalink:"/docs/sapi/stable/server/interfaces/CameraSetFacingOptions"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"fadeInTime",id:"fadeintime",level:3},{value:"fadeOutTime",id:"fadeouttime",level:3},{value:"holdTime",id:"holdtime",level:3}],m={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains timings for a fade transition."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"fadeintime"},"fadeInTime"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"fadeInTime"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Time, in seconds, for a fade-in."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"fadeouttime"},"fadeOutTime"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"fadeOutTime"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Time, in seconds, for a fade-out."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"holdtime"},"holdTime"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"holdTime"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Time, in seconds, to hold the full screen color."))}d.isMDXComponent=!0}}]);