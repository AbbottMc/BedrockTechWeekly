"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20949,16100,25461,81791],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),c=a(91980),p=a(67392),u=a(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,p]=k({queryString:a,groupId:n}),[s,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=c??s;return d({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var f=a(72389);const g="tabList_TRJ7",v="tabItem_hGfb";function b(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:p,rightElement:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=s.indexOf(t),n=p[a].value;n!==i&&(m(t),c(n))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:k,onClick:d},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function N(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},22867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),o=a(6414),l=(a(6539),a(9071));const i={},c=void 0,p={unversionedId:"changelog_source/preview/1.19/70/22/tech",id:"changelog_source/preview/1.19/70/22/tech",title:"tech",description:"Entity Properties",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/22/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech",permalink:"/en/docs/changelog_source/preview/1.19/70/22/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[{value:"<strong>Entity Properties</strong>",id:"entity-properties",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"entity-properties"},(0,r.kt)("strong",{parentName:"h2"},"Entity Properties")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed an issue where Entity Property value changes could be discarded if done by events fired as part of removal of active behaviors caused by other events")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Features"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(l.default,{techSapi:(0,r.kt)(o.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}))}d.isMDXComponent=!0},6414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/tech_sapi_exp",id:"changelog_source/preview/1.19/70/22/tech_sapi_exp",title:"tech_sapi_exp",description:"Replaced general setVelocity call with methods to apply impulses to entities:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech_sapi_exp",permalink:"/en/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},c={},p=[],u={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Replaced general ",(0,r.kt)("em",{parentName:"p"},"setVelocity")," call with methods to apply impulses to entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clearVelocity(): void"),"-"," Sets the current velocity of the Entity to zero"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"applyImpulse(vector: Vector3): void"),"-"," Applies impulse vector to the current velocity of the Entity"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"function"),"\xa0",(0,r.kt)("em",{parentName:"li"},"applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void"),"-"," Applies knockback to the Entity in specified direction based on vertical and horizontal strength"),(0,r.kt)("li",{parentName:"ul"},"Removed function\xa0",(0,r.kt)("em",{parentName:"li"},"setVelocity"))),(0,r.kt)("p",null,"General changes to more consistently use methods when working with simple data-only objects vs. properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BeforeExplosionEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setImpactedBlocks(blocks: Vector3","[","]","): void"),"-"," Sets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"impactedBlocks")))),(0,r.kt)("li",{parentName:"ul"},"BeforeItemUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"BlockInventoryComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockLavaContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockPistonComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getAttachedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted by the activation of this piston"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"attachedBlocks")),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockPotionContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockRecordPlayerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockSignComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockSnowContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")))),(0,r.kt)("li",{parentName:"ul"},"BlockWaterContainerComponent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"location")),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Entity"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"headLocation")))),(0,r.kt)("li",{parentName:"ul"},"ExplosionEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getImpactedBlocks(): Vector3","[","]"),"-"," Gets the blocks locations that are impacted the by the explosion"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"impactedBlocks")))),(0,r.kt)("li",{parentName:"ul"},"ItemStartUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBuildBlockLocation(): Vector3"),"-"," Gets the location of the resulting build block"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"buildBlockLocation")))),(0,r.kt)("li",{parentName:"ul"},"ItemStopUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"ItemUseOnEvent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getBlockLocation(): Vector3"),"-"," Gets the location of the block being impacted"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"blockLocation")))),(0,r.kt)("li",{parentName:"ul"},"NavigationResult",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getPath(): Vector3","[","]"),"-"," Gets the locations of the blocks that comprise the navigation route"),(0,r.kt)("li",{parentName:"ul"},"Removed property\xa0",(0,r.kt)("em",{parentName:"li"},"path")))),(0,r.kt)("li",{parentName:"ul"},"Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"getHeadLocation(): Vector3"),"-"," Gets the head location of the Player"),(0,r.kt)("li",{parentName:"ul"},"Removed property",(0,r.kt)("em",{parentName:"li"},"headLocation"))))),(0,r.kt)("p",null,"ItemStack API improvements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"getMaxAmount: number"),"-"," Returns the maximum stack size for the item"),(0,r.kt)("li",{parentName:"ul"},"Added read-only property\xa0",(0,r.kt)("em",{parentName:"li"},"isStackable: bool"),"-"," Returns whether the item is stackable"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"isStackableWith(itemStack: ItemStack): bool"),"-"," Returns whether the item can be stacked with the given item"),(0,r.kt)("li",{parentName:"ul"},"Added read-only ",(0,r.kt)("em",{parentName:"li"},"property"),"\xa0",(0,r.kt)("em",{parentName:"li"},"type: ItemType"),"-"," Returns the type of the item"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"clone(): ItemStack"),"-"," Returns a copy of the item stack"),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"keepOnDeath: bool"),"-"," Sets whether the item is kept on death"),(0,r.kt)("li",{parentName:"ul"},"Added property\xa0",(0,r.kt)("em",{parentName:"li"},"lockMode: ItemLockMode"),"-"," Sets whether the item can be moved or dropped"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setCanPlaceOn(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks the item can be placed on"),(0,r.kt)("li",{parentName:"ul"},"Added function\xa0",(0,r.kt)("em",{parentName:"li"},"setCanDestroy(blockIdentifiers?: string","[","]",")"),"-"," Sets which blocks this item can destroy")))}s.isMDXComponent=!0},6539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/70/22",slug:"/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",permalink:"/en/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/22/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},c={},p=[],u={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}))}s.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const i={},c=void 0,p={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},s=[],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}d.isMDXComponent=!0}}]);