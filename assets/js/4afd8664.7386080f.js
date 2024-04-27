"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51065],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,m=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},31727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"ScoreboardIdentityType",title:"Enumeration: ScoreboardIdentityType",sidebar_label:"ScoreboardIdentityType",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"sapi/preview/server/enums/ScoreboardIdentityType",id:"sapi/preview/server/enums/ScoreboardIdentityType",title:"Enumeration: ScoreboardIdentityType",description:"Contains objectives and participants for the scoreboard.",source:"@site/docs/sapi/preview/server/enums/ScoreboardIdentityType.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/ScoreboardIdentityType",permalink:"/docs/sapi/preview/server/enums/ScoreboardIdentityType",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ScoreboardIdentityType",title:"Enumeration: ScoreboardIdentityType",sidebar_label:"ScoreboardIdentityType",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"PaletteColor",permalink:"/docs/sapi/preview/server/enums/PaletteColor"},next:{title:"ScriptEventSource",permalink:"/docs/sapi/preview/server/enums/ScriptEventSource"}},l={},s=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Entity",id:"entity",level:3},{value:"FakePlayer",id:"fakeplayer",level:3},{value:"Player",id:"player",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains objectives and participants for the scoreboard."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"entity"},"Entity"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Entity")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Entity"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This scoreboard participant is tied to an entity."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fakeplayer"},"FakePlayer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"FakePlayer")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"FakePlayer"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This scoreboard participant is tied to a pseudo player\nentity - typically this is used to store scores as data or\nas abstract progress."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"player"},"Player"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"Player")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"Player"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"This scoreboard participant is tied to a player."))}d.isMDXComponent=!0}}]);