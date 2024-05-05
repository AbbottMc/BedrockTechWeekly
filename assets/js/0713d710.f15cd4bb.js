"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[43672],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>h});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},g=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),y=s(a),m=r,h=y["".concat(p,".").concat(m)]||y[m]||d[m]||o;return a?t.createElement(h,l(l({ref:n},g),{},{components:a})):t.createElement(h,l({ref:n},g))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[y]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22759:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const o={id:"EntityNavigationComponent",title:"Class: EntityNavigationComponent",sidebar_label:"EntityNavigationComponent",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"sapi/stable/server/classes/EntityNavigationComponent",id:"sapi/stable/server/classes/EntityNavigationComponent",title:"Class: EntityNavigationComponent",description:"Allows this entity to generate paths that include vertical",source:"@site/docs/sapi/stable/server/classes/EntityNavigationComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityNavigationComponent",permalink:"/docs/sapi/stable/server/classes/EntityNavigationComponent",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EntityNavigationComponent",title:"Class: EntityNavigationComponent",sidebar_label:"EntityNavigationComponent",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"EntityNavigationClimbComponent",permalink:"/docs/sapi/stable/server/classes/EntityNavigationClimbComponent"},next:{title:"EntityNavigationFloatComponent",permalink:"/docs/sapi/stable/server/classes/EntityNavigationFloatComponent"}},p={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"avoidDamageBlocks",id:"avoiddamageblocks",level:3},{value:"avoidPortals",id:"avoidportals",level:3},{value:"avoidSun",id:"avoidsun",level:3},{value:"avoidWater",id:"avoidwater",level:3},{value:"canBreach",id:"canbreach",level:3},{value:"canBreakDoors",id:"canbreakdoors",level:3},{value:"canFloat",id:"canfloat",level:3},{value:"canJump",id:"canjump",level:3},{value:"canOpenDoors",id:"canopendoors",level:3},{value:"canOpenIronDoors",id:"canopenirondoors",level:3},{value:"canPassDoors",id:"canpassdoors",level:3},{value:"canPathFromAir",id:"canpathfromair",level:3},{value:"canPathOverLava",id:"canpathoverlava",level:3},{value:"canPathOverWater",id:"canpathoverwater",level:3},{value:"canSink",id:"cansink",level:3},{value:"canSwim",id:"canswim",level:3},{value:"canWalk",id:"canwalk",level:3},{value:"canWalkInLava",id:"canwalkinlava",level:3},{value:"entity",id:"entity",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"isAmphibious",id:"isamphibious",level:3},{value:"typeId",id:"typeid",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Methods",id:"methods",level:2},{value:"isValid",id:"isvalid",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from-2",level:4}],g={toc:s},y="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Allows this entity to generate paths that include vertical\nwalls (for example, like Minecraft spiders do.)"),(0,r.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3 ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"EntityNavigationComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationClimbComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationClimbComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationFloatComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationFloatComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationFlyComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationFlyComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationGenericComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationGenericComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationHoverComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationHoverComponent"))),(0,r.yg)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityNavigationWalkComponent"},(0,r.yg)("inlineCode",{parentName:"a"},"EntityNavigationWalkComponent"))))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"constructor"},"constructor"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Private")," ",(0,r.yg)("strong",{parentName:"p"},"new EntityNavigationComponent"),"()"),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#constructor"},"constructor")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"avoiddamageblocks"},"avoidDamageBlocks"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"avoidDamageBlocks"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder to avoid blocks that cause damage when\nfinding a path."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"avoidportals"},"avoidPortals"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"avoidPortals"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder to avoid portals (like nether portals)\nwhen finding a path."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"avoidsun"},"avoidSun"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"avoidSun"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Whether or not the pathfinder should avoid tiles that are\nexposed to the sun when creating paths."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"avoidwater"},"avoidWater"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"avoidWater"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder to avoid water when creating a path."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canbreach"},"canBreach"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canBreach"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can jump out of water\n(like a dolphin)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canbreakdoors"},"canBreakDoors"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canBreakDoors"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder that it can path through a closed door\nand break it."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canfloat"},"canFloat"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canFloat"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can float."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canjump"},"canJump"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canJump"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can jump up blocks."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canopendoors"},"canOpenDoors"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canOpenDoors"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder that it can path through a closed door\nassuming the AI will open the door."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canopenirondoors"},"canOpenIronDoors"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canOpenIronDoors"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder that it can path through a closed iron\ndoor assuming the AI will open the door."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canpassdoors"},"canPassDoors"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canPassDoors"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Whether a path can be created through a door."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canpathfromair"},"canPathFromAir"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canPathFromAir"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder that it can start pathing when in the\nair."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canpathoverlava"},"canPathOverLava"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canPathOverLava"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the lava."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canpathoverwater"},"canPathOverWater"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canPathOverWater"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can travel on the\nsurface of the water."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"cansink"},"canSink"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canSink"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it will be pulled down\nby gravity while in water."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canswim"},"canSwim"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canSwim"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can path anywhere\nthrough water and plays swimming animation along that path."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canwalk"},"canWalk"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canWalk"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can walk on the\nground outside water."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"canwalkinlava"},"canWalkInLava"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"canWalkInLava"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can travel in lava\nlike walking on ground."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"entity"},"entity"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"entity"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/Entity"},(0,r.yg)("inlineCode",{parentName:"a"},"Entity"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"The entity that owns this component. The entity will be\nundefined if it has been removed."),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#entity"},"entity")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"isamphibious"},"isAmphibious"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"isAmphibious"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Tells the pathfinder whether or not it can walk on the\nground or go underwater."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.yg)("p",null,"This property can throw when used."),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"typeid"},"typeId"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.yg)("strong",{parentName:"p"},"typeId"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Identifier of the component."),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#typeid"},"typeId")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"isvalid"},"isValid"),(0,r.yg)("p",null,"\u25b8 ",(0,r.yg)("strong",{parentName:"p"},"isValid"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,r.yg)("p",null,"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"boolean")),(0,r.yg)("p",null,"Whether the component is valid."),(0,r.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent"},"EntityComponent"),".",(0,r.yg)("a",{parentName:"p",href:"/docs/sapi/stable/server/classes/EntityComponent#isvalid"},"isValid")))}d.isMDXComponent=!0}}]);