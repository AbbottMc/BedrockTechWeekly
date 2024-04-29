"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[79461,81791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),l=n(86010),o=n(12466),i=n(16550),u=n(91980),s=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var f=n(72389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},12814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(9071);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/40/20/tech",id:"changelog_source/preview/1.20/40/20/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.20/40/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/40/20",slug:"/changelog_source/preview/1.20/40/20/tech",permalink:"/en/docs/changelog_source/preview/1.20/40/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Commands",id:"commands",level:2},{value:"Components",id:"components",level:2},{value:"Molang",id:"molang",level:2},{value:"Trade Tables",id:"trade-tables",level:2},{value:"Script API",id:"script-api",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"User Interface",id:"user-interface",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the names of the ",(0,r.kt)("em",{parentName:"li"},"CameraSetOptions")," options to not include the word 'Script'")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Re-entering a world no longer breaks command autocomplete after a command using "@e',"[","type=item","]",'" was used (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164734"},"MCPE-164734"),")"),(0,r.kt)("li",{parentName:"ul"},'The /damage command with the "override" cause now causes damage through post hit invulnerability (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160290"},"MCPE-160290"),")"),(0,r.kt)("li",{parentName:"ul"},"The recipe command color has been changed to white instead of blue (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173362"},"MCPE-173362"),")")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a content error when attempting to load a damage sensor with an invalid "cause" value\xa0'),(0,r.kt)("li",{parentName:"ul"},'Allow single value parsing for "minecraft:icon" item component'),(0,r.kt)("li",{parentName:"ul"},"The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using \u201cminecraft:dash\u201d")),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Molang updated to version 1.20.40 which replaces "block',"_",'property" and "has',"_","block","_",'property" with "block',"_",'state" and "has',"_","block","_",'state"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.20.40 or higher")))),(0,r.kt)("h2",{id:"trade-tables"},"Trade Tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Trade items now have a "filters" property to determine if a trade should be considered\xa0'),(0,r.kt)("li",{parentName:"ul"},'Trade items no longer support the "biome" property to check villager biome types, the "is',"_","mark","_",'variant" filter can be used in the "filters" property instead to check the villager biome type')),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"script-api"},"Script API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("em",{parentName:"li"},"chat(message: string)")," method"),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"get")," to return ",(0,r.kt)("em",{parentName:"li"},"ItemType | undefined")),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"source")," on ",(0,r.kt)("em",{parentName:"li"},"ItemDefinitionTriggeredAfterEvent")," to be optional"),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"above(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"below(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"north(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"east(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"south(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"west(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"offset(offset: Vector3): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"center(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bottomCenter(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},"Made getItemStack function return ItemStack or undefined"))),(0,r.kt)("li",{parentName:"ul"},"BlockStates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made get function return BlockStateType or undefined"))),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"ExplosionAfterEvent")," and ",(0,r.kt)("em",{parentName:"li"},"ExplosionBeforeEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getUpdatedBlocks()")," will now return ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"setUpdatesBlocks(blocks: Block","[","]",")")," now takes in a ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")))),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player")," playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Property registration is no longer required and ",(0,r.kt)("em",{parentName:"li"},"propertyRegistry")," has been removed from the ",(0,r.kt)("em",{parentName:"li"},"worldInitialize")," event"),(0,r.kt)("li",{parentName:"ul"},"Removed limits on the count and size of properties that can set on an entity or the world"),(0,r.kt)("li",{parentName:"ul"},"Default values have been removed. ",(0,r.kt)("em",{parentName:"li"},"getProperty")," will now always return undefined for unset properties"),(0,r.kt)("li",{parentName:"ul"},"String dynamic property values are now restricted to a length of 32767 bytes"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("em",{parentName:"li"},"removeDynamicProperty")," - Please use ",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," with a value of ",(0,r.kt)("em",{parentName:"li"},"undefined")," to remove a property"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," - Returns an array of all dynamic property ids on an entity/world used by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," - Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," - Removes all dynamic properties added by this behavior pack from an entity/world"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dynamic property numbers are now stored with double precision (64 bits)"))),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events"),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta\xa0")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soul Torches are now treated as point lights in the Deferred Technical Preview\xa0"),(0,r.kt)("li",{parentName:"ul"},"Allow data-driving of point lights and their colors for any block via resource packs in the Deferred Technical Preview")),(0,r.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved chunk rendering performance in Deferred Technical Preview\xa0")),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where "PBR" was not included in HUD while in level using Deferred Technical Preview')))}p.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(74866),o=n(85162);const i={},u=void 0,s={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,r.kt)(o.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}d.isMDXComponent=!0}}]);