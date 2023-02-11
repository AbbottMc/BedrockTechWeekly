"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32185],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),v=a,m=d["".concat(o,".").concat(v)]||d[v]||u[v]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=v;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},49593:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},s=void 0,l={unversionedId:"sapi/preview/server-admin/modules",id:"sapi/preview/server-admin/modules",title:"@minecraft",description:"Contains types related to administering a Bedrock Dedicated",source:"@site/docs/sapi/preview/server-admin/modules.md",sourceDirName:"sapi/preview/server-admin",slug:"/sapi/preview/server-admin/modules",permalink:"/en/docs/sapi/preview/server-admin/modules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null}},o={},c=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"secrets",id:"secrets",level:3},{value:"variables",id:"variables-1",level:3}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains types related to administering a Bedrock Dedicated\nServer. These types allow for the configuration of variables\nand secrets in JSON files in the Bedrock Dedicated Server\nfolder. These types cannot be used on Minecraft clients."),(0,a.kt)("p",null,"Manifest Details"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module_name": "@minecraft/server-admin",\n  "version": "1.0.0-beta.1.19.70-preview.22"\n}\n')),(0,a.kt)("h2",{id:"classes"},"Classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/sapi/preview/server-admin/classes/SecretString"},"SecretString")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/sapi/preview/server-admin/classes/ServerSecrets"},"ServerSecrets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/sapi/preview/server-admin/classes/ServerVariables"},"ServerVariables"))),(0,a.kt)("h2",{id:"variables"},"Variables"),(0,a.kt)("h3",{id:"secrets"},"secrets"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"secrets"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-admin/classes/ServerSecrets"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerSecrets"))),(0,a.kt)("p",null,"A globally available object that returns a list of\ndedicated-server configured secrets."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"variables-1"},"variables"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,a.kt)("strong",{parentName:"p"},"variables"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-admin/classes/ServerVariables"},(0,a.kt)("inlineCode",{parentName:"a"},"ServerVariables"))),(0,a.kt)("p",null,"A globally available object that returns a list of\ndedicated-server configured variables."))}d.isMDXComponent=!0}}]);