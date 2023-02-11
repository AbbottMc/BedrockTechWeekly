"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[57613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),d=i,v=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[h]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={id:"WeatherChangeEvent",title:"Class: WeatherChangeEvent",sidebar_label:"WeatherChangeEvent",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/classes/WeatherChangeEvent",id:"sapi/preview/server/classes/WeatherChangeEvent",title:"Class: WeatherChangeEvent",description:"Contains information related to changes in weather in the",source:"@site/docs/sapi/preview/server/classes/WeatherChangeEvent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/WeatherChangeEvent",permalink:"/en/docs/sapi/preview/server/classes/WeatherChangeEvent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"WeatherChangeEvent",title:"Class: WeatherChangeEvent",sidebar_label:"WeatherChangeEvent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"Vector",permalink:"/en/docs/sapi/preview/server/classes/Vector"},next:{title:"WeatherChangeEventSignal",permalink:"/en/docs/sapi/preview/server/classes/WeatherChangeEventSignal"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"dimension",id:"dimension",level:3},{value:"lightning",id:"lightning",level:3},{value:"raining",id:"raining",level:3}],c={toc:p};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contains information related to changes in weather in the\nenvironment."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dimension"},"dimension"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"dimension"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Dimension in which the weather has changed."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lightning"},"lightning"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"lightning"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether it is lightning after the change in weather."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"raining"},"raining"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"raining"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Whether it is raining after the change in weather."))}h.isMDXComponent=!0}}]);