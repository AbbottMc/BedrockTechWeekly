"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[58482,21032,14466,39247],{63308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),i=r(28453),a=r(46920),s=(r(20976),r(59938));const o={},l=void 0,c={id:"changelog_source/preview/1.21/30/22/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.21/30/22",slug:"/changelog_source/preview/1.21/30/22/tech",permalink:"/docs/changelog_source/preview/1.21/30/22/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...s.toc,{value:"Graphical",id:"graphical",level:2},{value:"Resource and Behavior Packs",id:"resource-and-behavior-packs",level:2},{value:"API",id:"api",level:2},{value:"Graphical",id:"graphical-1",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"script-api",children:(0,n.jsx)(t.strong,{children:"Script API"})}),"\n",(0,n.jsx)(s.default,{techSapi:(0,n.jsx)(a.default,{}),techSapiDiff:void 0}),"\n",(0,n.jsx)(t.h2,{id:"graphical",children:"Graphical"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Fixed a bug that caused moon to appear darker (",(0,n.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-172971",children:"MCPE-172971"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"Fixed bug where culling rules for data driven blocks did not rotate with the transformation component\xa0"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"resource-and-behavior-packs",children:"Resource and Behavior Packs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:['The player\'s "helmet_layer_visible" variable is now based on the result of the\xa0',(0,n.jsx)(t.code,{children:"has_head_gear"}),' Molang query and the player and persona render controller\'s part visibility for the helmet layer no longer checks for the existence of head gear. This fixes attachable scripts setting the "helmet_layer_visible" to 1.0 to now properly work and maintains a fix that prevents persona hair and head gear from clipping outside of mob and Pumpkin heads \xa0(',(0,n.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-183058",children:"MCPE-183058"}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"experimental-features",children:"Experimental Features"}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["ItemUseOnBeforeEvent","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added property\xa0",(0,n.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["ItemUseOnAfterEvent","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added property\xa0",(0,n.jsx)(t.code,{children:"readonly isFirstEvent: boolean"}),"\xa0to beta. This value will be true if the event was triggered on players initial interaction button press and false on events triggered from holding the interaction button"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"graphical-1",children:"Graphical"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Added the ability to data-drive water parameters in the Deferred Technical Preview. See the updated Creator portal for more information\xa0"}),"\n",(0,n.jsx)(t.li,{children:"Added a new feature to the Deferred Technical Preview: realistic waves! This new feature must be opted into via a resource pack and will not be enabled by default. See the updated Creator portal for more information"}),"\n",(0,n.jsx)(t.li,{children:"Added water controls to the Editor's Deferred Graphics Settings"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},46920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(74848),i=r(28453);const a={},s=void 0,o={id:"changelog_source/preview/1.21/30/22/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed an issue where @minecraft/server-ui version 1.3.0 was not accessible",source:"@site/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/30/22",slug:"/changelog_source/preview/1.21/30/22/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Editor",id:"editor",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Fixed an issue where @minecraft/server-ui version 1.3.0 was not accessible"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,n.jsxs)(t.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,n.jsx)(t.strong,{children:"#BedrockEditor"}),". Learn\xa0",(0,n.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/editoroverview?view=minecraft-bedrock-stable",children:"how to use"}),"\xa0\xa0the Editor, join the\xa0",(0,n.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"}),"\xa0\xa0forum to engage with the team, and get started building extensions via the\xa0",(0,n.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"}),"\xa0\xa0and\xa0",(0,n.jsx)(t.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),"\xa0."]}),"\n",(0,n.jsx)(t.p,{children:"Updates this week:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added\xa0",(0,n.jsx)(t.code,{children:"Water"}),"\xa0dropdown inside the\xa0",(0,n.jsx)(t.code,{children:"Deferred Lighting Settings"}),"\xa0panel."]}),"\n",(0,n.jsxs)(t.li,{children:["Added\xa0",(0,n.jsx)(t.code,{children:"Export"})," pane inside the file menu to allow customizing world settings before exporting to file."]}),"\n",(0,n.jsxs)(t.li,{children:["Updated Brush Tool with additional features and improved performance.\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added\xa0",(0,n.jsx)(t.code,{children:"Single Block"}),"\xa0brush shape to allow more fine grain editing."]}),"\n",(0,n.jsxs)(t.li,{children:["Added\xa0",(0,n.jsx)(t.code,{children:"Masking Mode"}),"\xa0to customize how brushes interact with the world.\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Replace"}),"\xa0will create a list of blocks that will be replaced when brushing. Blocks not in this list will not be impacted."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Mask"}),"\xa0will create a list of blocks that will be masked/ignored when brushing. Only blocks not in the list will be impacted."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Added\xa0",(0,n.jsx)(t.code,{children:"IRootPropertyPane"}),"\xa0and\xa0",(0,n.jsx)(t.code,{children:"ISubPanePropertyItem"})," interfaces to improve property pane API usability\xa0\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Renamed\xa0",(0,n.jsx)(t.code,{children:"createPropertyPane"}),"\xa0and\xa0",(0,n.jsx)(t.code,{children:"removePropertyPane"}),"\xa0functions for\xa0",(0,n.jsx)(t.code,{children:"IPropertyPane"}),"\xa0to\xa0",(0,n.jsx)(t.code,{children:"createSubPane"}),"\xa0and\xa0",(0,n.jsx)(t.code,{children:"removeSubPane"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Added action button support for root property pane header."}),"\n",(0,n.jsx)(t.li,{children:"Added visual customization support for sub panes."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Added Ruler tool for measuring distances with new client widget framework."}),"\n",(0,n.jsx)(t.li,{children:"Added constraint on the weight value in a Block palette item. Valid values are in the range [1,100].\xa0"}),"\n",(0,n.jsx)(t.li,{children:"Added missing Widget binding export\xa0"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},20976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(74848),i=r(28453);const a={},s=void 0,o={id:"changelog_source/preview/1.21/30/22/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/30/22",slug:"/changelog_source/preview/1.21/30/22/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/30/22/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,n.jsx)(n.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},59938:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),i=r(28453),a=r(18228),s=r(19365);const o={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:void 0!==e.techSapiDiff?(0,n.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,n.jsx)(s.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,n.jsx)(s.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,n.jsx)(n.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var a=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,s),hidden:r,children:t})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(96540),i=r(34164),a=r(23104),s=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,a=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:r,groupId:i}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:i}),b=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:s,tabValues:o,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),i=o[r].value;i!==n&&(d(t),s(i))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t),children:[o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),style:{wordBreak:"keep-all"},children:r??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function _(e){const t=(0,m.A)();return(0,v.jsx)(w,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);