"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[84816,64137,8933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},31792:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),s=a(16550),i=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const b="tabList_TRJ7",y="tabItem_hGfb";function v(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c,rightElement:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==s&&(p(t),i(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:g,onClick:m},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":s===t}),style:{wordBreak:"keep-all"}}),a??t)})),u?r.createElement("div",{className:"w-full"},u):void 0)}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},31437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/stable/1.18/1/gameplay",id:"changelog_source/stable/1.18/1/gameplay",title:"gameplay",description:"Posted: December 2, 2021",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/stable/1.18/1/gameplay.mdx",sourceDirName:"changelog_source/stable/1.18/1",slug:"/changelog_source/stable/1.18/1/gameplay",permalink:"/en/docs/changelog_source/stable/1.18/1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},c=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Posted:")," December 2, 2021"),(0,r.kt)("p",null,"A new update is now available for Minecraft that addresses some issues found since the release of Caves & Cliffs: Part II."),(0,r.kt)("p",null,"The update is currently available on most Bedrock Edition platforms. An update for Nintendo Switch will be available in the coming days."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://feedback.minecraft.net/hc/article_attachments/4415391953933/cave.jpg",alt:"cave.jpg"})),(0,r.kt)("h2",{id:"fixes"},(0,r.kt)("strong",{parentName:"h2"},"Fixes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when copying a world backup in certain languages on PlayStation"),(0,r.kt)("li",{parentName:"ul"},"Fixed a crash that could occur when chatting and playing on Realms"),(0,r.kt)("li",{parentName:"ul"},"Decreased the amount of Diamond Ore that generates to match Java Edition"),(0,r.kt)("li",{parentName:"ul"},"Fixed lighting bugs when removing light sources after returning to the Overworld from other dimensions (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-145828"},"MCPE-145828"),")"),(0,r.kt)("li",{parentName:"ul"},"Players no longer have problems moving after respawning or getting out of a Bed"),(0,r.kt)("li",{parentName:"ul"},"Added a warning prompt explaining potential loss of data when setting File Storage Location to External on Android devices"),(0,r.kt)("li",{parentName:"ul"},"Fixed various crashes and storage-related issues with Android multi-user functionality and Amazon Kids/Freetime (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-106524"},"MCPE-106524"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-107503"},"MCPE-107503"),", ",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-37685"},"MCPE-37685"),")"),(0,r.kt)("li",{parentName:"ul"},"Fixed simulation stopping in multiplayer sessions when other players move away from one player\u2019s render distance (",(0,r.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147391"},"MCPE-147391"),")"),(0,r.kt)("li",{parentName:"ul"},"The teleport command will no longer succeed when 'checkForBlocks' is true and the destination is obstructed"),(0,r.kt)("li",{parentName:"ul"},"Fixed an issue that could cause a faulty purchase page for Realms when the maximum number of Realms are already owned"),(0,r.kt)("li",{parentName:"ul"},"Optimized the Marketplace Inventory screen and improved loading of content images")),(0,r.kt)("p",null,"Please search for any bugs you find on ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and let us know what you think at ",(0,r.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),"."))}d.isMDXComponent=!0},88247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(31792),l=a(85162);const s={},i=void 0,c={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Technical Update",mdxType:"TabItem"},a.techChangelog),(0,r.kt)(l.Z,{value:"Full Changelog",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("h2",{className:"changelog_divider"},"Gameplay Update"),a.gameplayChangelog,(0,r.kt)("h2",{className:"changelog_divider"},"Technical Update"),a.techChangelog))))}m.isMDXComponent=!0},39308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(88247),l=a(31437);const s={sidebar_position:99999911,title:"1.18.1",tags:["Official","Changelog","Stable","1.18"]},i="Minecraft - 1.18.1 (Bedrock)",c={unversionedId:"official_changelog/stable/1.18/1",id:"official_changelog/stable/1.18/1",title:"1.18.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/stable/1.18/1.mdx",sourceDirName:"official_changelog/stable/1.18",slug:"/official_changelog/stable/1.18/1",permalink:"/en/docs/official_changelog/stable/1.18/1",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.18/1.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Stable",permalink:"/en/docs/tags/stable"},{label:"1.18",permalink:"/en/docs/tags/1-18"}],version:"current",sidebarPosition:99999911,frontMatter:{sidebar_position:99999911,title:"1.18.1",tags:["Official","Changelog","Stable","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.18.2",permalink:"/en/docs/official_changelog/stable/1.18/2"},next:{title:"1.18.0",permalink:"/en/docs/official_changelog/stable/1.18/0"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"minecraft---1181-bedrock"},"Minecraft - 1.18.1 (Bedrock)"),(0,r.kt)(o.default,{gameplayChangelog:(0,r.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);