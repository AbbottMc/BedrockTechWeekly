"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[71907],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96971:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const s={id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server-net/modules",id:"sapi/stable/server-net/modules",title:"@minecraft",description:"The @minecraft/server-net module contains types for",source:"@site/docs/sapi/stable/server-net/modules.md",sourceDirName:"sapi/stable/server-net",slug:"/sapi/stable/server-net/modules",permalink:"/en/docs/sapi/stable/server-net/modules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null}},o={},p=[{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"http",id:"http",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@minecraft/server-net")," module contains types for\nexecuting HTTP-based requests. This module can only be used\non Bedrock Dedicated Server."),(0,a.yg)("p",null,"Manifest Details"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "module_name": "@minecraft/server-net",\n  "version": "1.0.0-beta.1.20.80-stable"\n}\n')),(0,a.yg)("h2",{id:"enumerations"},"Enumerations"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/docs/sapi/stable/server-net/enums/HttpRequestMethod"},"HttpRequestMethod"))),(0,a.yg)("h2",{id:"classes"},"Classes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/docs/sapi/stable/server-net/classes/HttpClient"},"HttpClient")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/docs/sapi/stable/server-net/classes/HttpHeader"},"HttpHeader")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/docs/sapi/stable/server-net/classes/HttpRequest"},"HttpRequest")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/en/docs/sapi/stable/server-net/classes/HttpResponse"},"HttpResponse"))),(0,a.yg)("h2",{id:"variables"},"Variables"),(0,a.yg)("h3",{id:"http"},"http"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,a.yg)("strong",{parentName:"p"},"http"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-net/classes/HttpClient"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpClient"))))}d.isMDXComponent=!0}}]);