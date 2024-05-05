"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[97507,21032],{4575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(74848),a=t(28453);t(59938);const o={},s=void 0,i={id:"changelog_source/preview/1.18/20/27/tech",title:"tech",description:"AI Goals",source:"@site/docs/changelog_source/preview/1.18/20/27/tech.mdx",sourceDirName:"changelog_source/preview/1.18/20/27",slug:"/changelog_source/preview/1.18/20/27/tech",permalink:"/docs/changelog_source/preview/1.18/20/27/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/27/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>Animation</strong>",id:"animation",level:2},{value:"<strong>Mobs</strong>",id:"mobs",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>mojang-gametest module:</strong>",id:"mojang-gametest-module",level:2},{value:"<strong>mojang-minecraft module:</strong>",id:"mojang-minecraft-module",level:2},{value:"<strong>Interact Component</strong>",id:"interact-component",level:2},{value:"<strong>Items</strong>",id:"items",level:2}];function u(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"ai-goals",children:(0,r.jsx)(n.strong,{children:"AI Goals"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Exposed new data parameter "calculate_new_path_radius" for the Go Home Goal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home'}),"\n",(0,r.jsx)(n.li,{children:"Added Knockback Height Cap value to Knockback Roar Goal"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"animation",children:(0,r.jsx)(n.strong,{children:"Animation"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a bug where timeline events at 0.0 would sometimes not run in looping animations"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mobs",children:(0,r.jsx)(n.strong,{children:"Mobs"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed command block failing to summon mob in Extreme Speed Runner Marketplace map"}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"technical-experimental-features",children:(0,r.jsx)(n.strong,{children:"Technical Experimental Features"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Due to engine limitations, "minecraft',":geometry",'" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the [0,0,0] to [15,15,15] space. Any blocks loaded from behavior packs that exceed this limit will render as the info_update block and show a content error in the log.']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:""}),"\n",(0,r.jsx)(n.h2,{id:"gametest-framework",children:(0,r.jsx)(n.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Exposed the following components for Actors. Each of these has a\xa0valueproperty that contains the data of the component.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["minecraft",":variant"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":skin","_id"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":mark","_variant"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":friction","_modifier"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":ground","_offset"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":scale"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":push","_through"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mojang-gametest-module",children:(0,r.jsx)(n.strong,{children:"mojang-gametest module:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Removed\xa0radiusargument from command\xa0/gametest clearall"}),"\n",(0,r.jsx)(n.li,{children:"Modified the behavior of function\xa0attack()to make the simulated player swing even when no target is found"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"mojang-minecraft-module",children:(0,r.jsx)(n.strong,{children:"mojang-minecraft module:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Added event\xa0entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)- Fires when an entity or block is hit by another entity"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"function playSound(soundID : String, soundOptions : SoundOptions) - plays a sound for a player, cannot be heard by entities other than that specific player"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interact-component",children:(0,r.jsx)(n.strong,{children:"Interact Component"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Now have two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items",children:(0,r.jsx)(n.strong,{children:"Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Weapon events are correctly applied when the Weapons are used by Mobs (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-118692",children:"MCPE-118692"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),a=t(28453),o=t(18228),s=t(19365);const i={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(u(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:[i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);