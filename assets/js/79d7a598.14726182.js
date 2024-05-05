"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[83189],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=l,g=u["".concat(s,".").concat(y)]||u[y]||d[y]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},33126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(58168),l=(r(96540),r(15680));const i={id:"BlockFilter",title:"Interface: BlockFilter",sidebar_label:"BlockFilter",sidebar_position:0,custom_edit_url:null},a=void 0,o={unversionedId:"sapi/stable/server/interfaces/BlockFilter",id:"sapi/stable/server/interfaces/BlockFilter",title:"Interface: BlockFilter",description:"Properties",source:"@site/docs/sapi/stable/server/interfaces/BlockFilter.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/BlockFilter",permalink:"/docs/sapi/stable/server/interfaces/BlockFilter",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockFilter",title:"Interface: BlockFilter",sidebar_label:"BlockFilter",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockFillOptions",permalink:"/docs/sapi/stable/server/interfaces/BlockFillOptions"},next:{title:"BlockHitInformation",permalink:"/docs/sapi/stable/server/interfaces/BlockHitInformation"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"excludePermutations",id:"excludepermutations",level:3},{value:"excludeTags",id:"excludetags",level:3},{value:"excludeTypes",id:"excludetypes",level:3},{value:"includePermutations",id:"includepermutations",level:3},{value:"includeTags",id:"includetags",level:3},{value:"includeTypes",id:"includetypes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("h3",{id:"excludepermutations"},"excludePermutations"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"excludePermutations"),": ",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,l.yg)("inlineCode",{parentName:"a"},"BlockPermutation")),"[]"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"excludetags"},"excludeTags"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"excludeTags"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"excludetypes"},"excludeTypes"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"excludeTypes"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"includepermutations"},"includePermutations"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"includePermutations"),": ",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,l.yg)("inlineCode",{parentName:"a"},"BlockPermutation")),"[]"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"includetags"},"includeTags"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"includeTags"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"includetypes"},"includeTypes"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("strong",{parentName:"p"},"includeTypes"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"string"),"[]"))}d.isMDXComponent=!0}}]);