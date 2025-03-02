"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[38220,75715,21032,30918],{31176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(74848),r=t(28453),s=t(32492),l=(t(92028),t(59938));const o={},c=void 0,a={id:"changelog_source/preview/1.21/50/20/tech",title:"tech",description:"General",source:"@site/docs/changelog_source/preview/1.21/50/20/tech.mdx",sourceDirName:"changelog_source/preview/1.21/50/20",slug:"/changelog_source/preview/1.21/50/20/tech",permalink:"/docs/changelog_source/preview/1.21/50/20/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/20/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[{value:"General",id:"general",level:3},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Editor",id:"editor",level:2},{value:"Entity Components",id:"entity-components",level:2},{value:"Entity Event Responses",id:"entity-event-responses",level:2},{value:"General",id:"general-1",level:2},{value:"Network Protocol",id:"network-protocol",level:2},{value:"Realms",id:"realms",level:2},{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine-1",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...l.toc,{value:"Graphical",id:"graphical",level:2},{value:"Molang",id:"molang",level:2},{value:"Scripting",id:"scripting",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Camera",id:"camera",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed issue that caused the export as template functionality to generate invalid mctemplate UUIDs"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['The [Beta] fields in the "minecraft',":looked",'_at" and "minecraft',":home",'" entity components are no longer marked as [Beta] and no longer require "use_beta_features" to be specified in the root JSON object']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"blocks",children:"Blocks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Updated\xa0",(0,i.jsx)(n.code,{children:"minecraft:destructible_by_mining"}),"\xa0component, new field\xa0",(0,i.jsx)(n.code,{children:"item_specific_speeds"}),"\xa0no longer experimental."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Removed the following vanilla block tags from experimental"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['"minecraft',":diamond",'_tier_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":iron",'_tier_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_hatchet_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_hoe_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_mace_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_pickaxe_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_shears_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_shovel_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_sword_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":netherite",'_tier_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":stone",'_tier_destructible"']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:['Renamed vanilla block tag "minecraft',":is",'_hatchet_item_destructible" to "minecraft',":is",'_axe_item_destructible".']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Removed the following vanilla block tags."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_digger_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":is",'_tool_item_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":gold",'_tier_destructible"']}),"\n",(0,i.jsxs)(n.li,{children:['"minecraft',":wood",'_tier_destructible"']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"editor",children:"Editor"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Selection now has a freehand select that uses brushes to paint"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Updated general brush functionality:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Brush shapes are visualized as grey wireframes, and show only affected blocks in yellow"}),"\n",(0,i.jsx)(n.li,{children:"Cusor Control / Mouse Mode is now using a common control which is shared across extensions"}),"\n",(0,i.jsx)(n.li,{children:"Brush Selection, Masking and Brush Properties is now using a custom control which is shared across extensions"}),"\n",(0,i.jsx)(n.li,{children:"Brush Painting now visualizes only affected blocks"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added\xa0",(0,i.jsx)(n.code,{children:"addToggleGroup"}),"\xa0function to\xa0",(0,i.jsx)(n.code,{children:"IPropertyPane"}),"\xa0API to create toggle groups with selectable icon buttons"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added support for Brush Shape Offsets"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added a new settings screen in\xa0",(0,i.jsx)(n.code,{children:"View \\> View Settings"}),"\xa0to configure certain view related settings (like invisible block visibility and chunk boundaries)"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added mouse button event data to the widget state change event so that server scripts can track mouse button events (press, release, drag) and the state of modifier keys (shift, ctrl)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added an optional\xa0",(0,i.jsx)(n.code,{children:"infoTooltip: TooltipInteractiveContent"}),"\xa0property to\xa0",(0,i.jsx)(n.code,{children:"IRootPropertyPane"}),"\xa0API, displayed as an icon in the drawer header. Interactive tooltips remain active on hover and support links and paragraphs."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added\xa0",(0,i.jsx)(n.code,{children:"serialize(obj)"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"deserialize(string)"}),"\xa0functions. These act like JSON.stringify/JSON.parse but will use custom serializers/deserializers registered with\xa0",(0,i.jsx)(n.code,{children:"registerSerializationForType"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CompoundBlockVolume"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"BlockVolume"}),"\xa0are able to be serialized and deserialized with these functions"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added\xa0",(0,i.jsx)(n.code,{children:"registerSerializationForType\\<T\\>(constructor, name, serializer, deserializer)"}),"\xa0which registers any type with custom serialization/deserialization for\xa0",(0,i.jsx)(n.code,{children:"serialize"}),"\xa0and\xa0",(0,i.jsx)(n.code,{children:"deserialize"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Updated Block Masks to work when empty (always match)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added 'cancel' property to endPainting()"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added control buttons next to the hotbar to switch the active palette and manage other palettes"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Updated Selection Volume and Cursor colors to default to the colors of those keys in the currrently-selected theme. Changed Client Widget X, Y, and Z arrows to always be the colors of those keys in the currently-selected theme. Changed deleted fillColor and outlineColor in CursorProperties so that causes the Cursor colors to return back to the colors of those keys in the currently-selected theme."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed issues with selection being cleared on tool focus change"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"entity-components",children:"Entity Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added new component 'minecraft",":can","_attack_ghast'. When added to an entity, it enables that entity to target and attack Ghasts."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["'behavior.summon_entity' now lets creators specify an event to be invoked on the summoned entity immediately after summon (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-44454",children:"MCPE-44454"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"entity-event-responses",children:"Entity Event Responses"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Added the "play_sound" entity event response, which allows the owner entity to emit sounds'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The "sound" field specifies the sound event to play'}),"\n",(0,i.jsx)(n.li,{children:"Sounds are played at the owner entity's position"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general-1",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creating a new world from a template that supports random seeds will now clear any stored spawn position from the level data"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"network-protocol",children:"Network Protocol"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"New actor type added: Creaking (146)"}),"\n",(0,i.jsx)(n.li,{children:"New level events added: ParticleCreakingHeartTrail, ParticleCreakingTeardown"}),"\n",(0,i.jsx)(n.li,{children:"New level sound events added: ImitateCreaking, CreakingHeartTrail, CreakingHeartSpawn, Activate, Deactivate, Freeze, Unfreeze"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"realms",children:"Realms"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed soft-lock UI bug when an expired Realm was deleted"}),"\n"]}),"\n",(0,i.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine-1",children:"Add-Ons and Script Engine"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['Added "canUseBlockAsIcon" bool to the "minecraft',":block",'_placer" item component network data to fix bug where clients did not render the block item correctly.']}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(l.default,{techSapi:(0,i.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"graphical",children:"Graphical"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fixed rendering of Wardens in the Deferred Technical Preview. (",(0,i.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MCPE-180140",children:"MCPE-180140"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed TextureSets for multi-textured mobs, such as llamas in the Deferred Technical Preview."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed the orientation of normal maps for mobs on Android in the Deferred Technical Preview."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"End Portals now cast shadows in the Deferred Technical Preview."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Improved the visibility of reflective surfaces when underground in the Deferred Technical Preview."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Slightly reduced the intensity of the wrapping effect of sub surface scattering in the Deferred Technical Preview."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"molang",children:"Molang"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added\xa0",(0,i.jsx)(n.code,{children:"query.last_input_mode_is_any"}),". It takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). If the last input used is any of the specified string values, returns 1.0. Otherwise returns 0.0. Available on the Client (Resource Packs) only. Added\xa0",(0,i.jsx)(n.code,{children:"query.touch_only_affects_hotbar"}),". It returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. Available on the Client (Resource Packs) only."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scripting",children:"Scripting"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added enum\xa0",(0,i.jsx)(n.code,{children:"InputMode"}),". export enum InputMode { Gamepad = 'Gamepad', KeyboardAndMouse = 'KeyboardAndMouse', MotionController = 'MotionController', Touch = 'Touch', Undetermined = 'Undetermined', }"]}),"\n",(0,i.jsxs)(n.li,{children:["Added class\xa0",(0,i.jsx)(n.code,{children:"InputInfo"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Field\xa0",(0,i.jsx)(n.code,{children:"touchOnlyAffectsHotbar"}),". Whether the player touch input only affects the touchbar or not."]}),"\n",(0,i.jsxs)(n.li,{children:["Field\xa0",(0,i.jsx)(n.code,{children:"lastInputModeUsed"}),". The last input mode used by the player."]}),"\n",(0,i.jsxs)(n.li,{children:["Added field\xa0",(0,i.jsx)(n.code,{children:"inputInfo"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added class\xa0",(0,i.jsx)(n.code,{children:"PlayerInputModeChangeAfterEvent"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Field\xa0",(0,i.jsx)(n.code,{children:"newInputModeUsed"}),", the new input mode used by the player."]}),"\n",(0,i.jsxs)(n.li,{children:["Field\xa0",(0,i.jsx)(n.code,{children:"player"}),", the player that had the input mode change."]}),"\n",(0,i.jsxs)(n.li,{children:["Field\xa0",(0,i.jsx)(n.code,{children:"previousInputModeUsed"}),", the previous input mode used by the player."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added class\xa0",(0,i.jsx)(n.code,{children:"PlayerInputModeChangeAfterEventSignal"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Toggle renderer is now a bindable action under Keyboard and Mouse settings menu."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"camera",children:"Camera"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added 'minecraft",":fixed","_boom' preset to the 'Creator Cameras: New Third Person Presets' experimental toggle"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},32492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(74848),r=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.21/50/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Add collectRuntimeStats to\xa0@minecraft/debug-utilities\xa0module, exposing script runtime memory usage.",source:"@site/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.21/50/20",slug:"/changelog_source/preview/1.21/50/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},a=[];function d(e){const n={code:"code",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add collectRuntimeStats to\xa0",(0,i.jsx)(n.code,{children:"@minecraft/debug-utilities"}),"\xa0module, exposing script runtime memory usage."]}),"\n",(0,i.jsxs)(n.li,{children:["Added new input permissions that effectively allow creators to enable/disable player inputs including: lateral movement, move forward, move backward, move left, move right, sneak, jump, mount, and dismount.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Extended\xa0",(0,i.jsx)(n.code,{children:"PlayerInputPermissions"}),"\xa0script class to read and write the new input permissions"]}),"\n",(0,i.jsxs)(n.li,{children:["Extended\xa0",(0,i.jsx)(n.code,{children:"/inputpermissions"}),"\xa0command to use the new input permissions"]}),"\n",(0,i.jsxs)(n.li,{children:["Extended\xa0",(0,i.jsx)(n.code,{children:"haspermission"}),"\xa0selector to use the new input permissions"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["BlockComponentTypes\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved\xa0",(0,i.jsx)(n.code,{children:"FluidContainer"}),"\xa0from\xa0",(0,i.jsx)(n.code,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.code,{children:"1.16.0"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Moved\xa0",(0,i.jsx)(n.code,{children:"BlockFluidContainerComponent"}),"\xa0from\xa0",(0,i.jsx)(n.code,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.code,{children:"1.16.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Moved\xa0",(0,i.jsx)(n.code,{children:"FluidContainer"}),"\xa0from\xa0",(0,i.jsx)(n.code,{children:"beta"}),"\xa0to\xa0",(0,i.jsx)(n.code,{children:"1.16.0"})]}),"\n",(0,i.jsxs)(n.li,{children:["Added\xa0",(0,i.jsx)(n.code,{children:"initialRotation"}),"\xa0optional member to\xa0",(0,i.jsx)(n.code,{children:"SpawnEntityOptions"}),"\xa0for specifying the initial rotation of the spawned entity in degrees."]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},92028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=t(74848),r=t(28453);const s={},l=void 0,o={id:"changelog_source/preview/1.21/50/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.21/50/20",slug:"/changelog_source/preview/1.21/50/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.21/50/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},a=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(74848),r=t(28453),s=t(18228),l=t(19365);const o={},c=void 0,a={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,l),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>_});var i=t(96540),r=t(34164),s=t(23104),l=t(56347),o=t(205),c=t(57485),a=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[l,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[a,h]=m({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=a??x;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:o,rightElement:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=a.indexOf(n),r=o[t].value;r!==i&&(d(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,g.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),c?(0,g.jsx)("div",{className:"w-full",children:c}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function _(e){const n=(0,f.A)();return(0,g.jsx)(w,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);