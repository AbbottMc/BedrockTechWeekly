"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[16668],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return t?r.createElement(m,i(i({ref:n},y),{},{components:t})):r.createElement(m,i({ref:n},y))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={id:"EntityAttributeComponent",title:"Class: EntityAttributeComponent",sidebar_label:"EntityAttributeComponent",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/stable/server/classes/EntityAttributeComponent",id:"sapi/stable/server/classes/EntityAttributeComponent",title:"Class: EntityAttributeComponent",description:"This is a base abstract class for any entity component that",source:"@site/docs/sapi/stable/server/classes/EntityAttributeComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityAttributeComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityAttributeComponent",title:"Class: EntityAttributeComponent",sidebar_label:"EntityAttributeComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityAgeableComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityAgeableComponent"},next:{title:"EntityBaseMovementComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityBaseMovementComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"currentValue",id:"currentvalue",level:3},{value:"defaultValue",id:"defaultvalue",level:3},{value:"effectiveMax",id:"effectivemax",level:3},{value:"effectiveMin",id:"effectivemin",level:3},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"resetToDefaultValue",id:"resettodefaultvalue",level:3},{value:"Returns",id:"returns-1",level:4},{value:"resetToMaxValue",id:"resettomaxvalue",level:3},{value:"Returns",id:"returns-2",level:4},{value:"resetToMinValue",id:"resettominvalue",level:3},{value:"Returns",id:"returns-3",level:4},{value:"setCurrentValue",id:"setcurrentvalue",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4}],y={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This is a base abstract class for any entity component that\ncenters around a number and can have a minimum, maximum, and\ndefault defined value."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"EntityAttributeComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityHealthComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityHealthComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityLavaMovementComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityLavaMovementComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityMovementComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityMovementComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityUnderwaterMovementComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityUnderwaterMovementComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntityAttributeComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"currentvalue"},"currentValue"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"currentValue"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Current value of this attribute for this instance."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"defaultvalue"},"defaultValue"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"defaultValue"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the default defined value for this attribute."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"effectivemax"},"effectiveMax"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"effectiveMax"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the effective max of this attribute given any other\nambient components or factors."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"effectivemin"},"effectiveMin"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"effectiveMin"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the effective min of this attribute given any other\nambient components or factors."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"entity"},"entity"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"entity"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettodefaultvalue"},"resetToDefaultValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToDefaultValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the defined\ndefault value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettomaxvalue"},"resetToMaxValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToMaxValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the maximum\ndefined value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettominvalue"},"resetToMinValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToMinValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the minimum\ndefined value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-3"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"setcurrentvalue"},"setCurrentValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"setCurrentValue"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Sets the current value of this attribute."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"value")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"number"))))),(0,a.yg)("h4",{id:"returns-4"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")))}g.isMDXComponent=!0}}]);