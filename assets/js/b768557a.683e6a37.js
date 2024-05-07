"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[16050],{44767:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(74848),n=s(28453);const i={},a="Class: ItemStopUseAfterEvent",c={id:"sapi/stable/server/classes/ItemStopUseAfterEvent",title:"Class: ItemStopUseAfterEvent",description:"Contains information related to a chargeable item has",source:"@site/docs/sapi/stable/server/classes/ItemStopUseAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStopUseAfterEvent",permalink:"/docs/sapi/stable/server/classes/ItemStopUseAfterEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/ItemStopUseAfterEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"ItemStartUseOnAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEventSignal"},next:{title:"ItemStopUseAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStopUseAfterEventSignal"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new ItemStopUseAfterEvent()",id:"new-itemstopuseafterevent",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"itemStack?",id:"itemstack",level:3},{value:"Remarks",id:"remarks",level:4},{value:"source",id:"source",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"useDuration",id:"useduration",level:3},{value:"Remarks",id:"remarks-2",level:4}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"class-itemstopuseafterevent",children:"Class: ItemStopUseAfterEvent"}),"\n",(0,r.jsx)(t.p,{children:"Contains information related to a chargeable item has\nfinished an items use cycle, or when the player has released\nthe use action with the item."}),"\n",(0,r.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(t.h3,{id:"new-itemstopuseafterevent",children:"new ItemStopUseAfterEvent()"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"private"})," ",(0,r.jsx)(t.strong,{children:"new ItemStopUseAfterEvent"}),"(): ",(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStopUseAfterEvent",children:(0,r.jsx)(t.code,{children:"ItemStopUseAfterEvent"})})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStopUseAfterEvent",children:(0,r.jsx)(t.code,{children:"ItemStopUseAfterEvent"})})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"itemstack",children:"itemStack?"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"optional"})," ",(0,r.jsx)(t.code,{children:"readonly"})," ",(0,r.jsx)(t.strong,{children:"itemStack"}),": ",(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(t.code,{children:"ItemStack"})})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"The impacted item stack that is stopping being charged.\nItemStopUseAfterEvent can be called when teleporting to a\ndifferent dimension and this can be undefined."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"source",children:"source"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"readonly"})," ",(0,r.jsx)(t.strong,{children:"source"}),": ",(0,r.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/Player",children:(0,r.jsx)(t.code,{children:"Player"})})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Returns the source entity that triggered this item event."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h3,{id:"useduration",children:"useDuration"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"readonly"})," ",(0,r.jsx)(t.strong,{children:"useDuration"}),": ",(0,r.jsx)(t.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Returns the time, in ticks, for the remaining duration left\nbefore the charge completes its cycle."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var r=s(96540);const n={},i=r.createContext(n);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);