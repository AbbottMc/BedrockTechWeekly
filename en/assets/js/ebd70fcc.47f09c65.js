"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[29521],{31159:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=t(74848),s=t(28453);const a={},i="Function: registerUserDefinedTransactionHandler()",d={id:"sapi/stable/server-editor/functions/registerUserDefinedTransactionHandler",title:"Function: registerUserDefinedTransactionHandler()",description:"registerUserDefinedTransactionHandler\\(transactionManager, undoHandler, redoHandler): UserDefinedTransactionHandle\\",source:"@site/docs/sapi/stable/server-editor/functions/registerUserDefinedTransactionHandler.md",sourceDirName:"sapi/stable/server-editor/functions",slug:"/sapi/stable/server-editor/functions/registerUserDefinedTransactionHandler",permalink:"/en/docs/sapi/stable/server-editor/functions/registerUserDefinedTransactionHandler",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server-editor/functions/registerUserDefinedTransactionHandler.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"registerEditorExtension",permalink:"/en/docs/sapi/stable/server-editor/functions/registerEditorExtension"},next:{title:"stringFromException",permalink:"/en/docs/sapi/stable/server-editor/functions/stringFromException"}},o={},l=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"function-registeruserdefinedtransactionhandler",children:"Function: registerUserDefinedTransactionHandler()"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"registerUserDefinedTransactionHandler"}),"<",(0,r.jsx)(n.code,{children:"T"}),">(",(0,r.jsx)(n.code,{children:"transactionManager"}),", ",(0,r.jsx)(n.code,{children:"undoHandler"}),", ",(0,r.jsx)(n.code,{children:"redoHandler"}),"): ",(0,r.jsx)(n.a,{href:"/en/docs/sapi/stable/server-editor/classes/UserDefinedTransactionHandle",children:(0,r.jsx)(n.code,{children:"UserDefinedTransactionHandle"})}),"<",(0,r.jsx)(n.code,{children:"T"}),">"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"type-parameters",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type parameter"})})}),(0,r.jsx)(n.tbody,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"T"})})})})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"transactionManager"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.a,{href:"/en/docs/sapi/stable/server-editor/classes/TransactionManager",children:(0,r.jsx)(n.code,{children:"TransactionManager"})})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A reference to the TransactionManager (from the extension",(0,r.jsx)(n.br,{}),"context for your extension)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"undoHandler"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(n.code,{children:"payload"}),") => ",(0,r.jsx)(n.code,{children:"void"})]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A function that will be invoked when the transaction is",(0,r.jsx)(n.br,{}),"undone. The function will be passed a copy of the payload",(0,r.jsx)(n.br,{}),"data that was inserted into the transaction log."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"redoHandler"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["(",(0,r.jsx)(n.code,{children:"payload"}),") => ",(0,r.jsx)(n.code,{children:"void"})]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A function that will be invoked when the transaction is",(0,r.jsx)(n.br,{}),"redone. The function will be passed a copy of the payload",(0,r.jsx)(n.br,{}),"data that was inserted into the transaction log."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/stable/server-editor/classes/UserDefinedTransactionHandle",children:(0,r.jsx)(n.code,{children:"UserDefinedTransactionHandle"})}),"<",(0,r.jsx)(n.code,{children:"T"}),">"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/en/docs/sapi/stable/server-editor/classes/UserDefinedTransactionHandle",children:"UserDefinedTransactionHandle"})," - A strongly typed\ntransaction handle that can be used to add transactions to\nthe transaction manager."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["Creates a strongly typed transaction handle to enforce type\nsafety when adding user defined transactions. This function\nis a wrapper around the more generalized transaction manager\nAPI for script based transactions. Any Editor Extension that\nneeds to insert data into the transaction log for undo/redo\nshould use this function to create a handler for the\nspecific type of data that needs to be inserted. When a\ntransaction is undone/redone, the associated handler\nfunction will be invoked with a copy of the payload data\nthat was inserted into the log. As a general rule,\ntransaction data should contain 2 things:",(0,r.jsx)(n.br,{})," 1. The data\nthat will be used to perform the operation we're trying to\nrecord",(0,r.jsx)(n.br,{})," 2. The data that will be used to restore the\nstate of the program to what it was before the\noperation.",(0,r.jsx)(n.br,{})," NOTE/WARNING:",(0,r.jsx)(n.br,{})," The payload data is\nserialized to JSON before being inserted into the\ntransaction log and the underlying implementation uses the\nJSON.stringify() function to serialize the data. Any\nnon-primitive data, such as classes or minecraft native\nobjects will not serialize to JSON properly, so you should\navoid using them as payload data."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);