"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92293,21032,62373,29387],{17848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),a=n(28453),o=n(68380),s=(n(79692),n(59938));const i={},c=void 0,l={id:"changelog_source/preview/1.21/60/27/tech",title:"tech",description:"Component",source:"@site/docs/changelog_source/preview/1.21/60/27/tech.mdx",sourceDirName:"changelog_source/preview/1.21/60/27",slug:"/changelog_source/preview/1.21/60/27/tech",permalink:"/docs/changelog_source/preview/1.21/60/27/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/27/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Component",id:"component",level:2},{value:"Editor",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...s.toc,{value:"Experimental",id:"experimental",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2}];function h(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"component",children:"Component"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Moved the "minecraft',":compostable",'" item component out of experimental and to Release. Moved the related scripting apis out of Beta to Release']}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Added a new Workbench tool which allows for quickly changing block states for blocks with modifiable properties (doors, fences, etc)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Added\xa0",(0,r.jsx)(t.code,{children:"ContinuousAction"}),"\xa0to supported key binding actions that simulate key repeats at set tick intervals"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Added 'Test World', 'Export', and 'Settings' to the ActionBar"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Added missing image for 'Navigation Panel' in the ActionBar"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Updated rotation slider to be an integer"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Fixed incorrect maximum value for fixed distance mode"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Fixed a bug that caused text field to lose focus when another UI element is hovered"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(s.default,{techSapi:(0,r.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"experimental",children:"Experimental"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Focus Target Camera has vertical_rotation_limits of [0.0, 180.0] by default to reflect world space changes"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Focus Target camera now stops targeting when either\xa0",(0,r.jsx)(t.code,{children:"clear"}),"\xa0from the camera command is used, or when the target is over 64 chunks away from the camera"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"stability-and-performance",children:"Stability and Performance"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Experimental support for applying a service-driven texture memory budget in low memory situations. When enabled, memory will be conserved by progressively reducing resolution of some textures as usage approaches the budgeted limit."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},68380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(74848),a=n(28453);const o={},s=void 0,i={id:"changelog_source/preview/1.21/60/27/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Rename\xa0handleCounts\xa0interface to\xa0HandleCounts\xa0in\xa0@minecraft/debug_utilities\xa0module.",source:"@site/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/60/27",slug:"/changelog_source/preview/1.21/60/27/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){const t={code:"code",li:"li",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Rename\xa0",(0,r.jsx)(t.code,{children:"handleCounts"}),"\xa0interface to\xa0",(0,r.jsx)(t.code,{children:"HandleCounts"}),"\xa0in\xa0",(0,r.jsx)(t.code,{children:"@minecraft/debug_utilities"}),"\xa0module."]}),"\n",(0,r.jsxs)(t.li,{children:["Fixed\xa0",(0,r.jsx)(t.code,{children:"BlockLocationIterator"}),"\xa0crash that could happen if the\xa0",(0,r.jsx)(t.code,{children:"BlockVolume"}),"\xa0that the iterator came from was deleted first."]}),"\n"]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},79692:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(74848),a=n(28453);const o={},s=void 0,i={id:"changelog_source/preview/1.21/60/27/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/60/27",slug:"/changelog_source/preview/1.21/60/27/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/27/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function u(e){return(0,r.jsx)(r.Fragment,{})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(74848),a=n(28453),o=n(18228),s=n(19365);const i={},c=void 0,l={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),i=n(205),c=n(57485),l=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,d]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=l??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i,rightElement:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:[i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:h,onClick:d,...o,className:(0,a.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),c?(0,v.jsx)("div",{className:"w-full",children:c}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function _(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);