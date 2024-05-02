"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[2377,81791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},31792:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),u=n(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=s??m;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var h=n(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c,rightElement:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=m.indexOf(t),r=c[n].value;r!==i&&(p(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>m.push(e),onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":i===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},71316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));n(9071);const o={},l=void 0,i={unversionedId:"changelog_source/preview/1.17/20/23/tech",id:"changelog_source/preview/1.17/20/23/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/23",slug:"/changelog_source/preview/1.17/20/23/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2},{value:"<strong>Gameplay</strong>\xa0",id:"gameplay",level:2},{value:"<strong>Molang</strong>\xa0",id:"molang",level:2},{value:"<strong>User\xa0Interface</strong>\xa0",id:"userinterface",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gametestframework-experimental"},(0,a.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Renamed module "Minecraft" to "mojang-minecraft"\xa0'),(0,a.kt)("li",{parentName:"ul"},'Renamed module "GameTest" to "mojang-gametest"\xa0',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Renamed function\xa0assertBlockTypePresent\xa0to\xa0assertBlockPresent\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed function\xa0assertEntityData\xa0to\xa0assertEntityState\xa0"),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0assertBlockTypeNotPresent\xa0"),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotPresent\xa0"),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotPresentInArea\xa0"),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0assertEntityNotTouching\xa0"),(0,a.kt)("li",{parentName:"ul"},"Removed function\xa0succeedWhenEntityNotPresent\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertBlockState(blockLocation:\xa0BlockLocation,\xa0callback: (Block) =",">","\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertBlockPresent(blockType:\xa0BlockType,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityPresent(entityTypeIdentifier: string,\xa0blockLocation:\xa0BlockLocation,\xa0isPresent:\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityPresentInArea(entityTypeIdentifier: string,\xa0isPresent:\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0assertEntityTouching(entityTypeIdentifier: string, location: Location,\xa0isTouching:\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Modified signature of function\xa0succeedWhenEntityPresent(entityTypeIdentifier: string, location: Location,\xa0isPresent:\xa0boolean)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added\xa0GameTestExtension\xa0function\xa0assertBlockProperty(propertyName: string, value: number | string |\xa0boolean,\xa0blockLocation:\xa0BlockLocation)\xa0")))),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command position argument is now optional (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-128379"},"MCPE-128379"),")\xa0"),(0,a.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command will now output on success (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-80348"},"MCPE-80348"),")\xa0"),(0,a.kt)("li",{parentName:"ul"},"The\xa0'/particle'\xa0command no longer shows an error when run\xa0successfully\xa0through\xa0'/execute'\xa0(",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-129001"},"MCPE-129001"),")\xa0")),(0,a.kt)("h2",{id:"gameplay"},(0,a.kt)("strong",{parentName:"h2"},"Gameplay"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data-driven blocks can now be added to the\xa0Creative menu\xa0\xa0")),(0,a.kt)("h2",{id:"molang"},(0,a.kt)("strong",{parentName:"h2"},"Molang"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"'min","_","engine","_","version'\xa0from\xa0Resource\xa0Pack\xa0and\xa0Behavior\xa0Pack manifests is now passed into\xa0Molang\xa0expression parsing. This allows for future breaking changes tied to a specific engine version\xa0\xa0")),(0,a.kt)("h2",{id:"userinterface"},(0,a.kt)("strong",{parentName:"h2"},"User\xa0Interface"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI bind objects can now utilize the ignore field")))}m.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),o=n(31792),l=n(85162);const i={},s=void 0,c={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},m=[],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}d.isMDXComponent=!0}}]);