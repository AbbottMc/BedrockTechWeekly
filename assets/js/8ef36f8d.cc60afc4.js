"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86472],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"ActionFormData",title:"Class: ActionFormData",sidebar_label:"ActionFormData",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/preview/server-ui/classes/ActionFormData",id:"sapi/preview/server-ui/classes/ActionFormData",title:"Class: ActionFormData",description:"Builds a simple player form with buttons that let the player",source:"@site/docs/sapi/preview/server-ui/classes/ActionFormData.md",sourceDirName:"sapi/preview/server-ui/classes",slug:"/sapi/preview/server-ui/classes/ActionFormData",permalink:"/docs/sapi/preview/server-ui/classes/ActionFormData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ActionFormData",title:"Class: ActionFormData",sidebar_label:"ActionFormData",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"WeatherType",permalink:"/docs/sapi/preview/server/enums/WeatherType"},next:{title:"ActionFormResponse",permalink:"/docs/sapi/preview/server-ui/classes/ActionFormResponse"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"body",id:"body",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"button",id:"button",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"show",id:"show",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"title",id:"title",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Builds a simple player form with buttons that let the player\ntake action."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"actionFormAskFavoriteMonth.ts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Player } from '@minecraft/server';\nimport { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';\n\nfunction askFavoriteMonth(player: Player) {\n    const form = new ActionFormData()\n        .title('Months')\n        .body('Choose your favorite month!')\n        .button('January')\n        .button('February')\n        .button('March')\n        .button('April')\n        .button('May');\n\n    form.show(player).then((response: ActionFormResponse) => {\n        if (response.selection === 3) {\n            player.sendMessage('I like April too!');\n        } else {\n            player.sendMessage('Nah, April is the best.');\n        }\n    });\n}\n")),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new ActionFormData"),"()"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"body"},"body"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"body"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bodyText"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Method that sets the body text for the modal form."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bodyText")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"button"},"button"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"button"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"iconPath?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds a button to this form with an icon from a resource\npack."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"text")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"RawMessage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"iconPath?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"show"},"show"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"show"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"player"),"): ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,n.kt)("inlineCode",{parentName:"a"},"Promise")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormResponse")),">"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Creates and shows this modal popup form. Returns\nasynchronously when the player confirms or cancels the\ndialog."),(0,n.kt)("p",null,"This function can't be called in read-only mode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"player")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Player")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Player to show this dialog to.")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,n.kt)("inlineCode",{parentName:"a"},"Promise")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormResponse"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormResponse")),">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"title"},"title"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"title"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"titleText"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"This builder method sets the title for the modal dialog."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"titleText")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},"RawMessage"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},(0,n.kt)("inlineCode",{parentName:"a"},"ActionFormData"))))}d.isMDXComponent=!0}}]);