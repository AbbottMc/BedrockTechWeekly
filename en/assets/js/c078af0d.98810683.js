"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[67522],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>c});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),m=s(t),g=i,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return t?r.createElement(c,o(o({ref:n},y),{},{components:t})):r.createElement(c,o({ref:n},y))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},52681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(58168),i=(t(96540),t(15680));const a={id:"EntityTypeFamilyComponent",title:"Class: EntityTypeFamilyComponent",sidebar_label:"EntityTypeFamilyComponent",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/classes/EntityTypeFamilyComponent",id:"sapi/preview/server/classes/EntityTypeFamilyComponent",title:"Class: EntityTypeFamilyComponent",description:"Base class for downstream entity components.",source:"@site/docs/sapi/preview/server/classes/EntityTypeFamilyComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityTypeFamilyComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityTypeFamilyComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityTypeFamilyComponent",title:"Class: EntityTypeFamilyComponent",sidebar_label:"EntityTypeFamilyComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityType",permalink:"/en/docs/sapi/preview/server/classes/EntityType"},next:{title:"EntityTypeIterator",permalink:"/en/docs/sapi/preview/server/classes/EntityTypeIterator"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"getTypeFamilies",id:"gettypefamilies",level:3},{value:"Returns",id:"returns",level:4},{value:"hasTypeFamily",id:"hastypefamily",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],y={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Base class for downstream entity components."),(0,i.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},(0,i.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,i.yg)("p",{parentName:"li"},"\u21b3 ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"EntityTypeFamilyComponent"))))),(0,i.yg)("h2",{id:"constructors"},"Constructors"),(0,i.yg)("h3",{id:"constructor"},"constructor"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,i.yg)("strong",{parentName:"p"},"new EntityTypeFamilyComponent"),"()"),(0,i.yg)("h4",{id:"overrides"},"Overrides"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent#constructor"},"constructor")),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"entity"},"entity"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"entity"),": ",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Entity"},(0,i.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,i.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent#entity"},"entity")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"typeid"},"typeId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"typeId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Identifier of the component."),(0,i.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent#typeid"},"typeId")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"componentid"},"componentId"),(0,i.yg)("p",null,"\u25aa ",(0,i.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,i.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.yg)("strong",{parentName:"p"},"componentId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},'"minecraft:type_family"')),(0,i.yg)("h2",{id:"methods"},"Methods"),(0,i.yg)("h3",{id:"gettypefamilies"},"getTypeFamilies"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"getTypeFamilies"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.yg)("p",null,"This function can throw errors."),(0,i.yg)("h4",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"hastypefamily"},"hasTypeFamily"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"hasTypeFamily"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"typeFamily"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.yg)("p",null,"This function can throw errors."),(0,i.yg)("h4",{id:"parameters"},"Parameters"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"typeFamily")),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"string"))))),(0,i.yg)("h4",{id:"returns-1"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"isvalid"},"isValid"),(0,i.yg)("p",null,"\u25b8 ",(0,i.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,i.yg)("h4",{id:"returns-2"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,"Whether the component is valid."),(0,i.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent"},"EntityComponent"),".",(0,i.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/EntityComponent#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);