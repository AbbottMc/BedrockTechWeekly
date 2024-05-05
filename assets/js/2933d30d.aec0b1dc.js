"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29573],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),c=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,y=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(y,l(l({ref:r},p),{},{components:t})):a.createElement(y,l({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72407:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const s={id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server-admin/modules",id:"sapi/stable/server-admin/modules",title:"@minecraft",description:"Contains types related to administering a Bedrock Dedicated",source:"@site/docs/sapi/stable/server-admin/modules.md",sourceDirName:"sapi/stable/server-admin",slug:"/sapi/stable/server-admin/modules",permalink:"/docs/sapi/stable/server-admin/modules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null}},o={},c=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2},{value:"secrets",id:"secrets",level:3},{value:"variables",id:"variables-1",level:3}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,a.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Contains types related to administering a Bedrock Dedicated\nServer. These types allow for the configuration of variables\nand secrets in JSON files in the Bedrock Dedicated Server\nfolder. These types cannot be used on Minecraft clients."),(0,n.yg)("p",null,"Manifest Details"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "module_name": "@minecraft/server-admin",\n  "version": "1.0.0-beta.1.20.80-stable"\n}\n')),(0,n.yg)("h2",{id:"classes"},"Classes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/sapi/stable/server-admin/classes/SecretString"},"SecretString")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/sapi/stable/server-admin/classes/ServerSecrets"},"ServerSecrets")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/sapi/stable/server-admin/classes/ServerVariables"},"ServerVariables"))),(0,n.yg)("h2",{id:"variables"},"Variables"),(0,n.yg)("h3",{id:"secrets"},"secrets"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,n.yg)("strong",{parentName:"p"},"secrets"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-admin/classes/ServerSecrets"},(0,n.yg)("inlineCode",{parentName:"a"},"ServerSecrets"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"A globally available object that returns a list of\ndedicated-server configured secrets."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"variables-1"},"variables"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Const")," ",(0,n.yg)("strong",{parentName:"p"},"variables"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server-admin/classes/ServerVariables"},(0,n.yg)("inlineCode",{parentName:"a"},"ServerVariables"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"A globally available object that returns a list of\ndedicated-server configured variables."))}u.isMDXComponent=!0}}]);