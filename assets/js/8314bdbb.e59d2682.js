"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[38525],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,d=p["".concat(a,".").concat(y)]||p[y]||m[y]||i;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=y;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},68844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),o=(t(96540),t(15680));const i={id:"BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",sidebar_label:"BlockVolumeIntersection",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/preview/server/enums/BlockVolumeIntersection",id:"sapi/preview/server/enums/BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",description:"Description of the resulting intersection test on two",source:"@site/docs/sapi/preview/server/enums/BlockVolumeIntersection.md",sourceDirName:"sapi/preview/server/enums",slug:"/sapi/preview/server/enums/BlockVolumeIntersection",permalink:"/docs/sapi/preview/server/enums/BlockVolumeIntersection",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",sidebar_label:"BlockVolumeIntersection",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"BlockPistonState",permalink:"/docs/sapi/preview/server/enums/BlockPistonState"},next:{title:"CompoundBlockVolumeAction",permalink:"/docs/sapi/preview/server/enums/CompoundBlockVolumeAction"}},a={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Contains",id:"contains",level:3},{value:"Disjoint",id:"disjoint",level:3},{value:"Intersects",id:"intersects",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Description of the resulting intersection test on two\nBlockVolume objects"),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"contains"},"Contains"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Contains")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"1")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B resides completely inside Volume A"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"disjoint"},"Disjoint"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Disjoint")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"0")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B has no intersection points with Volume A"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"intersects"},"Intersects"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Intersects")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"2")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B partially intersects Volume A"))}m.isMDXComponent=!0}}]);