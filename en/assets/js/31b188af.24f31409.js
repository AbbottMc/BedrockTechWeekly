"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,k=u["".concat(l,".").concat(d)]||u[d]||v[d]||o;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const o={id:"ButtonPushAfterEvent",title:"Class: ButtonPushAfterEvent",sidebar_label:"ButtonPushAfterEvent",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"sapi/preview/server/classes/ButtonPushAfterEvent",id:"sapi/preview/server/classes/ButtonPushAfterEvent",title:"Class: ButtonPushAfterEvent",description:"Contains information related to changes to a button push.",source:"@site/docs/sapi/preview/server/classes/ButtonPushAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ButtonPushAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/ButtonPushAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ButtonPushAfterEvent",title:"Class: ButtonPushAfterEvent",sidebar_label:"ButtonPushAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BoundingBoxUtils",permalink:"/en/docs/sapi/preview/server/classes/BoundingBoxUtils"},next:{title:"ButtonPushAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/ButtonPushAfterEventSignal"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"source",id:"source",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Contains information related to changes to a button push."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,s.kt)("p",null,"buttonPushEvent.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"import { world, ButtonPushAfterEvent, system } from '@minecraft/server';\n\nworld.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {\n    const eventLoc = buttonPushEvent.block.location;\n\n    world.sendMessage(\n        `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,\n    );\n});\n")),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},(0,s.kt)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"ButtonPushAfterEvent"))))),(0,s.kt)("h2",{id:"constructors"},"Constructors"),(0,s.kt)("h3",{id:"constructor"},"constructor"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,s.kt)("strong",{parentName:"p"},"new ButtonPushAfterEvent"),"()"),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#constructor"},"constructor")),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"block"},"block"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"block"),": ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,s.kt)("inlineCode",{parentName:"a"},"Block"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"Block impacted by this event."),(0,s.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"dimension"},"dimension"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"dimension"),": ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,s.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,s.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"source"},"source"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"source"),": ",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,s.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,s.kt)("p",null,"Optional source that triggered the button push."))}u.isMDXComponent=!0}}]);