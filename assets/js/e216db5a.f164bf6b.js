"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70007],{15680:(e,r,a)=>{a.d(r,{xA:()=>u,yg:()=>d});var n=a(96540);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),p=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),y=t,d=c["".concat(l,".").concat(y)]||c[y]||m[y]||s;return a?n.createElement(d,o(o({ref:r},u),{},{components:a})):n.createElement(d,o({ref:r},u))}));function d(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=a.length,o=new Array(s);o[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:t,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},85725:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(58168),t=(a(96540),a(15680));const s={id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null},o=void 0,i={unversionedId:"sapi/preview/server-ui/modules",id:"sapi/preview/server-ui/modules",title:"@minecraft",description:"The @minecraft/server-ui module contains types for",source:"@site/docs/sapi/preview/server-ui/modules.md",sourceDirName:"sapi/preview/server-ui",slug:"/sapi/preview/server-ui/modules",permalink:"/docs/sapi/preview/server-ui/modules",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:.5,frontMatter:{id:"modules",title:"@minecraft",sidebar_label:"Exports",sidebar_position:.5,custom_edit_url:null}},l={},p=[{value:"Enumerations",id:"enumerations",level:2},{value:"Classes",id:"classes",level:2}],u={toc:p},c="wrapper";function m(e){let{components:r,...a}=e;return(0,t.yg)(c,(0,n.A)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"@minecraft/server-ui")," module contains types for\nexpressing simple dialog-based user experiences."),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},"ActionFormData")," contain a list of buttons with\ncaptions and images that can be used for presenting a set of\noptions to a player."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},"MessageFormData")," are simple two-button message\nexperiences that are functional for Yes/No or OK/Cancel\nquestions."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ModalFormData"},"ModalFormData"),' allow for a more flexible\n"questionnaire-style" list of controls that can be used to\ntake input.')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},(0,t.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,t.yg)("p",null,"createActionForm.js"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-typescript"},'const form = new ActionFormData()\n  .title("Months")\n  .body("Choose your favorite month!")\n  .button("January")\n  .button("February")\n  .button("March")\n  .button("April")\n  .button("May");\n\nform.show(players[0]).then((response) => {\n  if (response.selection === 3) {\n    dimension.runCommand("say I like April too!");\n  }\n});\n')),(0,t.yg)("p",null,"Manifest Details"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "module_name": "@minecraft/server-ui",\n  "version": "1.1.0"\n}\n')),(0,t.yg)("h2",{id:"enumerations"},"Enumerations"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/enums/FormCancelationReason"},"FormCancelationReason")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/enums/FormRejectReason"},"FormRejectReason"))),(0,t.yg)("h2",{id:"classes"},"Classes"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ActionFormData"},"ActionFormData")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ActionFormResponse"},"ActionFormResponse")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/FormRejectError"},"FormRejectError")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/FormResponse"},"FormResponse")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/MessageFormData"},"MessageFormData")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/MessageFormResponse"},"MessageFormResponse")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ModalFormData"},"ModalFormData")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"/docs/sapi/preview/server-ui/classes/ModalFormResponse"},"ModalFormResponse"))))}m.isMDXComponent=!0}}]);