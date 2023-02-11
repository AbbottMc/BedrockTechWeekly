"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20470],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,s(s({ref:t},u),{},{components:r})):n.createElement(k,s({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={id:"SculkSpreader",title:"Class: SculkSpreader",sidebar_label:"SculkSpreader",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/stable/server-gametest/classes/SculkSpreader",id:"sapi/stable/server-gametest/classes/SculkSpreader",title:"Class: SculkSpreader",description:"Implements a class that can be used for testing sculk",source:"@site/docs/sapi/stable/server-gametest/classes/SculkSpreader.md",sourceDirName:"sapi/stable/server-gametest/classes",slug:"/sapi/stable/server-gametest/classes/SculkSpreader",permalink:"/en/docs/sapi/stable/server-gametest/classes/SculkSpreader",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SculkSpreader",title:"Class: SculkSpreader",sidebar_label:"SculkSpreader",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"RegistrationBuilder",permalink:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},next:{title:"SimulatedPlayer",permalink:"/en/docs/sapi/stable/server-gametest/classes/SimulatedPlayer"}},i={},p=[{value:"Properties",id:"properties",level:2},{value:"maxCharge",id:"maxcharge",level:3},{value:"Methods",id:"methods",level:2},{value:"addCursorsWithOffset",id:"addcursorswithoffset",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getCursorPosition",id:"getcursorposition",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getNumberOfCursors",id:"getnumberofcursors",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getTotalCharge",id:"gettotalcharge",level:3},{value:"Returns",id:"returns-3",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Implements a class that can be used for testing sculk\nspreading behaviors. This sculk spreader class can drive the\ngrowth of sculk around a particular block."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"maxcharge"},"maxCharge"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"maxCharge"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Gets the maximum charge of a sculk spreader."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"addcursorswithoffset"},"addCursorsWithOffset"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addCursorsWithOffset"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"offset"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"charge"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Adds a cursor - which is a notional waypoint that the sculk\nwill spread in the direction of."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"offset")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"BlockLocation"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"charge")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getcursorposition"},"getCursorPosition"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getCursorPosition"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockLocation")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Retrieves the current position of the specified cursor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"index")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BlockLocation")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getnumberofcursors"},"getNumberOfCursors"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getNumberOfCursors"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns a number of overall cursors for this sculk spreader."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gettotalcharge"},"getTotalCharge"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getTotalCharge"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Gets the total current charge of the sculk spreader."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")))}d.isMDXComponent=!0}}]);