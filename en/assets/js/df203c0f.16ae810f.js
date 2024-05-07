"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[24279],{45921:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});t(96540);var i=t(34164),o=t(28774),s=t(53465),a=t(61213),l=t(17559),c=t(21312),r=t(41463),d=t(50996),m=t(51107),u=t(74848);function h(e){const n=function(){const{selectMessage:e}=(0,s.W)();return n=>e(n,(0,c.T)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:n}))}();return(0,c.T)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:n(e.tag.count),tagName:e.tag.label})}function g(e){let{doc:n}=e;return(0,u.jsxs)("article",{className:"margin-vert--lg",children:[(0,u.jsx)(o.A,{to:n.permalink,children:(0,u.jsx)(m.A,{as:"h2",children:n.title})}),n.description&&(0,u.jsx)("p",{children:n.description})]})}function f(e){let{title:n}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.be,{title:n}),(0,u.jsx)(r.A,{tag:"doc_tag_doc_list"})]})}function p(e){let{tag:n,title:t}=e;return(0,u.jsx)(a.e3,{className:(0,i.A)(l.G.page.docsTagDocListPage),children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("main",{className:"col col--8 col--offset-2",children:[n.unlisted&&(0,u.jsx)(d.A,{}),(0,u.jsxs)("header",{className:"margin-bottom--xl",children:[(0,u.jsx)(m.A,{as:"h1",children:t}),(0,u.jsx)(o.A,{href:n.allTagsPath,children:(0,u.jsx)(c.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,u.jsx)("section",{className:"margin-vert--lg",children:n.items.map((e=>(0,u.jsx)(g,{doc:e},e.id)))})]})})})})}function x(e){const n=h(e);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(f,{...e,title:n}),(0,u.jsx)(p,{...e,title:n})]})}},50996:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var i=t(34164),o=t(21312),s=t(5260),a=t(74848);function l(){return(0,a.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,a.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,a.jsx)(s.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(17559),m=t(10137);function u(e){let{className:n}=e;return(0,a.jsx)(m.A,{type:"caution",title:(0,a.jsx)(l,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,a.jsx)(c,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{}),(0,a.jsx)(u,{...e})]})}},53465:(e,n,t)=>{t.d(n,{W:()=>r});var i=t(96540),o=t(44586);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,i.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:a(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function r(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const i=e.split("|");if(1===i.length)return i[0];i.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const o=t.select(n),s=t.pluralForms.indexOf(o);return i[Math.min(s,i.length-1)]}(t,n,e)}}},10137:(e,n,t)=>{t.d(n,{A:()=>u});var i=t(96540),o=t(34164),s=t(17559),a=t(21312);const l={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var c=t(74848);const r={note:{infimaClassName:"secondary",iconComponent:function(){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,c.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,c.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,c.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,c.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,c.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=(0,c.jsx)(c.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:o}}(e.children);return{...e,title:e.title??n,children:t}}function u(e){const{children:n,type:t,title:i,icon:a}=m(e),u=function(e){const n=d[e]??e,t=r[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),r.info)}(t),h=i??u.label,{iconComponent:g}=u,f=a??(0,c.jsx)(g,{});return(0,c.jsxs)("div",{className:(0,o.A)(s.G.common.admonition,s.G.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,l.admonition),children:[(0,c.jsxs)("div",{className:l.admonitionHeading,children:[(0,c.jsx)("span",{className:l.admonitionIcon,children:f}),h]}),(0,c.jsx)("div",{className:l.admonitionContent,children:n})]})}}}]);