"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44701],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(t),y=a,u=g["".concat(o,".").concat(y)]||g[y]||d[y]||l;return t?r.createElement(u,s(s({ref:n},c),{},{components:t})):r.createElement(u,s({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=y;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[g]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},28114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={id:"ExplosionAfterEventSignal",title:"Class: ExplosionAfterEventSignal",sidebar_label:"ExplosionAfterEventSignal",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/ExplosionAfterEventSignal",id:"sapi/stable/server/classes/ExplosionAfterEventSignal",title:"Class: ExplosionAfterEventSignal",description:"Manages callbacks that are connected to when an explosion",source:"@site/docs/sapi/stable/server/classes/ExplosionAfterEventSignal.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ExplosionAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ExplosionAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ExplosionAfterEventSignal",title:"Class: ExplosionAfterEventSignal",sidebar_label:"ExplosionAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ExplosionAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/ExplosionAfterEvent"},next:{title:"ExplosionBeforeEvent",permalink:"/en/docs/sapi/stable/server/classes/ExplosionBeforeEvent"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],c={toc:p},g="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Manages callbacks that are connected to when an explosion\noccurs."),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new ExplosionAfterEventSignal"),"()"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"subscribe"},"subscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ExplosionAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ExplosionAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called when an explosion\noccurs."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ExplosionAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ExplosionAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"fn")),(0,a.yg)("p",null,"\u25b8 (",(0,a.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Adds a callback that will be called when an explosion\noccurs."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("h5",{id:"parameters-1"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"arg")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ExplosionAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ExplosionAfterEvent")))))),(0,a.yg)("h5",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Removes a callback from being called when an explosion\noccurs."),(0,a.yg)("p",null,"This function can't be called in read-only mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.yg)("p",null,"This function can throw errors."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"callback")),(0,a.yg)("td",{parentName:"tr",align:"left"},"(",(0,a.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,a.yg)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/ExplosionAfterEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"ExplosionAfterEvent")),") => ",(0,a.yg)("inlineCode",{parentName:"td"},"void"))))),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);