"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[94409,43115],{61135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(74848),o=n(28453);n(74450);const a={},i=void 0,l={id:"changelog_source/preview/1.17/20/21/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}];function u(e){const t={h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.h2,{id:"gametestframework-experimental",children:[(0,r.jsx)(t.strong,{children:"GameTest\xa0Framework (Experimental)"}),"\xa0"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest is facing based on its structure rotation\xa0"}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"commands",children:[(0,r.jsx)(t.strong,{children:"Commands"}),"\xa0"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms \xa0"}),"\n",(0,r.jsx)(t.li,{children:"Commands or structures being placed in a loaded area that is only partially loaded by a ticking area will now be considered loaded if the required chunks are loaded"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),a=n(18228),i=n(19365);const l={},s=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(i.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(i.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),o=n(34164),a=n(23104),i=n(56347),l=n(205),s=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:o}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),b=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l,rightElement:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=l[n].value;o!==r&&(u(t),i(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:[l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,o.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),s?(0,v.jsx)("div",{className:"w-full",children:s}):void 0]})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,g.A)();return(0,v.jsx)(k,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const o={},a=r.createContext(o);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);