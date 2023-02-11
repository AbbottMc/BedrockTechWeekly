"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||s;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/stable/server-ui/modules",id:"sapi/stable/server-ui/modules",title:"@minecraft",description:"The @minecraft/server-ui module contains types for",source:"@site/docs/sapi/stable/server-ui/modules.md",sourceDirName:"sapi/stable/server-ui",slug:"/sapi/stable/server-ui/modules",permalink:"/docs/sapi/stable/server-ui/modules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null}},i={},p=[{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"@minecraft/server-ui")," module contains types for\nexpressing simple dialog-based user experiences."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ActionFormData"},"ActionFormData")," contain a list of buttons with\ncaptions and images that can be used for presenting a set of\noptions to a player."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/MessageFormData"},"MessageFormData")," are simple two-button message\nexperiences that are functional for Yes/No or OK/Cancel\nquestions."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ModalFormData"},"ModalFormData"),' allow for a more flexible\n"questionnaire-style" list of controls that can be used to\ntake input.')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"createActionForm.js"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},'const form = new ActionFormData()\n  .title("Months")\n  .body("Choose your favorite month!")\n  .button("January")\n  .button("February")\n  .button("March")\n  .button("April")\n  .button("May");\n\nform.show(players[0]).then((response) => {\n  if (response.selection === 3) {\n    dimension.runCommand("say I like April too!");\n  }\n});\n\n')),(0,n.kt)("p",null,"Manifest Details"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "module_name": "@minecraft/server-ui",\n  "version": "0.1.0"\n}\n')),(0,n.kt)("h2",{id:"enumerations"},"Enumerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/enums/FormCancelationReason"},"FormCancelationReason"))),(0,n.kt)("h2",{id:"classes"},"Classes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ActionFormData"},"ActionFormData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ActionFormResponse"},"ActionFormResponse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/FormResponse"},"FormResponse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/MessageFormData"},"MessageFormData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/MessageFormResponse"},"MessageFormResponse")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ModalFormData"},"ModalFormData")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/sapi/stable/server-ui/classes/ModalFormResponse"},"ModalFormResponse"))))}c.isMDXComponent=!0}}]);