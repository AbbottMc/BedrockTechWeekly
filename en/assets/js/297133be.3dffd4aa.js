"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"ScriptEventCommandMessageEvent",title:"Class: ScriptEventCommandMessageEvent",sidebar_label:"ScriptEventCommandMessageEvent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/preview/server/classes/ScriptEventCommandMessageEvent",id:"sapi/preview/server/classes/ScriptEventCommandMessageEvent",title:"Class: ScriptEventCommandMessageEvent",description:"Returns additional data about a /scriptevent command",source:"@site/docs/sapi/preview/server/classes/ScriptEventCommandMessageEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ScriptEventCommandMessageEvent",permalink:"/en/docs/sapi/preview/server/classes/ScriptEventCommandMessageEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ScriptEventCommandMessageEvent",title:"Class: ScriptEventCommandMessageEvent",sidebar_label:"ScriptEventCommandMessageEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ScreenDisplay",permalink:"/en/docs/sapi/preview/server/classes/ScreenDisplay"},next:{title:"ScriptEventCommandMessageSignal_deprecated",permalink:"/en/docs/sapi/preview/server/classes/ScriptEventCommandMessageSignal_deprecated"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"initiator",id:"initiator",level:3},{value:"message",id:"message",level:3},{value:"sourceBlock",id:"sourceblock",level:3},{value:"sourceEntity",id:"sourceentity",level:3},{value:"sourceType",id:"sourcetype",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns additional data about a /scriptevent command\ninvocation."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Identifier of this ScriptEvent command message."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"initiator"},"initiator"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"initiator"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"If this command was initiated via an NPC, returns the entity\nthat initiated the NPC dialogue."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Optional additional data passed in with the script event\ncommand."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourceblock"},"sourceBlock"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"sourceBlock"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,"Source block if this command was triggered via a block\n(e.g., a commandblock.)"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourceentity"},"sourceEntity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"sourceEntity"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,"Source entity if this command was triggered by an entity\n(e.g., a NPC)."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sourcetype"},"sourceType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"sourceType"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/enums/MessageSourceType"},(0,a.kt)("inlineCode",{parentName:"a"},"MessageSourceType"))),(0,a.kt)("p",null,"Returns the type of source that fired this command."))}d.isMDXComponent=!0}}]);