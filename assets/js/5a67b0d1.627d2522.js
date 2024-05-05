"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95619],{98720:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var n=s(74848),r=s(28453);const c={id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={id:"sapi/stable/server/classes/ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStartUseOnAfterEvent",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemStartUseAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseAfterEventSignal"},next:{title:"ItemStartUseOnAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEventSignal"}},a={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"blockFace",id:"blockface",level:3},{value:"itemStack",id:"itemstack",level:3},{value:"source",id:"source",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Contains information related to an item being used on a\nblock. This event fires when a player presses the the Use\nItem / Place Block button to successfully use an item or\nplace a block. Fires for the first block that is interacted\nwith when performing a build action. Note: This event cannot\nbe used with Hoe or Axe items."}),"\n",(0,n.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.strong,{children:"new ItemStartUseOnAfterEvent"}),"(): ",(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",children:(0,n.jsx)(t.code,{children:"ItemStartUseOnAfterEvent"})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",children:(0,n.jsx)(t.code,{children:"ItemStartUseOnAfterEvent"})})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(t.h3,{id:"block",children:"block"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.code,{children:"Readonly"})," ",(0,n.jsx)(t.strong,{children:"block"}),": ",(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/Block",children:(0,n.jsx)(t.code,{children:"Block"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(t.p,{children:"The block that the item is used on."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"blockface",children:"blockFace"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.code,{children:"Readonly"})," ",(0,n.jsx)(t.strong,{children:"blockFace"}),": ",(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/enums/Direction",children:(0,n.jsx)(t.code,{children:"Direction"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(t.p,{children:"The face of the block that an item is being used on."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"itemstack",children:"itemStack"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.code,{children:"Optional"})," ",(0,n.jsx)(t.code,{children:"Readonly"})," ",(0,n.jsx)(t.strong,{children:"itemStack"}),": ",(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/ItemStack",children:(0,n.jsx)(t.code,{children:"ItemStack"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(t.p,{children:"The impacted item stack that is starting to be used. Can be\nundefined in some gameplay scenarios like pushing a button\nwith an empty hand."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"source",children:"source"}),"\n",(0,n.jsxs)(t.p,{children:["\u2022 ",(0,n.jsx)(t.code,{children:"Readonly"})," ",(0,n.jsx)(t.strong,{children:"source"}),": ",(0,n.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/Player",children:(0,n.jsx)(t.code,{children:"Player"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(t.p,{children:"Returns the source entity that triggered this item event."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},c=n.createContext(r);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);