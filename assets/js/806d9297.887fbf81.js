"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[80340,81935,21032,68137],{56366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),i=t(28453),s=t(31210),o=(t(5242),t(59938));const a={},l=void 0,c={id:"changelog_source/preview/1.21/60/21/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/60/21/tech.mdx",sourceDirName:"changelog_source/preview/1.21/60/21",slug:"/changelog_source/preview/1.21/60/21/tech",permalink:"/docs/changelog_source/preview/1.21/60/21/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/21/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"Blocks",id:"blocks",level:2},{value:"Components",id:"components",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Entity Filters",id:"entity-filters",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Items",id:"items",level:2},{value:"Sounds",id:"sounds",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Commands",id:"commands",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"Components",id:"components-1",level:3},{value:"Graphical",id:"graphical-1",level:2},{value:"User Interface",id:"user-interface",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"script-api",children:(0,r.jsx)(n.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Removed "Upcoming Creator Feature" toggle requirement for ',(0,r.jsx)(n.code,{children:"minecraft:item_visual"})," component."]}),"\n",(0,r.jsxs)(n.li,{children:["Updated ",(0,r.jsx)(n.code,{children:'"minecraft:material_instances"'})," component","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Removed ",(0,r.jsx)(n.strong,{children:"UpcomingCreatorFeatures"})," experiment requirement for ",(0,r.jsx)(n.code,{children:'"abmient_occlusion"'})," field to be float type\xa0"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Re-added new field ",(0,r.jsx)(n.code,{children:'"ambient_occlusion_exponent"'})," to ",(0,r.jsx)(n.strong,{children:"blocks.json"})," file schema in resource packs, replaces broken ",(0,r.jsx)(n.code,{children:'"brightness_gamma"'})," field. (",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-188216",children:"MCPE-188216"})," , ",(0,r.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-188221",children:"MCPE-188221"}),")\xa0"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The Strider now makes use of the minecraft",":movement","_sound_distance_offset component for its movement sound distance offset"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added Roughen brush to terrain tool"}),"\n",(0,r.jsx)(n.li,{children:"Added color picker hue gradient selector works for monochromatic values\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated Editor Compass body to toggle between NSEW directions and Axis directions (Z, -Z, X, -X) on click"}),"\n",(0,r.jsx)(n.li,{children:"Updated block picker to a floating window and made the viewport behind it clearer for middle-click\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated Flatten Brush to a Native Brush, increased maximum Height and Radius"}),"\n",(0,r.jsx)(n.li,{children:"Updated export and play test pane to now include beds work and required sleeping players as export options\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Updated hot bar item to open block picker when shortcut key is pressed and block is already selected"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a number of missing block icon thumbnails for block:// image resource"}),"\n",(0,r.jsx)(n.li,{children:"Fixed error sound triggered by pressing the number 9 key"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"entity-components",children:"Entity Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['The "minecraft',":breedable",'" component now has a field that enables the offspring\'s "minecraft',":color",'" attribute to be a blend of the parents\' "minecraft',":color",'"',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['"combine_parent_colors", If a color mutation will not happen, the baby will get a combination of the parents\' colors if the colors are compatible. Color combinations follow the rules of DyeItem combinations. If the colors are not compatible the baby will get one of the parents colors chosen randomly',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Valid values: "true", "false"'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"entity-filters",children:"Entity Filters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Added new entity filter "home_distance", which checks the distance of an entity from its home\xa0',"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Requires the subject entity to have a "minecraft',":home",'" component']}),"\n",(0,r.jsx)(n.li,{children:"Returns false if the subject has no home or if the home is in a different dimension"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Added new entity filter "is_bound_to_creaking_heart", which checks if the Creaking Heart that spawned the subject Creaking still exists\xa0'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Improved logic for handling very large textures within atlases. Textures that are guaranteed to overflow the maximum atlas size will now have mips dropped individually rather than forcing the entire atlas to drop mips."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"items",children:"Items"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:['Added a content warning to the "minecraft',":durability",'_sensor" item component\'s "particle_type" when an invalid value is provided\xa0']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"sounds",children:"Sounds"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Added "base" parameter to block sounds specifying another block sound they should use sounds for if they do not define a sound themselves'}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated Aim Assist, now it can only be used in third person camera perspectives. Switching to a unsupported camera type will disable aim assist"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Added support for input glyph replacement for ",(0,r.jsx)(n.code,{children:"/me"})," and ",(0,r.jsx)(n.code,{children:"/tell"}),' commands. For example, using input string ":_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.']}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Added easing between two moving cameras when "Creator Camera: New Third Person Presets" experiment is enabled\xa0'}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"components-1",children:"Components"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Removing a waterlogged custom block using the ",(0,r.jsx)(n.code,{children:"minecraft:liquid_detection"})," component with ",(0,r.jsx)(n.code,{children:"stopsLiquidFlowingFromDirection"})," enabled for all directions now results in flowing water rather than a stagnant block of water.\xa0"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"graphical-1",children:"Graphical"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fixed a bug that caused a black screen on some PowerVR-based Android devices when using the Deferred Technical Preview. Some PowerVR devices are still known to experience issues.\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug that caused blocks moved by a piston to flicker with the Deferred Technical Preview enabled"}),"\n",(0,r.jsx)(n.li,{children:"Sub Surface Scattering is now affected by point lights in the Deferred Technical Preview.\xa0"}),"\n",(0,r.jsx)(n.li,{children:"Fixed a bug where the seams of certain cubemap faces would be visible in sky reflections in the Deferred Technical Preview"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Added a new radio button to allow players to select if they want Deferred Video Settings to favor performance or favor visuals."}),"\n",(0,r.jsx)(n.li,{children:'Added support for input glyph replacement for signs, signed books, and NPC dialogs. For example, using input string ":_input_key.jump:" will be replaced with "JUMP" when using keyboard, or an emoji in case of using a gamepad.'}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},31210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.21/60/21/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Updated numeric JavaScript enums now properly handle and support reverse value mappings.",source:"@site/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/60/21",slug:"/changelog_source/preview/1.21/60/21/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const n={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Updated numeric JavaScript enums now properly handle and support reverse value mappings.\xa0"}),"\n",(0,r.jsxs)(n.li,{children:["Fixed a bug where calling ",(0,r.jsx)(n.code,{children:"Player.hideAllExcept"})," could crash the server."]}),"\n",(0,r.jsxs)(n.li,{children:["InputPermissions\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Moved the following ",(0,r.jsx)(n.code,{children:"InputPermissionCategory"})," enum values to 1.17.0: ",(0,r.jsx)(n.code,{children:"LateralMovement"}),", ",(0,r.jsx)(n.code,{children:"Sneak"}),", ",(0,r.jsx)(n.code,{children:"Jump"}),", ",(0,r.jsx)(n.code,{children:"Mount"}),", ",(0,r.jsx)(n.code,{children:"Dismount"}),", ",(0,r.jsx)(n.code,{children:"MoveForward"}),", ",(0,r.jsx)(n.code,{children:"MoveBackward"}),", ",(0,r.jsx)(n.code,{children:"MoveLeft"}),", and ",(0,r.jsx)(n.code,{children:"MoveRight"})]}),"\n",(0,r.jsxs)(n.li,{children:["Moved the following methods on ",(0,r.jsx)(n.code,{children:"PlayerInputPermissions"})," to 1.17.0:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:'Removed the "compostingChance" available from the ItemStack API. The composting chance for Vanilla items can now be accessed via the singular CompostableItemComponent->compostingChance in the Item Component API.\xa0'}),"\n",(0,r.jsxs)(n.li,{children:["Fixed edge cases where ",(0,r.jsx)(n.code,{children:"ModalFormData"})," scrolls to the bottom when UI is opened."]}),"\n"]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const s={},o=void 0,a={id:"changelog_source/preview/1.21/60/21/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/60/21",slug:"/changelog_source/preview/1.21/60/21/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/21/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(74848),i=t(28453),s=t(18228),o=t(19365);const a={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(96540),i=t(34164),s=t(23104),o=t(56347),a=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==r&&(d(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:[a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.A)();return(0,x.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);