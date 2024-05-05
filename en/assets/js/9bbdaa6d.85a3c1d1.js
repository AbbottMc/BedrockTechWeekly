"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27016],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={id:"IMenuContainer",title:"Interface: IMenuContainer",sidebar_label:"IMenuContainer",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server-editor/interfaces/IMenuContainer",id:"sapi/stable/server-editor/interfaces/IMenuContainer",title:"Interface: IMenuContainer",description:"Manager and container for IMenu objects",source:"@site/docs/sapi/stable/server-editor/interfaces/IMenuContainer.md",sourceDirName:"sapi/stable/server-editor/interfaces",slug:"/sapi/stable/server-editor/interfaces/IMenuContainer",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IMenuContainer",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IMenuContainer",title:"Interface: IMenuContainer",sidebar_label:"IMenuContainer",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"IMenu",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},next:{title:"IMenuCreationParams",permalink:"/en/docs/sapi/stable/server-editor/interfaces/IMenuCreationParams"}},s={},p=[{value:"Methods",id:"methods",level:2},{value:"createMenu",id:"createmenu",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getMenu",id:"getmenu",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Manager and container for IMenu objects"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"createmenu"},"createMenu"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"createMenu"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"props"),"): ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.yg)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Create a top level item in the container."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"props")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenuCreationParams"},(0,a.yg)("inlineCode",{parentName:"a"},"IMenuCreationParams"))),(0,a.yg)("td",{parentName:"tr",align:"left"},"Configuration for the menu to create")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.yg)("inlineCode",{parentName:"a"},"IMenu"))),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getmenu"},"getMenu"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"getMenu"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"id"),"): ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,a.yg)("inlineCode",{parentName:"a"},"Promise")),"<",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.yg)("inlineCode",{parentName:"a"},"IMenu")),">"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Search for a menu item, if it's not found defer it to next\ntick."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"id")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Menu identifier")))),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,a.yg)("inlineCode",{parentName:"a"},"Promise")),"<",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-editor/interfaces/IMenu"},(0,a.yg)("inlineCode",{parentName:"a"},"IMenu")),">"))}d.isMDXComponent=!0}}]);