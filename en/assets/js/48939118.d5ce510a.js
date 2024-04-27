"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[71684],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"WeatherType",title:"Enumeration: WeatherType",sidebar_label:"WeatherType",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/enums/WeatherType",id:"sapi/preview/server/enums/WeatherType",title:"Enumeration: WeatherType",description:"Used to specify the type of weather condition within the",source:"@site/docs/sapi/preview/server/enums/WeatherType.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/WeatherType",permalink:"/en/docs/sapi/preview/server/enums/WeatherType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WeatherType",title:"Enumeration: WeatherType",sidebar_label:"WeatherType",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"WatchdogTerminateReason",permalink:"/en/docs/sapi/preview/server/enums/WatchdogTerminateReason"},next:{title:"ActionFormData",permalink:"/en/docs/sapi/preview/server-ui/classes/ActionFormData"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Clear",id:"clear",level:3},{value:"Rain",id:"rain",level:3},{value:"Thunder",id:"thunder",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Used to specify the type of weather condition within the\nworld."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"clear"},"Clear"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Clear")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Clear"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Specifies a clear weather condition."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"rain"},"Rain"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Rain")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Rain"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Specifies a rain weather condition."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"thunder"},"Thunder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Thunder")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Thunder"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Specifies a rain and thunder weather condition."))}c.isMDXComponent=!0}}]);