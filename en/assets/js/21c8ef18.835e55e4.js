"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[13691,43115,62216,49966],{58414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),i=t(28453),s=t(48862),o=(t(25062),t(74450));const a={},l=void 0,c={id:"changelog_source/preview/1.20/60/24/tech",title:"tech",description:"AI Goals",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"AI Goals",id:"ai-goals",level:2},{value:"Biomes",id:"biomes",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Event Responses",id:"entity-event-responses",level:2},{value:"Molang",id:"molang",level:2},{value:"Performance",id:"performance",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"Graphical",id:"graphical",level:2},{value:"Scripting",id:"scripting",level:2}];function h(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"ai-goals",children:"AI Goals"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"behavior.follow_parent" now interrupts navigation on stop for content using engine version 1.20.60 or higher\xa0'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"biomes",children:"Biomes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Biome tags in JSON files are now specified under a "minecraft',":tags",'" component, in a "tags" array, rather than as loose JSON objects, for files with a format_version of 1.20.60 or higher\xa0']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'The "interact" component now supports the additional "entity_act" value for the "vibration" field'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with\xa0",(0,r.jsx)(n.strong,{children:"#BedrockEditor."})]}),"\n",(0,r.jsxs)(n.p,{children:["Learn\xa0",(0,r.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:"how to use"}),"\xa0the Editor,\xa0join the\xa0",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"}),"\xa0discussion forum to engage with the team, and get started building extensions via the\xa0",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"}),"\xa0and\xa0",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Updates this week:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Removed addSeparator function from IMenu API\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Fixed issue where resource packs were not being retained during editing and testing - now they are retained!"}),"\n",(0,r.jsx)(n.li,{children:"Added\xa0addEntityPicker\xa0function to\xa0IPropertyPane\xa0API for selecting an entity type"}),"\n",(0,r.jsx)(n.li,{children:"Added interface\xa0IPropertyItemOptionsDataPicker\xa0for both entity and block picker optional properties, removed\xa0IPropertyItemOptionsBlocks"}),"\n",(0,r.jsx)(n.li,{children:"Introducing Void World generation! The Flat World toggle found on the Advanced tab of the Create New Project page has been replaced with a drop down, allowing new Editor projects to be created in a Vanilla, Flat, or Void world. The Void world project experience will be iterated on in the coming months. Upon starting a Void world project, swap Selection to Fixed Distance to place blocks to kickstart your build."}),"\n",(0,r.jsx)(n.li,{children:"Added\xa0toolGroupId\xa0optional property to\xa0IRegisterExtensionOptionalParameters\xa0API for organizing tools in custom groups!"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"entity-event-responses",children:"Entity Event Responses"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Added the "emit_vibration" entity event response, which allows the entity to emit a vibration having the entity itself as its source'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'The "vibration" field allows to specify the vibration to be emitted'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'The allowed values are "shear", "entity_act", and "entity_interact"'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"molang",children:"Molang"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added content errors that state\xa0",(0,r.jsx)(n.em,{children:"query.remaining_durability"}),"\xa0and\xa0",(0,r.jsx)(n.em,{children:"query.max_durability"}),"\xa0are only to be used with Item contexts."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Feature toggle\xa0",(0,r.jsx)(n.em,{children:"Enable New Geometry Tessellation Pipeline"}),"\xa0defaults to true"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['The block component "minecraft',":random",'_ticking" is\xa0now supported again']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed issue where shadows for alpha tested geometry (doors, leaves, etc.) were no longer rendering in the Deferred Technical Preview\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Banner shields now render when equipped in both left and right hands in the Deferred Technical Preview"}),"\n",(0,r.jsx)(n.li,{children:"Fixed an issue where light emitting items glowed in the player's hand in dark rooms during the day in the Deferred Technical Preview"}),"\n",(0,r.jsx)(n.li,{children:"Improved upscaling stability on Android in the Deferred Technical Preview"}),"\n",(0,r.jsx)(n.li,{children:"On Android, pixelated artifacts are no longer visible on the right half of the screen when upscaling is turned on in the Deferred Technical Preview"}),"\n",(0,r.jsx)(n.li,{children:"Fixed unstable and incorrect light clustering results in the Deferred Technical Preview"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scripting",children:"Scripting"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added\xa0",(0,r.jsx)(n.em,{children:"ScriptBiomeTypes"}),"\xa0and\xa0",(0,r.jsx)(n.em,{children:"ScriptBiomeType"}),"\xa0to allow Scripting API to enumerate the BiomeRegistry."]}),"\n",(0,r.jsxs)(n.li,{children:["Added a\xa0",(0,r.jsx)(n.em,{children:"findClosestBiome"}),"\xa0function to\xa0",(0,r.jsx)(n.em,{children:"Dimension"}),"\xa0to find the closest biome of a specified type, to a given position in the world."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},48862:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   system.runJob()",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={em:"em",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"system.runJob()"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"system.clearJob()"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Added runJob and clearJob for optimizing long running tasks using JavaScript generators. system.runJob takes a generator function and returns a jobId. See documentation for usage examples."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"@minecraft/server.BlockPermutation"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Moved getState and withStates APIs from beta to stable"}),"\n"]}),"\n"]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},25062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/24",slug:"/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),i=t(28453),s=t(18228),o=t(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(34164),s=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==r&&(d(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:[a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);