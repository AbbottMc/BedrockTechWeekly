"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[50993,31164,18951],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,l),hidden:n},t)}},18228:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(58168),a=n(96540),o=n(20053),l=n(23104),c=n(56347),i=n(57485),s=n(31682),u=n(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function g(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=g(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=m({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=i??p;return d({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var h=n(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function y(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:s,rightElement:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=s[n].value;r!==c&&(g(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===t}),style:{wordBreak:"keep-all"}}),n??t)})),u?a.createElement("div",{className:"w-full"},u):void 0)}function _(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,o.A)("tabs-container",b.tabList)},a.createElement(y,(0,r.A)({},e,t)),a.createElement(_,(0,r.A)({},e,t)))}function O(e){const t=(0,h.A)();return a.createElement(v,(0,r.A)({key:String(t)},e))}},35506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={},l=void 0,c={unversionedId:"changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay",id:"changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay",title:"gameplay",description:"This update is for iOS ONLY as it is just to address some unique game crashes occurring on iOS devices.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay.mdx",sourceDirName:"changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1",slug:"/changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay",permalink:"/en/docs/changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/pocket/MCPE_iOS_ONLY_-_1.0.1/gameplay.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Bug Fixes:</strong>",id:"bug-fixes",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This update is for ",(0,a.yg)("strong",{parentName:"p"},"iOS ONLY")," as it is just to address some unique game crashes occurring on iOS devices.",(0,a.yg)("br",{parentName:"p"}),"\n","If you find any bugs, be sure to ",(0,a.yg)("a",{parentName:"p",href:"http://bugs.mojang.com",title:"Link: http://bugs.mojang.com"},"report them here!"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("a",{parentName:"p",href:"http://feedback.minecraft.net",title:"Link: http://feedback.minecraft.net"},"Click here")," to give us feedback & tell us what you think about the update.  "),(0,a.yg)("h2",{id:"bug-fixes"},(0,a.yg)("strong",{parentName:"h2"},"Bug Fixes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Fixed a crash that occurred when a player tapped the Mojang logo when launching the game"),(0,a.yg)("li",{parentName:"ul"},"Fixed assorted other crashes due to back-end issues")))}g.isMDXComponent=!0},34922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(18228),l=n(19365);const c={},i=void 0,s={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/en/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},u={},p=[],g={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(l.A,{value:"Technical Update",mdxType:"TabItem"},n.techChangelog),(0,a.yg)(l.A,{value:"Full Changelog",mdxType:"TabItem"},(0,a.yg)("div",null,(0,a.yg)("h2",{className:"changelog_divider"},"Gameplay Update"),n.gameplayChangelog,(0,a.yg)("h2",{className:"changelog_divider"},"Technical Update"),n.techChangelog))))}m.isMDXComponent=!0},83670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(34922),l=n(35506);const c={sidebar_position:99999947,title:"MCPE iOS ONLY - 1.0.1",tags:["Official","Changelog","Pocket","undefined"]},i="MCPE iOS ONLY - 1.0.1",s={unversionedId:"official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/README",id:"official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/README",title:"MCPE iOS ONLY - 1.0.1",description:"} techChangelog=/>",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/README.mdx",sourceDirName:"official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1",slug:"/official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/",permalink:"/en/docs/official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/pocket/MCPE_iOS_ONLY_-_1.0.1/README.mdx",tags:[{label:"Official",permalink:"/en/docs/tags/official"},{label:"Changelog",permalink:"/en/docs/tags/changelog"},{label:"Pocket",permalink:"/en/docs/tags/pocket"},{label:"undefined",permalink:"/en/docs/tags/undefined"}],version:"current",sidebarPosition:99999947,frontMatter:{sidebar_position:99999947,title:"MCPE iOS ONLY - 1.0.1",tags:["Official","Changelog","Pocket","undefined"]},sidebar:"changelogSidebar",previous:{title:"MCPE/WIN 10/Gear VR - 0.16.1",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_0.16.1/"},next:{title:"MCPE/WIN 10/Gear VR - 1.0.2",permalink:"/en/docs/official_changelog/pocket/MCPE-WIN_10-Gear_VR_-_1.0.2/"}},u={},p=[],g={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mcpe-ios-only---101"},"MCPE iOS ONLY - 1.0.1"),(0,a.yg)(o.default,{gameplayChangelog:(0,a.yg)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);