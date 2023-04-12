"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[77598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"CompoundBlockVolume",title:"Class: CompoundBlockVolume",sidebar_label:"CompoundBlockVolume",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server/classes/CompoundBlockVolume",id:"sapi/preview/server/classes/CompoundBlockVolume",title:"Class: CompoundBlockVolume",description:"Constructors",source:"@site/docs/sapi/preview/server/classes/CompoundBlockVolume.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/CompoundBlockVolume",permalink:"/docs/sapi/preview/server/classes/CompoundBlockVolume",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CompoundBlockVolume",title:"Class: CompoundBlockVolume",sidebar_label:"CompoundBlockVolume",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Component",permalink:"/docs/sapi/preview/server/classes/Component"},next:{title:"Container",permalink:"/docs/sapi/preview/server/classes/Container"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"capacity",id:"capacity",level:3},{value:"volumeCount",id:"volumecount",level:3},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns",level:4},{value:"getBlockLocationIterator",id:"getblocklocationiterator",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getBoundingBox",id:"getboundingbox",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getMax",id:"getmax",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getMin",id:"getmin",level:3},{value:"Returns",id:"returns-4",level:4},{value:"isInside",id:"isinside",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-5",level:4},{value:"peekLastVolume",id:"peeklastvolume",level:3},{value:"Returns",id:"returns-6",level:4},{value:"popVolume",id:"popvolume",level:3},{value:"Returns",id:"returns-7",level:4},{value:"pushVolume",id:"pushvolume",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-8",level:4},{value:"replaceOrAddLastVolume",id:"replaceoraddlastvolume",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"translate",id:"translate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-10",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new CompoundBlockVolume"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"capacity"},"capacity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"capacity"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"volumecount"},"volumeCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"volumeCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getblocklocationiterator"},"getBlockLocationIterator"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getBlockLocationIterator"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockLocationIterator"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocationIterator"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockLocationIterator"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockLocationIterator"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getboundingbox"},"getBoundingBox"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getBoundingBox"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/BoundingBox"},(0,a.kt)("inlineCode",{parentName:"a"},"BoundingBox"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/BoundingBox"},(0,a.kt)("inlineCode",{parentName:"a"},"BoundingBox"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getmax"},"getMax"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getMax"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getmin"},"getMin"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getMin"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isinside"},"isInside"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isInside"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"delta")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"peeklastvolume"},"peekLastVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"peekLastVolume"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem"},(0,a.kt)("inlineCode",{parentName:"a"},"CompoundBlockVolumeItem"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem"},(0,a.kt)("inlineCode",{parentName:"a"},"CompoundBlockVolumeItem"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"popvolume"},"popVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"popVolume"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pushvolume"},"pushVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"pushVolume"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"item"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"item")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem"},(0,a.kt)("inlineCode",{parentName:"a"},"CompoundBlockVolumeItem")))))),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"replaceoraddlastvolume"},"replaceOrAddLastVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"replaceOrAddLastVolume"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"item"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"item")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/CompoundBlockVolumeItem"},(0,a.kt)("inlineCode",{parentName:"a"},"CompoundBlockVolumeItem")))))),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"translate"},"translate"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"translate"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"delta")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);