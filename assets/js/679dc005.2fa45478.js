"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[31442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),v=a,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},65438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"SelectionManager",title:"Class: SelectionManager",sidebar_label:"SelectionManager",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server-editor/classes/SelectionManager",id:"sapi/preview/server-editor/classes/SelectionManager",title:"Class: SelectionManager",description:"The SelectionManager (accessible from the ExtensionContext) is responsible for the management of all",source:"@site/docs/sapi/preview/server-editor/classes/SelectionManager.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/SelectionManager",permalink:"/docs/sapi/preview/server-editor/classes/SelectionManager",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SelectionManager",title:"Class: SelectionManager",sidebar_label:"SelectionManager",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SelectionEventAfterEvent",permalink:"/docs/sapi/preview/server-editor/classes/SelectionEventAfterEvent"},next:{title:"SettingsManager",permalink:"/docs/sapi/preview/server-editor/classes/SettingsManager"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"selection",id:"selection",level:3},{value:"Methods",id:"methods",level:2},{value:"create",id:"create",level:3},{value:"Returns",id:"returns",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The SelectionManager (accessible from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/ExtensionContext"},"ExtensionContext"),") is responsible for the management of all\n",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," objects, and provides the user the ability\nto create new ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," objects for use within an\nextension."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new SelectionManager"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"selection"},"selection"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"selection"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The primary ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," object is always present (even\nif it's empty) and cannot be deleted.  This object\nrepresents the main selection object which is always\naccessible through the UI, and by default is synchronized\nbetween the client and server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"create"},"create"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"create"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Create a new, empty ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," object"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))))}d.isMDXComponent=!0}}]);