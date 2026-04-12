(()=>{var Y=globalThis,J=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),$t=new WeakMap,q=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&$t.set(e,t))}return t}toString(){return this.cssText}},bt=n=>new q(typeof n=="string"?n:n+"",void 0,et),st=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,o,i)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new q(e,n,et)},xt=(n,t)=>{if(J)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),o=Y.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,n.appendChild(s)}},ot=J?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return bt(e)})(n):n;var{is:Dt,defineProperty:Wt,getOwnPropertyDescriptor:jt,getOwnPropertyNames:Ft,getOwnPropertySymbols:It,getPrototypeOf:Gt}=Object,Z=globalThis,_t=Z.trustedTypes,Vt=_t?_t.emptyScript:"",Kt=Z.reactiveElementPolyfillSupport,D=(n,t)=>n,it={toAttribute(n,t){switch(t){case Boolean:n=n?Vt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},wt=(n,t)=>!Dt(n,t),vt={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&Wt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){let{get:o,set:i}=jt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:o,set(r){let l=o?.call(this);i?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;let t=Gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){let e=this.properties,s=[...Ft(e),...It(e)];for(let o of s)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let o of s)e.unshift(ot(o))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:it).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=s.getPropertyOptions(o),r=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:it;this._$Em=o;let l=r.fromAttribute(e,i.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,e,s,o=!1,i){if(t!==void 0){let r=this.constructor;if(o===!1&&(i=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??wt)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:i},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),i!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,i]of s){let{wrapped:r}=i,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,i,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[D("elementProperties")]=new Map,C[D("finalized")]=new Map,Kt?.({ReactiveElement:C}),(Z.reactiveElementVersions??=[]).push("2.1.2");var dt=globalThis,At=n=>n,Q=dt.trustedTypes,Et=Q?Q.createPolicy("lit-html",{createHTML:n=>n}):void 0,Mt="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+H,Xt=`<${Nt}>`,T=document,j=()=>T.createComment(""),F=n=>n===null||typeof n!="object"&&typeof n!="function",pt=Array.isArray,Yt=n=>pt(n)||typeof n?.[Symbol.iterator]=="function",rt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,Ct=/>/g,M=RegExp(`>|${rt}(?:([^\\s"'>=/]+)(${rt}*=${rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pt=/'/g,Ht=/"/g,Tt=/^(?:script|style|textarea|title)$/i,ut=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=ut(1),re=ut(2),ne=ut(3),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Rt=new WeakMap,N=T.createTreeWalker(T,129);function Lt(n,t){if(!pt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(t):t}var Jt=(n,t)=>{let e=n.length-1,s=[],o,i=t===2?"<svg>":t===3?"<math>":"",r=W;for(let l=0;l<e;l++){let a=n[l],c,d,h=-1,p=0;for(;p<a.length&&(r.lastIndex=p,d=r.exec(a),d!==null);)p=r.lastIndex,r===W?d[1]==="!--"?r=St:d[1]!==void 0?r=Ct:d[2]!==void 0?(Tt.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=M):d[3]!==void 0&&(r=M):r===M?d[0]===">"?(r=o??W,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?M:d[3]==='"'?Ht:Pt):r===Ht||r===Pt?r=M:r===St||r===Ct?r=W:(r=M,o=void 0);let u=r===M&&n[l+1].startsWith("/>")?" ":"";i+=r===W?a+Xt:h>=0?(s.push(c),a.slice(0,h)+Mt+a.slice(h)+H+u):a+H+(h===-2?l:u)}return[Lt(n,i+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},I=class n{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let i=0,r=0,l=t.length-1,a=this.parts,[c,d]=Jt(t,e);if(this.el=n.createElement(c,s),N.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=N.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Mt)){let p=d[r++],u=o.getAttribute(h).split(H),y=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:y[2],strings:u,ctor:y[1]==="."?at:y[1]==="?"?lt:y[1]==="@"?ct:U}),o.removeAttribute(h)}else h.startsWith(H)&&(a.push({type:6,index:i}),o.removeAttribute(h));if(Tt.test(o.tagName)){let h=o.textContent.split(H),p=h.length-1;if(p>0){o.textContent=Q?Q.emptyScript:"";for(let u=0;u<p;u++)o.append(h[u],j()),N.nextNode(),a.push({type:2,index:++i});o.append(h[p],j())}}}else if(o.nodeType===8)if(o.data===Nt)a.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(H,h+1))!==-1;)a.push({type:7,index:i}),h+=H.length-1}i++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function B(n,t,e=n,s){if(t===L)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl,i=F(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=B(n,o._$AS(n,t.values),o,s)),t}var nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??T).importNode(e,!0);N.currentNode=o;let i=N.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new G(i,i.nextSibling,this,t):a.type===1?c=new a.ctor(i,a.name,a.strings,this,t):a.type===6&&(c=new ht(i,this,t)),this._$AV.push(c),a=s[++l]}r!==a?.index&&(i=N.nextNode(),r++)}return N.currentNode=T,o}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},G=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),F(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(Lt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new nt(o,this),r=i.u(this.options);i.p(e),this.T(r),this._$AH=i}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new I(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,o=0;for(let i of t)o===e.length?e.push(s=new n(this.O(j()),this.O(j()),this,this.options)):s=e[o],s._$AI(i),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=At(t).nextSibling;At(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,o){let i=this.strings,r=!1;if(i===void 0)t=B(this,t,e,0),r=!F(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{let l=t,a,c;for(t=i[0],a=0;a<i.length-1;a++)c=B(this,l[s+a],e,a),c===L&&(c=this._$AH[a]),r||=!F(c)||c!==this._$AH[a],c===g?t=g:t!==g&&(t+=(c??"")+i[a+1]),this._$AH[a]=c}r&&!o&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}},lt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}},ct=class extends U{constructor(t,e,s,o,i){super(t,e,s,o,i),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??g)===L)return;let s=this._$AH,o=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==g&&(s===g||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var Zt=dt.litHtmlPolyfillSupport;Zt?.(I,G),(dt.litHtmlVersions??=[]).push("3.3.2");var Bt=(n,t,e)=>{let s=e?.renderBefore??t,o=s._$litPart$;if(o===void 0){let i=e?.renderBefore??null;s._$litPart$=o=new G(t.insertBefore(j(),i),i,void 0,e??{})}return o._$AI(n),o};var gt=globalThis,R=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}};R._$litElement$=!0,R.finalized=!0,gt.litElementHydrateSupport?.({LitElement:R});var Qt=gt.litElementPolyfillSupport;Qt?.({LitElement:R});(gt.litElementVersions??=[]).push("4.2.2");var ft=class extends R{flowStates={};appliances=[];config;static properties={hass:{}};static getConfigElement(){return document.createElement("solar-battery-economy-flow-card-editor")}static getStubConfig(){return{type:"custom:solar-battery-economy-flow-card",title:"Solar Battery Economy"}}_hass;canvas;ctx;set hass(t){this._hass=t,this.requestUpdate()}static styles=st`
    :host {
      --y-offset: 5px;
    }

    ha-card {
      overflow: hidden;
    }
    
    @keyframes glow {
      0%   { opacity: 0.85; }
      50%  { opacity: 1; }
      100% { opacity: 0.85; }
    }

    @keyframes pulse {
      0%   { transform: scale(0.9); opacity: 0.7; }
      50%  { transform: scale(1.1); opacity: 1; }
      100% { transform: scale(0.9); opacity: 0.7; }
    }

    .container {
      position: relative;
      width: 100%;
      max-width: 500px;

      aspect-ratio: 5 / 5.5; /* keeps proportions */

      padding: 0px 0 10px 0;
      margin: 0 auto;
    }

    .node {
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 12px;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(6px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 2;
      border: 1px solid rgba(0,0,0,0.20);
      box-shadow: 0 1px 4px rgba(0,0,0,0.10);
    }

    .appliance {
      position: absolute;
      width: 55px;
      height: 55px;

      border-radius: 10px;
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(6px);

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 10px;
      z-index: 2;

      border: 1px solid rgba(255,255,255,0.08);
    }

    .appliance .name {
      font-size: 9px;
      opacity: 0.8;
    }

    .appliance .icon {
      width: 18px;
      height: 18px;
      transform: translateX(-2px);
    }

    .appliance .value {
      font-size: 10px;
      font-weight: 400;
    }

    .solar { top: calc(6% + var(--y-offset)); left: 50%; transform: translateX(-50%); }
    .battery { top: calc(32% + var(--y-offset)); left: 8%; }
    .grid    { top: calc(32% + var(--y-offset)); right: 8%; }
    .home    { top: calc(58% + var(--y-offset)); left: 50%; transform: translateX(-50%); }

    canvas {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .price-box {
      position: absolute;
      top: calc(14% + var(--y-offset));
      transform: translateY(-50%);

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 4px 10px;
      border-radius: 10px;

      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.08);

      font-size: 12px;
      font-weight: 600;

      color: black;

      box-shadow: 0 0 8px currentColor;
    }

    .price-left {
      left: 8%;
    }

    .price-right {
      right: 8%;
    }

    .icon {
      width: 26px;
      height: 26px;
      margin-bottom: 4px;
    }

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 12px;
      box-sizing: border-box;
    }

    .value {
      font-size: clamp(10px, 2.2vw, 13px);
      text-align: center;
      font-weight: 700;
    }

    .labels {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
    }

    .label {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 6px;

      padding: 4px 8px;
      border-radius: 10px;

      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.08);

      font-size: 12px;
      font-weight: 600;

      color: black;
      text-shadow: none;

      box-shadow: 0 0 8px currentColor;
      white-space: nowrap;
    }

    .arrow-svg {
      width: 14px;
      height: 14px;
      display: inline-block;
    }
  `;setConfig(t){this.config=t,this.appliances=t.appliances||[]}get(t){return Number(this._hass?.states[t]?.state||0)}getSocColor(t){return t<=20?"#ef4444":t<=70?"#eab308":"#22c55e"}getCarColor(t){return t>0?"#22c55e":"#9ca3af"}firstUpdated(){this.canvas=this.renderRoot.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),setTimeout(()=>this.animate(),100)}getFlows(){return{solarHouse:this.get("sensor.power_solar_house"),solarBattery:this.get("sensor.power_solar_battery"),solarExport:this.get("sensor.power_solar_export"),batteryHouse:this.get("sensor.power_battery_house"),batteryGrid:this.get("sensor.power_battery_grid"),gridHouse:this.get("sensor.power_grid_house"),gridBattery:this.get("sensor.power_grid_battery"),houseGrid:this.get("sensor.power_house_grid"),importPrice:this.get("sensor.07_import_electricity_price"),exportPrice:this.get("sensor.08_export_electricity_price"),batterySoc:this.config?.battery_soc_entity?this.get(this.config.battery_soc_entity):NaN,carPower:this.config?.car_power_entity?this.get(this.config.car_power_entity):NaN,carSoc:this.config?.car_soc_entity?this.get(this.config.car_soc_entity):NaN}}getEdgePoint(t,e){let s=this.renderRoot.querySelector(".inner");if(!s)return{start:{x:0,y:0},end:{x:0,y:0}};let o=s.getBoundingClientRect(),i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),l=i.left-o.left+i.width/2,a=i.top-o.top+i.height/2,c=r.left-o.left+r.width/2,d=r.top-o.top+r.height/2,h=c-l,p=d-a,u=Math.hypot(h,p)||1,y=h/u,b=p/u;return{start:{x:l+y*(i.width/2),y:a+b*(i.height/2)},end:{x:c-y*(r.width/2),y:d-b*(r.height/2)}}}getAppliancePosition(t,e){let s=this.renderRoot.querySelector(".inner"),o=s?.clientWidth||400,i=s?.clientHeight||400,r=55,l=10,a=i*.58,c=Math.min(a+i*.36,i-r),d=o/2;return t<2?{top:`${c}px`,left:`${d-70-(1-t)*(r+l)}px`}:{top:`${c}px`,left:`${d+70+(t-2)*(r+l)}px`}}getLabelPosition(t,e){let s=this.renderRoot.querySelector(".inner");if(!s||!t)return{top:"0px",left:"0px",transform:"translate(0,0)"};let o=s.getBoundingClientRect(),i=t.getBoundingClientRect(),r=i.left-o.left+i.width/2,l=i.top-o.top+i.height/2,a=10;switch(e){case"left":return{top:`${l}px`,left:`${r-i.width/2-a}px`,transform:"translate(-100%, -50%)"};case"right":return{top:`${l}px`,left:`${r+i.width/2+a}px`,transform:"translate(0%, -50%)"};case"top":return{top:`${l-i.height/2-a}px`,left:`${r}px`,transform:"translate(-50%, -100%)"};case"bottom":return{top:`${l+i.height/2+a}px`,left:`${r}px`,transform:"translate(-50%, 0%)"}}}renderArrow(t,e,s){return f`
      <svg
        class="arrow-svg"
        viewBox="0 0 24 24"
        style="
          animation: pulse ${s}s infinite;
          color: ${e};
        "
      >
        <!-- ROTATION MOVED HERE (SAFE) -->
        <g transform="rotate(${t} 12 12)">
          <path
            d="M4 12H18M18 12L13 7M18 12L13 17"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
        </g>
      </svg>
    `}animate(){let t=this.ctx,e=this.renderRoot.querySelector(".solar"),s=this.renderRoot.querySelector(".battery"),o=this.renderRoot.querySelector(".grid"),i=this.renderRoot.querySelector(".home");if(!e||!s||!o||!i)return;let r=this.getFlows(),l=this.renderRoot.querySelector(".inner");this.canvas.width=l.clientWidth,this.canvas.height=l.clientHeight,t.clearRect(0,0,this.canvas.width,this.canvas.height);let a=(m,$)=>{let x=Math.min(m/12e3,1),E=Math.pow(x,.7),_=$/(6*60),v=$/(1.2*60);return _+(v-_)*E},c=(m,$,A,x,E,_,v)=>{if(_<=0)return;this.flowStates[m]||(this.flowStates[m]={t:0,p:0});let S=this.flowStates[m];S.p+=(_-S.p)*.05;let O=x-$,z=E-A,K=Math.hypot(O,z),Ut=a(S.p,K);S.t+=Ut/K;let kt=S.t%1,Ot=Math.atan2(z,O),tt=6+Math.floor(S.p/1500);for(let X=0;X<tt;X++){let mt=(kt+X/tt)%1,zt=$+O*mt,qt=A+z*mt;t.save(),t.translate(zt,qt),t.rotate(Ot),t.beginPath(),t.moveTo(-5,-3),t.lineTo(5,0),t.lineTo(-5,3),t.closePath(),t.fillStyle=v,t.globalAlpha=.4+X/tt*.6,t.shadowColor=v,t.shadowBlur=8,t.fill(),t.restore()}},h=r.batteryHouse+r.batteryGrid-(r.solarBattery+r.gridBattery)<0?"#3b82f6":"#22c55e",p=this.getEdgePoint(e,s);c("s_b",p.start.x,p.start.y,p.end.x,p.end.y,r.solarBattery,"#f59e0b");let u=this.getEdgePoint(e,o);c("s_g",u.start.x,u.start.y,u.end.x,u.end.y,r.solarExport,"#f59e0b");let y=this.getEdgePoint(e,i);c("s_h",y.start.x,y.start.y,y.end.x,y.end.y,r.solarHouse,"#f59e0b");let b=this.getEdgePoint(s,i);c("b_h",b.start.x,b.start.y,b.end.x,b.end.y,r.batteryHouse,h);let P=this.getEdgePoint(s,o);c("b_g",P.start.x,P.start.y,P.end.x,P.end.y,r.batteryGrid,h);let w=this.getEdgePoint(o,i);c("g_h",w.start.x,w.start.y,w.end.x,w.end.y,r.gridHouse,"#ef4444");let k=this.getEdgePoint(o,s);c("g_b",k.start.x,k.start.y,k.end.x,k.end.y,r.gridBattery,"#a855f7");let yt=this.renderRoot.querySelectorAll(".appliance"),V=0;if(this.appliances.filter(m=>this.get(m.entity)>0).slice(0,6).forEach((m,$)=>{let A=this.get(m.entity);if(A<=0)return;let x=yt[V];if(V++,!x)return;let E=i.getBoundingClientRect(),_=x.getBoundingClientRect(),v=this.renderRoot.querySelector(".inner").getBoundingClientRect(),S=E.left-v.left+E.width/2,O=E.top-v.top+E.height*.6,z=_.left-v.left+_.width/2,K=_.top-v.top;c(`app_${$}`,S,O,z,K,A,"#3b82f6")}),!isNaN(r.carPower)&&r.carPower>0){let m=this.renderRoot.querySelector(".car");if(m){let $=i.getBoundingClientRect(),A=m.getBoundingClientRect(),x=this.renderRoot.querySelector(".inner").getBoundingClientRect(),E=$.left-x.left+$.width/2,_=$.top-x.top+$.height*.6,v=A.left-x.left+A.width/2,S=A.top-x.top;c("car",E,_,v,S,r.carPower,"#3b82f6")}}requestAnimationFrame(()=>this.animate())}renderLabels(t){let e=w=>w>=1e3?(w/1e3).toFixed(1)+" kW":w.toFixed(0)+" W",o=t.batteryHouse+t.batteryGrid-(t.solarBattery+t.gridBattery)<0?"#3b82f6":"#22c55e",i=w=>{let V=Math.min(w/5e3,1);return .6+(1.6-.6)*V},r=this.renderRoot.querySelector(".solar"),l=this.renderRoot.querySelector(".battery"),a=this.renderRoot.querySelector(".grid"),c=this.renderRoot.querySelector(".home");if(!r||!l||!a||!c)return"";let d=this.getLabelPosition(l,"top"),h=this.getLabelPosition(a,"top"),p=this.getLabelPosition(r,"bottom"),u=this.getLabelPosition(l,"right"),y=this.getLabelPosition(a,"left"),b=this.getLabelPosition(c,"left"),P=this.getLabelPosition(c,"right");return f`
      ${t.solarBattery>0?f`
        <div class="label"
          style="top:${d.top}; left:${d.left}; transform:${d.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${e(t.solarBattery)}
          ${this.renderArrow(135,"#f59e0b",i(t.solarBattery))}
        </div>`:""}

      ${t.solarExport>0?f`
        <div class="label"
          style="top:${h.top}; left:${h.left}; transform:${h.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(45,"#f59e0b",i(t.solarExport))}
          ${e(t.solarExport)}
        </div>`:""}

      ${t.solarHouse>0?f`
        <div class="label"
          style="top:${p.top}; left:${p.left}; transform:${p.transform}; box-shadow: 0 0 8px #f59e0b;">
          ${this.renderArrow(90,"#f59e0b",i(t.solarHouse))}
          ${e(t.solarHouse)}
        </div>`:""}

      ${t.batteryGrid>0?f`
        <div class="label"
          style="top:${u.top}; left:${u.left}; transform:${u.transform}; box-shadow: 0 0 8px ${o};">
          ${e(t.batteryGrid)}
          ${this.renderArrow(0,o,i(t.batteryGrid))}
        </div>`:""}

      ${t.gridBattery>0?f`
        <div class="label"
          style="top:${y.top}; left:${y.left}; transform:${y.transform}; box-shadow: 0 0 8px #a855f7;">
          ${this.renderArrow(180,"#a855f7",i(t.gridBattery))}
          ${e(t.gridBattery)}
        </div>`:""}

      ${t.batteryHouse>0?f`
        <div class="label"
          style="top:${b.top}; left:${b.left}; transform:${b.transform}; box-shadow: 0 0 8px ${o};">
          ${e(t.batteryHouse)}
          ${this.renderArrow(45,o,i(t.batteryHouse))}
        </div>`:""}

      ${t.gridHouse>0?f`
        <div class="label"
          style="top:${P.top}; left:${P.left}; transform:${P.transform}; box-shadow: 0 0 8px #ef4444;">
          ${this.renderArrow(135,"#ef4444",i(t.gridHouse))}
          ${e(t.gridHouse)}
        </div>`:""}
    `}render(){let t=this.getFlows(),e=this.appliances.filter(a=>this.get(a.entity)>0).slice(0,4),s=a=>a.toFixed(2)+" kr/kWh",o=a=>a>=1e3?(a/1e3).toFixed(1)+" kW":a.toFixed(0)+" W",i=(a,c,d=0)=>o(a+c+d),r=t.batteryHouse+t.batteryGrid-(t.solarBattery+t.gridBattery),l=t.gridHouse+t.gridBattery-(t.solarExport+t.batteryGrid+t.houseGrid);return f`
      <ha-card .header=${this.config?.title||""}>
        <div class="container">
          <div class="inner">
            
            <div class="price-box price-left" style="box-shadow: 0 0 8px #22c55e;">
              <div style="font-size:10px; opacity:0.7;">Export</div>
              <div>${s(t.exportPrice)}</div>
            </div>

            <div class="price-box price-right" style="box-shadow: 0 0 8px #ef4444;">
              <div style="font-size:10px; opacity:0.7;">Import</div>
              <div>${s(t.importPrice)}</div>
            </div>

            <div class="node solar"
              style="${t.solarHouse+t.solarBattery+t.solarExport>0?"animation: glow 2s infinite; box-shadow: 0 0 6px orange, 0 2px 10px rgba(0,0,0,0.3);":""}">
              <span class="icon" style="animation: glow 2s infinite; color: orange;">
                <ha-icon icon="mdi:solar-power"></ha-icon>
              </span>
              <span class="value">${i(t.solarHouse,t.solarBattery,t.solarExport)}</span>
            </div>

            <div class="node home"
              style="${t.solarHouse+t.batteryHouse+t.gridHouse>0?"animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.3);":""}">
              <span class="icon" style="animation: glow 2s infinite; color:#3b82f6;">
                <ha-icon icon="mdi:home"></ha-icon>
              </span>
              <span class="value">${i(t.solarHouse,t.batteryHouse,t.gridHouse)}</span>
            </div>

            <div class="node battery"
              style="${Math.abs(r)>0?`animation: glow 2s infinite; box-shadow: 0 0 6px ${r<0?"#3b82f6":"#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`:""}">
              <span class="icon" style="animation: glow 2s infinite; color:${r<0?"#3b82f6":"#22c55e"};">
                <ha-icon icon="mdi:home-battery"></ha-icon>
              </span>
              <span class="value">
                ${o(Math.abs(r))}
                ${isNaN(t.batterySoc)?"":f`
                  <div style="font-size:10px; opacity:0.7;">
                    ${t.batterySoc}%
                  </div>
                `}
              </span>

              ${isNaN(t.batterySoc)?"":f`
                <div style="
                  position:absolute;
                  left:4px; /* 🔥 LEFT side */
                  top:4px;
                  bottom:4px;
                  width:6px;
                  background: rgba(255,255,255,0.1);
                  border-radius:3px;
                  overflow:hidden;
                ">
                  <div style="
                    position:absolute;
                    bottom:0;
                    width:100%;
                    height:${Math.min(t.batterySoc,100)}%;
                    background:${this.getSocColor(t.batterySoc)};
                    transition: height 0.4s ease;
                    animation:${r<0?"pulse 1.5s infinite":"none"};
                  "></div>
                </div>
              `}
            </div>

            <div class="node grid"
              style="${Math.abs(l)>0?`animation: glow 2s infinite; box-shadow: 0 0 6px ${l>0?"#ef4444":"#22c55e"}, 0 2px 10px rgba(0,0,0,0.3);`:""}">
              <span class="icon" style="animation: glow 2s infinite; color:${l>0?"#ef4444":"#22c55e"};">
                <ha-icon icon="mdi:transmission-tower"></ha-icon>
              </span>
              <span class="value">${o(Math.abs(l))}</span>
            </div>

            ${e.map((a,c)=>{let d=this.getAppliancePosition(c,e.length);if(!d)return"";let h=this.get(a.entity);return!h||h<=0?"":f`
                <div class="appliance"
                  style="
                    top:${d.top};
                    left:${d.left};
                    transform: translate(-50%, -50%);
                    ${h>0?"animation: glow 2s infinite; box-shadow: 0 0 6px #3b82f6, 0 2px 10px rgba(0,0,0,0.2);":""}
                  ">

                  <div class="name">${a.name}</div>

                  <ha-icon class="icon" style="color:#3b82f6;" icon="${a.icon}"></ha-icon>

                  <div class="value">
                    ${h>=1e3?(h/1e3).toFixed(1)+" kW":h+" W"}
                  </div>

                </div>
              `})}

            ${!isNaN(t.carPower)||!isNaN(t.carSoc)?f`
              <div class="appliance car"
                style="
                  top:${this.getAppliancePosition(2,4).top};
                  left:50%;
                  transform: translate(-50%, -50%);
                  width:65px;
                  height:65px;
                  animation: glow 2s infinite;
                  box-shadow: 0 0 6px #3b82f6;
                ">

                <div class="name">Car</div>

                <ha-icon
                  class="icon"
                  style="color:${this.getCarColor(t.carPower)};"
                  icon="mdi:car-electric">
                </ha-icon>

                <div class="value" style="color:${this.getCarColor(t.carPower)};">
                  ${t.carPower>=1e3?(t.carPower/1e3).toFixed(1)+" kW":t.carPower+" W"}
                </div>

                ${isNaN(t.carSoc)?"":f`
                  <div style="font-size:10px; opacity:0.7;">
                    ${t.carSoc.toFixed(0)}%
                  </div>
                `}
                ${isNaN(t.carSoc)?"":f`
                  <div style="
                    position:absolute;
                    left:4px;
                    top:4px;
                    bottom:4px;
                    width:6px;
                    background: rgba(255,255,255,0.1);
                    border-radius:3px;
                    overflow:hidden;
                  ">
                    <div style="
                      position:absolute;
                      bottom:0;
                      width:100%;
                      height:${Math.min(t.carSoc,100)}%;
                      background:${this.getSocColor(t.carSoc)};
                      transition: height 0.4s ease;
                      animation:${t.carPower>0?"pulse 1.5s infinite":"none"};
                    "></div>
                  </div>
                `}
              </div>
            `:""}

            <canvas></canvas>

            <div class="labels">
              ${this.renderLabels(t)}
            </div>

          </div> <!-- inner -->
        </div> <!-- container -->
      </ha-card>
    `}};customElements.get("solar-battery-economy-flow-card")||customElements.define("solar-battery-economy-flow-card",ft);window.customCards=window.customCards||[];window.customCards.push({type:"solar-battery-economy-flow-card",name:"Solar Battery Economy Flow Card",description:"Visual energy flow for Solar Battery Economy integration"});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
