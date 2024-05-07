"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[17544],{42072:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=n(74848),l=n(28453);const t={},i="Class: BlockVolume",c={id:"sapi/stable/server/classes/BlockVolume",title:"Class: BlockVolume",description:"A BlockVolume is a simple interface to an object which",source:"@site/docs/sapi/stable/server/classes/BlockVolume.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/BlockVolume",permalink:"/docs/sapi/stable/server/classes/BlockVolume",draft:!1,unlisted:!1,editUrl:"https://github.com/AbbottMc/BedrockTechWeekly/tree/master/docs/sapi/stable/server/classes/BlockVolume.md",tags:[],version:"current",frontMatter:{},sidebar:"sapiStableSidebar",previous:{title:"BlockTypes",permalink:"/docs/sapi/stable/server/classes/BlockTypes"},next:{title:"BlockVolumeBase",permalink:"/docs/sapi/stable/server/classes/BlockVolumeBase"}},o={},d=[{value:"Extends",id:"extends",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new BlockVolume()",id:"new-blockvolume",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Properties",id:"properties",level:2},{value:"from",id:"from",level:3},{value:"Remarks",id:"remarks",level:4},{value:"to",id:"to",level:3},{value:"Remarks",id:"remarks-1",level:4},{value:"Methods",id:"methods",level:2},{value:"doesLocationTouchFaces()",id:"doeslocationtouchfaces",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Remarks",id:"remarks-2",level:4},{value:"doesVolumeTouchFaces()",id:"doesvolumetouchfaces",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Remarks",id:"remarks-3",level:4},{value:"getBlockLocationIterator()",id:"getblocklocationiterator",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Remarks",id:"remarks-4",level:4},{value:"getBoundingBox()",id:"getboundingbox",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Remarks",id:"remarks-5",level:4},{value:"Throws",id:"throws",level:4},{value:"getCapacity()",id:"getcapacity",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Remarks",id:"remarks-6",level:4},{value:"getMax()",id:"getmax",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Remarks",id:"remarks-7",level:4},{value:"Throws",id:"throws-1",level:4},{value:"getMin()",id:"getmin",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Remarks",id:"remarks-8",level:4},{value:"Throws",id:"throws-2",level:4},{value:"getSpan()",id:"getspan",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Remarks",id:"remarks-9",level:4},{value:"intersects()",id:"intersects",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Remarks",id:"remarks-10",level:4},{value:"isInside()",id:"isinside",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Remarks",id:"remarks-11",level:4},{value:"translate()",id:"translate",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Remarks",id:"remarks-12",level:4}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"class-blockvolume",children:"Class: BlockVolume"}),"\n",(0,r.jsx)(s.p,{children:'A BlockVolume is a simple interface to an object which\nrepresents a 3D rectangle of a given size (in blocks) at a\nworld block location.\nNote that these are not analogous to "min" and "max" values,\nin that the vector components are not guaranteed to be in\nany order.\nIn addition, these vector positions are not interchangeable\nwith BlockLocation.\nIf you want to get this volume represented as range of of\nBlockLocations, you can use the getBoundingBox utility\nfunction.\nThis volume class will maintain the ordering of the corner\nindexes as initially set. imagine that each corner is\nassigned in Editor - as you move the corner around\n(potentially inverting the min/max relationship of the\nbounds) - what\nyou had originally selected as the top/left corner would\ntraditionally become the bottom/right.\nWhen manually editing these kinds of volumes, you need to\nmaintain the identity of the corner as you edit - the\nBlockVolume utility functions do this.'}),"\n",(0,r.jsx)(s.p,{children:"Important to note that this measures block sizes (to/from) -\na normal AABB (0,0,0) to (0,0,0) would traditionally be of\nsize (0,0,0)\nHowever, because we're measuring blocks - the size or span\nof a BlockVolume would actually be (1,1,1)"}),"\n",(0,r.jsx)(s.h2,{id:"extends",children:"Extends"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,r.jsx)(s.h3,{id:"new-blockvolume",children:"new BlockVolume()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"new BlockVolume"}),"(",(0,r.jsx)(s.code,{children:"from"}),", ",(0,r.jsx)(s.code,{children:"to"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolume",children:(0,r.jsx)(s.code,{children:"BlockVolume"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"from"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolume",children:(0,r.jsx)(s.code,{children:"BlockVolume"})})}),"\n",(0,r.jsx)(s.h4,{id:"overrides",children:"Overrides"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#constructors",children:(0,r.jsx)(s.code,{children:"constructor"})})]}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(s.h3,{id:"from",children:"from"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"from"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"A world block location that represents a corner in a 3D\nrectangle"}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"to",children:"to"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"to"}),": ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-1",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"A world block location that represents the opposite corner\nin a 3D rectangle"}),"\n",(0,r.jsx)(s.p,{children:"This property can't be edited in read-only mode."}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.h3,{id:"doeslocationtouchfaces",children:"doesLocationTouchFaces()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"doesLocationTouchFaces"}),"(",(0,r.jsx)(s.code,{children:"pos"}),"): ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"pos"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The world block location to test"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})}),"\n",(0,r.jsx)(s.p,{children:"If the location is either inside or more than 0 blocks away,\nthe function will return false.\nIf the location is directly contacting the outer surface of\nthe BlockVolume, the function will return true."}),"\n",(0,r.jsx)(s.h4,{id:"remarks-2",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Check to see if the given location is directly adjacent to\nthe outer surface of a BlockVolume."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"doesvolumetouchfaces",children:"doesVolumeTouchFaces()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"doesVolumeTouchFaces"}),"(",(0,r.jsx)(s.code,{children:"other"}),"): ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"other"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolume",children:(0,r.jsx)(s.code,{children:"BlockVolume"})})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"The volume to test"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})}),"\n",(0,r.jsx)(s.p,{children:"If the outer faces of both block volumes touch and are\ndirectly adjacent at any point, return true."}),"\n",(0,r.jsx)(s.h4,{id:"remarks-3",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Check to see if a two block volumes are directly adjacent\nand two faces touch."}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getblocklocationiterator",children:"getBlockLocationIterator()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getBlockLocationIterator"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,r.jsx)(s.code,{children:"BlockLocationIterator"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,r.jsx)(s.code,{children:"BlockLocationIterator"})})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getblocklocationiterator",children:(0,r.jsx)(s.code,{children:"getBlockLocationIterator"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-4",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["Fetch a ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:"BlockLocationIterator"})," that represents all of\nthe block world locations within the specified volume"]}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getboundingbox",children:"getBoundingBox()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getBoundingBox"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/BoundingBox",children:(0,r.jsx)(s.code,{children:"BoundingBox"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/BoundingBox",children:(0,r.jsx)(s.code,{children:"BoundingBox"})})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-1",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getboundingbox",children:(0,r.jsx)(s.code,{children:"getBoundingBox"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-5",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["Return a ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/BoundingBox",children:"BoundingBox"})," object which represents the\nvalidated min and max coordinates of the volume"]}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getcapacity",children:"getCapacity()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getCapacity"}),"(): ",(0,r.jsx)(s.code,{children:"number"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"number"})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-2",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getcapacity",children:(0,r.jsx)(s.code,{children:"getCapacity"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-6",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["Return the capacity (volume) of the BlockVolume (W",(0,r.jsx)(s.em,{children:"D"}),"H)"]}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getmax",children:"getMax()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getMax"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-3",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getmax",children:(0,r.jsx)(s.code,{children:"getMax"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-7",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Get the largest corner position of the volume (guaranteed to\nbe >= min)"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws-1",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getmin",children:"getMin()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getMin"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-4",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getmin",children:(0,r.jsx)(s.code,{children:"getMin"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-8",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Get the smallest corner position of the volume (guaranteed\nto be <= max)"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.h4,{id:"throws-2",children:"Throws"}),"\n",(0,r.jsx)(s.p,{children:"This function can throw errors."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"getspan",children:"getSpan()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"getSpan"}),"(): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-5",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#getspan",children:(0,r.jsx)(s.code,{children:"getSpan"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-9",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["Get a ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:"Vector3"})," object where each component represents\nthe number of blocks along that axis"]}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"intersects",children:"intersects()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"intersects"}),"(",(0,r.jsx)(s.code,{children:"other"}),"): ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/enumerations/BlockVolumeIntersection",children:(0,r.jsx)(s.code,{children:"BlockVolumeIntersection"})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"other"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolume",children:(0,r.jsx)(s.code,{children:"BlockVolume"})})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/enumerations/BlockVolumeIntersection",children:(0,r.jsx)(s.code,{children:"BlockVolumeIntersection"})})}),"\n",(0,r.jsx)(s.h4,{id:"remarks-10",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Return an enumeration which represents the intersection\nbetween two BlockVolume objects"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"isinside",children:"isInside()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"isInside"}),"(",(0,r.jsx)(s.code,{children:"pos"}),"): ",(0,r.jsx)(s.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"pos"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"boolean"})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-6",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#isinside",children:(0,r.jsx)(s.code,{children:"isInside"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-11",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Check to see if a given world block location is inside a\nBlockVolume"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"translate",children:"translate()"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"translate"}),"(",(0,r.jsx)(s.code,{children:"delta"}),"): ",(0,r.jsx)(s.code,{children:"void"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Parameter"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.code,{children:"delta"})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,r.jsx)(s.code,{children:"Vector3"})})}),(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"Amount of blocks to move by"})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"void"})}),"\n",(0,r.jsx)(s.h4,{id:"inherited-from-7",children:"Inherited from"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase",children:(0,r.jsx)(s.code,{children:"BlockVolumeBase"})})," . ",(0,r.jsx)(s.a,{href:"/docs/sapi/stable/server/classes/BlockVolumeBase#translate",children:(0,r.jsx)(s.code,{children:"translate"})})]}),"\n",(0,r.jsx)(s.h4,{id:"remarks-12",children:"Remarks"}),"\n",(0,r.jsx)(s.p,{children:"Move a BlockVolume by a specified amount"}),"\n",(0,r.jsx)(s.p,{children:"This function can't be called in read-only mode."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const l={},t=r.createContext(l);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);