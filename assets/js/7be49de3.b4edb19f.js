"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84548,21032],{59519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),a=t(28453);t(59938);const s={},o=void 0,l={id:"changelog_source/preview/1.19/20/23/tech",title:"tech",description:"Add-Ons",source:"@site/docs/changelog_source/preview/1.19/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/20/23",slug:"/changelog_source/preview/1.19/20/23/tech",permalink:"/docs/changelog_source/preview/1.19/20/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}];function u(e){const n={em:"em",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"add-ons",children:(0,r.jsx)(n.strong,{children:"Add-Ons"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enable event filters in the root definition to be evaluated independent of sequence or randomize when a ",(0,r.jsx)(n.em,{children:"format_version"})," of 1.19.20 or higher is specified"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"stability-and-performance",children:(0,r.jsx)(n.strong,{children:"Stability and Performance"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a crash when exploring multiple categories in Marketplace on Xbox and PlayStation"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(n.h2,{id:"gametest-framework",children:(0,r.jsx)(n.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["System Events","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added event\xa0",(0,r.jsx)(n.em,{children:"beforeWatchdogTerminate"}),"- Shuts down the server when a critical scripting exception occurs (e.g. script hang). Can be canceled to prevent shutdown"]}),"\n",(0,r.jsxs)(n.li,{children:["Added enum\xa0",(0,r.jsx)(n.em,{children:"WatchdogTerminateReason"}),"- Specifies the reason for watchdog termination"]}),"\n",(0,r.jsxs)(n.li,{children:["Added new properties to\xa0_properties_for watchdog configuration on Bedrock Dedicated Server","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"script-watchdog-enable-exception-handling"}),"- Enables watchdog exception handling via the\xa0",(0,r.jsx)(n.em,{children:"events.beforeWatchdogTerminate"}),"\xa0event (default = true)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"script-watchdog-enable-shutdown"}),"- Enables server shutdown in the case of an unhandled watchdog exception (default = true)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"script-watchdog-hang-exception"}),"- Throws a critical exception when a hang occurs (default = true)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"general",children:(0,r.jsx)(n.strong,{children:"General"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Removed the component\xa0",(0,r.jsx)(n.em,{children:"minecraft:unwalkable"})]}),"\n",(0,r.jsxs)(n.li,{children:["Renamed ",(0,r.jsxs)(n.em,{children:["'minecraft",":explosion","_resistance'"]})," to ",(0,r.jsxs)(n.em,{children:["'minecraft",":destructible","_by_explosion'"]})," and restructured the component to be either defined as a boolean or as an object","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Setting the component to true will give the block the default ",(0,r.jsx)(n.em,{children:"explosion_resistance"})," and setting it to false will make the block indestructible by explosion"]}),"\n",(0,r.jsx)(n.li,{children:"Setting the component as an object will let users define the resistance of the block to a base explosion"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),s=t(18228),o=t(19365);const l={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(34164),s=t(23104),o=t(56347),l=t(205),i=t(57485),c=t(31682),u=t(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(u(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),i?(0,x.jsx)("div",{className:"w-full",children:i}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(e){const n=(0,g.A)();return(0,x.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);