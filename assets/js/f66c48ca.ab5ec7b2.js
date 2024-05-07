"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86682],{8149:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var s=n(74848),l=n(28453);const a={},i="Class: WorldBeforeEvents",t={id:"sapi/stable/server/classes/WorldBeforeEvents",title:"Class: WorldBeforeEvents",description:"A set of events that fire before an actual action occurs. In",source:"@site/docs/sapi/stable/server/classes/WorldBeforeEvents.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/WorldBeforeEvents",permalink:"/docs/sapi/stable/server/classes/WorldBeforeEvents",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/WorldBeforeEvents.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"WorldAfterEvents",permalink:"/docs/sapi/stable/server/classes/WorldAfterEvents"},next:{title:"WorldInitializeAfterEvent",permalink:"/docs/sapi/stable/server/classes/WorldInitializeAfterEvent"}},d={},c=[{value:"Constructors",id:"constructors",level:2},{value:"new WorldBeforeEvents()",id:"new-worldbeforeevents",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"chatSend",id:"chatsend",level:3},{value:"Remarks",id:"remarks",level:4},{value:"effectAdd",id:"effectadd",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"entityRemove",id:"entityremove",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"explosion",id:"explosion",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"itemUse",id:"itemuse",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"itemUseOn",id:"itemuseon",level:3},{value:"Remarks",id:"remarks-5",level:4},{value:"playerBreakBlock",id:"playerbreakblock",level:3},{value:"Remarks",id:"remarks-6",level:4},{value:"playerGameModeChange",id:"playergamemodechange",level:3},{value:"playerInteractWithBlock",id:"playerinteractwithblock",level:3},{value:"Remarks",id:"remarks-7",level:4},{value:"playerInteractWithEntity",id:"playerinteractwithentity",level:3},{value:"Remarks",id:"remarks-8",level:4},{value:"playerLeave",id:"playerleave",level:3},{value:"Remarks",id:"remarks-9",level:4},{value:"playerPlaceBlock",id:"playerplaceblock",level:3},{value:"Remarks",id:"remarks-10",level:4},{value:"weatherChange",id:"weatherchange",level:3},{value:"worldInitialize",id:"worldinitialize",level:3},{value:"Remarks",id:"remarks-11",level:4}];function o(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"class-worldbeforeevents",children:"Class: WorldBeforeEvents"}),"\n",(0,s.jsx)(r.p,{children:"A set of events that fire before an actual action occurs. In\nmost cases, you can potentially cancel or modify the\nimpending event. Note that in before events any APIs that\nmodify gameplay state will not function and will throw an\nerror. (e.g., dimension.spawnEntity)"}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(r.h3,{id:"new-worldbeforeevents",children:"new WorldBeforeEvents()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"private"})," ",(0,s.jsx)(r.strong,{children:"new WorldBeforeEvents"}),"(): ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/WorldBeforeEvents",children:(0,s.jsx)(r.code,{children:"WorldBeforeEvents"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/WorldBeforeEvents",children:(0,s.jsx)(r.code,{children:"WorldBeforeEvents"})})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h3,{id:"chatsend",children:"chatSend"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"chatSend"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/ChatSendBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"ChatSendBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event is triggered after a chat message has been\nbroadcast or sent to players."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"effectadd",children:"effectAdd"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"effectAdd"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/EffectAddBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"EffectAddBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event is triggered after an event has been added to an\nentity."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"entityremove",children:"entityRemove"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"entityRemove"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/EntityRemoveBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"EntityRemoveBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Fires before an entity is removed from the world (for\nexample, unloaded or removed after being killed.)"}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"explosion",children:"explosion"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"explosion"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/ExplosionBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"ExplosionBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event is fired after an explosion occurs."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"itemuse",children:"itemUse"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"itemUse"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/ItemUseBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"ItemUseBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event fires when an item is successfully used by a\nplayer."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"itemuseon",children:"itemUseOn"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"itemUseOn"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/ItemUseOnBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"ItemUseOnBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event fires when an item is used on a block by a\nplayer."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playerbreakblock",children:"playerBreakBlock"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerBreakBlock"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerBreakBlockBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerBreakBlockBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event fires before a block is broken by a player."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playergamemodechange",children:"playerGameModeChange"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerGameModeChange"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerGameModeChangeBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerGameModeChangeBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playerinteractwithblock",children:"playerInteractWithBlock"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerInteractWithBlock"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerInteractWithBlockBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerInteractWithBlockBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Fires before a player interacts with a block."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playerinteractwithentity",children:"playerInteractWithEntity"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerInteractWithEntity"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerInteractWithEntityBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerInteractWithEntityBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Fires before a player interacts with an entity."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playerleave",children:"playerLeave"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerLeave"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerLeaveBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerLeaveBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-9",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"Fires when a player leaves the game."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"playerplaceblock",children:"playerPlaceBlock"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"playerPlaceBlock"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/PlayerPlaceBlockBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"PlayerPlaceBlockBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-10",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event fires before a block is placed by a player."}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"weatherchange",children:"weatherChange"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"weatherChange"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/WeatherChangeBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"WeatherChangeBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"worldinitialize",children:"worldInitialize"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"Beta"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"readonly"})," ",(0,s.jsx)(r.strong,{children:"worldInitialize"}),": ",(0,s.jsx)(r.a,{href:"/docs/sapi/stable/server/classes/WorldInitializeBeforeEventSignal",children:(0,s.jsx)(r.code,{children:"WorldInitializeBeforeEventSignal"})})]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"remarks-11",children:"Remarks"}),"\n",(0,s.jsx)(r.p,{children:"This event fires immediately when the script environment is\ninitialized on a World. Not all script functionality may be\navailable. For guaranteed access to world state, use the\nworld initialize after event."})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var s=n(96540);const l={},a=s.createContext(l);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);