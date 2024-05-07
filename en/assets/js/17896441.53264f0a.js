"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[18401],{12447:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ie});var s=t(96540),i=t(61213),a=t(89532),o=t(74848);const l=s.createContext(null);function r(e){let{children:n,content:t}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,o.jsx)(l.Provider,{value:i,children:n})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(34164),m=t(24581),h=t(21312),v=t(39022);function f(e){const{previous:n,next:t}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,o.jsx)(v.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,o.jsx)(v.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,o.jsx)(f,{previous:e.previous,next:e.next})}var g=t(44586),p=t(28774),b=t(44070),j=t(17559),C=t(55597),N=t(32252);const A={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,o.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function L(e){const n=A[e.versionMetadata.banner];return(0,o.jsx)(n,{...e})}function _(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(p.A,{to:t,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function H(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:i}=(0,b.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,C.g1)(i),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,b.HW)(i),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(n,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(L,{siteTitle:s,versionMetadata:t})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function k(e){let{className:n}=e;const t=(0,N.r)();return t.banner?(0,o.jsx)(H,{className:n,versionMetadata:t}):null}function T(e){let{className:n}=e;const t=(0,N.r)();return t.badge?(0,o.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var y=t(62053),w=t(4336);function M(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:i}=e,a=i.length>0,l=!!(n||t||s);return a||l?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(y.A,{tags:i})})}),l&&(0,o.jsx)(w.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var I=t(41422),S=t(65195);const E={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function B(e){let{collapsed:n,...t}=e;return(0,o.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!n&&E.tocCollapsibleButtonExpanded,t.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const O={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,I.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(O.tocCollapsible,!a&&O.tocCollapsibleExpanded,t),children:[(0,o.jsx)(B,{collapsed:a,onClick:l}),(0,o.jsx)(I.N,{lazy:!0,className:O.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(S.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:i})})]})}const R={tocMobile:"tocMobile_ITEo"};function V(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(z,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,R.tocMobile)})}var F=t(67763);function P(){const{toc:e,frontMatter:n}=c();return(0,o.jsx)(F.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var G=t(51107),U=t(77910);function D(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[t&&(0,o.jsx)("header",{children:(0,o.jsx)(G.A,{as:"h1",children:t})}),(0,o.jsx)(U.A,{children:n})]})}var W=t(84142),$=t(99169),q=t(86025);function X(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const J={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function K(){const e=(0,q.A)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(X,{className:J.breadcrumbHomeIcon})})})}const Q={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Y(e){let{children:n,href:t,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:n}):t?(0,o.jsx)(p.A,{className:i,href:t,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:n})}):(0,o.jsx)("span",{className:i,children:n})}function Z(e){let{children:n,active:t,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,W.OF)(),n=(0,$.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Q.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,o.jsx)(K,{}),e.map(((n,t)=>{const s=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,o.jsx)(Z,{active:s,index:t,addMicrodata:!!i,children:(0,o.jsx)(Y,{href:i,isLast:s,children:n.label})},t)}))]})}):null}var ne=t(50996);const te={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&n.length>0;return{hidden:s,mobile:i?(0,o.jsx)(V,{}):void 0,desktop:!i||"desktop"!==t&&"ssr"!==t?void 0:(0,o.jsx)(P,{})}}(),{metadata:{unlisted:s}}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&te.docItemCol),children:[s&&(0,o.jsx)(ne.A,{}),(0,o.jsx)(k,{}),(0,o.jsxs)("div",{className:te.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(T,{}),t.mobile,(0,o.jsx)(D,{children:n}),(0,o.jsx)(M,{})]}),(0,o.jsx)(x,{})]})]}),t.desktop&&(0,o.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ie(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.e3,{className:n,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(t,{})})]})})}},39022:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(34164),i=t(28774),a=t(74848);function o(e){const{permalink:n,title:t,subLabel:o,isNext:l}=e;return(0,a.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[o&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,a.jsx)("div",{className:"pagination-nav__label",children:t})]})}},67763:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var s=t(34164),i=t(65195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(74848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(i.A,{...t,linkClassName:l,linkActiveClassName:r})})}},65195:(e,n,t)=>{t.d(n,{A:()=>f});var s=t(96540),i=t(6342);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):s.push(i)})),s}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>l(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let i=n;i<=t;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(28774),m=t(74848);function h(e){let{toc:n,className:t,linkClassName:s,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,i.p)(),x=c??f.tableOfContents.minHeadingLevel,g=u??f.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:g}}),[l,r,x,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:l,...h})}},56133:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var s=t(34164),i=t(28774);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var o=t(74848);function l(e){let{permalink:n,label:t,count:l}=e;return(0,o.jsxs)(i.A,{href:n,className:(0,s.A)(a.tag,l?a.tagWithCount:a.tagRegular),children:[t,l&&(0,o.jsx)("span",{children:l})]})}},62053:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(34164),i=t(21312),a=t(56133);const o={tags:"tags_jXut",tag:"tag_QGVx"};var l=t(74848);function r(e){let{tags:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(o.tags,"padding--none","margin-left--sm"),children:n.map((e=>{let{label:n,permalink:t}=e;return(0,l.jsx)("li",{className:o.tag,children:(0,l.jsx)(a.A,{label:n,permalink:t})},t)}))})]})}},50996:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var s=t(34164),i=t(21312),a=t(5260),o=t(74848);function l(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(17559),u=t(10137);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}},10137:(e,n,t)=>{t.d(n,{A:()=>m});var s=t(96540),i=t(34164),a=t(17559),o=t(21312);const l={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var r=t(74848);const c={note:{infimaClassName:"secondary",iconComponent:function(){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,r.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,r.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,r.jsx)("svg",{viewBox:"0 0 12 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,r.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,r.jsx)("svg",{viewBox:"0 0 14 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,r.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,r.jsx)("svg",{viewBox:"0 0 16 16",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,r.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=(0,r.jsx)(r.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}function m(e){const{children:n,type:t,title:s,icon:o}=u(e),m=function(e){const n=d[e]??e,t=c[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),c.info)}(t),h=s??m.label,{iconComponent:v}=m,f=o??(0,r.jsx)(v,{});return(0,r.jsxs)("div",{className:(0,i.A)(a.G.common.admonition,a.G.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,l.admonition),children:[(0,r.jsxs)("div",{className:l.admonitionHeading,children:[(0,r.jsx)("span",{className:l.admonitionIcon,children:f}),h]}),(0,r.jsx)("div",{className:l.admonitionContent,children:n})]})}},12693:(e,n,t)=>{t.d(n,{A:()=>g});var s=t(7172),i=t(96540);class a{events={};static defaultMaxListeners=64;_maxListeners=a.defaultMaxListeners;on(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].push(n),this}once(e,n){var t=this;const s=function(){n(...arguments),t.off(e,s)};return this.on(e,s),this}emit(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];const i=this.events[e];return i&&i.forEach((e=>{e(...t)})),this}off(e,n){const t=this.events[e];if(!t)return this;if(!n)return delete this.events[e],this;const s=t.indexOf(n);return-1!==s&&t.splice(s,1),0===t.length&&delete this.events[e],this}listenerCount(e){const n=this.events[e];return n?n.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(n),this}prependOnceListener(e,n){var t=this;const s=function(){n(...arguments),t.off(e,s)};return this.prependListener(e,s),this}removeListener(e,n){const t=this.events[e];return t.splice(t.indexOf(n),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||a.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const o=new a;function l(e){return[()=>{e.listener&&o.on(e.name,e.listener)},()=>{e.listener&&o.off(e.name,e.listener)},function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];o.emit(e.name,...t)}]}class r{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),n=l({name:"hiddenSwitch"})[2];this.setHidden(e),n(e)}}var c=t(74848);function d(e){const[n,t]=(0,i.useState)(!0),[s,a]=l({name:"hiddenSwitch",listener(e){t(e)}});return(0,i.useEffect)((()=>(s(),t(r.isHidden()),()=>{a()})),[]),(0,c.jsx)("div",{className:e.className,style:{display:n?"none":"flex"},children:e.children})}function u(e){return(0,c.jsx)("div",{className:"gray-text",style:{color:"gray"},children:e.children})}function m(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const h=[];var v=t(41489),f=t(30076);function x(e){const[n,t]=(0,i.useState)(!1),{refs:s,floatingStyles:a,context:o}=(0,v.we)({open:n,onOpenChange:t,placement:e.position??"bottom-start",whileElementsMounted:f.ll,middleware:[(0,f.BN)({padding:24}),(0,f.UU)()]}),l=(0,v.kp)(o),r=(0,v.s9)(o),{getReferenceProps:d,getFloatingProps:u}=(0,v.bv)([l,r]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"hover-overlay-panel",ref:s.setReference,...d(),children:e.trigger}),n&&(0,c.jsx)("div",{className:"hover-overlay-content p-4",ref:s.setFloating,autoFocus:!0,style:a,...u(),children:e.content})]})}const g={...s.A,Hidden:d,HiddenSourceText:function(e){return(0,c.jsx)(d,{children:(0,c.jsx)(u,{children:e.children})})},NavHiddenSwitcher:function(){const[e,n]=(0,i.useState)(),t=["ControlLeft","ShiftLeft","KeyS"],[s,a]=m({name:"keydown",listener(e){h.includes(e.code)||(h.push(e.code),u(h))}}),[o,l]=m({name:"keyup",listener(e){h.splice(h.indexOf(e.code),1)}}),d=()=>{r.switchHidden(),n(r.isHidden())},u=e=>{e.length!==t.length||e.some((e=>!t.includes(e)))||d()};return(0,i.useEffect)((()=>(s(),o(),n(r.isHidden()),()=>{a(),l()})),[]),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d,children:(0,c.jsx)("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})})})},HoverOverlayPanel:function(e){const[n,t]=(0,i.useState)(!1),{refs:s,floatingStyles:a,context:o}=(0,v.we)({open:n,onOpenChange:t,placement:e.position??"bottom-start",middleware:[(0,f.BN)({padding:24}),(0,f.UU)()]}),l=(0,v.Mk)(o),{getReferenceProps:r,getFloatingProps:d}=(0,v.bv)([l]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"hover-overlay-panel",ref:s.setReference,...r(),children:e.trigger}),n&&(0,c.jsx)("div",{className:"hover-overlay-content p-4",ref:s.setFloating,autoFocus:!0,style:a,...d(),children:e.content})]})},ClickOverplayPanel:x,PistonToggle:function(e){const n=(0,c.jsx)("div",{className:"piston-toggle-rect-outline",children:(0,c.jsx)("div",{className:"piston-toggle-rect"})});return(0,c.jsx)(x,{trigger:n,...e})},SingleItem:function(e){const n=e.keepMargin??!1;return(0,c.jsx)("ul",{className:n?"":"hidden-source-text",children:(0,c.jsx)("li",{children:e.children})})}}}}]);