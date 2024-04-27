"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={id:"CursorProperties",title:"Interface: CursorProperties",sidebar_label:"CursorProperties",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/preview/server-editor/interfaces/CursorProperties",id:"sapi/preview/server-editor/interfaces/CursorProperties",title:"Interface: CursorProperties",description:"The CursorProperties interface is used to describe the",source:"@site/docs/sapi/preview/server-editor/interfaces/CursorProperties.md",sourceDirName:"sapi/preview/server-editor/interfaces",slug:"/sapi/preview/server-editor/interfaces/CursorProperties",permalink:"/docs/sapi/preview/server-editor/interfaces/CursorProperties",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CursorProperties",title:"Interface: CursorProperties",sidebar_label:"CursorProperties",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"ClipboardWriteOptions",permalink:"/docs/sapi/preview/server-editor/interfaces/ClipboardWriteOptions"},next:{title:"CustomWidgetCreateOptions",permalink:"/docs/sapi/preview/server-editor/interfaces/CustomWidgetCreateOptions"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"controlMode",id:"controlmode",level:3},{value:"fixedModeDistance",id:"fixedmodedistance",level:3},{value:"outlineColor",id:"outlinecolor",level:3},{value:"projectThroughLiquid",id:"projectthroughliquid",level:3},{value:"targetMode",id:"targetmode",level:3},{value:"visible",id:"visible",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The CursorProperties interface is used to describe the\nproperties of the Editor 3D block cursor construct.\nThe 3D block cursor can be queried to retrieve the current\nproperties, and the same property class can be used to set\nthe current properties of the cursor.\nThis interface is generally used at the activation stage of\nthe active tool to set up the color, visibility and input\nproperties of the 3D block cursor"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"controlmode"},"controlMode"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"controlMode"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/enums/CursorControlMode"},(0,n.kt)("inlineCode",{parentName:"a"},"CursorControlMode"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Enum representing the cursor control mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fixed Mode locks the cursor to a position which is \\<X",">","\nblocks offset from the current player position. The cursor\nis camera relative, so it will always appear \\<X",">"," blocks\nahead of the players feet"),(0,n.kt)("li",{parentName:"ul"},"Keyboard Mode puts the cursor under direct control of the\nAPI, and ignores any mouse input.  The cursor can only be\nmoved around using the moveBy method"),(0,n.kt)("li",{parentName:"ul"},"KeyboardAndMouse mode puts the cursor under a shared\ncontrol of onMouseMove and keyboard input.  Any mouse\nmovement events will set the cursor to the position of the\nmouse/world raycast.  This can be modified using the moveBy\nmethod, but any subsequent mouse events will reset the\nposition back to where the raycast intersection occurs"),(0,n.kt)("li",{parentName:"ul"},"Mouse mode puts the cursor under control of mouse move\nevents, and moveBy method will be ignored")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fixedmodedistance"},"fixedModeDistance"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"fixedModeDistance"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The fixed distance from the players feet at which the cursor\nis attached, relative to camera direction.\nThis is only used when ","[controlMode]"," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"Fixed")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"outlinecolor"},"outlineColor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"outlineColor"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"RGBA")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"A ","[Color]"," Property representing the color of the block\ncursor object outline"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"projectthroughliquid"},"projectThroughLiquid"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"projectThroughLiquid"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"targetmode"},"targetMode"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"targetMode"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/enums/CursorTargetMode"},(0,n.kt)("inlineCode",{parentName:"a"},"CursorTargetMode"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"An enum representing the cursor target mode"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Block Mode records the block position of the mouse/world\nraycast intersection"),(0,n.kt)("li",{parentName:"ul"},"Face Mode records the block position of the block adjacent\nto the mouse/world raycast intersection, according to the\nface of the collision point of the selected block")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"visible"},"visible"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"visible"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Boolean flag controlling the visibility of the 3D block\ncursor"))}c.isMDXComponent=!0}}]);