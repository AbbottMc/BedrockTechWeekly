"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92454],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?t.createElement(y,a(a({ref:n},c),{},{components:r})):t.createElement(y,a({ref:n},c))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(58168),o=(r(96540),r(15680));const i={id:"ItemLockMode",title:"Enumeration: ItemLockMode",sidebar_label:"ItemLockMode",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/preview/server/enums/ItemLockMode",id:"sapi/preview/server/enums/ItemLockMode",title:"Enumeration: ItemLockMode",description:"Describes how an an item can be moved within a container.",source:"@site/docs/sapi/preview/server/enums/ItemLockMode.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/ItemLockMode",permalink:"/docs/sapi/preview/server/enums/ItemLockMode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemLockMode",title:"Enumeration: ItemLockMode",sidebar_label:"ItemLockMode",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemComponentTypes",permalink:"/docs/sapi/preview/server/enums/ItemComponentTypes"},next:{title:"MoonPhase",permalink:"/docs/sapi/preview/server/enums/MoonPhase"}},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"inventory",id:"inventory",level:3},{value:"none",id:"none",level:3},{value:"slot",id:"slot",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.yg)(m,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Describes how an an item can be moved within a container."),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"inventory"},"inventory"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"inventory")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"inventory"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The item cannot be dropped or crafted with."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"none"},"none"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"none")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"none"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The item has no container restrictions."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"slot"},"slot"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"slot")," = ",(0,o.yg)("inlineCode",{parentName:"p"},'"slot"')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The item cannot be moved from its slot, dropped or crafted\nwith."))}u.isMDXComponent=!0}}]);