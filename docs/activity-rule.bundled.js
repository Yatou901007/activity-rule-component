/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol();class i{constructor(t,i){if(i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const e=new Map,l=t=>{let l=e.get(t);return void 0===l&&e.set(t,l=new i(t,s)),l},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>l("string"==typeof t?t:t+""))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var n,r,h,a;const c={toAttribute(t,s){switch(s){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,s)=>s!==t&&(s==s||t==t),u={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class v extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var s;null!==(s=this.v)&&void 0!==s||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((s,i)=>{const e=this.Πp(i,s);void 0!==e&&(this.Πm.set(e,i),t.push(e))})),t}static createProperty(t,s=u){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(e){const l=this[t];this[s]=e,this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(o(t))}else void 0!==t&&s.push(o(t));return s}static Πp(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var s,i;(null!==(s=this.ΠU)&&void 0!==s?s:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var s;null===(s=this.ΠU)||void 0===s||s.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,s)=>{this.hasOwnProperty(s)&&(this.Πi.set(s,this[s]),delete this[s])}))}createRenderRoot(){var s;const i=null!==(s=this.shadowRoot)&&void 0!==s?s:this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{t?s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,s.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostConnected)||void 0===s?void 0:s.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostDisconnected)||void 0===s?void 0:s.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,s,i){this.K(t,i)}Πj(t,s,i=u){var e,l;const o=this.constructor.Πp(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(l=null===(e=i.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==l?l:c.toAttribute)(s,i.type);this.Πh=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this.Πh=null}}K(t,s){var i,e,l;const o=this.constructor,n=o.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=o.getPropertyOptions(n),r=t.converter,h=null!==(l=null!==(e=null===(i=r)||void 0===i?void 0:i.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==l?l:c.fromAttribute;this.Πh=n,this[n]=h(s,t.type),this.Πh=null}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],s)?(this.L.has(t)||this.L.set(t,s),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,s)=>this[s]=t)),this.Πi=void 0);let s=!1;const i=this.L;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostUpdate)||void 0===s?void 0:s.call(t)})),this.update(i)):this.Π$()}catch(t){throw s=!1,this.Π$(),t}s&&this.E(i)}willUpdate(t){}E(t){var s;null===(s=this.ΠU)||void 0===s||s.forEach((t=>{var s;return null===(s=t.hostUpdated)||void 0===s?void 0:s.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,s)=>this.Πj(s,this[s],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p,f,b,w;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null===(r=(n=globalThis).reactiveElementPlatformSupport)||void 0===r||r.call(n,{ReactiveElement:v}),(null!==(h=(a=globalThis).reactiveElementVersions)&&void 0!==h?h:a.reactiveElementVersions=[]).push("1.0.0-rc.2");const g=globalThis.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,x="?"+m,_=`<${x}>`,$=document,S=(t="")=>$.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,T=t=>{var s;return C(t)||"function"==typeof(null===(s=t)||void 0===s?void 0:s[Symbol.iterator])},z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,O=/>/g,j=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,E=/'/g,A=/"/g,U=/^(?:script|style|textarea)$/i,N=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),R=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),I=new WeakMap,P=$.createTreeWalker($,129,null,!1),L=(t,s)=>{const i=t.length-1,e=[];let l,o=2===s?"<svg>":"",n=z;for(let s=0;s<i;s++){const i=t[s];let r,h,a=-1,c=0;for(;c<i.length&&(n.lastIndex=c,h=n.exec(i),null!==h);)c=n.lastIndex,n===z?"!--"===h[1]?n=M:void 0!==h[1]?n=O:void 0!==h[2]?(U.test(h[2])&&(l=RegExp("</"+h[2],"g")),n=j):void 0!==h[3]&&(n=j):n===j?">"===h[0]?(n=null!=l?l:z,a=-1):void 0===h[1]?a=-2:(a=n.lastIndex-h[2].length,r=h[1],n=void 0===h[3]?j:'"'===h[3]?A:E):n===A||n===E?n=j:n===M||n===O?n=z:(n=j,l=void 0);const d=n===j&&t[s+1].startsWith("/>")?" ":"";o+=n===z?i+_:a>=0?(e.push(r),i.slice(0,a)+"$lit$"+i.slice(a)+m+d):i+m+(-2===a?(e.push(void 0),s):d)}const r=o+(t[i]||"<?>")+(2===s?"</svg>":"");return[void 0!==y?y.createHTML(r):r,e]};class W{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let l=0,o=0;const n=t.length-1,r=this.parts,[h,a]=L(t,s);if(this.el=W.createElement(h,i),P.currentNode=this.el.content,2===s){const t=this.el.content,s=t.firstChild;s.remove(),t.append(...s.childNodes)}for(;null!==(e=P.nextNode())&&r.length<n;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const s of e.getAttributeNames())if(s.endsWith("$lit$")||s.startsWith(m)){const i=a[o++];if(t.push(s),void 0!==i){const t=e.getAttribute(i.toLowerCase()+"$lit$").split(m),s=/([.?@])?(.*)/.exec(i);r.push({type:1,index:l,name:s[2],strings:t,ctor:"."===s[1]?J:"?"===s[1]?K:"@"===s[1]?V:H})}else r.push({type:6,index:l})}for(const s of t)e.removeAttribute(s)}if(U.test(e.tagName)){const t=e.textContent.split(m),s=t.length-1;if(s>0){e.textContent=g?g.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],S()),P.nextNode(),r.push({type:2,index:++l});e.append(t[s],S())}}}else if(8===e.nodeType)if(e.data===x)r.push({type:2,index:l});else{let t=-1;for(;-1!==(t=e.data.indexOf(m,t+1));)r.push({type:7,index:l}),t+=m.length-1}l++}}static createElement(t,s){const i=$.createElement("template");return i.innerHTML=t,i}}function q(t,s,i=t,e){var l,o,n,r;if(s===R)return s;let h=void 0!==e?null===(l=i.Σi)||void 0===l?void 0:l[e]:i.Σo;const a=k(s)?void 0:s._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,i,e)),void 0!==e?(null!==(n=(r=i).Σi)&&void 0!==n?n:r.Σi=[])[e]=h:i.Σo=h),void 0!==h&&(s=q(t,h.S(t,s.values),h,e)),s}class B{constructor(t,s){this.l=[],this.N=void 0,this.D=t,this.M=s}u(t){var s;const{el:{content:i},parts:e}=this.D,l=(null!==(s=null==t?void 0:t.creationScope)&&void 0!==s?s:$).importNode(i,!0);P.currentNode=l;let o=P.nextNode(),n=0,r=0,h=e[0];for(;void 0!==h;){if(n===h.index){let s;2===h.type?s=new Z(o,o.nextSibling,this,t):1===h.type?s=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(s=new X(o,this,t)),this.l.push(s),h=e[++r]}n!==(null==h?void 0:h.index)&&(o=P.nextNode(),n++)}return l}v(t){let s=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,s),s+=i.strings.length-2):i.I(t[s])),s++}}class Z{constructor(t,s,i,e){this.type=2,this.N=void 0,this.A=t,this.B=s,this.M=i,this.options=e}setConnected(t){var s;null===(s=this.P)||void 0===s||s.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,s=this){t=q(this,t,s),k(t)?t===D||null==t||""===t?(this.H!==D&&this.R(),this.H=D):t!==this.H&&t!==R&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):T(t)?this.g(t):this.m(t)}k(t,s=this.B){return this.A.parentNode.insertBefore(t,s)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const s=this.A.nextSibling;null!==s&&3===s.nodeType&&(null===this.B?null===s.nextSibling:s===this.B.previousSibling)?s.data=t:this.$($.createTextNode(t)),this.H=t}_(t){var s;const{values:i,_$litType$:e}=t,l="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=W.createElement(e.h,this.options)),e);if((null===(s=this.H)||void 0===s?void 0:s.D)===l)this.H.v(i);else{const t=new B(l,this),s=t.u(this.options);t.v(i),this.$(s),this.H=t}}C(t){let s=I.get(t.strings);return void 0===s&&I.set(t.strings,s=new W(t)),s}g(t){C(this.H)||(this.H=[],this.R());const s=this.H;let i,e=0;for(const l of t)e===s.length?s.push(i=new Z(this.k(S()),this.k(S()),this,this.options)):i=s[e],i.I(l),e++;e<s.length&&(this.R(i&&i.B.nextSibling,e),s.length=e)}R(t=this.A.nextSibling,s){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,s);t&&t!==this.B;){const s=t.nextSibling;t.remove(),t=s}}}class H{constructor(t,s,i,e,l){this.type=1,this.H=D,this.N=void 0,this.V=void 0,this.element=t,this.name=s,this.M=e,this.options=l,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(D),this.strings=i):this.H=D}get tagName(){return this.element.tagName}I(t,s=this,i,e){const l=this.strings;let o=!1;if(void 0===l)t=q(this,t,s,0),o=!k(t)||t!==this.H&&t!==R,o&&(this.H=t);else{const e=t;let n,r;for(t=l[0],n=0;n<l.length-1;n++)r=q(this,e[i+n],s,n),r===R&&(r=this.H[n]),o||(o=!k(r)||r!==this.H[n]),r===D?t=D:t!==D&&(t+=(null!=r?r:"")+l[n+1]),this.H[n]=r}o&&!e&&this.W(t)}W(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends H{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===D?void 0:t}}class K extends H{constructor(){super(...arguments),this.type=4}W(t){t&&t!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends H{constructor(){super(...arguments),this.type=5}I(t,s=this){var i;if((t=null!==(i=q(this,t,s,0))&&void 0!==i?i:D)===R)return;const e=this.H,l=t===D&&e!==D||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==D&&(e===D||l);l&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var s,i;"function"==typeof this.H?this.H.call(null!==(i=null===(s=this.options)||void 0===s?void 0:s.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class X{constructor(t,s,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=s,this.options=i}I(t){q(this,t)}}const Y={Z:"$lit$",U:m,Y:x,q:1,X:L,tt:B,it:T,st:q,et:Z,ot:H,nt:K,rt:V,lt:J,ht:X};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var F,G,Q,tt,st,it;null===(f=(p=globalThis).litHtmlPlatformSupport)||void 0===f||f.call(p,W,Z),(null!==(b=(w=globalThis).litHtmlVersions)&&void 0!==b?b:w.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(F=(it=globalThis).litElementVersions)&&void 0!==F?F:it.litElementVersions=[]).push("3.0.0-rc.2");class et extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,s;const i=super.createRenderRoot();return null!==(t=(s=this.renderOptions).renderBefore)&&void 0!==t||(s.renderBefore=i.firstChild),i}update(t){const s=this.render();super.update(t),this.Φt=((t,s,i)=>{var e,l;const o=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:s;let n=o._$litPart$;if(void 0===n){const t=null!==(l=null==i?void 0:i.renderBefore)&&void 0!==l?l:null;o._$litPart$=n=new Z(s.insertBefore(S(),t),t,void 0,i)}return n.I(t),n})(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return R}}et.finalized=!0,et._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:et}),null===(st=(tt=globalThis).litElementPlatformSupport)||void 0===st||st.call(tt,{LitElement:et});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?{...s,finisher(i){i.createProperty(s.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:s.key,initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ot(t){return(s,i)=>void 0!==i?((t,s,i)=>{s.constructor.createProperty(i,t)})(t,s,i):lt(t,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const nt=2;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{et:rt}=Y,ht=()=>document.createComment(""),at=(t,s,i)=>{var e;const l=t.A.parentNode,o=void 0===s?t.B:s.A;if(void 0===i){const s=l.insertBefore(ht(),o),e=l.insertBefore(ht(),o);i=new rt(s,e,t,t.options)}else{const s=i.B.nextSibling,n=i.M!==t;if(n&&(null===(e=i.Q)||void 0===e||e.call(i,t),i.M=t),s!==o||n){let t=i.A;for(;t!==s;){const s=t.nextSibling;l.insertBefore(t,o),t=s}}}return i},ct=(t,s,i=t)=>(t.I(s,i),t),dt={},ut=(t,s=dt)=>t.H=s,vt=t=>{var s;null===(s=t.P)||void 0===s||s.call(t,!1,!0);let i=t.A;const e=t.B.nextSibling;for(;i!==e;){const t=i.nextSibling;i.remove(),i=t}},pt=(t,s,i)=>{const e=new Map;for(let l=s;l<=i;l++)e.set(t[l],l);return e},ft=(t=>(...s)=>({_$litDirective$:t,values:s}))(class extends class{constructor(t){}T(t,s,i){this.Σdt=t,this.M=s,this.Σct=i}S(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}{constructor(t){if(super(t),t.type!==nt)throw Error("repeat() can only be used in text expressions")}Mt(t,s,i){let e;void 0===i?i=s:void 0!==s&&(e=s);const l=[],o=[];let n=0;for(const s of t)l[n]=e?e(s,n):n,o[n]=i(s,n),n++;return{values:o,keys:l}}render(t,s,i){return this.Mt(t,s,i).values}update(t,[s,i,e]){var l;const o=(t=>t.H)(t),{values:n,keys:r}=this.Mt(s,i,e);if(!o)return this.Pt=r,n;const h=null!==(l=this.Pt)&&void 0!==l?l:this.Pt=[],a=[];let c,d,u=0,v=o.length-1,p=0,f=n.length-1;for(;u<=v&&p<=f;)if(null===o[u])u++;else if(null===o[v])v--;else if(h[u]===r[p])a[p]=ct(o[u],n[p]),u++,p++;else if(h[v]===r[f])a[f]=ct(o[v],n[f]),v--,f--;else if(h[u]===r[f])a[f]=ct(o[u],n[f]),at(t,a[f+1],o[u]),u++,f--;else if(h[v]===r[p])a[p]=ct(o[v],n[p]),at(t,o[u],o[v]),v--,p++;else if(void 0===c&&(c=pt(r,p,f),d=pt(h,u,v)),c.has(h[u]))if(c.has(h[v])){const s=d.get(r[p]),i=void 0!==s?o[s]:null;if(null===i){const s=at(t,o[u]);ct(s,n[p]),a[p]=s}else a[p]=ct(i,n[p]),at(t,o[u],i),o[s]=null;p++}else vt(o[v]),v--;else vt(o[u]),u++;for(;p<=f;){const s=at(t,a[f+1]);ct(s,n[p]),a[p++]=s}for(;u<=v;){const t=o[u++];null!==t&&vt(t)}return this.Pt=r,ut(t,a),R}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt{}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wt=function(t,s,i,e){for(var l,o=arguments.length,n=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,r=t.length-1;r>=0;r--)(l=t[r])&&(n=(o<3?l(n):o>3?l(s,i,n):l(s,i))||n);return o>3&&n&&Object.defineProperty(s,i,n),n};let gt=class extends et{constructor(){super(...arguments),this.ruleData=new bt,this.hideVender=!1,this.ruleTitle="返利规则"}render(){return console.log("ruleData参数：",this.ruleData),N`
      <table cellspacing="0" cellpadding="0" border="0" class="el-table" style="width: 100%;">
        <colgroup>
          <col name="el-table_1_column_1" width="100" />
        </colgroup>
        ${this.hideVender?N``:N`
        <tr class="">
          <th colspan="1" rowspan="1" class="el-table_1_column_1 is-left is-leaf">
            <div class="cell" style="font-weight: bold;">活动商家</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_1 is-left">
            <div class="cell">${this.ruleData.venderIds}</div>
          </td>
        </tr>
        `}
        ${1==this.ruleData.ruleMode?N`
        <tr class="el-table__row" v-if="ruleData.brandName">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell" style="font-weight: bold;">品牌</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>${this.ruleData.brandName}</span>
            </div>
          </td>
        </tr>
        `:N``}
        ${1==this.ruleData.ruleMode?N`
        <tr class="el-table__row">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell" style="font-weight: bold;">品类</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>${this.ruleData.categoryName}</span>
            </div>
          </td>
        </tr>
        `:N``}
        ${2==this.ruleData.ruleMode?N`
        <tr class="el-table__row" v-if="ruleData.skuId">
          <th colspan="1" rowspan="1" class="el-table_1_column_2 is-left is-leaf">
            <div class="cell" style="font-weight: bold;">商品列表</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_2 is-left">
            <div class="cell">
              <span>${this.ruleData.skuId}</span>
            </div>
          </td>
        </tr>
        `:N``}
        <tr class="">
          <th colspan="1" rowspan="1" class="el-table_1_column_1 is-left is-leaf">
            <div class="cell" style="font-weight: bold;">${this.ruleTitle}</div>
          </th>
          <td rowspan="1" colspan="1" class="el-table_1_column_1 is-left">
            <div class="cell">
            ${ft(this.ruleData.rebateRuleList,(t=>N`
              <p>
                <span class="aa">
                  ${t.purchaseMin?N`
                      ${t.purchaseMin}
                    `:N`
                      '--'
                    `}元
                </span>
                &lt;
                <span class="bb">采购金额</span>
                <span class="cc">
                  ${t.purchaseMax?N`
                      &le;
                      <span class="dd">${t.purchaseMax}元</span>
                    `:""}
                </span>
                <span>
                  ${1==t.rebateType?N`
                      采购金额 ${t.rebateQuota} %
                    `:N`
                      固定数额 ${t.rebateQuota} 元
                    `}
              </p>`))}
            </div>
          </td>
        </tr>
      </table>
    `}};gt.styles=((t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,e,l)=>s+(t=>{if(t instanceof i)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[l+1]),t[0]);return l(e)})`
    :host {
      display: block;
    }
    .el-table {
      border-top: 1px solid #d9d9d9;
      border-left: 1px solid #d9d9d9;
      font-size: 14px;
      color: #595959;
      flex: 1;
    }
    .el-table th {
      text-align: left;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: #fafafa;
    }
    .el-table td, .el-table th {
      border-right: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;
    }
    .el-table td, .el-table th, .el-table th>.cell {
      position: relative;
      color: #262626;
      line-height: 40px;
      vertical-align: middle;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      height: 40px;
      text-overflow: ellipsis;
    }
    .el-table .cell {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        word-break: break-all;
        line-height: 23px;
        font-size: 12px;
        padding: 0 15px;
    }
    .el-table td .cell {
      padding: 18px;
    }
    .el-table td .cell p .aa {
      display: inline-block;
      width: 90px;
      text-align: right;
      padding-right: 5px;
    }
    .el-table td .cell p .bb {
      display: inline-block;
      width: 70px;
      text-align: center;
    }
    .el-table td .cell p .cc {
      display: inline-block;
      width: 120px;
      padding-right: 20px;
    }
    .el-table td .cell p .dd {
    }
  `,wt([ot({type:Object})],gt.prototype,"ruleData",void 0),wt([ot({type:Boolean})],gt.prototype,"hideVender",void 0),wt([ot({type:String})],gt.prototype,"ruleTitle",void 0),gt=wt([(t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){window.customElements.define(t,s)}}})(t,s))("activity-rule")],gt);export{gt as ActivityRule};
