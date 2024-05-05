"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17562],{33546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(74848),l=t(28453);const o={},i=void 0,r={id:"changelog_source/stable/1.20/80/tech_sapi_stable",title:"tech_sapi_stable",description:'-   Dynamic imports (e.g., import("/my-module.js")) should be functional again',source:"@site/docs/changelog_source/stable/1.20/80/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.20/80",slug:"/changelog_source/stable/1.20/80/tech_sapi_stable",permalink:"/docs/changelog_source/stable/1.20/80/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/80/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){const n={em:"em",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Dynamic imports (e.g., import("/my-module.js")) should be functional again'}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"BlockTypes"})," will now return valid types for flattened or refactored block names"]}),"\n",(0,s.jsxs)(n.li,{children:["EntityMountTamingComponent\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Renamed ",(0,s.jsx)(n.em,{children:"EntityMountTamingComponent"})," to ",(0,s.jsx)(n.em,{children:"EntityTameMountComponent"})]}),"\n",(0,s.jsxs)(n.li,{children:["Renamed ",(0,s.jsx)(n.em,{children:"setTamed"})," to ",(0,s.jsx)(n.em,{children:"tame"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Released ",(0,s.jsx)(n.em,{children:"BlockComponentTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Released ",(0,s.jsx)(n.em,{children:"EntityComponentTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Released ",(0,s.jsx)(n.em,{children:"ItemComponentTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.10.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.em,{children:"filters"})," as they currently have no backing implementation"]}),"\n",(0,s.jsxs)(n.li,{children:["Fixing some component ",(0,s.jsx)(n.em,{children:"isValid"})," methods where they didn\u2019t properly return false in cases where the component had been removed from the Entity"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"PaletteColor"})," enum to ",(0,s.jsx)(n.em,{children:"beta"})," for use with ",(0,s.jsx)(n.em,{children:"ItemColorComponent"}),"/",(0,s.jsx)(n.em,{children:"ItemColor2Component"})]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"ItemColor2Component"})," to ",(0,s.jsx)(n.em,{children:"beta"})," for reading ",(0,s.jsx)(n.em,{children:"minecraft:color2"})]}),"\n",(0,s.jsx)(n.li,{children:"Setting a dynamic property with a key larger than 32kb now will result in an exception"}),"\n",(0,s.jsxs)(n.li,{children:["Moved ",(0,s.jsx)(n.em,{children:"EntityType"})," and ",(0,s.jsx)(n.em,{children:"EntityTypes"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Released ",(0,s.jsx)(n.em,{children:"playMusic"}),"_,Player.queueMusic_, ",(0,s.jsx)(n.em,{children:"Player.stopMusic"})," from ",(0,s.jsx)(n.em,{children:"beta"})," to ",(0,s.jsx)(n.em,{children:"1.11.0"})]}),"\n",(0,s.jsxs)(n.li,{children:["Removed ",(0,s.jsx)(n.em,{children:"BlockAreaSize"})," from ",(0,s.jsx)(n.em,{children:"beta"})," and replaced usages with ",(0,s.jsx)(n.em,{children:"Vector3"})]}),"\n",(0,s.jsxs)(n.li,{children:["Renamed parameter ",(0,s.jsx)(n.em,{children:"itemCategory"})," in ",(0,s.jsx)(n.em,{children:"getItemCooldown"})," and ",(0,s.jsx)(n.em,{children:"player.startItemCooldown"})," to ",(0,s.jsx)(n.em,{children:"cooldownCategory"})]}),"\n",(0,s.jsxs)(n.li,{children:["Changed ",(0,s.jsx)(n.em,{children:"type"})," to only ",(0,s.jsx)(n.em,{children:"EnchantmentType"})," to follow API guidelines"]}),"\n",(0,s.jsxs)(n.li,{children:["Added ",(0,s.jsx)(n.em,{children:"EnchantmentSlot"})," and ",(0,s.jsx)(n.em,{children:"slots"})," to ",(0,s.jsx)(n.em,{children:"beta"})," for determining the enchantable slots of an item"]}),"\n",(0,s.jsx)(n.li,{children:"Added \u2018minecraft:custom_components\u2019 block component under the Beta APIs feature flag"}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);