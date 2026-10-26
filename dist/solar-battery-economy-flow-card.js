function t(t,e,i,o){var r,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n<3?r(s):n>3?r(e,i,s):r(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new n(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,y=globalThis,g=y.trustedTypes,f=g?g.emptyScript:"",m=y.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:r}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const n=o?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o;const n=r.fromAttribute(e,t.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(t,e,i,o=!1,r){if(void 0!==t){const n=this.constructor;if(!1===o&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??x)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,m?.({ReactiveElement:$}),(y.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,A=t=>t,S=_.trustedTypes,L=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+F,k=`<${C}>`,R=document,P=()=>R.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,T="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,D=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,z=/"/g,H=/^(?:script|style|textarea|title)$/i,q=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),j=q(1),W=q(2),V=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Q=new WeakMap,X=R.createTreeWalker(R,129);function K(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==L?L.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,o=[];let r,n=2===e?"<svg>":3===e?"<math>":"",s=I;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(s.lastIndex=h,l=s.exec(i),null!==l);)h=s.lastIndex,s===I?"!--"===l[1]?s=O:void 0!==l[1]?s=D:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=N):void 0!==l[3]&&(s=N):s===N?">"===l[0]?(s=r??I,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?N:'"'===l[3]?z:U):s===z||s===U?s=N:s===O||s===D?s=I:(s=N,r=void 0);const d=s===N&&t[e+1].startsWith("/>")?" ":"";n+=s===I?i+k:c>=0?(o.push(a),i.slice(0,c)+E+i.slice(c)+F+d):i+F+(-2===c?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class J{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const s=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=J.createElement(l,i),X.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=X.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(E)){const e=c[n++],i=o.getAttribute(t).split(F),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?ot:"?"===s[1]?rt:"@"===s[1]?nt:it}),o.removeAttribute(t)}else t.startsWith(F)&&(a.push({type:6,index:r}),o.removeAttribute(t));if(H.test(o.tagName)){const t=o.textContent.split(F),e=t.length-1;if(e>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),X.nextNode(),a.push({type:2,index:++r});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(F,t+1));)a.push({type:7,index:r}),t+=F.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,o){if(e===V)return e;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=B(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(e=Z(t,r._$AS(t,e.values),r,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??R).importNode(e,!0);X.currentNode=o;let r=X.nextNode(),n=0,s=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new et(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new st(r,this,t)),this._$AV.push(e),a=i[++s]}n!==a?.index&&(r=X.nextNode(),n++)}return X.currentNode=R,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),B(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new tt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new J(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new et(this.O(P()),this.O(P()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(void 0===r)t=Z(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const o=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=Z(this,o[i+s],e,s),a===V&&(a=this._$AH[s]),n||=!B(a)||a!==this._$AH[s],a===G?t=G:t!==G&&(t+=(a??"")+r[s+1]),this._$AH[s]=a}n&&!o&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends it{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??G)===V)return;const i=this._$AH,o=t===G&&i!==G||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=_.litHtmlPolyfillSupport;at?.(J,et),(_.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let r=o._$litPart$;if(void 0===r){const t=i?.renderBefore??null;o._$litPart$=r=new et(e.insertBefore(P(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},pt=(t=ut,e,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,r,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];e.call(this,i),this.requestUpdate(o,r,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return yt({...t,state:!0,attribute:!1})}const ft={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16}},mt={sceneWidth:430,sceneHeight:1e3,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10}};function vt(t){return null!==t&&"object"==typeof t?t:void 0}function bt(t,e){if(t)return e?.consumers.get(t)?.power_entity??void 0}function xt(t,e){if(t)return e?.consumers.get(t)?.name}function wt(t,e){if(!t.consumerId)return{value:null,quality:"not_configured"};const i=e?.consumers.get(t.consumerId);if(!i)return{value:null,quality:"missing_consumer"};const o=(r=t.consumerId,n=e,r?n?.consumers.get(r)?.power:void 0);var r,n;const s="valid"===o?.quality&&"W"===o.unit&&"number"==typeof o.value&&Number.isFinite(o.value),a=s?"valid":"valid"===o?.quality?"W"===o.unit?"invalid":"invalid_unit":"invalid_unit"===o?.quality?"invalid_unit":"missing"===o?.quality||"unavailable"===o?.quality?o.quality:"invalid";return{value:s?o.value:null,quality:a,entity:bt(t.consumerId,e)}}function $t(t,e){const i="number"==typeof e?"valid":e.quality,o="number"==typeof e?e:e.value??0;return{id:t,power:o,active:"valid"===i&&o>1,intensity:Math.min(1,o/5e3),quality:i}}function _t(t){return Number(t?.attributes?.cloud_coverage??0)}function At(t){return t>40}function St(t,e,i){const o=function(t){const e=t?.states;if(e){if(e["weather.smhi_weather"])return e["weather.smhi_weather"];for(const t of Object.keys(e))if(t.startsWith("weather."))return e[t]}}(t),r=function(t){switch(t?.state??""){case"rainy":case"pouring":case"lightning-rainy":return"rain";case"cloudy":case"exceptional":return"cloudy";default:return At(_t(t))?"cloudy":"clear"}}(o),n=function(t){return"mobile"===t?"landscape":"villa"}(i),s=function(t,e,i){if("rain"===e)return{folder:"weather",filename:`${i}_rain.webp`};switch(t){case"night":return{folder:"night",filename:"cloudy"===e?`${i}_night_cloudy.webp`:`${i}_night_clear.webp`};case"bluehour":return{folder:"evening",filename:`${i}_bluehour.webp`};case"sunset":return{folder:"evening",filename:`${i}_evening.webp`};default:return{folder:"day",filename:"cloudy"===e?`${i}_day_cloudy.webp`:`${i}_day_clear.webp`}}}(e,r,n);return a=s.folder,l=s.filename,`/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds/${a}/${l}`;var a,l}function Lt(t){return t.waypoints&&t.waypoints.length>0?function(t,e=20){if(t.length<2)return"";let i=`M ${t[0].x} ${t[0].y}`;for(let o=1;o<t.length-1;o++){const r=t[o-1],n=t[o],s=t[o+1],a=n.x-r.x,l=n.y-r.y,c=s.x-n.x,h=s.y-n.y,d=n.x-Math.sign(a)*e,u=n.y-Math.sign(l)*e,p=n.x+Math.sign(c)*e,y=n.y+Math.sign(h)*e;i+=`\n      L ${d} ${u}\n      Q ${n.x} ${n.y}\n        ${p} ${y}\n    `}const o=t[t.length-1];return i+=`\n    L ${o.x} ${o.y}\n  `,i}([t.start,...t.waypoints,t.end],t.radius??38):(e=t.start.x,i=t.start.y,o=t.end.x,r=t.end.y,`\n    M ${e} ${i}\n    L ${o} ${r}\n  `);var e,i,o,r}function Et(t){const e=Math.abs(t);return e<300?{particleCount:4,duration:6,lineOpacity:.1,lineWidth:2,sparkInterval:9}:e<800?{particleCount:6,duration:5.2,lineOpacity:.14,lineWidth:2.3,sparkInterval:7}:e<1500?{particleCount:8,duration:4.4,lineOpacity:.18,lineWidth:2.6,sparkInterval:6}:e<3e3?{particleCount:10,duration:3.7,lineOpacity:.22,lineWidth:2.9,sparkInterval:5}:e<5e3?{particleCount:12,duration:3,lineOpacity:.26,lineWidth:3.2,sparkInterval:4}:{particleCount:14,duration:2.2,lineOpacity:.3,lineWidth:3.5,sparkInterval:3}}function Ft(t,e){const i=Math.abs(t);return i<=1?{active:!1,color:e,opacity:0,blur:0}:i<300?{active:!0,color:e,opacity:.03,blur:8}:i<800?{active:!0,color:e,opacity:.045,blur:10}:i<1500?{active:!0,color:e,opacity:.06,blur:12}:i<3e3?{active:!0,color:e,opacity:.08,blur:14}:i<5e3?{active:!0,color:e,opacity:.1,blur:16}:{active:!0,color:e,opacity:.12,blur:18}}const Ct=3.5;function kt(t){return t.waypoints&&t.waypoints.length>0?[t.start,...t.waypoints,t.end]:[t.start,t.end]}function Rt(t){const e=43758.5453*Math.sin(12.9898*t);return e-Math.floor(e)}function Pt(t){let e=0;for(let i=0;i<t.length;i++)e=(31*e+t.charCodeAt(i))%1e5;return e}function Bt(t,e,i,o,r){const n=e+53.1*t,s=Rt(n+4.3)*r,a=.85+.3*Rt(n+8.9),l=.8+.5*Rt(n+13.1),c=function(t,e){let i=`M ${t[0].x} ${t[0].y}`;for(let o=0;o<t.length-1;o++){const r=t[o],n=t[o+1],s=n.x-r.x,a=-(n.y-r.y),l=s,c=Math.max(1,Math.hypot(a,l)),h=14*(Rt(e+31.7*o)-.5);i+=` Q ${(r.x+n.x)/2+a/c*h} ${(r.y+n.y)/2+l/c*h} ${n.x} ${n.y}`}return i}(i,n),h=r*a,d=2*l;return W`
        <g class="energy-particle">

            <circle
                r="${4.5*l}"
                fill="${o}"
                opacity="0"
                filter="url(#energy-glow)"
            >
                <animateMotion
                    dur="${h}s"
                    begin="-${s}s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.3 0 0.7 1"
                    path="${c}"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.30;0.30;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${h}s"
                    begin="-${s}s"
                    repeatCount="indefinite"
                />
            </circle>

            <circle
                r="${d}"
                fill="#FFFFFF"
                opacity="0"
            >
                <animateMotion
                    dur="${h}s"
                    begin="-${s}s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.3 0 0.7 1"
                    path="${c}"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.9;0.9;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${h}s"
                    begin="-${s}s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="r"
                    values="${.85*d};${1.15*d};${.85*d}"
                    dur="1.6s"
                    repeatCount="indefinite"
                />
            </circle>

        </g>
    `}function Mt(t,e){return W`
        ${Array.from({length:2}).map((i,o)=>function(t,e,i){const o=kt(t),r=Math.floor(Date.now()/(1e3*e.sparkInterval)),n=Pt(t.id)+41.7*i+97.3*r,s=o.length-1,a=Math.min(s-1,Math.floor(Rt(n)*s)),l=o[a],c=o[a+1],h=.2+.6*Rt(n+3.7),d=l.x+(c.x-l.x)*h,u=l.y+(c.y-l.y)*h,p=180*Math.atan2(c.y-l.y,c.x-l.x)/Math.PI,y=Rt(n+9.1)*e.sparkInterval;return W`
        <g transform="translate(${d}, ${u})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${e.sparkInterval}s"
                begin="-${y}s"
                repeatCount="indefinite"
            />
            ${function(t,e,i,o){return W`
        <g
            class="energy-spark"
            transform="translate(${t} ${e}) rotate(${i})"
        >

            <!-- Main discharge -->
            <path
                d="
                    M -7 0
                    L -3 -1.5
                    L -1 -7
                    L 1 -2
                    L 4 -3
                    L 2 0
                    L 6 2
                    L 2 3
                    L 0 8
                    L -2 2
                    L -6 1
                "
                fill="none"
                stroke="${o}"
                stroke-width="1.05"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.95"
                filter="url(#energy-glow)"
            />

            <!-- Upper branch -->
            <path
                d="
                    M -1 -4
                    L 2 -6
                "
                fill="none"
                stroke="${o}"
                stroke-width="0.7"
                stroke-linecap="round"
                opacity="0.75"
                filter="url(#energy-glow)"
            />

            <!-- Lower branch -->
            <path
                d="
                    M 2 2
                    L 5 5
                "
                fill="none"
                stroke="${o}"
                stroke-width="0.7"
                stroke-linecap="round"
                opacity="0.65"
                filter="url(#energy-glow)"
            />

            <!-- Plasma core -->
            <path
                d="
                    M -5 0
                    L -2 -1
                    L 0 -5
                    L 2 -1
                    L 4 0
                    L 1 2
                    L 0 5
                    L -2 1
                "
                fill="none"
                stroke="#FFFFFF"
                stroke-width="0.45"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.95"
            />

        </g>
    `}(0,0,p,t.color)}
        </g>
    `}(t,e,o))}
    `}function Tt(t){if(!t.active||Math.abs(t.power)<1)return W``;const e=Lt(t),i=(o=t.power,{flow:Et(o)}).flow;var o;return W`

        <g class="energy-edge">

            <path
                class="energy-edge-line"
                d="${e}"
                fill="none"
                stroke="${t.color}"
                stroke-width="${i.lineWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="
                    --line-opacity-min: ${.6*i.lineOpacity};
                    --line-opacity-max: ${i.lineOpacity};
                "
            />

            ${function(t,e){const i=kt(t),o=Pt(t.id);return W`
        ${Array.from({length:e.particleCount}).map((r,n)=>Bt(n,o,i,t.color,e.duration))}
    `}(t,i)}

            ${Mt(t,i)}

        </g>

    `}function It(t,e,i){const o=function(t,e,i){return i.map(i=>{const o=e[i.liveFlow];return{id:i.id,start:i.getStart(t),end:i.getEnd(t),waypoints:i.getWaypoints?i.getWaypoints(t):[],power:o?.power??0,active:o?.active??!1,color:i.color,radius:i.radius}})}(t,e,i);return W`

        ${W`

        <defs>

            <filter
                id="energy-glow"
                x="-350%"
                y="-350%"
                width="800%"
                height="800%"
                color-interpolation-filters="sRGB">

                <!-- Mjuk yttre halo -->
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="7"
                    result="outerGlow"/>

                <!-- Mellanglow -->
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="3"
                    result="innerGlow"/>

                <feMerge>

                    <feMergeNode in="outerGlow"/>

                    <feMergeNode in="innerGlow"/>

                    <feMergeNode in="SourceGraphic"/>

                </feMerge>

            </filter>

        </defs>

    `}
        <g class="graph-engine">
            ${o.map(t=>Tt(t))}
        </g>
    `}function Ot(t,e,i,o,r,n){switch(t){case"solar":return function(t,e,i){return W`
        <g
            transform="translate(${t}, ${e})"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Sun -->
            <circle
                cx="0"
                cy="0"
                r="9"
            />

            <!-- Highlight -->
            <path
                d="M -3.8 -1.2
                A 6 6 0 0 1 1.2 -5"
            />

            <!-- Top -->
            <line x1="-1.2" y1="-15.5" x2="0" y2="-24"/>
            <line x1="1.2" y1="-15.5" x2="0" y2="-24"/>

            <!-- Top Right -->
            <line x1="8.8" y1="-12.8" x2="16.5" y2="-20"/>
            <line x1="10.8" y1="-11.0" x2="16.5" y2="-20"/>

            <!-- Right -->
            <line x1="15.5" y1="-1.2" x2="24" y2="0"/>
            <line x1="15.5" y1="1.2" x2="24" y2="0"/>

            <!-- Bottom Right -->
            <line x1="10.8" y1="11.0" x2="16.5" y2="20"/>
            <line x1="8.8" y1="12.8" x2="16.5" y2="20"/>

            <!-- Bottom -->
            <line x1="-1.2" y1="15.5" x2="0" y2="24"/>
            <line x1="1.2" y1="15.5" x2="0" y2="24"/>

            <!-- Bottom Left -->
            <line x1="-8.8" y1="12.8" x2="-16.5" y2="20"/>
            <line x1="-10.8" y1="11.0" x2="-16.5" y2="20"/>

            <!-- Left -->
            <line x1="-15.5" y1="-1.2" x2="-24" y2="0"/>
            <line x1="-15.5" y1="1.2" x2="-24" y2="0"/>

            <!-- Top Left -->
            <line x1="-10.8" y1="-11.0" x2="-16.5" y2="-20"/>
            <line x1="-8.8" y1="-12.8" x2="-16.5" y2="-20"/>

        </g>
    `}(e,i,r);case"house":return function(t,e,i){return W`
        <g
            transform="translate(${t}, ${e}) scale(1.28)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Roof -->
            <path
                d="
                    M -23 -2
                    L -0.8 -21.5
                    L 22.2 -2
                "
            />

            <!-- Left wall -->
            <line
                x1="-15"
                y1="-5"
                x2="-15"
                y2="16"
            />

            <!-- Right wall -->
            <line
                x1="15"
                y1="-5"
                x2="15"
                y2="16"
            />

            <!-- Bottom -->
            <line
                x1="-15"
                y1="16"
                x2="15"
                y2="16"
            />

            <!-- Premium window -->
            <rect
                x="-5.7"
                y="-0.8"
                width="11.4"
                height="11.4"
                rx="2.8"
            />

            <!-- Window vertical -->
            <line
                x1="0"
                y1="-0.8"
                x2="0"
                y2="10.6"
            />

            <!-- Window horizontal -->
            <line
                x1="-5.7"
                y1="4.9"
                x2="5.7"
                y2="4.9"
            />

            <!-- Chimney -->
            <path
                d="
                    M 8.8 -18.5
                    L 8.8 -25.5
                    L 12.3 -25.5
                    L 12.3 -10.5
                "
            />

        </g>
    `}(e,i,r);case"grid":return function(t,e,i){return W`

        <g
            transform="translate(${t}, ${e}) scale(0.75, 0.90)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Mast -->
            <line x1="0" y1="-32" x2="-9" y2="30"/>
            <line x1="0" y1="-32" x2="9" y2="30"/>

            <!-- Upper arm -->
            <line x1="-22" y1="-13" x2="22" y2="-13"/>
            <line x1="0" y1="-20" x2="-22" y2="-13"/>
            <line x1="0" y1="-20" x2="22" y2="-13"/>

            <!-- Upper insulators -->
            <line x1="-22" y1="-13" x2="-22" y2="-8"/>
            <line x1="-24" y1="-8" x2="-20" y2="-8"/>
            <line x1="-24" y1="-5" x2="-20" y2="-5"/>

            <line x1="22" y1="-13" x2="22" y2="-8"/>
            <line x1="20" y1="-8" x2="24" y2="-8"/>
            <line x1="20" y1="-5" x2="24" y2="-5"/>

            <!-- Lower arm -->
            <line x1="-30" y1="7" x2="30" y2="7"/>
            <line x1="-9" y1="0" x2="-30" y2="7"/>
            <line x1="9" y1="0" x2="30" y2="7"/>

            <!-- Lower insulators -->
            <line x1="-30" y1="7" x2="-30" y2="12"/>
            <line x1="-32" y1="12" x2="-28" y2="12"/>
            <line x1="-32" y1="15" x2="-28" y2="15"/>

            <line x1="30" y1="7" x2="30" y2="12"/>
            <line x1="28" y1="12" x2="32" y2="12"/>
            <line x1="28" y1="15" x2="32" y2="15"/>

            <!-- Internal bracing -->
            <line x1="-2" y1="-13" x2="7" y2="-1"/>
            <line x1="-7" y1="-1" x2="7" y2="-1"/>

            <line x1="-9" y1="7" x2="7" y2="-1"/>
            <line x1="-9" y1="7" x2="9" y2="20"/>

            <line x1="-9" y1="20" x2="9" y2="20"/>
            <line x1="-9" y1="30" x2="9" y2="20"/>

            <!-- Foundation -->
            <rect
                x="-12"
                y="30"
                width="24"
                height="8"
                rx="0.8"
            />

            <!-- Ground -->
            <line
                x1="-22"
                y1="38"
                x2="22"
                y2="38"
            />

        </g>

    `}(e,i,r);case"battery":{const t=Math.max(0,Math.min(100,n??0));return W`
                <g transform="translate(${e}, ${i}) rotate(-90)">

                    <rect
                        x="-28"
                        y="-16"
                        width="${56*(t/100)}"
                        height="32"
                        rx="2"
                        fill="${r}"
                        opacity="0.85"
                    />

                    <g
                        fill="none"
                        stroke="${r}"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        style="filter: drop-shadow(0 0 4px ${r}80);"
                    >
                        <rect
                            x="-30"
                            y="-18"
                            width="60"
                            height="36"
                            rx="4"
                        />
                        <rect
                            x="30"
                            y="-7"
                            width="4"
                            height="14"
                            rx="2"
                        />
                    </g>

                </g>
            `}case"car":return function(t,e,i){return W`

        <g
            transform="translate(${t}, ${e}) scale(1.02)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Outer body -->
            <path d="
                M -22 18
                L -22 4
                Q -22 -4 -15 -11
                L -11 -18
                Q 0 -22 11 -18
                L 15 -11
                Q 22 -4 22 4
                L 22 18
            "/>

            <!-- Windshield -->
            <path d="
                M -15 -10
                L -11 -16
                Q 0 -18 11 -16
                L 15 -10
            "/>

            <!-- Roof -->
            <path d="
                M -11 -18
                Q 0 -21 11 -18
            "/>

            <!-- Mirrors -->
            <rect
                x="-25"
                y="-7"
                width="5"
                height="6"
                rx="1.5"
            />

            <rect
                x="20"
                y="-7"
                width="5"
                height="6"
                rx="1.5"
            />

            <!-- Headlights -->
            <path d="
                M -17 2
                Q -13 0 -10 3
                Q -13 5 -17 3
            "/>

            <path d="
                M 17 2
                Q 13 0 10 3
                Q 13 5 17 3
            "/>

            <!-- Center light bar -->
            <line
                x1="-8"
                y1="0"
                x2="8"
                y2="0"
            />

            <circle
                cx="0"
                cy="0"
                r="1"
            />

            <!-- Lower grille -->
            <rect
                x="-8"
                y="8"
                width="16"
                height="5"
                rx="2.5"
            />

            <!-- Lower side intakes -->
            <rect
                x="-18"
                y="8"
                width="5"
                height="3"
                rx="1"
            />

            <rect
                x="13"
                y="8"
                width="5"
                height="3"
                rx="1"
            />

            <!-- Lower bumper -->
            <line
                x1="-18"
                y1="17"
                x2="18"
                y2="17"
            />

            <!-- Wheels -->
            <rect
                x="-18"
                y="18"
                width="6"
                height="7"
                rx="1"
            />

            <rect
                x="12"
                y="18"
                width="6"
                height="7"
                rx="1"
            />

        </g>

    `}(e,i,r);case"spa":return function(t,e,i){return W`

        <g
            transform="translate(${t}, ${e}) scale(1.10)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Top ellipse -->
            <ellipse
                cx="0"
                cy="0"
                rx="18"
                ry="7"
            />

            <!-- Inner water -->
            <path
                d="
                    M -13 0
                    A 13 4.5 0 0 0 13 0
                "
            />

            <!-- Left side -->
            <line
                x1="-18"
                y1="0"
                x2="-18"
                y2="16"
            />

            <!-- Right side -->
            <line
                x1="18"
                y1="0"
                x2="18"
                y2="16"
            />

            <!-- Bottom ellipse -->
            <path
                d="
                    M -18 16
                    A 18 7 0 0 0 18 16
                "
            />

            <!-- Ladder -->
            <path
                d="
                    M 4 -7
                    V 5
                    M 12 -7
                    V 5
                    M 4 -2
                    H 12
                    M 4 3
                    H 12
                "
            />

            <!-- Steam -->
            <path
                d="
                    M -8 -4
                    C -12 -8 -4 -12 -8 -17
                "
            />

            <path
                d="
                    M -2 -5
                    C -6 -9 2 -13 -2 -18
                "
            />

        </g>

    `}(e,i,r);case"heatpump":return function(t,e,i){return W`

        <g
            transform="translate(${t}, ${e}) scale(1.0)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Cabinet -->
            <rect
                x="-14"
                y="-28"
                width="28"
                height="48"
                rx="5.5"
            />

            <!-- Inner front -->
            <rect
                x="-11"
                y="-25"
                width="22"
                height="42"
                rx="3.5"
            />

            <!-- Display -->
            <rect
                x="-5.5"
                y="-18.5"
                width="11"
                height="6"
                rx="1.2"
            />

            <!-- Status line -->
            <line
                x1="-3"
                y1="-8"
                x2="3"
                y2="-8"
            />

            <!-- Front split -->
            <line
                x1="0"
                y1="-2"
                x2="0"
                y2="15"
            />

            <!-- Feet -->
            <line
                x1="-7"
                y1="20"
                x2="-7"
                y2="23"
            />

            <line
                x1="7"
                y1="20"
                x2="7"
                y2="23"
            />

            <!-- Feet pads -->
            <line
                x1="-9"
                y1="23"
                x2="-5"
                y2="23"
            />

            <line
                x1="5"
                y1="23"
                x2="9"
                y2="23"
            />

        </g>

    `}(e,i,r);case"appliance":return function(t,e,i){return W`

        <g
            transform="translate(${t},${e}) scale(1.05)"
            fill="none"
            stroke="${i}"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="filter: drop-shadow(0 0 4px ${i}80);"
        >

            <!-- Washing machine -->
            <rect
                x="-17"
                y="-16"
                width="16"
                height="32"
                rx="2.5"
            />

            <!-- Control panel -->
            <line
                x1="-17"
                y1="-8"
                x2="-4"
                y2="-8"
            />

            <circle
                cx="-5"
                cy="-12"
                r="1.5"
            />

            <circle
                cx="-10"
                cy="-12"
                r="0.9"
            />

            <circle
                cx="13"
                cy="-12"
                r="0.9"
            />

            <!-- Door -->
            <circle
                cx="-9"
                cy="4"
                r="6"
            />

            <circle
                cx="-9"
                cy="4"
                r="4.5"
            />

            <!-- Refrigerator -->
            <rect
                x="6"
                y="-16"
                width="16"
                height="32"
                rx="2.5"
            />

            <!-- Door split -->
            <line
                x1="6"
                y1="-2"
                x2="22"
                y2="-2"
            />

            <!-- Handles -->
            <line
                x1="18"
                y1="-10"
                x2="18"
                y2="-5"
            />

            <line
                x1="18"
                y1="2"
                x2="18"
                y2="8"
            />

        </g>

    `}(e,i,r);default:return W`
                <text
                    x="${e}"
                    y="${i}"
                    fill="${r}"
                    font-size="${o}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `}}function Dt(t,e,i){const o=t.width<=155,r=o?.6:1,n=o?.65:1,s=o?22:34,a=o?30:49,l=17*r,c=(o?25:26)*r,h=(o?18:19)*r,d=14*r,u=o?50:78,p=t.width/2,y=u+(o?6:10),g=28*r,f=(o?56:59)*r,m=(o?78:82)*r,v=(o?100:105)*r,b=(x=e.power,w=e.color??t.accentColor??"#FFFFFF",{glow:Ft(x,w),pulse:{active:Math.abs(x)>1,scale:1.015,duration:3.2}});var x,w;const $=t.width/2,_=t.height/2;return W`

        <g
            class="energy-label"
            transform="translate(${t.x}, ${t.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${()=>{var t,o;e.entityId&&(t=i,o=e.entityId,t.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:o}})))}}
        >

            ${b.glow.active?W`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${t.width+16}"
                        height="${t.height+16}"
                        rx="26"
                        ry="26"
                        fill="${b.glow.color}"
                        style="
                            filter: blur(${b.glow.blur}px);
                            --glow-opacity-min: ${.5*b.glow.opacity};
                            --glow-opacity-max: ${b.glow.opacity};
                        "
                    />
                `:""}

            <g>

                <rect
                    class="energy-label-frame${b.pulse.active?" is-pulsing":""}"
                    filter="url(#label-shadow)"
                    width="${t.width}"
                    height="${t.height}"

                    rx="22"
                    ry="22"

                    fill="rgba(249,252,255,0.94)"

                    stroke="rgba(255,255,255,0.94)"

                    stroke-width="1.5"

                    style="transform-origin: ${$}px ${_}px;"
                />

                <text
                    class="energy-label-title"
                    x="${y}"
                    y="${g}"
                    font-size="${l}"
                    fill="#315474"
                    font-weight="700"
                >
                    ${t.title}
                </text>

                <g
                    transform="
                        translate(
                            ${s},
                            ${a}
                        )
                        scale(${n})
                    "
                >
                    ${Ot(e.icon??t.icon,0,0,22,b.glow.color,e.soc)}
                </g>

                ${e.line1?W`
                        <text
                            class="energy-label-line1"
                            x="${y}"
                            y="${f}"
                            font-size="${c}"
                            fill="#153653"
                            font-weight="700"
                        >
                            ${e.line1}
                        </text>
                    `:""}

                ${e.line2?W`
                        <text
                            class="energy-label-line2"
                            x="${y}"
                            y="${m}"
                            font-size="${h}"
                            fill="#345570"
                            opacity="0.96"
                        >
                            ${e.line2}
                        </text>
                    `:""}

                ${e.line3?W`
                        <text
                            class="energy-label-line3"
                            x="${p}"
                            y="${v}"
                            font-size="${d}"
                            text-anchor="middle"
                            fill="#526d87"
                            opacity="0.92"
                        >
                            ${e.line3}
                        </text>
                    `:""}

            </g>

        </g>

    `}function Nt(t){return Math.abs(t)<1e3?`${Math.round(t)} W`:`${(t/1e3).toFixed(1)} kW`}function Ut(t){return{line1:"valid"===t.powerQuality&&null!==t.power?Nt(t.power):"—",line2:t.optionalValue??"",line3:t.status,entityId:t.consumerPowerEntity,power:t.power??0,...void 0!==t.soc?{soc:t.soc}:{},icon:t.icon,color:"valid"!==t.powerQuality?"#8A93A3":t.power>1?"#FF6B6B":"#8A93A3"}}function zt(t,e,i){return W`
        <defs>
            <filter
                id="label-shadow"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
            >
                <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="12"
                    flood-opacity="0.35"
                />
            </filter>
        </defs>
        <g class="energy-label-layer">
            ${t.map(t=>{let o,r=t;switch(t.id){case"battery":o={line1:Nt((n=e).batteryPower),line2:(s=n.batterySoc,null!==s&&Number.isFinite(s)?`${Math.round(s)}%`:"—"),line3:n.batteryStatus,entityId:n.batteryEntity,power:n.batteryPower,soc:n.batterySoc,color:n.batteryPower<-1?"#61FF8B":n.batteryPower>1?"#FFB347":"#FFFFFF"};break;case"house":o=function(t){return{line1:Nt(t.housePower),line2:"",line3:t.houseStatus,entityId:t.houseEntity,power:t.housePower,color:t.housePower>1?"#FF6B6B":"#8A93A3"}}(e);break;case"grid":o=function(t){return{line1:Nt(t.gridPower),line2:"",line3:t.gridStatus,entityId:t.gridEntity,power:t.gridPower,color:t.gridPower>1?"#FF6B6B":t.gridPower<-1?"#61FF8B":"#4FC3F7"}}(e);break;case"solar":o=function(t){return{line1:Nt(t.solarPower),line2:"",line3:t.solarStatus,entityId:t.solarEntity,power:t.solarPower,color:t.solarPower>1?"#FFD54A":"#8A93A3"}}(e);break;case"car":{const i=e.devices[0];if(!i||!i.enabled)return"";o=Ut(i),r={...t,title:i.title};break}case"spa":{const i=e.devices[1];if(!i||!i.enabled)return"";o=Ut(i),r={...t,title:i.title};break}case"heatpump":{const i=e.devices[2];if(!i||!i.enabled)return"";o=Ut(i),r={...t,title:i.title};break}case"appliance":{const i=e.devices[3];if(!i||!i.enabled)return"";o=Ut(i),r={...t,title:i.title};break}default:o={line1:"1234 W",line2:"",line3:"",power:0}}var n,s;return Dt(r,o,i)})}
        </g>
    `}const Ht=[{id:"solar",title:"SOLAR",icon:"solar",x:880,y:300,width:200,height:120,anchorBounds:{x:880,y:300,width:200,height:120},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:470,y:440,width:200,height:120,anchorBounds:{x:470,y:440,width:200,height:120},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:880,y:600,width:200,height:120,anchorBounds:{x:880,y:600,width:200,height:120},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:1220,y:440,width:200,height:120,anchorBounds:{x:1220,y:440,width:200,height:120},accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:555,y:750,width:200,height:120,anchorBounds:{x:555,y:750,width:200,height:120},accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:780,y:820,width:200,height:120,anchorBounds:{x:780,y:820,width:200,height:120},accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:990,y:820,width:200,height:120,anchorBounds:{x:990,y:820,width:200,height:120},accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:1220,y:750,width:200,height:120,anchorBounds:{x:1220,y:750,width:200,height:120},accentColor:"#81D4FA"}],qt=[{id:"solar",title:"SOLAR",icon:"solar",x:156,y:130,width:118,height:76,anchorBounds:{x:156,y:130,width:118,height:76},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:21,y:220,width:118,height:76,anchorBounds:{x:21,y:220,width:118,height:76},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:156,y:300,width:118,height:76,anchorBounds:{x:156,y:300,width:118,height:76},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:296,y:220,width:118,height:76,anchorBounds:{x:296,y:220,width:118,height:76},accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:18,y:460,width:118,height:76,anchorBounds:{x:18,y:460,width:118,height:76},accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:18,y:380,width:118,height:76,anchorBounds:{x:18,y:380,width:118,height:76},accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:293,y:460,width:118,height:76,anchorBounds:{x:293,y:460,width:118,height:76},accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:296,y:380,width:118,height:76,anchorBounds:{x:296,y:380,width:118,height:76},accentColor:"#81D4FA"}],jt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solar,getEnd:t=>t.houseTop,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solarRight,getEnd:t=>t.batteryTop,color:"#FFD54A"},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solarLeft,getEnd:t=>t.gridTop,color:"#FFD54A"},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLeft,getEnd:t=>t.houseTopRight,color:"#59D990"},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryUpperLeft,getEnd:t=>t.gridUpperRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridRight,getEnd:t=>t.houseTopLeft,color:"#FF6B6B"},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridUpperRight,getEnd:t=>t.batteryUpperLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomLeft,getEnd:t=>t.spa,color:"#FF6B6B"},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomCenter,getEnd:t=>t.heatpump,color:"#FF6B6B"},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.appliance,color:"#FF6B6B"},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomRight,getEnd:t=>t.car,color:"#FF6B6B"}],Wt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solarBottomCenter,getEnd:t=>t.houseTopCenter,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solarRight,getEnd:t=>t.batteryTop,color:"#FFD54A",radius:30},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solarLeft,getEnd:t=>t.gridTop,color:"#FFD54A",radius:30},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLowerLeft,getEnd:t=>t.houseTopRight,color:"#59D990",radius:30},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryLeft,getEnd:t=>t.gridRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridLowerRight,getEnd:t=>t.houseTopLeft,color:"#FF6B6B",radius:30},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridRight,getEnd:t=>t.batteryLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomCenter,getEnd:t=>t.spaRight,color:"#FF6B6B",radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomLeft,getEnd:t=>t.heatpumpRight,color:"#FF6B6B",radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.applianceLeft,color:"#FF6B6B",radius:30},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomRight,getEnd:t=>t.carLeft,color:"#FF6B6B",radius:30}];function Vt(t,e,i){return i.particleCount<=0?W``:W`
        ${Array.from({length:i.particleCount}).map((o,r)=>function(t,e,i,o){const r=Rt(7.31*t)-.5,n=Rt(13.7*t+3)-.5,s=Rt(19.1*t+11)-.5,a=Rt(5.13*t+9)*o,l=.7+.6*Rt(2.9*t+17),c=.85+.3*Rt(3.7*t+23),h=i.x-e.x,d=-(i.y-e.y),u=h,p=Math.max(1,Math.hypot(d,u)),y=26*s,g=(e.x+i.x)/2+d/p*y,f=(e.y+i.y)/2+u/p*y,m=`M ${e.x+14*r} ${e.y+14*n} Q ${g} ${f} ${i.x} ${i.y}`,v=o*c;return W`
        <circle
            r="${1.4*l}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${v}s"
                begin="-${a}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.3 0 0.7 1"
                path="${m}"
            />
            <animate
                attributeName="opacity"
                values="0;0.55;0.55;0"
                keyTimes="0;0.15;0.7;1"
                dur="${v}s"
                begin="-${a}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(r,t,e,i.duration))}
    `}function Gt(t,e){return e<=0?W``:W`
        ${Array.from({length:e}).map((e,i)=>function(t,e){const i=Rt(17.3*t+31)*Math.PI*2,o=14+10*Rt(23.9*t+5),r=2.2*Rt(8.1*t+11),n=1.6+.8*Rt(4.4*t+19),s=.7+.6*Rt(6.7*t+41),a=Math.cos(i)*o,l=Math.sin(i)*o,c=`M ${e.x} ${e.y} L ${e.x+a} ${e.y+l}`;return W`
        <circle
            r="${1.3*s}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${n}s"
                begin="-${r}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.2 0 0.6 1"
                path="${c}"
            />
            <animate
                attributeName="opacity"
                values="0;0.70;0"
                keyTimes="0;0.25;1"
                dur="${n}s"
                begin="-${r}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(i,t))}
    `}function Qt(t,e,i){const{centerX:o,centerY:r,width:n,height:s,sunRadius:a}=e.solarArc,l={x:o-n/2,y:r+s},c={x:o,y:r-20},h={x:o+n/2,y:r+s},d=function(t,e,i,o){const r=1-t;return{x:r*r*e.x+2*r*t*i.x+t*t*o.x,y:r*r*e.y+2*r*t*i.y+t*t*o.y}}(t.progress,l,c,h),u=(e.sceneWidth<1e3?qt:Ht).find(t=>"solar"===t.id),p={x:u.x+u.width/2,y:u.y},y=function(t){const e=Math.max(0,t);return e<=0?{particleCount:0,duration:Ct}:e<500?{particleCount:4,duration:Ct}:e<1500?{particleCount:8,duration:Ct}:e<3e3?{particleCount:12,duration:Ct}:{particleCount:15,duration:Ct}}(i);return W`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${o-n/2}
            ${r+s}

          Q ${o}
            ${r-20}

            ${o+n/2}
            ${r+s}
        "
        class="solar-arc-path"
      />
      ${t.aboveHorizon?W`
              <circle
                  cx="${d.x}"
                  cy="${d.y}"
                  r="${a}"
                  class="solar-arc-sun"
              />
          `:W``}
      ${Vt(d,p,y)}
      ${Gt(d,y.particleCount)}
      <text
          x="${o-n/2}"
          y="${r+s+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${t.sunrise}
      </text>
      <text
          x="${o+n/2}"
          y="${r+s+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${t.sunset}
      </text>
    </svg>
  `}const Xt=s`
.flow-layer {

    position: absolute;

    left: 0;
    top: 0;

    pointer-events: none;

    z-index: 999;
}

.flow-svg {

    position: absolute;

    left: 0;
    top: 0;

    width: 1920px;
    height: 1080px;

    overflow: visible;

    pointer-events: none;
}

/*
 * The thin background line behind each flow's dust/sparks.
 * CSS-driven (not SMIL) for the same reason as label glow/pulse:
 * this tree is rewritten on every hass update, and a running SMIL
 * animation there is prone to visibly restarting. Same 3.2s /
 * easing as the label pulse (styles/label-styles.ts) so the whole
 * card breathes at one shared pace.
 */
@keyframes energyEdgeLinePulse {
    0%, 100% {
        opacity: var(--line-opacity-min, 0);
    }
    50% {
        opacity: var(--line-opacity-max, 0);
    }
}

.energy-edge-line {
    animation:
        energyEdgeLinePulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}

`,Kt=s`

.scene-sun-glow {

    position: absolute;

    left: 50%;
    top: -220px;

    transition:
    left 2s ease,
    top 2s ease;

    transform: translateX(-50%);

    width: 1100px;
    height: 900px;

    background:
    radial-gradient(
        circle,
        rgba(255,220,120,0.26),
        rgba(255,220,120,0.10),
        transparent 72%
    );

    filter: blur(30px);

    pointer-events: none;

    z-index: 1;
}

.solar-arc-svg {

    position: absolute;

    inset: 0;

    width: 1920px;
    height: 1080px;

    overflow: visible;

    pointer-events: none;

    z-index: 20;
}

.solar-arc-path {

    fill: none;

    stroke:
    rgba(255,220,120,0.45);

    stroke-width: 3;

    stroke-linecap: round;

    filter:
    drop-shadow(
        0 0 10px
        rgba(255,255,255,0.12)
    );
}

.solar-arc-sun {

    fill: #FFD54A;

    filter:
    drop-shadow(
        0 0 12px
        rgba(255,213,74,0.9)
    )
    drop-shadow(
        0 0 24px
        rgba(255,213,74,0.45)
    );
}

.solar-arc-time {

    fill:
    rgba(255,255,255,0.75);

    font-size: 18px;

    font-weight: 600;

    letter-spacing: 0.04em;
}

`,Yt=s`
 
/*
 * Label frame pulse + glow pulse.
 *
 * Deliberately CSS (not SMIL): the label tree is rewritten on
 * every hass update (live wattage in the text), and SMIL
 * animations sharing that document can visibly restart/jump
 * when unrelated siblings are re-rendered. CSS transform/opacity
 * animations run on the compositor, independent of the SVG
 * document's own update cycle, and don't have this problem.
 *
 * Duration/scale are intentionally power-independent constants
 * (see LABEL_PULSE_SCALE / LABEL_PULSE_DURATION in
 * core/animation-profile.ts) — every active node breathes at
 * the same slow pace. Keep these two literals in sync with that
 * file if either ever changes.
 */
 
@keyframes energyLabelPulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.015);
    }
}
 
.energy-label-frame.is-pulsing {
    animation:
        energyLabelPulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}
 
@keyframes energyLabelGlowPulse {
    0%, 100% {
        opacity: var(--glow-opacity-min, 0);
    }
    50% {
        opacity: var(--glow-opacity-max, 0);
    }
}
 
.energy-label-glow {
    animation:
        energyLabelGlowPulse 3.2s
        cubic-bezier(0.45, 0.05, 0.55, 0.95)
        infinite;
}
 
`,Jt=s`
:host {
    display: block;
    width: 100%;
    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
    --info-card-bg: rgba(249, 252, 255, 0.93);
    --info-card-bg-soft: rgba(241, 247, 252, 0.88);
    --info-card-border: rgba(255, 255, 255, 0.88);
    --info-card-text: #173652;
    --info-card-muted: #526d87;
    --info-card-shadow: 0 12px 30px rgba(8, 24, 42, 0.22);
}
.card {
    position: relative;
    width: 100%;
    aspect-ratio: 1920 / 1080;
    min-height: auto;
    overflow: hidden;
    border-radius: 32px;
    background:
    linear-gradient(
        180deg,
        #14202c 0%,
        #091018 100%
    );
    box-shadow:
    0 40px 100px rgba(0,0,0,0.50);
    backdrop-filter: blur(20px);
}
.hero-background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    filter:
    saturate(1.05)
    contrast(1.02)
    brightness(0.95);
    z-index: 0;
}
.background-glow {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at 50% 10%, rgba(255,200,50,0.08), transparent 24%),
    radial-gradient(circle at 82% 40%, rgba(80,255,180,0.05), transparent 32%),
    radial-gradient(circle at 20% 60%, rgba(80,160,255,0.06), transparent 36%),
    radial-gradient(circle at 50% 90%, rgba(120,80,255,0.04), transparent 30%);
    z-index: 1;
}
.scene-vignette {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background:
    radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));
    pointer-events: none;
    z-index: 2;
}
.scene {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    z-index: 4;
}
.scene-inner {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: top left;
}
.live-power-status {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 30;
    padding: 4px 9px;
    border-radius: 10px;
    background: rgba(9, 16, 24, 0.72);
    color: rgba(220, 230, 240, 0.78);
    font-size: 12px;
    line-height: 1.2;
    pointer-events: none;
}
.phase-load-panel {
    position: absolute;
    z-index: 18;
    top: auto;
    right: auto;
    bottom: 20px;
    left: 20px;
    width: 410px;
    padding: 10px 12px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
    box-shadow: var(--info-card-shadow);
    backdrop-filter: blur(16px) saturate(1.18);
    color: var(--info-card-text);
    pointer-events: none;
}
.phase-load-title {
    margin-bottom: 7px;
    color: #315474;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
}
.phase-load-title::before {
    content: "ϟ";
    display: inline-block;
    margin-right: 6px;
    color: #1684b8;
    font-size: 14px;
    line-height: 0.8;
    vertical-align: -1px;
}
.phase-load-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
}
.phase-load-phase {
    min-width: 0;
    padding: 5px 8px;
    border: 1px solid rgba(72, 108, 143, 0.14);
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.58);
}
.phase-load-heading,
.phase-load-details,
.phase-load-values,
.phase-load-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
}
.phase-load-heading { margin-bottom: 4px; }
.phase-load-heading strong { color: #173652; font-size: 16px; }
.phase-load-missing { color: #a35b16; font-size: 12px; }
.phase-load-direction { font-size: 12px; font-weight: 800; letter-spacing: 0.04em; white-space: nowrap; }
.phase-load-direction.import { color: #ff6b6b; }
.phase-load-direction.export { color: #57e889; }
.phase-load-direction.missing { color: #9a671c; }
.phase-load-values { font-size: 14px; font-weight: 700; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-values { white-space: nowrap; }
.phase-load-values span:last-child { color: var(--info-card-muted); }
.phase-load-bar { display: grid; grid-template-columns: repeat(16, 1fr); gap: 2px; margin-top: 4px; }
.phase-load-segment { height: 6px; border-radius: 3px; background: #d9e2eb; }
.phase-load-phase.import .phase-load-segment.active { background: #ff6b6b; }
.phase-load-phase.export .phase-load-segment.active { background: #57e889; }
.phase-load-phase.missing .phase-load-segment.active { background: #9aa8b8; }
.phase-load-footer { font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-footer span:last-child { color: var(--info-card-muted); }
.phase-load-phase.warning .phase-load-footer span:last-child { color: #b87813; }
.phase-load-phase.critical .phase-load-footer span:last-child { color: #bd3842; }
.phase-load-phase.normal .phase-load-footer span:last-child { color: #278a49; }
.card.mobile .phase-load-panel { top: auto; right: auto; bottom: 16px; left: 3%; width: 94%; padding: 7px 8px; }
.card.mobile .phase-load-title { margin-bottom: 4px; }
.card.mobile .phase-load-grid { gap: 3px; }
.card.mobile .phase-load-phase { padding: 4px 6px; }
.card.mobile .phase-load-heading { margin-bottom: 2px; }
.card.mobile .phase-load-heading strong { font-size: 14px; }
.card.mobile .phase-load-details { gap: 5px; }
.card.mobile .phase-load-values { font-size: 12px; gap: 4px; }
.card.mobile .phase-load-missing { font-size: 10px; }
.card.mobile .phase-load-direction { font-size: 10px; }
.card.mobile .phase-load-footer { font-size: 10px; }
.card.mobile .phase-load-direction { letter-spacing: 0; }
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 1000;
}
${Xt}
${Kt}
${Yt}
`;function Zt(t){if(null===t)return"—";const e=Math.abs(t);return`${e>=100?t.toFixed(0):e>=10?t.toFixed(1):t.toFixed(2)} A`}function te(t,e=!1){if(null===t)return"—";const i=Math.abs(t),o=i>=1e3?`${(i/1e3).toFixed(2)} kW`:`${i>=100?i.toFixed(0):i>=10?i.toFixed(1):i.toFixed(2)} W`;return e&&0!==t?`${t>0?"+":"−"}${o}`:o}function ee(t){const e=t.directionText??("import"===t.direction?"IMPORT →":"export"===t.direction?"← EXPORT":"RIKTNING SAKNAS");return j`
        <div class="phase-load-phase ${t.loadState} ${t.direction}" aria-label="${t.name}">
            <div class="phase-load-heading">
                <strong>${t.name}</strong>
                ${t.incomplete?j`<span class="phase-load-missing" role="status">Data saknas</span>`:""}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction ${t.direction}">${e}</div>
                <div class="phase-load-values">
                    <span>${t.currentValue}</span>
                    <span>${t.powerValue}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${t.percentText??t.percentValue}</span>
                    <span>${t.footerText??t.status}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({length:16},(e,i)=>j`
                    <span class="phase-load-segment ${null!==t.activeSegments&&("export"===t.direction?i>=16-t.activeSegments:i<t.activeSegments)?"active":""}"></span>
                `)}
            </div>
        </div>
    `}function ie(t){const e="critical"===t.loadState?"ÖVERLAST":"warning"===t.loadState?"HÖG BELASTNING":"normal"===t.loadState?"NORMAL":"BELASTNING SAKNAS";return ee({name:t.name,currentValue:Zt(t.current),powerValue:te(t.power),percentValue:null===t.percent?"—":`${t.percent} %`,status:e,incomplete:null===t.current||null===t.power,activeSegments:t.activeSegments,direction:t.direction,loadState:t.loadState})}function oe(t,e){return j`
        <section class="phase-load-panel" aria-label="Fasbelastning och fasöversikt">
            <div class="phase-load-title">FASBELASTNING</div>
            <div class="phase-load-grid">${t.map(ie)}${function(t){const e=t.powerComplete,i="critical"===t.loadState?"ÖVERLAST":"warning"===t.loadState?"HÖG BELASTNING":"normal"===t.loadState?"NORMAL":"BELASTNING SAKNAS",o=t.mostLoadedPhase;return ee({name:"SUMMA",currentValue:"—",powerValue:e?te(t.netPower,!0):"—",percentValue:o?`${o.percent} %`:"—",status:i,footerText:e?`IMP ${te(t.importPower)} · EXP ${te(t.exportPower)}`:"IMP — · EXP —",percentText:o?`${o.percent} % · MAX ${o.name}`:"—",incomplete:!e||!t.loadComplete,activeSegments:t.activeSegments,direction:t.direction,loadState:t.loadState,directionText:"NETTO "+("import"===t.direction?"IMPORT →":"export"===t.direction?"← EXPORT":"SAKNAS")})}(e)}</div>
        </section>
    `}function re(t,e,i,o,r=null){const n=i?.flows,s=i?.aggregates,a=n?.solar_house??0,l=n?.battery_house??0,c=n?.grid_house??0,h=s?.solar_total??0,d=s?.house_total??0,u=s?.battery_net??0,p=s?.grid_net??0,y="above_horizon"===function(t,e,i=""){const o=t?.states?.[e]?.state;return o??i}(t,"sun.sun")?"Over horizon":"Under horizon",g=u>1?"Charging":u<-1?"Discharging":"Standby",f=[];a>1&&f.push("Solar"),l>1&&f.push("Battery"),c>1&&f.push("Grid");const m=f.length>0?f.join(" + "):"No load",v=p>1?"Importing":p<-1?"Exporting":"Balance",b=r,x=e?.solarInfoEntity??"sensor.solaredge_ac_power",w=e?.gridInfoEntity??"sensor.effekt_alla_faser",$=e?.houseInfoEntity??"sensor.forbrukning_nu_ny",_=e?.batteryInfoEntity??"sensor.saj_realtime_battery_power";return{devices:(e?.devices??[]).map((t,e)=>function(t,e,i){const o=wt(t,i),r=o.value,n=t.consumerId?i?.consumers.get(t.consumerId):void 0;let s,a;if(t.consumerId&&"soc"===t.optionalType){const t=n?.soc;a="valid"===t?.quality?t.value??void 0:void 0,s=void 0===a?"—":`${Math.round(a)} ${t?.unit??"%"}`}if(t.consumerId&&"temperature"===t.optionalType){const t=n?.temperature;s="valid"===t?.quality&&null!==t.value?`${Math.round(t.value)} ${t.unit??""}`.trim():"—"}const l=n?.status,c=l?.level,h=n?"valid"!==l?.quality?"Status unavailable":null!=c?c<=0?"Standby":t.statusLabels?.[c-1]??`Level ${c}`:null!==l.value&&void 0!==l.value?String(l.value):"Status unavailable":t.consumerId?"SBE consumer unavailable":"Select SBE consumer";return{enabled:t.enabled,title:t.title?.trim()||xt(t.consumerId,i)||`Device ${e+1}`,power:r,powerQuality:o.quality,consumerPowerEntity:o.entity,optionalType:t.optionalType,optionalValue:s,soc:a,status:h,icon:t.icon}}(t,e,o)),solarPower:h,solarStatus:y,solarEntity:x,batterySoc:b,batteryPower:u,batteryStatus:g,batteryEntity:_,housePower:d,houseStatus:m,houseEntity:$,gridPower:p,gridStatus:v,gridEntity:w}}function ne(t){return null!==t&&"object"==typeof t?t:void 0}function se(t,e){if(!t||!(e in t))return{issue:"missing"};const i=ne(t[e]);if(!i||!("value"in i))return{issue:"missing"};const o=i.value;if(null===o)return{issue:"null"};if("number"!=typeof o&&"string"!=typeof o)return{issue:"invalid"};if("string"==typeof o&&""===o.trim())return{issue:"invalid"};const r=Number(o);return Number.isFinite(r)?{value:r}:{issue:"invalid"}}const ae=t=>null!==t&&"object"==typeof t?t:void 0,le=t=>"number"==typeof t&&Number.isFinite(t)?t:null;function ce(t){const e=ae(t);if(1!==e?.contract_version)return;const i=function(t){const e=ne(t),i=ne(e?.flows),o=ne(e?.aggregates);if(!i||!o)return{issue:"missing"};const r={solar_house:se(i,"solar_house"),solar_battery:se(i,"solar_battery"),solar_export:se(i,"solar_export"),battery_house:se(i,"battery_house"),battery_grid:se(i,"battery_grid"),grid_house:se(i,"grid_house"),grid_battery:se(i,"grid_battery"),unknown_grid_export:se(i,"unknown_grid_export")},n={solar_total:se(o,"solar_total"),house_total:se(o,"house_total"),battery_net:se(o,"battery_net"),grid_net:se(o,"grid_net")},s=[...Object.values(r),...Object.values(n)].find(t=>"issue"in t);if(s)return{issue:s.issue};const a=t=>{if("value"in t)return t.value;throw new Error("Unreachable Live Power value state")};return{snapshot:{unit:"string"==typeof e?.unit?e.unit:void 0,flows:{solar_house:a(r.solar_house),solar_battery:a(r.solar_battery),solar_export:a(r.solar_export),battery_house:a(r.battery_house),battery_grid:a(r.battery_grid),grid_house:a(r.grid_house),grid_battery:a(r.grid_battery),unknown_grid_export:a(r.unknown_grid_export)},aggregates:{solar_total:a(n.solar_total),house_total:a(n.house_total),battery_net:a(n.battery_net),grid_net:a(n.grid_net)}}}}(e.live_power),o=function(t){const e=vt(t);if(1!==e?.contract_version||!Array.isArray(e.consumers))return;const i=new Map;for(const t of e.consumers){const e=vt(t),o=vt(e?.power),r=vt(e?.status),n=vt(e?.soc),s=vt(e?.temperature);if("string"!=typeof e?.consumer_id||!e.consumer_id||"string"!=typeof e.name||!o||"string"!=typeof o.quality)continue;const a="number"==typeof o.value&&Number.isFinite(o.value)?o.value:null;i.set(e.consumer_id,{consumer_id:e.consumer_id,name:e.name,energy_entity:"string"==typeof e.energy_entity?e.energy_entity:null,power_entity:"string"==typeof e.power_entity?e.power_entity:null,power:{value:a,unit:"string"==typeof o.unit?o.unit:null,quality:o.quality},status:{entity_id:"string"==typeof r?.entity_id?r.entity_id:null,value:r?.value,quality:"string"==typeof r?.quality?r.quality:"missing",level:"number"==typeof r?.level&&Number.isFinite(r.level)?r.level:null},soc:{entity_id:"string"==typeof n?.entity_id?n.entity_id:null,value:"number"==typeof n?.value&&Number.isFinite(n.value)?n.value:null,unit:"string"==typeof n?.unit?n.unit:null,quality:"string"==typeof n?.quality?n.quality:"missing"},temperature:{entity_id:"string"==typeof s?.entity_id?s.entity_id:null,value:"number"==typeof s?.value&&Number.isFinite(s.value)?s.value:null,unit:"string"==typeof s?.unit?s.unit:null,quality:"string"==typeof s?.quality?s.quality:"missing"}})}return{contract_version:1,consumers:i}}(e.consumers),r=ae(e.battery_soc),n=ae(e.phase_load),s=ae(n?.summary);if(!(i.snapshot&&o&&1===n?.contract_version&&Array.isArray(n.phases)&&s))return;const a=[];for(const t of n.phases){const e=ae(t);if("L1"!==e?.name&&"L2"!==e?.name&&"L3"!==e?.name)continue;const i="import"===e.direction||"export"===e.direction?e.direction:"missing",o="normal"===e.load_state||"warning"===e.load_state||"critical"===e.load_state?e.load_state:"missing";a.push({name:e.name,current:le(e.current),power:le(e.power),percent:le(e.percent),activeSegments:le(e.active_segments),direction:i,loadState:o})}if(3!==a.length)return;const l=ae(s.most_loaded_phase),c="import"===s.direction||"export"===s.direction?s.direction:"missing",h="normal"===s.load_state||"warning"===s.load_state||"critical"===s.load_state?s.load_state:"missing";return{contract_version:1,livePower:i.snapshot,consumers:o,batterySoc:{entityId:"string"==typeof r?.entity_id?r.entity_id:null,value:"valid"===r?.quality?le(r.value):null,quality:"string"==typeof r?.quality?r.quality:"missing"},phaseLoad:{phases:a,summary:{powerComplete:!0===s.power_complete,netPower:le(s.net_power_w),importPower:le(s.import_power_w),exportPower:le(s.export_power_w),loadComplete:!0===s.load_complete,mostLoadedPhase:!l||"L1"!==l.name&&"L2"!==l.name&&"L3"!==l.name||null===le(l.percent)?null:{name:l.name,percent:le(l.percent)},activeSegments:le(s.active_segments),loadState:h,direction:c}}}}const he={layout:"desktop",devices:[{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1}]};function de(t){const e=t??{},i=Array.isArray(e.devices)?e.devices:[],o=he.devices.map((t,e)=>function(t,e){if(null===t||"object"!=typeof t||Array.isArray(t))return{...e};const i=t,o={enabled:"boolean"==typeof i.enabled?i.enabled:e.enabled};"string"==typeof i.title&&(o.title=i.title);"string"==typeof i.consumerId&&(o.consumerId=i.consumerId);"soc"!==i.optionalType&&"temperature"!==i.optionalType||(o.optionalType=i.optionalType);Array.isArray(i.statusLabels)&&(o.statusLabels=[0,1,2].map(t=>{const e=i.statusLabels?.[t];return"string"==typeof e&&e.trim()?e.trim():void 0}));"car"!==i.icon&&"spa"!==i.icon&&"heatpump"!==i.icon&&"appliance"!==i.icon||(o.icon=i.icon);return o}(i[e],t));return{type:e.type,grid_options:e.grid_options,layout_options:e.layout_options,view_layout:e.view_layout,visibility:e.visibility,card_mod:e.card_mod,layout:e.layout??he.layout,solarInfoEntity:e.solarInfoEntity,gridInfoEntity:e.gridInfoEntity,houseInfoEntity:e.houseInfoEntity,batteryInfoEntity:e.batteryInfoEntity,devices:o}}const ue="energy_system_power_solar_house";function pe(t){return void 0!==function(t,e){const i=t?.states;if(i)return Object.keys(i).find(t=>t.endsWith(e))}(t,ue)}let ye=class extends ct{constructor(){super(...arguments),this._config=he,this._deviceDrafts={},this._consumerOptions=[{value:"",label:"Select an SBE consumer"}],this._consumerLookupStarted=!1,this.generalSchema=[{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"}]}}}],this.batteryInfoSchema=[{name:"solarInfoEntity",label:"Solar info",selector:{entity:{}}},{name:"gridInfoEntity",label:"Grid info",selector:{entity:{}}},{name:"houseInfoEntity",label:"House info",selector:{entity:{}}},{name:"batteryInfoEntity",label:"Battery info",selector:{entity:{}}}]}setConfig(t){this._consumerLookupStarted=!1,this._deviceDrafts={},this._config=de(t)}updated(){!this._consumerLookupStarted&&this.hass&&"function"==typeof this.hass.callWS&&(this._consumerLookupStarted=!0,this._loadConsumerOptions(this.hass))}async _loadConsumerOptions(t){try{const e=await t.callWS({type:"config_entries/get",domain:"solar_battery_economy"});if(!Array.isArray(e)||1!==e.length||"loaded"!==e[0]?.state||"string"!=typeof e[0]?.entry_id)return;const i=await t.callWS({type:"solar_battery_economy/get_live_runtime",config_entry_id:e[0].entry_id}),o=i?.consumers;if(1!==i?.contract_version||1!==o?.contract_version||!Array.isArray(o.consumers))return;const r=o.consumers.filter(t=>"string"==typeof t?.consumer_id&&t.consumer_id&&"string"==typeof t?.name&&"string"==typeof t?.power_entity).map(t=>({value:t.consumer_id,label:t.name}));this._consumerOptions=[{value:"",label:"Select an SBE consumer"},...r]}catch{}}getDeviceSchema(t){const e=[{name:"enabled",label:"Enabled",selector:{boolean:{}}},{name:"title",label:"Title",selector:{text:{}}},{name:"consumerId",label:"SBE consumer",selector:{select:{mode:"dropdown",options:this._getConsumerOptions(t.consumerId)}}},{name:"optionalType",label:"Optional",selector:{select:{mode:"dropdown",options:[{value:"",label:"None"},{value:"soc",label:"SOC"},{value:"temperature",label:"Temperature"}]}}}];return e.push(...[1,2,3].map(t=>({name:`statusLabel${t}`,label:`SBE status level ${t} label`,selector:{text:{}}}))),e.push({name:"icon",label:"Icon",selector:{select:{mode:"dropdown",options:[{value:"car",label:"Car"},{value:"spa",label:"Spa"},{value:"heatpump",label:"Heat Pump"},{value:"appliance",label:"Appliance"}]}}}),e}_getConsumerOptions(t){return t&&!this._consumerOptions.some(e=>e.value===t)?[...this._consumerOptions,{value:t,label:`Unavailable SBE consumer (${t})`}]:this._consumerOptions}_valueChanged(t){this._config={...this._config,...t.detail.value},this._fireConfigChanged()}_getDeviceFormData(t,e){const i=this._deviceDrafts[t]??{},o={...e,...i};return this._deviceDrafts[t]||e.statusLabels?.forEach((t,e)=>{o[`statusLabel${e+1}`]=t}),o}_updateDeviceDraft(t,e){const i={...this._deviceDrafts[t]??{},...e};return this._deviceDrafts={...this._deviceDrafts,[t]:i},i}_deviceValueChanged(t,e){const i=e.detail.value;this._updateDeviceDraft(t,i);const{statusLabel1:o,statusLabel2:r,statusLabel3:n,...s}=i,a=[...this._config.devices];a[t]={...a[t],...s,statusLabels:[o,r,n].map(t=>String(t??"").trim()||void 0)},this._config={...this._config,devices:a},this._fireConfigChanged()}_device1ValueChanged(t){this._deviceValueChanged(0,t)}_device2ValueChanged(t){this._deviceValueChanged(1,t)}_device3ValueChanged(t){this._deviceValueChanged(2,t)}_device4ValueChanged(t){this._deviceValueChanged(3,t)}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_isSolarBatteryEconomyDetected(){return!!this.hass&&pe(this.hass)}render(){const t=this._isSolarBatteryEconomyDetected();return j`
            <div class="integration-status">
                <div class="integration-status-title">
                    Solar Battery Economy
                </div>

                <div
                    class="integration-status-value
                        ${t?"detected":"not-detected"}"
                >
                    ${t?"✓ Detected":"⚠ Not detected"}
                </div>
            </div>

            <details class="editor-section" open>
                <summary>General</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${this.generalSchema}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Battery & Info</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${this.batteryInfoSchema}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 1</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(0,this._config.devices[0])}
                        .schema=${this.getDeviceSchema(this._config.devices[0])}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._device1ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 2</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(1,this._config.devices[1])}
                        .schema=${this.getDeviceSchema(this._config.devices[1])}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._device2ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 3</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(2,this._config.devices[2])}
                        .schema=${this.getDeviceSchema(this._config.devices[2])}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._device3ValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Device 4</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._getDeviceFormData(3,this._config.devices[3])}
                        .schema=${this.getDeviceSchema(this._config.devices[3])}
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._device4ValueChanged}
                    ></ha-form>
                </div>
            </details>
        `}static{this.styles=s`
        .integration-status {
            margin: 0 0 8px 0;
            padding: 12px 16px;
            border: 1px solid var(--divider-color);
            border-radius: 8px;
            background: var(--card-background-color);
        }

        .integration-status-title {
            font-size: 14px;
            font-weight: 600;
            color: var(--primary-text-color);
        }

        .integration-status-value {
            margin-top: 4px;
            font-size: 13px;
        }

        .integration-status-value.detected {
            color: var(--success-color);
        }

        .integration-status-value.not-detected {
            color: var(--warning-color);
        }
        .editor-section {
            margin: 0 0 8px 0;
            border: 1px solid var(--divider-color);
            border-radius: 8px;
            overflow: hidden;
            background: var(--card-background-color);
        }

        .editor-section summary {
            display: flex;
            align-items: center;
            min-height: 48px;
            padding: 0 16px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            color: var(--primary-text-color);
            user-select: none;
        }

        .editor-section summary:hover {
            background: var(--secondary-background-color);
        }

        .editor-section summary::marker {
            color: var(--secondary-text-color);
        }

        .editor-content {
            padding: 0 16px 16px 16px;
        }

        .editor-section[open] summary {
            border-bottom: 1px solid var(--divider-color);
        }
    `}};t([yt({attribute:!1})],ye.prototype,"hass",void 0),t([gt()],ye.prototype,"_config",void 0),t([gt()],ye.prototype,"_deviceDrafts",void 0),t([gt()],ye.prototype,"_consumerOptions",void 0),ye=t([dt("solar-battery-economy-flow-card-editor")],ye);let ge=class extends ct{constructor(){super(...arguments),this.activeLayout=ft,this.layoutType="desktop",this.sceneScale=1,this.layoutReady=!1,this.livePowerIssue="unavailable",this.livePowerLookupStarted=!1,this.liveRuntimeSubscriptionStarted=!1,this.livePowerLifecycle=0}static{this.styles=Jt}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return he}connectedCallback(){super.connectedCallback(),this.requestUpdate(),this.resizeObserver=new ResizeObserver(t=>{const e=t[0].contentRect.width,i=t[0].contentRect.height;if(e<10||i<10)return;this.sceneScale=1;const o=function(t){const e="mobile"===t.layout?mt:ft,i=e.sceneWidth,o=e.sceneHeight,r=t.width/i,n=t.height/o;return{layout:e,scale:Math.min(r,n),offsetX:0,offsetY:0}}({layout:this.layoutType,width:e,height:i});this.activeLayout=o.layout,this.sceneScale=o.scale,this.layoutReady=!0})}disconnectedCallback(){this.livePowerLifecycle+=1,this.livePowerLookupStarted=!1,this.liveRuntimeSubscriptionStarted=!1;const t=this.liveRuntimeSubscription;this.liveRuntimeSubscription=void 0,t&&t().catch(()=>{}),this.resizeObserver?.disconnect(),super.disconnectedCallback()}updated(){!this.livePowerLookupStarted&&this.isConnected&&"function"==typeof this.hass?.callWS&&(this.livePowerLookupStarted=!0,this.initializeLivePowerSubscription(this.hass,this.livePowerLifecycle))}async initializeLivePowerSubscription(t,e){let i;try{i=await t.callWS({type:"config_entries/get",domain:"solar_battery_economy"})}catch{return this.livePowerIssue="unavailable",void this.requestUpdate()}if(e!==this.livePowerLifecycle||!this.isConnected||!Array.isArray(i)||1!==i.length||"loaded"!==i[0]?.state||"string"!=typeof i[0]?.entry_id||!i[0].entry_id)return this.livePowerIssue="unavailable",void this.requestUpdate();if(this.livePowerEntryId=i[0].entry_id,!this.liveRuntimeSubscriptionStarted&&"function"==typeof t.connection?.subscribeMessage)try{this.liveRuntimeSubscriptionStarted=!0;const i=await t.connection.subscribeMessage(t=>{this.liveRuntimeSnapshot=ce(t),this.livePowerIssue=this.liveRuntimeSnapshot?void 0:"unavailable",this.requestUpdate()},{type:"solar_battery_economy/subscribe_live_runtime",config_entry_id:this.livePowerEntryId});if(e!==this.livePowerLifecycle||!this.isConnected)return void await i();this.liveRuntimeSubscription=i}catch{this.liveRuntimeSnapshot=void 0,this.livePowerIssue="unavailable",this.requestUpdate()}}firstUpdated(){const t=this.renderRoot.querySelector(".card");this.resizeObserver?.observe(t)}setConfig(t){this.config=t;const e=t?.layout;this.layoutType="mobile"===e?"mobile":"desktop"}render(){if(!this.layoutReady)return j`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;const t=de(this.config),e=function(t,e,i){const o=e?.flows;return{"solar-house":$t("solar-house",o?.solar_house??0),"solar-battery":$t("solar-battery",o?.solar_battery??0),"solar-export":$t("solar-export",o?.solar_export??0),"battery-house":$t("battery-house",o?.battery_house??0),"battery-grid":$t("battery-grid",o?.battery_grid??0),"grid-house":$t("grid-house",o?.grid_house??0),"grid-battery":$t("grid-battery",o?.grid_battery??0),"house-spa":$t("house-spa",wt(t.devices[1],i)),"house-car":$t("house-car",wt(t.devices[0],i)),"house-heatpump":$t("house-heatpump",wt(t.devices[2],i)),"house-appliance":$t("house-appliance",wt(t.devices[3],i))}}(t,this.liveRuntimeSnapshot?.livePower,this.liveRuntimeSnapshot?.consumers),i=re(this.hass,t,this.liveRuntimeSnapshot?.livePower,this.liveRuntimeSnapshot?.consumers,this.liveRuntimeSnapshot?.batterySoc.value??null),o=this.liveRuntimeSnapshot?.phaseLoad.phases??[],r=o.some(t=>null!==t.current||null!==t.power),n=this.liveRuntimeSnapshot?.phaseLoad.summary,s=this.activeLayout,a=function(t){const e=t?.states?.["sun.sun"];if(!e)return"day";const i=Number(e.attributes?.elevation??0);return"above_horizon"===e.state?i<8?"morning":i<20?"sunset":"day":i>-6?"bluehour":"night"}(this.hass),l=function(t){const e=t?.states?.["sun.sun"];if(!e)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const i=Number(e.attributes?.elevation??0),o=Number(e.attributes?.azimuth??180),r="above_horizon"===e.state,n=Math.max(0,Math.min(1,(o-90)/180));return{progress:n,aboveHorizon:r,left:100*n,top:Math.max(40,280-6*i),sunrise:new Date(e.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(e.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),c=St(this.hass,a,this.layoutType);return j`
      <ha-card class="ha-wrapper">
        <div class="card ${this.layoutType} ${a}">
          ${this.livePowerIssue?j`<div class="live-power-status" role="status">Effektdata saknas</div>`:""}
          <div class="scene">
            <div
              class="scene-inner"
              style="
                width:${s.sceneWidth}px;
                height:${s.sceneHeight}px;
                transform:
                  translate(0px, 0px)
                  scale(${this.sceneScale});
              "
            >
              <div
                class="hero-background"
                style="
                  background-image:
                    linear-gradient(
                      to bottom,
                      rgba(5,10,20,0.08),
                      rgba(5,10,20,0.25)
                    ),
                    url('${c}');
                "
              ></div>
              <div class="background-glow"></div>
              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${l.top}px;
                "
              ></div>
              <div class="scene-vignette"></div>
              ${Qt(l,s,i.solarPower)}
              <div
                class="flow-layer"
                style="
                  width:${s.sceneWidth}px;
                  height:${s.sceneHeight}px;
                "
              >
                ${function(t,e,i,o){const r=t.sceneWidth<1e3?qt:Ht,n=t.sceneWidth<1e3?Wt:jt,s=function(t){return{solar:t.solarAnchorBottom,solarLeft:t.solarAnchorLeft,solarRight:t.solarAnchorRight,solarBottom:t.solarAnchorBottom,solarBottomLeft:t.solarAnchorBottomLeft,solarBottomCenter:t.solarAnchorBottomCenter,solarBottomRight:t.solarAnchorBottomRight,gridLeft:t.gridAnchorLeft,gridRight:t.gridAnchorRight,gridUpperRight:t.gridAnchorUpperRight,gridLowerRight:t.gridAnchorLowerRight,gridTop:t.gridAnchorTop,gridBottom:t.gridAnchorBottom,batteryLeft:t.batteryAnchorLeft,batteryUpperLeft:t.batteryAnchorUpperLeft,batteryLowerLeft:t.batteryAnchorLowerLeft,batteryRight:t.batteryAnchorRight,batteryTop:t.batteryAnchorTop,batteryBottom:t.batteryAnchorBottom,houseLeft:t.houseAnchorLeft,houseRight:t.houseAnchorRight,houseTop:t.houseAnchorTop,houseBottom:t.houseAnchorBottom,houseBottomLeft:t.houseAnchorBottomLeft,houseBottomCenter:t.houseAnchorBottomCenter,houseBottomRight:t.houseAnchorBottomRight,houseTopLeft:t.houseAnchorTopLeft,houseTopCenter:t.houseAnchorTopCenter,houseTopRight:t.houseAnchorTopRight,spaLeft:t.spaAnchorLeft,spaRight:t.spaAnchorRight,spa:t.spaAnchorTop,heatpumpLeft:t.heatpumpAnchorLeft,heatpumpRight:t.heatpumpAnchorRight,heatpump:t.heatpumpAnchorTop,applianceLeft:t.applianceAnchorLeft,applianceRight:t.applianceAnchorRight,appliance:t.applianceAnchorTop,carLeft:t.carAnchorLeft,carRight:t.carAnchorRight,car:t.carAnchorTop,solarJunction:t.solarJunction}}(function(t){const e=e=>{const i=t.find(t=>t.id===e);return{...i,...i.anchorBounds??{}}},i=e("solar"),o=e("house"),r=e("battery"),n=e("grid"),s=e("spa"),a=e("heatpump"),l=e("appliance"),c=e("car");return{houseAnchorLeft:{x:o.x,y:o.y+o.height/2},houseAnchorRight:{x:o.x+o.width,y:o.y+o.height/2},houseAnchorTop:{x:o.x+o.width/2,y:o.y},houseAnchorTopLeft:{x:o.x+(o.width/2-10),y:o.y},houseAnchorTopCenter:{x:o.x+o.width/2,y:o.y},houseAnchorTopRight:{x:o.x+(o.width/2+10),y:o.y},houseAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomLeft:{x:o.x+(o.width/2-10),y:o.y+o.height},houseAnchorBottomCenter:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomRight:{x:o.x+(o.width/2+10),y:o.y+o.height},batteryAnchorLeft:{x:r.x,y:r.y+r.height/2},batteryAnchorUpperLeft:{x:r.x,y:r.y+r.height/2-10},batteryAnchorLowerLeft:{x:r.x,y:r.y+r.height/2+10},batteryAnchorRight:{x:r.x+r.width,y:r.y+r.height/2},batteryAnchorTop:{x:r.x+r.width/2,y:r.y},batteryAnchorBottom:{x:r.x+r.width/2,y:r.y+r.height},gridAnchorLeft:{x:n.x,y:n.y+n.height/2},gridAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},gridAnchorUpperRight:{x:n.x+n.width,y:n.y+(n.height/2-10)},gridAnchorLowerRight:{x:n.x+n.width,y:n.y+(n.height/2+10)},gridAnchorTop:{x:n.x+n.width/2,y:n.y},gridAnchorBottom:{x:n.x+n.width/2,y:n.y+n.height},solarAnchorLeft:{x:i.x,y:i.y+i.height/2},solarAnchorRight:{x:i.x+i.width,y:i.y+i.height/2},solarAnchorBottom:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomLeft:{x:i.x+(i.width/2-10),y:i.y+i.height},solarAnchorBottomCenter:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomRight:{x:i.x+(i.width/2+10),y:i.y+i.height},solarJunction:{x:i.x+i.width/2,y:i.y+i.height+55},spaAnchorLeft:{x:s.x,y:s.y+s.height/2},spaAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},spaAnchorTop:{x:s.x+s.width/2,y:s.y},heatpumpAnchorLeft:{x:a.x,y:a.y+a.height/2},heatpumpAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},heatpumpAnchorTop:{x:a.x+a.width/2,y:a.y},applianceAnchorLeft:{x:l.x,y:l.y+l.height/2},applianceAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},applianceAnchorTop:{x:l.x+l.width/2,y:l.y},carAnchorLeft:{x:c.x,y:c.y+c.height/2},carAnchorRight:{x:c.x+c.width,y:c.y+c.height/2},carAnchorTop:{x:c.x+c.width/2,y:c.y}}}(r));return W`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${It(s,e,n)}

    ${zt(r,i,o)}
  </svg>
`}(s,e,i,this)}
              </div>
              ${r&&n?oe(o,n):""}
            </div>
          </div>
        </div>
      </ha-card>
    `}};t([yt({attribute:!1})],ge.prototype,"hass",void 0),t([yt({attribute:!1})],ge.prototype,"config",void 0),t([gt()],ge.prototype,"activeLayout",void 0),t([gt()],ge.prototype,"layoutType",void 0),t([gt()],ge.prototype,"sceneScale",void 0),t([gt()],ge.prototype,"layoutReady",void 0),t([gt()],ge.prototype,"livePowerIssue",void 0),ge=t([dt("solar-battery-economy-flow-card")],ge);export{ge as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
