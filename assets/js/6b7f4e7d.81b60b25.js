"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66596],{79980:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var n=r(74848),t=r(28453);const i={},c="Class: FeedItemEffect",d={id:"sapi/preview/server/classes/FeedItemEffect",title:"Class: FeedItemEffect",description:"Represents an effect that is applied as a result of a food",source:"@site/docs/sapi/preview/server/classes/FeedItemEffect.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/FeedItemEffect",permalink:"/docs/sapi/preview/server/classes/FeedItemEffect",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/classes/FeedItemEffect.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"FeedItem",permalink:"/docs/sapi/preview/server/classes/FeedItem"},next:{title:"FilterGroup",permalink:"/docs/sapi/preview/server/classes/FilterGroup"}},l={},a=[{value:"Constructors",id:"constructors",level:2},{value:"new FeedItemEffect()",id:"new-feeditemeffect",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"amplifier",id:"amplifier",level:3},{value:"Remarks",id:"remarks",level:4},{value:"chance",id:"chance",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"duration",id:"duration",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"name",id:"name",level:3},{value:"Remarks",id:"remarks-3",level:4}];function o(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"class-feeditemeffect",children:"Class: FeedItemEffect"}),"\n",(0,n.jsx)(s.p,{children:"Represents an effect that is applied as a result of a food\nitem being fed to an entity."}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-feeditemeffect",children:"new FeedItemEffect()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.strong,{children:"new FeedItemEffect"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sapi/preview/server/classes/FeedItemEffect",children:(0,n.jsx)(s.code,{children:"FeedItemEffect"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/preview/server/classes/FeedItemEffect",children:(0,n.jsx)(s.code,{children:"FeedItemEffect"})})}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"amplifier",children:"amplifier"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"amplifier"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Gets an amplifier that may have been applied to this effect.\nValid values are integers starting at 0 and up - but usually\nranging between 0 and 4."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"chance",children:"chance"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"chance"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Chance that this effect is applied as a result of the entity\nbeing fed this item. Valid values range between 0 and 1."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"duration",children:"duration"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"duration"}),": ",(0,n.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Gets the duration, in ticks, of this effect."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"name",children:"name"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"name"}),": ",(0,n.jsx)(s.code,{children:"string"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Gets the identifier of the effect to apply. Example values\ninclude 'fire_resistance' or 'regeneration'."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>c,x:()=>d});var n=r(96540);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);