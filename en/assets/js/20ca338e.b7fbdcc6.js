"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81890],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,d=u["".concat(l,".").concat(g)]||u[g]||y[g]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={id:"FenceConnectivity",title:"Class: FenceConnectivity",sidebar_label:"FenceConnectivity",sidebar_position:0,custom_edit_url:null},s=void 0,a={unversionedId:"sapi/preview/server-gametest/classes/FenceConnectivity",id:"sapi/preview/server-gametest/classes/FenceConnectivity",title:"Class: FenceConnectivity",description:"Returns information about whether this fence is connected to",source:"@site/docs/sapi/preview/server-gametest/classes/FenceConnectivity.md",sourceDirName:"sapi/preview/server-gametest/classes",slug:"/sapi/preview/server-gametest/classes/FenceConnectivity",permalink:"/en/docs/sapi/preview/server-gametest/classes/FenceConnectivity",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FenceConnectivity",title:"Class: FenceConnectivity",sidebar_label:"FenceConnectivity",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"HttpRequestMethod",permalink:"/en/docs/sapi/preview/server-net/enums/HttpRequestMethod"},next:{title:"GameTestError",permalink:"/en/docs/sapi/preview/server-gametest/classes/GameTestError"}},l={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"east",id:"east",level:3},{value:"north",id:"north",level:3},{value:"south",id:"south",level:3},{value:"west",id:"west",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Returns information about whether this fence is connected to\nother fences in several directions."),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new FenceConnectivity"),"()"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"east"},"east"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"east"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents whether this fence block is connected to another\nfence to the east (x + 1)."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"north"},"north"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"north"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents whether this fence block is connected to another\nfence to the north (z - 1)."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"south"},"south"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"south"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents whether this fence block is connected to another\nfence to the south (z + 1)."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"west"},"west"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"west"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents whether this fence block is connected to another\nfence to the west (x - 1)."))}y.isMDXComponent=!0}}]);