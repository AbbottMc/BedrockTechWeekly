"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[10178],{59618:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(74848),i=s(28453);const t={},a="Interface: TitleDisplayOptions",o={id:"sapi/preview/server/interfaces/TitleDisplayOptions",title:"Interface: TitleDisplayOptions",description:"Contains additional options for displaying a title and",source:"@site/docs/sapi/preview/server/interfaces/TitleDisplayOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/TitleDisplayOptions",permalink:"/en/docs/sapi/preview/server/interfaces/TitleDisplayOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/interfaces/TitleDisplayOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"TeleportOptions",permalink:"/en/docs/sapi/preview/server/interfaces/TeleportOptions"},next:{title:"Vector2",permalink:"/en/docs/sapi/preview/server/interfaces/Vector2"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"fadeInDuration",id:"fadeinduration",level:3},{value:"Remarks",id:"remarks",level:4},{value:"fadeOutDuration",id:"fadeoutduration",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"stayDuration",id:"stayduration",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"subtitle?",id:"subtitle",level:3},{value:"Remarks",id:"remarks-3",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"interface-titledisplayoptions",children:"Interface: TitleDisplayOptions"}),"\n",(0,r.jsx)(n.p,{children:"Contains additional options for displaying a title and\noptional subtitle."}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"fadeinduration",children:"fadeInDuration"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fadeInDuration"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["Fade-in duration for the title and subtitle, in ticks. There\nare 20 ticks per second. Use ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/variables/TicksPerSecond",children:"TicksPerSecond"})," constant\nto convert between ticks and seconds."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"fadeoutduration",children:"fadeOutDuration"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"fadeOutDuration"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["Fade-out time for the title and subtitle, in ticks. There\nare 20 ticks per second. Use ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/variables/TicksPerSecond",children:"TicksPerSecond"})," constant\nto convert between ticks and seconds."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stayduration",children:"stayDuration"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"stayDuration"}),": ",(0,r.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["Amount of time for the title and subtitle to stay in place,\nin ticks. There are 20 ticks per second. Use ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/variables/TicksPerSecond",children:"TicksPerSecond"})," constant to convert between ticks and\nseconds."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"subtitle",children:"subtitle?"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"optional"})," ",(0,r.jsx)(n.strong,{children:"subtitle"}),": ",(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/RawMessage",children:(0,r.jsx)(n.code,{children:"RawMessage"})})," | (",(0,r.jsx)(n.code,{children:"string"})," | ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/RawMessage",children:(0,r.jsx)(n.code,{children:"RawMessage"})}),")[]"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"Optional subtitle text."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);