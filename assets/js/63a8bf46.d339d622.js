"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72699],{58591:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var r=t(74848),n=t(28453);const d={},l="Class: HttpRequest",i={id:"sapi/preview/server-net/classes/HttpRequest",title:"Class: HttpRequest",description:"Main object for structuring a request.",source:"@site/docs/sapi/preview/server-net/classes/HttpRequest.md",sourceDirName:"sapi/preview/server-net/classes",slug:"/sapi/preview/server-net/classes/HttpRequest",permalink:"/docs/sapi/preview/server-net/classes/HttpRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server-net/classes/HttpRequest.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"HttpHeader",permalink:"/docs/sapi/preview/server-net/classes/HttpHeader"},next:{title:"HttpResponse",permalink:"/docs/sapi/preview/server-net/classes/HttpResponse"}},c={},h=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new HttpRequest()",id:"new-httprequest",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"body",id:"body",level:3},{value:"Remarks",id:"remarks",level:4},{value:"headers",id:"headers",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"method",id:"method",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"timeout",id:"timeout",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"uri",id:"uri",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"Methods",id:"methods",level:2},{value:"addHeader()",id:"addheader",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks-5",level:4},{value:"setBody()",id:"setbody",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-6",level:4},{value:"setHeaders()",id:"setheaders",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Remarks",id:"remarks-7",level:4},{value:"setMethod()",id:"setmethod",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Remarks",id:"remarks-8",level:4},{value:"setTimeout()",id:"settimeout",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Remarks",id:"remarks-9",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-httprequest",children:"Class: HttpRequest"}),"\n",(0,r.jsx)(s.p,{children:"Main object for structuring a request."}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { HttpRequest, HttpHeader, HttpRequestMethod, http } from '@minecraft/server-net';\n\nasync function updateScore() {\n    const req = new HttpRequest('http://localhost:3000/updateScore');\n\n    req.body = JSON.stringify({\n        score: 22,\n    });\n\n    req.method = HttpRequestMethod.Post;\n    req.headers = [\n        new HttpHeader('Content-Type', 'application/json'),\n        new HttpHeader('auth', 'my-auth-token'),\n    ];\n\n    await http.request(req);\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-httprequest",children:"new HttpRequest()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new HttpRequest"}),"(",(0,r.jsx)(s.code,{children:"uri"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"uri"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"body",children:"body"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"body"}),": ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Content of the body of the HTTP request."}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"headers",children:"headers"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"headers"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpHeader",children:(0,r.jsx)(s.code,{children:"HttpHeader"})}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"A collection of HTTP headers to add to the outbound request."}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"method",children:"method"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"method"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/enumerations/HttpRequestMethod",children:(0,r.jsx)(s.code,{children:"HttpRequestMethod"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"HTTP method (e.g., GET or PUT or PATCH) to use for making\nthe request."}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"timeout",children:"timeout"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"timeout"}),": ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Amount of time, in seconds, before the request times out and\nis abandoned."}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"uri",children:"uri"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"uri"}),": ",(0,r.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"The HTTP resource to access."}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"addheader",children:"addHeader()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"addHeader"}),"(",(0,r.jsx)(s.code,{children:"key"}),", ",(0,r.jsx)(s.code,{children:"value"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"key"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"value"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"SecretString"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Adds an additional header to the overall list of headers\nused in the corresponding HTTP request."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setbody",children:"setBody()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"setBody"}),"(",(0,r.jsx)(s.code,{children:"body"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"body"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Updates the content of the body of the HTTP request."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setheaders",children:"setHeaders()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"setHeaders"}),"(",(0,r.jsx)(s.code,{children:"headers"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpHeader",children:(0,r.jsx)(s.code,{children:"HttpHeader"})}),"[]"]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Replaces and applies a set of HTTP Headers for the request."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"setmethod",children:"setMethod()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"setMethod"}),"(",(0,r.jsx)(s.code,{children:"method"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"method"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/enumerations/HttpRequestMethod",children:(0,r.jsx)(s.code,{children:"HttpRequestMethod"})})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Sets the desired HTTP method (e.g., GET or PUT or PATCH) to\nuse for making the request."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"settimeout",children:"setTimeout()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"setTimeout"}),"(",(0,r.jsx)(s.code,{children:"timeout"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"timeout"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-net/classes/HttpRequest",children:(0,r.jsx)(s.code,{children:"HttpRequest"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-9",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>i});var r=t(96540);const n={},d=r.createContext(n);function l(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);