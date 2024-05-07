"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9116],{57729:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var r=l(74848),n=l(28453);const t={},d="Class: ModalFormData",i={id:"sapi/stable/server-ui/classes/ModalFormData",title:"Class: ModalFormData",description:"Used to create a fully customizable pop-up form for a",source:"@site/docs/sapi/stable/server-ui/classes/ModalFormData.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/ModalFormData",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormData",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server-ui/classes/ModalFormData.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"MessageFormResponse",permalink:"/docs/sapi/stable/server-ui/classes/MessageFormResponse"},next:{title:"ModalFormResponse",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormResponse"}},a={},o=[{value:"Example",id:"example",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ModalFormData()",id:"new-modalformdata",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"dropdown()",id:"dropdown",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks",level:4},{value:"show()",id:"show",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-1",level:4},{value:"Throws",id:"throws",level:4},{value:"slider()",id:"slider",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Remarks",id:"remarks-2",level:4},{value:"submitButton()",id:"submitbutton",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"textField()",id:"textfield",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Remarks",id:"remarks-3",level:4},{value:"title()",id:"title",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Remarks",id:"remarks-4",level:4},{value:"toggle()",id:"toggle",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Remarks",id:"remarks-5",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-modalformdata",children:"Class: ModalFormData"}),"\n",(0,r.jsx)(s.p,{children:"Used to create a fully customizable pop-up form for a\nplayer."}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"import { Player } from '@minecraft/server';\nimport { ModalFormData } from '@minecraft/server-ui';\n\nfunction showExampleModal(player: Player) {\n    const modalForm = new ModalFormData().title('Example Modal Controls for \xa7o\xa77ModalFormData\xa7r');\n\n    modalForm.toggle('Toggle w/o default');\n    modalForm.toggle('Toggle w/ default', true);\n\n    modalForm.slider('Slider w/o default', 0, 50, 5);\n    modalForm.slider('Slider w/ default', 0, 50, 5, 30);\n\n    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);\n    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);\n\n    modalForm.textField('Input w/o default', 'type text here');\n    modalForm.textField('Input w/ default', 'type text here', 'this is default');\n\n    modalForm\n        .show(player)\n        .then(formData => {\n            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n            return -1;\n        });\n}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-modalformdata",children:"new ModalFormData()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new ModalFormData"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"dropdown",children:"dropdown()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"dropdown"}),"(",(0,r.jsx)(s.code,{children:"label"}),", ",(0,r.jsx)(s.code,{children:"options"}),", ",(0,r.jsx)(s.code,{children:"defaultValueIndex"}),"?): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"label"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"options"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"}),")[]"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"defaultValueIndex"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Adds a dropdown with choices to the form."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"show",children:"show()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"show"}),"(",(0,r.jsx)(s.code,{children:"player"}),"): ",(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,r.jsx)(s.code,{children:"Promise \u2197\ufe0f"})})," <",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,r.jsx)(s.code,{children:"ModalFormResponse"})}),">"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"player"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"Player"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Player to show this dialog to."})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,r.jsx)(s.code,{children:"Promise \u2197\ufe0f"})})," <",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,r.jsx)(s.code,{children:"ModalFormResponse"})}),">"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Creates and shows this modal popup form. Returns\nasynchronously when the player confirms or cancels the\ndialog."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"slider",children:"slider()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"slider"}),"(",(0,r.jsx)(s.code,{children:"label"}),", ",(0,r.jsx)(s.code,{children:"minimumValue"}),", ",(0,r.jsx)(s.code,{children:"maximumValue"}),", ",(0,r.jsx)(s.code,{children:"valueStep"}),", ",(0,r.jsx)(s.code,{children:"defaultValue"}),"?): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"label"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"minimumValue"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"maximumValue"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"valueStep"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"defaultValue"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"number"})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Adds a numeric slider to the form."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"submitbutton",children:"submitButton()"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"Beta"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"submitButton"}),"(",(0,r.jsx)(s.code,{children:"submitButtonText"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"submitButtonText"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"textfield",children:"textField()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"textField"}),"(",(0,r.jsx)(s.code,{children:"label"}),", ",(0,r.jsx)(s.code,{children:"placeholderText"}),", ",(0,r.jsx)(s.code,{children:"defaultValue"}),"?): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"label"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"placeholderText"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"defaultValue"}),"?"]}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Adds a textbox to the form."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"title",children:"title()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"title"}),"(",(0,r.jsx)(s.code,{children:"titleText"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"titleText"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"This builder method sets the title for the modal dialog."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"toggle",children:"toggle()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"toggle"}),"(",(0,r.jsx)(s.code,{children:"label"}),", ",(0,r.jsx)(s.code,{children:"defaultValue"}),"?): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"label"})}),(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"string"})," | ",(0,r.jsx)(s.code,{children:"RawMessage"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,r.jsx)(s.code,{children:"defaultValue"}),"?"]}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"boolean"})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,r.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Adds a toggle checkbox button to the form."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>d,x:()=>i});var r=l(96540);const n={},t=r.createContext(n);function d(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);