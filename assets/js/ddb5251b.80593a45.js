"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43866],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>v});var r=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(t),m=l,v=y["".concat(s,".").concat(m)]||y[m]||d[m]||o;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[y]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(58168),l=(t(96540),t(15680));const o={id:"BlockComponentEntityFallOnEvent",title:"Class: BlockComponentEntityFallOnEvent",sidebar_label:"BlockComponentEntityFallOnEvent",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"sapi/preview/server/classes/BlockComponentEntityFallOnEvent",id:"sapi/preview/server/classes/BlockComponentEntityFallOnEvent",title:"Class: BlockComponentEntityFallOnEvent",description:"Contains information regarding an entity falling onto a",source:"@site/docs/sapi/preview/server/classes/BlockComponentEntityFallOnEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/BlockComponentEntityFallOnEvent",permalink:"/docs/sapi/preview/server/classes/BlockComponentEntityFallOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockComponentEntityFallOnEvent",title:"Class: BlockComponentEntityFallOnEvent",sidebar_label:"BlockComponentEntityFallOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockComponent",permalink:"/docs/sapi/preview/server/classes/BlockComponent"},next:{title:"BlockComponentOnPlaceEvent",permalink:"/docs/sapi/preview/server/classes/BlockComponentOnPlaceEvent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"entity",id:"entity",level:3},{value:"fallDistance",id:"falldistance",level:3}],c={toc:p},y="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Contains information regarding an entity falling onto a\nspecific block."),(0,l.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},(0,l.yg)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,l.yg)("p",{parentName:"li"},"\u21b3 ",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"BlockComponentEntityFallOnEvent"))))),(0,l.yg)("h2",{id:"constructors"},"Constructors"),(0,l.yg)("h3",{id:"constructor"},"constructor"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,l.yg)("strong",{parentName:"p"},"new BlockComponentEntityFallOnEvent"),"()"),(0,l.yg)("h4",{id:"overrides"},"Overrides"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#constructor"},"constructor")),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("h3",{id:"block"},"block"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.yg)("strong",{parentName:"p"},"block"),": ",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Block"},(0,l.yg)("inlineCode",{parentName:"a"},"Block"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.yg)("p",null,"Block impacted by this event."),(0,l.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"dimension"},"dimension"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.yg)("strong",{parentName:"p"},"dimension"),": ",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Dimension"},(0,l.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,l.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"entity"},"entity"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.yg)("strong",{parentName:"p"},"entity"),": ",(0,l.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Entity"},(0,l.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.yg)("p",null,"The entity that fell onto the block."),(0,l.yg)("hr",null),(0,l.yg)("h3",{id:"falldistance"},"fallDistance"),(0,l.yg)("p",null,"\u2022 ",(0,l.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.yg)("strong",{parentName:"p"},"fallDistance"),": ",(0,l.yg)("inlineCode",{parentName:"p"},"number")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,l.yg)("p",null,"The distance that the entity fell onto this block with."))}d.isMDXComponent=!0}}]);