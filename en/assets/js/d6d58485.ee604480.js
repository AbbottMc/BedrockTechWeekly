"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[74237,43115],{34737:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(74848),o=t(28453);t(74450);const s={},a=void 0,i={id:"changelog_source/preview/1.17/20/23/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/23",slug:"/changelog_source/preview/1.17/20/23/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Molang</strong>\xa0",id:"molang",level:2},{value:"<strong>User\xa0Interface</strong>\xa0",id:"userinterface",level:2}];function u(e){const n={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h2,{id:"gametestframework-experimental",children:[(0,r.jsx)(n.strong,{children:"GameTest\xa0Framework (Experimental)"}),"\xa0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Renamed module "Minecraft" to "mojang-minecraft"\xa0'}),"\n",(0,r.jsxs)(n.li,{children:['Renamed module "GameTest" to "mojang-gametest"\xa0',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Renamed function\xa0assertBlockTypePresent\xa0to\xa0assertBlockPresent\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Renamed function\xa0assertEntityData\xa0to\xa0assertEntityState\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Removed function\xa0assertBlockTypeNotPresent\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Removed function\xa0assertEntityNotPresent\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Removed function\xa0assertEntityNotPresentInArea\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Removed function\xa0assertEntityNotTouching\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Removed function\xa0succeedWhenEntityNotPresent\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0assertBlockState(blockLocation:\xa0BlockLocation,\xa0callback: (Block) =>\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0assertBlockPresent(blockType:\xa0BlockType,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0assertEntityPresent(entityTypeIdentifier: string,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0assertEntityPresentInArea(entityTypeIdentifier: string,\xa0isPresent:\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0assertEntityTouching(entityTypeIdentifier: string, location: Location,\xa0isTouching:\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Modified signature of function\xa0succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location,\xa0isPresent:\xa0boolean)\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Added\xa0GameTestExtension\xa0function\xa0assertBlockProperty(propertyName: string, value: number | string |\xa0boolean,\xa0blockLocation:\xa0BlockLocation)\xa0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"commands",children:[(0,r.jsx)(n.strong,{children:"Commands"}),"\xa0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command position argument is now optional (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-128379",children:"MCPE-128379"}),")\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command will now output on success (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-80348",children:"MCPE-80348"}),")\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:["The\xa0'/particle'\xa0command no longer shows an error when run\xa0successfully\xa0through\xa0'/execute'\xa0(",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-129001",children:"MCPE-129001"}),")\xa0"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"gameplay",children:[(0,r.jsx)(n.strong,{children:"Gameplay"}),"\xa0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Data-driven blocks can now be added to the\xa0Creative menu\xa0\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"molang",children:[(0,r.jsx)(n.strong,{children:"Molang"}),"\xa0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"'min_engine_version'\xa0from\xa0Resource\xa0Pack\xa0and\xa0Behavior\xa0Pack manifests is now passed into\xa0Molang\xa0expression parsing. This allows for future breaking changes tied to a specific engine version\xa0\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"userinterface",children:[(0,r.jsx)(n.strong,{children:"User\xa0Interface"}),"\xa0"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"UI bind objects can now utilize the ignore field"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=t(74848),o=t(28453),s=t(18228),a=t(19365);const i={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(a.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(34164);const o={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),o=t(34164),s=t(23104),a=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:o}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),b=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=i[t].value;o!==r&&(u(n),a(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:[i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;if(n){const e=t.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function y(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,p.A)();return(0,v.jsx)(y,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);