"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78447],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(a),c=n,m=y["".concat(o,".").concat(c)]||y[c]||g[c]||l;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[y]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"Scoreboard",title:"Class: Scoreboard",sidebar_label:"Scoreboard",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/Scoreboard",id:"sapi/stable/server/classes/Scoreboard",title:"Class: Scoreboard",description:"Contains objectives and participants for the scoreboard.",source:"@site/docs/sapi/stable/server/classes/Scoreboard.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/Scoreboard",permalink:"/en/docs/sapi/stable/server/classes/Scoreboard",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Scoreboard",title:"Class: Scoreboard",sidebar_label:"Scoreboard",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ProjectileHitEntityAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ProjectileHitEntityAfterEventSignal"},next:{title:"ScoreboardIdentity",permalink:"/en/docs/sapi/stable/server/classes/ScoreboardIdentity"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"addObjective",id:"addobjective",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"clearObjectiveAtDisplaySlot",id:"clearobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"getObjective",id:"getobjective",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"getObjectiveAtDisplaySlot",id:"getobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"getObjectives",id:"getobjectives",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getParticipants",id:"getparticipants",level:3},{value:"Returns",id:"returns-5",level:4},{value:"removeObjective",id:"removeobjective",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-6",level:4},{value:"setObjectiveAtDisplaySlot",id:"setobjectiveatdisplayslot",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-7",level:4}],d={toc:p},y="wrapper";function g(e){let{components:t,...a}=e;return(0,n.yg)(y,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Contains objectives and participants for the scoreboard."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new Scoreboard"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"addobjective"},"addObjective"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"addObjective"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"objectiveId"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"displayName?"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a new objective to the scoreboard."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"displayName?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"clearobjectiveatdisplayslot"},"clearObjectiveAtDisplaySlot"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"clearObjectiveAtDisplaySlot"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"displaySlotId"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Clears the objective that occupies a display slot."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/DisplaySlotId"},(0,n.yg)("inlineCode",{parentName:"a"},"DisplaySlotId")))))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getobjective"},"getObjective"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getObjective"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"objectiveId"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns a specific objective (by id)."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Identifier of the objective.")))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getobjectiveatdisplayslot"},"getObjectiveAtDisplaySlot"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getObjectiveAtDisplaySlot"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"displaySlotId"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns an objective that occupies the specified display\nslot."),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/DisplaySlotId"},(0,n.yg)("inlineCode",{parentName:"a"},"DisplaySlotId")))))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getobjectives"},"getObjectives"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getObjectives"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective")),"[]"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns all defined objectives."),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective")),"[]"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getparticipants"},"getParticipants"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"getParticipants"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardIdentity"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardIdentity")),"[]"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Returns all defined scoreboard identities."),(0,n.yg)("h4",{id:"returns-5"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardIdentity"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardIdentity")),"[]"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"removeobjective"},"removeObjective"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"removeObjective"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"objectiveId"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Removes an objective from the scoreboard."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"objectiveId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective")))))),(0,n.yg)("h4",{id:"returns-6"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"boolean")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setobjectiveatdisplayslot"},"setObjectiveAtDisplaySlot"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setObjectiveAtDisplaySlot"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"displaySlotId"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"objectiveDisplaySetting"),"): ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets an objective into a display slot with specified\nadditional display settings."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-5"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"displaySlotId")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/enums/DisplaySlotId"},(0,n.yg)("inlineCode",{parentName:"a"},"DisplaySlotId")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"objectiveDisplaySetting")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/interfaces/ScoreboardObjectiveDisplayOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjectiveDisplayOptions")))))),(0,n.yg)("h4",{id:"returns-7"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ScoreboardObjective"},(0,n.yg)("inlineCode",{parentName:"a"},"ScoreboardObjective"))),(0,n.yg)("p",null,"Returns the previous ",(0,n.yg)("inlineCode",{parentName:"p"},"ScoreboardObjective")," set at the\ndisplay slot, if no objective was previously set it returns\n",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),"."))}g.isMDXComponent=!0}}]);