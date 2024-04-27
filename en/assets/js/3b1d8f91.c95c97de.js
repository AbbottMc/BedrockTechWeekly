"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[21524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,m=c["".concat(p,".").concat(u)]||c[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={id:"DefinitionModifier",title:"Interface: DefinitionModifier",sidebar_label:"DefinitionModifier",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/stable/server/interfaces/DefinitionModifier",id:"sapi/stable/server/interfaces/DefinitionModifier",title:"Interface: DefinitionModifier",description:"Contains a set of updates to the component definition state",source:"@site/docs/sapi/stable/server/interfaces/DefinitionModifier.md",sourceDirName:"sapi/stable/server/interfaces",slug:"/sapi/stable/server/interfaces/DefinitionModifier",permalink:"/en/docs/sapi/stable/server/interfaces/DefinitionModifier",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DefinitionModifier",title:"Interface: DefinitionModifier",sidebar_label:"DefinitionModifier",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"CompoundBlockVolumeItem",permalink:"/en/docs/sapi/stable/server/interfaces/CompoundBlockVolumeItem"},next:{title:"DimensionLocation",permalink:"/en/docs/sapi/stable/server/interfaces/DimensionLocation"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"addedComponentGroups",id:"addedcomponentgroups",level:3},{value:"removedComponentGroups",id:"removedcomponentgroups",level:3},{value:"triggers",id:"triggers",level:3}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains a set of updates to the component definition state\nof an entity."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"addedcomponentgroups"},"addedComponentGroups"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"addedComponentGroups"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"Retrieves the list of component groups that will be added\nvia this definition modification."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removedcomponentgroups"},"removedComponentGroups"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"removedComponentGroups"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The list of component groups that will be removed via this\ndefinition modification."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"triggers"},"triggers"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"triggers"),": ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Trigger"},(0,i.kt)("inlineCode",{parentName:"a"},"Trigger")),"[]"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.kt)("p",null,"The list of entity definition events that will be fired via\nthis update."))}c.isMDXComponent=!0}}]);