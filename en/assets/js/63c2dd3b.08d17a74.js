"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[86822],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>u});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},g=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,u=c["".concat(l,".").concat(y)]||c[y]||m[y]||o;return r?t.createElement(u,s(s({ref:n},g),{},{components:r})):t.createElement(u,s({ref:n},g))}));function u(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},44191:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const o={id:"RawMessage",title:"Interface: RawMessage",sidebar_label:"RawMessage",sidebar_position:0,custom_edit_url:null},s=void 0,i={unversionedId:"sapi/preview/server/interfaces/RawMessage",id:"sapi/preview/server/interfaces/RawMessage",title:"Interface: RawMessage",description:"Defines a JSON structure that is used for more flexible.",source:"@site/docs/sapi/preview/server/interfaces/RawMessage.md",sourceDirName:"sapi/preview/server/interfaces",slug:"/sapi/preview/server/interfaces/RawMessage",permalink:"/en/docs/sapi/preview/server/interfaces/RawMessage",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RawMessage",title:"Interface: RawMessage",sidebar_label:"RawMessage",sidebar_position:0,custom_edit_url:null},sidebar:"sapiPreviewSidebar",previous:{title:"RangeComparison",permalink:"/en/docs/sapi/preview/server/interfaces/RangeComparison"},next:{title:"RawMessageScore",permalink:"/en/docs/sapi/preview/server/interfaces/RawMessageScore"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"rawtext",id:"rawtext",level:3},{value:"score",id:"score",level:3},{value:"text",id:"text",level:3},{value:"translate",id:"translate",level:3},{value:"with",id:"with",level:3}],g={toc:p},c="wrapper";function m(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Defines a JSON structure that is used for more flexible."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("p",null,"addTranslatedSign.ts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';\n\nfunction placeTranslatedSign(location: DimensionLocation, text: string) {\n    const signBlock = location.dimension.getBlock(location);\n\n    if (!signBlock) {\n        console.warn('Could not find a block at specified location.');\n        return;\n    }\n    const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });\n    signBlock.setPermutation(signPerm);\n\n    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);\n    if (signComponent) {\n        signComponent.setText({ translate: 'item.skull.player.name', with: [text] });\n    } else {\n        console.error('Could not find a sign component on the block.');\n    }\n}\n\nplaceTranslatedSign(\n    {\n        dimension: world.getDimension('overworld'),\n        x: 0,\n        y: 0,\n        z: 0,\n    },\n    'Steve',\n);\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Example"))),(0,a.yg)("p",null,"showTranslatedMessageForm.ts"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import { world, Player } from '@minecraft/server';\nimport { MessageFormData, MessageFormResponse } from '@minecraft/server-ui';\n\nfunction showMessage(player: Player) {\n    const messageForm = new MessageFormData()\n        .title({ translate: 'permissions.removeplayer' })\n        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })\n        .button1('Player 1')\n        .button2('Player 2');\n\n    messageForm\n        .show(player)\n        .then((formData: MessageFormResponse) => {\n            // player canceled the form, or another dialog was up and open.\n            if (formData.canceled || formData.selection === undefined) {\n                return;\n            }\n\n            console.warn(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);\n        })\n        .catch((error: Error) => {\n            console.warn('Failed to show form: ' + error);\n        });\n};\n\nshowMessage(world.getAllPlayers()[0]);\n")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"rawtext"},"rawtext"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"rawtext"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,a.yg)("inlineCode",{parentName:"a"},"RawMessage")),"[]"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Provides a raw-text equivalent of the current message."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"score"},"score"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"score"),": ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessageScore"},(0,a.yg)("inlineCode",{parentName:"a"},"RawMessageScore"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Provides a token that will get replaced with the value of a\nscore."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"text"},"text"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"text"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Provides a string literal value to use."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"translate"},"translate"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"translate"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Provides a translation token where, if the client has an\navailable resource in the players' language which matches\nthe token, will get translated on the client."),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"with"},"with"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"with"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,a.yg)("a",{parentName:"p",href:"/en/docs/sapi/preview/server/interfaces/RawMessage"},(0,a.yg)("inlineCode",{parentName:"a"},"RawMessage"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Remarks"))),(0,a.yg)("p",null,"Arguments for the translation token. Can be either an array\nof strings or RawMessage containing an array of raw text\nobjects."))}m.isMDXComponent=!0}}]);