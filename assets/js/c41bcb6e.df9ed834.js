"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17267],{25777:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=s(74848),r=s(28453);const i={},c="Function: registerAsync()",l={id:"sapi/preview/server-gametest/functions/registerAsync",title:"Function: registerAsync()",description:"registerAsync(testClassName, testName, testFunction): RegistrationBuilder",source:"@site/docs/sapi/preview/server-gametest/functions/registerAsync.md",sourceDirName:"sapi/preview/server-gametest/functions",slug:"/sapi/preview/server-gametest/functions/registerAsync",permalink:"/docs/sapi/preview/server-gametest/functions/registerAsync",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/preview/server-gametest/functions/registerAsync.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiPreviewSidebar",previous:{title:"register",permalink:"/docs/sapi/preview/server-gametest/functions/register"},next:{title:"ActionTypes",permalink:"/docs/sapi/preview/server-editor/enumerations/ActionTypes"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"function-registerasync",children:"Function: registerAsync()"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"registerAsync"}),"(",(0,n.jsx)(t.code,{children:"testClassName"}),", ",(0,n.jsx)(t.code,{children:"testName"}),", ",(0,n.jsx)(t.code,{children:"testFunction"}),"): ",(0,n.jsx)(t.a,{href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder",children:(0,n.jsx)(t.code,{children:"RegistrationBuilder"})})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"testClassName"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the class of tests this test should be a part of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"testName"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Name of this specific test."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"testFunction"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(t.code,{children:"arg"}),") => ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:(0,n.jsx)(t.code,{children:"Promise \u2197\ufe0f"})}),"<",(0,n.jsx)(t.code,{children:"void"}),">"]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Implementation of the test function."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder",children:(0,n.jsx)(t.code,{children:"RegistrationBuilder"})})}),"\n",(0,n.jsxs)(t.p,{children:["Returns a ",(0,n.jsx)(t.a,{href:"/docs/sapi/preview/server-gametest/classes/RegistrationBuilder",children:"RegistrationBuilder"})," object where\nadditional options for this test can be specified via\nbuilder methods."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(t.p,{children:"Registers a new GameTest function that is designed for\nasynchronous execution. This GameTest will become available\nin Minecraft via /gametest run [testClassName]:[testName]."}),"\n",(0,n.jsx)(t.p,{children:"This function can't be called in read-only mode."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import * as gameTest from '@minecraft/server-gametest';\n\ngameTest\n    .registerAsync('StarterTests', 'simpleMobTest', async (test: gameTest.Test) => {\n        const attackerId = 'fox';\n        const victimId = 'chicken';\n\n        test.spawn(attackerId, { x: 5, y: 2, z: 5 });\n        test.spawn(victimId, { x: 2, y: 2, z: 2 });\n\n        test.assertEntityPresentInArea(victimId, true);\n\n        test.succeedWhen(() => {\n            test.assertEntityPresentInArea(victimId, false);\n        });\n    })\n    .maxTicks(400)\n    .structureName('gametests:mediumglass');\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>l});var n=s(96540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);