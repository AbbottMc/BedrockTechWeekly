"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[70322,43115],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,d=m["".concat(i,".").concat(p)]||m[p]||g[p]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(96540),n=r(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(o.tabItem,l),hidden:r},t)}},18228:(e,t,r)=>{r.d(t,{A:()=>N});var a=r(58168),n=r(96540),o=r(20053),l=r(23104),s=r(56347),i=r(57485),u=r(31682),c=r(89466);function m(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function g(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=g(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=d({queryString:r,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),y=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var y=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u,rightElement:c}=e;const m=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),p=e=>{const t=e.currentTarget,r=m.indexOf(t),a=u[r].value;a!==s&&(g(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=m.indexOf(e.currentTarget)+1;t=m[r]??m[0];break}case"ArrowLeft":{const r=m.indexOf(e.currentTarget)-1;t=m[r]??m[m.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),r??t)})),c?n.createElement("div",{className:"w-full"},c):void 0)}function v(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return n.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},n.createElement(b,(0,a.A)({},e,t)),n.createElement(v,(0,a.A)({},e,t)))}function N(e){const t=(0,y.A)();return n.createElement(w,(0,a.A)({key:String(t)},e))}},33337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(58168),n=(r(96540),r(15680));r(88502);const o={},l=void 0,s={unversionedId:"changelog_source/preview/1.19/30/20/tech",id:"changelog_source/preview/1.19/30/20/tech",title:"tech",description:"Actor Properties",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/30/20/tech.mdx",sourceDirName:"changelog_source/preview/1.19/30/20",slug:"/changelog_source/preview/1.19/30/20/tech",permalink:"/en/docs/changelog_source/preview/1.19/30/20/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/30/20/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},u=[{value:"<strong>Actor Properties</strong>",id:"actor-properties",level:2},{value:"<strong>Add-Ons and Script Engine</strong>",id:"add-ons-and-script-engine",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Marketplace</strong>",id:"marketplace",level:2},{value:"<strong>Commands</strong>",id:"commands-1",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2},{value:"<strong>General</strong>",id:"general",level:2}],c={toc:u},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"actor-properties"},(0,n.yg)("strong",{parentName:"h2"},"Actor Properties")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Numerical actor properties (float and integer) will now always clamp their values into the range of values specified")),(0,n.yg)("h2",{id:"add-ons-and-script-engine"},(0,n.yg)("strong",{parentName:"h2"},"Add-Ons and Script Engine")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("em",{parentName:"li"},"minecraft:instant","_","despawn")," no longer affects players")),(0,n.yg)("h2",{id:"commands"},(0,n.yg)("strong",{parentName:"h2"},"Commands")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command selector now gets the same position for the player that the command origin player position gets")),(0,n.yg)("h2",{id:"marketplace"},(0,n.yg)("strong",{parentName:"h2"},"Marketplace")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Fixed a bug where the text-to-speech feature would read the entire "My Content" page, both highlighted and non-highlighted items')),(0,n.yg)("h1",{id:"experimental-features"},(0,n.yg)("strong",{parentName:"h1"},"Experimental Features")),(0,n.yg)("h2",{id:"commands-1"},(0,n.yg)("strong",{parentName:"h2"},"Commands")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'The "/execute if block" command now displays integer values for block positions (',(0,n.yg)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-156285"},"MCPE-156285"),")")),(0,n.yg)("h2",{id:"gametest-framework"},(0,n.yg)("strong",{parentName:"h2"},"GameTest Framework")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Vector",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Fixed a bug where ",(0,n.yg)("em",{parentName:"li"},"function")," length would return undefined"),(0,n.yg)("li",{parentName:"ul"},"Added function\xa0",(0,n.yg)("em",{parentName:"li"},"lengthSquared"),"-"," Returns the squared length of the vector"),(0,n.yg)("li",{parentName:"ul"},"Added ",(0,n.yg)("em",{parentName:"li"},"stackOverflow")," as a possible\xa0",(0,n.yg)("em",{parentName:"li"},"WatchdogTerminateReason"),"\xa0for the\xa0",(0,n.yg)("em",{parentName:"li"},"beforeWatchdogTerminate"),"\xa0event"))),(0,n.yg)("li",{parentName:"ul"},"IRawMessage - Interface object representing a message",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"rawtext : (string | IRawMessage)","[","]"," - (optional) A list of text objects used to build a message"),(0,n.yg)("li",{parentName:"ul"},"text : string - (optional) A string containing plain text to display directly. Only valid when used as a sub member in a parent ",(0,n.yg)("em",{parentName:"li"},"rawtext")," or ",(0,n.yg)("em",{parentName:"li"},"with")," member"),(0,n.yg)("li",{parentName:"ul"},"translate : string - (optional) String representing a translation identifier to translate text in the player's selected language"),(0,n.yg)("li",{parentName:"ul"},"with : (string | IRawMessage)","[","]"," - (optional) A list of text object arguments used to fill values in the ",(0,n.yg)("em",{parentName:"li"},"translate")," text. Ignored when ",(0,n.yg)("em",{parentName:"li"},"translate")," is not present"),(0,n.yg)("li",{parentName:"ul"},"say(string | IRawMessage) - Used to broadcast a message to all players"),(0,n.yg)("li",{parentName:"ul"},"tell(string | IRawMessage) - Send a message to a player"))),(0,n.yg)("li",{parentName:"ul"},"Fixed a bug where Dynamic Properties would not persist when using worlds hosted on Bedrock Dedicated Server or Realms"),(0,n.yg)("li",{parentName:"ul"},"Pack dependencies on native modules can be declared using the module name without the need to specify a UUID, using the \u201cmodule","_","name\u201d attribute. The module name matches the import statement (e.g., \u201cmojang-minecraft\u201d)"),(0,n.yg)("li",{parentName:"ul"},'Removed mojang-gametest module version 0.1.0; packs using "mojang-gametest" specific APIs must be updated to use GameTest version 1.0.0-beta'),(0,n.yg)("li",{parentName:"ul"},'The "mojang-gametest" module 1.0.0-beta requires "mojang-minecraft" module 1.0.0-beta')),(0,n.yg)("h2",{id:"general"},(0,n.yg)("strong",{parentName:"h2"},"General")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Removed usage of ",(0,n.yg)("em",{parentName:"li"},"minecraft:unwalkable")," block component and added block creative group and category to the block description")))}g.isMDXComponent=!0},88502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=r(58168),n=(r(96540),r(15680)),o=r(18228),l=r(19365);const s={},i=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},c={},m=[],g={toc:m},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)(o.A,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,n.yg)(l.A,{value:"Update Description",mdxType:"TabItem"},r.techSapi),(0,n.yg)(l.A,{value:"API Changelog",mdxType:"TabItem"},r.techSapiChangelog)))}d.isMDXComponent=!0}}]);