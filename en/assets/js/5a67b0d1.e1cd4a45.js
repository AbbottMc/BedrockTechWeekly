"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server/classes/ItemStartUseOnAfterEvent",id:"sapi/stable/server/classes/ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",description:"Contains information related to an item being used on a",source:"@site/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ItemStartUseOnAfterEvent",permalink:"/en/docs/sapi/stable/server/classes/ItemStartUseOnAfterEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemStartUseOnAfterEvent",title:"Class: ItemStartUseOnAfterEvent",sidebar_label:"ItemStartUseOnAfterEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemStartUseAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemStartUseAfterEventSignal"},next:{title:"ItemStartUseOnAfterEventSignal",permalink:"/en/docs/sapi/stable/server/classes/ItemStartUseOnAfterEventSignal"}},i={},c=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"block",id:"block",level:3},{value:"blockFace",id:"blockface",level:3},{value:"itemStack",id:"itemstack",level:3},{value:"source",id:"source",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains information related to an item being used on a\nblock. This event fires when a player presses the the Use\nItem / Place Block button to successfully use an item or\nplace a block. Fires for the first block that is interacted\nwith when performing a build action. Note: This event cannot\nbe used with Hoe or Axe items."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new ItemStartUseOnAfterEvent"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"block"},"block"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"block"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Block"},(0,a.kt)("inlineCode",{parentName:"a"},"Block"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The block that the item is used on."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blockface"},"blockFace"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"blockFace"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/enums/Direction"},(0,a.kt)("inlineCode",{parentName:"a"},"Direction"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The face of the block that an item is being used on."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"itemstack"},"itemStack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"itemStack"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/ItemStack"},(0,a.kt)("inlineCode",{parentName:"a"},"ItemStack"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The impacted item stack that is starting to be used. Can be\nundefined in some gameplay scenarios like pushing a button\nwith an empty hand."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"source"},"source"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"source"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Player"},(0,a.kt)("inlineCode",{parentName:"a"},"Player"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns the source entity that triggered this item event."))}u.isMDXComponent=!0}}]);