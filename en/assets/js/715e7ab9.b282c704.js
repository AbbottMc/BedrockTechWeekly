"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[98532,81791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},31792:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),s=r(16550),i=r(91980),u=r(67392),c=r(50012);function m(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=g({queryString:r,groupId:n}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=i??m;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=r(72389);const b="tabList_TRJ7",k="tabItem_hGfb";function v(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u,rightElement:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=m.indexOf(t),n=u[r].value;n!==s&&(p(t),i(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),r??t)})),c?a.createElement("div",{className:"w-full"},c):void 0)}function w(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},89021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));r(9071);const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.19/30/20/tech",id:"changelog_source/preview/1.19/30/20/tech",title:"tech",description:"Actor Properties",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/30/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/30/20",slug:"/changelog_source/preview/1.19/30/20/tech",permalink:"/en/docs/changelog_source/preview/1.19/30/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/20/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"actor-properties"},(0,a.kt)("strong",{parentName:"h2"},"Actor Properties")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Numerical actor properties (float and integer) will now always clamp their values into the range of values specified")),(0,a.kt)("h2",{id:"add-ons-and-script-engine"},(0,a.kt)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"minecraft:instant","_","despawn")," no longer affects players")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Command selector now gets the same position for the player that the command origin player position gets")),(0,a.kt)("h2",{id:"marketplace"},(0,a.kt)("strong",{parentName:"h2"},"Marketplace")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Fixed a bug where the text-to-speech feature would read the entire "My Content" page, both highlighted and non-highlighted items')),(0,a.kt)("h1",{id:"experimental-features"},(0,a.kt)("strong",{parentName:"h1"},"Experimental Features")),(0,a.kt)("h2",{id:"commands-1"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "/execute if block" command now displays integer values for block positions (',(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156285"},"MCPE-156285"),")")),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,a.kt)("em",{parentName:"li"},"function")," length would return undefined"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0",(0,a.kt)("em",{parentName:"li"},"lengthSquared"),"-"," Returns the squared length of the vector"),(0,a.kt)("li",{parentName:"ul"},"Added ",(0,a.kt)("em",{parentName:"li"},"stackOverflow")," as a possible\xa0",(0,a.kt)("em",{parentName:"li"},"WatchdogTerminateReason"),"\xa0for the\xa0",(0,a.kt)("em",{parentName:"li"},"beforeWatchdogTerminate"),"\xa0event"))),(0,a.kt)("li",{parentName:"ul"},"IRawMessage - Interface object representing a message",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"rawtext : (string | IRawMessage)","[","]"," - (optional) A list of text objects used to build a message"),(0,a.kt)("li",{parentName:"ul"},"text : string - (optional) A string containing plain text to display directly. Only valid when used as a sub member in a parent ",(0,a.kt)("em",{parentName:"li"},"rawtext")," or ",(0,a.kt)("em",{parentName:"li"},"with")," member"),(0,a.kt)("li",{parentName:"ul"},"translate : string - (optional) String representing a translation identifier to translate text in the player's selected language"),(0,a.kt)("li",{parentName:"ul"},"with : (string | IRawMessage)","[","]"," - (optional) A list of text object arguments used to fill values in the ",(0,a.kt)("em",{parentName:"li"},"translate")," text. Ignored when ",(0,a.kt)("em",{parentName:"li"},"translate")," is not present"),(0,a.kt)("li",{parentName:"ul"},"say(string | IRawMessage) - Used to broadcast a message to all players"),(0,a.kt)("li",{parentName:"ul"},"tell(string | IRawMessage) - Send a message to a player"))),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where Dynamic Properties would not persist when using worlds hosted on Bedrock Dedicated Server or Realms"),(0,a.kt)("li",{parentName:"ul"},"Pack dependencies on native modules can be declared using the module name without the need to specify a UUID, using the \u201cmodule","_","name\u201d attribute. The module name matches the import statement (e.g., \u201cmojang-minecraft\u201d)"),(0,a.kt)("li",{parentName:"ul"},'Removed mojang-gametest module version 0.1.0; packs using "mojang-gametest" specific APIs must be updated to use GameTest version 1.0.0-beta'),(0,a.kt)("li",{parentName:"ul"},'The "mojang-gametest" module 1.0.0-beta requires "mojang-minecraft" module 1.0.0-beta')),(0,a.kt)("h2",{id:"general"},(0,a.kt)("strong",{parentName:"h2"},"General")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Removed usage of ",(0,a.kt)("em",{parentName:"li"},"minecraft:unwalkable")," block component and added block creative group and category to the block description")))}m.isMDXComponent=!0},9071:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),o=r(31792),l=r(85162);const s={},i=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[],p={toc:m};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,a.kt)(l.Z,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}d.isMDXComponent=!0}}]);