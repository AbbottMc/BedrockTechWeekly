"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51952],{38584:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=t(74848),r=t(28453);const l={},c="Class: FeedItem",i={id:"sapi/stable/server/classes/FeedItem",title:"Class: FeedItem",description:"As part of the Healable component, represents a specific",source:"@site/docs/sapi/stable/server/classes/FeedItem.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/FeedItem",permalink:"/docs/sapi/stable/server/classes/FeedItem",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/FeedItem.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"ExplosionBeforeEventSignal",permalink:"/docs/sapi/stable/server/classes/ExplosionBeforeEventSignal"},next:{title:"FeedItemEffect",permalink:"/docs/sapi/stable/server/classes/FeedItemEffect"}},a={},d=[{value:"Constructors",id:"constructors",level:2},{value:"new FeedItem()",id:"new-feeditem",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"healAmount",id:"healamount",level:3},{value:"Remarks",id:"remarks",level:4},{value:"item",id:"item",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Methods",id:"methods",level:2},{value:"getEffects()",id:"geteffects",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks-2",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"class-feeditem",children:"Class: FeedItem"}),"\n",(0,n.jsx)(s.p,{children:"As part of the Healable component, represents a specific\nitem that can be fed to an entity to cause health effects."}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-feeditem",children:"new FeedItem()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.strong,{children:"new FeedItem"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/FeedItem",children:(0,n.jsx)(s.code,{children:"FeedItem"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/FeedItem",children:(0,n.jsx)(s.code,{children:"FeedItem"})})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"healamount",children:"healAmount"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"healAmount"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"The amount of health this entity gains when fed this item.\nThis number is an integer starting at 0. Sample values can\ngo as high as 40."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"item",children:"item"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"item"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Identifier of type of item that can be fed. If a namespace\nis not specified, 'minecraft:' is assumed. Example values\ninclude 'wheat' or 'golden_apple'."}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"geteffects",children:"getEffects()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"getEffects"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/FeedItemEffect",children:(0,n.jsx)(s.code,{children:"FeedItemEffect"})}),"[]"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/FeedItemEffect",children:(0,n.jsx)(s.code,{children:"FeedItemEffect"})}),"[]"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"As part of the Healable component, an optional collection of\nside effects that can occur from being fed an item."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>i});var n=t(96540);const r={},l=n.createContext(r);function c(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);