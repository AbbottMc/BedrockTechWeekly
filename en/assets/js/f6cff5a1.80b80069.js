"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60337,43115,19029,76764,41744,79759],{9796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(74848),i=n(28453),s=n(80032),o=n(57296),a=(n(46360),n(61288),n(74450));const l={},c=void 0,d={id:"changelog_source/preview/1.20/80/20/tech",title:"tech",description:"Script API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},h=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Blocks",id:"blocks",level:2},{value:"Cameras",id:"cameras",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"Molang",id:"molang",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"Blocks",id:"blocks-1",level:2},{value:"Commands",id:"commands",level:2},{value:"Graphical",id:"graphical",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...a.toc];function p(e){const t={em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"\u201csapling\u201d block is now split into unique instances: \u201coak_sapling\u201d, \u201cspruce_sapling\u201d, \u201cbirch_sapling\u201d, \u201cjungle_sapling\u201d, \u201cacacia_sapling\u201d and \u201cdark_oak_sapling\u201d."}),"\n",(0,r.jsx)(t.li,{children:"\u201ccoral_fan\u201d block is now split into unique instances: \u201ctube_coral_fan\u201d, \u201cbrain_coral_fan\u201d, \u201cbubble_coral_fan\u201d, \u201cfire_coral_fan\u201d and \u201chorn_coral_fan\u201d"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"cameras",children:"Cameras"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added the \u201cextend_player_rendering\u201d camera component which allows for players (and any entities they are connected to through riding and leashes) to be rendered even if they are beyond the max entity render distance"}),"\n",(0,r.jsxs)(t.li,{children:["Added \u201cextend_player_rendering\u201d component to the \u201cminecraft",":free","\u201d camera","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This component is intended to be an enhancement and improvement to current functionality and as such will be \u201cset to true\u201d by default"}),"\n",(0,r.jsx)(t.li,{children:"Setting this component to false will remove the added rendering capability. Documentation will be undated prior to release"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"The server now sends chunks and actors around the camera to the client if that information already exists on the server even when the camera is placed far away from the player"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The \u201cinteract\u201d component\u2019s fields \u201cequip_item_slot\u201d and \u201cdrop_item_slot\u201d now support both armor and inventory slots:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Armor slots are specified as \u2018slot.armor.head\u2019, \u2018slot.armor.chest\u2019, \u2018slot.armor.legs\u2019, and \u2018slot.armor.feet\u2019"}),"\n",(0,r.jsx)(t.li,{children:"Inventory slots are specified as positive numbers, now expressed as strings"}),"\n",(0,r.jsx)(t.li,{children:"This change requires a world version of 1.20.80 or higher"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Added \u201crepair_entity_item\u201d field to the \u201cinteract\u201d component, which allows to repair an item in one of the entity\u2019s inventory or armor slots"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added support for addImage to property pane"}),"\n",(0,r.jsx)(t.li,{children:"Added icon property to IPropertyItemOptionsButton API to display icons in buttons"}),"\n",(0,r.jsx)(t.li,{children:"Added the concept of WidgetManager and CustomWidget - allowing the server to instantiate in-world widgets which should facilitate manipulation of world tools. We currently only support CustomWidgets (which are server driven Custom Entities)"}),"\n",(0,r.jsx)(t.li,{children:"Adjusted default editor UI scale to optimize screen space"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"entity-filters",children:"Entity Filters"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added new entity filter \u201cis_sitting\u201d, which checks if the entity is sitting"}),"\n",(0,r.jsx)(t.li,{children:"Added new entity filter \u201chas_damaged_equipment\u201d, which checks if the entity has a certain damaged piece of equipment in the specified slot"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"molang",children:"Molang"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added new query \u201cquery.armor_slot_damage\u201d, which returns the damage value of the armor item in the specified slot"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"stability-and-performance",children:"Stability and Performance"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Removed\xa0",(0,r.jsx)(t.em,{children:"FilterTextPacket"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(t.h2,{id:"blocks-1",children:"Blocks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added \u2018minecraft",":custom","_components\u2019 block component under the Beta APIs feature flag"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Fixed /hud command so that changes only effect the targeted player(s)"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Partially fixed full block shapes (e.g. Redstone Lamps, Froglights, Glowstone, etc.) that are marked as point lights in resource packs in the Deferred Technical Preview. They can still be turned into point lights, but will not have occlusion/shadows"}),"\n",(0,r.jsx)(t.li,{children:"Added a dedicated quality slider for Point Light Shadows in the Deferred Video Settings menu"}),"\n",(0,r.jsx)(t.li,{children:"Added a new feature to the lighting model in the Deferred Technical Preview: Sub Surface Scattering. This effect approximates rays of light passing through translucent surfaces. For now, this feature is limited to only affect Leaves"}),"\n",(0,r.jsx)(t.li,{children:"Increased the contrast and saturation of the world in the Deferred Technical Preview"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(a.default,{techSapi:(0,r.jsx)(o.default,{}),techSapiDiff:void 0})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},57296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/80/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Block Custom Components \u2013 see\xa0https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={a:"a",em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Block Custom Components \u2013 see\xa0",(0,r.jsx)(t.a,{href:"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents",children:"https://learn.microsoft.com/minecraft/creator/Documents/CustomComponents"}),"\xa0\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"BlockComponentStepOnEvent"}),"\xa0for\xa0",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"BlockRegistry"}),"\xa0for\xa0",(0,r.jsx)(t.em,{children:"beta"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"WorldInitializeBeforeEvent"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"BlockCustomComponent"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Creator Settings menu has a new option to automatically connect the debugger on world load (or /reload). This will make it easier to set (and catch) breakpoints at load and avoids the hassle of typing out the debugger slash command"}),"\n",(0,r.jsxs)(t.li,{children:["Added class\xa0",(0,r.jsx)(t.em,{children:"ListBlockVolume"}),"\xa0which extends\xa0",(0,r.jsx)(t.em,{children:"BaseBlockVolume"}),"\xa0- A volume that stores multiple block locations"]}),"\n",(0,r.jsxs)(t.li,{children:["Structure\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Renamed class\xa0",(0,r.jsx)(t.em,{children:"StructureTemplate"}),"\xa0to\xa0",(0,r.jsx)(t.em,{children:"Structure"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added read-only property\xa0",(0,r.jsx)(t.em,{children:"size: Vector3"}),"\xa0- Returns the size of the structure in blocks"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function\xa0",(0,r.jsx)(t.em,{children:"getBlockPermutation(location: Vector3): BlockPermutation | undefined;"}),"\xa0- Returns the block permutation at the given location within the structure"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function\xa0",(0,r.jsx)(t.em,{children:"isValid(): boolean"}),"\xa0- Returns false if the structure has been deleted"]}),"\n",(0,r.jsxs)(t.li,{children:["Added function\xa0",(0,r.jsx)(t.em,{children:"getIsWaterlogged(location: Vector3): boolean;"}),"\xa0- Returns whether the block at the given location is waterlogged"]}),"\n"]}),"\n"]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},61288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},80032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/80/20/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Removed\xa0EntityHealableComponent.filters\xa0as they currently have no backing implementation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Removed\xa0",(0,r.jsx)(t.em,{children:"EntityHealableComponent.filters"}),"\xa0as they currently have no backing implementation"]}),"\n",(0,r.jsxs)(t.li,{children:["Fixing some component\xa0",(0,r.jsx)(t.em,{children:"isValid"}),"\xa0methods where they didn\u2019t properly return false in cases where the component had been removed from the Entity."]}),"\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"PaletteColor"}),"\xa0enum to\xa0",(0,r.jsx)(t.em,{children:"beta"}),"\xa0for use with\xa0",(0,r.jsx)(t.em,{children:"ItemColorComponent/ItemColor2Component"})]}),"\n",(0,r.jsxs)(t.li,{children:["Added\xa0",(0,r.jsx)(t.em,{children:"ItemColor2Component"}),"\xa0to\xa0",(0,r.jsx)(t.em,{children:"beta"}),"\xa0for reading\xa0",(0,r.jsx)(t.em,{children:"minecraft:color2"})]}),"\n",(0,r.jsx)(t.li,{children:"Setting a dynamic property with a key larger than 32kb now will result in an exception"}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},46360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),i=n(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/80/20",slug:"/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",permalink:"/en/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/80/20/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(74848),i=n(28453),s=n(18228),o=n(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),s=n(23104),o=n(56347),a=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=a[n].value;i!==r&&(d(t),o(i))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:[a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function _(e){let{lazy:t,children:n,selectedValue:i}=e;if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...e,...t}),(0,v.jsx)(_,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);