"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34127],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),g=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(r),c=n,y=p["".concat(o,".").concat(c)]||p[c]||d[c]||l;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var g=2;g<l;g++)i[g]=r[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},73498:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=r(58168),n=(r(96540),r(15680));const l={id:"Structure",title:"Class: Structure",sidebar_label:"Structure",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/Structure",id:"sapi/stable/server/classes/Structure",title:"Class: Structure",description:"Represents a loaded structure template (.mcstructure file).",source:"@site/docs/sapi/stable/server/classes/Structure.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/Structure",permalink:"/docs/sapi/stable/server/classes/Structure",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Structure",title:"Class: Structure",sidebar_label:"Structure",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ServerMessageAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/ServerMessageAfterEventSignal"},next:{title:"StructureManager",permalink:"/docs/sapi/stable/server/classes/StructureManager"}},o={},g=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"size",id:"size",level:3},{value:"Methods",id:"methods",level:2},{value:"getBlockPermutation",id:"getblockpermutation",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getIsWaterlogged",id:"getiswaterlogged",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns-2",level:4},{value:"saveAs",id:"saveas",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"saveToWorld",id:"savetoworld",level:3},{value:"Returns",id:"returns-4",level:4},{value:"setBlockPermutation",id:"setblockpermutation",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4}],u={toc:g},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Represents a loaded structure template (.mcstructure file).\nStructures can be placed in a world using the /structure\ncommand or the ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/StructureManager"},"StructureManager")," APIs."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new Structure"),"()"),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"id"},"id"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.yg)("strong",{parentName:"p"},"id"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,'The name of the structure. The identifier must include a\nnamespace. For structures created via the /structure command\nor structure blocks, this namespace defaults to\n"mystructure".'),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"size"},"size"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.yg)("strong",{parentName:"p"},"size"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.yg)("inlineCode",{parentName:"a"},"Vector3"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"The dimensions of the structure. For example, a single block\nstructure will have a size of {x:1, y:1, z:1}"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This property can throw when used."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"getblockpermutation"},"getBlockPermutation"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getBlockPermutation"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"location"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,n.yg)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns a BlockPermutation representing the block contained\nwithin the Structure at the given location."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"Throws if the location is outside the structure's bounds.\nThrows if the Structure has been deleted."),(0,n.yg)("p",null,"minecraftcommon.InvalidArgumentError"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"location")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.yg)("inlineCode",{parentName:"a"},"Vector3"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The block location relative to the Structure's origin.")))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,n.yg)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,n.yg)("p",null,"Returns a BlockPermutation. Returns undefined if a block\ndoes not exist at the given location."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getiswaterlogged"},"getIsWaterlogged"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getIsWaterlogged"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"location"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns whether the block at the given location is\nwaterlogged."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"Throws if the location is outside the structure's bounds.\nThrows if the Structure has been deleted."),(0,n.yg)("p",null,"minecraftcommon.InvalidArgumentError"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"location")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.yg)("inlineCode",{parentName:"a"},"Vector3"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The block location relative to the Structure's origin.")))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("p",null,"Returns whether the block at the given location is\nwaterlogged. Returns false if a block does not exist at the\ngiven location."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"isvalid"},"isValid"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns whether the Structure is valid. The Structure may\nbecome invalid if it is deleted."),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("p",null,"Returns whether the Structure is valid."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"saveas"},"saveAs"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"saveAs"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"identifier"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"saveMode?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Structure"},(0,n.yg)("inlineCode",{parentName:"a"},"Structure"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Creates a copy of a Structure and saves it with a new name."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"Throws if the identifier is invalid. A valid identifier must\ninclude a namespace and must be unique.\nThrows if the Structure has been deleted."),(0,n.yg)("p",null,"minecraftcommon.EngineError"),(0,n.yg)("p",null,"minecraftcommon.InvalidArgumentError"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"identifier")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"The name of the newly created Structure.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"saveMode?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/enums/StructureSaveMode"},(0,n.yg)("inlineCode",{parentName:"a"},"StructureSaveMode"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Determines how the Structure should be saved. Defaults to saving to the world.")))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Structure"},(0,n.yg)("inlineCode",{parentName:"a"},"Structure"))),(0,n.yg)("p",null,"Returns the newly created structure."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"savetoworld"},"saveToWorld"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"saveToWorld"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Saves a modified Structure to the world file."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"Throws if the Structure has been deleted."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setblockpermutation"},"setBlockPermutation"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setBlockPermutation"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"location"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"blockPermutation?"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"waterlogged?"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets a BlockPermutation within a Structure."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"Throws if the type of block is StructureVoid.\nThrows if the block is undefined and waterlogged is set to\ntrue.\nThrows if the block is air and waterlogged is set to true.\nThrows if the location is outside the structure's bounds.\nThrows if the Structure has been deleted."),(0,n.yg)("p",null,"minecraftcommon.InvalidArgumentError"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/InvalidStructureError"},"InvalidStructureError")),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"location")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,n.yg)("inlineCode",{parentName:"a"},"Vector3"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The block location relative to the Structure's origin.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"blockPermutation?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/BlockPermutation"},(0,n.yg)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The BlockPermutation to set.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"waterlogged?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Specifies whether the block should be waterlogged. Air and undefined blocks cannot be waterlogged.")))),(0,n.yg)("h4",{id:"returns-5"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);