"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[75315],{61270:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(74848),t=s(28453);const o={},l=void 0,i={id:"changelog_source/preview/1.21/0/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0GameRules rule property-setters so that changes are propagated to clients",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function a(e){const n={em:"em",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed\xa0",(0,r.jsx)(n.em,{children:"GameRules"})," rule property-setters so that changes are propagated to clients"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"startItemCooldown"})," and\xa0",(0,r.jsx)(n.em,{children:"player.getItemCooldown"}),"\xa0from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0",(0,r.jsx)(n.em,{children:"playSound"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"playSound"})," is now deprecated and will be removed in a future major version. Use\xa0",(0,r.jsx)(n.em,{children:"Dimension.playSound"})," as the alternative"]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_ListBlockVolume_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_BlockVolumeBase_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Released\xa0_BlockLocationIterator_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved method\xa0_getGameMode(): GameMode_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved method\xa0_setGameMode(gameMode?: GameMode): void_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved member\xa0_playerGameModeChange: PlayerGameModeChangeAfterEventSignal_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to ",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved member\xa0_playerGameModeChange: PlayerGameModeChangeBeforeEventSignal_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0_PlayerGameModeChangeAfterEvent_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0",(0,r.jsx)(n.em,{children:"PlayerGameModeChangeAfterEventSignal"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to ",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0_PlayerGameModeChangeBeforeEvent_from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0",(0,r.jsx)(n.em,{children:"PlayerGameModeChangeBeforeEventSignal"})," from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.em,{children:"ItemComponentConsumeEvent"})," for ",(0,r.jsx)(n.em,{children:"beta"})]}),"\n",(0,r.jsxs)(n.li,{children:["Change\xa0",(0,r.jsx)(n.em,{children:"waitTick(ticks?: number)"})," to\xa0",(0,r.jsx)(n.em,{children:"system.waitTicks(ticks: number);"})]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed property\xa0_selectedSlot_to\xa0",(0,r.jsx)(n.em,{children:"selectedSlotIndex"}),"\xa0and moved it from\xa0",(0,r.jsx)(n.em,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(n.em,{children:"1.11.0"})]}),"\n"]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var r=s(96540);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);