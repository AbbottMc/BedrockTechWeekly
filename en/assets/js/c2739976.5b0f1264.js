"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[89555],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},y=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=i,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},y),{},{components:t})):r.createElement(g,o({ref:n},y))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(96540),t(15680));const a={id:"PlayAnimationOptions",title:"Interface: PlayAnimationOptions",sidebar_label:"PlayAnimationOptions",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"sapi/preview/server/interfaces/PlayAnimationOptions",id:"sapi/preview/server/interfaces/PlayAnimationOptions",title:"Interface: PlayAnimationOptions",description:"Contains additional options for how an animation is played.",source:"@site/docs/sapi/preview/server/interfaces/PlayAnimationOptions.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/PlayAnimationOptions",permalink:"/en/docs/sapi/preview/server/interfaces/PlayAnimationOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PlayAnimationOptions",title:"Interface: PlayAnimationOptions",sidebar_label:"PlayAnimationOptions",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"NotEqualsComparison",permalink:"/en/docs/sapi/preview/server/interfaces/NotEqualsComparison"},next:{title:"PlayerSoundOptions",permalink:"/en/docs/sapi/preview/server/interfaces/PlayerSoundOptions"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"blendOutTime",id:"blendouttime",level:3},{value:"controller",id:"controller",level:3},{value:"nextState",id:"nextstate",level:3},{value:"players",id:"players",level:3},{value:"stopExpression",id:"stopexpression",level:3}],y={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Contains additional options for how an animation is played."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"blendouttime"},"blendOutTime"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"blendOutTime"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Amount of time to fade out after an animation stops."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"controller"},"controller"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"controller"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Specifies a controller to use that has been defined on the\nentity."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"nextstate"},"nextState"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"nextState"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Specifies the state to transition to."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"players"},"players"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"players"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"A list of players the animation will be visible to."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"stopexpression"},"stopExpression"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"stopExpression"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"string")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,i.yg)("p",null,"Specifies a Molang expression for when this animation should\ncomplete."))}u.isMDXComponent=!0}}]);