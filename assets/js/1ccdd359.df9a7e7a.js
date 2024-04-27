"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"ExtensionContext",title:"Class: ExtensionContext",sidebar_label:"ExtensionContext",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server-editor/classes/ExtensionContext",id:"sapi/stable/server-editor/classes/ExtensionContext",title:"Class: ExtensionContext",description:"The extension context is a native (C++) object created for",source:"@site/docs/sapi/stable/server-editor/classes/ExtensionContext.md",sourceDirName:"sapi/stable/server-editor/classes",slug:"/sapi/stable/server-editor/classes/ExtensionContext",permalink:"/docs/sapi/stable/server-editor/classes/ExtensionContext",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ExtensionContext",title:"Class: ExtensionContext",sidebar_label:"ExtensionContext",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Extension",permalink:"/docs/sapi/stable/server-editor/classes/Extension"},next:{title:"ExtensionContextAfterEvents",permalink:"/docs/sapi/stable/server-editor/classes/ExtensionContextAfterEvents"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"afterEvents",id:"afterevents",level:3},{value:"blockPalette",id:"blockpalette",level:3},{value:"clipboardManager",id:"clipboardmanager",level:3},{value:"cursor",id:"cursor",level:3},{value:"extensionInfo",id:"extensioninfo",level:3},{value:"player",id:"player",level:3},{value:"playtest",id:"playtest",level:3},{value:"selectionManager",id:"selectionmanager",level:3},{value:"settings",id:"settings",level:3},{value:"transactionManager",id:"transactionmanager",level:3},{value:"widgetManager",id:"widgetmanager",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The extension context is a native (C++) object created for\neach registered Editor Extension, when a player connection\nis established with the server.\nA registered extension activation or deactivation closure is\naccompanied by an ","[ExtensionContext]"," object, which provides\na player specific, editor extension specific context.\nThe Extension Context is the main interface to all the bound\nEditor Services.\nAs more player services are added to the editor, they will\nbe exposed through this object"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new ExtensionContext"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"afterevents"},"afterEvents"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"afterEvents"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ExtensionContextAfterEvents"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtensionContextAfterEvents"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Contains a set of events that are applicable to the editor\nplayer.  Event callbacks are called in a deferred manner.\nEvent callbacks are executed in read-write mode."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockpalette"},"blockPalette"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"blockPalette"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/BlockPaletteManager"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockPaletteManager"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"clipboardmanager"},"clipboardManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"clipboardManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/ClipboardManager"},(0,r.kt)("inlineCode",{parentName:"a"},"ClipboardManager"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This is used to access the players Clipboard Manager and the\nmain interface through which the player can create, modify\nand apply clipboard items"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cursor"},"cursor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"cursor"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/Cursor"},(0,r.kt)("inlineCode",{parentName:"a"},"Cursor"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This is used to access the players 3D block cursor and it's\nproperties"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"extensioninfo"},"extensionInfo"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"extensionInfo"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/Extension"},(0,r.kt)("inlineCode",{parentName:"a"},"Extension"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Contains information about the registered extension\ninstance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"player"},"player"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"player"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Player")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The current player which is the subject of the extension\ninvocation"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playtest"},"playtest"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"playtest"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/PlaytestManager"},(0,r.kt)("inlineCode",{parentName:"a"},"PlaytestManager"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"selectionmanager"},"selectionManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"selectionManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/SelectionManager"},(0,r.kt)("inlineCode",{parentName:"a"},"SelectionManager"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The instance of the players Selection Manager and the main\ninterface through which the player can create/modify\nselections"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settings"},"settings"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"settings"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/SettingsManager"},(0,r.kt)("inlineCode",{parentName:"a"},"SettingsManager"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The instance of the players Settings Manager and the\ncontract through which the settings for the player can be\nmodified."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionmanager"},"transactionManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"transactionManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/TransactionManager"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionManager"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The instance of the players Transaction Manager and the main\ninterface through which the creator can create transaction\nrecords, and undo/redo previous transactions"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"widgetmanager"},"widgetManager"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"widgetManager"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server-editor/classes/WidgetManager"},(0,r.kt)("inlineCode",{parentName:"a"},"WidgetManager"))))}d.isMDXComponent=!0}}]);