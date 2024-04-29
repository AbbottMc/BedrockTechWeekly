"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[33415,29933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),c=a(67392),d=a(50012);function u(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:r}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var g=a(72389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),r=c[a].value;r!==i&&(u(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},57791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));a(47153);const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.19/20/tech",id:"changelog_source/stable/1.19/20/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.19/20/tech.mdx",sourceDirName:"changelog_source/stable/1.19/20",slug:"/changelog_source/stable/1.19/20/tech",permalink:"/docs/changelog_source/stable/1.19/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/20/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>General</strong>",id:"general",level:2},{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updated-add-on-template-packs"},(0,n.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Updated Add-On templates for19.20 with new resources, behaviors, and documentation, are available to download at ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddonPacks",(0,n.kt)("br",{parentName:"a"})))),(0,n.kt)("h2",{id:"general"},(0,n.kt)("strong",{parentName:"h2"},"General")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a Disconnect Packet vulnerability used to crash Bedrock Server"),(0,n.kt)("li",{parentName:"ul"},"Blocks with ",(0,n.kt)("em",{parentName:"li"},"their"),"\xa0",(0,n.kt)("em",{parentName:"li"},"render","_","method_component set to\xa0_double","_","sided")," now have their back faces properly rendered"),(0,n.kt)("li",{parentName:"ul"},"Limit the number of elements in the conditionsfield of the minecraft:part","_","visibility to 64"),(0,n.kt)("li",{parentName:"ul"},"Renamed minecraft:aim","_","collisionblock component to minecraft:selection","_","box"),(0,n.kt)("li",{parentName:"ul"},"renamed the 'minecraft:block","_","light","_","emission' component to 'minecraft:light","_","emission' and changed its accepted value type from float to int"),(0,n.kt)("li",{parentName:"ul"},"Renamed 'minecraft:destroy","_","time' to 'minecraft:destructible","_","by","_","mining' and restructured the component to be either defined as a boolean or as an object"),(0,n.kt)("li",{parentName:"ul"},"Setting the component to true will give the block the default destroy time and setting it to false will make the block indestructible by mining"),(0,n.kt)("li",{parentName:"ul"},"Setting the component as an object will let users define the number of seconds needed to destroy the block with base equipment"),(0,n.kt)("li",{parentName:"ul"},"Changed the minecraft:frictioncomponent to represent friction of block instead of movement"),(0,n.kt)("li",{parentName:"ul"},"Removed the component\xa0",(0,n.kt)("em",{parentName:"li"},"minecraft:unwalkable")),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"'minecraft:explosion","_","resistance'")," to ",(0,n.kt)("em",{parentName:"li"},"'minecraft:destructible","_","by","_","explosion'")," and restructured the component to be either defined as a boolean or as an object",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Setting the component to true will give the block the default ",(0,n.kt)("em",{parentName:"li"},"explosion","_","resistance")," and setting it to false will make the block indestructible by explosion"),(0,n.kt)("li",{parentName:"ul"},"Setting the component as an object will let users define the resistance of the block to a base explosion"))),(0,n.kt)("li",{parentName:"ul"},"Added /tagsfromitem and /itemswithtag commands which output the tags associated with an item and vice versa"),(0,n.kt)("li",{parentName:"ul"},'Added a new dedicated server property, "chat-restriction", that can be modified in the "server.properties" file to restrict the chat for all players connecting to the server. The property\'s possible values are "None", "Dropped", and "Disabled". See the default file for more information'),(0,n.kt)("li",{parentName:"ul"},'Server developers can now see checksums of the block registry from the server and client to check for mismatch (search "Block Registry Checksum" in the output logs and compare)'),(0,n.kt)("li",{parentName:"ul"},"Added a server property disable-player-interaction which informs clients that they should ignore other players when interacting with the world"),(0,n.kt)("li",{parentName:"ul"},"Modified the ",(0,n.kt)("em",{parentName:"li"},"json")," entity file so that it also contains projectile damage in addition to the explosion and fire damage (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-153740"},"MCPE-153740"),")"),(0,n.kt)("li",{parentName:"ul"},"Items with the\xa0_item","_","lock_component can no longer be placed in Item Frames or Armor Stands (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-138479"},"MCPE-138479"),")")),(0,n.kt)("h2",{id:"actor-properties"},(0,n.kt)("strong",{parentName:"h2"},"Actor Properties")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added Content Errors for when there are too many properties on the actor (more than 32) or when a string enum name is too long (more than 32 characters)"),(0,n.kt)("li",{parentName:"ul"},"Added new Molang ",(0,n.kt)("em",{parentName:"li"},"had","_","component","_","group")," to allow calculating appropriate default values from previously saved entity data"),(0,n.kt)("li",{parentName:"ul"},"Renamed ",(0,n.kt)("em",{parentName:"li"},"'actor","_","property'")," and ",(0,n.kt)("em",{parentName:"li"},"'has","_","actor","_","property'")," Molang queries to ",(0,n.kt)("em",{parentName:"li"},"'property'")," and ",(0,n.kt)("em",{parentName:"li"},"'has","_","property'"),". Also renamed ",(0,n.kt)("em",{parentName:"li"},"'set","_","actor","_","property'")," to ",(0,n.kt)("em",{parentName:"li"},"'set","_","property'")),(0,n.kt)("li",{parentName:"ul"},"Update ",(0,n.kt)("em",{parentName:"li"},"'set","_","property'")," to only allow changing properties on the local actor rather than some other target"),(0,n.kt)("li",{parentName:"ul"},"Restored ability to use a Molang expression string for default values of Actor Properties (These are primarily useful for random starting values)")),(0,n.kt)("h2",{id:"gametest-framework"},(0,n.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Performance Watchdog",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added a performance watchdog that monitors GameTests for slow-running scripts"),(0,n.kt)("li",{parentName:"ul"},"Executing a slow-running script will result in content log warnings"),(0,n.kt)("li",{parentName:"ul"},"Additionally, long script hangs (more than 3 seconds in a single tick) will result in an exception"),(0,n.kt)("li",{parentName:"ul"},"Added new properties to\xa0propertiesfor watchdog configuration on Dedicated Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"script-watchdog-enable- Enables the watchdog (default = true)"),(0,n.kt)("li",{parentName:"ul"},"script-watchdog-hang-threshold- Sets the watchdog threshold for single tick hangs (default = 3000 ms)"),(0,n.kt)("li",{parentName:"ul"},"script-watchdog-spike-threshold- Sets the watchdog threshold for single tick spikes (default = 100 ms)"),(0,n.kt)("li",{parentName:"ul"},"script-watchdog-slow-threshold- Sets the watchdog threshold for slow scripts over multiple ticks (default = 2ms)"))),(0,n.kt)("li",{parentName:"ul"},"Updated\xa0mojang-minecraft-uiforms to respond when the client was unable to show a modal form",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Renamed\xa0isCanceledfield to\xa0canceled"),(0,n.kt)("li",{parentName:"ul"},"Added\xa0cancelationReasonfield"),(0,n.kt)("li",{parentName:"ul"},"Added\xa0FormCancelationReasonenum"))),(0,n.kt)("li",{parentName:"ul"},"ScoreboardObjectiveDisplayOptions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added 'ScoreboardObjectiveDisplayOptions' class"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property 'Objective: objective'"),(0,n.kt)("li",{parentName:"ul"},"Added read-only property 'ObjectiveSortOrder: sortOrder'"))),(0,n.kt)("li",{parentName:"ul"},"Scoreboard",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added function 'removeObjective(objectiveId: string | Objective): void' - Untracks an objective"),(0,n.kt)("li",{parentName:"ul"},"Added function 'addObjective(objectiveId: string, displayName: string): Objective' - Creates and objective to be tracked, identified with objectiveId and displayed on the screen with displayName"),(0,n.kt)("li",{parentName:"ul"},"Added function 'getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions' - Gets objective and sort order contained in the DisplayObjective slot specified by displaySlotId"),(0,n.kt)("li",{parentName:"ul"},"Added function 'setObjectiveAtDisplaySlot(displaySlotId: string, ",(0,n.kt)("em",{parentName:"li"},"ScoreboardObjectiveDisplayOptions"),": scoreboardObjectiveDisplayOptions): Objective' - Sets the objective and sort order of the display slot, as specified by displaySlotId"),(0,n.kt)("li",{parentName:"ul"},"Added function 'clearObjectiveAtDisplaySlot(displaySlotId: string): Objective' - Clear's the DisplayObjective of the objective it is currently displaying"))),(0,n.kt)("li",{parentName:"ul"},"Block",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Added Block SignComponent that allows for retrieving of the value of sign text - Accessible from\xa0getComponent("sign")on sign blocks'))),(0,n.kt)("li",{parentName:"ul"},"BlockSignComponent",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added read-only property\xa0text: string- Gets the sign text"))),(0,n.kt)("li",{parentName:"ul"},"System Events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Added event\xa0",(0,n.kt)("em",{parentName:"li"},"beforeWatchdogTerminate"),"-"," Shuts down the server when a critical scripting exception occurs (e.g. script hang). Can be canceled to prevent shutdown"),(0,n.kt)("li",{parentName:"ul"},"Added enum\xa0",(0,n.kt)("em",{parentName:"li"},"WatchdogTerminateReason"),"-"," Specifies the reason for watchdog termination"),(0,n.kt)("li",{parentName:"ul"},"Added new properties to\xa0_properties_for watchdog configuration on Bedrock Dedicated Server",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"script-watchdog-enable-exception-handling"),"-"," Enables watchdog exception handling via the\xa0",(0,n.kt)("em",{parentName:"li"},"events.beforeWatchdogTerminate"),"\xa0event (default = true)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"script-watchdog-enable-shutdown"),"-"," Enables server shutdown in the case of an unhandled watchdog exception (default = true)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"script-watchdog-hang-exception"),"-"," Throws a critical exception when a hang occurs (default = true)")))))))))}u.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),i=a(85162);const s={},c=void 0,d={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],m={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Fragment,null,void 0!==a.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,o.kt)(n.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);