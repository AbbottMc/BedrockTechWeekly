"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,k=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"TitleDisplayOptions",title:"Interface: TitleDisplayOptions",sidebar_label:"TitleDisplayOptions",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/interfaces/TitleDisplayOptions",id:"sapi/preview/server/interfaces/TitleDisplayOptions",title:"Interface: TitleDisplayOptions",description:"Contains additional options for displaying a title and",source:"@site/docs/sapi/preview/server/interfaces/TitleDisplayOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/TitleDisplayOptions",permalink:"/en/docs/sapi/preview/server/interfaces/TitleDisplayOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TitleDisplayOptions",title:"Interface: TitleDisplayOptions",sidebar_label:"TitleDisplayOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"TeleportOptions",permalink:"/en/docs/sapi/preview/server/interfaces/TeleportOptions"},next:{title:"Vector2",permalink:"/en/docs/sapi/preview/server/interfaces/Vector2"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"fadeInDuration",id:"fadeinduration",level:3},{value:"fadeOutDuration",id:"fadeoutduration",level:3},{value:"stayDuration",id:"stayduration",level:3},{value:"subtitle",id:"subtitle",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains additional options for displaying a title and\noptional subtitle."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fadeinduration"},"fadeInDuration"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fadeInDuration"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Fade-in duration for the title and subtitle, in ticks. There\nare 20 ticks per second. Use ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/modules#tickspersecond"},"TicksPerSecond")," constant\nto convert between ticks and seconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fadeoutduration"},"fadeOutDuration"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fadeOutDuration"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Fade-out time for the title and subtitle, in ticks. There\nare 20 ticks per second. Use ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/modules#tickspersecond"},"TicksPerSecond")," constant\nto convert between ticks and seconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stayduration"},"stayDuration"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"stayDuration"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Amount of time for the title and subtitle to stay in place,\nin ticks. There are 20 ticks per second. Use ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/modules#tickspersecond"},"TicksPerSecond")," constant to convert between ticks and\nseconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subtitle"},"subtitle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"subtitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,i.kt)("inlineCode",{parentName:"a"},"RawMessage"))," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,i.kt)("inlineCode",{parentName:"a"},"RawMessage")),")[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Optional subtitle text."))}u.isMDXComponent=!0}}]);