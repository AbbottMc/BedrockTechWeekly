"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2856],{23615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),r=t(28453);const s={},o=void 0,c={id:"changelog_source/preview/1.20/60/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Updated function\xa0addEffect\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function a(e){const n={em:"em",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Updated function\xa0",(0,i.jsx)(n.em,{children:"addEffect"}),"\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added item dynamic properties"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearDynamicProperties(): void"}),"\xa0- Removes all dynamic properties from the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"}),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyIds(): string[]"}),"\xa0- Returns an array of all dynamic property identifiers on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyTotalByteCount(): number"}),"\xa0- Returns the total byte count of all dynamic properties on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"}),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearDynamicProperties(): void"}),"\xa0- Removes all dynamic properties from the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"}),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyIds(): string[]"}),"\xa0- Returns an array of all dynamic property identifiers on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyTotalByteCount(): number"}),"\xa0- Returns the total byte count of all dynamic properties on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"}),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added class\xa0",(0,i.jsx)(n.em,{children:"EntityProjectileComponent"}),". This component is used to shoot a projectile entity and modify its properties"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added interface ",(0,i.jsx)(n.em,{children:"ProjectileShootOptions"}),". This interface is used with function\xa0",(0,i.jsx)(n.em,{children:"EntityProjectileComponent.shoot"}),"\xa0to optionally modify the accuracy of the projectile when shot"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);