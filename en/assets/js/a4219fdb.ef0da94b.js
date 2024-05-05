"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[1631],{10338:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(74848),t=n(28453);const a={id:"ChatSendBeforeEvent",title:"Class: ChatSendBeforeEvent",sidebar_label:"ChatSendBeforeEvent",sidebar_position:0,custom_edit_url:null},l=void 0,c={id:"sapi/stable/server/classes/ChatSendBeforeEvent",title:"Class: ChatSendBeforeEvent",description:"An event that fires as players enter chat messages.",source:"@site/docs/sapi/stable/server/classes/ChatSendBeforeEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ChatSendBeforeEvent",permalink:"/en/docs/sapi/stable/server/classes/ChatSendBeforeEvent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ChatSendBeforeEvent",title:"Class: ChatSendBeforeEvent",sidebar_label:"ChatSendBeforeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ChatSendAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ChatSendAfterEventSignal"},next:{title:"ChatSendBeforeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ChatSendBeforeEventSignal"}},d={},i=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"message",id:"message",level:3},{value:"sender",id:"sender",level:3},{value:"targets",id:"targets",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"An event that fires as players enter chat messages."}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"new ChatSendBeforeEvent"}),"(): ",(0,r.jsx)(s.a,{href:"/en/docs/sapi/stable/server/classes/ChatSendBeforeEvent",children:(0,r.jsx)(s.code,{children:"ChatSendBeforeEvent"})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/en/docs/sapi/stable/server/classes/ChatSendBeforeEvent",children:(0,r.jsx)(s.code,{children:"ChatSendBeforeEvent"})})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"cancel",children:"cancel"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.strong,{children:"cancel"}),": ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(s.p,{children:"If set to true in a beforeChat event handler, this message\nis not broadcast out."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"message",children:"message"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.code,{children:"Readonly"})," ",(0,r.jsx)(s.strong,{children:"message"}),": ",(0,r.jsx)(s.code,{children:"string"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(s.p,{children:"Message that is being broadcast."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"sender",children:"sender"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.code,{children:"Readonly"})," ",(0,r.jsx)(s.strong,{children:"sender"}),": ",(0,r.jsx)(s.a,{href:"/en/docs/sapi/stable/server/classes/Player",children:(0,r.jsx)(s.code,{children:"Player"})})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(s.p,{children:"Player that sent the chat message."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"targets",children:"targets"}),"\n",(0,r.jsxs)(s.p,{children:["\u2022 ",(0,r.jsx)(s.code,{children:"Optional"})," ",(0,r.jsx)(s.code,{children:"Readonly"})," ",(0,r.jsx)(s.strong,{children:"targets"}),": ",(0,r.jsx)(s.a,{href:"/en/docs/sapi/stable/server/classes/Player",children:(0,r.jsx)(s.code,{children:"Player"})}),"[]"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional list of players that will receive this message. If\ndefined, this message is directly targeted to one or more\nplayers (i.e., is not broadcast.)"})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var r=n(96540);const t={},a=r.createContext(t);function l(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);