"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86264],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||s;return r?n.createElement(g,i(i({ref:t},y),{},{components:r})):n.createElement(g,i({ref:t},y))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const s={id:"EntityTypes",title:"Class: EntityTypes",sidebar_label:"EntityTypes",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/EntityTypes",id:"sapi/stable/server/classes/EntityTypes",title:"Class: EntityTypes",description:"Used for accessing all entity types currently available for",source:"@site/docs/sapi/stable/server/classes/EntityTypes.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityTypes",permalink:"/en/docs/sapi/stable/server/classes/EntityTypes",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityTypes",title:"Class: EntityTypes",sidebar_label:"EntityTypes",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityTypeIterator",permalink:"/en/docs/sapi/stable/server/classes/EntityTypeIterator"},next:{title:"EntityUnderwaterMovementComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityUnderwaterMovementComponent"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAll",id:"getall",level:3},{value:"Returns",id:"returns-1",level:4}],y={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Used for accessing all entity types currently available for\nuse within the world."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntityTypes"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"get"},"get"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"get"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"identifier"),"): ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityType"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityType"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Retrieves an entity type using a string-based identifier."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"identifier")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityType"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityType"))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getall"},"getAll"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"getAll"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityType"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityType")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Retrieves a set of all entity types within this world."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityType"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityType")),"[]"))}u.isMDXComponent=!0}}]);