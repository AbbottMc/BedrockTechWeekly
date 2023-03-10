"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[3323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=o,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||a;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"ItemFoodComponent",title:"Class: ItemFoodComponent",sidebar_label:"ItemFoodComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"sapi/preview/server/classes/ItemFoodComponent",id:"sapi/preview/server/classes/ItemFoodComponent",title:"Class: ItemFoodComponent",description:"When present on an item, this item is consumable by",source:"@site/docs/sapi/preview/server/classes/ItemFoodComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemFoodComponent",permalink:"/docs/sapi/preview/server/classes/ItemFoodComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemFoodComponent",title:"Class: ItemFoodComponent",sidebar_label:"ItemFoodComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemEnchantsComponent",permalink:"/docs/sapi/preview/server/classes/ItemEnchantsComponent"},next:{title:"ItemReleaseChargeEvent",permalink:"/docs/sapi/preview/server/classes/ItemReleaseChargeEvent"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"canAlwaysEat",id:"canalwayseat",level:3},{value:"nutrition",id:"nutrition",level:3},{value:"saturationModifier",id:"saturationmodifier",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"usingConvertsTo",id:"usingconvertsto",level:3},{value:"componentId",id:"componentid",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When present on an item, this item is consumable by\nentities. Note that this component only applies to\ndata-driven items."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},(0,o.kt)("inlineCode",{parentName:"a"},"ItemComponent"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ItemFoodComponent"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"canalwayseat"},"canAlwaysEat"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"canAlwaysEat"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"If true, the player can always eat this item (even when not\nhungry)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"nutrition"},"nutrition"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"nutrition"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Represents how much nutrition this food item will give an\nentity when eaten."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"saturationmodifier"},"saturationModifier"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"saturationModifier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"When an item is eaten, this value is used according to this\nformula (nutrition ",(0,o.kt)("em",{parentName:"p"}," saturation_modifier ")," 2) to apply a\nsaturation buff."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"typeid"},"typeId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"typeId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent#typeid"},"typeId")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usingconvertsto"},"usingConvertsTo"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"usingConvertsTo"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"When specified, converts the active item to the one\nspecified by this property."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"componentid"},"componentId"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"componentId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"minecraft:food"')),(0,o.kt)("p",null,"Identifier of this component. Should always be\n'minecraft:food'."))}d.isMDXComponent=!0}}]);