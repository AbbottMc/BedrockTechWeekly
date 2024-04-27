"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[72084],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,b=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(b,a(a({ref:r},d),{},{components:t})):o.createElement(b,a({ref:r},d))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(87462),n=(t(67294),t(3905));const i={id:"CursorControlMode",title:"Enumeration: CursorControlMode",sidebar_label:"CursorControlMode",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"sapi/preview/server-editor/enums/CursorControlMode",id:"sapi/preview/server-editor/enums/CursorControlMode",title:"Enumeration: CursorControlMode",description:"An enumeration used by the 3D block cursor Cursor",source:"@site/docs/sapi/preview/server-editor/enums/CursorControlMode.md",sourceDirName:"sapi/preview/server-editor/enums",slug:"/sapi/preview/server-editor/enums/CursorControlMode",permalink:"/docs/sapi/preview/server-editor/enums/CursorControlMode",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CursorControlMode",title:"Enumeration: CursorControlMode",sidebar_label:"CursorControlMode",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"CoreMenuType",permalink:"/docs/sapi/preview/server-editor/enums/CoreMenuType"},next:{title:"CursorTargetMode",permalink:"/docs/sapi/preview/server-editor/enums/CursorTargetMode"}},l={},u=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Fixed",id:"fixed",level:3},{value:"Keyboard",id:"keyboard",level:3},{value:"KeyboardAndMouse",id:"keyboardandmouse",level:3},{value:"Mouse",id:"mouse",level:3}],d={toc:u};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"An enumeration used by the 3D block cursor ",(0,n.kt)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/classes/Cursor"},"Cursor")),(0,n.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,n.kt)("h3",{id:"fixed"},"Fixed"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Fixed")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"3")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"When in fixed mode, the 3D block cursor will remain in a\nfixed position directly in front of the players facing\ndirection.  It cannot be moved without moving the player (or\nadjusting the fixed block distance).\nThis mode is useful for addressing block locations in the\nair (put the cursor into fixed mode, and fly the player\nuntil the desired air block is beneath the cursor, at which\npoint it is selectable without being clickable)"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"keyboard"},"Keyboard"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Keyboard")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"Using Keyboard mode will remove the dependence of the 3D\nblock cursor on the player mouse position.  The 3D block\ncursor can be positioned using the keyboard (or the Cursor\nmove methods on the cursor object) and the position will not\nbe reset if the mouse is moved"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"keyboardandmouse"},"KeyboardAndMouse"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"KeyboardAndMouse")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"2")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"This is generally the default move mode for the 3D block\ncursor.\nThe 3D block cursor can be positioned using the keyboard (or\nthe Cursor move methods on the cursor object) but the\nposition will be reset to the block location under the\nplayers mouse position if any mouse movement is detected."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mouse"},"Mouse"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Mouse")," = ",(0,n.kt)("inlineCode",{parentName:"p"},"1")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Remarks"))),(0,n.kt)("p",null,"The Mouse movement mode will disable keyboard or manual 3D\nblock cursor movement and make the 3D block cursor only\nreact to player mouse movement"))}p.isMDXComponent=!0}}]);