"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77343],{30163:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453);const i={id:"EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",sidebar_label:"EntitySpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},l=void 0,c={id:"sapi/stable/server/classes/EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",description:"Registers a script-based event handler for handling what",source:"@site/docs/sapi/stable/server/classes/EntitySpawnAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntitySpawnAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/EntitySpawnAfterEventSignal",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntitySpawnAfterEventSignal",title:"Class: EntitySpawnAfterEventSignal",sidebar_label:"EntitySpawnAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntitySpawnAfterEvent",permalink:"/docs/sapi/stable/server/classes/EntitySpawnAfterEvent"},next:{title:"EntityStrengthComponent",permalink:"/docs/sapi/stable/server/classes/EntityStrengthComponent"}},a={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-2",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Registers a script-based event handler for handling what\nhappens when an entity spawns."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Example"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Register a new function that is called when a new entity is created.\nimport { world, EntitySpawnAfterEvent } from '@minecraft/server';\n\nworld.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {\n    const spawnLocation = entityEvent.entity.location;\n    world.sendMessage(\n        `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,\n    );\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new EntitySpawnAfterEventSignal"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEventSignal",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEventSignal"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEventSignal",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEventSignal"})})}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"subscribe",children:"subscribe"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"subscribe"}),"(",(0,s.jsx)(n.code,{children:"callback"}),"): (",(0,s.jsx)(n.code,{children:"arg"}),": ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEvent",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEvent"})}),") => ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(n.code,{children:"arg"}),": ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEvent",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEvent"})}),") => ",(0,s.jsx)(n.code,{children:"void"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Function that handles the spawn event."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"fn"})}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 (",(0,s.jsx)(n.code,{children:"arg"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h5,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"arg"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEvent",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEvent"})})})]})})]}),"\n",(0,s.jsx)(n.h5,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Method to register an event handler for what happens when an\nentity spawns."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"unsubscribe",children:"unsubscribe"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"unsubscribe"}),"(",(0,s.jsx)(n.code,{children:"callback"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"callback"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(n.code,{children:"arg"}),": ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/EntitySpawnAfterEvent",children:(0,s.jsx)(n.code,{children:"EntitySpawnAfterEvent"})}),") => ",(0,s.jsx)(n.code,{children:"void"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Original function that was passed into the subscribe event, that is to be unregistered."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Unregisters a method that was previously subscribed to the\nsubscription event."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Throws"})})}),"\n",(0,s.jsx)(n.p,{children:"This function can throw errors."})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);