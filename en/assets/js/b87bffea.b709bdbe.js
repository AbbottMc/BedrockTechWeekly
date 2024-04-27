"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[85331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={id:"DimensionLocation",title:"Interface: DimensionLocation",sidebar_label:"DimensionLocation",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/preview/server/interfaces/DimensionLocation",id:"sapi/preview/server/interfaces/DimensionLocation",title:"Interface: DimensionLocation",description:"An exact coordinate within the world, including its",source:"@site/docs/sapi/preview/server/interfaces/DimensionLocation.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/DimensionLocation",permalink:"/en/docs/sapi/preview/server/interfaces/DimensionLocation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DimensionLocation",title:"Interface: DimensionLocation",sidebar_label:"DimensionLocation",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"DefinitionModifier",permalink:"/en/docs/sapi/preview/server/interfaces/DefinitionModifier"},next:{title:"Enchantment",permalink:"/en/docs/sapi/preview/server/interfaces/Enchantment"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"dimension",id:"dimension",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"z",id:"z",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An exact coordinate within the world, including its\ndimension and location."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dimension"},"dimension"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"dimension"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,i.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Dimension that this coordinate is associated with."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"x"},"x"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"x"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"X component of this dimension-location."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"y"},"y"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"y"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Y component of this dimension-location."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"z"},"z"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"z"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Z component of this dimension-location."))}m.isMDXComponent=!0}}]);