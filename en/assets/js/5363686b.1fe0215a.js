"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[76644,43115],{49632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(74848),s=n(28453);n(74450);const a={},o=void 0,l={id:"changelog_source/preview/1.19/30/23/tech",title:"tech",description:"General",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/30/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/30/23",slug:"/changelog_source/preview/1.19/30/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/30/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/23/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},i=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed a crashing issue related to undyed Shulkers"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The '/execute at' and '/execute as' commands will now execute at the correct relative rotation (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-156277",children:"MCPE-156277"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["'/execute at @e run kill @e' no longer crashes the game when there are items on the ground (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-161029",children:"MCPE-161029"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:['Added chat output when entities are skipped by "/ride\xa0summon_ride\xa0no_ride_change" (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-129486",children:"MCPE-129486"}),")"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(t.h2,{id:"actor-properties",children:(0,r.jsx)(t.strong,{children:"Actor Properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add a content error when default or set_property expressions include side-effects, such as Molang variable assignment"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"gametest-framework",children:(0,r.jsx)(t.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Memory Watchdog","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"script-watchdog-memory-warning-"})," Produces a content log warning when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the warning. (default = 100)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"script-watchdog-memory-limit-"})," Saves and shuts down the world when the combined memory usage exceeds the given threshold (in megabytes). Setting this value to 0 disables the limit. (default = 250)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Player","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"setVelocity will now throw an exception when called on player types"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Watchdog","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Increased slow code warning threshold from 2 ms to 6 ms"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Items","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Renamed ",(0,r.jsx)(t.code,{children:"Items"})," to ",(0,r.jsx)(t.code,{children:"ItemTypes"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["ItemTypes","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.code,{children:"function getAll(): ItemTypeIterator-"})," Returns an iterator of all available item types"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(74848),s=n(28453),a=n(18228),o=n(19365);const l={},c=void 0,i={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),a=n(23104),o=n(56347),l=n(205),c=n(57485),i=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,d]=p({queryString:n,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=i??g;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l,rightElement:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),c?(0,x.jsx)("div",{className:"w-full",children:c}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);