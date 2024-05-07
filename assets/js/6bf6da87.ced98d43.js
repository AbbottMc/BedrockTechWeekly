"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32833],{28112:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(74848),t=n(28453);const l={},i="Class: BrushShapeManager",d={id:"sapi/preview/server-editor/classes/BrushShapeManager",title:"Class: BrushShapeManager",description:"Constructors",source:"@site/docs/sapi/preview/server-editor/classes/BrushShapeManager.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/BrushShapeManager",permalink:"/docs/sapi/preview/server-editor/classes/BrushShapeManager",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server-editor/classes/BrushShapeManager.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"BlockPaletteManager",permalink:"/docs/sapi/preview/server-editor/classes/BlockPaletteManager"},next:{title:"ClipboardItem",permalink:"/docs/sapi/preview/server-editor/classes/ClipboardItem"}},h={},c=[{value:"Constructors",id:"constructors",level:2},{value:"new BrushShapeManager()",id:"new-brushshapemanager",level:3},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"activeBrushShape?",id:"activebrushshape",level:3},{value:"activeBrushVolume?",id:"activebrushvolume",level:3},{value:"brushShapeNames",id:"brushshapenames",level:3},{value:"Methods",id:"methods",level:2},{value:"activateBrushShape()",id:"activatebrushshape",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks",level:4},{value:"Throws",id:"throws",level:4},{value:"getSettingsUIElements()",id:"getsettingsuielements",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-1",level:4},{value:"Throws",id:"throws-1",level:4},{value:"registerBrushShape()",id:"registerbrushshape",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Remarks",id:"remarks-2",level:4},{value:"Throws",id:"throws-2",level:4},{value:"uiSettingValueChanged()",id:"uisettingvaluechanged",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Remarks",id:"remarks-3",level:4},{value:"Throws",id:"throws-3",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-brushshapemanager",children:"Class: BrushShapeManager"}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-brushshapemanager",children:"new BrushShapeManager()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"private"})," ",(0,r.jsx)(s.strong,{children:"new BrushShapeManager"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/classes/BrushShapeManager",children:(0,r.jsx)(s.code,{children:"BrushShapeManager"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/classes/BrushShapeManager",children:(0,r.jsx)(s.code,{children:"BrushShapeManager"})})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"activebrushshape",children:"activeBrushShape?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"activeBrushShape"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/interfaces/BrushShape",children:(0,r.jsx)(s.code,{children:"BrushShape"})})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"activebrushvolume",children:"activeBrushVolume?"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"optional"})," ",(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"activeBrushVolume"}),": ",(0,r.jsx)(s.code,{children:"CompoundBlockVolume"})]}),"\n"]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"brushshapenames",children:"brushShapeNames"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"readonly"})," ",(0,r.jsx)(s.strong,{children:"brushShapeNames"}),": ",(0,r.jsx)(s.code,{children:"string"}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"activatebrushshape",children:"activateBrushShape()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"activateBrushShape"}),"(",(0,r.jsx)(s.code,{children:"name"}),"): ",(0,r.jsx)(s.code,{children:"CompoundBlockVolume"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"CompoundBlockVolume"})}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getsettingsuielements",children:"getSettingsUIElements()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getSettingsUIElements"}),"(",(0,r.jsx)(s.code,{children:"brushName"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/classes/SettingsUIElement",children:(0,r.jsx)(s.code,{children:"SettingsUIElement"})}),"[]"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"brushName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/classes/SettingsUIElement",children:(0,r.jsx)(s.code,{children:"SettingsUIElement"})}),"[]"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws-1",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"registerbrushshape",children:"registerBrushShape()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"registerBrushShape"}),"(",(0,r.jsx)(s.code,{children:"name"}),", ",(0,r.jsx)(s.code,{children:"icon"}),", ",(0,r.jsx)(s.code,{children:"rebuild"}),", ",(0,r.jsx)(s.code,{children:"getSettingsUIElements"}),"): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"icon"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"rebuild"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["() => ",(0,r.jsx)(s.code,{children:"CompoundBlockVolume"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"getSettingsUIElements"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["() => ",(0,r.jsx)(s.a,{href:"/docs/sapi/preview/server-editor/classes/SettingsUIElement",children:(0,r.jsx)(s.code,{children:"SettingsUIElement"})}),"[]"]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws-2",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"uisettingvaluechanged",children:"uiSettingValueChanged()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"uiSettingValueChanged"}),"(",(0,r.jsx)(s.code,{children:"elementName"}),", ",(0,r.jsx)(s.code,{children:"newValue"}),"): ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"elementName"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"string"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"newValue"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"number"})," | ",(0,r.jsx)(s.code,{children:"boolean"})," | ",(0,r.jsx)(s.code,{children:"Vector3"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws-3",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var r=n(96540);const t={},l=r.createContext(t);function i(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);