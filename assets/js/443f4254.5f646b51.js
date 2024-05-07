"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[21245],{63316:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var r=n(74848),l=n(28453);const c={},t="Class: BlockEvent",o={id:"sapi/stable/server/classes/BlockEvent",title:"Class: BlockEvent",description:"Contains information regarding an event that impacts a",source:"@site/docs/sapi/stable/server/classes/BlockEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockEvent",permalink:"/docs/sapi/stable/server/classes/BlockEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/BlockEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"BlockComponentTickEvent",permalink:"/docs/sapi/stable/server/classes/BlockComponentTickEvent"},next:{title:"BlockExplodeAfterEvent",permalink:"/docs/sapi/stable/server/classes/BlockExplodeAfterEvent"}},i={},a=[{value:"Extended by",id:"extended-by",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new BlockEvent()",id:"new-blockevent",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Remarks",id:"remarks",level:4},{value:"dimension",id:"dimension",level:3},{value:"Remarks",id:"remarks-1",level:4}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-blockevent",children:"Class: BlockEvent"}),"\n",(0,r.jsx)(s.p,{children:"Contains information regarding an event that impacts a\nspecific block."}),"\n",(0,r.jsx)(s.h2,{id:"extended-by",children:"Extended by"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentEntityFallOnEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentEntityFallOnEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentOnPlaceEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentOnPlaceEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentPlayerDestroyEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentPlayerDestroyEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentPlayerInteractEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentPlayerInteractEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentPlayerPlaceBeforeEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentPlayerPlaceBeforeEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentRandomTickEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentRandomTickEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentStepOffEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentStepOffEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentStepOnEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentStepOnEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockComponentTickEvent",children:(0,r.jsx)(s.code,{children:"BlockComponentTickEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockExplodeAfterEvent",children:(0,r.jsx)(s.code,{children:"BlockExplodeAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/ButtonPushAfterEvent",children:(0,r.jsx)(s.code,{children:"ButtonPushAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/LeverActionAfterEvent",children:(0,r.jsx)(s.code,{children:"LeverActionAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PistonActivateAfterEvent",children:(0,r.jsx)(s.code,{children:"PistonActivateAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PlayerBreakBlockAfterEvent",children:(0,r.jsx)(s.code,{children:"PlayerBreakBlockAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PlayerBreakBlockBeforeEvent",children:(0,r.jsx)(s.code,{children:"PlayerBreakBlockBeforeEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent",children:(0,r.jsx)(s.code,{children:"PlayerPlaceBlockAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PlayerPlaceBlockBeforeEvent",children:(0,r.jsx)(s.code,{children:"PlayerPlaceBlockBeforeEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PressurePlatePopAfterEvent",children:(0,r.jsx)(s.code,{children:"PressurePlatePopAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/PressurePlatePushAfterEvent",children:(0,r.jsx)(s.code,{children:"PressurePlatePushAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/TargetBlockHitAfterEvent",children:(0,r.jsx)(s.code,{children:"TargetBlockHitAfterEvent"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/TripWireTripAfterEvent",children:(0,r.jsx)(s.code,{children:"TripWireTripAfterEvent"})})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-blockevent",children:"new BlockEvent()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"new BlockEvent"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockEvent",children:(0,r.jsx)(s.code,{children:"BlockEvent"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockEvent",children:(0,r.jsx)(s.code,{children:"BlockEvent"})})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"block",children:"block"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"block"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/Block",children:(0,r.jsx)(s.code,{children:"Block"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Block impacted by this event."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"dimension",children:"dimension"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"dimension"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/Dimension",children:(0,r.jsx)(s.code,{children:"Dimension"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Dimension that contains the block that is the subject of\nthis event."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>o});var r=n(96540);const l={},c=r.createContext(l);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);