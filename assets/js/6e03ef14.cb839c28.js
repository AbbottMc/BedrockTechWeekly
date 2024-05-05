"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43149],{15892:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(74848),i=s(28453);const r={},c=void 0,l={id:"changelog_source/preview/1.19/60/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Block",source:"@site/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/22",slug:"/changelog_source/preview/1.19/60/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},d={},o=[];function a(e){const n={em:"em",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Block"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added function\xa0",(0,t.jsx)(n.em,{children:"getRedstonePower(): number"}),"- Gets the Redstone signal strength of the Block if it is part of a circuit, otherwise returns undefined"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Added /scriptevent command as part of the Beta APIs experiment. This is what will trigger system.events.scriptEventReceive events (see below)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Usage: /scriptevent <messsageId: string> [message: ???]"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'messageId must be namespaced, use of the minecraft namespace is invalid (e.g. "/scriptevent give:coal", "/scriptevent my_scripts:spawn_sheep")'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"message is optional, with a max length of 256 characters"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"events.scriptEventReceive"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added system event\xa0",(0,t.jsx)(n.em,{children:"events.scriptEventReceive"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added read-only property\xa0",(0,t.jsx)(n.em,{children:"id: String"}),"_-_ The namespaced ID of the event"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Added read-only property\xa0message: String- The content of the message the event was sent with"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added read-only property\xa0",(0,t.jsx)(n.em,{children:"sourceBlock: Block"}),"- The command block that triggered/executed the command call if applicable, otherwise undefined"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added read-only property\xa0",(0,t.jsx)(n.em,{children:"sourceEntity: Entity"}),"- The player/entity that executed the command call if applicable, otherwise undefined"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added read-only property\xa0",(0,t.jsx)(n.em,{children:"initiator: Entity"}),"- The player that caused an NPC to execute the command call if applicable, otherwise undefined"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Added read-only property\xa0",(0,t.jsx)(n.em,{children:"sourceType: MessageSourceType"}),"- The type of source the event was triggered by"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["_subscribe()_can filter by valid namespace string using the\xa0",(0,t.jsx)(n.em,{children:"ScriptEventMessageFilterOptions"}),"\xa0class"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"ScriptEventMessageFilterOptions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.em,{children:"ScriptEventMessageFilterOptions"})," class"]}),"\n",(0,t.jsxs)(n.li,{children:["Added property\xa0",(0,t.jsx)(n.em,{children:"namespaces: string[]"}),"- An array of namespaces to filter on"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Simulated Player"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added property\xa0",(0,t.jsx)(n.em,{children:"isSprinting"}),"- Used to get or set if the sprinting state of the simulated player is set to true"]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);