"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66932],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),b=o,y=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?n.createElement(y,s(s({ref:r},p),{},{components:t})):n.createElement(y,s({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},48447:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(58168),o=(t(96540),t(15680));const a={id:"ScoreboardScoreInfo",title:"Class: ScoreboardScoreInfo",sidebar_label:"ScoreboardScoreInfo",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/stable/server/classes/ScoreboardScoreInfo",id:"sapi/stable/server/classes/ScoreboardScoreInfo",title:"Class: ScoreboardScoreInfo",description:"Contains a pair of a scoreboard participant and its",source:"@site/docs/sapi/stable/server/classes/ScoreboardScoreInfo.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/ScoreboardScoreInfo",permalink:"/docs/sapi/stable/server/classes/ScoreboardScoreInfo",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ScoreboardScoreInfo",title:"Class: ScoreboardScoreInfo",sidebar_label:"ScoreboardScoreInfo",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ScoreboardObjective",permalink:"/docs/sapi/stable/server/classes/ScoreboardObjective"},next:{title:"ScreenDisplay",permalink:"/docs/sapi/stable/server/classes/ScreenDisplay"}},c={},l=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"participant",id:"participant",level:3},{value:"score",id:"score",level:3}],p={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Contains a pair of a scoreboard participant and its\nrespective score."),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new ScoreboardScoreInfo"),"()"),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"participant"},"participant"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"participant"),": ",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/ScoreboardIdentity"},(0,o.yg)("inlineCode",{parentName:"a"},"ScoreboardIdentity"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"This scoreboard participant for this score."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"score"},"score"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"score"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Score value of the identity for this objective."))}u.isMDXComponent=!0}}]);