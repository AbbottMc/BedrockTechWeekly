"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[20799],{63368:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var s=r(74848),i=r(28453);const a={},o="Class: EntityNavigationWalkComponent",l={id:"sapi/stable/server/classes/EntityNavigationWalkComponent",title:"Class: EntityNavigationWalkComponent",description:"Allows this entity to generate paths by walking around and",source:"@site/docs/sapi/stable/server/classes/EntityNavigationWalkComponent.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/EntityNavigationWalkComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNavigationWalkComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/EntityNavigationWalkComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"EntityNavigationHoverComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNavigationHoverComponent"},next:{title:"EntityNpcComponent",permalink:"/en/docs/sapi/stable/server/classes/EntityNpcComponent"}},d={},t=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new EntityNavigationWalkComponent()",id:"new-entitynavigationwalkcomponent",level:3},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"avoidDamageBlocks",id:"avoiddamageblocks",level:3},{value:"Remarks",id:"remarks",level:4},{value:"Throws",id:"throws",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"avoidPortals",id:"avoidportals",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Throws",id:"throws-1",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"avoidSun",id:"avoidsun",level:3},{value:"Remarks",id:"remarks-2",level:4},{value:"Throws",id:"throws-2",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"avoidWater",id:"avoidwater",level:3},{value:"Remarks",id:"remarks-3",level:4},{value:"Throws",id:"throws-3",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"canBreach",id:"canbreach",level:3},{value:"Remarks",id:"remarks-4",level:4},{value:"Throws",id:"throws-4",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"canBreakDoors",id:"canbreakdoors",level:3},{value:"Remarks",id:"remarks-5",level:4},{value:"Throws",id:"throws-5",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"canFloat",id:"canfloat",level:3},{value:"Remarks",id:"remarks-6",level:4},{value:"Throws",id:"throws-6",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"canJump",id:"canjump",level:3},{value:"Remarks",id:"remarks-7",level:4},{value:"Throws",id:"throws-7",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"canOpenDoors",id:"canopendoors",level:3},{value:"Remarks",id:"remarks-8",level:4},{value:"Throws",id:"throws-8",level:4},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"canOpenIronDoors",id:"canopenirondoors",level:3},{value:"Remarks",id:"remarks-9",level:4},{value:"Throws",id:"throws-9",level:4},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"canPassDoors",id:"canpassdoors",level:3},{value:"Remarks",id:"remarks-10",level:4},{value:"Throws",id:"throws-10",level:4},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"canPathFromAir",id:"canpathfromair",level:3},{value:"Remarks",id:"remarks-11",level:4},{value:"Throws",id:"throws-11",level:4},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"canPathOverLava",id:"canpathoverlava",level:3},{value:"Remarks",id:"remarks-12",level:4},{value:"Throws",id:"throws-12",level:4},{value:"Inherited from",id:"inherited-from-12",level:4},{value:"canPathOverWater",id:"canpathoverwater",level:3},{value:"Remarks",id:"remarks-13",level:4},{value:"Throws",id:"throws-13",level:4},{value:"Inherited from",id:"inherited-from-13",level:4},{value:"canSink",id:"cansink",level:3},{value:"Remarks",id:"remarks-14",level:4},{value:"Throws",id:"throws-14",level:4},{value:"Inherited from",id:"inherited-from-14",level:4},{value:"canSwim",id:"canswim",level:3},{value:"Remarks",id:"remarks-15",level:4},{value:"Throws",id:"throws-15",level:4},{value:"Inherited from",id:"inherited-from-15",level:4},{value:"canWalk",id:"canwalk",level:3},{value:"Remarks",id:"remarks-16",level:4},{value:"Throws",id:"throws-16",level:4},{value:"Inherited from",id:"inherited-from-16",level:4},{value:"canWalkInLava",id:"canwalkinlava",level:3},{value:"Remarks",id:"remarks-17",level:4},{value:"Throws",id:"throws-17",level:4},{value:"Inherited from",id:"inherited-from-17",level:4},{value:"entity",id:"entity",level:3},{value:"Remarks",id:"remarks-18",level:4},{value:"Inherited from",id:"inherited-from-18",level:4},{value:"isAmphibious",id:"isamphibious",level:3},{value:"Remarks",id:"remarks-19",level:4},{value:"Throws",id:"throws-18",level:4},{value:"Inherited from",id:"inherited-from-19",level:4},{value:"typeId",id:"typeid",level:3},{value:"Remarks",id:"remarks-20",level:4},{value:"Inherited from",id:"inherited-from-20",level:4},{value:"componentId",id:"componentid",level:3},{value:"Methods",id:"methods",level:2},{value:"isValid()",id:"isvalid",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Inherited from",id:"inherited-from-21",level:4},{value:"Remarks",id:"remarks-21",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"class-entitynavigationwalkcomponent",children:"Class: EntityNavigationWalkComponent"}),"\n",(0,s.jsx)(n.p,{children:"Allows this entity to generate paths by walking around and\njumping up and down a block like regular mobs."}),"\n",(0,s.jsx)(n.h2,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"new-entitynavigationwalkcomponent",children:"new EntityNavigationWalkComponent()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"private"})," ",(0,s.jsx)(n.strong,{children:"new EntityNavigationWalkComponent"}),"(): ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationWalkComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationWalkComponent"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationWalkComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationWalkComponent"})})}),"\n",(0,s.jsx)(n.h4,{id:"overrides",children:"Overrides"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#constructors",children:(0,s.jsx)(n.code,{children:"constructor"})})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"avoiddamageblocks",children:"avoidDamageBlocks"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"avoidDamageBlocks"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder to avoid blocks that cause damage when\nfinding a path."}),"\n",(0,s.jsx)(n.h4,{id:"throws",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoiddamageblocks",children:(0,s.jsx)(n.code,{children:"avoidDamageBlocks"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"avoidportals",children:"avoidPortals"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"avoidPortals"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder to avoid portals (like nether portals)\nwhen finding a path."}),"\n",(0,s.jsx)(n.h4,{id:"throws-1",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidportals",children:(0,s.jsx)(n.code,{children:"avoidPortals"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"avoidsun",children:"avoidSun"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"avoidSun"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Whether or not the pathfinder should avoid tiles that are\nexposed to the sun when creating paths."}),"\n",(0,s.jsx)(n.h4,{id:"throws-2",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidsun",children:(0,s.jsx)(n.code,{children:"avoidSun"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"avoidwater",children:"avoidWater"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"avoidWater"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder to avoid water when creating a path."}),"\n",(0,s.jsx)(n.h4,{id:"throws-3",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#avoidwater",children:(0,s.jsx)(n.code,{children:"avoidWater"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canbreach",children:"canBreach"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canBreach"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can jump out of water\n(like a dolphin)."}),"\n",(0,s.jsx)(n.h4,{id:"throws-4",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canbreach",children:(0,s.jsx)(n.code,{children:"canBreach"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canbreakdoors",children:"canBreakDoors"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canBreakDoors"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder that it can path through a closed door\nand break it."}),"\n",(0,s.jsx)(n.h4,{id:"throws-5",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canbreakdoors",children:(0,s.jsx)(n.code,{children:"canBreakDoors"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canfloat",children:"canFloat"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canFloat"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can float."}),"\n",(0,s.jsx)(n.h4,{id:"throws-6",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canfloat",children:(0,s.jsx)(n.code,{children:"canFloat"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canjump",children:"canJump"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canJump"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can jump up blocks."}),"\n",(0,s.jsx)(n.h4,{id:"throws-7",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canjump",children:(0,s.jsx)(n.code,{children:"canJump"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canopendoors",children:"canOpenDoors"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canOpenDoors"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder that it can path through a closed door\nassuming the AI will open the door."}),"\n",(0,s.jsx)(n.h4,{id:"throws-8",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-8",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canopendoors",children:(0,s.jsx)(n.code,{children:"canOpenDoors"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canopenirondoors",children:"canOpenIronDoors"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canOpenIronDoors"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-9",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder that it can path through a closed iron\ndoor assuming the AI will open the door."}),"\n",(0,s.jsx)(n.h4,{id:"throws-9",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-9",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canopenirondoors",children:(0,s.jsx)(n.code,{children:"canOpenIronDoors"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canpassdoors",children:"canPassDoors"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canPassDoors"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-10",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Whether a path can be created through a door."}),"\n",(0,s.jsx)(n.h4,{id:"throws-10",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-10",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpassdoors",children:(0,s.jsx)(n.code,{children:"canPassDoors"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canpathfromair",children:"canPathFromAir"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canPathFromAir"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-11",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder that it can start pathing when in the\nair."}),"\n",(0,s.jsx)(n.h4,{id:"throws-11",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-11",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathfromair",children:(0,s.jsx)(n.code,{children:"canPathFromAir"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canpathoverlava",children:"canPathOverLava"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canPathOverLava"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-12",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can travel on the\nsurface of the lava."}),"\n",(0,s.jsx)(n.h4,{id:"throws-12",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-12",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathoverlava",children:(0,s.jsx)(n.code,{children:"canPathOverLava"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canpathoverwater",children:"canPathOverWater"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canPathOverWater"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-13",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can travel on the\nsurface of the water."}),"\n",(0,s.jsx)(n.h4,{id:"throws-13",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-13",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canpathoverwater",children:(0,s.jsx)(n.code,{children:"canPathOverWater"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"cansink",children:"canSink"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canSink"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-14",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it will be pulled down\nby gravity while in water."}),"\n",(0,s.jsx)(n.h4,{id:"throws-14",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-14",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#cansink",children:(0,s.jsx)(n.code,{children:"canSink"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canswim",children:"canSwim"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canSwim"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-15",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can path anywhere\nthrough water and plays swimming animation along that path."}),"\n",(0,s.jsx)(n.h4,{id:"throws-15",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-15",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canswim",children:(0,s.jsx)(n.code,{children:"canSwim"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canwalk",children:"canWalk"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canWalk"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-16",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can walk on the\nground outside water."}),"\n",(0,s.jsx)(n.h4,{id:"throws-16",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-16",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canwalk",children:(0,s.jsx)(n.code,{children:"canWalk"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"canwalkinlava",children:"canWalkInLava"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"canWalkInLava"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-17",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can travel in lava\nlike walking on ground."}),"\n",(0,s.jsx)(n.h4,{id:"throws-17",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-17",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#canwalkinlava",children:(0,s.jsx)(n.code,{children:"canWalkInLava"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"entity",children:"entity"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Beta"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"entity"}),": ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/Entity",children:(0,s.jsx)(n.code,{children:"Entity"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-18",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"The entity that owns this component. The entity will be\nundefined if it has been removed."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-18",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#entity",children:(0,s.jsx)(n.code,{children:"entity"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isamphibious",children:"isAmphibious"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"isAmphibious"}),": ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-19",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Tells the pathfinder whether or not it can walk on the\nground or go underwater."}),"\n",(0,s.jsx)(n.h4,{id:"throws-18",children:"Throws"}),"\n",(0,s.jsx)(n.p,{children:"This property can throw when used."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-19",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#isamphibious",children:(0,s.jsx)(n.code,{children:"isAmphibious"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"typeid",children:"typeId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"typeId"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-20",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Identifier of the component."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-20",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#typeid",children:(0,s.jsx)(n.code,{children:"typeId"})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"componentid",children:"componentId"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"static"})," ",(0,s.jsx)(n.code,{children:"readonly"})," ",(0,s.jsx)(n.strong,{children:"componentId"}),": ",(0,s.jsx)(n.code,{children:'"minecraft:navigation.walk"'})," = ",(0,s.jsx)(n.code,{children:"'minecraft:navigation.walk'"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"isvalid",children:"isValid()"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"isValid"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:"Whether the component is valid."}),"\n",(0,s.jsx)(n.h4,{id:"inherited-from-21",children:"Inherited from"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent",children:(0,s.jsx)(n.code,{children:"EntityNavigationComponent"})})," . ",(0,s.jsx)(n.a,{href:"/en/docs/sapi/stable/server/classes/EntityNavigationComponent#isvalid",children:(0,s.jsx)(n.code,{children:"isValid"})})]}),"\n",(0,s.jsx)(n.h4,{id:"remarks-21",children:"Remarks"}),"\n",(0,s.jsx)(n.p,{children:"Returns whether the component is valid. A component is\nconsidered valid if its owner is valid, in addition to any\naddition to any additional validation required by the\ncomponent."})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);