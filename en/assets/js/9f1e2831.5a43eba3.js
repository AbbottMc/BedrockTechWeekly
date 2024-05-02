"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[92488,81791,81686,22845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),m=n(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??u;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var k=n(72389);const f="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c,rightElement:m}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==l&&(p(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},i,{className:(0,o.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t}),style:{wordBreak:"keep-all"}}),n??t)})),m?r.createElement("div",{className:"w-full"},m):void 0)}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function _(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(_,(0,a.Z)({key:String(t)},e))}},90045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(16769),i=(n(80723),n(9071));const l={},s=void 0,c={unversionedId:"changelog_source/preview/1.20/0/22/tech",id:"changelog_source/preview/1.20/0/22/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/22/tech.mdx",sourceDirName:"changelog_source/preview/1.20/0/22",slug:"/changelog_source/preview/1.20/0/22/tech",permalink:"/en/docs/changelog_source/preview/1.20/0/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/22/tech.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Bedrock Editor</strong>",id:"bedrock-editor",level:2},{value:"<strong>Items</strong>",id:"items",level:2},{value:"<strong>Add-Ons</strong>",id:"add-ons",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Pumpkin blocks use the string type state "minecraft:cardinal',"_",'direction" instead of the int type "direction" state')),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Has item command selector now correctly detects whether or not an actor has a filled Map or Firework Star in their inventory"),(0,r.kt)("li",{parentName:"ul"},'The "inputpermission" command now has a description displayed in the command dialogue preview')),(0,r.kt)("h2",{id:"bedrock-editor"},(0,r.kt)("strong",{parentName:"h2"},"Bedrock Editor")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the default command permission level of the client differed from what was displayed in a multiplayer session"),(0,r.kt)("li",{parentName:"ul"},"Tool mode movement will now use the vanilla keyboard controls instead of hardcoded W/A/S/D/Space/Shift keys. Movement bindings can now be customized from the settings menu, but some keys might not be available if they are being used by other editor actions")),(0,r.kt)("h2",{id:"items"},(0,r.kt)("strong",{parentName:"h2"},"Items")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Custom items with 'minecraft:record' show the correct sound description in hover text and on playing in a Jukebox")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"add-ons"},(0,r.kt)("strong",{parentName:"h2"},"Add-Ons")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Changed "minecraft:cardinal',"_",'direction" and "minecraft:facing',"_",'direction" states from int to string type.',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"minecraft:cardinal',"_",'direction" has four values ',"[",'"north", "south", "east", "west"',"]"),(0,r.kt)("li",{parentName:"ul"},'"minecraft:facing',"_",'direction" has six values ',"[",'"down", "up", "north", "south", "east", "west"',"]"))),(0,r.kt)("li",{parentName:"ul"},"Added a new experimental Cameras toggle to allow for custom camera perspectives"),(0,r.kt)("li",{parentName:"ul"},'Removed "knockback',"_",'resistance" item component')),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(i.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,r.kt)("h2",{id:"commands-1"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added /camera command as part of the experimental Cameras toggle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This command can switch to custom camera perspectives or fade the screen"))),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("em",{parentName:"li"},"/help camera"),"\xa0to get a full list of options")))}d.isMDXComponent=!0},16769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/22/tech_sapi_exp",id:"changelog_source/preview/1.20/0/22/tech_sapi_exp",title:"tech_sapi_exp",description:"-   New APIs moved from beta to stable @minecraft/server 1.2.0:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.20/0/22",slug:"/changelog_source/preview/1.20/0/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.20/0/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New APIs moved from beta to stable @minecraft/server 1.2.0:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"kill(): boolean_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"EntityApplyDamageOptions_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"EntityApplyDamageByProjectileOptions_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"EntityDamageCause_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"addTag(tag: string)_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"removeTag(tag: string)_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"hasTag(tag: string)_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"getTags()_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"Container_and\xa0_BlockInventoryComponent"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"EntityInventoryComponent"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"2.0")),(0,r.kt)("li",{parentName:"ul"},"Moved Music APIs from beta to stable"),(0,r.kt)("li",{parentName:"ul"},"Moved Sound APIs from beta to stable"),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ModalFormData"),",\xa0",(0,r.kt)("em",{parentName:"li"},"MessageFormData"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"ActionFormData_to\xa0_0.0")),(0,r.kt)("li",{parentName:"ul"},"Fixed bug in response of\xa0",(0,r.kt)("em",{parentName:"li"},"MessageFormResponse_where\xa0_selection"),"\xa0was inverted from which button was selected.\xa0",(0,r.kt)("em",{parentName:"li"},"button1"),"\xa0now refers to the left button and results in a\xa0",(0,r.kt)("em",{parentName:"li"},"selection"),"\xa0of 0 and\xa0",(0,r.kt)("em",{parentName:"li"},"button2"),"\xa0now refers to the right button and results in a\xa0",(0,r.kt)("em",{parentName:"li"},"selection"),"\xa0of 1"),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"ItemStack_constructor and getter APIs to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"EntityItemComponent"),",\xa0",(0,r.kt)("em",{parentName:"li"},"ItemComponent"),",\xa0",(0,r.kt)("em",{parentName:"li"},"ItemType_and\xa0_ItemLockMode"),"\xa0to\xa0",(0,r.kt)("em",{parentName:"li"},"2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"applyImpulse(vector: Vector3): void_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moving\xa0",(0,r.kt)("em",{parentName:"li"},"clearVelocity(): void_to\xa0_2.0")),(0,r.kt)("li",{parentName:"ul"},"Moved\xa0",(0,r.kt)("em",{parentName:"li"},"runCommand_from beta to\xa0_2.0")))),(0,r.kt)("li",{parentName:"ul"},"Enchantments",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed MinecraftEnchantmentTypes class. Use MinecraftEnchantmentTypes from @minecraft/vanilla-data module for minecraft version specific information."),(0,r.kt)("li",{parentName:"ul"},'Added support for "strings" in all Enchantment methods for specifying the enchantment type'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"source_on\xa0_ExplosionBeforeEvent"),"\xa0is now an optional property because explosions may not have a source"),(0,r.kt)("li",{parentName:"ul"},"Tameable Component",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed unimplemented\xa0",(0,r.kt)("em",{parentName:"li"},"tameEvent_from\xa0_TameableComponent")))),(0,r.kt)("li",{parentName:"ul"},"Updated API to better handle operations outside of loaded and ticking areas"),(0,r.kt)("li",{parentName:"ul"},"PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore"),(0,r.kt)("li",{parentName:"ul"},"PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range"),(0,r.kt)("li",{parentName:"ul"},"Dimension",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getBlock now returns an optional Block to reflect it might return 'undefined' if asking for a block at an unloaded chunk"))),(0,r.kt)("li",{parentName:"ul"},"Signs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added optional\xa0",(0,r.kt)("em",{parentName:"li"},"SignSide_parameter to functions\xa0_setText"),",\xa0",(0,r.kt)("em",{parentName:"li"},"getText"),",\xa0",(0,r.kt)("em",{parentName:"li"},"getRawText"),",\xa0",(0,r.kt)("em",{parentName:"li"},"setTextDyeColor"),", and\xa0",(0,r.kt)("em",{parentName:"li"},"getTextDyeColor"),"\xa0on\xa0",(0,r.kt)("em",{parentName:"li"},"BlockSignComponent"),"\xa0to support getting and setting text and colors on both sides of signs."),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"isWaxed_property to\xa0_BlockSignComponent"),"\xa0indicating whether players can edit the sign or not."),(0,r.kt)("li",{parentName:"ul"},"Added\xa0",(0,r.kt)("em",{parentName:"li"},"setWaxed_method to\xa0_BlockSignComponent"),"\xa0to block players from editing the sign."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"runCommand_and\xa0_runCommandAsync"),"\xa0on\xa0",(0,r.kt)("em",{parentName:"li"},"Dimension"),"\xa0and\xa0",(0,r.kt)("em",{parentName:"li"},"Entity"),"\xa0can now fail with a\xa0",(0,r.kt)("em",{parentName:"li"},"CommandError"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"runCommand_can throw a\xa0_CommandError"),"\xa0exception"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"runCommandAsync_will pass a\xa0_CommandError"),"\xa0into the reject handler")))))}u.isMDXComponent=!0},80723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/0/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.20/0/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/0/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.20/0/22",slug:"/changelog_source/preview/1.20/0/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.20/0/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/0/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},s={},c=[],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(31792),i=n(85162);const l={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}d.isMDXComponent=!0}}]);