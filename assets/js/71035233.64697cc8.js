"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2235],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,d=f["".concat(o,".").concat(u)]||f[u]||y[u]||s;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const s={id:"EffectTypes",title:"Class: EffectTypes",sidebar_label:"EffectTypes",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/EffectTypes",id:"sapi/stable/server/classes/EffectTypes",title:"Class: EffectTypes",description:"Represents a type of effect - like poison - that can be",source:"@site/docs/sapi/stable/server/classes/EffectTypes.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EffectTypes",permalink:"/docs/sapi/stable/server/classes/EffectTypes",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EffectTypes",title:"Class: EffectTypes",sidebar_label:"EffectTypes",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EffectType",permalink:"/docs/sapi/stable/server/classes/EffectType"},next:{title:"EnchantmentLevelOutOfBoundsError",permalink:"/docs/sapi/stable/server/classes/EnchantmentLevelOutOfBoundsError"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAll",id:"getall",level:3},{value:"Returns",id:"returns-1",level:4}],c={toc:p},f="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(f,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Represents a type of effect - like poison - that can be\napplied to an entity."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EffectTypes"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"get"},"get"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"get"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"identifier"),"): ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EffectType"},(0,a.yg)("inlineCode",{parentName:"a"},"EffectType"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Effect type for the given identifier."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"identifier")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"string"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EffectType"},(0,a.yg)("inlineCode",{parentName:"a"},"EffectType"))),(0,a.yg)("p",null,"Effect type for the given identifier or undefined if the\neffect does not exist."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getall"},"getAll"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("strong",{parentName:"p"},"getAll"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EffectType"},(0,a.yg)("inlineCode",{parentName:"a"},"EffectType")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Gets all effects."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EffectType"},(0,a.yg)("inlineCode",{parentName:"a"},"EffectType")),"[]"),(0,a.yg)("p",null,"A list of all effects."))}y.isMDXComponent=!0}}]);