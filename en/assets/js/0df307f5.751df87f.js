"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[82218,43115],{13795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);n(74450);const s={},a=void 0,i={id:"changelog_source/preview/1.17/30/20/tech",title:"tech",description:"EDU / Chemistry",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/30/20/tech.mdx",sourceDirName:"changelog_source/preview/1.17/30/20",slug:"/changelog_source/preview/1.17/30/20/tech",permalink:"/en/docs/changelog_source/preview/1.17/30/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/30/20/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>EDU / Chemistry</strong>",id:"edu--chemistry",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Mob</strong>",id:"mob",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Molang Documentation</strong>",id:"molang-documentation",level:2}];function u(e){const t={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"edu--chemistry",children:(0,r.jsx)(t.strong,{children:"EDU / Chemistry"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"New chemistry material reductions can be defined in the JSON files"}),"\n",(0,r.jsx)(t.li,{children:"Chalkboards now appear consistently when being placed"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The '/clone' command now copies signal strength for Levers and Redstone Dust"}),"\n",(0,r.jsx)(t.li,{children:"The '/structure' command can now specify a <to: x y z> position argument with y below 0 as long as it is equal or above the minimum height for that dimension"}),"\n",(0,r.jsx)(t.li,{children:'Added functionality for Intellisense options: "d" and "default" in the gamemode command selector'}),"\n",(0,r.jsxs)(t.li,{children:["Minecart with Command Block can now use the self selector (@s) in its commands to target itself (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-60126",children:"MCPE-60126"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:['The "/time set" command now sets the correct time and day when specifying a time above 24000 or below the current time (e.g. "/time set 0" sets the day to 0, "/time set 28000" sets the day to 1), and "/time" can now set or add to a negative world time (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-43394",children:"MCPE-43394"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"items",children:(0,r.jsx)(t.strong,{children:"Items"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Updated documentation formatting for item components"}),"\n",(0,r.jsx)(t.li,{children:"Using water buckets to collect fish has been version locked to prevent breaking old world templates"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"mob",children:(0,r.jsx)(t.strong,{children:"Mob"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed the ability to add launch point positional offset for projectiles spawned with the 'spawn_entity' component"}),"\n",(0,r.jsx)(t.li,{children:"Fixed the ability to add angular offset to launch vector for projectiles spawned with the 'spawn_entity' component"}),"\n",(0,r.jsx)(t.li,{children:"Fixed offset not working for projectiles summoned through an interaction"}),"\n",(0,r.jsx)(t.li,{children:"Fixed projectile 'angleoffset' value only reflected if shooter is riding another entity"}),"\n",(0,r.jsx)(t.li,{children:"Fixed rotation of projectile launchpoint around a mob when projectile offset specified"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"molang",children:(0,r.jsx)(t.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed 'query.item_remaining_use_duration' having improperly scaled or inverted results (This is to fix a Versioned Change as of engine version 1.17.30)"}),"\n",(0,r.jsxs)(t.li,{children:["Added 'query.facing_target_to_range_attack', which returns whether or not the queried actor's 'minecraft",":behavior",".ranged_attack' goal is currently running"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"molang-documentation",children:(0,r.jsx)(t.strong,{children:"Molang Documentation"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Improved Molang documentation related to experiments","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Experimental queries and language expressions now list which experiment(s) they require to be available"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Versioned Changes are now detailed in the documentation, starting with the 'query.item_remaining_use_duration' fix"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),s=n(18228),a=n(19365);const i={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(a.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),o=n(34164),s=n(23104),a=n(56347),i=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=g({queryString:n,groupId:o}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),b=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=i[n].value;o!==r&&(u(t),a(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:[i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);