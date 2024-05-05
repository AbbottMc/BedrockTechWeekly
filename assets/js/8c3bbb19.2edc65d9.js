"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[63637],{18925:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(74848),n=s(28453);const i={id:"ServerSecrets",title:"Class: ServerSecrets",sidebar_label:"ServerSecrets",sidebar_position:0,custom_edit_url:null},c=void 0,l={id:"sapi/stable/server-admin/classes/ServerSecrets",title:"Class: ServerSecrets",description:"A collection of server secrets defined in dedicated server",source:"@site/docs/sapi/stable/server-admin/classes/ServerSecrets.md",sourceDirName:"sapi/stable/server-admin/classes",slug:"/sapi/stable/server-admin/classes/ServerSecrets",permalink:"/docs/sapi/stable/server-admin/classes/ServerSecrets",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ServerSecrets",title:"Class: ServerSecrets",sidebar_label:"ServerSecrets",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"SecretString",permalink:"/docs/sapi/stable/server-admin/classes/SecretString"},next:{title:"ServerVariables",permalink:"/docs/sapi/stable/server-admin/classes/ServerVariables"}},d={},a=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"names",id:"names",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"A collection of server secrets defined in dedicated server\nconfiguration."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Example"})})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"import { variables, secrets } from \"@minecraft/server-admin\";\nimport { http, HttpRequest, HttpRequestMethod, HttpHeader, HttpResponse } from \"@minecraft/server-net\";\n\nconst serverUrl = variables.get('serverEndpoint');\n\nfunction getPlayerProfile(playerId: string): Promise<HttpResponse> {\n    const req = new HttpRequest(serverUrl + 'getPlayerProfile');\n\n    req.body = JSON.stringify({\n        playerId,\n    });\n\n    const authTokenSec = secrets.get('authtoken');\n\n    if (!authTokenSec) {\n        throw new Error('authtoken secret not defined.');\n    }\n\n    req.method = HttpRequestMethod.Post;\n    req.headers = [new HttpHeader('Content-Type', 'application/json'), new HttpHeader('auth', authTokenSec)];\n\n    return http.request(req);\n}\n\ngetPlayerProfile('dark navi');\n"})}),"\n",(0,t.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(r.h3,{id:"constructor",children:"constructor"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.strong,{children:"new ServerSecrets"}),"(): ",(0,t.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/ServerSecrets",children:(0,t.jsx)(r.code,{children:"ServerSecrets"})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/ServerSecrets",children:(0,t.jsx)(r.code,{children:"ServerSecrets"})})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(r.h3,{id:"names",children:"names"}),"\n",(0,t.jsxs)(r.p,{children:["\u2022 ",(0,t.jsx)(r.code,{children:"Readonly"})," ",(0,t.jsx)(r.strong,{children:"names"}),": ",(0,t.jsx)(r.code,{children:"string"}),"[]"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(r.p,{children:"A list of available, configured server secrets."}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.h3,{id:"get",children:"get"}),"\n",(0,t.jsxs)(r.p,{children:["\u25b8 ",(0,t.jsx)(r.strong,{children:"get"}),"(",(0,t.jsx)(r.code,{children:"name"}),"): ",(0,t.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/SecretString",children:(0,t.jsx)(r.code,{children:"SecretString"})})]}),"\n",(0,t.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"name"})}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:(0,t.jsx)(r.code,{children:"string"})})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/sapi/stable/server-admin/classes/SecretString",children:(0,t.jsx)(r.code,{children:"SecretString"})})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(r.p,{children:"Returns a SecretString that is a placeholder for a secret\nconfigured in a JSON file. In certain objects, like an\nHttpHeader, this Secret is resolved at the time of execution\nbut is not made available to the script environment."}),"\n",(0,t.jsx)(r.p,{children:"This function can't be called in read-only mode."})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>l});var t=s(96540);const n={},i=t.createContext(n);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);