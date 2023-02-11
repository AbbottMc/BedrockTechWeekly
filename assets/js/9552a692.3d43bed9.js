"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,b=c["".concat(o,".").concat(m)]||c[m]||k[m]||i;return a?r.createElement(b,l(l({ref:t},d),{},{components:a})):r.createElement(b,l({ref:t},d))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},20371:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={id:"Scoreboard",title:"Class: Scoreboard",sidebar_label:"Scoreboard",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"sapi/preview/server/classes/Scoreboard",id:"sapi/preview/server/classes/Scoreboard",title:"Class: Scoreboard",description:"Contains objectives and participants for the scoreboard.",source:"@site/docs/sapi/preview/server/classes/Scoreboard.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/Scoreboard",permalink:"/docs/sapi/preview/server/classes/Scoreboard",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Scoreboard",title:"Class: Scoreboard",sidebar_label:"Scoreboard",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"PropertyRegistry",permalink:"/docs/sapi/preview/server/classes/PropertyRegistry"},next:{title:"ScoreboardIdentity",permalink:"/docs/sapi/preview/server/classes/ScoreboardIdentity"}},o={},s=[{value:"Methods",id:"methods",level:2},{value:"addObjective",id:"addobjective",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"clearObjectiveAtDisplaySlot",id:"clearobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getObjective",id:"getobjective",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getObjectiveAtDisplaySlot",id:"getobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getObjectives",id:"getobjectives",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getParticipants",id:"getparticipants",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getScore",id:"getscore",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"removeObjective",id:"removeobjective",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4},{value:"setObjectiveAtDisplaySlot",id:"setobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-8",level:4},{value:"setScore",id:"setscore",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-9",level:4}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Contains objectives and participants for the scoreboard."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"addobjective"},"addObjective"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"addObjective"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"objectiveId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"displayName"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds a new objective to the scoreboard."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"displayName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"clearobjectiveatdisplayslot"},"clearObjectiveAtDisplaySlot"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"clearObjectiveAtDisplaySlot"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"displaySlotId"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Clears the objective that occupies a display slot."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getobjective"},"getObjective"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getObjective"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"objectiveId"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns a specific objective (by id)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getobjectiveatdisplayslot"},"getObjectiveAtDisplaySlot"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getObjectiveAtDisplaySlot"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"displaySlotId"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns an objective that occupies the specified display\nslot."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getobjectives"},"getObjectives"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getObjectives"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective")),"[]"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns all defined objectives."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getparticipants"},"getParticipants"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getParticipants"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardIdentity"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardIdentity")),"[]"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Returns all defined scoreboard identities."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardIdentity"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardIdentity")),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getscore"},"getScore"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getScore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"objective"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"participant"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objective")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"participant")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ScoreboardIdentity"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardIdentity")))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"removeobjective"},"removeObjective"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"removeObjective"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"objectiveId"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Removes an objective from the scoreboard."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective")))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setobjectiveatdisplayslot"},"setObjectiveAtDisplaySlot"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setObjectiveAtDisplaySlot"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"displaySlotId"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"objectiveDisplaySetting"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets an objective into a display slot with specified\nadditional display settings."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.kt)("p",null,"This function can throw errors."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objectiveDisplaySetting")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions")))))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setscore"},"setScore"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setScore"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"objective"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"participant"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"score"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"objective")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ScoreboardObjective"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardObjective")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"participant")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/ScoreboardIdentity"},(0,n.kt)("inlineCode",{parentName:"a"},"ScoreboardIdentity")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"score")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")))}c.isMDXComponent=!0}}]);