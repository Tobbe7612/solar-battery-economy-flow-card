function e(e,t,i,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,i,r):s(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:y}=Object,u=globalThis,g=u.trustedTypes,m=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!l(e,t),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);s?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=y(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const n=s.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){const n=this.constructor;if(!1===o&&(s=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??x)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,f?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,E=e=>e,A=w.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,F=`<${T}>`,L=document,P=()=>L.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,B="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,O=/>/g,U=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,z=/"/g,N=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),j=W(1),G=W(2),V=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Q=new WeakMap,q=L.createTreeWalker(L,129);function J(e,t){if(!R(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const X=(e,t)=>{const i=e.length-1,o=[];let s,n=2===t?"<svg>":3===t?"<math>":"",r=D;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===D?"!--"===l[1]?r=I:void 0!==l[1]?r=O:void 0!==l[2]?(N.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=s??D,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?z:H):r===z||r===H?r=U:r===I||r===O?r=D:(r=U,s=void 0);const d=r===U&&e[t+1].startsWith("/>")?" ":"";n+=r===D?i+F:c>=0?(o.push(a),i.slice(0,c)+k+i.slice(c)+C+d):i+C+(-2===c?t:d)}return[J(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class K{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,n=0;const r=e.length-1,a=this.parts,[l,c]=X(e,t);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=q.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(k)){const t=c[n++],i=o.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?oe:"?"===r[1]?se:"@"===r[1]?ne:ie}),o.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:s}),o.removeAttribute(e));if(N.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],P()),q.nextNode(),a.push({type:2,index:++s});o.append(e[t],P())}}}else if(8===o.nodeType)if(o.data===T)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)a.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function Z(e,t,i=e,o){if(t===V)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Z(e,s._$AS(e,t.values),s,o)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??L).importNode(t,!0);q.currentNode=o;let s=q.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new te(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new re(s,this,e)),this._$AV.push(t),a=i[++r]}n!==a?.index&&(s=q.nextNode(),n++)}return q.currentNode=L,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Z(this,e,t),M(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ee(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new K(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new te(this.O(P()),this.O(P()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=E(e).nextSibling;E(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,o){const s=this.strings;let n=!1;if(void 0===s)e=Z(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==V,n&&(this._$AH=e);else{const o=e;let r,a;for(e=s[0],r=0;r<s.length-1;r++)a=Z(this,o[i+r],t,r),a===V&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===Y?e=Y:e!==Y&&(e+=(a??"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class oe extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class se extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ne extends ie{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Z(this,e,t,0)??Y)===V)return;const i=this._$AH,o=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Y&&(i===Y||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const ae=w.litHtmlPolyfillSupport;ae?.(K,te),(w.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new te(t.insertBefore(P(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const he=le.litElementPolyfillSupport;he?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},ye=(e=pe,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return(t,i)=>"object"==typeof i?ye(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ge(e){return ue({...e,state:!0,attribute:!1})}const me={sceneWidth:1920,sceneHeight:1080,solarArc:{centerX:960,centerY:-20,width:1300,height:220,sunRadius:16},panels:{left:{x:10,y:300,width:220,compact:!1},right:{x:1690,y:300,width:220,compact:!1}}},fe={sceneWidth:430,sceneHeight:1e3,solarArc:{centerX:215,centerY:40,width:340,height:50,sunRadius:10},panels:{left:{x:18,y:540,width:185,compact:!0},right:{x:227,y:540,width:185,compact:!0}}};const ve={solarHouse:"energy_system_power_solar_house",solarBattery:"energy_system_power_solar_battery",solarExport:"energy_system_power_solar_export",batteryHouse:"energy_system_power_battery_house",batteryGrid:"energy_system_power_battery_grid",gridHouse:"energy_system_power_grid_house",gridBattery:"energy_system_power_grid_battery",houseGrid:"energy_system_power_house_grid"},be={gridIndependenceEntity:"financial_30_grid_independence",batteryUtilizationEntity:"financial_31_battery_utilization",solarSelfConsumptionEntity:"financial_32_solar_self_consumption_rate",co2SavedEntity:"financial_33_co2_saved"},xe={savingsTodayEntity:"financial_03_savings_today",totalSavingsEntity:"financial_01_total_savings",savingsThisMonthEntity:"financial_04_savings_this_month",savingsThisYearEntity:"financial_05_savings_this_year",estimatedAnnualSavingsEntity:"financial_02_estimated_annual_savings",paybackTimeEntity:"financial_10_payback_time",roiEntity:"financial_12_return_on_investment"};function _e(e,t){const i=e?.states;if(i)return Object.keys(i).find(e=>e.endsWith(t))}function $e(e){const t={};for(const i of Object.keys(ve))t[i]=_e(e,ve[i]);return t}function we(e){if(!function(e){return void 0!==_e(e,ve.solarHouse)}(e))return{};const t={};for(const i of Object.keys(be)){const o=_e(e,be[i]);o&&(t[i]=o)}const i={};for(const t of Object.keys(xe)){const o=_e(e,xe[t]);o&&(i[t]=o)}return{sidePanels:{energy:{show:!0,...t},economy:{show:!0,...i}}}}function Ee(e,t){return{id:e,power:t,active:t>1,intensity:Math.min(1,t/5e3)}}function Ae(e){return Number(e?.attributes?.cloud_coverage??0)}function Se(e){return e>40}function ke(e,t,i){const o=function(e){const t=e?.states;if(t){if(t["weather.smhi_weather"])return t["weather.smhi_weather"];for(const e of Object.keys(t))if(e.startsWith("weather."))return t[e]}}(e),s=function(e){switch(e?.state??""){case"rainy":case"pouring":case"lightning-rainy":return"rain";case"cloudy":case"exceptional":return"cloudy";default:return Se(Ae(e))?"cloudy":"clear"}}(o),n=function(e){return"mobile"===e?"landscape":"villa"}(i),r=function(e,t,i){if("rain"===t)return{folder:"weather",filename:`${i}_rain.webp`};switch(e){case"night":return{folder:"night",filename:"cloudy"===t?`${i}_night_cloudy.webp`:`${i}_night_clear.webp`};case"bluehour":return{folder:"evening",filename:`${i}_bluehour.webp`};case"sunset":return{folder:"evening",filename:`${i}_evening.webp`};default:return{folder:"day",filename:"cloudy"===t?`${i}_day_cloudy.webp`:`${i}_day_clear.webp`}}}(t,s,n);return a=r.folder,l=r.filename,`/local/dev/solar-battery-economy-flow-card/assets/backgrounds/${a}/${l}`;var a,l}function Ce(e){return e.waypoints&&e.waypoints.length>0?function(e,t=20){if(e.length<2)return"";let i=`M ${e[0].x} ${e[0].y}`;for(let o=1;o<e.length-1;o++){const s=e[o-1],n=e[o],r=e[o+1],a=n.x-s.x,l=n.y-s.y,c=r.x-n.x,h=r.y-n.y,d=n.x-Math.sign(a)*t,p=n.y-Math.sign(l)*t,y=n.x+Math.sign(c)*t,u=n.y+Math.sign(h)*t;i+=`\n      L ${d} ${p}\n      Q ${n.x} ${n.y}\n        ${y} ${u}\n    `}const o=e[e.length-1];return i+=`\n    L ${o.x} ${o.y}\n  `,i}([e.start,...e.waypoints,e.end],e.radius??38):(t=e.start.x,i=e.start.y,o=e.end.x,s=e.end.y,`\n    M ${t} ${i}\n    L ${o} ${s}\n  `);var t,i,o,s}function Te(e){const t=Math.abs(e);return t<300?{particleCount:4,duration:6,lineOpacity:.1,lineWidth:2,sparkInterval:9}:t<800?{particleCount:6,duration:5.2,lineOpacity:.14,lineWidth:2.3,sparkInterval:7}:t<1500?{particleCount:8,duration:4.4,lineOpacity:.18,lineWidth:2.6,sparkInterval:6}:t<3e3?{particleCount:10,duration:3.7,lineOpacity:.22,lineWidth:2.9,sparkInterval:5}:t<5e3?{particleCount:12,duration:3,lineOpacity:.26,lineWidth:3.2,sparkInterval:4}:{particleCount:14,duration:2.2,lineOpacity:.3,lineWidth:3.5,sparkInterval:3}}function Fe(e,t){const i=Math.abs(e);return i<=1?{active:!1,color:t,opacity:0,blur:0}:i<300?{active:!0,color:t,opacity:.03,blur:8}:i<800?{active:!0,color:t,opacity:.045,blur:10}:i<1500?{active:!0,color:t,opacity:.06,blur:12}:i<3e3?{active:!0,color:t,opacity:.08,blur:14}:i<5e3?{active:!0,color:t,opacity:.1,blur:16}:{active:!0,color:t,opacity:.12,blur:18}}const Le=3.5;function Pe(e){return e.waypoints&&e.waypoints.length>0?[e.start,...e.waypoints,e.end]:[e.start,e.end]}function Me(e){const t=43758.5453*Math.sin(12.9898*e);return t-Math.floor(t)}function Re(e){let t=0;for(let i=0;i<e.length;i++)t=(31*t+e.charCodeAt(i))%1e5;return t}function Be(e,t,i,o,s){const n=t+53.1*e,r=Me(n+4.3)*s,a=.85+.3*Me(n+8.9),l=.8+.5*Me(n+13.1),c=function(e,t){let i=`M ${e[0].x} ${e[0].y}`;for(let o=0;o<e.length-1;o++){const s=e[o],n=e[o+1],r=n.x-s.x,a=-(n.y-s.y),l=r,c=Math.max(1,Math.hypot(a,l)),h=14*(Me(t+31.7*o)-.5);i+=` Q ${(s.x+n.x)/2+a/c*h} ${(s.y+n.y)/2+l/c*h} ${n.x} ${n.y}`}return i}(i,n),h=s*a,d=2*l;return G`
        <g class="energy-particle">

            <circle
                r="${4.5*l}"
                fill="${o}"
                opacity="0"
                filter="url(#energy-glow)"
            >
                <animateMotion
                    dur="${h}s"
                    begin="-${r}s"
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
                    begin="-${r}s"
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
                    begin="-${r}s"
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
                    begin="-${r}s"
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
    `}function De(e,t){return G`
        ${Array.from({length:2}).map((i,o)=>function(e,t,i){const o=Pe(e),s=Math.floor(Date.now()/(1e3*t.sparkInterval)),n=Re(e.id)+41.7*i+97.3*s,r=o.length-1,a=Math.min(r-1,Math.floor(Me(n)*r)),l=o[a],c=o[a+1],h=.2+.6*Me(n+3.7),d=l.x+(c.x-l.x)*h,p=l.y+(c.y-l.y)*h,y=180*Math.atan2(c.y-l.y,c.x-l.x)/Math.PI,u=Me(n+9.1)*t.sparkInterval;return G`
        <g transform="translate(${d}, ${p})" opacity="0">
            <animate
                attributeName="opacity"
                values="0;0;1;0.5;0;0"
                keyTimes="0;0.70;0.75;0.82;0.90;1"
                dur="${t.sparkInterval}s"
                begin="-${u}s"
                repeatCount="indefinite"
            />
            ${function(e,t,i,o){return G`
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
    `}(0,0,y,e.color)}
        </g>
    `}(e,t,o))}
    `}function Ie(e){if(!e.active||Math.abs(e.power)<1)return G``;const t=Ce(e),i=(o=e.power,{flow:Te(o)}).flow;var o;return G`

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

            ${function(e,t){const i=Pe(e),o=Re(e.id);return G`
        ${Array.from({length:t.particleCount}).map((s,n)=>Be(n,o,i,e.color,t.duration))}
    `}(e,i)}

            ${De(e,i)}

        </g>

    `}function Oe(e,t,i){const o=function(e,t,i){return i.map(i=>{const o=t[i.liveFlow];return{id:i.id,start:i.getStart(e),end:i.getEnd(e),waypoints:i.getWaypoints?i.getWaypoints(e):[],power:o?.power??0,active:o?.active??!1,color:i.color,radius:i.radius}})}(e,t,i);return G`

        ${G`

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
            ${o.map(e=>Ie(e))}
        </g>
    `}function Ue(e,t){e.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}function He(e,t,i,o,s,n){switch(e){case"solar":return function(e,t,i){return G`
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
    `}(t,i,s);case"house":return function(e,t,i){return G`
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
    `}(t,i,s);case"grid":return function(e,t,i){return G`

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

    `}(t,i,s);case"battery":{const e=Math.max(0,Math.min(100,n??0));return G`
                <g transform="translate(${t}, ${i}) rotate(-90)">

                    <rect
                        x="-28"
                        y="-16"
                        width="${56*(e/100)}"
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
            `}case"car":return function(e,t,i){return G`

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

    `}(t,i,s);case"spa":return function(e,t,i){return G`

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

    `}(t,i,s);case"heatpump":return function(e,t,i){return G`

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

    `}(t,i,s);case"appliance":return function(e,t,i){return G`

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

    `}(t,i,s);default:return G`
                <text
                    x="${t}"
                    y="${i}"
                    fill="${s}"
                    font-size="${o}"
                    text-anchor="middle"
                    dominant-baseline="middle"
                >
                    ?
                </text>
            `}}function ze(e,t,i){const o=e.width<=155,s=o?.6:1,n=o?.65:1,r=o?25:32,a=o?30:55,l=16*s,c=24*s,h=18*s,d=13*s,p=18*s,y=28*s,u=56*s,g=78*s,m=100*s,f=(v=t.power,b=t.color??e.accentColor??"#FFFFFF",{glow:Fe(v,b),pulse:{active:Math.abs(v)>1,scale:1.015,duration:3.2}});var v,b;const x=e.width/2,_=e.height/2;return G`

        <g
            class="energy-label"
            transform="translate(${e.x}, ${e.y})"
            pointer-events="all"
            style="cursor:pointer;"
            @click=${()=>{t.entityId&&Ue(i,t.entityId)}}
        >

            ${f.glow.active?G`
                    <rect
                        class="energy-label-glow"
                        x="-8"
                        y="-8"
                        width="${e.width+16}"
                        height="${e.height+16}"
                        rx="26"
                        ry="26"
                        fill="${f.glow.color}"
                        style="
                            filter: blur(${f.glow.blur}px);
                            --glow-opacity-min: ${.5*f.glow.opacity};
                            --glow-opacity-max: ${f.glow.opacity};
                        "
                    />
                `:""}

            <g>

                <rect
                    class="energy-label-frame${f.pulse.active?" is-pulsing":""}"
                    filter="url(#label-shadow)"
                    width="${e.width}"
                    height="${e.height}"

                    rx="22"
                    ry="22"

                    fill="rgba(18,24,34,0.72)"

                    stroke="rgba(255,255,255,0.10)"

                    stroke-width="1.5"

                    style="transform-origin: ${x}px ${_}px;"
                />

                <text
                    class="energy-label-title"
                    x="${p}"
                    y="${y}"
                    font-size="${l}"
                    fill="white"
                    font-weight="700"
                >
                    ${e.title}
                </text>

                <g
                    transform="
                        translate(
                            ${e.width-r},
                            ${a}
                        )
                        scale(${n})
                    "
                >
                    ${He(e.icon,0,0,22,f.glow.color,t.soc)}
                </g>

                ${t.line1?G`
                        <text
                            class="energy-label-line1"
                            x="${p}"
                            y="${u}"
                            font-size="${c}"
                            fill="white"
                            font-weight="700"
                        >
                            ${t.line1}
                        </text>
                    `:""}

                ${t.line2?G`
                        <text
                            class="energy-label-line2"
                            x="${p}"
                            y="${g}"
                            font-size="${h}"
                            fill="white"
                            opacity="0.92"
                        >
                            ${t.line2}
                        </text>
                    `:""}

                ${t.line3?G`
                        <text
                            class="energy-label-line3"
                            x="${p}"
                            y="${m}"
                            font-size="${d}"
                            fill="white"
                            opacity="0.70"
                        >
                            ${t.line3}
                        </text>
                    `:""}

            </g>

        </g>

    `}function Ne(e){return Math.abs(e)<1e3?`${Math.round(e)} W`:`${(e/1e3).toFixed(1)} kW`}function We(e){return`${Math.round(e)}%`}function je(e,t,i){return G`
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
            ${e.map(e=>{let o;switch(e.id){case"battery":o={line1:Ne((s=t).batteryPower),line2:We(s.batterySoc),line3:s.batteryStatus,entityId:s.batteryEntity,power:s.batteryPower,soc:s.batterySoc,color:s.batteryPower<-1?"#61FF8B":s.batteryPower>1?"#FFB347":"#FFFFFF"};break;case"house":o=function(e){return{line1:Ne(e.housePower),line2:"",line3:e.houseStatus,entityId:e.houseEntity,power:e.housePower}}(t);break;case"grid":o=function(e){return{line1:Ne(e.gridPower),line2:"",line3:e.gridStatus,entityId:e.gridEntity,power:e.gridPower,color:e.gridPower>1?"#FF6B6B":e.gridPower<-1?"#61FF8B":"#4FC3F7"}}(t);break;case"solar":o=function(e){return{line1:Ne(e.solarPower),line2:"",line3:e.solarStatus,entityId:e.solarEntity,power:e.solarPower,color:e.solarPower>1?"#FFD54A":"#8A93A3"}}(t);break;case"car":o=function(e){return{line1:Ne(e.carPower),line2:We(e.carSoc),line3:e.carStatus,entityId:e.carEntity,power:e.carPower,color:e.carPower>1?"#FF6B6B":"#8A93A3"}}(t);break;case"spa":o=function(e){return{line1:Ne(e.spaPower),line2:`${e.spaTemperature.toFixed(0)} °C`,line3:e.spaStatus,entityId:e.spaEntity,power:e.spaPower,color:e.spaPower>1?"#FF6B6B":"#8A93A3"}}(t);break;case"heatpump":o=function(e){return{line1:Ne(e.heatpumpPower),line2:"",line3:e.heatpumpStatus,entityId:e.heatpumpEntity,power:e.heatpumpPower,color:e.heatpumpPower>1?"#FF6B6B":"#8A93A3"}}(t);break;case"appliance":o=function(e){return{line1:Ne(e.appliancePower),line2:"",line3:e.applianceStatus,entityId:e.applianceEntity,power:e.appliancePower,color:e.appliancePower>1?"#FF6B6B":"#8A93A3"}}(t);break;default:o={line1:"1234 W",line2:"",line3:"",power:0}}var s;return ze(e,o,i)})}
        </g>
    `}const Ge=[{id:"solar",title:"SOLAR",icon:"solar",x:890,y:300,width:180,height:110,accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:480,y:440,width:180,height:110,accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:890,y:600,width:180,height:110,accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:1230,y:440,width:180,height:110,accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:565,y:750,width:180,height:110,accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:790,y:850,width:180,height:110,accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:1e3,y:850,width:180,height:110,accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:1230,y:750,width:180,height:110,accentColor:"#81D4FA"}],Ve=[{id:"solar",title:"SOLAR",icon:"solar",x:160,y:130,width:110,height:70,accentColor:"#FFD54A"},{id:"grid",title:"GRID",icon:"grid",x:25,y:220,width:110,height:70,accentColor:"#4FC3F7"},{id:"house",title:"HOUSE",icon:"house",x:160,y:300,width:110,height:70,accentColor:"#FFFFFF"},{id:"battery",title:"BATTERY",icon:"battery",x:300,y:220,width:110,height:70,accentColor:"#FFFFFF"},{id:"spa",title:"SPA",icon:"spa",x:25,y:460,width:105,height:70,accentColor:"#FF8A65"},{id:"heatpump",title:"HEATPUMP",icon:"heatpump",x:25,y:380,width:105,height:70,accentColor:"#4FC3F7"},{id:"appliance",title:"APPLIANCE",icon:"appliance",x:300,y:460,width:105,height:70,accentColor:"#FFFFFF"},{id:"car",title:"CAR",icon:"car",x:300,y:380,width:105,height:70,accentColor:"#81D4FA"}],Ye=[{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solar,getEnd:e=>e.houseTop,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A"},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A"},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLeft,getEnd:e=>e.houseTopRight,color:"#59D990"},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryUpperLeft,getEnd:e=>e.gridUpperRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B"},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridUpperRight,getEnd:e=>e.batteryUpperLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomLeft,getEnd:e=>e.spa,color:"#FF6B6B"},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomCenter,getEnd:e=>e.heatpump,color:"#FF6B6B"},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.appliance,color:"#FF6B6B"},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.car,color:"#FF6B6B"}],Qe=[{id:"solar-house",liveFlow:"solar-house",getStart:e=>e.solarBottomCenter,getEnd:e=>e.houseTopCenter,color:"#FFD54A"},{id:"solar-battery",liveFlow:"solar-battery",getStart:e=>e.solarRight,getEnd:e=>e.batteryTop,color:"#FFD54A",radius:30},{id:"solar-export",liveFlow:"solar-export",getStart:e=>e.solarLeft,getEnd:e=>e.gridTop,color:"#FFD54A",radius:30},{id:"battery-house",liveFlow:"battery-house",getStart:e=>e.batteryLowerLeft,getEnd:e=>e.houseTopRight,color:"#59D990",radius:30},{id:"battery-grid",liveFlow:"battery-grid",getStart:e=>e.batteryLeft,getEnd:e=>e.gridRight,color:"#67F59B"},{id:"grid-house",liveFlow:"grid-house",getStart:e=>e.gridLowerRight,getEnd:e=>e.houseTopLeft,color:"#FF6B6B",radius:30},{id:"grid-battery",liveFlow:"grid-battery",getStart:e=>e.gridRight,getEnd:e=>e.batteryLeft,color:"#FF6B6B"},{id:"house-spa",liveFlow:"house-spa",getStart:e=>e.houseBottomCenter,getEnd:e=>e.spaRight,color:"#FF6B6B",radius:30},{id:"house-heatpump",liveFlow:"house-heatpump",getStart:e=>e.houseBottomLeft,getEnd:e=>e.heatpumpRight,color:"#FF6B6B",radius:30},{id:"house-appliance",liveFlow:"house-appliance",getStart:e=>e.houseBottomCenter,getEnd:e=>e.applianceLeft,color:"#FF6B6B",radius:30},{id:"house-car",liveFlow:"house-car",getStart:e=>e.houseBottomRight,getEnd:e=>e.carLeft,color:"#FF6B6B",radius:30}];function qe(e,t,i){return i.particleCount<=0?G``:G`
        ${Array.from({length:i.particleCount}).map((o,s)=>function(e,t,i,o){const s=Me(7.31*e)-.5,n=Me(13.7*e+3)-.5,r=Me(19.1*e+11)-.5,a=Me(5.13*e+9)*o,l=.7+.6*Me(2.9*e+17),c=.85+.3*Me(3.7*e+23),h=i.x-t.x,d=-(i.y-t.y),p=h,y=Math.max(1,Math.hypot(d,p)),u=26*r,g=(t.x+i.x)/2+d/y*u,m=(t.y+i.y)/2+p/y*u,f=`M ${t.x+14*s} ${t.y+14*n} Q ${g} ${m} ${i.x} ${i.y}`,v=o*c;return G`
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
                path="${f}"
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
    `}(s,e,t,i.duration))}
    `}function Je(e,t){return t<=0?G``:G`
        ${Array.from({length:t}).map((t,i)=>function(e,t){const i=Me(17.3*e+31)*Math.PI*2,o=14+10*Me(23.9*e+5),s=2.2*Me(8.1*e+11),n=1.6+.8*Me(4.4*e+19),r=.7+.6*Me(6.7*e+41),a=Math.cos(i)*o,l=Math.sin(i)*o,c=`M ${t.x} ${t.y} L ${t.x+a} ${t.y+l}`;return G`
        <circle
            r="${1.3*r}"
            fill="#FFE9A8"
            opacity="0"
        >
            <animateMotion
                dur="${n}s"
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
                dur="${n}s"
                begin="-${s}s"
                repeatCount="indefinite"
            />
        </circle>
    `}(i,e))}
    `}function Xe(e,t,i){const{centerX:o,centerY:s,width:n,height:r,sunRadius:a}=t.solarArc,l={x:o-n/2,y:s+r},c={x:o,y:s-20},h={x:o+n/2,y:s+r},d=function(e,t,i,o){const s=1-e;return{x:s*s*t.x+2*s*e*i.x+e*e*o.x,y:s*s*t.y+2*s*e*i.y+e*e*o.y}}(e.progress,l,c,h),p=(t.sceneWidth<1e3?Ve:Ge).find(e=>"solar"===e.id),y={x:p.x+p.width/2,y:p.y},u=function(e){const t=Math.max(0,e);return t<=0?{particleCount:0,duration:Le}:t<500?{particleCount:4,duration:Le}:t<1500?{particleCount:8,duration:Le}:t<3e3?{particleCount:12,duration:Le}:{particleCount:15,duration:Le}}(i);return G`
    <svg
      class="solar-arc-svg"
      viewBox="0 0 1920 1080"
    >
      <path
        d="
          M ${o-n/2}
            ${s+r}

          Q ${o}
            ${s-20}

            ${o+n/2}
            ${s+r}
        "
        class="solar-arc-path"
      />
      ${e.aboveHorizon?G`
              <circle
                  cx="${d.x}"
                  cy="${d.y}"
                  r="${a}"
                  class="solar-arc-sun"
              />
          `:G``}
      ${qe(d,y,u)}
      ${Je(d,u.particleCount)}
      <text
          x="${o-n/2}"
          y="${s+r+28}"
          text-anchor="start"
          class="solar-arc-time"
      >
          ${e.sunrise}
      </text>
      <text
          x="${o+n/2}"
          y="${s+r+28}"
          text-anchor="end"
          class="solar-arc-time"
      >
          ${e.sunset}
      </text>
    </svg>
  `}const Ke=r`
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

`,Ze=r`

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

`,et=r`
 
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
 
`,tt=r`
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
${Ke}
${Ze}
${et}
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=1;class ot{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st="important",nt=" !"+st,rt=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ot{constructor(e){if(super(e),e.type!==it||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(nt);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?st:""):i[e]=o}}return V}});function at(e,t,i=0){const o=e?.states?.[t]?.state,s=Number(o);return Number.isFinite(s)?s:i}function lt(e,t,i=""){const o=e?.states?.[t]?.state;return o??i}function ct(e,t,i,o){return e?.states?.[t]?.attributes?.[i]??o}const ht={layout:"desktop",sidePanels:{energy:{show:!0},economy:{show:!0}},devices:[{enabled:!1,iconType:"premium"},{enabled:!1,iconType:"premium"},{enabled:!1,iconType:"premium"},{enabled:!1,iconType:"premium"}]};let dt=class extends ce{constructor(){super(...arguments),this._config=ht,this._deviceDrafts={},this.generalSchema=[{name:"layout",label:"Layout",selector:{select:{mode:"dropdown",options:[{value:"desktop",label:"Desktop"},{value:"mobile",label:"Mobile"}]}}}],this.batteryInfoSchema=[{name:"batterySocEntity",label:"Battery SOC",selector:{entity:{domain:"sensor"}}},{name:"solarInfoEntity",label:"Solar info",selector:{entity:{}}},{name:"gridInfoEntity",label:"Grid info",selector:{entity:{}}},{name:"houseInfoEntity",label:"House info",selector:{entity:{}}},{name:"batteryInfoEntity",label:"Battery info",selector:{entity:{}}}],this.energyPanelSchema=[{name:"show",label:"Show Energy Panel",selector:{boolean:{}}},{name:"importTodayEntity",label:"Import Today",selector:{entity:{domain:"sensor"}}},{name:"exportTodayEntity",label:"Export Today",selector:{entity:{domain:"sensor"}}},{name:"gridIndependenceEntity",label:"Grid Independence",selector:{entity:{domain:"sensor"}}},{name:"solarSelfConsumptionEntity",label:"Solar Self Consumption",selector:{entity:{domain:"sensor"}}},{name:"batteryUtilizationEntity",label:"Battery Utilization",selector:{entity:{domain:"sensor"}}},{name:"co2SavedEntity",label:"CO₂ Saved",selector:{entity:{domain:"sensor"}}}],this.economyPanelSchema=[{name:"show",label:"Show Economy Panel",selector:{boolean:{}}},{name:"savingsTodayEntity",label:"Savings Today",selector:{entity:{domain:"sensor"}}},{name:"totalSavingsEntity",label:"Total Savings",selector:{entity:{domain:"sensor"}}},{name:"savingsThisMonthEntity",label:"Savings This Month",selector:{entity:{domain:"sensor"}}},{name:"savingsThisYearEntity",label:"Savings This Year",selector:{entity:{domain:"sensor"}}},{name:"estimatedAnnualSavingsEntity",label:"Estimated Annual Savings",selector:{entity:{domain:"sensor"}}},{name:"paybackTimeEntity",label:"Payback Time",selector:{entity:{domain:"sensor"}}},{name:"roiEntity",label:"ROI",selector:{entity:{domain:"sensor"}}}]}setConfig(e){this._config={...ht,...e}}getDeviceSchema(e){const t=[{name:"enabled",label:"Enabled",selector:{boolean:{}}},{name:"title",label:"Title",selector:{text:{}}},{name:"powerEntity",label:"Power",selector:{entity:{}}},{name:"optionalType",label:"Optional",selector:{select:{mode:"dropdown",options:[{value:"",label:"None"},{value:"soc",label:"SOC"},{value:"temperature",label:"Temperature"}]}}}];return"soc"!==e.optionalType&&"temperature"!==e.optionalType||t.push({name:"optionalEntity",label:"Optional entity",selector:{entity:{}}}),t.push({name:"statusEntity",label:"Status",selector:{entity:{}}}),e.statusEntity||t.push({name:"statusThreshold1",label:"Status threshold 1 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel1",label:"Status 1",selector:{text:{}}},{name:"statusThreshold2",label:"Status threshold 2 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel2",label:"Status 2",selector:{text:{}}},{name:"statusThreshold3",label:"Status threshold 3 (W)",selector:{number:{mode:"box",step:1}}},{name:"statusLabel3",label:"Status 3",selector:{text:{}}}),t.push({name:"iconType",label:"Icon type",selector:{select:{mode:"dropdown",options:[{value:"premium",label:"Premium SVG"},{value:"mdi",label:"Material Design Icon"}]}}}),"premium"===e.iconType&&t.push({name:"premiumIcon",label:"Premium icon",selector:{select:{mode:"dropdown",options:[{value:"car",label:"Car"},{value:"spa",label:"Spa"},{value:"heatpump",label:"Heat Pump"},{value:"appliance",label:"Appliance"}]}}}),"mdi"===e.iconType&&t.push({name:"mdiIcon",label:"MDI icon",selector:{text:{}}}),t}_valueChanged(e){this._config={...this._config,...e.detail.value},this._fireConfigChanged()}_energyPanelValueChanged(e){const t=e.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,energy:{...this._config.sidePanels.energy,...t}}},this._fireConfigChanged()}_economyPanelValueChanged(e){const t=e.detail.value;this._config={...this._config,sidePanels:{...this._config.sidePanels,economy:{...this._config.sidePanels.economy,...t}}},this._fireConfigChanged()}_getDeviceFormData(e,t){const i=this._deviceDrafts[e]??{},o={...t,...i};if(!this._deviceDrafts[e]){(t.statusRules??[]).forEach((e,t)=>{const i=t+1;i<=3&&(o[`statusThreshold${i}`]=e.threshold,o[`statusLabel${i}`]=e.label)})}return o}_updateDeviceDraft(e,t){const i={...this._deviceDrafts[e]??{},...t};return this._deviceDrafts={...this._deviceDrafts,[e]:i},i}_buildStatusRules(e){const t=[];for(let i=1;i<=3;i++){const o=Number(e[`statusThreshold${i}`]),s=String(e[`statusLabel${i}`]??"").trim();Number.isFinite(o)&&s&&t.push({threshold:o,label:s})}return t.sort((e,t)=>e.threshold-t.threshold)}_deviceValueChanged(e,t){const i=t.detail.value;this._updateDeviceDraft(e,i);const{statusThreshold1:o,statusLabel1:s,statusThreshold2:n,statusLabel2:r,statusThreshold3:a,statusLabel3:l,...c}=i,h=this._deviceDrafts[e]??{},d=[...this._config.devices];d[e]={...d[e],...c,statusRules:this._buildStatusRules(h)},this._config={...this._config,devices:d},this._fireConfigChanged()}_device1ValueChanged(e){this._deviceValueChanged(0,e)}_device2ValueChanged(e){this._deviceValueChanged(1,e)}_device3ValueChanged(e){this._deviceValueChanged(2,e)}_device4ValueChanged(e){this._deviceValueChanged(3,e)}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}render(){return j`
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
        `}static{this.styles=r`
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
    `}};e([ue({attribute:!1})],dt.prototype,"hass",void 0),e([ge()],dt.prototype,"_config",void 0),e([ge()],dt.prototype,"_deviceDrafts",void 0),dt=e([de("solar-battery-economy-flow-card-editor")],dt);let pt=class extends ce{constructor(){super(...arguments),this.activeLayout=me,this.layoutType="desktop",this.sceneScale=1,this.layoutReady=!1}static{this.styles=tt}static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return ht}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{const t=e[0].contentRect.width,i=e[0].contentRect.height;if(t<10||i<10)return;this.sceneScale=1;const o=function(e){const t="mobile"===e.layout?fe:me,i=t.sceneWidth,o=t.sceneHeight,s=e.width/i,n=e.height/o;return{layout:t,scale:Math.min(s,n),offsetX:0,offsetY:0}}({layout:this.layoutType,width:t,height:i});console.count("ResizeObserver"),console.log({width:t,height:i,scale:o.scale,layout:this.layoutType}),console.log("Scene:",o.layout.sceneWidth,o.layout.sceneHeight),console.log("Scale:",o.scale),console.log("Layout:",this.layoutType),console.log("Scene size:",o.layout.sceneWidth,o.layout.sceneHeight),this.activeLayout=o.layout,this.sceneScale=o.scale,this.layoutReady=!0})}disconnectedCallback(){this.resizeObserver?.disconnect(),super.disconnectedCallback()}firstUpdated(){const e=this.renderRoot.querySelector(".card");console.log(e),console.log(e.clientWidth,e.clientHeight),this.resizeObserver?.observe(e)}setConfig(e){this.config=e;const t=e?.layout;this.layoutType="mobile"===t?"mobile":"desktop"}render(){if(!this.layoutReady)return j`
        <ha-card class="ha-wrapper">
          <div class="card ${this.layoutType}"></div>
        </ha-card>
      `;const e=function(e){const t=t=>{if(!t)return 0;const i=e?.states?.[t]?.state,o=Number(i);return isNaN(o)?0:o},i=$e(e);return{"solar-house":Ee("solar-house",t(i.solarHouse)),"solar-battery":Ee("solar-battery",t(i.solarBattery)),"solar-export":Ee("solar-export",t(i.solarExport)),"battery-house":Ee("battery-house",t(i.batteryHouse)),"battery-grid":Ee("battery-grid",t(i.batteryGrid)),"grid-house":Ee("grid-house",t(i.gridHouse)),"grid-battery":Ee("grid-battery",t(i.gridBattery)),"house-spa":Ee("house-spa",t("sensor.plugg_spabad_power")),"house-car":Ee("house-car",t("sensor.volvo_ec40_charging_power")),"house-heatpump":Ee("house-heatpump",t("sensor.thermia_power_estimator_total_effekt")),"house-appliance":Ee("house-appliance",t("sensor.vitvaror_effekt"))}}(this.hass),t=function(e,t){const i=t??{},o=e.sidePanels?.energy??{},s=e.sidePanels?.economy??{},n=i.sidePanels?.energy??{},r=i.sidePanels?.economy??{};return{layout:i.layout??ht.layout,batterySocEntity:i.batterySocEntity,solarInfoEntity:i.solarInfoEntity,gridInfoEntity:i.gridInfoEntity,houseInfoEntity:i.houseInfoEntity,batteryInfoEntity:i.batteryInfoEntity,sidePanels:{energy:{show:n.show??ht.sidePanels.energy.show,importTodayEntity:n.importTodayEntity,exportTodayEntity:n.exportTodayEntity,gridIndependenceEntity:n.gridIndependenceEntity??o.gridIndependenceEntity,solarSelfConsumptionEntity:n.solarSelfConsumptionEntity??o.solarSelfConsumptionEntity,batteryUtilizationEntity:n.batteryUtilizationEntity??o.batteryUtilizationEntity,co2SavedEntity:n.co2SavedEntity??o.co2SavedEntity},economy:{show:r.show??ht.sidePanels.economy.show,savingsTodayEntity:r.savingsTodayEntity??s.savingsTodayEntity,totalSavingsEntity:r.totalSavingsEntity??s.totalSavingsEntity,savingsThisMonthEntity:r.savingsThisMonthEntity??s.savingsThisMonthEntity,savingsThisYearEntity:r.savingsThisYearEntity??s.savingsThisYearEntity,estimatedAnnualSavingsEntity:r.estimatedAnnualSavingsEntity??s.estimatedAnnualSavingsEntity,paybackTimeEntity:r.paybackTimeEntity??s.paybackTimeEntity,roiEntity:r.roiEntity??s.roiEntity}},devices:i.devices??ht.devices}}(we(this.hass),this.config),i=function(e,t){const i=$e(e),o=i.solarHouse?at(e,i.solarHouse):0,s=i.solarBattery?at(e,i.solarBattery):0,n=i.solarExport?at(e,i.solarExport):0,r=i.batteryHouse?at(e,i.batteryHouse):0,a=i.batteryGrid?at(e,i.batteryGrid):0,l=i.gridHouse?at(e,i.gridHouse):0,c=i.gridBattery?at(e,i.gridBattery):0,h=o+s+n,d=o+r+l,p=l+c-(i.houseGrid?at(e,i.houseGrid):0)-a-n,y=s+c-(r+a),u=at(e,"sensor.solar_battery_economy_energy_system_energy_battery_house"),g=at(e,"sensor.solar_battery_economy_energy_system_energy_solar_export"),m=at(e,"sensor.solar_battery_economy_energy_system_energy_grid_house"),f="above_horizon"===lt(e,"sun.sun")?"Over horizon":"Under horizon",v=y>1?"Charging":y<-1?"Discharging":"Standby",b=[];o>1&&b.push("Solar"),r>1&&b.push("Battery"),l>1&&b.push("Grid");const x=b.length>0?b.join(" + "):"No load",_=p>1?"Importing":p<-1?"Exporting":"Balance",$=t?.batterySocEntity?at(e,t.batterySocEntity):0,w=t?.solarInfoEntity??"sensor.solaredge_ac_power",E=t?.gridInfoEntity??"sensor.effekt_alla_faser",A=t?.houseInfoEntity??"sensor.forbrukning_nu_ny",S=t?.batteryInfoEntity??"sensor.saj_realtime_battery_power",k=t?.sidePanels?.energy?.batteryUtilizationEntity??"sensor.solar_battery_economy_financial_31_battery_utilization",C=at(e,k),T=t?.sidePanels?.economy?.savingsTodayEntity??"sensor.solar_battery_economy_financial_03_savings_today",F=at(e,T),L=t?.sidePanels?.energy?.co2SavedEntity??"sensor.solar_battery_economy_financial_33_co2_saved",P=at(e,L),M=t?.sidePanels?.energy?.solarSelfConsumptionEntity??"sensor.solar_battery_economy_financial_32_solar_self_consumption_rate",R=at(e,M),B=t?.sidePanels?.economy?.totalSavingsEntity??"sensor.solar_battery_economy_financial_01_total_savings",D=at(e,B),I=t?.sidePanels?.economy?.roiEntity??"sensor.solar_battery_economy_financial_12_return_on_investment",O=at(e,I),U=t?.sidePanels?.energy?.importTodayEntity??"sensor.import_idag",H=at(e,U),z=t?.sidePanels?.energy?.exportTodayEntity??"sensor.export_idag",N=at(e,z),W=t?.sidePanels?.economy?.savingsThisMonthEntity??"sensor.solar_battery_economy_financial_04_savings_this_month",j=at(e,W),G=t?.sidePanels?.economy?.savingsThisYearEntity??"sensor.solar_battery_economy_financial_05_savings_this_year",V=at(e,G),Y=t?.sidePanels?.economy?.estimatedAnnualSavingsEntity??"sensor.solar_battery_economy_financial_02_estimated_annual_savings",Q=at(e,Y),q=t?.sidePanels?.economy?.paybackTimeEntity??"sensor.solar_battery_economy_financial_10_payback_time",J=at(e,q),X=t?.sidePanels?.energy?.gridIndependenceEntity??"sensor.solar_battery_economy_financial_30_grid_independence",K=at(e,X),Z=at(e,"sensor.volvo_ec40_charging_power"),ee=at(e,"sensor.volvo_ec40_batteri"),te=lt(e,"sensor.volvo_ec40_charging_status","Unknown"),ie=at(e,"sensor.plugg_spabad_power"),oe=ct(e,"climate.spa_thermostat","current_temperature",0),se=lt(e,"climate.spa_thermostat"),ne=ct(e,"climate.spa_thermostat","hvac_action",""),re="off"===se?"Heating Off":"Heating"===ne?"Heating":"Standby",ae=at(e,"sensor.thermia_power_estimator_total_effekt"),le=lt(e,"sensor.thermia_power_estimator_driftlage","Okänd"),ce=at(e,"sensor.vitvaror_effekt");return{solarPower:h,solarStatus:f,solarEntity:w,batteryToHouse:u,solarExportEnergy:g,gridToHouseEnergy:m,batteryUtilization:C,batteryUtilizationEntity:k,savingsToday:F,savingsTodayEntity:T,totalSavings:D,totalSavingsEntity:B,roi:O,roiEntity:I,importToday:H,importTodayEntity:U,exportToday:N,exportTodayEntity:z,savingsThisMonth:j,savingsThisMonthEntity:W,savingsThisYear:V,savingsThisYearEntity:G,estimatedAnnualSavings:Q,estimatedAnnualSavingsEntity:Y,paybackTime:J,paybackTimeEntity:q,gridIndependence:K,gridIndependenceEntity:X,co2Saved:P,co2SavedEntity:L,solarSelfConsumptionRate:R,solarSelfConsumptionRateEntity:M,batterySoc:$,batteryPower:y,batteryStatus:v,batteryEntity:S,housePower:d,houseStatus:x,houseEntity:A,gridPower:p,gridStatus:_,gridEntity:E,carPower:Z,carSoc:ee,carStatus:te,carEntity:"sensor.volvo_ec40_charging_power",spaPower:ie,spaTemperature:oe,spaStatus:re,spaEntity:"sensor.plugg_spabad_power",heatpumpPower:ae,heatpumpStatus:le,heatpumpEntity:"sensor.thermia_power_estimator_total_effekt",appliancePower:ce,applianceStatus:ce>1?"Active":"Standby",applianceEntity:"sensor.vitvaror_effekt"}}(this.hass,t),o=this.activeLayout,s=function(e){const t=e?.states?.["sun.sun"];if(!t)return"day";const i=Number(t.attributes?.elevation??0);return"above_horizon"===t.state?i<8?"morning":i<20?"sunset":"day":i>-6?"bluehour":"night"}(this.hass),n=function(e){const t=e?.states?.["sun.sun"];if(!t)return{progress:0,aboveHorizon:!1,left:0,top:0,sunrise:"--:--",sunset:"--:--"};const i=Number(t.attributes?.elevation??0),o=Number(t.attributes?.azimuth??180),s="above_horizon"===t.state,n=Math.max(0,Math.min(1,(o-90)/180));return{progress:n,aboveHorizon:s,left:100*n,top:Math.max(40,280-6*i),sunrise:new Date(t.attributes.next_rising).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),sunset:new Date(t.attributes.next_setting).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}}(this.hass),r=ke(this.hass,s,this.layoutType);return j`
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
              ${t.sidePanels.energy.show?function(e){const{x:t,y:i,panel:o,host:s,cardData:n}=e,r=n.gridIndependence,a=n.gridIndependenceEntity,l=n.solarSelfConsumptionRate,c=n.solarSelfConsumptionRateEntity,h=n.batteryUtilization,d=n.batteryUtilizationEntity,p=n.co2Saved,y=n.co2SavedEntity;return j`
        <div
            class=${"side-panel side-panel-left"+(o.compact?" compact":"")}
            style=${rt({left:`${t}px`,top:`${i}px`,width:o.width?`${o.width}px`:void 0})}
        >
            <div class="side-title">
                Energy
            </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.importTodayEntity)}
                >
                    <div class="side-label">
                        Import today
                    </div>
                    <div class="side-value value-grid">
                        ${n.importToday} kWh
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.exportTodayEntity)}
                >
                    <div class="side-label">
                        Export today
                    </div>
                    <div class="side-value value-export">
                        ${n.exportToday} kWh
                    </div>
                </div>
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,a)}
                >
                    <div class="side-label">
                        Grid Independance
                    </div>
                    <div class="side-value value-independence">
                        ${r} %
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,c)}
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
                    @click=${()=>Ue(s,d)}
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
                    @click=${()=>Ue(s,y)}
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

              ${t.sidePanels.economy.show?function(e){const{x:t,y:i,panel:o,host:s,cardData:n}=e,r=n.savingsToday,a=n.savingsTodayEntity;n.totalSavings,n.totalSavingsEntity;const l=n.roi,c=n.roiEntity;return j`
        <div
            class=${"side-panel side-panel-right"+(o.compact?" compact":"")}
            style=${rt({left:`${t}px`,top:`${i}px`,width:o.width?`${o.width}px`:void 0})}
        >
            <div class="side-title">
                Economy
            </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,a)}
                >
                    <div class="side-label">
                        Savings today
                    </div>
                    <div class="side-value value-money">
                        ${r} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.savingsThisMonthEntity)}
                >
                    <div class="side-label">
                        Savings this month
                    </div>
                    <div class="side-value value-money">
                        ${n.savingsThisMonth} kr
                    </div>
                </div>
                <div class="side-divider"></div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.paybackTimeEntity)}
                >
                    <div class="side-label">
                        Payback time
                    </div>
                    <div class="side-value value-money">
                        ${n.paybackTime} år
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.savingsThisYearEntity)}
                >
                    <div class="side-label">
                        Savings this year
                    </div>
                    <div class="side-value value-money">
                        ${n.savingsThisYear} kr
                    </div>
                </div>
            <div class="panel-section">
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,n.estimatedAnnualSavingsEntity)}
                >
                    <div class="side-label">
                        Estimated annual saving
                    </div>
                    <div class="side-value value-money">
                        ${n.estimatedAnnualSavings} kr
                    </div>
                </div>
                <div
                    class="side-stat"
                    style="cursor:pointer;"
                    @click=${()=>Ue(s,c)}
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
                    url('${r}');
                "
              ></div>
              <div class="background-glow"></div>
              <div
                class="scene-sun-glow"
                style="
                  left:50%;
                  top:${n.top}px;
                "
              ></div>
              <div class="scene-vignette"></div>
              ${Xe(n,o,i.solarPower)}
              <div
                class="flow-layer"
                style="
                  width:${o.sceneWidth}px;
                  height:${o.sceneHeight}px;
                "
              >
                ${function(e,t,i,o){const s=e.sceneWidth<1e3?Ve:Ge,n=e.sceneWidth<1e3?Qe:Ye,r=function(e){const t=e.find(e=>"solar"===e.id),i=e.find(e=>"house"===e.id),o=e.find(e=>"battery"===e.id),s=e.find(e=>"grid"===e.id),n=e.find(e=>"spa"===e.id),r=e.find(e=>"heatpump"===e.id),a=e.find(e=>"appliance"===e.id),l=e.find(e=>"car"===e.id);return{houseAnchorLeft:{x:i.x,y:i.y+i.height/2},houseAnchorRight:{x:i.x+i.width,y:i.y+i.height/2},houseAnchorTop:{x:i.x+i.width/2,y:i.y},houseAnchorTopLeft:{x:i.x+(i.width/2-10),y:i.y},houseAnchorTopCenter:{x:i.x+i.width/2,y:i.y},houseAnchorTopRight:{x:i.x+(i.width/2+10),y:i.y},houseAnchorBottom:{x:i.x+i.width/2,y:i.y+i.height},houseAnchorBottomLeft:{x:i.x+(i.width/2-10),y:i.y+i.height},houseAnchorBottomCenter:{x:i.x+i.width/2,y:i.y+i.height},houseAnchorBottomRight:{x:i.x+(i.width/2+10),y:i.y+i.height},batteryAnchorLeft:{x:o.x,y:o.y+o.height/2},batteryAnchorUpperLeft:{x:o.x,y:o.y+o.height/2-10},batteryAnchorLowerLeft:{x:o.x,y:o.y+o.height/2+10},batteryAnchorRight:{x:o.x+o.width,y:o.y+o.height/2},batteryAnchorTop:{x:o.x+o.width/2,y:o.y},batteryAnchorBottom:{x:o.x+o.width/2,y:o.y+o.height},gridAnchorLeft:{x:s.x,y:s.y+s.height/2},gridAnchorRight:{x:s.x+s.width,y:s.y+s.height/2},gridAnchorUpperRight:{x:s.x+s.width,y:s.y+(s.height/2-10)},gridAnchorLowerRight:{x:s.x+s.width,y:s.y+(s.height/2+10)},gridAnchorTop:{x:s.x+s.width/2,y:s.y},gridAnchorBottom:{x:s.x+s.width/2,y:s.y+s.height},solarAnchorLeft:{x:t.x,y:t.y+t.height/2},solarAnchorRight:{x:t.x+t.width,y:t.y+t.height/2},solarAnchorBottom:{x:t.x+t.width/2,y:t.y+t.height},solarAnchorBottomLeft:{x:t.x+(t.width/2-10),y:t.y+t.height},solarAnchorBottomCenter:{x:t.x+t.width/2,y:t.y+t.height},solarAnchorBottomRight:{x:t.x+(t.width/2+10),y:t.y+t.height},solarJunction:{x:t.x+t.width/2,y:t.y+t.height+55},spaAnchorLeft:{x:n.x,y:n.y+n.height/2},spaAnchorRight:{x:n.x+n.width,y:n.y+n.height/2},spaAnchorTop:{x:n.x+n.width/2,y:n.y},heatpumpAnchorLeft:{x:r.x,y:r.y+r.height/2},heatpumpAnchorRight:{x:r.x+r.width,y:r.y+r.height/2},heatpumpAnchorTop:{x:r.x+r.width/2,y:r.y},applianceAnchorLeft:{x:a.x,y:a.y+a.height/2},applianceAnchorRight:{x:a.x+a.width,y:a.y+a.height/2},applianceAnchorTop:{x:a.x+a.width/2,y:a.y},carAnchorLeft:{x:l.x,y:l.y+l.height/2},carAnchorRight:{x:l.x+l.width,y:l.y+l.height/2},carAnchorTop:{x:l.x+l.width/2,y:l.y}}}(s),a=function(e){return{solar:e.solarAnchorBottom,solarLeft:e.solarAnchorLeft,solarRight:e.solarAnchorRight,solarBottom:e.solarAnchorBottom,solarBottomLeft:e.solarAnchorBottomLeft,solarBottomCenter:e.solarAnchorBottomCenter,solarBottomRight:e.solarAnchorBottomRight,gridLeft:e.gridAnchorLeft,gridRight:e.gridAnchorRight,gridUpperRight:e.gridAnchorUpperRight,gridLowerRight:e.gridAnchorLowerRight,gridTop:e.gridAnchorTop,gridBottom:e.gridAnchorBottom,batteryLeft:e.batteryAnchorLeft,batteryUpperLeft:e.batteryAnchorUpperLeft,batteryLowerLeft:e.batteryAnchorLowerLeft,batteryRight:e.batteryAnchorRight,batteryTop:e.batteryAnchorTop,batteryBottom:e.batteryAnchorBottom,houseLeft:e.houseAnchorLeft,houseRight:e.houseAnchorRight,houseTop:e.houseAnchorTop,houseBottom:e.houseAnchorBottom,houseBottomLeft:e.houseAnchorBottomLeft,houseBottomCenter:e.houseAnchorBottomCenter,houseBottomRight:e.houseAnchorBottomRight,houseTopLeft:e.houseAnchorTopLeft,houseTopCenter:e.houseAnchorTopCenter,houseTopRight:e.houseAnchorTopRight,spaLeft:e.spaAnchorLeft,spaRight:e.spaAnchorRight,spa:e.spaAnchorTop,heatpumpLeft:e.heatpumpAnchorLeft,heatpumpRight:e.heatpumpAnchorRight,heatpump:e.heatpumpAnchorTop,applianceLeft:e.applianceAnchorLeft,applianceRight:e.applianceAnchorRight,appliance:e.applianceAnchorTop,carLeft:e.carAnchorLeft,carRight:e.carAnchorRight,car:e.carAnchorTop,solarJunction:e.solarJunction}}(r);return G`
  <svg
    class="flow-svg"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${Oe(a,t,n)}

    ${je(s,i,o)}
  </svg>
`}(o,e,i,this)}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `}};e([ue({attribute:!1})],pt.prototype,"hass",void 0),e([ue({attribute:!1})],pt.prototype,"config",void 0),e([ge()],pt.prototype,"activeLayout",void 0),e([ge()],pt.prototype,"layoutType",void 0),e([ge()],pt.prototype,"sceneScale",void 0),e([ge()],pt.prototype,"layoutReady",void 0),pt=e([de("solar-battery-economy-flow-card")],pt);export{pt as SolarBatteryEconomyFlowCard};
//# sourceMappingURL=solar-battery-economy-flow-card.js.map
