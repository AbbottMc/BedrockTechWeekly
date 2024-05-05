"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[4754,83982,21032,81143],{67991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=t(74848),r=t(28453),s=t(76939),o=(t(75273),t(59938));const l={},c=void 0,a={id:"changelog_source/preview/1.20/0/23/tech",title:"tech",description:"Dedicated Server",source:"@site/docs/changelog_source/preview/1.20/0/23/tech.mdx",sourceDirName:"changelog_source/preview/1.20/0/23",slug:"/changelog_source/preview/1.20/0/23/tech",permalink:"/docs/changelog_source/preview/1.20/0/23/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/23/tech.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[{value:"<strong>Dedicated Server</strong>",id:"dedicated-server",level:2},{value:"<strong>Entities</strong>",id:"entities",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>User Interface</strong>",id:"user-interface",level:2},{value:"<strong>Accessibility</strong>",id:"accessibility",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},...o.toc,{value:"<strong>Items</strong>",id:"items-1",level:2},{value:"<strong>Scripting</strong>",id:"scripting",level:2}];function u(e){const n={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"dedicated-server",children:(0,i.jsx)(n.strong,{children:"Dedicated Server"})}),"\n",(0,i.jsx)(n.p,{children:"Content logs now show in dedicated server console window with a configurable log level using these new server properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["content-log-level - Sets the minimum level for content logs to output. Allowed values: \u201cverbose\u201d, \u201cinfo\u201d, \u201cwarning\u201d, \u201cerror\u201d. Default: info","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Note: This log level also affects content logs written to disk when using content-log-file-enabled=true"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"content-log-console-output-enabled - Enables or disables content log output to the console window. Default: info"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"entities",children:(0,i.jsx)(n.strong,{children:"Entities"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom entities with internal-only components or AI goals will fail to load in game"}),"\n",(0,i.jsx)(n.li,{children:"Custom entities are restricted to overriding Vanilla entities released before 1.20. Invalid entities used in the \u201cidentifier\u201d or \u201cruntime_identifier\u201d field will result in content errors"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"items",children:(0,i.jsx)(n.strong,{children:"Items"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Released the \u201cminecraft",":display","_name\u201d item component out of experimental in json formats 1.20.0 and higher"]}),"\n",(0,i.jsxs)(n.li,{children:["Released the \u201cminecraft",":durability","\u201d item component out of experimental in json formats 1.20.0 and higher"]}),"\n",(0,i.jsxs)(n.li,{children:["Released the \u201cminecraft",":fuel","\u201d item component out of experimental in json formats 1.20.0 and higher"]}),"\n",(0,i.jsxs)(n.li,{children:["Released the \u201cminecraft",":entity","_placer\u201d item component out of experimental in json formats 1.20.0 and higher"]}),"\n",(0,i.jsxs)(n.li,{children:["Released the \u201cminecraft",":icon","\u201d item component out of experimental in json formats 1.20.0 and higher"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:(0,i.jsx)(n.strong,{children:"User Interface"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fixed a graphical issue where a gamepad icon would display over another screen"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"accessibility",children:(0,i.jsx)(n.strong,{children:"Accessibility"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Added new \u201cChat Message Duration\u201d accessibility setting to change how long chat messages remain on screen (3 seconds by default)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Renamed \u201cNotification Duration\u201d to \u201cToast Notification Duration\u201d and fixed an issue were the setting had no affect on how long toasts remained on display"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("h2",{className:"experimental_divider",children:"\u5b9e\u9a8c\u6027\u7279\u6027"}),"\n",(0,i.jsx)(n.h2,{id:"add-ons-and-script-engine",children:(0,i.jsx)(n.strong,{children:"Add-Ons and Script Engine"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added PlacementPosition (\u201cminecraft",":placement","_position\u201d) BlockTrait block trait"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Adds states \u201cminecraft",":block","_face\u201d and/or \u201cminecraft: vertical_half\u201d"]}),"\n",(0,i.jsxs)(n.li,{children:["\u201cminecraft",":block",'_face\u201d is a six value string state ("down", "up", "north", "south", "east", "west") that contains info on which block face the player clicked on when the block was placed']}),"\n",(0,i.jsxs)(n.li,{children:["\u201cminecraft",":vertical",'_half\u201d is a 2 value string state ("bottom", "top") with info on whether the block was placed in the lower or upper half of the block position']}),"\n",(0,i.jsx)(n.li,{children:"Both of these states are set when the block is placed (onPlayerPlace)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"script-api",children:(0,i.jsx)(n.strong,{children:"Script API"})}),"\n",(0,i.jsx)(o.default,{techSapi:(0,i.jsx)(s.default,{}),techSapiDiff:void 0}),"\n",(0,i.jsx)(n.h2,{id:"items-1",children:(0,i.jsx)(n.strong,{children:"Items"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Items with the \u2018minecraft",":throwable","\u2019 component now trigger the \u2018throw\u2019 sound effect when used"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"scripting",children:(0,i.jsx)(n.strong,{children:"Scripting"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After Events","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All non-before events have been moved from world.events to world.afterEvents"}),"\n",(0,i.jsx)(n.li,{children:"events has been removed from the world object"}),"\n",(0,i.jsx)(n.li,{children:"After events do not execute immediately, instead they are deferred until a later point in the tick when they are flushed. It is guaranteed that all events fired in a tick are flushed within a tick"}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},76939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.20/0/23/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Moving getComponent(componentId EntityComponent | undefined method to 1.2.0",source:"@site/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/23",slug:"/changelog_source/preview/1.20/0/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},a=[];function d(e){const n={li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Moving getComponent(componentId: string): EntityComponent | undefined method to 1.2.0"}),"\n",(0,i.jsx)(n.li,{children:"Moving getComponents(): EntityComponent[] method to 1.2.0"}),"\n",(0,i.jsx)(n.li,{children:"Moving hasComponent(componentId: string): boolean method to 1.2.0"}),"\n",(0,i.jsx)(n.li,{children:"Moving EntityComponent class to 1.2.0"}),"\n",(0,i.jsxs)(n.li,{children:["Moving EntityBaseMovementComponent class to 1.2.0:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Moving readonly maxTurn: number property to 1.2.0"}),"\n",(0,i.jsxs)(n.li,{children:["Moving the following additional EntityBaseMovementComponent subclasses to 1.2.0:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EntityMovementAmphibiousComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementBasicComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementFlyComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementGenericComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementHoverComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementJumpComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMovementSkipComponent"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Renamed EntityIsDyableComponent class to EntityIsDyeableComponent and moved to 1.2.0"}),"\n",(0,i.jsxs)(n.li,{children:["Moving the following additional EntityComponent subclasses to 1.2.0:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EntityCanClimbComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityCanFlyComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityCanPowerJumpComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityColorComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityFireImmuneComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityFloatsInLiquidComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityFlyingSpeedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityFrictionModifierComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityGroundOffsetComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsBabyComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsChargedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsChestedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsHiddenWhenInvisibleComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsIgnitedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsIllagerCaptainComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsSaddledComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsShakingComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsShearedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsStackableComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsStunnedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityIsTamedComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityMarkVariantComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityPushThroughComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityScaleComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntitySkinIdComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityVariantComponent"}),"\n",(0,i.jsx)(n.li,{children:"EntityWantsJockeyComponent"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added class EffectTypes\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added function get(identifier: string): EffectType - Returns the effect type if it exists"}),"\n",(0,i.jsx)(n.li,{children:"Added function getAll(): EffectType[] - Returns all of the effects"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Updated class Effect\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updated duration property. Is the duration of the effect in ticks"}),"\n",(0,i.jsx)(n.li,{children:"Added property typeId. Returns the effect\u2019s type id"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Added interface EntityEffectOptions { amplifier?: number, showParticles?: boolean }\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Added function removeEffect(effectType: EffectType | string): boolean - Removes an effect from an Entity. Returns false if the effect is not found or does not exist"}),"\n",(0,i.jsx)(n.li,{children:"Updated function getEffect(effectType: EffectType | string): Effect | undefined - Gets the effect if it exists on the entity. Otherwise returns undefined"}),"\n",(0,i.jsx)(n.li,{children:"Updated function addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): boolean - Adds an effect to the Entity. Returns false if the effect cannot be added ( the effect does not exist, the duration is negative)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Items using the minimum duration for the \u201cminecraft:fuel\u201d component now work in the Blast Furnace and Smoker"}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},75273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const s={},o=void 0,l={id:"changelog_source/preview/1.20/0/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/0/23",slug:"/changelog_source/preview/1.20/0/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp_diff",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},a=[];function d(e){return(0,i.jsx)(i.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d()}},59938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=t(74848),r=t(28453),s=t(18228),o=t(19365);const l={},c=void 0,a={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},h=[];function u(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(i.Fragment,{children:void 0!==e.techSapiDiff?(0,i.jsxs)(s.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(o.A,{value:"\u66f4\u65b0\u63cf\u8ff0",children:e.techSapi}),(0,i.jsx)(o.A,{value:"\u63a5\u53e3\u53d8\u52a8",children:e.techSapiDiff})]}):(0,i.jsx)(i.Fragment,{children:e.techSapi})})})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var i=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t,children:n})}},18228:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),r=t(34164),s=t(23104),o=t(56347),l=t(205),c=t(57485),a=t(31682),d=t(89466);function h(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??h(t);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=u(e),[o,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[a,h]=f({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=a??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),g(e)}),[h,g,s]),tabValues:s}}var g=t(92303);const x={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:n,block:t,selectedValue:i,selectValue:o,tabValues:l,rightElement:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),h=e=>{const n=e.currentTarget,t=a.indexOf(n),r=l[t].value;r!==i&&(d(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,j.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:[l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>a.push(e),onKeyDown:u,onClick:h,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===n}),style:{wordBreak:"keep-all"},children:t??n},n)})),c?(0,j.jsx)("div",{className:"w-full",children:c}):void 0]})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;if(n){const e=t.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,j.jsx)(y,{...e},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);