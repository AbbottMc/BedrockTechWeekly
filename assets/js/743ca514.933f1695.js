"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[7124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,k=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={id:"BlockEventOptions",title:"Interface: BlockEventOptions",sidebar_label:"BlockEventOptions",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/stable/server/interfaces/BlockEventOptions",id:"sapi/stable/server/interfaces/BlockEventOptions",title:"Interface: BlockEventOptions",description:"Contains optional parameters for registering a block event.",source:"@site/docs/sapi/stable/server/interfaces/BlockEventOptions.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/BlockEventOptions",permalink:"/docs/sapi/stable/server/interfaces/BlockEventOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockEventOptions",title:"Interface: BlockEventOptions",sidebar_label:"BlockEventOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockCustomComponent",permalink:"/docs/sapi/stable/server/interfaces/BlockCustomComponent"},next:{title:"BlockFillOptions",permalink:"/docs/sapi/stable/server/interfaces/BlockFillOptions"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"blockTypes",id:"blocktypes",level:3},{value:"permutations",id:"permutations",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains optional parameters for registering a block event."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"blocktypes"},"blockTypes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"blockTypes"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"If this value is set, this event will only fire if the\nimpacted block's type matches this parameter."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"permutations"},"permutations"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"permutations"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockPermutation")),"[]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"If this value is set, this event will only fire if the\nimpacted block's permutation matches this parameter."))}u.isMDXComponent=!0}}]);