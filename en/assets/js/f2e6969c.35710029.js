"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[49641],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=k;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},32833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={id:"MoonPhase",title:"Enumeration: MoonPhase",sidebar_label:"MoonPhase",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"sapi/stable/server/enums/MoonPhase",id:"sapi/stable/server/enums/MoonPhase",title:"Enumeration: MoonPhase",description:"Enum containing the different phases of the moon based on",source:"@site/docs/sapi/stable/server/enums/MoonPhase.md",sourceDirName:"sapi/stable/server/enums",slug:"/sapi/stable/server/enums/MoonPhase",permalink:"/en/docs/sapi/stable/server/enums/MoonPhase",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MoonPhase",title:"Enumeration: MoonPhase",sidebar_label:"MoonPhase",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"ItemLockMode",permalink:"/en/docs/sapi/stable/server/enums/ItemLockMode"},next:{title:"ObjectiveSortOrder",permalink:"/en/docs/sapi/stable/server/enums/ObjectiveSortOrder"}},i={},p=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"FirstQuarter",id:"firstquarter",level:3},{value:"FullMoon",id:"fullmoon",level:3},{value:"LastQuarter",id:"lastquarter",level:3},{value:"NewMoon",id:"newmoon",level:3},{value:"WaningCrescent",id:"waningcrescent",level:3},{value:"WaningGibbous",id:"waninggibbous",level:3},{value:"WaxingCrescent",id:"waxingcrescent",level:3},{value:"WaxingGibbous",id:"waxinggibbous",level:3}],u={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enum containing the different phases of the moon based on\nthe current day.,Obtain the current MoonPhase using\nworld.getMoonPhase."),(0,a.kt)("p",null,"The fullness of the moon controls various mob behaviors such\nas the number of slimes that spawn in Swamp biomes, the\nchance skeletons and zombies have to spawn with armor, as\nwell as the chance for spiders to spawn with certain status\neffects."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,a.kt)("h3",{id:"firstquarter"},"FirstQuarter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"FirstQuarter")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"2")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the Waxing Crescent."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fullmoon"},"FullMoon"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"FullMoon")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The brightest moon phase. During this phase, cats have a 50%\nchance of spawning as black cats."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastquarter"},"LastQuarter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"LastQuarter")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"6")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the Waning Gibbous."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"newmoon"},"NewMoon"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NewMoon")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"4")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The darkest moon phase."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waningcrescent"},"WaningCrescent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"WaningCrescent")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the Last Quarter."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waninggibbous"},"WaningGibbous"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"WaningGibbous")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the Full Moon."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waxingcrescent"},"WaxingCrescent"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"WaxingCrescent")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the New Moon."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"waxinggibbous"},"WaxingGibbous"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"WaxingGibbous")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"7")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.kt)("p",null,"The phase following the First Quarter."))}m.isMDXComponent=!0}}]);