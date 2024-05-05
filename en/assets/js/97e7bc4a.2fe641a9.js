"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32671],{81153:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=s(74848),r=s(28453);const l={id:"ButtonPushAfterEventSignal",title:"Class: ButtonPushAfterEventSignal",sidebar_label:"ButtonPushAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,c={id:"sapi/stable/server/classes/ButtonPushAfterEventSignal",title:"Class: ButtonPushAfterEventSignal",description:"Manages callbacks that are connected to when a button is",source:"@site/docs/sapi/stable/server/classes/ButtonPushAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ButtonPushAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEventSignal",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ButtonPushAfterEventSignal",title:"Class: ButtonPushAfterEventSignal",sidebar_label:"ButtonPushAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ButtonPushAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent"},next:{title:"Camera",permalink:"/en/docs/sapi/stable/server/classes/Camera"}},d={},h=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Inherited from",id:"inherited-from",level:4},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Manages callbacks that are connected to when a button is\npushed."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Example"})})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"import { world, ButtonPushAfterEvent, system } from '@minecraft/server';\n\nworld.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {\n    const eventLoc = buttonPushEvent.block.location;\n\n    world.sendMessage(\n        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,\n    );\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal",children:(0,t.jsx)(n.code,{children:"IButtonPushAfterEventSignal"})})}),"\n",(0,t.jsxs)(n.p,{children:["\u21b3 ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEventSignal"})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"new ButtonPushAfterEventSignal"}),"(): ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEventSignal",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEventSignal"})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEventSignal",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEventSignal"})})}),"\n",(0,t.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal",children:"IButtonPushAfterEventSignal"}),".",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal#constructor",children:"constructor"})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"subscribe",children:"subscribe"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"subscribe"}),"(",(0,t.jsx)(n.code,{children:"callback"}),"): (",(0,t.jsx)(n.code,{children:"arg"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEvent"})}),") => ",(0,t.jsx)(n.code,{children:"void"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"callback"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,t.jsx)(n.code,{children:"arg"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEvent"})}),") => ",(0,t.jsx)(n.code,{children:"void"})]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"fn"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (",(0,t.jsx)(n.code,{children:"arg"}),"): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n",(0,t.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"arg"})}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEvent"})})})]})})]}),"\n",(0,t.jsx)(n.h5,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(n.p,{children:"Subscribes to the event."}),"\n",(0,t.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,t.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal",children:"IButtonPushAfterEventSignal"}),".",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal#subscribe",children:"subscribe"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"unsubscribe",children:"unsubscribe"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"unsubscribe"}),"(",(0,t.jsx)(n.code,{children:"callback"}),"): ",(0,t.jsx)(n.code,{children:"void"})]}),"\n",(0,t.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.code,{children:"callback"})}),(0,t.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,t.jsx)(n.code,{children:"arg"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent",children:(0,t.jsx)(n.code,{children:"ButtonPushAfterEvent"})}),") => ",(0,t.jsx)(n.code,{children:"void"})]})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"void"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(n.p,{children:"Unsubscribes from the event."}),"\n",(0,t.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Throws"})})}),"\n",(0,t.jsx)(n.p,{children:"This function can throw errors."}),"\n",(0,t.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal",children:"IButtonPushAfterEventSignal"}),".",(0,t.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/IButtonPushAfterEventSignal#unsubscribe",children:"unsubscribe"})]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(96540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);