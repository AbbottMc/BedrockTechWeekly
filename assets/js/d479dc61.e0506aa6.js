"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[64222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={id:"MusicOptions",title:"Interface: MusicOptions",sidebar_label:"MusicOptions",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/preview/server/interfaces/MusicOptions",id:"sapi/preview/server/interfaces/MusicOptions",title:"Interface: MusicOptions",description:"Additional configuration options for playMusic/queueMusic methods.",source:"@site/docs/sapi/preview/server/interfaces/MusicOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/MusicOptions",permalink:"/docs/sapi/preview/server/interfaces/MusicOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MusicOptions",title:"Interface: MusicOptions",sidebar_label:"MusicOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"LessThanOrEqualsComparison",permalink:"/docs/sapi/preview/server/interfaces/LessThanOrEqualsComparison"},next:{title:"NotEqualsComparison",permalink:"/docs/sapi/preview/server/interfaces/NotEqualsComparison"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"fade",id:"fade",level:3},{value:"loop",id:"loop",level:3},{value:"volume",id:"volume",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Additional configuration options for ",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/World#playmusic"},"playMusic"),"/",(0,i.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/World#queuemusic"},"queueMusic")," methods."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fade"},"fade"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fade"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Specifies a fade overlap for music at the end of play."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"loop"},"loop"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"loop"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"If set to true, this music track will play repeatedly."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"volume"},"volume"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"volume"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Relative volume level of the music."))}u.isMDXComponent=!0}}]);