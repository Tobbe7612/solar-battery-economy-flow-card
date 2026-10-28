function e(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,y=g.trustedTypes,m=y?y.emptyScript:"",f=g.reactiveElementPolyfillSupport,x=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const n=r.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const n=this.constructor;if(!1===o&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??v)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[x("elementProperties")]=new Map,$[x("finalized")]=new Map,f?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,A=e=>e,S=_.trustedTypes,k=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,F="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+C,E=`<${L}>`,I=document,M=()=>I.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,P="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,O=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,N=/"/g,H=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),j=W(1),q=W(2),V=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Q=new WeakMap,K=I.createTreeWalker(I,129);function X(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=T;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===T?"!--"===l[1]?a=z:void 0!==l[1]?a=D:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=O):void 0!==l[3]&&(a=O):a===O?">"===l[0]?(a=r??T,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?O:'"'===l[3]?N:U):a===N||a===U?a=O:a===z||a===D?a=T:(a=O,r=void 0);const h=a===O&&e[t+1].startsWith("/>")?" ":"";n+=a===T?i+E:d>=0?(o.push(s),i.slice(0,d)+F+i.slice(d)+C+h):i+C+(-2===d?t:h)}return[X(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,s=this.parts,[l,d]=Y(e,t);if(this.el=J.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(F)){const t=d[n++],i=o.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?oe:"?"===a[1]?re:"@"===a[1]?ne:ie}),o.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(H.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],M()),K.nextNode(),s.push({type:2,index:++r});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===L)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)s.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,o){if(t===V)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=B(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=Z(e,r._$AS(e,t.values),r,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??I).importNode(t,!0);K.currentNode=o;let r=K.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new te(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new ae(r,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(r=K.nextNode(),n++)}return K.currentNode=I,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),B(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new J(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new te(this.O(M()),this.O(M()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=Z(this,e,t,0),n=!B(e)||e!==this._$AH&&e!==V,n&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=Z(this,o[i+a],t,a),s===V&&(s=this._$AH[a]),n||=!B(s)||s!==this._$AH[a],s===G?e=G:e!==G&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class re extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ne extends ie{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??G)===V)return;const i=this._$AH,o=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==G&&(i===G||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const se=_.litHtmlPolyfillSupport;se?.(J,te),(_.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new te(t.insertBefore(M(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ue={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},pe=(e=ue,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(e){return ge({...e,state:!0,attribute:!1})}const me={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16}},fe={sceneWidth:430,sceneHeight:790,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10}};function xe(e){return null!==e&&"object"==typeof e?e:void 0}function be(e,t){if(e)return t?.consumers.get(e)?.power_entity??void 0}function ve(e,t){if(e)return t?.consumers.get(e)?.name}function we(e,t){if(!e.consumerId)return{value:null,quality:"not_configured"};const i=t?.consumers.get(e.consumerId);if(!i)return{value:null,quality:"missing_consumer"};const o=(r=e.consumerId,n=t,r?n?.consumers.get(r)?.power:void 0);var r,n;const a="valid"===o?.quality&&"W"===o.unit&&"number"==typeof o.value&&Number.isFinite(o.value),s=a?"valid":"valid"===o?.quality?"W"===o.unit?"invalid":"invalid_unit":"invalid_unit"===o?.quality?"invalid_unit":"missing"===o?.quality||"unavailable"===o?.quality?o.quality:"invalid";return{value:a?o.value:null,quality:s,entity:be(e.consumerId,t)}}const $e=[0,7],_e=[1,2,3,4,5,6],Ae={0:"house-car",1:"house-spa",2:"house-heatpump",3:"house-appliance"};function Se(e){return Ae[e]??(7===e?"house-car-2":`house-consumer-slot-${e+1}`)}function ke(e,t){const i="number"==typeof t?"valid":t.quality,o="number"==typeof t?t:t.value??0;return{id:e,power:o,active:"valid"===i&&o>1,intensity:Math.min(1,o/5e3),quality:i}}function Fe(e){return Number(e?.attributes?.cloud_coverage??0)}function Ce(e){return e>40}function Le(e,t,i){const o=function(e){const t=e?.states;if(t){if(t["weather.smhi_weather"])return t["weather.smhi_weather"];for(const e of Object.keys(t))if(e.startsWith("weather."))return t[e]}}(e),r=function(e){switch(e?.state??""){case"rainy":case"pouring":case"lightning-rainy":return"rain";case"cloudy":case"exceptional":return"cloudy";default:return Ce(Fe(e))?"cloudy":"clear"}}(o),n=function(e){return"mobile"===e?"landscape":"villa"}(i),a=function(e,t,i){if("rain"===t)return{folder:"weather",filename:`${i}_rain.webp`};switch(e){case"night":return{folder:"night",filename:"cloudy"===t?`${i}_night_cloudy.webp`:`${i}_night_clear.webp`};case"bluehour":return{folder:"evening",filename:`${i}_bluehour.webp`};case"sunset":return{folder:"evening",filename:`${i}_evening.webp`};default:return{folder:"day",filename:"cloudy"===t?`${i}_day_cloudy.webp`:`${i}_day_clear.webp`}}}(t,r,n);return s=a.folder,l=a.filename,`/hacsfiles/solar-battery-economy-flow-card/assets/backgrounds/${s}/${l}`;var s,l}function Ee(e){return e.waypoints&&e.waypoints.length>0?function(e,t=20){if(e.length<2)return"";let i=`M ${e[0].x} ${e[0].y}`;for(let o=1;o<e.length-1;o++){const r=e[o-1],n=e[o],a=e[o+1],s=n.x-r.x,l=n.y-r.y,d=a.x-n.x,c=a.y-n.y,h=n.x-Math.sign(s)*t,u=n.y-Math.sign(l)*t,p=n.x+Math.sign(d)*t,g=n.y+Math.sign(c)*t;i+=`\n      L ${h} ${u}\n      Q ${n.x} ${n.y}\n        ${p} ${g}\n    `}const o=e[e.length-1];return i+=`\n    L ${o.x} ${o.y}\n  `,i}([e.start,...e.waypoints,e.end],e.radius??38):(t=e.start.x,i=e.start.y,o=e.end.x,r=e.end.y,`\n    M ${t} ${i}\n    L ${o} ${r}\n  `);var t,i,o,r}function Ie(e){const t=Math.abs(e);return t<300?{particleCount:4,duration:6,lineOpacity:.1,lineWidth:2,sparkInterval:9}:t<800?{particleCount:6,duration:5.2,lineOpacity:.14,lineWidth:2.3,sparkInterval:7}:t<1500?{particleCount:8,duration:4.4,lineOpacity:.18,lineWidth:2.6,sparkInterval:6}:t<3e3?{particleCount:10,duration:3.7,lineOpacity:.22,lineWidth:2.9,sparkInterval:5}:t<5e3?{particleCount:12,duration:3,lineOpacity:.26,lineWidth:3.2,sparkInterval:4}:{particleCount:14,duration:2.2,lineOpacity:.3,lineWidth:3.5,sparkInterval:3}}function Me(e,t){const i=Math.abs(e);return i<=1?{active:!1,color:t,opacity:0,blur:0}:i<300?{active:!0,color:t,opacity:.03,blur:8}:i<800?{active:!0,color:t,opacity:.045,blur:10}:i<1500?{active:!0,color:t,opacity:.06,blur:12}:i<3e3?{active:!0,color:t,opacity:.08,blur:14}:i<5e3?{active:!0,color:t,opacity:.1,blur:16}:{active:!0,color:t,opacity:.12,blur:18}}const Be=3.5;function Re(e){return e.waypoints&&e.waypoints.length>0?[e.start,...e.waypoints,e.end]:[e.start,e.end]}function Pe(e){const t=43758.5453*Math.sin(12.9898*e);return t-Math.floor(t)}function Te(e){let t=0;for(let i=0;i<e.length;i++)t=(31*t+e.charCodeAt(i))%1e5;return t}function ze(e,t,i,o,r){const n=t+53.1*e,a=Pe(n+4.3)*r,s=.85+.3*Pe(n+8.9),l=.8+.5*Pe(n+13.1),d=function(e,t){let i=`M ${e[0].x} ${e[0].y}`;for(let o=0;o<e.length-1;o++){const r=e[o],n=e[o+1],a=n.x-r.x,s=-(n.y-r.y),l=a,d=Math.max(1,Math.hypot(s,l)),c=14*(Pe(t+31.7*o)-.5);i+=` Q ${(r.x+n.x)/2+s/d*c} ${(r.y+n.y)/2+l/d*c} ${n.x} ${n.y}`}return i}(i,n),c=r*s,h=2*l;return q`
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
    `}function De(e,t){return q`
        ${Array.from({length:2}).map((i,o)=>function(e,t,i){const o=Re(e),r=Math.floor(Date.now()/(1e3*t.sparkInterval)),n=Te(e.id)+41.7*i+97.3*r,a=o.length-1,s=Math.min(a-1,Math.floor(Pe(n)*a)),l=o[s],d=o[s+1],c=.2+.6*Pe(n+3.7),h=l.x+(d.x-l.x)*c,u=l.y+(d.y-l.y)*c,p=180*Math.atan2(d.y-l.y,d.x-l.x)/Math.PI,g=Pe(n+9.1)*t.sparkInterval;return q`
        <g transform="translate(${h}, ${u})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${t.sparkInterval}s"
                begin="-${g}s"
                repeatCount="indefinite"
            />
            ${function(e,t,i,o){return q`
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
    `}(0,0,p,e.color)}
        </g>
    `}(e,t,o))}
    `}function Oe(e,t=!0){if(t&&(!e.active||Math.abs(e.power)<1))return q``;const i=Ee(e);if(!t)return q`
            <g class="energy-edge energy-edge-static" aria-hidden="true">
                <path
                    class="energy-edge-line"
                    d="${i}"
                    fill="none"
                    stroke="${e.color}"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    opacity="0.28"
                />
            </g>
        `;const o=(r=e.power,{flow:Ie(r)}).flow;var r;return q`

        <g class="energy-edge">

            <path
                class="energy-edge-line"
                d="${i}"
                fill="none"
                stroke="${e.color}"
                stroke-width="${o.lineWidth}"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="
                    --line-opacity-min: ${.6*o.lineOpacity};
                    --line-opacity-max: ${o.lineOpacity};
                "
            />

            ${function(e,t){const i=Re(e),o=Te(e.id);return q`
        ${Array.from({length:t.particleCount}).map((r,n)=>ze(n,o,i,e.color,t.duration))}
    `}(e,o)}

            ${De(e,o)}

        </g>

    `}function Ue(e,t,i,o=!0){const r=function(e,t,i){return i.map(i=>{const o=t[i.liveFlow];return{id:i.id,start:i.getStart(e),end:i.getEnd(e),waypoints:i.getWaypoints?i.getWaypoints(e):[],power:o?.power??0,active:o?.active??!1,color:i.color,radius:i.radius}})}(e,t,i);return q`

        ${q`

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
            ${r.map(e=>Oe(o?e:{...e,active:!0},o))}
        </g>
    `}function Ne(e,t,i,o,r,n){switch(e){case"solar":return function(e,t,i){return q`
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
    `}(t,i,r);case"house":return function(e,t,i){return q`
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
    `}(t,i,r);case"grid":return function(e,t,i){return q`

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

    `}(t,i,r);case"battery":{const e=Math.max(0,Math.min(100,n??0));return q`
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
            `}case"car":return function(e,t,i){return q`

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

    `}(t,i,r);case"spa":return function(e,t,i){return q`

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

    `}(t,i,r);case"heatpump":return function(e,t,i){return q`

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

    `}(t,i,r);case"appliance":return function(e,t,i){return q`

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

    `}(t,i,r);default:return q`
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
            `}}function He(e,t,i,o=9){const r=function(e,t,i,o=9){return e?Math.min(t,Math.max(o,i/(.56*e.length))):t}(e,t,i,o);if(e.length*r*.56<=i)return{text:e,fontSize:r};const n=Math.max(1,Math.floor(i/(.56*o))-1);return{text:`${e.slice(0,n)}…`,fontSize:o}}function We(e,t,i,o=!0){const r=e.width<=155,n=r?.6:1,a=r?.65:1,s=r?22:34,l=r?30:49,d=17*n,c=(r?25:26)*n,h=(r?18:19)*n,u=14*n,p=r?50:78,g=e.width/2,y=p+(r?6:10),m=Math.max(20,e.width-y-12),f=Math.max(20,e.width-16),x=(e,t,i)=>e?He(e,t,i,r?7:9):{text:"",fontSize:t},b=x(e.title,d,e.width-y-12),v=x(t.line1,c,m),w=x(t.line2,h,m),$=x(t.line3,u,f),_=28*n,A=(r?56:59)*n,S=(r?78:82)*n,k=(r?100:105)*n,F=(C=o?t.power:0,L=t.color??e.accentColor??"#FFFFFF",{glow:Me(C,L),pulse:{active:Math.abs(C)>1,scale:1.015,duration:3.2}});var C,L;const E=e.width/2,I=e.height/2;return q`

        <g
            class="energy-label"
            transform="translate(${e.x}, ${e.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${()=>{var e,o;t.entityId&&(e=i,o=t.entityId,e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:o}})))}}
        >

            ${F.glow.active?q`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${e.width+16}"
                        height="${e.height+16}"
                        rx="26"
                        ry="26"
                        fill="${F.glow.color}"
                        style="
                            filter: blur(${F.glow.blur}px);
                            --glow-opacity-min: ${.5*F.glow.opacity};
                            --glow-opacity-max: ${F.glow.opacity};
                        "
                    />
                `:""}

            <g>

                <rect
                    class="energy-label-frame${F.pulse.active?" is-pulsing":""}"
                    filter="url(#label-shadow)"
                    width="${e.width}"
                    height="${e.height}"

                    rx="22"
                    ry="22"

                    fill="rgba(249,252,255,0.94)"

                    stroke="rgba(255,255,255,0.94)"

                    stroke-width="1.5"

                    style="transform-origin: ${E}px ${I}px;"
                />

                <text
                    class="energy-label-title"
                    x="${y}"
                    y="${_}"
                    style="font-size:${b.fontSize}px"
                    aria-label="${e.title}"
                    fill="#315474"
                    font-weight="700"
                >
                    ${b.text}
                </text>

                <g
                    transform="
                        translate(
                            ${s},
                            ${l}
                        )
                        scale(${a})
                    "
                >
                    ${Ne(t.icon??e.icon,0,0,22,F.glow.color,t.soc)}
                </g>

                ${t.line1?q`
                        ${t.line1Indicator?q`
                            <text
                                class="energy-label-indicator energy-label-indicator-line1"
                                x="${y-18*n}"
                                y="${A}"
                                fill="${t.line1IndicatorColor??"#315474"}"
                                aria-label="${t.line1IndicatorLabel??t.line1Indicator}"
                                style="font-size:${18*n}px"
                                font-weight="700"
                            >${t.line1Indicator}</text>
                        `:""}
                        <text
                            class="energy-label-line1"
                            x="${y}"
                            y="${A}"
                            style="font-size:${v.fontSize}px"
                            aria-label="${t.line1}"
                            fill="#153653"
                            font-weight="700"
                        >
                            ${v.text}
                        </text>
                    `:""}

                ${t.line2?q`
                        ${t.line2Indicator?q`
                            <text
                                class="energy-label-indicator energy-label-indicator-line2"
                                x="${y-18*n}"
                                y="${S}"
                                fill="${t.line2IndicatorColor??"#315474"}"
                                aria-label="${t.line2IndicatorLabel??t.line2Indicator}"
                                style="font-size:${16*n}px"
                                font-weight="700"
                            >${t.line2Indicator}</text>
                        `:""}
                        <text
                            class="energy-label-line2"
                            x="${y}"
                            y="${S}"
                            style="font-size:${w.fontSize}px"
                            aria-label="${t.line2}"
                            fill="#345570"
                            opacity="0.96"
                        >
                            ${w.text}
                        </text>
                    `:""}

                ${t.line3?q`
                        <text
                            class="energy-label-line3"
                            x="${g}"
                            y="${k}"
                            style="font-size:${$.fontSize}px"
                            aria-label="${t.line3}"
                            text-anchor="middle"
                            fill="#526d87"
                            opacity="0.92"
                        >
                            ${$.text}
                        </text>
                    `:""}

            </g>

        </g>

    `}function je(e){return Math.abs(e)<1e3?`${Math.round(e)} W`:`${(e/1e3).toFixed(1)} kW`}const qe=[450,860,1270],Ve=[15,156,297];function Ge(e,t){const i=e.some(e=>e.x>1e3),o=i?1920:430;return e.map(r=>{const n=r.deviceIndex;if(0===n||7===n){const a=.046875*o,s=Math.max(0,Math.min(o-r.width,o-r.width-a));if(!i&&7===n){const i=e.find(e=>"house"===e.id),n="consumers"===t?156:i.x,a="consumers"===t?435:i.y,l=n+i.width/2,d=s+r.width/2;return Qe(r,Math.max(0,Math.min(o-r.width,l-(d-l)-r.width/2)),"consumers"===t?a:e.find(e=>0===e.deviceIndex).y)}return Qe(r,s,0===n?i||"consumers"!==t?r.y:435:i?888:566)}if("consumers"!==t)return r;if("house"===r.id){if(!i)return Qe(r,156,435);const t=(t,i)=>{const o=e.filter(e=>void 0!==e.deviceIndex&&t.includes(e.deviceIndex)).map(e=>i+e.height);return o.reduce((e,t)=>e+t,0)/o.length},o=(t([1,2,3],255)+t([4,5,6],675))/2;return Qe(r,860-r.width/2,o-r.height/2)}if(void 0===n)return r;if(i){const e=n-1;return Qe(r,qe[e%3]-r.width/2,(e<3?255:675)+r.height/2)}const a=n-1;return Qe(r,Ve[a%3],a<3?220:650)})}function Qe(e,t,i){return{...e,x:t,y:i,anchorBounds:{x:t,y:i,width:e.width,height:e.height}}}function Ke(e,t,i,o="overview",r={},n=!0){const a=Ge(e,o);e.some(e=>e.x>1e3);const s=a.filter(e=>"consumers"===o?"house"===e.id||void 0!==e.deviceIndex:["solar","grid","house","battery"].includes(e.id)||0===e.deviceIndex||7===e.deviceIndex);return q`
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
            ${s.map(e=>{let o,a=e;if(void 0!==e.deviceIndex){const i=t.devices[e.deviceIndex];if(!i?.enabled)return"";o=function(e,t){return{line1:t?.line1??("valid"===e.powerQuality&&null!==e.power?je(e.power):"—"),line2:t?.line2??e.optionalValue??"",line3:t?.line3??e.status,entityId:e.consumerPowerEntity,power:e.power??0,...void 0!==e.soc?{soc:e.soc}:{},icon:e.icon,color:"valid"!==e.powerQuality?"#8A93A3":e.power>1?"#FF6B6B":"#8A93A3"}}(i,r[`device_${e.deviceIndex}`]??r[e.id]),a={...e,title:i.title}}else switch(e.id){case"battery":s=t,l=r.battery,o={line1:l?.line1??je(s.batteryPower),line2:l?.line2??(d=s.batterySoc,null!==d&&Number.isFinite(d)?`${Math.round(d)}%`:"—"),line3:l?.line3??s.batteryStatus,line1Indicator:l?.line1Indicator,line2Indicator:l?.line2Indicator,line1IndicatorLabel:l?.line1IndicatorLabel,line2IndicatorLabel:l?.line2IndicatorLabel,line1IndicatorColor:l?.line1IndicatorColor,line2IndicatorColor:l?.line2IndicatorColor,entityId:s.batteryEntity,power:s.batteryPower,soc:s.batterySoc,color:s.batteryPower<-1?"#61FF8B":s.batteryPower>1?"#FFB347":"#FFFFFF"};break;case"house":o=function(e,t){return{line1:t?.line1??je(e.housePower),line2:t?.line2??"",line3:t?.line3??e.houseStatus,entityId:e.houseEntity,power:e.housePower,color:e.housePower>1?"#FF6B6B":"#8A93A3"}}(t,r.house);break;case"grid":o=function(e,t){return{line1:t?.line1??je(e.gridPower),line2:t?.line2??"",line3:t?.line3??e.gridStatus,line1Indicator:t?.line1Indicator,line2Indicator:t?.line2Indicator,line1IndicatorLabel:t?.line1IndicatorLabel,line2IndicatorLabel:t?.line2IndicatorLabel,line1IndicatorColor:t?.line1IndicatorColor,line2IndicatorColor:t?.line2IndicatorColor,entityId:e.gridEntity,power:e.gridPower,color:e.gridPower>1?"#FF6B6B":e.gridPower<-1?"#61FF8B":"#4FC3F7"}}(t,r.grid);break;case"solar":o=function(e,t){return{line1:t?.line1??je(e.solarPower),line2:t?.line2??"",line3:t?.line3??e.solarStatus,entityId:e.solarEntity,power:e.solarPower,color:e.solarPower>1?"#FFD54A":"#8A93A3"}}(t,r.solar);break;default:o={line1:"1234 W",line2:"",line3:"",power:0}}var s,l,d;return We(a,o,i,n)})}
        </g>
    `}const Xe=[{id:"solar",title:"SOLAR",icon:"solar",x:880,y:300,width:200,height:120,anchorBounds:{x:880,y:300,width:200,height:120},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:470,y:440,width:200,height:120,anchorBounds:{x:470,y:440,width:200,height:120},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:880,y:600,width:200,height:120,anchorBounds:{x:880,y:600,width:200,height:120},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:1220,y:440,width:200,height:120,anchorBounds:{x:1220,y:440,width:200,height:120},accentColor:"#FFFFFF"},{id:"spa",deviceIndex:1,title:"SPA",icon:"spa",x:555,y:750,width:200,height:120,anchorBounds:{x:555,y:750,width:200,height:120},accentColor:"#FF8A65"},{id:"heatpump",deviceIndex:2,title:"HEATPUMP",icon:"heatpump",x:780,y:820,width:200,height:120,anchorBounds:{x:780,y:820,width:200,height:120},accentColor:"#4FC3F7"},{id:"appliance",deviceIndex:3,title:"APPLIANCE",icon:"appliance",x:990,y:820,width:200,height:120,anchorBounds:{x:990,y:820,width:200,height:120},accentColor:"#FFFFFF"},{id:"car",deviceIndex:0,title:"CAR",icon:"car",x:1220,y:750,width:200,height:120,anchorBounds:{x:1220,y:750,width:200,height:120},accentColor:"#81D4FA"},{id:"consumer-5",deviceIndex:4,title:"CONSUMER 4",icon:"appliance",x:145,y:565,width:200,height:120,anchorBounds:{x:145,y:565,width:200,height:120},accentColor:"#FFFFFF"},{id:"consumer-6",deviceIndex:5,title:"CONSUMER 5",icon:"appliance",x:455,y:565,width:200,height:120,anchorBounds:{x:455,y:565,width:200,height:120},accentColor:"#FFFFFF"},{id:"consumer-7",deviceIndex:6,title:"CONSUMER 6",icon:"appliance",x:765,y:565,width:200,height:120,anchorBounds:{x:765,y:565,width:200,height:120},accentColor:"#FFFFFF"},{id:"car-2",deviceIndex:7,title:"CAR 2",icon:"car",x:1630,y:888,width:200,height:120,anchorBounds:{x:1630,y:888,width:200,height:120},accentColor:"#81D4FA"}],Ye=[{id:"solar",title:"SOLAR",icon:"solar",x:156,y:130,width:118,height:76,anchorBounds:{x:156,y:130,width:118,height:76},accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:21,y:220,width:118,height:76,anchorBounds:{x:21,y:220,width:118,height:76},accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:156,y:300,width:118,height:76,anchorBounds:{x:156,y:300,width:118,height:76},accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:296,y:220,width:118,height:76,anchorBounds:{x:296,y:220,width:118,height:76},accentColor:"#FFFFFF"},{id:"spa",deviceIndex:1,title:"SPA",icon:"spa",x:18,y:460,width:118,height:76,anchorBounds:{x:18,y:460,width:118,height:76},accentColor:"#FF8A65"},{id:"heatpump",deviceIndex:2,title:"HEATPUMP",icon:"heatpump",x:18,y:380,width:118,height:76,anchorBounds:{x:18,y:380,width:118,height:76},accentColor:"#4FC3F7"},{id:"appliance",deviceIndex:3,title:"APPLIANCE",icon:"appliance",x:293,y:460,width:118,height:76,anchorBounds:{x:293,y:460,width:118,height:76},accentColor:"#FFFFFF"},{id:"car",deviceIndex:0,title:"CAR",icon:"car",x:296,y:380,width:118,height:76,anchorBounds:{x:296,y:380,width:118,height:76},accentColor:"#81D4FA"},{id:"consumer-5",deviceIndex:4,title:"CONSUMER 4",icon:"appliance",x:156,y:550,width:118,height:76,anchorBounds:{x:156,y:550,width:118,height:76},accentColor:"#FFFFFF"},{id:"consumer-6",deviceIndex:5,title:"CONSUMER 5",icon:"appliance",x:18,y:640,width:118,height:76,anchorBounds:{x:18,y:640,width:118,height:76},accentColor:"#FFFFFF"},{id:"consumer-7",deviceIndex:6,title:"CONSUMER 6",icon:"appliance",x:293,y:640,width:118,height:76,anchorBounds:{x:293,y:640,width:118,height:76},accentColor:"#FFFFFF"},{id:"car-2",deviceIndex:7,title:"CAR 2",icon:"car",x:296,y:550,width:118,height:76,anchorBounds:{x:296,y:550,width:118,height:76},accentColor:"#81D4FA"}],Je=[{id:"house-consumer-summary",liveFlow:"house-consumer-summary",getStart:e=>e.houseBottomCenter,getEnd:e=>e.consumerSummary,color:"#FF6B6B"},{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solar,getEnd:e=>e.houseTop,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A"},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A"},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLeft,getEnd:e=>e.houseTopRight,color:"#59D990"},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryUpperLeft,getEnd:e=>e.gridUpperRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B"},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridUpperRight,getEnd:e=>e.batteryUpperLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomLeft,getEnd:e=>e.spa,color:"#FF6B6B"},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomCenter,getEnd:e=>e.heatpump,color:"#FF6B6B"},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.appliance,color:"#FF6B6B"},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.car,color:"#FF6B6B"}],Ze=[{id:"house-consumer-summary",liveFlow:"house-consumer-summary",getStart:e=>e.houseBottomCenter,getEnd:e=>e.consumerSummary,color:"#FF6B6B",radius:30},{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solarBottomCenter,getEnd:e=>e.houseTopCenter,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A",radius:30},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A",radius:30},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLowerLeft,getEnd:e=>e.houseTopRight,color:"#59D990",radius:30},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryLeft,getEnd:e=>e.gridRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridLowerRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B",radius:30},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridRight,getEnd:e=>e.batteryLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomCenter,getEnd:e=>e.spaRight,color:"#FF6B6B",radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomLeft,getEnd:e=>e.heatpumpRight,color:"#FF6B6B",radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.applianceLeft,color:"#FF6B6B",radius:30},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.carLeft,color:"#FF6B6B",radius:30}];function et(){return Array.from({length:8},(e,t)=>{const i=0===t||7===t,o=Se(t),r=e=>e.deviceSlots[t][i?"left":t<=3?"bottom":"top"];return{id:o,liveFlow:o,getStart:e=>e.consumerHouseBranches[t],getEnd:r,getWaypoints:e=>{const o=e.consumerHouseBranches[t],n=r(e);if(i){const e=0===t?n.x-60:n.x-120;return[{x:o.x+40,y:o.y},{x:e,y:o.y},{x:e,y:n.y}]}const a=(o.y+n.y)/2;return[{x:o.x,y:a},{x:n.x,y:a}]},color:"#FF6B6B",radius:32}})}function tt(){return Array.from({length:8},(e,t)=>{const i=0===t||7===t,o=Se(t),r=e=>e.consumerHouseBranches[t],n=e=>{const o=e.deviceSlots[t];if(!i)return o[t<=3?"bottom":"top"];const n=(o.left.x+o.right.x)/2;return r(e).x<n?o.left:o.right};return{id:o,liveFlow:o,getStart:r,getEnd:n,getWaypoints:e=>{const o=r(e),a=n(e);if(i){if(Math.abs(o.y-a.y)<1)return[];const i=(e.deviceSlots[t].left.x+e.deviceSlots[t].right.x)/2,r=o.x<i?o.x+12:o.x-12;return[{x:r,y:o.y},{x:r,y:a.y}]}const s=(o.y+a.y)/2;return[{x:o.x,y:s},{x:a.x,y:s}]},color:"#FF6B6B",radius:20}})}const it={desktop:{left:800,top:815,width:360},mobile:{left:14,top:470,width:402}};function ot(e,t,i,o,r="overview",n={},a="live"){const s=e.sceneWidth<1e3?Ye:Xe,l=Ge(s,r),d=e.sceneWidth<1e3?Ze:Je,c=function(e){const t=t=>{const i=e.find(e=>e.id===t);return{...i,...i.anchorBounds??{}}},i=t("solar"),o=t("house"),r=t("battery"),n=t("grid"),a=t("spa"),s=t("heatpump"),l=t("appliance"),d=t("car"),c=e.find(e=>7===e.deviceIndex),h=o.width<155,u=o.x+o.width/2,p=void 0!==c&&c.x+c.width/2<u;return{consumerHouseBranches:{1:{x:o.x+.2*o.width,y:o.y},2:{x:o.x+.5*o.width,y:o.y},3:{x:o.x+.8*o.width,y:o.y},4:{x:o.x+.2*o.width,y:o.y+o.height},5:{x:o.x+.5*o.width,y:o.y+o.height},6:{x:o.x+.8*o.width,y:o.y+o.height},0:{x:o.x+o.width,y:o.y+o.height*(h?.5:.35)},7:{x:p?o.x:o.x+o.width,y:o.y+o.height*(h?.5:.8)}},deviceSlotAnchors:Object.fromEntries(e.filter(e=>void 0!==e.deviceIndex).map(e=>{const t={...e,...e.anchorBounds??{}};return[e.deviceIndex,{left:{x:t.x,y:t.y+t.height/2},right:{x:t.x+t.width,y:t.y+t.height/2},top:{x:t.x+t.width/2,y:t.y},bottom:{x:t.x+t.width/2,y:t.y+t.height}}]})),houseAnchorLeft:{x:o.x,y:o.y+o.height/2},houseAnchorRight:{x:o.x+o.width,y:o.y+o.height/2},houseAnchorTop:{x:o.x+o.width/2,y:o.y},houseAnchorTopLeft:{x:o.x+(o.width/2-10),y:o.y},houseAnchorTopCenter:{x:o.x+o.width/2,y:o.y},houseAnchorTopRight:{x:o.x+(o.width/2+10),y:o.y},houseAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomLeft:{x:o.x+(o.width/2-10),y:o.y+o.height},houseAnchorBottomCenter:{x:o.x+o.width/2,y:o.y+o.height},houseAnchorBottomRight:{x:o.x+(o.width/2+10),y:o.y+o.height},batteryAnchorLeft:{x:r.x,y:r.y+r.height/2},batteryAnchorUpperLeft:{x:r.x,y:r.y+r.height/2-10},batteryAnchorLowerLeft:{x:r.x,y:r.y+r.height/2+10},batteryAnchorRight:{x:r.x+r.width,y:r.y+r.height/2},batteryAnchorTop:{x:r.x+r.width/2,y:r.y},batteryAnchorBottom:{x:r.x+r.width/2,y:r.y+r.height},gridAnchorLeft:{x:n.x,y:n.y+n.height/2},gridAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},gridAnchorUpperRight:{x:n.x+n.width,y:n.y+(n.height/2-10)},gridAnchorLowerRight:{x:n.x+n.width,y:n.y+(n.height/2+10)},gridAnchorTop:{x:n.x+n.width/2,y:n.y},gridAnchorBottom:{x:n.x+n.width/2,y:n.y+n.height},solarAnchorLeft:{x:i.x,y:i.y+i.height/2},solarAnchorRight:{x:i.x+i.width,y:i.y+i.height/2},solarAnchorBottom:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomLeft:{x:i.x+(i.width/2-10),y:i.y+i.height},solarAnchorBottomCenter:{x:i.x+i.width/2,y:i.y+i.height},solarAnchorBottomRight:{x:i.x+(i.width/2+10),y:i.y+i.height},solarJunction:{x:i.x+i.width/2,y:i.y+i.height+55},spaAnchorLeft:{x:a.x,y:a.y+a.height/2},spaAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},spaAnchorTop:{x:a.x+a.width/2,y:a.y},heatpumpAnchorLeft:{x:s.x,y:s.y+s.height/2},heatpumpAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},heatpumpAnchorTop:{x:s.x+s.width/2,y:s.y},applianceAnchorLeft:{x:l.x,y:l.y+l.height/2},applianceAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},applianceAnchorTop:{x:l.x+l.width/2,y:l.y},carAnchorLeft:{x:d.x,y:d.y+d.height/2},carAnchorRight:{x:d.x+d.width,y:d.y+d.height/2},carAnchorTop:{x:d.x+d.width/2,y:d.y}}}(l),h=function(e){return{deviceSlots:e.deviceSlotAnchors,consumerHouseBranches:e.consumerHouseBranches,solar:e.solarAnchorBottom,solarLeft:e.solarAnchorLeft,solarRight:e.solarAnchorRight,solarBottom:e.solarAnchorBottom,solarBottomLeft:e.solarAnchorBottomLeft,solarBottomCenter:e.solarAnchorBottomCenter,solarBottomRight:e.solarAnchorBottomRight,gridLeft:e.gridAnchorLeft,gridRight:e.gridAnchorRight,gridUpperRight:e.gridAnchorUpperRight,gridLowerRight:e.gridAnchorLowerRight,gridTop:e.gridAnchorTop,gridBottom:e.gridAnchorBottom,batteryLeft:e.batteryAnchorLeft,batteryUpperLeft:e.batteryAnchorUpperLeft,batteryLowerLeft:e.batteryAnchorLowerLeft,batteryRight:e.batteryAnchorRight,batteryTop:e.batteryAnchorTop,batteryBottom:e.batteryAnchorBottom,houseLeft:e.houseAnchorLeft,houseRight:e.houseAnchorRight,houseTop:e.houseAnchorTop,houseBottom:e.houseAnchorBottom,houseBottomLeft:e.houseAnchorBottomLeft,houseBottomCenter:e.houseAnchorBottomCenter,houseBottomRight:e.houseAnchorBottomRight,houseTopLeft:e.houseAnchorTopLeft,houseTopCenter:e.houseAnchorTopCenter,houseTopRight:e.houseAnchorTopRight,consumerSummary:{x:980,y:750},spaLeft:e.spaAnchorLeft,spaRight:e.spaAnchorRight,spa:e.spaAnchorTop,heatpumpLeft:e.heatpumpAnchorLeft,heatpumpRight:e.heatpumpAnchorRight,heatpump:e.heatpumpAnchorTop,applianceLeft:e.applianceAnchorLeft,applianceRight:e.applianceAnchorRight,appliance:e.applianceAnchorTop,carLeft:e.carAnchorLeft,carRight:e.carAnchorRight,car:e.carAnchorTop,solarJunction:e.solarJunction}}(c);h.consumerSummary=function(e){const t=e<1e3?it.mobile:it.desktop;return{x:t.left+t.width/2,y:t.top}}(e.sceneWidth);const u=e.sceneWidth>=1e3&&"consumers"===r,p=e.sceneWidth<1e3&&"consumers"===r,g=new Set(["house-car","house-spa","house-heatpump","house-appliance"]),y=u?et():tt(),m=u||p?d.filter(e=>!g.has(e.id)&&!e.id.startsWith("solar-")):d,f=e.sceneWidth<1e3?tt().filter(e=>e.id===Se(7)):et().filter(e=>e.id===Se(7)),x=u||p?[...m,...y]:[...m,...f],b=new Map(Array.from({length:8},(e,t)=>[Se(t),t])),v=x.filter(e=>{if("overview"===r){const t=b.get(e.id);return void 0===t||7===t&&!0===i.devices[t]?.enabled}const t=b.get(e.id);return void 0!==t&&!0===i.devices[t]?.enabled});return q`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${"live"===a?Ue(h,t,v,!0):""}

    ${Ke(s,i,o,r,n,"live"===a)}
  </svg>
`}function rt(e,t,i){return i.particleCount<=0?q``:q`
        ${Array.from({length:i.particleCount}).map((o,r)=>function(e,t,i,o){const r=Pe(7.31*e)-.5,n=Pe(13.7*e+3)-.5,a=Pe(19.1*e+11)-.5,s=Pe(5.13*e+9)*o,l=.7+.6*Pe(2.9*e+17),d=.85+.3*Pe(3.7*e+23),c=i.x-t.x,h=-(i.y-t.y),u=c,p=Math.max(1,Math.hypot(h,u)),g=26*a,y=(t.x+i.x)/2+h/p*g,m=(t.y+i.y)/2+u/p*g,f=`M ${t.x+14*r} ${t.y+14*n} Q ${y} ${m} ${i.x} ${i.y}`,x=o*d;return q`
        <circle
            r="${1.4*l}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${x}s"
                begin="-${s}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.3 0 0.7 1"
                path="${f}"
            />
            <animate
                attributeName="opacity"
                values="0;0.55;0.55;0"
                keyTimes="0;0.15;0.7;1"
                dur="${x}s"
                begin="-${s}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(r,e,t,i.duration))}
    `}function nt(e,t){return t<=0?q``:q`
        ${Array.from({length:t}).map((t,i)=>function(e,t){const i=Pe(17.3*e+31)*Math.PI*2,o=14+10*Pe(23.9*e+5),r=2.2*Pe(8.1*e+11),n=1.6+.8*Pe(4.4*e+19),a=.7+.6*Pe(6.7*e+41),s=Math.cos(i)*o,l=Math.sin(i)*o,d=`M ${t.x} ${t.y} L ${t.x+s} ${t.y+l}`;return q`
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
    `}function at(e,t,i,o=!0){const{centerX:r,centerY:n,width:a,height:s,sunRadius:l}=t.solarArc,d={x:r-a/2,y:n+s},c={x:r,y:n-20},h={x:r+a/2,y:n+s},u=function(e,t,i,o){const r=1-e;return{x:r*r*t.x+2*r*e*i.x+e*e*o.x,y:r*r*t.y+2*r*e*i.y+e*e*o.y}}(e.progress,d,c,h),p=(t.sceneWidth<1e3?Ye:Xe).find(e=>"solar"===e.id),g={x:p.x+p.width/2,y:p.y},y=function(e){const t=Math.max(0,e);return t<=0?{particleCount:0,duration:Be}:t<500?{particleCount:4,duration:Be}:t<1500?{particleCount:8,duration:Be}:t<3e3?{particleCount:12,duration:Be}:{particleCount:15,duration:Be}}(i);return q`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${r-a/2}
            ${n+s}

          Q ${r}
            ${n-20}

            ${r+a/2}
            ${n+s}
        "
        class="solar-arc-path"
      />
      ${e.aboveHorizon?q`
              <circle
                  cx="${u.x}"
                  cy="${u.y}"
                  r="${l}"
                  class="solar-arc-sun"
              />
          `:q``}
      ${o?rt(u,g,y):q``}
      ${o?nt(u,y.particleCount):q``}
      <text
          x="${r-a/2}"
          y="${n+s+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${e.sunrise}
      </text>
      <text
          x="${r+a/2}"
          y="${n+s+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${e.sunset}
      </text>
    </svg>
  `}const st=a`
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

.energy-edge-static .energy-edge-line {
    animation: none;
}

`,lt=a`

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

`,dt=a`
 
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
 
`,ct=a`
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
    aspect-ratio: 430 / 790;
}
.view-toolbar { position: absolute; z-index: 24; top: 26px; right: 30px; display: flex; gap: 10px; pointer-events: auto; }
.view-choice { display: flex; gap: 3px; padding: 4px; border: 1px solid rgba(255,255,255,.78); border-radius: 14px; background: rgba(14,31,48,.74); box-shadow: 0 8px 24px rgba(0,0,0,.2); backdrop-filter: blur(14px); }
.view-choice button { border: 0; border-radius: 10px; padding: 9px 13px; color: #e8f3fa; background: transparent; font: inherit; font-size: 14px; font-weight: 600; line-height: 1.1; cursor: pointer; }
.view-choice button.selected { color: #183750; background: #f8fcff; box-shadow: 0 2px 8px rgba(0,0,0,.16); }
.consumer-summary { position: absolute; z-index: 19; left: 800px; top: 815px; width: 360px; box-sizing: border-box; display: grid; gap: 7px; padding: 20px 22px; border: 1px solid rgba(255,255,255,.86); border-radius: 20px; color: #173652; background: linear-gradient(145deg,rgba(249,252,255,.96),rgba(229,241,250,.9)); box-shadow: 0 12px 30px rgba(8,24,42,.24); backdrop-filter: blur(16px); }
.consumer-summary > span, .detail-eyebrow { color: #54738d; font-size: 12px; font-weight: 800; letter-spacing: .12em; }
.consumer-summary strong { font-size: 30px; line-height: 1.1; }
.consumer-summary small { color: #536d82; font-size: 12px; }
.consumer-summary .metric-warning { color: #946214; }
.compact-phase-panel { position: absolute; z-index: 19; left: 400px; top: 585px; width: 340px; box-sizing: border-box; padding: 13px 15px; border: 1px solid rgba(255,255,255,.86); border-radius: 18px; color: #173652; background: linear-gradient(145deg,rgba(249,252,255,.96),rgba(229,241,250,.9)); box-shadow: 0 12px 30px rgba(8,24,42,.24); backdrop-filter: blur(16px); }
.compact-phase-panel header { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; color:#315474; font-size:12px; }
.compact-phase-live { margin-right:auto; margin-left:6px; color:#71899a; font-size:9px; letter-spacing:.08em; }
.compact-phase-panel > div { display:grid; grid-template-columns:repeat(3,1fr); gap:4px; }
.compact-phase-panel section { display:grid; gap:3px; padding:7px 6px; border-radius:9px; background:rgba(255,255,255,.62); text-align:center; }
.compact-phase-panel section b { color:#315474; font-size:12px; }
.compact-phase-panel section span { font-size:11px; font-weight:650; white-space:nowrap; }
.compact-phase-panel section small { color:#607a90; font-size:9px; }
.compact-phase-panel button, .detail-back { border:0; border-radius:10px; padding:9px 12px; color:#fff; background:#214b6c; font:inherit; font-size:13px; font-weight:600; cursor:pointer; }
.compact-phase-panel button { width:100%; margin-top:9px; }
.phase-network-detail { position:absolute; z-index:22; inset:70px 38px 30px; overflow:auto; box-sizing:border-box; padding:30px 36px; border:1px solid rgba(255,255,255,.76); border-radius:25px; color:#edf7ff; background:linear-gradient(145deg,rgba(10,25,40,.94),rgba(18,44,65,.91)); box-shadow:0 22px 60px rgba(0,0,0,.38); backdrop-filter:blur(18px); pointer-events:auto; }
.detail-header { display:flex; justify-content:space-between; align-items:center; gap:20px; }
.detail-header h2 { margin:5px 0; font-size:26px; }
.detail-grid-card { display:grid; gap:12px; max-width:1100px; margin:24px auto 28px; padding:30px 36px; border:1px solid rgba(255,255,255,.2); border-radius:20px; background:rgba(255,255,255,.09); text-align:center; }
.detail-card-title, .detail-phase-card header { display:flex; justify-content:space-between; align-items:center; gap:12px; }
.detail-grid-card > strong { font-size:54px; line-height:1.1; }
.detail-grid-card > small, .detail-phase-values small { color:#a8c2d5; }
.detail-grid-status, .detail-phase-direction { font-size:13px; color:#c8dfed; }
.detail-grid-card.import { border-color:rgba(255,129,111,.65); }
.detail-grid-card.export { border-color:rgba(86,220,150,.65); }
.detail-grid-card.balance { border-color:rgba(115,196,235,.45); }
.detail-grid-status b { display:inline-grid; width:25px; height:25px; place-items:center; border-radius:50%; color:#fff; background:rgba(255,255,255,.15); font-size:18px; }
.detail-grid-card.import .detail-grid-status b { background:#a8473a; }
.detail-grid-card.export .detail-grid-status b { background:#267649; }
.detail-phase-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.detail-phase-card { min-width:0; padding:26px; border:1px solid rgba(255,255,255,.17); border-radius:17px; background:rgba(255,255,255,.075); }
.detail-phase-values { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:20px; }
.detail-phase-values > div { display:grid; gap:7px; }
.detail-phase-values strong { font-size:30px; }
.detail-phase-direction.import { color:#ff9b8b; }
.detail-phase-direction.export { color:#8ceab2; }
.detail-phase-direction.missing { color:#b6c2ca; }
.detail-phase-meter-label { display:flex; justify-content:space-between; gap:10px; margin-top:18px; color:#c7d9e5; font-size:12px; }
.detail-phase-meter-label strong { color:#f4f9fc; font-variant-numeric:tabular-nums; }
.detail-phase-meter { height:16px; margin-top:7px; overflow:hidden; border:1px solid rgba(255,255,255,.18); border-radius:99px; background:rgba(0,0,0,.24); }
.detail-phase-meter > span { display:block; height:100%; border-radius:inherit; background:#78dba0; transition:width .25s ease; }
.detail-phase-meter.import > span { background:linear-gradient(90deg,#f0bd65,#fa796e); }
.detail-phase-meter.export > span { background:linear-gradient(90deg,#45bb7d,#83e6ae); }
.detail-phase-meter.warning > span { background:#f0bd65; }
.detail-phase-meter.critical > span { background:#fa796e; }
.detail-phase-meter.missing { background:repeating-linear-gradient(135deg,rgba(255,255,255,.07) 0 5px,transparent 5px 10px),rgba(0,0,0,.22); }
.detail-meter-caption { display:block; margin-top:6px; color:#99b2c4; font-size:12px; }
.card.mobile .view-toolbar { top:12px; right:10px; left:10px; justify-content:center; gap:4px; }
.card.mobile .view-choice { padding:2px; }
.card.mobile .view-choice button { padding:6px 7px; font-size:10px; }
.card.mobile .consumer-summary { left:14px; top:470px; width:calc(100% - 28px); gap:5px; padding:10px 12px; }
.card.mobile .consumer-summary strong { font-size:28px; }
.card.mobile .compact-phase-panel { left:14px; top:590px; width:calc(100% - 28px); padding:7px 8px; }
.card.mobile .compact-phase-panel header { margin-bottom:5px; }
.card.mobile .compact-phase-panel section { gap:2px; padding:5px 4px; }
.card.mobile .compact-phase-panel button { margin-top:6px; padding:7px 10px; }
.card.mobile .phase-network-detail { top:36px; right:6px; bottom:8px; left:6px; max-height:calc(100% - 44px); overflow-x:hidden; overflow-y:auto; overscroll-behavior:contain; padding:6px; }
.card.mobile .detail-header { position:sticky; top:-6px; z-index:2; padding:3px 0; background:linear-gradient(145deg,rgba(10,25,40,.98),rgba(18,44,65,.98)); }
.card.mobile .detail-header { gap:8px; }
.card.mobile .detail-header h2 { font-size:20px; }
.card.mobile .detail-grid-card { gap:5px; margin:8px auto 8px; padding:9px 10px; }
.card.mobile .detail-grid-card > strong { font-size:28px; }
.card.mobile .detail-phase-grid { grid-template-columns:minmax(0,1fr); gap:5px; }
.card.mobile .detail-phase-card { padding:8px 10px; }
.card.mobile .detail-phase-values { gap:8px; margin-top:8px; }
.card.mobile .detail-phase-values strong { font-size:24px; }
.card.mobile .detail-phase-meter-label { margin-top:8px; }
${st}
${lt}
${dt}
`;function ht(e,t,i,o,r=null){const n=i?.flows,a=i?.aggregates,s=n?.solar_house??0,l=n?.battery_house??0,d=n?.grid_house??0,c=a?.solar_total??0,h=a?.house_total??0,u=a?.battery_net??0,p=a?.grid_net??0,g="above_horizon"===function(e,t,i=""){const o=e?.states?.[t]?.state;return o??i}(e,"sun.sun")?"Over horizon":"Under horizon",y=u>1?"Charging":u<-1?"Discharging":"Standby",m=[];s>1&&m.push("Solar"),l>1&&m.push("Battery"),d>1&&m.push("Grid");const f=m.length>0?m.join(" + "):"No load",x=p>1?"Importing":p<-1?"Exporting":"Balance",b=r,v=t?.solarInfoEntity??"sensor.solaredge_ac_power",w=t?.gridInfoEntity??"sensor.effekt_alla_faser",$=t?.houseInfoEntity??"sensor.forbrukning_nu_ny",_=t?.batteryInfoEntity??"sensor.saj_realtime_battery_power";return{devices:(t?.devices??[]).map((e,t)=>function(e,t,i){const o=we(e,i),r=o.value,n=e.consumerId?i?.consumers.get(e.consumerId):void 0;let a,s;if(e.consumerId&&"soc"===e.optionalType){const e=n?.soc;s="valid"===e?.quality?e.value??void 0:void 0,a=void 0===s?"—":`${Math.round(s)} ${e?.unit??"%"}`}if(e.consumerId&&"temperature"===e.optionalType){const e=n?.temperature;a="valid"===e?.quality&&null!==e.value?`${Math.round(e.value)} ${e.unit??""}`.trim():"—"}const l=n?.status,d=l?.level,c=n?"valid"!==l?.quality?"Status unavailable":null!=d?d<=0?"Standby":e.statusLabels?.[d-1]??`Level ${d}`:null!==l.value&&void 0!==l.value?String(l.value):"Status unavailable":e.consumerId?"SBE consumer unavailable":"Select SBE consumer";return{enabled:e.enabled,consumerId:e.consumerId,title:e.title?.trim()||ve(e.consumerId,i)||`Device ${t+1}`,power:r,powerQuality:o.quality,consumerPowerEntity:o.entity,optionalType:e.optionalType,optionalValue:a,soc:s,status:c,icon:e.icon}}(e,t,o)),solarPower:c,solarStatus:g,solarEntity:v,batterySoc:b,batteryPower:u,batteryStatus:y,batteryEntity:_,housePower:h,houseStatus:f,houseEntity:$,gridPower:p,gridStatus:x,gridEntity:w}}function ut(e){return null!==e&&"object"==typeof e?e:void 0}function pt(e,t){if(!e||!(t in e))return{issue:"missing"};const i=ut(e[t]);if(!i||!("value"in i))return{issue:"missing"};const o=i.value;if(null===o)return{issue:"null"};if("number"!=typeof o&&"string"!=typeof o)return{issue:"invalid"};if("string"==typeof o&&""===o.trim())return{issue:"invalid"};const r=Number(o);return Number.isFinite(r)?{value:r}:{issue:"invalid"}}const gt=e=>null!==e&&"object"==typeof e?e:void 0,yt=e=>"number"==typeof e&&Number.isFinite(e)?e:null;function mt(e){const t=gt(e);if(1!==t?.contract_version)return;const i=function(e){const t=ut(e),i=ut(t?.flows),o=ut(t?.aggregates);if(!i||!o)return{issue:"missing"};const r={solar_house:pt(i,"solar_house"),solar_battery:pt(i,"solar_battery"),solar_export:pt(i,"solar_export"),battery_house:pt(i,"battery_house"),battery_grid:pt(i,"battery_grid"),grid_house:pt(i,"grid_house"),grid_battery:pt(i,"grid_battery"),unknown_grid_export:pt(i,"unknown_grid_export")},n={solar_total:pt(o,"solar_total"),house_total:pt(o,"house_total"),battery_net:pt(o,"battery_net"),grid_net:pt(o,"grid_net")},a=[...Object.values(r),...Object.values(n)].find(e=>"issue"in e);if(a)return{issue:a.issue};const s=e=>{if("value"in e)return e.value;throw new Error("Unreachable Live Power value state")};return{snapshot:{unit:"string"==typeof t?.unit?t.unit:void 0,flows:{solar_house:s(r.solar_house),solar_battery:s(r.solar_battery),solar_export:s(r.solar_export),battery_house:s(r.battery_house),battery_grid:s(r.battery_grid),grid_house:s(r.grid_house),grid_battery:s(r.grid_battery),unknown_grid_export:s(r.unknown_grid_export)},aggregates:{solar_total:s(n.solar_total),house_total:s(n.house_total),battery_net:s(n.battery_net),grid_net:s(n.grid_net)}}}}(t.live_power),o=function(e){const t=xe(e);if(1!==t?.contract_version||!Array.isArray(t.consumers))return;const i=new Map;for(const e of t.consumers){const t=xe(e),o=xe(t?.power),r=xe(t?.status),n=xe(t?.soc),a=xe(t?.temperature);if("string"!=typeof t?.consumer_id||!t.consumer_id||"string"!=typeof t.name||!o||"string"!=typeof o.quality)continue;const s="number"==typeof o.value&&Number.isFinite(o.value)?o.value:null;i.set(t.consumer_id,{consumer_id:t.consumer_id,name:t.name,energy_entity:"string"==typeof t.energy_entity?t.energy_entity:null,power_entity:"string"==typeof t.power_entity?t.power_entity:null,power:{value:s,unit:"string"==typeof o.unit?o.unit:null,quality:o.quality},status:{entity_id:"string"==typeof r?.entity_id?r.entity_id:null,value:r?.value,quality:"string"==typeof r?.quality?r.quality:"missing",level:"number"==typeof r?.level&&Number.isFinite(r.level)?r.level:null},soc:{entity_id:"string"==typeof n?.entity_id?n.entity_id:null,value:"number"==typeof n?.value&&Number.isFinite(n.value)?n.value:null,unit:"string"==typeof n?.unit?n.unit:null,quality:"string"==typeof n?.quality?n.quality:"missing"},temperature:{entity_id:"string"==typeof a?.entity_id?a.entity_id:null,value:"number"==typeof a?.value&&Number.isFinite(a.value)?a.value:null,unit:"string"==typeof a?.unit?a.unit:null,quality:"string"==typeof a?.quality?a.quality:"missing"}})}return{contract_version:1,consumers:i}}(t.consumers),r=gt(t.battery_soc),n=gt(t.phase_load),a=gt(n?.summary);if(!(i.snapshot&&o&&1===n?.contract_version&&Array.isArray(n.phases)&&a))return;const s=[];for(const e of n.phases){const t=gt(e);if("L1"!==t?.name&&"L2"!==t?.name&&"L3"!==t?.name)continue;const i="import"===t.direction||"export"===t.direction?t.direction:"missing",o="normal"===t.load_state||"warning"===t.load_state||"critical"===t.load_state?t.load_state:"missing";s.push({name:t.name,currentEntity:"string"==typeof t.current_entity?t.current_entity:null,powerEntity:"string"==typeof t.power_entity?t.power_entity:null,current:yt(t.current),power:yt(t.power),percent:yt(t.percent),activeSegments:yt(t.active_segments),direction:i,loadState:o})}if(3!==s.length)return;const l=gt(a.most_loaded_phase),d="import"===a.direction||"export"===a.direction?a.direction:"missing",c="normal"===a.load_state||"warning"===a.load_state||"critical"===a.load_state?a.load_state:"missing";return{contract_version:1,livePower:i.snapshot,consumers:o,batterySoc:{entityId:"string"==typeof r?.entity_id?r.entity_id:null,value:"valid"===r?.quality?yt(r.value):null,quality:"string"==typeof r?.quality?r.quality:"missing"},phaseLoad:{phases:s,summary:{powerComplete:!0===a.power_complete,netPower:yt(a.net_power_w),importPower:yt(a.import_power_w),exportPower:yt(a.export_power_w),loadComplete:!0===a.load_complete,mostLoadedPhase:!l||"L1"!==l.name&&"L2"!==l.name&&"L3"!==l.name||null===yt(l.percent)?null:{name:l.name,percent:yt(l.percent)},activeSegments:yt(a.active_segments),loadState:c,direction:d}}}}const ft={layout:"desktop",devices:[{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1}]};function xt(e){const t=e??{},i=Array.isArray(t.devices)?t.devices:[],o=ft.devices.map((e,t)=>function(e,t){if(null===e||"object"!=typeof e||Array.isArray(e))return{...t};const i=e,o={enabled:"boolean"==typeof i.enabled?i.enabled:t.enabled};"string"==typeof i.title&&(o.title=i.title);"string"==typeof i.consumerId&&(o.consumerId=i.consumerId);"soc"!==i.optionalType&&"temperature"!==i.optionalType||(o.optionalType=i.optionalType);Array.isArray(i.statusLabels)&&(o.statusLabels=[0,1,2].map(e=>{const t=i.statusLabels?.[e];return"string"==typeof t&&t.trim()?t.trim():void 0}));"car"!==i.icon&&"spa"!==i.icon&&"heatpump"!==i.icon&&"appliance"!==i.icon||(o.icon=i.icon);return o}(i[t],e));return{type:t.type,grid_options:t.grid_options,layout_options:t.layout_options,view_layout:t.view_layout,visibility:t.visibility,card_mod:t.card_mod,layout:t.layout??ft.layout,solarInfoEntity:t.solarInfoEntity,gridInfoEntity:t.gridInfoEntity,houseInfoEntity:t.houseInfoEntity,batteryInfoEntity:t.batteryInfoEntity,devices:o}}const bt="energy_system_power_solar_house";function vt(e){return void 0!==function(e,t){const i=e?.states;if(i)return Object.keys(i).find(e=>e.endsWith(t))}(e,bt)}let wt=class extends de{constructor(){super(...arguments),this._config=ft,this._deviceDrafts={},this._consumerOptions=[{value:"",label:"Select an SBE consumer"}],this._consumerLookupStarted=!1,this.generalSchema=[{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"}]}}}],this.batteryInfoSchema=[{name:"solarInfoEntity",label:"Solar info",selector:{entity:{}}},{name:"gridInfoEntity",label:"Grid info",selector:{entity:{}}},{name:"houseInfoEntity",label:"House info",selector:{entity:{}}},{name:"batteryInfoEntity",label:"Battery info",selector:{entity:{}}}]}setConfig(e){this._consumerLookupStarted=!1,this._deviceDrafts={},this._config=xt(e)}updated(){!this._consumerLookupStarted&&this.hass&&"function"==typeof this.hass.callWS&&(this._consumerLookupStarted=!0,this._loadConsumerOptions(this.hass))}async _loadConsumerOptions(e){try{const t=await e.callWS({type:"config_entries/get",domain:"solar_battery_economy"});if(!Array.isArray(t)||1!==t.length||"loaded"!==t[0]?.state||"string"!=typeof t[0]?.entry_id)return;const i=await e.callWS({type:"solar_battery_economy/get_live_runtime",config_entry_id:t[0].entry_id}),o=i?.consumers;if(1!==i?.contract_version||1!==o?.contract_version||!Array.isArray(o.consumers))return;const r=o.consumers.filter(e=>"string"==typeof e?.consumer_id&&e.consumer_id&&"string"==typeof e?.name&&"string"==typeof e?.power_entity).map(e=>({value:e.consumer_id,label:e.name}));this._consumerOptions=[{value:"",label:"Select an SBE consumer"},...r]}catch{}}getDeviceSchema(e,t){const i=[{name:"enabled",label:"Enabled",selector:{boolean:{}}},{name:"title",label:"Title",selector:{text:{}}},{name:"consumerId",label:"SBE consumer",selector:{select:{mode:"dropdown",options:this._getConsumerOptions(e.consumerId)}}},{name:"optionalType",label:"Optional",selector:{select:{mode:"dropdown",options:[{value:"",label:"None"},{value:"soc",label:"SOC"},{value:"temperature",label:"Temperature"}].filter(i=>{if(void 0===t)return!0;const o=function(e){return $e.includes(e)}(t)?["car"]:["spa","heatpump","appliance"];return o.includes(i.value)||i.value===e.icon})}}}];return i.push(...[1,2,3].map(e=>({name:`statusLabel${e}`,label:`SBE status level ${e} label`,selector:{text:{}}}))),i.push({name:"icon",label:"Icon",selector:{select:{mode:"dropdown",options:[{value:"car",label:"Car"},{value:"spa",label:"Spa"},{value:"heatpump",label:"Heat Pump"},{value:"appliance",label:"Appliance"}]}}}),i}_getConsumerOptions(e){return e&&!this._consumerOptions.some(t=>t.value===e)?[...this._consumerOptions,{value:e,label:`Unavailable SBE consumer (${e})`}]:this._consumerOptions}_valueChanged(e){this._config={...this._config,...e.detail.value},this._fireConfigChanged()}_getDeviceFormData(e,t){const i=this._deviceDrafts[e]??{},o={...t,...i};return this._deviceDrafts[e]||t.statusLabels?.forEach((e,t)=>{o[`statusLabel${t+1}`]=e}),o}_updateDeviceDraft(e,t){const i={...this._deviceDrafts[e]??{},...t};return this._deviceDrafts={...this._deviceDrafts,[e]:i},i}_deviceValueChanged(e,t){const i=t.detail.value;this._updateDeviceDraft(e,i);const{statusLabel1:o,statusLabel2:r,statusLabel3:n,...a}=i,s=[...this._config.devices];s[e]={...s[e],...a,statusLabels:[o,r,n].map(e=>String(e??"").trim()||void 0)},this._config={...this._config,devices:s},this._fireConfigChanged()}_device1ValueChanged(e){this._deviceValueChanged(0,e)}_device2ValueChanged(e){this._deviceValueChanged(1,e)}_device3ValueChanged(e){this._deviceValueChanged(2,e)}_device4ValueChanged(e){this._deviceValueChanged(3,e)}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_isSolarBatteryEconomyDetected(){return!!this.hass&&vt(this.hass)}_renderDeviceEditor(e,t){const i=this._config.devices[e];return j`<section class="device-editor-item">
            <h4>${t}</h4>
            <ha-form
                .hass=${this.hass}
                .data=${this._getDeviceFormData(e,i)}
                .schema=${this.getDeviceSchema(i,e)}
                .computeLabel=${e=>e.label}
                @value-changed=${t=>this._deviceValueChanged(e,t)}
            ></ha-form>
        </section>`}render(){const e=this._isSolarBatteryEconomyDetected();return j`
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
                <summary>Vehicles and chargers</summary>
                <div class="editor-content">
                    ${this._renderDeviceEditor(0,"HALO 1")}
                    ${this._renderDeviceEditor(7,"HALO 2 · reserved")}
                </div>
            </details>

            <details class="editor-section">
                <summary>Ordinary consumers</summary>
                <div class="editor-content">
                    ${[1,2,3,4,5,6].map(e=>this._renderDeviceEditor(e,`Consumer ${e}`))}
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
    `}};e([ge({attribute:!1})],wt.prototype,"hass",void 0),e([ye()],wt.prototype,"_config",void 0),e([ye()],wt.prototype,"_deviceDrafts",void 0),e([ye()],wt.prototype,"_consumerOptions",void 0),wt=e([he("solar-battery-economy-flow-card-editor")],wt);class $t{constructor(){this.generation=0}subscribe(e,t,i,o){if(this.unsubscribe)return Promise.resolve();if(this.pending)return this.pending;const r=++this.generation;return this.pending=(async()=>{try{const o=await e.subscribeMessage(i,{type:"solar_battery_economy/subscribe_dashboard_v2",config_entry_id:t});if(r!==this.generation)return void o();this.unsubscribe=o}catch(e){r===this.generation&&o(e)}finally{r===this.generation&&(this.pending=void 0)}})(),this.pending}unsubscribeNow(){this.generation+=1,this.unsubscribe?.(),this.unsubscribe=void 0,this.pending=void 0}}const _t=e=>null!==e&&"object"==typeof e?e:void 0;function At(e){return"number"==typeof e&&Number.isFinite(e)?e:null}function St(e,t="SBE lämnar ingen täckningsstatus för detta dagsvärde"){const i=At(e);return{value:i,unit:"kWh",quality:null===i?"missing":"partial",...null===i?{}:{detail:t}}}function kt(e){const t=_t(e),i=At(t?.value_kwh),o="string"==typeof t?.status?t.status:"",r=!0===t?.complete||"complete"===o,n=null!==i&&(r||"partial"===o);return{value:n?i:null,unit:"kWh",quality:n?r?"valid":"partial":"missing",...n&&!r?{detail:o||"Delvis täckning"}:{}}}function Ft(e){return null===e?"— W":`${e>0?"+":""}${Math.round(e)} W`}function Ct(e){const t=["L1","L2","L3"].map(t=>e.phases.find(e=>e.name===t)),i=null===e.liveGridValue?"missing":e.liveGridValue>1?"import":e.liveGridValue<-1?"export":"balance";return j`<section class="phase-network-detail" aria-label="Fas- och nätanalys">
    <header class="detail-header">
      <div><span class="detail-eyebrow">LIVE · NÄT OCH FASER</span><h2>Fas- och nätanalys</h2></div>
      <button class="detail-back" @click=${e.onBack}>← Tillbaka</button>
    </header>
    <article class="detail-grid-card ${i}">
      <div class="detail-card-title"><span class="detail-eyebrow">ELNÄT</span><span class="detail-grid-status"><b aria-hidden="true">${"import"===i?"↓":"export"===i?"↑":"balance"===i?"↔":"·"}</b> ${e.liveGridStatus}</span></div>
      <strong>${null===e.liveGridValue?"— W":Ft(e.liveGridValue)}</strong>
      <small>Aktuell nettoeffekt från Solar Battery Economy</small>
    </article>
    <div class="detail-phase-grid">${t.map((e,t)=>{return j`<article class="detail-phase-card phase-${t+1}">
      <header><span class="detail-eyebrow">${e?.name??`L${t+1}`}</span><span class="detail-phase-direction ${e?.direction??"missing"}">${e?(r=e.direction,"import"===r?"Import":"export"===r?"Export":"Riktning saknas"):"Data saknas"}</span></header>
      <div class="detail-phase-values"><div><small>Effekt</small><strong>${Ft(e?.power??null)}</strong></div><div><small>Ström</small><strong>${o=e?.current??null,null===o?"— A":`${o.toFixed(1)} A`}</strong></div></div>
      <div class="detail-phase-meter-label"><span>Belastning</span><strong>${null==e?.percent?"Saknas":`${e.percent}%`}</strong></div>
      <div class="detail-phase-meter ${e?.loadState??"missing"} ${e?.direction??"missing"}" role="img" aria-label=${null==e?.percent?`Belastning ${e?.name??`L${t+1}`} saknas`:`${e?.name??`L${t+1}`}: ${e.percent} procent av huvudsäkringen konfigurerad i SBE`} title="SBE:s procentvärde visar ström som andel av huvudsäkringen konfigurerad i SBE">
        <span style=${`width:${i=e?.percent??null,(null!==i&&Number.isFinite(i)?Math.min(100,Math.max(0,i)):null)??0}%`}></span>
      </div>
      <small class="detail-meter-caption">Andel av huvudsäkring · enligt SBE</small>
    </article>`;var i,o,r})}</div>
  </section>`}const Lt=e=>null==e?"— kWh":`${e.toFixed(2)} kWh`;let Et=class extends de{constructor(){super(...arguments),this.activeLayout=me,this.layoutType="desktop",this.sceneScale=1,this.layoutReady=!1,this.dashboardSubscription=new $t,this.dashboardSubscriptionStarted=!1,this.displayMode="overview",this.valueMode="live",this.detailView=!1,this.previousView={displayMode:"overview",valueMode:"live"},this.livePowerIssue="unavailable",this.livePowerLookupStarted=!1,this.liveRuntimeSubscriptionStarted=!1,this.livePowerLifecycle=0}static{this.styles=ct}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return ft}connectedCallback(){super.connectedCallback(),this.requestUpdate(),this.resizeObserver=new ResizeObserver(e=>{const t=e[0].contentRect.width,i=e[0].contentRect.height;if(t<10||i<10)return;this.sceneScale=1;const o=function(e){const t="mobile"===e.layout?fe:me,i=t.sceneWidth,o=t.sceneHeight,r=e.width/i,n=e.height/o;return{layout:t,scale:Math.min(r,n),offsetX:0,offsetY:0}}({layout:this.layoutType,width:t,height:i});this.activeLayout=o.layout,this.sceneScale=o.scale,this.layoutReady=!0})}disconnectedCallback(){this.livePowerLifecycle+=1,this.livePowerLookupStarted=!1,this.liveRuntimeSubscriptionStarted=!1,this.dashboardSubscriptionStarted=!1,this.dashboardSubscription.unsubscribeNow();const e=this.liveRuntimeSubscription;this.liveRuntimeSubscription=void 0,e&&e().catch(()=>{}),this.resizeObserver?.disconnect(),super.disconnectedCallback()}updated(){!this.livePowerLookupStarted&&this.isConnected&&"function"==typeof this.hass?.callWS&&(this.livePowerLookupStarted=!0,this.initializeLivePowerSubscription(this.hass,this.livePowerLifecycle))}async initializeLivePowerSubscription(e,t){let i;try{i=await e.callWS({type:"config_entries/get",domain:"solar_battery_economy"})}catch{return this.livePowerIssue="unavailable",void this.requestUpdate()}if(t!==this.livePowerLifecycle||!this.isConnected||!Array.isArray(i)||1!==i.length||"loaded"!==i[0]?.state||"string"!=typeof i[0]?.entry_id||!i[0].entry_id)return this.livePowerIssue="unavailable",void this.requestUpdate();if(this.livePowerEntryId=i[0].entry_id,"energy_today"===this.valueMode&&this.startDashboardSubscription(e,this.livePowerEntryId,t),!this.liveRuntimeSubscriptionStarted&&"function"==typeof e.connection?.subscribeMessage)try{this.liveRuntimeSubscriptionStarted=!0;const i=await e.connection.subscribeMessage(e=>{this.liveRuntimeSnapshot=mt(e),this.livePowerIssue=this.liveRuntimeSnapshot?void 0:"unavailable",this.requestUpdate()},{type:"solar_battery_economy/subscribe_live_runtime",config_entry_id:this.livePowerEntryId});if(t!==this.livePowerLifecycle||!this.isConnected)return void await i();this.liveRuntimeSubscription=i}catch{this.liveRuntimeSnapshot=void 0,this.livePowerIssue="unavailable",this.requestUpdate()}}startDashboardSubscription(e,t,i){this.dashboardSubscriptionStarted||"function"!=typeof e.connection?.subscribeMessage||(this.dashboardSubscriptionStarted=!0,this.dashboardSubscription.subscribe(e.connection,t,e=>{i===this.livePowerLifecycle&&this.isConnected&&(this.dashboardData=function(e){const t=_t(e);if(2!==t?.contract_version)return;const i=_t(t.energy),o=_t(i?.today),r=_t(o?.solar),n=_t(o?.battery),a=_t(o?.grid),s=_t(a?.import),l=_t(a?.export),d=_t(_t(t.calendar_analysis)?.today),c=_t(d?.house),h=_t(d?.consumers),u=new Map;for(const[e,t]of Object.entries(h??{})){const i=_t(_t(t)?.analysis);u.set(e,St(i?.energy_kwh,"SBE:s konsumentdata innehåller ingen täckningsflagga"))}return{solar:St(r?.total_kwh),gridImport:kt(s),gridExport:kt(l),batteryCharged:St(n?.charged_kwh),batteryDischarged:St(n?.discharged_kwh),house:St(c?.consumption_kwh,"SBE:s husdata innehåller ingen täckningsflagga"),consumers:u}}(e),this.dashboardIssue=this.dashboardData?void 0:"SBE:s dagsdata saknas eller har ett format som kortet inte stöder",this.requestUpdate())},()=>{i===this.livePowerLifecycle&&this.isConnected&&(this.dashboardIssue="Kunde inte hämta SBE:s dagsdata",this.requestUpdate())}))}ensureDashboardSubscription(){this.livePowerEntryId&&this.hass?.connection&&this.startDashboardSubscription(this.hass,this.livePowerEntryId,this.livePowerLifecycle)}setDetailView(e){if(e)return this.previousView={displayMode:this.displayMode,valueMode:this.valueMode},void(this.detailView=!0);this.detailView=!1,this.displayMode=this.previousView.displayMode,this.valueMode=this.previousView.valueMode}renderViewControls(){return this.detailView?"":j`<nav class="view-toolbar" aria-label="Kortvy">
      <div class="view-choice" aria-label="Visningsläge">
        <button class=${"overview"===this.displayMode?"selected":""} aria-pressed=${"overview"===this.displayMode} @click=${()=>{this.displayMode="overview"}}>Översikt</button>
        <button class=${"consumers"===this.displayMode?"selected":""} aria-pressed=${"consumers"===this.displayMode} @click=${()=>{this.displayMode="consumers"}}>Förbrukare</button>
      </div>
      <div class="view-choice" aria-label="Värdeläge">
        <button class=${"live"===this.valueMode?"selected":""} aria-pressed=${"live"===this.valueMode} @click=${()=>{this.valueMode="live"}}>Live</button>
        <button class=${"energy_today"===this.valueMode?"selected":""} aria-pressed=${"energy_today"===this.valueMode} @click=${()=>{this.valueMode="energy_today",this.ensureDashboardSubscription()}}>Energi idag</button>
      </div>
    </nav>`}renderConsumerSummary(e,t){const i="energy_today"===this.valueMode,o=i?null===t.metric.value?"— kWh":`${t.metric.value.toFixed(2)} kWh`:0===e.validCount?"— W":`${Math.round(e.value)} W`,r=i?"valid"!==t.metric.quality:e.missingCount>0||0===e.validCount,n=i?t.missingCount:e.missingCount;return j`<aside class="consumer-summary" aria-label=${i?"Summerad energi för valda förbrukare":"Summerad effekt för valda förbrukare"}>
      <span>${i?"VALDA FÖRBRUKARE · IDAG":"VALDA FÖRBRUKARE · LIVE"}</span><strong>${o}</strong>
      <small>${i?`${t.validCount} förbrukare · dagens kWh · HALO visas separat`:0===e.enabledCount?"Inga inkluderade förbrukare är aktiverade · HALO visas separat":0===e.validCount?"Inga inkluderade förbrukare har giltiga värden · HALO visas separat":r?n?`Ofullständig summa · ${n} saknas`:"Ofullständig summa · datatäckning ej rapporterad":`${e.validCount} förbrukare · HALO visas separat`}</small>
    </aside>`}renderCompactPhases(e,t){return j`<aside class="compact-phase-panel" aria-label="Kompakt fasöversikt">
      <header><strong>FASER</strong><small class="compact-phase-live">LIVE</small><span>${"import"===t?.direction?"Import":"export"===t?.direction?"Export":t?"Nät":"Data saknas"}</span></header>
      <div>${e.length?e.map(e=>{return j`<section><b>${e.name}</b><span>${t=e.power,null===t?"— W":`${Math.round(t)} W`}</span><small>${"import"===e.direction?"Import":"export"===e.direction?"Export":"Riktning saknas"}</small></section>`;var t}):j`<section class="phase-data-empty">L1–L3 saknas</section>`}</div>
      <button @click=${()=>this.setDetailView(!0)}>Fas- och nätanalys ↗</button>
    </aside>`}firstUpdated(){const e=this.renderRoot.querySelector(".card");this.resizeObserver?.observe(e)}setConfig(e){this.config=e;const t=e?.layout;this.layoutType="mobile"===t?"mobile":"desktop"}render(){if(!this.layoutReady)return j`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;const e=xt(this.config),t=ht(this.hass,e,this.liveRuntimeSnapshot?.livePower,this.liveRuntimeSnapshot?.consumers,this.liveRuntimeSnapshot?.batterySoc.value??null),i=this.liveRuntimeSnapshot?.phaseLoad.phases??[],o=this.liveRuntimeSnapshot?.phaseLoad.summary,r=(n=t.devices,_e.map(e=>n[e]).filter(e=>void 0!==e));var n;const a=function(e){const t=new Set;let i=0,o=0,r=0,n=0,a=0;for(const s of e)s.enabled&&(r+=1,s.consumerId&&!t.has(s.consumerId)?(t.add(s.consumerId),"valid"===s.powerQuality&&"number"==typeof s.power&&Number.isFinite(s.power)?(i+=s.power,o+=1):n+=1):s.consumerId&&t.has(s.consumerId)?a+=1:n+=1);return{value:i,enabledCount:r,validCount:o,missingCount:n,duplicateCount:a}}(r),s=function(e,t,i,o){const r=t?.flows,n={"solar-house":ke("solar-house",r?.solar_house??0),"solar-battery":ke("solar-battery",r?.solar_battery??0),"solar-export":ke("solar-export",r?.solar_export??0),"battery-house":ke("battery-house",r?.battery_house??0),"battery-grid":ke("battery-grid",r?.battery_grid??0),"grid-house":ke("grid-house",r?.grid_house??0),"grid-battery":ke("grid-battery",r?.grid_battery??0),"house-spa":ke("house-spa",we(e.devices[1],i)),"house-car":ke("house-car",we(e.devices[0],i)),"house-heatpump":ke("house-heatpump",we(e.devices[2],i)),"house-appliance":ke("house-appliance",we(e.devices[3],i))};for(let t=4;t<e.devices.length;t+=1){const o=Se(t);n[o]=ke(o,we(e.devices[t],i))}const a=o??{value:0,validCount:0,missingCount:0};return n["house-consumer-summary"]={id:"house-consumer-summary",power:a.value,active:a.validCount>0&&a.value>1,intensity:Math.min(1,a.value/5e3),quality:0===a.validCount?"missing":a.missingCount>0?"partial":"valid"},n}(e,this.liveRuntimeSnapshot?.livePower,this.liveRuntimeSnapshot?.consumers,a),l=function(e,t){const i=new Set;let o=0,r=0,n=0,a=!1;for(const s of e){if(!s.enabled)continue;if(!s.consumerId||i.has(s.consumerId)){n+=1;continue}i.add(s.consumerId);const e=t?.get(s.consumerId);e&&null!==e.value?(o+=e.value,r+=1,a||="partial"===e.quality):n+=1}const s=0===r?"missing":n>0||a?"partial":"valid";return{metric:{value:r?o:null,unit:"kWh",quality:s,..."partial"===s?{detail:"Delsumma; datatäckning är ofullständig eller saknar status"}:{}},validCount:r,missingCount:n}}(r,this.dashboardData?.consumers),d=function(e,t,i=!1){const o={solar:{line1:Lt(t?.solar.value),line3:"Produktion idag"},house:{line1:Lt(t?.house.value),line3:"Förbrukning idag"},grid:{line1:Lt(t?.gridImport.value),line2:Lt(t?.gridExport.value),line3:"Nätenergi idag",line1Indicator:"↓",line2Indicator:"↑",line1IndicatorLabel:"Import från nät",line2IndicatorLabel:"Export till nät",line1IndicatorColor:"#FF6B6B",line2IndicatorColor:"#35B86B"},battery:{line1:Lt(t?.batteryCharged.value),line2:Lt(t?.batteryDischarged.value),line3:"Batteri idag",line1Indicator:"↓",line2Indicator:"↑",line1IndicatorLabel:"Laddat i batteriet",line2IndicatorLabel:"Urladdat från batteriet",line1IndicatorColor:"#35B86B",line2IndicatorColor:"#E3A43B"}};return e.forEach((e,r)=>{const n=e.consumerId?t?.consumers.get(e.consumerId):void 0,a={line1:Lt(n?.value),line2:"Energi idag",line3:i?"":e.status};o[`device_${r}`]=a;const s=function(e){return["car","spa","heatpump","appliance"][e]}(r);s&&(o[s]=a),o[function(e){return["car","spa","heatpump","appliance"][e]??(7===e?"car-2":`consumer-${e+1}`)}(r)]=a}),o}(t.devices,this.dashboardData,!0),c="energy_today"===this.valueMode?d:{},h=this.livePowerIssue?null:t.gridPower,u=null===h?"Data saknas":t.gridStatus,p=function(e,t,i){if(i)return{showSolar:!1,showGrid:!1,showBattery:!1,showHouse:!1,showIndividualConsumers:!1,showHalo:!1,showConsumerSummary:!1,showFlowGraph:!1,showCompactPhases:!1,showDetail:!0};const o="overview"===e;return{showSolar:o,showGrid:o,showBattery:o,showHouse:!0,showIndividualConsumers:!o,showHalo:!0,showConsumerSummary:o,showFlowGraph:!0,showCompactPhases:o,showDetail:!1}}(this.displayMode,this.valueMode,this.detailView),g=this.activeLayout,y=function(e){const t=e?.states?.["sun.sun"];if(!t)return"day";const i=Number(t.attributes?.elevation??0);return"above_horizon"===t.state?i<8?"morning":i<20?"sunset":"day":i>-6?"bluehour":"night"}(this.hass),m=function(e){const t=e?.states?.["sun.sun"];if(!t)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const i=Number(t.attributes?.elevation??0),o=Number(t.attributes?.azimuth??180),r="above_horizon"===t.state,n=Math.max(0,Math.min(1,(o-90)/180));return{progress:n,aboveHorizon:r,left:100*n,top:Math.max(40,280-6*i),sunrise:new Date(t.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(t.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),f=Le(this.hass,y,this.layoutType);return j`
      <ha-card class="ha-wrapper">
        <div class="card ${this.layoutType} ${y}">
          ${this.livePowerIssue?j`<div class="live-power-status" role="status">Effektdata saknas</div>`:""}
          <div class="scene">
            <div
              class="scene-inner"
              style="
                width:${g.sceneWidth}px;
                height:${g.sceneHeight}px;
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
                    url('${f}');
                "
              ></div>
              <div class="background-glow"></div>
              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${m.top}px;
                "
              ></div>
              <div class="scene-vignette"></div>
              ${this.detailView?"":at(m,g,t.solarPower,"overview"===this.displayMode&&"live"===this.valueMode)}
              <div
                class="flow-layer"
                style="
                  width:${g.sceneWidth}px;
                  height:${g.sceneHeight}px;
                "
              >
              ${p.showFlowGraph?ot(g,s,t,this,this.displayMode,c,this.valueMode):""}
              </div>
              ${p.showCompactPhases?this.renderCompactPhases(i,o):""}
              ${p.showConsumerSummary?this.renderConsumerSummary(a,l):""}
              ${this.renderViewControls()}
              ${p.showDetail?Ct({phases:i,liveGridValue:h,liveGridStatus:u,onBack:()=>this.setDetailView(!1)}):""}
            </div>
          </div>
        </div>
      </ha-card>
    `}};e([ge({attribute:!1})],Et.prototype,"hass",void 0),e([ge({attribute:!1})],Et.prototype,"config",void 0),e([ye()],Et.prototype,"activeLayout",void 0),e([ye()],Et.prototype,"layoutType",void 0),e([ye()],Et.prototype,"sceneScale",void 0),e([ye()],Et.prototype,"layoutReady",void 0),e([ye()],Et.prototype,"dashboardData",void 0),e([ye()],Et.prototype,"dashboardIssue",void 0),e([ye()],Et.prototype,"displayMode",void 0),e([ye()],Et.prototype,"valueMode",void 0),e([ye()],Et.prototype,"detailView",void 0),e([ye()],Et.prototype,"livePowerIssue",void 0),Et=e([he("solar-battery-economy-flow-card")],Et);export{Et as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
