"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[39143],{17267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),l=t(28453);const r={id:"CompoundBlockVolume",title:"Class: CompoundBlockVolume",sidebar_label:"CompoundBlockVolume",sidebar_position:0,custom_edit_url:null},i=void 0,o={id:"sapi/stable/server/classes/CompoundBlockVolume",title:"Class: CompoundBlockVolume",description:"The Compound Block Volume is a collection of individual",source:"@site/docs/sapi/stable/server/classes/CompoundBlockVolume.md",sourceDirName:"sapi/stable/server/classes",slug:"/sapi/stable/server/classes/CompoundBlockVolume",permalink:"/docs/sapi/stable/server/classes/CompoundBlockVolume",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CompoundBlockVolume",title:"Class: CompoundBlockVolume",sidebar_label:"CompoundBlockVolume",sidebar_position:0,custom_edit_url:null},sidebar:"sapiStableSidebar",previous:{title:"Component",permalink:"/docs/sapi/stable/server/classes/Component"},next:{title:"Container",permalink:"/docs/sapi/stable/server/classes/Container"}},c={},d=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Properties",id:"properties",level:2},{value:"capacity",id:"capacity",level:3},{value:"volumeCount",id:"volumecount",level:3},{value:"Methods",id:"methods",level:2},{value:"clear",id:"clear",level:3},{value:"Returns",id:"returns-1",level:4},{value:"getBlockLocationIterator",id:"getblocklocationiterator",level:3},{value:"Returns",id:"returns-2",level:4},{value:"getBoundingBox",id:"getboundingbox",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getMax",id:"getmax",level:3},{value:"Returns",id:"returns-4",level:4},{value:"getMin",id:"getmin",level:3},{value:"Returns",id:"returns-5",level:4},{value:"getOrigin",id:"getorigin",level:3},{value:"Returns",id:"returns-6",level:4},{value:"isEmpty",id:"isempty",level:3},{value:"Returns",id:"returns-7",level:4},{value:"isInside",id:"isinside",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-8",level:4},{value:"peekLastVolume",id:"peeklastvolume",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"popVolume",id:"popvolume",level:3},{value:"Returns",id:"returns-10",level:4},{value:"pushVolume",id:"pushvolume",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-11",level:4},{value:"replaceOrAddLastVolume",id:"replaceoraddlastvolume",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-12",level:4},{value:"setOrigin",id:"setorigin",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-13",level:4},{value:"translateOrigin",id:"translateorigin",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-14",level:4}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Compound Block Volume is a collection of individual\nblock volume definitions which, as a collection, define a\nlarger volume of (sometimes non-contiguous) irregular\nshapes.\nThis class is loosely based on the concept of CSG\n(Computational Solid Geometry) and allows a user to create\ncomplex volumes by building a stack of volumes and voids to\nmake a larger single volume.\nFor example - normally a creator would create a hollow cube\nby creating 6 \"wall\" surfaces for each face.\nWith a Compound Block Volume, a creator can define a hollow\ncube by creating a single outer solid cube, and then\ndefining a further single 'void' cube inside the larger one.\nSimilarly, the Compound Block Volume can represent irregular\nshaped volumes (e.g. a tree consists of a trunk and lots of\nleaf cubes which are not necessarily contiguously placed).\nEach of the volumes added to the CompoundBlockVolume are (by\ndefault) relative to the origin set (either at construction\nor via one of the set functions).\nHowever, it is also possible to push volumes to the compound\ncollection which are absolute in nature and are not affected\nby origin changes."}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"new CompoundBlockVolume"}),"(",(0,s.jsx)(n.code,{children:"origin?"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/CompoundBlockVolume",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolume"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"origin?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"An optional world space origin on which to center the compound volume. If not specified, the origin is set to (0,0,0)"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/CompoundBlockVolume",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolume"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Create a CompoundBlockVolume object"}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"capacity",children:"capacity"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"capacity"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Return the 'capacity' of the bounding rectangle which\nrepresents the collection of volumes in the stack"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"volumecount",children:"volumeCount"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.code,{children:"Readonly"})," ",(0,s.jsx)(n.strong,{children:"volumeCount"}),": ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Return the number of volumes (positive and negative) in the\nvolume stack"}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.h3,{id:"clear",children:"clear"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"clear"}),"(): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Clear the contents of the volume stack"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getblocklocationiterator",children:"getBlockLocationIterator"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getBlockLocationIterator"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,s.jsx)(n.code,{children:"BlockLocationIterator"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/classes/BlockLocationIterator",children:(0,s.jsx)(n.code,{children:"BlockLocationIterator"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Fetch a Block Location Iterator for the Compound Block\nVolume.  This iterator will allow a creator to iterate\nacross all of the selected volumes within the larger\nbounding area.\nAreas of a volume which have been overridden by a\nsubtractive volume will not be included in the iterator\nstep.\n(i.e. if you push a cube to the stack, and then push a\nsubtractive volume to the same location, then the iterator\nwill step over the initial volume because it is considered\nnegative space)\nNote that the Block Locations returned by this iterator are\nin absolute world space (irrespective of whether the\ncompound volume items pushed are absolute or relative)"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getboundingbox",children:"getBoundingBox"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getBoundingBox"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/BoundingBox",children:(0,s.jsx)(n.code,{children:"BoundingBox"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/BoundingBox",children:(0,s.jsx)(n.code,{children:"BoundingBox"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Get the largest bounding box that represents a container for\nall of the volumes on the stack\nNote that the bounding box returned is represented in\nabsolute world space  (irrespective of whether the compound\nvolume items pushed are absolute or relative)"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getmax",children:"getMax"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getMax"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Get the max block location of the outermost bounding\nrectangle which represents the volumes on the stack.\nNote that the max location returned is in absolute world\nspace (irrespective of whether the compound volume items\npushed are absolute or relative)"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getmin",children:"getMin"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getMin"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Get the min block location of the outermost bounding\nrectangle which represents the volumes on the stack.\nNote that the min location returned is in absolute world\nspace (irrespective of whether the compound volume items\npushed are absolute or relative)"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"getorigin",children:"getOrigin"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"getOrigin"}),"(): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Fetch the origin in world space of the compound volume"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isempty",children:"isEmpty"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"isEmpty"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Return a boolean which signals if there are any volume items\npushed to the volume"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"isinside",children:"isInside"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"isInside"}),"(",(0,s.jsx)(n.code,{children:"worldLocation"}),"): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"worldLocation"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Return a boolean representing whether or not a given\nabsolute world space block location is inside a positive\nblock volume.\nE.g. if the stack contains a large cube followed by a\nslightly smaller negative cube, and the test location is\nwithin the negative cube - the function will return false\nbecause it's not 'inside' a volume (it IS inside the\nbounding rectangle, but it is not inside a positively\ndefined location)"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"peeklastvolume",children:"peekLastVolume"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"peekLastVolume"}),"(",(0,s.jsx)(n.code,{children:"forceRelativity?"}),"): ",(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/CompoundBlockVolumeItem",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolumeItem"})})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"forceRelativity?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/enums/CompoundBlockVolumePositionRelativity",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolumePositionRelativity"})})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Determine whether the function returns a CompoundBlockVolumeItem which is forced into either relative or absolute coordinate system. ",(0,s.jsx)(n.code,{children:"true"})," = force returned item to be relative to volume origin ",(0,s.jsx)(n.code,{children:"false"})," = force returned item to be absolute world space location If no flag is specified, the item returned retains whatever relativity it had when it was pushed"]})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/CompoundBlockVolumeItem",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolumeItem"})})}),"\n",(0,s.jsx)(n.p,{children:"Returns undefined if the stack is empty"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Inspect the last entry pushed to the volume stack without\naffecting the stack contents."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"popvolume",children:"popVolume"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"popVolume"}),"(): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Remove the last entry from the volume stack.  This will\nreduce the stack size by one"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"pushvolume",children:"pushVolume"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"pushVolume"}),"(",(0,s.jsx)(n.code,{children:"item"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"item"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/CompoundBlockVolumeItem",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolumeItem"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Item to push to the end of the stack"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsxs)(n.p,{children:["Push a volume item to the stack.  The volume item contains\nan 'action' parameter which determines whether this volume\nis a positive or negative space.\nThe item also contains a ",(0,s.jsx)(n.code,{children:"locationRelativity"})," which\ndetermines whether it is relative or absolute to the\ncompound volume origin"]}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"replaceoraddlastvolume",children:"replaceOrAddLastVolume"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"replaceOrAddLastVolume"}),"(",(0,s.jsx)(n.code,{children:"item"}),"): ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"item"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/CompoundBlockVolumeItem",children:(0,s.jsx)(n.code,{children:"CompoundBlockVolumeItem"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Item to add or replace"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"boolean"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"If the volume stack is empty, this function will push the\nspecified item to the stack.\nIf the volume stack is NOT empty, this function will replace\nthe last item on the stack with the new item."}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"setorigin",children:"setOrigin"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"setOrigin"}),"(",(0,s.jsx)(n.code,{children:"position"}),", ",(0,s.jsx)(n.code,{children:"preserveExistingVolumes?"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"position"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"preserveExistingVolumes?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["This optional boolean flag determines whether the relative ",(0,s.jsx)(n.code,{children:"CompoundBlockVolumeItem"}),"'s are frozen in place, or are affected by the new origin. Imagine a scenario where you have a series of relative locations around an origin which make up a sphere; all of these locations are in the range of -2 to 2. Push each of these locations to the compound volume as relative items. Now, move the origin and all of the locations representing the sphere move accordingly. However, let's say you want to add a 2nd sphere next to the 1st. In this case, set the new origin a few locations over, but 'preserveExistingVolumes' = true. This will set a new origin, but the existing sphere locations will remain relative to the original origin. Now, you can push the relative sphere locations again (this time they will be relative to the new origin) - resulting in 2 spheres next to each other."]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-13",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Set the origin of the compound volume to an absolute world\nspace location"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"translateorigin",children:"translateOrigin"}),"\n",(0,s.jsxs)(n.p,{children:["\u25b8 ",(0,s.jsx)(n.strong,{children:"translateOrigin"}),"(",(0,s.jsx)(n.code,{children:"delta"}),", ",(0,s.jsx)(n.code,{children:"preserveExistingVolumes?"}),"): ",(0,s.jsx)(n.code,{children:"void"})]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"delta"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/sapi/stable/server/interfaces/Vector3",children:(0,s.jsx)(n.code,{children:"Vector3"})})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"preserveExistingVolumes?"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"See the description for the arguments to @minecraft-server/CompoundBlockVolume.setOrigin"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"returns-14",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"void"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Remarks"})})}),"\n",(0,s.jsx)(n.p,{children:"Similar to @minecraft-server/CompoundBlockVolume.setOrigin - this\nfunction will translate the origin by a given delta to a new\nposition"}),"\n",(0,s.jsx)(n.p,{children:"This function can't be called in read-only mode."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const l={},r=s.createContext(l);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);