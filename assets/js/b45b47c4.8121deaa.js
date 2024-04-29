"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[9028,46856,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),i=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>T});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),c=a(16550),s=a(91980),i=a(67392),u=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,i]=g({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var h=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:c,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==c&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},71199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,c={unversionedId:"changelog_source/stable/1.18/33/gameplay",id:"changelog_source/stable/1.18/33/gameplay",title:"gameplay",description:"A new update is available for Nintendo Switch that addresses some issues that have occurred since the release of 1.18.30.",source:"@site/docs/changelog_source/stable/1.18/33/gameplay.mdx",sourceDirName:"changelog_source/stable/1.18/33",slug:"/changelog_source/stable/1.18/33/gameplay",permalink:"/docs/changelog_source/stable/1.18/33/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.18/33/gameplay.mdx",tags:[],version:"current",frontMatter:{}},s={},i=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:i};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A new update is available for Nintendo Switch that addresses some issues that have occurred since the release of 1.18.30."),(0,n.kt)("p",null,"Please search for any bugs you find on ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com/"},"bugs.mojang.com")," and let us know what you think at ",(0,n.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net/"},"feedback.minecraft.net"),".  "),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enabled configuration changes of some back-end services"),(0,n.kt)("li",{parentName:"ul"},"Added a new button in Settings to clear local cache data",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will not delete save game data")))))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),c=a(85162);const s={},i=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(c.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},15273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(71199);const c={sidebar_position:99999903,title:"1.18.33",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.18"]},s="Minecraft - 1.18.33 (Switch)",i={unversionedId:"official_changelog/stable/1.18/33",id:"official_changelog/stable/1.18/33",title:"1.18.33",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.18/33.mdx",sourceDirName:"official_changelog/stable/1.18",slug:"/official_changelog/stable/1.18/33",permalink:"/docs/official_changelog/stable/1.18/33",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.18/33.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.18",permalink:"/docs/tags/1-18"}],version:"current",sidebarPosition:99999903,frontMatter:{sidebar_position:99999903,title:"1.18.33",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.18"]},sidebar:"changelogSidebar",previous:{title:"1.19.0",permalink:"/docs/official_changelog/stable/1.19/0"},next:{title:"1.18.32",permalink:"/docs/official_changelog/stable/1.18/32"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft---11833-switch"},"Minecraft - 1.18.33 (Switch)"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);