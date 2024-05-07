"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[42998,21032],{77137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(74848),a=t(28453);t(59938);const o={},s=void 0,i={id:"changelog_source/stable/1.18/0/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.18/0/tech.mdx",sourceDirName:"changelog_source/stable/1.18/0",slug:"/changelog_source/stable/1.18/0/tech",permalink:"/docs/changelog_source/stable/1.18/0/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/0/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"**GameTest Framework",id:"gametest-framework",level:2},{value:"**",id:"",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"updated-add-on-template-packs",children:(0,r.jsx)(n.strong,{children:"Updated Add-On Template Packs"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Updated Add-On templates for 1.18.0 with new resources, behaviors, and documentation, are available to download at ",(0,r.jsx)(n.a,{href:"https://aka.ms/MCAddOnPacks",children:"aka.ms/MCAddOnPacks"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fixes",children:(0,r.jsx)(n.strong,{children:"Fixes"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Players are disconnected if server and client have different Runtime Block IDs"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a rendering error that could occur when attempting to render a Vanilla mob in a base game version prior to the version that mob was introduced through JSON files"}),"\n",(0,r.jsxs)(n.li,{children:["Most content errors and warnings will now only display once per world (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-135153",children:"MCPE-135153"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"Improved performance in 'RangedAttackGoal' for mobs that do not move"}),"\n",(0,r.jsx)(n.li,{children:"Fixed mobs' default summonability when not specified in JSON"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a versioning error with animation controllers that was causing the wrong schema to be utilized on Marketplace worlds with an animation controller version 1.8.0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:(0,r.jsx)(n.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The '/clone' command has been updated to properly check for overlapping source and destinations areas no longer allowing for a 1 block depth overlap on each axis. This can continue to be overridden via the force clone option"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"gametest-framework",children:"**GameTest Framework"}),"\n",(0,r.jsx)(n.h2,{id:"",children:"**"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["New Item API updates: ItemStack","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exposed interfaces for accessing script-enabled ItemComponents on ItemStack. Note that these item components only work in conjunction with custom items defined via the Holiday Creator Features experiment"}),"\n",(0,r.jsx)(n.li,{children:"hasComponent(componentId: string) - returns true if the ItemStack has the component [componentId] attached to it"}),"\n",(0,r.jsx)(n.li,{children:"getComponent(componentId: string) - returns a handle to the component attached to this ItemStack. Returns an undefined handle if the component does not exist or if the component is yet to be exposed to script"}),"\n",(0,r.jsx)(n.li,{children:"getComponents() - returns an array of all attached script-enabled components on this ItemStack"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Script Enabled Item Components","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["minecraft",":food","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read-only property nutrition - number that describes how much nutrition this food item gives the player when eaten"}),"\n",(0,r.jsx)(n.li,{children:"Read-only property saturationModifier - number that is the saturation modifier used to apply the saturation buff when eaten"}),"\n",(0,r.jsx)(n.li,{children:"Read-only property canAlwaysEat - if true the player can always eat this item (even when not hungry)"}),"\n",(0,r.jsx)(n.li,{children:"Read-only property usingConvertsTo - string name of the Item this will be converted to when eaten. If empty, the item will not convert to anything else"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["minecraft",":durability","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read-only property maxDurability - the number amount of damage this item can take before breaking"}),"\n",(0,r.jsx)(n.li,{children:"Read-only property damageRange - a NumberRange describing the chance of the item losing durability"}),"\n",(0,r.jsx)(n.li,{children:"Property damage - gets or sets the current damage on the ItemStack"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"getDamageChance(unbreaking: number = 0) - gets the maximum chance that this item would be damaged using the damageRange property if given an unbreaking level. Incoming unbreaking parameter must be greater than 0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Added deltaTime read only property to TickEvent which represents the time between the last Level tick in seconds"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"molang",children:(0,r.jsx)(n.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed content error when Molang expression has no tokens to only fire when 'min_engine_version' is 1.17.40 or higher"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453),o=t(18228),s=t(19365);const i={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),a=t(34164),o=t(23104),s=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,u]=p({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(d(n),s(a))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:[i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;if(n){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);