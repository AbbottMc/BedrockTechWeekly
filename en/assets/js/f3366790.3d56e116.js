"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[37540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(r),v=a,u=k["".concat(i,".").concat(v)]||k[v]||d[v]||l;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=v;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},20518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"PlayerPlaceBlockAfterEvent",title:"Class: PlayerPlaceBlockAfterEvent",sidebar_label:"PlayerPlaceBlockAfterEvent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/stable/server/classes/PlayerPlaceBlockAfterEvent",id:"sapi/stable/server/classes/PlayerPlaceBlockAfterEvent",title:"Class: PlayerPlaceBlockAfterEvent",description:"Contains information regarding an event where a player",source:"@site/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerPlaceBlockAfterEvent",title:"Class: PlayerPlaceBlockAfterEvent",sidebar_label:"PlayerPlaceBlockAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerLeaveBeforeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/PlayerLeaveBeforeEventSignal"},next:{title:"PlayerPlaceBlockAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal"}},i={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"player",id:"player",level:3}],p={toc:c};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information regarding an event where a player\nplaces a block."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PlayerPlaceBlockAfterEvent"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new PlayerPlaceBlockAfterEvent"),"()"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#constructor"},"constructor")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"block"},"block"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Block impacted by this event."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#block"},"block")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dimension"},"dimension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"dimension"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension"},(0,a.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#dimension"},"dimension")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"player"},"player"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"player"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Player that placed the block for this event."))}k.isMDXComponent=!0}}]);