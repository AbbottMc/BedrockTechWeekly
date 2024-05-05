"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17007,21032],{18850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(74848),a=n(28453);n(59938);const o={},s=void 0,l={id:"changelog_source/preview/1.18/10/26/tech",title:"tech",description:"GameTest Framework (Experimental)",source:"@site/docs/changelog_source/preview/1.18/10/26/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/26",slug:"/changelog_source/preview/1.18/10/26/tech",permalink:"/docs/changelog_source/preview/1.18/10/26/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/26/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>JumpToBlockGoal</strong>",id:"jumptoblockgoal",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Animations</strong>",id:"animations",level:2},{value:"<strong>User-Interface</strong>",id:"user-interface",level:2}];function u(e){const t={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"gametest-framework-experimental",children:(0,r.jsx)(t.strong,{children:"GameTest Framework (Experimental)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Entity","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added function\xa0teleport(location: Location, dimension: Dimension, xRotation (optional): float, yRotation (optional): float)"}),"\n",(0,r.jsx)(t.li,{children:"Added function\xa0teleportFacing(location: Location, dimension: Dimension, facingLocation: Location)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Added\xa0registerAsyncmethod to register and properly track the state of GameTests using\xa0async\xa0functions"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Reapplied changes to use "allowlist" instead of "whitelist" (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/BDS-14119",children:"BDS-14119"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"jumptoblockgoal",children:(0,r.jsx)(t.strong,{children:"JumpToBlockGoal"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"JumpToBlockGoal now correctly searches the same distance upwards and downwards when looking for jumpblockcandidates, allowing a mobs that use the goal to jump equally high as low"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"blocks",children:(0,r.jsx)(t.strong,{children:"Blocks"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added support for blocks having the same name as long as they belong to different namespaces"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"animations",children:(0,r.jsx)(t.strong,{children:"Animations"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed animation controller recursion checks from falsely disallowing normal repeat usage of a controller"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"user-interface",children:(0,r.jsx)(t.strong,{children:"User-Interface"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed issue where up and down arrow buttons in the Resource Pack Settings screen became bigger when highlighted (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-147708",children:"MCPE-147708"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(74848),a=n(28453),o=n(18228),s=n(19365);const l={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),l=n(205),i=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=g({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:[l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),i?(0,v.jsx)("div",{className:"w-full",children:i}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);