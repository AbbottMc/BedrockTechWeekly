"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[1392],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=o(t),c=r,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return t?n.createElement(m,i(i({ref:a},g),{},{components:t})):n.createElement(m,i({ref:a},g))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51980:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=t(58168),r=(t(96540),t(15680));const l={id:"GameRuleChangeAfterEventSignal",title:"Class: GameRuleChangeAfterEventSignal",sidebar_label:"GameRuleChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/preview/server/classes/GameRuleChangeAfterEventSignal",id:"sapi/preview/server/classes/GameRuleChangeAfterEventSignal",title:"Class: GameRuleChangeAfterEventSignal",description:"Manages callbacks that are connected to when a",source:"@site/docs/sapi/preview/server/classes/GameRuleChangeAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/GameRuleChangeAfterEventSignal",permalink:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"GameRuleChangeAfterEventSignal",title:"Class: GameRuleChangeAfterEventSignal",sidebar_label:"GameRuleChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"GameRuleChangeAfterEvent",permalink:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEvent"},next:{title:"GameRules",permalink:"/docs/sapi/preview/server/classes/GameRules"}},p={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],g={toc:o},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Manages callbacks that are connected to when a\nworld.gameRules property has changed."),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new GameRuleChangeAfterEventSignal"),"()"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"subscribe"},"subscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"GameRuleChangeAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when a world.gameRules\nproperty is changed."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"GameRuleChangeAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))))),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"fn")),(0,r.yg)("p",null,"\u25b8 (",(0,r.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Adds a callback that will be called when a world.gameRules\nproperty is changed."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h5",{id:"parameters-1"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"arg")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"GameRuleChangeAfterEvent")))))),(0,r.yg)("h5",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Removes a callback from being called when a world.gameRules\nproperty is changed."),(0,r.yg)("p",null,"This function can't be called in read-only mode."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"callback")),(0,r.yg)("td",{parentName:"tr",align:"left"},"(",(0,r.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,r.yg)("a",{parentName:"td",href:"/docs/sapi/preview/server/classes/GameRuleChangeAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"GameRuleChangeAfterEvent")),") => ",(0,r.yg)("inlineCode",{parentName:"td"},"void"))))),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")))}u.isMDXComponent=!0}}]);