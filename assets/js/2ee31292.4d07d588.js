"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89105,29933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),c=n(16550),i=n(91980),s=n(67392),u=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var g=n(72389);const b="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:c,selectValue:i,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==c&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":c===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},22443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));n(47153);const o={},l=void 0,c={unversionedId:"changelog_source/preview/1.18/20/23/tech",id:"changelog_source/preview/1.18/20/23/tech",title:"tech",description:"Blocks",source:"@site/docs/changelog_source/preview/1.18/20/23/tech.mdx",sourceDirName:"changelog_source/preview/1.18/20/23",slug:"/changelog_source/preview/1.18/20/23/tech",permalink:"/docs/changelog_source/preview/1.18/20/23/tech",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/preview/1.18/20/23/tech.mdx",tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Blocks</strong>",id:"blocks",level:2},{value:"<strong>Commands</strong>",id:"commands",level:2},{value:"<strong>Molang</strong>",id:"molang",level:2},{value:"<strong>Structure Generation and Actor Spawning</strong>",id:"structure-generation-and-actor-spawning",level:2},{value:"<strong>Experimental</strong>",id:"experimental",level:2},{value:"<strong>EatMobGoal</strong>",id:"eatmobgoal",level:2},{value:"<strong>GameTest Framework</strong>",id:"gametest-framework",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"blocks"},(0,a.kt)("strong",{parentName:"h2"},"Blocks")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue where projectiles would 'bounce' off of Bells in strange ways (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-47847"},"MCPE-47847"),")")),(0,a.kt)("h2",{id:"commands"},(0,a.kt)("strong",{parentName:"h2"},"Commands")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The '/tickingarea' command no longer modifies areas from entities with ",(0,a.kt)("em",{parentName:"li"},"tick","_","world")," component")),(0,a.kt)("h2",{id:"molang"},(0,a.kt)("strong",{parentName:"h2"},"Molang")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed Logical AND to evaluate before Logical OR, and for comparison operators to evaluate before equality operators",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is a Molang Versioned Change that only takes effect for Molang expressions in packs that use a min","_","engine","_","version of 1.18.20 or higher"),(0,a.kt)("li",{parentName:"ul"},"For example\xa0A && B || Cnow evaluates as\xa0(A && B) || C\xa0and\xa0A \\< B == C ",">"," D\xa0now evalutes as\xa0(A \\< B) == (C ",">"," D)")))),(0,a.kt)("h2",{id:"structure-generation-and-actor-spawning"},(0,a.kt)("strong",{parentName:"h2"},"Structure Generation and Actor Spawning")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed duplicate End Crystals spawning on top of End Spikes (",(0,a.kt)("a",{parentName:"li",href:"https://bugs.mojang.com/browse/MCPE-147817"},"MCPE-147817"),")")),(0,a.kt)("h2",{id:"experimental"},(0,a.kt)("strong",{parentName:"h2"},"Experimental")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed an issue in which actor properties would not always sync from server to client")),(0,a.kt)("h2",{id:"eatmobgoal"},(0,a.kt)("strong",{parentName:"h2"},"EatMobGoal")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EatMobGoal is now unable to start when the player is the target")),(0,a.kt)("h2",{id:"gametest-framework"},(0,a.kt)("strong",{parentName:"h2"},"GameTest Framework")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Vector",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function\xa0length(): number- Returns the length of this vector"),(0,a.kt)("li",{parentName:"ul"},"Added function\xa0normalized(): Vector- Returns this as a normalized vector"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0distance(a:Vector, b:Vector): number- Returns distance between two vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0lerp(a:Vector, b:Vector, t: number): Vector- Returns the linear interpolation between a and b using t as the control"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0slerp(a:Vector, b:Vector, s: number): Vector- Returns the spherical linear interpolation between a and b using s as the control"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0cross(a:Vector, b:Vector): Vector- Returns the cross product of these two vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0add(a:Vector, b:Vector): Vector- Returns the addition of these vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0subtract(a:Vector, b:Vector): Vector- Returns the subtraction of these vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0multiply(a:Vector, b:Vector): Vector- Returns the component-wise product of these vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0divide(a:Vector, b:Vector): Vector- Returns the component-wise division of these vectors"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0multiply(a:Vector, b:number): Vector- Returns the product of this vector and a scalar"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0divide(a:Vector, b:number): Vector- Returns the division of this vector and a scalar"),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0min(a:Vector, b:Vector): Vector- Returns a vector that is made from the smallest components of two vectors."),(0,a.kt)("li",{parentName:"ul"},"Added static function\xa0max(a:Vector, b:Vector): Vector- Returns a vector that is made from the largest components of two vectors"))),(0,a.kt)("li",{parentName:"ul"},"World",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added function\xa0playSound(soundName: String, soundOptions: SoundOptions): void- plays a sound specified by the sound name, at a location, pitch, or volume as optionally specified in the SoundOptions argument"))),(0,a.kt)("li",{parentName:"ul"},"EntityItemComponent",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Added component\xa0EntityItemComponentthat can be used to obtain an ItemStack from an item entity \u2013 e.g., getComponent(\u201citem\u201d).itemStack")))))}d.isMDXComponent=!0},47153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(67294),o=n(3905),l=n(74866),c=n(85162);const i={},s=void 0,u={unversionedId:"components/TechChangelogSwitcher",id:"components/TechChangelogSwitcher",title:"TechChangelogSwitcher",description:"{",source:"@site/docs/components/TechChangelogSwitcher.mdx",sourceDirName:"components",slug:"/components/TechChangelogSwitcher",permalink:"/docs/components/TechChangelogSwitcher",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/components/TechChangelogSwitcher.mdx",tags:[],version:"current",frontMatter:{}},d={},m=[],p={toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Fragment,null,void 0!==n.techSapiDiff?(0,o.kt)(l.Z,{className:"changelog_sapi_tabs",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"\u66f4\u65b0\u63cf\u8ff0",mdxType:"TabItem"},n.techSapi),(0,o.kt)(c.Z,{value:"\u63a5\u53e3\u53d8\u52a8",mdxType:"TabItem"},n.techSapiDiff)):(0,o.kt)(a.Fragment,null,n.techSapi)))}h.isMDXComponent=!0}}]);