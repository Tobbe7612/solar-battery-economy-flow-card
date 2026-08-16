function t(t,e,i,o){var s,r=arguments.length,n=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new r(i,t,o)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,y=globalThis,g=y.trustedTypes,f=g?g.emptyScript:"",m=y.reactiveElementPolyfillSupport,x=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!l(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){const{get:o,set:s}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const r=o?.call(this);s?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(i)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,o=i._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=o;const r=s.fromAttribute(e,t.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,i,o=!1,s){if(void 0!==t){const r=this.constructor;if(!1===o&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??b)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==s||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,i,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[x("elementProperties")]=new Map,w[x("finalized")]=new Map,m?.({ReactiveElement:w}),(y.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,A=t=>t,E=_.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+k,L=`<${F}>`,T=document,P=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,B="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,U=/>/g,I=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,z=/"/g,N=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),W=j(1),V=j(2),G=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Y=new WeakMap,q=T.createTreeWalker(T,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,o=[];let s,r=2===e?"<svg>":3===e?"<math>":"",n=D;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===D?"!--"===l[1]?n=O:void 0!==l[1]?n=U:void 0!==l[2]?(N.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=I):void 0!==l[3]&&(n=I):n===I?">"===l[0]?(n=s??D,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?I:'"'===l[3]?z:H):n===z||n===H?n=I:n===O||n===U?n=D:(n=I,s=void 0);const d=n===I&&t[e+1].startsWith("/>")?" ":"";r+=n===D?i+L:c>=0?(o.push(a),i.slice(0,c)+C+i.slice(c)+k+d):i+k+(-2===c?e:d)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class K{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,r=0;const n=t.length-1,a=this.parts,[l,c]=X(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=q.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(C)){const e=c[r++],i=o.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ot:"?"===n[1]?st:"@"===n[1]?rt:it}),o.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(N.test(o.tagName)){const t=o.textContent.split(k),e=t.length-1;if(e>0){o.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),q.nextNode(),a.push({type:2,index:++s});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===F)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(k,t+1));)a.push({type:7,index:s}),t+=k.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,o){if(e===G)return e;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=M(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(t),s._$AT(t,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(e=Z(t,s._$AS(t,e.values),s,o)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);q.currentNode=o;let s=q.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new nt(s,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(s=q.nextNode(),r++)}return q.currentNode=T,o}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===Q||null==t||""===t?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==G&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Q&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new tt(o,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new et(this.O(P()),this.O(P()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(t,e=this,i,o){const s=this.strings;let r=!1;if(void 0===s)t=Z(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Z(this,o[i+n],e,n),a===G&&(a=this._$AH[n]),r||=!M(a)||a!==this._$AH[n],a===Q?t=Q:t!==Q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ot extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}class st extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Q)}}class rt extends it{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??Q)===G)return;const i=this._$AH,o=t===Q&&i!==Q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==Q&&(i===Q||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=_.litHtmlPolyfillSupport;at?.(K,et),(_.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const o=i?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=i?.renderBefore??null;o._$litPart$=s=new et(e.insertBefore(P(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ct._$litElement$=!0,ct.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ct});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:ct}),(lt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},ut=(t=pt,e,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===o){const{name:o}=i;return{set(i){const s=e.get.call(this);e.set.call(this,i),this.requestUpdate(o,s,t,!0,i)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];e.call(this,i),this.requestUpdate(o,s,t,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){return(e,i)=>"object"==typeof i?ut(t,e,i):((t,e,i)=>{const o=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),o?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gt(t){return yt({...t,state:!0,attribute:!1})}const ft={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16},panels:{left:{x:10,y:300,width:220,compact:!1},right:{x:1690,y:300,width:220,compact:!1}}},mt={sceneWidth:430,sceneHeight:1e3,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10},panels:{left:{x:18,y:540,width:185,compact:!0},right:{x:227,y:540,width:185,compact:!0}}};const xt={solarHouse:"energy_system_power_solar_house",solarBattery:"energy_system_power_solar_battery",solarExport:"energy_system_power_solar_export",batteryHouse:"energy_system_power_battery_house",batteryGrid:"energy_system_power_battery_grid",gridHouse:"energy_system_power_grid_house",gridBattery:"energy_system_power_grid_battery",houseGrid:"energy_system_power_house_grid"},vt={gridIndependenceEntity:"financial_30_grid_independence",batteryUtilizationEntity:"financial_31_battery_utilization",solarSelfConsumptionEntity:"financial_32_solar_self_consumption_rate",co2SavedEntity:"financial_33_co2_saved"},bt={savingsTodayEntity:"financial_03_savings_today",totalSavingsEntity:"financial_01_total_savings",savingsThisMonthEntity:"financial_04_savings_this_month",savingsThisYearEntity:"financial_05_savings_this_year",estimatedAnnualSavingsEntity:"financial_02_estimated_annual_savings",paybackTimeEntity:"financial_10_payback_time",roiEntity:"financial_12_return_on_investment"};function $t(t,e){const i=t?.states;if(i)return Object.keys(i).find(t=>t.endsWith(e))}function wt(t){return void 0!==$t(t,xt.solarHouse)}function _t(t){const e={};for(const i of Object.keys(xt))e[i]=$t(t,xt[i]);return e}function At(t){if(!wt(t))return{};const e={};for(const i of Object.keys(vt)){const o=$t(t,vt[i]);o&&(e[i]=o)}const i={};for(const e of Object.keys(bt)){const o=$t(t,bt[e]);o&&(i[e]=o)}return{sidePanels:{energy:{...e},economy:{...i}}}}function Et(t,e){return{id:t,power:e,active:e>1,intensity:Math.min(1,e/5e3)}}function St(t){return Number(t?.attributes?.cloud_coverage??0)}function Ct(t){return t>40}function kt(t,e,i){const o=function(t){const e=t?.states;if(e){if(e["weather.smhi_weather"])return e["weather.smhi_weather"];for(const t of Object.keys(e))if(t.startsWith("weather."))return e[t]}}(t),s=function(t){switch(t?.state??""){case"rainy":case"pouring":case"lightning-rainy":return"rain";case"cloudy":case"exceptional":return"cloudy";default:return Ct(St(t))?"cloudy":"clear"}}(o),r=function(t){return"mobile"===t?"landscape":"villa"}(i),n=function(t,e,i){if("rain"===e)return{folder:"weather",filename:`${i}_rain.webp`};switch(t){case"night":return{folder:"night",filename:"cloudy"===e?`${i}_night_cloudy.webp`:`${i}_night_clear.webp`};case"bluehour":return{folder:"evening",filename:`${i}_bluehour.webp`};case"sunset":return{folder:"evening",filename:`${i}_evening.webp`};default:return{folder:"day",filename:"cloudy"===e?`${i}_day_cloudy.webp`:`${i}_day_clear.webp`}}}(e,s,r);return a=n.folder,l=n.filename,`/local/dev/solar-battery-economy-flow-card/assets/backgrounds/${a}/${l}`;var a,l}function Ft(t){return t.waypoints&&t.waypoints.length>0?function(t,e=20){if(t.length<2)return"";let i=`M ${t[0].x} ${t[0].y}`;for(let o=1;o<t.length-1;o++){const s=t[o-1],r=t[o],n=t[o+1],a=r.x-s.x,l=r.y-s.y,c=n.x-r.x,h=n.y-r.y,d=r.x-Math.sign(a)*e,p=r.y-Math.sign(l)*e,u=r.x+Math.sign(c)*e,y=r.y+Math.sign(h)*e;i+=`\n      L ${d} ${p}\n      Q ${r.x} ${r.y}\n        ${u} ${y}\n    `}const o=t[t.length-1];return i+=`\n    L ${o.x} ${o.y}\n  `,i}([t.start,...t.waypoints,t.end],t.radius??38):(e=t.start.x,i=t.start.y,o=t.end.x,s=t.end.y,`\n    M ${e} ${i}\n    L ${o} ${s}\n  `);var e,i,o,s}function Lt(t){const e=Math.abs(t);return e<300?{particleCount:4,duration:6,lineOpacity:.1,lineWidth:2,sparkInterval:9}:e<800?{particleCount:6,duration:5.2,lineOpacity:.14,lineWidth:2.3,sparkInterval:7}:e<1500?{particleCount:8,duration:4.4,lineOpacity:.18,lineWidth:2.6,sparkInterval:6}:e<3e3?{particleCount:10,duration:3.7,lineOpacity:.22,lineWidth:2.9,sparkInterval:5}:e<5e3?{particleCount:12,duration:3,lineOpacity:.26,lineWidth:3.2,sparkInterval:4}:{particleCount:14,duration:2.2,lineOpacity:.3,lineWidth:3.5,sparkInterval:3}}function Tt(t,e){const i=Math.abs(t);return i<=1?{active:!1,color:e,opacity:0,blur:0}:i<300?{active:!0,color:e,opacity:.03,blur:8}:i<800?{active:!0,color:e,opacity:.045,blur:10}:i<1500?{active:!0,color:e,opacity:.06,blur:12}:i<3e3?{active:!0,color:e,opacity:.08,blur:14}:i<5e3?{active:!0,color:e,opacity:.1,blur:16}:{active:!0,color:e,opacity:.12,blur:18}}const Pt=3.5;function Mt(t){return t.waypoints&&t.waypoints.length>0?[t.start,...t.waypoints,t.end]:[t.start,t.end]}function Rt(t){const e=43758.5453*Math.sin(12.9898*t);return e-Math.floor(e)}function Bt(t){let e=0;for(let i=0;i<t.length;i++)e=(31*e+t.charCodeAt(i))%1e5;return e}function Dt(t,e,i,o,s){const r=e+53.1*t,n=Rt(r+4.3)*s,a=.85+.3*Rt(r+8.9),l=.8+.5*Rt(r+13.1),c=function(t,e){let i=`M ${t[0].x} ${t[0].y}`;for(let o=0;o<t.length-1;o++){const s=t[o],r=t[o+1],n=r.x-s.x,a=-(r.y-s.y),l=n,c=Math.max(1,Math.hypot(a,l)),h=14*(Rt(e+31.7*o)-.5);i+=` Q ${(s.x+r.x)/2+a/c*h} ${(s.y+r.y)/2+l/c*h} ${r.x} ${r.y}`}return i}(i,r),h=s*a,d=2*l;return V`
        <g class="energy-particle">

            <circle
                r="${4.5*l}"
                fill="${o}"
                opacity="0"
                filter="url(#energy-glow)"
            >
                <animateMotion
                    dur="${h}s"
                    begin="-${n}s"
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
                    begin="-${n}s"
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
                    begin="-${n}s"
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
                    begin="-${n}s"
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
    `}function Ot(t,e){return V`
        ${Array.from({length:2}).map((i,o)=>function(t,e,i){const o=Mt(t),s=Math.floor(Date.now()/(1e3*e.sparkInterval)),r=Bt(t.id)+41.7*i+97.3*s,n=o.length-1,a=Math.min(n-1,Math.floor(Rt(r)*n)),l=o[a],c=o[a+1],h=.2+.6*Rt(r+3.7),d=l.x+(c.x-l.x)*h,p=l.y+(c.y-l.y)*h,u=180*Math.atan2(c.y-l.y,c.x-l.x)/Math.PI,y=Rt(r+9.1)*e.sparkInterval;return V`
        <g transform="translate(${d}, ${p})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${e.sparkInterval}s"
                begin="-${y}s"
                repeatCount="indefinite"
            />
            ${function(t,e,i,o){return V`
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
    `}(0,0,u,t.color)}
        </g>
    `}(t,e,o))}
    `}function Ut(t){if(!t.active||Math.abs(t.power)<1)return V``;const e=Ft(t),i=(o=t.power,{flow:Lt(o)}).flow;var o;return V`

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

            ${function(t,e){const i=Mt(t),o=Bt(t.id);return V`
        ${Array.from({length:e.particleCount}).map((s,r)=>Dt(r,o,i,t.color,e.duration))}
    `}(t,i)}

            ${Ot(t,i)}

        </g>

    `}function It(t,e,i){const o=function(t,e,i){return i.map(i=>{const o=e[i.liveFlow];return{id:i.id,start:i.getStart(t),end:i.getEnd(t),waypoints:i.getWaypoints?i.getWaypoints(t):[],power:o?.power??0,active:o?.active??!1,color:i.color,radius:i.radius}})}(t,e,i);return V`

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
            ${o.map(t=>Ut(t))}
        </g>
    `}function Ht(t,e){t.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))}function zt(t,e,i,o,s,r){switch(t){case"solar":return function(t,e,i){return V`
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
    `}(e,i,s);case"house":return function(t,e,i){return V`
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
    `}(e,i,s);case"grid":return function(t,e,i){return V`

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

    `}(e,i,s);case"battery":{const t=Math.max(0,Math.min(100,r??0));return V`
                <g transform="translate(${e}, ${i}) rotate(-90)">

                    <rect
                        x="-28"
                        y="-16"
                        width="${56*(t/100)}"
                        height="32"
                        rx="2"
                        fill="${s}"
                        opacity="0.85"
                    />

                    <g
                        fill="none"
                        stroke="${s}"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        style="filter: drop-shadow(0 0 4px ${s}80);"
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
            `}case"car":return function(t,e,i){return V`

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

    `}(e,i,s);case"spa":return function(t,e,i){return V`

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

    `}(e,i,s);case"heatpump":return function(t,e,i){return V`

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

    `}(e,i,s);case"appliance":return function(t,e,i){return V`

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

    `}(e,i,s);default:return V`
                <text
                    x="${e}"
                    y="${i}"
                    fill="${s}"
                    font-size="${o}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `}}function Nt(t,e,i){const o=t.width<=155,s=o?.6:1,r=o?.65:1,n=o?25:32,a=o?30:55,l=16*s,c=24*s,h=18*s,d=13*s,p=18*s,u=28*s,y=56*s,g=78*s,f=100*s,m=(x=e.power,v=e.color??t.accentColor??"#FFFFFF",{glow:Tt(x,v),pulse:{active:Math.abs(x)>1,scale:1.015,duration:3.2}});var x,v;const b=t.width/2,$=t.height/2;return V`

        <g
            class="energy-label"
            transform="translate(${t.x}, ${t.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${()=>{e.entityId&&Ht(i,e.entityId)}}
        >

            ${m.glow.active?V`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${t.width+16}"
                        height="${t.height+16}"
                        rx="26"
                        ry="26"
                        fill="${m.glow.color}"
                        style="
                            filter: blur(${m.glow.blur}px);
                            --glow-opacity-min: ${.5*m.glow.opacity};
                            --glow-opacity-max: ${m.glow.opacity};
                        "
                    />
                `:""}

            <g>

                <rect
                    class="energy-label-frame${m.pulse.active?" is-pulsing":""}"
                    filter="url(#label-shadow)"
                    width="${t.width}"
                    height="${t.height}"

                    rx="22"
                    ry="22"

                    fill="rgba(18,24,34,0.72)"

                    stroke="rgba(255,255,255,0.10)"

                    stroke-width="1.5"

                    style="transform-origin: ${b}px ${$}px;"
                />

                <text
                    class="energy-label-title"
                    x="${p}"
                    y="${u}"
                    font-size="${l}"
                    fill="white"
                    font-weight="700"
                >
                    ${t.title}
                </text>

                <g
                    transform="
                        translate(
                            ${t.width-n},
                            ${a}
                        )
                        scale(${r})
                    "
                >
                    ${zt(e.icon??t.icon,0,0,22,m.glow.color,e.soc)}
                </g>

                ${e.line1?V`
                        <text
                            class="energy-label-line1"
                            x="${p}"
                            y="${y}"
                            font-size="${c}"
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
                            y="${f}"
                            font-size="${d}"
                            fill="white"
                            opacity="0.70"
                        >
                            ${e.line3}
                        </text>
                    `:""}

            </g>

        </g>

    `}function jt(t){return Math.abs(t)<1e3?`${Math.round(t)} W`:`${(t/1e3).toFixed(1)} kW`}function Wt(t){return{line1:jt(t.power),line2:t.optionalValue??"",line3:t.status,entityId:t.powerEntity,power:t.power,...void 0!==t.soc?{soc:t.soc}:{},icon:t.icon,color:t.power>1?"#FF6B6B":"#8A93A3"}}function Vt(t,e,i){return V`
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
            ${t.map(t=>{let o,s=t;switch(t.id){case"battery":o={line1:jt((r=e).batteryPower),line2:(n=r.batterySoc,`${Math.round(n)}%`),line3:r.batteryStatus,entityId:r.batteryEntity,power:r.batteryPower,soc:r.batterySoc,color:r.batteryPower<-1?"#61FF8B":r.batteryPower>1?"#FFB347":"#FFFFFF"};break;case"house":o=function(t){return{line1:jt(t.housePower),line2:"",line3:t.houseStatus,entityId:t.houseEntity,power:t.housePower,color:t.housePower>1?"#FF6B6B":"#8A93A3"}}(e);break;case"grid":o=function(t){return{line1:jt(t.gridPower),line2:"",line3:t.gridStatus,entityId:t.gridEntity,power:t.gridPower,color:t.gridPower>1?"#FF6B6B":t.gridPower<-1?"#61FF8B":"#4FC3F7"}}(e);break;case"solar":o=function(t){return{line1:jt(t.solarPower),line2:"",line3:t.solarStatus,entityId:t.solarEntity,power:t.solarPower,color:t.solarPower>1?"#FFD54A":"#8A93A3"}}(e);break;case"car":{const i=e.devices[0];if(!i||!i.enabled)return"";o=Wt(i),s={...t,title:i.title};break}case"spa":{const i=e.devices[1];if(!i||!i.enabled)return"";o=Wt(i),s={...t,title:i.title};break}case"heatpump":{const i=e.devices[2];if(!i||!i.enabled)return"";o=Wt(i),s={...t,title:i.title};break}case"appliance":{const i=e.devices[3];if(!i||!i.enabled)return"";o=Wt(i),s={...t,title:i.title};break}default:o={line1:"1234 W",line2:"",line3:"",power:0}}var r,n;return Nt(s,o,i)})}
        </g>
    `}const Gt=[{id:"solar",title:"SOLAR",icon:"solar",x:890,y:300,width:180,height:110,accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:480,y:440,width:180,height:110,accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:890,y:600,width:180,height:110,accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:1230,y:440,width:180,height:110,accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:565,y:750,width:180,height:110,accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:790,y:850,width:180,height:110,accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:1e3,y:850,width:180,height:110,accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:1230,y:750,width:180,height:110,accentColor:"#81D4FA"}],Qt=[{id:"solar",title:"SOLAR",icon:"solar",x:160,y:130,width:110,height:70,accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:25,y:220,width:110,height:70,accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:160,y:300,width:110,height:70,accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:300,y:220,width:110,height:70,accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:25,y:460,width:105,height:70,accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:25,y:380,width:105,height:70,accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:300,y:460,width:105,height:70,accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:300,y:380,width:105,height:70,accentColor:"#81D4FA"}],Yt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solar,getEnd:t=>t.houseTop,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solarRight,getEnd:t=>t.batteryTop,color:"#FFD54A"},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solarLeft,getEnd:t=>t.gridTop,color:"#FFD54A"},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLeft,getEnd:t=>t.houseTopRight,color:"#59D990"},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryUpperLeft,getEnd:t=>t.gridUpperRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridRight,getEnd:t=>t.houseTopLeft,color:"#FF6B6B"},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridUpperRight,getEnd:t=>t.batteryUpperLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomLeft,getEnd:t=>t.spa,color:"#FF6B6B"},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomCenter,getEnd:t=>t.heatpump,color:"#FF6B6B"},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.appliance,color:"#FF6B6B"},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomRight,getEnd:t=>t.car,color:"#FF6B6B"}],qt=[{id:"solar-house",liveFlow:"solar-house",getStart:t=>t.solarBottomCenter,getEnd:t=>t.houseTopCenter,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:t=>t.solarRight,getEnd:t=>t.batteryTop,color:"#FFD54A",radius:30},{id:"solar-export",liveFlow:"solar-export",getStart:t=>t.solarLeft,getEnd:t=>t.gridTop,color:"#FFD54A",radius:30},{id:"battery-house",liveFlow:"battery-house",getStart:t=>t.batteryLowerLeft,getEnd:t=>t.houseTopRight,color:"#59D990",radius:30},{id:"battery-grid",liveFlow:"battery-grid",getStart:t=>t.batteryLeft,getEnd:t=>t.gridRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:t=>t.gridLowerRight,getEnd:t=>t.houseTopLeft,color:"#FF6B6B",radius:30},{id:"grid-battery",liveFlow:"grid-battery",getStart:t=>t.gridRight,getEnd:t=>t.batteryLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:t=>t.houseBottomCenter,getEnd:t=>t.spaRight,color:"#FF6B6B",radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:t=>t.houseBottomLeft,getEnd:t=>t.heatpumpRight,color:"#FF6B6B",radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:t=>t.houseBottomCenter,getEnd:t=>t.applianceLeft,color:"#FF6B6B",radius:30},{id:"house-car",liveFlow:"house-car",getStart:t=>t.houseBottomRight,getEnd:t=>t.carLeft,color:"#FF6B6B",radius:30}];function Jt(t,e,i){return i.particleCount<=0?V``:V`
        ${Array.from({length:i.particleCount}).map((o,s)=>function(t,e,i,o){const s=Rt(7.31*t)-.5,r=Rt(13.7*t+3)-.5,n=Rt(19.1*t+11)-.5,a=Rt(5.13*t+9)*o,l=.7+.6*Rt(2.9*t+17),c=.85+.3*Rt(3.7*t+23),h=i.x-e.x,d=-(i.y-e.y),p=h,u=Math.max(1,Math.hypot(d,p)),y=26*n,g=(e.x+i.x)/2+d/u*y,f=(e.y+i.y)/2+p/u*y,m=`M ${e.x+14*s} ${e.y+14*r} Q ${g} ${f} ${i.x} ${i.y}`,x=o*c;return V`
        <circle
            r="${1.4*l}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${x}s"
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
                dur="${x}s"
                begin="-${a}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(s,t,e,i.duration))}
    `}function Xt(t,e){return e<=0?V``:V`
        ${Array.from({length:e}).map((e,i)=>function(t,e){const i=Rt(17.3*t+31)*Math.PI*2,o=14+10*Rt(23.9*t+5),s=2.2*Rt(8.1*t+11),r=1.6+.8*Rt(4.4*t+19),n=.7+.6*Rt(6.7*t+41),a=Math.cos(i)*o,l=Math.sin(i)*o,c=`M ${e.x} ${e.y} L ${e.x+a} ${e.y+l}`;return V`
        <circle
            r="${1.3*n}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${r}s"
                begin="-${s}s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.2 0 0.6 1"
                path="${c}"
            />
            <animate
                attributeName="opacity"
                values="0;0.70;0"
                keyTimes="0;0.25;1"
                dur="${r}s"
                begin="-${s}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(i,t))}
    `}function Kt(t,e,i){const{centerX:o,centerY:s,width:r,height:n,sunRadius:a}=e.solarArc,l={x:o-r/2,y:s+n},c={x:o,y:s-20},h={x:o+r/2,y:s+n},d=function(t,e,i,o){const s=1-t;return{x:s*s*e.x+2*s*t*i.x+t*t*o.x,y:s*s*e.y+2*s*t*i.y+t*t*o.y}}(t.progress,l,c,h),p=(e.sceneWidth<1e3?Qt:Gt).find(t=>"solar"===t.id),u={x:p.x+p.width/2,y:p.y},y=function(t){const e=Math.max(0,t);return e<=0?{particleCount:0,duration:Pt}:e<500?{particleCount:4,duration:Pt}:e<1500?{particleCount:8,duration:Pt}:e<3e3?{particleCount:12,duration:Pt}:{particleCount:15,duration:Pt}}(i);return V`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${o-r/2}
            ${s+n}

          Q ${o}
            ${s-20}

            ${o+r/2}
            ${s+n}
        "
        class="solar-arc-path"
      />
      ${t.aboveHorizon?V`
              <circle
                  cx="${d.x}"
                  cy="${d.y}"
                  r="${a}"
                  class="solar-arc-sun"
              />
          `:V``}
      ${Jt(d,u,y)}
      ${Xt(d,y.particleCount)}
      <text
          x="${o-r/2}"
          y="${s+n+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${t.sunrise}
      </text>
      <text
          x="${o+r/2}"
          y="${s+n+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${t.sunset}
      </text>
    </svg>
  `}const Zt=n`
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

`,te=n`

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

`,ee=n`
 
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
 
`,ie=n`
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
.side-panel {
    position: absolute;
    top: 20px;
    height: auto;

    width: 220px;

    padding: 30px;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 22px;

    border: 1px solid rgba(255,255,255,0.06);

    backdrop-filter: blur(40px);

    z-index: 20;

    transition:
        background 0.8s ease,
        border-color 0.8s ease,
        box-shadow 0.8s ease;

    box-shadow:
        0 20px 60px rgba(0,0,0,0.35);
}

.side-title {

    display: flex;
    align-items: center;

    color: rgba(180,205,230,.82);

    font-size: 15px;
    font-weight: 800;

    text-transform: uppercase;

    letter-spacing: .20em;

    margin-bottom: 32px;

    text-shadow:
        0 0 12px rgba(255,255,255,.08);
}

.panel-section {

    display: flex;
    flex-direction: column;

    gap: 14px;
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

    display: flex;

    flex-direction: column;

    gap: 6px;
}

.side-label {

    color: rgba(255,255,255,.56);

    font-size: 11px;

    font-weight: 600;

    text-transform: uppercase;

    letter-spacing: .08em;
}

.side-value {

    color: white;

    font-size: 21px;

    font-weight: 700;

    line-height: 1.05;

    letter-spacing: -.03em;

    transition:
        color .35s ease,
        text-shadow .35s ease;
}

.side-divider {

    margin: 26px 0;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.08),
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
    padding: 18px;
}

.side-panel.compact .side-title {
    font-size: 13px;
    margin-bottom: 20px;
    letter-spacing: .16em;
}

.side-panel.compact .panel-section {
    gap: 10px;
}

.side-panel.compact .panel-section-title {
    font-size: 11px;
    margin-bottom: 6px;
}

.side-panel.compact .side-stat {
    gap: 4px;
}

.side-panel.compact .side-label {
    font-size: 10px;
}

.side-panel.compact .side-value {
    font-size: 18px;
}

.side-panel.compact .side-divider {
    margin: 18px 0;
}

.side-panel.compact .panel-footer {
    min-height: 14px;
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
.card.desktop {
    aspect-ratio: 1920 / 1080;
}
.card.mobile {
    aspect-ratio: 430 / 1000;
}
${Zt}
${te}
${ee}
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,oe=1;class se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re="important",ne=" !"+re,ae=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends se{constructor(t){if(super(t),t.type!==oe||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const o=t[i];return null==o?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const o=e[t];if(null!=o){this.ft.add(t);const e="string"==typeof o&&o.endsWith(ne);t.includes("-")||e?i.setProperty(t,e?o.slice(0,-11):o,e?re:""):i[t]=o}}return G}});function le(t,e,i=0){const o=t?.states?.[e]?.state,s=Number(o);return Number.isFinite(s)?s:i}function ce(t,e,i=""){const o=t?.states?.[e]?.state;return o??i}function he(t,e){const i=_t(t),o=At(t),s=i.solarHouse?le(t,i.solarHouse):0,r=i.solarBattery?le(t,i.solarBattery):0,n=i.solarExport?le(t,i.solarExport):0,a=i.batteryHouse?le(t,i.batteryHouse):0,l=i.batteryGrid?le(t,i.batteryGrid):0,c=i.gridHouse?le(t,i.gridHouse):0,h=i.gridBattery?le(t,i.gridBattery):0,d=s+r+n,p=s+a+c,u=c+h-(i.houseGrid?le(t,i.houseGrid):0)-l-n,y=r+h-(a+l),g=le(t,"sensor.solar_battery_economy_energy_system_energy_battery_house"),f=le(t,"sensor.solar_battery_economy_energy_system_energy_solar_export"),m=le(t,"sensor.solar_battery_economy_energy_system_energy_grid_house"),x="above_horizon"===ce(t,"sun.sun")?"Over horizon":"Under horizon",v=y>1?"Charging":y<-1?"Discharging":"Standby",b=[];s>1&&b.push("Solar"),a>1&&b.push("Battery"),c>1&&b.push("Grid");const $=b.length>0?b.join(" + "):"No load",w=u>1?"Importing":u<-1?"Exporting":"Balance",_=e?.batterySocEntity?le(t,e.batterySocEntity):0,A=e?.solarInfoEntity??"sensor.solaredge_ac_power",E=e?.gridInfoEntity??"sensor.effekt_alla_faser",S=e?.houseInfoEntity??"sensor.forbrukning_nu_ny",C=e?.batteryInfoEntity??"sensor.saj_realtime_battery_power",k=o.sidePanels?.energy?.batteryUtilizationEntity??"",F=le(t,k),L=o.sidePanels?.economy?.savingsTodayEntity??"",T=le(t,L),P=o.sidePanels?.energy?.co2SavedEntity??"",M=le(t,P),R=o.sidePanels?.energy?.solarSelfConsumptionEntity??"",B=le(t,R),D=o.sidePanels?.economy?.totalSavingsEntity??"",O=le(t,D),U=o.sidePanels?.economy?.roiEntity??"",I=le(t,U),H=e?.sidePanels?.energy?.importTodayEntity,z=H?le(t,H):0,N=e?.sidePanels?.energy?.exportTodayEntity,j=N?le(t,N):0,W=o.sidePanels?.economy?.savingsThisMonthEntity??"",V=le(t,W),G=o.sidePanels?.economy?.savingsThisYearEntity??"",Q=le(t,G),Y=o.sidePanels?.economy?.estimatedAnnualSavingsEntity??"",q=le(t,Y),J=o.sidePanels?.economy?.paybackTimeEntity??"",X=le(t,J),K=o.sidePanels?.energy?.gridIndependenceEntity??"",Z=le(t,K);return{devices:(e?.devices??[]).map((e,i)=>function(t,e,i){const o=e.powerEntity?le(t,e.powerEntity):0;let s,r;"soc"===e.optionalType&&e.optionalEntity&&(r=le(t,e.optionalEntity),s=`${Math.round(r)} %`),"temperature"===e.optionalType&&e.optionalEntity&&(s=`${le(t,e.optionalEntity).toFixed(0)} °C`);let n="Standby";if(e.statusEntity)n=ce(t,e.statusEntity,"Unknown");else if(e.statusRules?.length){const t=[...e.statusRules].sort((t,e)=>t.threshold-e.threshold);for(const e of t)o>=e.threshold&&(n=e.label)}return{enabled:e.enabled,title:e.title?.trim()||`Device ${i+1}`,power:o,powerEntity:e.powerEntity,optionalType:e.optionalType,optionalValue:s,soc:r,optionalEntity:e.optionalEntity,status:n,statusEntity:e.statusEntity,icon:e.icon}}(t,e,i)),solarPower:d,solarStatus:x,solarEntity:A,batteryToHouse:g,solarExportEnergy:f,gridToHouseEnergy:m,batteryUtilization:F,batteryUtilizationEntity:k,savingsToday:T,savingsTodayEntity:L,totalSavings:O,totalSavingsEntity:D,roi:I,roiEntity:U,importToday:z,importTodayEntity:H,exportToday:j,exportTodayEntity:N,savingsThisMonth:V,savingsThisMonthEntity:W,savingsThisYear:Q,savingsThisYearEntity:G,estimatedAnnualSavings:q,estimatedAnnualSavingsEntity:Y,paybackTime:X,paybackTimeEntity:J,gridIndependence:Z,gridIndependenceEntity:K,co2Saved:M,co2SavedEntity:P,solarSelfConsumptionRate:B,solarSelfConsumptionRateEntity:R,batterySoc:_,batteryPower:y,batteryStatus:v,batteryEntity:C,housePower:p,houseStatus:$,houseEntity:S,gridPower:u,gridStatus:w,gridEntity:E}}const de={layout:"desktop",sidePanels:{energy:{show:!0},economy:{show:!0}},devices:[{enabled:!1},{enabled:!1},{enabled:!1},{enabled:!1}]};let pe=class extends ct{constructor(){super(...arguments),this._config=de,this._deviceDrafts={},this.generalSchema=[{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"}]}}}],this.batteryInfoSchema=[{name:"batterySocEntity",label:"Battery SOC",selector:{entity:{domain:"sensor"}}},{name:"solarInfoEntity",label:"Solar info",selector:{entity:{}}},{name:"gridInfoEntity",label:"Grid info",selector:{entity:{}}},{name:"houseInfoEntity",label:"House info",selector:{entity:{}}},{name:"batteryInfoEntity",label:"Battery info",selector:{entity:{}}}],this.energyPanelSchema=[{name:"show",label:"Show Energy Panel",selector:{boolean:{}}},{name:"importTodayEntity",label:"Import Today",selector:{entity:{domain:"sensor"}}},{name:"exportTodayEntity",label:"Export Today",selector:{entity:{domain:"sensor"}}}],this.economyPanelSchema=[{name:"show",label:"Show Economy Panel",selector:{boolean:{}}}]}setConfig(t){this._config={...de,...t}}getDeviceSchema(t){const e=[{name:"enabled",label:"Enabled",selector:{boolean:{}}},{name:"title",label:"Title",selector:{text:{}}},{name:"powerEntity",label:"Power",selector:{entity:{}}},{name:"optionalType",label:"Optional",selector:{select:{mode:"dropdown",options:[{value:"",label:"None"},{value:"soc",label:"SOC"},{value:"temperature",label:"Temperature"}]}}}];return"soc"!==t.optionalType&&"temperature"!==t.optionalType||e.push({name:"optionalEntity",label:"Optional entity",selector:{entity:{}}}),e.push({name:"statusEntity",label:"Status",selector:{entity:{}}}),t.statusEntity||e.push({name:"statusThreshold1",label:"Status threshold 1 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel1",label:"Status 1",selector:{text:{}}},{name:"statusThreshold2",label:"Status threshold 2 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel2",label:"Status 2",selector:{text:{}}},{name:"statusThreshold3",label:"Status threshold 3 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel3",label:"Status 3",selector:{text:{}}}),e.push({name:"icon",label:"Icon",selector:{select:{mode:"dropdown",options:[{value:"car",label:"Car"},{value:"spa",label:"Spa"},{value:"heatpump",label:"Heat Pump"},{value:"appliance",label:"Appliance"}]}}}),e}_valueChanged(t){this._config={...this._config,...t.detail.value},this._fireConfigChanged()}_energyPanelValueChanged(t){const e=t.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,energy:{...this._config.sidePanels.energy,...e}}},this._fireConfigChanged()}_economyPanelValueChanged(t){const e=t.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,economy:{...this._config.sidePanels.economy,...e}}},this._fireConfigChanged()}_getDeviceFormData(t,e){const i=this._deviceDrafts[t]??{},o={...e,...i};if(!this._deviceDrafts[t]){(e.statusRules??[]).forEach((t,e)=>{const i=e+1;i<=3&&(o[`statusThreshold${i}`]=t.threshold,o[`statusLabel${i}`]=t.label)})}return o}_updateDeviceDraft(t,e){const i={...this._deviceDrafts[t]??{},...e};return this._deviceDrafts={...this._deviceDrafts,[t]:i},i}_buildStatusRules(t){const e=[];for(let i=1;i<=3;i++){const o=Number(t[`statusThreshold${i}`]),s=String(t[`statusLabel${i}`]??"").trim();Number.isFinite(o)&&s&&e.push({threshold:o,label:s})}return e.sort((t,e)=>t.threshold-e.threshold)}_deviceValueChanged(t,e){const i=e.detail.value;this._updateDeviceDraft(t,i);const{statusThreshold1:o,statusLabel1:s,statusThreshold2:r,statusLabel2:n,statusThreshold3:a,statusLabel3:l,...c}=i,h=this._deviceDrafts[t]??{},d=[...this._config.devices];d[t]={...d[t],...c,statusRules:this._buildStatusRules(h)},this._config={...this._config,devices:d},this._fireConfigChanged()}_device1ValueChanged(t){this._deviceValueChanged(0,t)}_device2ValueChanged(t){this._deviceValueChanged(1,t)}_device3ValueChanged(t){this._deviceValueChanged(2,t)}_device4ValueChanged(t){this._deviceValueChanged(3,t)}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_isSolarBatteryEconomyDetected(){return!!this.hass&&wt(this.hass)}render(){const t=this._isSolarBatteryEconomyDetected();return W`
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
                <summary>Energy Panel</summary>

                <div class="editor-content">
                    <ha-form
                        .hass=${this.hass}
                        .data=${this._config.sidePanels.energy}
                        .schema=${this.energyPanelSchema}
                        .computeLabel=${t=>t.label}
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
                        .computeLabel=${t=>t.label}
                        @value-changed=${this._economyPanelValueChanged}
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
        `}static{this.styles=n`
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
    `}};t([yt({attribute:!1})],pe.prototype,"hass",void 0),t([gt()],pe.prototype,"_config",void 0),t([gt()],pe.prototype,"_deviceDrafts",void 0),pe=t([dt("solar-battery-economy-flow-card-editor")],pe);let ue=class extends ct{constructor(){super(...arguments),this.activeLayout=ft,this.layoutType="desktop",this.sceneScale=1,this.layoutReady=!1}static{this.styles=ie}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return de}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{const e=t[0].contentRect.width,i=t[0].contentRect.height;if(e<10||i<10)return;this.sceneScale=1;const o=function(t){const e="mobile"===t.layout?mt:ft,i=e.sceneWidth,o=e.sceneHeight,s=t.width/i,r=t.height/o;return{layout:e,scale:Math.min(s,r),offsetX:0,offsetY:0}}({layout:this.layoutType,width:e,height:i});this.activeLayout=o.layout,this.sceneScale=o.scale,this.layoutReady=!0})}disconnectedCallback(){this.resizeObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){const t=this.renderRoot.querySelector(".card");this.resizeObserver?.observe(t)}setConfig(t){this.config=t;const e=t?.layout;this.layoutType="mobile"===e?"mobile":"desktop"}render(){if(!this.layoutReady)return W`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;const t=function(t,e){const i=e??{},o=i.sidePanels?.energy??{},s=i.sidePanels?.economy??{};return{layout:i.layout??de.layout,batterySocEntity:i.batterySocEntity,solarInfoEntity:i.solarInfoEntity,gridInfoEntity:i.gridInfoEntity,houseInfoEntity:i.houseInfoEntity,batteryInfoEntity:i.batteryInfoEntity,sidePanels:{energy:{show:o.show??de.sidePanels.energy.show,importTodayEntity:o.importTodayEntity,exportTodayEntity:o.exportTodayEntity},economy:{show:s.show??de.sidePanels.economy.show}},devices:i.devices??de.devices}}(At(this.hass),this.config),e=function(t,e){const i=e=>{if(!e)return 0;const i=t?.states?.[e]?.state,o=Number(i);return isNaN(o)?0:o},o=_t(t);return{"solar-house":Et("solar-house",i(o.solarHouse)),"solar-battery":Et("solar-battery",i(o.solarBattery)),"solar-export":Et("solar-export",i(o.solarExport)),"battery-house":Et("battery-house",i(o.batteryHouse)),"battery-grid":Et("battery-grid",i(o.batteryGrid)),"grid-house":Et("grid-house",i(o.gridHouse)),"grid-battery":Et("grid-battery",i(o.gridBattery)),"house-spa":Et("house-spa",i(e.devices[1]?.powerEntity)),"house-car":Et("house-car",i(e.devices[0]?.powerEntity)),"house-heatpump":Et("house-heatpump",i(e.devices[2]?.powerEntity)),"house-appliance":Et("house-appliance",i(e.devices[3]?.powerEntity))}}(this.hass,t),i=he(this.hass,t),o=this.activeLayout,s=function(t){const e=t?.states?.["sun.sun"];if(!e)return"day";const i=Number(e.attributes?.elevation??0);return"above_horizon"===e.state?i<8?"morning":i<20?"sunset":"day":i>-6?"bluehour":"night"}(this.hass),r=function(t){const e=t?.states?.["sun.sun"];if(!e)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const i=Number(e.attributes?.elevation??0),o=Number(e.attributes?.azimuth??180),s="above_horizon"===e.state,r=Math.max(0,Math.min(1,(o-90)/180));return{progress:r,aboveHorizon:s,left:100*r,top:Math.max(40,280-6*i),sunrise:new Date(e.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(e.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),n=kt(this.hass,s,this.layoutType);return W`
      <ha-card class="ha-wrapper">
        <div class="card ${this.layoutType} ${s}">
          <div class="scene">
            <div
              class="scene-inner"
              style="
                width:${o.sceneWidth}px;
                height:${o.sceneHeight}px;
                transform:
                  translate(0px, 0px)
                  scale(${this.sceneScale});
              "
            >
              ${t.sidePanels.energy.show?function(t){const{x:e,y:i,panel:o,host:s,cardData:r}=t,n=r.gridIndependence,a=r.gridIndependenceEntity,l=r.solarSelfConsumptionRate,c=r.solarSelfConsumptionRateEntity,h=r.batteryUtilization,d=r.batteryUtilizationEntity,p=r.co2Saved,u=r.co2SavedEntity;return W`
        <div
            class=${"side-panel side-panel-left"+(o.compact?" compact":"")}
            style=${ae({left:`${e}px`,top:`${i}px`,width:o.width?`${o.width}px`:void 0})}
        >
            <div class="side-title">
                Energy
            </div>
            <div class="panel-section">
                ${r.importTodayEntity?W`
                        <div
                            class="side-stat"
                            style="cursor:pointer;"
                            @click=${()=>Ht(s,r.importTodayEntity)}
                        >
                            <div class="side-label">
                                Import today
                            </div>
                            <div class="side-value value-grid">
                                ${r.importToday} kWh
                            </div>
                        </div>
                    `:""}
                ${r.exportTodayEntity?W`
                        <div
                            class="side-stat"
                            style="cursor:pointer;"
                            @click=${()=>Ht(s,r.exportTodayEntity)}
                        >
                            <div class="side-label">
                                Export today
                            </div>
                            <div class="side-value value-export">
                                ${r.exportToday} kWh
                            </div>
                        </div>
                    `:""}
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,a)}
                >
                    <div class="side-label">
                        Grid Independance
                    </div>
                    <div class="side-value value-independence">
                        ${n} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,c)}
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
                    @click=${()=>Ht(s,d)}
                >
                    <div class="side-label">
                        Battery utilization
                    </div>
                    <div class="side-value value-battery">
                        ${h} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,u)}
                >
                    <div class="side-label">
                        CO₂ saved
                    </div>
                    <div class="side-value value-co2">
                        ${p} kg
                    </div>
                </div>
            </div>
        </div>
    `}({x:o.panels.left.x,y:o.panels.left.y,panel:o.panels.left,host:this,cardData:i}):""}

              ${t.sidePanels.economy.show?function(t){const{x:e,y:i,panel:o,host:s,cardData:r}=t,n=r.savingsToday,a=r.savingsTodayEntity;r.totalSavings,r.totalSavingsEntity;const l=r.roi,c=r.roiEntity;return W`
        <div
            class=${"side-panel side-panel-right"+(o.compact?" compact":"")}
            style=${ae({left:`${e}px`,top:`${i}px`,width:o.width?`${o.width}px`:void 0})}
        >
            <div class="side-title">
                Economy
            </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,a)}
                >
                    <div class="side-label">
                        Savings today
                    </div>
                    <div class="side-value value-money">
                        ${n} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,r.savingsThisMonthEntity)}
                >
                    <div class="side-label">
                        Savings this month
                    </div>
                    <div class="side-value value-money">
                        ${r.savingsThisMonth} kr
                    </div>
                </div>
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,r.paybackTimeEntity)}
                >
                    <div class="side-label">
                        Payback time
                    </div>
                    <div class="side-value value-money">
                        ${r.paybackTime} år
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,r.savingsThisYearEntity)}
                >
                    <div class="side-label">
                        Savings this year
                    </div>
                    <div class="side-value value-money">
                        ${r.savingsThisYear} kr
                    </div>
                </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,r.estimatedAnnualSavingsEntity)}
                >
                    <div class="side-label">
                        Estimated annual saving
                    </div>
                    <div class="side-value value-money">
                        ${r.estimatedAnnualSavings} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ht(s,c)}
                >
                    <div class="side-label">
                        Estimated ROI
                    </div>
                    <div class="side-value value-money">
                        ${l} %
                    </div>
                </div>
            </div>
        </div>
    `}({x:o.panels.right.x,y:o.panels.right.y,panel:o.panels.right,host:this,cardData:i}):""}
              <div
                class="hero-background"
                style="
                  background-image:
                    linear-gradient(
                      to bottom,
                      rgba(5,10,20,0.08),
                      rgba(5,10,20,0.25)
                    ),
                    url('${n}');
                "
              ></div>
              <div class="background-glow"></div>
              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${r.top}px;
                "
              ></div>
              <div class="scene-vignette"></div>
              ${Kt(r,o,i.solarPower)}
              <div
                class="flow-layer"
                style="
                  width:${o.sceneWidth}px;
                  height:${o.sceneHeight}px;
                "
              >
                ${function(t,e,i,o){const s=t.sceneWidth<1e3?Qt:Gt,r=t.sceneWidth<1e3?qt:Yt,n=function(t){const e=t.find(t=>"solar"===t.id),i=t.find(t=>"house"===t.id),o=t.find(t=>"battery"===t.id),s=t.find(t=>"grid"===t.id),r=t.find(t=>"spa"===t.id),n=t.find(t=>"heatpump"===t.id),a=t.find(t=>"appliance"===t.id),l=t.find(t=>"car"===t.id);return{houseAnchorLeft:{x:i.x,y:i.y+i.height/2},houseAnchorRight:{x:i.x+i.width,y:i.y+i.height/2},houseAnchorTop:{x:i.x+i.width/2,y:i.y},houseAnchorTopLeft:{x:i.x+(i.width/2-10),y:i.y},houseAnchorTopCenter:{x:i.x+i.width/2,y:i.y},houseAnchorTopRight:{x:i.x+(i.width/2+10),y:i.y},houseAnchorBottom:{x:i.x+i.width/2,y:i.y+i.height},houseAnchorBottomLeft:{x:i.x+(i.width/2-10),y:i.y+i.height},houseAnchorBottomCenter:{x:i.x+i.width/2,y:i.y+i.height},houseAnchorBottomRight:{x:i.x+(i.width/2+10),y:i.y+i.height},batteryAnchorLeft:{x:o.x,y:o.y+o.height/2},batteryAnchorUpperLeft:{x:o.x,y:o.y+o.height/2-10},batteryAnchorLowerLeft:{x:o.x,y:o.y+o.height/2+10},batteryAnchorRight:{x:o.x+o.width,y:o.y+o.height/2},batteryAnchorTop:{x:o.x+o.width/2,y:o.y},batteryAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},gridAnchorLeft:{x:s.x,y:s.y+s.height/2},gridAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},gridAnchorUpperRight:{x:s.x+s.width,y:s.y+(s.height/2-10)},gridAnchorLowerRight:{x:s.x+s.width,y:s.y+(s.height/2+10)},gridAnchorTop:{x:s.x+s.width/2,y:s.y},gridAnchorBottom:{x:s.x+s.width/2,y:s.y+s.height},solarAnchorLeft:{x:e.x,y:e.y+e.height/2},solarAnchorRight:{x:e.x+e.width,y:e.y+e.height/2},solarAnchorBottom:{x:e.x+e.width/2,y:e.y+e.height},solarAnchorBottomLeft:{x:e.x+(e.width/2-10),y:e.y+e.height},solarAnchorBottomCenter:{x:e.x+e.width/2,y:e.y+e.height},solarAnchorBottomRight:{x:e.x+(e.width/2+10),y:e.y+e.height},solarJunction:{x:e.x+e.width/2,y:e.y+e.height+55},spaAnchorLeft:{x:r.x,y:r.y+r.height/2},spaAnchorRight:{x:r.x+r.width,y:r.y+r.height/2},spaAnchorTop:{x:r.x+r.width/2,y:r.y},heatpumpAnchorLeft:{x:n.x,y:n.y+n.height/2},heatpumpAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},heatpumpAnchorTop:{x:n.x+n.width/2,y:n.y},applianceAnchorLeft:{x:a.x,y:a.y+a.height/2},applianceAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},applianceAnchorTop:{x:a.x+a.width/2,y:a.y},carAnchorLeft:{x:l.x,y:l.y+l.height/2},carAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},carAnchorTop:{x:l.x+l.width/2,y:l.y}}}(s),a=function(t){return{solar:t.solarAnchorBottom,solarLeft:t.solarAnchorLeft,solarRight:t.solarAnchorRight,solarBottom:t.solarAnchorBottom,solarBottomLeft:t.solarAnchorBottomLeft,solarBottomCenter:t.solarAnchorBottomCenter,solarBottomRight:t.solarAnchorBottomRight,gridLeft:t.gridAnchorLeft,gridRight:t.gridAnchorRight,gridUpperRight:t.gridAnchorUpperRight,gridLowerRight:t.gridAnchorLowerRight,gridTop:t.gridAnchorTop,gridBottom:t.gridAnchorBottom,batteryLeft:t.batteryAnchorLeft,batteryUpperLeft:t.batteryAnchorUpperLeft,batteryLowerLeft:t.batteryAnchorLowerLeft,batteryRight:t.batteryAnchorRight,batteryTop:t.batteryAnchorTop,batteryBottom:t.batteryAnchorBottom,houseLeft:t.houseAnchorLeft,houseRight:t.houseAnchorRight,houseTop:t.houseAnchorTop,houseBottom:t.houseAnchorBottom,houseBottomLeft:t.houseAnchorBottomLeft,houseBottomCenter:t.houseAnchorBottomCenter,houseBottomRight:t.houseAnchorBottomRight,houseTopLeft:t.houseAnchorTopLeft,houseTopCenter:t.houseAnchorTopCenter,houseTopRight:t.houseAnchorTopRight,spaLeft:t.spaAnchorLeft,spaRight:t.spaAnchorRight,spa:t.spaAnchorTop,heatpumpLeft:t.heatpumpAnchorLeft,heatpumpRight:t.heatpumpAnchorRight,heatpump:t.heatpumpAnchorTop,applianceLeft:t.applianceAnchorLeft,applianceRight:t.applianceAnchorRight,appliance:t.applianceAnchorTop,carLeft:t.carAnchorLeft,carRight:t.carAnchorRight,car:t.carAnchorTop,solarJunction:t.solarJunction}}(n);return V`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${It(a,e,r)}

    ${Vt(s,i,o)}
  </svg>
`}(o,e,i,this)}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}};t([yt({attribute:!1})],ue.prototype,"hass",void 0),t([yt({attribute:!1})],ue.prototype,"config",void 0),t([gt()],ue.prototype,"activeLayout",void 0),t([gt()],ue.prototype,"layoutType",void 0),t([gt()],ue.prototype,"sceneScale",void 0),t([gt()],ue.prototype,"layoutReady",void 0),ue=t([dt("solar-battery-economy-flow-card")],ue);export{ue as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
