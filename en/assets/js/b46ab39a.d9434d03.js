"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[5419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=a,c=k["".concat(s,".").concat(u)]||k[u]||m[u]||i;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"EntityRideableComponent",title:"Class: EntityRideableComponent",sidebar_label:"EntityRideableComponent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/EntityRideableComponent",id:"sapi/stable/server/classes/EntityRideableComponent",title:"Class: EntityRideableComponent",description:"When added, this component adds the capability that an",source:"@site/docs/sapi/stable/server/classes/EntityRideableComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityRideableComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityRideableComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityRideableComponent",title:"Class: EntityRideableComponent",sidebar_label:"EntityRideableComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityRemoveBeforeEventSignal",permalink:"/en/docs/sapi/stable/server/classes/EntityRemoveBeforeEventSignal"},next:{title:"EntityRidingComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityRidingComponent"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"controllingSeat",id:"controllingseat",level:3},{value:"crouchingSkipInteract",id:"crouchingskipinteract",level:3},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"interactText",id:"interacttext",level:3},{value:"passengerMaxWidth",id:"passengermaxwidth",level:3},{value:"pullInEntities",id:"pullinentities",level:3},{value:"riderCanInteract",id:"ridercaninteract",level:3},{value:"seatCount",id:"seatcount",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"addRider",id:"addrider",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"ejectRider",id:"ejectrider",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"ejectRiders",id:"ejectriders",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getFamilyTypes",id:"getfamilytypes",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getRiders",id:"getriders",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getSeats",id:"getseats",level:3},{value:"Returns",id:"returns-5",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],d={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When added, this component adds the capability that an\nentity can be ridden by another entity."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},(0,a.kt)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"EntityRideableComponent"))))),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new EntityRideableComponent"),"()"),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"controllingseat"},"controllingSeat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"controllingSeat"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Zero-based index of the seat that can used to control this\nentity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crouchingskipinteract"},"crouchingSkipInteract"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"crouchingSkipInteract"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Determines whether interactions are not supported if the\nentity is crouching."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entity"},"entity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"entity"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"interacttext"},"interactText"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"interactText"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Set of text that should be displayed when a player is\nlooking to ride on this entity (commonly with touch-screen\ncontrols)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"passengermaxwidth"},"passengerMaxWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"passengerMaxWidth"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The max width a mob can be to be a passenger."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pullinentities"},"pullInEntities"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"pullInEntities"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If true, this entity will pull in entities that are in the\ncorrect family_types into any available seat."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ridercaninteract"},"riderCanInteract"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"riderCanInteract"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"If true, this entity will be picked when looked at by the\nrider."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"seatcount"},"seatCount"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"seatCount"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Number of seats for riders defined for this entity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"typeid"},"typeId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"typeId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Identifier of the component."),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"componentid"},"componentId"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"componentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"minecraft:rideable"')),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"addrider"},"addRider"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"addRider"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"rider"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Adds an entity to this entity as a rider."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"rider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Entity that will become the rider of this entity.")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"True if the rider entity was successfully added."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ejectrider"},"ejectRider"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"ejectRider"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"rider"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Ejects the specified rider of this entity."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"rider")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Entity that should be ejected from this entity.")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"ejectriders"},"ejectRiders"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"ejectRiders"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Ejects all riders of this entity."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getfamilytypes"},"getFamilyTypes"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getFamilyTypes"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"A string-list of entity types that this entity can support\nas riders."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getriders"},"getRiders"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getRiders"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Gets a list of the all the entities currently riding this\nentity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,a.kt)("inlineCode",{parentName:"a"},"Entity")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getseats"},"getSeats"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSeats"),"(): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Seat"},(0,a.kt)("inlineCode",{parentName:"a"},"Seat")),"[]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Gets a list of positions and number of riders for each\nposition for entities riding this entity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Seat"},(0,a.kt)("inlineCode",{parentName:"a"},"Seat")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"isvalid"},"isValid"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isValid"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Whether the component is valid."),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")))}k.isMDXComponent=!0}}]);