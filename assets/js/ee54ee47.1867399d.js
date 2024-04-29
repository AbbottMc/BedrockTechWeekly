"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[58861,95107,6911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(a),g=n,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return a?r.createElement(m,l(l({ref:t},i),{},{components:a})):r.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),c=a(16550),s=a(91980),u=a(67392),i=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=s??d;return g({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var h=a(72389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:c,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=i.indexOf(t),r=u[a].value;r!==c&&(d(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>i.push(e),onKeyDown:g,onClick:p},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},29448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.20/14/gameplay",id:"changelog_source/stable/1.20/14/gameplay",title:"gameplay",description:"Posted: August 8, 2023",source:"@site/docs/changelog_source/stable/1.20/14/gameplay.mdx",sourceDirName:"changelog_source/stable/1.20/14",slug:"/changelog_source/stable/1.20/14/gameplay",permalink:"/docs/changelog_source/stable/1.20/14/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.20/14/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],i={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," August 8, 2023"),(0,n.kt)("p",null,"A new update has been released for PlayStation only to address a top crash and Store issue."),(0,n.kt)("p",null,"Please continue to upvote and report any new bugs at ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,n.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net"},"feedback.minecraft.net"),"!  "),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed a top crash that could occur during gameplay"),(0,n.kt)("li",{parentName:"ul"},"Fixed an issue on PlayStation causing players to lose access to the Store")))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),c=a(85162);const s={},u=void 0,i={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],g={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(c.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}m.isMDXComponent=!0},32964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(29448);const c={sidebar_position:99999988,title:"1.20.14",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.20"]},s="Minecraft - 1.20.14 (PlayStation Only)",u={unversionedId:"official_changelog/stable/1.20/14",id:"official_changelog/stable/1.20/14",title:"1.20.14",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.20/14.mdx",sourceDirName:"official_changelog/stable/1.20",slug:"/official_changelog/stable/1.20/14",permalink:"/docs/official_changelog/stable/1.20/14",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.20/14.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.20",permalink:"/docs/tags/1-20"}],version:"current",sidebarPosition:99999988,frontMatter:{sidebar_position:99999988,title:"1.20.14",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.20"]},sidebar:"changelogSidebar",previous:{title:"1.20.15",permalink:"/docs/official_changelog/stable/1.20/15"},next:{title:"1.20.13",permalink:"/docs/official_changelog/stable/1.20/13"}},i={},d=[],p={toc:d};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft---12014-playstation-only"},"Minecraft - 1.20.14 (PlayStation Only)"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}g.isMDXComponent=!0}}]);