"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[32241,21032,4797,9474,67864,39302],{90354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var r=n(74848),i=n(28453),s=n(63844),c=n(67757),o=(n(97005),n(771),n(59938));const a={},l=void 0,d={id:"changelog_source/preview/1.21/60/24/tech",title:"tech",description:"Blocks",source:"@site/docs/changelog_source/preview/1.21/60/24/tech.mdx",sourceDirName:"changelog_source/preview/1.21/60/24",slug:"/changelog_source/preview/1.21/60/24/tech",permalink:"/docs/changelog_source/preview/1.21/60/24/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/24/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"Blocks",id:"blocks",level:2},{value:"Components",id:"components",level:3},{value:"Collisions",id:"collisions",level:2},{value:"Components",id:"components-1",level:2},{value:"Editor",id:"editor",level:2},{value:"Fog",id:"fog",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Graphics",id:"graphics",level:2},{value:"Items",id:"items",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...o.toc,{value:"Camera",id:"camera",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed issue where legacy data driven block didn't apply the render layer from the material instances component"}),"\n",(0,r.jsx)(t.li,{children:"Fix spurious content log error: 'trying to override the Geometry component with blocks.json settings for a custom block'"}),"\n",(0,r.jsxs)(t.li,{children:["Door blocks use state\xa0",(0,r.jsx)(t.code,{children:"minecraft:cardinal_direction"}),"\xa0instead of\xa0",(0,r.jsx)(t.code,{children:"minecraft:direction"}),'. Uses string values ("north, south, east, west")']}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Moved the\xa0",(0,r.jsx)(t.code,{children:"minecraft:liquid_detection"})," component out of the Upcoming Creator Features experiment for format_versions 1.21.60 and above"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"collisions",children:"Collisions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Entities with no collision box but with the\xa0",(0,r.jsx)(t.code,{children:"minecraft:custom_hit_test"})," component are no longer sometimes unable to be interacted with"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"components-1",children:"Components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Expand the\xa0",(0,r.jsx)(t.code,{children:"minecraft:breedable"})," component to allow inheriting properties to child entities","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'Adds the new "property_inheritance" field which takes property name keyed objects'}),"\n",(0,r.jsx)(t.li,{children:'The objects in property_inheritance can contain a "mutation_chance" which give the chance it should not inherit from either parent'}),"\n",(0,r.jsx)(t.li,{children:'They can also contain the "mutation_values" array of values to select from if mutating and the component has random mutation set'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Centers block thumbnail images in hotbar, block picker and lists"}),"\n",(0,r.jsxs)(t.li,{children:["Adds data-driven rendering to editor block images","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Adds block name aliasing for signs"}),"\n",(0,r.jsxs)(t.li,{children:["Adds support for namespace block names for\xa0",(0,r.jsx)(t.code,{children:"block://"}),"\xa0protocol"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Player model is now fully hidden while in tool mode"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"fog",children:"Fog"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Fixed issue where "inherit_from_prior_fog" field in biomes_client.json was ignored on first content on resource pack stack (',(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-187805",children:"MCPE-187805"}),")"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed a bug where opening a chest while the clone command is spamming could crash the server"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Single-channel textures in resource packs are now interpreted as grayscale, rather than red. This change does not apply to single-channel UI textures, which were already interpreted as such"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"graphics",children:"Graphics"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['client_biome JSON files now support a "surface_opacity" field in the "minecraft',":water",'_appearance" component',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This change also restores swampland and warm_ocean surface opacity to what they were until recently when the client_biome JSON files were introduced"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"items",children:"Items"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed an issue where non-host clients joining multiplayer sessions would be missing an icon for packs that had duplicate items"}),"\n",(0,r.jsxs)(t.li,{children:["The following legacy item (pre 1.16.100) components are now synced to the client:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:camera"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:seed"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:max_damage"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:hand_equipped"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:stacked_by_data"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:foil"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:block"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:use_duration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"minecraft:max_stack_size"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(c.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"camera",children:"Camera"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Aim assist will no longer get automatically enabled when switched to vanilla third-person-behind camera by default (",(0,r.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-188005",children:"MCPE-188005"}),")"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},67757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},c=void 0,o={id:"changelog_source/preview/1.21/60/24/tech_sapi_exp",title:"tech_sapi_exp",description:"-   system.scriptEvent\xa0updated to return a new error for exceeding the message size",source:"@site/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/60/24",slug:"/changelog_source/preview/1.21/60/24/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"system.scriptEvent"}),"\xa0updated to return a new error for exceeding the message size"]}),"\n",(0,r.jsxs)(t.li,{children:["Structure\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.code,{children:"waterlogged: boolean"}),"\xa0parameter to\xa0",(0,r.jsx)(t.code,{children:"setBlockPermutation"}),". This can be used to set whether the specified block within a structure is waterlogged."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Removed\xa0",(0,r.jsx)(t.code,{children:"ScriptBlockType.canBeWaterlogged"}),"\xa0from Beta - instead,\xa0",(0,r.jsx)(t.code,{children:"ScriptBlock.canContainLiquid"}),"\xa0or\xa0",(0,r.jsx)(t.code,{children:"ScriptBlockPermutation.canContainLiquid"})," can be used to check if a block can be waterlogged."]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},c=void 0,o={id:"changelog_source/preview/1.21/60/24/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/60/24",slug:"/changelog_source/preview/1.21/60/24/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/24/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},63844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},c=void 0,o={id:"changelog_source/preview/1.21/60/24/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Fixed\xa0Entity.getComponent\xa0and\xa0Entity.getComponents\xa0from crashing when called within\xa0EntityDieAfterEvent callback.",source:"@site/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/60/24",slug:"/changelog_source/preview/1.21/60/24/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed\xa0",(0,r.jsx)(t.code,{children:"Entity.getComponent"}),"\xa0and\xa0",(0,r.jsx)(t.code,{children:"Entity.getComponents"}),"\xa0from crashing when called within\xa0",(0,r.jsx)(t.code,{children:"EntityDieAfterEvent"})," callback."]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453);const s={},c=void 0,o={id:"changelog_source/preview/1.21/60/24/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/60/24",slug:"/changelog_source/preview/1.21/60/24/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/24/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},a={},l=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var r=n(74848),i=n(28453),s=n(18228),c=n(19365);const o={},a=void 0,l={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(c.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(c.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function c(e){let{children:t,hidden:n,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,c),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),s=n(23104),c=n(56347),o=n(205),a=n(57485),l=n(31682),d=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,c.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[c,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,h]=m({queryString:n,groupId:i}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=l??g;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&a(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:c,tabValues:o,rightElement:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(d(t),c(i))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:[o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),a?(0,v.jsx)("div",{className:"w-full",children:a}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function _(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(_,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);