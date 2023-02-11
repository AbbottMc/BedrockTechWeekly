"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[54870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=d(a),k=n,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?r.createElement(c,i(i({ref:t},o),{},{components:a})):r.createElement(c,i({ref:t},o))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},82779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"RegistrationBuilder",title:"Class: RegistrationBuilder",sidebar_label:"RegistrationBuilder",sidebar_position:0,custom_edit_url:null},i=void 0,s={unversionedId:"sapi/stable/server-gametest/classes/RegistrationBuilder",id:"sapi/stable/server-gametest/classes/RegistrationBuilder",title:"Class: RegistrationBuilder",description:"A utility class to set GameTest parameters for a test.",source:"@site/docs/sapi/stable/server-gametest/classes/RegistrationBuilder.md",sourceDirName:"sapi/stable/server-gametest/classes",slug:"/sapi/stable/server-gametest/classes/RegistrationBuilder",permalink:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RegistrationBuilder",title:"Class: RegistrationBuilder",sidebar_label:"RegistrationBuilder",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"GameTestSequence",permalink:"/en/docs/sapi/stable/server-gametest/classes/GameTestSequence"},next:{title:"SculkSpreader",permalink:"/en/docs/sapi/stable/server-gametest/classes/SculkSpreader"}},p={},d=[{value:"Methods",id:"methods",level:2},{value:"batch",id:"batch",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"maxAttempts",id:"maxattempts",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"maxTicks",id:"maxticks",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"padding",id:"padding",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"required",id:"required",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"requiredSuccessfulAttempts",id:"requiredsuccessfulattempts",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"rotateTest",id:"rotatetest",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"setupTicks",id:"setupticks",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"structureName",id:"structurename",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"tag",id:"tag",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4}],o={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A utility class to set GameTest parameters for a test.\nMethods can be chained together to set multiple properties."),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"batch"},"batch"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"batch"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"batchName"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets the batch for the test to run in."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"batchName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},'"day"')," ","|"," ",(0,n.kt)("inlineCode",{parentName:"td"},'"night"')),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the batch for the test.")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"maxattempts"},"maxAttempts"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"maxAttempts"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"attemptCount"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets the maximum number of times a test will try to rerun if\nit fails."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"attemptCount")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"maxticks"},"maxTicks"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"maxTicks"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"tickCount"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets the maximum number of ticks a test will run for before\ntiming out and failing."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tickCount")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"padding"},"padding"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"padding"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"paddingBlocks"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Size around the GameTest, in blocks, that should be reserved\nfor the test when running multiple tests together."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"paddingBlocks")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Size, in blocks, around the GameTest where additional GameTests should not be created.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"required"},"required"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"required"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"isRequired"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Whether this test is required to pass as part of its broader\nset of tests."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"isRequired")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"If set to true, the test must pass in order for the entire run of tests to pass.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"requiredsuccessfulattempts"},"requiredSuccessfulAttempts"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"requiredSuccessfulAttempts"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"attemptCount"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets the number of successful test runs to be considered\nsuccessful."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"attemptCount")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"rotatetest"},"rotateTest"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"rotateTest"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"rotate"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"If true, runs the test in all four rotations when run via\n/gametest runset."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"rotate")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setupticks"},"setupTicks"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setupTicks"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"tickCount"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Sets the number of ticks for a test to wait before executing\nwhen the structure is spawned."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tickCount")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"structurename"},"structureName"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"structureName"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"structureName"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,'Sets the name of the structure for a test to use. "xyz:bar"\nwill load ',(0,n.kt)("inlineCode",{parentName:"p"},"/structures/xyz/bar.mcstructure")," from the\nbehavior pack stack."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"structureName")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tag"},"tag"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"tag"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"tag"),"): ",(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Adds a tag to a test. You can run all tests with a given tag\nwith ",(0,n.kt)("inlineCode",{parentName:"p"},"/gametest runset <tag>"),"."),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"tag")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server-gametest/classes/RegistrationBuilder"},(0,n.kt)("inlineCode",{parentName:"a"},"RegistrationBuilder"))),(0,n.kt)("p",null,"RegistrationBuilder object where additional configuration\nmethods can be called."))}m.isMDXComponent=!0}}]);