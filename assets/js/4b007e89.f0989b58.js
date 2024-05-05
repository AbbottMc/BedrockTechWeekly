"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[33416],{34523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=r(74848),n=r(28453);const s={id:"BlockLocationIterator",title:"Class: BlockLocationIterator",sidebar_label:"BlockLocationIterator",sidebar_position:0,custom_edit_url:null},c=void 0,i={id:"sapi/stable/server/classes/BlockLocationIterator",title:"Class: BlockLocationIterator",description:"A BlockLocationIterator returns the next block location of",source:"@site/docs/sapi/stable/server/classes/BlockLocationIterator.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockLocationIterator",permalink:"/docs/sapi/stable/server/classes/BlockLocationIterator",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockLocationIterator",title:"Class: BlockLocationIterator",sidebar_label:"BlockLocationIterator",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockLiquidContainerComponent",permalink:"/docs/sapi/stable/server/classes/BlockLiquidContainerComponent"},next:{title:"BlockPermutation",permalink:"/docs/sapi/stable/server/classes/BlockPermutation"}},l={},a=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"[iterator]",id:"iterator",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"next",id:"next",level:3},{value:"Returns",id:"returns-2",level:4}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A BlockLocationIterator returns the next block location of\nthe block volume across which it is iterating.\nThe BlockLocationIterator is used to abstract the shape of\nthe block volume it was fetched from (so it can represent\nall the block locations that make up rectangles, cubes,\nspheres, lines and complex shapes).\nEach iteration pass returns the next valid block location in\nthe parent shape.\nUnless otherwise specified by the parent shape - the\nBlockLocationIterator will iterate over a 3D space in the\norder of increasing X, followed by increasing Z followed by\nincreasing Y.\n(Effectively stepping across the XZ plane, and when all the\nlocations in that plane are exhausted, increasing the Y\ncoordinate to the next XZ slice)"}),"\n",(0,o.jsx)(t.h2,{id:"implements",children:"Implements"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",children:(0,o.jsx)(t.code,{children:"Iterable"})}),"<",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,o.jsx)(t.code,{children:"Vector3"})}),">"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"constructors",children:"Constructors"}),"\n",(0,o.jsx)(t.h3,{id:"constructor",children:"constructor"}),"\n",(0,o.jsxs)(t.p,{children:["\u2022 ",(0,o.jsx)(t.strong,{children:"new BlockLocationIterator"}),"(): ",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,o.jsx)(t.code,{children:"BlockLocationIterator"})})]}),"\n",(0,o.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,o.jsx)(t.code,{children:"BlockLocationIterator"})})}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(t.h3,{id:"iterator",children:"[iterator]"}),"\n",(0,o.jsxs)(t.p,{children:["\u25b8 ",(0,o.jsx)(t.strong,{children:"[iterator]"}),"(): ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",children:(0,o.jsx)(t.code,{children:"Iterator"})}),"<",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,o.jsx)(t.code,{children:"Vector3"})}),", ",(0,o.jsx)(t.code,{children:"any"}),", ",(0,o.jsx)(t.code,{children:"undefined"}),">"]}),"\n",(0,o.jsx)(t.h4,{id:"returns-1",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",children:(0,o.jsx)(t.code,{children:"Iterator"})}),"<",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,o.jsx)(t.code,{children:"Vector3"})}),", ",(0,o.jsx)(t.code,{children:"any"}),", ",(0,o.jsx)(t.code,{children:"undefined"}),">"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,o.jsx)(t.p,{children:"This function can't be called in read-only mode."}),"\n",(0,o.jsx)(t.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,o.jsx)(t.p,{children:"Iterable.[iterator]"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"next",children:"next"}),"\n",(0,o.jsxs)(t.p,{children:["\u25b8 ",(0,o.jsx)(t.strong,{children:"next"}),"(): ",(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",children:(0,o.jsx)(t.code,{children:"IteratorResult"})}),"<",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,o.jsx)(t.code,{children:"Vector3"})}),", ",(0,o.jsx)(t.code,{children:"any"}),">"]}),"\n",(0,o.jsx)(t.h4,{id:"returns-2",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols",children:(0,o.jsx)(t.code,{children:"IteratorResult"})}),"<",(0,o.jsx)(t.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,o.jsx)(t.code,{children:"Vector3"})}),", ",(0,o.jsx)(t.code,{children:"any"}),">"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Remarks"})})}),"\n",(0,o.jsx)(t.p,{children:"This function can't be called in read-only mode."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var o=r(96540);const n={},s=o.createContext(n);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);