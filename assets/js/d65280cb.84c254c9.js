"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[63271],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,y=u["".concat(l,".").concat(g)]||u[g]||m[g]||s;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const s={id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/preview/server/classes/ItemStartUseOnAfterEvent",id:"sapi/preview/server/classes/ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/preview/server/classes/ItemStartUseOnAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemStartUseOnAfterEvent",permalink:"/docs/sapi/preview/server/classes/ItemStartUseOnAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemStartUseAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/ItemStartUseAfterEventSignal"},next:{title:"ItemStartUseOnAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/ItemStartUseOnAfterEventSignal"}},l={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"blockFace",id:"blockface",level:3},{value:"itemStack",id:"itemstack",level:3},{value:"source",id:"source",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains information related to an item being used on a\nblock. This event fires when a player presses the the Use\nItem / Place Block button to successfully use an item or\nplace a block. Fires for the first block that is interacted\nwith when performing a build action. Note: This event cannot\nbe used with Hoe or Axe items."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ItemStartUseOnAfterEvent"),"()"),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"block"},"block"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"block"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Block"},(0,a.yg)("inlineCode",{parentName:"a"},"Block"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The block that the item is used on."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"blockface"},"blockFace"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"blockFace"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/enums/Direction"},(0,a.yg)("inlineCode",{parentName:"a"},"Direction"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The face of the block that an item is being used on."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"itemstack"},"itemStack"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"itemStack"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemStack"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The impacted item stack that is starting to be used. Can be\nundefined in some gameplay scenarios like pushing a button\nwith an empty hand."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"source"},"source"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"source"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the source entity that triggered this item event."))}m.isMDXComponent=!0}}]);