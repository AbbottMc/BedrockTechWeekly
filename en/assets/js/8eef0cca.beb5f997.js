"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[588],{20654:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var n=r(74848),o=r(28453);const l={},a="Class: ModalFormResponse",d={id:"sapi/stable/server-ui/classes/ModalFormResponse",title:"Class: ModalFormResponse",description:"Returns data about player responses to a modal form.",source:"@site/docs/sapi/stable/server-ui/classes/ModalFormResponse.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/ModalFormResponse",permalink:"/en/docs/sapi/stable/server-ui/classes/ModalFormResponse",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server-ui/classes/ModalFormResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"ModalFormData",permalink:"/en/docs/sapi/stable/server-ui/classes/ModalFormData"},next:{title:"SecretString",permalink:"/en/docs/sapi/stable/server-admin/classes/SecretString"}},i={},t=[{value:"Example",id:"example",level:2},{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new ModalFormResponse()",id:"new-modalformresponse",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cancelationReason?",id:"cancelationreason",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"formValues?",id:"formvalues",level:3},{value:"Remarks",id:"remarks-2",level:4}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"class-modalformresponse",children:"Class: ModalFormResponse"}),"\n",(0,n.jsx)(s.p,{children:"Returns data about player responses to a modal form."}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"import { Player } from '@minecraft/server';\nimport { ModalFormData } from '@minecraft/server-ui';\n\nfunction showExampleModal(player: Player) {\n    const modalForm = new ModalFormData().title('Example Modal Controls for \xa7o\xa77ModalFormData\xa7r');\n\n    modalForm.toggle('Toggle w/o default');\n    modalForm.toggle('Toggle w/ default', true);\n\n    modalForm.slider('Slider w/o default', 0, 50, 5);\n    modalForm.slider('Slider w/ default', 0, 50, 5, 30);\n\n    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);\n    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);\n\n    modalForm.textField('Input w/o default', 'type text here');\n    modalForm.textField('Input w/ default', 'type text here', 'this is default');\n\n    modalForm\n        .show(player)\n        .then(formData => {\n            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n            return -1;\n        });\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse",children:(0,n.jsx)(s.code,{children:"FormResponse"})})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,n.jsx)(s.h3,{id:"new-modalformresponse",children:"new ModalFormResponse()"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"private"})," ",(0,n.jsx)(s.strong,{children:"new ModalFormResponse"}),"(): ",(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(s.code,{children:"ModalFormResponse"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/ModalFormResponse",children:(0,n.jsx)(s.code,{children:"ModalFormResponse"})})}),"\n",(0,n.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse",children:(0,n.jsx)(s.code,{children:"FormResponse"})})," . ",(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#constructors",children:(0,n.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,n.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(s.h3,{id:"cancelationreason",children:"cancelationReason?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"cancelationReason"}),": ",(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/enumerations/FormCancelationReason",children:(0,n.jsx)(s.code,{children:"FormCancelationReason"})})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"Contains additional details as to why a form was canceled."}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse",children:(0,n.jsx)(s.code,{children:"FormResponse"})})," . ",(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#cancelationreason",children:(0,n.jsx)(s.code,{children:"cancelationReason"})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"canceled",children:"canceled"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"canceled"}),": ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."}),"\n",(0,n.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse",children:(0,n.jsx)(s.code,{children:"FormResponse"})})," . ",(0,n.jsx)(s.a,{href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#canceled",children:(0,n.jsx)(s.code,{children:"canceled"})})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"formvalues",children:"formValues?"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"optional"})," ",(0,n.jsx)(s.code,{children:"readonly"})," ",(0,n.jsx)(s.strong,{children:"formValues"}),": (",(0,n.jsx)(s.code,{children:"string"})," | ",(0,n.jsx)(s.code,{children:"number"})," | ",(0,n.jsx)(s.code,{children:"boolean"}),")[]"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"An ordered set of values based on the order of controls\nspecified by ModalFormData."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>d});var n=r(96540);const o={},l=n.createContext(o);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);