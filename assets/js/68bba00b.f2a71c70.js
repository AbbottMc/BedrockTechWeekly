"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[6596,21032],{95042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(74848),s=t(28453);t(59938);const o={},l=void 0,i={id:"changelog_source/preview/1.17/40/20/tech",title:"tech",description:"Data Driven Items",source:"@site/docs/changelog_source/preview/1.17/40/20/tech.mdx",sourceDirName:"changelog_source/preview/1.17/40/20",slug:"/changelog_source/preview/1.17/40/20/tech",permalink:"/docs/changelog_source/preview/1.17/40/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/40/20/tech.mdx",tags:[],version:"current",frontMatter:{}},a={},c=[{value:"<strong>Data Driven Items</strong>",id:"data-driven-items",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Data Driven Blocks</strong>",id:"data-driven-blocks",level:2},{value:"<strong>Graphics</strong>",id:"graphics",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>Player</strong>",id:"player",level:2},{value:"<strong>Block</strong>",id:"block",level:2},{value:"<strong>BlockType</strong>",id:"blocktype",level:2},{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"data-driven-items",children:(0,r.jsx)(n.strong,{children:"Data Driven Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated documentation for Block Rotation Component"}),"\n",(0,r.jsx)(n.li,{children:"Added required toggles to documentation and to content error for block components"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:(0,r.jsx)(n.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Command blocks with 'Needs Redstone' and a non-zero 'Delay in Ticks' will now execute only if they remain powered for the delay duration (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-74281",children:"MCPE-74281"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Fix alignment of the sidebar display from the /scoreboard command when text length changes"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"data-driven-blocks",children:(0,r.jsx)(n.strong,{children:"Data Driven Blocks"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated documentation for BlockExplosionResistance"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"graphics",children:(0,r.jsx)(n.strong,{children:"Graphics"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed failure to render leash when attached to a mob outside of viewport (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-63931",children:"MCPE-63931"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Added a content error for using a material but not providing the required number of textures to the render controller"}),"\n",(0,r.jsx)(n.li,{children:"Testing RenderDragon engine across subset of Android devices (ARMv7)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mobs",children:(0,r.jsx)(n.strong,{children:"Mobs"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed ability to summon experience orbs via /summon command (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-130835",children:"MCPE-130835"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Fixed display only entity destruction in chunk discard scenarios"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"molang",children:(0,r.jsx)(n.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed query.item_remaining_use_duration having improperly scaled or inverted results (This fix is a Versioned Change as of engine version 1.17.30)"}),"\n",(0,r.jsx)(n.li,{children:"Add new compile errors for expressions like\xa0'text' + 3, which were previously ignored (This is a Versioned Change as of engine version 1.17.40)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:(0,r.jsx)(n.strong,{children:"User Interface"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added an ImGUI window for easier viewing of content errors"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"gametest-framework-experimental",children:(0,r.jsx)(n.strong,{children:"GameTest Framework (Experimental)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Renamed method succeedWhenBlockTypePresent to succeedWhenBlockPresent"}),"\n",(0,r.jsxs)(n.li,{children:['Fixed a bug where property\xa0idwould return "Unknown" for custom entities (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-137786",children:"MCPE-137786"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Identifier strings returned from property\xa0idnow include the item's namespace"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\xa0\xa0\xa0\xa0 ",(0,r.jsx)(n.strong,{children:"GameTestSequence"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Removed method thenWaitWithDelay"}),"\n",(0,r.jsx)(n.li,{children:"Added method thenWaitAfter(delayTicks: number, callback: () => undefined) - After a delay, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"player",children:(0,r.jsx)(n.strong,{children:"Player"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a bug where the location property would return an incorrect height for players"}),"\n",(0,r.jsx)(n.li,{children:"Added property\xa0id"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"block",children:(0,r.jsx)(n.strong,{children:"Block"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0getLocationwith property\xa0location"}),"\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0getPermutationwith property\xa0permutation"}),"\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0getTypewith property\xa0type"}),"\n",(0,r.jsx)(n.li,{children:"Replaced methods\xa0isWaterloggedand\xa0setWaterlogged\xa0with property\xa0isWaterlogged"}),"\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0getBlockDatawith property\xa0permutation"}),"\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0isEmptywith property\xa0isEmpty"}),"\n",(0,r.jsx)(n.li,{children:"Removed property\xa0canBeWaterlogged"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blocktype",children:(0,r.jsx)(n.strong,{children:"BlockType"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0getNamewith property\xa0id"}),"\n",(0,r.jsx)(n.li,{children:"Replaced method\xa0canBeWaterloggedwith property\xa0canBeWaterlogged"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blockpermutation",children:(0,r.jsx)(n.strong,{children:"BlockPermutation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Replaced method getTypewith property type"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),o=t(18228),l=t(19365);const i={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),s=t(34164),o=t(23104),l=t(56347),i=t(205),a=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:s}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),f=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(d(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:[i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,s.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,v.jsx)("div",{className:"w-full",children:a}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);