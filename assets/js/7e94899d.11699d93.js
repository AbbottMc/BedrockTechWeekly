"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[7414],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>g});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},v="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=p(n),d=a,g=v["".concat(l,".").concat(d)]||v[d]||y[d]||i;return n?t.createElement(g,o(o({ref:r},c),{},{components:n})):t.createElement(g,o({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[v]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58356:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=n(58168),a=(n(96540),n(15680));const i={id:"LeverActionAfterEvent",title:"Class: LeverActionAfterEvent",sidebar_label:"LeverActionAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/preview/server/classes/LeverActionAfterEvent",id:"sapi/preview/server/classes/LeverActionAfterEvent",title:"Class: LeverActionAfterEvent",description:"Contains information related to changes to a lever",source:"@site/docs/sapi/preview/server/classes/LeverActionAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/LeverActionAfterEvent",permalink:"/docs/sapi/preview/server/classes/LeverActionAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"LeverActionAfterEvent",title:"Class: LeverActionAfterEvent",sidebar_label:"LeverActionAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemUseOnEvent",permalink:"/docs/sapi/preview/server/classes/ItemUseOnEvent"},next:{title:"LeverActionAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/LeverActionAfterEventSignal"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"isPowered",id:"ispowered",level:3},{value:"player",id:"player",level:3}],c={toc:p},v="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(v,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains information related to changes to a lever\nactivating or deactivating."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("p",null,"leverActionEvent.ts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import { world, system, LeverActionAfterEvent } from '@minecraft/server';\n\nworld.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {\n    console.warn(\n        `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,\n    );\n});\n\n")),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"LeverActionAfterEvent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new LeverActionAfterEvent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"block"},"block"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"block"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Block"},(0,a.yg)("inlineCode",{parentName:"a"},"Block"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Block impacted by this event."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"dimension"},"dimension"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"dimension"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Dimension"},(0,a.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"ispowered"},"isPowered"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"isPowered"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"True if the lever is activated (that is, transmitting\npower)."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"player"},"player"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"player"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Optional player that triggered the lever activation."))}y.isMDXComponent=!0}}]);