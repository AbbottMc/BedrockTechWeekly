"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[59361,93060,81791,48e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(a),k=r,u=s["".concat(p,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(87462),r=a(67294),l=a(86010),i=a(12466),o=a(16550),p=a(91980),m=a(67392),c=a(50012);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??s(a);return function(e){const t=(0,m.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function k(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!k({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,m]=u({queryString:a,groupId:n}),[s,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=p??s;return k({value:e,tabValues:l})?e:null})();(0,r.useEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!k({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),N(e)}),[m,N,l]),tabValues:l}}var v=a(72389);const g="tabList__CuJ",h="tabItem_LNqP";function C(e){let{className:t,block:a,selectedValue:o,selectValue:p,tabValues:m}=e;const c=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=m[a].value;n!==o&&(s(t),p(n))},k=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},m.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:d},i,{className:(0,l.Z)("tabs__item",h,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(C,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function f(e){const t=(0,v.Z)();return r.createElement(b,(0,n.Z)({key:String(t)},e))}},83934:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(63474),i=a(98238),o=a(9071);const p={},m=void 0,c={unversionedId:"changelog_source/preview/1.19.70.23/tech",id:"changelog_source/preview/1.19.70.23/tech",title:"tech",description:"Data-driven",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.23/tech.mdx",sourceDirName:"changelog_source/preview/1.19.70.23",slug:"/changelog_source/preview/1.19.70.23/tech",permalink:"/en/docs/changelog_source/preview/1.19.70.23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[{value:"<strong>Data-driven</strong>",id:"data-driven",level:2},{value:"<strong>Script API</strong>",id:"script-api",level:2}],k={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"data-driven"},(0,r.kt)("strong",{parentName:"h2"},"Data-driven")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Released block properties and permutations out of experimental in JSON formats 1.19.70 and higher"),(0,r.kt)("li",{parentName:"ul"},"Added a content warning when loading world with more than 65536 custom block permutations. Custom block permutation counts are logged in debug log")),(0,r.kt)("h2",{className:"experimental_divider"},"Experimental Technical Features"),(0,r.kt)("h2",{id:"script-api"},(0,r.kt)("strong",{parentName:"h2"},"Script API")),(0,r.kt)(o.default,{techSapi:(0,r.kt)(i.default,{mdxType:"TechSapi"}),techSapiChangelog:(0,r.kt)(l.default,{mdxType:"TechSapiChangelog"}),mdxType:"Switcher"}))}u.isMDXComponent=!0},98238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.19.70.23/tech_sapi",id:"changelog_source/preview/1.19.70.23/tech_sapi",title:"tech_sapi",description:"BlockPermutation",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.23/tech_sapi.md",sourceDirName:"changelog_source/preview/1.19.70.23",slug:"/changelog_source/preview/1.19.70.23/tech_sapi",permalink:"/en/docs/changelog_source/preview/1.19.70.23/tech_sapi",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.23/tech_sapi.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:3},{value:"<strong>BlockProperties</strong>",id:"blockproperties",level:3},{value:"<strong>BlockPropertyType</strong>",id:"blockpropertytype",level:3}],c={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"blockpermutation"},(0,r.kt)("strong",{parentName:"h3"},"BlockPermutation")),(0,r.kt)("p",null,"BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the ",(0,r.kt)("em",{parentName:"p"},"XBlockProperty")," classes and now directly return properties ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("strong",{parentName:"em"},"boolean | number | string"),")")," or a while collection of properties ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("strong",{parentName:"em"},"Record<string, boolean | number | string>"),")"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added method ",(0,r.kt)("em",{parentName:"li"},"matches(blockName: string, properties?: BlockProperties): boolean")," which is used to match a block with optional states against a BlockPermutation."),(0,r.kt)("li",{parentName:"ul"},"Added method ",(0,r.kt)("em",{parentName:"li"},"withProperty(name: string, value: boolean | number | string): BlockPermutation;")," which returns a new block permutation with a given property set to a specific value. Throws if the provided data cannot be resolved as a valid block permutation."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("em",{parentName:"li"},"function")," ",(0,r.kt)("em",{parentName:"li"},"static resolve(blockName: string, properties?: BlockProperties): BlockPermutation")," which resolve a BlockPermutation from a block name and optional states. Throws if the provided data cannot be resolved as a valid block permutation."),(0,r.kt)("li",{parentName:"ul"},"Updated methods ",(0,r.kt)("em",{parentName:"li"},"getProperty")," and ",(0,r.kt)("em",{parentName:"li"},"getAllProperties")," to return values directly instead of wrapped into class objects. Example code:")),(0,r.kt)("p",null,"Before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();\nblockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone_brick';\nblockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true; \n")),(0,r.kt)("p",null,"Now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const blockPermutation = BlockPermutation.resolve( 'minecraft:stone_slab', { stone_slab_type: 'stone_brick',  top_slot_bit: true});\n")),(0,r.kt)("h3",{id:"blockproperties"},(0,r.kt)("strong",{parentName:"h3"},"BlockProperties")),(0,r.kt)("p",null,"Added new class to expose ",(0,r.kt)("em",{parentName:"p"},"BlockPropertyType"),"."),(0,r.kt)("h3",{id:"blockpropertytype"},(0,r.kt)("strong",{parentName:"h3"},"BlockPropertyType")),(0,r.kt)("p",null,'Added new class to track "definitional" data about block properties. This is how you can find which values are valid for each block property.'))}s.isMDXComponent=!0},63474:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"changelog_source/preview/1.19.70.23/tech_sapi_changelog",id:"changelog_source/preview/1.19.70.23/tech_sapi_changelog",title:"tech_sapi_changelog",description:"Changed module @minecraft/server@1.1.0-beta",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19.70.23/tech_sapi_changelog.md",sourceDirName:"changelog_source/preview/1.19.70.23",slug:"/changelog_source/preview/1.19.70.23/tech_sapi_changelog",permalink:"/en/docs/changelog_source/preview/1.19.70.23/tech_sapi_changelog",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19.70.23/tech_sapi_changelog.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Changed module <code>@minecraft/server@1.1.0-beta</code>",id:"changed-module-minecraftserver110-beta",level:3}],c={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"changed-module-minecraftserver110-beta"},"Changed module ",(0,r.kt)("inlineCode",{parentName:"h3"},"@minecraft/server@1.1.0-beta")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockPermutation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed function ",(0,r.kt)("inlineCode",{parentName:"p"},"getAllProperties")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed return type from ",(0,r.kt)("inlineCode",{parentName:"li"},"IBlockProperty[]")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Record<string, boolean | number | string>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed function ",(0,r.kt)("inlineCode",{parentName:"p"},"getProperty")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Changed return type from ",(0,r.kt)("inlineCode",{parentName:"li"},"IBlockProperty")," (throws exceptions) to ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean | number | string")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"matches")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"matches(blockName: string, properties?: Record<string, boolean | number | string>): boolean      \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"resolve")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static resolve(blockName: string, properties?: Record<string, boolean | number | string>): BlockPermutation      \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"withProperty")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"withProperty(name: string, value: boolean | number | string): BlockPermutation      \n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockProperties")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"active"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"age"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"ageBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"allowUnderwaterBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"attachedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"attachment"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"bambooLeafSize"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"bambooStalkThickness"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"bigDripleafHead"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"bigDripleafTilt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"biteCounter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"blockLightLevel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"bloom"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"booksStored"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"brewingStandSlotABit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"brewingStandSlotBBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"brewingStandSlotCBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonPressedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"candles"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"canSummon"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"cauldronLiquid"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"chemistryTableType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"chiselType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"clusterCount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"color"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"colorBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"composterFillLevel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"conditionalBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"coralColor"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"coralDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"coralFanDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"coralHangTypeBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"coveredBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"crackedState"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"damage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"deadBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"deprecated"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"direction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"dirtType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"disarmedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"doorHingeBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"doublePlantType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"dragDown"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"dripstoneThickness"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"endPortalEyeBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"explodeBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"extinguished"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"facingDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"fillLevel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"flowerType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"groundSignDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"growingPlantAge"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"growth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"hanging"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"headPieceBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"height"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"honeyLevel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"hugeMushroomBits"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"infiniburnBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"inWallBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"itemFrameMapBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"itemFramePhotoBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"kelpAge"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"leverDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"liquidDepth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"lit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"moisturizedAmount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"monsterEggStoneType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"multiFaceDirectionBits"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"newLeafType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"newLogType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"noDropBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"occupiedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"oldLeafType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"oldLogType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"openBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"outputLitBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"outputSubtractBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"persistentBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"pillarAxis"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"portalAxis"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"poweredBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"prismarineBlockType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"propaguleStage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"railDataBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"railDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"redstoneSignal"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"repeaterDelay"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"respawnAnchorCharge"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"rotation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"sandStoneType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"sandType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"saplingType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"seaGrassType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stability"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stabilityCheck"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneBrickType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneSlabType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneSlabType2"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneSlabType3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneSlabType4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"stoneType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"strippedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"structureBlockType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"structureVoidType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"suspendedBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"tallGrassType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"toggleBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"topSlotBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"torchFacingDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"triggeredBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"turtleEggCount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"twistingVinesAge"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"updateBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"upperBlockBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"upsideDownBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"vineDirectionBits"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallBlockType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallConnectionTypeEast"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallConnectionTypeNorth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallConnectionTypeSouth"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallConnectionTypeWest"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"wallPostBit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"weepingVinesAge"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"weirdoDirection"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed constant ",(0,r.kt)("inlineCode",{parentName:"p"},"woodType"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"get")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static get(propertyName: string): BlockPropertyType      \n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added function ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static getAll(): BlockPropertyType[]      \n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockPropertyType")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export class BlockPropertyType {\n  protected constructor();\n  readonly id: string;\n  readonly validValues: (boolean | number | string)[];\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockType")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed function ",(0,r.kt)("inlineCode",{parentName:"li"},"createDefaultBlockPermutation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed class ",(0,r.kt)("inlineCode",{parentName:"p"},"BoolBlockProperty"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectionBlockProperty")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removed base class ",(0,r.kt)("inlineCode",{parentName:"li"},"IBlockProperty")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed class ",(0,r.kt)("inlineCode",{parentName:"p"},"IBlockProperty"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed class ",(0,r.kt)("inlineCode",{parentName:"p"},"IntBlockProperty"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Changed class ",(0,r.kt)("inlineCode",{parentName:"p"},"MinecraftBlockTypes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added constant ",(0,r.kt)("inlineCode",{parentName:"p"},"decoratedPot")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly decoratedPot: BlockType\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added constant ",(0,r.kt)("inlineCode",{parentName:"p"},"suspiciousSand")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly suspiciousSand: BlockType\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added constant ",(0,r.kt)("inlineCode",{parentName:"p"},"torchflower")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly torchflower: BlockType\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Added constant ",(0,r.kt)("inlineCode",{parentName:"p"},"torchflowerCrop")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"static readonly torchflowerCrop: BlockType\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Removed class ",(0,r.kt)("inlineCode",{parentName:"p"},"StringBlockProperty")))))}s.isMDXComponent=!0},9071:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),i=a(85162);const o={},p=void 0,m={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},s=[],d={toc:s};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},a.techSapi),(0,r.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},a.techSapiChangelog)))}k.isMDXComponent=!0}}]);