"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66061],{67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});t(96540);var i=t(34164),s=t(61213),o=t(17559),r=t(10781),a=t(77910),l=t(67763),c=t(50996),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(74848);function h(e){const{content:n}=e,{metadata:{title:t,editUrl:h,description:f,frontMatter:v,unlisted:g,lastUpdatedBy:p,lastUpdatedAt:x},assets:j}=n,{keywords:C,wrapperClassName:N,hide_table_of_contents:L}=v,H=j.image??v.image,b=!!(h||x||p);return(0,u.jsx)(s.e3,{className:(0,i.A)(N??o.G.wrapper.mdxPages,o.G.page.mdxPage),children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(s.be,{title:t,description:f,keywords:C,image:H}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.A)("col",!L&&"col--8"),children:[g&&(0,u.jsx)(c.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(a.A,{children:(0,u.jsx)(n,{})})}),b&&(0,u.jsx)(d.A,{className:(0,i.A)("margin-top--sm",o.G.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:x,lastUpdatedBy:p})]}),!L&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(l.A,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})})]})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var i=t(34164),s=t(65195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=t(74848);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",n),children:(0,r.jsx)(s.A,{...t,linkClassName:a,linkActiveClassName:l})})}},65195:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(96540),s=t(6342);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>a(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:r}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(a,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var m=t(28774),u=t(74848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,u.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const v=(0,s.p)(),g=c??v.tableOfContents.minHeadingLevel,p=m??v.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>r({toc:o(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:p}}),[a,l,g,p])),(0,u.jsx)(f,{toc:x,className:t,linkClassName:a,...h})}},50996:(e,n,t)=>{t.d(n,{A:()=>h});t(96540);var i=t(34164),s=t(21312),o=t(5260),r=t(74848);function a(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(17559),m=t(10137);function u(e){let{className:n}=e;return(0,r.jsx)(m.A,{type:"caution",title:(0,r.jsx)(a,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},10137:(e,n,t)=>{t.d(n,{A:()=>u});var i=t(96540),s=t(34164),o=t(17559),r=t(21312);const a={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};var l=t(74848);const c={note:{infimaClassName:"secondary",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,l.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,l.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,l.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,l.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,l.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},d={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),s=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return{mdxAdmonitionTitle:t,rest:s}}(e.children);return{...e,title:e.title??n,children:t}}function u(e){const{children:n,type:t,title:i,icon:r}=m(e),u=function(e){const n=d[e]??e,t=c[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),c.info)}(t),h=i??u.label,{iconComponent:f}=u,v=r??(0,l.jsx)(f,{});return(0,l.jsxs)("div",{className:(0,s.A)(o.G.common.admonition,o.G.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,a.admonition),children:[(0,l.jsxs)("div",{className:a.admonitionHeading,children:[(0,l.jsx)("span",{className:a.admonitionIcon,children:v}),h]}),(0,l.jsx)("div",{className:a.admonitionContent,children:n})]})}},27131:(e,n,t)=>{t.d(n,{A:()=>p});var i=t(7172),s=t(96540);class o{events={};static defaultMaxListeners=64;_maxListeners=o.defaultMaxListeners;on(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].push(n),this}once(e,n){var t=this;const i=function(){n(...arguments),t.off(e,i)};return this.on(e,i),this}emit(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];const s=this.events[e];return s&&s.forEach((e=>{e(...t)})),this}off(e,n){const t=this.events[e];if(!t)return this;if(!n)return delete this.events[e],this;const i=t.indexOf(n);return-1!==i&&t.splice(i,1),0===t.length&&delete this.events[e],this}listenerCount(e){const n=this.events[e];return n?n.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,n){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(n),this}prependOnceListener(e,n){var t=this;const i=function(){n(...arguments),t.off(e,i)};return this.prependListener(e,i),this}removeListener(e,n){const t=this.events[e];return t.splice(t.indexOf(n),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||o.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new o;function a(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.emit(e.name,...t)}]}class l{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),n=a({name:"hiddenSwitch"})[2];this.setHidden(e),n(e)}}var c=t(74848);function d(e){const[n,t]=(0,s.useState)(!0),[i,o]=a({name:"hiddenSwitch",listener(e){t(e)}});return(0,s.useEffect)((()=>(i(),t(l.isHidden()),()=>{o()})),[]),(0,c.jsx)("div",{style:{display:n?"none":"flex"},children:e.children})}function m(e){return(0,c.jsx)("div",{className:"gray-text",style:{color:"gray"},children:e.children})}function u(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const h=[];var f=t(41489),v=t(30076);function g(e){const[n,t]=(0,s.useState)(!1),{refs:i,floatingStyles:o,context:r}=(0,f.we)({open:n,onOpenChange:t,placement:e.position??"bottom-start",whileElementsMounted:v.ll,middleware:[(0,v.BN)({padding:24}),(0,v.UU)()]}),a=(0,f.kp)(r),l=(0,f.s9)(r),{getReferenceProps:d,getFloatingProps:m}=(0,f.bv)([a,l]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"hover-overlay-panel",ref:i.setReference,...d(),children:e.trigger}),n&&(0,c.jsx)("div",{className:"hover-overlay-content p-4",ref:i.setFloating,autoFocus:!0,style:o,...m(),children:e.content})]})}const p={...i.A,Hidden:d,HiddenSourceText:function(e){return(0,c.jsx)(d,{children:(0,c.jsx)(m,{children:e.children})})},NavHiddenSwitcher:function(){const[e,n]=(0,s.useState)(),t=["ControlLeft","ShiftLeft","KeyS"],[i,o]=u({name:"keydown",listener(e){h.includes(e.code)||(h.push(e.code),m(h))}}),[r,a]=u({name:"keyup",listener(e){h.splice(h.indexOf(e.code),1)}}),d=()=>{l.switchHidden(),n(l.isHidden())},m=e=>{e.length!==t.length||e.some((e=>!t.includes(e)))||d()};return(0,s.useEffect)((()=>(i(),r(),n(l.isHidden()),()=>{o(),a()})),[]),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:d,children:(0,c.jsx)("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})})})},HoverOverlayPanel:function(e){const[n,t]=(0,s.useState)(!1),{refs:i,floatingStyles:o,context:r}=(0,f.we)({open:n,onOpenChange:t,placement:e.position??"bottom-start",middleware:[(0,v.BN)({padding:24}),(0,v.UU)()]}),a=(0,f.Mk)(r),{getReferenceProps:l,getFloatingProps:d}=(0,f.bv)([a]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"hover-overlay-panel",ref:i.setReference,...l(),children:e.trigger}),n&&(0,c.jsx)("div",{className:"hover-overlay-content p-4",ref:i.setFloating,autoFocus:!0,style:o,...d(),children:e.content})]})},ClickOverplayPanel:g,PistonToggle:function(e){const n=(0,c.jsx)("div",{className:"piston-toggle-rect-outline",children:(0,c.jsx)("div",{className:"piston-toggle-rect"})});return(0,c.jsx)(g,{trigger:n,...e})}}}}]);