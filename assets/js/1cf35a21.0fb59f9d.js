"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5559],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},g=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=n,u=m["".concat(i,".").concat(d)]||m[d]||y[d]||s;return t?r.createElement(u,l(l({ref:a},g),{},{components:t})):r.createElement(u,l({ref:a},g))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21258:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(58168),n=(t(96540),t(15680));const s={id:"MessageFormData",title:"Class: MessageFormData",sidebar_label:"MessageFormData",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/preview/server-ui/classes/MessageFormData",id:"sapi/preview/server-ui/classes/MessageFormData",title:"Class: MessageFormData",description:"Builds a simple two-button modal dialog.",source:"@site/docs/sapi/preview/server-ui/classes/MessageFormData.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/MessageFormData",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MessageFormData",title:"Class: MessageFormData",sidebar_label:"MessageFormData",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"FormResponse",permalink:"/docs/sapi/preview/server-ui/classes/FormResponse"},next:{title:"MessageFormResponse",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormResponse"}},i={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"body",id:"body",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"button1",id:"button1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"button2",id:"button2",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"show",id:"show",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"title",id:"title",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4}],g={toc:p},m="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(m,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Builds a simple two-button modal dialog."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,n.yg)("p",null,"messageFormSimple.ts"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-typescript"},"import { Player } from '@minecraft/server';\nimport { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';\n\nfunction showMessage(player: Player) {\n    const messageForm = new MessageFormData()\n        .title({ translate: 'permissions.removeplayer' }) // \"Remove player\"\n        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // \"Player 1 or Player 2\"\n        .button1('Player 1')\n        .button2('Player 2');\n\n    messageForm\n        .show(player)\n        .then((formData: MessageFormResponse) => {\n            // player canceled the form, or another dialog was up and open.\n            if (formData.canceled || formData.selection === undefined) {\n                return;\n            }\n\n            player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n        });\n}\n")),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"new MessageFormData"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"body"},"body"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"body"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"bodyText"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Method that sets the body text for the modal form."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"bodyText")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"button1"},"button1"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"button1"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"text"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Method that sets the text for the first button of the\ndialog."),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"text")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"button2"},"button2"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"button2"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"text"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"This method sets the text for the second button on the\ndialog."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"text")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"show"},"show"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"show"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"player"),"): ",(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,n.yg)("inlineCode",{parentName:"a"},"Promise")),"<",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormResponse"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormResponse")),">"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Creates and shows this modal popup form. Returns\nasynchronously when the player confirms or cancels the\ndialog."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"player")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"Player")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Player to show this dialog to.")))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,n.yg)("inlineCode",{parentName:"a"},"Promise")),"<",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormResponse"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormResponse")),">"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"title"},"title"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"title"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"titleText"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"This builder method sets the title for the modal dialog."),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"titleText")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},(0,n.yg)("inlineCode",{parentName:"a"},"MessageFormData"))))}y.isMDXComponent=!0}}]);