"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84773,43115,13374,35415],{99819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(57399),o=(t(70349),t(74450));const l={},a=void 0,c={id:"changelog_source/preview/1.20/30/22/tech",title:"tech",description:"Editor",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"<strong>Graphical</strong>",id:"graphical",level:2}];function h(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"editor",children:(0,r.jsx)(n.strong,{children:"Editor"})}),"\n",(0,r.jsxs)(n.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels withed ",(0,r.jsx)(n.strong,{children:"#BedrockEditor."})]}),"\n",(0,r.jsxs)(n.p,{children:["Learn ",(0,r.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:"how to use"})," the Editor, join the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"})," discussion forum to engage with the team, and get started building extensions via the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Fixes this week:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Minor updates to the Reload button to Tool mode for reloading scripts and refreshing the UI"}),"\n",(0,r.jsxs)(n.li,{children:["IPropertyPane","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added property\xa0",(0,r.jsx)(n.em,{children:"collapsed"})," to check if the pane is expanded or collapsed"]}),"\n",(0,r.jsxs)(n.li,{children:["Added functions\xa0",(0,r.jsx)(n.em,{children:"collapse"})," and\xa0",(0,r.jsx)(n.em,{children:"expand"}),"\xa0to control\xa0",(0,r.jsx)(n.em,{children:"collapsed"}),"\xa0state"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items",children:(0,r.jsx)(n.strong,{children:"Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Released the "minecraft',":food",'" item component out of experimental in json formats 1.20.30 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Added "minecraft',":interact",'_button" item component to enable and set text on the interact button in json formats 1.20.30 and above\xa0']}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:(0,r.jsx)(n.strong,{children:"Graphical"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed lighting of items in hand in the Deferred Technical Preview\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Optimization and fixes for point light contributions"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},57399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),s=t(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/30/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Fixed issue where prototype properties are not possible to redefine using\xa0defineProperty (MCPE-174073)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={a:"a",em:"em",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fixed issue where prototype properties are not possible to redefine using\xa0",(0,r.jsx)(n.em,{children:"defineProperty"})," (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-174073",children:"MCPE-174073"}),")\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:["ItemStack\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"getCanPlaceOn()"})," and\xa0",(0,r.jsx)(n.em,{children:"getCanDestroy()"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added upper maximum limit of 255 to\xa0",(0,r.jsx)(n.em,{children:"amount"})," property - will throw if exceeds"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Entity\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added function\xa0",(0,r.jsx)(n.em,{children:"getProperty(identifier: string): boolean | number | string | undefined"}),"- Gets an Entity Property"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function\xa0",(0,r.jsx)(n.em,{children:"setProperty(identifier: string, value: boolean | number | string): void"}),"- Sets an Entity Property during the next tick"]}),"\n",(0,r.jsxs)(n.li,{children:["Added function\xa0",(0,r.jsx)(n.em,{children:"resetProperty(identifier: string): boolean | number | string;"}),"- Resets an Entity Property to its default value during the next tick and returns the default value"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["beforeEvents\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added event/property\xa0",(0,r.jsx)(n.em,{children:"removeEvent"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["afterEvents\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Renamed event/property\xa0",(0,r.jsx)(n.em,{children:"removedEvent"})," to\xa0",(0,r.jsx)(n.em,{children:"removeEvent"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Class\xa0",(0,r.jsx)(n.em,{children:"EntityRemovedAfterEvent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Renamed field\xa0",(0,r.jsx)(n.em,{children:"removedEntity"})," to\xa0",(0,r.jsx)(n.em,{children:"removedEntityId"}),":\xa0",(0,r.jsx)(n.em,{children:"removedEntityId: string"})]}),"\n",(0,r.jsxs)(n.li,{children:["Added field\xa0",(0,r.jsx)(n.em,{children:"typeId: string"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Added class\xa0",(0,r.jsx)(n.em,{children:"EntityRemovedBeforeEvent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added field\xa0",(0,r.jsx)(n.em,{children:"removedEntity: Entity"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"EquipmentSlot"})," to\xa0",(0,r.jsx)(n.em,{children:"5.0"}),"\xa0and changed enum values to uppercase"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved\xa0",(0,r.jsx)(n.em,{children:"EntityEquippableComponent"})," to\xa0",(0,r.jsx)(n.em,{children:"5.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Scoreboard\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"setObjectiveAtDisplaySlot"})," return type now correctly set to ",(0,r.jsx)(n.em,{children:"ScoreboardObjective"})," or undefined"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["ScoreboardIdentity\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"getEntity"})," return type now correctly set to Entity or undefined"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"setWeather"})," API can now take an optional duration parameter to set the weather duration"]}),"\n",(0,r.jsxs)(n.li,{children:["Added read-only property\xa0",(0,r.jsx)(n.em,{children:"heightRange: NumberRange"}),"- Gets min/max dimension height limits."]}),"\n",(0,r.jsx)(n.li,{children:"Adding Player.isSleeping and Player.isEmoting\xa0"}),"\n"]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},70349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(74848),s=t(28453);const i={},o=void 0,l={id:"changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/30/22",slug:"/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/30/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(74848),s=t(28453),i=t(18228),o=t(19365);const l={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),i=t(23104),o=t(56347),l=t(205),a=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:s}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),f=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==r&&(d(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,j.jsx)("div",{className:"w-full",children:a}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;if(n){const e=t.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);