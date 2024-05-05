"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47238],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,g=y["".concat(i,".").concat(d)]||y[d]||u[d]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[y]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const l={id:"BlockTypes",title:"Class: BlockTypes",sidebar_label:"BlockTypes",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/classes/BlockTypes",id:"sapi/preview/server/classes/BlockTypes",title:"Class: BlockTypes",description:"Contains a catalog of Minecraft Block Types that are",source:"@site/docs/sapi/preview/server/classes/BlockTypes.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockTypes",permalink:"/docs/sapi/preview/server/classes/BlockTypes",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockTypes",title:"Class: BlockTypes",sidebar_label:"BlockTypes",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockType",permalink:"/docs/sapi/preview/server/classes/BlockType"},next:{title:"BlockVolume",permalink:"/docs/sapi/preview/server/classes/BlockVolume"}},i={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAll",id:"getall",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p},y="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains a catalog of Minecraft Block Types that are\navailable in this world."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new BlockTypes"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"get"},"get"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"get"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"typeName"),"): ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockType"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockType"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns a BlockType object for the specified identifier."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"typeName")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:"left"},"Identifier of the block type. Should follow a namespace:id pattern, such as minecraft:dirt.")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockType"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockType"))),(0,a.yg)("p",null,"BlockType object, or undefined if the block type is not\navailable within this world."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getall"},"getAll"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"getAll"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockType"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockType")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns a collection of all available block types."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockType"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockType")),"[]"))}u.isMDXComponent=!0}}]);