"use strict";(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[66061],{67973:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var i=n(96540),a=n(20053),o=n(1003),r=n(17559),l=n(66358),s=n(77910),c=n(67763);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};function m(e){const{content:t}=e,{metadata:{title:n,description:m,frontMatter:u}}=t,{wrapperClassName:f,hide_table_of_contents:h}=u;return i.createElement(o.e3,{className:(0,a.A)(f??r.G.wrapper.mdxPages,r.G.page.mdxPage)},i.createElement(o.be,{title:n,description:m}),i.createElement(l.A,null,i.createElement("main",{className:"container container--fluid margin-vert--lg"},i.createElement("div",{className:(0,a.A)("row",d.mdxPageWrapper)},i.createElement("div",{className:(0,a.A)("col",!h&&"col--8")},i.createElement("article",null,i.createElement(s.A,null,i.createElement(t,null)))),!h&&t.toc.length>0&&i.createElement("div",{className:"col col--2"},i.createElement(c.A,{toc:t.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},67763:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(58168),a=n(96540),o=n(20053),r=n(65195);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,o.A)(l.tableOfContents,"thin-scrollbar",t)},a.createElement(r.A,(0,i.A)({},n,{linkClassName:s,linkActiveClassName:c})))}},65195:(e,t,n)=>{n.d(t,{A:()=>h});var i=n(58168),a=n(96540),o=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),s=c(l,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:i,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:i}))))):null}const f=a.memo(u);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...h}=e;const v=(0,o.p)(),g=d??v.tableOfContents.minHeadingLevel,p=u??v.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:r(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:g,maxHeadingLevel:p});return m((0,a.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:p}}),[s,c,g,p])),a.createElement(f,(0,i.A)({toc:E,className:n,linkClassName:s},h))}},10137:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(96540),a=n(20053),o=n(17559),r=n(21312);const l={admonition:"admonition_WoCw",admonitionHeading:"admonitionHeading_TMsN",admonitionIcon:"admonitionIcon_Ibzs",admonitionContent:"admonitionContent_vXIg"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:r,icon:m}=d(e),u=function(e){const t=c[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),f=r??u.label,{iconComponent:h}=u,v=m??i.createElement(h,null);return i.createElement("div",{className:(0,a.A)(o.G.common.admonition,o.G.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,l.admonition)},i.createElement("div",{className:l.admonitionHeading},i.createElement("span",{className:l.admonitionIcon},v),f),i.createElement("div",{className:l.admonitionContent},t))}},49512:(e,t,n)=>{n.d(t,{A:()=>p});var i=n(38387),a=n(96540);class o{events={};static defaultMaxListeners=64;_maxListeners=o.defaultMaxListeners;on(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}once(e,t){var n=this;const i=function(){t(...arguments),n.off(e,i)};return this.on(e,i),this}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const a=this.events[e];return a&&a.forEach((e=>{e(...n)})),this}off(e,t){const n=this.events[e];if(!n)return this;if(!t)return delete this.events[e],this;const i=n.indexOf(t);return-1!==i&&n.splice(i,1),0===n.length&&delete this.events[e],this}listenerCount(e){const t=this.events[e];return t?t.length:0}listeners(e){return this.events[e]||[]}rawListeners(e){return this.listeners(e).map((e=>"function"==typeof e?e:e.listener))}prependListener(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].unshift(t),this}prependOnceListener(e,t){var n=this;const i=function(){t(...arguments),n.off(e,i)};return this.prependListener(e,i),this}removeListener(e,t){const n=this.events[e];return n.splice(n.indexOf(t),1),this}removeAllListeners(e){return e?delete this.events[e]:this.events={},this}getMaxListeners(){return this._maxListeners||o.defaultMaxListeners}setMaxListeners(e){return this._maxListeners=e,this}eventNames(){return Object.keys(this.events)}}const r=new o;function l(e){return[()=>{e.listener&&r.on(e.name,e.listener)},()=>{e.listener&&r.off(e.name,e.listener)},function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];r.emit(e.name,...n)}]}class s{static isHidden(){const e=localStorage.getItem("isHidden")??"true";return JSON.parse(e)}static setHidden(e){localStorage.setItem("isHidden",String(e))}static switchHidden(){const e=!this.isHidden(),t=l({name:"hiddenSwitch"})[2];this.setHidden(e),t(e)}}function c(e){const[t,n]=(0,a.useState)(!0),[i,o]=l({name:"hiddenSwitch",listener(e){n(e)}});return(0,a.useEffect)((()=>(i(),n(s.isHidden()),()=>{o()})),[]),a.createElement("div",{style:{display:t?"none":"flex"}},e.children)}function d(e){return a.createElement("div",{className:"gray-text",style:{color:"gray"}},e.children)}function m(e){return[()=>{e.listener&&window.addEventListener(e.name,e.listener)},()=>{e.listener&&window.removeEventListener(e.name,e.listener)}]}const u=[];var f=n(58168),h=n(41489),v=n(30076);function g(e){const[t,n]=(0,a.useState)(!1),{refs:i,floatingStyles:o,context:r}=(0,h.we)({open:t,onOpenChange:n,placement:e.position??"bottom-start",whileElementsMounted:v.ll,middleware:[(0,v.BN)({padding:24}),(0,v.UU)()]}),l=(0,h.kp)(r),s=(0,h.s9)(r),{getReferenceProps:c,getFloatingProps:d}=(0,h.bv)([l,s]);return a.createElement(a.Fragment,null,a.createElement("div",(0,f.A)({className:"hover-overlay-panel",ref:i.setReference},c()),e.trigger),t&&a.createElement("div",(0,f.A)({className:"hover-overlay-content p-4",ref:i.setFloating,autoFocus:!0,style:o},d()),e.content))}const p={...i.A,Hidden:c,HiddenSourceText:function(e){return a.createElement(c,null,a.createElement(d,null,e.children))},NavHiddenSwitcher:function(){const[e,t]=(0,a.useState)(),n=["ControlLeft","ShiftLeft","KeyS"],[i,o]=m({name:"keydown",listener(e){u.includes(e.code)||(u.push(e.code),d(u))}}),[r,l]=m({name:"keyup",listener(e){u.splice(u.indexOf(e.code),1)}}),c=()=>{s.switchHidden(),t(s.isHidden())},d=e=>{e.length!==n.length||e.some((e=>!n.includes(e)))||c()};return(0,a.useEffect)((()=>(i(),r(),t(s.isHidden()),()=>{o(),l()})),[]),a.createElement("div",null,a.createElement("button",{className:"button buttons hidden-switch-button",style:{float:"right"},title:"\u9690\u85cf\u539f\u6587",onClick:c},a.createElement("i",{className:"pi pi-fw pi-eye"+(e?"":"-slash")})))},HoverOverlayPanel:function(e){const[t,n]=(0,a.useState)(!1),{refs:i,floatingStyles:o,context:r}=(0,h.we)({open:t,onOpenChange:n,placement:e.position??"bottom-start",middleware:[(0,v.BN)({padding:24}),(0,v.UU)()]}),l=(0,h.Mk)(r),{getReferenceProps:s,getFloatingProps:c}=(0,h.bv)([l]);return a.createElement(a.Fragment,null,a.createElement("div",(0,f.A)({className:"hover-overlay-panel",ref:i.setReference},s()),e.trigger),t&&a.createElement("div",(0,f.A)({className:"hover-overlay-content p-4",ref:i.setFloating,autoFocus:!0,style:o},c()),e.content))},ClickOverplayPanel:g,PistonToggle:function(e){const t=a.createElement("div",{className:"piston-toggle-rect-outline"},a.createElement("div",{className:"piston-toggle-rect"}));return a.createElement(g,(0,f.A)({trigger:t},e))}}}}]);