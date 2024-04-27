"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),k=p(a),m=r,u=k["".concat(i,".").concat(m)]||k[m]||d[m]||l;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[k]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},12309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"BlockVolume",title:"Class: BlockVolume",sidebar_label:"BlockVolume",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"sapi/stable/server/classes/BlockVolume",id:"sapi/stable/server/classes/BlockVolume",title:"Class: BlockVolume",description:"A BlockVolume is a simple interface to an object which",source:"@site/docs/sapi/stable/server/classes/BlockVolume.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockVolume",permalink:"/docs/sapi/stable/server/classes/BlockVolume",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockVolume",title:"Class: BlockVolume",sidebar_label:"BlockVolume",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockTypes",permalink:"/docs/sapi/stable/server/classes/BlockTypes"},next:{title:"BlockVolumeBase",permalink:"/docs/sapi/stable/server/classes/BlockVolumeBase"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"from",id:"from",level:3},{value:"to",id:"to",level:3},{value:"Methods",id:"methods",level:2},{value:"doesLocationTouchFaces",id:"doeslocationtouchfaces",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns",level:4},{value:"doesVolumeTouchFaces",id:"doesvolumetouchfaces",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getBlockLocationIterator",id:"getblocklocationiterator",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"getBoundingBox",id:"getboundingbox",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"getCapacity",id:"getcapacity",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"getMax",id:"getmax",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"getMin",id:"getmin",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"getSpan",id:"getspan",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"intersects",id:"intersects",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"isInside",id:"isinside",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"translate",id:"translate",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-7",level:4}],c={toc:p};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'A BlockVolume is a simple interface to an object which\nrepresents a 3D rectangle of a given size (in blocks) at a\nworld block location.\nNote that these are not analogous to "min" and "max" values,\nin that the vector components are not guaranteed to be in\nany order.\nIn addition, these vector positions are not interchangeable\nwith BlockLocation.\nIf you want to get this volume represented as range of of\nBlockLocations, you can use the getBoundingBox utility\nfunction.\nThis volume class will maintain the ordering of the corner\nindexes as initially set. imagine that each corner is\nassigned in Editor - as you move the corner around\n(potentially inverting the min/max relationship of the\nbounds) - what\nyou had originally selected as the top/left corner would\ntraditionally become the bottom/right.\nWhen manually editing these kinds of volumes, you need to\nmaintain the identity of the corner as you edit - the\nBlockVolume utility functions do this.'),(0,r.kt)("p",null,"Important to note that this measures block sizes (to/from) -\na normal AABB (0,0,0) to (0,0,0) would traditionally be of\nsize (0,0,0)\nHowever, because we're measuring blocks - the size or span\nof a BlockVolume would actually be (1,1,1)"),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockVolumeBase"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BlockVolume"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new BlockVolume"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),")"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"from"},"from"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"from"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"A world block location that represents a corner in a 3D\nrectangle"),(0,r.kt)("p",null,"This property can't be edited in read-only mode."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"to"},"to"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"to"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"A world block location that represents the opposite corner\nin a 3D rectangle"),(0,r.kt)("p",null,"This property can't be edited in read-only mode."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"doeslocationtouchfaces"},"doesLocationTouchFaces"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"doesLocationTouchFaces"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pos"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Check to see if the given location is directly adjacent to\nthe outer surface of a BlockVolume."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pos")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The world block location to test")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"If the location is either inside or more than 0 blocks away,\nthe function will return false.\nIf the location is directly contacting the outer surface of\nthe BlockVolume, the function will return true."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"doesvolumetouchfaces"},"doesVolumeTouchFaces"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"doesVolumeTouchFaces"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Check to see if a two block volumes are directly adjacent\nand two faces touch."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/BlockVolume"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockVolume"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The volume to test")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"If the outer faces of both block volumes touch and are\ndirectly adjacent at any point, return true."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getblocklocationiterator"},"getBlockLocationIterator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBlockLocationIterator"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocationIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockLocationIterator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Fetch a ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocationIterator"},"BlockLocationIterator")," that represents all of\nthe block world locations within the specified volume"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockLocationIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockLocationIterator"))),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getblocklocationiterator"},"getBlockLocationIterator")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getboundingbox"},"getBoundingBox"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBoundingBox"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/BoundingBox"},(0,r.kt)("inlineCode",{parentName:"a"},"BoundingBox"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return a ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/BoundingBox"},"BoundingBox")," object which represents the\nvalidated min and max coordinates of the volume"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/BoundingBox"},(0,r.kt)("inlineCode",{parentName:"a"},"BoundingBox"))),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getboundingbox"},"getBoundingBox")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getcapacity"},"getCapacity"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCapacity"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return the capacity (volume) of the BlockVolume (W",(0,r.kt)("em",{parentName:"p"},"D"),"H)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getcapacity"},"getCapacity")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmax"},"getMax"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMax"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Get the largest corner position of the volume (guaranteed to\nbe >= min)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getmax"},"getMax")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getmin"},"getMin"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getMin"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Get the smallest corner position of the volume (guaranteed\nto be <= max)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getmin"},"getMin")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getspan"},"getSpan"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSpan"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Get a ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},"Vector3")," object where each component represents\nthe number of blocks along that axis"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getspan"},"getSpan")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"intersects"},"intersects"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"intersects"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/BlockVolumeIntersection"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockVolumeIntersection"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return an enumeration which represents the intersection\nbetween two BlockVolume objects"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/BlockVolume"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockVolume")))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/enums/BlockVolumeIntersection"},(0,r.kt)("inlineCode",{parentName:"a"},"BlockVolumeIntersection"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isinside"},"isInside"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isInside"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pos"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Check to see if a given world block location is inside a\nBlockVolume"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pos")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#isinside"},"isInside")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"translate"},"translate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"translate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Move a BlockVolume by a specified amount"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/stable/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amount of blocks to move by")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase"},"BlockVolumeBase"),".",(0,r.kt)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/BlockVolumeBase#translate"},"translate")))}k.isMDXComponent=!0}}]);