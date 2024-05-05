"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40761],{15680:(e,r,t)=>{t.d(r,{xA:()=>y,yg:()=>m});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},y=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,m=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return t?n.createElement(m,o(o({ref:r},y),{},{components:t})):n.createElement(m,o({ref:r},y))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},22603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const i={id:"EntityQueryPropertyOptions",title:"Interface: EntityQueryPropertyOptions",sidebar_label:"EntityQueryPropertyOptions",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/interfaces/EntityQueryPropertyOptions",id:"sapi/stable/server/interfaces/EntityQueryPropertyOptions",title:"Interface: EntityQueryPropertyOptions",description:"Properties",source:"@site/docs/sapi/stable/server/interfaces/EntityQueryPropertyOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/EntityQueryPropertyOptions",permalink:"/docs/sapi/stable/server/interfaces/EntityQueryPropertyOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityQueryPropertyOptions",title:"Interface: EntityQueryPropertyOptions",sidebar_label:"EntityQueryPropertyOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityQueryOptions",permalink:"/docs/sapi/stable/server/interfaces/EntityQueryOptions"},next:{title:"EntityQueryScoreOptions",permalink:"/docs/sapi/stable/server/interfaces/EntityQueryScoreOptions"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"exclude",id:"exclude",level:3},{value:"propertyId",id:"propertyid",level:3},{value:"value",id:"value",level:3}],y={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"exclude"},"exclude"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"exclude"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"propertyid"},"propertyId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"propertyId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"value"},"value"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"value"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/EqualsComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"EqualsComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/GreaterThanComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"GreaterThanComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/GreaterThanOrEqualsComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"GreaterThanOrEqualsComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/LessThanComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"LessThanComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/LessThanOrEqualsComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"LessThanOrEqualsComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/NotEqualsComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"NotEqualsComparison"))," ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/RangeComparison"},(0,a.yg)("inlineCode",{parentName:"a"},"RangeComparison"))))}u.isMDXComponent=!0}}]);