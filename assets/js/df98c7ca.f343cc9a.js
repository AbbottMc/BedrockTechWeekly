"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[46056],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>u});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),g=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=g(a),y=n,u=c["".concat(o,".").concat(y)]||c[y]||d[y]||l;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var g=2;g<l;g++)i[g]=a[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},89441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const l={id:"WeatherChangeAfterEventSignal",title:"Class: WeatherChangeAfterEventSignal",sidebar_label:"WeatherChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server/classes/WeatherChangeAfterEventSignal",id:"sapi/stable/server/classes/WeatherChangeAfterEventSignal",title:"Class: WeatherChangeAfterEventSignal",description:"Manages callbacks that are connected to weather changing.",source:"@site/docs/sapi/stable/server/classes/WeatherChangeAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/WeatherChangeAfterEventSignal",permalink:"/docs/sapi/stable/server/classes/WeatherChangeAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WeatherChangeAfterEventSignal",title:"Class: WeatherChangeAfterEventSignal",sidebar_label:"WeatherChangeAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"WeatherChangeAfterEvent",permalink:"/docs/sapi/stable/server/classes/WeatherChangeAfterEvent"},next:{title:"WeatherChangeBeforeEvent",permalink:"/docs/sapi/stable/server/classes/WeatherChangeBeforeEvent"}},o={},g=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],p={toc:g},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Manages callbacks that are connected to weather changing."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new WeatherChangeAfterEventSignal"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"subscribe"},"subscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/WeatherChangeAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"WeatherChangeAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when weather changes."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/WeatherChangeAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"WeatherChangeAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"fn")),(0,n.yg)("p",null,"\u25b8 (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when weather changes."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h5",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"arg")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/WeatherChangeAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"WeatherChangeAfterEvent")))))),(0,n.yg)("h5",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Removes a callback from being called when weather changes."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,n.yg)("p",null,"This function can throw errors."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/docs/sapi/stable/server/classes/WeatherChangeAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"WeatherChangeAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);