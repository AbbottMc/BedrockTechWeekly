"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[28863],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=a,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(u,o(o({ref:t},d),{},{components:r})):n.createElement(u,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4848:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"ClipboardItem",title:"Class: ClipboardItem",sidebar_label:"ClipboardItem",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server-editor/classes/ClipboardItem",id:"sapi/preview/server-editor/classes/ClipboardItem",title:"Class: ClipboardItem",description:"A ClipboardItem is a handle to an object which represents a",source:"@site/docs/sapi/preview/server-editor/classes/ClipboardItem.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/ClipboardItem",permalink:"/en/docs/sapi/preview/server-editor/classes/ClipboardItem",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ClipboardItem",title:"Class: ClipboardItem",sidebar_label:"ClipboardItem",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BrushShapeManager",permalink:"/en/docs/sapi/preview/server-editor/classes/BrushShapeManager"},next:{title:"ClipboardManager",permalink:"/en/docs/sapi/preview/server-editor/classes/ClipboardManager"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"isEmpty",id:"isempty",level:3},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns",level:4},{value:"getPredictedWriteAsCompoundBlockVolume",id:"getpredictedwriteascompoundblockvolume",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getPredictedWriteAsSelection",id:"getpredictedwriteasselection",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getSize",id:"getsize",level:3},{value:"Returns",id:"returns-3",level:4},{value:"readFromSelection",id:"readfromselection",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-4",level:4},{value:"readFromWorld",id:"readfromworld",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-5",level:4},{value:"writeToWorld",id:"writetoworld",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ClipboardItem is a handle to an object which represents a\nset of blocks in a contained bounding area (most likely\ncopied from the world)"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new ClipboardItem"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"isempty"},"isEmpty"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"isEmpty"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Return whether there is any block content in the item"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This property can throw when used."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"clear"},"clear"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Clear the contents of the item"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getpredictedwriteascompoundblockvolume"},"getPredictedWriteAsCompoundBlockVolume"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getPredictedWriteAsCompoundBlockVolume"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"CompoundBlockVolume")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules"},"@minecraft/server.CompoundBlockVolume"),"\ncontainer which represents the occupied block volumes within\nthe ClipboardItem.\nThis function does not perform any write operations, and\ninstead returns only a prediction of the volume area which\nwould be affected as part of a write operation with a given\nset of write options."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"location")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A world location to which the ClipboardItem may potentially be written (nothing is actually written as part of this operation)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ClipboardWriteOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"An optional set of write parameters which govern how the ClipboardItem should be potentially applied to the world")))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompoundBlockVolume")),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules"},"@minecraft/server.CompoundBlockVolume")," which\nrepresents the occupied block volumes within the\nClipboardItem as they would be written to the world with the\nspecified ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},"ClipboardWriteOptions")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getpredictedwriteasselection"},"getPredictedWriteAsSelection"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getPredictedWriteAsSelection"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," container which represents the\noccupied block volumes within the ClipboardItem.\nThis function does not perform any write operations, and\ninstead returns only a prediction of the volume area which\nwould be affected as part of a write operation with a given\nset of write options."),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"location")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A world location to which the ClipboardItem may potentially be written (nothing is actually written as part of this operation)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ClipboardWriteOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"An optional set of write parameters which govern how the ClipboardItem should be potentially applied to the world")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," which represents the occupied block\nvolumes within the ClipboardItem as they would be written to\nthe world with the specified ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},"ClipboardWriteOptions")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getsize"},"getSize"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getSize"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Get the bounding size of the ClipboardItem"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readfromselection"},"readFromSelection"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readFromSelection"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"selection"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Copy the contents of the area represented by a ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},"Selection")," volume into the ClipboardItem"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"selection")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},(0,a.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"A volume which represents the area to be copied")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"readfromworld"},"readFromWorld"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"readFromWorld"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"to"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Copy the contents of a rectangular volume into the Clipboard\nItem"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"from")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The world location of one corner of a bounding volume")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"to")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The world location of the opposite corner of a bounding volume")))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"writetoworld"},"writeToWorld"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"writeToWorld"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"location"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Apply the contents of a ClipboardItem to the world at a\ngiven location using a set of write options"),(0,a.kt)("p",null,"This function can't be called in read-only mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"This function can throw errors."),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"location")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The root point of the world location to which the ClipboardItem is written (this is modified by the various anchor, offset and rotation parameters of the ",(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},"ClipboardWriteOptions"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},(0,a.kt)("inlineCode",{parentName:"a"},"ClipboardWriteOptions"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"An optional set of write parameters which modify the properties of the ClipboardItem as it is applied to the world")))),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Success or Failure"))}m.isMDXComponent=!0}}]);