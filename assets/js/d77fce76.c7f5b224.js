"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"BlockRaycastOptions",title:"Interface: BlockRaycastOptions",sidebar_label:"BlockRaycastOptions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/interfaces/BlockRaycastOptions",id:"sapi/preview/server/interfaces/BlockRaycastOptions",title:"Interface: BlockRaycastOptions",description:"Contains additional options for configuring a block raycast",source:"@site/docs/sapi/preview/server/interfaces/BlockRaycastOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/BlockRaycastOptions",permalink:"/docs/sapi/preview/server/interfaces/BlockRaycastOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockRaycastOptions",title:"Interface: BlockRaycastOptions",sidebar_label:"BlockRaycastOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockHitInformation",permalink:"/docs/sapi/preview/server/interfaces/BlockHitInformation"},next:{title:"BlockVolume",permalink:"/docs/sapi/preview/server/interfaces/BlockVolume"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"includeLiquidBlocks",id:"includeliquidblocks",level:3},{value:"includePassableBlocks",id:"includepassableblocks",level:3},{value:"maxDistance",id:"maxdistance",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains additional options for configuring a block raycast\nquery."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"includeliquidblocks"},"includeLiquidBlocks"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"includeLiquidBlocks"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If true, liquid blocks will be considered as blocks that\n'stop' the raycast."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"includepassableblocks"},"includePassableBlocks"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"includePassableBlocks"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If true, passable blocks like vines and flowers will be\nconsidered as blocks that 'stop' the raycast."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxdistance"},"maxDistance"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxDistance"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Maximum distance, in blocks, to process the raycast."))}u.isMDXComponent=!0}}]);