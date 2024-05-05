"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[95354],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>v});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),y=o,v=g["".concat(s,".").concat(y)]||g[y]||d[y]||a;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},38835:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(58168),o=(t(96540),t(15680));const a={id:"TargetBlockHitAfterEvent",title:"Class: TargetBlockHitAfterEvent",sidebar_label:"TargetBlockHitAfterEvent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/preview/server/classes/TargetBlockHitAfterEvent",id:"sapi/preview/server/classes/TargetBlockHitAfterEvent",title:"Class: TargetBlockHitAfterEvent",description:"Contains information related to changes to a target block",source:"@site/docs/sapi/preview/server/classes/TargetBlockHitAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/TargetBlockHitAfterEvent",permalink:"/docs/sapi/preview/server/classes/TargetBlockHitAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TargetBlockHitAfterEvent",title:"Class: TargetBlockHitAfterEvent",sidebar_label:"TargetBlockHitAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SystemBeforeEvents",permalink:"/docs/sapi/preview/server/classes/SystemBeforeEvents"},next:{title:"TargetBlockHitAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/TargetBlockHitAfterEventSignal"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"hitVector",id:"hitvector",level:3},{value:"previousRedstonePower",id:"previousredstonepower",level:3},{value:"redstonePower",id:"redstonepower",level:3},{value:"source",id:"source",level:3}],c={toc:p},g="wrapper";function d(e){let{components:r,...t}=e;return(0,o.yg)(g,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Contains information related to changes to a target block\nhit."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"TargetBlockHitAfterEvent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new TargetBlockHitAfterEvent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"block"},"block"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"block"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Block"},(0,o.yg)("inlineCode",{parentName:"a"},"Block"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Block impacted by this event."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"dimension"},"dimension"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"dimension"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Dimension"},(0,o.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"hitvector"},"hitVector"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"hitVector"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/Vector3"},(0,o.yg)("inlineCode",{parentName:"a"},"Vector3"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The position where the source hit the block."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"previousredstonepower"},"previousRedstonePower"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"previousRedstonePower"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The redstone power before the block is hit."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"redstonepower"},"redstonePower"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"redstonePower"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The redstone power at the time the block is hit."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"source"},"source"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"source"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,o.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Optional source that hit the target block."))}d.isMDXComponent=!0}}]);