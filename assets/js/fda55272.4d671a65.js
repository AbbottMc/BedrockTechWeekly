"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[14633,21032],{86918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);n(59938);const s={},l=void 0,a={id:"changelog_source/preview/1.18/10/22/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.18/10/22/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/22",slug:"/changelog_source/preview/1.18/10/22/tech",permalink:"/docs/changelog_source/preview/1.18/10/22/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/22/tech.mdx",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"**",id:"",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}];function u(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Reduced the number of network packets sent with the subchunk request system and packet optimizations"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"graphics",children:(0,r.jsx)(t.strong,{children:"Graphics"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Testing RenderDragon on all Android devices"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"items",children:(0,r.jsx)(t.strong,{children:"Items"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added 9 new shapeless recipe JSON files, replacing hard-coded Smithing Table crafting recipes"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"molang",children:(0,r.jsx)(t.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add non-experimental is_name_any, is_item_name_any, and is_owner_identifier_any queries"}),"\n",(0,r.jsx)(t.li,{children:"Fixed relative_block_has_all_tags block_neighbor_has_all_tags and biome_has_all_tags queries to require all tags rather than just any tags"}),"\n",(0,r.jsxs)(t.li,{children:["Fixed nested conditional (ternary) operator parsing to go right-to-left instead of left-to-right","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.18.10 or higher"}),"\n",(0,r.jsxs)(t.li,{children:["Previously nested conditional expressions like\xa0A?B",":C","?D",":Ewould"," evaluate as\xa0(A?B",":C",")?D",":E",", now they evaluate as\xa0A?B:(C?D",":E",")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"experimental-features",children:"**Experimental Features"}),"\n",(0,r.jsx)(t.h2,{id:"",children:"**"}),"\n",(0,r.jsx)(t.h2,{id:"gametest-framework",children:(0,r.jsx)(t.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsx)(t.p,{children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Added new entity query capabilities in the form of new methods on Dimension and World."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["World object","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Replaced function\xa0getPlayers : Player[] with function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players in the dimension. Optionally,\xa0options\xa0can be used to filter the result"}),"\n",(0,r.jsx)(t.li,{children:"Added optional argument to\xa0events.addEffect. This argument will limit the callback to only fire for specific entities (see EntityEventOptions)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Dimension object","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added function\xa0getPlayers(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all players. Optionally,\xa0options\xa0can be used to filter the result"}),"\n",(0,r.jsx)(t.li,{children:"Added function\xa0getEntities(options: EntityQueryOptions = undefined) : EntityIterator- Returns an iterator to a collection containing all entities in the dimension. Optionally,\xa0options\xa0can be used to filter the result"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["EntityQueryOptions","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added class\xa0EntityQueryOptions- Provides additional filtering options when calling\xa0getEntities\xa0and\xa0getPlayers"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["EntityQueryScoreOptions","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added class\xa0EntityQueryScoreOptions- Used with\xa0EntityQueryOptions\xa0to provide scoreboard filtering"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["EntityEventOptions","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Used to filter events that fire on entities to restrict the callback to only certain ones."}),"\n",(0,r.jsx)(t.li,{children:"Property\xa0entity: Entity[] - If specified, will restrict to just this entity"}),"\n",(0,r.jsxs)(t.li,{children:["Property\xa0entityTypes: string[] - If specified, will restrict to entities with the specified type (e.g.,\xa0minecraft",":creeper",")"]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(74848),i=n(28453),s=n(18228),l=n(19365);const a={},o=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,l),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),s=n(23104),l=n(56347),a=n(205),o=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=g({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:a,rightElement:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),i=a[n].value;i!==r&&(u(t),l(i))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:[a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),o?(0,x.jsx)("div",{className:"w-full",children:o}):void 0]})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,x.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);