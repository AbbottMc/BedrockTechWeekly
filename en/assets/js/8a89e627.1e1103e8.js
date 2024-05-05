"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[52175],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=p(t),m=i,g=y["".concat(s,".").concat(m)]||y[m]||d[m]||a;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[y]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={id:"EntityInitializationCause",title:"Enumeration: EntityInitializationCause",sidebar_label:"EntityInitializationCause",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/enums/EntityInitializationCause",id:"sapi/preview/server/enums/EntityInitializationCause",title:"Enumeration: EntityInitializationCause",description:"An enumeration describing initialization cause of an entity.",source:"@site/docs/sapi/preview/server/enums/EntityInitializationCause.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/EntityInitializationCause",permalink:"/en/docs/sapi/preview/server/enums/EntityInitializationCause",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityInitializationCause",title:"Enumeration: EntityInitializationCause",sidebar_label:"EntityInitializationCause",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityDamageCause",permalink:"/en/docs/sapi/preview/server/enums/EntityDamageCause"},next:{title:"EntityLifetimeState",permalink:"/en/docs/sapi/preview/server/enums/EntityLifetimeState"}},s={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Born",id:"born",level:3},{value:"Event",id:"event",level:3},{value:"Loaded",id:"loaded",level:3},{value:"Spawned",id:"spawned",level:3},{value:"Transformed",id:"transformed",level:3}],u={toc:p},y="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(y,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"An enumeration describing initialization cause of an entity."),(0,i.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.yg)("h3",{id:"born"},"Born"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Born")," = ",(0,i.yg)("inlineCode",{parentName:"p"},'"Born"')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Case when an entity is created as child of other entity or\nentities, e.g., cows making a cow or slimes making smaller\nslimes after dying."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"event"},"Event"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Event")," = ",(0,i.yg)("inlineCode",{parentName:"p"},'"Event"')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Case when an entity is created by an event, e.g., a\nWandering trader spawning llamas."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"loaded"},"Loaded"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Loaded")," = ",(0,i.yg)("inlineCode",{parentName:"p"},'"Loaded"')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Case when an entity is loaded into the world."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"spawned"},"Spawned"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Spawned")," = ",(0,i.yg)("inlineCode",{parentName:"p"},'"Spawned"')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Case when an entity is naturally spawned in the world."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"transformed"},"Transformed"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Transformed")," = ",(0,i.yg)("inlineCode",{parentName:"p"},'"Transformed"')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Case when an entity is transformed into another entity."))}d.isMDXComponent=!0}}]);