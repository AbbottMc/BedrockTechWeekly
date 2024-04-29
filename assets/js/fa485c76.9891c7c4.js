"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[75797,44370,95107],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,l(l({ref:t},u),{},{components:a})):r.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(87462),n=a(67294),o=a(86010),l=a(12466),s=a(16550),c=a(91980),i=a(67392),u=a(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,i]=g({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=c??d;return m({value:e,tabValues:o})?e:null})();(0,n.useEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var h=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),r=i[a].value;r!==s&&(d(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",b)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},54293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},l=void 0,s={unversionedId:"changelog_source/stable/1.19/83/gameplay",id:"changelog_source/stable/1.19/83/gameplay",title:"gameplay",description:"Posted: May 17, 2023",source:"@site/docs/changelog_source/stable/1.19/83/gameplay.mdx",sourceDirName:"changelog_source/stable/1.19/83",slug:"/changelog_source/stable/1.19/83/gameplay",permalink:"/docs/changelog_source/stable/1.19/83/gameplay",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/83/gameplay.mdx",tags:[],version:"current",frontMatter:{}},c={},i=[{value:"<strong>Fixes:</strong>",id:"fixes",level:2}],u={toc:i};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Posted:")," May 17, 2023"),(0,n.kt)("p",null,"A new update has been released to address some issues that were introduced with the 1.19.80 update."),(0,n.kt)("p",null,"Please continue to upvote and report any new bugs at ",(0,n.kt)("a",{parentName:"p",href:"https://bugs.mojang.com"},"bugs.mojang.com")," and leave us your feedback at ",(0,n.kt)("a",{parentName:"p",href:"https://feedback.minecraft.net"},"feedback.minecraft.net"),"!  "),(0,n.kt)("h2",{id:"fixes"},(0,n.kt)("strong",{parentName:"h2"},"Fixes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed several crashes that could occur during gameplay"),(0,n.kt)("li",{parentName:"ul"},"The inventory cursor no longer snaps to a random spot when flicking the left thumbstick (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-169176"},"MCPE-169176"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed custom textures that override \u2018minecraft\u2019 blocks with aux metadata as a list of textures"),(0,n.kt)("li",{parentName:"ul"},"Several fixes to custom spawn eggs (",(0,n.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-170184"},"MCPE-170184"),")",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Re-enabled use of aux value to refer to custom eggs in commands for game versions 1.19.80 and beyond, eg. "/give @s spawn',"_",'egg 1 654"'),(0,n.kt)("li",{parentName:"ul"},'Re-enabled use of Molang queries for the item\'s data field in recipes for game versions 1.19.80 and beyond, eg. { "item": "spawn',"_",'egg", "data": "query.get',"_","actor","_","info","_","id('namespace:actor')\" }"),(0,n.kt)("li",{parentName:"ul"},'Re-enabled use of "set',"_","actor","_",'id" in loot tables when refering to custom spawn eggs for game versions 1.19.80 and beyond')))))}d.isMDXComponent=!0},61499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905),l=a(74866),s=a(85162);const c={},i=void 0,u={unversionedId:"components/ChangelogSwitcher",id:"components/ChangelogSwitcher",title:"ChangelogSwitcher",description:"{props.techChangelog}",source:"@site/docs/components/ChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/ChangelogSwitcher",permalink:"/docs/components/ChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/ChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"\u6280\u672f\u66f4\u65b0",mdxType:"TabItem"},a.techChangelog),(0,o.kt)(s.Z,{value:"\u5b8c\u6574\u65e5\u5fd7",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6e38\u620f\u5185\u5bb9\u66f4\u65b0"),a.gameplayChangelog,a.techChangelog?(0,o.kt)(n.Fragment,null,(0,o.kt)("h2",{className:"changelog_divider"},"\u6280\u672f\u66f4\u65b0"),a.techChangelog):void 0))))}g.isMDXComponent=!0},83134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905)),o=a(61499),l=a(54293);const s={sidebar_position:99999994,title:"1.19.83",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.19"]},c="Minecraft - 1.19.83 (Bedrock)",i={unversionedId:"official_changelog/stable/1.19/83",id:"official_changelog/stable/1.19/83",title:"1.19.83",description:"} techChangelog=/>",source:"@site/docs/official_changelog/stable/1.19/83.mdx",sourceDirName:"official_changelog/stable/1.19",slug:"/official_changelog/stable/1.19/83",permalink:"/docs/official_changelog/stable/1.19/83",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/official_changelog/stable/1.19/83.mdx",tags:[{label:"\u5b98\u65b9",permalink:"/docs/tags/\u5b98\u65b9"},{label:"\u66f4\u65b0\u65e5\u5fd7",permalink:"/docs/tags/\u66f4\u65b0\u65e5\u5fd7"},{label:"\u7a33\u5b9a\u7248",permalink:"/docs/tags/\u7a33\u5b9a\u7248"},{label:"1.19",permalink:"/docs/tags/1-19"}],version:"current",sidebarPosition:99999994,frontMatter:{sidebar_position:99999994,title:"1.19.83",tags:["\u5b98\u65b9","\u66f4\u65b0\u65e5\u5fd7","\u7a33\u5b9a\u7248","1.19"]},sidebar:"changelogSidebar",previous:{title:"1.20.0",permalink:"/docs/official_changelog/stable/1.20/0"},next:{title:"1.19.81",permalink:"/docs/official_changelog/stable/1.19/81"}},u={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"minecraft---11983-bedrock"},"Minecraft - 1.19.83 (Bedrock)"),(0,n.kt)(o.default,{gameplayChangelog:(0,n.kt)(l.default,{mdxType:"GameplayChangelog"}),techChangelog:void 0,mdxType:"Switcher"}))}m.isMDXComponent=!0}}]);