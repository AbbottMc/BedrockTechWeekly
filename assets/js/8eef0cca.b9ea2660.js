"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97986],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return t?n.createElement(f,s(s({ref:r},d),{},{components:t})):n.createElement(f,s({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64622:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"sapi/stable/server-ui/classes/ModalFormResponse",id:"sapi/stable/server-ui/classes/ModalFormResponse",title:"Class: ModalFormResponse",description:"Returns data about player responses to a modal form.",source:"@site/docs/sapi/stable/server-ui/classes/ModalFormResponse.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/ModalFormResponse",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ModalFormResponse",title:"Class: ModalFormResponse",sidebar_label:"ModalFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ModalFormData",permalink:"/docs/sapi/stable/server-ui/classes/ModalFormData"},next:{title:"FormCancelationReason",permalink:"/docs/sapi/stable/server-ui/enums/FormCancelationReason"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"formValues",id:"formvalues",level:3}],d={toc:p};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns data about player responses to a modal form."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"modalFormSimple.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Player } from '@minecraft/server';\nimport { ModalFormData } from '@minecraft/server-ui';\n\nfunction showExampleModal(player: Player) {\n    const modalForm = new ModalFormData().title('Example Modal Controls for \xa7o\xa77ModalFormData\xa7r');\n\n    modalForm.toggle('Toggle w/o default');\n    modalForm.toggle('Toggle w/ default', true);\n\n    modalForm.slider('Slider w/o default', 0, 50, 5);\n    modalForm.slider('Slider w/ default', 0, 50, 5, 30);\n\n    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);\n    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);\n\n    modalForm.textField('Input w/o default', 'type text here');\n    modalForm.textField('Input w/ default', 'type text here', 'this is default');\n\n    modalForm\n        .show(player)\n        .then(formData => {\n            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n            return -1;\n        });\n}\n")),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse"},(0,a.kt)("inlineCode",{parentName:"a"},"FormResponse"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ModalFormResponse"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new ModalFormResponse"),"()"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse#constructor"},"constructor")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cancelationreason"},"cancelationReason"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"cancelationReason"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/enums/FormCancelationReason"},(0,a.kt)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Contains additional details as to why a form was canceled."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse#cancelationreason"},"cancelationReason")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"canceled"},"canceled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"canceled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-ui/classes/FormResponse#canceled"},"canceled")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"formvalues"},"formValues"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"formValues"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),")[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"An ordered set of values based on the order of controls\nspecified by ModalFormData."))}c.isMDXComponent=!0}}]);