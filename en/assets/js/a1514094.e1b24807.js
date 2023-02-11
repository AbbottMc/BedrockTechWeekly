"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[90195],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(a),u=r,N=m["".concat(s,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4453:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"World",title:"Class: World",sidebar_label:"World",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"sapi/preview/server/classes/World",id:"sapi/preview/server/classes/World",title:"Class: World",description:"A class that wraps the state of a world - a set of",source:"@site/docs/sapi/preview/server/classes/World.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/World",permalink:"/en/docs/sapi/preview/server/classes/World",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"World",title:"Class: World",sidebar_label:"World",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"WeatherChangeEventSignal",permalink:"/en/docs/sapi/preview/server/classes/WeatherChangeEventSignal"},next:{title:"WorldInitializeEvent",permalink:"/en/docs/sapi/preview/server/classes/WorldInitializeEvent"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"events",id:"events",level:3},{value:"scoreboard",id:"scoreboard",level:3},{value:"Methods",id:"methods",level:2},{value:"broadcastClientMessage",id:"broadcastclientmessage",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getAbsoluteTime",id:"getabsolutetime",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getAllPlayers",id:"getallplayers",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getDefaultSpawnPosition",id:"getdefaultspawnposition",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getDimension",id:"getdimension",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-4",level:4},{value:"getDynamicProperty",id:"getdynamicproperty",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-5",level:4},{value:"getPlayers",id:"getplayers",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-6",level:4},{value:"getTime",id:"gettime",level:3},{value:"Returns",id:"returns-7",level:4},{value:"playMusic",id:"playmusic",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-8",level:4},{value:"playSound",id:"playsound",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-9",level:4},{value:"queueMusic",id:"queuemusic",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-10",level:4},{value:"removeDynamicProperty",id:"removedynamicproperty",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-11",level:4},{value:"sendMessage",id:"sendmessage",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"setDefaultSpawn",id:"setdefaultspawn",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-13",level:4},{value:"setDynamicProperty",id:"setdynamicproperty",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-14",level:4},{value:"setTime",id:"settime",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-15",level:4},{value:"stopMusic",id:"stopmusic",level:3},{value:"Returns",id:"returns-16",level:4}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A class that wraps the state of a world - a set of\ndimensions and the environment of Minecraft."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"events"},"events"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"events"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Events"},(0,r.kt)("inlineCode",{parentName:"a"},"Events"))),(0,r.kt)("p",null,"Contains a set of events that are applicable to the entirety\nof the world."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scoreboard"},"scoreboard"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"scoreboard"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Scoreboard"},(0,r.kt)("inlineCode",{parentName:"a"},"Scoreboard"))),(0,r.kt)("p",null,"Returns the general global scoreboard that applies to the\nworld."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"broadcastclientmessage"},"broadcastClientMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"broadcastClientMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"A method that is internal-only, used for broadcasting\nspecific messages between client and server."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getabsolutetime"},"getAbsoluteTime"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAbsoluteTime"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns the absolute time since the start of the world."),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getallplayers"},"getAllPlayers"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getAllPlayers"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns an array of all active players within the world."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Player"},(0,r.kt)("inlineCode",{parentName:"a"},"Player")),"[]"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdefaultspawnposition"},"getDefaultSpawnPosition"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDefaultSpawnPosition"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdimension"},"getDimension"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDimension"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionId"),"): ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,r.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a dimension object."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"Throws if the given dimension name is invalid"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dimensionId")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,r.kt)("inlineCode",{parentName:"a"},"Dimension"))),(0,r.kt)("p",null,"The requested dimension"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getdynamicproperty"},"getDynamicProperty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getDynamicProperty"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns a property value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifier")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Returns the value for the property, or undefined if the\nproperty has not been set."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getplayers"},"getPlayers"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getPlayers"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerIterator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns all players currently in the world."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/EntityQueryOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityQueryOptions")))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/PlayerIterator"},(0,r.kt)("inlineCode",{parentName:"a"},"PlayerIterator"))),(0,r.kt)("p",null,"All players currently in the world."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettime"},"getTime"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTime"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Sets the current game time of the day."),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playmusic"},"playMusic"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"playMusic"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"trackID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"musicOptions?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Plays a particular music track for all players."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trackID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"musicOptions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/MusicOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"MusicOptions")))))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"playsound"},"playSound"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"playSound"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"soundID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"soundOptions?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Plays a sound for all players."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"soundID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"soundOptions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/SoundOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"SoundOptions")))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"queuemusic"},"queueMusic"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"queueMusic"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"trackID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"musicOptions?"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Queues an additional music track for players. If a track is\nnot playing, a music track will play."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"trackID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"musicOptions?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/MusicOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"MusicOptions")))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removedynamicproperty"},"removeDynamicProperty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"removeDynamicProperty"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Removes a specified property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifier")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sendmessage"},"sendMessage"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sendMessage"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"message")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"RawMessage"))," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"RawMessage")),")[]")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdefaultspawn"},"setDefaultSpawn"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDefaultSpawn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"spawnPosition"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spawnPosition")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/interfaces/Vector3"},(0,r.kt)("inlineCode",{parentName:"a"},"Vector3")))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setdynamicproperty"},"setDynamicProperty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setDynamicProperty"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"identifier"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Sets a specified property to a value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This function can throw errors."),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"identifier")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data value of the property to set.")))),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"settime"},"setTime"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"setTime"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"timeOfDay"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns the current game time of the day."),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeOfDay")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stopmusic"},"stopMusic"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"stopMusic"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Stops any music tracks from playing."),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")))}m.isMDXComponent=!0}}]);