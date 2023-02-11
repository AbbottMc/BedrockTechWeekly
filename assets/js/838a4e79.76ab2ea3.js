"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||v[u]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"PistonActivateEvent",title:"Class: PistonActivateEvent",sidebar_label:"PistonActivateEvent",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/stable/server/classes/PistonActivateEvent",id:"sapi/stable/server/classes/PistonActivateEvent",title:"Class: PistonActivateEvent",description:"Contains information related to changes to a piston",source:"@site/docs/sapi/stable/server/classes/PistonActivateEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PistonActivateEvent",permalink:"/docs/sapi/stable/server/classes/PistonActivateEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PistonActivateEvent",title:"Class: PistonActivateEvent",sidebar_label:"PistonActivateEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"NumberRange",permalink:"/docs/sapi/stable/server/classes/NumberRange"},next:{title:"PistonActivateEventSignal",permalink:"/docs/sapi/stable/server/classes/PistonActivateEventSignal"}},l={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Overrides",id:"overrides",level:4},{value:"dimension",id:"dimension",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"isExpanding",id:"isexpanding",level:3},{value:"piston",id:"piston",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to changes to a piston\nexpanding or retracting."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"PistonActivateEvent"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"block"},"block"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,"Block impacted by this event."),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent#block"},"block")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dimension"},"dimension"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"dimension"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Dimension"},(0,a.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.kt)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,a.kt)("h4",{id:"overrides-1"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockEvent#dimension"},"dimension")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isexpanding"},"isExpanding"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"isExpanding"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"True if the piston is the process of expanding."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"piston"},"piston"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"piston"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPistonComponent"},(0,a.kt)("inlineCode",{parentName:"a"},"BlockPistonComponent"))),(0,a.kt)("p",null,"Contains additional properties and details of the piston."))}d.isMDXComponent=!0}}]);