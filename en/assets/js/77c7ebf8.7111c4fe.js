"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[51638],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},h="mdxType",k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=s(t),u=r,c=h["".concat(p,".").concat(u)]||h[u]||k[u]||o;return t?a.createElement(c,l(l({ref:n},d),{},{components:t})):a.createElement(c,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[h]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={id:"EntityNavigationHoverComponent",title:"Class: EntityNavigationHoverComponent",sidebar_label:"EntityNavigationHoverComponent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/preview/server/classes/EntityNavigationHoverComponent",id:"sapi/preview/server/classes/EntityNavigationHoverComponent",title:"Class: EntityNavigationHoverComponent",description:"Allows this entity to generate paths in the air (for",source:"@site/docs/sapi/preview/server/classes/EntityNavigationHoverComponent.md",sourceDirName:"sapi/preview/server/classes",slug:"/sapi/preview/server/classes/EntityNavigationHoverComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityNavigationHoverComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityNavigationHoverComponent",title:"Class: EntityNavigationHoverComponent",sidebar_label:"EntityNavigationHoverComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"EntityNavigationGenericComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityNavigationGenericComponent"},next:{title:"EntityNavigationWalkComponent",permalink:"/en/docs/sapi/preview/server/classes/EntityNavigationWalkComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"avoidDamageBlocks",id:"avoiddamageblocks",level:3},{value:"avoidPortals",id:"avoidportals",level:3},{value:"avoidSun",id:"avoidsun",level:3},{value:"avoidWater",id:"avoidwater",level:3},{value:"canBreach",id:"canbreach",level:3},{value:"canBreakDoors",id:"canbreakdoors",level:3},{value:"canFloat",id:"canfloat",level:3},{value:"canJump",id:"canjump",level:3},{value:"canOpenDoors",id:"canopendoors",level:3},{value:"canOpenIronDoors",id:"canopenirondoors",level:3},{value:"canPassDoors",id:"canpassdoors",level:3},{value:"canPathFromAir",id:"canpathfromair",level:3},{value:"canPathOverLava",id:"canpathoverlava",level:3},{value:"canPathOverWater",id:"canpathoverwater",level:3},{value:"canSink",id:"cansink",level:3},{value:"canSwim",id:"canswim",level:3},{value:"canWalk",id:"canwalk",level:3},{value:"canWalkInLava",id:"canwalkinlava",level:3},{value:"isAmphibious",id:"isamphibious",level:3},{value:"typeId",id:"typeid",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"componentId",id:"componentid",level:3}],d={toc:s};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Allows this entity to generate paths in the air (for\nexample, like the Minecraft Bees do.) Keeps them from\nfalling out of the skies and doing predictive movement."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IEntityComponent"},(0,r.kt)("inlineCode",{parentName:"a"},"IEntityComponent"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"EntityNavigationHoverComponent"))))),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("strong",{parentName:"p"},"new EntityNavigationHoverComponent"),"()"),(0,r.kt)("h4",{id:"overrides"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IEntityComponent#constructor"},"constructor")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"avoiddamageblocks"},"avoidDamageBlocks"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidDamageBlocks"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder to avoid blocks that cause damage when\nfinding a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidportals"},"avoidPortals"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidPortals"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder to avoid portals (like nether portals)\nwhen finding a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidsun"},"avoidSun"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidSun"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether or not the pathfinder should avoid tiles that are\nexposed to the sun when creating paths."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"avoidwater"},"avoidWater"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"avoidWater"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder to avoid water when creating a path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canbreach"},"canBreach"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canBreach"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can jump out of water\n(like a dolphin)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canbreakdoors"},"canBreakDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canBreakDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed door\nand break it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canfloat"},"canFloat"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canFloat"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can float."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canjump"},"canJump"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canJump"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can jump up blocks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canopendoors"},"canOpenDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canOpenDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed door\nassuming the AI will open the door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canopenirondoors"},"canOpenIronDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canOpenIronDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder that it can path through a closed iron\ndoor assuming the AI will open the door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpassdoors"},"canPassDoors"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPassDoors"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether a path can be created through a door."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathfromair"},"canPathFromAir"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathFromAir"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder that it can start pathing when in the\nair."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathoverlava"},"canPathOverLava"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathOverLava"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the lava."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canpathoverwater"},"canPathOverWater"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canPathOverWater"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cansink"},"canSink"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canSink"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it will be pulled down\nby gravity while in water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canswim"},"canSwim"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canSwim"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can path anywhere\nthrough water and plays swimming animation along that path."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canwalk"},"canWalk"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canWalk"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can walk on the\nground outside water."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"canwalkinlava"},"canWalkInLava"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"canWalkInLava"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can travel in lava\nlike walking on ground."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"isamphibious"},"isAmphibious"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"isAmphibious"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Tells the pathfinder whether or not it can walk on the\nground or go underwater."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"This property can throw when used."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"typeid"},"typeId"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"typeId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Identifier of this component. Should always be\nminecraft:navigation.hover."),(0,r.kt)("h4",{id:"overrides-1"},"Overrides"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IEntityComponent"},"IEntityComponent"),".",(0,r.kt)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/classes/IEntityComponent#typeid"},"typeId")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"componentid"},"componentId"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"componentId"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'"minecraft:navigation.hover"')),(0,r.kt)("p",null,"Identifier of this component. Should always be\nminecraft:navigation.hover."))}h.isMDXComponent=!0}}]);