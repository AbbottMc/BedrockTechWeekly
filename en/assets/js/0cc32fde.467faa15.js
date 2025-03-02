"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44895],{71497:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=c(74848),t=c(28453);const i={},d=void 0,r={id:"changelog_source/stable/1.21/60/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added scriptEvent method to system object which sends a script event similar to the /scriptevent command to beta",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.21/60/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.21/60",slug:"/changelog_source/stable/1.21/60/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/1.21/60/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.21/60/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},o={},l=[];function a(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added ",(0,s.jsx)(n.code,{children:"scriptEvent"})," method to ",(0,s.jsx)(n.code,{children:"system"})," object which sends a script event similar to the ",(0,s.jsx)(n.code,{children:"/scriptevent"})," command to beta"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added ",(0,s.jsx)(n.code,{children:"NamespaceNameError"})," error which validates namespace usage to beta"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added ",(0,s.jsx)(n.code,{children:"NamespaceNameErrorReason"})," enum which shows the types of issues that namespace validation can run into to beta"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added new function ",(0,s.jsx)(n.code,{children:"collectPluginStats"})," to ",(0,s.jsx)(n.code,{children:"@minecraft/debug-utilities"})," which will return the types and counts of all active script objects."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.code,{children:"/script watchdog exportstats"})," command, deprecated in favor of script API."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added ",(0,s.jsx)(n.code,{children:"setDynamicProperties"})," method to ",(0,s.jsx)(n.code,{children:"World"}),", ",(0,s.jsx)(n.code,{children:"Entity"}),", ",(0,s.jsx)(n.code,{children:"ItemStack"})," and ",(0,s.jsx)(n.code,{children:"ContainerSlot"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Added enum ",(0,s.jsx)(n.code,{children:"LiquidType"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"export enum LiquidType {\nWater = 'Water'\n}"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Added four new bindings to Script Block API (Beta)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Block::canBeDestroyedByLiquidSpread"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Block::isLiquidBlocking"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Block::liquidSpreadCausesSpawn"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Block::liquidCanFlowFromDirection"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Added three new bindings to Script Block Permutation API (Beta)."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"BlockPermutation::canBeDestroyedByLiquidSpread"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"BlockPermutation::isLiquidBlocking"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"BlockPermutation::liquidSpreadCausesSpawn"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fixed bug where ",(0,s.jsx)(n.code,{children:"Block.setWaterlogged"})," would create a water source that does not flow."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Rename ",(0,s.jsx)(n.code,{children:"handleCounts"})," interface to ",(0,s.jsx)(n.code,{children:"HandleCounts"})," in ",(0,s.jsx)(n.code,{children:"@minecraft/debug_utilities"})," module."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fixed ",(0,s.jsx)(n.code,{children:"BlockLocationIterator"})," crash that could happen if the ",(0,s.jsx)(n.code,{children:"BlockVolume"})," that the iterator came from was deleted first."]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>r});var s=c(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);