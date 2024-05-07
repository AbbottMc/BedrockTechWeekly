"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95619],{98720:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=t(74848),n=t(28453);const a={},c="Class: ItemStartUseOnAfterEvent",i={id:"sapi/stable/server/classes/ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStartUseOnAfterEvent",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"ItemStartUseAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseAfterEventSignal"},next:{title:"ItemStartUseOnAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEventSignal"}},l={},o=[{value:"Constructors",id:"constructors",level:2},{value:"new ItemStartUseOnAfterEvent()",id:"new-itemstartuseonafterevent",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Remarks",id:"remarks",level:4},{value:"blockFace",id:"blockface",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"itemStack?",id:"itemstack",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"source",id:"source",level:3},{value:"Remarks",id:"remarks-3",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-itemstartuseonafterevent",children:"Class: ItemStartUseOnAfterEvent"}),"\n",(0,r.jsx)(s.p,{children:"Contains information related to an item being used on a\nblock. This event fires when a player presses the the Use\nItem / Place Block button to successfully use an item or\nplace a block. Fires for the first block that is interacted\nwith when performing a build action. Note: This event cannot\nbe used with Hoe or Axe items."}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-itemstartuseonafterevent",children:"new ItemStartUseOnAfterEvent()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"new ItemStartUseOnAfterEvent"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",children:(0,r.jsx)(s.code,{children:"ItemStartUseOnAfterEvent"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",children:(0,r.jsx)(s.code,{children:"ItemStartUseOnAfterEvent"})})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"block",children:"block"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"block"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/Block",children:(0,r.jsx)(s.code,{children:"Block"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"The block that the item is used on."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"blockface",children:"blockFace"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"blockFace"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/enumerations/Direction",children:(0,r.jsx)(s.code,{children:"Direction"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"The face of the block that an item is being used on."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"itemstack",children:"itemStack?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"itemStack"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,r.jsx)(s.code,{children:"ItemStack"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"The impacted item stack that is starting to be used. Can be\nundefined in some gameplay scenarios like pushing a button\nwith an empty hand."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"source",children:"source"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"source"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/Player",children:(0,r.jsx)(s.code,{children:"Player"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Returns the source entity that triggered this item event."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var r=t(96540);const n={},a=r.createContext(n);function c(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);