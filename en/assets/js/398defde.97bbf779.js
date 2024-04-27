"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"TimeOfDay",title:"Enumeration: TimeOfDay",sidebar_label:"TimeOfDay",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server/enums/TimeOfDay",id:"sapi/stable/server/enums/TimeOfDay",title:"Enumeration: TimeOfDay",description:"Provides numeric values for common periods in the Minecraft",source:"@site/docs/sapi/stable/server/enums/TimeOfDay.md",sourceDirName:"sapi/stable/server/enums",slug:"/sapi/stable/server/enums/TimeOfDay",permalink:"/en/docs/sapi/stable/server/enums/TimeOfDay",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TimeOfDay",title:"Enumeration: TimeOfDay",sidebar_label:"TimeOfDay",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"StructureSaveMode",permalink:"/en/docs/sapi/stable/server/enums/StructureSaveMode"},next:{title:"WatchdogTerminateReason",permalink:"/en/docs/sapi/stable/server/enums/WatchdogTerminateReason"}},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Day",id:"day",level:3},{value:"Midnight",id:"midnight",level:3},{value:"Night",id:"night",level:3},{value:"Noon",id:"noon",level:3},{value:"Sunrise",id:"sunrise",level:3},{value:"Sunset",id:"sunset",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides numeric values for common periods in the Minecraft\nday."),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("h3",{id:"day"},"Day"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Day")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to the start of the day, which is time of the\nday 1,000 (or the equivalent of 7am) in Minecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"midnight"},"Midnight"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Midnight")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"18000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to midnight, which is time of the day 18,000\n(or the equivalent of 12:00am) in Minecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"night"},"Night"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Night")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"13000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to night, which is time of the day 13,000 (or\nthe equivalent of 7:00pm) in Minecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"noon"},"Noon"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Noon")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"6000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to noon, which is time of the day 6,000 in\nMinecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sunrise"},"Sunrise"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Sunrise")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"23000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to sunrise, which is time of the day 23,000\n(or the equivalent of 5am) in Minecraft."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sunset"},"Sunset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"Sunset")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"12000")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Sets the time to sunset, which is time of the day 12,000 (or\nthe equivalent of 6pm) in Minecraft."))}m.isMDXComponent=!0}}]);