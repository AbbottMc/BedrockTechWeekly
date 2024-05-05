"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[99927,244,21032,11557,90999,58412],{76467:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(74848),r=t(28453),s=t(92581),o=t(5871),a=(t(18859),t(42517),t(59938));const l={},c=void 0,d={id:"changelog_source/preview/1.20/60/23/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.20/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech",permalink:"/docs/changelog_source/preview/1.20/60/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"General",id:"general",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...a.toc,{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Molang",id:"molang",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine-1",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...a.toc,{value:"Molang",id:"molang-1",level:2},{value:"Graphical",id:"graphical",level:2}];function p(e){const n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The "minecraft',":geometry",'.full_block" identifier for the "minecraft',":geometry",'" block component has been added',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The "minecraft',":geometry",'.full_block" identifier provides a centered 1x1x1 cube geometry']}),"\n",(0,i.jsxs)(n.li,{children:["When combined with a\xa0",(0,i.jsx)(n.em,{children:"material_instances"}),'\xa0component with "render_layer": "opaque", it enables rendering-only capabilities previously included in the "minecraft',":unit",'_cube" component including:',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Occludes both vanilla and custom neighboring full blocks"}),"\n",(0,i.jsx)(n.li,{children:"Culls faces that neighbor vanilla and custom neighboring full blocks to improve rendering performance"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add content error logging to help creators identify content that hits or exceeds the state bit/permutation count per block (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-177045",children:"MCPE-177045"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Updated listed values for the Vanilla "orientation" block state in documentation'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(a.default,{techSapi:(0,i.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Added an "interact_filters" field to the "ageable" component, which allows to specify conditions on when the actor can be fed'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,i.jsxs)(n.p,{children:["The Editor and its corresponding API are in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Tag us on social channels with ",(0,i.jsx)(n.strong,{children:"#BedrockEditor."})]}),"\n",(0,i.jsxs)(n.p,{children:["Learn ",(0,i.jsx)(n.a,{href:"https://aka.ms/LearnEditor",children:"how to use"})," the Editor, join the ",(0,i.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor/discussions",children:"GitHub Discussion"})," discussion forum to engage with the team, and get started building extensions via the ",(0,i.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-starter-kit",children:"starter kit"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/Mojang/minecraft-editor-extension-samples",children:"samples"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Updates this week:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Default block for BlockType in Selection tool is now 'grass'."}),"\n",(0,i.jsx)(n.li,{children:"Scripted property panes will now be scrollable once they reach a certain height."}),"\n",(0,i.jsx)(n.li,{children:"Editor Playtest pane now supports setting time of day and weather when testing levels, as well as minor tweaks to the layout. Time in the Playtest pane supports either Minecraft time (0-23999) or 24hr time (00:00-23:59).\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Added new bindings and support for scripts to be able to push a TypeScript object as a payload on to the transaction stack, and register a set of handler functions which will receive the payload when the transaction system receives an undo or redo event"}),"\n",(0,i.jsx)(n.li,{children:"A Navigation record system has been added to Editor. View the GitHub release notes for more details on features and functionality.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Added an export for stringFromExtension so that it can be used in both internal and external Creator extensions"}),"\n",(0,i.jsx)(n.li,{children:"A new line tool is added to the Editor. View the GitHub release notes for more details on features and functionality.\xa0"}),"\n",(0,i.jsx)(n.li,{children:"Editor UI now scales according to the screen resolution rather than the game window size."}),"\n",(0,i.jsx)(n.li,{children:"Property options in the play/test pane retain their values when the game reloads.\xa0"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This week we are officially closing the v0.4.X semantic iterations and considering our work towards v0.5 done. View release notes in GitHub for additional details and an aggregate summary of all v0.4.X iteration updates."}),"\n",(0,i.jsx)(n.h2,{id:"molang",children:"Molang"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released Molang queries from experimental","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.is_cooldown_type"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.cooldown_time"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.cooldown_time_remaining"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.relative_block_has_any_tag"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.relative_block_has_all_tags"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.block_neighbor_has_any_tag"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.block_neighbor_has_all_tags"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.block_has_any_tag"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.block_has_all_tags"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.bone_orientation_trs"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"query.bone_orientation_matrix"}),"\xa0"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine-1",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The "minecraft',":unit",'_cube" block component has been deprecated. Using it in content marked 1.20.60 and beyond will provide a content error',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Using content marked prior to 1.20.60 will have their "minecraft',":unit",'_cube" block component upgraded to a "minecraft',":geometry",'" block component with a "minecraft',":geometry",'.full_block" identifier, but will maintain backwards compatibility with all behaviors']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api-1",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(a.default,{techSapi:(0,i.jsx)(o.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"molang-1",children:"Molang"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Changed cooldown query slot IDs to be required for container slots with more than one index, logging content errors if not provided","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.cooldown_time(slotName,slotId)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.cooldown_time_remaining(slotName,slotId)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.em,{children:"query.is_cooldown_type(cooldownName,slotName,slotId)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The player's body will now cast a shadow in first person mode in the Deferred Technical Preview. Note that some held items will still not cast shadows"}),"\n",(0,i.jsx)(n.li,{children:"The loading screen will no longer turn black on Android when entering a PBR-capable world with the Deferred Technical Preview enabled"}),"\n",(0,i.jsx)(n.li,{children:"Hoppers in Minecarts no longer exhibit ghosting artifacts during camera motion when the Deferred Technical Preview is enabled"}),"\n",(0,i.jsx)(n.li,{children:"The game no longer crashes when exiting a world with the Deferred Technical Preview enabled"}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},5871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Updated function\xa0addEffect\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function.",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={em:"em",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Updated function\xa0",(0,i.jsx)(n.em,{children:"addEffect"}),"\xa0to return the added effect (or undefined if it failed). This change is in beta and does not affect the currently released versions of this function."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added item dynamic properties"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearDynamicProperties(): void"}),"\xa0- Removes all dynamic properties from the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"}),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyIds(): string[]"}),"\xa0- Returns an array of all dynamic property identifiers on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyTotalByteCount(): number"}),"\xa0- Returns the total byte count of all dynamic properties on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"}),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"clearDynamicProperties(): void"}),"\xa0- Removes all dynamic properties from the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined"}),"\xa0- Returns the value of the dynamic property with the given identifier if it exists, otherwise returns undefined"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyIds(): string[]"}),"\xa0- Returns an array of all dynamic property identifiers on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"getDynamicPropertyTotalByteCount(): number"}),"\xa0- Returns the total byte count of all dynamic properties on the item stack"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added function\xa0",(0,i.jsx)(n.em,{children:"setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void"}),"\xa0- Sets the value of the dynamic property with the given identifier. If the value is undefined, the dynamic property will be removed"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added class\xa0",(0,i.jsx)(n.em,{children:"EntityProjectileComponent"}),". This component is used to shoot a projectile entity and modify its properties"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added interface ",(0,i.jsx)(n.em,{children:"ProjectileShootOptions"}),". This interface is used with function\xa0",(0,i.jsx)(n.em,{children:"EntityProjectileComponent.shoot"}),"\xa0to optionally modify the accuracy of the projectile when shot"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},42517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},92581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/23/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added Biome Registry biome names and StructureFeatureType enum to vanilla metadata generation",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={em:"em",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added Biome Registry biome names and ",(0,i.jsx)(n.em,{children:"StructureFeatureType"})," enum to vanilla metadata generation"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},18859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(74848),r=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.20/60/23",slug:"/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/60/23/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(74848),r=t(28453),s=t(18228),o=t(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),r=t(34164),s=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,h]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==i&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,b.jsx)("div",{className:"w-full",children:l}):void 0]})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(_,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);