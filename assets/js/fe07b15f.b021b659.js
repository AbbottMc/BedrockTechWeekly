"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52608],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41693:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"PlayerIterator",title:"Class: PlayerIterator",sidebar_label:"PlayerIterator",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/stable/server/classes/PlayerIterator",id:"sapi/stable/server/classes/PlayerIterator",title:"Class: PlayerIterator",description:"This type is usable for iterating over a set of players.",source:"@site/docs/sapi/stable/server/classes/PlayerIterator.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerIterator",permalink:"/docs/sapi/stable/server/classes/PlayerIterator",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerIterator",title:"Class: PlayerIterator",sidebar_label:"PlayerIterator",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerInventoryComponentContainer",permalink:"/docs/sapi/stable/server/classes/PlayerInventoryComponentContainer"},next:{title:"PlayerJoinEvent",permalink:"/docs/sapi/stable/server/classes/PlayerJoinEvent"}},s={},p=[{value:"Implements",id:"implements",level:2},{value:"Methods",id:"methods",level:2},{value:"iterator",id:"iterator",level:3},{value:"Returns",id:"returns",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"next",id:"next",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This type is usable for iterating over a set of players.\nThis means it can be used in statements like for...of\nstatements, Array.from(iterator), and more."),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols"},(0,n.kt)("inlineCode",{parentName:"a"},"Iterable")),"<",(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),">")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"iterator"},"[iterator]"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"[iterator]"),"(): ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols"},(0,n.kt)("inlineCode",{parentName:"a"},"Iterator")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols"},(0,n.kt)("inlineCode",{parentName:"a"},"Iterator")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined"),">"),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"Iterable.","_","_","@iterator@186713"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"next"},"next"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"next"),"(): ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols"},(0,n.kt)("inlineCode",{parentName:"a"},"IteratorResult")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Retrieves the next item in this iteration. The resulting\nIteratorResult contains .done and .value properties which\ncan be used to see the next Player in the iteration."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols"},(0,n.kt)("inlineCode",{parentName:"a"},"IteratorResult")),"<",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Player"},(0,n.kt)("inlineCode",{parentName:"a"},"Player")),", ",(0,n.kt)("inlineCode",{parentName:"p"},"any"),">"))}d.isMDXComponent=!0}}]);