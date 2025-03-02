"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[55221,95670,21032,24937,80970,59497],{12746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=n(74848),i=n(28453),s=n(48454),a=n(37106),o=(n(70622),n(20722),n(59938));const l={},c=void 0,d={id:"changelog_source/preview/1.21/60/25/tech",title:"tech",description:"Script API",source:"@site/docs/changelog_source/preview/1.21/60/25/tech.mdx",sourceDirName:"changelog_source/preview/1.21/60/25",slug:"/changelog_source/preview/1.21/60/25/tech",permalink:"/docs/changelog_source/preview/1.21/60/25/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/25/tech.mdx",tags:[],version:"current",frontMatter:{}},h={},u=[{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"Biomes",id:"biomes",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Commands",id:"commands",level:2},{value:"Components",id:"components",level:2},{value:"Dedicated Server",id:"dedicated-server",level:2},{value:"Editor",id:"editor",level:2},{value:"Entities",id:"entities",level:2},{value:"Items",id:"items",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"Aim Assist",id:"aim-assist",level:2},{value:"<strong>Script API</strong>",id:"script-api-1",level:2},...o.toc,{value:"Camera",id:"camera",level:2},{value:"Experimental",id:"experimental",level:2},{value:"Gameplay",id:"gameplay",level:2},{value:"User Interface",id:"user-interface",level:2}];function m(e){const t={br:"br",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"script-api",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"biomes",children:"Biomes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Add creature spawn probability JSON component for spawning related experiments"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"blocks",children:"Blocks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Removed content log error: 'Block needs both a geometry and material instances component'\xa0"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"wsserver"})," command disabled by default. Enable in General Settings."]}),"\n",(0,r.jsx)(t.li,{children:"Websocket encryption default enabled for all platforms."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Added "min_looked_at_duration" field to "minecraft',":looked",'_at" component to specify how long a stare has to be maintained before the target and cooldown logic is set']}),"\n",(0,r.jsxs)(t.li,{children:["The Strider now makes use of the minecraft",":movement","_sound_distance_offset component for its movement sound distance offset"]}),"\n",(0,r.jsxs)(t.li,{children:["Two values on the minecraft",":storage","_item component have been split off into separate components:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["max_weight_limit has been moved to the new minecraft",":storage","_weight_limit component"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["weight_in_storage_item has been moved to the new minecraft",":storage","_weight_modifier component"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"dedicated-server",children:"Dedicated Server"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The movement mode authority chosen settings will now be displayed in the command window on dedicated server launch"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"editor",children:"Editor"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Added a night vision setting to the view settings pane. This enables night vision within the editor for the user and is enabled by default.\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added new Vertical Fly Speed ability."}),"\n",(0,r.jsxs)(t.li,{children:["Added a new ",(0,r.jsx)(t.code,{children:"BlockTable"})," UI element to Property Pane API.\xa0"]}),"\n",(0,r.jsx)(t.li,{children:"Added an optional CursorPosition property to the CursorPropertiesChangeAfterEvent. Using this new property, developers can track when the block or block face under the mouse cursor changes.\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Added right click on action bar items to toggle selector menus"}),"\n",(0,r.jsx)(t.li,{children:"Updated farm generator to use transactions allowing for undo and redo functionality\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Updated the summon tool nudge operation to remain active as long as the key binding is held down.\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Fixed an assert/crash that occurs when changing dimensions\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Fixed an assert/crash when saving world and re-entering a world multiple times"}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug that occasionally made panel scrollbars unresponsive."}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug that caused action bar items to change positions when scrollbar is visible\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Fixed a bug where game menus are shown in the tool mode viewport"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"entities",children:"Entities"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Fixed issue where ",(0,r.jsx)(t.code,{children:"No more entities"})," assert failure occurred when flying through biomes during a storm"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"items",children:"Items"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Removed "Upcoming Creator Feature" toggle requirement for ',(0,r.jsx)(t.code,{children:"minecraft:block_placer"})," item component"]}),"\n",(0,r.jsxs)(t.li,{children:["Migrated ItemData from ",(0,r.jsx)(t.code,{children:"StartGamePacket"})," into ",(0,r.jsx)(t.code,{children:"ItemRegistryPacket"})," (renamed from ",(0,r.jsx)(t.code,{children:"ItemComponentPacket"}),")\xa0"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"stability-and-performance",children:"Stability and Performance"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Removed redundant biome data from chunks and improved World Template generation stability.\xa0"}),"\n",(0,r.jsx)(t.li,{children:"Made changes to add up to 4% CPU performance improvement on Switch"}),"\n"]}),"\n",(0,r.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,r.jsx)(t.h2,{id:"aim-assist",children:"Aim Assist"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Aim assist will now only allow interactions within player's interact distance"}),"\n",(0,r.jsx)(t.li,{children:"Aim Assist can now properly detect entities have hitbox partially inside detection area\xa0"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"script-api-1",children:(0,r.jsx)(t.strong,{children:"Script API"})}),"\n",(0,r.jsx)(o.default,{techSapi:(0,r.jsx)(a.default,{}),techSapiDiff:void 0}),"\n",(0,r.jsx)(t.h2,{id:"camera",children:"Camera"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Block and entity targeting of Aim assist will now apply to touch control modes: 'Joystick & tap to interact' and 'D-Pad & tap to interact'\xa0"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"experimental",children:"Experimental"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Removed the Creator Cameras: Focus Target Camera experimental toggle\xa0"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"gameplay",children:"Gameplay"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Focus Target Camera now displays a command output error when trying to target an entity when not on a free camera or custom camera that inherits from free camera.\xa0"}),"\n",(0,r.jsxs)(t.li,{children:["Focus Target Camera ",(0,r.jsx)(t.code,{children:"vertical_rotation_limits"})," are now in world space. 0 degrees is straight down, 90 degrees is horizontal and 180 degrees is straight up. The limits for the values are [0, 180] inclusive."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,r.jsxs)(t.p,{children:["Added full support and fixes for some input glyph replacement strings. This is to make them work across all the platforms (PC, Consoles, Mobile).",(0,r.jsx)(t.br,{}),"\n","These are the values fixed:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:":_input_key.forward:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.back:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.left:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.right:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.inventory:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.use:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.chat:"}),"\n",(0,r.jsx)(t.li,{children:":_input_key.attack:"}),"\n",(0,r.jsxs)(t.li,{children:[":_input_key.sprint:",(0,r.jsx)(t.br,{}),"\n","The icons for these strings are updated in diverse areas of the game that support contextual glyphs, such as: signs, signed books, tags, chat, commands.",(0,r.jsx)(t.br,{}),"\n","Also, as improvement, replacement of these values depends on the interaction/control mode when using touch as input mode. These modes are Joystick & tap to interact, D-Pad & tap to interact, and Joystick & aim crosshair."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},37106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/60/25/tech_sapi_exp",title:"tech_sapi_exp",description:"-   RegistrationBuilder.structureLocation method in @minecraft/server-gametest",source:"@site/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/60/25",slug:"/changelog_source/preview/1.21/60/25/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"RegistrationBuilder.structureLocation"})," method in @minecraft/server-gametest\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added optional argument ",(0,r.jsx)(t.code,{children:"structureDimension: DimensionTye | string"})," to specify which dimension the gametest should spawn in. If not provided, it will default to whichever dimension the test is ran from."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"system.scriptEvent()"})," no longer returns ",(0,r.jsx)(t.code,{children:"ScriptEventMessageSizeError"})," but instead an ",(0,r.jsx)(t.code,{children:"InvalidArgumentError"})," for the message size exceeding 2048 characters in size in Beta"]}),"\n",(0,r.jsxs)(t.li,{children:["Removed ",(0,r.jsx)(t.code,{children:"ScriptEventMessageSizeError"})," from Beta"]}),"\n",(0,r.jsxs)(t.li,{children:["Moved CameraTargetOptions from beta to ",(0,r.jsx)(t.code,{children:"v1.16.0"})]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},20722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/60/25/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/60/25",slug:"/changelog_source/preview/1.21/60/25/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/25/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},48454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/60/25/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Added script bindings to beta for the experimental Aim-Assist feature.",source:"@site/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable.md",sourceDirName:"changelog_source/preview/1.21/60/25",slug:"/changelog_source/preview/1.21/60/25/tech_sapi_stable",permalink:"/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){const t={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Added script bindings to ",(0,r.jsx)(t.code,{children:"beta"})," for the experimental Aim-Assist feature.\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class AimAssistCategory"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class AimAssistCategorySettings"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class AimAssistPreset"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class AimAssistPresetSettings"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class AimAssistRegistry"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"enum AimAssistTargetMode"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"interface PlayerAimAssistSettings"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"class PlayerAimAssist"})}),"\n",(0,r.jsx)(t.li,{children:"method Player.getAimAssist to modify a player's aim-assist settings"}),"\n",(0,r.jsx)(t.li,{children:"method World.getAimAssist to add aim-assist presets and categories."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Added enum ",(0,r.jsx)(t.code,{children:"InvalidArgumentErrorType"})," that adds extra context to the type of invalid argument error.\xa0"]}),"\n",(0,r.jsxs)(t.li,{children:["Added property ",(0,r.jsx)(t.code,{children:"type"})," to ",(0,r.jsx)(t.code,{children:"InvalidArgumentError"})," for checking the type of argument error.\xa0"]}),"\n"]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},70622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);const s={},a=void 0,o={id:"changelog_source/preview/1.21/60/25/tech_sapi_stable_diff",title:"tech_sapi_stable_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable_diff.md",sourceDirName:"changelog_source/preview/1.21/60/25",slug:"/changelog_source/preview/1.21/60/25/tech_sapi_stable_diff",permalink:"/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/60/25/tech_sapi_stable_diff.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,r.jsx)(r.Fragment,{})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},59938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=n(74848),i=n(28453),s=n(18228),a=n(19365);const o={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(r.Fragment,{children:void 0!==e.techSapiDiff?(0,r.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,r.jsx)(a.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,r.jsx)(a.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,r.jsx)(r.Fragment,{children:e.techSapi})})})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const i={tabItem:"tabItem_Ymn6"};var s=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),i=n(34164),s=n(23104),a=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,h]=p({queryString:n,groupId:i}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),x=(()=>{const e=c??g;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=n(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),i=o[n].value;i!==r&&(d(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,v.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:[o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:h,...s,className:(0,i.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,v.jsx)("div",{className:"w-full",children:l}):void 0]})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function _(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,v.jsx)(_,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);