"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[40818,21032,66541,98438],{20281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),l=n(76619),a=(n(39177),n(59938));const i={},o=void 0,c={id:"changelog_source/preview/1.19/60/25/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.19/60/25/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech",permalink:"/docs/changelog_source/preview/1.19/60/25/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Recipes",id:"recipes",level:2},{value:"General",id:"general",level:2}];function h(e){const t={h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(l.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"recipes",children:"Recipes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Renamed and converted all Smithing Table recipes to use the newly introduced \u201cminecraft",":recipe","_smithing_transform\u201d recipe format"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added content error for the condition that Custom blocks with permutations or properties fail to load in non-experimental worlds for JSON formats 1.19.60 and onwards"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},76619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const l={},a=void 0,i={id:"changelog_source/preview/1.19/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Entity",source:"@site/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},o={},c=[];function d(e){const t={em:"em",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Entity\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Fixed a bug where the ",(0,r.jsx)(t.em,{children:"getEffect"})," method could return an invalid Effect (and another case where an Effect could become invalid after a new Effect was added)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["EntityHurtEvent\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added read-only property ",(0,r.jsx)(t.em,{children:"damageSource: EntityDamageSource"})," - Gets information about the damage source"]}),"\n",(0,r.jsxs)(t.li,{children:["EntityDamageSource\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added property ",(0,r.jsx)(t.em,{children:"cause: EntityDamageCause"})," - Gets the damage cause"]}),"\n",(0,r.jsxs)(t.li,{children:["Added property ",(0,r.jsx)(t.em,{children:"damagingEntity?: Entity"})," - Gets the damaging Entity"]}),"\n",(0,r.jsxs)(t.li,{children:["Added property ",(0,r.jsx)(t.em,{children:"damagingProjectile?: Entity"})," - Gets the damaging projectile Entity"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"applyDamage(amount: number, source?: EntityDamageSource): boolean"})," - Applies damage to the Entity and returns the result of the operation"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Dimension\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"fillBlocks(begin: BlockLocation, end: BlockLocation, block: BlockPermutation | BlockType, options?: BlockFillOptions): number"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fills an area between ",(0,r.jsx)(t.em,{children:"begin"})," and ",(0,r.jsx)(t.em,{children:"end"})," with block of type block. Returns number of blocks placed"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Added new interface ",(0,r.jsx)(t.em,{children:"BlockFillOptions"})," with member ",(0,r.jsx)(t.em,{children:"matchingBlock?: BlockPermutation | BlockType"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Used with ",(0,r.jsx)(t.em,{children:"fillBlocks"})," to apply additional options, such as only filling blocks matching ",(0,r.jsx)(t.em,{children:"matchingBlock"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Player\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"addLevels(amount: number): number"})," - Adds/Removes level to/from the Player and returns the current level of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"addExperience(amount: number): number"})," - Adds/Removes experience to/from the Player and returns the current experience of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"resetLevel(): void"})," - Resets the level of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function ",(0,r.jsx)(t.em,{children:"getTotalXp(): number"})," - Gets the total experience of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added read-only property ",(0,r.jsx)(t.em,{children:"level"})," - Gets the level of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added read-only property ",(0,r.jsx)(t.em,{children:"xpEarnedAtCurrentLevel"})," - Gets the experience earned at the current level of the Player"]}),"\n",(0,r.jsxs)(t.li,{children:["Added read-only property ",(0,r.jsx)(t.em,{children:"totalXpNeededForNextLevel"})," - Gets the total experience required for the current level of the Player"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},39177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(74848),s=n(28453);const l={},a=void 0,i={id:"changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.19/60/25",slug:"/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},o={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),l=n(18228),a=n(19365);const i={},o=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(l.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(a.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),l=n(23104),a=n(56347),i=n(205),o=n(57485),c=n(31682),d=n(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,u]=m({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),b=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i,rightElement:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(d(t),a(s))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...l,className:(0,s.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),o?(0,x.jsx)("div",{className:"w-full",children:o}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);