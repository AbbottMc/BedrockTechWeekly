"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={id:"TitleDisplayOptions",title:"Interface: TitleDisplayOptions",sidebar_label:"TitleDisplayOptions",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/interfaces/TitleDisplayOptions",id:"sapi/preview/server/interfaces/TitleDisplayOptions",title:"Interface: TitleDisplayOptions",description:"Contains additional options for displaying a title and",source:"@site/docs/sapi/preview/server/interfaces/TitleDisplayOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/TitleDisplayOptions",permalink:"/docs/sapi/preview/server/interfaces/TitleDisplayOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TitleDisplayOptions",title:"Interface: TitleDisplayOptions",sidebar_label:"TitleDisplayOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SoundOptions",permalink:"/docs/sapi/preview/server/interfaces/SoundOptions"},next:{title:"Vector3",permalink:"/docs/sapi/preview/server/interfaces/Vector3"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"fadeInSeconds",id:"fadeinseconds",level:3},{value:"fadeOutSeconds",id:"fadeoutseconds",level:3},{value:"staySeconds",id:"stayseconds",level:3},{value:"subtitle",id:"subtitle",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains additional options for displaying a title and\noptional subtitle."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"fadeinseconds"},"fadeInSeconds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fadeInSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Fade-in time for the title and subtitle, in seconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fadeoutseconds"},"fadeOutSeconds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fadeOutSeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Fade-out time for the title and subtitle, in seconds."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stayseconds"},"staySeconds"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"staySeconds"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Amount of time for the title and subtitle to stay in place."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subtitle"},"subtitle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"subtitle"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Optional subtitle text."))}d.isMDXComponent=!0}}]);