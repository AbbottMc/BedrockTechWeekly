"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27091],{61976:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=o(74848),s=o(28453);const t={},i="Enumeration: CursorControlMode",d={id:"sapi/preview/server-editor/enumerations/CursorControlMode",title:"Enumeration: CursorControlMode",description:"An enumeration used by the 3D block cursor Cursor",source:"@site/docs/sapi/preview/server-editor/enumerations/CursorControlMode.md",sourceDirName:"sapi/preview/server-editor/enumerations",slug:"/sapi/preview/server-editor/enumerations/CursorControlMode",permalink:"/docs/sapi/preview/server-editor/enumerations/CursorControlMode",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server-editor/enumerations/CursorControlMode.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"CoreMenuType",permalink:"/docs/sapi/preview/server-editor/enumerations/CoreMenuType"},next:{title:"CursorTargetMode",permalink:"/docs/sapi/preview/server-editor/enumerations/CursorTargetMode"}},l={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Fixed",id:"fixed",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Keyboard",id:"keyboard",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"KeyboardAndMouse",id:"keyboardandmouse",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"Mouse",id:"mouse",level:3},{value:"Remarks",id:"remarks-3",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"enumeration-cursorcontrolmode",children:"Enumeration: CursorControlMode"}),"\n",(0,n.jsxs)(r.p,{children:["An enumeration used by the 3D block cursor ",(0,n.jsx)(r.a,{href:"/docs/sapi/preview/server-editor/classes/Cursor",children:"Cursor"})]}),"\n",(0,n.jsx)(r.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,n.jsx)(r.h3,{id:"fixed",children:"Fixed"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Fixed"}),": ",(0,n.jsx)(r.code,{children:"3"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"When in fixed mode, the 3D block cursor will remain in a\nfixed position directly in front of the players facing\ndirection.  It cannot be moved without moving the player (or\nadjusting the fixed block distance).\nThis mode is useful for addressing block locations in the\nair (put the cursor into fixed mode, and fly the player\nuntil the desired air block is beneath the cursor, at which\npoint it is selectable without being clickable)"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"keyboard",children:"Keyboard"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Keyboard"}),": ",(0,n.jsx)(r.code,{children:"0"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Using Keyboard mode will remove the dependence of the 3D\nblock cursor on the player mouse position.  The 3D block\ncursor can be positioned using the keyboard (or the Cursor\nmove methods on the cursor object) and the position will not\nbe reset if the mouse is moved"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"keyboardandmouse",children:"KeyboardAndMouse"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"KeyboardAndMouse"}),": ",(0,n.jsx)(r.code,{children:"2"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"This is generally the default move mode for the 3D block\ncursor.\nThe 3D block cursor can be positioned using the keyboard (or\nthe Cursor move methods on the cursor object) but the\nposition will be reset to the block location under the\nplayers mouse position if any mouse movement is detected."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"mouse",children:"Mouse"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Mouse"}),": ",(0,n.jsx)(r.code,{children:"1"})]}),"\n"]}),"\n",(0,n.jsx)(r.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"The Mouse movement mode will disable keyboard or manual 3D\nblock cursor movement and make the 3D block cursor only\nreact to player mouse movement"})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var n=o(96540);const s={},t=n.createContext(s);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);