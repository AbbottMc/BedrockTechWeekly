"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"ActionFormResponse",title:"Class: ActionFormResponse",sidebar_label:"ActionFormResponse",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server-ui/classes/ActionFormResponse",id:"sapi/stable/server-ui/classes/ActionFormResponse",title:"Class: ActionFormResponse",description:"Returns data about the player results from a modal action",source:"@site/docs/sapi/stable/server-ui/classes/ActionFormResponse.md",sourceDirName:"sapi/stable/server-ui/classes",slug:"/sapi/stable/server-ui/classes/ActionFormResponse",permalink:"/en/docs/sapi/stable/server-ui/classes/ActionFormResponse",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ActionFormResponse",title:"Class: ActionFormResponse",sidebar_label:"ActionFormResponse",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ActionFormData",permalink:"/en/docs/sapi/stable/server-ui/classes/ActionFormData"},next:{title:"FormRejectError",permalink:"/en/docs/sapi/stable/server-ui/classes/FormRejectError"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"cancelationReason",id:"cancelationreason",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"canceled",id:"canceled",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"selection",id:"selection",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns data about the player results from a modal action\nform."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,o.kt)("p",null,"actionFormAskFavoriteMonth.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Player } from '@minecraft/server';\nimport { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';\n\nfunction askFavoriteMonth(player: Player) {\n    const form = new ActionFormData()\n        .title('Months')\n        .body('Choose your favorite month!')\n        .button('January')\n        .button('February')\n        .button('March')\n        .button('April')\n        .button('May');\n\n    form.show(player).then((response: ActionFormResponse) => {\n        if (response.selection === 3) {\n            player.sendMessage('I like April too!');\n        } else {\n            player.sendMessage('Nah, April is the best.');\n        }\n    });\n}\n")),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse"},(0,o.kt)("inlineCode",{parentName:"a"},"FormResponse"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ActionFormResponse"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"new ActionFormResponse"),"()"),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#constructor"},"constructor")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cancelationreason"},"cancelationReason"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"cancelationReason"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/enums/FormCancelationReason"},(0,o.kt)("inlineCode",{parentName:"a"},"FormCancelationReason"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Contains additional details as to why a form was canceled."),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#cancelationreason"},"cancelationReason")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"canceled"},"canceled"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"canceled"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"If true, the form was canceled by the player (e.g., they\nselected the pop-up X close button)."),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-ui/classes/FormResponse#canceled"},"canceled")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"selection"},"selection"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"selection"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Returns the index of the button that was pushed."))}u.isMDXComponent=!0}}]);