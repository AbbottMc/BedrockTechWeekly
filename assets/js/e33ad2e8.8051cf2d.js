"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},20161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"BoundingBox",title:"Interface: BoundingBox",sidebar_label:"BoundingBox",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/interfaces/BoundingBox",id:"sapi/preview/server/interfaces/BoundingBox",title:"Interface: BoundingBox",description:"A BoundingBox is an interface to an object which represents",source:"@site/docs/sapi/preview/server/interfaces/BoundingBox.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/BoundingBox",permalink:"/docs/sapi/preview/server/interfaces/BoundingBox",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BoundingBox",title:"Interface: BoundingBox",sidebar_label:"BoundingBox",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockRaycastOptions",permalink:"/docs/sapi/preview/server/interfaces/BlockRaycastOptions"},next:{title:"CameraDefaultOptions",permalink:"/docs/sapi/preview/server/interfaces/CameraDefaultOptions"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"max",id:"max",level:3},{value:"min",id:"min",level:3}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A BoundingBox is an interface to an object which represents\nan AABB aligned rectangle.\nThe BoundingBox assumes that it was created in a valid state\n(min <= max) but cannot guarantee it (unless it was created\nusing the associated ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/modules"},"@minecraft-server.BoundingBoxUtils")," utility functions.\nThe min/max coordinates represent the diametrically opposite\ncorners of the rectangle.\nThe BoundingBox is not a representation of blocks - it has\nno association with any type, it is just a mathematical\nconstruct - so a rectangle with\n( 0,0,0 ) -> ( 0,0,0 )\nhas a size of ( 0,0,0 ) (unlike the very similar ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockVolume"},"BlockVolume")," object)"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"max"},"max"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"max"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/modules"},"@minecraft-server.Vector3")," that represents the\nlargest corner of the rectangle"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"min"},"min"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"min"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,a.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/modules"},"@minecraft-server.Vector3")," that represents the\nsmallest corner of the rectangle"))}u.isMDXComponent=!0}}]);