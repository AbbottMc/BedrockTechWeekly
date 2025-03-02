"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[38656],{26756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var r=n(74848),i=n(28453);const o={},s=void 0,l={id:"changelog_source/stable/1.21/30/tech_sapi_exp",title:"tech_sapi_exp",description:"-   PlayerInteractWithBlockBeforeEvent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.21/30/tech_sapi_exp.md",sourceDirName:"changelog_source/stable/1.21/30",slug:"/changelog_source/stable/1.21/30/tech_sapi_exp",permalink:"/en/docs/changelog_source/stable/1.21/30/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.21/30/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},a=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["PlayerInteractWithBlockBeforeEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["PlayerInteractWithBlockAfterEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly beforeItemStack?: ItemStack"}),"\xa0to beta. This is the item the player was selecting before the interaction succeeded"]}),"\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false if triggered on holding the interaction button"]}),"\n",(0,r.jsx)(t.li,{children:"This after event will no longer always trigger on an empty hand. The interaction with the block needs to be successful for it to trigger the after event."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["PlayerInteractWithEntityAfterEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly beforeItemStack?: ItemStack"}),"\xa0to beta. This is the item the player was selecting before the interaction succeeded"]}),"\n",(0,r.jsx)(t.li,{children:"Cancelling the before event will now no longer trigger the after event"}),"\n",(0,r.jsx)(t.li,{children:"This event will now only be triggered on a successful interaction"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["ItemUseOnBeforeEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["ItemUseOnAfterEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property\xa0",(0,r.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Moved class\xa0",(0,r.jsx)(t.code,{children:"PlayerCursorInventoryComponent"}),"\xa0from\xa0",(0,r.jsx)(t.code,{children:"beta"}),"\xa0to\xa0",(0,r.jsx)(t.code,{children:"1.14.0"})]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);