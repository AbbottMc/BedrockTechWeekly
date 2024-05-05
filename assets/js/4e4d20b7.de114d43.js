"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[69385,21032],{23613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);n(59938);const a={},l=void 0,o={id:"changelog_source/preview/1.19/30/20/tech",title:"tech",description:"Actor Properties",source:"@site/docs/changelog_source/preview/1.19/30/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/30/20",slug:"/changelog_source/preview/1.19/30/20/tech",permalink:"/docs/changelog_source/preview/1.19/30/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/20/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}];function u(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"actor-properties",children:(0,r.jsx)(t.strong,{children:"Actor Properties"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Numerical actor properties (float and integer) will now always clamp their values into the range of values specified"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"add-ons-and-script-engine",children:(0,r.jsx)(t.strong,{children:"Add-Ons and Script Engine"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.em,{children:["minecraft",":instant","_despawn"]})," no longer affects players"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Command selector now gets the same position for the player that the command origin player position gets"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"marketplace",children:(0,r.jsx)(t.strong,{children:"Marketplace"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Fixed a bug where the text-to-speech feature would read the entire "My Content" page, both highlighted and non-highlighted items'}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"experimental-features",children:(0,r.jsx)(t.strong,{children:"Experimental Features"})}),"\n",(0,r.jsx)(t.h2,{id:"commands-1",children:(0,r.jsx)(t.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['The "/execute if block" command now displays integer values for block positions (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-156285",children:"MCPE-156285"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"gametest-framework",children:(0,r.jsx)(t.strong,{children:"GameTest Framework"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Vector","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed a bug where ",(0,r.jsx)(t.em,{children:"function"})," length would return undefined"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function\xa0",(0,r.jsx)(t.em,{children:"lengthSquared"}),"- Returns the squared length of the vector"]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.em,{children:"stackOverflow"})," as a possible\xa0",(0,r.jsx)(t.em,{children:"WatchdogTerminateReason"}),"\xa0for the\xa0",(0,r.jsx)(t.em,{children:"beforeWatchdogTerminate"}),"\xa0event"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["IRawMessage - Interface object representing a message","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"rawtext : (string | IRawMessage)[] - (optional) A list of text objects used to build a message"}),"\n",(0,r.jsxs)(t.li,{children:["text : string - (optional) A string containing plain text to display directly. Only valid when used as a sub member in a parent ",(0,r.jsx)(t.em,{children:"rawtext"})," or ",(0,r.jsx)(t.em,{children:"with"})," member"]}),"\n",(0,r.jsx)(t.li,{children:"translate : string - (optional) String representing a translation identifier to translate text in the player's selected language"}),"\n",(0,r.jsxs)(t.li,{children:["with : (string | IRawMessage)[] - (optional) A list of text object arguments used to fill values in the ",(0,r.jsx)(t.em,{children:"translate"})," text. Ignored when ",(0,r.jsx)(t.em,{children:"translate"})," is not present"]}),"\n",(0,r.jsx)(t.li,{children:"say(string | IRawMessage) - Used to broadcast a message to all players"}),"\n",(0,r.jsx)(t.li,{children:"tell(string | IRawMessage) - Send a message to a player"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where Dynamic Properties would not persist when using worlds hosted on Bedrock Dedicated Server or Realms"}),"\n",(0,r.jsx)(t.li,{children:"Pack dependencies on native modules can be declared using the module name without the need to specify a UUID, using the \u201cmodule_name\u201d attribute. The module name matches the import statement (e.g., \u201cmojang-minecraft\u201d)"}),"\n",(0,r.jsx)(t.li,{children:'Removed mojang-gametest module version 0.1.0; packs using "mojang-gametest" specific APIs must be updated to use GameTest version 1.0.0-beta'}),"\n",(0,r.jsx)(t.li,{children:'The "mojang-gametest" module 1.0.0-beta requires "mojang-minecraft" module 1.0.0-beta'}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"general",children:(0,r.jsx)(t.strong,{children:"General"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Removed usage of ",(0,r.jsx)(t.em,{children:"minecraft:unwalkable"})," block component and added block creative group and category to the block description"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453),a=n(18228),l=n(19365);const o={},i=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(a.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(96540),s=n(34164),a=n(23104),l=n(56347),o=n(205),i=n(57485),c=n(31682),u=n(89466);function d(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=g({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o,rightElement:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=o[n].value;s!==r&&(u(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),i?(0,b.jsx)("div",{className:"w-full",children:i}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function k(e){const t=(0,f.A)();return(0,b.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);