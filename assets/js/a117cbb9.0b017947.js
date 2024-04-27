"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[49976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),m=s,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:s,o[1]=p;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={id:"HttpResponse",title:"Class: HttpResponse",sidebar_label:"HttpResponse",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/stable/server-net/classes/HttpResponse",id:"sapi/stable/server-net/classes/HttpResponse",title:"Class: HttpResponse",description:"Main object that contains result information from a request.",source:"@site/docs/sapi/stable/server-net/classes/HttpResponse.md",sourceDirName:"sapi/stable/server-net/classes",slug:"/sapi/stable/server-net/classes/HttpResponse",permalink:"/docs/sapi/stable/server-net/classes/HttpResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"HttpResponse",title:"Class: HttpResponse",sidebar_label:"HttpResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"HttpRequest",permalink:"/docs/sapi/stable/server-net/classes/HttpRequest"},next:{title:"HttpRequestMethod",permalink:"/docs/sapi/stable/server-net/enums/HttpRequestMethod"}},l={},i=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"body",id:"body",level:3},{value:"headers",id:"headers",level:3},{value:"request",id:"request",level:3},{value:"status",id:"status",level:3}],u={toc:i};function c(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Main object that contains result information from a request."),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("strong",{parentName:"p"},"new HttpResponse"),"()"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"body"},"body"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"body"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"Body content of the HTTP response."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"headers"},"headers"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"headers"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-net/classes/HttpHeader"},(0,s.kt)("inlineCode",{parentName:"a"},"HttpHeader")),"[]"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"A collection of HTTP response headers returned from the\nrequest."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"request"},"request"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"request"),": ",(0,s.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-net/classes/HttpRequest"},(0,s.kt)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"Information that was used to formulate the HTTP response\nthat this object represents."),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"status"},"status"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"status"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"number")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"HTTP response code for the request. For example, 404\nrepresents resource not found, and 500 represents an\ninternal server error."))}c.isMDXComponent=!0}}]);