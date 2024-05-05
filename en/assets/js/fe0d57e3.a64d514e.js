"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[44668],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>g});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(t),d=i,g=y["".concat(p,".").concat(d)]||y[d]||u[d]||o;return t?n.createElement(g,a(a({ref:r},c),{},{components:t})):n.createElement(g,a({ref:r},c))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[y]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59077:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(58168),i=(t(96540),t(15680));const o={id:"EntityQueryScoreOptions",title:"Interface: EntityQueryScoreOptions",sidebar_label:"EntityQueryScoreOptions",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/preview/server/interfaces/EntityQueryScoreOptions",id:"sapi/preview/server/interfaces/EntityQueryScoreOptions",title:"Interface: EntityQueryScoreOptions",description:"Contains additional options for filtering players based on",source:"@site/docs/sapi/preview/server/interfaces/EntityQueryScoreOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/EntityQueryScoreOptions",permalink:"/en/docs/sapi/preview/server/interfaces/EntityQueryScoreOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityQueryScoreOptions",title:"Interface: EntityQueryScoreOptions",sidebar_label:"EntityQueryScoreOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityQueryPropertyOptions",permalink:"/en/docs/sapi/preview/server/interfaces/EntityQueryPropertyOptions"},next:{title:"EntityRaycastHit",permalink:"/en/docs/sapi/preview/server/interfaces/EntityRaycastHit"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"exclude",id:"exclude",level:3},{value:"maxScore",id:"maxscore",level:3},{value:"minScore",id:"minscore",level:3},{value:"objective",id:"objective",level:3}],c={toc:s},y="wrapper";function u(e){let{components:r,...t}=e;return(0,i.yg)(y,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Contains additional options for filtering players based on\ntheir score for an objective."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"exclude"},"exclude"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"exclude"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"boolean")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"If set to true, entities and players within this score range\nare excluded from query results."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"maxscore"},"maxScore"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"maxScore"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"If defined, only players that have a score equal to or under\nmaxScore are included."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"minscore"},"minScore"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"minScore"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"If defined, only players that have a score equal to or over\nminScore are included."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"objective"},"objective"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"objective"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Identifier of the scoreboard objective to filter on."))}u.isMDXComponent=!0}}]);