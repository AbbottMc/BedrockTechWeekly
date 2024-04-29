"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[27410,81791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),o=n(67294),a=n(86010),i=n(12466),l=n(16550),c=n(91980),u=n(67392),s=n(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,u]=h({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,s.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=c??p;return m({value:e,tabValues:a})?e:null})();(0,o.useEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var g=n(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=u[n].value;r!==l&&(p(t),c(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",v,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",b)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(w,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},38617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));n(9071);const a={},i=void 0,l={unversionedId:"changelog_source/preview/1.19/60/23/tech",id:"changelog_source/preview/1.19/60/23/tech",title:"tech",description:"Components",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/changelog_source/preview/1.19/60/23/tech.mdx",sourceDirName:"changelog_source/preview/1.19/60/23",slug:"/changelog_source/preview/1.19/60/23/tech",permalink:"/en/docs/changelog_source/preview/1.19/60/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.19/60/23/tech.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<strong>Components</strong>",id:"components",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Projectile</strong>",id:"projectile",level:2},{value:"<strong>Component</strong>",id:"component",level:3},{value:"<strong>API (Experimental)</strong>",id:"api-experimental",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"components"},(0,o.kt)("strong",{parentName:"h2"},"Components")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Expanded "minecraft:shooter" component to define multiple projectiles that can specify different projectile definitions and condition filters'),(0,o.kt)("li",{parentName:"ul"},"Exposed more fields to shooter component to allow for more projectile customization such as throw power, sounds, and whether the attack is a magic attack")),(0,o.kt)("h2",{id:"molang"},(0,o.kt)("strong",{parentName:"h2"},"Molang")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where dividing any value in Molang by a dynamically determined negative variable resulted in a division by a positive (absolute) value instead",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.19.60 or higher")))),(0,o.kt)("h2",{id:"projectile"},(0,o.kt)("strong",{parentName:"h2"},"Projectile")),(0,o.kt)("h3",{id:"component"},(0,o.kt)("strong",{parentName:"h3"},"Component")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Projectiles that teleport their owner will no longer do so while their owner is sleeping (",(0,o.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-161189"},"MCPE-161189"),")")),(0,o.kt)("h2",{id:"api-experimental"},(0,o.kt)("strong",{parentName:"h2"},"API (Experimental)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added method\xa0setOnFire(seconds: number, useEffects?: boolean = true): boolean)which sets an entity on fire (if it is not in water or rain)."),(0,o.kt)("li",{parentName:"ul"},"Added method\xa0extinguishFire(useEffects?: boolean = true): void which extinguishes the fire."),(0,o.kt)("li",{parentName:"ul"},"If an entity is on fire, you can call\xa0getComponent('minecraft:onfire')on it, which returns an object of type\xa0EntityOnFireComponent, which has a property\xa0onFireTicksRemaining."),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0viewDirectionwould return the direction from the previous tick"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getEntitiesFromViewDirectionwould use the direction from the previous tick"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0getBlockFromViewDirectionwould use the direction from the previous tick"),(0,o.kt)("li",{parentName:"ul"},"Fixed a bug where\xa0headLocationwould return the location from the previous tick"),(0,o.kt)("li",{parentName:"ul"},"Renamed ScriptScriptCommandMessageEvent to ScriptEventCommandMessageEvent")))}p.isMDXComponent=!0},9071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(74866),i=n(85162);const l={},c=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{props.techSapi}",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/en/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Update Description",mdxType:"TabItem"},n.techSapi),(0,o.kt)(i.Z,{value:"API Changelog",mdxType:"TabItem"},n.techSapiChangelog)))}m.isMDXComponent=!0}}]);