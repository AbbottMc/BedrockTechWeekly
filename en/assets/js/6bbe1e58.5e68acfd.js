"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6241],{97725:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=n(74848),s=n(28453);const t={},o="Class: TripWireTripAfterEvent",c={id:"sapi/preview/server/classes/TripWireTripAfterEvent",title:"Class: TripWireTripAfterEvent",description:"Contains information related to changes to a trip wire trip.",source:"@site/docs/sapi/preview/server/classes/TripWireTripAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/TripWireTripAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/TripWireTripAfterEvent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/classes/TripWireTripAfterEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"Trigger",permalink:"/en/docs/sapi/preview/server/classes/Trigger"},next:{title:"TripWireTripAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/TripWireTripAfterEventSignal"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new TripWireTripAfterEvent()",id:"new-tripwiretripafterevent",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isPowered",id:"ispowered",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"sources",id:"sources",level:3},{value:"Remarks",id:"remarks-3",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"class-tripwiretripafterevent",children:"Class: TripWireTripAfterEvent"}),"\n",(0,i.jsx)(r.p,{children:"Contains information related to changes to a trip wire trip."}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';\n\nconst overworld = world.getDimension('overworld');\nconst targetLocation: Vector3 = { x: 0, y: 0, z: 0 };\n\n// set up a tripwire\nconst redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });\nconst tripwire = overworld.getBlock(targetLocation);\n\nif (redstone === undefined || tripwire === undefined) {\n    console.warn('Could not find block at location.');\n} else {\n\nredstone.setPermutation(BlockPermutation.resolve('redstone_block'));\ntripwire.setPermutation(BlockPermutation.resolve('tripwire'));\n\nworld.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {\n    const eventLoc = tripWireTripEvent.block.location;\n\n    if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {\n        console.warn(\n            'Tripwire trip event at tick ' +\n                system.currentTick +\n                (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),\n        );\n    }\n});\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"extends",children:"Extends"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent",children:(0,i.jsx)(r.code,{children:"BlockEvent"})})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsx)(r.h3,{id:"new-tripwiretripafterevent",children:"new TripWireTripAfterEvent()"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"private"})," ",(0,i.jsx)(r.strong,{children:"new TripWireTripAfterEvent"}),"(): ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/TripWireTripAfterEvent",children:(0,i.jsx)(r.code,{children:"TripWireTripAfterEvent"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/TripWireTripAfterEvent",children:(0,i.jsx)(r.code,{children:"TripWireTripAfterEvent"})})}),"\n",(0,i.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent",children:(0,i.jsx)(r.code,{children:"BlockEvent"})})," . ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent#constructors",children:(0,i.jsx)(r.code,{children:"constructor"})})]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h3,{id:"block",children:"block"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"readonly"})," ",(0,i.jsx)(r.strong,{children:"block"}),": ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/Block",children:(0,i.jsx)(r.code,{children:"Block"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Block impacted by this event."}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent",children:(0,i.jsx)(r.code,{children:"BlockEvent"})})," . ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent#block",children:(0,i.jsx)(r.code,{children:"block"})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"dimension",children:"dimension"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"readonly"})," ",(0,i.jsx)(r.strong,{children:"dimension"}),": ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/Dimension",children:(0,i.jsx)(r.code,{children:"Dimension"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Dimension that contains the block that is the subject of\nthis event."}),"\n",(0,i.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent",children:(0,i.jsx)(r.code,{children:"BlockEvent"})})," . ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/BlockEvent#dimension",children:(0,i.jsx)(r.code,{children:"dimension"})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"ispowered",children:"isPowered"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"readonly"})," ",(0,i.jsx)(r.strong,{children:"isPowered"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Whether or not the block has redstone power."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"sources",children:"sources"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"readonly"})," ",(0,i.jsx)(r.strong,{children:"sources"}),": ",(0,i.jsx)(r.a,{href:"/en/docs/sapi/preview/server/classes/Entity",children:(0,i.jsx)(r.code,{children:"Entity"})}),"[]"]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"The sources that triggered the trip wire to trip."})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var i=n(96540);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);