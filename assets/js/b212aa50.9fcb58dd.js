"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42791,21032],{35327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(74848),o=t(28453);t(59938);const l={},a=void 0,s={id:"changelog_source/preview/1.18/10/21/tech",title:"tech",description:"Stability and Performance",source:"@site/docs/changelog_source/preview/1.18/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.18/10/21",slug:"/changelog_source/preview/1.18/10/21/tech",permalink:"/docs/changelog_source/preview/1.18/10/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>JumpToBlockGoal</strong>",id:"jumptoblockgoal",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>mojang-minecraft</strong>",id:"mojang-minecraft",level:3},{value:"<strong>mojang-gametest</strong>",id:"mojang-gametest",level:3}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"stability-and-performance",children:(0,r.jsx)(n.strong,{children:"Stability and Performance"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved performance when executing commands"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"animation",children:(0,r.jsx)(n.strong,{children:"Animation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed an issue where animation controller events defined in the default state would get skipped if the controller immediately transitioned to another state (This is a versioned change that will only be applied for animation controllers starting at format_version 1.18.10)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:(0,r.jsx)(n.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Order of function calls triggered by /execute inside a function are now consistent (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-111849",children:"MCPE-111849"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Added /loot command with spawn loot overload"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"jumptoblockgoal",children:(0,r.jsx)(n.strong,{children:"JumpToBlockGoal"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JumpToBlockGoal can no longer be used when the mob is in water"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"experimental-features",children:(0,r.jsx)(n.strong,{children:"Experimental Features"})}),"\n",(0,r.jsx)(n.h2,{id:"gametest-framework",children:(0,r.jsx)(n.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsx)(n.h3,{id:"mojang-minecraft",children:(0,r.jsx)(n.strong,{children:"mojang-minecraft"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["World","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added blockBreak and blockPlace events, which are called when a player breaks or places a block in the world"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["BlockExplodeEvent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Renamed\xa0destroyedBlock to\xa0block"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Player","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added method startItemCooldown(itemCategory : string, durationTicks : int) - Starts or resets a cooldown on an item category (e.g., ender_pearl) for the given duration in ticks"}),"\n",(0,r.jsx)(n.li,{children:"Added method getItemCooldown(itemCategory : string) - Returns the remaining duration in ticks that this player has of the given item category. If no cooldown is present, returns 0."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ItemCooldownComponent","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Added ItemCooldownComponent (item.getComponent("minecraft',":cooldown",'"))']}),"\n",(0,r.jsx)(n.li,{children:"Read-only property cooldownCategory : string - Represents the cooldown category of this item."}),"\n",(0,r.jsx)(n.li,{children:"Read-only property cooldownTicks : int - Represents the cooldown time in ticks for this item if cooldown is enabled"}),"\n",(0,r.jsx)(n.li,{children:"method startCooldown(player : Player) - Starts or resets a cooldown for this item on the given player if cooldown is enabled for this item"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ItemType","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Removed getName method and added read-only property .id"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mojang-gametest",children:(0,r.jsx)(n.strong,{children:"mojang-gametest"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Test","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added gameMode: GameModeparameter to spawnSimulatedPlayer method"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["SimulatedPlayer","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Renamed\xa0destroyBlockto\xa0breakBlock"}),"\n",(0,r.jsx)(n.li,{children:"Renamed\xa0stopDestroyingBlockto\xa0stopBreakingBlock"}),"\n",(0,r.jsx)(n.li,{children:"Removed selectSlot method"}),"\n",(0,r.jsx)(n.li,{children:"Added property selectedSlot : int - Gets or sets the currently selected hotbar slot for the player"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(74848),o=t(28453),l=t(18228),a=t(19365);const s={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(l.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(a.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var l=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),o=t(34164),l=t(23104),a=t(56347),s=t(205),i=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,l=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=g({queryString:t,groupId:o}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,l]=(0,d.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:o}),x=(()=>{const e=c??p;return m({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{x&&i(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:s,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),o=s[t].value;o!==r&&(d(n),a(o))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:[s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,o.A)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),i?(0,b.jsx)("div",{className:"w-full",children:i}):void 0]})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;if(n){const e=t.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,b.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const o={},l=r.createContext(o);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);