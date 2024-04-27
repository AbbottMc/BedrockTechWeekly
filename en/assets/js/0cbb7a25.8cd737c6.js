"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,c=m["".concat(s,".").concat(k)]||m[k]||d[k]||l;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"System",title:"Class: System",sidebar_label:"System",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"sapi/stable/server/classes/System",id:"sapi/stable/server/classes/System",title:"Class: System",description:"A class that provides system-level events and functions.",source:"@site/docs/sapi/stable/server/classes/System.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/System",permalink:"/en/docs/sapi/stable/server/classes/System",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"System",title:"Class: System",sidebar_label:"System",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"StructureManager",permalink:"/en/docs/sapi/stable/server/classes/StructureManager"},next:{title:"SystemAfterEvents",permalink:"/en/docs/sapi/stable/server/classes/SystemAfterEvents"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties",level:2},{value:"afterEvents",id:"afterevents",level:3},{value:"beforeEvents",id:"beforeevents",level:3},{value:"currentTick",id:"currenttick",level:3},{value:"Methods",id:"methods",level:2},{value:"clearJob",id:"clearjob",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"clearRun",id:"clearrun",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"run",id:"run",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"runInterval",id:"runinterval",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"runJob",id:"runjob",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"runTimeout",id:"runtimeout",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A class that provides system-level events and functions."),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"new System"),"()"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"afterevents"},"afterEvents"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"afterEvents"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/SystemAfterEvents"},(0,a.kt)("inlineCode",{parentName:"a"},"SystemAfterEvents"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns a collection of after-events for system-level\noperations."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"beforeevents"},"beforeEvents"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"beforeEvents"),": ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/SystemBeforeEvents"},(0,a.kt)("inlineCode",{parentName:"a"},"SystemBeforeEvents"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Returns a collection of before-events for system-level\noperations."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"currenttick"},"currentTick"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"currentTick"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Represents the current world tick of the server."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"clearjob"},"clearJob"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clearJob"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"jobId"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Cancels the execution of a job queued via ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/System#runjob"},"runJob"),"."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"jobId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The job ID returned from ",(0,a.kt)("a",{parentName:"td",href:"/en/docs/sapi/stable/server/classes/System#runjob"},"runJob"),".")))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"clearrun"},"clearRun"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"clearRun"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"runId"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Cancels the execution of a function run that was previously\nscheduled via ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/System#run"},"run"),"."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"runId")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"run"},"run"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"run"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Runs a specified function at a future time. This is\nfrequently used to implement delayed behaviors and game\nloops."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"trapTick.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { system, world } from '@minecraft/server';\n\nfunction printEveryMinute() {\n    try {\n        // Minecraft runs at 20 ticks per second.\n        if (system.currentTick % 1200 === 0) {\n            world.sendMessage('Another minute passes...');\n        }\n    } catch (e) {\n        console.warn('Error: ' + e);\n    }\n\n    system.run(printEveryMinute);\n}\n\nprintEveryMinute();\n")),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Function callback to run when the tickDelay time criteria is met.")))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"An opaque identifier that can be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"clearRun"),"\nfunction to cancel the execution of this run."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"runinterval"},"runInterval"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"runInterval"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tickInterval?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Runs a set of code on an interval."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"every30Seconds.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { system, world } from '@minecraft/server';\n\nconst intervalRunIdentifier = Math.floor(Math.random() * 10000);\n\nsystem.runInterval(() => {\n    world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');\n}, 600);\n")),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Functional code that will run when this interval occurs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tickInterval?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"An interval of every N ticks that the callback will be called upon.")))),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"An opaque handle that can be used with the clearRun method\nto stop the run of this function on an interval."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"runjob"},"runJob"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"runJob"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"generator"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Queues a generator to run until completion.  The generator\nwill be given a time slice each tick, and will be run until\nit yields or completes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("p",null,"cubeGenerator.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BlockPermutation, DimensionLocation, world, ButtonPushAfterEvent, system } from '@minecraft/server';\n\n// A simple generator that places blocks in a cube at a specific location\n// with a specific size, yielding after every block place.\nfunction* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {\n    for (let x = startingLocation.x; x < startingLocation.x + size; x++) {\n        for (let y = startingLocation.y; y < startingLocation.y + size; y++) {\n            for (let z = startingLocation.z; z < startingLocation.z + size; z++) {\n                const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });\n                if (block) {\n                    block.setPermutation(blockPerm);\n                }\n                yield;\n            }\n        }\n    }\n}\n\n// When a button is pushed, we will place a 15x15x15 cube of cobblestone 10 blocks above it\nworld.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {\n    const cubePos = buttonPushEvent.block.location;\n    cubePos.y += 10;\n\n    const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');\n\n    system.runJob(blockPlacingGenerator(blockPerm, { dimension: buttonPushEvent.dimension, ...cubePos }, 15));\n});\n")),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"generator")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Generator"),"<",(0,a.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"void"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"void"),">"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The instance of the generator to run.")))),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"An opaque handle that can be used with ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/System#clearjob"},"clearJob")," to stop the run of this generator."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"runtimeout"},"runTimeout"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"runTimeout"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"callback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tickDelay?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"Runs a set of code at a future time specified by tickDelay."),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"callback")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"void")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Functional code that will run when this timeout occurs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"tickDelay?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Amount of time, in ticks, before the interval will be called.")))),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"An opaque handle that can be used with the clearRun method\nto stop the run of this function on an interval."))}m.isMDXComponent=!0}}]);