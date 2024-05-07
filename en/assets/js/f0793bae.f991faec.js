"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[1732],{85309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=n(74848),r=n(28453);const i={},l="Class: PistonActivateAfterEventSignal",c={id:"sapi/stable/server/classes/PistonActivateAfterEventSignal",title:"Class: PistonActivateAfterEventSignal",description:"Manages callbacks that are connected to piston activations.",source:"@site/docs/sapi/stable/server/classes/PistonActivateAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PistonActivateAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEventSignal",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/PistonActivateAfterEventSignal.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"PistonActivateAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEvent"},next:{title:"Player",permalink:"/en/docs/sapi/stable/server/classes/Player"}},a={},d=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new PistonActivateAfterEventSignal()",id:"new-pistonactivateaftereventsignal",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"subscribe()",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Remarks",id:"remarks",level:4},{value:"unsubscribe()",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Remarks",id:"remarks-1",level:4},{value:"Throws",id:"throws",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"class-pistonactivateaftereventsignal",children:"Class: PistonActivateAfterEventSignal"}),"\n",(0,s.jsx)(t.p,{children:"Manages callbacks that are connected to piston activations."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { world, system, PistonActivateAfterEvent } from '@minecraft/server';\n\nworld.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {\n    console.warn(\n        `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,\n    );\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(t.h3,{id:"new-pistonactivateaftereventsignal",children:"new PistonActivateAfterEventSignal()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"private"})," ",(0,s.jsx)(t.strong,{children:"new PistonActivateAfterEventSignal"}),"(): ",(0,s.jsx)(t.a,{href:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEventSignal",children:(0,s.jsx)(t.code,{children:"PistonActivateAfterEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEventSignal",children:(0,s.jsx)(t.code,{children:"PistonActivateAfterEventSignal"})})}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"subscribe",children:"subscribe()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"subscribe"}),"(",(0,s.jsx)(t.code,{children:"callback"}),"): (",(0,s.jsx)(t.code,{children:"arg"}),") => ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"callback"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(t.code,{children:"arg"}),") => ",(0,s.jsx)(t.code,{children:"void"})]})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"Function"})}),"\n",(0,s.jsx)(t.h5,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"arg"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEvent",children:(0,s.jsx)(t.code,{children:"PistonActivateAfterEvent"})})})]})})]}),"\n",(0,s.jsx)(t.h5,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.h4,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"unsubscribe",children:"unsubscribe()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"unsubscribe"}),"(",(0,s.jsx)(t.code,{children:"callback"}),"): ",(0,s.jsx)(t.code,{children:"void"})]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"callback"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(t.code,{children:"arg"}),") => ",(0,s.jsx)(t.code,{children:"void"})]})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"void"})}),"\n",(0,s.jsx)(t.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"Removes a callback from being called when a piston expands\nor retracts."}),"\n",(0,s.jsx)(t.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(t.h4,{id:"throws",children:"Throws"}),"\n",(0,s.jsx)(t.p,{children:"This function can throw errors."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);