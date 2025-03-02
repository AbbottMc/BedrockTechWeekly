"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[96115,31606,21032,30517,76334,55300],{32087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(74848),s=n(28453),i=n(77353),o=n(36843),a=(n(4599),n(35849),n(59938));const l={},c=void 0,d={id:"changelog_source/preview/1.21/50/25/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/50/25/tech.mdx",sourceDirName:"changelog_source/preview/1.21/50/25",slug:"/changelog_source/preview/1.21/50/25/tech",permalink:"/docs/changelog_source/preview/1.21/50/25/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/25/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},h=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Biomes",id:"biomes",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Entity Event Responses",id:"entity-event-responses",level:2},{value:"Network Protocol",id:"network-protocol",level:2},{value:"Camera",id:"camera",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...a.toc,{value:"Creator Options",id:"creator-options",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(i.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"biomes",children:"Biomes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed an issue where chunks created before 1.17.40 could behave as Ocean biomes, with ocean-like fog, sky color, and mob spawning (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-186928",title:"https://bugs.mojang.com/browse/MCPE-186928",children:"MCPE-186928"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Added new Locate tool to help find biomes"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Time of day is fixed to Noon at Editor startup"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Improved viewport focus visibility with an animated outline on focus and added focused state as a step for Toggle Mode (CTRL + TAB)"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Added ",(0,r.jsx)(t.code,{children:"focusToolInputContext"})," function to ",(0,r.jsx)(t.code,{children:"IModalToolContainer"})," which will try to set modal input focus (e.g. viewport for tool rail)"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"entity-components",children:"Entity Components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Removed the 'minecraft",":can","_attack_ghast' component and replaced it with a new component 'minecraft",":cannot","_be_attacked'. When added to an entity it prevents other entities from attacking it unless they fulfill an exception filter, in vanilla it is added to Ghasts, creators can add their entities to the exception filter allowing them to then attack Ghasts."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"entity-event-responses",children:"Entity Event Responses"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'The "execute_event_on_home_block" entity event response is now marked as [Beta] and requires "use_beta_features" to be specified in the root JSON object'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The current implementation doesn't fully align with our internal standards, so it will remain unavailable for Creator content until we can develop a more robust technical solution"}),"\n",(0,r.jsx)(t.li,{children:"This approach allows us to iterate on the feature without risking backward compatibility"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Added the "emit_particle" entity event response, allowing particles to be emitted at the center of the entity\'s bounding box'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'The "particle" field allows to specify the type of particle to emit'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"network-protocol",children:"Network Protocol"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Level event removed: ParticleCreakingTeardown"}),"\n",(0,r.jsx)(t.li,{children:"New particle type added: CreakingCrumble"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(t.h2,{id:"camera",children:"Camera"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Added experimental toggle "Aim Assist" to allow easy targeting while using custom camera perspectives.'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Aim Assist currently targets blocks. Entites will be enabled in a future release."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:'Aim Assist can be enabled through "/aimassist" command.'}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Aim Assist\'s targeting behavior (distance, width, and height) can be configured through the settings under "aim_assist" folder using a behavior pack.'}),"\n",(0,r.jsx)(t.li,{children:'Aim Assist will highlight the selected target. The highlighting textures are customizable through textures under "textures\\ui" folder using a resource pack'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"creator-options",children:"Creator Options"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Added section "Device Info Settings".',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added option to allow override memory tier used in Scripting and Molang."}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},36843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/50/25/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Added shutdown event to beforeEvents within the system class. This is fired after all players have left and the world is about to shutdown/close.",source:"@site/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/50/25",slug:"/changelog_source/preview/1.21/50/25/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Added ",(0,r.jsx)(t.code,{children:"shutdown"})," event to ",(0,r.jsx)(t.code,{children:"beforeEvents"})," within the ",(0,r.jsx)(t.code,{children:"system"})," class. This is fired after all players have left and the world is about to shutdown/close."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Input APIs"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added a suite of input APIs that are readable even if the player's input is disabled with input permissions"}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.code,{children:"getMovementVector(): Vector2"})," to ",(0,r.jsx)(t.code,{children:"InputInfo"})," to read raw movement values"]}),"\n",(0,r.jsxs)(t.li,{children:["Added enum ",(0,r.jsx)(t.code,{children:"InputButton"})," with values ",(0,r.jsx)(t.code,{children:"Jump"})," and ",(0,r.jsx)(t.code,{children:"Sneak"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added enum ",(0,r.jsx)(t.code,{children:"ButtonState"})," with values ",(0,r.jsx)(t.code,{children:"Pressed"})," and ",(0,r.jsx)(t.code,{children:"Released"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.code,{children:"getButtonState(button: InputButton): ButtonState"})," to ",(0,r.jsx)(t.code,{children:"InputInfo"})," to read raw player button inputs"]}),"\n",(0,r.jsxs)(t.li,{children:["Added ",(0,r.jsx)(t.code,{children:"world.afterEvents.playerButtonInput"})," event to listen to button change events"]}),"\n"]}),"\n"]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},35849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/50/25/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/50/25",slug:"/changelog_source/preview/1.21/50/25/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/25/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},77353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/50/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added additional optional arguments of name and parentThemeId to addNewTheme(). When a valid parentThemeId has been passed through the function, the newly created theme would inherit all the theme color properties from the parent",source:"@site/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/50/25",slug:"/changelog_source/preview/1.21/50/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added additional optional arguments of name and parentThemeId to addNewTheme(). When a valid parentThemeId has been passed through the function, the newly created theme would inherit all the theme color properties from the parent"}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={},o=void 0,a={id:"changelog_source/preview/1.21/50/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/50/25",slug:"/changelog_source/preview/1.21/50/25/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),i=n(18228),o=n(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(i.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(96540),s=n(34164),i=n(23104),o=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=m({queryString:n,groupId:s}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),v=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=n(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=a[n].value;s!==r&&(d(t),o(s))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:[a.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,s.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function _(e){const t=(0,g.A)();return(0,x.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);