"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},k="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,m=k["".concat(i,".").concat(d)]||k[d]||v[d]||s;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[k]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"BlockEvent",title:"Class: BlockEvent",sidebar_label:"BlockEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/BlockEvent",id:"sapi/stable/server/classes/BlockEvent",title:"Class: BlockEvent",description:"Contains information regarding an event that impacts a",source:"@site/docs/sapi/stable/server/classes/BlockEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockEvent",permalink:"/docs/sapi/stable/server/classes/BlockEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockEvent",title:"Class: BlockEvent",sidebar_label:"BlockEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockComponent",permalink:"/docs/sapi/stable/server/classes/BlockComponent"},next:{title:"BlockExplodeEvent",permalink:"/docs/sapi/stable/server/classes/BlockExplodeEvent"}},i={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"dimension",id:"dimension",level:3}],p={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information regarding an event that impacts a\nspecific block."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"BlockEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BeforePistonActivateEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BeforePistonActivateEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockBreakEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockBreakEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockExplodeEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockExplodeEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPlaceEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPlaceEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ButtonPushEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"ButtonPushEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/LeverActionEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"LeverActionEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/PistonActivateEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"PistonActivateEvent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"block"},"block"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,"Block impacted by this event."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dimension"},"dimension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"dimension"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Dimension"},(0,a.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."))}k.isMDXComponent=!0}}]);