"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46749],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var a=n(96540);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,s=function(e,r){if(null==e)return{};var n,a,s={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var r=a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,s=e.mdxType,t=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||t;return n?a.createElement(y,o(o({ref:r},c),{},{components:n})):a.createElement(y,o({ref:r},c))}));function y(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var t=n.length,o=new Array(t);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<t;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2529:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var a=n(58168),s=(n(96540),n(15680));const t={id:"MessageFormResponse",title:"Class: MessageFormResponse",sidebar_label:"MessageFormResponse",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server-ui/classes/MessageFormResponse",id:"sapi/preview/server-ui/classes/MessageFormResponse",title:"Class: MessageFormResponse",description:"Returns data about the player results from a modal message",source:"@site/docs/sapi/preview/server-ui/classes/MessageFormResponse.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/MessageFormResponse",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MessageFormResponse",title:"Class: MessageFormResponse",sidebar_label:"MessageFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"MessageFormData",permalink:"/docs/sapi/preview/server-ui/classes/MessageFormData"},next:{title:"ModalFormData",permalink:"/docs/sapi/preview/server-ui/classes/ModalFormData"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"selection",id:"selection",level:3}],c={toc:p},m="wrapper";function u(e){let{components:r,...n}=e;return(0,s.yg)(m,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Returns data about the player results from a modal message\nform."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,s.yg)("p",null,"messageFormSimple.ts"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-typescript"},"import { Player } from '@minecraft/server';\nimport { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';\n\nfunction showMessage(player: Player) {\n    const messageForm = new MessageFormData()\n        .title({ translate: 'permissions.removeplayer' }) // \"Remove player\"\n        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // \"Player 1 or Player 2\"\n        .button1('Player 1')\n        .button2('Player 2');\n\n    messageForm\n        .show(player)\n        .then((formData: MessageFormResponse) => {\n            // player canceled the form, or another dialog was up and open.\n            if (formData.canceled || formData.selection === undefined) {\n                return;\n            }\n\n            player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);\n        })\n        .catch((error: Error) => {\n            player.sendMessage('Failed to show form: ' + error);\n        });\n}\n")),(0,s.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},(0,s.yg)("inlineCode",{parentName:"a"},"FormResponse"))),(0,s.yg)("p",{parentName:"li"},"\u21b3 ",(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"MessageFormResponse"))))),(0,s.yg)("h2",{id:"constructors"},"Constructors"),(0,s.yg)("h3",{id:"constructor"},"constructor"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,s.yg)("strong",{parentName:"p"},"new MessageFormResponse"),"()"),(0,s.yg)("h4",{id:"overrides"},"Overrides"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#constructor"},"constructor")),(0,s.yg)("h2",{id:"properties"},"Properties"),(0,s.yg)("h3",{id:"cancelationreason"},"cancelationReason"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"cancelationReason"),": ",(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/enums/FormCancelationReason"},(0,s.yg)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"Contains additional details as to why a form was canceled."),(0,s.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#cancelationreason"},"cancelationReason")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"canceled"},"canceled"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"canceled"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"boolean")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."),(0,s.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse"),".",(0,s.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/FormResponse#canceled"},"canceled")),(0,s.yg)("hr",null),(0,s.yg)("h3",{id:"selection"},"selection"),(0,s.yg)("p",null,"\u2022 ",(0,s.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,s.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.yg)("strong",{parentName:"p"},"selection"),": ",(0,s.yg)("inlineCode",{parentName:"p"},"number")),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},(0,s.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.yg)("p",null,"Returns the index of the button that was pushed."))}u.isMDXComponent=!0}}]);