"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[88101,21032,94851,33948],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),o=r(20053);const n={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var a=r(58168),o=r(96540),n=r(20053),l=r(23104),c=r(56347),i=r(57485),s=r(31682),u=r(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:o}}=e;return{value:t,label:r,attributes:a,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,c.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(n),(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=d(e),[l,c]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[i,s]=g({queryString:r,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(r);return[a,(0,o.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:n})?e:null})();(0,o.useEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),h(e)}),[s,h,n]),tabValues:n}}var f=r(92303);const y={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:r,selectedValue:c,selectValue:i,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),m=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==c&&(d(t),i(a))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:l}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:m},l,{className:(0,n.A)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),r??t)})),u?o.createElement("div",{className:"w-full"},u):void 0)}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return o.createElement("div",{className:(0,n.A)("tabs-container",y.tabList)},o.createElement(b,(0,a.A)({},e,t)),o.createElement(v,(0,a.A)({},e,t)))}function _(e){const t=(0,f.A)();return o.createElement(w,(0,a.A)({key:String(t)},e))}},58635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=r(58168),o=(r(96540),r(15680)),n=r(17052),l=(r(82636),r(57350));const c={},i=void 0,s={unversionedId:"changelog_source/preview/1.19/70/23/tech",id:"changelog_source/preview/1.19/70/23/tech",title:"tech",description:"\u5b9e\u9a8c\u6027\u7279\u6027",source:"@site/docs/changelog_source/preview/1.19/70/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/70/23",slug:"/changelog_source/preview/1.19/70/23/tech",permalink:"/docs/changelog_source/preview/1.19/70/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/23/tech.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[{value:"<strong>Script API</strong>",id:"script-api",level:2},{value:"<strong>BlockPermutation</strong>",id:"blockpermutation",level:3},{value:"<strong>BlockProperties</strong>",id:"blockproperties",level:3},{value:"<strong>BlockPropertyType</strong>",id:"blockpropertytype",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:2}],d={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(m,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{className:"experimental_divider"},"\u5b9e\u9a8c\u6027\u7279\u6027"),(0,o.yg)("h2",{id:"script-api"},(0,o.yg)("strong",{parentName:"h2"},"Script API")),(0,o.yg)(l.default,{techSapi:(0,o.yg)(n.default,{mdxType:"TechSapiExp"}),techSapiDiff:void 0,mdxType:"Switcher"}),(0,o.yg)("h3",{id:"blockpermutation"},(0,o.yg)("strong",{parentName:"h3"},"BlockPermutation")),(0,o.yg)("p",null,"BlockPermutation has been significantly refactored! Every BlockPermutation now share a unique JavaScript handle so exact equality (===) will work for permutations that share exactly the same state values. We've also added utility methods that make interacting with permutations easier, which includes the removal of the\xa0",(0,o.yg)("em",{parentName:"p"},"XBlockProperty"),"\xa0classes and now directly return properties ",(0,o.yg)("em",{parentName:"p"},"(",(0,o.yg)("strong",{parentName:"em"},"boolean | number | string"),")")," or a while collection of properties ",(0,o.yg)("em",{parentName:"p"},"("),"\xa0",(0,o.yg)("em",{parentName:"p"},"Record\\<string, boolean | number | string",">","__)"),"."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Added method\xa0_matches(blockName: string, properties?: BlockProperties): boolean_which is used to match a block with optional states against a BlockPermutation."),(0,o.yg)("li",{parentName:"ul"},"Added method\xa0_withProperty(name: string, value: boolean | number | string): BlockPermutation;_which returns a new block permutation with a given property set to a specific value. Throws if the provided data cannot be resolved as a valid block permutation."),(0,o.yg)("li",{parentName:"ul"},"Added ",(0,o.yg)("em",{parentName:"li"},"function"),"\xa0_static resolve(blockName: string, properties?: BlockProperties): BlockPermutation_which resolve a BlockPermutation from a block name and optional states. Throws if the provided data cannot be resolved as a valid block permutation."),(0,o.yg)("li",{parentName:"ul"},"Updated methods\xa0",(0,o.yg)("em",{parentName:"li"},"getProperty_and\xa0_getAllProperties"),"\xa0to return values directly instead of wrapped into class objects. Example code: Before:")),(0,o.yg)("p",null,"_const blockPermutation = MinecraftBlockTypes.stoneSlab.createDefaultBlockPermutation();",(0,o.yg)("strong",{parentName:"p"},"blockPermutation.getProperty(MinecraftBlockProperties.stoneSlabType).value = 'stone","_","brick';"),"blockPermutation.getProperty(MinecraftBlockProperties.topSlotBit).value = true;  "),(0,o.yg)("p",null,"_"),(0,o.yg)("p",null,"Now:"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"const blockPermutation = BlockPermutation.resolve('minecraft:stone","_","slab', {"),"\xa0\xa0\xa0 ",(0,o.yg)("em",{parentName:"p"},"stone","_","slab","_","type: 'stone","_","brick',"),"\xa0\xa0\xa0 ",(0,o.yg)("em",{parentName:"p"},"top","_","slot","_","bit: true,__});"),"\xa0"),(0,o.yg)("h3",{id:"blockproperties"},(0,o.yg)("strong",{parentName:"h3"},"BlockProperties")),(0,o.yg)("p",null,"Added new class to expose\xa0",(0,o.yg)("em",{parentName:"p"},"BlockPropertyType"),"."),(0,o.yg)("h3",{id:"blockpropertytype"},(0,o.yg)("strong",{parentName:"h3"},"BlockPropertyType")),(0,o.yg)("p",null,'Added new class to track "definitional" data about block properties. This is how you can find which values are valid for each block property.'),(0,o.yg)("h2",{id:"blocks"},(0,o.yg)("strong",{parentName:"h2"},"Blocks")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Released block properties and permutations out of experimental in JSON formats 1.19.70 and higher"),(0,o.yg)("li",{parentName:"ul"},"Added a content warning when loading world with more than 65536 custom block permutations. Custom block permutation counts are logged in debug log")))}g.isMDXComponent=!0},17052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(58168),o=(r(96540),r(15680));const n={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/70/23/tech_sapi_exp",id:"changelog_source/preview/1.19/70/23/tech_sapi_exp",title:"tech_sapi_exp",description:"",source:"@site/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp.md",sourceDirName:"changelog_source/preview/1.19/70/23",slug:"/changelog_source/preview/1.19/70/23/tech_sapi_exp",permalink:"/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp.md",tags:[],version:"current",frontMatter:{}},i={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},82636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var a=r(58168),o=(r(96540),r(15680));const n={},l=void 0,c={unversionedId:"changelog_source/preview/1.19/70/23/tech_sapi_exp_diff",id:"changelog_source/preview/1.19/70/23/tech_sapi_exp_diff",title:"tech_sapi_exp_diff",description:"",source:"@site/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp_diff.md",sourceDirName:"changelog_source/preview/1.19/70/23",slug:"/changelog_source/preview/1.19/70/23/tech_sapi_exp_diff",permalink:"/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp_diff",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/70/23/tech_sapi_exp_diff.md",tags:[],version:"current",frontMatter:{}},i={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0},57350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(58168),o=r(96540),n=r(15680),l=r(18228),c=r(19365);const i={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d},g="wrapper";function h(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(o.Fragment,null,void 0!==r.techSapiDiff?(0,n.yg)(l.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.yg)(c.A,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},r.techSapi),(0,n.yg)(c.A,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},r.techSapiDiff)):(0,n.yg)(o.Fragment,null,r.techSapi)))}h.isMDXComponent=!0}}]);