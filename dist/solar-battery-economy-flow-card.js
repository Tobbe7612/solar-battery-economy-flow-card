function e(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,y=globalThis,g=y.trustedTypes,f=g?g.emptyScript:"",m=y.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...h(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=o;const n=r.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const n=this.constructor;if(!1===o&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??v)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[b("elementProperties")]=new Map,$[b("finalized")]=new Map,m?.({ReactiveElement:$}),(y.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,E=e=>e,A=_.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,L="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+P,k=`<${C}>`,F=document,T=()=>F.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,R="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,U=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,N=/"/g,H=/^(?:script|style|textarea|title)$/i,j=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),W=j(1),V=j(2),G=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Q=new WeakMap,Y=F.createTreeWalker(F,129);function X(e,t){if(!B(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const K=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=I;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===I?"!--"===l[1]?a=D:void 0!==l[1]?a=z:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=U):void 0!==l[3]&&(a=U):a===U?">"===l[0]?(a=r??I,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?U:'"'===l[3]?N:O):a===N||a===O?a=U:a===D||a===z?a=I:(a=U,r=void 0);const h=a===U&&e[t+1].startsWith("/>")?" ":"";n+=a===I?i+k:d>=0?(o.push(s),i.slice(0,d)+L+i.slice(d)+P+h):i+P+(-2===d?t:h)}return[X(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,s=this.parts,[l,d]=K(e,t);if(this.el=J.createElement(l,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=Y.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(L)){const t=d[n++],i=o.getAttribute(e).split(P),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?oe:"?"===a[1]?re:"@"===a[1]?ne:ie}),o.removeAttribute(e)}else e.startsWith(P)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(H.test(o.tagName)){const e=o.textContent.split(P),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],T()),Y.nextNode(),s.push({type:2,index:++r});o.append(e[t],T())}}}else if(8===o.nodeType)if(o.data===C)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(P,e+1));)s.push({type:7,index:r}),e+=P.length-1}r++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,o){if(t===G)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);Y.currentNode=o;let r=Y.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new te(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new ae(r,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(r=Y.nextNode(),n++)}return Y.currentNode=F,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),M(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>B(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new J(e)),t}k(e){B(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new te(this.O(T()),this.O(T()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=Z(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==G,n&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=Z(this,o[i+a],t,a),s===G&&(s=this._$AH[a]),n||=!M(s)||s!==this._$AH[a],s===q?e=q:e!==q&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ne extends ie{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??q)===G)return;const i=this._$AH,o=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==q&&(i===q||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const se=_.litHtmlPolyfillSupport;se?.(J,te),(_.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new te(t.insertBefore(T(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:v},ue=(e=pe,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return ye({...e,state:!0,attribute:!1})}const fe={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16},panels:{left:{x:10,y:300,width:220,compact:!1},right:{x:1690,y:300,width:220,compact:!1}}},me={sceneWidth:430,sceneHeight:1e3,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10},panels:{left:{x:18,y:550,width:394,compact:!0},right:{x:227,y:540,width:185,compact:!0}}};function be(e,t){return{id:e,power:t,active:t>1,intensity:Math.min(1,t/5e3)}}function xe(e,t,i){if(!t)return null;const o=e?.states?.[t];if(!o)return null;const r=o.state,n="number"==typeof r?r:"string"==typeof r&&""!==r.trim()?Number(r):NaN;if(!Number.isFinite(n))return null;const a=o.attributes??{};if(a.device_class&&a.device_class!==i)return null;const s="string"==typeof a.unit_of_measurement?a.unit_of_measurement.trim().toLowerCase():"";return"power"===i?"w"===s?n:"kw"===s?1e3*n:null:"a"===s?n:"ma"===s?n/1e3:null}function ve(e){return Number(e?.attributes?.cloud_coverage??0)}function we(e){return e>40}function $e(e,t,i){const o=function(e){const t=e?.states;if(t){if(t["weather.smhi_weather"])return t["weather.smhi_weather"];for(const e of Object.keys(t))if(e.startsWith("weather."))return t[e]}}(e),r=function(e){switch(e?.state??""){case"rainy":case"pouring":case"lightning-rainy":return"rain";case"cloudy":case"exceptional":return"cloudy";default:return we(ve(e))?"cloudy":"clear"}}(o),n=function(e){return"mobile"===e?"landscape":"villa"}(i),a=function(e,t,i){if("rain"===t)return{folder:"weather",filename:`${i}_rain.webp`};switch(e){case"night":return{folder:"night",filename:"cloudy"===t?`${i}_night_cloudy.webp`:`${i}_night_clear.webp`};case"bluehour":return{folder:"evening",filename:`${i}_bluehour.webp`};case"sunset":return{folder:"evening",filename:`${i}_evening.webp`};default:return{folder:"day",filename:"cloudy"===t?`${i}_day_cloudy.webp`:`${i}_day_clear.webp`}}}(t,r,n);return s=a.folder,l=a.filename,`/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds/${s}/${l}`;var s,l}function _e(e){return e.waypoints&&e.waypoints.length>0?function(e,t=20){if(e.length<2)return"";let i=`M ${e[0].x} ${e[0].y}`;for(let o=1;o<e.length-1;o++){const r=e[o-1],n=e[o],a=e[o+1],s=n.x-r.x,l=n.y-r.y,d=a.x-n.x,c=a.y-n.y,h=n.x-Math.sign(s)*t,p=n.y-Math.sign(l)*t,u=n.x+Math.sign(d)*t,y=n.y+Math.sign(c)*t;i+=`\n      L ${h} ${p}\n      Q ${n.x} ${n.y}\n        ${u} ${y}\n    `}const o=e[e.length-1];return i+=`\n    L ${o.x} ${o.y}\n  `,i}([e.start,...e.waypoints,e.end],e.radius??38):(t=e.start.x,i=e.start.y,o=e.end.x,r=e.end.y,`\n    M ${t} ${i}\n    L ${o} ${r}\n  `);var t,i,o,r}function Ee(e){const t=Math.abs(e);return t<300?{particleCount:4,duration:6,lineOpacity:.1,lineWidth:2,sparkInterval:9}:t<800?{particleCount:6,duration:5.2,lineOpacity:.14,lineWidth:2.3,sparkInterval:7}:t<1500?{particleCount:8,duration:4.4,lineOpacity:.18,lineWidth:2.6,sparkInterval:6}:t<3e3?{particleCount:10,duration:3.7,lineOpacity:.22,lineWidth:2.9,sparkInterval:5}:t<5e3?{particleCount:12,duration:3,lineOpacity:.26,lineWidth:3.2,sparkInterval:4}:{particleCount:14,duration:2.2,lineOpacity:.3,lineWidth:3.5,sparkInterval:3}}function Ae(e,t){const i=Math.abs(e);return i<=1?{active:!1,color:t,opacity:0,blur:0}:i<300?{active:!0,color:t,opacity:.03,blur:8}:i<800?{active:!0,color:t,opacity:.045,blur:10}:i<1500?{active:!0,color:t,opacity:.06,blur:12}:i<3e3?{active:!0,color:t,opacity:.08,blur:14}:i<5e3?{active:!0,color:t,opacity:.1,blur:16}:{active:!0,color:t,opacity:.12,blur:18}}const Se=3.5;function Le(e){return e.waypoints&&e.waypoints.length>0?[e.start,...e.waypoints,e.end]:[e.start,e.end]}function Pe(e){const t=43758.5453*Math.sin(12.9898*e);return t-Math.floor(t)}function Ce(e){let t=0;for(let i=0;i<e.length;i++)t=(31*t+e.charCodeAt(i))%1e5;return t}function ke(e,t,i,o,r){const n=t+53.1*e,a=Pe(n+4.3)*r,s=.85+.3*Pe(n+8.9),l=.8+.5*Pe(n+13.1),d=function(e,t){let i=`M ${e[0].x} ${e[0].y}`;for(let o=0;o<e.length-1;o++){const r=e[o],n=e[o+1],a=n.x-r.x,s=-(n.y-r.y),l=a,d=Math.max(1,Math.hypot(s,l)),c=14*(Pe(t+31.7*o)-.5);i+=` Q ${(r.x+n.x)/2+s/d*c} ${(r.y+n.y)/2+l/d*c} ${n.x} ${n.y}`}return i}(i,n),c=r*s,h=2*l;return V`
        <g class="energy-particle">

            <circle
                r="${4.5*l}"
                fill="${o}"
                opacity="0"
                filter="url(#energy-glow)"
            >
                <animateMotion
                    dur="${c}s"
                    begin="-${a}s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.3 0 0.7 1"
                    path="${d}"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.30;0.30;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${c}s"
                    begin="-${a}s"
                    repeatCount="indefinite"
                />
            </circle>

            <circle
                r="${h}"
                fill="#FFFFFF"
                opacity="0"
            >
                <animateMotion
                    dur="${c}s"
                    begin="-${a}s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.3 0 0.7 1"
                    path="${d}"
                />
                <animate
                    attributeName="opacity"
                    values="0;0.9;0.9;0"
                    keyTimes="0;0.10;0.85;1"
                    dur="${c}s"
                    begin="-${a}s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="r"
                    values="${.85*h};${1.15*h};${.85*h}"
                    dur="1.6s"
                    repeatCount="indefinite"
                />
            </circle>

        </g>
    `}function Fe(e,t){return V`
        ${Array.from({length:2}).map((i,o)=>function(e,t,i){const o=Le(e),r=Math.floor(Date.now()/(1e3*t.sparkInterval)),n=Ce(e.id)+41.7*i+97.3*r,a=o.length-1,s=Math.min(a-1,Math.floor(Pe(n)*a)),l=o[s],d=o[s+1],c=.2+.6*Pe(n+3.7),h=l.x+(d.x-l.x)*c,p=l.y+(d.y-l.y)*c,u=180*Math.atan2(d.y-l.y,d.x-l.x)/Math.PI,y=Pe(n+9.1)*t.sparkInterval;return V`
        <g transform="translate(${h}, ${p})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${t.sparkInterval}s"
                begin="-${y}s"
                repeatCount="indefinite"
            />
            ${function(e,t,i,o){return V`
        <g
            class="energy-spark"
            transform="translate(${e} ${t}) rotate(${i})"
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
    `}(0,0,u,e.color)}
        </g>
    `}(e,t,o))}
    `}function Te(e){if(!e.active||Math.abs(e.power)<1)return V``;const t=_e(e),i=(o=e.power,{flow:Ee(o)}).flow;var o;return V`

        <g class="energy-edge">

            <path
                class="energy-edge-line"
                d="${t}"
                fill="none"
                stroke="${e.color}"
                stroke-width="${i.lineWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="
                    --line-opacity-min: ${.6*i.lineOpacity};
                    --line-opacity-max: ${i.lineOpacity};
                "
            />

            ${function(e,t){const i=Le(e),o=Ce(e.id);return V`
        ${Array.from({length:t.particleCount}).map((r,n)=>ke(n,o,i,e.color,t.duration))}
    `}(e,i)}

            ${Fe(e,i)}

        </g>

    `}function Me(e,t,i){const o=function(e,t,i){return i.map(i=>{const o=t[i.liveFlow];return{id:i.id,start:i.getStart(e),end:i.getEnd(e),waypoints:i.getWaypoints?i.getWaypoints(e):[],power:o?.power??0,active:o?.active??!1,color:i.color,radius:i.radius}})}(e,t,i);return V`

        ${V`

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
            ${o.map(e=>Te(e))}
        </g>
    `}function Be(e,t){e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}function Re(e,t,i,o,r,n){switch(e){case"solar":return function(e,t,i){return V`
        <g
            transform="translate(${e}, ${t})"
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
    `}(t,i,r);case"house":return function(e,t,i){return V`
        <g
            transform="translate(${e}, ${t}) scale(1.28)"
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
    `}(t,i,r);case"grid":return function(e,t,i){return V`

        <g
            transform="translate(${e}, ${t}) scale(0.75, 0.90)"
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

    `}(t,i,r);case"battery":{const e=Math.max(0,Math.min(100,n??0));return V`
                <g transform="translate(${t}, ${i}) rotate(-90)">

                    <rect
                        x="-28"
                        y="-16"
                        width="${56*(e/100)}"
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
            `}case"car":return function(e,t,i){return V`

        <g
            transform="translate(${e}, ${t}) scale(1.02)"
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

    `}(t,i,r);case"spa":return function(e,t,i){return V`

        <g
            transform="translate(${e}, ${t}) scale(1.10)"
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

    `}(t,i,r);case"heatpump":return function(e,t,i){return V`

        <g
            transform="translate(${e}, ${t}) scale(1.0)"
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

    `}(t,i,r);case"appliance":return function(e,t,i){return V`

        <g
            transform="translate(${e},${t}) scale(1.05)"
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

    `}(t,i,r);default:return V`
                <text
                    x="${t}"
                    y="${i}"
                    fill="${r}"
                    font-size="${o}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `}}function Ie(e,t,i){const o=e.width<=155,r=o?.6:1,n=o?.65:1,a=o?22:34,s=o?30:49,l=17*r,d=(o?25:26)*r,c=(o?18:19)*r,h=14*r,p=o?50:78,u=e.width/2,y=p+(o?6:10),g=28*r,f=(o?56:59)*r,m=(o?78:82)*r,b=(o?100:105)*r,x=(v=t.power,w=t.color??e.accentColor??"#FFFFFF",{glow:Ae(v,w),pulse:{active:Math.abs(v)>1,scale:1.015,duration:3.2}});var v,w;const $=e.width/2,_=e.height/2;return V`

        <g
            class="energy-label"
            transform="translate(${e.x}, ${e.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${()=>{t.entityId&&Be(i,t.entityId)}}
        >

            ${x.glow.active?V`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${e.width+16}"
                        height="${e.height+16}"
                        rx="26"
                        ry="26"
                        fill="${x.glow.color}"
                        style="
                            filter: blur(${x.glow.blur}px);
                            --glow-opacity-min: ${.5*x.glow.opacity};
                            --glow-opacity-max: ${x.glow.opacity};
                        "
                    />
                `:""}

            <g>

                <rect
                    class="energy-label-frame${x.pulse.active?" is-pulsing":""}"
                    filter="url(#label-shadow)"
                    width="${e.width}"
                    height="${e.height}"

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
                    ${e.title}
                </text>

                <g
                    transform="
                        translate(
                            ${a},
                            ${s}
                        )
                        scale(${n})
                    "
                >
                    ${Re(t.icon??e.icon,0,0,22,x.glow.color,t.soc)}
                </g>

                ${t.line1?V`
                        <text
                            class="energy-label-line1"
                            x="${y}"
                            y="${f}"
                            font-size="${d}"
                            fill="#153653"
                            font-weight="700"
                        >
                            ${t.line1}
                        </text>
                    `:""}

                ${t.line2?V`
                        <text
                            class="energy-label-line2"
                            x="${y}"
                            y="${m}"
                            font-size="${c}"
                            fill="#345570"
                            opacity="0.96"
                        >
                            ${t.line2}
                        </text>
                    `:""}

                ${t.line3?V`
                        <text
                            class="energy-label-line3"
                            x="${u}"
                            y="${b}"
                            font-size="${h}"
                            text-anchor="middle"
                            fill="#526d87"
                            opacity="0.92"
                        >
                            ${t.line3}
                        </text>
                    `:""}

            </g>

        </g>

    `}function De(e){return Math.abs(e)<1e3?`${Math.round(e)} W`:`${(e/1e3).toFixed(1)} kW`}function ze(e){return{line1:De(e.power),line2:e.optionalValue??"",line3:e.status,entityId:e.powerEntity,power:e.power,...void 0!==e.soc?{soc:e.soc}:{},icon:e.icon,color:e.power>1?"#FF6B6B":"#8A93A3"}}function Ue(e,t,i){return V`
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
            ${e.map(e=>{let o,r=e;switch(e.id){case"battery":o={line1:De((n=t).batteryPower),line2:(a=n.batterySoc,`${Math.round(a)}%`),line3:n.batteryStatus,entityId:n.batteryEntity,power:n.batteryPower,soc:n.batterySoc,color:n.batteryPower<-1?"#61FF8B":n.batteryPower>1?"#FFB347":"#FFFFFF"};break;case"house":o=function(e){return{line1:De(e.housePower),line2:"",line3:e.houseStatus,entityId:e.houseEntity,power:e.housePower,color:e.housePower>1?"#FF6B6B":"#8A93A3"}}(t);break;case"grid":o=function(e){return{line1:De(e.gridPower),line2:"",line3:e.gridStatus,entityId:e.gridEntity,power:e.gridPower,color:e.gridPower>1?"#FF6B6B":e.gridPower<-1?"#61FF8B":"#4FC3F7"}}(t);break;case"solar":o=function(e){return{line1:De(e.solarPower),line2:"",line3:e.solarStatus,entityId:e.solarEntity,power:e.solarPower,color:e.solarPower>1?"#FFD54A":"#8A93A3"}}(t);break;case"car":{const i=t.devices[0];if(!i||!i.enabled)return"";o=ze(i),r={...e,title:i.title};break}case"spa":{const i=t.devices[1];if(!i||!i.enabled)return"";o=ze(i),r={...e,title:i.title};break}case"heatpump":{const i=t.devices[2];if(!i||!i.enabled)return"";o=ze(i),r={...e,title:i.title};break}case"appliance":{const i=t.devices[3];if(!i||!i.enabled)return"";o=ze(i),r={...e,title:i.title};break}default:o={line1:"1234 W",line2:"",line3:"",power:0}}var n,a;return Ie(r,o,i)})}
        </g>
    `}const Oe=[{id:"solar",title:"SOLAR",icon:"solar",x:880,y:300,width:200,height:120,anchorBounds:{x:880,y:300,width:200,height:120},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:470,y:440,width:200,height:120,anchorBounds:{x:470,y:440,width:200,height:120},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:880,y:600,width:200,height:120,anchorBounds:{x:880,y:600,width:200,height:120},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:1220,y:440,width:200,height:120,anchorBounds:{x:1220,y:440,width:200,height:120},accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:555,y:750,width:200,height:120,anchorBounds:{x:555,y:750,width:200,height:120},accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:780,y:820,width:200,height:120,anchorBounds:{x:780,y:820,width:200,height:120},accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:990,y:820,width:200,height:120,anchorBounds:{x:990,y:820,width:200,height:120},accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:1220,y:750,width:200,height:120,anchorBounds:{x:1220,y:750,width:200,height:120},accentColor:"#81D4FA"}],Ne=[{id:"solar",title:"SOLAR",icon:"solar",x:156,y:130,width:118,height:76,anchorBounds:{x:156,y:130,width:118,height:76},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:21,y:220,width:118,height:76,anchorBounds:{x:21,y:220,width:118,height:76},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:156,y:300,width:118,height:76,anchorBounds:{x:156,y:300,width:118,height:76},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:296,y:220,width:118,height:76,anchorBounds:{x:296,y:220,width:118,height:76},accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:18,y:460,width:118,height:76,anchorBounds:{x:18,y:460,width:118,height:76},accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:18,y:380,width:118,height:76,anchorBounds:{x:18,y:380,width:118,height:76},accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:293,y:460,width:118,height:76,anchorBounds:{x:293,y:460,width:118,height:76},accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:296,y:380,width:118,height:76,anchorBounds:{x:296,y:380,width:118,height:76},accentColor:"#81D4FA"}],He=[{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solar,getEnd:e=>e.houseTop,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A"},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A"},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLeft,getEnd:e=>e.houseTopRight,color:"#59D990"},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryUpperLeft,getEnd:e=>e.gridUpperRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B"},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridUpperRight,getEnd:e=>e.batteryUpperLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomLeft,getEnd:e=>e.spa,color:"#FF6B6B"},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomCenter,getEnd:e=>e.heatpump,color:"#FF6B6B"},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.appliance,color:"#FF6B6B"},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.car,color:"#FF6B6B"}],je=[{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solarBottomCenter,getEnd:e=>e.houseTopCenter,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A",radius:30},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A",radius:30},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLowerLeft,getEnd:e=>e.houseTopRight,color:"#59D990",radius:30},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryLeft,getEnd:e=>e.gridRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridLowerRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B",radius:30},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridRight,getEnd:e=>e.batteryLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomCenter,getEnd:e=>e.spaRight,color:"#FF6B6B",radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomLeft,getEnd:e=>e.heatpumpRight,color:"#FF6B6B",radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.applianceLeft,color:"#FF6B6B",radius:30},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.carLeft,color:"#FF6B6B",radius:30}];function We(e,t,i){return i.particleCount<=0?V``:V`
        ${Array.from({length:i.particleCount}).map((o,r)=>function(e,t,i,o){const r=Pe(7.31*e)-.5,n=Pe(13.7*e+3)-.5,a=Pe(19.1*e+11)-.5,s=Pe(5.13*e+9)*o,l=.7+.6*Pe(2.9*e+17),d=.85+.3*Pe(3.7*e+23),c=i.x-t.x,h=-(i.y-t.y),p=c,u=Math.max(1,Math.hypot(h,p)),y=26*a,g=(t.x+i.x)/2+h/u*y,f=(t.y+i.y)/2+p/u*y,m=`M ${t.x+14*r} ${t.y+14*n} Q ${g} ${f} ${i.x} ${i.y}`,b=o*d;return V`
        <circle
            r="${1.4*l}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${b}s"
                begin="-${s}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.3 0 0.7 1"
                path="${m}"
            />
            <animate
                attributeName="opacity"
                values="0;0.55;0.55;0"
                keyTimes="0;0.15;0.7;1"
                dur="${b}s"
                begin="-${s}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(r,e,t,i.duration))}
    `}function Ve(e,t){return t<=0?V``:V`
        ${Array.from({length:t}).map((t,i)=>function(e,t){const i=Pe(17.3*e+31)*Math.PI*2,o=14+10*Pe(23.9*e+5),r=2.2*Pe(8.1*e+11),n=1.6+.8*Pe(4.4*e+19),a=.7+.6*Pe(6.7*e+41),s=Math.cos(i)*o,l=Math.sin(i)*o,d=`M ${t.x} ${t.y} L ${t.x+s} ${t.y+l}`;return V`
        <circle
            r="${1.3*a}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${n}s"
                begin="-${r}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.2 0 0.6 1"
                path="${d}"
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
    `}(i,e))}
    `}function Ge(e,t,i){const{centerX:o,centerY:r,width:n,height:a,sunRadius:s}=t.solarArc,l={x:o-n/2,y:r+a},d={x:o,y:r-20},c={x:o+n/2,y:r+a},h=function(e,t,i,o){const r=1-e;return{x:r*r*t.x+2*r*e*i.x+e*e*o.x,y:r*r*t.y+2*r*e*i.y+e*e*o.y}}(e.progress,l,d,c),p=(t.sceneWidth<1e3?Ne:Oe).find(e=>"solar"===e.id),u={x:p.x+p.width/2,y:p.y},y=function(e){const t=Math.max(0,e);return t<=0?{particleCount:0,duration:Se}:t<500?{particleCount:4,duration:Se}:t<1500?{particleCount:8,duration:Se}:t<3e3?{particleCount:12,duration:Se}:{particleCount:15,duration:Se}}(i);return V`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${o-n/2}
            ${r+a}

          Q ${o}
            ${r-20}

            ${o+n/2}
            ${r+a}
        "
        class="solar-arc-path"
      />
      ${e.aboveHorizon?V`
              <circle
                  cx="${h.x}"
                  cy="${h.y}"
                  r="${s}"
                  class="solar-arc-sun"
              />
          `:V``}
      ${We(h,u,y)}
      ${Ve(h,y.particleCount)}
      <text
          x="${o-n/2}"
          y="${r+a+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${e.sunrise}
      </text>
      <text
          x="${o+n/2}"
          y="${r+a+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${e.sunset}
      </text>
    </svg>
  `}const qe=a`
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

`,Qe=a`

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

`,Ye=a`
 
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
 
`,Xe=a`
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
    top: 300px;
    right: 20px;
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
    margin-bottom: 6px;
    color: #315474;
    font-size: 10px;
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
.phase-load-heading { margin-bottom: 3px; }
.phase-load-heading strong { color: #173652; font-size: 14px; }
.phase-load-missing { color: #a35b16; font-size: 10px; }
.phase-load-direction { font-size: 10px; font-weight: 700; letter-spacing: 0.04em; white-space: nowrap; }
.phase-load-direction.import { color: #ff6b6b; }
.phase-load-direction.export { color: #57e889; }
.phase-load-direction.missing { color: #9a671c; }
.phase-load-values { font-size: 12px; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-values { white-space: nowrap; }
.phase-load-values span:last-child { color: var(--info-card-muted); }
.phase-load-bar { display: grid; grid-template-columns: repeat(16, 1fr); gap: 2px; margin-top: 4px; }
.phase-load-segment { height: 4px; border-radius: 2px; background: #d9e2eb; }
.phase-load-phase.import .phase-load-segment.active { background: #ff6b6b; }
.phase-load-phase.export .phase-load-segment.active { background: #57e889; }
.phase-load-phase.missing .phase-load-segment.active { background: #9aa8b8; }
.phase-load-footer { font-size: 10px; font-variant-numeric: tabular-nums; color: #173652; }
.phase-load-footer span:last-child { color: var(--info-card-muted); }
.phase-load-phase.warning .phase-load-footer span:last-child { color: #b87813; }
.phase-load-phase.critical .phase-load-footer span:last-child { color: #bd3842; }
.phase-load-phase.normal .phase-load-footer span:last-child { color: #278a49; }
.phase-load-direction.phase-load-net { color: #315474; }
.phase-load-summary-row .phase-load-values span { white-space: nowrap; }
.phase-load-summary-row .phase-load-bar { visibility: hidden; }
.card.mobile .phase-load-panel { top: 735px; right: auto; left: 3%; bottom: auto; width: 94%; padding: 7px 8px; }
.card.mobile .phase-load-title { margin-bottom: 4px; }
.card.mobile .phase-load-grid { gap: 3px; }
.card.mobile .phase-load-phase { padding: 4px 6px; }
.card.mobile .phase-load-heading { margin-bottom: 2px; }
.card.mobile .phase-load-heading strong { font-size: 11px; }
.card.mobile .phase-load-details { gap: 5px; }
.card.mobile .phase-load-values { font-size: 10px; gap: 4px; }
.card.mobile .phase-load-missing { font-size: 8px; }
.card.mobile .phase-load-direction { font-size: 8px; }
.card.mobile .phase-load-footer { font-size: 9px; }
.card.mobile .phase-load-direction { letter-spacing: 0; }
.side-panel {
    position: absolute;
    top: 20px;
    height: auto;

    width: 220px;

    padding: 14px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 18px;

    border: 1px solid var(--info-card-border);

    backdrop-filter: blur(18px) saturate(1.16);

    z-index: 20;

    transition:
        background 0.8s ease,
        border-color 0.8s ease,
        box-shadow 0.8s ease;

    box-shadow: var(--info-card-shadow);
}

.side-title {

    display: flex;
    align-items: center;

    color: #173c5d;

    font-size: 13px;
    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .11em;

    margin-bottom: 10px;

    text-shadow: none;
}

.panel-section {

    display: flex;
    flex-direction: column;

    gap: 6px;
}

.panel-section-title {

    color: rgba(255,255,255,.60);

    font-size: 12px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: .16em;

    margin-bottom: 8px;
}

.side-stat {

    position: relative;
    display: flex;

    flex-direction: column;

    gap: 2px;
    min-height: 42px;
    justify-content: center;
    padding: 6px 8px 6px 25px;
    border: 1px solid rgba(211, 225, 238, 0.9);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.76);
    box-shadow: 0 3px 9px rgba(28, 58, 86, 0.06);
    transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.side-stat:hover {
    background: rgba(255, 255, 255, 0.96);
    border-color: rgba(123, 166, 202, 0.72);
    box-shadow: 0 5px 13px rgba(28, 58, 86, 0.1);
}

.side-stat::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 50%;
    width: 7px;
    height: 7px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #278bc4;
    box-shadow: 0 0 0 4px rgba(39, 139, 196, 0.11);
}

.side-label {

    color: #526d87;

    font-size: 9px;

    font-weight: 600;

    text-transform: none;

    letter-spacing: .01em;
}

.side-value {

    color: #173652;

    font-size: 16px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -.015em;

    transition:
        color .35s ease;
}

.side-stat:has(.value-grid)::before { background: #e25d69; box-shadow: 0 0 0 4px rgba(226, 93, 105, 0.12); }
.side-stat:has(.value-export)::before { background: #18a873; box-shadow: 0 0 0 4px rgba(24, 168, 115, 0.12); }
.side-stat:has(.value-independence)::before { background: #288fc8; box-shadow: 0 0 0 4px rgba(40, 143, 200, 0.12); }
.side-stat:has(.value-solar)::before { background: #e5a91b; box-shadow: 0 0 0 4px rgba(229, 169, 27, 0.14); }
.side-stat:has(.value-battery)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }
.side-stat:has(.value-co2)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }
.side-stat:has(.value-money)::before { background: #1aa873; box-shadow: 0 0 0 4px rgba(26, 168, 115, 0.12); }

.side-divider {

    margin: 2px 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(82,109,135,.18),
            transparent
        );
}

.panel-footer {

    margin-top: auto;

    min-height: 28px;

    display: flex;

    align-items: flex-end;
}
.side-panel.compact {
    padding: 8px;
}

.side-panel.compact .side-title {
    font-size: 12px;
    margin-bottom: 6px;
    letter-spacing: .08em;
}

.side-panel.compact .panel-section {
    gap: 4px;
}

.side-panel.compact .panel-section-title {
    font-size: 11px;
    margin-bottom: 6px;
}

.side-panel.compact .side-stat {
    gap: 2px;
    min-height: 35px;
    padding: 4px 5px 4px 20px;
}

.card.mobile .side-panel-left .panel-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
.card.mobile .side-panel-left .side-divider { grid-column: 1 / -1; }
.card.mobile .side-panel-left .side-stat {
    min-height: 26px;
    padding-top: 2px;
    padding-bottom: 2px;
    gap: 1px;
}

.side-panel.compact .side-label {
    font-size: 9px;
}

.side-panel.compact .side-value {
    font-size: 14px;
}

.side-panel.compact .side-stat::before { left: 7px; width: 6px; height: 6px; }

.side-panel.compact .side-divider {
    margin: 3px 0;
}

.side-panel.compact .panel-footer {
    min-height: 14px;
}

/* DAG */
.card.day .side-panel,
.card.morning .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
/* KVÄLL */
.card.sunset .side-panel,
.card.evening .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
/* NATT */
.card.night .side-panel {
    background: linear-gradient(145deg, var(--info-card-bg), var(--info-card-bg-soft));
}
.value-solar {
    color: #8b6500;
    text-shadow: none;
}
.value-battery {
    color: #14734e;
    text-shadow: none;
}
.value-export {
    color: #147f59;
    text-shadow: none;
}
.value-grid {
    color: #b64b43;
    text-shadow: none;
}
.value-money {
    color: #14734e;
    text-shadow: none;
}
.value-total {
    color: #173652;
}
.value-independence {
    color: #176f9e;
    text-shadow: none;
}
.value-co2 {
    color: #14734e;
    text-shadow: none;
}
.value-solar {
    text-shadow: none;
}
.value-battery {
    text-shadow: none;
}
.value-export {
    text-shadow: none;
}
.value-grid {
    text-shadow: none;
}
.value-money {
    text-shadow: none;
}
.value-independence {
    text-shadow: none;
}
.value-co2 {
    text-shadow: none;
}
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 1000;
}
${qe}
${Qe}
${Ye}
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Ke=1;class Je{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze="important",et=" !"+Ze,tt=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Je{constructor(e){if(super(e),e.type!==Ke||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(et);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?Ze:""):i[e]=o}}return G}});function it(e,t=!1){if(null===e)return"—";const i=Math.abs(e),o=i>=1e3?`${(i/1e3).toFixed(2)} kW`:`${i>=100?i.toFixed(0):i>=10?i.toFixed(1):i.toFixed(2)} W`;return t&&0!==e?`${e>0?"+":"−"}${o}`:o}function ot(e){const t=null===e.current||null===e.power,i="import"===e.direction?"IMPORT →":"export"===e.direction?"← EXPORT":"RIKTNING SAKNAS",o="critical"===e.loadState?"ÖVERLAST":"warning"===e.loadState?"HÖG BELASTNING":"normal"===e.loadState?"NORMAL":"BELASTNING SAKNAS";return W`
        <div class="phase-load-phase ${e.loadState} ${e.direction}" aria-label="${e.name}">
            <div class="phase-load-heading">
                <strong>${e.name}</strong>
                ${t?W`<span class="phase-load-missing" role="status">Data saknas</span>`:""}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction ${e.direction}">${i}</div>
                <div class="phase-load-values">
                    <span>${function(e){if(null===e)return"—";const t=Math.abs(e);return`${t>=100?e.toFixed(0):t>=10?e.toFixed(1):e.toFixed(2)} A`}(e.current)}</span>
                    <span>${it(e.power)}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${null===e.percent?"—":`${e.percent} %`}</span>
                    <span>${o}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({length:16},(t,i)=>W`
                    <span class="phase-load-segment ${null!==e.activeSegments&&("export"===e.direction?i>=16-e.activeSegments:i<e.activeSegments)?"active":""}"></span>
                `)}
            </div>
        </div>
    `}function rt(e,t){return W`
        <section class="phase-load-panel" aria-label="Fasbelastning och fasöversikt">
            <div class="phase-load-title">FASBELASTNING</div>
            <div class="phase-load-grid">${e.map(ot)}${function(e){const t=e.powerComplete;return W`
        <div class="phase-load-phase phase-load-summary-row" aria-label="SUMMA">
            <div class="phase-load-heading">
                <strong>SUMMA</strong>
                ${t?"":W`<span class="phase-load-missing" role="status">Effektdata ofullständig</span>`}
            </div>
            <div class="phase-load-details">
                <div class="phase-load-direction phase-load-net">NETTO</div>
                <div class="phase-load-values">
                    <span>${t?it(e.netPower,!0):"—"}</span>
                    <span>${t?`IMP ${it(e.importPower)}`:"IMP —"}</span>
                </div>
                <div class="phase-load-footer">
                    <span>${t?`EXP ${it(e.exportPower)}`:"EXP —"}</span>
                    <span>${t?"3 FASER":"OFULLSTÄNDIG"}</span>
                </div>
            </div>
            <div class="phase-load-bar" aria-hidden="true">
                ${Array.from({length:16},()=>W`<span class="phase-load-segment"></span>`)}
            </div>
        </div>
    `}(t)}</div>
        </section>
    `}function nt(e,t,i=0){const o=e?.states?.[t]?.state,r=Number(o);return Number.isFinite(r)?r:i}function at(e,t,i=""){const o=e?.states?.[t]?.state;return o??i}const st="energy_system_power_solar_house",lt={gridIndependenceEntity:"financial_30_grid_independence",batteryUtilizationEntity:"financial_31_battery_utilization",solarSelfConsumptionEntity:"financial_32_solar_self_consumption_rate",co2SavedEntity:"financial_33_co2_saved"},dt={savingsTodayEntity:"financial_03_savings_today",totalSavingsEntity:"financial_01_total_savings",savingsThisMonthEntity:"financial_04_savings_this_month",savingsThisYearEntity:"financial_05_savings_this_year",estimatedAnnualSavingsEntity:"financial_02_estimated_annual_savings",paybackTimeEntity:"financial_10_payback_time",roiEntity:"financial_12_return_on_investment"};function ct(e,t){const i=e?.states;if(i)return Object.keys(i).find(e=>e.endsWith(t))}function ht(e){return void 0!==ct(e,st)}function pt(e){if(!ht(e))return{};const t={};for(const i of Object.keys(lt)){const o=ct(e,lt[i]);o&&(t[i]=o)}const i={};for(const t of Object.keys(dt)){const o=ct(e,dt[t]);o&&(i[t]=o)}return{sidePanels:{energy:{...t},economy:{...i}}}}function ut(e,t,i){const o=pt(e),r=i?.flows,n=i?.aggregates,a=r?.solar_house??0,s=r?.battery_house??0,l=r?.grid_house??0,d=n?.solar_total??0,c=n?.house_total??0,h=n?.battery_net??0,p=n?.grid_net??0,u=nt(e,"sensor.solar_battery_economy_energy_system_energy_battery_house"),y=nt(e,"sensor.solar_battery_economy_energy_system_energy_solar_export"),g=nt(e,"sensor.solar_battery_economy_energy_system_energy_grid_house"),f="above_horizon"===at(e,"sun.sun")?"Over horizon":"Under horizon",m=h>1?"Charging":h<-1?"Discharging":"Standby",b=[];a>1&&b.push("Solar"),s>1&&b.push("Battery"),l>1&&b.push("Grid");const x=b.length>0?b.join(" + "):"No load",v=p>1?"Importing":p<-1?"Exporting":"Balance",w=t?.batterySocEntity?nt(e,t.batterySocEntity):0,$=t?.solarInfoEntity??"sensor.solaredge_ac_power",_=t?.gridInfoEntity??"sensor.effekt_alla_faser",E=t?.houseInfoEntity??"sensor.forbrukning_nu_ny",A=t?.batteryInfoEntity??"sensor.saj_realtime_battery_power",S=o.sidePanels?.energy?.batteryUtilizationEntity??"",L=nt(e,S),P=o.sidePanels?.economy?.savingsTodayEntity??"",C=nt(e,P),k=o.sidePanels?.energy?.co2SavedEntity??"",F=nt(e,k),T=o.sidePanels?.energy?.solarSelfConsumptionEntity??"",M=nt(e,T),B=o.sidePanels?.economy?.totalSavingsEntity??"",R=nt(e,B),I=o.sidePanels?.economy?.roiEntity??"",D=nt(e,I),z=t?.sidePanels?.energy?.importTodayEntity,U=z?nt(e,z):0,O=t?.sidePanels?.energy?.exportTodayEntity,N=O?nt(e,O):0,H=o.sidePanels?.economy?.savingsThisMonthEntity??"",j=nt(e,H),W=o.sidePanels?.economy?.savingsThisYearEntity??"",V=nt(e,W),G=o.sidePanels?.economy?.estimatedAnnualSavingsEntity??"",q=nt(e,G),Q=o.sidePanels?.economy?.paybackTimeEntity??"",Y=nt(e,Q),X=o.sidePanels?.energy?.gridIndependenceEntity??"",K=nt(e,X);return{devices:(t?.devices??[]).map((t,i)=>function(e,t,i){const o=t.powerEntity?nt(e,t.powerEntity):0;let r,n;"soc"===t.optionalType&&t.optionalEntity&&(n=nt(e,t.optionalEntity),r=`${Math.round(n)} %`),"temperature"===t.optionalType&&t.optionalEntity&&(r=`${nt(e,t.optionalEntity).toFixed(0)} °C`);let a="Standby";if(t.statusEntity)a=at(e,t.statusEntity,"Unknown");else if(t.statusRules?.length){const e=[...t.statusRules].sort((e,t)=>e.threshold-t.threshold);for(const t of e)o>=t.threshold&&(a=t.label)}return{enabled:t.enabled,title:t.title?.trim()||`Device ${i+1}`,power:o,powerEntity:t.powerEntity,optionalType:t.optionalType,optionalValue:r,soc:n,optionalEntity:t.optionalEntity,status:a,statusEntity:t.statusEntity,icon:t.icon}}(e,t,i)),solarPower:d,solarStatus:f,solarEntity:$,batteryToHouse:u,solarExportEnergy:y,gridToHouseEnergy:g,batteryUtilization:L,batteryUtilizationEntity:S,savingsToday:C,savingsTodayEntity:P,totalSavings:R,totalSavingsEntity:B,roi:D,roiEntity:I,importToday:U,importTodayEntity:z,exportToday:N,exportTodayEntity:O,savingsThisMonth:j,savingsThisMonthEntity:H,savingsThisYear:V,savingsThisYearEntity:W,estimatedAnnualSavings:q,estimatedAnnualSavingsEntity:G,paybackTime:Y,paybackTimeEntity:Q,gridIndependence:K,gridIndependenceEntity:X,co2Saved:F,co2SavedEntity:k,solarSelfConsumptionRate:M,solarSelfConsumptionRateEntity:T,batterySoc:w,batteryPower:h,batteryStatus:m,batteryEntity:A,housePower:c,houseStatus:x,houseEntity:E,gridPower:p,gridStatus:v,gridEntity:_}}function yt(e){return null!==e&&"object"==typeof e?e:void 0}function gt(e,t){if(!e||!(t in e))return{issue:"missing"};const i=yt(e[t]);if(!i||!("value"in i))return{issue:"missing"};const o=i.value;if(null===o)return{issue:"null"};if("number"!=typeof o&&"string"!=typeof o)return{issue:"invalid"};if("string"==typeof o&&""===o.trim())return{issue:"invalid"};const r=Number(o);return Number.isFinite(r)?{value:r}:{issue:"invalid"}}const ft={layout:"desktop",phaseLoad:{mainFuse:20,invertDirection:!1,l1PowerInverted:!1,l2PowerInverted:!1,l3PowerInverted:!1},sidePanels:{energy:{show:!0},economy:{show:!0}},devices:[{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1}]};let mt=class extends de{constructor(){super(...arguments),this._config=ft,this._deviceDrafts={},this.phaseLoadSchema=[{name:"l1CurrentEntity",label:"L1 Current",selector:{entity:{domain:"sensor"}}},{name:"l1PowerEntity",label:"L1 Power",selector:{entity:{domain:"sensor"}}},{name:"l1PowerInverted",label:"Invert L1 power sensor sign",selector:{boolean:{}}},{name:"l2CurrentEntity",label:"L2 Current",selector:{entity:{domain:"sensor"}}},{name:"l2PowerEntity",label:"L2 Power",selector:{entity:{domain:"sensor"}}},{name:"l2PowerInverted",label:"Invert L2 power sensor sign",selector:{boolean:{}}},{name:"l3CurrentEntity",label:"L3 Current",selector:{entity:{domain:"sensor"}}},{name:"l3PowerEntity",label:"L3 Power",selector:{entity:{domain:"sensor"}}},{name:"l3PowerInverted",label:"Invert L3 power sensor sign",selector:{boolean:{}}},{name:"mainFuse",label:"Main fuse",selector:{select:{mode:"dropdown",options:[{value:16,label:"16 A"},{value:20,label:"20 A"},{value:25,label:"25 A"}]}}},{name:"invertDirection",label:"Invert import/export direction",selector:{boolean:{}}}],this.generalSchema=[{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"}]}}}],this.batteryInfoSchema=[{name:"batterySocEntity",label:"Battery SOC",selector:{entity:{domain:"sensor"}}},{name:"solarInfoEntity",label:"Solar info",selector:{entity:{}}},{name:"gridInfoEntity",label:"Grid info",selector:{entity:{}}},{name:"houseInfoEntity",label:"House info",selector:{entity:{}}},{name:"batteryInfoEntity",label:"Battery info",selector:{entity:{}}}],this.energyPanelSchema=[{name:"show",label:"Show Energy Panel",selector:{boolean:{}}},{name:"importTodayEntity",label:"Import Today",selector:{entity:{domain:"sensor"}}},{name:"exportTodayEntity",label:"Export Today",selector:{entity:{domain:"sensor"}}}],this.economyPanelSchema=[{name:"show",label:"Show Economy Panel",selector:{boolean:{}}}]}setConfig(e){this._config={...ft,...e,phaseLoad:{...ft.phaseLoad,...e.phaseLoad},sidePanels:{energy:{...ft.sidePanels.energy,...e.sidePanels?.energy},economy:{...ft.sidePanels.economy,...e.sidePanels?.economy}}}}_phaseLoadValueChanged(e){this._config={...this._config,phaseLoad:{...this._config.phaseLoad,...e.detail.value}},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}getDeviceSchema(e){const t=[{name:"enabled",label:"Enabled",selector:{boolean:{}}},{name:"title",label:"Title",selector:{text:{}}},{name:"powerEntity",label:"Power",selector:{entity:{}}},{name:"optionalType",label:"Optional",selector:{select:{mode:"dropdown",options:[{value:"",label:"None"},{value:"soc",label:"SOC"},{value:"temperature",label:"Temperature"}]}}}];return"soc"!==e.optionalType&&"temperature"!==e.optionalType||t.push({name:"optionalEntity",label:"Optional entity",selector:{entity:{}}}),t.push({name:"statusEntity",label:"Status",selector:{entity:{}}}),e.statusEntity||t.push({name:"statusThreshold1",label:"Status threshold 1 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel1",label:"Status 1",selector:{text:{}}},{name:"statusThreshold2",label:"Status threshold 2 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel2",label:"Status 2",selector:{text:{}}},{name:"statusThreshold3",label:"Status threshold 3 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel3",label:"Status 3",selector:{text:{}}}),t.push({name:"icon",label:"Icon",selector:{select:{mode:"dropdown",options:[{value:"car",label:"Car"},{value:"spa",label:"Spa"},{value:"heatpump",label:"Heat Pump"},{value:"appliance",label:"Appliance"}]}}}),t}_valueChanged(e){this._config={...this._config,...e.detail.value},this._fireConfigChanged()}_energyPanelValueChanged(e){const t=e.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,energy:{...this._config.sidePanels.energy,...t}}},this._fireConfigChanged()}_economyPanelValueChanged(e){const t=e.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,economy:{...this._config.sidePanels.economy,...t}}},this._fireConfigChanged()}_getDeviceFormData(e,t){const i=this._deviceDrafts[e]??{},o={...t,...i};if(!this._deviceDrafts[e]){(t.statusRules??[]).forEach((e,t)=>{const i=t+1;i<=3&&(o[`statusThreshold${i}`]=e.threshold,o[`statusLabel${i}`]=e.label)})}return o}_updateDeviceDraft(e,t){const i={...this._deviceDrafts[e]??{},...t};return this._deviceDrafts={...this._deviceDrafts,[e]:i},i}_buildStatusRules(e){const t=[];for(let i=1;i<=3;i++){const o=Number(e[`statusThreshold${i}`]),r=String(e[`statusLabel${i}`]??"").trim();Number.isFinite(o)&&r&&t.push({threshold:o,label:r})}return t.sort((e,t)=>e.threshold-t.threshold)}_deviceValueChanged(e,t){const i=t.detail.value;this._updateDeviceDraft(e,i);const{statusThreshold1:o,statusLabel1:r,statusThreshold2:n,statusLabel2:a,statusThreshold3:s,statusLabel3:l,...d}=i,c=this._deviceDrafts[e]??{},h=[...this._config.devices];h[e]={...h[e],...d,statusRules:this._buildStatusRules(c)},this._config={...this._config,devices:h},this._fireConfigChanged()}_device1ValueChanged(e){this._deviceValueChanged(0,e)}_device2ValueChanged(e){this._deviceValueChanged(1,e)}_device3ValueChanged(e){this._deviceValueChanged(2,e)}_device4ValueChanged(e){this._deviceValueChanged(3,e)}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_isSolarBatteryEconomyDetected(){return!!this.hass&&ht(this.hass)}render(){const e=this._isSolarBatteryEconomyDetected();return W`
            <div class="integration-status">
                <div class="integration-status-title">
                    Solar Battery Economy
                </div>

                <div
                    class="integration-status-value
                        ${e?"detected":"not-detected"}"
                >
                    ${e?"✓ Detected":"⚠ Not detected"}
                </div>
            </div>

            <details class="editor-section" open>
                <summary>General</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${this.generalSchema}
                        .computeLabel=${e=>e.label}
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
                        .computeLabel=${e=>e.label}
                        @value-changed=${this._valueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Energy Panel</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.sidePanels.energy}
                        .schema=${this.energyPanelSchema}
                        .computeLabel=${e=>e.label}
                        @value-changed=${this._energyPanelValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Economy Panel</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.sidePanels.economy}
                        .schema=${this.economyPanelSchema}
                        .computeLabel=${e=>e.label}
                        @value-changed=${this._economyPanelValueChanged}
                    ></ha-form>
                </div>
            </details>

            <details class="editor-section">
                <summary>Phase Load (optional)</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.phaseLoad}
                        .schema=${this.phaseLoadSchema}
                        .computeLabel=${e=>e.label}
                        @value-changed=${this._phaseLoadValueChanged}
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
                        .computeLabel=${e=>e.label}
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
                        .computeLabel=${e=>e.label}
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
                        .computeLabel=${e=>e.label}
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
                        .computeLabel=${e=>e.label}
                        @value-changed=${this._device4ValueChanged}
                    ></ha-form>
                </div>
            </details>
        `}static{this.styles=a`
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
    `}};e([ye({attribute:!1})],mt.prototype,"hass",void 0),e([ge()],mt.prototype,"_config",void 0),e([ge()],mt.prototype,"_deviceDrafts",void 0),mt=e([he("solar-battery-economy-flow-card-editor")],mt);let bt=class extends de{constructor(){super(...arguments),this.activeLayout=fe,this.layoutType="desktop",this.sceneScale=1,this.layoutReady=!1,this.livePowerIssue="unavailable",this.livePowerLookupStarted=!1,this.livePowerSubscriptionStarted=!1,this.livePowerLifecycle=0}static{this.styles=Xe}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return ft}connectedCallback(){super.connectedCallback(),this.requestUpdate(),this.resizeObserver=new ResizeObserver(e=>{const t=e[0].contentRect.width,i=e[0].contentRect.height;if(t<10||i<10)return;this.sceneScale=1;const o=function(e){const t="mobile"===e.layout?me:fe,i=t.sceneWidth,o=t.sceneHeight,r=e.width/i,n=e.height/o;return{layout:t,scale:Math.min(r,n),offsetX:0,offsetY:0}}({layout:this.layoutType,width:t,height:i});this.activeLayout=o.layout,this.sceneScale=o.scale,this.layoutReady=!0})}disconnectedCallback(){this.livePowerLifecycle+=1,this.livePowerLookupStarted=!1,this.livePowerSubscriptionStarted=!1;const e=this.livePowerSubscription;this.livePowerSubscription=void 0,e&&e().catch(()=>{}),this.resizeObserver?.disconnect(),super.disconnectedCallback()}updated(){!this.livePowerLookupStarted&&this.isConnected&&"function"==typeof this.hass?.callWS&&(this.livePowerLookupStarted=!0,this.initializeLivePowerSubscription(this.hass,this.livePowerLifecycle))}async initializeLivePowerSubscription(e,t){let i;try{i=await e.callWS({type:"config_entries/get",domain:"solar_battery_economy"})}catch{return this.livePowerIssue="unavailable",void this.requestUpdate()}if(t!==this.livePowerLifecycle||!this.isConnected||!Array.isArray(i)||1!==i.length||"loaded"!==i[0]?.state||"string"!=typeof i[0]?.entry_id||!i[0].entry_id)return this.livePowerIssue="unavailable",void this.requestUpdate();if(this.livePowerEntryId=i[0].entry_id,!this.livePowerSubscriptionStarted&&"function"==typeof e.connection?.subscribeMessage){this.livePowerSubscriptionStarted=!0;try{const i=await e.connection.subscribeMessage(e=>{const t=function(e){const t=yt(e),i=yt(t?.flows),o=yt(t?.aggregates);if(!i||!o)return{issue:"missing"};const r={solar_house:gt(i,"solar_house"),solar_battery:gt(i,"solar_battery"),solar_export:gt(i,"solar_export"),battery_house:gt(i,"battery_house"),battery_grid:gt(i,"battery_grid"),grid_house:gt(i,"grid_house"),grid_battery:gt(i,"grid_battery"),unknown_grid_export:gt(i,"unknown_grid_export")},n={solar_total:gt(o,"solar_total"),house_total:gt(o,"house_total"),battery_net:gt(o,"battery_net"),grid_net:gt(o,"grid_net")},a=[...Object.values(r),...Object.values(n)].find(e=>"issue"in e);if(a)return{issue:a.issue};const s=e=>{if("value"in e)return e.value;throw new Error("Unreachable Live Power value state")};return{snapshot:{unit:"string"==typeof t?.unit?t.unit:void 0,flows:{solar_house:s(r.solar_house),solar_battery:s(r.solar_battery),solar_export:s(r.solar_export),battery_house:s(r.battery_house),battery_grid:s(r.battery_grid),grid_house:s(r.grid_house),grid_battery:s(r.grid_battery),unknown_grid_export:s(r.unknown_grid_export)},aggregates:{solar_total:s(n.solar_total),house_total:s(n.house_total),battery_net:s(n.battery_net),grid_net:s(n.grid_net)}}}}(e);if(!t.snapshot)return this.livePowerSnapshot=void 0,this.livePowerIssue=t.issue,void this.requestUpdate();this.livePowerSnapshot=t.snapshot,this.livePowerIssue=void 0,this.requestUpdate()},{type:"solar_battery_economy/subscribe_live_power",config_entry_id:this.livePowerEntryId});if(t!==this.livePowerLifecycle||!this.isConnected)return void await i();this.livePowerSubscription=i}catch{this.livePowerSnapshot=void 0,this.livePowerIssue="unavailable",this.requestUpdate()}}}firstUpdated(){const e=this.renderRoot.querySelector(".card");this.resizeObserver?.observe(e)}setConfig(e){this.config=e;const t=e?.layout;this.layoutType="mobile"===t?"mobile":"desktop"}render(){if(!this.layoutReady)return W`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;const e=function(e,t){const i=t??{},o=i.sidePanels?.energy??{},r=i.sidePanels?.economy??{};return{layout:i.layout??ft.layout,batterySocEntity:i.batterySocEntity,solarInfoEntity:i.solarInfoEntity,gridInfoEntity:i.gridInfoEntity,houseInfoEntity:i.houseInfoEntity,batteryInfoEntity:i.batteryInfoEntity,phaseLoad:{mainFuse:i.phaseLoad?.mainFuse??ft.phaseLoad.mainFuse,invertDirection:i.phaseLoad?.invertDirection??ft.phaseLoad.invertDirection,l1CurrentEntity:i.phaseLoad?.l1CurrentEntity,l1PowerEntity:i.phaseLoad?.l1PowerEntity,l1PowerInverted:i.phaseLoad?.l1PowerInverted??ft.phaseLoad.l1PowerInverted,l2CurrentEntity:i.phaseLoad?.l2CurrentEntity,l2PowerEntity:i.phaseLoad?.l2PowerEntity,l2PowerInverted:i.phaseLoad?.l2PowerInverted??ft.phaseLoad.l2PowerInverted,l3CurrentEntity:i.phaseLoad?.l3CurrentEntity,l3PowerEntity:i.phaseLoad?.l3PowerEntity,l3PowerInverted:i.phaseLoad?.l3PowerInverted??ft.phaseLoad.l3PowerInverted},sidePanels:{energy:{show:o.show??ft.sidePanels.energy.show,importTodayEntity:o.importTodayEntity,exportTodayEntity:o.exportTodayEntity},economy:{show:r.show??ft.sidePanels.economy.show}},devices:i.devices??ft.devices}}(pt(this.hass),this.config),t=function(e,t,i){const o=t=>{if(!t)return 0;const i=e?.states?.[t]?.state,o=Number(i);return isNaN(o)?0:o},r=i?.flows;return{"solar-house":be("solar-house",r?.solar_house??0),"solar-battery":be("solar-battery",r?.solar_battery??0),"solar-export":be("solar-export",r?.solar_export??0),"battery-house":be("battery-house",r?.battery_house??0),"battery-grid":be("battery-grid",r?.battery_grid??0),"grid-house":be("grid-house",r?.grid_house??0),"grid-battery":be("grid-battery",r?.grid_battery??0),"house-spa":be("house-spa",o(t.devices[1]?.powerEntity)),"house-car":be("house-car",o(t.devices[0]?.powerEntity)),"house-heatpump":be("house-heatpump",o(t.devices[2]?.powerEntity)),"house-appliance":be("house-appliance",o(t.devices[3]?.powerEntity))}}(this.hass,e,this.livePowerSnapshot),i=ut(this.hass,e,this.livePowerSnapshot),o=(r=e.phaseLoad,Boolean(r?.l1CurrentEntity||r?.l1PowerEntity||r?.l2CurrentEntity||r?.l2PowerEntity||r?.l3CurrentEntity||r?.l3PowerEntity));var r;const n=o?function(e,t){const i=[{name:"L1",current:t?.l1CurrentEntity,power:t?.l1PowerEntity,powerInverted:t?.l1PowerInverted},{name:"L2",current:t?.l2CurrentEntity,power:t?.l2PowerEntity,powerInverted:t?.l2PowerInverted},{name:"L3",current:t?.l3CurrentEntity,power:t?.l3PowerEntity,powerInverted:t?.l3PowerInverted}],o=t?.mainFuse;return i.map(i=>{const r=xe(e,i.current,"current"),n=xe(e,i.power,"power"),a=null===n?null:n*(i.powerInverted?-1:1),s=null!==r&&Number.isFinite(o)&&o>0,l=s?Math.min(100,Math.round(Math.abs(r)/o*100)):null,d=s?Math.max(0,Math.min(16,Math.round(Math.abs(r)/o*16))):null,c=null===l?"missing":l>=100?"critical":l>=80?"warning":"normal";let h="missing";if(null!==a){const e=a>=0;h=(t?.invertDirection?!e:e)?"import":"export"}return{name:i.name,current:r,power:a,percent:l,activeSegments:d,direction:h,loadState:c}})}(this.hass,e.phaseLoad):[],a=function(e,t=!1){const i=3===e.length&&e.every(e=>null!==e.power);let o=null,r=null,n=null;if(i){const i=e.map(e=>e.power*(t?-1:1));o=i.reduce((e,t)=>e+t,0),r=i.reduce((e,t)=>e+Math.max(t,0),0),n=i.reduce((e,t)=>e+Math.max(-t,0),0)}const a=3===e.length&&e.every(e=>null!==e.percent);return{powerComplete:i,netPower:o,importPower:r,exportPower:n,loadComplete:a,mostLoadedPhase:a?e.reduce((e,t)=>t.percent>e.percent?{name:t.name,percent:t.percent}:e,{name:e[0].name,percent:e[0].percent}):null}}(n,e.phaseLoad?.invertDirection),s=this.activeLayout,l=function(e){const t=e?.states?.["sun.sun"];if(!t)return"day";const i=Number(t.attributes?.elevation??0);return"above_horizon"===t.state?i<8?"morning":i<20?"sunset":"day":i>-6?"bluehour":"night"}(this.hass),d=function(e){const t=e?.states?.["sun.sun"];if(!t)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const i=Number(t.attributes?.elevation??0),o=Number(t.attributes?.azimuth??180),r="above_horizon"===t.state,n=Math.max(0,Math.min(1,(o-90)/180));return{progress:n,aboveHorizon:r,left:100*n,top:Math.max(40,280-6*i),sunrise:new Date(t.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(t.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),c=$e(this.hass,l,this.layoutType);return W`
      <ha-card class="ha-wrapper">
        <div class="card ${this.layoutType} ${l}">
          ${this.livePowerIssue?W`<div class="live-power-status" role="status">Effektdata saknas</div>`:""}
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
              ${e.sidePanels.energy.show?function(e){const{x:t,y:i,panel:o,host:r,cardData:n}=e,a=n.gridIndependence,s=n.gridIndependenceEntity,l=n.solarSelfConsumptionRate,d=n.solarSelfConsumptionRateEntity,c=n.batteryUtilization,h=n.batteryUtilizationEntity;return W`
        <div
            class=${"side-panel side-panel-left"+(o.compact?" compact":"")}
            style=${tt({left:`${t}px`,top:`${i}px`,width:o.width?`${o.width}px`:void 0})}
        >
            <div class="side-title">
                Energy
            </div>
            <div class="panel-section">
                ${n.importTodayEntity?W`
                        <div
                            class="side-stat"
                            style="cursor:pointer;"
                            @click=${()=>Be(r,n.importTodayEntity)}
                        >
                            <div class="side-label">
                                Import today
                            </div>
                            <div class="side-value value-grid">
                                ${n.importToday} kWh
                            </div>
                        </div>
                    `:""}
                ${n.exportTodayEntity?W`
                        <div
                            class="side-stat"
                            style="cursor:pointer;"
                            @click=${()=>Be(r,n.exportTodayEntity)}
                        >
                            <div class="side-label">
                                Export today
                            </div>
                            <div class="side-value value-export">
                                ${n.exportToday} kWh
                            </div>
                        </div>
                    `:""}
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Be(r,s)}
                >
                    <div class="side-label">
                        Grid Independance
                    </div>
                    <div class="side-value value-independence">
                        ${a} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Be(r,d)}
                >
                    <div class="side-label">
                        Solar self consumption
                    </div>
                    <div class="side-value value-solar">
                        ${l} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Be(r,h)}
                >
                    <div class="side-label">
                        Battery utilization
                    </div>
                    <div class="side-value value-battery">
                        ${c} %
                    </div>
                </div>
            </div>
        </div>
    `}({x:s.panels.left.x,y:s.panels.left.y,panel:s.panels.left,host:this,cardData:i}):""}

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
                  top:${d.top}px;
                "
              ></div>
              <div class="scene-vignette"></div>
              ${Ge(d,s,i.solarPower)}
              <div
                class="flow-layer"
                style="
                  width:${s.sceneWidth}px;
                  height:${s.sceneHeight}px;
                "
              >
                ${function(e,t,i,o){const r=e.sceneWidth<1e3?Ne:Oe,n=e.sceneWidth<1e3?je:He,a=function(e){return{solar:e.solarAnchorBottom,solarLeft:e.solarAnchorLeft,solarRight:e.solarAnchorRight,solarBottom:e.solarAnchorBottom,solarBottomLeft:e.solarAnchorBottomLeft,solarBottomCenter:e.solarAnchorBottomCenter,solarBottomRight:e.solarAnchorBottomRight,gridLeft:e.gridAnchorLeft,gridRight:e.gridAnchorRight,gridUpperRight:e.gridAnchorUpperRight,gridLowerRight:e.gridAnchorLowerRight,gridTop:e.gridAnchorTop,gridBottom:e.gridAnchorBottom,batteryLeft:e.batteryAnchorLeft,batteryUpperLeft:e.batteryAnchorUpperLeft,batteryLowerLeft:e.batteryAnchorLowerLeft,batteryRight:e.batteryAnchorRight,batteryTop:e.batteryAnchorTop,batteryBottom:e.batteryAnchorBottom,houseLeft:e.houseAnchorLeft,houseRight:e.houseAnchorRight,houseTop:e.houseAnchorTop,houseBottom:e.houseAnchorBottom,houseBottomLeft:e.houseAnchorBottomLeft,houseBottomCenter:e.houseAnchorBottomCenter,houseBottomRight:e.houseAnchorBottomRight,houseTopLeft:e.houseAnchorTopLeft,houseTopCenter:e.houseAnchorTopCenter,houseTopRight:e.houseAnchorTopRight,spaLeft:e.spaAnchorLeft,spaRight:e.spaAnchorRight,spa:e.spaAnchorTop,heatpumpLeft:e.heatpumpAnchorLeft,heatpumpRight:e.heatpumpAnchorRight,heatpump:e.heatpumpAnchorTop,applianceLeft:e.applianceAnchorLeft,applianceRight:e.applianceAnchorRight,appliance:e.applianceAnchorTop,carLeft:e.carAnchorLeft,carRight:e.carAnchorRight,car:e.carAnchorTop,solarJunction:e.solarJunction}}(function(e){const t=t=>{const i=e.find(e=>e.id===t);return{...i,...i.anchorBounds??{}}},i=t("solar"),o=t("house"),r=t("battery"),n=t("grid"),a=t("spa"),s=t("heatpump"),l=t("appliance"),d=t("car");return{houseAnchorLeft:{x:o.x,y:o.y+o.height/2},houseAnchorRight:{x:o.x+o.width,y:o.y+o.height/2},houseAnchorTop:{x:o.x+o.width/2,y:o.y},houseAnchorTopLeft:{x:o.x+(o.width/2-10),y:o.y},houseAnchorTopCenter:{x:o.x+o.width/2,y:o.y},houseAnchorTopRight:{x:o.x+(o.width/2+10),y:o.y},houseAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomLeft:{x:o.x+(o.width/2-10),y:o.y+o.height},houseAnchorBottomCenter:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomRight:{x:o.x+(o.width/2+10),y:o.y+o.height},batteryAnchorLeft:{x:r.x,y:r.y+r.height/2},batteryAnchorUpperLeft:{x:r.x,y:r.y+r.height/2-10},batteryAnchorLowerLeft:{x:r.x,y:r.y+r.height/2+10},batteryAnchorRight:{x:r.x+r.width,y:r.y+r.height/2},batteryAnchorTop:{x:r.x+r.width/2,y:r.y},batteryAnchorBottom:{x:r.x+r.width/2,y:r.y+r.height},gridAnchorLeft:{x:n.x,y:n.y+n.height/2},gridAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},gridAnchorUpperRight:{x:n.x+n.width,y:n.y+(n.height/2-10)},gridAnchorLowerRight:{x:n.x+n.width,y:n.y+(n.height/2+10)},gridAnchorTop:{x:n.x+n.width/2,y:n.y},gridAnchorBottom:{x:n.x+n.width/2,y:n.y+n.height},solarAnchorLeft:{x:i.x,y:i.y+i.height/2},solarAnchorRight:{x:i.x+i.width,y:i.y+i.height/2},solarAnchorBottom:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomLeft:{x:i.x+(i.width/2-10),y:i.y+i.height},solarAnchorBottomCenter:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomRight:{x:i.x+(i.width/2+10),y:i.y+i.height},solarJunction:{x:i.x+i.width/2,y:i.y+i.height+55},spaAnchorLeft:{x:a.x,y:a.y+a.height/2},spaAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},spaAnchorTop:{x:a.x+a.width/2,y:a.y},heatpumpAnchorLeft:{x:s.x,y:s.y+s.height/2},heatpumpAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},heatpumpAnchorTop:{x:s.x+s.width/2,y:s.y},applianceAnchorLeft:{x:l.x,y:l.y+l.height/2},applianceAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},applianceAnchorTop:{x:l.x+l.width/2,y:l.y},carAnchorLeft:{x:d.x,y:d.y+d.height/2},carAnchorRight:{x:d.x+d.width,y:d.y+d.height/2},carAnchorTop:{x:d.x+d.width/2,y:d.y}}}(r));return V`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${Me(a,t,n)}

    ${Ue(r,i,o)}
  </svg>
`}(s,t,i,this)}
              </div>
              ${o?rt(n,a):""}
            </div>
          </div>
        </div>
      </ha-card>
    `}};e([ye({attribute:!1})],bt.prototype,"hass",void 0),e([ye({attribute:!1})],bt.prototype,"config",void 0),e([ge()],bt.prototype,"activeLayout",void 0),e([ge()],bt.prototype,"layoutType",void 0),e([ge()],bt.prototype,"sceneScale",void 0),e([ge()],bt.prototype,"layoutReady",void 0),e([ge()],bt.prototype,"livePowerIssue",void 0),bt=e([he("solar-battery-economy-flow-card")],bt);export{bt as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
