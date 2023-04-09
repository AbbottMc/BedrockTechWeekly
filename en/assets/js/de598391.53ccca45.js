"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[61681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,v=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(v,a(a({ref:t},d),{},{components:n})):r.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={id:"EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",sidebar_label:"EntityMovementGlideComponent",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"sapi/stable/server/classes/EntityMovementGlideComponent",id:"sapi/stable/server/classes/EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",description:"When added, this movement control allows the mob to glide.",source:"@site/docs/sapi/stable/server/classes/EntityMovementGlideComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityMovementGlideComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityMovementGlideComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityMovementGlideComponent",title:"Class: EntityMovementGlideComponent",sidebar_label:"EntityMovementGlideComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityMovementGenericComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityMovementGenericComponent"},next:{title:"EntityMovementHoverComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityMovementHoverComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"maxTurn",id:"maxturn",level:3},{value:"speedWhenTurning",id:"speedwhenturning",level:3},{value:"startSpeed",id:"startspeed",level:3},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides",level:4},{value:"componentId",id:"componentid",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When added, this movement control allows the mob to glide."),(0,o.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},(0,o.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,o.kt)("p",{parentName:"li"},"\u21b3 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"EntityMovementGlideComponent"))))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"maxturn"},"maxTurn"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"maxTurn"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The maximum number in degrees the mob can turn per tick."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"speedwhenturning"},"speedWhenTurning"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"speedWhenTurning"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Speed in effect when the entity is turning."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"startspeed"},"startSpeed"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"startSpeed"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Start speed during a glide."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,o.kt)("p",null,"This property can throw when used."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"typeid"},"typeId"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"typeId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Identifier of this component. Should always be\nminecraft:movement.glide."),(0,o.kt)("h4",{id:"overrides"},"Overrides"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,o.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/IEntityComponent#typeid"},"typeId")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"componentid"},"componentId"),(0,o.kt)("p",null,"\u25aa ",(0,o.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"componentId"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"minecraft:movement.glide"')),(0,o.kt)("p",null,"Identifier of this component. Should always be\nminecraft:movement.glide."))}m.isMDXComponent=!0}}]);