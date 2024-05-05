"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59422],{43814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(74848),r=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.19/60/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Container",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/20",slug:"/changelog_source/preview/1.19/60/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/60/20/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function a(e){const n={em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Container\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearItem(slot: number): void"}),"- Clears the item at the given slot index"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearAll(): void"}),"- Clears all items in the container"]}),"\n",(0,i.jsxs)(n.li,{children:["Made the\xa0_itemStack_argument of function\xa0",(0,i.jsx)(n.em,{children:"setItem"}),"\xa0optional - If not provided, the slot is cleared"]}),"\n",(0,i.jsxs)(n.li,{children:["Added event\xa0",(0,i.jsx)(n.em,{children:"events.playerSpawn"}),"- Fires when a player spawns in the world"]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed event\xa0_events.entityCreate_to\xa0",(0,i.jsx)(n.em,{children:"world.events.entitySpawn"}),". This event no longer fires for players"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PlayerJoinEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added read-only property\xa0",(0,i.jsx)(n.em,{children:"playerId"}),"- The unique ID of the player that joined the world"]}),"\n",(0,i.jsxs)(n.li,{children:["Added read-only property\xa0",(0,i.jsx)(n.em,{children:"playerName"}),"- The name of the player that joined the world"]}),"\n",(0,i.jsxs)(n.li,{children:["Removed property\xa0",(0,i.jsx)(n.em,{children:"player"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PlayerLeaveEvent\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added read-only property\xa0",(0,i.jsx)(n.em,{children:"playerId"}),"- The unique ID of the player that left the world"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["SimulatedPlayer\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"respawn()"}),"- Respawns the SimulatedPlayer if it's dead"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"disconnect()"}),"- Removes the SimulatedPlayer from the world"]}),"\n",(0,i.jsxs)(n.li,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getSlot(slot: number): ContainerSlot"}),"- Returns the slot at the given container slot index"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ContainerSlot\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added class\xa0",(0,i.jsx)(n.em,{children:"ContainerSlot"}),"- Used to directly manipulate items stored within a container"]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed entity property\xa0_viewVector_to\xa0",(0,i.jsx)(n.em,{children:"viewDirection"}),"\xa0and now returns\xa0Vector3"]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed entity function\xa0g_etEntitiesFromViewVector_to\xa0",(0,i.jsx)(n.em,{children:"getEntitiesFromViewDirection"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed entity function\xa0_getBlockFromViewVector_to\xa0",(0,i.jsx)(n.em,{children:"getBlockFromViewDirection"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed ",(0,i.jsx)(n.em,{children:"IRawMessage"})," to ",(0,i.jsx)(n.em,{children:"RawMessage"})," for naming consistency"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);