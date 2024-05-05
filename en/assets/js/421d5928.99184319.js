"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[7630],{72328:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=s(74848),o=s(28453);const l={id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},i=void 0,a={id:"sapi/preview/server-ui/classes/ModalFormResponse",title:"Class: ModalFormResponse",description:"Returns data about player responses to a modal form.",source:"@site/docs/sapi/preview/server-ui/classes/ModalFormResponse.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/ModalFormResponse",permalink:"/en/docs/sapi/preview/server-ui/classes/ModalFormResponse",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ModalFormData",permalink:"/en/docs/sapi/preview/server-ui/classes/ModalFormData"},next:{title:"FormCancelationReason",permalink:"/en/docs/sapi/preview/server-ui/enums/FormCancelationReason"}},d={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"formValues",id:"formvalues",level:3}];function t(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Returns data about player responses to a modal form."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Example"})})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"import { Player } from '@minecraft/server';\nimport { ModalFormData } from '@minecraft/server-ui';\n\nfunction showExampleModal(player: Player) {\n    const modalForm = new ModalFormData().title('Example Modal Controls for \xa7o\xa77ModalFormData\xa7r');\n\n    modalForm.toggle('Toggle w/o default');\n    modalForm.toggle('Toggle w/ default', true);\n\n    modalForm.slider('Slider w/o default', 0, 50, 5);\n    modalForm.slider('Slider w/ default', 0, 50, 5, 30);\n\n    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);\n    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);\n\n    modalForm.textField('Input w/o default', 'type text here');\n    modalForm.textField('Input w/ default', 'type text here', 'this is default');\n\n    modalForm\n        .show(player)\n        .then(formData => {\n            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n            return -1;\n        });\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse",children:(0,n.jsx)(r.code,{children:"FormResponse"})})}),"\n",(0,n.jsxs)(r.p,{children:["\u21b3 ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"ModalFormResponse"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(r.h3,{id:"constructor",children:"constructor"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.strong,{children:"new ModalFormResponse"}),"(): ",(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(r.code,{children:"ModalFormResponse"})})]}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(r.code,{children:"ModalFormResponse"})})}),"\n",(0,n.jsx)(r.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse",children:"FormResponse"}),".",(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse#constructor",children:"constructor"})]}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"cancelationreason",children:"cancelationReason"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.code,{children:"Readonly"})," ",(0,n.jsx)(r.strong,{children:"cancelationReason"}),": ",(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/enums/FormCancelationReason",children:(0,n.jsx)(r.code,{children:"FormCancelationReason"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(r.p,{children:"Contains additional details as to why a form was canceled."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse",children:"FormResponse"}),".",(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse#cancelationreason",children:"cancelationReason"})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"canceled",children:"canceled"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.code,{children:"Readonly"})," ",(0,n.jsx)(r.strong,{children:"canceled"}),": ",(0,n.jsx)(r.code,{children:"boolean"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(r.p,{children:"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."}),"\n",(0,n.jsx)(r.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse",children:"FormResponse"}),".",(0,n.jsx)(r.a,{href:"/en/docs/sapi/preview/server-ui/classes/FormResponse#canceled",children:"canceled"})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"formvalues",children:"formValues"}),"\n",(0,n.jsxs)(r.p,{children:["\u2022 ",(0,n.jsx)(r.code,{children:"Optional"})," ",(0,n.jsx)(r.code,{children:"Readonly"})," ",(0,n.jsx)(r.strong,{children:"formValues"}),": (",(0,n.jsx)(r.code,{children:"string"})," | ",(0,n.jsx)(r.code,{children:"number"})," | ",(0,n.jsx)(r.code,{children:"boolean"}),")[]"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"Remarks"})})}),"\n",(0,n.jsx)(r.p,{children:"An ordered set of values based on the order of controls\nspecified by ModalFormData."})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var n=s(96540);const o={},l=n.createContext(o);function i(e){const r=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);