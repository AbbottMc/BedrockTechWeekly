"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69109,43115],{39842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(74848),o=n(28453);n(74450);const a={},s=void 0,l={id:"changelog_source/preview/1.19/10/23/tech",title:"tech",description:"Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/10/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/10/23",slug:"/changelog_source/preview/1.19/10/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/10/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/10/23/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>General</strong>",id:"general",level:2}];function u(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"components",children:(0,r.jsx)(t.strong,{children:"Components"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Fixed a bug that prevented the owner of the "minecraft',":angry",'" component from broadcasting anger to its friends if it has no target. A mob with this component will now be able to get angry if it both does not have a target and the component\'s "filters" list is empty (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-94996",children:"MCPE-94996"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"mobs",children:(0,r.jsx)(t.strong,{children:"Mobs"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Mobs can now be hit by projectile when their hitboxes are outside the mob's bounds"}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"experimental-features",children:(0,r.jsx)(t.strong,{children:"Experimental Features"})}),"\n",(0,r.jsx)(t.h2,{id:"actor-properties",children:(0,r.jsx)(t.strong,{children:"Actor Properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Replace 'values' field with 'range' field, which only supports array JSON types. Added required 'type' JSON field for actor properties with supported values 'int', 'float', 'bool', and 'enum'. The 'default' and 'range' fields on the property must match the type specified in the new 'type' field"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Blocks with\xa0_block_light_absorption_component of value 16 no longer fail to load"}),"\n",(0,r.jsxs)(t.li,{children:["Renamed the component 'minecraft",":ticking","' to 'minecraft",":queued","_ticking'"]}),"\n",(0,r.jsxs)(t.li,{children:["Renamed the 'minecraft",":ticking","' component's field 'range' to 'interval_range', which is now described in ticks rather than seconds"]}),"\n",(0,r.jsxs)(t.li,{children:["Renamed block flammable component fields\xa0_flame_odds_and\xa0",(0,r.jsx)(t.em,{children:"burn_odds"}),"\xa0",(0,r.jsx)(t.em,{children:"to"}),"\xa0",(0,r.jsx)(t.em,{children:"catch_chance_modifier"}),"\xa0and\xa0",(0,r.jsx)(t.em,{children:"destroy_chance_modifier"}),"\xa0"]}),"\n",(0,r.jsx)(t.li,{children:"Added ability to set block flammable component using booleans for default flammable or nonflammable values"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),a=n(18228),s=n(19365);const l={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(s.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,s),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),o=n(34164),a=n(23104),s=n(56347),l=n(205),i=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:o}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=l[n].value;o!==r&&(u(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:[l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,o.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),i?(0,v.jsx)("div",{className:"w-full",children:i}):void 0]})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);