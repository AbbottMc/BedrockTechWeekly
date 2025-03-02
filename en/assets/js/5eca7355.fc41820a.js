"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[64529,43115,57826,32823],{79695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453),s=t(99955),a=(t(71745),t(74450));const l={},i=void 0,c={id:"changelog_source/preview/1.21/10/21/tech",title:"tech",description:"Biomes",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/10/21/tech.mdx",sourceDirName:"changelog_source/preview/1.21/10/21",slug:"/changelog_source/preview/1.21/10/21/tech",permalink:"/en/docs/changelog_source/preview/1.21/10/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/10/21/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Biomes",id:"biomes",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Editor",id:"editor",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc];function h(e){const n={a:"a",em:"em",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"biomes",children:"Biomes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Biome components "minecraft',":forced",'_features" and "minecraft',":ignore",'_automatic_features" are now deprecated\xa0']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Restored the back-side texture of the Sunflower to be leafy green (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-181275",children:"MCPE-181275"}),")\xa0"]}),"\n",(0,r.jsx)(n.li,{children:'"coral_fan_hang" block is now split into unique instances "tube_coral_wall_fan", "brain_coral_wall_fan", "dead_tube_coral_wall_fan", and "dead_brain_coral_wall_fan"\xa0'}),"\n",(0,r.jsx)(n.li,{children:'"coral_fan_hang2" block is now split into unique instances "bubble_coral_wall_fan", "fire_coral_wall_fan", "dead_bubble_coral_wall_fan", and "dead_fire_coral_wall_fan"\xa0'}),"\n",(0,r.jsx)(n.li,{children:'"coral_fan_hang3" block is now split into unique instances "horn_coral_wall_fan" and "dead_horn_coral_wall_fan"'}),"\n",(0,r.jsx)(n.li,{children:'"stone_block_slab4" block is now split into unique instances "mossy_stone_brick_slab", "smooth_quartz_slab", "normal_stone_slab", "cut_sandstone_slab" and "cut_red_sandstone_slab"\xa0'}),"\n",(0,r.jsx)(n.li,{children:'"mossy_stone_brick_slab" now has a destruction time of 1.5'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Do not show Hardcore mode option when creating an editor project\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated Selection, Brush, Line, Paste, Delete, Fill tool to load bounds before applying changes"}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.em,{children:"IActionBar"})," API to manage scripted ",(0,r.jsx)(n.em,{children:"IActionBarItem"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added property ",(0,r.jsx)(n.em,{children:"actionBar: IActionBar"})," to ",(0,r.jsx)(n.em,{children:"IPlayerUISession"})," API which represents quick action items in the action bar selector UI"]}),"\n",(0,r.jsxs)(n.li,{children:["Added ",(0,r.jsx)(n.em,{children:"addColorPicker"})," method to ",(0,r.jsx)(n.em,{children:"IPropertyPane"})," API to display a color picker property pane item for modifying ",(0,r.jsx)(n.em,{children:"RGBA"})," values\xa0"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},99955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),o=t(28453);const s={},a=void 0,l={id:"changelog_source/preview/1.21/10/21/tech_sapi_exp",title:"tech_sapi_exp",description:"-   EntityBreathableComponent",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/10/21/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/10/21",slug:"/changelog_source/preview/1.21/10/21/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.21/10/21/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/10/21/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},i={},c=[];function u(e){const n={em:"em",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["EntityBreathableComponent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Changed function ",(0,r.jsx)(n.em,{children:"setAirSupply(value: number): void"})," to property ",(0,r.jsx)(n.em,{children:"airSupply: number"})," in ",(0,r.jsx)(n.em,{children:"beta"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added property ",(0,r.jsx)(n.em,{children:"readonly canBreathe: boolean"})," to ",(0,r.jsx)(n.em,{children:"beta"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["EntityComponent\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved class ",(0,r.jsx)(n.em,{children:"EntityMovementComponent"})," from ",(0,r.jsx)(n.em,{children:"beta"})," to ",(0,r.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class ",(0,r.jsx)(n.em,{children:"EntityLavaMovementComponent"})," from ",(0,r.jsx)(n.em,{children:"beta"})," to ",(0,r.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class ",(0,r.jsx)(n.em,{children:"EntityMovementGlideComponent"})," from ",(0,r.jsx)(n.em,{children:"beta"})," to ",(0,r.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class ",(0,r.jsx)(n.em,{children:"EntityMovementSwayComponent"})," from ",(0,r.jsx)(n.em,{children:"beta"})," to ",(0,r.jsx)(n.em,{children:"1.12.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class ",(0,r.jsx)(n.em,{children:"EntityUnderwaterMovementComponent"})," from ",(0,r.jsx)(n.em,{children:"beta"})," to ",(0,r.jsx)(n.em,{children:"1.12.0"}),"\xa0"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added class ",(0,r.jsx)(n.em,{children:"PlayerCursorInventoryComponent"})," which adds read-only access to the players cursor inventory and the ability to clear it"]}),"\n"]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},71745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),o=t(28453);const s={},a=void 0,l={id:"changelog_source/preview/1.21/10/21/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.21/10/21/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/10/21",slug:"/changelog_source/preview/1.21/10/21/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.21/10/21/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/10/21/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},i={},c=[];function u(e){return(0,r.jsx)(r.Fragment,{})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u()}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453),s=t(18228),a=t(19365);const l={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(a.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),o=t(34164),s=t(23104),a=t(56347),l=t(205),i=t(57485),c=t(31682),u=t(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),_=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{_&&i(_)}),[_]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const _={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=l[t].value;o!==r&&(u(n),a(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",_.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),i?(0,g.jsx)("div",{className:"w-full",children:i}):void 0]})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;if(n){const e=t.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",_.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(j,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);