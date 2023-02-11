"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[63479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),u=s,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={id:"EntityIsChestedComponent",title:"Class: EntityIsChestedComponent",sidebar_label:"EntityIsChestedComponent",sidebar_position:0,custom_edit_url:null},o=void 0,a={unversionedId:"sapi/stable/server/classes/EntityIsChestedComponent",id:"sapi/stable/server/classes/EntityIsChestedComponent",title:"Class: EntityIsChestedComponent",description:"When added, this component signifies that this entity is",source:"@site/docs/sapi/stable/server/classes/EntityIsChestedComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityIsChestedComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityIsChestedComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityIsChestedComponent",title:"Class: EntityIsChestedComponent",sidebar_label:"EntityIsChestedComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityIsChargedComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityIsChargedComponent"},next:{title:"EntityIsDyableComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityIsDyableComponent"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides",level:4},{value:"componentId",id:"componentid",level:3}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When added, this component signifies that this entity is\ncurrently carrying a chest."),(0,s.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},(0,s.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,s.kt)("p",{parentName:"li"},"\u21b3 ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"EntityIsChestedComponent"))))),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"typeid"},"typeId"),(0,s.kt)("p",null,"\u2022 ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"typeId"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"string")),(0,s.kt)("p",null,"Identifier of this component. Should always be\nminecraft:is_chested."),(0,s.kt)("h4",{id:"overrides"},"Overrides"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,s.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent#typeid"},"typeId")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"componentid"},"componentId"),(0,s.kt)("p",null,"\u25aa ",(0,s.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,s.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,s.kt)("strong",{parentName:"p"},"componentId"),": ",(0,s.kt)("inlineCode",{parentName:"p"},'"minecraft:is_chested"')),(0,s.kt)("p",null,"Identifier of this component. Should always be\nminecraft:is_chested."))}d.isMDXComponent=!0}}]);