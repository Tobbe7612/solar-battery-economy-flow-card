function t(t,e,o,r){var i,s=arguments.length,n=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(s<3?i(n):s>3?i(e,o,n):i(e,o))||n);return s>3&&n&&Object.defineProperty(e,o,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class s{constructor(t,e,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new s(o,t,r)},a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:c,getPrototypeOf:u}=Object,g=globalThis,y=g.trustedTypes,x=y?y.emptyScript:"",b=g.reactiveElementPolyfillSupport,f=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?x:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},w=(t,e)=>!l(t,e),_={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),r=this.getPropertyDescriptor(t,o,e);void 0!==r&&h(this.prototype,t,r)}}static getPropertyDescriptor(t,e,o){const{get:r,set:i}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const s=r?.call(this);i?.call(this,e),this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...p(t),...c(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(o)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of r){const r=document.createElement("style"),i=e.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=o.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,o);if(void 0!==r&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:m).toAttribute(e,o.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,r=o._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=o.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=r;const s=i.fromAttribute(e,t.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(t,e,o,r=!1,i){if(void 0!==t){const s=this.constructor;if(!1===r&&(i=this[t]),o??=s.getPropertyOptions(t),!((o.hasChanged??w)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:r,wrapped:i},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==i||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,o,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[f("elementProperties")]=new Map,$[f("finalized")]=new Map,b?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const v=globalThis,A=t=>t,F=v.trustedTypes,C=F?F.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+S,T=`<${E}>`,R=document,M=()=>R.createComment(""),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,z="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,O=/>/g,U=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,D=/"/g,W=/^(?:script|style|textarea|title)$/i,j=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),I=j(1),V=j(2),G=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),X=new WeakMap,q=R.createTreeWalker(R,129);function Y(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const o=t.length-1,r=[];let i,s=2===e?"<svg>":3===e?"<math>":"",n=B;for(let e=0;e<o;e++){const o=t[e];let a,l,h=-1,d=0;for(;d<o.length&&(n.lastIndex=d,l=n.exec(o),null!==l);)d=n.lastIndex,n===B?"!--"===l[1]?n=N:void 0!==l[1]?n=O:void 0!==l[2]?(W.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=U):void 0!==l[3]&&(n=U):n===U?">"===l[0]?(n=i??B,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?U:'"'===l[3]?D:H):n===D||n===H?n=U:n===N||n===O?n=B:(n=U,i=void 0);const p=n===U&&t[e+1].startsWith("/>")?" ":"";s+=n===B?o+T:h>=0?(r.push(a),o.slice(0,h)+k+o.slice(h)+S+p):o+S+(-2===h?e:p)}return[Y(t,s+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Q{constructor({strings:t,_$litType$:e},o){let r;this.parts=[];let i=0,s=0;const n=t.length-1,a=this.parts,[l,h]=K(t,e);if(this.el=Q.createElement(l,o),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=q.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(k)){const e=h[s++],o=r.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:o,ctor:"."===n[1]?rt:"?"===n[1]?it:"@"===n[1]?st:ot}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(W.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=F?F.emptyScript:"";for(let o=0;o<e;o++)r.append(t[o],M()),q.nextNode(),a.push({type:2,index:++i});r.append(t[e],M())}}}else if(8===r.nodeType)if(r.data===E)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const o=R.createElement("template");return o.innerHTML=t,o}}function Z(t,e,o=t,r){if(e===G)return e;let i=void 0!==r?o._$Co?.[r]:o._$Cl;const s=L(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(t),i._$AT(t,o,r)),void 0!==r?(o._$Co??=[])[r]=i:o._$Cl=i),void 0!==i&&(e=Z(t,i._$AS(t,e.values),i,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,r=(t?.creationScope??R).importNode(e,!0);q.currentNode=r;let i=q.nextNode(),s=0,n=0,a=o[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new et(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=o[++n]}s!==a?.index&&(i=q.nextNode(),s++)}return q.currentNode=R,r}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,r){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),L(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Q.createElement(Y(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new Q(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,r=0;for(const i of t)r===e.length?e.push(o=new et(this.O(M()),this.O(M()),this,this.options)):o=e[r],o._$AI(i),r++;r<e.length&&(this._$AR(o&&o._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,r,i){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=J}_$AI(t,e=this,o,r){const i=this.strings;let s=!1;if(void 0===i)t=Z(this,t,e,0),s=!L(t)||t!==this._$AH&&t!==G,s&&(this._$AH=t);else{const r=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=Z(this,r[o+n],e,n),a===G&&(a=this._$AH[n]),s||=!L(a)||a!==this._$AH[n],a===J?t=J:t!==J&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}s&&!r&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class it extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class st extends ot{constructor(t,e,o,r,i){super(t,e,o,r,i),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??J)===G)return;const o=this._$AH,r=t===J&&o!==J||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==J&&(o===J||r);r&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=v.litHtmlPolyfillSupport;at?.(Q,et),(v.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ht extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const r=o?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=o?.renderBefore??null;r._$litPart$=i=new et(e.insertBefore(M(),t),t,void 0,o??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ht._$litElement$=!0,ht.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ht});const dt=lt.litElementPolyfillSupport;dt?.({LitElement:ht}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w},ct=(t=pt,e,o)=>{const{kind:r,metadata:i}=o;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),s.set(o.name,t),"accessor"===r){const{name:r}=o;return{set(o){const i=e.get.call(this);e.set.call(this,o),this.requestUpdate(r,i,t,!0,o)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=o;return function(o){const i=this[r];e.call(this,o),this.requestUpdate(r,i,t,!0,o)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,o)=>"object"==typeof o?ct(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return ut({...t,state:!0,attribute:!1})}const yt={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16},panels:{left:{x:40,y:40},right:{x:1620,y:40}},nodes:{solar:{id:"solar",label:"SOL",x:760,y:170,width:390,height:120},hub:{id:"hub",label:"Energy Hub",x:960,y:485,width:1,height:1},house:{id:"house",label:"HUSET",x:845,y:500,width:210,height:170,ports:{left:{x:0,y:85},right:{x:182,y:72},top:{x:150,y:18},bottom:{x:105,y:170}}},battery:{id:"battery",label:"BATTERI",x:1085,y:505,width:120,height:170,ports:{left:{x:18,y:74},right:{x:120,y:85},top:{x:60,y:0},bottom:{x:60,y:170}}},grid:{id:"grid",label:"ELNÄT",x:95,y:435,width:140,height:140},spa:{id:"spa",label:"SPA",x:500,y:700,width:170,height:120},heatpump:{id:"heatpump",label:"VP",x:760,y:810,width:140,height:70},appliance:{id:"appliance",label:"APP",x:980,y:810,width:140,height:70},car:{id:"car",label:"BIL",x:1375,y:645,width:170,height:140}}},xt={sceneWidth:430,sceneHeight:1180,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10},panels:{left:{x:0,y:0},right:{x:0,y:0}},nodes:{solar:{id:"solar",label:"SOL",x:150,y:40,width:160,height:135},grid:{id:"grid",label:"ELNÄT",x:25,y:240,width:110,height:110},battery:{id:"battery",label:"BATTERI",x:285,y:240,width:110,height:110},house:{id:"house",label:"HUSET",x:125,y:440,width:130,height:130},spa:{id:"spa",label:"SPA",x:125,y:650,width:80,height:80},heatpump:{id:"heatpump",label:"VÄRMEPUMP",x:125,y:790,width:80,height:80},appliance:{id:"appliance",label:"VITVAROR",x:125,y:930,width:80,height:80},car:{id:"car",label:"BIL",x:125,y:1070,width:80,height:80}}},bt={sceneWidth:1400,sceneHeight:1050,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16},panels:{left:{x:40,y:20},right:{x:1100,y:20}},nodes:{solar:{id:"solar",label:"SOL",x:640,y:60,width:220,height:100},house:{id:"house",label:"HUSET",x:560,y:360,width:280,height:170},grid:{id:"grid",label:"ELNÄT",x:80,y:330,width:220,height:170},battery:{id:"battery",label:"BATTERI",x:1100,y:320,width:240,height:170},spa:{id:"spa",label:"SPA",x:180,y:760,width:180,height:120},heatpump:{id:"heatpump",label:"VP",x:460,y:760,width:180,height:120},appliance:{id:"appliance",label:"APP",x:740,y:760,width:180,height:120},car:{id:"car",label:"BIL",x:1020,y:760,width:220,height:140}}};function ft(t,e){return{id:t,power:e,active:e>1,intensity:Math.min(1,e/5e3)}}const mt="/local/dev/solar-battery-economy-flow-card/assets/backgrounds";function wt(t,e=20){if(t.length<2)return"";let o=`M ${t[0].x} ${t[0].y}`;for(let r=1;r<t.length-1;r++){const i=t[r-1],s=t[r],n=t[r+1],a=s.x-i.x,l=s.y-i.y,h=n.x-s.x,d=n.y-s.y,p=s.x-Math.sign(a)*e,c=s.y-Math.sign(l)*e,u=s.x+Math.sign(h)*e,g=s.y+Math.sign(d)*e;o+=`\n      L ${p} ${c}\n      Q ${s.x} ${s.y}\n        ${u} ${g}\n    `}const r=t[t.length-1];return o+=`\n    L ${r.x} ${r.y}\n  `,o}function _t(t,e,o){const r=Math.max(.35,.82*o.duration);return V`

        ${Array.from({length:o.particleCount}).map((i,s)=>{const n=[0,.18,.41,.63,.84,1,1.19,1.43,1.66,1.88],a=[1,.93,.98,.88,.96,1,.91,.97];return V`

                <g class="energy-particle">

                    ${function(t,e,o,r,i,s){return V`

        <!-- Energy Trail -->

        <ellipse

            rx="7.0"

            ry="0.7"

            fill="${e}"

            opacity="${.04*i.trailOpacity}"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

        </ellipse>

        <ellipse

            rx="4.5"

            ry="0.45"

            fill="${e}"

            opacity="${.18*i.trailOpacity}"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

        </ellipse>

        <!-- Conduit Flash -->

        <ellipse

            rx="14"

            ry="3.2"

            fill="#FFFFFF"

            opacity="0.08"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

            <animate

                attributeName="opacity"

                values="0.02;0.10;0.04;0.10;0.02"

                dur="1.8s"

                repeatCount="indefinite"

            />

        </ellipse>
        
        <!-- Packet Halo -->

        <ellipse

            rx="7.8"

            ry="2.7"

            fill="${e}"

            opacity="${.12*i.trailOpacity*s}"

            filter="url(#energy-glow)"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

        <animate

            attributeName="opacity"

            values="0.08;0.13;0.08"

            dur="2.4s"

            repeatCount="indefinite"

        />

        <animate

            attributeName="rx"

            values="7.6;8.1;7.6"

            dur="2.2s"

            repeatCount="indefinite"

        />

        </ellipse>
        

        <!-- Packet Body -->
        <ellipse

            rx="8.8"

            ry="2.3"

            fill="${e}"

            opacity="0.82"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />
            <animate

                attributeName="opacity"

                values="0.88;1;0.94;1;0.88"

                dur="1.6s"

                repeatCount="indefinite"

            />

        </ellipse>

        <ellipse

            rx="8.6"

            ry="2.15"

            fill="url(#energy-packet-gradient)"

            opacity="${.92*s}"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

        <animate

            attributeName="opacity"

            values="0.90;1;0.92;1;0.90"

            dur="1.8s"

            repeatCount="indefinite"

        />

        </ellipse>

        <!-- Packet Core -->

        <ellipse

            rx="4.8"

            ry="1.05"

            fill="#FFFFFF"

            opacity="1"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

            <animate

                attributeName="rx"

                values="4.6;5.0;4.6"

                dur="1.6s"

                repeatCount="indefinite"

            />

            <animate

                attributeName="ry"

                values="0.95;1.10;0.95"

                dur="1.6s"

                repeatCount="indefinite"

            />

        </ellipse>

        <!-- Packet Hotspot -->

        <circle

            r="1.65"

            fill="#FFFFFF"

            opacity="1"

        >

            <animateMotion

                dur="${r}s"

                begin="${o}s"

                repeatCount="indefinite"

                rotate="auto"

                calcMode="spline"

                keySplines="0.25 0 0.75 1"

                path="${t}"

            />

        <animate

            attributeName="r"

            values="1.55;1.85;1.55"

            dur="1.4s"

            repeatCount="indefinite"

        />

        </circle>

    `}(t,e,-n[s%n.length]*r,r,o,a[s%a.length])}

                </g>

            `})}

    `}function $t(t){if(!t.active||Math.abs(t.power)<1)return V``;const e=function(t){return t.waypoints&&t.waypoints.length>0?wt([t.start,...t.waypoints,t.end],t.radius??38):"solar-battery"===t.id||"solar-export"===t.id?wt([t.start,{x:t.end.x,y:t.start.y},t.end],t.radius??38):(e=t.start.x,o=t.start.y,r=t.end.x,i=t.end.y,`\n    M ${e} ${o}\n    L ${r} ${i}\n  `);var e,o,r,i}(t),o=function(t){const e=Math.abs(t);return e<300?{particleCount:2,duration:6,flowWidth:5,trailOpacity:.18,glowOpacity:.35,coreOpacity:1}:e<800?{particleCount:3,duration:5.2,flowWidth:6,trailOpacity:.2,glowOpacity:.42,coreOpacity:1}:e<1500?{particleCount:4,duration:4.4,flowWidth:7,trailOpacity:.22,glowOpacity:.48,coreOpacity:1}:e<3e3?{particleCount:6,duration:3.7,flowWidth:8,trailOpacity:.25,glowOpacity:.55,coreOpacity:1}:e<5e3?{particleCount:8,duration:3,flowWidth:9,trailOpacity:.28,glowOpacity:.62,coreOpacity:1}:{particleCount:10,duration:2.2,flowWidth:10,trailOpacity:.3,glowOpacity:.7,coreOpacity:1}}(t.power),r=.64*o.flowWidth,i=r+7.5,s=r+4.5,n=r+2.2,a=.88*r,l=Math.max(.9,.22*r),h=Math.max(1.2,.38*r);return V`

        <g class="energy-edge">

            <!-- Ambient Halo -->

            <path
                d="${e}"
                fill="none"
                stroke="${t.color}"
                stroke-width="${i}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.035"
                filter="url(#energy-glow)"
            />

            <!-- Outer Glow -->

            <path
                d="${e}"
                fill="none"
                stroke="${t.color}"
                stroke-width="${s}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.10"
                filter="url(#energy-glow)"
            />

            <!-- Inner Glow -->

            <path
                d="${e}"
                fill="none"
                stroke="${t.color}"
                stroke-width="${n}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.26"
            />

            <!-- Energy Conduit -->

            <path
                d="${e}"
                fill="none"
                stroke="${t.color}"
                stroke-width="${a}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.76"
            />

            <!-- White Core -->

            <path
                d="${e}"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="${l}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.92"
            />

            <!-- Conduit Highlight -->

            <path
                d="${e}"
                fill="none"
                stroke="#FFFFFF"
                stroke-width="${h}"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.06"
            />

            ${_t(e,t.color,o)}

        </g>

    `}function vt(t,e,o){const r=function(t,e,o){return o.map(o=>{const r=e[o.liveFlow];return{id:o.id,start:o.getStart(t),end:o.getEnd(t),waypoints:o.getWaypoints?o.getWaypoints(t):[],power:r?.power??0,active:r?.active??!1,color:o.color,particleColor:o.particleColor,width:o.width,radius:o.radius}})}(t,e,o);return V`

        ${V`

        <defs>

            <radialGradient
                id="energy-core"
                cx="50%"
                cy="50%"
                r="50%">

                <stop
                    offset="0%"
                    stop-color="#FFFFFF"
                    stop-opacity="1"/>

                <stop
                    offset="35%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.95"/>

                <stop
                    offset="100%"
                    stop-color="#FFFFFF"
                    stop-opacity="0"/>

            </radialGradient>

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

            <linearGradient
                id="energy-packet-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%">

                <stop
                    offset="0%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.08"/>

                <stop
                    offset="20%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.30"/>

                <stop
                    offset="55%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.78"/>

                <stop
                    offset="82%"
                    stop-color="#FFFFFF"
                    stop-opacity="1"/>

                <stop
                    offset="100%"
                    stop-color="#FFFFFF"
                    stop-opacity="0.82"/>

            </linearGradient>

        </defs>

    `}
        <g class="graph-engine">
            ${r.map(t=>$t(t))}
        </g>
    `}function At(t,e,o,r){switch(t){case"solar":return function(t,e){return V`

        <g
            transform="
                translate(${t}, ${e})
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Sol -->
            <circle
                cx="0"
                cy="0"
                r="10"
            />

            <!-- Strålar -->

            <line x1="0" y1="-20" x2="0" y2="-28"/>

            <line x1="14" y1="-14" x2="20" y2="-20"/>

            <line x1="20" y1="0" x2="28" y2="0"/>

            <line x1="14" y1="14" x2="20" y2="20"/>

            <line x1="0" y1="20" x2="0" y2="28"/>

            <line x1="-14" y1="14" x2="-20" y2="20"/>

            <line x1="-20" y1="0" x2="-28" y2="0"/>

            <line x1="-14" y1="-14" x2="-20" y2="-20"/>

        </g>

    `}(e,o);case"house":return function(t,e){return V`

        <g
            transform="translate(${t}, ${e})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linejoin="round"
            stroke-linecap="round"
        >

            <!-- Tak -->
            <path d="M -22 -6 L 0 -26 L 22 -6" />

            <!-- Hus -->
            <rect
                x="-17"
                y="-6"
                width="34"
                height="34"
                rx="2"
            />

            <!-- Dörr -->
            <rect
                x="-4"
                y="10"
                width="8"
                height="18"
                rx="1"
            />

        </g>

    `}(e,o);case"grid":return function(t,e){return V`

        <g
            transform="translate(${t}, ${e})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Stolpe -->
            <line x1="0" y1="-22" x2="0" y2="24" />

            <!-- Övre tvärbalk -->
            <line x1="-14" y1="-14" x2="14" y2="-14" />

            <!-- Nedre tvärbalk -->
            <line x1="-10" y1="-2" x2="10" y2="-2" />

            <!-- Vänster stag -->
            <line x1="-14" y1="-14" x2="0" y2="0" />

            <!-- Höger stag -->
            <line x1="14" y1="-14" x2="0" y2="0" />

            <!-- Ben -->
            <line x1="0" y1="24" x2="-8" y2="38" />
            <line x1="0" y1="24" x2="8" y2="38" />

        </g>

    `}(e,o);case"battery":return V`
                <g
                    transform="translate(${e}, ${o}) rotate(-90)"
                    fill="none"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                    stroke-linecap="round"
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
                    <line
                        x1="-20"
                        y1="0"
                        x2="20"
                        y2="0"
                    />
                </g>
            `;case"car":return function(t,e){return V`

        <g
            transform="translate(${t}, ${e})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Tak -->
            <path
                d="M -14 6
                   L -8 -6
                   L 8 -6
                   L 14 6"
            />

            <!-- Kaross -->
            <rect
                x="-20"
                y="6"
                width="40"
                height="12"
                rx="4"
            />

            <!-- Hjul -->
            <circle
                cx="-12"
                cy="20"
                r="3"
            />

            <circle
                cx="12"
                cy="20"
                r="3"
            />

        </g>

    `}(e,o);case"spa":return function(t,e){return V`

        <g
            transform="translate(${t}, ${e})"
            fill="none"
            stroke="white"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Badtunna -->
            <ellipse
                cx="0"
                cy="8"
                rx="16"
                ry="6"
            />

            <line x1="-16" y1="8" x2="-16" y2="20" />
            <line x1="16" y1="8" x2="16" y2="20" />
            <line x1="-16" y1="20" x2="16" y2="20" />

            <!-- Ånga -->
            <path d="M -8 -8 C -12 -12 -4 -16 -8 -20" />
            <path d="M 0 -6 C -4 -10 4 -14 0 -18" />
            <path d="M 8 -8 C 4 -12 12 -16 8 -20" />

        </g>

    `}(e,o);case"heatpump":return function(t,e){return V`

        <g
            transform="translate(${t},${e})"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Pump -->

            <rect
                x="-12"
                y="-18"
                width="24"
                height="36"
                rx="5"
            />

            <!-- Display -->

            <circle
                cx="0"
                cy="-8"
                r="2"
                fill="white"
            />

            <!-- Coil -->

            <path d="
                M -6 4
                q 3 -3 6 0
                q 3 3 6 0
            "/>

            <!-- Bottom -->

            <line
                x1="-6"
                y1="14"
                x2="6"
                y2="14"
            />

        </g>

    `}(e,o);case"appliance":return function(t,e){return V`

        <g
            transform="translate(${t},${e})"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >

            <!-- Tvättmaskin -->

            <rect
                x="-18"
                y="-16"
                width="16"
                height="32"
                rx="2"
            />

            <circle
                cx="-10"
                cy="0"
                r="5"
            />

            <!-- Kyl/Frys -->

            <rect
                x="4"
                y="-16"
                width="16"
                height="32"
                rx="2"
            />

            <line
                x1="4"
                y1="0"
                x2="20"
                y2="0"
            />

            <line
                x1="16"
                y1="-8"
                x2="16"
                y2="-3"
            />

            <line
                x1="16"
                y1="5"
                x2="16"
                y2="10"
            />

        </g>

    `}(e,o);default:return V`
                <text
                    x="${e}"
                    y="${o}"
                    fill="white"
                    font-size="${r}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `}}function Ft(t){return Math.abs(t)<1e3?`${Math.round(t)} W`:`${(t/1e3).toFixed(1)} kW`}function Ct(t){return`${Math.round(t)}%`}function kt(t,e){return V`
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
            ${t.map(t=>{let o;switch(t.id){case"battery":o={line1:Ft((r=e).batteryPower),line2:Ct(r.batterySoc),line3:r.batteryStatus};break;case"house":o=function(t){return{line1:Ft(t.housePower),line2:"",line3:t.houseStatus}}(e);break;case"grid":o=function(t){return{line1:Ft(t.gridPower),line2:"",line3:t.gridStatus}}(e);break;case"solar":o=function(t){return{line1:Ft(t.solarPower),line2:"",line3:t.solarStatus}}(e);break;case"car":o=function(t){return{line1:Ft(t.carPower),line2:Ct(t.carSoc),line3:t.carStatus}}(e);break;case"spa":o=function(t){return{line1:Ft(t.spaPower),line2:`${t.spaTemperature.toFixed(0)} °C`,line3:t.spaStatus}}(e);break;case"heatpump":o=function(t){return{line1:Ft(t.heatpumpPower),line2:"",line3:t.heatpumpStatus}}(e);break;case"appliance":o=function(t){return{line1:Ft(t.appliancePower),line2:"",line3:t.applianceStatus}}(e);break;default:o={line1:"1234 W",line2:"",line3:""}}var r;return function(t,e){const o=t.width<=155,r=o?.6:1,i=o?.65:1,s=o?25:32,n=o?30:55,a=16*r,l=24*r,h=18*r,d=13*r,p=18*r,c=28*r,u=56*r,g=78*r,y=100*r;return V`

        <g
            class="energy-label"
            transform="translate(${t.x}, ${t.y})"
            pointer-events="none"
        >

            <rect
                filter="url(#label-shadow)"
                width="${t.width}"
                height="${t.height}"

                rx="22"
                ry="22"

                fill="rgba(18,24,34,0.72)"

                stroke="rgba(255,255,255,0.10)"

                stroke-width="1.5"
            />

            <text
                class="energy-label-title"
                x="${p}"
                y="${c}"
                font-size="${a}"
                fill="white"
                font-weight="700"
            >
                ${t.title}
            </text>

            <g
                transform="
                    translate(
                        ${t.width-s},
                        ${n}
                    )
                    scale(${i})
                "
            >
                ${At(t.icon,0,0,22)}
            </g>

            ${e.line1?V`
                    <text
                        class="energy-label-line1"
                        x="${p}"
                        y="${u}"
                        font-size="${l}"
                        fill="white"
                        font-weight="700"
                    >
                        ${e.line1}
                    </text>
                `:""}

            ${e.line2?V`
                    <text
                        class="energy-label-line2"
                        x="${p}"
                        y="${g}"
                        font-size="${h}"
                        fill="white"
                        opacity="0.92"
                    >
                        ${e.line2}
                    </text>
                `:""}

            ${e.line3?V`
                    <text
                        class="energy-label-line3"
                        x="${p}"
                        y="${y}"
                        font-size="${d}"
                        fill="white"
                        opacity="0.70"
                    >
                        ${e.line3}
                    </text>
                `:""}

        </g>

    `}(t,o)})}
        </g>
    `}const St=[{id:"solar",title:"SOL",icon:"solar",x:760,y:150,width:180,height:110},{id:"grid",title:"ELNÄT",icon:"grid",x:80,y:390,width:180,height:110},{id:"house",title:"HUSET",icon:"house",x:760,y:480,width:180,height:110},{id:"battery",title:"BATTERI",icon:"battery",x:1120,y:390,width:180,height:110},{id:"spa",title:"SPA",icon:"spa",x:550,y:700,width:180,height:110},{id:"heatpump",title:"VÄRMEPUMP",icon:"heatpump",x:760,y:800,width:180,height:110},{id:"appliance",title:"VITVAROR",icon:"appliance",x:970,y:800,width:180,height:110},{id:"car",title:"BIL",icon:"car",x:1200,y:800,width:180,height:110}],Et=[{id:"solar",title:"SOL",icon:"solar",x:160,y:120,width:110,height:70},{id:"grid",title:"ELNÄT",icon:"grid",x:25,y:270,width:110,height:70},{id:"house",title:"HUSET",icon:"house",x:160,y:370,width:110,height:70},{id:"battery",title:"BATTERI",icon:"battery",x:300,y:270,width:110,height:70},{id:"spa",title:"SPA",icon:"spa",x:25,y:550,width:105,height:70},{id:"heatpump",title:"VÄRMEPUMP",icon:"heatpump",x:25,y:470,width:105,height:70},{id:"appliance",title:"VITVAROR",icon:"appliance",x:300,y:550,width:105,height:70},{id:"car",title:"BIL",icon:"car",x:300,y:470,width:105,height:70}],Tt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solar,getEnd:t=>t.houseTop,getWaypoints:t=>[t.solarJunction,{x:t.houseTop.x,y:t.solarJunction.y}],color:"#FFD54A",particleColor:"#FFF4B0",width:10},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solar,getEnd:t=>t.batteryTop,getWaypoints:t=>[t.solarJunction,{x:t.batteryTop.x,y:t.solarJunction.y}],color:"#7ED7FF",particleColor:"#DFF6FF",width:10},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solar,getEnd:t=>t.gridTop,getWaypoints:t=>[t.solarJunction,{x:t.gridTop.x,y:t.solarJunction.y}],color:"#FFB84A",particleColor:"#FFF0B5",width:10},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLeft,getEnd:t=>t.houseTopRight,getWaypoints:t=>[{x:t.houseTopRight.x,y:t.batteryLeft.y}],color:"#59D990",particleColor:"#D9FFE8",width:9},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryUpperLeft,getEnd:t=>t.gridUpperRight,color:"#67F59B",particleColor:"#E2FFE8",width:9},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridRight,getEnd:t=>t.houseTopLeft,getWaypoints:t=>[{x:t.houseTopLeft.x,y:t.gridRight.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:9},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridUpperRight,getEnd:t=>t.batteryUpperLeft,color:"#8CC8FF",particleColor:"#EDF7FF",width:9},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomCenter,getEnd:t=>t.spa,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.houseBottomCenter.y+55},{x:t.spa.x,y:t.houseBottomCenter.y+55}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomCenter,getEnd:t=>t.heatpump,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.houseBottomCenter.y+55},{x:t.heatpump.x,y:t.houseBottomCenter.y+55}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.appliance,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.houseBottomCenter.y+55},{x:t.appliance.x,y:t.houseBottomCenter.y+55}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomRight,getEnd:t=>t.car,getWaypoints:t=>[{x:t.houseBottomRight.x,y:t.houseBottomRight.y+55},{x:t.car.x,y:t.houseBottomRight.y+55}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8}],Rt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solar,getEnd:t=>t.houseTop,getWaypoints:t=>[t.solarJunction,{x:t.houseTop.x,y:t.solarJunction.y}],color:"#FFD54A",particleColor:"#FFF4B0",width:10},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solar,getEnd:t=>t.batteryTop,getWaypoints:t=>[t.solarJunction,{x:t.batteryTop.x,y:t.solarJunction.y}],color:"#7ED7FF",particleColor:"#DFF6FF",width:10},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solar,getEnd:t=>t.gridTop,getWaypoints:t=>[t.solarJunction,{x:t.gridTop.x,y:t.solarJunction.y}],color:"#FFB84A",particleColor:"#FFF0B5",width:10},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLeft,getEnd:t=>t.houseTopRight,getWaypoints:t=>[{x:t.houseTopRight.x,y:t.batteryLeft.y}],color:"#59D990",particleColor:"#D9FFE8",width:9},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryUpperLeft,getEnd:t=>t.gridUpperRight,color:"#67F59B",particleColor:"#E2FFE8",width:9},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridRight,getEnd:t=>t.houseTopLeft,getWaypoints:t=>[{x:t.houseTopLeft.x,y:t.gridRight.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:9},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridUpperRight,getEnd:t=>t.batteryUpperLeft,color:"#8CC8FF",particleColor:"#EDF7FF",width:9},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomCenter,getEnd:t=>t.spaRight,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.spaRight.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8,radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomCenter,getEnd:t=>t.heatpumpRight,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.heatpumpRight.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8,radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.applianceLeft,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.applianceLeft.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8,radius:30},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomCenter,getEnd:t=>t.carLeft,getWaypoints:t=>[{x:t.houseBottomCenter.x,y:t.carLeft.y}],color:"#8CC8FF",particleColor:"#EDF7FF",width:8,radius:30}];const Mt=n`

:host {
    display: block;

    width: 100%;

    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
}
.card {
    position: relative;

    width: 100%;

    min-height: auto;

    overflow: visible;

    border-radius: 42px;

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
    height: 1080px;

    overflow: hidden;

    z-index: 4;
}

.scene-inner {
    position: absolute;

    left: 50%;
    top: 0px;

    transform:
    translateX(-50%)
    scale(1.0);

    transform-origin: top center;
}

.energy-node {

    opacity: 0.96;

    isolation: isolate;

    position: absolute;

    border-radius: 999px;

    overflow: visible;

    backdrop-filter:
    blur(36px);

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.07),
        rgba(255,255,255,0.025)
    );

    border:
    1px solid rgba(255,255,255,0.05);

    box-shadow:
    0 12px 40px rgba(0,0,0,0.22),
    inset 0 1px 0 rgba(255,255,255,0.03);

    z-index: 50;

    transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.energy-node.house {

    background:
    linear-gradient(
        180deg,
        rgba(70,130,255,0.24),
        rgba(35,80,180,0.16)
    );

    border:
    1px solid rgba(120,180,255,0.40);

    box-shadow:
    0 0 90px rgba(80,140,255,0.22),
    0 30px 90px rgba(0,0,0,0.40);
}

.energy-node.grid {

    border:
    1px solid rgba(255,120,120,0.32);

    box-shadow:
    0 0 40px rgba(255,80,80,0.14),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.battery {

    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;

    overflow: visible;

    z-index: 40;
}

.energy-node.battery .node-glow,
.energy-node.battery .node-shimmer,
.energy-node.battery .node-header,
.energy-node.battery .node-title,
.energy-node.battery .node-status,
.energy-node.battery .node-value,
.energy-node.battery .node-secondary {

    display: none !important;
}

.energy-node.battery .node-inner {

    inset: 0;
    padding: 0;

    background: none;
}

.energy-node.battery .node-visual {

    position: absolute;

    left: 50%;
    top: 50%;

    width: 190px;
    height: 300px;

    transform:
        translate(-50%, -50%);

    opacity: 1;

    filter: none;

    pointer-events: none;
}

.energy-node.car {

    border:
    1px solid rgba(180,120,255,0.30);

    box-shadow:
    0 0 50px rgba(180,120,255,0.12),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.spa {

    border:
    1px solid rgba(100,220,255,0.26);

    box-shadow:
    0 0 40px rgba(100,220,255,0.10),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.solar {

    border:
    1px solid rgba(255,220,120,0.30);

    box-shadow:
    0 0 60px rgba(255,220,120,0.14),
    0 20px 60px rgba(0,0,0,0.30);
}

.energy-node.secondary {

    opacity: 0.84;

    backdrop-filter:
    blur(22px);

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.035),
        rgba(255,255,255,0.015)
    );

    border:
    1px solid rgba(255,255,255,0.035);

    box-shadow:
    0 10px 30px rgba(0,0,0,0.18);

    transform:
    scale(0.96);
}

.energy-node.secondary .node-title {

    font-size: 15px;

    opacity: 0.88;
}

.energy-node.secondary .node-value {

    font-size: 18px;

    margin-left: 58px;

    opacity: 0.92;
}

.energy-node.secondary .node-status {

    font-size: 9px;

    opacity: 0.70;
}

.energy-node.secondary .node-icon {

    width: 42px;
    height: 42px;

    opacity: 0.75;

    filter:
    drop-shadow(0 0 6px currentColor);
}

.energy-node:hover {

    transform:
    translateY(-1px)
    scale(1.01);

    box-shadow:
    0 16px 50px rgba(0,0,0,0.30),
    0 0 18px rgba(255,255,255,0.04);
}

.node-glow {

    position: absolute;

    inset: -35%;

    background:
    radial-gradient(
        circle at center,
        rgba(255,255,255,0.08),
        transparent 72%
    );

    opacity: 0.35;

    z-index: 0;
}

.node-shimmer {

    position: absolute;

    inset: 0;

    background:
    linear-gradient(
        135deg,
        rgba(255,255,255,0.06),
        transparent 35%
    );

    opacity: 0.22;

    pointer-events: none;

    z-index: 1;
}

.node-inner {

    position: absolute;

    inset: 0;

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 22px 26px;

    z-index: 2;
}

.node-header {

    display: flex;

    align-items: center;

    justify-content: flex-start;

    gap: 16px;

    margin-bottom: 12px;
}

.node-text {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: center;

    flex: 1;
}

.node-content {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    justify-content: center;

    gap: 2px;

    flex: 1;
}

.node-visual {

    width: 72px;

    height: 72px;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;

    color: rgba(255,255,255,0.96);

    filter:
    drop-shadow(0 0 12px currentColor);

    opacity: 0.95;
}

.energy-node.house .node-visual {

    color: #4da3ff;
}

.energy-node.battery .node-visual {

    color: #55ff88;
}

.energy-node.grid .node-visual {

    color: #ff6a6a;
}

.energy-node.car .node-visual {

    color: #b066ff;
}

.energy-node.spa .node-visual {

    color: #39cfff;
}

.energy-node.solar .node-visual {

    color: #ffd34d;
}

.node-icon {

    width: 100%;

    height: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-shrink: 0;
}

.node-icon svg {

    width: 100%;
    height: 100%;

    overflow: visible;
}

.node-title {

    color: rgba(255,255,255,0.96);

    font-size: 18px;

    font-weight: 700;

    line-height: 1;

    text-transform: uppercase;

    letter-spacing: 0.05em;
}

.node-value {

    color: white;

    font-size: 24px;

    font-weight: 700;

    line-height: 1;

    letter-spacing: -0.04em;

    text-shadow:
    0 0 10px rgba(255,255,255,0.12);

    margin-left: 68px;

    margin-top: 10px;

    white-space: nowrap;
}

.node-status {

    margin-top: 4px;

    color: rgba(255,255,255,0.58);

    font-size: 10px;

    font-weight: 500;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.node-secondary {

    margin-top: 6px;
    color: rgba(255,255,255,0.70);
    font-size: 24px;
    font-weight: 700;
    opacity: 0.92;
}

.side-panel {
    position: absolute;

    top: 40px;

    width: 260px;

    min-height: 430px;

    padding: 32px;

    border-radius: 24px;

    border:
    1px solid rgba(255,255,255,0.06);

    backdrop-filter:
    blur(40px);

    z-index: 20;

    display: flex;
    flex-direction: column;

    transition:
    background 0.8s ease,
    border-color 0.8s ease,
    box-shadow 0.8s ease;

    box-shadow:
    0 20px 60px rgba(0,0,0,0.35);
}

.energy-node.secondary {

    opacity: 0.88;

    backdrop-filter:
    blur(24px);
}

.energy-node.secondary .node-title {

    font-size: 18px;
}

.energy-node.secondary .node-status {

    font-size: 11px;

    opacity: 0.8;
}

.energy-node.secondary .node-value {

    font-size: 22px;

    margin-left: 0;

    margin-top: 8px;
}

.energy-node.secondary .node-secondary {

    font-size: 16px;

    margin-top: 4px;
}

.node-active-solar {
    box-shadow:
    0 0 50px rgba(255,220,80,0.16);
}

.node-active-grid {
    box-shadow:
    0 0 50px rgba(255,120,120,0.16);
}

.node-active-house {
    box-shadow:
    0 0 50px rgba(80,160,255,0.16);
}

.node-active-battery {
    box-shadow:
    0 0 50px rgba(80,255,160,0.16);
}

/* DAG */

.card.day .side-panel,
.card.morning .side-panel {

    background:
    linear-gradient(
        180deg,
        rgba(28,45,65,0.42),
        rgba(16,28,42,0.42)
    );

    border:
    1px solid rgba(255,255,255,0.08);
}

/* KVÄLL */

.card.sunset .side-panel,
.card.evening .side-panel {

    background:
    linear-gradient(
        180deg,
        rgba(24,30,48,0.55),
        rgba(14,20,34,0.55)
    );

    border:
    1px solid rgba(255,200,120,0.08);

    box-shadow:
    0 20px 60px rgba(0,0,0,0.45),
    0 0 30px rgba(255,180,90,0.05);
}

/* NATT */

.card.night .side-panel {

    background:
    linear-gradient(
        180deg,
        rgba(12,20,34,0.68),
        rgba(8,14,24,0.72)
    );

    border:
    1px solid rgba(120,180,255,0.08);

    box-shadow:
    0 20px 70px rgba(0,0,0,0.55),
    0 0 40px rgba(70,120,255,0.06);
}

.side-title {

    display: flex;
    align-items: center;

    gap: 10px;

    color:
    rgba(255,255,255,0.96);

    font-size: 15px;

    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: 0.20em;

    margin-bottom: 24px;

    text-shadow:
    0 0 12px rgba(255,255,255,0.08);
}

.side-stat {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.side-label {
    color: rgba(255,255,255,0.55);

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.side-value {

    color: white;

    font-size: 20px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -0.03em;

    transition:
    color 0.4s ease,
    text-shadow 0.4s ease;
}

.value-solar {
    color: rgba(255, 220, 90, 0.95);

    text-shadow:
    0 0 10px rgba(255,220,90,0.12);
}

.value-battery {
    color: rgba(110, 255, 170, 0.95);

    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}

.value-export {
    color: rgba(120, 190, 255, 0.95);

    text-shadow:
    0 0 10px rgba(120,190,255,0.10);
}

.value-grid {
    color: rgba(255, 185, 110, 0.95);

    text-shadow:
    0 0 10px rgba(255,185,110,0.10);
}

.value-money {
    color: rgba(110,255,170,0.95);

    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}

.value-total {
    color: rgba(255,255,255,0.95);
}

.value-independence {
    color: rgba(120,220,255,0.95);

    text-shadow:
    0 0 10px rgba(120,220,255,0.10);
}

.value-co2 {
    color: rgba(110,255,170,0.95);

    text-shadow:
    0 0 10px rgba(110,255,170,0.10);
}

.value-solar {
    text-shadow:
    0 0 14px rgba(255,220,90,0.18);
}

.value-battery {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}

.value-export {
    text-shadow:
    0 0 14px rgba(120,190,255,0.18);
}

.value-grid {
    text-shadow:
    0 0 14px rgba(255,185,110,0.18);
}

.value-money {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}

.value-independence {
    text-shadow:
    0 0 14px rgba(120,220,255,0.18);
}

.value-co2 {
    text-shadow:
    0 0 14px rgba(110,255,170,0.18);
}

.side-divider {
    height: 1px;

    margin: 16px 0;

    background:
    linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.08),
        transparent
    );
}

.footer {

    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 40px;

    min-height: 140px;

    padding: 28px 40px;

    background:
    rgba(10,18,28,0.92);

    border-top:
    1px solid rgba(255,255,255,0.08);

    backdrop-filter:
    blur(30px);
    
    flex-wrap: wrap;
}

.metric {
    display: flex;
    flex-direction: column;

    gap: 10px;
}

.metric-label {
    color: rgba(255,255,255,0.50);

    font-size: 13px;

    text-transform: uppercase;

    letter-spacing: 0.08em;
}

.metric-value {
    color: white;

    font-size: 36px;

    font-weight: 700;

    letter-spacing: -0.02em;
}

.solar-hub {

    position: absolute;

    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 30;
}

.solar-hub-icon {

    font-size: 72px;

    line-height: 1;

    color: #FFD54A;

    text-shadow:
    0 0 20px rgba(255,213,74,0.9),
    0 0 60px rgba(255,213,74,0.45);
}

.solar-hub-label {

    margin-top: -2px;

    font-size: 18px;

    font-weight: 700;

    letter-spacing: 0.12em;

    color: white;
}

.solar-hub-value {

    font-size: 28px;

    font-weight: 700;

    color: white;

    text-shadow:
    0 0 10px rgba(255,255,255,0.45);
}

.solar-hub-card {

    box-sizing: border-box;

    width: 100%;

    height: 100%;

    padding: 22px 28px;

    border-radius: 28px;

    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,0.12),
        rgba(255,255,255,0.05)
    );

    border:
    1px solid rgba(255,255,255,0.12);

    backdrop-filter:
    blur(24px);

    box-shadow:
    0 20px 60px rgba(0,0,0,0.30),
    0 0 50px rgba(255,210,80,0.08);
}

.solar-hub-header {

    display: flex;

    align-items: center;

    gap: 16px;
}

.solar-hub-title-group {

    display: flex;

    flex-direction: column;
}

.solar-hub-subtitle {

    margin-top: 4px;

    color:
    rgba(255,255,255,0.55);

    font-size: 12px;

    letter-spacing: 0.06em;

    text-transform: uppercase;
}

.solar-hub-times {

    display: flex;

    justify-content: space-between;

    margin-top: 16px;

    color:
    rgba(255,255,255,0.80);

    font-size: 14px;
}

@media (max-width: 900px) {

    .scene-inner {

    width: 430px;
    height: 1180px;

    top: 0;

    transform:
        translateX(-50%)
        scale(1);
    }

    .scene {
    height: 1180px;
    }

    .side-panel {
    display: none;
    }

    .energy-node {

    border-radius: 999px;

    backdrop-filter: blur(24px);
    }

    .node-inner {

    padding: 14px 16px;
    }

    .node-header {

    gap: 8px;

    margin-bottom: 6px;
    }

    .node-icon {

    width: 24px;
    height: 24px;
    }

    .node-title {

    font-size: 14px;

    letter-spacing: 0.08em;
    }

    .node-status {

    font-size: 9px;
    }

    .node-value {

    font-size: 18px;

    margin-left: 0;

    margin-top: 6px;
    }

    .node-secondary {

    font-size: 14px;

    margin-top: 2px;
    }

    .energy-node.secondary .node-title {

    font-size: 12px;
    }

    .energy-node.secondary .node-status {

    font-size: 8px;
    }

    .energy-node.secondary .node-value {

    font-size: 14px;
    }

    .energy-node.secondary .node-secondary {

    font-size: 11px;
    }

    .solar-hub-card {

    width: 100%;

    padding: 12px 16px;

    border-radius: 28px;
    }

    .solar-hub-icon {

    font-size: 40px;
    }

    .solar-hub-value {

    font-size: 18px;
    }

    .solar-hub-label {

    font-size: 12px;
    }

    .solar-hub-subtitle {

    font-size: 9px;
    }

    .solar-hub-times {

    font-size: 10px;
    }

.energy-node.battery-hidden {
    display: none !important;
}

.energy-node.battery-asset {

    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    backdrop-filter: none !important;
}

.energy-node.battery-asset .node-glow,
.energy-node.battery-asset .node-shimmer,
.energy-node.battery-asset .node-header,
.energy-node.battery-asset .node-title,
.energy-node.battery-asset .node-status,
.energy-node.battery-asset .node-value {

    display: none !important;
}

.energy-node.battery-asset .node-secondary {

    position: absolute;

    left: 50%;
    top: 220px;

    transform: translateX(-50%);

    font-size: 34px;

    font-weight: 800;

    color: #55ff88;

    text-shadow:
        0 0 12px rgba(80,255,160,0.8);

    z-index: 20;
}
}
${n`
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

