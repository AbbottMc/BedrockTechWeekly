"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89214],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"SimpleToolWrapper",title:"Class: SimpleToolWrapper",sidebar_label:"SimpleToolWrapper",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server-editor/classes/SimpleToolWrapper",id:"sapi/preview/server-editor/classes/SimpleToolWrapper",title:"Class: SimpleToolWrapper",description:"A simple class wrapper to inherit in your tool which",source:"@site/docs/sapi/preview/server-editor/classes/SimpleToolWrapper.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/SimpleToolWrapper",permalink:"/docs/sapi/preview/server-editor/classes/SimpleToolWrapper",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SimpleToolWrapper",title:"Class: SimpleToolWrapper",sidebar_label:"SimpleToolWrapper",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SimpleBlockPaletteItem",permalink:"/docs/sapi/preview/server-editor/classes/SimpleBlockPaletteItem"},next:{title:"SimulationState",permalink:"/docs/sapi/preview/server-editor/classes/SimulationState"}},p={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Accessors",id:"accessors",level:2},{value:"session",id:"session",level:3},{value:"Returns",id:"returns",level:4},{value:"simpleTool",id:"simpletool",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"setupSimpleTool",id:"setupsimpletool",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"teardown",id:"teardown",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of",level:4}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A simple class wrapper to inherit in your tool which\ncontains the initialization and storage of the simple tool\ncomponent utility. See one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Simple")," samples to see\nhow to use this class and the wrapper framework"),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/sapi/preview/server-editor/interfaces/IDisposable"},(0,i.kt)("inlineCode",{parentName:"a"},"IDisposable")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new SimpleToolWrapper"),"()"),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"session"},"session"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"session"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.kt)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"never"),">",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.kt)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"never"),">",">"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simpletool"},"simpleTool"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"simpleTool"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/ISimpleTool"},(0,i.kt)("inlineCode",{parentName:"a"},"ISimpleTool"))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/ISimpleTool"},(0,i.kt)("inlineCode",{parentName:"a"},"ISimpleTool"))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"setupsimpletool"},"setupSimpleTool"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"setupSimpleTool"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"session"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"session")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.kt)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"never"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/interfaces/ISimpleToolOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"ISimpleToolOptions")))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"teardown"},"teardown"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"teardown"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Initiates the teardown and cleanup of this disposable item."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/IDisposable"},"IDisposable"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/interfaces/IDisposable#teardown"},"teardown")))}m.isMDXComponent=!0}}]);