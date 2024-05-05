"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[83716],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(r),d=o,g=y["".concat(i,".").concat(d)]||y[d]||u[d]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[y]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={id:"BlockType",title:"Class: BlockType",sidebar_label:"BlockType",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/classes/BlockType",id:"sapi/stable/server/classes/BlockType",title:"Class: BlockType",description:"The type (or template) of a block. Does not contain",source:"@site/docs/sapi/stable/server/classes/BlockType.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockType",permalink:"/en/docs/sapi/stable/server/classes/BlockType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockType",title:"Class: BlockType",sidebar_label:"BlockType",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockStates",permalink:"/en/docs/sapi/stable/server/classes/BlockStates"},next:{title:"BlockTypes",permalink:"/en/docs/sapi/stable/server/classes/BlockTypes"}},i={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"canBeWaterlogged",id:"canbewaterlogged",level:3},{value:"id",id:"id",level:3}],p={toc:c},y="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(y,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The type (or template) of a block. Does not contain\npermutation data (state) other than the type of block it\nrepresents. This type was introduced as of version\n1.17.10.21."),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new BlockType"),"()"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"canbewaterlogged"},"canBeWaterlogged"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"canBeWaterlogged"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents whether this type of block can be waterlogged."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"id"},"id"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"id"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Block type name - for example, ",(0,o.yg)("inlineCode",{parentName:"p"},"minecraft:acacia_stairs"),"."))}u.isMDXComponent=!0}}]);