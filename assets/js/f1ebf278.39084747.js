"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9116],{57729:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var n=l(74848),r=l(28453);const t={id:"ModalFormData",title:"Class: ModalFormData",sidebar_label:"ModalFormData",sidebar_position:0,custom_edit_url:null},d=void 0,i={id:"sapi/stable/server-ui/classes/ModalFormData",title:"Class: ModalFormData",description:"Used to create a fully customizable pop-up form for a",source:"@site/docs/sapi/stable/server-ui/classes/ModalFormData.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/ModalFormData",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormData",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModalFormData",title:"Class: ModalFormData",sidebar_label:"ModalFormData",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"MessageFormResponse",permalink:"/docs/sapi/stable/server-ui/classes/MessageFormResponse"},next:{title:"ModalFormResponse",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormResponse"}},a={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"dropdown",id:"dropdown",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"show",id:"show",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"slider",id:"slider",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"submitButton",id:"submitbutton",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"textField",id:"textfield",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"title",id:"title",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"toggle",id:"toggle",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Used to create a fully customizable pop-up form for a\nplayer."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Example"})})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Player } from '@minecraft/server';\nimport { ModalFormData } from '@minecraft/server-ui';\n\nfunction showExampleModal(player: Player) {\n    const modalForm = new ModalFormData().title('Example Modal Controls for \xa7o\xa77ModalFormData\xa7r');\n\n    modalForm.toggle('Toggle w/o default');\n    modalForm.toggle('Toggle w/ default', true);\n\n    modalForm.slider('Slider w/o default', 0, 50, 5);\n    modalForm.slider('Slider w/ default', 0, 50, 5, 30);\n\n    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);\n    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);\n\n    modalForm.textField('Input w/o default', 'type text here');\n    modalForm.textField('Input w/ default', 'type text here', 'this is default');\n\n    modalForm\n        .show(player)\n        .then(formData => {\n            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n            return -1;\n        });\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(s.p,{children:["\u2022 ",(0,n.jsx)(s.strong,{children:"new ModalFormData"}),"(): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"dropdown",children:"dropdown"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"dropdown"}),"(",(0,n.jsx)(s.code,{children:"label"}),", ",(0,n.jsx)(s.code,{children:"options"}),", ",(0,n.jsx)(s.code,{children:"defaultValueIndex?"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"label"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"}),")[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"defaultValueIndex?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"Adds a dropdown with choices to the form."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"show",children:"show"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"show"}),"(",(0,n.jsx)(s.code,{children:"player"}),"): ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,n.jsx)(s.code,{children:"Promise"})}),"<",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(s.code,{children:"ModalFormResponse"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"player"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Player"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"Player to show this dialog to."})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,n.jsx)(s.code,{children:"Promise"})}),"<",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(s.code,{children:"ModalFormResponse"})}),">"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"Creates and shows this modal popup form. Returns\nasynchronously when the player confirms or cancels the\ndialog."}),"\n",(0,n.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Throws"})})}),"\n",(0,n.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"slider",children:"slider"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"slider"}),"(",(0,n.jsx)(s.code,{children:"label"}),", ",(0,n.jsx)(s.code,{children:"minimumValue"}),", ",(0,n.jsx)(s.code,{children:"maximumValue"}),", ",(0,n.jsx)(s.code,{children:"valueStep"}),", ",(0,n.jsx)(s.code,{children:"defaultValue?"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"label"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"minimumValue"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"maximumValue"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"valueStep"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"defaultValue?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"number"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"Adds a numeric slider to the form."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"submitbutton",children:"submitButton"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"submitButton"}),"(",(0,n.jsx)(s.code,{children:"submitButtonText"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"submitButtonText"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"textfield",children:"textField"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"textField"}),"(",(0,n.jsx)(s.code,{children:"label"}),", ",(0,n.jsx)(s.code,{children:"placeholderText"}),", ",(0,n.jsx)(s.code,{children:"defaultValue?"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"label"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"placeholderText"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"defaultValue?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"Adds a textbox to the form."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"title",children:"title"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"title"}),"(",(0,n.jsx)(s.code,{children:"titleText"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"titleText"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"This builder method sets the title for the modal dialog."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"toggle",children:"toggle"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"toggle"}),"(",(0,n.jsx)(s.code,{children:"label"}),", ",(0,n.jsx)(s.code,{children:"defaultValue?"}),"): ",(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"label"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"RawMessage"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"defaultValue?"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"boolean"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/sapi/stable/server-ui/classes/ModalFormData",children:(0,n.jsx)(s.code,{children:"ModalFormData"})})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(s.p,{children:"Adds a toggle checkbox button to the form."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,s,l)=>{l.d(s,{R:()=>d,x:()=>i});var n=l(96540);const r={},t=n.createContext(r);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);