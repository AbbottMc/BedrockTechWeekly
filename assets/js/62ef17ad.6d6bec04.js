"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[93208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,c=k["".concat(p,".").concat(d)]||k[d]||m[d]||a;return n?l.createElement(c,o(o({ref:t},u),{},{components:n})):l.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={id:"Selection",title:"Class: Selection",sidebar_label:"Selection",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server-editor/classes/Selection",id:"sapi/preview/server-editor/classes/Selection",title:"Class: Selection",description:"The Selection represents a volume in space, which may",source:"@site/docs/sapi/preview/server-editor/classes/Selection.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/Selection",permalink:"/docs/sapi/preview/server-editor/classes/Selection",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Selection",title:"Class: Selection",sidebar_label:"Selection",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ProbabilityBlockPaletteItem",permalink:"/docs/sapi/preview/server-editor/classes/ProbabilityBlockPaletteItem"},next:{title:"SelectionEventAfterEvent",permalink:"/docs/sapi/preview/server-editor/classes/SelectionEventAfterEvent"}},p={},s=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"isEmpty",id:"isempty",level:3},{value:"visible",id:"visible",level:3},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns",level:4},{value:"getBlockLocationIterator",id:"getblocklocationiterator",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getBoundingBox",id:"getboundingbox",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getFillColor",id:"getfillcolor",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getOutlineColor",id:"getoutlinecolor",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getVolumeOrigin",id:"getvolumeorigin",level:3},{value:"Returns",id:"returns-5",level:4},{value:"moveBy",id:"moveby",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-6",level:4},{value:"moveTo",id:"moveto",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-7",level:4},{value:"peekLastVolume",id:"peeklastvolume",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"popVolume",id:"popvolume",level:3},{value:"Returns",id:"returns-9",level:4},{value:"pushVolume",id:"pushvolume",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-10",level:4},{value:"set",id:"set",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-11",level:4},{value:"setFillColor",id:"setfillcolor",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-12",level:4},{value:"setOutlineColor",id:"setoutlinecolor",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-13",level:4}],u={toc:s};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Selection represents a volume in space, which may\npotentially be made up of one or more block locations.\nThese block locations do not need to be contiguous, and a\nSelection represent an irregular shape.\nIt's important to note that a Selection is only a\nrepresentation of the volume shape space - and does NOT\nrepresent the actual contents of the space."),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new Selection"),"()"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"isempty"},"isEmpty"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"isEmpty"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a boolean representing whether or not there are any\nvolumes pushed to the selection stack"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"visible"},"visible"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"visible"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Set whether or not the selection volume is visible to the\nclient user.\nNOTE: Use this option carefully - Selection volumes are\ngenerally server-only, but marking a volume as visible\ncauses the volume (and all volume operations) to be\nsynchronized with the client game which can potentially\ngenerate excessive network traffic."),(0,r.kt)("p",null,"This property can't be edited in read-only mode."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"clear"},"clear"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"clear"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Clear the contents of the Selection"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getblocklocationiterator"},"getBlockLocationIterator"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBlockLocationIterator"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockLocationIterator")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Fetch a block iterator which can be used to step across the\nSelection shape.  Each call to the iterator will return the\nnext block location within the Selection bounds which is\nactually selected.\nBlock iteration is not guaranteed to be contiguous - it is\npossible to create irregular selection shapes by adding\nvolumes to a selection which may or may not be contiguous or\nadjacent to other volumes within the selection.\nThe Block iterator will return only selected volume\nlocations"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BlockLocationIterator")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getboundingbox"},"getBoundingBox"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getBoundingBox"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BoundingBox")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return a bounding rectangle that contains all of the volumes\nwithin the selection (the bounding rectangle does NOT\nrepresent the shape of the selection, only the largest\nrectangle that will fit all of the volumes)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BoundingBox")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfillcolor"},"getFillColor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getFillColor"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"RGBA")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return the color of the on-screen selection container hull"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RGBA")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getoutlinecolor"},"getOutlineColor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getOutlineColor"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"RGBA")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return the color of the on-screen selection container\noutline"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RGBA")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getvolumeorigin"},"getVolumeOrigin"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getVolumeOrigin"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Get the origin of the CompoundBlockVolume that makes up the\nblock component part of selection"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"moveby"},"moveBy"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"moveBy"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"delta"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Translate a selection by a given amount (this causes all of\nthe volumes within the selection to be moved by the\nspecified offset)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"delta")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount by which to move")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Return the newly moved position"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"moveto"},"moveTo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"moveTo"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Move the selection to an absolute world location (causing\nall of the volumes within the selection to be moved to a\nlocation relative to the world location)"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"location")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The world location to which to relocate the selection")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector3")),(0,r.kt)("p",null,"Return the newly moved position"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"peeklastvolume"},"peekLastVolume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"peekLastVolume"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"forceRelativity?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"CompoundBlockVolumeItem")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Fetch the volume information of the last compound volume\nthat was pushed to the volume stack without affecting the\nstack itself"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"forceRelativity?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CompoundBlockVolumePositionRelativity")),(0,r.kt)("td",{parentName:"tr",align:"left"},"See the description for ",(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules"},"@minecraft-server/CompoundBlockVolume.peekLastVolume"))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CompoundBlockVolumeItem")),(0,r.kt)("p",null,"Returns undefined if the stack is empty"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"popvolume"},"popVolume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"popVolume"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Remove the volume information that was last pushed to the\nvolume stack.  This will reduce the stack item length by 1"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pushvolume"},"pushVolume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"pushVolume"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"item"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Push a compound volume item (a volume and action pair) to\nthe volume stack."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"item")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CompoundBlockVolumeItem")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Item to push to the stack")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set"},"set"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"set"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"other"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Replace the contents of the current selection with a new\nspecified selection.  This operation will delete the current\ncontents and copy the contents of the new selection to the\ntarget selection - it does this by content, not by\nreference."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"other")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CompoundBlockVolume")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/classes/Selection"},(0,r.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules"},"@minecraft-server/CompoundBlockVolume")," - set the block component part of this selection to the specified compound block volume. This will completely replace all block volume definitions in the selection. ",(0,r.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server-editor/modules"},"@Selection")," - replace the selection with the specified selection")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setfillcolor"},"setFillColor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setFillColor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"color"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Set the color of the hull of the selection object if it is\nvisible."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RGBA"))))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setoutlinecolor"},"setOutlineColor"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setOutlineColor"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"color"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Set the color of the outline around the selection object if\nit is visible"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RGBA"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}k.isMDXComponent=!0}}]);