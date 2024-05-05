"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89579],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>y});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,y=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2063:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(58168),i=(t(96540),t(15680));const a={id:"SimpleToolWrapper",title:"Class: SimpleToolWrapper",sidebar_label:"SimpleToolWrapper",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server-editor/classes/SimpleToolWrapper",id:"sapi/preview/server-editor/classes/SimpleToolWrapper",title:"Class: SimpleToolWrapper",description:"A simple class wrapper to inherit in your tool which",source:"@site/docs/sapi/preview/server-editor/classes/SimpleToolWrapper.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/SimpleToolWrapper",permalink:"/en/docs/sapi/preview/server-editor/classes/SimpleToolWrapper",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SimpleToolWrapper",title:"Class: SimpleToolWrapper",sidebar_label:"SimpleToolWrapper",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SimpleBlockPaletteItem",permalink:"/en/docs/sapi/preview/server-editor/classes/SimpleBlockPaletteItem"},next:{title:"SimulationState",permalink:"/en/docs/sapi/preview/server-editor/classes/SimulationState"}},p={},s=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Accessors",id:"accessors",level:2},{value:"session",id:"session",level:3},{value:"Returns",id:"returns",level:4},{value:"simpleTool",id:"simpletool",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods",level:2},{value:"setupSimpleTool",id:"setupsimpletool",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-2",level:4},{value:"teardown",id:"teardown",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of",level:4}],d={toc:s},m="wrapper";function c(e){let{components:r,...t}=e;return(0,i.yg)(m,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"A simple class wrapper to inherit in your tool which\ncontains the initialization and storage of the simple tool\ncomponent utility. See one of the ",(0,i.yg)("inlineCode",{parentName:"p"},"Simple")," samples to see\nhow to use this class and the wrapper framework"),(0,i.yg)("h2",{id:"implements"},"Implements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/en/docs/sapi/preview/server-editor/interfaces/IDisposable"},(0,i.yg)("inlineCode",{parentName:"a"},"IDisposable")))),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"new SimpleToolWrapper"),"()"),(0,i.yg)("h2",{id:"accessors"},"Accessors"),(0,i.yg)("h3",{id:"session"},"session"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"get")," ",(0,i.yg)("strong",{parentName:"p"},"session"),"(): ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.yg)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.yg)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"never"),">",">"),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.yg)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.yg)("inlineCode",{parentName:"p"},"Record"),"<",(0,i.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"never"),">",">"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"simpletool"},"simpleTool"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"get")," ",(0,i.yg)("strong",{parentName:"p"},"simpleTool"),"(): ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/ISimpleTool"},(0,i.yg)("inlineCode",{parentName:"a"},"ISimpleTool"))),(0,i.yg)("h4",{id:"returns-1"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/ISimpleTool"},(0,i.yg)("inlineCode",{parentName:"a"},"ISimpleTool"))),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"setupsimpletool"},"setupSimpleTool"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"setupSimpleTool"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"session"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"session")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/modules#iplayeruisession"},(0,i.yg)("inlineCode",{parentName:"a"},"IPlayerUISession")),"<",(0,i.yg)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.yg)("inlineCode",{parentName:"td"},"string"),", ",(0,i.yg)("inlineCode",{parentName:"td"},"never"),">",">")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"options")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/interfaces/ISimpleToolOptions"},(0,i.yg)("inlineCode",{parentName:"a"},"ISimpleToolOptions")))))),(0,i.yg)("h4",{id:"returns-2"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"teardown"},"teardown"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"teardown"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Initiates the teardown and cleanup of this disposable item."),(0,i.yg)("h4",{id:"returns-3"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"void")),(0,i.yg)("h4",{id:"implementation-of"},"Implementation of"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/IDisposable"},"IDisposable"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/IDisposable#teardown"},"teardown")))}c.isMDXComponent=!0}}]);