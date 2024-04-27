"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(n),m=o,u=k["".concat(i,".").concat(m)]||k[m]||d[m]||a;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"BlockComponentPlayerDestroyEvent",title:"Class: BlockComponentPlayerDestroyEvent",sidebar_label:"BlockComponentPlayerDestroyEvent",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/classes/BlockComponentPlayerDestroyEvent",id:"sapi/stable/server/classes/BlockComponentPlayerDestroyEvent",title:"Class: BlockComponentPlayerDestroyEvent",description:"Contains information regarding a specific block being",source:"@site/docs/sapi/stable/server/classes/BlockComponentPlayerDestroyEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockComponentPlayerDestroyEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockComponentPlayerDestroyEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockComponentPlayerDestroyEvent",title:"Class: BlockComponentPlayerDestroyEvent",sidebar_label:"BlockComponentPlayerDestroyEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockComponentOnPlaceEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockComponentOnPlaceEvent"},next:{title:"BlockComponentPlayerInteractEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockComponentPlayerInteractEvent"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"destroyedBlockPermutation",id:"destroyedblockpermutation",level:3},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"player",id:"player",level:3}],c={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains information regarding a specific block being\ndestroyed."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"BlockComponentPlayerDestroyEvent"))))),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,o.kt)("strong",{parentName:"p"},"new BlockComponentPlayerDestroyEvent"),"()"),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#constructor"},"constructor")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"block"},"block"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"block"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,o.kt)("inlineCode",{parentName:"a"},"Block"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Block impacted by this event."),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#block"},"block")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"destroyedblockpermutation"},"destroyedBlockPermutation"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"destroyedBlockPermutation"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockPermutation"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Returns permutation information about this block before it\nwas destroyed."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dimension"},"dimension"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"dimension"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension"},(0,o.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,o.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockEvent#dimension"},"dimension")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"player"},"player"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"player"),": ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Player"},(0,o.kt)("inlineCode",{parentName:"a"},"Player"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.kt)("p",null,"The player that destroyed this block."))}k.isMDXComponent=!0}}]);