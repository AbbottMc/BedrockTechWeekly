"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[30410],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(t),g=o,u=m["".concat(l,".").concat(g)]||m[g]||y[g]||a;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const a={id:"ItemFoodComponent",title:"Class: ItemFoodComponent",sidebar_label:"ItemFoodComponent",sidebar_position:0,custom_edit_url:null},i=void 0,p={unversionedId:"sapi/preview/server/classes/ItemFoodComponent",id:"sapi/preview/server/classes/ItemFoodComponent",title:"Class: ItemFoodComponent",description:"When present on an item, this item is consumable by",source:"@site/docs/sapi/preview/server/classes/ItemFoodComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/ItemFoodComponent",permalink:"/docs/sapi/preview/server/classes/ItemFoodComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ItemFoodComponent",title:"Class: ItemFoodComponent",sidebar_label:"ItemFoodComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ItemEnchantableComponent",permalink:"/docs/sapi/preview/server/classes/ItemEnchantableComponent"},next:{title:"ItemReleaseUseAfterEvent",permalink:"/docs/sapi/preview/server/classes/ItemReleaseUseAfterEvent"}},l={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"canAlwaysEat",id:"canalwayseat",level:3},{value:"nutrition",id:"nutrition",level:3},{value:"saturationModifier",id:"saturationmodifier",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"usingConvertsTo",id:"usingconvertsto",level:3},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-1",level:4}],d={toc:s},m="wrapper";function y(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"When present on an item, this item is consumable by\nentities. Note that this component only applies to\ndata-driven items."),(0,o.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},(0,o.yg)("inlineCode",{parentName:"a"},"ItemComponent"))),(0,o.yg)("p",{parentName:"li"},"\u21b3 ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"ItemFoodComponent"))))),(0,o.yg)("h2",{id:"constructors"},"Constructors"),(0,o.yg)("h3",{id:"constructor"},"constructor"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,o.yg)("strong",{parentName:"p"},"new ItemFoodComponent"),"()"),(0,o.yg)("h4",{id:"overrides"},"Overrides"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent#constructor"},"constructor")),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"canalwayseat"},"canAlwaysEat"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"canAlwaysEat"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"If true, the player can always eat this item (even when not\nhungry)."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"nutrition"},"nutrition"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"nutrition"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Represents how much nutrition this food item will give an\nentity when eaten."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"saturationmodifier"},"saturationModifier"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"saturationModifier"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"number")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"When an item is eaten, this value is used according to this\nformula (nutrition ",(0,o.yg)("em",{parentName:"p"}," saturation_modifier ")," 2) to apply a\nsaturation buff."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"typeid"},"typeId"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"typeId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Identifier of the component."),(0,o.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent#typeid"},"typeId")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"usingconvertsto"},"usingConvertsTo"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"usingConvertsTo"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"When specified, converts the active item to the one\nspecified by this property."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.yg)("p",null,"This property can throw when used."),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"componentid"},"componentId"),(0,o.yg)("p",null,"\u25aa ",(0,o.yg)("inlineCode",{parentName:"p"},"Static")," ",(0,o.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.yg)("strong",{parentName:"p"},"componentId"),": ",(0,o.yg)("inlineCode",{parentName:"p"},'"minecraft:food"')),(0,o.yg)("h2",{id:"methods"},"Methods"),(0,o.yg)("h3",{id:"isvalid"},"isValid"),(0,o.yg)("p",null,"\u25b8 ",(0,o.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,o.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,o.yg)("h4",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Whether the component is valid."),(0,o.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent"},"ItemComponent"),".",(0,o.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server/classes/ItemComponent#isvalid"},"isValid")))}y.isMDXComponent=!0}}]);