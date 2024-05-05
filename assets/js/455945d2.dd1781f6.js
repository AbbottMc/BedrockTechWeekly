"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[60187],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,g=p["".concat(s,".").concat(y)]||p[y]||m[y]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(58168),a=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"changelog_source/stable/1.19/50/tech_sapi_stable",id:"changelog_source/stable/1.19/50/tech_sapi_stable",title:"tech_sapi_stable",description:"-   Initial APIs are releasing out of beta and will be usable without an experimental flag",source:"@site/docs/changelog_source/stable/1.19/50/tech_sapi_stable.md",sourceDirName:"changelog_source/stable/1.19/50",slug:"/changelog_source/stable/1.19/50/tech_sapi_stable",permalink:"/docs/changelog_source/stable/1.19/50/tech_sapi_stable",draft:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/changelog_source/stable/1.19/50/tech_sapi_stable.md",tags:[],version:"current",frontMatter:{}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Initial APIs are releasing out of beta and will be usable without an experimental flag"),(0,a.yg)("li",{parentName:"ul"},"The first module to release is ",(0,a.yg)("em",{parentName:"li"},"@minecraft/server")," as version 1.0.0. The APIs included with this are listed below:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Non-beta APIs like those included in the _@minecraft/server_0.0 module do not require the Beta APIs experiment to be turned on, and will be more stable over time"),(0,a.yg)("li",{parentName:"ul"},"This initial API set is narrow, but we intend to add more APIs into non-beta modules over the coming months"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("em",{parentName:"li"},"@minecraft/server")," will continue to develop in Beta and those Beta APIs have been incremented in version to 1.1.0-beta; if you wish to continue to use Beta ",(0,a.yg)("em",{parentName:"li"},"@minecraft/server")," APIs, manifest.json references will need to be updated to 1.1.0-beta"),(0,a.yg)("li",{parentName:"ul"},"APIs included in the ",(0,a.yg)("em",{parentName:"li"},"@minecraft/server")," version 1.0.0 release:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"System type (Exposed via\xa0systemglobal instance)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"run() - runs a function on the next tick (can be used to maintain a game loop tick over tick)"))),(0,a.yg)("li",{parentName:"ul"},"World type (exposed via\xa0worldglobal instance)",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"getDimension()"),(0,a.yg)("li",{parentName:"ul"},"getAllPlayers()"))),(0,a.yg)("li",{parentName:"ul"},"MinecraftDimensionTypes type",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"nether"),(0,a.yg)("li",{parentName:"ul"},"overworld"),(0,a.yg)("li",{parentName:"ul"},"theEnd"))),(0,a.yg)("li",{parentName:"ul"},"Dimension type",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"id"),(0,a.yg)("li",{parentName:"ul"},"runCommandAsync()"))),(0,a.yg)("li",{parentName:"ul"},"CommandResult type",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"commandResult"))),(0,a.yg)("li",{parentName:"ul"},"Entity type",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"id"),(0,a.yg)("li",{parentName:"ul"},"typeId"),(0,a.yg)("li",{parentName:"ul"},"dimension"),(0,a.yg)("li",{parentName:"ul"},"runCommandAsync()"))),(0,a.yg)("li",{parentName:"ul"},"Player type",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"name")))))))}m.isMDXComponent=!0}}]);