"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30550],{89177:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=s(74848),t=s(28453);const a={},i="Class: ServerVariables",l={id:"sapi/stable/server-admin/classes/ServerVariables",title:"Class: ServerVariables",description:"A collection of server variables defined in dedicated server",source:"@site/docs/sapi/stable/server-admin/classes/ServerVariables.md",sourceDirName:"sapi/stable/server-admin/classes",slug:"/sapi/stable/server-admin/classes/ServerVariables",permalink:"/docs/sapi/stable/server-admin/classes/ServerVariables",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server-admin/classes/ServerVariables.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"ServerSecrets",permalink:"/docs/sapi/stable/server-admin/classes/ServerSecrets"},next:{title:"secrets",permalink:"/docs/sapi/stable/server-admin/variables/secrets"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ServerVariables()",id:"new-servervariables",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"names",id:"names",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Methods",id:"methods",level:2},{value:"get()",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks-1",level:4}];function o(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"class-servervariables",children:"Class: ServerVariables"}),"\n",(0,n.jsx)(r.p,{children:"A collection of server variables defined in dedicated server\nconfiguration."}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { variables, secrets } from \"@minecraft/server-admin\";\nimport { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from \"@minecraft/server-net\";\n\nconst serverUrl = variables.get('serverEndpoint');\n\nfunction getPlayerProfile(playerId: string): Promise<HttpResponse> {\n    const req = new HttpRequest(serverUrl + 'getPlayerProfile');\n\n    req.body = JSON.stringify({\n        playerId,\n    });\n\n    const authTokenSec = secrets.get('authtoken');\n\n    if (!authTokenSec) {\n        throw new Error('authtoken secret not defined.');\n    }\n\n    req.method = HttpRequestMethod.Post;\n    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];\n\n    return http.request(req);\n}\n\ngetPlayerProfile('dark navi');\n"})}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"new-servervariables",children:"new ServerVariables()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"private"})," ",(0,n.jsx)(r.strong,{children:"new ServerVariables"}),"(): ",(0,n.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/ServerVariables",children:(0,n.jsx)(r.code,{children:"ServerVariables"})})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/ServerVariables",children:(0,n.jsx)(r.code,{children:"ServerVariables"})})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"names",children:"names"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"readonly"})," ",(0,n.jsx)(r.strong,{children:"names"}),": ",(0,n.jsx)(r.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"A list of available, configured server variables."}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.h3,{id:"get",children:"get()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"get"}),"(",(0,n.jsx)(r.code,{children:"name"}),"): ",(0,n.jsx)(r.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"name"})}),(0,n.jsx)(r.td,{style:{textAlign:"left"},children:(0,n.jsx)(r.code,{children:"string"})})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"any"})}),"\n",(0,n.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Returns the value of variable that has been configured in a\ndedicated server configuration JSON file."}),"\n",(0,n.jsx)(r.p,{children:"This function can't be called in read-only mode."})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>l});var n=s(96540);const t={},a=n.createContext(t);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);