"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[76311],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(96540),t(15680));const o={id:"DimensionLocation",title:"Interface: DimensionLocation",sidebar_label:"DimensionLocation",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/stable/server/interfaces/DimensionLocation",id:"sapi/stable/server/interfaces/DimensionLocation",title:"Interface: DimensionLocation",description:"An exact coordinate within the world, including its",source:"@site/docs/sapi/stable/server/interfaces/DimensionLocation.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/DimensionLocation",permalink:"/en/docs/sapi/stable/server/interfaces/DimensionLocation",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DimensionLocation",title:"Interface: DimensionLocation",sidebar_label:"DimensionLocation",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"DefinitionModifier",permalink:"/en/docs/sapi/stable/server/interfaces/DefinitionModifier"},next:{title:"Enchantment",permalink:"/en/docs/sapi/stable/server/interfaces/Enchantment"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"dimension",id:"dimension",level:3},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"z",id:"z",level:3}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"An exact coordinate within the world, including its\ndimension and location."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"dimension"},"dimension"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"dimension"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension"},(0,i.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Dimension that this coordinate is associated with."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"x"},"x"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"x"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"X component of this dimension-location."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"y"},"y"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"y"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Y component of this dimension-location."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"z"},"z"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"z"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Z component of this dimension-location."))}u.isMDXComponent=!0}}]);