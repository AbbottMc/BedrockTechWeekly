"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[47445,21032],{69107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(74848),o=n(28453);n(59938);const i={},a=void 0,s={id:"changelog_source/preview/1.19/60/23/tech",title:"tech",description:"Components",source:"@site/docs/changelog_source/preview/1.19/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/tech",permalink:"/docs/changelog_source/preview/1.19/60/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Projectile</strong>",id:"projectile",level:2},{value:"<strong>Component</strong>",id:"component",level:3},{value:"<strong>API (Experimental)</strong>",id:"api-experimental",level:2}];function u(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"components",children:(0,r.jsx)(t.strong,{children:"Components"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Expanded "minecraft',":shooter",'" component to define multiple projectiles that can specify different projectile definitions and condition filters']}),"\n",(0,r.jsx)(t.li,{children:"Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"molang",children:(0,r.jsx)(t.strong,{children:"Molang"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min_engine_version of 1.19.60 or higher"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"projectile",children:(0,r.jsx)(t.strong,{children:"Projectile"})}),"\n",(0,r.jsx)(t.h3,{id:"component",children:(0,r.jsx)(t.strong,{children:"Component"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Projectiles that teleport their owner will no longer do so while their owner is sleeping (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-161189",children:"MCPE-161189"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"api-experimental",children:(0,r.jsx)(t.strong,{children:"API (Experimental)"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added method\xa0setOnFire(seconds: number, useEffects?: boolean = true): boolean)which sets an entity on fire (if it is not in water or rain)."}),"\n",(0,r.jsx)(t.li,{children:"Added method\xa0extinguishFire(useEffects?: boolean = true): void which extinguishes the fire."}),"\n",(0,r.jsxs)(t.li,{children:["If an entity is on fire, you can call\xa0getComponent('minecraft",":onfire","')on it, which returns an object of type\xa0EntityOnFireComponent, which has a property\xa0onFireTicksRemaining."]}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where\xa0viewDirectionwould return the direction from the previous tick"}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where\xa0getEntitiesFromViewDirectionwould use the direction from the previous tick"}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where\xa0getBlockFromViewDirectionwould use the direction from the previous tick"}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where\xa0headLocationwould return the location from the previous tick"}),"\n",(0,r.jsx)(t.li,{children:"Renamed ScriptScriptCommandMessageEvent to ScriptEventCommandMessageEvent"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(74848),o=n(28453),i=n(18228),a=n(19365);const s={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(a.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const o={tabItem:"tabItem_Ymn6"};var i=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),o=n(34164),i=n(23104),a=n(56347),s=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:n,groupId:o}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,i]=(0,u.Dv)(n);return[o,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:s,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=s[n].value;o!==r&&(u(t),a(o))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:[s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function w(e){let{lazy:t,children:n,selectedValue:o}=e;if(t){const e=n.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);