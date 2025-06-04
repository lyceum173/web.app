(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ie={},mn=[],nt=()=>{},Yu=()=>!1,Ys=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_r=e=>e.startsWith("onUpdate:"),ye=Object.assign,yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xu=Object.prototype.hasOwnProperty,Z=(e,t)=>Xu.call(e,t),W=Array.isArray,gn=e=>Xs(e)==="[object Map]",sc=e=>Xs(e)==="[object Set]",F=e=>typeof e=="function",fe=e=>typeof e=="string",Ht=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",ic=e=>(ue(e)||F(e))&&F(e.then)&&F(e.catch),rc=Object.prototype.toString,Xs=e=>rc.call(e),Zu=e=>Xs(e).slice(8,-1),oc=e=>Xs(e)==="[object Object]",br=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hn=vr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qu=/-(\w)/g,Be=Zs(e=>e.replace(Qu,(t,n)=>n?n.toUpperCase():"")),ed=/\B([A-Z])/g,on=Zs(e=>e.replace(ed,"-$1").toLowerCase()),Qs=Zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),_i=Zs(e=>e?`on${Qs(e)}`:""),Nt=(e,t)=>!Object.is(e,t),ws=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ac=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Wi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ao;const ei=()=>ao||(ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=fe(s)?id(s):wr(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(fe(e)||ue(e))return e}const td=/;(?![^(]*\))/g,nd=/:([^]+)/,sd=/\/\*[^]*?\*\//g;function id(e){const t={};return e.replace(sd,"").split(td).forEach(n=>{if(n){const s=n.split(nd);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function jt(e){let t="";if(fe(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const s=jt(e[n]);s&&(t+=s+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",od=vr(rd);function cc(e){return!!e||e===""}const lc=e=>!!(e&&e.__v_isRef===!0),Oe=e=>fe(e)?e:e==null?"":W(e)||ue(e)&&(e.toString===rc||!F(e.toString))?lc(e)?Oe(e.value):JSON.stringify(e,uc,2):String(e),uc=(e,t)=>lc(t)?uc(e,t.value):gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[yi(s,r)+" =>"]=i,n),{})}:sc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>yi(n))}:Ht(t)?yi(t):ue(t)&&!W(t)&&!oc(t)?String(t):t,yi=(e,t="")=>{var n;return Ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class ad{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function cd(){return Pe}let ce;const bi=new WeakSet;class dc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bi.has(this)&&(bi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,co(this),pc(this);const t=ce,n=Fe;ce=this,Fe=!0;try{return this.fn()}finally{mc(this),ce=t,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Er(t);this.deps=this.depsTail=void 0,co(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fi(this)&&this.run()}get dirty(){return Fi(this)}}let fc=0,jn,Bn;function hc(e,t=!1){if(e.flags|=8,t){e.next=Bn,Bn=e;return}e.next=jn,jn=e}function Ir(){fc++}function Tr(){if(--fc>0)return;if(Bn){let t=Bn;for(Bn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;jn;){let t=jn;for(jn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function pc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function mc(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Er(s),ld(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Fi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(gc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function gc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Yn))return;e.globalVersion=Yn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Fi(e)){e.flags&=-3;return}const n=ce,s=Fe;ce=e,Fe=!0;try{pc(e);const i=e.fn(e._value);(t.version===0||Nt(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ce=n,Fe=s,mc(e),e.flags&=-3}}function Er(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Er(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ld(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Fe=!0;const vc=[];function Bt(){vc.push(Fe),Fe=!1}function Vt(){const e=vc.pop();Fe=e===void 0?!0:e}function co(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ce;ce=void 0;try{t()}finally{ce=n}}}let Yn=0;class ud{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!ce||!Fe||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new ud(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,_c(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(t){this.version++,Yn++,this.notify(t)}notify(t){Ir();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tr()}}}function _c(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)_c(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const zi=new WeakMap,Xt=Symbol(""),Ki=Symbol(""),Xn=Symbol("");function ge(e,t,n){if(Fe&&ce){let s=zi.get(e);s||zi.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Sr),i.map=s,i.key=n),i.track()}}function pt(e,t,n,s,i,r){const o=zi.get(e);if(!o){Yn++;return}const a=c=>{c&&c.trigger()};if(Ir(),t==="clear")o.forEach(a);else{const c=W(e),l=c&&br(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===Xn||!Ht(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Xn)),t){case"add":c?l&&a(o.get("length")):(a(o.get(Xt)),gn(e)&&a(o.get(Ki)));break;case"delete":c||(a(o.get(Xt)),gn(e)&&a(o.get(Ki)));break;case"set":gn(e)&&a(o.get(Xt));break}}Tr()}function dn(e){const t=X(e);return t===e?t:(ge(t,"iterate",Xn),He(e)?t:t.map(ve))}function ti(e){return ge(e=X(e),"iterate",Xn),e}const dd={__proto__:null,[Symbol.iterator](){return wi(this,Symbol.iterator,ve)},concat(...e){return dn(this).concat(...e.map(t=>W(t)?dn(t):t))},entries(){return wi(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return ut(this,"every",e,t,void 0,arguments)},filter(e,t){return ut(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return ut(this,"find",e,t,ve,arguments)},findIndex(e,t){return ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ut(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ii(this,"includes",e)},indexOf(...e){return Ii(this,"indexOf",e)},join(e){return dn(this).join(e)},lastIndexOf(...e){return Ii(this,"lastIndexOf",e)},map(e,t){return ut(this,"map",e,t,void 0,arguments)},pop(){return Dn(this,"pop")},push(...e){return Dn(this,"push",e)},reduce(e,...t){return lo(this,"reduce",e,t)},reduceRight(e,...t){return lo(this,"reduceRight",e,t)},shift(){return Dn(this,"shift")},some(e,t){return ut(this,"some",e,t,void 0,arguments)},splice(...e){return Dn(this,"splice",e)},toReversed(){return dn(this).toReversed()},toSorted(e){return dn(this).toSorted(e)},toSpliced(...e){return dn(this).toSpliced(...e)},unshift(...e){return Dn(this,"unshift",e)},values(){return wi(this,"values",ve)}};function wi(e,t,n){const s=ti(e),i=s[t]();return s!==e&&!He(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const fd=Array.prototype;function ut(e,t,n,s,i,r){const o=ti(e),a=o!==e&&!He(e),c=o[t];if(c!==fd[t]){const d=c.apply(e,r);return a?ve(d):d}let l=n;o!==e&&(a?l=function(d,f){return n.call(this,ve(d),f,e)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,e)}));const u=c.call(o,l,s);return a&&i?i(u):u}function lo(e,t,n,s){const i=ti(e);let r=n;return i!==e&&(He(e)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,e)}):r=function(o,a,c){return n.call(this,o,ve(a),c,e)}),i[t](r,...s)}function Ii(e,t,n){const s=X(e);ge(s,"iterate",Xn);const i=s[t](...n);return(i===-1||i===!1)&&Ar(n[0])?(n[0]=X(n[0]),s[t](...n)):i}function Dn(e,t,n=[]){Bt(),Ir();const s=X(e)[t].apply(e,n);return Tr(),Vt(),s}const hd=vr("__proto__,__v_isRef,__isVue"),yc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ht));function pd(e){Ht(e)||(e=String(e));const t=X(this);return ge(t,"has",e),t.hasOwnProperty(e)}class bc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ed:Ec:r?Tc:Ic).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=W(t);if(!i){let c;if(o&&(c=dd[n]))return c;if(n==="hasOwnProperty")return pd}const a=Reflect.get(t,n,_e(t)?t:s);return(Ht(n)?yc.has(n):hd(n))||(i||ge(t,"get",n),r)?a:_e(a)?o&&br(n)?a:a.value:ue(a)?i?kc(a):ni(a):a}}class wc extends bc{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const c=Qt(r);if(!He(s)&&!Qt(s)&&(r=X(r),s=X(s)),!W(t)&&_e(r)&&!_e(s))return c?!1:(r.value=s,!0)}const o=W(t)&&br(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,s,_e(t)?t:i);return t===X(i)&&(o?Nt(s,r)&&pt(t,"set",n,s):pt(t,"add",n,s)),a}deleteProperty(t,n){const s=Z(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&pt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Ht(n)||!yc.has(n))&&ge(t,"has",n),s}ownKeys(t){return ge(t,"iterate",W(t)?"length":Xt),Reflect.ownKeys(t)}}class md extends bc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const gd=new wc,vd=new md,_d=new wc(!0);const Gi=e=>e,ms=e=>Reflect.getPrototypeOf(e);function yd(e,t,n){return function(...s){const i=this.__v_raw,r=X(i),o=gn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...s),u=n?Gi:t?qi:ve;return!t&&ge(r,"iterate",c?Ki:Xt),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function gs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bd(e,t){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);e||(Nt(i,a)&&ge(o,"get",i),ge(o,"get",a));const{has:c}=ms(o),l=t?Gi:e?qi:ve;if(c.call(o,i))return l(r.get(i));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&ge(X(i),"iterate",Xt),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return e||(Nt(i,a)&&ge(o,"has",i),ge(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=X(a),l=t?Gi:e?qi:ve;return!e&&ge(c,"iterate",Xt),a.forEach((u,d)=>i.call(r,l(u),l(d),o))}};return ye(n,e?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(i){!t&&!He(i)&&!Qt(i)&&(i=X(i));const r=X(this);return ms(r).has.call(r,i)||(r.add(i),pt(r,"add",i,i)),this},set(i,r){!t&&!He(r)&&!Qt(r)&&(r=X(r));const o=X(this),{has:a,get:c}=ms(o);let l=a.call(o,i);l||(i=X(i),l=a.call(o,i));const u=c.call(o,i);return o.set(i,r),l?Nt(r,u)&&pt(o,"set",i,r):pt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=ms(r);let c=o.call(r,i);c||(i=X(i),c=o.call(r,i)),a&&a.call(r,i);const l=r.delete(i);return c&&pt(r,"delete",i,void 0),l},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=yd(i,e,t)}),n}function kr(e,t){const n=bd(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const wd={get:kr(!1,!1)},Id={get:kr(!1,!0)},Td={get:kr(!0,!1)};const Ic=new WeakMap,Tc=new WeakMap,Ec=new WeakMap,Ed=new WeakMap;function Sd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kd(e){return e.__v_skip||!Object.isExtensible(e)?0:Sd(Zu(e))}function ni(e){return Qt(e)?e:Cr(e,!1,gd,wd,Ic)}function Sc(e){return Cr(e,!1,_d,Id,Tc)}function kc(e){return Cr(e,!0,vd,Td,Ec)}function Cr(e,t,n,s,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=kd(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function vn(e){return Qt(e)?vn(e.__v_raw):!!(e&&e.__v_isReactive)}function Qt(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function Ar(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Cd(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&ac(e,"__v_skip",!0),e}const ve=e=>ue(e)?ni(e):e,qi=e=>ue(e)?kc(e):e;function _e(e){return e?e.__v_isRef===!0:!1}function le(e){return Cc(e,!1)}function Ad(e){return Cc(e,!0)}function Cc(e,t){return _e(e)?e:new Rd(e,t)}class Rd{constructor(t,n){this.dep=new Sr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||He(t)||Qt(t);t=s?t:X(t),Nt(t,n)&&(this._rawValue=t,this._value=s?t:ve(t),this.dep.trigger())}}function yt(e){return _e(e)?e.value:e}const Pd={get:(e,t,n)=>t==="__v_raw"?e:yt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Ac(e){return vn(e)?e:new Proxy(e,Pd)}class Od{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Sr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return hc(this,!0),!0}get value(){const t=this.dep.track();return gc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function xd(e,t,n=!1){let s,i;return F(e)?s=e:(s=e.get,i=e.set),new Od(s,i,n)}const vs={},Os=new WeakMap;let Gt;function Md(e,t=!1,n=Gt){if(n){let s=Os.get(n);s||Os.set(n,s=[]),s.push(e)}}function Ld(e,t,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,l=D=>i?D:He(D)||i===!1||i===0?mt(D,1):mt(D);let u,d,f,g,T=!1,S=!1;if(_e(e)?(d=()=>e.value,T=He(e)):vn(e)?(d=()=>l(e),T=!0):W(e)?(S=!0,T=e.some(D=>vn(D)||He(D)),d=()=>e.map(D=>{if(_e(D))return D.value;if(vn(D))return l(D);if(F(D))return c?c(D,2):D()})):F(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){Bt();try{f()}finally{Vt()}}const D=Gt;Gt=u;try{return c?c(e,3,[g]):e(g)}finally{Gt=D}}:d=nt,t&&i){const D=d,z=i===!0?1/0:i;d=()=>mt(D(),z)}const M=cd(),L=()=>{u.stop(),M&&M.active&&yr(M.effects,u)};if(r&&t){const D=t;t=(...z)=>{D(...z),L()}}let O=S?new Array(e.length).fill(vs):vs;const A=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(t){const z=u.run();if(i||T||(S?z.some((re,oe)=>Nt(re,O[oe])):Nt(z,O))){f&&f();const re=Gt;Gt=u;try{const oe=[z,O===vs?void 0:S&&O[0]===vs?[]:O,g];c?c(t,3,oe):t(...oe),O=z}finally{Gt=re}}}else u.run()};return a&&a(A),u=new dc(d),u.scheduler=o?()=>o(A,!1):A,g=D=>Md(D,!1,u),f=u.onStop=()=>{const D=Os.get(u);if(D){if(c)c(D,4);else for(const z of D)z();Os.delete(u)}},t?s?A(!0):O=u.run():o?o(A.bind(null,!0),!0):u.run(),L.pause=u.pause.bind(u),L.resume=u.resume.bind(u),L.stop=L,L}function mt(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))mt(e.value,t,n);else if(W(e))for(let s=0;s<e.length;s++)mt(e[s],t,n);else if(sc(e)||gn(e))e.forEach(s=>{mt(s,t,n)});else if(oc(e)){for(const s in e)mt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e,t,n,s){try{return s?e(...s):e()}catch(i){si(i,t,n)}}function rt(e,t,n,s){if(F(e)){const i=rs(e,t,n,s);return i&&ic(i)&&i.catch(r=>{si(r,t,n)}),i}if(W(e)){const i=[];for(let r=0;r<e.length;r++)i.push(rt(e[r],t,n,s));return i}}function si(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ie;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,l)===!1)return}a=a.parent}if(r){Bt(),rs(r,null,10,[e,c,l]),Vt();return}}Dd(e,n,i,s,o)}function Dd(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const we=[];let Qe=-1;const _n=[];let Rt=null,fn=0;const Rc=Promise.resolve();let xs=null;function Rr(e){const t=xs||Rc;return e?t.then(this?e.bind(this):e):t}function Nd(e){let t=Qe+1,n=we.length;for(;t<n;){const s=t+n>>>1,i=we[s],r=Zn(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Pr(e){if(!(e.flags&1)){const t=Zn(e),n=we[we.length-1];!n||!(e.flags&2)&&t>=Zn(n)?we.push(e):we.splice(Nd(t),0,e),e.flags|=1,Pc()}}function Pc(){xs||(xs=Rc.then(xc))}function $d(e){W(e)?_n.push(...e):Rt&&e.id===-1?Rt.splice(fn+1,0,e):e.flags&1||(_n.push(e),e.flags|=1),Pc()}function uo(e,t,n=Qe+1){for(;n<we.length;n++){const s=we[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;we.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Oc(e){if(_n.length){const t=[...new Set(_n)].sort((n,s)=>Zn(n)-Zn(s));if(_n.length=0,Rt){Rt.push(...t);return}for(Rt=t,fn=0;fn<Rt.length;fn++){const n=Rt[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,fn=0}}const Zn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xc(e){try{for(Qe=0;Qe<we.length;Qe++){const t=we[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qe<we.length;Qe++){const t=we[Qe];t&&(t.flags&=-2)}Qe=-1,we.length=0,Oc(),xs=null,(we.length||_n.length)&&xc()}}let Se=null,Mc=null;function Ms(e){const t=Se;return Se=e,Mc=e&&e.type.__scopeId||null,t}function pe(e,t=Se,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Io(-1);const r=Ms(t);let o;try{o=e(...i)}finally{Ms(r),s._d&&Io(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function fo(e,t){if(Se===null)return e;const n=li(Se),s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[r,o,a,c=ie]=t[i];r&&(F(r)&&(r={mounted:r,updated:r}),r.deep&&mt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function zt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(Bt(),rt(c,n,8,[e.el,a,e,t]),Vt())}}const Ud=Symbol("_vte"),Hd=e=>e.__isTeleport;function Or(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Or(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Lc(e,t){return F(e)?ye({name:e.name},t,{setup:e}):e}function Dc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ls(e,t,n,s,i=!1){if(W(e)){e.forEach((T,S)=>Ls(T,t&&(W(t)?t[S]:t),n,s,i));return}if(Vn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ls(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?li(s.component):s.el,o=i?null:r,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,d=a.setupState,f=X(d),g=d===ie?()=>!1:T=>Z(f,T);if(l!=null&&l!==c&&(fe(l)?(u[l]=null,g(l)&&(d[l]=null)):_e(l)&&(l.value=null)),F(c))rs(c,a,12,[o,u]);else{const T=fe(c),S=_e(c);if(T||S){const M=()=>{if(e.f){const L=T?g(c)?d[c]:u[c]:c.value;i?W(L)&&yr(L,r):W(L)?L.includes(r)||L.push(r):T?(u[c]=[r],g(c)&&(d[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else T?(u[c]=o,g(c)&&(d[c]=o)):S&&(c.value=o,e.k&&(u[e.k]=o))};o?(M.id=-1,Re(M,n)):M()}}}ei().requestIdleCallback;ei().cancelIdleCallback;const Vn=e=>!!e.type.__asyncLoader,Nc=e=>e.type.__isKeepAlive;function $c(e,t){Hc(e,"a",t)}function Uc(e,t){Hc(e,"da",t)}function Hc(e,t,n=me){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ii(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Nc(i.parent.vnode)&&jd(s,t,n,i),i=i.parent}}function jd(e,t,n,s){const i=ii(t,e,s,!0);Bc(()=>{yr(s[t],i)},n)}function ii(e,t,n=me,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Bt();const a=as(n),c=rt(t,n,e,o);return a(),Vt(),c});return s?i.unshift(r):i.push(r),r}}const Tt=e=>(t,n=me)=>{(!es||e==="sp")&&ii(e,(...s)=>t(...s),n)},Bd=Tt("bm"),ri=Tt("m"),Vd=Tt("bu"),Wd=Tt("u"),jc=Tt("bum"),Bc=Tt("um"),Fd=Tt("sp"),zd=Tt("rtg"),Kd=Tt("rtc");function Gd(e,t=me){ii("ec",e,t)}const qd="components";function Et(e,t){return Yd(qd,e,!0,t)||e}const Jd=Symbol.for("v-ndc");function Yd(e,t,n=!0,s=!1){const i=Se||me;if(i){const r=i.type;{const a=Hf(r,!1);if(a&&(a===t||a===Be(t)||a===Qs(Be(t))))return r}const o=ho(i[e]||r[e],t)||ho(i.appContext[e],t);return!o&&s?r:o}}function ho(e,t){return e&&(e[t]||e[Be(t)]||e[Qs(Be(t))])}function Ji(e,t,n,s){let i;const r=n,o=W(e);if(o||fe(e)){const a=o&&vn(e);let c=!1;a&&(c=!He(e),e=ti(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=t(c?ve(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,r)}else if(ue(e))if(e[Symbol.iterator])i=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];i[c]=t(e[u],u,c,r)}}else i=[];return i}const Yi=e=>e?al(e)?li(e):Yi(e.parent):null,Wn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Wc(e),$forceUpdate:e=>e.f||(e.f=()=>{Pr(e.update)}),$nextTick:e=>e.n||(e.n=Rr.bind(e.proxy)),$watch:e=>yf.bind(e)}),Ti=(e,t)=>e!==ie&&!e.__isScriptSetup&&Z(e,t),Xd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Ti(s,t))return o[t]=1,s[t];if(i!==ie&&Z(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&Z(l,t))return o[t]=3,r[t];if(n!==ie&&Z(n,t))return o[t]=4,n[t];Xi&&(o[t]=0)}}const u=Wn[t];let d,f;if(u)return t==="$attrs"&&ge(e.attrs,"get",""),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ie&&Z(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,Z(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return Ti(i,t)?(i[t]=n,!0):s!==ie&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ie&&Z(e,o)||Ti(t,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(Wn,o)||Z(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function po(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xi=!0;function Zd(e){const t=Wc(e),n=e.proxy,s=e.ctx;Xi=!1,t.beforeCreate&&mo(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:T,activated:S,deactivated:M,beforeDestroy:L,beforeUnmount:O,destroyed:A,unmounted:D,render:z,renderTracked:re,renderTriggered:oe,errorCaptured:De,serverPrefetch:Ne,expose:$e,inheritAttrs:St,components:Ft,directives:Ge,filters:Mn}=t;if(l&&Qd(l,s,null),o)for(const ee in o){const J=o[ee];F(J)&&(s[ee]=J.bind(n))}if(i){const ee=i.call(n,n);ue(ee)&&(e.data=ni(ee))}if(Xi=!0,r)for(const ee in r){const J=r[ee],lt=F(J)?J.bind(n,n):F(J.get)?J.get.bind(n,n):nt,kt=!F(J)&&F(J.set)?J.set.bind(n):nt,qe=Ve({get:lt,set:kt});Object.defineProperty(s,ee,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Te=>qe.value=Te})}if(a)for(const ee in a)Vc(a[ee],s,n,ee);if(c){const ee=F(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{Is(J,ee[J])})}u&&mo(u,e,"c");function he(ee,J){W(J)?J.forEach(lt=>ee(lt.bind(n))):J&&ee(J.bind(n))}if(he(Bd,d),he(ri,f),he(Vd,g),he(Wd,T),he($c,S),he(Uc,M),he(Gd,De),he(Kd,re),he(zd,oe),he(jc,O),he(Bc,D),he(Fd,Ne),W($e))if($e.length){const ee=e.exposed||(e.exposed={});$e.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:lt=>n[J]=lt})})}else e.exposed||(e.exposed={});z&&e.render===nt&&(e.render=z),St!=null&&(e.inheritAttrs=St),Ft&&(e.components=Ft),Ge&&(e.directives=Ge),Ne&&Dc(e)}function Qd(e,t,n=nt){W(e)&&(e=Zi(e));for(const s in e){const i=e[s];let r;ue(i)?"default"in i?r=je(i.from||s,i.default,!0):r=je(i.from||s):r=je(i),_e(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function mo(e,t,n){rt(W(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Vc(e,t,n,s){let i=s.includes(".")?nl(n,s):()=>n[s];if(fe(e)){const r=t[e];F(r)&&bn(i,r)}else if(F(e))bn(i,e.bind(n));else if(ue(e))if(W(e))e.forEach(r=>Vc(r,t,n,s));else{const r=F(e.handler)?e.handler.bind(n):t[e.handler];F(r)&&bn(i,r,e)}}function Wc(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(l=>Ds(c,l,o,!0)),Ds(c,t,o)),ue(t)&&r.set(t,c),c}function Ds(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Ds(e,r,n,!0),i&&i.forEach(o=>Ds(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=ef[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const ef={data:go,props:vo,emits:vo,methods:Un,computed:Un,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:Un,directives:Un,watch:nf,provide:go,inject:tf};function go(e,t){return t?e?function(){return ye(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function tf(e,t){return Un(Zi(e),Zi(t))}function Zi(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function Un(e,t){return e?ye(Object.create(null),e,t):t}function vo(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:ye(Object.create(null),po(e),po(t??{})):t}function nf(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const s in t)n[s]=be(e[s],t[s]);return n}function Fc(){return{app:null,config:{isNativeTag:Yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sf=0;function rf(e,t){return function(s,i=null){F(s)||(s=ye({},s)),i!=null&&!ue(i)&&(i=null);const r=Fc(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:sf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ul,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&F(u.install)?(o.add(u),u.install(l,...d)):F(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const g=l._ceVNode||B(s,i);return g.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(g,u,f),c=!0,l._container=u,u.__vue_app__=l,li(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(rt(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=yn;yn=l;try{return u()}finally{yn=d}}};return l}}let yn=null;function Is(e,t){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[e]=t}}function je(e,t,n=!1){const s=me||Se;if(s||yn){const i=yn?yn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&F(t)?t.call(s&&s.proxy):t}}const zc={},Kc=()=>Object.create(zc),Gc=e=>Object.getPrototypeOf(e)===zc;function of(e,t,n,s=!1){const i={},r=Kc();e.propsDefaults=Object.create(null),qc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Sc(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function af(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=X(i),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(oi(e.emitsOptions,f))continue;const g=t[f];if(c)if(Z(r,f))g!==r[f]&&(r[f]=g,l=!0);else{const T=Be(f);i[T]=Qi(c,a,T,g,e,!1)}else g!==r[f]&&(r[f]=g,l=!0)}}}else{qc(e,t,i,r)&&(l=!0);let u;for(const d in a)(!t||!Z(t,d)&&((u=on(d))===d||!Z(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Qi(c,a,d,void 0,e,!0)):delete i[d]);if(r!==a)for(const d in r)(!t||!Z(t,d))&&(delete r[d],l=!0)}l&&pt(e.attrs,"set","")}function qc(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Hn(c))continue;const l=t[c];let u;i&&Z(i,u=Be(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:oi(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=X(n),l=a||ie;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Qi(i,c,d,l[d],e,!Z(l,d))}}return o}function Qi(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&F(c)){const{propsDefaults:l}=i;if(n in l)s=l[n];else{const u=as(i);s=l[n]=c.call(null,t),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===on(n))&&(s=!0))}return s}const cf=new WeakMap;function Jc(e,t,n=!1){const s=n?cf:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let c=!1;if(!F(e)){const u=d=>{c=!0;const[f,g]=Jc(d,t,!0);ye(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return ue(e)&&s.set(e,mn),mn;if(W(r))for(let u=0;u<r.length;u++){const d=Be(r[u]);_o(d)&&(o[d]=ie)}else if(r)for(const u in r){const d=Be(u);if(_o(d)){const f=r[u],g=o[d]=W(f)||F(f)?{type:f}:ye({},f),T=g.type;let S=!1,M=!0;if(W(T))for(let L=0;L<T.length;++L){const O=T[L],A=F(O)&&O.name;if(A==="Boolean"){S=!0;break}else A==="String"&&(M=!1)}else S=F(T)&&T.name==="Boolean";g[0]=S,g[1]=M,(S||Z(g,"default"))&&a.push(d)}}const l=[o,a];return ue(e)&&s.set(e,l),l}function _o(e){return e[0]!=="$"&&!Hn(e)}const Yc=e=>e[0]==="_"||e==="$stable",xr=e=>W(e)?e.map(et):[et(e)],lf=(e,t,n)=>{if(t._n)return t;const s=pe((...i)=>xr(t(...i)),n);return s._c=!1,s},Xc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Yc(i))continue;const r=e[i];if(F(r))t[i]=lf(i,r,s);else if(r!=null){const o=xr(r);t[i]=()=>o}}},Zc=(e,t)=>{const n=xr(t);e.slots.default=()=>n},Qc=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},uf=(e,t,n)=>{const s=e.slots=Kc();if(e.vnode.shapeFlag&32){const i=t._;i?(Qc(s,t,n),n&&ac(s,"_",i,!0)):Xc(t,s)}else t&&Zc(e,t)},df=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ie;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Qc(i,t,n):(r=!t.$stable,Xc(t,i)),o=t}else t&&(Zc(e,t),o={default:1});if(r)for(const a in i)!Yc(a)&&o[a]==null&&delete i[a]},Re=kf;function ff(e){return hf(e)}function hf(e,t){const n=ei();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=nt,insertStaticContent:T}=e,S=(h,m,v,y=null,I=null,w=null,R=void 0,C=null,k=!!m.dynamicChildren)=>{if(h===m)return;h&&!Nn(h,m)&&(y=b(h),Te(h,I,w,!0),h=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:E,ref:H,shapeFlag:x}=m;switch(E){case ai:M(h,m,v,y);break;case en:L(h,m,v,y);break;case Ts:h==null&&O(m,v,y,R);break;case de:Ft(h,m,v,y,I,w,R,C,k);break;default:x&1?z(h,m,v,y,I,w,R,C,k):x&6?Ge(h,m,v,y,I,w,R,C,k):(x&64||x&128)&&E.process(h,m,v,y,I,w,R,C,k,$)}H!=null&&I&&Ls(H,h&&h.ref,w,m||h,!m)},M=(h,m,v,y)=>{if(h==null)s(m.el=a(m.children),v,y);else{const I=m.el=h.el;m.children!==h.children&&l(I,m.children)}},L=(h,m,v,y)=>{h==null?s(m.el=c(m.children||""),v,y):m.el=h.el},O=(h,m,v,y)=>{[h.el,h.anchor]=T(h.children,m,v,y,h.el,h.anchor)},A=({el:h,anchor:m},v,y)=>{let I;for(;h&&h!==m;)I=f(h),s(h,v,y),h=I;s(m,v,y)},D=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=f(h),i(h),h=v;i(m)},z=(h,m,v,y,I,w,R,C,k)=>{m.type==="svg"?R="svg":m.type==="math"&&(R="mathml"),h==null?re(m,v,y,I,w,R,C,k):Ne(h,m,I,w,R,C,k)},re=(h,m,v,y,I,w,R,C)=>{let k,E;const{props:H,shapeFlag:x,transition:U,dirs:V}=h;if(k=h.el=o(h.type,w,H&&H.is,H),x&8?u(k,h.children):x&16&&De(h.children,k,null,y,I,Ei(h,w),R,C),V&&zt(h,null,y,"created"),oe(k,h,h.scopeId,R,y),H){for(const ae in H)ae!=="value"&&!Hn(ae)&&r(k,ae,null,H[ae],w,y);"value"in H&&r(k,"value",null,H.value,w),(E=H.onVnodeBeforeMount)&&Ze(E,y,h)}V&&zt(h,null,y,"beforeMount");const G=pf(I,U);G&&U.beforeEnter(k),s(k,m,v),((E=H&&H.onVnodeMounted)||G||V)&&Re(()=>{E&&Ze(E,y,h),G&&U.enter(k),V&&zt(h,null,y,"mounted")},I)},oe=(h,m,v,y,I)=>{if(v&&g(h,v),y)for(let w=0;w<y.length;w++)g(h,y[w]);if(I){let w=I.subTree;if(m===w||il(w.type)&&(w.ssContent===m||w.ssFallback===m)){const R=I.vnode;oe(h,R,R.scopeId,R.slotScopeIds,I.parent)}}},De=(h,m,v,y,I,w,R,C,k=0)=>{for(let E=k;E<h.length;E++){const H=h[E]=C?Pt(h[E]):et(h[E]);S(null,H,m,v,y,I,w,R,C)}},Ne=(h,m,v,y,I,w,R)=>{const C=m.el=h.el;let{patchFlag:k,dynamicChildren:E,dirs:H}=m;k|=h.patchFlag&16;const x=h.props||ie,U=m.props||ie;let V;if(v&&Kt(v,!1),(V=U.onVnodeBeforeUpdate)&&Ze(V,v,m,h),H&&zt(m,h,v,"beforeUpdate"),v&&Kt(v,!0),(x.innerHTML&&U.innerHTML==null||x.textContent&&U.textContent==null)&&u(C,""),E?$e(h.dynamicChildren,E,C,v,y,Ei(m,I),w):R||J(h,m,C,null,v,y,Ei(m,I),w,!1),k>0){if(k&16)St(C,x,U,v,I);else if(k&2&&x.class!==U.class&&r(C,"class",null,U.class,I),k&4&&r(C,"style",x.style,U.style,I),k&8){const G=m.dynamicProps;for(let ae=0;ae<G.length;ae++){const Q=G[ae],Ce=x[Q],Ee=U[Q];(Ee!==Ce||Q==="value")&&r(C,Q,Ce,Ee,I,v)}}k&1&&h.children!==m.children&&u(C,m.children)}else!R&&E==null&&St(C,x,U,v,I);((V=U.onVnodeUpdated)||H)&&Re(()=>{V&&Ze(V,v,m,h),H&&zt(m,h,v,"updated")},y)},$e=(h,m,v,y,I,w,R)=>{for(let C=0;C<m.length;C++){const k=h[C],E=m[C],H=k.el&&(k.type===de||!Nn(k,E)||k.shapeFlag&70)?d(k.el):v;S(k,E,H,null,y,I,w,R,!0)}},St=(h,m,v,y,I)=>{if(m!==v){if(m!==ie)for(const w in m)!Hn(w)&&!(w in v)&&r(h,w,m[w],null,I,y);for(const w in v){if(Hn(w))continue;const R=v[w],C=m[w];R!==C&&w!=="value"&&r(h,w,C,R,I,y)}"value"in v&&r(h,"value",m.value,v.value,I)}},Ft=(h,m,v,y,I,w,R,C,k)=>{const E=m.el=h?h.el:a(""),H=m.anchor=h?h.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:V}=m;V&&(C=C?C.concat(V):V),h==null?(s(E,v,y),s(H,v,y),De(m.children||[],v,H,I,w,R,C,k)):x>0&&x&64&&U&&h.dynamicChildren?($e(h.dynamicChildren,U,v,I,w,R,C),(m.key!=null||I&&m===I.subTree)&&el(h,m,!0)):J(h,m,v,H,I,w,R,C,k)},Ge=(h,m,v,y,I,w,R,C,k)=>{m.slotScopeIds=C,h==null?m.shapeFlag&512?I.ctx.activate(m,v,y,R,k):Mn(m,v,y,I,w,R,k):cn(h,m,k)},Mn=(h,m,v,y,I,w,R)=>{const C=h.component=Mf(h,y,I);if(Nc(h)&&(C.ctx.renderer=$),Df(C,!1,R),C.asyncDep){if(I&&I.registerDep(C,he,R),!h.el){const k=C.subTree=B(en);L(null,k,m,v)}}else he(C,h,m,v,I,w,R)},cn=(h,m,v)=>{const y=m.component=h.component;if(Ef(h,m,v))if(y.asyncDep&&!y.asyncResolved){ee(y,m,v);return}else y.next=m,y.update();else m.el=h.el,y.vnode=m},he=(h,m,v,y,I,w,R)=>{const C=()=>{if(h.isMounted){let{next:x,bu:U,u:V,parent:G,vnode:ae}=h;{const Ye=tl(h);if(Ye){x&&(x.el=ae.el,ee(h,x,R)),Ye.asyncDep.then(()=>{h.isUnmounted||C()});return}}let Q=x,Ce;Kt(h,!1),x?(x.el=ae.el,ee(h,x,R)):x=ae,U&&ws(U),(Ce=x.props&&x.props.onVnodeBeforeUpdate)&&Ze(Ce,G,x,ae),Kt(h,!0);const Ee=bo(h),Je=h.subTree;h.subTree=Ee,S(Je,Ee,d(Je.el),b(Je),h,I,w),x.el=Ee.el,Q===null&&Sf(h,Ee.el),V&&Re(V,I),(Ce=x.props&&x.props.onVnodeUpdated)&&Re(()=>Ze(Ce,G,x,ae),I)}else{let x;const{el:U,props:V}=m,{bm:G,m:ae,parent:Q,root:Ce,type:Ee}=h,Je=Vn(m);Kt(h,!1),G&&ws(G),!Je&&(x=V&&V.onVnodeBeforeMount)&&Ze(x,Q,m),Kt(h,!0);{Ce.ce&&Ce.ce._injectChildStyle(Ee);const Ye=h.subTree=bo(h);S(null,Ye,v,y,h,I,w),m.el=Ye.el}if(ae&&Re(ae,I),!Je&&(x=V&&V.onVnodeMounted)){const Ye=m;Re(()=>Ze(x,Q,Ye),I)}(m.shapeFlag&256||Q&&Vn(Q.vnode)&&Q.vnode.shapeFlag&256)&&h.a&&Re(h.a,I),h.isMounted=!0,m=v=y=null}};h.scope.on();const k=h.effect=new dc(C);h.scope.off();const E=h.update=k.run.bind(k),H=h.job=k.runIfDirty.bind(k);H.i=h,H.id=h.uid,k.scheduler=()=>Pr(H),Kt(h,!0),E()},ee=(h,m,v)=>{m.component=h;const y=h.vnode.props;h.vnode=m,h.next=null,af(h,m.props,y,v),df(h,m.children,v),Bt(),uo(h),Vt()},J=(h,m,v,y,I,w,R,C,k=!1)=>{const E=h&&h.children,H=h?h.shapeFlag:0,x=m.children,{patchFlag:U,shapeFlag:V}=m;if(U>0){if(U&128){kt(E,x,v,y,I,w,R,C,k);return}else if(U&256){lt(E,x,v,y,I,w,R,C,k);return}}V&8?(H&16&&Ue(E,I,w),x!==E&&u(v,x)):H&16?V&16?kt(E,x,v,y,I,w,R,C,k):Ue(E,I,w,!0):(H&8&&u(v,""),V&16&&De(x,v,y,I,w,R,C,k))},lt=(h,m,v,y,I,w,R,C,k)=>{h=h||mn,m=m||mn;const E=h.length,H=m.length,x=Math.min(E,H);let U;for(U=0;U<x;U++){const V=m[U]=k?Pt(m[U]):et(m[U]);S(h[U],V,v,null,I,w,R,C,k)}E>H?Ue(h,I,w,!0,!1,x):De(m,v,y,I,w,R,C,k,x)},kt=(h,m,v,y,I,w,R,C,k)=>{let E=0;const H=m.length;let x=h.length-1,U=H-1;for(;E<=x&&E<=U;){const V=h[E],G=m[E]=k?Pt(m[E]):et(m[E]);if(Nn(V,G))S(V,G,v,null,I,w,R,C,k);else break;E++}for(;E<=x&&E<=U;){const V=h[x],G=m[U]=k?Pt(m[U]):et(m[U]);if(Nn(V,G))S(V,G,v,null,I,w,R,C,k);else break;x--,U--}if(E>x){if(E<=U){const V=U+1,G=V<H?m[V].el:y;for(;E<=U;)S(null,m[E]=k?Pt(m[E]):et(m[E]),v,G,I,w,R,C,k),E++}}else if(E>U)for(;E<=x;)Te(h[E],I,w,!0),E++;else{const V=E,G=E,ae=new Map;for(E=G;E<=U;E++){const Ae=m[E]=k?Pt(m[E]):et(m[E]);Ae.key!=null&&ae.set(Ae.key,E)}let Q,Ce=0;const Ee=U-G+1;let Je=!1,Ye=0;const Ln=new Array(Ee);for(E=0;E<Ee;E++)Ln[E]=0;for(E=V;E<=x;E++){const Ae=h[E];if(Ce>=Ee){Te(Ae,I,w,!0);continue}let Xe;if(Ae.key!=null)Xe=ae.get(Ae.key);else for(Q=G;Q<=U;Q++)if(Ln[Q-G]===0&&Nn(Ae,m[Q])){Xe=Q;break}Xe===void 0?Te(Ae,I,w,!0):(Ln[Xe-G]=E+1,Xe>=Ye?Ye=Xe:Je=!0,S(Ae,m[Xe],v,null,I,w,R,C,k),Ce++)}const ro=Je?mf(Ln):mn;for(Q=ro.length-1,E=Ee-1;E>=0;E--){const Ae=G+E,Xe=m[Ae],oo=Ae+1<H?m[Ae+1].el:y;Ln[E]===0?S(null,Xe,v,oo,I,w,R,C,k):Je&&(Q<0||E!==ro[Q]?qe(Xe,v,oo,2):Q--)}}},qe=(h,m,v,y,I=null)=>{const{el:w,type:R,transition:C,children:k,shapeFlag:E}=h;if(E&6){qe(h.component.subTree,m,v,y);return}if(E&128){h.suspense.move(m,v,y);return}if(E&64){R.move(h,m,v,$);return}if(R===de){s(w,m,v);for(let x=0;x<k.length;x++)qe(k[x],m,v,y);s(h.anchor,m,v);return}if(R===Ts){A(h,m,v);return}if(y!==2&&E&1&&C)if(y===0)C.beforeEnter(w),s(w,m,v),Re(()=>C.enter(w),I);else{const{leave:x,delayLeave:U,afterLeave:V}=C,G=()=>s(w,m,v),ae=()=>{x(w,()=>{G(),V&&V()})};U?U(w,G,ae):ae()}else s(w,m,v)},Te=(h,m,v,y=!1,I=!1)=>{const{type:w,props:R,ref:C,children:k,dynamicChildren:E,shapeFlag:H,patchFlag:x,dirs:U,cacheIndex:V}=h;if(x===-2&&(I=!1),C!=null&&Ls(C,null,v,h,!0),V!=null&&(m.renderCache[V]=void 0),H&256){m.ctx.deactivate(h);return}const G=H&1&&U,ae=!Vn(h);let Q;if(ae&&(Q=R&&R.onVnodeBeforeUnmount)&&Ze(Q,m,h),H&6)ps(h.component,v,y);else{if(H&128){h.suspense.unmount(v,y);return}G&&zt(h,null,m,"beforeUnmount"),H&64?h.type.remove(h,m,v,$,y):E&&!E.hasOnce&&(w!==de||x>0&&x&64)?Ue(E,m,v,!1,!0):(w===de&&x&384||!I&&H&16)&&Ue(k,m,v),y&&ln(h)}(ae&&(Q=R&&R.onVnodeUnmounted)||G)&&Re(()=>{Q&&Ze(Q,m,h),G&&zt(h,null,m,"unmounted")},v)},ln=h=>{const{type:m,el:v,anchor:y,transition:I}=h;if(m===de){un(v,y);return}if(m===Ts){D(h);return}const w=()=>{i(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:R,delayLeave:C}=I,k=()=>R(v,w);C?C(h.el,w,k):k()}else w()},un=(h,m)=>{let v;for(;h!==m;)v=f(h),i(h),h=v;i(m)},ps=(h,m,v)=>{const{bum:y,scope:I,job:w,subTree:R,um:C,m:k,a:E}=h;yo(k),yo(E),y&&ws(y),I.stop(),w&&(w.flags|=8,Te(R,h,m,v)),C&&Re(C,m),Re(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Ue=(h,m,v,y=!1,I=!1,w=0)=>{for(let R=w;R<h.length;R++)Te(h[R],m,v,y,I)},b=h=>{if(h.shapeFlag&6)return b(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=f(h.anchor||h.el),v=m&&m[Ud];return v?f(v):m};let N=!1;const P=(h,m,v)=>{h==null?m._vnode&&Te(m._vnode,null,null,!0):S(m._vnode||null,h,m,null,null,null,v),m._vnode=h,N||(N=!0,uo(),Oc(),N=!1)},$={p:S,um:Te,m:qe,r:ln,mt:Mn,mc:De,pc:J,pbc:$e,n:b,o:e};return{render:P,hydrate:void 0,createApp:rf(P)}}function Ei({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Kt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function el(e,t,n=!1){const s=e.children,i=t.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Pt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&el(o,a)),a.type===ai&&(a.el=o.el)}}function mf(e){const t=e.slice(),n=[0];let s,i,r,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(i=n[n.length-1],e[i]<l){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function tl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tl(t)}function yo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const gf=Symbol.for("v-scx"),vf=()=>je(gf);function _f(e,t){return Mr(e,null,t)}function bn(e,t,n){return Mr(e,t,n)}function Mr(e,t,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,a=ye({},n),c=t&&s||!t&&r!=="post";let l;if(es){if(r==="sync"){const g=vf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=nt,g.resume=nt,g.pause=nt,g}}const u=me;a.call=(g,T,S)=>rt(g,u,T,S);let d=!1;r==="post"?a.scheduler=g=>{Re(g,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(g,T)=>{T?g():Pr(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const f=Ld(e,t,a);return es&&(l?l.push(f):c&&f()),f}function yf(e,t,n){const s=this.proxy,i=fe(e)?e.includes(".")?nl(s,e):()=>s[e]:e.bind(s,s);let r;F(t)?r=t:(r=t.handler,n=t);const o=as(this),a=Mr(i,r.bind(s),n);return o(),a}function nl(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const bf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Be(t)}Modifiers`]||e[`${on(t)}Modifiers`];function wf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ie;let i=n;const r=t.startsWith("update:"),o=r&&bf(s,t.slice(7));o&&(o.trim&&(i=n.map(u=>fe(u)?u.trim():u)),o.number&&(i=n.map(Wi)));let a,c=s[a=_i(t)]||s[a=_i(Be(t))];!c&&r&&(c=s[a=_i(on(t))]),c&&rt(c,e,6,i);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,rt(l,e,6,i)}}function sl(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!F(e)){const c=l=>{const u=sl(l,t,!0);u&&(a=!0,ye(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ue(e)&&s.set(e,null),null):(W(r)?r.forEach(c=>o[c]=null):ye(o,r),ue(e)&&s.set(e,o),o)}function oi(e,t){return!e||!Ys(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,on(t))||Z(e,t))}function bo(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:g,ctx:T,inheritAttrs:S}=e,M=Ms(e);let L,O;try{if(n.shapeFlag&4){const D=i||s,z=D;L=et(l.call(z,D,u,d,g,f,T)),O=a}else{const D=t;L=et(D.length>1?D(d,{attrs:a,slots:o,emit:c}):D(d,null)),O=t.props?a:If(a)}}catch(D){Fn.length=0,si(D,e,1),L=B(en)}let A=L;if(O&&S!==!1){const D=Object.keys(O),{shapeFlag:z}=A;D.length&&z&7&&(r&&D.some(_r)&&(O=Tf(O,r)),A=En(A,O,!1,!0))}return n.dirs&&(A=En(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Or(A,n.transition),L=A,Ms(M),L}const If=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ys(n))&&((t||(t={}))[n]=e[n]);return t},Tf=(e,t)=>{const n={};for(const s in e)(!_r(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Ef(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?wo(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!oi(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?wo(s,o,l):!0:!!o;return!1}function wo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!oi(n,r))return!0}return!1}function Sf({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const il=e=>e.__isSuspense;function kf(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):$d(e)}const de=Symbol.for("v-fgt"),ai=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),Fn=[];let xe=null;function K(e=!1){Fn.push(xe=e?null:[])}function Cf(){Fn.pop(),xe=Fn[Fn.length-1]||null}let Qn=1;function Io(e,t=!1){Qn+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function rl(e){return e.dynamicChildren=Qn>0?xe||mn:null,Cf(),Qn>0&&xe&&xe.push(e),e}function q(e,t,n,s,i,r){return rl(_(e,t,n,s,i,r,!0))}function ci(e,t,n,s,i){return rl(B(e,t,n,s,i,!0))}function Ns(e){return e?e.__v_isVNode===!0:!1}function Nn(e,t){return e.type===t.type&&e.key===t.key}const ol=({key:e})=>e??null,Es=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||_e(e)||F(e)?{i:Se,r:e,k:t,f:!!n}:e:null);function _(e,t=null,n=null,s=0,i=null,r=e===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ol(t),ref:t&&Es(t),scopeId:Mc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Se};return a?(Lr(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),Qn>0&&!o&&xe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&xe.push(c),c}const B=Af;function Af(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Jd)&&(e=en),Ns(e)){const a=En(e,t,!0);return n&&Lr(a,n),Qn>0&&!r&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(jf(e)&&(e=e.__vccOpts),t){t=Rf(t);let{class:a,style:c}=t;a&&!fe(a)&&(t.class=jt(a)),ue(c)&&(Ar(c)&&!W(c)&&(c=ye({},c)),t.style=wr(c))}const o=fe(e)?1:il(e)?128:Hd(e)?64:ue(e)?4:F(e)?2:0;return _(e,t,n,s,i,o,r,!0)}function Rf(e){return e?Ar(e)||Gc(e)?ye({},e):e:null}function En(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=e,l=t?Pf(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ol(l),ref:t&&t.ref?n&&r?W(r)?r.concat(Es(t)):[r,Es(t)]:Es(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==de?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&En(e.ssContent),ssFallback:e.ssFallback&&En(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Or(u,c.clone(u)),u}function te(e=" ",t=0){return B(ai,null,e,t)}function os(e,t){const n=B(Ts,null,e);return n.staticCount=t,n}function Sn(e="",t=!1){return t?(K(),ci(en,null,e)):B(en,null,e)}function et(e){return e==null||typeof e=="boolean"?B(en):W(e)?B(de,null,e.slice()):Ns(e)?Pt(e):B(ai,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:En(e)}function Lr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Lr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Gc(t)?t._ctx=Se:i===3&&Se&&(Se.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:Se},n=32):(t=String(t),s&64?(n=16,t=[te(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pf(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=jt([t.class,s.class]));else if(i==="style")t.style=wr([t.style,s.style]);else if(Ys(i)){const r=t[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function Ze(e,t,n,s=null){rt(e,t,7,[n,s])}const Of=Fc();let xf=0;function Mf(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Of,r={uid:xf++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jc(s,i),emitsOptions:sl(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=wf.bind(null,r),e.ce&&e.ce(r),r}let me=null;const Lf=()=>me||Se;let $s,er;{const e=ei(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};$s=t("__VUE_INSTANCE_SETTERS__",n=>me=n),er=t("__VUE_SSR_SETTERS__",n=>es=n)}const as=e=>{const t=me;return $s(e),e.scope.on(),()=>{e.scope.off(),$s(t)}},To=()=>{me&&me.scope.off(),$s(null)};function al(e){return e.vnode.shapeFlag&4}let es=!1;function Df(e,t=!1,n=!1){t&&er(t);const{props:s,children:i}=e.vnode,r=al(e);of(e,s,r,t),uf(e,i,n);const o=r?Nf(e,t):void 0;return t&&er(!1),o}function Nf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xd);const{setup:s}=n;if(s){Bt();const i=e.setupContext=s.length>1?Uf(e):null,r=as(e),o=rs(s,e,0,[e.props,i]),a=ic(o);if(Vt(),r(),(a||e.sp)&&!Vn(e)&&Dc(e),a){if(o.then(To,To),t)return o.then(c=>{Eo(e,c)}).catch(c=>{si(c,e,0)});e.asyncDep=o}else Eo(e,o)}else cl(e)}function Eo(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Ac(t)),cl(e)}function cl(e,t,n){const s=e.type;e.render||(e.render=s.render||nt);{const i=as(e);Bt();try{Zd(e)}finally{Vt(),i()}}}const $f={get(e,t){return ge(e,"get",""),e[t]}};function Uf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,$f),slots:e.slots,emit:e.emit,expose:t}}function li(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ac(Cd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wn)return Wn[n](e)},has(t,n){return n in t||n in Wn}})):e.proxy}function Hf(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function jf(e){return F(e)&&"__vccOpts"in e}const Ve=(e,t)=>xd(e,t,es);function ll(e,t,n){const s=arguments.length;return s===2?ue(t)&&!W(t)?Ns(t)?B(e,null,[t]):B(e,t):B(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ns(n)&&(n=[n]),B(e,t,n))}const ul="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tr;const So=typeof window<"u"&&window.trustedTypes;if(So)try{tr=So.createPolicy("vue",{createHTML:e=>e})}catch{}const dl=tr?e=>tr.createHTML(e):e=>e,Bf="http://www.w3.org/2000/svg",Vf="http://www.w3.org/1998/Math/MathML",ft=typeof document<"u"?document:null,ko=ft&&ft.createElement("template"),Wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?ft.createElementNS(Bf,e):t==="mathml"?ft.createElementNS(Vf,e):n?ft.createElement(e,{is:n}):ft.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ko.innerHTML=dl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=ko.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ff=Symbol("_vtc");function zf(e,t,n){const s=e[Ff];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Co=Symbol("_vod"),Kf=Symbol("_vsh"),Gf=Symbol(""),qf=/(^|;)\s*display\s*:/;function Jf(e,t,n){const s=e.style,i=fe(n);let r=!1;if(n&&!i){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ss(s,a,"")}else for(const o in t)n[o]==null&&Ss(s,o,"");for(const o in n)o==="display"&&(r=!0),Ss(s,o,n[o])}else if(i){if(t!==n){const o=s[Gf];o&&(n+=";"+o),s.cssText=n,r=qf.test(n)}}else t&&e.removeAttribute("style");Co in e&&(e[Co]=r?s.display:"",e[Kf]&&(s.display="none"))}const Ao=/\s*!important$/;function Ss(e,t,n){if(W(n))n.forEach(s=>Ss(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Yf(e,t);Ao.test(n)?e.setProperty(on(s),n.replace(Ao,""),"important"):e[s]=n}}const Ro=["Webkit","Moz","ms"],Si={};function Yf(e,t){const n=Si[t];if(n)return n;let s=Be(t);if(s!=="filter"&&s in e)return Si[t]=s;s=Qs(s);for(let i=0;i<Ro.length;i++){const r=Ro[i]+s;if(r in e)return Si[t]=r}return t}const Po="http://www.w3.org/1999/xlink";function Oo(e,t,n,s,i,r=od(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Po,t.slice(6,t.length)):e.setAttributeNS(Po,t,n):n==null||r&&!cc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ht(n)?String(n):n)}function xo(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?dl(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=cc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function hn(e,t,n,s){e.addEventListener(t,n,s)}function Xf(e,t,n,s){e.removeEventListener(t,n,s)}const Mo=Symbol("_vei");function Zf(e,t,n,s,i=null){const r=e[Mo]||(e[Mo]={}),o=r[t];if(s&&o)o.value=s;else{const[a,c]=Qf(t);if(s){const l=r[t]=nh(s,i);hn(e,a,l,c)}else o&&(Xf(e,a,o,c),r[t]=void 0)}}const Lo=/(?:Once|Passive|Capture)$/;function Qf(e){let t;if(Lo.test(e)){t={};let s;for(;s=e.match(Lo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):on(e.slice(2)),t]}let ki=0;const eh=Promise.resolve(),th=()=>ki||(eh.then(()=>ki=0),ki=Date.now());function nh(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;rt(sh(s,n.value),t,5,[s])};return n.value=e,n.attached=th(),n}function sh(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Do=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ih=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?zf(e,s,o):t==="style"?Jf(e,n,s):Ys(t)?_r(t)||Zf(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rh(e,t,s,o))?(xo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oo(e,t,s,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(s))?xo(e,Be(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Oo(e,t,s,o))};function rh(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Do(t)&&F(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Do(t)&&fe(n)?!1:t in e}const No=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>ws(t,n):t};function oh(e){e.target.composing=!0}function $o(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ci=Symbol("_assign"),Uo={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e[Ci]=No(i);const r=s||i.props&&i.props.type==="number";hn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Wi(a)),e[Ci](a)}),n&&hn(e,"change",()=>{e.value=e.value.trim()}),t||(hn(e,"compositionstart",oh),hn(e,"compositionend",$o),hn(e,"change",$o))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(e[Ci]=No(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Wi(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||i&&e.value.trim()===c)||(e.value=c))}},ah=ye({patchProp:ih},Wf);let Ho;function ch(){return Ho||(Ho=ff(ah))}const lh=(...e)=>{const t=ch().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=dh(s);if(!i)return;const r=t._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,uh(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function uh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dh(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const pn=typeof document<"u";function fl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function fh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&fl(e.default)}const Y=Object.assign;function Ai(e,t){const n={};for(const s in t){const i=t[s];n[s]=Ke(i)?i.map(e):e(i)}return n}const zn=()=>{},Ke=Array.isArray,hl=/#/g,hh=/&/g,ph=/\//g,mh=/=/g,gh=/\?/g,pl=/\+/g,vh=/%5B/g,_h=/%5D/g,ml=/%5E/g,yh=/%60/g,gl=/%7B/g,bh=/%7C/g,vl=/%7D/g,wh=/%20/g;function Dr(e){return encodeURI(""+e).replace(bh,"|").replace(vh,"[").replace(_h,"]")}function Ih(e){return Dr(e).replace(gl,"{").replace(vl,"}").replace(ml,"^")}function nr(e){return Dr(e).replace(pl,"%2B").replace(wh,"+").replace(hl,"%23").replace(hh,"%26").replace(yh,"`").replace(gl,"{").replace(vl,"}").replace(ml,"^")}function Th(e){return nr(e).replace(mh,"%3D")}function Eh(e){return Dr(e).replace(hl,"%23").replace(gh,"%3F")}function Sh(e){return e==null?"":Eh(e).replace(ph,"%2F")}function ts(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const kh=/\/$/,Ch=e=>e.replace(kh,"");function Ri(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=Oh(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ts(o)}}function Ah(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function jo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rh(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&kn(t.matched[s],n.matched[i])&&_l(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function _l(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ph(e[n],t[n]))return!1;return!0}function Ph(e,t){return Ke(e)?Bo(e,t):Ke(t)?Bo(t,e):e===t}function Bo(e,t){return Ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Oh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ns;(function(e){e.pop="pop",e.push="push"})(ns||(ns={}));var Kn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Kn||(Kn={}));function xh(e){if(!e)if(pn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ch(e)}const Mh=/^[^#]+#/;function Lh(e,t){return e.replace(Mh,"#")+t}function Dh(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ui=()=>({left:window.scrollX,top:window.scrollY});function Nh(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Dh(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Vo(e,t){return(history.state?history.state.position-t:-1)+e}const sr=new Map;function $h(e,t){sr.set(e,t)}function Uh(e){const t=sr.get(e);return sr.delete(e),t}let Hh=()=>location.protocol+"//"+location.host;function yl(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),jo(c,"")}return jo(n,e)+s+i}function jh(e,t,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const g=yl(e,location),T=n.value,S=t.value;let M=0;if(f){if(n.value=g,t.value=f,o&&o===T){o=null;return}M=S?f.position-S.position:0}else s(g);i.forEach(L=>{L(n.value,T,{delta:M,type:ns.pop,direction:M?M>0?Kn.forward:Kn.back:Kn.unknown})})};function c(){o=n.value}function l(f){i.push(f);const g=()=>{const T=i.indexOf(f);T>-1&&i.splice(T,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(Y({},f.state,{scroll:ui()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Wo(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?ui():null}}function Bh(e){const{history:t,location:n}=window,s={value:yl(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Hh()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=Y({},t.state,Wo(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=Y({},i.value,t.state,{forward:c,scroll:ui()});r(u.current,u,!0);const d=Y({},Wo(s.value,c,null),{position:u.position+1},l);r(c,d,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function Vh(e){e=xh(e);const t=Bh(e),n=jh(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Y({location:"",base:e,go:s,createHref:Lh.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Wh(e){return typeof e=="string"||e&&typeof e=="object"}function bl(e){return typeof e=="string"||typeof e=="symbol"}const wl=Symbol("");var Fo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fo||(Fo={}));function Cn(e,t){return Y(new Error,{type:e,[wl]:!0},t)}function dt(e,t){return e instanceof Error&&wl in e&&(t==null||!!(e.type&t))}const zo="[^/]+?",Fh={sensitive:!1,strict:!1,start:!0,end:!0},zh=/[.+*?^${}()[\]/\\]/g;function Kh(e,t){const n=Y({},Fh,t),s=[];let i=n.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let d=0;d<l.length;d++){const f=l[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(zh,"\\$&"),g+=40;else if(f.type===1){const{value:T,repeatable:S,optional:M,regexp:L}=f;r.push({name:T,repeatable:S,optional:M});const O=L||zo;if(O!==zo){g+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${T}" (${O}): `+D.message)}}let A=S?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(A=M&&l.length<2?`(?:/${A})`:"/"+A),M&&(A+="?"),i+=A,g+=20,M&&(g+=-8),S&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",T=r[f-1];d[T.name]=g&&T.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:T,repeatable:S,optional:M}=g,L=T in l?l[T]:"";if(Ke(L)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const O=Ke(L)?L.join("/"):L;if(!O)if(M)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${T}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function Gh(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Il(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Gh(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ko(s))return 1;if(Ko(i))return-1}return i.length-s.length}function Ko(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qh={type:0,value:""},Jh=/[a-zA-Z0-9_]/;function Yh(e){if(!e)return[[]];if(e==="/")return[[qh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function d(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Jh.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}function Xh(e,t,n){const s=Kh(Yh(e.path),n),i=Y(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Zh(e,t){const n=[],s=new Map;t=Yo({strict:!1,end:!0,sensitive:!1},t);function i(d){return s.get(d)}function r(d,f,g){const T=!g,S=qo(d);S.aliasOf=g&&g.record;const M=Yo(t,d),L=[S];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const z of D)L.push(qo(Y({},S,{components:g?g.record.components:S.components,path:z,aliasOf:g?g.record:S})))}let O,A;for(const D of L){const{path:z}=D;if(f&&z[0]!=="/"){const re=f.record.path,oe=re[re.length-1]==="/"?"":"/";D.path=f.record.path+(z&&oe+z)}if(O=Xh(D,f,M),g?g.alias.push(O):(A=A||O,A!==O&&A.alias.push(O),T&&d.name&&!Jo(O)&&o(d.name)),Tl(O)&&c(O),S.children){const re=S.children;for(let oe=0;oe<re.length;oe++)r(re[oe],O,g&&g.children[oe])}g=g||O}return A?()=>{o(A)}:zn}function o(d){if(bl(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const f=tp(d,n);n.splice(f,0,d),d.record.name&&!Jo(d)&&s.set(d.record.name,d)}function l(d,f){let g,T={},S,M;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Cn(1,{location:d});M=g.record.name,T=Y(Go(f.params,g.keys.filter(A=>!A.optional).concat(g.parent?g.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&Go(d.params,g.keys.map(A=>A.name))),S=g.stringify(T)}else if(d.path!=null)S=d.path,g=n.find(A=>A.re.test(S)),g&&(T=g.parse(S),M=g.record.name);else{if(g=f.name?s.get(f.name):n.find(A=>A.re.test(f.path)),!g)throw Cn(1,{location:d,currentLocation:f});M=g.record.name,T=Y({},f.params,d.params),S=g.stringify(T)}const L=[];let O=g;for(;O;)L.unshift(O.record),O=O.parent;return{name:M,path:S,params:T,matched:L,meta:ep(L)}}e.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Go(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function qo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Qh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Qh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Jo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ep(e){return e.reduce((t,n)=>Y(t,n.meta),{})}function Yo(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function tp(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Il(e,t[r])<0?s=r:n=r+1}const i=np(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function np(e){let t=e;for(;t=t.parent;)if(Tl(t)&&Il(e,t)===0)return t}function Tl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function sp(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(pl," "),o=r.indexOf("="),a=ts(o<0?r:r.slice(0,o)),c=o<0?null:ts(r.slice(o+1));if(a in t){let l=t[a];Ke(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Xo(e){let t="";for(let n in e){const s=e[n];if(n=Th(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(s)?s.map(r=>r&&nr(r)):[s&&nr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function ip(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ke(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const rp=Symbol(""),Zo=Symbol(""),di=Symbol(""),Nr=Symbol(""),ir=Symbol("");function $n(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ot(e,t,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(Cn(4,{from:n,to:t})):f instanceof Error?c(f):Wh(f)?c(Cn(2,{from:t,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>e.call(s&&s.instances[i],t,n,l));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(f=>c(f))})}function Pi(e,t,n,s,i=r=>r()){const r=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(fl(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Ot(u,n,s,o,a,i))}else{let l=c();r.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=fh(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const g=(d.__vccOpts||d)[t];return g&&Ot(g,n,s,o,a,i)()}))}}return r}function Qo(e){const t=je(di),n=je(Nr),s=Ve(()=>{const c=yt(e.to);return t.resolve(c)}),i=Ve(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(kn.bind(null,u));if(f>-1)return f;const g=ea(c[l-2]);return l>1&&ea(u)===g&&d[d.length-1].path!==g?d.findIndex(kn.bind(null,c[l-2])):f}),r=Ve(()=>i.value>-1&&up(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&_l(n.params,s.value.params));function a(c={}){if(lp(c)){const l=t[yt(e.replace)?"replace":"push"](yt(e.to)).catch(zn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function op(e){return e.length===1?e[0]:e}const ap=Lc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qo,setup(e,{slots:t}){const n=ni(Qo(e)),{options:s}=je(di),i=Ve(()=>({[ta(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ta(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&op(t.default(n));return e.custom?r:ll("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),cp=ap;function lp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function up(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ke(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ea(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ta=(e,t,n)=>e??t??n,dp=Lc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=je(ir),i=Ve(()=>e.route||s.value),r=je(Zo,0),o=Ve(()=>{let l=yt(r);const{matched:u}=i.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Ve(()=>i.value.matched[o.value]);Is(Zo,Ve(()=>o.value+1)),Is(rp,a),Is(ir,i);const c=le();return bn(()=>[c.value,a.value,e.name],([l,u,d],[f,g,T])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!kn(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return na(n.default,{Component:f,route:l});const g=d.props[u],T=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=ll(f,Y({},T,t,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return na(n.default,{Component:M,route:l})||M}}});function na(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const El=dp;function fp(e){const t=Zh(e.routes,e),n=e.parseQuery||sp,s=e.stringifyQuery||Xo,i=e.history,r=$n(),o=$n(),a=$n(),c=Ad(Ct);let l=Ct;pn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ai.bind(null,b=>""+b),d=Ai.bind(null,Sh),f=Ai.bind(null,ts);function g(b,N){let P,$;return bl(b)?(P=t.getRecordMatcher(b),$=N):$=b,t.addRoute($,P)}function T(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function S(){return t.getRoutes().map(b=>b.record)}function M(b){return!!t.getRecordMatcher(b)}function L(b,N){if(N=Y({},N||c.value),typeof b=="string"){const v=Ri(n,b,N.path),y=t.resolve({path:v.path},N),I=i.createHref(v.fullPath);return Y(v,y,{params:f(y.params),hash:ts(v.hash),redirectedFrom:void 0,href:I})}let P;if(b.path!=null)P=Y({},b,{path:Ri(n,b.path,N.path).path});else{const v=Y({},b.params);for(const y in v)v[y]==null&&delete v[y];P=Y({},b,{params:d(v)}),N.params=d(N.params)}const $=t.resolve(P,N),ne=b.hash||"";$.params=u(f($.params));const h=Ah(s,Y({},b,{hash:Ih(ne),path:$.path})),m=i.createHref(h);return Y({fullPath:h,hash:ne,query:s===Xo?ip(b.query):b.query||{}},$,{redirectedFrom:void 0,href:m})}function O(b){return typeof b=="string"?Ri(n,b,c.value.path):Y({},b)}function A(b,N){if(l!==b)return Cn(8,{from:N,to:b})}function D(b){return oe(b)}function z(b){return D(Y(O(b),{replace:!0}))}function re(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let $=typeof P=="function"?P(b):P;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=O($):{path:$},$.params={}),Y({query:b.query,hash:b.hash,params:$.path!=null?{}:b.params},$)}}function oe(b,N){const P=l=L(b),$=c.value,ne=b.state,h=b.force,m=b.replace===!0,v=re(P);if(v)return oe(Y(O(v),{state:typeof v=="object"?Y({},ne,v.state):ne,force:h,replace:m}),N||P);const y=P;y.redirectedFrom=N;let I;return!h&&Rh(s,$,P)&&(I=Cn(16,{to:y,from:$}),qe($,$,!0,!1)),(I?Promise.resolve(I):$e(y,$)).catch(w=>dt(w)?dt(w,2)?w:kt(w):J(w,y,$)).then(w=>{if(w){if(dt(w,2))return oe(Y({replace:m},O(w.to),{state:typeof w.to=="object"?Y({},ne,w.to.state):ne,force:h}),N||y)}else w=Ft(y,$,!0,m,ne);return St(y,$,w),w})}function De(b,N){const P=A(b,N);return P?Promise.reject(P):Promise.resolve()}function Ne(b){const N=un.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(b):b()}function $e(b,N){let P;const[$,ne,h]=hp(b,N);P=Pi($.reverse(),"beforeRouteLeave",b,N);for(const v of $)v.leaveGuards.forEach(y=>{P.push(Ot(y,b,N))});const m=De.bind(null,b,N);return P.push(m),Ue(P).then(()=>{P=[];for(const v of r.list())P.push(Ot(v,b,N));return P.push(m),Ue(P)}).then(()=>{P=Pi(ne,"beforeRouteUpdate",b,N);for(const v of ne)v.updateGuards.forEach(y=>{P.push(Ot(y,b,N))});return P.push(m),Ue(P)}).then(()=>{P=[];for(const v of h)if(v.beforeEnter)if(Ke(v.beforeEnter))for(const y of v.beforeEnter)P.push(Ot(y,b,N));else P.push(Ot(v.beforeEnter,b,N));return P.push(m),Ue(P)}).then(()=>(b.matched.forEach(v=>v.enterCallbacks={}),P=Pi(h,"beforeRouteEnter",b,N,Ne),P.push(m),Ue(P))).then(()=>{P=[];for(const v of o.list())P.push(Ot(v,b,N));return P.push(m),Ue(P)}).catch(v=>dt(v,8)?v:Promise.reject(v))}function St(b,N,P){a.list().forEach($=>Ne(()=>$(b,N,P)))}function Ft(b,N,P,$,ne){const h=A(b,N);if(h)return h;const m=N===Ct,v=pn?history.state:{};P&&($||m?i.replace(b.fullPath,Y({scroll:m&&v&&v.scroll},ne)):i.push(b.fullPath,ne)),c.value=b,qe(b,N,P,m),kt()}let Ge;function Mn(){Ge||(Ge=i.listen((b,N,P)=>{if(!ps.listening)return;const $=L(b),ne=re($);if(ne){oe(Y(ne,{replace:!0,force:!0}),$).catch(zn);return}l=$;const h=c.value;pn&&$h(Vo(h.fullPath,P.delta),ui()),$e($,h).catch(m=>dt(m,12)?m:dt(m,2)?(oe(Y(O(m.to),{force:!0}),$).then(v=>{dt(v,20)&&!P.delta&&P.type===ns.pop&&i.go(-1,!1)}).catch(zn),Promise.reject()):(P.delta&&i.go(-P.delta,!1),J(m,$,h))).then(m=>{m=m||Ft($,h,!1),m&&(P.delta&&!dt(m,8)?i.go(-P.delta,!1):P.type===ns.pop&&dt(m,20)&&i.go(-1,!1)),St($,h,m)}).catch(zn)}))}let cn=$n(),he=$n(),ee;function J(b,N,P){kt(b);const $=he.list();return $.length?$.forEach(ne=>ne(b,N,P)):console.error(b),Promise.reject(b)}function lt(){return ee&&c.value!==Ct?Promise.resolve():new Promise((b,N)=>{cn.add([b,N])})}function kt(b){return ee||(ee=!b,Mn(),cn.list().forEach(([N,P])=>b?P(b):N()),cn.reset()),b}function qe(b,N,P,$){const{scrollBehavior:ne}=e;if(!pn||!ne)return Promise.resolve();const h=!P&&Uh(Vo(b.fullPath,0))||($||!P)&&history.state&&history.state.scroll||null;return Rr().then(()=>ne(b,N,h)).then(m=>m&&Nh(m)).catch(m=>J(m,b,N))}const Te=b=>i.go(b);let ln;const un=new Set,ps={currentRoute:c,listening:!0,addRoute:g,removeRoute:T,clearRoutes:t.clearRoutes,hasRoute:M,getRoutes:S,resolve:L,options:e,push:D,replace:z,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:lt,install(b){const N=this;b.component("RouterLink",cp),b.component("RouterView",El),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>yt(c)}),pn&&!ln&&c.value===Ct&&(ln=!0,D(i.location).catch(ne=>{}));const P={};for(const ne in Ct)Object.defineProperty(P,ne,{get:()=>c.value[ne],enumerable:!0});b.provide(di,N),b.provide(Nr,Sc(P)),b.provide(ir,c);const $=b.unmount;un.add(b),b.unmount=function(){un.delete(b),un.size<1&&(l=Ct,Ge&&Ge(),Ge=null,c.value=Ct,ln=!1,ee=!1),$()}}};function Ue(b){return b.reduce((N,P)=>N.then(()=>Ne(P)),Promise.resolve())}return ps}function hp(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>kn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>kn(l,c))||i.push(c))}return[n,s,i]}function Sl(){return je(di)}function cs(e){return je(Nr)}const pp={__name:"App",setup(e){return(t,n)=>(K(),ci(yt(El)))}},Le=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},mp={},gp={class:"header"},vp={class:"header__container"};function _p(e,t){const n=Et("router-link");return K(),q("header",gp,[_("div",vp,[B(n,{to:"/"},{default:pe(()=>t[0]||(t[0]=[_("h1",null,[_("mark",null,"e"),te("Lyceum173")],-1)])),_:1})])])}const Rn=Le(mp,[["render",_p],["__scopeId","data-v-078a0f92"]]),yp={class:"footer"},bp={class:"footer__copy"},wp={class:"footer__copy__container"},Ip={id:"currentYear"},Pn={__name:"FooterComponent",setup(e){const t=le("");return t.value=new Date().getFullYear(),(n,s)=>(K(),q("footer",yp,[s[7]||(s[7]=os('<div class="footer__top"><div class="footer__top__container"><p>Створено учнями Ліцею 173!</p><br><a href="mailto:chat-support@lyceum173.kyiv.ua"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"></path><path d="M22 7L12.8944 11.5528C12.3314 11.8343 11.6686 11.8343 11.1056 11.5528L2 7" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"></path></svg><p>chat-support@lyceum173.kyiv.ua</p></a></div></div>',1)),_("div",bp,[_("div",wp,[s[0]||(s[0]=te(" © ")),_("span",Ip,Oe(t.value),1),s[1]||(s[1]=te()),s[2]||(s[2]=_("a",{href:"https://lyceum173.kyiv.ua"},"Ліцей №173",-1)),s[3]||(s[3]=te("  ")),s[4]||(s[4]=_("span",null,"|",-1)),s[5]||(s[5]=te("  ")),s[6]||(s[6]=_("a",{href:"https://pryima-oleksandr.web.app",target:"_blank"},"Pryima Oleksandr",-1))])])]))}};function Oi(e,t,n,s){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(u){try{l(s.next(u))}catch(d){o(d)}}function c(u){try{l(s.throw(u))}catch(d){o(d)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((s=s.apply(e,[])).next())})}class _s extends Error{constructor(t,n=0,s="",i=""){super(t),this.name="AppwriteException",this.message=t,this.code=n,this.type=s,this.response=i}}class ht{constructor(){this.config={endpoint:"https://cloud.appwrite.io/v1",endpointRealtime:"",project:"",jwt:"",locale:"",session:"",devkey:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"18.1.1","X-Appwrite-Response-Format":"1.7.0"},this.realtime={socket:void 0,timeout:void 0,heartbeat:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=window==null?void 0:window.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createHeartbeat:()=>{this.realtime.heartbeat&&clearTimeout(this.realtime.heartbeat),this.realtime.heartbeat=window==null?void 0:window.setInterval(()=>{var t;(t=this.realtime.socket)===null||t===void 0||t.send(JSON.stringify({type:"ping"}))},2e4)},createSocket:()=>{var t,n,s;if(this.realtime.channels.size<1){this.realtime.reconnect=!1,(t=this.realtime.socket)===null||t===void 0||t.close();return}const i=new URLSearchParams;i.set("project",this.config.project),this.realtime.channels.forEach(o=>{i.append("channels[]",o)});const r=this.config.endpointRealtime+"/realtime?"+i.toString();(r!==this.realtime.url||!this.realtime.socket||((n=this.realtime.socket)===null||n===void 0?void 0:n.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&((s=this.realtime.socket)===null||s===void 0?void 0:s.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=r,this.realtime.socket=new WebSocket(r),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",o=>{this.realtime.reconnectAttempts=0,this.realtime.createHeartbeat()}),this.realtime.socket.addEventListener("close",o=>{var a,c,l;if(!this.realtime.reconnect||((c=(a=this.realtime)===null||a===void 0?void 0:a.lastMessage)===null||c===void 0?void 0:c.type)==="error"&&((l=this.realtime)===null||l===void 0?void 0:l.lastMessage.data).code===1008){this.realtime.reconnect=!0;return}const u=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${u/1e3} seconds.`,o.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},u)}))},onMessage:t=>{var n,s;try{const i=JSON.parse(t.data);switch(this.realtime.lastMessage=i,i.type){case"connected":const r=JSON.parse((n=window.localStorage.getItem("cookieFallback"))!==null&&n!==void 0?n:"{}"),o=r==null?void 0:r[`a_session_${this.config.project}`],a=i.data;o&&!a.user&&((s=this.realtime.socket)===null||s===void 0||s.send(JSON.stringify({type:"authentication",data:{session:o}})));break;case"event":let c=i.data;if(c!=null&&c.channels){if(!c.channels.some(u=>this.realtime.channels.has(u)))return;this.realtime.subscriptions.forEach(u=>{c.channels.some(d=>u.channels.includes(d))&&setTimeout(()=>u.callback(c))})}break;case"pong":break;case"error":throw i.data;default:break}}catch(i){console.error(i)}},cleanUp:t=>{this.realtime.channels.forEach(n=>{t.includes(n)&&(Array.from(this.realtime.subscriptions).some(([i,r])=>r.channels.includes(n))||this.realtime.channels.delete(n))})}}}setEndpoint(t){if(!t.startsWith("http://")&&!t.startsWith("https://"))throw new _s("Invalid endpoint URL: "+t);return this.config.endpoint=t,this.config.endpointRealtime=t.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(t){if(!t.startsWith("ws://")&&!t.startsWith("wss://"))throw new _s("Invalid realtime endpoint URL: "+t);return this.config.endpointRealtime=t,this}setProject(t){return this.headers["X-Appwrite-Project"]=t,this.config.project=t,this}setJWT(t){return this.headers["X-Appwrite-JWT"]=t,this.config.jwt=t,this}setLocale(t){return this.headers["X-Appwrite-Locale"]=t,this.config.locale=t,this}setSession(t){return this.headers["X-Appwrite-Session"]=t,this.config.session=t,this}setDevKey(t){return this.headers["X-Appwrite-Dev-Key"]=t,this.config.devkey=t,this}subscribe(t,n){let s=typeof t=="string"?[t]:t;s.forEach(r=>this.realtime.channels.add(r));const i=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(i,{channels:s,callback:n}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(i),this.realtime.cleanUp(s),this.realtime.connect()}}prepareRequest(t,n,s={},i={}){if(t=t.toUpperCase(),s=Object.assign({},this.headers,s),typeof window<"u"&&window.localStorage){const o=window.localStorage.getItem("cookieFallback");o&&(s["X-Fallback-Cookies"]=o)}let r={method:t,headers:s};if(s["X-Appwrite-Dev-Key"]===void 0&&(r.credentials="include"),t==="GET")for(const[o,a]of Object.entries(ht.flatten(i)))n.searchParams.append(o,a);else switch(s["content-type"]){case"application/json":r.body=JSON.stringify(i);break;case"multipart/form-data":const o=new FormData;for(const[a,c]of Object.entries(i))if(c instanceof File)o.append(a,c,c.name);else if(Array.isArray(c))for(const l of c)o.append(`${a}[]`,l);else o.append(a,c);r.body=o,delete s["content-type"];break}return{uri:n.toString(),options:r}}chunkedUpload(t,n,s={},i={},r){return Oi(this,void 0,void 0,function*(){const o=Object.values(i).find(l=>l instanceof File);if(!o)throw new Error("File not found in payload");if(o.size<=ht.CHUNK_SIZE)return yield this.call(t,n,s,i);let a=0,c=null;for(;a<o.size;){let l=a+ht.CHUNK_SIZE;l>=o.size&&(l=o.size),s["content-range"]=`bytes ${a}-${l-1}/${o.size}`;const u=o.slice(a,l);let d=Object.assign(Object.assign({},i),{file:new File([u],o.name)});c=yield this.call(t,n,s,d),r&&typeof r=="function"&&r({$id:c.$id,progress:Math.round(l/o.size*100),sizeUploaded:l,chunksTotal:Math.ceil(o.size/ht.CHUNK_SIZE),chunksUploaded:Math.ceil(l/ht.CHUNK_SIZE)}),c&&c.$id&&(s["x-appwrite-id"]=c.$id),a=l}return c})}ping(){return Oi(this,void 0,void 0,function*(){return this.call("GET",new URL(this.config.endpoint+"/ping"))})}call(t,n,s={},i={},r="json"){var o,a;return Oi(this,void 0,void 0,function*(){const{uri:c,options:l}=this.prepareRequest(t,n,s,i);let u=null;const d=yield fetch(c,l);if(d.type==="opaque")throw new _s(`Invalid Origin. Register your new client (${window.location.host}) as a new Web platform on your project console dashboard`,403,"forbidden","");const f=d.headers.get("x-appwrite-warning");if(f&&f.split(";").forEach(T=>console.warn("Warning: "+T)),!((o=d.headers.get("content-type"))===null||o===void 0)&&o.includes("application/json")?u=yield d.json():r==="arrayBuffer"?u=yield d.arrayBuffer():u={message:yield d.text()},400<=d.status){let T="";throw!((a=d.headers.get("content-type"))===null||a===void 0)&&a.includes("application/json")||r==="arrayBuffer"?T=JSON.stringify(u):T=u==null?void 0:u.message,new _s(u==null?void 0:u.message,d.status,u==null?void 0:u.type,T)}const g=d.headers.get("X-Fallback-Cookies");return typeof window<"u"&&window.localStorage&&g&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",g)),u})}static flatten(t,n=""){let s={};for(const[i,r]of Object.entries(t)){let o=n?n+"["+i+"]":i;Array.isArray(r)?s=Object.assign(Object.assign({},s),ht.flatten(r,o)):s[o]=r}return s}}ht.CHUNK_SIZE=1024*1024*5;var sa;(function(e){e.Totp="totp"})(sa||(sa={}));var ia;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(ia||(ia={}));var ra;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(ra||(ra={}));var oa;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(oa||(oa={}));var aa;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionChinaPay="union-china-pay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(aa||(aa={}));var ca;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ca||(ca={}));var la;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS"})(la||(la={}));var ua;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(ua||(ua={}));var da;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif"})(da||(da={}));new ht().setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("683c81b60027617ce9c2").setDevKey("");const Tp=new Set(["title","titleTemplate","script","style","noscript"]),ks=new Set(["base","meta","link","style","script","noscript"]),Ep=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Sp=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),kl=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),kp=typeof window<"u";function Us(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function rr(e){if(e._h)return e._h;if(e._d)return Us(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Us(t)}function Cp(e,t){return e instanceof Promise?e.then(t):t(e)}function or(e,t,n,s){const i=s||Al(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(i instanceof Promise)return i.then(o=>or(e,t,n,o));const r={tag:e,props:i};for(const o of kl){const a=r.props[o]!==void 0?r.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Tp.has(r.tag))&&(r[o==="children"?"innerHTML":o]=a),delete r.props[o])}return r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(o=>({...r,props:{...r.props,content:o}})):r}function Ap(e,t){var s;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,i])=>i).map(([i,r])=>e==="style"?`${i}:${r}`:i)),(s=String(Array.isArray(t)?t.join(n):t))==null?void 0:s.split(n).filter(i=>!!i.trim()).join(n)}function Cl(e,t,n,s){for(let i=s;i<n.length;i+=1){const r=n[i];if(r==="class"||r==="style"){e[r]=Ap(r,e[r]);continue}if(e[r]instanceof Promise)return e[r].then(o=>(e[r]=o,Cl(e,t,n,i)));if(!t&&!kl.has(r)){const o=String(e[r]),a=r.startsWith("data-");o==="true"||o===""?e[r]=a?"true":!0:e[r]||(a&&o==="false"?e[r]="false":delete e[r])}}}function Al(e,t=!1){const n=Cl(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const Rp=10;function Rl(e,t,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i instanceof Promise)return i.then(r=>(t[s]=r,Rl(e,t,s)));Array.isArray(i)?e.push(...i):e.push(i)}}function Pp(e){const t=[],n=e.resolvedInput;for(const i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;const r=n[i];if(!(r===void 0||!Ep.has(i))){if(Array.isArray(r)){for(const o of r)t.push(or(i,o,e));continue}t.push(or(i,r,e))}}if(t.length===0)return[];const s=[];return Cp(Rl(s,t,0),()=>s.map((i,r)=>(i._e=e._i,e.mode&&(i._m=e.mode),i._p=(e._i<<Rp)+r,i)))}const fa=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ha={base:-10,title:10},pa={critical:-80,high:-10,low:20};function Hs(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in ha&&(n=ha[e.tag]),t&&t in pa?n+pa[t]:n}const Op=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],xp=["name","property","http-equiv"];function Pl(e){const{props:t,tag:n}=e;if(Sp.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const s of xp)if(t[s]!==void 0)return`${n}:${s}:${t[s]}`;return!1}const xt="%separator";function Mp(e,t,n=!1){var i;let s;if(t==="s"||t==="pageTitle")s=e.pageTitle;else if(t.includes(".")){const r=t.indexOf(".");s=(i=e[t.substring(0,r)])==null?void 0:i[t.substring(r+1)]}else s=e[t];if(s!==void 0)return n?(s||"").replace(/"/g,'\\"'):s||""}const Lp=new RegExp(`${xt}(?:\\s*${xt})*`,"g");function ys(e,t,n,s=!1){if(typeof e!="string"||!e.includes("%"))return e;let i=e;try{i=decodeURI(e)}catch{}const r=i.match(/%\w+(?:\.\w+)?/g);if(!r)return e;const o=e.includes(xt);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===xt||!r.includes(a))return a;const c=Mp(t,a.slice(1),s);return c!==void 0?c:a}).trim(),o&&(e.endsWith(xt)&&(e=e.slice(0,-xt.length)),e.startsWith(xt)&&(e=e.slice(xt.length)),e=e.replace(Lp,n).trim()),e}function ma(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Dp(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const s={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async i=>{var d;const r=(await e.resolveTags()).map(f=>({tag:f,id:ks.has(f.tag)?rr(f):f.tag,shouldRender:!0}));let o=e._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const g of["body","head"]){const T=(d=n[g])==null?void 0:d.children;for(const S of T){const M=S.tagName.toLowerCase();if(!ks.has(M))continue;const L={tag:M,props:await Al(S.getAttributeNames().reduce((z,re)=>({...z,[re]:S.getAttribute(re)}),{})),innerHTML:S.innerHTML},O=Pl(L);let A=O,D=1;for(;A&&f.has(A);)A=`${O}:${D++}`;A&&(L._d=A,f.add(A)),o.elMap[S.getAttribute("data-hid")||rr(L)]=S}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(f,g,T){const S=`${f}:${g}`;o.sideEffects[S]=T,delete o.pendingSideEffects[S]}function c({id:f,$el:g,tag:T}){const S=T.tag.endsWith("Attrs");if(o.elMap[f]=g,S||(T.textContent&&T.textContent!==g.textContent&&(g.textContent=T.textContent),T.innerHTML&&T.innerHTML!==g.innerHTML&&(g.innerHTML=T.innerHTML),a(f,"el",()=>{var M;(M=o.elMap[f])==null||M.remove(),delete o.elMap[f]})),T._eventHandlers)for(const M in T._eventHandlers)Object.prototype.hasOwnProperty.call(T._eventHandlers,M)&&g.getAttribute(`data-${M}`)!==""&&((T.tag==="bodyAttrs"?n.defaultView:g).addEventListener(M.substring(2),T._eventHandlers[M].bind(g)),g.setAttribute(`data-${M}`,""));for(const M in T.props){if(!Object.prototype.hasOwnProperty.call(T.props,M))continue;const L=T.props[M],O=`attr:${M}`;if(M==="class"){if(!L)continue;for(const A of L.split(" "))S&&a(f,`${O}:${A}`,()=>g.classList.remove(A)),!g.classList.contains(A)&&g.classList.add(A)}else if(M==="style"){if(!L)continue;for(const A of L.split(";")){const D=A.indexOf(":"),z=A.substring(0,D).trim(),re=A.substring(D+1).trim();a(f,`${O}:${z}`,()=>{g.style.removeProperty(z)}),g.style.setProperty(z,re)}}else g.getAttribute(M)!==L&&g.setAttribute(M,L===!0?"":String(L)),S&&a(f,O,()=>g.removeAttribute(M))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:g,shouldRender:T,id:S}=f;if(T){if(g.tag==="title"){n.title=g.textContent;continue}f.$el=f.$el||o.elMap[S],f.$el?c(f):ks.has(g.tag)&&l.push(f)}}for(const f of l){const g=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),c(f),u[g]=u[g]||n.createDocumentFragment(),u[g].appendChild(f.$el)}for(const f of r)await e.hooks.callHook("dom:renderTag",f,n,a);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in o.pendingSideEffects)o.pendingSideEffects[f]();e._dom=o,await e.hooks.callHook("dom:rendered",{renders:r}),i()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Np(e,t={}){const n=t.delayFn||(s=>setTimeout(s,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(s=>n(()=>Dp(e,t).then(()=>{delete e._domDebouncedUpdatePromise,s()})))}function $p(e){return t=>{var s,i;const n=((i=(s=t.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":r=>{Np(r,e)}}}}}function ar(e,t={},n){for(const s in e){const i=e[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?ar(i,t,r):typeof i=="function"&&(t[r]=i)}return t}const Up={run:e=>e()},Hp=()=>Up,Ol=typeof console.createTask<"u"?console.createTask:Hp;function jp(e,t){const n=t.shift(),s=Ol(n);return e.reduce((i,r)=>i.then(()=>s.run(()=>r(...t))),Promise.resolve())}function Bp(e,t){const n=t.shift(),s=Ol(n);return Promise.all(e.map(i=>s.run(()=>i(...t))))}function xi(e,t){for(const n of[...e])n(t)}class Vp{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const i=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(t,i),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const i of s)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ar(t),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(t){const n=ar(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(jp,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Bp,t,...n)}callHookWith(t,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&xi(this._before,i);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&xi(this._after,i)}):(this._after&&i&&xi(this._after,i),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Wp(){return new Vp}const Fp=new Set(["templateParams","htmlAttrs","bodyAttrs"]),zp={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=Pl(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const s of e.tags){const i=(s.key?`${s.tag}:${s.key}`:s._d)||rr(s),r=t[i];if(r){let a=s==null?void 0:s.tagDuplicateStrategy;if(!a&&Fp.has(s.tag)&&(a="merge"),a==="merge"){const c=r.props;c.style&&s.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),s.props.style=`${c.style} ${s.props.style}`),c.class&&s.props.class?s.props.class=`${c.class} ${s.props.class}`:c.class&&(s.props.class=c.class),t[i].props={...c,...s.props};continue}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);continue}else if(Hs(s)>Hs(r))continue}if(!(s.innerHTML||s.textContent||Object.keys(s.props).length!==0)&&ks.has(s.tag)){delete t[i];continue}t[i]=s}const n=[];for(const s in t){const i=t[s],r=i._duped;n.push(i),r&&(delete i._duped,n.push(...r))}e.tags=n,e.tags=e.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Kp=new Set(["script","link","bodyAttrs"]),Gp=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!Kp.has(n.tag))continue;const s=n.props;for(const i in s){if(i[0]!=="o"||i[1]!=="n"||!Object.prototype.hasOwnProperty.call(s,i))continue;const r=s[i];typeof r=="function"&&(e.ssr&&fa.has(i)?s[i]=`this.dataset.${i}fired = true`:delete s[i],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[i]=r)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Us(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var i,r;const s=t==null?void 0:t.dataset;if(s)for(const o in s){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);fa.has(a)&&((r=(i=n._eventHandlers)==null?void 0:i[a])==null||r.call(t,new Event(a.substring(2))))}}}}),qp=new Set(["link","style","script","noscript"]),Jp={hooks:{"tag:normalise":({tag:e})=>{e.key&&qp.has(e.tag)&&(e.props["data-hid"]=e._h=Us(e.key))}}},Yp={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const s of e.tags)s._m!=="server"||s.tag!=="titleTemplate"&&s.tag!=="templateParams"&&s.tag!=="title"||(t[s.tag]=s.tag==="title"||s.tag==="titleTemplate"?s.textContent:s.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},Xp={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:s,offset:i}of Op){if(!n.tagPriority.startsWith(s))continue;const r=n.tagPriority.substring(s.length),o=(t=e.tags.find(a=>a._d===r))==null?void 0:t._p;if(o!==void 0){n._p=o+i;break}}e.tags.sort((n,s)=>{const i=Hs(n),r=Hs(s);return i<r?-1:i>r?1:n._p-s._p})}}},Zp={meta:"content",link:"href",htmlAttrs:"lang"},Qp=["innerHTML","textContent"],em=e=>({hooks:{"tags:resolve":t=>{var o;const{tags:n}=t;let s;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(s=t.tags.splice(a,1)[0].props,a-=1);const i=s||{},r=i.separator||"|";delete i.separator,i.pageTitle=ys(i.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",i,r);for(const a of n){if(a.processTemplateParams===!1)continue;const c=Zp[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=ys(a.props[c],i,r);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const l of Qp)typeof a[l]=="string"&&(a[l]=ys(a[l],i,r,a.tag==="script"&&a.props.type.endsWith("json")))}e._templateParams=i,e._separator=r},"tags:afterResolve":({tags:t})=>{let n;for(let s=0;s<t.length;s+=1){const i=t[s];i.tag==="title"&&i.processTemplateParams!==!1&&(n=i)}n!=null&&n.textContent&&(n.textContent=ys(n.textContent,e._templateParams,e._separator))}}}),tm={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,s;for(let i=0;i<t.length;i+=1){const r=t[i];r.tag==="title"?n=r:r.tag==="titleTemplate"&&(s=r)}if(s&&n){const i=ma(s.textContent,n.textContent);i!==null?n.textContent=i||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(s){const i=ma(s.textContent);i!==null&&(s.textContent=i,s.tag="title",s=void 0)}s&&e.tags.splice(e.tags.indexOf(s),1)}}},nm={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let xl;function sm(e={}){const t=im(e);return t.use($p()),xl=t}function ga(e,t){return!e||e==="server"&&t||e==="client"&&!t}function im(e={}){const t=Wp();t.addHooks(e.hooks||{}),e.document=e.document||(kp?document:void 0);const n=!e.document,s=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let i=0,r=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return r},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),ga(l.mode,n)&&t.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:i++,input:c,...l};return ga(u.mode,n)&&(r.push(u),s()),{dispose(){r=r.filter(d=>d._i!==u._i),s()},patch(d){for(const f of r)f._i===u._i&&(f.input=u.input=d);s()}}},async resolveTags(){const c={tags:[],entries:[...r]};await t.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const d of await Pp(l)){const f={tag:d,entry:l,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[zp,Yp,Gp,Jp,Xp,em,tm,nm,...(e==null?void 0:e.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function rm(){return xl}const om=ul[0]==="3";function am(e){return typeof e=="function"?e():yt(e)}function js(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=am(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>js(n));if(typeof t=="object"){const n={};for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(s==="titleTemplate"||s[0]==="o"&&s[1]==="n"){n[s]=yt(t[s]);continue}n[s]=js(t[s])}return n}return t}const cm={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=js(t.input)}}},Ml="usehead";function lm(e){return{install(n){om&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Ml,e))}}.install}function um(e={}){e.domDelayFn=e.domDelayFn||(n=>Rr(()=>setTimeout(()=>n(),0)));const t=sm(e);return t.use(cm),t.install=lm(t),t}const va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_a="__unhead_injection_handler__";function dm(){return _a in va?va[_a]():je(Ml)||rm()}function $r(e,t={}){const n=t.head||dm();if(n)return n.ssr?n.push(e,t):fm(n,e,t)}function fm(e,t,n={}){const s=le(!1),i=le({});_f(()=>{i.value=s.value?{}:js(t)});const r=e.push(i.value,n);return bn(i,a=>{r.patch(a)}),Lf()&&(jc(()=>{r.dispose()}),Uc(()=>{s.value=!0}),$c(()=>{s.value=!1})),r}function hm(e){const t=e;return t.headTags=e.resolveTags,t.addEntry=e.push,t.addHeadObjs=e.push,t.addReactiveEntry=(n,s)=>{const i=$r(n,s);return i!==void 0?i.dispose:()=>{}},t.removeHeadObjs=()=>{},t.updateDOM=()=>{e.hooks.callHook("entries:updated",e)},t.unhead=e,t}function pm(e,t){const n=um({});return hm(n)}const mm={__name:"HomeView",setup(e){const t=le([]);$r({title:"Lyceum173 Web App",meta:[{name:"description",content:"Інтерактивна система Ліцею 173"},{property:"og:title",content:"Lyceum173 Web App"},{property:"og:description",content:"Інтерактивна система Ліцею 173"},{property:"og:url",content:"https://lyceum173.web.app/"}]}),ri(()=>{t.value=p.filter(s=>s.published===!0)});function n(){Ju.push("/auth/")}return(s,i)=>(K(),q(de,null,[B(Rn),_("main",{class:"main"},[_("div",{class:"main__container"},[_("div",{class:"hero"},[i[4]||(i[4]=_("div",{class:"hero__text"},[_("div",{class:"hero__text__item"}," ІНТЕРАКТИВНА "),_("div",{class:"hero__text__item"},[_("mark",null,"WEB"),te(" ПЛАТФОРМА ")]),_("div",{class:"hero__text__item"},[_("strong",null,"ЛІЦЕЮ 173 ")])],-1)),_("div",{class:"hero__card"},[i[0]||(i[0]=te(" Інтерактивна освітня платформа для учнів, вчителів та батьків. ")),i[1]||(i[1]=_("br",null,null,-1)),i[2]||(i[2]=_("br",null,null,-1)),i[3]||(i[3]=te(" Навчайся зручно, ефективно та цікаво. ")),_("button",{onClick:n}," Увійти ")])]),i[5]||(i[5]=os('<br data-v-c41dc4ff><br data-v-c41dc4ff><br data-v-c41dc4ff><section class="about" data-v-c41dc4ff><div class="hr" data-v-c41dc4ff><span data-v-c41dc4ff>ПРО ПЛАТФОРМУ</span></div><strong data-v-c41dc4ff>🎯 Система балів і досягнень</strong> <p data-v-c41dc4ff>— отримуй бали за активність, участь у заходах, навчання та ініціативність. Змагайся з друзями або класами!</p><strong data-v-c41dc4ff>📊 Голосування та опитування</strong><p data-v-c41dc4ff> — впливай на події у ліцеї: обирай теми заходів, учасників конкурсів або фільм для перегляду на перерві. </p><strong data-v-c41dc4ff>🗳️ Соціальні ініціативи</strong><p data-v-c41dc4ff> — пропонуй ідеї, створюй опитування, обговорюй важливі шкільні теми.</p><strong data-v-c41dc4ff>🧠 Ігрові завдання та челенджі</strong><p data-v-c41dc4ff> — пройди квест або вікторину та виграй приємні бонуси.</p><strong data-v-c41dc4ff>🗓️ Календар подій</strong><p data-v-c41dc4ff> — слідкуй за шкільними святами, флешмобами, олімпіадами та тематичними днями</p></section>',4))])]),B(Pn)],64))}},gm=Le(mm,[["__scopeId","data-v-c41dc4ff"]]),vm={class:"main"},_m={class:"main__container"},ym={class:"news"},bm={class:"news-item__content"},wm={class:"news-item__title"},Im={class:"news-item__description"},Tm={class:"news-item__date"},Em={class:"news-item__button"},Sm={key:0,class:"pagination__container"},km={class:"pagination"},Cm=["disabled"],Am={style:{rotate:"180deg",transform:"translateY(-5px)"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},Rm=["onClick"],Pm=["disabled"],Om={__name:"NewsView",setup(e){const t=le([]),n=cs();Sl(),$r({title:"Новини | Lyceum173",meta:[{name:"description",content:"Останні новини з інтерактивного життя ліцею"},{property:"og:title",content:"Новини"},{property:"og:description",content:"Останні новини з інтерактивного життя ліцею"},{property:"og:url",content:"https://lyceum173.web.app/news/"}]});const s=le(parseInt(n.query.page)||1);return bn(()=>n.query.page,i=>{const r=parseInt(i);isNaN(r)||(s.value=r)}),(i,r)=>{const o=Et("router-link");return K(),q(de,null,[B(Rn),_("main",vm,[_("div",_m,[r[8]||(r[8]=_("div",{class:"hero"},[_("div",{class:"hero__text"},[_("div",{class:"hero__text__item"}," НОВИНИ ")])],-1)),_("section",null,[r[7]||(r[7]=_("div",{class:"hr"},[_("span",null,"ОСТАННІ НОВИНИ")],-1)),_("div",ym,[(K(!0),q(de,null,Ji(i.paginatedPosts,a=>(K(),q("div",{key:a.id,class:"news-item"},[_("div",bm,[_("div",wm,[_("h3",null,Oe(a.title),1)]),_("div",Im,[_("p",null,Oe(a.description),1)]),_("div",Tm,[_("p",null,Oe(a.date.split(" ")[1]),1)]),_("button",Em,[B(o,{to:`/news/${a.id}`,"news-item__button":""},{default:pe(()=>r[2]||(r[2]=[te("Перейти ")])),_:2},1032,["to"])]),r[3]||(r[3]=_("div",{class:"news-item__corner"},null,-1)),r[4]||(r[4]=_("div",{class:"news-item__corner"},null,-1))])]))),128))]),t.value.length>8?(K(),q("div",Sm,[_("div",km,[_("button",{onClick:r[0]||(r[0]=a=>i.goToPage(s.value-1)),disabled:s.value===1,style:{padding:"0px"},class:"pagination__item"},[(K(),q("svg",Am,r[5]||(r[5]=[_("path",{d:"M9.00005 6L15 12L9 18",stroke:"#000000","stroke-width":"1.5","stroke-miterlimit":"16","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])))],8,Cm),(K(!0),q(de,null,Ji(i.totalPages,a=>(K(),q("button",{key:a,onClick:c=>i.goToPage(a),class:jt([{current:a===s.value},"pagination__item"])},Oe(a),11,Rm))),128)),_("button",{onClick:r[1]||(r[1]=a=>i.goToPage(s.value+1)),disabled:s.value===i.totalPages,style:{padding:"0px"},class:"pagination__item"},r[6]||(r[6]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},[_("path",{d:"M9.00005 6L15 12L9 18",stroke:"#000000","stroke-width":"1.5","stroke-miterlimit":"16","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,Pm)])])):Sn("",!0)])])]),B(Pn)],64)}}},xm=Le(Om,[["__scopeId","data-v-8118f276"]]),Mm={__name:"NotFound",setup(e){return(t,n)=>(K(),q(de,null,[B(Rn),n[0]||(n[0]=_("main",{class:"main"},[_("div",{class:"main__container"},[_("div",{id:"error"},[_("div",{class:"error-wrap"},[_("h2",null,[te("4"),_("mark",null,"0"),te("4")]),_("p",null,"Сторінку не знайдено")])])])],-1)),B(Pn)],64))}},ya=Le(Mm,[["__scopeId","data-v-3aa16ef1"]]),Lm={class:"main"},Dm={class:"main__container"},Nm={class:"breadcrumbs"},$m={class:"hero"},Um={class:"hero__text"},Hm={class:"hero__text__item"},jm={class:"published-on"},Bm=["innerHTML"],Vm={__name:"NewsPageView",setup(e){cs();const t=le(""),n=le(""),s=le("");return(i,r)=>{const o=Et("router-link");return K(),q(de,null,[B(Rn),_("main",Lm,[_("div",Dm,[_("div",Nm,[B(o,{to:"/"},{default:pe(()=>r[0]||(r[0]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/home-05-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},[_("path",{d:"M2 10.5L10.7506 3.49951C11.481 2.91516 12.519 2.91516 13.2494 3.49951L22 10.5",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),_("path",{d:"M4 9V19.5C4 20.6046 4.89543 21.5 6 21.5H18C19.1046 21.5 20 20.6046 20 19.5V9",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),_("path",{d:"M12 17.5V18.5",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:1}),r[2]||(r[2]=te(" / ")),B(o,{to:"/news/"},{default:pe(()=>r[1]||(r[1]=[te(" Новини ")])),_:1}),r[3]||(r[3]=te(" / "))]),_("div",$m,[_("div",Um,[_("div",Hm,Oe(t.value),1)])]),_("div",jm,Oe(s.value),1),_("section",null,[_("div",{class:"news-content",innerHTML:n.value},null,8,Bm)])])]),B(Pn)],64)}}},Wm=Le(Vm,[["__scopeId","data-v-dff73db7"]]),Fm={},zm={class:"header"},Km={class:"header__container"};function Gm(e,t){const n=Et("router-link");return K(),q("header",zm,[_("div",Km,[B(n,{to:"/manager/"},{default:pe(()=>t[0]||(t[0]=[_("h1",null,[te(" Lyceum173 "),_("mark",null,"Web App")],-1)])),_:1})])])}const fi=Le(Fm,[["render",Gm],["__scopeId","data-v-a0c2aa99"]]),qm={class:"main__container"},Jm={key:0,class:"form-after"},Ym={key:1,class:"form",id:"authForm"},Xm={key:2,class:"page__content"},Zm={__name:"AuthView",setup(e){const t=le(!1);return ri(()=>{document.getElementById("authForm").addEventListener("submit",n=>{n.preventDefault(),t.value=!0})}),(n,s)=>{const i=Et("router-link");return K(),q(de,null,[t.value?(K(),ci(fi,{key:0})):Sn("",!0),_("main",{class:jt(["main",{auth:!t.value}])},[_("div",qm,[t.value?Sn("",!0):(K(),q("div",Jm)),t.value?(K(),q("div",Xm,[_("aside",null,[_("nav",null,[B(i,{to:"/manager/"},{default:pe(()=>s[1]||(s[1]=[te("Головна")])),_:1}),B(i,{to:"/manager/posts/"},{default:pe(()=>s[2]||(s[2]=[te("Публікації")])),_:1}),B(i,{to:"/"},{default:pe(()=>s[3]||(s[3]=[te("Сайт")])),_:1})])]),s[4]||(s[4]=_("div",{class:"content"}," asff ",-1))])):(K(),q("form",Ym,s[0]||(s[0]=[os('<div class="form__content" data-v-d565796d><h2 data-v-d565796d>Sign In</h2><p data-v-d565796d>Адміністрування</p><br data-v-d565796d><div class="input" data-v-d565796d><label for="username" data-v-d565796d>Login</label><input type="text" placeholder="-" id="username" data-v-d565796d></div><div class="input" data-v-d565796d><label for="password" data-v-d565796d>Password</label><input type="password" placeholder="-" id="password" data-v-d565796d></div><br data-v-d565796d><button data-v-d565796d>Увійти</button></div>',1)])))])],2)],64)}}},Qm=Le(Zm,[["__scopeId","data-v-d565796d"]]),eg=()=>{};var ba={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tg=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},Dl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[d],n[f],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ll(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw new ng;const f=r<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const T=l<<6&192|d;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(e){const t=Ll(e);return Dl.encodeByteArray(t,!0)},Nl=function(e){return sg(e).replace(/\./g,"")},$l=function(e){try{return Dl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=()=>ig().__FIREBASE_DEFAULTS__,og=()=>{if(typeof process>"u"||typeof ba>"u")return;const e=ba.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ag=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$l(e[1]);return t&&JSON.parse(t)},Ur=()=>{try{return eg()||rg()||og()||ag()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},cg=e=>{var t,n;return(n=(t=Ur())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ul=()=>{var e;return(e=Ur())===null||e===void 0?void 0:e.config},Hl=e=>{var t;return(t=Ur())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(e){return e.endsWith(".cloudworkstations.dev")}async function ug(e){return(await fetch(e,{credentials:"include"})).ok}const Gn={};function dg(){const e={prod:[],emulator:[]};for(const t of Object.keys(Gn))Gn[t]?e.emulator.push(t):e.prod.push(t);return e}function fg(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let wa=!1;function hg(e,t){if(typeof window>"u"||typeof document>"u"||!Hr(window.location.host)||Gn[e]===t||Gn[e]||wa)return;Gn[e]=t;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=dg().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{wa=!0,o()},f}function u(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=fg(s),g=n("text"),T=document.getElementById(g)||document.createElement("span"),S=n("learnmore"),M=document.getElementById(S)||document.createElement("a"),L=n("preprendIcon"),O=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const A=f.element;a(A),u(M,S);const D=l();c(O,L),A.append(O,T,M,D),document.body.appendChild(A)}r?(T.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Vl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function _g(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="FirebaseError";class ct extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=yg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?bg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ct(i,a,s)}}function bg(e,t){return e.replace(wg,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const wg=/\{\$([^}]+)}/g;function Ig(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Ia(r)&&Ia(o)){if(!tn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ia(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Tg(e,t){const n=new Eg(e,t);return n.subscribe.bind(n)}class Eg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Sg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=Mi),i.error===void 0&&(i.error=Mi),i.complete===void 0&&(i.complete=Mi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Mi(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=1e3,Cg=2,Ag=4*60*60*1e3,Rg=.5;function Ta(e,t=kg,n=Cg){const s=t*Math.pow(n,e),i=Math.round(Rg*s*(Math.random()-.5)*2);return Math.min(Ag,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return e&&e._delegate?e._delegate:e}class ot{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new lg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xg(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Og(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(e){return e===qt?void 0:e}function xg(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const Lg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Dg=se.INFO,Ng={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},$g=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ng[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jr{constructor(t){this.name=t,this._logLevel=Dg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const Ug=(e,t)=>t.some(n=>e instanceof n);let Ea,Sa;function Hg(){return Ea||(Ea=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jg(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,cr=new WeakMap,Fl=new WeakMap,Li=new WeakMap,Br=new WeakMap;function Bg(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n($t(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Wl.set(n,e)}).catch(()=>{}),Br.set(t,e),t}function Vg(e){if(cr.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});cr.set(e,t)}let lr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return cr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $t(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wg(e){lr=e(lr)}function Fg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Di(this),t,...n);return Fl.set(s,t.sort?t.sort():[t]),$t(s)}:jg().includes(e)?function(...t){return e.apply(Di(this),t),$t(Wl.get(this))}:function(...t){return $t(e.apply(Di(this),t))}}function zg(e){return typeof e=="function"?Fg(e):(e instanceof IDBTransaction&&Vg(e),Ug(e,Hg())?new Proxy(e,lr):e)}function $t(e){if(e instanceof IDBRequest)return Bg(e);if(Li.has(e))return Li.get(e);const t=zg(e);return t!==e&&(Li.set(e,t),Br.set(t,e)),t}const Di=e=>Br.get(e);function zl(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=$t(o);return s&&o.addEventListener("upgradeneeded",c=>{s($t(o.result),c.oldVersion,c.newVersion,$t(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kg=["get","getKey","getAll","getAllKeys","count"],Gg=["put","add","delete","clear"],Ni=new Map;function ka(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ni.get(t))return Ni.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Gg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kg.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ni.set(t,r),r}Wg(e=>({...e,get:(t,n,s)=>ka(t,n)||e.get(t,n,s),has:(t,n)=>!!ka(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ur="@firebase/app",Ca="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new jr("@firebase/app"),Yg="@firebase/app-compat",Xg="@firebase/analytics-compat",Zg="@firebase/analytics",Qg="@firebase/app-check-compat",ev="@firebase/app-check",tv="@firebase/auth",nv="@firebase/auth-compat",sv="@firebase/database",iv="@firebase/data-connect",rv="@firebase/database-compat",ov="@firebase/functions",av="@firebase/functions-compat",cv="@firebase/installations",lv="@firebase/installations-compat",uv="@firebase/messaging",dv="@firebase/messaging-compat",fv="@firebase/performance",hv="@firebase/performance-compat",pv="@firebase/remote-config",mv="@firebase/remote-config-compat",gv="@firebase/storage",vv="@firebase/storage-compat",_v="@firebase/firestore",yv="@firebase/ai",bv="@firebase/firestore-compat",wv="firebase",Iv="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]",Tv={[ur]:"fire-core",[Yg]:"fire-core-compat",[Zg]:"fire-analytics",[Xg]:"fire-analytics-compat",[ev]:"fire-app-check",[Qg]:"fire-app-check-compat",[tv]:"fire-auth",[nv]:"fire-auth-compat",[sv]:"fire-rtdb",[iv]:"fire-data-connect",[rv]:"fire-rtdb-compat",[ov]:"fire-fn",[av]:"fire-fn-compat",[cv]:"fire-iid",[lv]:"fire-iid-compat",[uv]:"fire-fcm",[dv]:"fire-fcm-compat",[fv]:"fire-perf",[hv]:"fire-perf-compat",[pv]:"fire-rc",[mv]:"fire-rc-compat",[gv]:"fire-gcs",[vv]:"fire-gcs-compat",[_v]:"fire-fst",[bv]:"fire-fst-compat",[yv]:"fire-vertex","fire-js":"fire-js",[wv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,Ev=new Map,fr=new Map;function Aa(e,t){try{e.container.addComponent(t)}catch(n){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wt(e){const t=e.name;if(fr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;fr.set(t,e);for(const n of Bs.values())Aa(n,e);for(const n of Ev.values())Aa(n,e);return!0}function On(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new an("app","Firebase",Sv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=Iv;function Kl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:dr,automaticDataCollectionEnabled:!0},t),i=s.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=Ul()),!n)throw Ut.create("no-options");const r=Bs.get(i);if(r){if(tn(n,r.options)&&tn(s,r.config))return r;throw Ut.create("duplicate-app",{appName:i})}const o=new Mg(i);for(const c of fr.values())o.addComponent(c);const a=new kv(n,s,o);return Bs.set(i,a),a}function Gl(e=dr){const t=Bs.get(e);if(!t&&e===dr&&Ul())return Kl();if(!t)throw Ut.create("no-app",{appName:e});return t}function st(e,t,n){var s;let i=(s=Tv[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(a.join(" "));return}wt(new ot(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="firebase-heartbeat-database",Av=1,ss="firebase-heartbeat-store";let $i=null;function ql(){return $i||($i=zl(Cv,Av,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ss)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),$i}async function Rv(e){try{const n=(await ql()).transaction(ss),s=await n.objectStore(ss).get(Jl(e));return await n.done,s}catch(t){if(t instanceof ct)bt.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});bt.warn(n.message)}}}async function Ra(e,t){try{const s=(await ql()).transaction(ss,"readwrite");await s.objectStore(ss).put(t,Jl(e)),await s.done}catch(n){if(n instanceof ct)bt.warn(n.message);else{const s=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bt.warn(s.message)}}}function Jl(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=1024,Ov=30;class xv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ov){const o=Dv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){bt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pa(),{heartbeatsToSend:s,unsentEntries:i}=Mv(this._heartbeatsCache.heartbeats),r=Nl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return bt.warn(n),""}}}function Pa(){return new Date().toISOString().substring(0,10)}function Mv(e,t=Pv){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Oa(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oa(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?Vl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ra(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Oa(e){return Nl(JSON.stringify({version:2,heartbeats:e})).length}function Dv(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(e){wt(new ot("platform-logger",t=>new qg(t),"PRIVATE")),wt(new ot("heartbeat",t=>new xv(t),"PRIVATE")),st(ur,Ca,e),st(ur,Ca,"esm2017"),st("fire-js","")}Nv("");var $v="firebase",Uv="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st($v,Uv,"app");function Vr(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hv=Yl,Xl=new an("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=new jr("@firebase/auth");function jv(e,...t){Vs.logLevel<=se.WARN&&Vs.warn(`Auth (${us}): ${e}`,...t)}function Cs(e,...t){Vs.logLevel<=se.ERROR&&Vs.error(`Auth (${us}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,...t){throw Fr(e,...t)}function ze(e,...t){return Fr(e,...t)}function Wr(e,t,n){const s=Object.assign(Object.assign({},Hv()),{[t]:n});return new an("auth","Firebase",s).create(t,{appName:e.name})}function Zt(e){return Wr(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bv(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&at(e,"argument-error"),Wr(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fr(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Xl.create(e,...t)}function j(e,t,...n){if(!e)throw Fr(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Cs(t),new Error(t)}function It(e,t){e||vt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Vv(){return xa()==="http:"||xa()==="https:"}function xa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vv()||jl()||"connection"in navigator)?navigator.onLine:!0}function Fv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n){this.shortDelay=t,this.longDelay=n,It(n>t,"Short delay should be less than long delay!"),this.isMobile=pg()||gg()}get(){return Wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e,t){It(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gv=new ds(3e4,6e4);function Kr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function xn(e,t,n,s,i={}){return Ql(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=ls(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},r);return mg()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Hr(e.emulatorConfig.host)&&(l.credentials="include"),Zl.fetch()(await eu(e,e.config.apiHost,n,a),l)})}async function Ql(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},zv),t);try{const i=new Jv(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw bs(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bs(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw bs(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Wr(e,u,l);at(e,u)}}catch(i){if(i instanceof ct)throw i;at(e,"network-request-failed",{message:String(i)})}}async function qv(e,t,n,s,i={}){const r=await xn(e,t,n,s,i);return"mfaPendingCredential"in r&&at(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function eu(e,t,n,s){const i=`${t}${n}?${s}`,r=e,o=r.config.emulator?zr(e.config,i):`${e.config.apiScheme}://${i}`;return Kv.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Jv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ze(this.auth,"network-request-failed")),Gv.get())})}}function bs(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ze(e,t,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(e,t){return xn(e,"POST","/v1/accounts:delete",t)}async function Ws(e,t){return xn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Xv(e,t=!1){const n=Wt(e),s=await n.getIdToken(t),i=Gr(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qn(Ui(i.auth_time)),issuedAtTime:qn(Ui(i.iat)),expirationTime:qn(Ui(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ui(e){return Number(e)*1e3}function Gr(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=$l(n);return i?JSON.parse(i):(Cs("Failed to decode base64 JWT payload"),null)}catch(i){return Cs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ma(e){const t=Gr(e);return j(t,"internal-error"),j(typeof t.exp<"u","internal-error"),j(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof ct&&Zv(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Zv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(e){var t;const n=e.auth,s=await e.getIdToken(),i=await is(e,Ws(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?tu(r.providerUserInfo):[],a=t_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new pr(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function e_(e){const t=Wt(e);await Fs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function t_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function tu(e){return e.map(t=>{var{providerId:n}=t,s=Vr(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(e,t){const n=await Ql(e,{},async()=>{const s=ls({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=await eu(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Zl.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function s_(e,t){return xn(e,"POST","/v2/accounts:revokeToken",Kr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){j(t.idToken,"internal-error"),j(typeof t.idToken<"u","internal-error"),j(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ma(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){j(t.length!==0,"internal-error");const n=Ma(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await n_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new wn;return s&&(j(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e,t){j(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class We{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=Vr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new pr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await is(this,this.stsTokenManager.getToken(this.auth,t));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Xv(this,t)}reload(){return e_(this)}_assign(t){this!==t&&(j(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new We(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Fs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Zt(this.auth));const t=await this.getIdToken();return await is(this,Yv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:D,isAnonymous:z,providerData:re,stsTokenManager:oe}=n;j(A&&oe,t,"internal-error");const De=wn.fromJSON(this.name,oe);j(typeof A=="string",t,"internal-error"),At(d,t.name),At(f,t.name),j(typeof D=="boolean",t,"internal-error"),j(typeof z=="boolean",t,"internal-error"),At(g,t.name),At(T,t.name),At(S,t.name),At(M,t.name),At(L,t.name),At(O,t.name);const Ne=new We({uid:A,auth:t,email:f,emailVerified:D,displayName:d,isAnonymous:z,photoURL:T,phoneNumber:g,tenantId:S,stsTokenManager:De,createdAt:L,lastLoginAt:O});return re&&Array.isArray(re)&&(Ne.providerData=re.map($e=>Object.assign({},$e))),M&&(Ne._redirectEventId=M),Ne}static async _fromIdTokenResponse(t,n,s=!1){const i=new wn;i.updateFromServerResponse(n);const r=new We({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Fs(r),r}static async _fromGetAccountInfoResponse(t,n,s){const i=n.users[0];j(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?tu(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new wn;a.updateFromIdToken(s);const c=new We({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new pr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new Map;function _t(e){It(e instanceof Function,"Expected a class definition");let t=La.get(e);return t?(It(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,La.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}nu.type="NONE";const Da=nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e,t,n){return`firebase:${e}:${t}:${n}`}class In{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=As(this.userKey,i.apiKey,r),this.fullPersistenceKey=As("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Ws(this.auth,{idToken:t}).catch(()=>{});return n?We._fromGetAccountInfoResponse(this.auth,n,t):null}return We._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new In(_t(Da),t,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||_t(Da);const o=As(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const f=await Ws(t,{idToken:u}).catch(()=>{});if(!f)break;d=await We._fromGetAccountInfoResponse(t,f,u)}else d=We._fromJSON(t,u);l!==r&&(a=d),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new In(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new In(r,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ou(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(su(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(cu(t))return"Blackberry";if(lu(t))return"Webos";if(iu(t))return"Safari";if((t.includes("chrome/")||ru(t))&&!t.includes("edge/"))return"Chrome";if(au(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function su(e=Ie()){return/firefox\//i.test(e)}function iu(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ru(e=Ie()){return/crios\//i.test(e)}function ou(e=Ie()){return/iemobile/i.test(e)}function au(e=Ie()){return/android/i.test(e)}function cu(e=Ie()){return/blackberry/i.test(e)}function lu(e=Ie()){return/webos/i.test(e)}function qr(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function i_(e=Ie()){var t;return qr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function r_(){return vg()&&document.documentMode===10}function uu(e=Ie()){return qr(e)||au(e)||lu(e)||cu(e)||/windows phone/i.test(e)||ou(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(e,t=[]){let n;switch(e){case"Browser":n=Na(Ie());break;case"Worker":n=`${Na(Ie())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=r=>new Promise((o,a)=>{try{const c=t(r);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(e,t={}){return xn(e,"GET","/v2/passwordPolicy",Kr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=6;class l_{constructor(t){var n,s,i,r;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:c_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=t.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,i,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t,n,s,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $a(this),this.idTokenSubscription=new $a(this),this.beforeStateQueue=new o_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Ws(this,{idToken:t}),s=await We._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Fs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Fv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(Zt(this));const n=t?Wt(t):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&j(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await a_(this),n=new l_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new an("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await s_(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&_t(t)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&jv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(e){return Wt(e)}class $a{constructor(t){this.auth=t,this.observer=null,this.addObserver=Tg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d_(e){Jr=e}function f_(e){return Jr.loadJS(e)}function h_(){return Jr.gapiScript}function p_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(e,t){const n=On(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(tn(r,t??{}))return i;at(i,"already-initialized")}return n.initialize({options:t})}function g_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(_t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function v_(e,t,n){const s=hi(e);j(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=fu(t),{host:o,port:a}=__(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){j(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),j(tn(l,s.config.emulator)&&tn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Hr(o)?(ug(`${r}//${o}${c}`),hg("Auth",!0)):y_()}function fu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function __(e){const t=fu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ua(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ua(o)}}}function Ua(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function y_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t){return qv(e,"POST","/v1/accounts:signInWithIdp",Kr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="http://localhost";class nn extends hu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):at("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=Vr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new nn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Tn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Tn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Tn(t,n)}buildRequest(){const t={requestUri:b_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ls(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Yr{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends fs{constructor(){super("facebook.com")}static credential(t){return nn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return nn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return gt.credential(n,s)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends fs{constructor(){super("github.com")}static credential(t){return nn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Lt.credential(t.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends fs{constructor(){super("twitter.com")}static credential(t,n){return nn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Dt.credential(n,s)}catch{return null}}}Dt.TWITTER_SIGN_IN_METHOD="twitter.com";Dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await We._fromIdTokenResponse(t,s,i),o=Ha(s);return new An({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=Ha(s);return new An({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function Ha(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs extends ct{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new zs(t,n,s,i)}}function pu(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(e,r,t,s):r})}async function w_(e,t,n=!1){const s=await is(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return An._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(e,t,n=!1){const{auth:s}=e;if(tt(s.app))return Promise.reject(Zt(s));const i="reauthenticate";try{const r=await is(e,pu(s,i,t,e),n);j(r.idToken,s,"internal-error");const o=Gr(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(e.uid===a,s,"user-mismatch"),An._forOperation(e,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&at(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t,n=!1){if(tt(e.app))return Promise.reject(Zt(e));const s="signIn",i=await pu(e,s,t),r=await An._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}function E_(e,t,n,s){return Wt(e).onIdTokenChanged(t,n,s)}function S_(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}const Ks="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ks,"1"),this.storage.removeItem(Ks),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=1e3,C_=10;class gu extends mu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=uu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);r_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,C_):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},k_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}gu.type="LOCAL";const A_=gu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends mu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}vu.type="SESSION";const _u=vu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new pi(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await R_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Xr("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return window}function O_(e){it().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function x_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function L_(){return yu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="firebaseLocalStorageDb",D_=1,Gs="firebaseLocalStorage",wu="fbase_key";class hs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mi(e,t){return e.transaction([Gs],t?"readwrite":"readonly").objectStore(Gs)}function N_(){const e=indexedDB.deleteDatabase(bu);return new hs(e).toPromise()}function mr(){const e=indexedDB.open(bu,D_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Gs,{keyPath:wu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Gs)?t(s):(s.close(),await N_(),t(await mr()))})})}async function ja(e,t,n){const s=mi(e,!0).put({[wu]:t,value:n});return new hs(s).toPromise()}async function $_(e,t){const n=mi(e,!1).get(t),s=await new hs(n).toPromise();return s===void 0?null:s.value}function Ba(e,t){const n=mi(e,!0).delete(t);return new hs(n).toPromise()}const U_=800,H_=3;class Iu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mr(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>H_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(L_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await x_(),!this.activeServiceWorker)return;this.sender=new P_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||M_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mr();return await ja(t,Ks,"1"),await Ba(t,Ks),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ja(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>$_(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ba(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=mi(i,!1).getAll();return new hs(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iu.type="LOCAL";const j_=Iu;new ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e,t){return t?_t(t):(j(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends hu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Tn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Tn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Tn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function B_(e){return T_(e.auth,new Zr(e),e.bypassAuthState)}function V_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),I_(n,new Zr(e),e.bypassAuthState)}async function W_(e){const{auth:t,user:n}=e;return j(n,t,"internal-error"),w_(n,new Zr(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return B_;case"linkViaPopup":case"linkViaRedirect":return W_;case"reauthViaPopup":case"reauthViaRedirect":return V_;default:at(this.auth,"internal-error")}}resolve(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=new ds(2e3,1e4);async function z_(e,t,n){if(tt(e.app))return Promise.reject(ze(e,"operation-not-supported-in-this-environment"));const s=hi(e);Bv(e,t,Yr);const i=Tu(s,n);return new Jt(s,"signInViaPopup",t,i).executeNotNull()}class Jt extends Eu{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return j(t,this.auth,"internal-error"),t}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const t=Xr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,F_.get())};t()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="pendingRedirect",Rs=new Map;class G_ extends Eu{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Rs.get(this.auth._key());if(!t){try{const s=await q_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Rs.set(this.auth._key(),t)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q_(e,t){const n=X_(t),s=Y_(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function J_(e,t){Rs.set(e._key(),t)}function Y_(e){return _t(e._redirectPersistence)}function X_(e){return As(K_,e.config.apiKey,e.name)}async function Z_(e,t,n=!1){if(tt(e.app))return Promise.reject(Zt(e));const s=hi(e),i=Tu(s,t),o=await new G_(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=10*60*1e3;class ey{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ty(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Su(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Q_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Va(t))}saveEventToCache(t){this.cachedEventUids.add(Va(t)),this.lastProcessedEventTime=Date.now()}}function Va(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Su({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ty(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Su(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(e,t={}){return xn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iy=/^https?/;async function ry(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ny(e);for(const n of t)try{if(oy(n))return}catch{}at(e,"unauthorized-domain")}function oy(e){const t=hr(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!iy.test(n))return!1;if(sy.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new ds(3e4,6e4);function Wa(){const e=it().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cy(e){return new Promise((t,n)=>{var s,i,r;function o(){Wa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wa(),n(ze(e,"network-request-failed"))},timeout:ay.get()})}if(!((i=(s=it().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=it().gapi)===null||r===void 0)&&r.load)o();else{const a=p_("iframefcb");return it()[a]=()=>{gapi.load?o():n(ze(e,"network-request-failed"))},f_(`${h_()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ps=null,t})}let Ps=null;function ly(e){return Ps=Ps||cy(e),Ps}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new ds(5e3,15e3),dy="__/auth/iframe",fy="emulator/auth/iframe",hy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},py=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function my(e){const t=e.config;j(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zr(t,fy):`https://${e.config.authDomain}/${dy}`,s={apiKey:t.apiKey,appName:e.name,v:us},i=py.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ls(s).slice(1)}`}async function gy(e){const t=await ly(e),n=it().gapi;return j(n,e,"internal-error"),t.open({where:document.body,url:my(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hy,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ze(e,"network-request-failed"),a=it().setTimeout(()=>{r(o)},uy.get());function c(){it().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_y=500,yy=600,by="_blank",wy="http://localhost";class Fa{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Iy(e,t,n,s=_y,i=yy){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vy),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Ie().toLowerCase();n&&(a=ru(l)?by:n),su(l)&&(t=t||wy,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,T])=>`${f}${g}=${T},`,"");if(i_(l)&&a!=="_self")return Ty(t||"",a),new Fa(null);const d=window.open(t||"",a,u);j(d,e,"popup-blocked");try{d.focus()}catch{}return new Fa(d)}function Ty(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="__/auth/handler",Sy="emulator/auth/handler",ky=encodeURIComponent("fac");async function za(e,t,n,s,i,r){j(e.config.authDomain,e,"auth-domain-config-required"),j(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:us,eventId:i};if(t instanceof Yr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ig(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(t instanceof fs){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${ky}=${encodeURIComponent(c)}`:"";return`${Cy(e)}?${ls(a).slice(1)}${l}`}function Cy({config:e}){return e.emulator?zr(e,Sy):`https://${e.authDomain}/${Ey}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="webStorageSupport";class Ay{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_u,this._completeRedirectFn=Z_,this._overrideRedirectResult=J_}async _openPopup(t,n,s,i){var r;It((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await za(t,n,s,hr(),i);return Iy(t,o,Xr())}async _openRedirect(t,n,s,i){await this._originValidation(t);const r=await za(t,n,s,hr(),i);return O_(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(It(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await gy(t),s=new ey(t);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hi,{type:Hi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Hi];o!==void 0&&n(!!o),at(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ry(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return uu()||iu()||qr()}}const Ry=Ay;var Ka="@firebase/auth",Ga="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xy(e){wt(new ot("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:du(e)},l=new u_(s,i,r,c);return g_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),wt(new ot("auth-internal",t=>{const n=hi(t.getProvider("auth").getImmediate());return(s=>new Py(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Ka,Ga,Oy(e)),st(Ka,Ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=5*60,Ly=Hl("authIdTokenMaxAge")||My;let qa=null;const Dy=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ly)return;const i=n==null?void 0:n.token;qa!==i&&(qa=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ny(e=Gl()){const t=On(e,"auth");if(t.isInitialized())return t.getImmediate();const n=m_(e,{popupRedirectResolver:Ry,persistence:[j_,A_,_u]}),s=Hl("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Dy(r.toString());S_(n,o,()=>o(n.currentUser)),E_(n,a=>o(a))}}const i=cg("auth");return i&&v_(n,`http://${i}`),n}function $y(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}d_({loadJS(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=ze("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",$y().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xy("Browser");const ku="@firebase/installations",Qr="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=1e4,Au=`w:${Qr}`,Ru="FIS_v2",Uy="https://firebaseinstallations.googleapis.com/v1",Hy=60*60*1e3,jy="installations",By="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new an(jy,By,Vy);function Pu(e){return e instanceof ct&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou({projectId:e}){return`${Uy}/projects/${e}/installations`}function xu(e){return{token:e.token,requestStatus:2,expiresIn:Fy(e.expiresIn),creationTime:Date.now()}}async function Mu(e,t){const s=(await t.json()).error;return sn.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Lu({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Wy(e,{refreshToken:t}){const n=Lu(e);return n.append("Authorization",zy(t)),n}async function Du(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Fy(e){return Number(e.replace("s","000"))}function zy(e){return`${Ru} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Ou(e),i=Lu(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Ru,appId:e.appId,sdkVersion:Au},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Du(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:xu(l.authToken)}}else throw await Mu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=/^[cdef][\w-]{21}$/,gr="";function Jy(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Yy(e);return qy.test(n)?n:gr}catch{return gr}}function Yy(e){return Gy(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=new Map;function Uu(e,t){const n=gi(e);Hu(n,t),Xy(n,t)}function Hu(e,t){const n=$u.get(e);if(n)for(const s of n)s(t)}function Xy(e,t){const n=Zy();n&&n.postMessage({key:e,fid:t}),Qy()}let Yt=null;function Zy(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=e=>{Hu(e.data.key,e.data.fid)}),Yt}function Qy(){$u.size===0&&Yt&&(Yt.close(),Yt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="firebase-installations-database",tb=1,rn="firebase-installations-store";let ji=null;function eo(){return ji||(ji=zl(eb,tb,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(rn)}}})),ji}async function qs(e,t){const n=gi(e),i=(await eo()).transaction(rn,"readwrite"),r=i.objectStore(rn),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Uu(e,t.fid),t}async function ju(e){const t=gi(e),s=(await eo()).transaction(rn,"readwrite");await s.objectStore(rn).delete(t),await s.done}async function vi(e,t){const n=gi(e),i=(await eo()).transaction(rn,"readwrite"),r=i.objectStore(rn),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Uu(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(e){let t;const n=await vi(e.appConfig,s=>{const i=nb(s),r=sb(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===gr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nb(e){const t=e||{fid:Jy(),registrationStatus:0};return Bu(t)}function sb(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(sn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=ib(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:rb(e)}:{installationEntry:t}}async function ib(e,t){try{const n=await Ky(e,t);return qs(e.appConfig,n)}catch(n){throw Pu(n)&&n.customData.serverCode===409?await ju(e.appConfig):await qs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function rb(e){let t=await Ja(e.appConfig);for(;t.registrationStatus===1;)await Nu(100),t=await Ja(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await to(e);return s||n}return t}function Ja(e){return vi(e,t=>{if(!t)throw sn.create("installation-not-found");return Bu(t)})}function Bu(e){return ob(e)?{fid:e.fid,registrationStatus:0}:e}function ob(e){return e.registrationStatus===1&&e.registrationTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab({appConfig:e,heartbeatServiceProvider:t},n){const s=cb(e,n),i=Wy(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Au,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Du(()=>fetch(s,a));if(c.ok){const l=await c.json();return xu(l)}else throw await Mu("Generate Auth Token",c)}function cb(e,{fid:t}){return`${Ou(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(e,t=!1){let n;const s=await vi(e.appConfig,r=>{if(!Vu(r))throw sn.create("not-registered");const o=r.authToken;if(!t&&db(o))return r;if(o.requestStatus===1)return n=lb(e,t),r;{if(!navigator.onLine)throw sn.create("app-offline");const a=hb(r);return n=ub(e,a),a}});return n?await n:s.authToken}async function lb(e,t){let n=await Ya(e.appConfig);for(;n.authToken.requestStatus===1;)await Nu(100),n=await Ya(e.appConfig);const s=n.authToken;return s.requestStatus===0?no(e,t):s}function Ya(e){return vi(e,t=>{if(!Vu(t))throw sn.create("not-registered");const n=t.authToken;return pb(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ub(e,t){try{const n=await ab(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await qs(e.appConfig,s),n}catch(n){if(Pu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ju(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qs(e.appConfig,s)}throw n}}function Vu(e){return e!==void 0&&e.registrationStatus===2}function db(e){return e.requestStatus===2&&!fb(e)}function fb(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Hy}function hb(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function pb(e){return e.requestStatus===1&&e.requestTime+Cu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(e){const t=e,{installationEntry:n,registrationPromise:s}=await to(t);return s?s.catch(console.error):no(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(e,t=!1){const n=e;return await vb(n),(await no(n,t)).token}async function vb(e){const{registrationPromise:t}=await to(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(e){if(!e||!e.options)throw Bi("App Configuration");if(!e.name)throw Bi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Bi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Bi(e){return sn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="installations",yb="installations-internal",bb=e=>{const t=e.getProvider("app").getImmediate(),n=_b(t),s=On(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},wb=e=>{const t=e.getProvider("app").getImmediate(),n=On(t,Wu).getImmediate();return{getId:()=>mb(n),getToken:i=>gb(n,i)}};function Ib(){wt(new ot(Wu,bb,"PUBLIC")),wt(new ot(yb,wb,"PRIVATE"))}Ib();st(ku,Qr);st(ku,Qr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="analytics",Tb="firebase_id",Eb="origin",Sb=60*1e3,kb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",so="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new jr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new an("analytics","Analytics",Cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(e){if(!e.startsWith(so)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return ke.warn(t.message),""}return e}function Fu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Rb(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Pb(e,t){const n=Rb("firebase-js-sdk-policy",{createScriptURL:Ab}),s=document.createElement("script"),i=`${so}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Ob(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xb(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const c=(await Fu(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){ke.error(a)}e("config",i,r)}async function Mb(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Fu(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){ke.error(r)}}function Lb(e,t,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await Mb(e,t,n,a,c)}else if(r==="config"){const[a,c]=o;await xb(e,t,n,s,a,c)}else if(r==="consent"){const[a,c]=o;e("consent",a,c)}else if(r==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(r==="set"){const[a]=o;e("set",a)}else e(r,...o)}catch(a){ke.error(a)}}return i}function Db(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Lb(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function Nb(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(so)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b=30,Ub=1e3;class Hb{constructor(t={},n=Ub){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const zu=new Hb;function jb(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Bb(e){var t;const{appId:n,apiKey:s}=e,i={method:"GET",headers:jb(s)},r=kb.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Vb(e,t=zu,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw Me.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Me.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zb;return setTimeout(async()=>{a.abort()},Sb),Ku({appId:s,apiKey:i,measurementId:r},o,a,t)}async function Ku(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=zu){var r;const{appId:o,measurementId:a}=e;try{await Wb(s,t)}catch(c){if(a)return ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Bb(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Fb(l)){if(i.deleteThrottleMetadata(o),a)return ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Ta(n,i.intervalMillis,$b):Ta(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),ke.debug(`Calling attemptFetch again in ${u} millis`),Ku(e,d,s,i)}}function Wb(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Fb(e){if(!(e instanceof ct)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class zb{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Kb(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o=Object.assign(Object.assign({},s),{send_to:r});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gb(){if(Bl())try{await Vl()}catch(e){return ke.warn(Me.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ke.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qb(e,t,n,s,i,r,o){var a;const c=Vb(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ke.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ke.error(g)),t.push(c);const l=Gb().then(g=>{if(g)return s.getId()}),[u,d]=await Promise.all([c,l]);Nb(r)||Pb(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Eb]="firebase",f.update=!0,d!=null&&(f[Tb]=d),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(t){this.app=t}_delete(){return delete Jn[this.app.options.appId],Promise.resolve()}}let Jn={},Xa=[];const Za={};let Vi="dataLayer",Yb="gtag",Qa,Gu,ec=!1;function Xb(){const e=[];if(jl()&&e.push("This is a browser extension environment."),_g()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});ke.warn(n.message)}}function Zb(e,t,n){Xb();const s=e.options.appId;if(!s)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Jn[s]!=null)throw Me.create("already-exists",{id:s});if(!ec){Ob(Vi);const{wrappedGtag:r,gtagCore:o}=Db(Jn,Xa,Za,Vi,Yb);Gu=r,Qa=o,ec=!0}return Jn[s]=qb(e,Xa,Za,t,Qa,Vi,n),new Jb(e)}function Qb(e=Gl()){e=Wt(e);const t=On(e,Js);return t.isInitialized()?t.getImmediate():ew(e)}function ew(e,t={}){const n=On(e,Js);if(n.isInitialized()){const i=n.getImmediate();if(tn(t,n.getOptions()))return i;throw Me.create("already-initialized")}return n.initialize({options:t})}function tw(e,t,n,s){e=Wt(e),Kb(Gu,Jn[e.app.options.appId],t,n,s).catch(i=>ke.error(i))}const tc="@firebase/analytics",nc="0.10.16";function nw(){wt(new ot(Js,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Zb(s,i,n)},"PUBLIC")),wt(new ot("analytics-internal",e,"PRIVATE")),st(tc,nc),st(tc,nc,"esm2017");function e(t){try{const n=t.getProvider(Js).getImmediate();return{logEvent:(s,i,r)=>tw(n,s,i,r)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}nw();const sw={apiKey:"AIzaSyCNn8n_u8gURaacoDCP6Wo6o4ZpJGLdF_c",authDomain:"auth-lyceum173.web.app",projectId:"auth-lyceum173",storageBucket:"auth-lyceum173.firebasestorage.app",messagingSenderId:"171877473995",appId:"1:171877473995:web:55c62158d7db7c44f7054e",measurementId:"G-MRVK2QBQHB"},qu=Kl(sw),iw=Ny(qu),rw=new gt;Qb(qu);const ow={class:"main__container"},aw={key:0,class:"form-after"},cw={key:1,class:"form",id:"authForm"},lw={key:2,class:"page__content"},uw={__name:"UserAuth",setup(e){const t=le(!1);ri(()=>{document.getElementById("authForm").addEventListener("submit",s=>{s.preventDefault()})});const n=()=>{document.getElementById("auth-button-text").classList.add("hide"),document.getElementById("auth-button-loading").classList.add("show"),z_(iw,rw).then(s=>{console.log(s)})};return(s,i)=>{const r=Et("router-link");return K(),q(de,null,[t.value?(K(),ci(fi,{key:0})):Sn("",!0),_("main",{class:jt(["main",{auth:!t.value}])},[_("div",ow,[t.value?Sn("",!0):(K(),q("div",aw)),t.value?(K(),q("div",lw,[_("aside",null,[_("nav",null,[B(r,{to:"/manager/"},{default:pe(()=>i[10]||(i[10]=[te("Головна")])),_:1}),B(r,{to:"/manager/posts/"},{default:pe(()=>i[11]||(i[11]=[te("Публікації")])),_:1}),B(r,{to:"/"},{default:pe(()=>i[12]||(i[12]=[te("Сайт")])),_:1})])]),i[13]||(i[13]=_("div",{class:"content"}," asff ",-1))])):(K(),q("form",cw,[_("div",{class:"form__content"},[i[1]||(i[1]=_("h2",null,"Вхід",-1)),i[2]||(i[2]=_("p",null,"Lyceum173 Web App",-1)),i[3]||(i[3]=_("br",null,null,-1)),i[4]||(i[4]=_("p",null,"Увійдіть використовуючи шкільни пошту",-1)),i[5]||(i[5]=_("p",null,[_("strong",null,"mail@lyceum173.kyiv.ua")],-1)),i[6]||(i[6]=_("br",null,null,-1)),i[7]||(i[7]=_("br",null,null,-1)),_("button",{onClick:n},i[0]||(i[0]=[_("span",{id:"auth-button-text"}," Увійти ",-1),_("div",{class:"loading",id:"auth-button-loading"},[_("span"),_("span"),_("span")],-1)])),i[8]||(i[8]=_("br",null,null,-1)),i[9]||(i[9]=_("p",{class:"comment"},[te("Використовуючи цей додаток Ви погоджуєтесь з "),_("a",{class:"policy",href:"/privacy-policy",target:"_blank"},"політикою конфіденційності"),te(" та "),_("a",{class:"policy",href:"/terms-of-service",target:"_blank"},"умовами користування")],-1))])]))])],2)],64)}}},dw=Le(uw,[["__scopeId","data-v-143af504"]]),fw={class:"main__container"},hw={class:"page__content"},pw={class:"content"},mw={class:"post-actions"},gw=["onClick"],vw={key:0,class:"publish"},_w={key:1},yw=["onClick"],bw={__name:"PostsView",setup(e){const t=Sl(),n=le(!1),s=le([]),i=o=>{t.push(`/manager/posts/${o}/edit`)},r=o=>{t.push(`/news/${o}/`)};return setTimeout(()=>{n.value=!0},1e3),(o,a)=>{const c=Et("router-link");return K(),q(de,null,[B(fi,{tech:""}),_("main",{class:jt(["main",{auth:!n.value}]),cms:""},[_("div",fw,[_("div",hw,[_("aside",null,[_("nav",null,[B(c,{to:"/manager/"},{default:pe(()=>a[0]||(a[0]=[te("Головна")])),_:1}),B(c,{to:"/manager/posts/"},{default:pe(()=>a[1]||(a[1]=[te("Публікації")])),_:1}),B(c,{to:"/"},{default:pe(()=>a[2]||(a[2]=[te("Сайт")])),_:1})])]),_("div",pw,[a[6]||(a[6]=_("div",{class:"comment"},"Публікації",-1)),_("table",null,[a[5]||(a[5]=_("thead",null,[_("th",null,"№"),_("th",null,"Назва"),_("th",null,"Опис"),_("th",null,"Дії"),_("th",null,"Дата публікації"),_("th",null,"URL")],-1)),_("tbody",null,[(K(!0),q(de,null,Ji(s.value,(l,u)=>(K(),q("tr",null,[_("td",null,Oe(u+1),1),_("td",null,[_("div",null,Oe(l.title),1)]),_("td",null,Oe(l.description),1),_("td",null,[_("div",mw,[_("button",{onClick:d=>i(l.id)},a[3]||(a[3]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/edit-03-solid-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[_("path",{d:"M19.5371 10.4763L21.0911 8.92233C21.9697 8.04364 21.9697 6.61899 21.091 5.74032L18.2595 2.90897C17.3809 2.03033 15.9563 2.03034 15.0776 2.90901L13.5237 4.46293L19.5371 10.4763Z",fill:"#FFFFFFFF"}),_("path",{d:"M18.4764 11.537L9.97772 20.0359C9.57751 20.4361 9.06355 20.7031 8.50599 20.8004L3.12908 21.7388C2.88849 21.7808 2.64251 21.703 2.46981 21.5303C2.2971 21.3576 2.21931 21.1117 2.2613 20.8711L3.1996 15.4945C3.29691 14.9369 3.56389 14.423 3.9641 14.0227L12.4631 5.5236L18.4764 11.537Z",fill:"#FFFFFFFF"})],-1)]),8,gw),l.published?(K(),q("button",_w,"Зняти з публікації ")):(K(),q("button",vw,"Опублікувати")),l.published?(K(),q("button",{key:2,onClick:d=>r(l.id)},a[4]||(a[4]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/view-solid-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.3815 12.1545L22.3754 12.1633C22.2302 12.372 21.8157 12.9676 21.5581 13.3017C21.0364 13.9783 20.2801 14.8824 19.3424 15.7891C17.4969 17.5738 14.814 19.5 11.75 19.5C8.68603 19.5 6.00305 17.5738 4.15756 15.7891C3.21994 14.8824 2.46362 13.9783 1.94192 13.3017C1.68461 12.968 1.27049 12.373 1.12481 12.1636L1.12477 12.1636L1.11818 12.1541C0.960607 11.9077 0.960607 11.5923 1.11818 11.3459L1.12475 11.3365C1.27037 11.1272 1.68457 10.532 1.94192 10.1983C2.46362 9.52169 3.21994 8.61758 4.15756 7.71086C6.00305 5.92619 8.68603 4 11.75 4C14.814 4 17.4969 5.92619 19.3424 7.71086C20.2801 8.61758 21.0364 9.52169 21.5581 10.1983C21.8155 10.5321 22.2298 11.1275 22.3754 11.3366L22.3818 11.3459C22.5394 11.5923 22.5391 11.9082 22.3815 12.1545ZM11.75 15.5C9.67893 15.5 8 13.8211 8 11.75C8 9.67893 9.67893 8 11.75 8C13.8211 8 15.5 9.67893 15.5 11.75C15.5 13.8211 13.8211 15.5 11.75 15.5Z",fill:"#FFFFFFFF"})],-1)]),8,yw)):Sn("",!0)])]),_("td",null,Oe(l.date),1),_("td",null,Oe(l.id),1)]))),256))])])])])])],2)],64)}}},ww=Le(bw,[["__scopeId","data-v-9ca69502"]]),Iw={};function Tw(e,t){const n=Et("router-link");return K(),q("aside",null,[_("nav",null,[B(n,{to:"/manager/"},{default:pe(()=>t[0]||(t[0]=[_("p",null,"Головна",-1)])),_:1}),B(n,{to:"/manager/posts/"},{default:pe(()=>t[1]||(t[1]=[_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/sticky-note-02-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[_("path",{d:"M21.8999 14.975L19.0509 14.2627C18.4846 14.1211 17.9179 14.4927 17.8219 15.0685L17.0214 19.8715M16.4626 20.1344L10.8767 21.5308C9.83026 21.7924 8.76489 21.1771 8.46857 20.14L5.54944 9.92305C5.24599 8.86098 5.86098 7.75401 6.92305 7.45056L17.0536 4.5561C18.1248 4.25006 19.2395 4.87817 19.5326 5.95291L21.6946 13.8803C21.8835 14.5727 21.6868 15.3132 21.1793 15.8207L17.3917 19.6083C17.1354 19.8646 16.8142 20.0464 16.4626 20.1344Z",stroke:"#FFFFFFFF","stroke-width":"1.5"}),_("path",{d:"M8 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V5",stroke:"#FFFFFFFF","stroke-width":"1.5"})],-1),_("p",null,"Публікації",-1)])),_:1}),B(n,{to:"/"},{default:pe(()=>t[2]||(t[2]=[te("Сайт")])),_:1})])])}const Ew=Le(Iw,[["render",Tw],["__scopeId","data-v-dc37c9ab"]]),Sw={class:"main__container"},kw={class:"page__content"},Cw={class:"content"},Aw={class:"post-edit"},Rw={class:"input"},Pw={class:"input"},Ow={__name:"PostView",setup(e){const t=cs();le(t.params.id);const n=le(!1),s=le({});return le(null),(i,r)=>{const o=Et("Editor");return K(),q(de,null,[B(fi,{tech:""}),_("main",{class:jt(["main",{auth:!n.value}]),cms:""},[_("div",Sw,[_("div",kw,[B(Ew),_("div",Cw,[r[7]||(r[7]=_("div",{class:"comment"},"Публікації",-1)),r[8]||(r[8]=_("br",null,null,-1)),_("div",Aw,[_("div",Rw,[r[4]||(r[4]=_("label",{for:"title"},"Title",-1)),fo(_("input",{type:"text",id:"title","onUpdate:modelValue":r[0]||(r[0]=a=>s.value.title=a)},null,512),[[Uo,s.value.title]])]),_("div",Pw,[r[5]||(r[5]=_("label",{for:"title"},"Опис",-1)),fo(_("input",{type:"text",id:"title","onUpdate:modelValue":r[1]||(r[1]=a=>s.value.description=a)},null,512),[[Uo,s.value.description]])]),r[6]||(r[6]=_("br",null,null,-1)),_("button",{onClick:r[2]||(r[2]=(...a)=>i.logHtml&&i.logHtml(...a))},"Log"),B(o,{modelValue:s.value.content,"onUpdate:modelValue":r[3]||(r[3]=a=>s.value.content=a),"api-key":"h6kkl7o9fencgnuc885qssdmevh4s162qqazim8y1nni16j1",init:{height:300,menubar:!1,plugins:"code",toolbar:"undo redo | styles | bold italic underline strikethrough superscript subscript codeformat | alignleft aligncenter alignright alignjustify | outdent indent | code"}},null,8,["modelValue"])])])])])],2)],64)}}},xw=Le(Ow,[["__scopeId","data-v-56fef5da"]]),Mw={__name:"PrivacyPolicy",setup(e){return cs(),le(""),le(""),le(""),(t,n)=>(K(),q(de,null,[B(Rn),n[0]||(n[0]=os('<main class="main" data-v-e3f53a6d><div class="main__container" data-v-e3f53a6d><div class="hero" data-v-e3f53a6d><div class="hero__text" data-v-e3f53a6d><div class="hero__text__item" data-v-e3f53a6d> Політика Конфіденційності </div></div></div><section data-v-e3f53a6d><p class="published-on" data-v-e3f53a6d>Дата набуття чинності: 4 червня 2025 р.</p><p data-v-e3f53a6d>Вітаємо у вебдодатку Lyceum173 (далі — «ми», «наш» або «сервіс»). Ми поважаємо вашу приватність і прагнемо захищати вашу персональну інформацію. </p><h3 data-v-e3f53a6d>1. Яку інформацію ми збираємо</h3><p data-v-e3f53a6d>Ми можемо збирати наступні типи інформації:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>Інформація з Google-акаунту (ім’я, електронна пошта, зображення профілю) — при вході через Google.</li><li data-v-e3f53a6d>Інформація, яку ви надаєте вручну — наприклад, якщо ви заповнюєте форми на сайті.</li></ul><h3 data-v-e3f53a6d>2. Як ми використовуємо інформацію</h3><ul data-v-e3f53a6d><li data-v-e3f53a6d>Щоб надати вам доступ до функцій додатку.</li><li data-v-e3f53a6d>Для автентифікації через Google.</li><li data-v-e3f53a6d>Щоб покращити наш сервіс.</li><li data-v-e3f53a6d>Для безпеки та запобігання шахрайству.</li><li data-v-e3f53a6d>Для обмеження додатку для учнів Ліцею173</li></ul><h3 data-v-e3f53a6d>3. Чи передаємо ми дані третім особам?</h3><p data-v-e3f53a6d>Ні, ми не продаємо, не обмінюємо і не передаємо ваші особисті дані третім особам, за винятком:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>У випадку офіційного запиту з боку керівництва ліцею з обґрунтованою метою (наприклад, для адміністративних чи освітніх потреб). </li><li data-v-e3f53a6d>У випадках, передбачених чинним законодавством України. </li></ul><h3 data-v-e3f53a6d>4. Ваші права</h3><p data-v-e3f53a6d>Ви маєте право:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>Отримати доступ до своїх даних.</li><li data-v-e3f53a6d>Вимагати їх оновлення або видалення.</li><li data-v-e3f53a6d>Відкликати згоду на обробку даних. Для цього напишіть на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-e3f53a6d>пошту технічної підтримки</a>.</li><li data-v-e3f53a6d></li></ul><h3 data-v-e3f53a6d>5. Безпека</h3><p data-v-e3f53a6d> Ми впроваджуємо відповідні технічні та організаційні заходи для захисту ваших даних. </p><h3 data-v-e3f53a6d>6. Зміни до політики</h3><p data-v-e3f53a6d>Ми можемо оновлювати цю політику. Зміни будуть опубліковані на цій сторінці. </p><h3 data-v-e3f53a6d>7. Контакти</h3><p data-v-e3f53a6d>Якщо у вас є питання щодо цієї політики, звертайтесь на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-e3f53a6d>chat-support@lyceum173.kyiv.ua</a></p></section></div></main>',1)),B(Pn)],64))}},Lw=Le(Mw,[["__scopeId","data-v-e3f53a6d"]]),Dw={__name:"TOSView",setup(e){return cs(),le(""),le(""),le(""),(t,n)=>(K(),q(de,null,[B(Rn),n[0]||(n[0]=os('<main class="main" data-v-3e9623ad><div class="main__container" data-v-3e9623ad><div class="hero" data-v-3e9623ad><div class="hero__text" data-v-3e9623ad><div class="hero__text__item" data-v-3e9623ad> Умови користування </div></div></div><section data-v-3e9623ad><p class="published-on" data-v-3e9623ad>Дата набуття чинності: 4 червня 2025 р.</p><p data-v-3e9623ad>Будь ласка, уважно прочитайте ці умови перед використанням вебдодатку «Ліцей №173». Використовуючи наш додаток, ви погоджуєтесь з наведеними нижче умовами. Якщо ви не згодні з будь-яким з пунктів, будь ласка, не використовуйте сервіс. </p><h3 data-v-3e9623ad>1. Загальні положення</h3><p data-v-3e9623ad>Цей додаток створений для учнів, викладачів та адміністрації Ліцею №173 з метою покращення навчального процесу та комунікації.</p><ul data-v-3e9623ad><li data-v-3e9623ad>Інформація з Google-акаунту (ім’я, електронна пошта, зображення профілю) — при вході через Google.</li><li data-v-3e9623ad>Інформація, яку ви надаєте вручну — наприклад, якщо ви заповнюєте форми на сайті.</li></ul><h3 data-v-3e9623ad>2. Реєстрація та аутентифікація</h3><ul data-v-3e9623ad><li data-v-3e9623ad>Для доступу до деяких функцій вам може знадобитися увійти через Google-акаунт або інші засоби авторизації.</li><li data-v-3e9623ad>Ви зобов’язуєтесь використовувати лише свої особисті облікові дані та не передавати доступ третім особам.</li></ul><h3 data-v-3e9623ad>3. Використання сервісу</h3><ul data-v-3e9623ad><li data-v-3e9623ad> Ви погоджуєтесь використовувати додаток лише в освітніх та організаційних цілях. </li><li data-v-3e9623ad>Заборонено завантаження або поширення образливого, неправдивого, неетичного чи незаконного контенту. </li><li data-v-3e9623ad> Адміністрація залишає за собою право тимчасово або повністю обмежити доступ до сервісу при порушенні правил. </li></ul><h3 data-v-3e9623ad>4. Збір та обробка даних</h3><p data-v-3e9623ad>Ви маєте право:</p><ul data-v-3e9623ad><li data-v-3e9623ad>Ми можемо збирати мінімальні персональні дані, необхідні для роботи сервісу.</li><li data-v-3e9623ad>Дані можуть бути передані адміністрації ліцею у разі обґрунтованої потреби.</li><p data-v-3e9623ad>Для детальнішої інформації перегляньте нашу <a href="/privacy-policy" data-v-3e9623ad>Політику конфіденційності</a>.</p></ul><h3 data-v-3e9623ad>5. Відповідальність</h3><p data-v-3e9623ad> Ми прагнемо забезпечити безперебійну та безпечну роботу додатку, але не несемо відповідальності за можливі тимчасові збої, втрату доступу чи інші технічні несправності. </p><h3 data-v-3e9623ad>6. Зміни до умов</h3><p data-v-3e9623ad>Ми можемо періодично оновлювати ці умови. Про важливі зміни ви будете повідомлені у додатку або через електронну пошту. </p><h3 data-v-3e9623ad>7. Контакти</h3><p data-v-3e9623ad>Якщо у вас є питання щодо цих умов, звертайтесь на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-3e9623ad>chat-support@lyceum173.kyiv.ua</a></p></section></div></main>',1)),B(Pn)],64))}},Nw=Le(Dw,[["__scopeId","data-v-3e9623ad"]]),Ju=fp({history:Vh("/"),routes:[{path:"/",name:"home",component:gm},{path:"/privacy-policy",name:"privacy-policy",component:Lw},{path:"/terms-of-service",name:"terms-of-service",component:Nw},{path:"/news/",name:"news",component:xm},{path:"/news/:id/",name:"news-view",component:Wm},{path:"/auth/",name:"auth",component:dw},{path:"/manager/",name:"manager-auth",component:Qm},{path:"/manager/posts/",name:"manager-posts",component:ww},{path:"/manager/posts/:id/edit",name:"manager-post-edit",component:xw},{path:"/:pathMatch(.*)*",name:"404",component:ya},{path:"/:pathMatch(.*\\.json)",name:"BlockJSON",component:ya}]}),$w="0.3.6";console.log(`%cApp Version: ${$w}`,"background: #2dbdaa; color: white; padding: 4px; border-radius: 4px;");const Uw=pm(),io=lh(pp);io.use(Uw);io.use(Ju);io.mount("#app");
