"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[63063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"ClipboardManager",title:"Class: ClipboardManager",sidebar_label:"ClipboardManager",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server-editor/classes/ClipboardManager",id:"sapi/stable/server-editor/classes/ClipboardManager",title:"Class: ClipboardManager",description:"The ClipboardManager (accessible from the ExtensionContext) is responsible for the management of all",source:"@site/docs/sapi/stable/server-editor/classes/ClipboardManager.md",sourceDirName:"sapi/stable/server-editor/classes",slug:"/sapi/stable/server-editor/classes/ClipboardManager",permalink:"/docs/sapi/stable/server-editor/classes/ClipboardManager",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ClipboardManager",title:"Class: ClipboardManager",sidebar_label:"ClipboardManager",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ClipboardItem",permalink:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},next:{title:"Cursor",permalink:"/docs/sapi/stable/server-editor/classes/Cursor"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"clipboard",id:"clipboard",level:3},{value:"Methods",id:"methods",level:2},{value:"create",id:"create",level:3},{value:"Returns",id:"returns",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ClipboardManager (accessible from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ExtensionContext"},"ExtensionContext"),") is responsible for the management of all\n",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},"ClipboardItem")," objects, and provides the user the\nability to create new ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},"ClipboardItem")," objects for use\nwithin an extension."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,n.kt)("strong",{parentName:"p"},"new ClipboardManager"),"()"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"clipboard"},"clipboard"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"clipboard"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},(0,n.kt)("inlineCode",{parentName:"a"},"ClipboardItem"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The primary ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},"ClipboardItem")," object is always present\n(even if it's empty) and cannot be deleted.  This object\nrepresents the main ClipboardItem object which is always\naccessible through the UI for cut/paste operations"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This property can throw when used."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"create"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},(0,n.kt)("inlineCode",{parentName:"a"},"ClipboardItem"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Create a new  ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},"ClipboardItem")," object"),(0,n.kt)("p",null,"This function can't be called in read-only mode."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardItem"},(0,n.kt)("inlineCode",{parentName:"a"},"ClipboardItem"))))}d.isMDXComponent=!0}}]);