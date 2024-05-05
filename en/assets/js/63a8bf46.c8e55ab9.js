"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72699],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),o=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(i.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=o(r),u=n,m=g["".concat(i,".").concat(u)]||g[u]||y[u]||l;return r?a.createElement(m,p(p({ref:t},d),{},{components:r})):a.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:n,p[1]=s;for(var o=2;o<l;o++)p[o]=r[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(58168),n=(r(96540),r(15680));const l={id:"HttpRequest",title:"Class: HttpRequest",sidebar_label:"HttpRequest",sidebar_position:0,custom_edit_url:null},p=void 0,s={unversionedId:"sapi/preview/server-net/classes/HttpRequest",id:"sapi/preview/server-net/classes/HttpRequest",title:"Class: HttpRequest",description:"Main object for structuring a request.",source:"@site/docs/sapi/preview/server-net/classes/HttpRequest.md",sourceDirName:"sapi/preview/server-net/classes",slug:"/sapi/preview/server-net/classes/HttpRequest",permalink:"/en/docs/sapi/preview/server-net/classes/HttpRequest",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"HttpRequest",title:"Class: HttpRequest",sidebar_label:"HttpRequest",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"HttpHeader",permalink:"/en/docs/sapi/preview/server-net/classes/HttpHeader"},next:{title:"HttpResponse",permalink:"/en/docs/sapi/preview/server-net/classes/HttpResponse"}},i={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"body",id:"body",level:3},{value:"headers",id:"headers",level:3},{value:"method",id:"method",level:3},{value:"timeout",id:"timeout",level:3},{value:"uri",id:"uri",level:3},{value:"Methods",id:"methods",level:2},{value:"addHeader",id:"addheader",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"setBody",id:"setbody",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"setHeaders",id:"setheaders",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-2",level:4},{value:"setMethod",id:"setmethod",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-3",level:4},{value:"setTimeout",id:"settimeout",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-4",level:4}],d={toc:o},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Main object for structuring a request."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("p",null,"simpleHttpRequest.ts"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-typescript"},"import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';\n\nasync function updateScore() {\n    const req = new HttpRequest('http://localhost:3000/updateScore');\n\n    req.body = JSON.stringify({\n        score: 22,\n    });\n\n    req.method = HttpRequestMethod.Post;\n    req.headers = [\n        new HttpHeader('Content-Type', 'application/json'),\n        new HttpHeader('auth', 'my-auth-token'),\n    ];\n\n    await http.request(req);\n}\n")),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"new HttpRequest"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"uri"),")"),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"uri")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"body"},"body"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"body"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Content of the body of the HTTP request."),(0,n.yg)("p",null,"This property can't be edited in read-only mode."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"headers"},"headers"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"headers"),": ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpHeader"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpHeader")),"[]"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"A collection of HTTP headers to add to the outbound request."),(0,n.yg)("p",null,"This property can't be edited in read-only mode."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"method"},"method"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"method"),": ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/enums/HttpRequestMethod"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequestMethod"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"HTTP method (e.g., GET or PUT or PATCH) to use for making\nthe request."),(0,n.yg)("p",null,"This property can't be edited in read-only mode."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"timeout"},"timeout"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"timeout"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Amount of time, in seconds, before the request times out and\nis abandoned."),(0,n.yg)("p",null,"This property can't be edited in read-only mode."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"uri"},"uri"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"uri"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"The HTTP resource to access."),(0,n.yg)("p",null,"This property can't be edited in read-only mode."),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"addheader"},"addHeader"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addHeader"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"key"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds an additional header to the overall list of headers\nused in the corresponding HTTP request."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"key")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"value")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"SecretString"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setbody"},"setBody"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setBody"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"body"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Updates the content of the body of the HTTP request."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"body")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setheaders"},"setHeaders"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setHeaders"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"headers"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Replaces and applies a set of HTTP Headers for the request."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"headers")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-net/classes/HttpHeader"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpHeader")),"[]")))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setmethod"},"setMethod"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setMethod"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"method"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the desired HTTP method (e.g., GET or PUT or PATCH) to\nuse for making the request."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"method")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-net/enums/HttpRequestMethod"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequestMethod")))))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"settimeout"},"setTimeout"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setTimeout"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"timeout"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-5"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"timeout")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number"))))),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-net/classes/HttpRequest"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpRequest"))))}y.isMDXComponent=!0}}]);