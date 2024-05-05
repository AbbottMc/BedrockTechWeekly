"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14812],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(t),m=o,g=y["".concat(i,".").concat(m)]||y[m]||d[m]||a;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[y]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),o=(t(96540),t(15680));const a={id:"BlockComponentStepOnEvent",title:"Class: BlockComponentStepOnEvent",sidebar_label:"BlockComponentStepOnEvent",sidebar_position:0,custom_edit_url:null},s=void 0,l={unversionedId:"sapi/stable/server/classes/BlockComponentStepOnEvent",id:"sapi/stable/server/classes/BlockComponentStepOnEvent",title:"Class: BlockComponentStepOnEvent",description:"Contains information regarding an entity stepping onto a",source:"@site/docs/sapi/stable/server/classes/BlockComponentStepOnEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockComponentStepOnEvent",permalink:"/docs/sapi/stable/server/classes/BlockComponentStepOnEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockComponentStepOnEvent",title:"Class: BlockComponentStepOnEvent",sidebar_label:"BlockComponentStepOnEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockComponentStepOffEvent",permalink:"/docs/sapi/stable/server/classes/BlockComponentStepOffEvent"},next:{title:"BlockComponentTickEvent",permalink:"/docs/sapi/stable/server/classes/BlockComponentTickEvent"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"entity",id:"entity",level:3}],c={toc:p},y="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(y,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Contains information regarding an entity stepping onto a\nspecific block."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"BlockComponentStepOnEvent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new BlockComponentStepOnEvent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"block"},"block"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"block"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,o.yg)("inlineCode",{parentName:"a"},"Block"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Block impacted by this event."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent#block"},"block")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"dimension"},"dimension"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"dimension"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Dimension"},(0,o.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent#dimension"},"dimension")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"entity"},"entity"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"entity"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,o.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"The entity that stepped on the block."))}d.isMDXComponent=!0}}]);