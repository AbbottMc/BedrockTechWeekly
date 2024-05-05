"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3971],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,y=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(y,s(s({ref:t},g),{},{components:a})):r.createElement(y,s({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const l={id:"ItemReleaseUseAfterEventSignal",title:"Class: ItemReleaseUseAfterEventSignal",sidebar_label:"ItemReleaseUseAfterEventSignal",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server/classes/ItemReleaseUseAfterEventSignal",id:"sapi/preview/server/classes/ItemReleaseUseAfterEventSignal",title:"Class: ItemReleaseUseAfterEventSignal",description:"Manages callbacks that are connected to the releasing of",source:"@site/docs/sapi/preview/server/classes/ItemReleaseUseAfterEventSignal.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemReleaseUseAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEventSignal",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemReleaseUseAfterEventSignal",title:"Class: ItemReleaseUseAfterEventSignal",sidebar_label:"ItemReleaseUseAfterEventSignal",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemReleaseUseAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"},next:{title:"ItemStack",permalink:"/en/docs/sapi/preview/server/classes/ItemStack"}},o={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"subscribe",id:"subscribe",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"unsubscribe",id:"unsubscribe",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4}],g={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Manages callbacks that are connected to the releasing of\ncharging for a chargeable item."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new ItemReleaseUseAfterEventSignal"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"subscribe"},"subscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"subscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),": ",(0,n.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"ItemReleaseUseAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when a chargeable item\nis released from charging."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"ItemReleaseUseAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"fn")),(0,n.yg)("p",null,"\u25b8 (",(0,n.yg)("inlineCode",{parentName:"p"},"arg"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a callback that will be called when a chargeable item\nis released from charging."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h5",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"arg")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"ItemReleaseUseAfterEvent")))))),(0,n.yg)("h5",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"unsubscribe"},"unsubscribe"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"unsubscribe"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"callback"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Removes a callback from being called when a chargeable item\nis released from charging."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"callback")),(0,n.yg)("td",{parentName:"tr",align:"left"},"(",(0,n.yg)("inlineCode",{parentName:"td"},"arg"),": ",(0,n.yg)("a",{parentName:"td",href:"/en/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"},(0,n.yg)("inlineCode",{parentName:"a"},"ItemReleaseUseAfterEvent")),") => ",(0,n.yg)("inlineCode",{parentName:"td"},"void"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);