"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80979],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),v=a,k=u["".concat(i,".").concat(v)]||u[v]||d[v]||l;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=v;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},13166:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const l={id:"StringBlockProperty",title:"Class: StringBlockProperty",sidebar_label:"StringBlockProperty",sidebar_position:0,custom_edit_url:null},s=void 0,o={unversionedId:"sapi/stable/server/classes/StringBlockProperty",id:"sapi/stable/server/classes/StringBlockProperty",title:"Class: StringBlockProperty",description:"Contains the state of a string-based property for a BlockPermutation.",source:"@site/docs/sapi/stable/server/classes/StringBlockProperty.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/StringBlockProperty",permalink:"/en/docs/sapi/stable/server/classes/StringBlockProperty",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"StringBlockProperty",title:"Class: StringBlockProperty",sidebar_label:"StringBlockProperty",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ServerMessageSignal",permalink:"/en/docs/sapi/stable/server/classes/ServerMessageSignal"},next:{title:"System",permalink:"/en/docs/sapi/stable/server/classes/System"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides",level:4},{value:"validValues",id:"validvalues",level:3},{value:"value",id:"value",level:3}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains the state of a string-based property for a ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/BlockPermutation"},"BlockPermutation"),"."),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IBlockProperty"},(0,a.kt)("inlineCode",{parentName:"a"},"IBlockProperty"))),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"StringBlockProperty"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Name of this property."),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IBlockProperty"},"IBlockProperty"),".",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IBlockProperty#name"},"name")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"validvalues"},"validValues"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"validValues"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"A list of allowed values for this string property."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The current value of this property."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,a.kt)("p",null,"Setting this property can throw if the value passed is not\nvalid for the property. Use ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/StringBlockProperty#validvalues"},"validValues")," to check allowed values."))}u.isMDXComponent=!0}}]);