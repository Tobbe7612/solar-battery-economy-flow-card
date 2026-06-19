function e(e,t,r,o){var s,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(i<3?s(a):i>3?s(t,r,a):s(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,r=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class i{constructor(e,t,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(t,e))}return e}toString(){return this.cssText}}const a=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:n,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,y=g?g.emptyScript:"",x=u.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},f=(e,t)=>!n(e,t),_={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:f};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class m extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);s?.call(this,t),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...c(e),...h(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(r)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const r of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:v).toAttribute(t,r.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=o;const i=s.fromAttribute(t,e.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(e,t,r,o=!1,s){if(void 0!==e){const i=this.constructor;if(!1===o&&(s=this[e]),r??=i.getPropertyOptions(e),!((r.hasChanged??f)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:s},i){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==s||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}m.elementStyles=[],m.shadowRootOptions={mode:"open"},m[b("elementProperties")]=new Map,m[b("finalized")]=new Map,x?.({ReactiveElement:m}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=e=>e,A=w.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,T=`<${C}>`,F=document,M=()=>F.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,L=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,B=/"/g,D=/^(?:script|style|textarea|title)$/i,I=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),j=I(1),W=I(2),V=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Y=new WeakMap,X=F.createTreeWalker(F,129);function q(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const J=(e,t)=>{const r=e.length-1,o=[];let s,i=2===t?"<svg>":3===t?"<math>":"",a=H;for(let t=0;t<r;t++){const r=e[t];let n,d,l=-1,c=0;for(;c<r.length&&(a.lastIndex=c,d=a.exec(r),null!==d);)c=a.lastIndex,a===H?"!--"===d[1]?a=z:void 0!==d[1]?a=N:void 0!==d[2]?(D.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=L):void 0!==d[3]&&(a=L):a===L?">"===d[0]?(a=s??H,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?L:'"'===d[3]?B:U):a===B||a===U?a=L:a===z||a===N?a=H:(a=L,s=void 0);const h=a===L&&e[t+1].startsWith("/>")?" ":"";i+=a===H?r+T:l>=0?(o.push(n),r.slice(0,l)+E+r.slice(l)+S+h):r+S+(-2===l?t:h)}return[q(e,i+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class K{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let s=0,i=0;const a=e.length-1,n=this.parts,[d,l]=J(e,t);if(this.el=K.createElement(d,r),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=X.nextNode())&&n.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[i++],r=o.getAttribute(e).split(S),a=/([.?@])?(.*)/.exec(t);n.push({type:1,index:s,name:a[2],strings:r,ctor:"."===a[1]?re:"?"===a[1]?oe:"@"===a[1]?se:te}),o.removeAttribute(e)}else e.startsWith(S)&&(n.push({type:6,index:s}),o.removeAttribute(e));if(D.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],M()),X.nextNode(),n.push({type:2,index:++s});o.append(e[t],M())}}}else if(8===o.nodeType)if(o.data===C)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)n.push({type:7,index:s}),e+=S.length-1}s++}}static createElement(e,t){const r=F.createElement("template");return r.innerHTML=e,r}}function Z(e,t,r=e,o){if(t===V)return t;let s=void 0!==o?r._$Co?.[o]:r._$Cl;const i=P(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),void 0===i?s=void 0:(s=new i(e),s._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=s:r._$Cl=s),void 0!==s&&(t=Z(e,s._$AS(e,t.values),s,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??F).importNode(t,!0);X.currentNode=o;let s=X.nextNode(),i=0,a=0,n=r[0];for(;void 0!==n;){if(i===n.index){let t;2===n.type?t=new ee(s,s.nextSibling,this,e):1===n.type?t=new n.ctor(s,n.name,n.strings,this,e):6===n.type&&(t=new ie(s,this,e)),this._$AV.push(t),n=r[++a]}i!==n?.index&&(s=X.nextNode(),i++)}return X.currentNode=F,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),P(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new K(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const s of e)o===t.length?t.push(r=new ee(this.O(M()),this.O(M()),this,this.options)):r=t[o],r._$AI(s),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=G}_$AI(e,t=this,r,o){const s=this.strings;let i=!1;if(void 0===s)e=Z(this,e,t,0),i=!P(e)||e!==this._$AH&&e!==V,i&&(this._$AH=e);else{const o=e;let a,n;for(e=s[0],a=0;a<s.length-1;a++)n=Z(this,o[r+a],t,a),n===V&&(n=this._$AH[a]),i||=!P(n)||n!==this._$AH[a],n===G?e=G:e!==G&&(e+=(n??"")+s[a+1]),this._$AH[a]=n}i&&!o&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class se extends te{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??G)===V)return;const r=this._$AH,o=e===G&&r!==G||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==G&&(r===G||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae=w.litHtmlPolyfillSupport;ae?.(K,ee),(w.litHtmlVersions??=[]).push("3.3.3");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=r?.renderBefore??null;o._$litPart$=s=new ee(t.insertBefore(M(),e),e,void 0,r??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}de._$litElement$=!0,de.finalized=!0,ne.litElementHydrateSupport?.({LitElement:de});const le=ne.litElementPolyfillSupport;le?.({LitElement:de}),(ne.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:f},he=(e=ce,t,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(void 0===i&&globalThis.litPropertyMetadata.set(s,i=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const s=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,s,e,!0,r)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const s=this[o];t.call(this,r),this.requestUpdate(o,s,e,!0,r)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(e){return(t,r)=>"object"==typeof r?he(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return pe({...e,state:!0,attribute:!1})}const ge={sceneWidth:1920,sceneHeight:1080,panels:{left:{x:40,y:40},right:{x:1620,y:40}},nodes:{solar:{id:"solar",label:"SOL",x:820,y:140,width:300,height:140},house:{id:"house",label:"HUSET",x:930,y:590,width:220,height:125},battery:{id:"battery",label:"BATTERI",x:1240,y:420,width:180,height:130},grid:{id:"grid",label:"ELNÄT",x:450,y:420,width:180,height:130},spa:{id:"spa",label:"SPA",x:540,y:810,width:170,height:100},heatpump:{id:"heatpump",label:"VP",x:760,y:810,width:140,height:70},appliance:{id:"appliance",label:"APP",x:980,y:810,width:140,height:70},car:{id:"car",label:"BIL",x:1200,y:810,width:170,height:100}}},ye={sceneWidth:430,sceneHeight:1180,panels:{left:{x:0,y:0},right:{x:0,y:0}},nodes:{solar:{id:"solar",label:"SOL",x:150,y:40,width:160,height:135},grid:{id:"grid",label:"ELNÄT",x:25,y:240,width:110,height:110},battery:{id:"battery",label:"BATTERI",x:285,y:240,width:110,height:110},house:{id:"house",label:"HUSET",x:150,y:410,width:130,height:130},spa:{id:"spa",label:"SPA",x:15,y:490,width:80,height:80},heatpump:{id:"heatpump",label:"VP",x:125,y:585,width:80,height:80},appliance:{id:"appliance",label:"APP",x:210,y:585,width:80,height:80},car:{id:"car",label:"BIL",x:325,y:490,width:80,height:80}}},xe={sceneWidth:1400,sceneHeight:1050,panels:{left:{x:40,y:20},right:{x:1100,y:20}},nodes:{solar:{id:"solar",label:"SOL",x:640,y:60,width:220,height:100},house:{id:"house",label:"HUSET",x:560,y:360,width:280,height:170},grid:{id:"grid",label:"ELNÄT",x:80,y:330,width:220,height:170},battery:{id:"battery",label:"BATTERI",x:1100,y:320,width:240,height:170},spa:{id:"spa",label:"SPA",x:180,y:760,width:180,height:120},heatpump:{id:"heatpump",label:"VP",x:460,y:760,width:180,height:120},appliance:{id:"appliance",label:"APP",x:740,y:760,width:180,height:120},car:{id:"car",label:"BIL",x:1020,y:760,width:220,height:140}}};function be(e,t){return{id:e,power:t,active:t>1,intensity:Math.min(1,t/5e3)}}function ve(e,t=40){if(e.length<2)return"";let r=`M ${e[0].x} ${e[0].y}`;for(let o=1;o<e.length-1;o++){const s=e[o-1],i=e[o],a=e[o+1],n=i.x-s.x,d=i.y-s.y,l=a.x-i.x,c=a.y-i.y,h=i.x-Math.sign(n)*t,p=i.y-Math.sign(d)*t,u=i.x+Math.sign(l)*t,g=i.y+Math.sign(c)*t;r+=`\n      L ${h} ${p}\n      Q ${i.x} ${i.y}\n        ${u} ${g}\n    `}const o=e[e.length-1];return r+=`\n    L ${o.x} ${o.y}\n  `,r}function fe(e,t,r,o,s=6,i=0,a,n,d=18){if(!e)return G;const l=Math.abs(i),c=Math.max(100,.9*t.length),h=l<50?2:l<300?4:l<1e3?6:l<3e3?8:12,p=Math.max(2,Math.floor(c/80)),u=Math.min(h,p),g=l<50?6:l<300?5:l<1e3?4:l<3e3?3.2:2.4,y=Array.from({length:u},(e,t)=>-t*(g/u));return W`
    <g class="flow-group">

      <path
        d="${t}"
        stroke="${r}"
        stroke-width="${2.2*s}"
        fill="none"
        stroke-linecap="round"
        opacity="0.03"
      />

      <path
        d="${t}"
        stroke="${r}"
        stroke-width="${1.3*s}"
        fill="none"
        stroke-linecap="round"
        opacity="0.05"
      />

      <path
        d="${t}"
        stroke="${r}"
        stroke-width="${.25*s}"
        fill="none"
        stroke-linecap="round"
        opacity="0.10"
        class="animated-flow"
      />

      <path
        d="${t}"
        stroke="#FFFFFF"
        stroke-width="${.14*s}"
        fill="none"
        stroke-linecap="round"
        opacity="0.32"
      />

      ${y.map(e=>W`

        <circle
          r="${.6*s}"
          fill="${r}"
          opacity="0.20"
        >
          <animateMotion
            begin="${e}s"
            dur="${g}s"
            repeatCount="indefinite"
            path="${t}"
          />
        </circle>

        <circle
          r="${.16*s}"
          fill="#FFFFFF"
          opacity="1"
        >
          <animateMotion
            begin="${e}s"
            dur="${g}s"
            repeatCount="indefinite"
            path="${t}"
          />
        </circle>

      `)}

      ${void 0!==a&&void 0!==n?W`
            <text
              x="${a}"
              y="${n}"
              fill="rgba(255,255,255,0.96)"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="${d}"
              font-weight="600"
              paint-order="stroke"
              stroke="rgba(0,0,0,0.55)"
              stroke-width="2"
              stroke-linejoin="round"
              opacity="0.95"
            >
              ${x=i,Math.abs(x)<1e3?`${Math.round(x)} W`:`${(x/1e3).toFixed(1)} kW`}
            </text>
          `:G}

    </g>
  `;var x}function _e(e,t,r,o){return`\n    M ${e} ${t}\n    L ${r} ${o}\n  `}function me(e,t){const r=function(e){const t=e.nodes.house,r=e.nodes.battery,o=e.nodes.grid,s=e.nodes.solar,i=e.nodes.spa,a=e.nodes.heatpump,n=e.nodes.appliance,d=e.nodes.car,l=t.x,c=t.x+t.width,h=t.y+t.height/2,p=r.x,u=r.x+r.width,g=r.y+r.height/2,y=o.x,x=o.x+o.width,b=o.y+o.height/2;return{houseAnchorLeft:{x:l+12,y:h},houseAnchorRight:{x:c-12,y:h},houseAnchorTop:{x:t.x+t.width/2,y:t.y},houseAnchorBottom:{x:t.x+t.width/2,y:t.y+t.height},batteryAnchorLeft:{x:p+12,y:g},batteryAnchorRight:{x:u-12,y:g},batteryAnchorTop:{x:r.x+r.width/2,y:r.y},batteryAnchorBottom:{x:r.x+r.width/2,y:r.y+r.height},gridAnchorLeft:{x:y+12,y:b},gridAnchorRight:{x:x-12,y:b},gridAnchorTop:{x:o.x+o.width/2,y:o.y},gridAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},solarAnchorLeft:{x:s.x,y:s.y+s.height/2},solarAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},solarAnchorBottom:{x:s.x+s.width/2,y:s.y+s.height},houseCenter:{x:t.x+t.width/2,y:t.y+t.height/2},batteryCenter:{x:r.x+r.width/2,y:r.y+r.height/2},gridCenter:{x:o.x+o.width/2,y:o.y+o.height/2},solarCenter:{x:s.x+s.width/2,y:s.y+s.height/2},spaAnchorTop:{x:i.x+i.width/2,y:i.y},heatpumpAnchorTop:{x:a.x+a.width/2,y:a.y},applianceAnchorTop:{x:n.x+n.width/2,y:n.y},carAnchorTop:{x:d.x+d.width/2,y:d.y}}}(e),o=function(e){return{x:e.houseAnchorTop.x,y:e.houseAnchorTop.y-70}}(r),s={...r,desktopHub:o},i=function(e){return{active:e["solar-house"]?.active||e["grid-house"]?.active||e["battery-house"]?.active,power:(e["solar-house"]?.power??0)+(e["grid-house"]?.power??0)+(e["battery-house"]?.power??0),colors:e["solar-house"]?.active?["#FFD54A","#FFF4B0"]:e["grid-house"]?.active?["#FF7A7A","#FFDCDC"]:["#63FFA2","#D8FFEC"]}}(t),a=e.sceneWidth<=500;return W`

  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >

    ${a?function(e,t){const{solarAnchorBottom:r,solarAnchorLeft:o,solarAnchorRight:s,gridAnchorLeft:i,gridAnchorRight:a,batteryAnchorLeft:n,batteryAnchorRight:d,houseAnchorTop:l,houseAnchorLeft:c,houseAnchorRight:h,houseAnchorBottom:p,gridCenter:u,batteryCenter:g,houseCenter:y,spaAnchorTop:x,heatpumpAnchorTop:b,applianceAnchorTop:v,carAnchorTop:f}=t,_={x:y.x,y:g.y+.4*(y.y-g.y)};return W`

    <!-- SOLAR -> HOUSE -->

    ${fe(e["solar-house"]?.active,_e(r.x,r.y,_.x,_.y),"#FFD54A",0,6,e["solar-house"]?.power??0,(r.x+_.x)/2,(r.y+_.y)/2-15,14)}

    ${fe(e["solar-house"]?.active,_e(_.x,_.y,l.x,l.y),"#FFD54A",0,6)}

    <!-- GRID -> HOUSE -->

    ${fe(e["grid-house"]?.active,_e(a.x,a.y,_.x,_.y),"#FF7A7A",0,6,e["grid-house"]?.power??0,(u.x+_.x)/2-25,(u.y+_.y)/2+20,14)}

    ${fe(e["grid-house"]?.active,_e(_.x,_.y,l.x,l.y),"#FF7A7A",0,6)}

    <!-- BATTERY -> HOUSE -->

    ${fe(e["battery-house"]?.active,_e(n.x,n.y,_.x,_.y),"#63FFA2",0,6,e["battery-house"]?.power??0,(n.x+_.x)/2+25,(n.y+_.y)/2+20,14)}

    ${fe(e["battery-house"]?.active,_e(_.x,_.y,l.x,l.y),"#63FFA2",0,6)}

    <!-- SOLAR -> BATTERY -->

    ${fe(e["solar-battery"]?.active,_e(r.x,r.y,n.x,n.y),"#7ED7FF",0,6,e["solar-battery"]?.power??0,(s.x+n.x)/2-20,(s.y+n.y)/2,14)}

    <!-- SOLAR -> EXPORT -->

    ${fe(e["solar-export"]?.active,_e(r.x,r.y,a.x,a.y),"#FFB84A",0,6,e["solar-export"]?.power??0,(o.x+a.x)/2+20,(o.y+a.y)/2,14)}

    <!-- BATTERY -> GRID -->

    ${fe(e["battery-grid"]?.active,_e(n.x,n.y,a.x,a.y),"#63FFA2",0,6,e["battery-grid"]?.power??0,(n.x+a.x)/2+40,(n.y+a.y)/2-10,14)}

    <!-- GRID -> BATTERY -->

    ${fe(e["grid-battery"]?.active,_e(a.x,a.y,n.x,n.y),"#7ED7FF",0,6,e["grid-battery"]?.power??0,(a.x+n.x)/2-40,(a.y+n.y)/2-10,14)}

      <!-- HOUSE -> SPA -->

    ${fe(e["house-spa"]?.active,_e(c.x,c.y,x.x,x.y),"#59D8FF",0,4,e["house-spa"]?.power??0,(h.x+f.x)/2-50,(h.y+x.y)/2,12)}

    <!-- HOUSE -> HEATPUMP -->

    ${fe(e["house-heatpump"]?.active,_e(p.x,p.y,b.x,b.y),"#7ACBFF",0,4,e["house-heatpump"]?.power??0,(p.x+b.x)/2,(p.y+b.y)/2,12)}

    <!-- HOUSE -> APPLIANCE -->

    ${fe(e["house-appliance"]?.active,_e(p.x,p.y,v.x,v.y),"#FFD580",0,4,e["house-appliance"]?.power??0,(p.x+v.x)/2,(p.y+v.y)/2,12)}

    <!-- HOUSE -> CAR -->

    ${fe(e["house-car"]?.active,_e(h.x,h.y,f.x,f.y),"#C084FF",0,4,e["house-car"]?.power??0,(c.x+f.x)/2+50,(c.y+f.y)/2,12)}

  `}(t,r):W`

          ${function(e,t){const{solarAnchorLeft:r,solarAnchorRight:o,solarAnchorBottom:s,gridAnchorTop:i,batteryAnchorTop:a,houseAnchorTop:n,desktopHub:d}=t;return W`

    <!-- SOLAR -> EXPORT -->

    ${fe(e["solar-export"]?.active,ve([r,{x:i.x,y:r.y},i],40),"#FFB84A",0,10,e["solar-export"]?.power??0,(r.x+i.x)/2,r.y-20)}

    <!-- SOLAR -> BATTERY -->

    ${fe(e["solar-battery"]?.active,ve([o,{x:a.x,y:o.y},a],40),"#7ED7FF",0,10,e["solar-battery"]?.power??0,(o.x+a.x)/2,o.y-20)}

    <!-- SOLAR -> HOUSE -->

    ${fe(e["solar-house"]?.active,_e(s.x,s.y,d.x,d.y),"#FFD54A",0,11,e["solar-house"]?.power??0,d.x+30,d.y-20)}

  `}(t,s)}

          ${function(e,t){const{gridAnchorRight:r,gridAnchorBottom:o,houseAnchorTop:s,batteryAnchorTop:i,batteryAnchorLeft:a,desktopHub:n}=t;return W`

    <!-- GRID -> HOUSE -->

    ${fe(e["grid-house"]?.active,_e(r.x,r.y,n.x,n.y),"#FF7B7B",0,8,e["grid-house"]?.power??0,r.x+80,r.y+40)}

    <!-- GRID -> BATTERY -->

    ${fe(e["grid-battery"]?.active,_e(r.x,r.y,a.x,a.y),"#63FFA2",0,8,e["grid-battery"]?.power??0,r.x+80,r.y-20)}

  `}(t,s)}

          ${function(e,t){const{batteryAnchorLeft:r,batteryAnchorBottom:o,houseAnchorTop:s,gridAnchorTop:i,gridAnchorRight:a,desktopHub:n}=t;return W`

    <!-- BATTERY -> HOUSE -->

    ${fe(e["battery-house"]?.active,_e(r.x,r.y,n.x,n.y),"#63FFA2",0,8,e["battery-house"]?.power??0,r.x-80,r.y+40)}

    <!-- BATTERY -> GRID -->

    ${fe(e["battery-grid"]?.active,_e(r.x,r.y,a.x,a.y),"#63FFA2",0,8,e["battery-grid"]?.power??0,r.x-80,r.y-20)}

  `}(t,s)}

          ${fe(i.active,_e(o.x,o.y,r.houseAnchorTop.x,r.houseAnchorTop.y),i.colors[0],i.colors[1],8,i.power)}

          ${function(e,t){const{houseAnchorBottom:r,houseCenter:o,spaAnchorTop:s,heatpumpAnchorTop:i,applianceAnchorTop:a,carAnchorTop:n}=t;return W`

    <!-- HOUSE -> SPA -->

    ${fe(e["house-spa"]?.active,_e(r.x,r.y,s.x,s.y),"#59D8FF",0,6,e["house-spa"]?.power??0,(o.x+s.x)/2,(o.y+s.y)/2,16)}

    <!-- HOUSE -> HEATPUMP -->

    ${fe(e["house-heatpump"]?.active,_e(r.x,r.y,i.x,i.y),"#7ACBFF",0,6,e["house-heatpump"]?.power??0,(o.x+i.x)/2,(o.y+i.y)/2,16)}

    <!-- HOUSE -> APPLIANCE -->

    ${fe(e["house-appliance"]?.active,_e(r.x,r.y,a.x,a.y),"#FFD580",0,6,e["house-appliance"]?.power??0,(o.x+a.x)/2,(o.y+a.y)/2,16)}

    <!-- HOUSE -> CAR -->

    ${fe(e["house-car"]?.active,_e(r.x,r.y,n.x,n.y),"#C084FF",0,6,e["house-car"]?.power??0,(o.x+n.x)/2,(o.y+n.y)/2,16)}

  `}(t,r)}
        `}

  </svg>
`}const we={solar:j`
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4.5"
        stroke="currentColor"
        stroke-width="1.8"/>
      <path d="M12 1.5v3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M12 19.5v3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M1.5 12h3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.5 12h3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M4.2 4.2l2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M17.6 17.6l2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M19.8 4.2l-2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M6.4 17.6l-2.2 2.2" stroke="currentColor" stroke-width="1.8"/>
    </svg>
  `,house:j`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M4 10.5L12 4l8 6.5"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 9.5V20h11V9.5"
        stroke="currentColor"
        stroke-width="1.8"
      />
    </svg>
  `,battery:j`
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="7"
        width="17"
        height="10"
        rx="2"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <rect
        x="20"
        y="10"
        width="2"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  `,grid:j`
    <svg viewBox="0 0 24 24" fill="none">

      <path
        d="M12 2L8.5 7H15.5L12 2Z"
        fill="currentColor"
      />

      <path
        d="M12 7V22"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <path
        d="M6 8H18"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <path
        d="M7.5 8L10.5 13"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <path
        d="M16.5 8L13.5 13"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />

      <path
        d="M8.5 13H15.5"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />

    </svg>
  `,car:j`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M6 16h12"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <path
        d="M8 8h8l2 5H6l2-5Z"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <circle cx="8" cy="18" r="1.5" fill="currentColor"/>
      <circle cx="16" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  `,spa:j`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M5 16c2-1 4-1 6 0s4 1 8 0"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M9 6c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M12 4c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        d="M15 6c0 1-.8 1.6-.8 2.6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
  `};const $e={house:"icon",battery:"object",grid:"icon",solar:"icon",car:"icon",spa:"icon",heatpump:"icon",appliance:"icon"};function Ae(e){if("object"===($e[e]??"icon"))switch(e){case"house":return j`
    <div>
      House Object Placeholder
    </div>
  `;case"battery":return j`

    <svg
      viewBox="0 0 100 140"
      width="100%"
      height="100%"
    >

      <!-- Batteritopp -->

      <rect
        x="40"
        y="4"
        width="20"
        height="8"
        rx="3"
        fill="currentColor"
        opacity="0.9"
      />

      <!-- Ytterhölje -->

      <rect
        x="18"
        y="12"
        width="64"
        height="116"
        rx="10"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      />

      <!-- Övre sektion -->

      <rect
        x="26"
        y="22"
        width="48"
        height="34"
        rx="4"
        fill="currentColor"
        opacity="0.12"
      />

      <!-- Mittsektion -->

      <rect
        x="26"
        y="62"
        width="48"
        height="24"
        rx="4"
        fill="currentColor"
        opacity="0.18"
      />

      <!-- Nedre sektion -->

      <rect
        x="26"
        y="92"
        width="48"
        height="24"
        rx="4"
        fill="currentColor"
        opacity="0.12"
      />

    </svg>
  `;case"grid":return j`
    <div>
      Grid Object Placeholder
    </div>
  `}switch(e){case"house":default:return we.house;case"battery":return we.battery;case"grid":return we.grid;case"solar":return we.solar;case"car":return we.car;case"spa":return we.spa}}function ke(e,t){const r=e?.states?.[t]?.state,o=Number(r);return Number.isFinite(o)?o:0}function Ee(e){return Math.abs(e)<1e3?`${Math.round(e)} W`:`${(e/1e3).toFixed(2)} kW`}function Se(e){return`${Math.round(e)}%`}function Ce(e,t){const r=e?.states?.[t]?.state,o=Number(r);return Number.isFinite(o)?o:0}function Te(e){if(!e)return"--:--";return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}function Fe(e,t){const r=Ce(t,"sensor.solar_battery_economy_energy_system_power_solar_house")+Ce(t,"sensor.solar_battery_economy_energy_system_power_solar_battery")+Ce(t,"sensor.solar_battery_economy_energy_system_power_solar_export"),o=t?.states?.["sun.sun"]?.attributes?.next_rising,s=t?.states?.["sun.sun"]?.attributes?.next_setting,i="above_horizon"===t?.states?.["sun.sun"]?.state,a=e.nodes.solar,n=a.width;return a.height,j`

    <div
      class="solar-hub"
      style="
      left:${a.x+n/2}px;
      top:${a.y}px;
      "
    >
      <div class="solar-hub-card">

        <div class="solar-hub-header">

          <div class="solar-hub-icon">
            ☀
          </div>

          <div class="solar-hub-title-group">

            <div class="solar-hub-label">
              SOL
            </div>

            <div class="solar-hub-subtitle">
              ${i?"Producerar energi":"Solen under horisonten"}
            </div>

          </div>

        </div>

        <div class="solar-hub-value">
          ${d=r,d<1e3?`${Math.round(d)} W`:`${(d/1e3).toFixed(2)} kW`}
        </div>

        <div class="solar-hub-times">

          <div class="solar-time">

            <span class="solar-arrow">
              ↑
            </span>

            <span>
              ${Te(o)}
            </span>

          </div>

          <div class="solar-time">

            <span class="solar-arrow">
              ↓
            </span>

            <span>
              ${Te(s)}
            </span>

          </div>

        </div>

      </div>

    </div>

  `;var d}const Me=((e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new i(r,e,o)})`
:host {
    display: block;

    width: 100%;

    --ha-card-background: transparent;
    --ha-card-border-width: 0;
    --ha-card-box-shadow: none;
}

.ha-wrapper {
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
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

    border:
    1px solid rgba(120,255,180,0.30);

    box-shadow:
    0 0 50px rgba(80,255,160,0.14),
    0 20px 60px rgba(0,0,0,0.30);
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
}

.node-icon {

    width: 100%;

    height: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: rgba(255,255,255,0.96);

    filter:
    drop-shadow(0 0 12px currentColor);

    opacity: 0.95;

    flex-shrink: 0;
}

.energy-node.house .node-icon {

    color: #4da3ff;
}

.energy-node.battery .node-icon {

    color: #55ff88;
}

.energy-node.grid .node-icon {

    color: #ff6a6a;
}

.energy-node.car .node-icon {

    color: #b066ff;
}

.energy-node.spa .node-icon {

    color: #39cfff;
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
}
`;let Pe=class extends de{constructor(){super(...arguments),this.activeLayout=ge,this.cardWidth=1920,this.sceneScale=1}static{this.styles=Me}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{const t=e[0].contentRect.width;var r;console.log("CARD WIDTH:",t),console.log("ACTIVE LAYOUT:",t<=900?"mobile":t<=1400?"tablet":"desktop"),this.cardWidth=t,this.sceneScale=1,this.activeLayout=(r=t)<=900?ye:r<=1400?xe:ge})}disconnectedCallback(){this.resizeObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){this.resizeObserver?.observe(this.renderRoot.querySelector(".card"))}setConfig(e){this.config=e}render(){const e=function(e){const t=t=>{const r=e?.states?.[t]?.state,o=Number(r);return isNaN(o)?0:o};return{"solar-house":be("solar-house",t("sensor.solar_battery_economy_energy_system_power_solar_house")),"solar-battery":be("solar-battery",t("sensor.solar_battery_economy_energy_system_power_solar_battery")),"solar-export":be("solar-export",t("sensor.solar_battery_economy_energy_system_power_solar_export")),"battery-house":be("battery-house",t("sensor.solar_battery_economy_energy_system_power_battery_house")),"battery-grid":be("battery-grid",t("sensor.solar_battery_economy_energy_system_power_battery_grid")),"grid-house":be("grid-house",t("sensor.solar_battery_economy_energy_system_power_grid_house")),"grid-battery":be("grid-battery",t("sensor.solar_battery_economy_energy_system_power_grid_battery")),"house-spa":be("house-spa",t("sensor.plugg_spabad_power")),"house-car":be("house-car",t("sensor.charger_lindv_26_2006011626m_1_power")),"house-heatpump":be("house-heatpump",t("sensor.thermia_power_estimator_total_effekt")),"house-appliance":be("house-appliance",0)}}(this.hass),t=this.activeLayout,r=function(e,t){const r=e?.layout_mode;return"hero"===r||"standard"===r||"compact"===r?r:t<=900?"compact":t<=1600?"standard":"hero"}(this.config,this.cardWidth),o=function(e){const t=e?.states?.["sun.sun"];if(!t)return"day";const r=Number(t.attributes?.elevation??0);return"above_horizon"===t.state?r<8?"morning":r<20?"sunset":"day":"night"}(this.hass),s=function(e){const t=e?.states?.["sun.sun"],r=Number(t?.attributes?.elevation??0),o=Number(t?.attributes?.azimuth??180);return{left:Math.max(8,Math.min(92,o/360*100)),top:Math.max(40,280-6*r)}}(this.hass),i=function(e,t){const r=e?.states?.["weather.smhi_weather"],o=Number(r?.attributes?.cloud_coverage??0)>40;switch(t){case"night":return o?"/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_cloudy.webp":"/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_clear.webp";case"sunset":return"/local/dev/solar-battery-economy-flow-card/backgrounds/evening/villa_evening.webp";default:return o?"/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_cloudy.webp":"/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_clear.webp"}}(this.hass,o),a=function(e){const t=Number(e.states["sensor.solar_battery_economy_energy_system_energy_solar_house"]?.state??0)+Number(e.states["sensor.solar_battery_economy_energy_system_energy_solar_battery"]?.state??0)+Number(e.states["sensor.solar_battery_economy_energy_system_energy_solar_export"]?.state??0),r=Number(e.states["sensor.solar_battery_economy_financial_31_battery_utilization"]?.state??0),o=Number(e.states["sensor.solar_battery_economy_financial_03_savings_today"]?.state??0),s=Number(e.states["sensor.solar_battery_economy_financial_33_co2_saved"]?.state??0),i=Number(e.states["sensor.solar_battery_economy_financial_32_solar_self_consumption_rate"]?.state??0);return{solarEnergy:t,batteryToHouse:Number(e.states["sensor.solar_battery_economy_energy_system_energy_battery_house"]?.state??0),solarExportEnergy:Number(e.states["sensor.solar_battery_economy_energy_system_energy_solar_export"]?.state??0),gridToHouseEnergy:Number(e.states["sensor.solar_battery_economy_energy_system_energy_grid_house"]?.state??0),systemEfficiency:r,savingsToday:o,totalSavings:Number(e.states["sensor.solar_battery_economy_financial_01_total_savings"]?.state??0),gridIndependence:Number(e.states["sensor.solar_battery_economy_financial_30_grid_independence"]?.state??0),co2Saved:s,selfSufficiency:i}}(this.hass),n={solarEnergy:a.solarEnergy,batteryToHouse:a.batteryToHouse,solarExportEnergy:a.solarExportEnergy,gridToHouseEnergy:a.gridToHouseEnergy,systemEfficiency:a.systemEfficiency,savingsToday:a.savingsToday,totalSavings:a.totalSavings,gridIndependence:a.gridIndependence,co2Saved:a.co2Saved,selfSufficiency:a.selfSufficiency};return j`
      <ha-card class="ha-wrapper">

        <div class="card ${o}">

          <div class="scene">

            <div
              class="scene-inner"
              style="
                width:${t.sceneWidth}px;
                height:${t.sceneHeight}px;

                transform:
                  translateX(-50%)
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
                    url('${i}');
                "
              ></div>

              <div class="background-glow"></div>

              ${d=r,"compact"!==d?function(e,t){return j`

    <div
      class="side-panel side-left"
      style="
        left:${t.panels.left.x}px;
        top:${t.panels.left.y}px;
      "
    >

      <div class="side-title">
        ☀ ENERGY
      </div>

      <div class="side-metric">
        <div class="side-label">
          SOLENERGI
        </div>

        <div class="side-value value-solar">
          ${e.solarEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          BATTERI → HUS
        </div>

        <div class="side-value value-battery">
          ${e.batteryToHouse.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SOLEXPORT
        </div>

        <div class="side-value value-export">
          ${e.solarExportEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          NÄT → HUS
        </div>

        <div class="side-value value-grid">
          ${e.gridToHouseEnergy.toFixed(0)} kWh
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SYSTEMVERKNINGSGRAD
        </div>

        <div class="side-value value-battery">
          ${e.systemEfficiency.toFixed(0)} %
        </div>
      </div>

    </div>

    <div
      class="side-panel side-right"
      style="
        left:${t.panels.right.x}px;
        top:${t.panels.right.y}px;
      "
    >

      <div class="side-title">
        💰 FINANCE
      </div>

      <div class="side-metric">
        <div class="side-label">
          BESPARING IDAG
        </div>

        <div class="side-value value-money">
          ${e.savingsToday.toFixed(2)} kr
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          TOTAL BESPARING
        </div>

        <div class="side-value value-total">
          ${e.totalSavings.toFixed(0)} kr
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          NÄTOBEROENDE
        </div>

        <div class="side-value value-independence">
          ${e.gridIndependence.toFixed(0)} %
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          CO₂ SPARAT
        </div>

        <div class="side-value value-co2">
          ${e.co2Saved.toFixed(0)} kg
        </div>
      </div>

      <div class="side-divider"></div>

      <div class="side-metric">
        <div class="side-label">
          SJÄLVFÖRSÖRJNING
        </div>

        <div class="side-value value-independence">
          ${e.selfSufficiency.toFixed(0)} %
        </div>
      </div>

    </div>

  `}(n,t):""}

              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${s.top}px;
                "
              ></div>

              <div class="scene-vignette"></div>

              ${function(e){const t=1300,r=220,o=960,s=1610-t*e.left/100,i=(s-310)/1300,a=200-Math.sin(i*Math.PI)*r+60;return W`

    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >

      <path
        d="
          M ${310}
            ${200}

          Q ${o}
            ${-40}

            ${1610}
            ${200}
        "
        class="solar-arc-path"
      />

      <circle
        cx="${s}"
        cy="${a}"
        r="16"
        class="solar-arc-sun"
      />

      ${[{hour:"21:00",pos:0},{hour:"18:00",pos:.1},{hour:"15:00",pos:.3},{hour:"12:00",pos:.5},{hour:"09:00",pos:.8},{hour:"06:00",pos:1}].map(e=>W`

            <text
            x="${310+t*e.pos}"
            y="${220}"
            text-anchor="middle"
            class="solar-arc-time"
            >
            ${e.hour}
            </text>

        `)}

    </svg>

  `}(s)}

              ${Fe(this.activeLayout,this.hass)}

              <div
                class="flow-layer"
                style="
                  width:${t.sceneWidth}px;
                  height:${t.sceneHeight}px;
                "
              >
                ${me(this.activeLayout,e)}
              </div>

              ${function(e,t){return Object.values(e.nodes).map(e=>{if("solar"===e.id)return G;let r="",o="",s="",i="";if("house"===e.id)r="Förbrukning",o=Ee(ke(t,"sensor.solar_battery_economy_energy_system_power_solar_house")+ke(t,"sensor.solar_battery_economy_energy_system_power_battery_house")+ke(t,"sensor.solar_battery_economy_energy_system_power_grid_house"));else if("battery"===e.id){const e=ke(t,"sensor.saj_battery_energy_percent"),i=ke(t,"sensor.solar_battery_economy_energy_system_power_solar_battery")+ke(t,"sensor.solar_battery_economy_energy_system_power_grid_battery"),a=ke(t,"sensor.solar_battery_economy_energy_system_power_battery_house")+ke(t,"sensor.solar_battery_economy_energy_system_power_battery_grid");i>1?(r="Laddar",o=Ee(i),s=Se(e)):a>1?(r="Urladdar",o=Ee(a),s=Se(e)):(r="Viloläge",o="0 W",s=Se(e))}else if("grid"===e.id){const e=ke(t,"sensor.solar_battery_economy_energy_system_power_grid_house")+ke(t,"sensor.solar_battery_economy_energy_system_power_grid_battery"),i=ke(t,"sensor.solar_battery_economy_energy_system_power_solar_export")+ke(t,"sensor.solar_battery_economy_energy_system_power_battery_grid");e>1?(r="→ Import",o=Ee(e),s=""):i>1?(r="← Export",o=Ee(i),s=""):(r="Balans",o="0 W",s="")}else if("car"===e.id){i="secondary";const e=ke(t,"sensor.volvo_ec40_batteri"),a=ke(t,"sensor.charger_lindv_26_2006011626m_1_power");o=Ee(a),s=Se(e),r=a>1?"Laddar":"Ansluten"}else if("spa"===e.id){i="secondary";const e=ke(t,"sensor.plugg_spabad_power");e>1?(r="Aktiv",o=Ee(e)):(r="Ej aktiv",o="--")}else if("heatpump"===e.id){i="secondary";const e=ke(t,"sensor.thermia_power_estimator_total_effekt");o=Ee(e),r=e>1?"Aktiv":"Vilande"}else if("appliance"===e.id){i="secondary";const e=ke(t,"sensor.plugg_spabad_power");e>1?(r="Aktiv",o=Ee(e)):(r="Ej aktiv",o="--")}return j`

        <div
          class="energy-node ${e.id} ${i}"

          style="
            left:${e.x}px;
            top:${e.y}px;
            width:${e.width}px;
            height:${e.height}px;
          "
        >

          <div class="node-shimmer"></div>

          <div class="node-glow"></div>

          <div class="node-inner">

            <div class="node-header">

              <div class="node-visual">

                <div class="node-icon">
                  ${Ae(e.id)}
                </div>

              </div>

              <div class="node-text">

                <div class="node-title">
                  ${e.label}
                </div>

                <div class="node-status">
                  ${r}
                </div>

              </div>

            </div>

            <div class="node-value">
              ${o}
            </div>

            ${s?j`
                  <div class="node-secondary">
                    ${s}
                  </div>
                `:G}

          </div>

        </div>
      `})}(this.activeLayout,this.hass)}

            </div>

          </div>

        </div>

      </ha-card>
    `;var d}};e([pe({attribute:!1})],Pe.prototype,"hass",void 0),e([pe({attribute:!1})],Pe.prototype,"config",void 0),e([ue()],Pe.prototype,"activeLayout",void 0),e([ue()],Pe.prototype,"cardWidth",void 0),e([ue()],Pe.prototype,"sceneScale",void 0),Pe=e([(e=>(t,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("solar-battery-economy-flow-card")],Pe);export{Pe as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
