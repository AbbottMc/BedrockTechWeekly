"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[78053,29933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function m(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(m(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));n(47153);const o={},l=void 0,i={unversionedId:"changelog_source/stable/1.18/0/tech",id:"changelog_source/stable/1.18/0/tech",title:"tech",description:"Updated Add-On Template Packs",source:"@site/docs/changelog_source/stable/1.18/0/tech.mdx",sourceDirName:"changelog_source/stable/1.18/0",slug:"/changelog_source/stable/1.18/0/tech",permalink:"/docs/changelog_source/stable/1.18/0/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/0/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Updated Add-On Template Packs</strong>",id:"updated-add-on-template-packs",level:2},{value:"<strong>Fixes</strong>",id:"fixes",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"**GameTest Framework",id:"gametest-framework",level:2},{value:"**",id:"",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"updated-add-on-template-packs"},(0,r.kt)("strong",{parentName:"h2"},"Updated Add-On Template Packs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated Add-On templates for 1.18.0 with new resources, behaviors, and documentation, are available to download at ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/MCAddOnPacks"},"aka.ms/MCAddOnPacks"))),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Players are disconnected if server and client have different Runtime Block IDs"),(0,r.kt)("li",{parentName:"ul"},"Fixed a rendering error that could occur when attempting to render a Vanilla mob in a base game version prior to the version that mob was introduced through JSON files"),(0,r.kt)("li",{parentName:"ul"},"Most content errors and warnings will now only display once per world (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-135153"},"MCPE-135153"),")"),(0,r.kt)("li",{parentName:"ul"},"Improved performance in 'RangedAttackGoal' for mobs that do not move"),(0,r.kt)("li",{parentName:"ul"},"Fixed mobs' default summonability when not specified in JSON"),(0,r.kt)("li",{parentName:"ul"},"Fixed a versioning error with animation controllers that was causing the wrong schema to be utilized on Marketplace worlds with an animation controller version 1.8.0")),(0,r.kt)("h2",{id:"commands"},(0,r.kt)("strong",{parentName:"h2"},"Commands")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The '/clone' command has been updated to properly check for overlapping source and destinations areas no longer allowing for a 1 block depth overlap on each axis. This can continue to be overridden via the force clone option")),(0,r.kt)("h2",{id:"gametest-framework"},"**GameTest Framework"),(0,r.kt)("h2",{id:""},"**"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New Item API updates: ItemStack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Exposed interfaces for accessing script-enabled ItemComponents on ItemStack. Note that these item components only work in conjunction with custom items defined via the Holiday Creator Features experiment"),(0,r.kt)("li",{parentName:"ul"},"hasComponent(componentId: string) - returns true if the ItemStack has the component ","[","componentId","]"," attached to it"),(0,r.kt)("li",{parentName:"ul"},"getComponent(componentId: string) - returns a handle to the component attached to this ItemStack. Returns an undefined handle if the component does not exist or if the component is yet to be exposed to script"),(0,r.kt)("li",{parentName:"ul"},"getComponents() - returns an array of all attached script-enabled components on this ItemStack"))),(0,r.kt)("li",{parentName:"ul"},"Script Enabled Item Components",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"minecraft:food",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Read-only property nutrition - number that describes how much nutrition this food item gives the player when eaten"),(0,r.kt)("li",{parentName:"ul"},"Read-only property saturationModifier - number that is the saturation modifier used to apply the saturation buff when eaten"),(0,r.kt)("li",{parentName:"ul"},"Read-only property canAlwaysEat - if true the player can always eat this item (even when not hungry)"),(0,r.kt)("li",{parentName:"ul"},"Read-only property usingConvertsTo - string name of the Item this will be converted to when eaten. If empty, the item will not convert to anything else"))),(0,r.kt)("li",{parentName:"ul"},"minecraft:durability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Read-only property maxDurability - the number amount of damage this item can take before breaking"),(0,r.kt)("li",{parentName:"ul"},"Read-only property damageRange - a NumberRange describing the chance of the item losing durability"),(0,r.kt)("li",{parentName:"ul"},"Property damage - gets or sets the current damage on the ItemStack"))),(0,r.kt)("li",{parentName:"ul"},"getDamageChance(unbreaking: number = 0) - gets the maximum chance that this item would be damaged using the damageRange property if given an unbreaking level. Incoming unbreaking parameter must be greater than 0"))),(0,r.kt)("li",{parentName:"ul"},"Added deltaTime read only property to TickEvent which represents the time between the last Level tick in seconds")),(0,r.kt)("h2",{id:"molang"},(0,r.kt)("strong",{parentName:"h2"},"Molang")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed content error when Molang expression has no tokens to only fire when 'min","_","engine","_","version' is 1.17.40 or higher")))}m.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(67294),o=n(3905),l=n(74866),i=n(85162);const s={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},m={},d=[],p={toc:d};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Fragment,null,void 0!==n.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.kt)(i.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.kt)(r.Fragment,null,n.techSapi)))}h.isMDXComponent=!0}}]);