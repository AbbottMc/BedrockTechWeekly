"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),b=r,f=d["".concat(o,".").concat(b)]||d[b]||c[b]||s;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},62450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const s={id:"Tags",title:"Class: Tags",sidebar_label:"Tags",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server-gametest/classes/Tags",id:"sapi/stable/server-gametest/classes/Tags",title:"Class: Tags",description:"These well-known tags can be used to classify different",source:"@site/docs/sapi/stable/server-gametest/classes/Tags.md",sourceDirName:"sapi/stable/server-gametest/classes",slug:"/sapi/stable/server-gametest/classes/Tags",permalink:"/en/docs/sapi/stable/server-gametest/classes/Tags",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Tags",title:"Class: Tags",sidebar_label:"Tags",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"SimulatedPlayer",permalink:"/en/docs/sapi/stable/server-gametest/classes/SimulatedPlayer"},next:{title:"Test",permalink:"/en/docs/sapi/stable/server-gametest/classes/Test"}},o={},u=[{value:"Properties",id:"properties",level:2},{value:"suiteAll",id:"suiteall",level:3},{value:"suiteDebug",id:"suitedebug",level:3},{value:"suiteDefault",id:"suitedefault",level:3},{value:"suiteDisabled",id:"suitedisabled",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"These well-known tags can be used to classify different\ntests into suites to run."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"suiteall"},"suiteAll"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"suiteAll"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"suite:all"')),(0,r.kt)("p",null,"Indicates that the tagged test should be a part of all\nsuites."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"suitedebug"},"suiteDebug"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"suiteDebug"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"suite:debug"')),(0,r.kt)("p",null,"Indicates that the tagged test should be a part of an\ninternal (debug) test suite."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"suitedefault"},"suiteDefault"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"suiteDefault"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"suite:default"')),(0,r.kt)("p",null,"Indicates that the tagged test should be a part of the\ndefault test suite."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"suitedisabled"},"suiteDisabled"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"suiteDisabled"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"suite:disabled"')),(0,r.kt)("p",null,"Indicates that the tagged test should be a part of a suite\nof disabled tests."))}d.isMDXComponent=!0}}]);