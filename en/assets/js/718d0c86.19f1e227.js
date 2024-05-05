"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79350],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},35045:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const i={id:"RawText",title:"Interface: RawText",sidebar_label:"RawText",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/interfaces/RawText",id:"sapi/preview/server/interfaces/RawText",title:"Interface: RawText",description:"A RawMessage with only the rawtext property. When a",source:"@site/docs/sapi/preview/server/interfaces/RawText.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/RawText",permalink:"/en/docs/sapi/preview/server/interfaces/RawText",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RawText",title:"Interface: RawText",sidebar_label:"RawText",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"RawMessageScore",permalink:"/en/docs/sapi/preview/server/interfaces/RawMessageScore"},next:{title:"ScoreboardObjectiveDisplayOptions",permalink:"/en/docs/sapi/preview/server/interfaces/ScoreboardObjectiveDisplayOptions"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"rawtext",id:"rawtext",level:3}],c={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"A ",(0,a.yg)("inlineCode",{parentName:"p"},"RawMessage")," with only the ",(0,a.yg)("inlineCode",{parentName:"p"},"rawtext")," property. When a\n",(0,a.yg)("inlineCode",{parentName:"p"},"RawMessage")," is serialized the contents are put into a\nrawtext property, so this is useful when reading saved\nRawMessages. See ",(0,a.yg)("inlineCode",{parentName:"p"},"BlockSignComponent.setText")," and\n",(0,a.yg)("inlineCode",{parentName:"p"},"BlockSignComponent.getRawText")," for examples."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"rawtext"},"rawtext"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"rawtext"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,a.yg)("inlineCode",{parentName:"a"},"RawMessage")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"A serialization of the current value of an associated sign."))}d.isMDXComponent=!0}}]);