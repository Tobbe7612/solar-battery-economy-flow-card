function t(t,e,s,r){var i,o=arguments.length,n=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(o<3?i(n):o>3?i(e,s,n):i(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&i.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new o(s,t,r)},a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,b=g.trustedTypes,f=b?b.emptyScript:"",y=g.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!l(t,e),m={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const o=r?.call(this);i?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...c(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(s)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of r){const r=document.createElement("style"),i=e.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(void 0!==r&&!0===s.reflect){const i=(void 0!==s.converter?.toAttribute?s.converter:_).toAttribute(e,s.type);this._$Em=t,null==i?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){const s=this.constructor,r=s._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=s.getPropertyOptions(r),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=r;const o=i.fromAttribute(e,t.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(void 0!==t){const o=this.constructor;if(!1===r&&(i=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??$)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,s,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,y?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=t=>t,k=w.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+S,P=`<${M}>`,O=document,R=()=>O.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,L=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,F=/"/g,D=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),W=I(1),V=I(2),q=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),X=new WeakMap,Y=O.createTreeWalker(O,129);function Z(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":3===e?"<math>":"",n=z;for(let e=0;e<s;e++){const s=t[e];let a,l,d=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===z?"!--"===l[1]?n=N:void 0!==l[1]?n=L:void 0!==l[2]?(D.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=j):void 0!==l[3]&&(n=j):n===j?">"===l[0]?(n=i??z,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?j:'"'===l[3]?F:B):n===F||n===B?n=j:n===N||n===L?n=z:(n=j,i=void 0);const c=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===z?s+P:d>=0?(r.push(a),s.slice(0,d)+C+s.slice(d)+S+c):s+S+(-2===d?e:c)}return[Z(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class K{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[l,d]=J(t,e);if(this.el=K.createElement(l,s),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Y.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(C)){const e=d[o++],s=r.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:s,ctor:"."===n[1]?rt:"?"===n[1]?it:"@"===n[1]?ot:st}),r.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),r.removeAttribute(t));if(D.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=k?k.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],R()),Y.nextNode(),a.push({type:2,index:++i});r.append(t[e],R())}}}else if(8===r.nodeType)if(r.data===M)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const s=O.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,r){if(e===q)return e;let i=void 0!==r?s._$Co?.[r]:s._$Cl;const o=T(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,s,r)),void 0!==r?(s._$Co??=[])[r]=i:s._$Cl=i),void 0!==i&&(e=Q(t,i._$AS(t,e.values),i,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??O).importNode(e,!0);Y.currentNode=r;let i=Y.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new et(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(i=Y.nextNode(),o++)}return Y.currentNode=O,r}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),T(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(Z(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new K(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new et(this.O(R()),this.O(R()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=G}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=Q(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const r=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=Q(this,r[s+n],e,n),a===q&&(a=this._$AH[n]),o||=!T(a)||a!==this._$AH[n],a===G?t=G:t!==G&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}o&&!r&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class it extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class ot extends st{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??G)===q)return;const s=this._$AH,r=t===G&&s!==G||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==G&&(s===G||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,et),(w.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class dt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const r=s?.renderBefore??e;let i=r._$litPart$;if(void 0===i){const t=s?.renderBefore??null;r._$litPart$=i=new et(e.insertBefore(R(),t),t,void 0,s??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}dt._$litElement$=!0,dt.finalized=!0,lt.litElementHydrateSupport?.({LitElement:dt});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:dt}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$},pt=(t=ct,e,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(void 0===o&&globalThis.litPropertyMetadata.set(i,o=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===r){const{name:r}=s;return{set(s){const i=e.get.call(this);e.set.call(this,s),this.requestUpdate(r,i,t,!0,s)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=s;return function(s){const i=this[r];e.call(this,s),this.requestUpdate(r,i,t,!0,s)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,s)=>"object"==typeof s?pt(t,e,s):((t,e,s)=>{const r=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),r?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={sceneWidth:1920,sceneHeight:1080,nodes:{solar:{id:"solar",label:"SOL",x:865,y:120,width:140,height:120},house:{id:"house",label:"HOUSE",x:700,y:470,width:380,height:210},battery:{id:"battery",label:"BATTERY",x:1410,y:320,width:250,height:260},car:{id:"car",label:"EV",x:1360,y:760,width:240,height:170},spa:{id:"spa",label:"SPA",x:260,y:790,width:190,height:150},grid:{id:"grid",label:"GRID",x:80,y:340,width:190,height:190}}},bt={sceneWidth:430,sceneHeight:1200,nodes:{solar:{id:"solar",x:140,y:40,width:140,height:140,label:"Solar"},house:{id:"house",x:80,y:300,width:260,height:180,label:"House"},battery:{id:"battery",x:260,y:540,width:120,height:220,label:"Battery"},car:{id:"car",x:80,y:760,width:220,height:120,label:"Car"},spa:{id:"spa",x:40,y:560,width:160,height:100,label:"Spa"},grid:{id:"grid",x:20,y:180,width:120,height:120,label:"Grid"}}};function ft(){return window.innerWidth<=900?bt:gt}function yt(t,e){return{id:t,power:e,active:e>10,intensity:Math.min(1,e/5e3)}}const vt={solar:W`
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
  `,house:W`
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
  `,battery:W`
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
  `,grid:W`
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L18 8H14V22H10V8H6L12 2Z"
        fill="currentColor"
      />
    </svg>
  `,car:W`
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
  `,spa:W`
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
  `};let _t=class extends dt{constructor(){super(...arguments),this.activeLayout=ft(),this.handleResize=()=>{this.activeLayout=ft()}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){window.removeEventListener("resize",this.handleResize),super.disconnectedCallback()}static{this.styles=n`

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

      min-height: 1200px;

      overflow: hidden;

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

      background-size: cover;
      background-position: center center;

      transform: scale(1.02);

      filter:
        saturate(1.05)
        contrast(1.02)
        brightness(0.95);

      z-index: 0;
    }

    .background-glow {
      position: absolute;

      inset: 0;

      background:
        radial-gradient(circle at 50% 10%, rgba(255,200,50,0.20), transparent 24%),
        radial-gradient(circle at 82% 40%, rgba(80,255,180,0.14), transparent 32%),
        radial-gradient(circle at 20% 60%, rgba(80,160,255,0.16), transparent 36%),
        radial-gradient(circle at 50% 90%, rgba(120,80,255,0.10), transparent 30%);

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

    .scene-vignette {
      position: absolute;

      inset: 0;

      background:
        radial-gradient(circle at center, transparent 35%, rgba(0,0,0,0.52));

      pointer-events: none;

      z-index: 2;
    }

    .scene {
      position: relative;

      width: 100%;
      height: 1200px;

      overflow: hidden;

      z-index: 4;
    }

    .scene-inner {
      position: absolute;

      left: 50%;
      top: -80px;

      width: 1920px;
      height: 1080px;

      transform:
        translateX(-50%)
        scale(1.0);

      transform-origin: top center;
    }

    .flow-layer {

      position: absolute;

      left: 0;
      top: 0;

      width: 1920px;
      height: 1080px;

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

      border-radius: 34px;

      overflow: hidden;

      backdrop-filter: blur(30px);

      background:
        linear-gradient(
          180deg,
          rgba(255,255,255,0.10),
          rgba(255,255,255,0.04)
        );

      border:
        1px solid rgba(255,255,255,0.10);

      box-shadow:
        0 20px 80px rgba(0,0,0,0.35),
        inset 0 1px 0 rgba(255,255,255,0.06);

      z-index: 50;

      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
    }
    
    .energy-node.house {

      background:
        linear-gradient(
          180deg,
          rgba(80,140,255,0.20),
          rgba(40,90,180,0.14)
        );

      border:
        1px solid rgba(120,180,255,0.35);

      box-shadow:
        0 0 60px rgba(80,140,255,0.18),
        0 30px 80px rgba(0,0,0,0.38);
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

    .energy-node:hover {

      transform:
        translateY(-2px)
        scale(1.015);

      box-shadow:
        0 30px 90px rgba(0,0,0,0.45),
        0 0 40px rgba(255,255,255,0.06);
    }

    .node-glow {

      position: absolute;

      inset: -20%;

      background:
        radial-gradient(
          circle at center,
          rgba(255,255,255,0.12),
          transparent 70%
        );

      opacity: 0.5;

      z-index: 0;
    }

    .node-shimmer {

      position: absolute;

      inset: 0;

      background:
        linear-gradient(
          135deg,
          rgba(255,255,255,0.10),
          transparent 40%
        );

      opacity: 0.35;

      pointer-events: none;

      z-index: 1;
    }

    .node-inner {

      position: absolute;

      inset: 0;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      gap: 10px;

      padding: 24px;

      z-index: 2;
    }

    .node-icon {

      width: 54px;
      height: 54px;

      display: flex;

      align-items: center;
      justify-content: center;

      color: rgba(255,255,255,0.95);

      filter:
        drop-shadow(0 0 8px currentColor);

      margin-bottom: 8px;
    }

    .node-icon svg {

      width: 100%;
      height: 100%;

      overflow: visible;
    }

    .node-title {

      color: white;

      font-size: 30px;

      font-weight: 700;

      letter-spacing: -0.03em;
    }

    .node-value {

      color: rgba(255,255,255,0.95);

      font-size: 32px;

      font-weight: 600;

      letter-spacing: -0.04em;
    }

    .node-status {

      color: rgba(255,255,255,0.55);

      font-size: 16px;

      letter-spacing: 0.02em;
    }

    .footer {
      position: absolute;

      left: 34px;
      right: 34px;
      bottom: 34px;

      height: 130px;

      border-radius: 32px;

      background: rgba(10,18,28,0.58);

      border: 1px solid rgba(255,255,255,0.08);

      backdrop-filter: blur(30px);

      display: flex;
      align-items: center;
      justify-content: space-around;

      z-index: 100;
    }

    .metric {
      display: flex;
      flex-direction: column;

      gap: 10px;
    }

    .metric-label {
      color: rgba(255,255,255,0.50);

      font-size: 12px;

      text-transform: uppercase;

      letter-spacing: 0.08em;
    }

    .metric-value {
      color: white;

      font-size: 32px;

      font-weight: 600;

      letter-spacing: -0.02em;
    }

    @media (max-width: 1400px) {

      .scene-inner {

        transform:
          translateX(-50%)
          scale(0.72);
      }

      .card {
        min-height: 1000px;
      }

      .scene {
        height: 1000px;
      }
    }

    @media (max-width: 900px) {

      .scene-inner {

        width: 430px;
        height: 1200px;

        top: 0;

        transform:
          translateX(-50%)
          scale(1);
      }

      .card {
        min-height: 1200px;
      }

      .card.morning {

        filter:
          saturate(1.08)
          brightness(1.05);
      }

      .card.day {

        filter:
          saturate(1.15)
          brightness(1.12);
      }

      .card.sunset {

        filter:
          saturate(1.20)
          brightness(1.02)
          hue-rotate(-10deg);
      }

      .card.night {

        filter:
          saturate(0.92)
          brightness(0.90);
      }

      .scene {
        height: 1200px;
      }

      .footer {
        left: 20px;
        right: 20px;
        bottom: 20px;

        height: auto;

        padding: 24px;

        flex-wrap: wrap;

        gap: 24px;

        justify-content: flex-start;
      }

      .metric-value {
        font-size: 24px;
      }
    }
  `}setConfig(t){this.config=t}render(){const t=function(t){const e=e=>{const s=t?.states?.[e]?.state,r=Number(s);return isNaN(r)?0:r};return{"solar-house":yt("solar-house",e("sensor.solar_battery_economy_energy_system_power_solar_house")),"solar-battery":yt("solar-battery",e("sensor.solar_battery_economy_energy_system_power_solar_battery")),"solar-export":yt("solar-export",e("sensor.solar_battery_economy_energy_system_power_solar_export")),"battery-house":yt("battery-house",e("sensor.solar_battery_economy_energy_system_power_battery_house")),"battery-grid":yt("battery-grid",e("sensor.solar_battery_economy_energy_system_power_battery_grid")),"grid-house":yt("grid-house",e("sensor.solar_battery_economy_energy_system_power_grid_house")),"grid-battery":yt("grid-battery",e("sensor.solar_battery_economy_energy_system_power_grid_battery"))}}(this.hass),e=function(t){const e=t?.states?.["sun.sun"];if(!e)return"day";const s=Number(e.attributes?.elevation??0);return s<-6?"night":s<8?"morning":s<20?"sunset":"day"}(this.hass),s=function(t){const e=t?.states?.["sun.sun"],s=Number(e?.attributes?.elevation??0),r=Number(e?.attributes?.azimuth??180);return{left:Math.max(8,Math.min(92,r/360*100)),top:Math.max(40,280-6*s)}}(this.hass),r=function(t,e){const s=t?.states?.["weather.smhi_weather"],r=Number(s?.attributes?.cloud_coverage??0)>40;switch(e){case"night":return r?"/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_cloudy.webp":"/local/dev/solar-battery-economy-flow-card/backgrounds/night/villa_night_clear.webp";case"sunset":return"/local/dev/solar-battery-economy-flow-card/backgrounds/evening/villa_evening.webp";default:return r?"/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_cloudy.webp":"/local/dev/solar-battery-economy-flow-card/backgrounds/day/villa_day_clear.webp"}}(this.hass,e);return W`
      <ha-card class="ha-wrapper">

        <div class="card ${e}">

          <div
            class="hero-background"
            style="
              background-image:
                linear-gradient(
                  to bottom,
                  rgba(5,10,20,0.20),
                  rgba(5,10,20,0.72)
                ),
                url('${r}');
            "
          ></div>

          <div class="background-glow"></div>

          <div
            class="scene-sun-glow"
            style="
              left:${s.left}%;
              top:${s.top}px;
            "
          ></div>

          <div
            class="scene-sun-disc"
            style="
              left:${s.left}%;
              top:${s.top}px;
            "
          ></div>

          <div class="scene-vignette"></div>

          <div class="scene">

            <div class="scene-inner">

              <div class="flow-layer">
                ${function(t,e){const s=(t,e,s,r,i=6)=>t?V`

      <g class="flow-group">

        <!-- SOFT OUTER ATMOSPHERE -->

        <path
          d="${e}"

          stroke="${s}"

          stroke-width="${2.2*i}"

          fill="none"

          stroke-linecap="round"

          opacity="0.025"
        />

        <!-- MAIN GLOW -->

        <path
          d="${e}"

          stroke="${s}"

          stroke-width="${1.2*i}"

          fill="none"

          stroke-linecap="round"

          opacity="0.08"
        />

        <!-- LIGHT PIPE -->

        <path
          d="${e}"

          stroke="${s}"

          stroke-width="${i}"

          fill="none"

          stroke-linecap="round"

          opacity="0.92"

          class="animated-flow"
        />

        <!-- CORE LIGHT -->

        <path
          d="${e}"

          stroke="#FFFFFF"

          stroke-width="${.14*i}"

          fill="none"

          stroke-linecap="round"

          opacity="0.32"
        />

        <!-- LEAD PARTICLE -->

        <circle
          r="${.22*i}"

          fill="#FFFFFF"

          opacity="0.95"
        >

          <animateMotion
            dur="3.4s"

            repeatCount="indefinite"

            path="${e}"
          />

        </circle>

      </g>
    `:G;return V`

    <svg
      class="flow-svg"

      viewBox="0 0 1920 1080"

      xmlns="http://www.w3.org/2000/svg"
    >

      <!-- SOLAR -> HOUSE -->

      ${s(e["solar-house"]?.active,"\n          M 950 180\n\n          C\n            950 260,\n            950 360,\n            950 520\n        ","#FFD54A",0,11)}

      <!-- SOLAR -> BATTERY -->

      ${s(e["solar-battery"]?.active,"\n          M 980 200\n\n          C\n            1120 260,\n            1320 320,\n            1540 470\n        ","#FFD54A",0,9)}

      <!-- SOLAR EXPORT -->

      ${s(e["solar-export"]?.active,"\n          M 920 200\n\n          C\n            760 260,\n            540 340,\n            240 470\n        ","#FFB347",0,8)}

      <!-- BATTERY -> HOUSE -->

      ${s(e["battery-house"]?.active,"\n          M 1540 500\n\n          C\n            1380 490,\n            1200 520,\n            960 550\n        ","#63FFA2",0,10)}

      <!-- GRID -> HOUSE -->

      ${s(e["grid-house"]?.active,"\n          M 240 500\n\n          C\n            420 500,\n            620 520,\n            960 550\n        ","#FF7A7A",0,10)}

      <!-- BATTERY -> GRID -->

      ${s(e["battery-grid"]?.active,"\n          M 1520 490\n\n          C\n            1220 420,\n            820 400,\n            240 470\n        ","#50FFC8",0,8)}

    </svg>
  `}(this.activeLayout,t)}
              </div>

              ${i=this.activeLayout,Object.values(i.nodes).map(t=>{const e="solar"===t.id?"5.2 kW":"battery"===t.id?"82%":"house"===t.id?"2.8 kW":"grid"===t.id?"0.4 kW":"car"===t.id?"78%":"spa"===t.id?"1.1 kW":"",s="solar"===t.id?"Producing":"battery"===t.id?"Charging":"house"===t.id?"Consuming":"grid"===t.id?"Importing":"car"===t.id?"Charging":"spa"===t.id?"Heating":"";return W`

      <div
        class="energy-node ${t.id}"

        style="
          left:${t.x}px;
          top:${t.y}px;
          width:${t.width}px;
          height:${t.height}px;
        "
      >

        <div class="node-shimmer"></div>

        <div class="node-glow"></div>

        <div class="node-inner">

          <div class="node-icon">
            ${vt[t.id]}
          </div>

          <div class="node-title">
            ${t.label}
          </div>

          <div class="node-value">
            ${e}
          </div>

          <div class="node-status">
            ${s}
          </div>

        </div>

      </div>
    `})}

            </div>

          </div>

          <div class="footer">

            <div class="metric">
              <div class="metric-label">Solar Production</div>
              <div class="metric-value">5.2 kW</div>
            </div>

            <div class="metric">
              <div class="metric-label">Battery</div>
              <div class="metric-value">82%</div>
            </div>

            <div class="metric">
              <div class="metric-label">Saved Today</div>
              <div class="metric-value">43 kr</div>
            </div>

            <div class="metric">
              <div class="metric-label">Self Consumption</div>
              <div class="metric-value">91%</div>
            </div>

          </div>

        </div>

      </ha-card>
    `;var i}};t([ut({attribute:!1})],_t.prototype,"hass",void 0),t([ut({attribute:!1})],_t.prototype,"config",void 0),t([function(t){return ut({...t,state:!0,attribute:!1})}()],_t.prototype,"activeLayout",void 0),_t=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("solar-battery-economy-flow-card")],_t);export{_t as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
