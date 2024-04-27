"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[67719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,c=m["".concat(p,".").concat(h)]||m[h]||k[h]||o;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"EntityNavigationFloatComponent",title:"Class: EntityNavigationFloatComponent",sidebar_label:"EntityNavigationFloatComponent",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"sapi/stable/server/classes/EntityNavigationFloatComponent",id:"sapi/stable/server/classes/EntityNavigationFloatComponent",title:"Class: EntityNavigationFloatComponent",description:"Allows this entity to generate paths by flying around the",source:"@site/docs/sapi/stable/server/classes/EntityNavigationFloatComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityNavigationFloatComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNavigationFloatComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityNavigationFloatComponent",title:"Class: EntityNavigationFloatComponent",sidebar_label:"EntityNavigationFloatComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityNavigationComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},next:{title:"EntityNavigationFlyComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNavigationFlyComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"avoidDamageBlocks",id:"avoiddamageblocks",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"avoidPortals",id:"avoidportals",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"avoidSun",id:"avoidsun",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"avoidWater",id:"avoidwater",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"canBreach",id:"canbreach",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"canBreakDoors",id:"canbreakdoors",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"canFloat",id:"canfloat",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"canJump",id:"canjump",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"canOpenDoors",id:"canopendoors",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"canOpenIronDoors",id:"canopenirondoors",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"canPassDoors",id:"canpassdoors",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"canPathFromAir",id:"canpathfromair",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"canPathOverLava",id:"canpathoverlava",level:3},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"canPathOverWater",id:"canpathoverwater",level:3},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"canSink",id:"cansink",level:3},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"canSwim",id:"canswim",level:3},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"canWalk",id:"canwalk",level:3},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"canWalkInLava",id:"canwalkinlava",level:3},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"isAmphibious",id:"isamphibious",level:3},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-21",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows this entity to generate paths by flying around the\nair like the regular Ghast."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"EntityNavigationComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EntityNavigationFloatComponent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,r.kt)("strong",{parentName:"p"},"new EntityNavigationFloatComponent"),"()"),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"avoiddamageblocks"},"avoidDamageBlocks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidDamageBlocks"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder to avoid blocks that cause damage when\nfinding a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoiddamageblocks"},"avoidDamageBlocks")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidportals"},"avoidPortals"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidPortals"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder to avoid portals (like nether portals)\nwhen finding a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidportals"},"avoidPortals")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidsun"},"avoidSun"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidSun"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Whether or not the pathfinder should avoid tiles that are\nexposed to the sun when creating paths."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidsun"},"avoidSun")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidwater"},"avoidWater"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidWater"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder to avoid water when creating a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidwater"},"avoidWater")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canbreach"},"canBreach"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canBreach"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can jump out of water\n(like a dolphin)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canbreach"},"canBreach")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canbreakdoors"},"canBreakDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canBreakDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed door\nand break it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canbreakdoors"},"canBreakDoors")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canfloat"},"canFloat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canFloat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can float."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canfloat"},"canFloat")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canjump"},"canJump"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canJump"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can jump up blocks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canjump"},"canJump")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canopendoors"},"canOpenDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canOpenDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed door\nassuming the AI will open the door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canopendoors"},"canOpenDoors")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canopenirondoors"},"canOpenIronDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canOpenIronDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed iron\ndoor assuming the AI will open the door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canopenirondoors"},"canOpenIronDoors")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpassdoors"},"canPassDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPassDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Whether a path can be created through a door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpassdoors"},"canPassDoors")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathfromair"},"canPathFromAir"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathFromAir"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder that it can start pathing when in the\nair."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathfromair"},"canPathFromAir")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathoverlava"},"canPathOverLava"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathOverLava"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the lava."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathoverlava"},"canPathOverLava")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathoverwater"},"canPathOverWater"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathOverWater"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathoverwater"},"canPathOverWater")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cansink"},"canSink"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canSink"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it will be pulled down\nby gravity while in water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#cansink"},"canSink")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canswim"},"canSwim"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canSwim"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can path anywhere\nthrough water and plays swimming animation along that path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canswim"},"canSwim")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canwalk"},"canWalk"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canWalk"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can walk on the\nground outside water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canwalk"},"canWalk")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canwalkinlava"},"canWalkInLava"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canWalkInLava"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel in lava\nlike walking on ground."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canwalkinlava"},"canWalkInLava")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"entity"},"entity"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"entity"),": ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/Entity"},(0,r.kt)("inlineCode",{parentName:"a"},"Entity"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,r.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#entity"},"entity")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isamphibious"},"isAmphibious"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"isAmphibious"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can walk on the\nground or go underwater."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#isamphibious"},"isAmphibious")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"typeid"},"typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"typeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Identifier of the component."),(0,r.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#typeid"},"typeId")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"componentid"},"componentId"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"componentId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"minecraft:navigation.float"')),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"isvalid"},"isValid"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.kt)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether the component is valid."),(0,r.kt)("h4",{id:"inherited-from-21"},"Inherited from"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent"},"EntityNavigationComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#isvalid"},"isValid")))}m.isMDXComponent=!0}}]);