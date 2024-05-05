"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69956],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,d=p["".concat(a,".").concat(y)]||p[y]||m[y]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=y;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const i={id:"BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",sidebar_label:"BlockVolumeIntersection",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/enums/BlockVolumeIntersection",id:"sapi/stable/server/enums/BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",description:"Description of the resulting intersection test on two",source:"@site/docs/sapi/stable/server/enums/BlockVolumeIntersection.md",sourceDirName:"sapi/stable/server/enums",slug:"/sapi/stable/server/enums/BlockVolumeIntersection",permalink:"/docs/sapi/stable/server/enums/BlockVolumeIntersection",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"BlockVolumeIntersection",title:"Enumeration: BlockVolumeIntersection",sidebar_label:"BlockVolumeIntersection",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"BlockPistonState",permalink:"/docs/sapi/stable/server/enums/BlockPistonState"},next:{title:"CompoundBlockVolumeAction",permalink:"/docs/sapi/stable/server/enums/CompoundBlockVolumeAction"}},a={},c=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Contains",id:"contains",level:3},{value:"Disjoint",id:"disjoint",level:3},{value:"Intersects",id:"intersects",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Description of the resulting intersection test on two\nBlockVolume objects"),(0,o.yg)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.yg)("h3",{id:"contains"},"Contains"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Contains")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"1")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B resides completely inside Volume A"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"disjoint"},"Disjoint"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Disjoint")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"0")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B has no intersection points with Volume A"),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"intersects"},"Intersects"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"Intersects")," = ",(0,o.yg)("inlineCode",{parentName:"p"},"2")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Volume B partially intersects Volume A"))}m.isMDXComponent=!0}}]);