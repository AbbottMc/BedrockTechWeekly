"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24323],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(t),m=a,v=k["".concat(s,".").concat(m)]||k[m]||d[m]||i;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[k]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},16927:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={id:"BlockBreakAfterEvent",title:"Class: BlockBreakAfterEvent",sidebar_label:"BlockBreakAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/classes/BlockBreakAfterEvent",id:"sapi/preview/server/classes/BlockBreakAfterEvent",title:"Class: BlockBreakAfterEvent",description:"Contains information regarding an event where a player",source:"@site/docs/sapi/preview/server/classes/BlockBreakAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockBreakAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/BlockBreakAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockBreakAfterEvent",title:"Class: BlockBreakAfterEvent",sidebar_label:"BlockBreakAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockAreaSize",permalink:"/en/docs/sapi/preview/server/classes/BlockAreaSize"},next:{title:"BlockBreakAfterEventSignal_deprecated",permalink:"/en/docs/sapi/preview/server/classes/BlockBreakAfterEventSignal_deprecated"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"brokenBlockPermutation",id:"brokenblockpermutation",level:3},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"player",id:"player",level:3}],c={toc:p};function k(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information regarding an event where a player\nbreaks a block."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BlockBreakAfterEvent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"block"},"block"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Block impacted by this event."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"brokenblockpermutation"},"brokenBlockPermutation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"brokenBlockPermutation"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns permutation information about this block before it\nwas broken."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dimension"},"dimension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"dimension"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,a.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"player"},"player"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"player"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Player that broke the block for this event."))}k.isMDXComponent=!0}}]);