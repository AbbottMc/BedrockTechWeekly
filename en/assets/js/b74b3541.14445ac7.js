"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61597],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>u});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),y=c(t),d=n,u=y["".concat(o,".").concat(d)]||y[d]||g[d]||l;return t?r.createElement(u,i(i({ref:a},p),{},{components:t})):r.createElement(u,i({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[y]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(58168),n=(t(96540),t(15680));const l={id:"PlayerPlaceBlockAfterEventSignal",title:"Class: PlayerPlaceBlockAfterEventSignal",sidebar_label:"PlayerPlaceBlockAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal",id:"sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal",title:"Class: PlayerPlaceBlockAfterEventSignal",description:"Manages callbacks that are connected to when a block is",source:"@site/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerPlaceBlockAfterEventSignal",title:"Class: PlayerPlaceBlockAfterEventSignal",sidebar_label:"PlayerPlaceBlockAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"PlayerPlaceBlockAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},next:{title:"PlayerPlaceBlockBeforeEvent",permalink:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockBeforeEvent"}},o={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:c},y="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Manages callbacks that are connected to when a block is\nplaced by a player."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new PlayerPlaceBlockAfterEventSignal"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"subscribe"},"subscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"options?"),"): (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when a block is placed\nby a player."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"options?")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/interfaces/BlockEventOptions"},(0,n.yg)("inlineCode",{parentName:"a"},"BlockEventOptions")))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"fn")),(0,n.yg)("p",null,"\u25b8 (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when a block is placed\nby a player."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h5",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"arg")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockAfterEvent")))))),(0,n.yg)("h5",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Removes a callback from being called when an block is placed\nby a player."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}g.isMDXComponent=!0}}]);