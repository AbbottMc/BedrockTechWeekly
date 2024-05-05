"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[81126,21032,94053,33325,61648,75315],{48026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=r(74848),s=r(28453),i=r(61270),o=r(91010),a=(r(6350),r(43874),r(59938));const l={},c=void 0,d={id:"changelog_source/preview/1.21/0/23/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/0/23/tech.mdx",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech",permalink:"/docs/changelog_source/preview/1.21/0/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...a.toc,{value:"Graphical",id:"graphical",level:2}];function m(e){const t={h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"script-api",children:(0,n.jsx)(t.strong,{children:"Script API"})}),"\n",(0,n.jsx)(a.default,{techSapi:(0,n.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,n.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['The default values for the "damage_sources" field of "behavior.panic" have been updated',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'For the complete list of the new default values, refer to the "Vanilla Parity" section of the changelog'}),"\n",(0,n.jsx)(t.li,{children:"This change only affects entities with a format version of 1.21.0 or higher"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Multiple items with the same custom component will now correctly trigger custom component logic"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Selection volumes can no longer be created when they would exceed the world height limits"}),"\n",(0,n.jsx)(t.li,{children:"When filling up a volume and dragging the volume during the filling operation the filling volume would also change. Now the filling operation happens in the original volume"}),"\n",(0,n.jsx)(t.li,{children:"Fixed a bug where camera collision caused third-person view to display inside the player's head in Crosshair mode"}),"\n"]}),"\n",(0,n.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,n.jsx)(t.h2,{id:"script-api-1",children:(0,n.jsx)(t.strong,{children:"Script API"})}),"\n",(0,n.jsx)(a.default,{techSapi:(0,n.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,n.jsx)(t.h2,{id:"graphical",children:"Graphical"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'Fixed a bug with volumetric fog shading in the Deferred Technical Preview that was causing fog to be much brighter than it should have been. Volumetric fog in the Deferred Technical Preview now matches the look of volumetric fog in RTX much more closely. Fog definitions in resource packs developed for the Deferred Technical Preview will need to be updated after this change. To maintain a similar look, the values for either "max_density" or "scattering" should be increased by a factor of 12.'}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},91010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(74848),s=r(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/0/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityTameMountComponent",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["EntityTameMountComponent\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added method\xa0",(0,n.jsx)(t.em,{children:"tameToPlayer"})]}),"\n",(0,n.jsxs)(t.li,{children:["Added properties\xa0",(0,n.jsx)(t.em,{children:"isTamed"}),",\xa0",(0,n.jsx)(t.em,{children:"isTamedToPlayer"}),",\xa0",(0,n.jsx)(t.em,{children:"tamedToPlayer"}),", and\xa0",(0,n.jsx)(t.em,{children:"tamedToPlayerId"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["GameRules\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added property\xa0",(0,n.jsx)(t.em,{children:"showDaysPlayed"})," to\xa0",(0,n.jsx)(t.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Fixed\xa0_PlayerInputPermissions_input-lock category property-setters so that changes are propagated to clients"}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},43874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(74848),s=r(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,n.jsx)(n.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},61270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(74848),s=r(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/0/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0GameRules rule property-setters so that changes are propagated to clients",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Fixed\xa0",(0,n.jsx)(t.em,{children:"GameRules"})," rule property-setters so that changes are propagated to clients"]}),"\n",(0,n.jsxs)(t.li,{children:["Moved\xa0",(0,n.jsx)(t.em,{children:"startItemCooldown"})," and\xa0",(0,n.jsx)(t.em,{children:"player.getItemCooldown"}),"\xa0from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Released\xa0",(0,n.jsx)(t.em,{children:"playSound"})," from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"playSound"})," is now deprecated and will be removed in a future major version. Use\xa0",(0,n.jsx)(t.em,{children:"Dimension.playSound"})," as the alternative"]}),"\n",(0,n.jsxs)(t.li,{children:["Released\xa0_ListBlockVolume_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Released\xa0_BlockVolumeBase_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Released\xa0_BlockLocationIterator_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved method\xa0_getGameMode(): GameMode_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved method\xa0_setGameMode(gameMode?: GameMode): void_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved member\xa0_playerGameModeChange: PlayerGameModeChangeAfterEventSignal_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to ",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved member\xa0_playerGameModeChange: PlayerGameModeChangeBeforeEventSignal_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved class\xa0_PlayerGameModeChangeAfterEvent_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved class\xa0",(0,n.jsx)(t.em,{children:"PlayerGameModeChangeAfterEventSignal"})," from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to ",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved class\xa0_PlayerGameModeChangeBeforeEvent_from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Moved class\xa0",(0,n.jsx)(t.em,{children:"PlayerGameModeChangeBeforeEventSignal"})," from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.em,{children:"ItemComponentConsumeEvent"})," for ",(0,n.jsx)(t.em,{children:"beta"})]}),"\n",(0,n.jsxs)(t.li,{children:["Change\xa0",(0,n.jsx)(t.em,{children:"waitTick(ticks?: number)"})," to\xa0",(0,n.jsx)(t.em,{children:"system.waitTicks(ticks: number);"})]}),"\n",(0,n.jsxs)(t.li,{children:["Renamed property\xa0_selectedSlot_to\xa0",(0,n.jsx)(t.em,{children:"selectedSlotIndex"}),"\xa0and moved it from\xa0",(0,n.jsx)(t.em,{children:"beta"}),"\xa0to\xa0",(0,n.jsx)(t.em,{children:"1.11.0"})]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=r(74848),s=r(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/0/23",slug:"/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/0/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,n.jsx)(n.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},59938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var n=r(74848),s=r(28453),i=r(18228),o=r(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:void 0!==e.techSapiDiff?(0,n.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,n.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,n.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,n.jsx)(n.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(34164),i=r(23104),o=r(56347),a=r(205),l=r(57485),c=r(31682),d=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=p({queryString:r,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),x=(()=>{const e=c??g;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:[a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===t}),style:{wordBreak:"keep-all"},children:r??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function b(e){let{lazy:t,children:r,selectedValue:s}=e;if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function _(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(_,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);