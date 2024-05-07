"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98438],{76619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(74848),l=t(28453);const i={},s=void 0,c={id:"changelog_source/preview/1.19/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Entity",source:"@site/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},d={},o=[];function a(e){const n={em:"em",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Entity\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Fixed a bug where the ",(0,r.jsx)(n.em,{children:"getEffect"})," method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["EntityHurtEvent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added read-only property ",(0,r.jsx)(n.em,{children:"damageSource: EntityDamageSource"})," - Gets information about the damage source"]}),"\n",(0,r.jsxs)(n.li,{children:["EntityDamageSource\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added property ",(0,r.jsx)(n.em,{children:"cause: EntityDamageCause"})," - Gets the damage cause"]}),"\n",(0,r.jsxs)(n.li,{children:["Added property ",(0,r.jsx)(n.em,{children:"damagingEntity?: Entity"})," - Gets the damaging Entity"]}),"\n",(0,r.jsxs)(n.li,{children:["Added property ",(0,r.jsx)(n.em,{children:"damagingProjectile?: Entity"})," - Gets the damaging projectile Entity"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"applyDamage(amount: number, source?: EntityDamageSource): boolean"})," - Applies damage to the Entity and returns the result of the operation"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Dimension\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fills an area between ",(0,r.jsx)(n.em,{children:"begin"})," and ",(0,r.jsx)(n.em,{children:"end"})," with block of type block. Returns number of blocks placed"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added new interface ",(0,r.jsx)(n.em,{children:"BlockFillOptions"})," with member ",(0,r.jsx)(n.em,{children:"matchingBlock?: BlockPermutation | BlockType"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Used with ",(0,r.jsx)(n.em,{children:"fillBlocks"})," to apply additional options, such as only filling blocks matching ",(0,r.jsx)(n.em,{children:"matchingBlock"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Player\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"addLevels(amount: number): number"})," - Adds/Removes level to/from the Player and returns the current level of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"addExperience(amount: number): number"})," - Adds/Removes experience to/from the Player and returns the current experience of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"resetLevel(): void"})," - Resets the level of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function ",(0,r.jsx)(n.em,{children:"getTotalXp(): number"})," - Gets the total experience of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added read-only property ",(0,r.jsx)(n.em,{children:"level"})," - Gets the level of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added read-only property ",(0,r.jsx)(n.em,{children:"xpEarnedAtCurrentLevel"})," - Gets the experience earned at the current level of the Player"]}),"\n",(0,r.jsxs)(n.li,{children:["Added read-only property ",(0,r.jsx)(n.em,{children:"totalXpNeededForNextLevel"})," - Gets the total experience required for the current level of the Player"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const l={},i=r.createContext(l);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);