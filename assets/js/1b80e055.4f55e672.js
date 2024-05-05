"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[35299],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,y=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(58168),o=(n(96540),n(15680));const i={id:"Extension",title:"Class: Extension",sidebar_label:"Extension",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/stable/server-editor/classes/Extension",id:"sapi/stable/server-editor/classes/Extension",title:"Class: Extension",description:"Editor Extensions are the basis for all player specific,",source:"@site/docs/sapi/stable/server-editor/classes/Extension.md",sourceDirName:"sapi/stable/server-editor/classes",slug:"/sapi/stable/server-editor/classes/Extension",permalink:"/docs/sapi/stable/server-editor/classes/Extension",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Extension",title:"Class: Extension",sidebar_label:"Extension",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"CustomWidgetMoveEventData",permalink:"/docs/sapi/stable/server-editor/classes/CustomWidgetMoveEventData"},next:{title:"ExtensionContext",permalink:"/docs/sapi/stable/server-editor/classes/ExtensionContext"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"defaultToolGroupId",id:"defaulttoolgroupid",level:3},{value:"description",id:"description",level:3},{value:"name",id:"name",level:3},{value:"notes",id:"notes",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Editor Extensions are the basis for all player specific,\neditor specific functionality within the game.  Almost all\neditor functionality is exported and available within the\ncontext of an ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ExtensionContext"},"ExtensionContext"),"\nWhen the script manager initializes during level loading,\nthe scripts are loaded from the behavior packs and executed.\nAs part of the global execution context, the scripts are\nfree to register any number of extensions.\nAn Editor Extension is defined a name, an activation\nfunction and a shutdown function."),(0,o.yg)("p",null,"It is not recommended to directly use this function as the\ncontract is not guaranteed to be stable, instead prefer\n",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/modules#registereditorextension"},"registerEditorExtension")," as it provides additional\nfunctionality and a stable contract."),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new Extension"),"()"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"defaulttoolgroupid"},"defaultToolGroupId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"defaultToolGroupId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Default identifier for tool rail grouping. All modal tools\ncreated from the extension will use this."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"description"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Description specified during registration for the extension."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"name"},"name"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"name"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Name of the extension."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"notes"},"notes"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"notes"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Notes specified during registration for the extension."))}u.isMDXComponent=!0}}]);