"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98872],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),p=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,g=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,y=d["".concat(g,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(y,l(l({ref:t},o),{},{components:a})):r.createElement(y,l({ref:t},o))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const i={id:"RegistrationBuilder",title:"Class: RegistrationBuilder",sidebar_label:"RegistrationBuilder",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/preview/server-gametest/classes/RegistrationBuilder",id:"sapi/preview/server-gametest/classes/RegistrationBuilder",title:"Class: RegistrationBuilder",description:"A utility class to set GameTest parameters for a test.",source:"@site/docs/sapi/preview/server-gametest/classes/RegistrationBuilder.md",sourceDirName:"sapi/preview/server-gametest/classes",slug:"/sapi/preview/server-gametest/classes/RegistrationBuilder",permalink:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RegistrationBuilder",title:"Class: RegistrationBuilder",sidebar_label:"RegistrationBuilder",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"NavigationResult",permalink:"/docs/sapi/preview/server-gametest/classes/NavigationResult"},next:{title:"SculkSpreader",permalink:"/docs/sapi/preview/server-gametest/classes/SculkSpreader"}},g={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods",level:2},{value:"batch",id:"batch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"maxAttempts",id:"maxattempts",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"maxTicks",id:"maxticks",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"padding",id:"padding",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"required",id:"required",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"requiredSuccessfulAttempts",id:"requiredsuccessfulattempts",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"rotateTest",id:"rotatetest",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"setupTicks",id:"setupticks",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"structureName",id:"structurename",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"tag",id:"tag",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4}],o={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(d,(0,r.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A utility class to set GameTest parameters for a test.\nMethods can be chained together to set multiple properties."),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"constructor"},"constructor"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,n.yg)("strong",{parentName:"p"},"new RegistrationBuilder"),"()"),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"batch"},"batch"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"batch"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"batchName"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the batch for the test to run in."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"batchName")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Name of the batch for the test.")))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"maxattempts"},"maxAttempts"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"maxAttempts"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"attemptCount"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the maximum number of times a test will try to rerun if\nit fails."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"attemptCount")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number"))))),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"maxticks"},"maxTicks"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"maxTicks"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"tickCount"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the maximum number of ticks a test will run for before\ntiming out and failing."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"tickCount")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number"))))),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"padding"},"padding"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"padding"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"paddingBlocks"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Size around the GameTest, in blocks, that should be reserved\nfor the test when running multiple tests together."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"paddingBlocks")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Size, in blocks, around the GameTest where additional GameTests should not be created.")))),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"required"},"required"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"required"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"isRequired"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Whether this test is required to pass as part of its broader\nset of tests."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"isRequired")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"boolean")),(0,n.yg)("td",{parentName:"tr",align:"left"},"If set to true, the test must pass in order for the entire run of tests to pass.")))),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"requiredsuccessfulattempts"},"requiredSuccessfulAttempts"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"requiredSuccessfulAttempts"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"attemptCount"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the number of successful test runs to be considered\nsuccessful."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-5"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"attemptCount")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number"))))),(0,n.yg)("h4",{id:"returns-5"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"rotatetest"},"rotateTest"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"rotateTest"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"rotate"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"If true, runs the test in all four rotations when run via\n/gametest runset."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-6"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"rotate")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.yg)("h4",{id:"returns-6"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"setupticks"},"setupTicks"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"setupTicks"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"tickCount"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Sets the number of ticks for a test to wait before executing\nwhen the structure is spawned."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-7"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"tickCount")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"number"))))),(0,n.yg)("h4",{id:"returns-7"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"structurename"},"structureName"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"structureName"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"structureName"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,'Sets the name of the structure for a test to use. "xyz:bar"\nwill load ',(0,n.yg)("inlineCode",{parentName:"p"},"/structures/xyz/bar.mcstructure")," from the\nbehavior pack stack."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-8"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"structureName")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))))),(0,n.yg)("h4",{id:"returns-8"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"tag"},"tag"),(0,n.yg)("p",null,"\u25b8 ",(0,n.yg)("strong",{parentName:"p"},"tag"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"tag"),"): ",(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.yg)("p",null,"Adds a tag to a test. You can run all tests with a given tag\nwith ",(0,n.yg)("inlineCode",{parentName:"p"},"/gametest runset <tag>"),"."),(0,n.yg)("p",null,"This function can't be called in read-only mode."),(0,n.yg)("h4",{id:"parameters-9"},"Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"tag")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string"))))),(0,n.yg)("h4",{id:"returns-9"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder"},(0,n.yg)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.yg)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."))}u.isMDXComponent=!0}}]);