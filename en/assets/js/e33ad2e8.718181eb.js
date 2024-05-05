"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[85618],{20757:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(74848),i=r(28453);const s={id:"BoundingBox",title:"Interface: BoundingBox",sidebar_label:"BoundingBox",sidebar_position:0,custom_edit_url:null},o=void 0,a={id:"sapi/preview/server/interfaces/BoundingBox",title:"Interface: BoundingBox",description:"A BoundingBox is an interface to an object which represents",source:"@site/docs/sapi/preview/server/interfaces/BoundingBox.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/BoundingBox",permalink:"/en/docs/sapi/preview/server/interfaces/BoundingBox",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BoundingBox",title:"Interface: BoundingBox",sidebar_label:"BoundingBox",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockRaycastOptions",permalink:"/en/docs/sapi/preview/server/interfaces/BlockRaycastOptions"},next:{title:"CameraDefaultOptions",permalink:"/en/docs/sapi/preview/server/interfaces/CameraDefaultOptions"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["A BoundingBox is an interface to an object which represents\nan AABB aligned rectangle.\nThe BoundingBox assumes that it was created in a valid state\n(min <= max) but cannot guarantee it (unless it was created\nusing the associated @minecraft-server.BoundingBoxUtils utility functions.\nThe min/max coordinates represent the diametrically opposite\ncorners of the rectangle.\nThe BoundingBox is not a representation of blocks - it has\nno association with any type, it is just a mathematical\nconstruct - so a rectangle with\n( 0,0,0 ) -> ( 0,0,0 )\nhas a size of ( 0,0,0 ) (unlike the very similar ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/preview/server/classes/BlockVolume",children:"BlockVolume"})," object)"]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"max",children:"max"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"max"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/Vector3",children:(0,t.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(n.p,{children:"A @minecraft-server.Vector3 that represents the\nlargest corner of the rectangle"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"min",children:"min"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"min"}),": ",(0,t.jsx)(n.a,{href:"/en/docs/sapi/preview/server/interfaces/Vector3",children:(0,t.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,t.jsx)(n.p,{children:"A @minecraft-server.Vector3 that represents the\nsmallest corner of the rectangle"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);