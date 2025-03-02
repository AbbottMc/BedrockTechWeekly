"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[34685,43115],{49891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(74848),r=n(28453);n(74450);const o={},a=void 0,s={id:"changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_/tech.mdx",sourceDirName:"changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_",slug:"/changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_/tech",permalink:"/en/docs/changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_/tech",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/Minecraft_-_Caves_&_Cliffs&_Part_I_-_1.17.0_/tech.mdx",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Actors</strong>\xa0",id:"actors",level:2},{value:"<strong>Other Fixes</strong>\xa0",id:"other-fixes",level:2},{value:"<strong>Volume Driven Fog (Experimental)</strong>",id:"volume-driven-fog-experimental",level:2},{value:"<strong>GameTest\xa0Framework (Experimental)</strong>",id:"gametestframework-experimental",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"updated-add-on-template-packs",children:(0,i.jsx)(t.strong,{children:"Updated Add-On Template Packs"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Updated Add-On templates for 1.17 are available for download with new resources, behaviors, and documentation","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Resource Pack Template: ",(0,i.jsx)(t.a,{href:"https://aka.ms/ResourcePackTemplate",children:"aka.ms/ResourcePackTemplate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Behavior Pack Template (Includes documentation): ",(0,i.jsx)(t.a,{href:"https://aka.ms/BehaviorPackTemplate",children:"aka.ms/BehaviorPackTemplate"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"general",children:(0,i.jsx)(t.strong,{children:"General"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Added two new variables to the\xa0\'biomes_client.json\'\xa0file: "remove_all_prior_fog" and "inherit_from_prior_fog", which\xa0control fog merging and/or inheritance'}),"\n",(0,i.jsx)(t.li,{children:'"remove_all_prior_fog", when true, will clear all previous fog definitions stored on the stack, making the current pack the new "starting point" for fogs'}),"\n",(0,i.jsx)(t.li,{children:'"inherit_from_prior_fog", when true, will merge a biome\'s fog definition with matching biomes on the stack then create a new merged definition for it'}),"\n",(0,i.jsx)(t.li,{children:'"transparentattachable"\xa0tag should only affect rendering in\xa0first\xa0person camera\xa0perspective'}),"\n",(0,i.jsxs)(t.li,{children:["Added a\xa0MoLang\xa0query to get default bone pivots (",(0,i.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-116741",children:"MCPE-116741"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Updated\xa0MoLang\xa0query to return normalized item use time remaining based off given parameters (",(0,i.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-116737",children:"MCPE-116737"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fixed various cases when ray tracing textures would not be reloaded (resolution switching, upscaling mode switching, ray tracing on/off toggling) (",(0,i.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-124562",children:"MCPE-124562"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fixed Enchanted Bow's textures being too dark (",(0,i.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-119701",children:"MCPE-119701"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"actors",children:[(0,i.jsx)(t.strong,{children:"Actors"}),"\xa0"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Catmull-Rom animations will no longer glitch if the time for a keyframe matches its value"}),"\n",(0,i.jsx)(t.li,{children:"All functions run using the '/schedule' command now run from the origin they are supposed to, instead of from the server"}),"\n",(0,i.jsxs)(t.li,{children:['Added a new field "transform_to_item" to the "minecraft',":ageable",'" component. If the field is filled with an item name, the item will be given back when any of "feed_items" are used. Similar to "transform_to_item" in the "minecraft',":breedable",'" component']}),"\n",(0,i.jsxs)(t.li,{children:['Added a new optional flag "use_simplified_breeding" to "minecraft',":genetics",'" component. When this flag is set to true, the offspring never inherits hidden alleles of parents as main alleles and main as hidden. This allows to implement simple breeding logic easier']}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"other-fixes",children:[(0,i.jsx)(t.strong,{children:"Other Fixes"}),"\xa0"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Replaced "Whitelist" language use to "AllowList". Dedicated server command "whitelist" changed to "allowlist". Dedicated server "whitelist.json" file changed to "allowlist.json" file. JSON format remains the same. Modified instructions are found in bedrock_server_how_to.html'}),"\n",(0,i.jsx)(t.li,{children:"Fixed 'query.is_in_ui' so that it is available to use when a data-driven mob is rendering in the UI ('query.is_in_ui' returns true when the mob is rendering in the UI, such as in the inventory window)"}),"\n",(0,i.jsx)(t.li,{children:"Fixed a crash that could occur when an entity with a scoreboard value was removed from the world"}),"\n",(0,i.jsxs)(t.li,{children:["Fixed a bug with the summonable property of overridden Vanilla mobs pre-JSON version 1.8.0, which caused Bees to not be summonable (",(0,i.jsx)(t.a,{href:"https://bugs.mojang.com/browse/MCPE-58557",children:"MCPE-58557"}),")"]}),"\n",(0,i.jsx)(t.li,{children:"The \"ImpactDamageSubcomponent\" once again only prevents damage from being dealt to fire immune mobs if the 'catchFire' field is true and the projectile is on fire"}),"\n",(0,i.jsx)(t.li,{children:'The "has_equipment" filter now properly evaluates custom entity spawn eggs'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"volume-driven-fog-experimental",children:(0,i.jsx)(t.strong,{children:"Volume Driven Fog (Experimental)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Create volumes in your world: simply create a "volumes" folder in a saved world and put json files in there - one json file per volume. More information can be found in the Behavior Pack documentation'}),"\n",(0,i.jsx)(t.li,{children:'Can be enabled using the "Upcoming Creator Features" experimental feature toggle'}),"\n",(0,i.jsx)(t.li,{children:"Currently, you can attach a fog - Minecraft or your own custom fog - to a volume. When the player enters the volume, the fog will take effect"}),"\n",(0,i.jsx)(t.li,{children:"Added AddVolumeEntityPacket that contains information of a volume entity including its net ID and NBT containing information about the volume's definition and components, which will be added to the client's registry"}),"\n",(0,i.jsx)(t.li,{children:"Added RemoveVolumeEntityPacket that contains a volume entity's net ID to remove it from the client's registry"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"gametestframework-experimental",children:(0,i.jsx)(t.strong,{children:"GameTest\xa0Framework (Experimental)"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Renamed '/gametest\xa0runall'\xa0to '/gametest\xa0runset'"}),"\n",(0,i.jsxs)(t.li,{children:['The default value for the tag parameter is now "suite',":default",'"']}),"\n",(0,i.jsx)(t.li,{children:"Added Dimension class"}),"\n",(0,i.jsx)(t.li,{children:"Added\xa0World.getDimension"}),"\n",(0,i.jsxs)(t.li,{children:["Updated the\xa0GameTest\xa0Framework interface","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"assertContainerContains\xa0-\xa0ItemIdentifier\xa0parameter changed to\xa0ItemStack"}),"\n",(0,i.jsx)(t.li,{children:"assertItemEntityNotPresent\xa0and\xa0assertItemEntityPresent\xa0APIs -\xa0ItemStack\xa0parameter changed to\xa0ItemType\xa0"}),"\n",(0,i.jsx)(t.li,{children:"assertEntityNotTouching(entityIdentifier: string, position : Location) - Asserts that there is no entity of the given type at the given position"}),"\n",(0,i.jsx)(t.li,{children:"assertEntityTouching(entityIdentifier: string, position : Location) - Asserts that there is an entity of the given type at the given position"}),"\n",(0,i.jsx)(t.li,{children:"assertItemEntityCountIs(itemType\xa0: ItemType, position :\xa0BlockLocation,\xa0searchDistance\xa0: number, count : number) - Asserts that the entity item count in the given search area matches the expected count"}),"\n",(0,i.jsx)(t.li,{children:'pulseRedstone(position :\xa0BlockLocation, duration : number) - Creates a\xa0Redstone block at the given position and destroys it after "duration" ticks'}),"\n",(0,i.jsx)(t.li,{children:"function\xa0assertEntityPresentInArea(entityIdentifier\xa0: string) - Throws\xa0an\xa0Error\xa0if an entity matching the given identifier does not exist in the test region"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0print(text : string) - Prints the given text to the chat"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0assertEntityInstancePresent(entity : Entity, position :\xa0BlockLocation) - Throws\xa0an Error\xa0if the given entity is not present in the given block location"}),"\n",(0,i.jsx)(t.li,{children:"[Removed] function\xa0setEntityTamed(entityIdentifier\xa0: string, position :\xa0BlockLocation) - Replaced by component function\xa0setTamed(showParticles\xa0: bool)"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0assertEntityData(position :\xa0BlockLocation,\xa0entityIdentifier\xa0: string,\xa0callback\xa0: function(entity: Entity)) - Asserts that the given condition is true for all entities of the given type at the given location"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0spawnItem(itemType\xa0:\xa0ItemStack, position : Location) - Spawns an item at the given location"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0assertIsWaterlogged(position :\xa0BlockLocation,\xa0isWaterlogged\xa0: bool) - Asserts that the block at the given location is waterlogged"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0assertRedstonePower(position :\xa0BlockLocation, power : number) - Asserts the\xa0redstone\xa0power level at the given location"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Added\xa0Commands.run"}),"\n",(0,i.jsxs)(t.li,{children:["Entity","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"function\xa0getComponents() - Returns an array of supported components"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0getComponent(componentIdentifier\xa0: string) - Returns the component matching the given identifier"}),"\n",(0,i.jsx)(t.li,{children:"function\xa0hasComponent(componentIdentifier\xa0: string) - Returns true if the given component exists on the entity and is supported"}),"\n",(0,i.jsx)(t.li,{children:'function\xa0getName() - Returns the name of the entity (e.g. "Horse")'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Add new enumerations:\xa0Minecraft.Effects\xa0&\xa0Minecraft.Items"}),"\n",(0,i.jsxs)(t.li,{children:["Components","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Added additional component interfaces. movement, navigation, healable, breathable, ageable, and tameable components"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:'Container - New interface for interacting with entity containers. Can be referenced via entity.getComponent("inventory").container'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},74450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var i=n(74848),r=n(28453),o=n(18228),a=n(19365);const s={},l=void 0,c={id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},u=[];function h(e){return(0,i.jsxs)(o.A,{className:"changelog_sapi_tabs",children:[(0,i.jsx)(a.A,{value:"Update Description",children:e.techSapi}),(0,i.jsx)(a.A,{value:"API Changelog",children:e.techSapiChangelog})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:n,children:t})}},18228:(e,t,n)=>{n.d(t,{A:()=>_});var i=n(96540),r=n(34164),o=n(23104),a=n(56347),s=n(205),l=n(57485),c=n(31682),d=n(89466);function u(e){return function(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[c,u]=f({queryString:n,groupId:r}),[g,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=c??g;return m({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var p=n(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:i,selectValue:a,tabValues:s,rightElement:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==i&&(d(t),a(r))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsxs)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:[s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,r.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"},children:n??t},t)})),l?(0,x.jsx)("div",{className:"w-full",children:l}):void 0]})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,x.jsx)(w,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);