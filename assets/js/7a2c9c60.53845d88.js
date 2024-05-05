"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95072],{12253:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=s(74848),t=s(28453);const i={id:"Logger",title:"Class: Logger",sidebar_label:"Logger",sidebar_position:0,custom_edit_url:null},l=void 0,d={id:"sapi/stable/server-editor/classes/Logger",title:"Class: Logger",description:"The logger class is a utility class which allows editor",source:"@site/docs/sapi/stable/server-editor/classes/Logger.md",sourceDirName:"sapi/stable/server-editor/classes",slug:"/sapi/stable/server-editor/classes/Logger",permalink:"/docs/sapi/stable/server-editor/classes/Logger",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Logger",title:"Class: Logger",sidebar_label:"Logger",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"LineWidget",permalink:"/docs/sapi/stable/server-editor/classes/LineWidget"},next:{title:"MinecraftEditor",permalink:"/docs/sapi/stable/server-editor/classes/MinecraftEditor"}},o={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"debug",id:"debug",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"error",id:"error",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"info",id:"info",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"warning",id:"warning",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The logger class is a utility class which allows editor\nextensions to communicate with the player from the server to\nthe client log window.\nThe logger class presents 4 different output channels which\ncan be used to send information to the client/player,\ndepending on the context of the information."}),"\n",(0,r.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"new Logger"}),"(): ",(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/classes/Logger",children:(0,r.jsx)(n.code,{children:"Logger"})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/classes/Logger",children:(0,r.jsx)(n.code,{children:"Logger"})})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"debug",children:"debug"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"debug"}),"(",(0,r.jsx)(n.code,{children:"message"}),", ",(0,r.jsx)(n.code,{children:"properties?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"message"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The message string to send to the log window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"properties?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/interfaces/LogProperties",children:(0,r.jsx)(n.code,{children:"LogProperties"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.code,{children:"debug"})," output channel generally used during the\ndevelopment process of editor extensions.  This channel\ndefaults to ",(0,r.jsx)(n.code,{children:"hidden"})," in the log window (unless explicitly\nenabled).\nOnce your editor extension development process is complete,\nand you're ready to ship/share your extension - we generally\nrecommend that you remove any references to this log channel\nto avoid a noisy experience for other users"]}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"error",children:"error"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"error"}),"(",(0,r.jsx)(n.code,{children:"message"}),", ",(0,r.jsx)(n.code,{children:"properties?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"message"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The message string to send to the log window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"properties?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/interfaces/LogProperties",children:(0,r.jsx)(n.code,{children:"LogProperties"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The error channel is generally used when the editor\nextension experiences an error (either a program error in\nexecuting logic unexpectedly, or an error in the input or\noutput to/from a player).  Use this channel sparingly - it's\nmeant to communicate important problems to the player"}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"info",children:"info"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"info"}),"(",(0,r.jsx)(n.code,{children:"message"}),", ",(0,r.jsx)(n.code,{children:"properties?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"message"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The message string to send to the log window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"properties?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/interfaces/LogProperties",children:(0,r.jsx)(n.code,{children:"LogProperties"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:"The info channel is intended to communicate general,\nnon-fatal or non-erroneous information to the player that\ncan generally be safely ignored if they choose to do so."}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"warning",children:"warning"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"warning"}),"(",(0,r.jsx)(n.code,{children:"message"}),", ",(0,r.jsx)(n.code,{children:"properties?"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"message"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"The message string to send to the log window"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"properties?"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/docs/sapi/stable/server-editor/interfaces/LogProperties",children:(0,r.jsx)(n.code,{children:"LogProperties"})})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,r.jsx)(n.p,{children:'The warning channel is intended to inform the user of\n"potential" issues (missing inputs, values out of range,\nthings that cannot be found) but are not fatal and execution\ncan still be completed.'}),"\n",(0,r.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Throws"})})}),"\n",(0,r.jsx)(n.p,{children:"This function can throw errors."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);