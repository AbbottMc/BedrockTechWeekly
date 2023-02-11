"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[39080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"BeforeExplosionEvent",title:"Class: BeforeExplosionEvent",sidebar_label:"BeforeExplosionEvent",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/BeforeExplosionEvent",id:"sapi/stable/server/classes/BeforeExplosionEvent",title:"Class: BeforeExplosionEvent",description:"Contains information regarding an explosion that has",source:"@site/docs/sapi/stable/server/classes/BeforeExplosionEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BeforeExplosionEvent",permalink:"/docs/sapi/stable/server/classes/BeforeExplosionEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BeforeExplosionEvent",title:"Class: BeforeExplosionEvent",sidebar_label:"BeforeExplosionEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BeforeDataDrivenEntityTriggerEventSignal",permalink:"/docs/sapi/stable/server/classes/BeforeDataDrivenEntityTriggerEventSignal"},next:{title:"BeforeExplosionEventSignal",permalink:"/docs/sapi/stable/server/classes/BeforeExplosionEventSignal"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"cancel",id:"cancel",level:3},{value:"dimension",id:"dimension",level:3},{value:"impactedBlocks",id:"impactedblocks",level:3},{value:"source",id:"source",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Contains information regarding an explosion that has\nhappened."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cancel"},"cancel"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"cancel"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"If set to true, cancels the explosion event."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"dimension"},"dimension"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"dimension"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Dimension"},(0,o.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,o.kt)("p",null,"Dimension where the explosion has occurred."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"impactedblocks"},"impactedBlocks"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"impactedBlocks"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocation"},(0,o.kt)("inlineCode",{parentName:"a"},"BlockLocation")),"[]"),(0,o.kt)("p",null,"A collection of blocks impacted by this explosion event.\nNote that this property can be updated to change the set of\nblocks impacted."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"source"},"source"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"source"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,o.kt)("p",null,"Optional source of the explosion."))}u.isMDXComponent=!0}}]);