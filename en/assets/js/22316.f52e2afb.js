(self.webpackChunkbedrock_tech=self.webpackChunkbedrock_tech||[]).push([[22316],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(87462),o=n(67294),a=n(86010),c=n(95999),s=n(86668),l=n(39960);const i="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5";function p(e){let{as:t,id:n,...p}=e;const{navbar:{hideOnScroll:m}}=(0,s.L)();if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},p,{id:void 0}));const d=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:n});return o.createElement(t,(0,r.Z)({},p,{className:(0,a.Z)("anchor",m?u:i,p.className),id:n}),p.children,o.createElement(l.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d},"\u200b"))}},22316:(e,t,n)=>{"use strict";n.d(t,{Z:()=>me});var r=n(67294),o=n(3905),a=n(87462),c=n(35742);var s=n(72389),l=n(86010),i=n(92949),u=n(86668);function p(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(35281),d=n(87594),f=n.n(d);const y=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){const n=e.map((e=>{const{start:n,end:r}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&h.test(a)){const e=a.match(h).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=f()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(g),t)}}(r,o),s=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<s.length;){const e=s[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${d-1},`),s.splice(d,1)}n=s.join("\n");const m={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;f()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const k="codeBlockContainer_Ckt0";function E(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(p());return r.createElement(t,(0,a.Z)({},n,{style:o,className:(0,l.Z)(n.className,k,m.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function B(e){let{children:t,className:n}=e;return r.createElement(E,{as:"pre",tabIndex:0,className:(0,l.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:N.codeBlockLines},t))}var w=n(902);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function j(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n){void 0===n&&(n=C);const o=(0,w.zX)(t),a=(0,w.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const O={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var T={Prism:n(87410).Z,theme:O};function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var S=/\r\n|\r|\n/,x=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},_=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=L({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=L({},n,{backgroundColor:null}),o};function I(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),Z(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),Z(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=L({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?L({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),Z(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(s))}})),Z(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=L({},I(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?L({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),Z(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,s=[],l=[s];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=_(u,p.type),p.alias&&(u=_(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(S),d=m.length;s.push({types:u,content:m[0]});for(var f=1;f<d;f++)x(s),l.push(s=[]),s.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return x(s),l}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),D="codeLine_lJS_",z="codeLineNumber_Tfdd",M="codeLineContent_feaV";function V(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:c,getTokenProps:s}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,l.Z)(n,o&&D)}),u=t.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},s({token:e,key:t})))));return r.createElement("span",i,o?r.createElement(r.Fragment,null,r.createElement("span",{className:z}),r.createElement("span",{className:M},u)):u,r.createElement("br",null))}var W=n(95999);const $={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),s=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}r.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,W.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,W.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,W.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",n,$.copyButton,o&&$.copyButtonCopied),onClick:s},r.createElement("span",{className:$.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const R="wordWrapButtonIcon_Bwma",q="wordWrapButtonEnabled_EoeP";function F(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,W.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,l.Z)("clean-btn",t,o&&q),"aria-label":a,title:a},r.createElement("svg",{className:R,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function G(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:s,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,u.L)(),f=i??n.split(" ").find((e=>e.startsWith("language-")))?.replace(/language-/,"")??m;const h=p(),g=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),s=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return j(a,s),(0,r.useEffect)((()=>{s()}),[e,s]),(0,r.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),b=function(e){return e?.match(y)?.groups.title??""}(o)||c,{lineClassNames:k,code:B}=v(t,{metastring:o,language:f,magicComments:d}),w=s??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return r.createElement(E,{as:"div",className:(0,l.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},b&&r.createElement("div",{className:N.codeBlockTitle},b),r.createElement("div",{className:N.codeBlockContent},r.createElement(A,(0,a.Z)({},T,{theme:h,code:B,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,l.Z)(t,N.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,l.Z)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(V,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:k[t],showLineNumbers:w})))))})),r.createElement("div",{className:N.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&r.createElement(F,{className:N.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),r.createElement(H,{className:N.codeButton,code:B}))))}function Y(e){let{children:t,...n}=e;const o=(0,s.Z)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof c?G:B;return r.createElement(l,(0,a.Z)({key:String(o)},n),c)}var U=n(39960);var X=n(86043);const J="details_lb9f",K="isBrowser_bmU9",Q="collapsibleContent_i85q";function ee(e){return!!e&&("SUMMARY"===e.tagName||ee(e.parentElement))}function te(e,t){return!!e&&(e===t||te(e.parentElement,t))}function ne(e){let{summary:t,children:n,...o}=e;const c=(0,s.Z)(),i=(0,r.useRef)(null),{collapsed:u,setCollapsed:p}=(0,X.u)({initialState:!o.open}),[m,d]=(0,r.useState)(o.open);return r.createElement("details",(0,a.Z)({},o,{ref:i,open:m,"data-collapsed":u,className:(0,l.Z)(J,c&&K,o.className),onMouseDown:e=>{ee(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ee(t)&&te(t,i.current)&&(e.preventDefault(),u?(p(!1),d(!0)):p(!0))}}),t??r.createElement("summary",null,"Details"),r.createElement(X.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),d(!e)}},r.createElement("div",{className:Q},n)))}const re="details_b_Ee";function oe(e){let{...t}=e;return r.createElement(ne,(0,a.Z)({},t,{className:(0,l.Z)("alert alert--info",re,t.className)}))}var ae=n(92503);function ce(e){return r.createElement(ae.Z,e)}const se="containsTaskList_mC6p";const le="img_ev3q";var ie=n(47083),ue=n(11875);const pe={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e):e));return r.createElement(c.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(Y,e)},a:function(e){return r.createElement(U.Z,e)},pre:function(e){return r.createElement(Y,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(oe,(0,a.Z)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,l.Z)(t,t?.includes("contains-task-list")&&se))}));var t},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,le))}));var t},h1:e=>r.createElement(ce,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(ce,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(ce,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(ce,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(ce,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(ce,(0,a.Z)({as:"h6"},e)),admonition:ie.Z,mermaid:ue.Z};function me(e){let{children:t}=e;return r.createElement(o.Zo,{components:pe},t)}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);