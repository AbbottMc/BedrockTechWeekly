"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43490],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={id:"Component",title:"Class: Component",sidebar_label:"Component",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/Component",id:"sapi/preview/server/classes/Component",title:"Class: Component",description:"Base class for downstream Component implementations.",source:"@site/docs/sapi/preview/server/classes/Component.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Component",permalink:"/docs/sapi/preview/server/classes/Component",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Component",title:"Class: Component",sidebar_label:"Component",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"CommandResult",permalink:"/docs/sapi/preview/server/classes/CommandResult"},next:{title:"CompoundBlockVolume",permalink:"/docs/sapi/preview/server/classes/CompoundBlockVolume"}},p={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"typeId",id:"typeid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4}],c={toc:l},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Base class for downstream Component implementations."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Component"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/BlockComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"BlockComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/EntityComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"ItemComponent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new Component"),"()"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"typeid"},"typeId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"typeId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Identifier of the component."),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"isvalid"},"isValid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.yg)("h4",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Whether the component is valid."))}m.isMDXComponent=!0}}]);