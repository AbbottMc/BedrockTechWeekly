"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=o(a),c=n,N=k["".concat(s,".").concat(c)]||k[c]||m[c]||l;return a?r.createElement(N,p(p({ref:t},d),{},{components:a})):r.createElement(N,p({ref:t},d))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[k]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"Vector",title:"Class: Vector",sidebar_label:"Vector",sidebar_position:0,custom_edit_url:null},p=void 0,i={unversionedId:"sapi/stable/server/classes/Vector",id:"sapi/stable/server/classes/Vector",title:"Class: Vector",description:"Contains a description of a vector.",source:"@site/docs/sapi/stable/server/classes/Vector.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/Vector",permalink:"/docs/sapi/stable/server/classes/Vector",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Vector",title:"Class: Vector",sidebar_label:"Vector",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Trigger",permalink:"/docs/sapi/stable/server/classes/Trigger"},next:{title:"WeatherChangeEvent",permalink:"/docs/sapi/stable/server/classes/WeatherChangeEvent"}},s={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"z",id:"z",level:3},{value:"back",id:"back",level:3},{value:"down",id:"down",level:3},{value:"forward",id:"forward",level:3},{value:"left",id:"left",level:3},{value:"one",id:"one",level:3},{value:"right",id:"right",level:3},{value:"up",id:"up",level:3},{value:"zero",id:"zero",level:3},{value:"Methods",id:"methods",level:2},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"length",id:"length",level:3},{value:"Returns",id:"returns-1",level:4},{value:"lengthSquared",id:"lengthsquared",level:3},{value:"Returns",id:"returns-2",level:4},{value:"normalized",id:"normalized",level:3},{value:"Returns",id:"returns-3",level:4},{value:"add",id:"add",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"cross",id:"cross",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"distance",id:"distance",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"divide",id:"divide",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"lerp",id:"lerp",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"max",id:"max",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4},{value:"min",id:"min",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-10",level:4},{value:"multiply",id:"multiply",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-11",level:4},{value:"slerp",id:"slerp",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-12",level:4},{value:"subtract",id:"subtract",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-13",level:4}],d={toc:o};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Contains a description of a vector."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new Vector"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"y"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"z"),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Creates a new instance of an abstract vector."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"x")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"X component of the vector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"y")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Y component of the vector.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"z")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Z component of the vector.")))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"x"},"x"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"x"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"X component of this vector."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"y"},"y"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"y"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Y component of this vector."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"z"},"z"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"z"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Z component of this vector."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"back"},"back"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"back"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (0, 0, -1)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"down"},"down"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"down"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (0, -1, 0)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"forward"},"forward"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"forward"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (0, 0, 1)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"left"},"left"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"left"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (-1, 0, 0)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"one"},"one"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"one"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (1, 1, 1)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"right"},"right"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"right"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (1, 0, 0)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"up"},"up"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"up"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (0, 1, 0)."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"zero"},"zero"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"zero"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,"A constant vector that represents (0, 0, 0)."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"equals"},"equals"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"equals"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Compares this vector and another vector to one another."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"other")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Other vector to compare this vector to.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"True if the two vectors are equal."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"length"},"length"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"length"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the length of this vector."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"lengthsquared"},"lengthSquared"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"lengthSquared"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the squared length of this vector."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"normalized"},"normalized"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"normalized"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns this vector as a normalized vector."),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"add"},"add"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"add"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the addition of these vectors."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"cross"},"cross"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"cross"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the cross product of these two vectors."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"distance"},"distance"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"distance"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the distance between two vectors."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"divide"},"divide"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"divide"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the component-wise division of these vectors."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"lerp"},"lerp"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"lerp"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"t"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the linear interpolation between a and b using t as\nthe control."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"t")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"max"},"max"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"max"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns a vector that is made from the largest components of\ntwo vectors."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"min"},"min"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"min"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns a vector that is made from the smallest components\nof two vectors."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"multiply"},"multiply"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"multiply"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the component-wise product of these vectors."),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"slerp"},"slerp"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"slerp"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"s"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the spherical linear interpolation between a and b\nusing s as the control."),(0,n.kt)("h4",{id:"parameters-10"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"s")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"subtract"},"subtract"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"subtract"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"b"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns the subtraction of these vectors."),(0,n.kt)("h4",{id:"parameters-11"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"a")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"b")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,n.kt)("h4",{id:"returns-13"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Vector"},(0,n.kt)("inlineCode",{parentName:"a"},"Vector"))))}k.isMDXComponent=!0}}]);