"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20925,29933,16439,78934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),c=a(67392),m=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[u,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(72389);const k="tabList_TRJ7",b="tabItem_hGfb";function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c,rightElement:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),a??t)})),m?r.createElement("div",{className:"w-full"},m):void 0)}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},16321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(79868),i=(a(5833),a(47153));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/10/20/tech",id:"changelog_source/preview/1.20/10/20/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.20/10/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/10/20",slug:"/changelog_source/preview/1.20/10/20/tech",permalink:"/docs/changelog_source/preview/1.20/10/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/20/tech.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Editor</strong>",id:"editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Stability and Performance</strong>",id:"stability-and-performance",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine-1",level:2},{value:"<strong>Items</strong>",id:"items-1",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Camera</strong>",id:"camera",level:2},{value:"<strong>Items</strong>",id:"items-2",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added deprecation error message for the\xa0",(0,r.kt)("em",{parentName:"li"},"part","_","visibility_component (the\xa0_bone","_","visibility"),"\xa0field in the geometry component should be used instead, see block documentation for more information)"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where adding a\xa0_minecraft:peek_component to a custom entity would cause the game to crash")),(0,r.kt)("h2",{id:"blocks"},(0,r.kt)("strong",{parentName:"h2"},"Blocks")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Updated the "minecraft:geometry" block component to allow bone visibility to be defined with a Molang expression')),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Executing the "inputpermission set" command will now output a message to the chat with the results (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168368"},"MCPE-168368"),")"),(0,r.kt)("li",{parentName:"ul"},'Executing the "inputpermission set" command will now result in an error if it does not affect any players'),(0,r.kt)("li",{parentName:"ul"},"Command positions will now use the current position/rotation when running mcfunctions via execute"),(0,r.kt)("li",{parentName:"ul"},"Fixed issue where some execute commands stopped working on Realms (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169974"},"MCPE-169974"),")"),(0,r.kt)("li",{parentName:"ul"},'The "hasitem" target selector argument now counts items held with the cursor (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-152002"},"MCPE-152002"),")"),(0,r.kt)("li",{parentName:"ul"},'Commands will still work with "concrete", but "concrete" won\'t be suggested in the command prompt, rather the new names will',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"concrete" block is now split into unique instances, namely "white',"_",'concrete", "orange',"_",'concrete", "magenta',"_",'concrete", "light',"_","blue","_",'concrete", "yellow',"_",'concrete", "lime',"_",'concrete", "pink',"_",'concrete", "gray',"_",'concrete", "light',"_","gray","_",'concrete", "cyan',"_",'concrete", "purple',"_",'concrete", "blue',"_",'concrete", "brown',"_",'concrete", "green',"_",'concrete", "red',"_",'concrete", and "black',"_",'concrete"'))),(0,r.kt)("li",{parentName:"ul"},"Java Parity: Block states in commands will use equals instead of colon in version 1.20.0 and later. For example using the setblock command: /setblock ~ ~ ~ oak","_","log","[",'"pillar',"_",'axis"="x"',"]"," (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168056"},"MCPE-168056"),")"),(0,r.kt)("li",{parentName:"ul"},"Block states with equals don't require a space to show autocomplete options (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168056"},"MCPE-168056"),")")),(0,r.kt)("h2",{id:"components"},(0,r.kt)("strong",{parentName:"h2"},"Components")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added a content error when ",(0,r.kt)("em",{parentName:"li"},"minecraft:balloonable")," is used on ",(0,r.kt)("em",{parentName:"li"},"minecraft:player")," to prevent issues as this component is not supported in this way (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164495"},"MCPE-164495"),")")),(0,r.kt)("h2",{id:"editor"},(0,r.kt)("strong",{parentName:"h2"},"Editor")),(0,r.kt)("p",null,"The Editor is in early development, and available for keyboard/mouse on Windows PC Bedrock Preview builds. Learn ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/LearnEditor"},"how to use")," the Editor and join the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mojang/minecraft-editor/discussions"},"GitHub Discussion")," forum, post bugs, view more detailed release notes. Tag us on social channels with ",(0,r.kt)("strong",{parentName:"p"},"#BedrockEditor.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolved an issue where the selection cursor was causing the glass block to render invisible"),(0,r.kt)("li",{parentName:"ul"},"Added Log Panel for Tool mode to display log messages. It can be accessed from the\xa0",(0,r.kt)("em",{parentName:"li"},"View_menu or by using the\xa0_CTRL+H"),"\xa0shortcut"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that prevented additional servers to be added from Servers Tab in Editor mode"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug that caused the gizmo to be hidden in Crosshair Mode")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released the ",(0,r.kt)("em",{parentName:"li"},"minecraft:cooldown")," item component out of experimental in json formats 1.20.10 and higher"),(0,r.kt)("li",{parentName:"ul"},"Released the ",(0,r.kt)("em",{parentName:"li"},"minecraft:repairable")," item component out of experimental in json formats 1.20.10 and higher")),(0,r.kt)("h2",{id:"stability-and-performance"},(0,r.kt)("strong",{parentName:"h2"},"Stability and Performance")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invalid JSON objects within the entity component ",(0,r.kt)("em",{parentName:"li"},'"minecraft:behavior.nearest',"_","attackable","_",'target"')," will no longer crash the game (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-168129"},"MCPE-168129"),")")),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"add-ons-and-script-engine-1"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Camera Presets can now specify ",(0,r.kt)("em",{parentName:"li"},'"listener":"player"')," to have the audio system use the player position for audio positioning",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},'"example:example',"_","player","_",'listener"')," Camera Preset to demonstrate this option")))),(0,r.kt)("h2",{id:"items-1"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Items with the "minecraft:block',"_",'placer" component will now place blocks with correct orientation')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"camera"},(0,r.kt)("strong",{parentName:"h2"},"Camera")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed camera command fade color to take integer values from 0 to 255 rather than 0.0 to 1.0 fractional values"),(0,r.kt)("li",{parentName:"ul"},"Camera fade command now enforces fade duration limits; fade in, hold, and fade out must be between 0 and 10 seconds"),(0,r.kt)("li",{parentName:"ul"},"Ensuring camera pitch can only be between -90 and 90 degrees when using the /camera command"),(0,r.kt)("li",{parentName:"ul"},'Fixed an issue where Minecraft Education players could not use the "/give" command to give a Camera item')),(0,r.kt)("h2",{id:"items-2"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Items in format version 1.20.10 and above with the ",(0,r.kt)("em",{parentName:"li"},"\u201dminecraft:throwable\u201d")," component will trigger Item Use events when thrown"),(0,r.kt)("li",{parentName:"ul"},"Custom items with ",(0,r.kt)("em",{parentName:"li"},'"minecraft:block',"_",'placer"')," will no longer place certain blocks in the wrong location"),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},'"minecraft:shooter"')," to only consume ammo when charging the item if ",(0,r.kt)("em",{parentName:"li"},'"charge',"_","on","_",'draw"'),' is set "',(0,r.kt)("em",{parentName:"li"},"true"),'"')))}d.isMDXComponent=!0},79868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/20/tech_sapi_exp",id:"changelog_source/preview/1.20/10/20/tech_sapi_exp",title:"tech_sapi_exp",description:"-   Dynamic properties can now optionally have default values",source:"@site/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/10/20",slug:"/changelog_source/preview/1.20/10/20/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic properties can now optionally have default values"),(0,r.kt)("li",{parentName:"ul"},"Increased Dynamic Property registration limits:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Actors: ~1KB -",">"," 128KB"),(0,r.kt)("li",{parentName:"ul"},"World: ~10KB -",">"," 1MB"))),(0,r.kt)("li",{parentName:"ul"},"ScreenDisplay",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed\xa0",(0,r.kt)("em",{parentName:"li"},"clearTitle()"),"-"," Use ",(0,r.kt)("em",{parentName:"li"},"setTitle")," with an empty string to clear the title"),(0,r.kt)("li",{parentName:"ul"},"Updated\xa0",(0,r.kt)("em",{parentName:"li"},"fadeInSeconds, staySeconds, fadeOutSeconds_to\xa0_fadeInDuration, stayDuration, fadeOutDuration"),"\xa0on TitleDisplayOptions (seconds to ticks)"),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"setTitle")," to reset the times per each new title"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"RawMessage")," support for ",(0,r.kt)("em",{parentName:"li"},"setTitle"),", ",(0,r.kt)("em",{parentName:"li"},"updateSubtitle"),", and ",(0,r.kt)("em",{parentName:"li"},"setActionBar")))),(0,r.kt)("li",{parentName:"ul"},"Entity additions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isGliding"),"-"," Returns whether the player is gliding with Elytra"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isJumping"),"-"," Returns whether the player is using the jump action"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isFlying"),"-"," Returns whether the player is flying (e.g. Creative or Spectator mode)"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isSprinting"),"-"," Returns whether the entity is sprinting"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isSwimming"),"-"," Returns whether the entity is swimming"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isClimbing"),"-"," Returns whether the entity is climbing (e.g. Player on a ladder or Spider on a wall)"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isOnGround"),"-"," Returns whether the entity is on the ground"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isInWater"),"-"," Returns whether the entity is in water"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isFalling"),"-"," Returns whether the entity is falling"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"fallDistance"),"-"," Returns the current fall distance (Used for calculating fall damage)"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"fly"),"-"," Makes the player fly (e.g. Creative or Spectator mode)"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"stopFlying"),"-"," Makes the player stop flying (e.g. Creative or Spectator mode)"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"glide"),"-"," Makes the player glide with Elytra"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"stopGliding"),"-"," Makes the player stop gliding with Elytra"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"swim"),"-"," Makes the player swim"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"stopSwimming"),"-"," Makes the player stop swimming"))),(0,r.kt)("li",{parentName:"ul"},"Entity additions (effects)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Updated function\xa0_addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void_to return void and to throw if the effect does not exist or the parameters are out of bounds"),(0,r.kt)("li",{parentName:"ul"},"Updated function\xa0_getEffect(effectType: EffectType | string): Effect | undefined_to throw if the effect does not exist"),(0,r.kt)("li",{parentName:"ul"},"Updated function\xa0_removeEffect(effectType: EffectType | string): boolean_to throw if the effect does not exist"))),(0,r.kt)("li",{parentName:"ul"},"BlockEvents",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added events ",(0,r.kt)("em",{parentName:"li"},"'PressurePlatePushEvent'"),", ",(0,r.kt)("em",{parentName:"li"},"'PressurePlatePopEvent'"),", ",(0,r.kt)("em",{parentName:"li"},"'TargetBlockHitEvent'"),", and ",(0,r.kt)("em",{parentName:"li"},"'TripWireTripEvent'")))),(0,r.kt)("li",{parentName:"ul"},"ContainerSlot",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"clone"),"-"," Please use function\xa0",(0,r.kt)("em",{parentName:"li"},"getItem"),"\xa0instead"))),(0,r.kt)("li",{parentName:"ul"},"EntityHealableComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed\xa0_filters: FilterGroup_property"))),(0,r.kt)("li",{parentName:"ul"},"EntityAttributeComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"effectiveMin: number")," Returns the minimum possible value for the component"),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"effectiveMax: number")," Return the maximum possible value for the component"),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"value_property to\xa0_defaultValue")),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"current_property to\xa0_currentValue")),(0,r.kt)("li",{parentName:"ul"},"Renamed\xa0",(0,r.kt)("em",{parentName:"li"},"setCurrent_method to\xa0_setCurrentValue")))),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"EntityHealthChangedAfterEvent"),". It is triggered when any health change happens for an Entity")))}u.isMDXComponent=!0},5833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/10/20/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/10/20/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/10/20",slug:"/changelog_source/preview/1.20/10/20/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/10/20/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=a(87462),r=a(67294),o=a(3905),i=a(31792),l=a(85162);const s={},c=void 0,m={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],d={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(i.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(l.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);