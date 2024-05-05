"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42560],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=a,y=d["".concat(o,".").concat(g)]||d[g]||u[g]||i;return t?n.createElement(y,s(s({ref:r},c),{},{components:t})):n.createElement(y,s({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},75550:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const i={id:"ServerVariables",title:"Class: ServerVariables",sidebar_label:"ServerVariables",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"sapi/preview/server-admin/classes/ServerVariables",id:"sapi/preview/server-admin/classes/ServerVariables",title:"Class: ServerVariables",description:"A collection of server variables defined in dedicated server",source:"@site/docs/sapi/preview/server-admin/classes/ServerVariables.md",sourceDirName:"sapi/preview/server-admin/classes",slug:"/sapi/preview/server-admin/classes/ServerVariables",permalink:"/en/docs/sapi/preview/server-admin/classes/ServerVariables",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ServerVariables",title:"Class: ServerVariables",sidebar_label:"ServerVariables",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ServerSecrets",permalink:"/en/docs/sapi/preview/server-admin/classes/ServerSecrets"},next:{title:"HttpClient",permalink:"/en/docs/sapi/preview/server-net/classes/HttpClient"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"names",id:"names",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}],c={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(d,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A collection of server variables defined in dedicated server\nconfiguration."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("p",null,"getPlayerProfile.ts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import { variables, secrets } from \"@minecraft/server-admin\";\nimport { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from \"@minecraft/server-net\";\n\nconst serverUrl = variables.get('serverEndpoint');\n\nfunction getPlayerProfile(playerId: string): Promise<HttpResponse> {\n    const req = new HttpRequest(serverUrl + 'getPlayerProfile');\n\n    req.body = JSON.stringify({\n        playerId,\n    });\n\n    const authTokenSec = secrets.get('authtoken');\n\n    if (!authTokenSec) {\n        throw new Error('authtoken secret not defined.');\n    }\n\n    req.method = HttpRequestMethod.Post;\n    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];\n\n    return http.request(req);\n}\n\ngetPlayerProfile('dark navi');\n")),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ServerVariables"),"()"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"names"},"names"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"names"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"A list of available, configured server variables."),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"get"},"get"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"get"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"name"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"any")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the value of variable that has been configured in a\ndedicated server configuration JSON file."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"name")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"any")))}u.isMDXComponent=!0}}]);