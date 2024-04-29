"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60214,29933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),s=a(67392),c=a(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:a,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=u??m;return d({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var f=a(72389);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==i&&(m(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:p},o,{className:(0,l.Z)("tabs__item",b,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},78597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));a(47153);const l={},o=void 0,i={unversionedId:"changelog_source/preview/1.20/40/20/tech",id:"changelog_source/preview/1.20/40/20/tech",title:"tech",description:"Add-Ons and Script Engine",source:"@site/docs/changelog_source/preview/1.20/40/20/tech.mdx",sourceDirName:"changelog_source/preview/1.20/40/20",slug:"/changelog_source/preview/1.20/40/20/tech",permalink:"/docs/changelog_source/preview/1.20/40/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/40/20/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"Add-Ons and Script Engine",id:"add-ons-and-script-engine",level:2},{value:"Commands",id:"commands",level:2},{value:"Components",id:"components",level:2},{value:"Molang",id:"molang",level:2},{value:"Trade Tables",id:"trade-tables",level:2},{value:"Script API",id:"script-api",level:2},{value:"Graphical",id:"graphical",level:2},{value:"Stability and Performance",id:"stability-and-performance",level:2},{value:"User Interface",id:"user-interface",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-ons-and-script-engine"},"Add-Ons and Script Engine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed the names of the ",(0,r.kt)("em",{parentName:"li"},"CameraSetOptions")," options to not include the word 'Script'")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Re-entering a world no longer breaks command autocomplete after a command using "@e',"[","type=item","]",'" was used (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-164734"},"MCPE-164734"),")"),(0,r.kt)("li",{parentName:"ul"},'The /damage command with the "override" cause now causes damage through post hit invulnerability (',(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-160290"},"MCPE-160290"),")"),(0,r.kt)("li",{parentName:"ul"},"The recipe command color has been changed to white instead of blue (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-173362"},"MCPE-173362"),")")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Added a content error when attempting to load a damage sensor with an invalid "cause" value\xa0'),(0,r.kt)("li",{parentName:"ul"},'Allow single value parsing for "minecraft:icon" item component'),(0,r.kt)("li",{parentName:"ul"},"The Camel mob Dash Component can now be applied to rideable mobs other than Horse, Donkey, and Mule using \u201cminecraft:dash\u201d")),(0,r.kt)("h2",{id:"molang"},"Molang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Molang updated to version 1.20.40 which replaces "block',"_",'property" and "has',"_","block","_",'property" with "block',"_",'state" and "has',"_","block","_",'state"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.20.40 or higher")))),(0,r.kt)("h2",{id:"trade-tables"},"Trade Tables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Trade items now have a "filters" property to determine if a trade should be considered\xa0'),(0,r.kt)("li",{parentName:"ul"},'Trade items no longer support the "biome" property to check villager biome types, the "is',"_","mark","_",'variant" filter can be used in the "filters" property instead to check the villager biome type')),(0,r.kt)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,r.kt)("h2",{id:"script-api"},"Script API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("em",{parentName:"li"},"chat(message: string)")," method"),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"get")," to return ",(0,r.kt)("em",{parentName:"li"},"ItemType | undefined")),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("em",{parentName:"li"},"source")," on ",(0,r.kt)("em",{parentName:"li"},"ItemDefinitionTriggeredAfterEvent")," to be optional"),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"above(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"below(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"north(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"east(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"south(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"west(steps?: number): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"offset(offset: Vector3): Block | undefined;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"center(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"bottomCenter(): Vector3;")),(0,r.kt)("li",{parentName:"ul"},"Made getItemStack function return ItemStack or undefined"))),(0,r.kt)("li",{parentName:"ul"},"BlockStates",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Made get function return BlockStateType or undefined"))),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("em",{parentName:"li"},"ExplosionAfterEvent")," and ",(0,r.kt)("em",{parentName:"li"},"ExplosionBeforeEvent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"getUpdatedBlocks()")," will now return ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"setUpdatesBlocks(blocks: Block","[","]",")")," now takes in a ",(0,r.kt)("em",{parentName:"li"},"Block","[","]")))),(0,r.kt)("li",{parentName:"ul"},"Added the following methods to ",(0,r.kt)("em",{parentName:"li"},"Player")," playMusic(trackId: string, musicOptions?: MusicOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; stopMusic(): void;"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Property registration is no longer required and ",(0,r.kt)("em",{parentName:"li"},"propertyRegistry")," has been removed from the ",(0,r.kt)("em",{parentName:"li"},"worldInitialize")," event"),(0,r.kt)("li",{parentName:"ul"},"Removed limits on the count and size of properties that can set on an entity or the world"),(0,r.kt)("li",{parentName:"ul"},"Default values have been removed. ",(0,r.kt)("em",{parentName:"li"},"getProperty")," will now always return undefined for unset properties"),(0,r.kt)("li",{parentName:"ul"},"String dynamic property values are now restricted to a length of 32767 bytes"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("em",{parentName:"li"},"removeDynamicProperty")," - Please use ",(0,r.kt)("em",{parentName:"li"},"setDynamicProperty")," with a value of ",(0,r.kt)("em",{parentName:"li"},"undefined")," to remove a property"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyIds")," - Returns an array of all dynamic property ids on an entity/world used by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"getDynamicPropertyTotalByteCount")," - Returns the total number of bytes used by all dynamic properties on an entity/world by the behavior pack"),(0,r.kt)("li",{parentName:"ul"},"Added function ",(0,r.kt)("em",{parentName:"li"},"clearDynamicProperties")," - Removes all dynamic properties added by this behavior pack from an entity/world"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Properties",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dynamic property numbers are now stored with double precision (64 bits)"))),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerInteractWithBlock + PlayerInteractWithEntity before & after events"),(0,r.kt)("li",{parentName:"ul"},"Adding PlayerDimensionChangeBeforeEvent and PlayerDimensionChangeAfterEvent in beta\xa0")),(0,r.kt)("h2",{id:"graphical"},"Graphical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Soul Torches are now treated as point lights in the Deferred Technical Preview\xa0"),(0,r.kt)("li",{parentName:"ul"},"Allow data-driving of point lights and their colors for any block via resource packs in the Deferred Technical Preview")),(0,r.kt)("h2",{id:"stability-and-performance"},"Stability and Performance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved chunk rendering performance in Deferred Technical Preview\xa0")),(0,r.kt)("h2",{id:"user-interface"},"User Interface"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed a bug where "PBR" was not included in HUD while in level using Deferred Technical Preview')))}m.isMDXComponent=!0},47153:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(67294),l=a(3905),o=a(74866),i=a(85162);const u={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},p=[],d={toc:p};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Fragment,null,void 0!==a.techSapiDiff?(0,l.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},a.techSapi),(0,l.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},a.techSapiDiff)):(0,l.kt)(r.Fragment,null,a.techSapi)))}h.isMDXComponent=!0}}]);