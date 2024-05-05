"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[21245],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=i(t),v=r,g=y["".concat(p,".").concat(v)]||y[v]||m[v]||s;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=v;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},43704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var a=t(58168),r=(t(96540),t(15680));const s={id:"BlockEvent",title:"Class: BlockEvent",sidebar_label:"BlockEvent",sidebar_position:0,custom_edit_url:null},l=void 0,o={unversionedId:"sapi/stable/server/classes/BlockEvent",id:"sapi/stable/server/classes/BlockEvent",title:"Class: BlockEvent",description:"Contains information regarding an event that impacts a",source:"@site/docs/sapi/stable/server/classes/BlockEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockEvent",title:"Class: BlockEvent",sidebar_label:"BlockEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockComponentTickEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockComponentTickEvent"},next:{title:"BlockExplodeAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/BlockExplodeAfterEvent"}},p={},i=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"dimension",id:"dimension",level:3}],c={toc:i},y="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Contains information regarding an event that impacts a\nspecific block."),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"BlockEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentEntityFallOnEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentEntityFallOnEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentOnPlaceEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentOnPlaceEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentPlayerDestroyEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentPlayerDestroyEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentPlayerInteractEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentPlayerInteractEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentPlayerPlaceBeforeEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentPlayerPlaceBeforeEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentRandomTickEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentRandomTickEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentStepOffEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentStepOffEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentStepOnEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentStepOnEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockComponentTickEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockComponentTickEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockExplodeAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"BlockExplodeAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ButtonPushAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"ButtonPushAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/LeverActionAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"LeverActionAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PistonActivateAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PistonActivateAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PlayerBreakBlockAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PlayerBreakBlockAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PlayerBreakBlockBeforeEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PlayerBreakBlockBeforeEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PlayerPlaceBlockBeforeEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PlayerPlaceBlockBeforeEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PressurePlatePopAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PressurePlatePopAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/PressurePlatePushAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"PressurePlatePushAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/TargetBlockHitAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TargetBlockHitAfterEvent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/TripWireTripAfterEvent"},(0,r.yg)("inlineCode",{parentName:"a"},"TripWireTripAfterEvent"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new BlockEvent"),"()"),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"block"},"block"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"block"),": ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,r.yg)("inlineCode",{parentName:"a"},"Block"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Block impacted by this event."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"dimension"},"dimension"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"dimension"),": ",(0,r.yg)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Dimension"},(0,r.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."))}m.isMDXComponent=!0}}]);