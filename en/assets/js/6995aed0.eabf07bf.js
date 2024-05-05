"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51992],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(y,s(s({ref:t},u),{},{components:r})):n.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={id:"HttpRequestMethod",title:"Enumeration: HttpRequestMethod",sidebar_label:"HttpRequestMethod",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server-net/enums/HttpRequestMethod",id:"sapi/preview/server-net/enums/HttpRequestMethod",title:"Enumeration: HttpRequestMethod",description:"Enumeration Members",source:"@site/docs/sapi/preview/server-net/enums/HttpRequestMethod.md",sourceDirName:"sapi/preview/server-net/enums",slug:"/sapi/preview/server-net/enums/HttpRequestMethod",permalink:"/en/docs/sapi/preview/server-net/enums/HttpRequestMethod",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"HttpRequestMethod",title:"Enumeration: HttpRequestMethod",sidebar_label:"HttpRequestMethod",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"HttpResponse",permalink:"/en/docs/sapi/preview/server-net/classes/HttpResponse"},next:{title:"FenceConnectivity",permalink:"/en/docs/sapi/preview/server-gametest/classes/FenceConnectivity"}},p={},l=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Delete",id:"delete",level:3},{value:"Get",id:"get",level:3},{value:"Head",id:"head",level:3},{value:"Post",id:"post",level:3},{value:"Put",id:"put",level:3}],u={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"delete"},"Delete"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Delete")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Delete"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the method for an HTTP HEAD request. HEAD\nrequests are similar to a GET request, but are commonly used\nto retrieve just the HTTP response headers from the\nspecified URI, and not the body contents."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"get"},"Get"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Get")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Get"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the method for an HTTP PUT request. POST requests\nare commonly used to create a new resource that is a\nsubordinate of the specified URI."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"head"},"Head"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Head")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Head"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the method for an HTTP PUT request. GET requests\nare commonly used to retrieve information about a resource\nat the specified URI."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"post"},"Post"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Post")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Post"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the method for an HTTP PUT request. GET requests\nare commonly used to retrieve information about a resource\nat the specified URI."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"put"},"Put"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Put")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"Put"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents the method for an HTTP PUT request. PUT requests\nare commonly used to update a single resource that already\nexists in a resource collection."))}c.isMDXComponent=!0}}]);