.animated-flow {

    filter:
    drop-shadow(0 0 14px currentColor)
    drop-shadow(0 0 28px currentColor)
    drop-shadow(0 0 56px currentColor)
    drop-shadow(0 0 96px currentColor);

    stroke-dasharray: 44;

    animation:
    flowMove 0.7s linear infinite;
}

@keyframes flowMove {

    from {
    stroke-dashoffset: 88;
    }

    to {
    stroke-dashoffset: 0;
    }
}
`}

${n`

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

.scene-sun-disc {

    position: absolute;

    width: 64px;
    height: 64px;

    border-radius: 50%;

    transform: translateX(-50%);

    background:
    radial-gradient(
        circle,
        rgba(255,230,120,1) 0%,
        rgba(255,210,80,1) 60%,
        rgba(255,180,50,0.95) 100%
    );

    box-shadow:
    0 0 20px rgba(255,210,80,0.8),
    0 0 50px rgba(255,210,80,0.5),
    0 0 70px rgba(255,210,80,0.25);

    z-index: 999;

    transition:
    left 2s ease,
    top 2s ease;
}

.solar-production-label {
    position: absolute;

    transform: translateX(-50%);

    color: white;

    font-size: 22px;
    font-weight: 700;

    text-shadow:
    0 0 8px rgba(255,220,100,0.8),
    0 0 18px rgba(255,220,100,0.4);

    z-index: 30;

    pointer-events: none;
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

.solar-time {

    display: flex;

    align-items: center;

    gap: 8px;
}

.solar-arrow {

    color: #FFD54A;

    font-weight: 700;
}
`}

.debug-panel {

    position:absolute;

    left:20px;
    top:20px;

    width:320px;

    padding:12px;

    border-radius:12px;

    background:rgba(0,0,0,.70);

    backdrop-filter:blur(10px);

    color:white;

    font-size:13px;

    font-family:monospace;

    z-index:5000;

}

.debug-title {

    font-size:15px;

    font-weight:700;

    margin-bottom:8px;

}

.debug-row {

    display:flex;

    justify-content:space-between;

    margin:2px 0;

}

`,Lt=n`

.battery-overlay {

    position: absolute;

    left: 1120px;
    top: 585px;

    width: 90px;

    text-align: center;

    pointer-events: none;

    user-select: none;
}

.battery-soc {

    color: #61ff8b;

    font-size: 36px;
    font-weight: 700;

    line-height: 1;

    text-shadow:
        0 0 8px rgba(0,0,0,.70),
        0 0 18px rgba(97,255,139,.20);
}

.battery-power {

    margin-top: 6px;

    color: rgba(255,255,255,.92);

    font-size: 15px;
    font-weight: 500;

    text-shadow:
        0 0 6px rgba(0,0,0,.70);
}

`;function Pt(t){return I`

        <style>
            ${Lt}
        </style>

        <div class="battery-overlay">

            <div
                class="battery-soc"
                style="color:${e=t.batteryPower,e>25?"#61ff8b":e<-25?"#ffb347":"#ffffff"};"
            >
                ${Math.round(t.batterySoc)}%
            </div>

            <div class="battery-power">
                ${function(t){return Math.abs(t)>=1e3?`${(t/1e3).toFixed(2)} kW`:`${Math.round(t)} W`}(t.batteryPower)}
            </div>

        </div>

    `;var e}let zt=class extends ht{constructor(){super(...arguments),this.activeLayout=yt,this.forcedLayoutMode="auto",this.cardWidth=1920,this.sceneScale=1,this.layoutReady=!1}static{this.styles=Mt}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{const e=t[0].contentRect.width,o=t[0].contentRect.height,r=e/Math.max(o,1);console.log("CARD WIDTH:",e),console.log("ACTIVE LAYOUT:",e<=900?"mobile":e<=1400?"tablet":"desktop"),this.cardWidth=e,this.sceneScale=1,this.activeLayout=function(t){const{width:e,height:o,aspectRatio:r,layoutMode:i}=t;return"panel"===i?yt:"sidebar"===i||"masonry"===i||"sections"===i||e<=900?xt:e<=1400?bt:(console.log("[Responsive]",{width:e,height:o,aspectRatio:r,layoutMode:i}),yt)}({width:e,height:o,aspectRatio:r,layoutMode:this.forcedLayoutMode}),this.layoutReady=!0})}disconnectedCallback(){this.resizeObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){this.resizeObserver?.observe(this.renderRoot.querySelector(".card"))}setConfig(t){this.config=t,this.forcedLayoutMode=t?.layout_mode??"auto"}render(){if(!this.layoutReady)return I`
        <ha-card class="ha-wrapper">
          <div class="card"></div>
        </ha-card>
      `;const t=function(t){const e=e=>{const o=t?.states?.[e]?.state,r=Number(o);return isNaN(r)?0:r};return{"solar-house":ft("solar-house",e("sensor.solar_battery_economy_energy_system_power_solar_house")),"solar-battery":ft("solar-battery",e("sensor.solar_battery_economy_energy_system_power_solar_battery")),"solar-export":ft("solar-export",e("sensor.solar_battery_economy_energy_system_power_solar_export")),"battery-house":ft("battery-house",e("sensor.solar_battery_economy_energy_system_power_battery_house")),"battery-grid":ft("battery-grid",e("sensor.solar_battery_economy_energy_system_power_battery_grid")),"grid-house":ft("grid-house",e("sensor.solar_battery_economy_energy_system_power_grid_house")),"grid-battery":ft("grid-battery",e("sensor.solar_battery_economy_energy_system_power_grid_battery")),"house-spa":ft("house-spa",e("sensor.plugg_spabad_power")),"house-car":ft("house-car",e("sensor.volvo_ec40_charging_power")),"house-heatpump":ft("house-heatpump",e("sensor.thermia_power_estimator_total_effekt")),"house-appliance":ft("house-appliance",e("sensor.vitvaror_effekt"))}}(this.hass),e=function(t){const e=Number(t.states["sensor.solar_battery_economy_energy_system_power_solar_house"]?.state??0)+Number(t.states["sensor.solar_battery_economy_energy_system_power_solar_battery"]?.state??0)+Number(t.states["sensor.solar_battery_economy_energy_system_power_solar_export"]?.state??0),o="above_horizon"===t?.states?.["sun.sun"]?.state?"Över horisonten":"Under horisonten",r=Number(t.states["sensor.solar_battery_economy_financial_31_battery_utilization"]?.state??0),i=Number(t.states["sensor.solar_battery_economy_financial_03_savings_today"]?.state??0),s=Number(t.states["sensor.solar_battery_economy_financial_33_co2_saved"]?.state??0),n=Number(t.states["sensor.solar_battery_economy_financial_32_solar_self_consumption_rate"]?.state??0),a=Number(t.states["sensor.solar_battery_economy_energy_system_energy_battery_house"]?.state??0),l=Number(t.states["sensor.solar_battery_economy_energy_system_energy_solar_export"]?.state??0),h=Number(t.states["sensor.solar_battery_economy_energy_system_energy_grid_house"]?.state??0),d=Number(t.states["sensor.solar_battery_economy_financial_01_total_savings"]?.state??0),p=Number(t.states["sensor.solar_battery_economy_financial_30_grid_independence"]?.state??0),c=Number(t.states["sensor.saj_battery_energy_percent"]?.state??0),u=Number(t.states["sensor.saj_realtime_battery_power"]?.state??0),g=u<-1?"Laddar":u>1?"Urladdar":"Standby",y=Number(t.states["sensor.solar_battery_economy_energy_system_power_solar_house"]?.state??0),x=Number(t.states["sensor.solar_battery_economy_energy_system_power_battery_house"]?.state??0),b=Number(t.states["sensor.solar_battery_economy_energy_system_power_grid_house"]?.state??0),f=y+x+b,m=[];y>1&&m.push("Sol"),x>1&&m.push("Batteri"),b>1&&m.push("Elnät");const w=m.length>0?m.join(" + "):"Ingen last",_=Number(t.states["sensor.solar_battery_economy_energy_system_power_house_grid"]?.state??0),$=Number(t.states["sensor.solar_battery_economy_energy_system_power_battery_grid"]?.state??0),v=b+Number(t.states["sensor.solar_battery_economy_energy_system_power_grid_battery"]?.state??0)-_-$-Number(t.states["sensor.solar_battery_economy_energy_system_power_solar_export"]?.state??0),A=v>1?"Importerar":v<-1?"Exporterar":"Balans",F=Number(t.states["sensor.volvo_ec40_charging_power"]?.state??0),C=Number(t.states["sensor.volvo_ec40_batteri"]?.state??0),k=t.states["sensor.volvo_ec40_charging_status"]?.state??"Okänd",S=Number(t.states["sensor.plugg_spabad_power"]?.state??0),E=Number(t.states["climate.spa_thermostat"]?.attributes?.current_temperature??0),T=t.states["climate.spa_thermostat"]?.state??"",R=t.states["climate.spa_thermostat"]?.attributes?.hvac_action??"",M="off"===T?"Av":"heating"===R?"Värmer":"Standby",L=Number(t.states["sensor.thermia_power_estimator_total_effekt"]?.state??0),P=t.states["sensor.thermia_power_estimator_driftlage"]?.state??"Okänd",z=Number(t.states["sensor.vitvaror_effekt"]?.state??0);return{solarPower:e,solarStatus:o,batteryToHouse:a,solarExportEnergy:l,gridToHouseEnergy:h,systemEfficiency:r,savingsToday:i,totalSavings:d,gridIndependence:p,co2Saved:s,selfSufficiency:n,batterySoc:c,batteryPower:u,batteryStatus:g,housePower:f,houseStatus:w,gridPower:v,gridStatus:A,carPower:F,carSoc:C,carStatus:k,spaPower:S,spaTemperature:E,spaStatus:M,heatpumpPower:L,heatpumpStatus:P,appliancePower:z,applianceStatus:z>1?"Aktiv":"Standby"}}(this.hass),o=this.activeLayout,r=function(t){const e=t?.states?.["sun.sun"];if(!e)return"day";const o=Number(e.attributes?.elevation??0);return"above_horizon"===e.state?o<8?"morning":o<20?"sunset":"day":"night"}(this.hass),i=function(t){const e=t?.states?.["sun.sun"];if(!e)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const o=Number(e.attributes?.elevation??0),r=Number(e.attributes?.azimuth??180),i="above_horizon"===e.state,s=Math.max(0,Math.min(1,(r-90)/180));return{progress:s,aboveHorizon:i,left:100*s,top:Math.max(40,280-6*o),sunrise:new Date(e.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(e.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),s=function(t,e){const o=t?.states?.["weather.smhi_weather"],r=Number(o?.attributes?.cloud_coverage??0)>40;switch(e){case"night":return r?`${mt}/night/villa_night_cloudy.webp`:`${mt}/night/villa_night_clear.webp`;case"sunset":return`${mt}/evening/villa_evening.webp`;default:return r?`${mt}/day/villa_day_cloudy.webp`:`${mt}/day/villa_day_clear.webp`}}(this.hass,r);return I`
      <ha-card class="ha-wrapper">

        <div class="card ${r}">

          <div class="scene">

            <div
              class="scene-inner"
              style="
                width:${o.sceneWidth}px;
                height:${o.sceneHeight}px;

                transform:
                  translateX(-50%)
                  scale(${this.sceneScale});
              "
            >
              ${!1}
              <div
                class="hero-background"
                style="
                  background-image:
                    linear-gradient(
                      to bottom,
                      rgba(5,10,20,0.08),
                      rgba(5,10,20,0.25)
                    ),
                    url('${s}');
                "
              ></div>

              ${function(t){return I`
        ${Pt(t)}
    `}(e)}

              <div class="background-glow"></div>

              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${i.top}px;
                "
              ></div>

              <div class="scene-vignette"></div>

              ${function(t,e){const{centerX:o,centerY:r,width:i,height:s,sunRadius:n}=e.solarArc,a={x:o-i/2,y:r+s},l={x:o,y:r-20},h={x:o+i/2,y:r+s},d=function(t,e,o,r){const i=1-t;return{x:i*i*e.x+2*i*t*o.x+t*t*r.x,y:i*i*e.y+2*i*t*o.y+t*t*r.y}}(t.progress,a,l,h);return V`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${o-i/2}
            ${r+s}

          Q ${o}
            ${r-20}

            ${o+i/2}
            ${r+s}
        "
        class="solar-arc-path"
      />
      ${t.aboveHorizon?V`
              <circle
                  cx="${d.x}"
                  cy="${d.y}"
                  r="${n}"
                  class="solar-arc-sun"
              />
          `:V``}
      <text
          x="${o-i/2}"
          y="${r+s+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${t.sunrise}
      </text>
      <text
          x="${o+i/2}"
          y="${r+s+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${t.sunset}
      </text>
    </svg>
  `}(i,o)}

              <div
                class="flow-layer"
                style="
                  width:${o.sceneWidth}px;
                  height:${o.sceneHeight}px;
                "
              >
                ${function(t,e,o){const r=t.sceneWidth<1e3?Et:St,i=t.sceneWidth<1e3?Rt:Tt,s=function(t,e){const o=t.nodes.house,r=t.nodes.battery,i=t.nodes.grid;t.nodes.heatpump,t.nodes.appliance;const s=e.find(t=>"solar"===t.id),n=e.find(t=>"house"===t.id),a=e.find(t=>"battery"===t.id),l=e.find(t=>"grid"===t.id),h=e.find(t=>"spa"===t.id),d=e.find(t=>"heatpump"===t.id),p=e.find(t=>"appliance"===t.id),c=e.find(t=>"car"===t.id);return{houseAnchorLeft:{x:n.x,y:n.y+n.height/2},houseAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},houseAnchorTop:{x:n.x+n.width/2,y:n.y},houseAnchorTopLeft:{x:n.x+n.width/2-10,y:n.y},houseAnchorTopCenter:{x:n.x+n.width/2,y:n.y},houseAnchorTopRight:{x:n.x+n.width/2+10,y:n.y},houseAnchorBottom:{x:n.x+n.width/2,y:n.y+n.height},houseAnchorBottomLeft:{x:n.x+.25*n.width,y:n.y+n.height},houseAnchorBottomCenter:{x:n.x+.5*n.width,y:n.y+n.height},houseAnchorBottomRight:{x:n.x+.75*n.width,y:n.y+n.height},batteryAnchorLeft:{x:a.x,y:a.y+a.height/2},batteryAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},batteryAnchorTop:{x:a.x+a.width/2,y:a.y},batteryAnchorUpperLeft:{x:a.x,y:a.y+.25*a.height},batteryAnchorBottom:{x:a.x+a.width/2,y:a.y+a.height},gridAnchorLeft:{x:l.x,y:l.y+l.height/2},gridAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},gridAnchorTop:{x:l.x+l.width/2,y:l.y},gridAnchorUpperRight:{x:l.x+l.width,y:l.y+.25*l.height},gridAnchorBottom:{x:l.x+l.width/2,y:l.y+l.height},solarAnchorLeft:{x:s.x,y:s.y+s.height/2},solarAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},solarAnchorBottom:{x:s.x+s.width/2,y:s.y+s.height},solarJunction:{x:s.x+s.width/2,y:s.y+s.height+55},houseCenter:{x:o.x+o.width/2,y:o.y+o.height/2},batteryCenter:{x:r.x+r.width/2,y:r.y+r.height/2},gridCenter:{x:i.x+i.width/2,y:i.y+i.height/2},spaAnchorLeft:{x:h.x,y:h.y+h.height/2},spaAnchorRight:{x:h.x+h.width,y:h.y+h.height/2},spaAnchorTop:{x:h.x+h.width/2,y:h.y},heatpumpAnchorLeft:{x:d.x,y:d.y+d.height/2},heatpumpAnchorRight:{x:d.x+d.width,y:d.y+d.height/2},heatpumpAnchorTop:{x:d.x+d.width/2,y:d.y},applianceAnchorLeft:{x:p.x,y:p.y+p.height/2},applianceAnchorRight:{x:p.x+p.width,y:p.y+p.height/2},applianceAnchorTop:{x:p.x+p.width/2,y:p.y},carAnchorLeft:{x:c.x,y:c.y+c.height/2},carAnchorRight:{x:c.x+c.width,y:c.y+c.height/2},carAnchorTop:{x:c.x+c.width/2,y:c.y}}}(t,r),n=function(t){return{solar:t.solarAnchorBottom,gridLeft:t.gridAnchorLeft,gridRight:t.gridAnchorRight,gridTop:t.gridAnchorTop,gridBottom:t.gridAnchorBottom,gridUpperRight:t.gridAnchorUpperRight,batteryLeft:t.batteryAnchorLeft,batteryRight:t.batteryAnchorRight,batteryTop:t.batteryAnchorTop,batteryBottom:t.batteryAnchorBottom,batteryUpperLeft:t.batteryAnchorUpperLeft,houseLeft:t.houseAnchorLeft,houseRight:t.houseAnchorRight,houseTop:t.houseAnchorTop,houseBottom:t.houseAnchorBottom,houseBottomLeft:t.houseAnchorBottomLeft,houseBottomCenter:t.houseAnchorBottomCenter,houseBottomRight:t.houseAnchorBottomRight,houseTopLeft:t.houseAnchorTopLeft,houseTopCenter:t.houseAnchorTopCenter,houseTopRight:t.houseAnchorTopRight,spaLeft:t.spaAnchorLeft,spaRight:t.spaAnchorRight,spa:t.spaAnchorTop,heatpumpLeft:t.heatpumpAnchorLeft,heatpumpRight:t.heatpumpAnchorRight,heatpump:t.heatpumpAnchorTop,applianceLeft:t.applianceAnchorLeft,applianceRight:t.applianceAnchorRight,appliance:t.applianceAnchorTop,carLeft:t.carAnchorLeft,carRight:t.carAnchorRight,car:t.carAnchorTop,solarJunction:t.solarJunction,grid:t.gridAnchorRight,battery:t.batteryAnchorLeft,house:t.houseAnchorRight}}(s);return V`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${vt(n,e,i)}

    ${kt(r,o)}
  </svg>
`}(this.activeLayout,t,e)}
              </div>

            </div>

          </div>

        </div>

      </ha-card>
    `}};t([ut({attribute:!1})],zt.prototype,"hass",void 0),t([ut({attribute:!1})],zt.prototype,"config",void 0),t([gt()],zt.prototype,"activeLayout",void 0),t([gt()],zt.prototype,"forcedLayoutMode",void 0),t([gt()],zt.prototype,"cardWidth",void 0),t([gt()],zt.prototype,"sceneScale",void 0),t([gt()],zt.prototype,"layoutReady",void 0),zt=t([(t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("solar-battery-economy-flow-card")],zt);export{zt as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
