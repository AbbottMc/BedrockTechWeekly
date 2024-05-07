"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61665],{562:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var i=n(74848),s=n(28453);const t={},o="Interface: StructurePlaceOptions",l={id:"sapi/preview/server/interfaces/StructurePlaceOptions",title:"Interface: StructurePlaceOptions",description:"Provides additional options for StructureManager.place",source:"@site/docs/sapi/preview/server/interfaces/StructurePlaceOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/StructurePlaceOptions",permalink:"/docs/sapi/preview/server/interfaces/StructurePlaceOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server/interfaces/StructurePlaceOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"StructureCreateOptions",permalink:"/docs/sapi/preview/server/interfaces/StructureCreateOptions"},next:{title:"TeleportOptions",permalink:"/docs/sapi/preview/server/interfaces/TeleportOptions"}},c={},d=[{value:"Properties",id:"properties",level:2},{value:"animationMode?",id:"animationmode",level:3},{value:"Remarks",id:"remarks",level:4},{value:"animationSeconds?",id:"animationseconds",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"includeBlocks?",id:"includeblocks",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"includeEntities?",id:"includeentities",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"integrity?",id:"integrity",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"integritySeed?",id:"integrityseed",level:3},{value:"Remarks",id:"remarks-5",level:4},{value:"mirror?",id:"mirror",level:3},{value:"Remarks",id:"remarks-6",level:4},{value:"rotation?",id:"rotation",level:3},{value:"Remarks",id:"remarks-7",level:4},{value:"waterlogged?",id:"waterlogged",level:3},{value:"Remarks",id:"remarks-8",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"interface-structureplaceoptions",children:"Interface: StructurePlaceOptions"}),"\n",(0,i.jsxs)(r.p,{children:["Provides additional options for ",(0,i.jsx)(r.a,{href:"/docs/sapi/preview/server/classes/StructureManager#place",children:"StructureManager.place"})]}),"\n",(0,i.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(r.h3,{id:"animationmode",children:"animationMode?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"animationMode"}),": ",(0,i.jsx)(r.a,{href:"/docs/sapi/preview/server/enumerations/StructureAnimationMode",children:(0,i.jsx)(r.code,{children:"StructureAnimationMode"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"How the Structure should be animated when placed."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"animationseconds",children:"animationSeconds?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"animationSeconds"}),": ",(0,i.jsx)(r.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"How many seconds the animation should take."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"includeblocks",children:"includeBlocks?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"includeBlocks"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Whether blocks should be included in the structure. Defaults\nto true."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"includeentities",children:"includeEntities?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"includeEntities"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Whether entities should be included in the structure.\nDefaults to true."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"integrity",children:"integrity?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"integrity"}),": ",(0,i.jsx)(r.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,i.jsxs)(r.p,{children:["What percentage of blocks should be placed. A value of 1\nwill place 100% of the blocks while a value of 0 will place\nnone. The blocks are chosen randomly based on the ",(0,i.jsx)(r.a,{href:"/docs/sapi/preview/server/interfaces/StructurePlaceOptions#integrityseed",children:"StructurePlaceOptions.integritySeed"}),"."]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"integrityseed",children:"integritySeed?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"integritySeed"}),": ",(0,i.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Seed that determines which blocks are randomly chosen to be\nplaced. Defaults to a random seed."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"mirror",children:"mirror?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"mirror"}),": ",(0,i.jsx)(r.a,{href:"/docs/sapi/preview/server/enumerations/StructureMirrorAxis",children:(0,i.jsx)(r.code,{children:"StructureMirrorAxis"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Which axes the Structure should be mirrored on when placed.\nDefaults to StructureMirrorAxis.None."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"rotation",children:"rotation?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"rotation"}),": ",(0,i.jsx)(r.a,{href:"/docs/sapi/preview/server/enumerations/StructureRotation",children:(0,i.jsx)(r.code,{children:"StructureRotation"})})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"How the Structure should be rotated when placed. Defaults to\nAxisAlignedRotation.None."}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"waterlogged",children:"waterlogged?"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"optional"})," ",(0,i.jsx)(r.strong,{children:"waterlogged"}),": ",(0,i.jsx)(r.code,{children:"boolean"})]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,i.jsx)(r.p,{children:"Whether the structure should be waterlogged when placed.\nDefaults to false. If true, blocks will become waterlogged\nwhen placed in water."})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var i=n(96540);const s={},t=i.createContext(s);function o(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);