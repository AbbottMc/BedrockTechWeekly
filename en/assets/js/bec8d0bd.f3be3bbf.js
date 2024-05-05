"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34123,95996,43115,90059],{43062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(23894),o=(t(7662),t(74450));const l={},a=void 0,c={id:"changelog_source/preview/1.20/20/20/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/20/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/20/20",slug:"/changelog_source/preview/1.20/20/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/20/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/20/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Networking</strong>",id:"networking",level:2},{value:"<strong>Sounds</strong>",id:"sounds",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Items</strong>",id:"items-1",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2}];function u(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"add-ons-and-script-engine",children:(0,r.jsx)(n.strong,{children:"Add-Ons and Script Engine"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Render controllers without textures will now result in a content error and be ignored"}),"\n",(0,r.jsxs)(n.li,{children:['Added support for the "',(0,r.jsx)(n.em,{children:"allow_random_seed"}),'" option in world template manifests']}),"\n",(0,r.jsxs)(n.li,{children:['AmethystCluster blocks use state "',(0,r.jsxs)(n.em,{children:["minecraft",":block","_face"]}),'" instead of "',(0,r.jsx)(n.em,{children:"facing_direction"}),'". "',(0,r.jsxs)(n.em,{children:["minecraft",":block","_face"]}),'" uses string values ("down", "up", "north", "south", "east", "west")\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Slab blocks use state "',(0,r.jsxs)(n.em,{children:["minecraft",":vertical","_half"]}),'" instead of "',(0,r.jsx)(n.em,{children:"top_slot_bit"}),'". "',(0,r.jsxs)(n.em,{children:["minecraft",":vertical","_half"]}),'" uses string values ("bottom", "top")\xa0']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:(0,r.jsx)(n.strong,{children:"Editor"})}),"\n",(0,r.jsxs)(n.p,{children:["The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Learn ",(0,r.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:"how to use"})," the Editor and join the ",(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"})," forum, post bugs, view more detailed release notes. Tag us on social channels with ",(0,r.jsx)(n.strong,{children:"#BedrockEditor."})]}),"\n",(0,r.jsxs)(n.p,{children:["This week marks the release of ",(0,r.jsx)(n.strong,{children:"v0.4: The Editor API Update!"})," While still in early development, we\u2019ve released it with the following support:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Editor Extensions ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/minecraft/creator/documents/editorextensionsintroduction",children:"overview article"})," and ",(0,r.jsx)(n.a,{href:"https://aka.ms/EditorAPI",children:"API reference documentation"})," on learn.microsoft.com"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"Starter Kit"}),": Contains the compiler tools and various libraries required to get started making Editor Extensions"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"Samples"})," created by our team to jump-start your own Extension creations"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional fixes this week to the general Editor experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a bug where number slider thumbs in the tool panes were extending beyond the boundaries of the pane."}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where clicking on the selected tool in the tool rail was not re-opening the closed tool pane."}),"\n",(0,r.jsx)(n.li,{children:"Fixed an issue where structure void, light, and barrier blocks were only visible when the player was holding them \u2013 now they\u2019re always visible in the Editor."}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug that caused the player's body to not rotate in third-person view when the simulation is paused."}),"\n",(0,r.jsx)(n.li,{children:"Improved logging and moved operation chat notifications to the log panel."}),"\n",(0,r.jsx)(n.li,{children:"Fixed selection gizmo visibility when there is no active selection. Previously, when there was no selection volume, selection arrow gizmos were being rendered at the world origin (0,0,0)."}),"\n",(0,r.jsx)(n.li,{children:"The selected theme will now be correctly applied to external links in the Help tab of the Quick Start panel."}),"\n",(0,r.jsx)(n.li,{children:"Removed the non-functional hamburger menu button from the Quick Panel tabs."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items",children:(0,r.jsx)(n.strong,{children:"Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Released the "',(0,r.jsxs)(n.em,{children:["minecraft",":hand","_equipped"]}),'" item component out of experimental in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Deprecate "',(0,r.jsxs)(n.em,{children:["minecraft",":creative","_category"]}),'" component in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsx)(n.li,{children:'Creative group and command visibility can now be set in the "description" field in json formats 1.20.20 and higher\xa0'}),"\n",(0,r.jsxs)(n.li,{children:['Renamed the "',(0,r.jsx)(n.em,{children:"minecraft:foil"}),'" item component to "',(0,r.jsx)(n.em,{children:"minecraft:glint"}),'" and released it out of experimental in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:["Changed fire enchant duration used on projectiles from a ",(0,r.jsx)(n.em,{children:"ShooterItemComponent"})," to match vanilla behavior\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:['Released the "',(0,r.jsxs)(n.em,{children:["minecraft",":use","_duration"]}),'" item component out of experimental in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Released the "',(0,r.jsxs)(n.em,{children:["minecraft",":stacked","_by_data"]}),'" item component out of experimental in json formats 1.20.20 and higher\xa0']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"networking",children:(0,r.jsx)(n.strong,{children:"Networking"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Linux dedicated server: Ubuntu 20.04 LTS (Focal Fossa) is now the minimum supported version of Ubuntu. Ubuntu 18.04 LTS is no longer supported\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sounds",children:(0,r.jsx)(n.strong,{children:"Sounds"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sound definitions now accept both float and integer values for ",(0,r.jsx)(n.em,{children:"min_distance"})," and ",(0,r.jsx)(n.em,{children:"max_distance"}),' - please set sound_definitions.json "',(0,r.jsx)(n.em,{children:"format_version"}),'" parameter equal to or greater than 1.20.20 to use this functionality (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-154378",children:"MCPE-154378"}),")"]}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"Experimental Features"}),"\n",(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:(0,r.jsx)(n.strong,{children:"Commands"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Released command ",(0,r.jsx)(n.em,{children:"/scriptevent"})," out of experimental"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items-1",children:(0,r.jsx)(n.strong,{children:"Items"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Fixed issue where items with the "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component would be duplicating when equipping by using the item (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-159736",children:"MCPE-159736"}),")\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:['Items with the "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component in non-weapon slots can no longer be stacked (',(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-159736",children:"MCPE-159736"}),")\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:['Removed the "',(0,r.jsxs)(n.em,{children:["minecraft",":ignores","_permission"]}),'" component\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Removed the "',(0,r.jsxs)(n.em,{children:["minecraft",":mirrored","_art"]}),'" component\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Moved the "',(0,r.jsx)(n.em,{children:"protection"}),'" field from "',(0,r.jsx)(n.em,{children:"minecraft:armor"}),'" component to "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Deprecate "',(0,r.jsx)(n.em,{children:"minecraft:armor"}),'" component in json formats 1.20.20 and higher\xa0']}),"\n",(0,r.jsxs)(n.li,{children:['Removed nonfunctional and redundant slot options from "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component, ie. mainhand, hotbar, inventory, enderchest, and equippable']}),"\n",(0,r.jsxs)(n.li,{children:['Items with the "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component using the "',(0,r.jsx)(n.em,{children:"weapon.offhand"}),'" slot will no longer equip when item is used in hotbar']}),"\n",(0,r.jsx)(n.li,{children:"Equipping custom wearable items trigger generic equip sound"}),"\n",(0,r.jsxs)(n.li,{children:['Custom items with "',(0,r.jsx)(n.em,{children:"minecraft:wearable"}),'" component can now be equipped by clicking and dragging in inventory or shift-clicking']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:(0,r.jsx)(n.strong,{children:"User Interface"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Display a message when the players presses the camera perspective change button but a particular perspective is already set via the camera command"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},23894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.20/20/20/tech_sapi_exp",title:"tech_sapi_exp",description:'-   Converted "set\\block\\property" to "set\\block\\state" for custom blocks',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/20/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/20/20",slug:"/changelog_source/preview/1.20/20/20/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/20/20/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Converted "',(0,r.jsx)(n.em,{children:"set_block_property"}),'" to "',(0,r.jsx)(n.em,{children:"set_block_state"}),'" for custom blocks']}),"\n",(0,r.jsxs)(n.li,{children:["Added\xa0_defineVector_to\xa0",(0,r.jsx)(n.em,{children:"DynamicPropertiesDefinition"}),"\xa0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"EntityEquipmentInventoryComponent"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Implemented slot validation for ",(0,r.jsx)(n.em,{children:"setEquipment"}),", which now returns a boolean indicating whether the item can be equipped to the specified slot"]}),"\n",(0,r.jsxs)(n.li,{children:["_EntityEquipmentInventoryComponent_is currently limited to Players only. However, we hope to reintroduce this component for mobs in a future update\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"getDay"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"getTimeOfDay"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"setTimeOfDay(timeOfDay: number | TimeOfDay)"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"getAbsoluteTime"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"setAbsoluteTime(absoluteTime: number)"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"TimeOfDay"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added length restrictions to\xa0",(0,r.jsx)(n.em,{children:"setLore"}),"- Up to 20 lines with up to 50 characters per line"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved function\xa0_setLore_to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved function\xa0_getLore_to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0_SystemAfterEvents_to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved class\xa0_ScriptEventCommandMessageAfterEvent_to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Moved player ",(0,r.jsx)(n.em,{children:"onScreenDisplay"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"titleDisplayOptions"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved ",(0,r.jsx)(n.em,{children:"screenDisplay"})," to\xa0",(0,r.jsx)(n.em,{children:"1.4.0"})]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.20/20/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/20/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/20/20",slug:"/changelog_source/preview/1.20/20/20/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/20/20/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/20/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},a={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},74450:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=t(74848),i=t(28453),s=t(18228),o=t(19365);const l={},a=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"Update Description",children:e.techSapi}),(0,r.jsx)(o.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>_});var r=t(96540),i=t(34164),s=t(23104),o=t(56347),l=t(205),a=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=u(e),[o,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=p({queryString:t,groupId:i}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),f=(()=>{const e=c??x;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l,rightElement:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),i=l[t].value;i!==r&&(d(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),a?(0,j.jsx)("div",{className:"w-full",children:a}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:i}=e;if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function _(e){const n=(0,g.A)();return(0,j.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);