"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47319],{55502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453);const i={},a="Interface: ActionManager",c={id:"sapi/stable/server-editor/interfaces/ActionManager",title:"Interface: ActionManager",description:"Binds actions to the client and manages their lifetime.",source:"@site/docs/sapi/stable/server-editor/interfaces/ActionManager.md",sourceDirName:"sapi/stable/server-editor/interfaces",slug:"/sapi/stable/server-editor/interfaces/ActionManager",permalink:"/docs/sapi/stable/server-editor/interfaces/ActionManager",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server-editor/interfaces/ActionManager.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"WidgetStateChangeEventData",permalink:"/docs/sapi/stable/server-editor/classes/WidgetStateChangeEventData"},next:{title:"BuiltInUIManager",permalink:"/docs/sapi/stable/server-editor/interfaces/BuiltInUIManager"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"activeToolId",id:"activetoolid",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Methods",id:"methods",level:2},{value:"createAction()",id:"createaction",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Remarks",id:"remarks-1",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"interface-actionmanager",children:"Interface: ActionManager"}),"\n",(0,r.jsx)(t.p,{children:"Binds actions to the client and manages their lifetime.\nAction managers are managed on a per player basis since\nclient side UI is per player."}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"activetoolid",children:"activeToolId"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"activeToolId"}),": ",(0,r.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"The active tool ID"}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"createaction",children:"createAction()"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"createAction"}),"<",(0,r.jsx)(t.code,{children:"T"}),">(",(0,r.jsx)(t.code,{children:"rawAction"}),"): ",(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server-editor/type-aliases/RegisteredAction",children:(0,r.jsx)(t.code,{children:"RegisteredAction"})}),"<",(0,r.jsx)(t.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"type-parameters",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type parameter"})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"T"})," ",(0,r.jsx)(t.em,{children:"extends"})," ",(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server-editor/type-aliases/Action",children:(0,r.jsx)(t.code,{children:"Action"})})]})})})]}),"\n",(0,r.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"rawAction"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"T"})}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:["The raw action to create. See ActionTypes for supported",(0,r.jsx)(t.br,{}),"parameters"]})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server-editor/type-aliases/RegisteredAction",children:(0,r.jsx)(t.code,{children:"RegisteredAction"})}),"<",(0,r.jsx)(t.code,{children:"T"}),">"]}),"\n",(0,r.jsx)(t.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Creates an action and registers it on the client"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);