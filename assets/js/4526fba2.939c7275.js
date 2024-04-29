"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[39264,26745,95107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>P});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),l=r(16550),s=r(91980),c=r(67392),u=r(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:r,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var h=r(72389);const v="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function P(e){const t=(0,h.Z)();return n.createElement(k,(0,a.Z)({key:String(t)},e))}},2701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"changelog_source/preview/1.20/70/25/gameplay",id:"changelog_source/preview/1.20/70/25/gameplay",title:"gameplay",description:"Posted: 22 February 2024",source:"@site/docs/changelog_source/preview/1.20/70/25/gameplay.mdx",sourceDirName:"changelog_source/preview/1.20/70/25",slug:"/changelog_source/preview/1.20/70/25/gameplay",permalink:"/docs/changelog_source/preview/1.20/70/25/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.20/70/25/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"<strong>Information on the Minecraft Preview and Beta:</strong>",id:"information-on-the-minecraft-preview-and-beta",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," 22 February 2024"),(0,n.kt)("h2",{id:"information-on-the-minecraft-preview-and-beta"},(0,n.kt)("strong",{parentName:"h2"},"Information on the Minecraft Preview and Beta:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"These work-in-progress versions can be unstable and may not be representative of final version quality"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is available on Xbox, PlayStation 4, Windows 10/11, and iOS devices. More information can be found at ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/PreviewFAQ"},"aka.ms/PreviewFAQ")),(0,n.kt)("li",{parentName:"ul"},"The beta is available on Android (Google Play). To join or leave the beta, see\xa0",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/JoinMCBeta"},"aka.ms/JoinMCBeta")," for detailed instructions.  ")),(0,n.kt)("h1",{id:"playstation-4-preview"},"PlayStation 4 Preview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview is now available on PlayStation 4! Get Minecraft Preview to experience the latest and greatest upcoming Minecraft features and provide feedback to the Mojang team"),(0,n.kt)("li",{parentName:"ul"},"To access the Preview, load into Minecraft, navigate to Settings, and select Preview in the sidebar to open the download page on PlayStation Store. Minecraft Preview is not available for disk owners of Minecraft"),(0,n.kt)("li",{parentName:"ul"},"Minecraft Preview runs as a separate game on PlayStation so you can continue to play both versions on your PS4 or PS5 (through backwards compatibility)  ")),(0,n.kt)("h1",{id:"updated-servers-tab-experience"},"Updated 'Servers Tab' Experience"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Update on Feb 23:")," We're not quite ready to flip the switch on the new Servers tab but keep an eye out for it soon in an upcoming Preview release!  "),(0,n.kt)("p",null,"An upcoming Preview will introduce a new way of playing on Featured Servers and others of your own. You will get to enjoy Featured Servers from our partners with exclusive environments, in a new visual style."),(0,n.kt)("p",null,"Some other features in this new design are the Server Activities and News."),(0,n.kt)("p",null,"You will also be able to add and edit your own custom server (on PC and mobile), setting all the parameters needed to invite your friends and have an enjoyable experience!"),(0,n.kt)("h1",{id:"fixes"},"Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed 'minecraft:destroy","_","time' old components not updating to current version")))}p.isMDXComponent=!0},61499:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=r(87462),n=r(67294),o=r(3905),i=r(74866),l=r(85162);const s={},c=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},r.techChangelog),(0,o.kt)(l.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),r.gameplayChangelog,r.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),r.techChangelog):void 0))))}f.isMDXComponent=!0},88356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(61499),i=r(2701);const l={sidebar_position:99999730,title:"1.20.70.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},s="Minecraft Beta & Preview - 1.20.70.25",c={unversionedId:"official_changelog/preview/1.20/70/25",id:"official_changelog/preview/1.20/70/25",title:"1.20.70.25",description:"} techChangelog=/>",source:"@site/docs/official_changelog/preview/1.20/70/25.mdx",sourceDirName:"official_changelog/preview/1.20/70",slug:"/official_changelog/preview/1.20/70/25",permalink:"/docs/official_changelog/preview/1.20/70/25",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/preview/1.20/70/25.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u9884\u89c8\u7248",permalink:"/docs/tags/\u9884\u89c8\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999730,frontMatter:{sidebar_position:99999730,title:"1.20.70.25",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u9884\u89c8\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.80.20",permalink:"/docs/official_changelog/preview/1.20/80/20"},next:{title:"1.20.70.24",permalink:"/docs/official_changelog/preview/1.20/70/24"}},u={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft-beta--preview---1207025"},"Minecraft Beta & Preview - 1.20.70.25"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(i.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);