"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32815],{15680:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},y),{},{components:n})):r.createElement(g,l({ref:t},y))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={id:"EntityUnderwaterMovementComponent",title:"Class: EntityUnderwaterMovementComponent",sidebar_label:"EntityUnderwaterMovementComponent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/EntityUnderwaterMovementComponent",id:"sapi/stable/server/classes/EntityUnderwaterMovementComponent",title:"Class: EntityUnderwaterMovementComponent",description:"Defines the general movement speed underwater of this",source:"@site/docs/sapi/stable/server/classes/EntityUnderwaterMovementComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityUnderwaterMovementComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityUnderwaterMovementComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityUnderwaterMovementComponent",title:"Class: EntityUnderwaterMovementComponent",sidebar_label:"EntityUnderwaterMovementComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityTypes",permalink:"/en/docs/sapi/stable/server/classes/EntityTypes"},next:{title:"EntityVariantComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityVariantComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"currentValue",id:"currentvalue",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"defaultValue",id:"defaultvalue",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"effectiveMax",id:"effectivemax",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"effectiveMin",id:"effectivemin",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"resetToDefaultValue",id:"resettodefaultvalue",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"resetToMaxValue",id:"resettomaxvalue",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"resetToMinValue",id:"resettominvalue",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"setCurrentValue",id:"setcurrentvalue",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-10",level:4}],y={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Defines the general movement speed underwater of this\nentity."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},(0,a.yg)("inlineCode",{parentName:"a"},"EntityAttributeComponent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"EntityUnderwaterMovementComponent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new EntityUnderwaterMovementComponent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"currentvalue"},"currentValue"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"currentValue"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Current value of this attribute for this instance."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#currentvalue"},"currentValue")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"defaultvalue"},"defaultValue"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"defaultValue"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the default defined value for this attribute."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#defaultvalue"},"defaultValue")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"effectivemax"},"effectiveMax"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"effectiveMax"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the effective max of this attribute given any other\nambient components or factors."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#effectivemax"},"effectiveMax")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"effectivemin"},"effectiveMin"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"effectiveMin"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns the effective min of this attribute given any other\nambient components or factors."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This property can throw when used."),(0,a.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#effectivemin"},"effectiveMin")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"entity"},"entity"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"entity"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,a.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#entity"},"entity")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"typeid"},"typeId"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"typeId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Identifier of the component."),(0,a.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#typeid"},"typeId")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"componentid"},"componentId"),(0,a.yg)("p",null,"\u25aa ",(0,a.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"componentId"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"minecraft:underwater_movement"')),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"isvalid"},"isValid"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Whether the component is valid."),(0,a.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#isvalid"},"isValid")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettodefaultvalue"},"resetToDefaultValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToDefaultValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the defined\ndefault value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#resettodefaultvalue"},"resetToDefaultValue")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettomaxvalue"},"resetToMaxValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToMaxValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the maximum\ndefined value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#resettomaxvalue"},"resetToMaxValue")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"resettominvalue"},"resetToMinValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"resetToMinValue"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Resets the current value of this attribute to the minimum\ndefined value."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"returns-3"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#resettominvalue"},"resetToMinValue")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"setcurrentvalue"},"setCurrentValue"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"setCurrentValue"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"value"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Sets the current value of this attribute."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"value")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"number"))))),(0,a.yg)("h4",{id:"returns-4"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent"},"EntityAttributeComponent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityAttributeComponent#setcurrentvalue"},"setCurrentValue")))}d.isMDXComponent=!0}}]);