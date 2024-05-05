"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66763,21032],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,g=c["".concat(m,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:a},t)}},18228:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),r=a(96540),i=a(20053),o=a(23104),l=a(56347),m=a(57485),s=a(31682),p=a(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,m.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[m,s]=g({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),h=(()=>{const e=m??c;return u({value:e,tabValues:i})?e:null})();(0,r.useEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),y(e)}),[s,y,i]),tabValues:i}}var h=a(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function N(e){let{className:t,block:a,selectedValue:l,selectValue:m,tabValues:s,rightElement:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==l&&(d(t),m(n))},g=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:u},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),p?r.createElement("div",{className:"w-full"},p):void 0)}function b(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},r.createElement(N,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function w(e){const t=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},82320:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));a(57350);const i={},o=void 0,l={unversionedId:"changelog_source/stable/1.18/30/tech",id:"changelog_source/stable/1.18/30/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.18/30/tech.mdx",sourceDirName:"changelog_source/stable/1.18/30",slug:"/changelog_source/stable/1.18/30/tech",permalink:"/docs/changelog_source/stable/1.18/30/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/30/tech.mdx",tags:[],version:"current",frontMatter:{}},m={},s=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>RenderDragon</strong>",id:"renderdragon",level:2},{value:"<strong>Additional Modding Capabilities Experiment/JavaScript APIs</strong>",id:"additional-modding-capabilities-experimentjavascript-apis",level:2},{value:"<strong>Changes</strong>",id:"changes",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>AI Goals</strong>",id:"ai-goals",level:2},{value:"<strong>WebSocket</strong>",id:"websocket",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>GameTest Framework (Experimental)</strong>",id:"gametest-framework-experimental",level:2},{value:"<strong>mojang-minecraft module updates:</strong>",id:"mojang-minecraft-module-updates",level:2},{value:"<strong>mojang-gametest module:</strong>",id:"mojang-gametest-module",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"updated-add-on-template-packs"},(0,r.yg)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Updated Add-On templates for 1.18.30 with new resources, behaviors, and documentation, are available to download at ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddonPacks"))),(0,r.yg)("h2",{id:"renderdragon"},(0,r.yg)("strong",{parentName:"h2"},"RenderDragon")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"With the release of RenderDragon for Android, iOS, Nintendo Switch, and Win10 UWP x86, HAL will no longer be available on these platforms. We know the community has found ways to build shaders on top of HAL and with this change, these shaders will no longer function. We understand that this is a valuable feature for players and the creator community, and we are working on how we may be able to deliver this sort of creative capability to players and creators in an officially supported way. While we have nothing to share right now, look out for more details in the future.")),(0,r.yg)("h2",{id:"additional-modding-capabilities-experimentjavascript-apis"},(0,r.yg)("strong",{parentName:"h2"},"Additional Modding Capabilities Experiment/JavaScript APIs")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Important!")," In this release, we are removing the Additional Modding Capabilities experiment. This experiment contained experimental JavaScript APIs launched in 2018 \u2013 and with this removal, JavaScript within worlds associated with this API will no longer function. GameTest Framework \u2013 a separate JavaScript API \u2013 should not be impacted, nor should behavior pack/resource pack type add-ons more broadly."),(0,r.yg)("li",{parentName:"ul"},"You can read more about this ",(0,r.yg)("a",{parentName:"li",href:"https://aka.ms/mcamc"},"via this article"),".")),(0,r.yg)("h2",{id:"changes"},(0,r.yg)("strong",{parentName:"h2"},"Changes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'A world with "StorageVersion" 8 or lower will be increased to 9 and have its "RandomSeed" upgraded from using only the lower 32 bits of a 64-bit number to using the full 64-bit range while still representing the same number. This is only relevant for negative 32-bit seeds, which need a sign bit extension'),(0,r.yg)("li",{parentName:"ul"},"The world loading screen now shows progress when loading ticking areas marked for preload"),(0,r.yg)("li",{parentName:"ul"},"Experimental: Volume definitions are now stored and read from Behavior Packs instead of being part of the level directory"),(0,r.yg)("li",{parentName:"ul"},'Experimental: Added an optional "mob',"_",'amount" parameter to the Damage Event Response that specifies a unique damage amount when used by mobs'),(0,r.yg)("li",{parentName:"ul"},'Due to engine limitations, "minecraft:geometry" data used for blocks with the Holiday Creator Features experimental toggle are now restricted to only allow geometry in the ',"[","0,0,0","]"," to ","[","15,15,15","]"," space. Any blocks loaded from Behavior Packs that exceed this limit will render as the info","_","update block and show a content error in the log"),(0,r.yg)("li",{parentName:"ul"},"The Interact component now has two new fields, GiveItem and TakeItem, specifying if it is possible to give/take items from an entities main hand slot. Taking the item also drops the inventory of the mob"),(0,r.yg)("li",{parentName:"ul"},"Removed\xa0_preventsjumping_component from data-driven blocks"),(0,r.yg)("li",{parentName:"ul"},"Removed ",(0,r.yg)("em",{parentName:"li"},"BlockImmovable"),", ",(0,r.yg)("em",{parentName:"li"},"BlockBreakOnPush"),", and ",(0,r.yg)("em",{parentName:"li"},"BlockOnlyPistonPush")," components from data-driven blocks"),(0,r.yg)("li",{parentName:"ul"},"Limited the number of elements in the\xa0",(0,r.yg)("em",{parentName:"li"},"crafting","_","tags_field of _CraftingTableComponent")," to 64")),(0,r.yg)("h2",{id:"fixes"},(0,r.yg)("strong",{parentName:"h2"},"Fixes")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Biome-specific fog settings can once again be defined"),(0,r.yg)("li",{parentName:"ul"},'Fixed actor definition identifiers not being recognized if the item or block name contains "."'),(0,r.yg)("li",{parentName:"ul"},"Mobs that are riding a boat, for example, can no longer use JumpToBlockGoal (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-150750"},"MCPE-150750"),")"),(0,r.yg)("li",{parentName:"ul"},"Custom mobs with a format version lower than 1.18.20 and using the\xa0_minecraft:behavior.knockback","_","roar_component will parse like before if it contains an extra field that the engine didn't expect"),(0,r.yg)("li",{parentName:"ul"},"Fixed an issue in the Knockback goal where the incorrect owner was being passed into the filter evaluate function"),(0,r.yg)("li",{parentName:"ul"},"Weapon events are now correctly applied when the weapons are used by mobs (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-118692"},"MCPE-118692"),")"),(0,r.yg)("li",{parentName:"ul"},"JumpToBlock behavior is now correctly affected by JumpBoost mob effect (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137432"},"MCPE-137432"),")"),(0,r.yg)("li",{parentName:"ul"},"Fixed a case where experimental BlockCollisionComponents did not allow partial specification"),(0,r.yg)("li",{parentName:"ul"},"Rotation when riding a mob that has a locked rotation will no longer unexpectedly snap to one side when that mob is rotating")),(0,r.yg)("h2",{id:"commands"},(0,r.yg)("strong",{parentName:"h2"},"Commands")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fixed an issue that would cause commands to affect players in all dimensions (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152218"},"MCPE-152218"),")"),(0,r.yg)("li",{parentName:"ul"},'Added the "hasitem" filter for target selector of entities. This allows the player to target entities based on the items that have in their inventory or are wearing'),(0,r.yg)("li",{parentName:"ul"},"Added '/tickingarea' command preload overload"),(0,r.yg)("li",{parentName:"ul"},"The '/tickingarea' command no longer modifies areas from entities with the ",(0,r.yg)("em",{parentName:"li"},"tick","_","world")," component"),(0,r.yg)("li",{parentName:"ul"},"Entities must now be loaded for an area to be considered fully loaded and ticking"),(0,r.yg)("li",{parentName:"ul"},"Added a new '/volumearea ' command to create, remove, and list volumes in the world"),(0,r.yg)("li",{parentName:"ul"},"Using '/playanimation' command now properly plays animations on the paper doll and inventory character (",(0,r.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-137353"},"MCPE-137353"),")"),(0,r.yg)("li",{parentName:"ul"},"Correct error output is now displayed when attempting to use the '/loot' spawn command when passing in the position of an unloaded area and there is 0 loot to drop"),(0,r.yg)("li",{parentName:"ul"},"Added '/loot ' command insert loot and insert kill overload")),(0,r.yg)("h2",{id:"ai-goals"},(0,r.yg)("strong",{parentName:"h2"},"AI Goals")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Exposed new data parameter "calculate',"_","new","_","path","_",'radius" for GoHomeGoal. This is for specifying a distance in blocks that the mob is considered close enough to the end of the current path. A new path will then be calculated to continue toward home'),(0,r.yg)("li",{parentName:"ul"},"Added Knockback Height Cap value to KnockbackRoarGoal")),(0,r.yg)("h2",{id:"websocket"},(0,r.yg)("strong",{parentName:"h2"},"WebSocket")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JSON format for events sent from websocket server and Code Builder APIs updated to hierarchical JSON format instead of flat format"),(0,r.yg)("li",{parentName:"ul"},"Less useful properties removed with block and item IDs moved to newer name-based format instead of numerical format"),(0,r.yg)("li",{parentName:"ul"},'Agent-based commands in websockets moved to new "action:agent" format, and all commands are now queued and include unique ids to correlate responses'),(0,r.yg)("li",{parentName:"ul"},'Any future breaking changes to websocket and Code Builder APIs will now result in the "protocolVersion" being incremented')),(0,r.yg)("h2",{id:"molang"},(0,r.yg)("strong",{parentName:"h2"},"Molang")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Molang expressions inside animation scripts for actor resource definition (pre","_","animation and initialize) that contain capital letters are properly evaluated now with format","_","version 1.18.20 or higher"),(0,r.yg)("li",{parentName:"ul"},"Clarified documentation for query.is","_","item","_","name","_","any that the slot index is required when there is more than one slot, i.e. the hotbar"),(0,r.yg)("li",{parentName:"ul"},"Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.18.20 or higher"),(0,r.yg)("li",{parentName:"ul"},"For example,\xa0",(0,r.yg)("em",{parentName:"li"},"A && B || C_now evaluates as\xa0"),"(A && B) || C",(0,r.yg)("em",{parentName:"li"},"\xa0and\xa0_A \\< B == C ",">"," D"),"\xa0now evaluates as\xa0",(0,r.yg)("em",{parentName:"li"},"(A \\< B) == (C ",">"," D)"))))),(0,r.yg)("h2",{id:"gametest-framework-experimental"},(0,r.yg)("strong",{parentName:"h2"},"GameTest Framework (Experimental)")),(0,r.yg)("p",null,"New Module! We added a ",(0,r.yg)("strong",{parentName:"p"},"mojang-minecraft-ui")," module with API structures for creating simple dialog boxes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"Added")," ",(0,r.yg)("em",{parentName:"li"},"ActionFormData/ModalFormData/MessageFormData")," types in the mojang-minecraft-ui namespace. Documentation is available on ",(0,r.yg)("a",{parentName:"li",href:"https://docs.microsoft.com/minecraft/creator/scriptapi/mojang-minecraft-ui/mojang-minecraft-ui"},"the Minecraft Creator documentation site"),"."),(0,r.yg)("li",{parentName:"ul"},"Removed 'Minecraft' and 'GameTest' imports; please use 'mojang-minecraft' and 'mojang-gametest'")),(0,r.yg)("h2",{id:"mojang-minecraft-module-updates"},(0,r.yg)("strong",{parentName:"h2"},"mojang-minecraft module updates:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"World",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Changed return type of function\xa0",(0,r.yg)("em",{parentName:"li"},"getPlayers__to"),"\xa0",(0,r.yg)("em",{parentName:"li"},"PlayerIterator")),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"playSound(soundName: String, soundOptions: SoundOptions): void"),"-"," plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"queueMusic(trackName : string, musicOptions : MusicOptions)")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"playMusic(trackName : string, musicOptions : MusicOptions)")),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"stopMusic()")),(0,r.yg)("li",{parentName:"ul"},"Added MusicOptions JS class with ",(0,r.yg)("em",{parentName:"li"},"volume__,")," ",(0,r.yg)("em",{parentName:"li"},"fadeSeconds")," and ",(0,r.yg)("em",{parentName:"li"},"loop")," properties  "))),(0,r.yg)("li",{parentName:"ul"},"Dimension",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added\xa0_id_property"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0_MinecraftDimensionTypes_with constants for built-in dimension IDs"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0_spawnItem_to spawn an ItemStack in the dimension  "))),(0,r.yg)("li",{parentName:"ul"},"Player",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function ",(0,r.yg)("em",{parentName:"li"},"playSound(soundID : String, soundOptions : SoundOptions)")," - Plays a sound for a player, cannot be heard by entities other than that specific player  "))),(0,r.yg)("li",{parentName:"ul"},"Events",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Updated property\xa0",(0,r.yg)("em",{parentName:"li"},"direction_to\xa0_blockFace"),"\xa0in world.events.beforeItemUseOn and world.events.itemUseOn"),(0,r.yg)("li",{parentName:"ul"},"Added event ",(0,r.yg)("em",{parentName:"li"},"beforeDataDrivenEntityTriggerEvent")," ","-"," Fires before the data driven trigger is applied"),(0,r.yg)("li",{parentName:"ul"},"Added event ",(0,r.yg)("em",{parentName:"li"},"dataDrivenEntityTriggerEvent")," - Fires after the data driven trigger is applied"),(0,r.yg)("li",{parentName:"ul"},"Added ",(0,r.yg)("em",{parentName:"li"},"event"),"\xa0",(0,r.yg)("em",{parentName:"li"},"entityHit(entityHitEvent: EntityHitEvent, options?: EntityEventOptions)")," - Fires when an entity or block is hit by another entity"),(0,r.yg)("li",{parentName:"ul"},"Added event\xa0",(0,r.yg)("em",{parentName:"li"},"entityHurt(entityHurtEvent: EntityHurtEvent, options?: EntityEventOptions)"),"-"," Fires when an entity takes damage"),(0,r.yg)("li",{parentName:"ul"},"Added event ",(0,r.yg)("em",{parentName:"li"},"leverActivate")," - fires when a lever is toggled"),(0,r.yg)("li",{parentName:"ul"},"BlockExplodeEvent - Removed property destroyedBlockPermutation  "))),(0,r.yg)("li",{parentName:"ul"},"DefinitionModifier - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"componentGroupsToAdd__: string","[","]")," - List of component groups that will be added as part of this modifier"),(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"componentGroupsToRemove__: string","[","]")," - List of component groups that will be removed as part of this modifier"),(0,r.yg)("li",{parentName:"ul"},"property\xa0",(0,r.yg)("em",{parentName:"li"},"triggers__: Trigger","[","]")," - List of triggers that will fire as part of this modifier  "))),(0,r.yg)("li",{parentName:"ul"},"Trigger - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"property\xa0",(0,r.yg)("em",{parentName:"li"},"eventName__: string")," - Event name of the trigger  "))),(0,r.yg)("li",{parentName:"ul"},"DataDrivenEntityTriggerEvent - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"entity__: Entity")," - Entity that the event triggered on"),(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"id__: string")," - name of the event  "))),(0,r.yg)("li",{parentName:"ul"},"BeforeDataDrivenEntityTriggerEvent - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"entity__: Entity")," - Entity that the event triggered on"),(0,r.yg)("li",{parentName:"ul"},"read only property\xa0",(0,r.yg)("em",{parentName:"li"},"id__: string")," - name of the event"),(0,r.yg)("li",{parentName:"ul"},"property\xa0",(0,r.yg)("em",{parentName:"li"},"modifiers__: DefinitionModifier","[","]")," - List of modifiers that will be applied when the event triggers"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"property"),"\xa0",(0,r.yg)("em",{parentName:"li"},"cancel__: bool")," - If true, the event will not be triggered  "))),(0,r.yg)("li",{parentName:"ul"},"EntityDataDrivenTriggerEventOptions - Added and inherited from EntityEventOptions",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"property\xa0",(0,r.yg)("em",{parentName:"li"},"eventTypes__: string","[","]")," ","-"," If specified, will restrict to events with the specified name (i.e.,\xa0",(0,r.yg)("em",{parentName:"li"},"minecraft:ageable","_","grow","_","up"),")  "))),(0,r.yg)("li",{parentName:"ul"},"EntityType",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"id: string"),"-"," The identifier for the entity type  "))),(0,r.yg)("li",{parentName:"ul"},"EntityTypes",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"get(identifier: string): EntityType"),"-"," Returns the corresponding EntityType for the given identifier"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getAll(): EntityTypeIterator"),"-"," Returns an iterator containing all registered entity types  "))),(0,r.yg)("li",{parentName:"ul"},"MinecraftEntityTypes",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Provides EntityType constants for each standard Minecraft entity type  "))),(0,r.yg)("li",{parentName:"ul"},"EnchantmentType - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Read-only property\xa0i",(0,r.yg)("em",{parentName:"li"},"d__: string")," - The name of the enchantment type"),(0,r.yg)("li",{parentName:"ul"},"Read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"maxLevel__: int")," - The maximum level this type of enchantment can have  "))),(0,r.yg)("li",{parentName:"ul"},"EnchantentInstance - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"Constructor"),"\xa0",(0,r.yg)("em",{parentName:"li"},"EnchantmentInstance(type: EnchantmentType, level : int)")),(0,r.yg)("li",{parentName:"ul"},"Read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"type__: EnchantmentType")," - The enchantment type of this instance"),(0,r.yg)("li",{parentName:"ul"},"Property\xa0",(0,r.yg)("em",{parentName:"li"},"level__: int")," - The level of this enchantment instance  "))),(0,r.yg)("li",{parentName:"ul"},"EnchantmentSlot - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Represents the item slot or type that an enchantment can be applied to  "))),(0,r.yg)("li",{parentName:"ul"},"EnchantmentList - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Represents a collection of enchantments that can be applied to an item"),(0,r.yg)("li",{parentName:"ul"},"Constructor\xa0",(0,r.yg)("em",{parentName:"li"},"EnchantmentList(slot : EnchantSlot)")),(0,r.yg)("li",{parentName:"ul"},"Read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"slot__: EnchantSlot")," - The item slot/type that this collection is applied to"),(0,r.yg)("li",{parentName:"ul"},"Read-only property\xa0",(0,r.yg)("em",{parentName:"li"},"allEnchantments__: EnchantmentInstance","[","]")," - All enchantments as part of this enchantment collection"),(0,r.yg)("li",{parentName:"ul"},"Method\xa0",(0,r.yg)("em",{parentName:"li"},"canAddEnchantment(instance : EnchantmentInstance)__: bool")," - Returns whether or not the provided EnchantmentInstance can be added to this collection"),(0,r.yg)("li",{parentName:"ul"},"Method\xa0",(0,r.yg)("em",{parentName:"li"},"addEnchantment(instance : EnchantmentInstance)__: bool")," - Attempts to add the enchantment to this collection. Returns true if successful"),(0,r.yg)("li",{parentName:"ul"},"Method\xa0",(0,r.yg)("em",{parentName:"li"},"removeEnchantment(type : EnchantmentType)"),"-"," Removes an EnchantmentInstance with type\xa0type\xa0from this collection if present"),(0,r.yg)("li",{parentName:"ul"},"Method\xa0",(0,r.yg)("em",{parentName:"li"},"hasEnchantment(type : EnchantmentType)__: int")," - If this collection has an EnchantmentInstance with type\xa0type, returns the level of the enchantment. Returns 0 if not present  "))),(0,r.yg)("li",{parentName:"ul"},"ItemStack",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"setLore(loreList: string","[","]","): void"),"-"," Sets the lore text for the item"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"getLore(): string","[","]"),"-"," Gets the lore text for the item"),(0,r.yg)("li",{parentName:"ul"},"Added\xa0_nameTag_property  "))),(0,r.yg)("li",{parentName:"ul"},"ItemEnchantmentComponent - Added",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Property\xa0",(0,r.yg)("em",{parentName:"li"},"enchantments__: EnchantmentList")," - Gets a copy of the current set of enchantments on this ItemStack. Or allows the user to set the EnchantmentList for the ItemStack"),(0,r.yg)("li",{parentName:"ul"},"Method\xa0",(0,r.yg)("em",{parentName:"li"},"removeAllEnchantments"),"-"," Removes any enchantments that might be present on this ItemStack  "))),(0,r.yg)("li",{parentName:"ul"},"Vector - Added numerous new helper functions",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"length(): number"),"-"," Returns the length of this vector"),(0,r.yg)("li",{parentName:"ul"},"Added function\xa0",(0,r.yg)("em",{parentName:"li"},"normalized(): Vector"),"-"," Returns this as a normalized vector"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"distance(a:Vector, b:Vector): number"),"-"," Returns distance between two vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"lerp(a:Vector, b:Vector, t: number): Vector"),"-"," Returns the linear interpolation between a and b using t as the control"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"slerp(a:Vector, b:Vector, s: number): Vector"),"-"," Returns the spherical linear interpolation between a and b using s as the control"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"cross(a:Vector, b:Vector): Vector"),"-"," Returns the cross product of these two vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"add(a:Vector, b:Vector): Vector"),"-"," Returns the addition of these vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"subtract(a:Vector, b:Vector): Vector"),"-"," Returns the subtraction of these vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"multiply(a:Vector, b:Vector): Vector"),"-"," Returns the component-wise product of these vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"divide(a:Vector, b:Vector): Vector"),"-"," Returns the component-wise division of these vectors"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"multiply(a:Vector, b:number): Vector"),"-"," Returns the product of this vector and a scalar"),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"divide(a:Vector, b:number): Vector"),"-"," Returns the division of this vector and a scalar"),(0,r.yg)("li",{parentName:"ul"},"Added static ",(0,r.yg)("em",{parentName:"li"},"function"),"\xa0",(0,r.yg)("em",{parentName:"li"},"min(a:Vector, b:Vector): Vector"),"-"," Returns a vector that is made from the smallest components of two vectors."),(0,r.yg)("li",{parentName:"ul"},"Added static function\xa0",(0,r.yg)("em",{parentName:"li"},"max(a:Vector, b:Vector): Vector"),"-"," Returns a vector that is made from the largest components of two vectors  "))),(0,r.yg)("li",{parentName:"ul"},"EntityItemComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Added component\xa0_EntityItemComponent_that can be used to obtain an ItemStack from an item entity \u2013 e.g., _getComponent(\u201citem\u201d).itemStack  ","_"))),(0,r.yg)("li",{parentName:"ul"},"BlockInventoryComponent",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Fixed accessing items in a double chest crashing/being inconsistent  "))),(0,r.yg)("li",{parentName:"ul"},"Exposed the following components for Entities:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:can","_","climb")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:can","_","fly")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:can","_","power","_","jump")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:fire","_","immune")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:floats","_","in","_","liquid")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","dyable")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","baby")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","charged")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","chested")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","hidden","_","when","_","invisible")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","ignited")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","illager","_","captain")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","saddled")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","shaking")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","sheared")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","stackable")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","stunned")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:is","_","tamed")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:wants","_","jockey")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:variant")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:skin","_","id")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:mark","_","variant")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:friction","_","modifier")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:ground","_","offset")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:scale")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"minecraft:push","_","through"))))),(0,r.yg)("h2",{id:"mojang-gametest-module"},(0,r.yg)("strong",{parentName:"h2"},"mojang-gametest module:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Removed\xa0",(0,r.yg)("em",{parentName:"li"},"radius_argument from command\xa0"),"/gametest clearall_"),(0,r.yg)("li",{parentName:"ul"},"Modified the behavior of function\xa0_attack()_to make the simulated player swing even when no target is found")))}d.isMDXComponent=!0},57350:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>m,metadata:()=>p,toc:()=>d});var n=a(58168),r=a(96540),i=a(15680),o=a(18228),l=a(19365);const m={},s=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},d=[],u={toc:d},g="wrapper";function y(e){let{components:t,...a}=e;return(0,i.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(r.Fragment,null,void 0!==a.techSapiDiff?(0,i.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,i.yg)(l.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,i.yg)(l.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,i.yg)(r.Fragment,null,a.techSapi)))}y.isMDXComponent=!0}}]);