"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[64571,81791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),p=a,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),c=r(16550),i=r(91980),u=r(67392),s=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=m(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=r(72389);const b="tabList__CuJ",v="tabItem_LNqP";function w(e){let{className:t,block:r,selectedValue:c,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,r=s.indexOf(t),n=u[r].value;n!==c&&(d(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":c===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(w,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},76545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(9071);const o={},l=void 0,c={unversionedId:"changelog_source/preview/1.17/20/21/tech",id:"changelog_source/preview/1.17/20/21/tech",title:"tech",description:"GameTest\xa0Framework (Experimental)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.17/20/21/tech.mdx",sourceDirName:"changelog_source/preview/1.17/20/21",slug:"/changelog_source/preview/1.17/20/21/tech",permalink:"/en/docs/changelog_source/preview/1.17/20/21/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.17/20/21/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>GameTest\xa0Framework (Experimental)</strong>\xa0",id:"gametestframework-experimental",level:2},{value:"<strong>Commands</strong>\xa0",id:"commands",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"gametestframework-experimental"},(0,a.kt)("strong",{parentName:"h2"},"GameTest\xa0Framework (Experimental)"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Renamed helper method\xa0worldLocation(location :\xa0BlockLocation) to\xa0worldBlockLocation(location :\xa0BlockLocation)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Renamed helper method\xa0relativeLocation(location :\xa0BlockLocation) to\xa0relativeBlockLocation(location :\xa0BlockLocation)\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0worldLocation(relativeLocation\xa0: Location) : Location - From a Location with coordinates relative to the\xa0GameTest\xa0structure block, returns a new Location with coordinates relative to the world\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0relativeLocation(worldLocation\xa0: Location) : Location - From a Location, returns a new Location with coordinates relative to the current\xa0GameTest\xa0structure block\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0spawnWithoutBehaviorsAtLocation(entityIdentifier\xa0: string, location : Location) : Entity - Spawns an entity at a location without any AI\xa0behaviors\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0rotateDirection(direction : Direction) : Direction - Rotates the given direction relative to the\xa0GameTest\xa0structure rotation\xa0"),(0,a.kt)("li",{parentName:"ul"},"Added helper method\xa0getTestDirection() : Direction - Returns the direction the\xa0GameTest is facing based on its structure rotation\xa0")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands"),"\xa0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Commands ran through animations now will run in the order defined in animation files on all platforms, including Realms \xa0"),(0,a.kt)("li",{parentName:"ul"},"Commands or structures being placed in a loaded area that is only partially loaded by a ticking area will now be considered loaded if the required chunks are loaded")))}d.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(74866),l=r(85162);const c={},i=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}p.isMDXComponent=!0}}]);