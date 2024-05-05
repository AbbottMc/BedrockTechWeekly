"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81299],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>d});var t=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(n),m=a,d=y["".concat(s,".").concat(m)]||y[m]||g[m]||l;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[y]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21025:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(58168),a=(n(96540),n(15680));const l={id:"PlayerBreakBlockAfterEvent",title:"Class: PlayerBreakBlockAfterEvent",sidebar_label:"PlayerBreakBlockAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server/classes/PlayerBreakBlockAfterEvent",id:"sapi/preview/server/classes/PlayerBreakBlockAfterEvent",title:"Class: PlayerBreakBlockAfterEvent",description:"Contains information regarding an event after a player",source:"@site/docs/sapi/preview/server/classes/PlayerBreakBlockAfterEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/PlayerBreakBlockAfterEvent",permalink:"/en/docs/sapi/preview/server/classes/PlayerBreakBlockAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayerBreakBlockAfterEvent",title:"Class: PlayerBreakBlockAfterEvent",sidebar_label:"PlayerBreakBlockAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Player",permalink:"/en/docs/sapi/preview/server/classes/Player"},next:{title:"PlayerBreakBlockAfterEventSignal",permalink:"/en/docs/sapi/preview/server/classes/PlayerBreakBlockAfterEventSignal"}},s={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"brokenBlockPermutation",id:"brokenblockpermutation",level:3},{value:"dimension",id:"dimension",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"itemStackAfterBreak",id:"itemstackafterbreak",level:3},{value:"itemStackBeforeBreak",id:"itemstackbeforebreak",level:3},{value:"player",id:"player",level:3}],c={toc:p},y="wrapper";function g(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Contains information regarding an event after a player\nbreaks a block."),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockEvent"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"PlayerBreakBlockAfterEvent"))))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"constructor"},"constructor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,a.yg)("strong",{parentName:"p"},"new PlayerBreakBlockAfterEvent"),"()"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#constructor"},"constructor")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"block"},"block"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"block"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Block"},(0,a.yg)("inlineCode",{parentName:"a"},"Block"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Block impacted by this event."),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#block"},"block")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"brokenblockpermutation"},"brokenBlockPermutation"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"brokenBlockPermutation"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockPermutation"},(0,a.yg)("inlineCode",{parentName:"a"},"BlockPermutation"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Returns permutation information about this block before it\nwas broken."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"dimension"},"dimension"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"dimension"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Dimension"},(0,a.yg)("inlineCode",{parentName:"a"},"Dimension"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Dimension that contains the block that is the subject of\nthis event."),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent"},"BlockEvent"),".",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/BlockEvent#dimension"},"dimension")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"itemstackafterbreak"},"itemStackAfterBreak"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"itemStackAfterBreak"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemStack"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The item stack that was used to break the block after the\nblock was broken, or undefined if empty hand."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"itemstackbeforebreak"},"itemStackBeforeBreak"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"itemStackBeforeBreak"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/ItemStack"},(0,a.yg)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"The item stack that was used to break the block before the\nblock was broken, or undefined if empty hand."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"player"},"player"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.yg)("strong",{parentName:"p"},"player"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/Player"},(0,a.yg)("inlineCode",{parentName:"a"},"Player"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Player that broke the block for this event."))}g.isMDXComponent=!0}}]);