"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[73630],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={id:"WatchdogTerminateReason",title:"Enumeration: WatchdogTerminateReason",sidebar_label:"WatchdogTerminateReason",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/enums/WatchdogTerminateReason",id:"sapi/stable/server/enums/WatchdogTerminateReason",title:"Enumeration: WatchdogTerminateReason",description:"An enumeration with the reason that a watchdog is deciding",source:"@site/docs/sapi/stable/server/enums/WatchdogTerminateReason.md",sourceDirName:"sapi/stable/server/enums",slug:"/sapi/stable/server/enums/WatchdogTerminateReason",permalink:"/en/docs/sapi/stable/server/enums/WatchdogTerminateReason",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WatchdogTerminateReason",title:"Enumeration: WatchdogTerminateReason",sidebar_label:"WatchdogTerminateReason",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"TimeOfDay",permalink:"/en/docs/sapi/stable/server/enums/TimeOfDay"},next:{title:"WeatherType",permalink:"/en/docs/sapi/stable/server/enums/WeatherType"}},l={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Hang",id:"hang",level:3},{value:"StackOverflow",id:"stackoverflow",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"An enumeration with the reason that a watchdog is deciding\nto terminate execution of a behavior packs' script."),(0,a.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.yg)("h3",{id:"hang"},"Hang"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"Hang")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"Hang"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Script runtime for a behavior pack is terminated due to\nnon-responsiveness from script (a hang or infinite loop)."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"stackoverflow"},"StackOverflow"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"StackOverflow")," = ",(0,a.yg)("inlineCode",{parentName:"p"},'"StackOverflow"')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Script runtime for a behavior pack is terminated due to a\nstack overflow (a long, and potentially infinite) chain of\nfunction calls."))}m.isMDXComponent=!0}}]);