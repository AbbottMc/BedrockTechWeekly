"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[53475],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(r),u=i,g=y["".concat(l,".").concat(u)]||y[u]||d[u]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[y]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(58168),i=(r(96540),r(15680));const o={id:"IPropertyPaneOptions",title:"Interface: IPropertyPaneOptions",sidebar_label:"IPropertyPaneOptions",sidebar_position:0,custom_edit_url:null},a=void 0,p={unversionedId:"sapi/preview/server-editor/interfaces/IPropertyPaneOptions",id:"sapi/preview/server-editor/interfaces/IPropertyPaneOptions",title:"Interface: IPropertyPaneOptions",description:"The options to create a pane.",source:"@site/docs/sapi/preview/server-editor/interfaces/IPropertyPaneOptions.md",sourceDirName:"sapi/preview/server-editor/interfaces",slug:"/sapi/preview/server-editor/interfaces/IPropertyPaneOptions",permalink:"/docs/sapi/preview/server-editor/interfaces/IPropertyPaneOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IPropertyPaneOptions",title:"Interface: IPropertyPaneOptions",sidebar_label:"IPropertyPaneOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"IPropertyPane",permalink:"/docs/sapi/preview/server-editor/interfaces/IPropertyPane"},next:{title:"IPropertyTableCellItem",permalink:"/docs/sapi/preview/server-editor/interfaces/IPropertyTableCellItem"}},l={},s=[{value:"Properties",id:"properties",level:2},{value:"direction",id:"direction",level:3},{value:"titleAltText",id:"titlealttext",level:3},{value:"titleStringId",id:"titlestringid",level:3},{value:"width",id:"width",level:3}],c={toc:s},y="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(y,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The options to create a pane."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"direction"},"direction"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"direction"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/sapi/preview/server-editor/enums/LayoutDirection"},(0,i.yg)("inlineCode",{parentName:"a"},"LayoutDirection"))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Layout direction for sub panes"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"titlealttext"},"titleAltText"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"titleAltText"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Fallback display text if no loc ID"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"titlestringid"},"titleStringId"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"titleStringId"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Loc ID (resolved on client)"),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"width"},"width"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"width"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Width of the panel in rem. This property is ignored in case\nof sub panes"))}d.isMDXComponent=!0}}]);