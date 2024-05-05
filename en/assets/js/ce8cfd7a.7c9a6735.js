"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80330,43115,22222,36477],{5533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453),a=n(7407),i=(n(16277),n(74450));const o={},c=void 0,l={id:"changelog_source/preview/1.19/40/23/tech",title:"tech",description:"Experimental Features",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"<strong>Experimental Features</strong>",id:"experimental-features",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...i.toc,{value:"<strong>Major breaking change to experimental JavaScript APIs:</strong>",id:"major-breaking-change-to-experimental-javascript-apis",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>General</strong>",id:"general",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"experimental-features",children:(0,r.jsx)(t.strong,{children:"Experimental Features"})}),"\n",(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(i.default,{techSapi:(0,r.jsx)(a.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"major-breaking-change-to-experimental-javascript-apis",children:(0,r.jsx)(t.strong,{children:"Major breaking change to experimental JavaScript APIs:"})}),"\n",(0,r.jsx)(t.p,{children:"All script modules have been renamed to follow a new convention.\xa0\xa0"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"mojang-gametest"}),"->\xa0",(0,r.jsx)(t.em,{children:"@minecraft/server-gametest"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"mojang-minecraft"}),"->\xa0",(0,r.jsx)(t.em,{children:"@minecraft/server"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"mojang-minecraft-ui"}),"->\xa0",(0,r.jsx)(t.em,{children:"@minecraft/server-ui"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"mojang-minecraft-server-admin"}),"->\xa0",(0,r.jsx)(t.em,{children:"@minecraft/server-admin"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.em,{children:"mojang-net"}),"->\xa0",(0,r.jsx)(t.em,{children:"@minecraft/server-net"})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"For example, rather than using:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import * as mc from "mojang-minecraft";\n'})}),"\n",(0,r.jsx)(t.p,{children:"Use"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import * as mc from "@minecraft/server";\n'})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Use of script\xa0eval()and\xa0Function()\xa0must be explicitly enabled in \xa0json\xa0","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"To do this, set\xa0script_evalin\xa0capabilities"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'"capabilities": [\xa0 "script_eval"]'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Root path for imports has changed; scripts/prefix are no longer allowed."}),"\n",(0,r.jsx)(t.li,{children:'For imports, use\xa0import "./source.js" or import "source.js"'}),"\n",(0,r.jsx)(t.li,{children:'Deprecated use of\xa0import "scripts/source.js"'}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"actor-properties",children:(0,r.jsx)(t.strong,{children:"Actor Properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Fixed "bool_property" filters that didn\'t specify a "value"'}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Temporarily disabled the rotation for the /summon command while a bug is worked on"}),"\n",(0,r.jsxs)(t.li,{children:["Fixed a rotation issue when a Command Block executes 'execute facing' and 'execute rotated' (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-162256",children:"MCPE-162256"}),")"]}),"\n",(0,r.jsx)(t.li,{children:"Implemented the '/execute in' command"}),"\n",(0,r.jsx)(t.li,{children:"Implemented the \u2018/execute anchored <eyes|feet>\u2019 command"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Release BlockGeometryComponent out of experimental in JSON formats 1.19.40 and higher"}),"\n",(0,r.jsx)(t.li,{children:"Release BlockMaterialInstancesComponent out of experimental in JSON formats 1.19.40 and higher"}),"\n",(0,r.jsxs)(t.li,{children:["Renamed\xa0_minecraft",":block","_light_filter_component to\xa0",(0,r.jsxs)(t.em,{children:["minecraft",":light","_dampening"]})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const a={},i=void 0,o={id:"changelog_source/preview/1.19/40/23/tech_sapi_stable",title:"tech_sapi_stable",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){return(0,r.jsx)(r.Fragment,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},16277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(74848),s=n(28453);const a={},i=void 0,o={id:"changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/40/23",slug:"/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/40/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){return(0,r.jsx)(r.Fragment,{})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),s=n(28453),a=n(18228),i=n(19365);const o={},c=void 0,l={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(i.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(i.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),o=n(205),c=n(57485),l=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=m({queryString:n,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=l??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o,rightElement:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(u(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),c?(0,v.jsx)("div",{className:"w-full",children:c}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(_,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);