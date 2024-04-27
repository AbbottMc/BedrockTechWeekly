"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[56594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,u=c["".concat(s,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={id:"TransactionManager",title:"Class: TransactionManager",sidebar_label:"TransactionManager",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server-editor/classes/TransactionManager",id:"sapi/preview/server-editor/classes/TransactionManager",title:"Class: TransactionManager",description:"The Transaction Manager is responsible for tracking and",source:"@site/docs/sapi/preview/server-editor/classes/TransactionManager.md",sourceDirName:"sapi/preview/server-editor/classes",slug:"/sapi/preview/server-editor/classes/TransactionManager",permalink:"/en/docs/sapi/preview/server-editor/classes/TransactionManager",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TransactionManager",title:"Class: TransactionManager",sidebar_label:"TransactionManager",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"SimulationState",permalink:"/en/docs/sapi/preview/server-editor/classes/SimulationState"},next:{title:"UserDefinedTransactionHandle",permalink:"/en/docs/sapi/preview/server-editor/classes/UserDefinedTransactionHandle"}},s={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"addUserDefinedOperation",id:"adduserdefinedoperation",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"commitOpenTransaction",id:"commitopentransaction",level:3},{value:"Returns",id:"returns-1",level:4},{value:"commitTrackedChanges",id:"committrackedchanges",level:3},{value:"Returns",id:"returns-2",level:4},{value:"createUserDefinedTransactionHandler",id:"createuserdefinedtransactionhandler",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-3",level:4},{value:"discardOpenTransaction",id:"discardopentransaction",level:3},{value:"Returns",id:"returns-4",level:4},{value:"discardTrackedChanges",id:"discardtrackedchanges",level:3},{value:"Returns",id:"returns-5",level:4},{value:"openTransaction",id:"opentransaction",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"redo",id:"redo",level:3},{value:"Returns",id:"returns-7",level:4},{value:"redoSize",id:"redosize",level:3},{value:"Returns",id:"returns-8",level:4},{value:"trackBlockChangeArea",id:"trackblockchangearea",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"trackBlockChangeCompoundBlockVolume",id:"trackblockchangecompoundblockvolume",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"trackBlockChangeList",id:"trackblockchangelist",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"trackBlockChangeSelection",id:"trackblockchangeselection",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"undo",id:"undo",level:3},{value:"Returns",id:"returns-13",level:4},{value:"undoSize",id:"undosize",level:3},{value:"Returns",id:"returns-14",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Transaction Manager is responsible for tracking and\nmanaging all of the registered transaction operations which\nrepresent creator changes in the world.\nTransaction Manager is the basis of the UNDO and REDO\noperations, and allows a creator to store the changes made\nto the world and the state of the world BEFORE those changes\nwere applied, making it possible to UNDO those changes and\nrestore the world state.\nThe transactions are stored as a stack, and can be undone in\nstack order to restore the world to it's original state"),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new TransactionManager"),"()"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"adduserdefinedoperation"},"addUserDefinedOperation"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"addUserDefinedOperation"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"transactionHandlerId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operationData"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operationName?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionHandlerId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/classes/UserDefinedTransactionHandlerId"},(0,r.kt)("inlineCode",{parentName:"a"},"UserDefinedTransactionHandlerId")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operationName?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"commitopentransaction"},"commitOpenTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"commitOpenTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Commit all of the transaction operations currently attached\nto the open transaction record to the manager.  These will\nbe added as a single transaction manager entry.\nThe open record will be closed and all tracking operations\nwill cease."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"committrackedchanges"},"commitTrackedChanges"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"commitTrackedChanges"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function will commit the pending changes caused by any\nof the track changes variants.  The changes will be\ncommitted to the currently open transaction, but the\ntransaction will remain open for further records.\nPending block changes from tracking operations will be added\nto the transaction record before submission to the\ntransaction manager"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Returns the number of change requests that were being\ntracked"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"createuserdefinedtransactionhandler"},"createUserDefinedTransactionHandler"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"createUserDefinedTransactionHandler"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"undoClosure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redoClosure"),"): ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/UserDefinedTransactionHandlerId"},(0,r.kt)("inlineCode",{parentName:"a"},"UserDefinedTransactionHandlerId"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undoClosure")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"redoClosure")),(0,r.kt)("td",{parentName:"tr",align:"left"},"(",(0,r.kt)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"void"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/classes/UserDefinedTransactionHandlerId"},(0,r.kt)("inlineCode",{parentName:"a"},"UserDefinedTransactionHandlerId"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"discardopentransaction"},"discardOpenTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"discardOpenTransaction"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Discard the currently open transaction without committing it\nto the transaction manager stack.\nAll records within the transaction will be discarded, and\nany tracking requests currently active will be stopped"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"discardtrackedchanges"},"discardTrackedChanges"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"discardTrackedChanges"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Discard any pending tracked changes.  This does not affect\nthe current open transaction contents, only the pending\ntracked block operations"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Returns the number of change requests that were discarded"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"opentransaction"},"openTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"openTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Open a transaction record which will be a container for any\nnumber of transaction operations.\nAll transaction operations within a record are grouped and\ntreated as a single atomic unit"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Give the transaction record a name")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"redo"},"redo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"redo"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Perform an redo operation.  This will take the last\ntransaction record on the redo stack and store the current\nworld state and then apply the changes in the record.  This\nwill reduce the redo record stack by one."),(0,r.kt)("p",null,"The transaction record affected by this operation will be\ntransferred to the undo stack in case the creator decides to\nundo it"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"redosize"},"redoSize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"redoSize"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return the number of transaction records on the redo stack."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackblockchangearea"},"trackBlockChangeArea"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"trackBlockChangeArea"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"to"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Begin tracking block changes in a specified area.  These\nwill be added to a pending changes list.\nThe pending list will be added to the open transaction\nrecord when a commit has been issued."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"from")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Min block location of a bounding area")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max block location of a bounding area")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackblockchangecompoundblockvolume"},"trackBlockChangeCompoundBlockVolume"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"trackBlockChangeCompoundBlockVolume"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"compoundBlockVolume"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Begin tracking block changes in an area defined by a ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules"},"@minecraft-server/CompoundBlockVolume"),".  These will be added\nto a pending changes list.\nThe pending list will be added to the open transaction\nrecord when a commit has been issued."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"compoundBlockVolume")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CompoundBlockVolume")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/modules"},"@minecraft-server/CompoundBlockVolume")," to track. Only non-void block locations will be tracked -- any changes falling into a void/negative space will not be tracked")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackblockchangelist"},"trackBlockChangeList"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"trackBlockChangeList"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"locations"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Begin tracking block changes in a list of specified block\nlocations."),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"locations")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Vector3"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of block locations to monitor for changes")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"trackblockchangeselection"},"trackBlockChangeSelection"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"trackBlockChangeSelection"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"selection"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Begin tracking block changes that may happen in a selection\nvolume.\nThe volume is copied, so tracking will not move if the\nselection volume is translated after this instruction is\nissued.\nSelection Volumes can also represent irregular shapes with\nnon-contiguous blocks and this tracking call will honor the\nactual selected areas in the volume (and not the negative\nspace) (see ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server-editor/modules"},"@minecraft-server/CompoundBlockVolume"),"\nfor more details"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"selection")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server-editor/classes/Selection"},(0,r.kt)("inlineCode",{parentName:"a"},"Selection"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"A collection of block location volumes represented by a Selection volume to monitor for changes. The Selection Volume is copied, so further changes to the volume after this call will not be reflected in the tracking list.")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"undo"},"undo"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"undo"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Perform an undo operation.  This will take the last\ntransaction record on the stack and apply the stored world\nstate from before the changes were made.  This will reduce\nthe record stack by one."),(0,r.kt)("p",null,"The transaction record affected by this operation will be\ntransferred to the redo stack in case the creator decides to\nreapply it"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"undosize"},"undoSize"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"undoSize"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Return how many transactions records currently exist on the\nstack"),(0,r.kt)("p",null,"This function can't be called in read-only mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")))}c.isMDXComponent=!0}}]);