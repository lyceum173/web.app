(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ir(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ie={},bn=[],st=()=>{},ed=()=>!1,ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Tr=e=>e.startsWith("onUpdate:"),be=Object.assign,Er=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},td=Object.prototype.hasOwnProperty,Q=(e,t)=>td.call(e,t),F=Array.isArray,wn=e=>oi(e)==="[object Map]",rc=e=>oi(e)==="[object Set]",z=e=>typeof e=="function",fe=e=>typeof e=="string",Ft=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",oc=e=>(ue(e)||z(e))&&z(e.then)&&z(e.catch),ac=Object.prototype.toString,oi=e=>ac.call(e),nd=e=>oi(e).slice(8,-1),cc=e=>oi(e)==="[object Object]",Sr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Bn=Ir(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},sd=/-(\w)/g,je=ai(e=>e.replace(sd,(t,n)=>n?n.toUpperCase():"")),id=/\B([A-Z])/g,dn=ai(e=>e.replace(id,"-$1").toLowerCase()),ci=ai(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ti=ai(e=>e?`on${ci(e)}`:""),jt=(e,t)=>!Object.is(e,t),Cs=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},lc=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Gi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fo;const li=()=>fo||(fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=fe(s)?cd(s):kr(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(fe(e)||ue(e))return e}const rd=/;(?![^(]*\))/g,od=/:([^]+)/,ad=/\/\*[^]*?\*\//g;function cd(e){const t={};return e.replace(ad,"").split(rd).forEach(n=>{if(n){const s=n.split(od);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function St(e){let t="";if(fe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=St(e[n]);s&&(t+=s+" ")}else if(ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ud=Ir(ld);function uc(e){return!!e||e===""}const dc=e=>!!(e&&e.__v_isRef===!0),me=e=>fe(e)?e:e==null?"":F(e)||ue(e)&&(e.toString===ac||!z(e.toString))?dc(e)?me(e.value):JSON.stringify(e,fc,2):String(e),fc=(e,t)=>dc(t)?fc(e,t.value):wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],r)=>(n[Ei(s,r)+" =>"]=i,n),{})}:rc(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ei(n))}:Ft(t)?Ei(t):ue(t)&&!F(t)&&!cc(t)?String(t):t,Ei=(e,t="")=>{var n;return Ft(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class dd{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function fd(){return Oe}let le;const Si=new WeakSet;class hc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&Oe.active&&Oe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Si.has(this)&&(Si.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ho(this),gc(this);const t=le,n=We;le=this,We=!0;try{return this.fn()}finally{vc(this),le=t,We=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pr(t);this.deps=this.depsTail=void 0,ho(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Si.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ji(this)&&this.run()}get dirty(){return Ji(this)}}let pc=0,Vn,Wn;function mc(e,t=!1){if(e.flags|=8,t){e.next=Wn,Wn=e;return}e.next=Vn,Vn=e}function Cr(){pc++}function Ar(){if(--pc>0)return;if(Wn){let t=Wn;for(Wn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function gc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function vc(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Pr(s),hd(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Ji(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(_c(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function _c(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zn))return;e.globalVersion=Zn;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ji(e)){e.flags&=-3;return}const n=le,s=We;le=e,We=!0;try{gc(e);const i=e.fn(e._value);(t.version===0||jt(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{le=n,We=s,vc(e),e.flags&=-3}}function Pr(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Pr(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hd(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let We=!0;const yc=[];function zt(){yc.push(We),We=!1}function Kt(){const e=yc.pop();We=e===void 0?!0:e}function ho(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=le;le=void 0;try{t()}finally{le=n}}}let Zn=0;class pd{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!le||!We||le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==le)n=this.activeLink=new pd(le,this),le.deps?(n.prevDep=le.depsTail,le.depsTail.nextDep=n,le.depsTail=n):le.deps=le.depsTail=n,bc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=le.depsTail,n.nextDep=void 0,le.depsTail.nextDep=n,le.depsTail=n,le.deps===n&&(le.deps=s)}return n}trigger(t){this.version++,Zn++,this.notify(t)}notify(t){Cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ar()}}}function bc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)bc(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Yi=new WeakMap,nn=Symbol(""),Xi=Symbol(""),Qn=Symbol("");function ve(e,t,n){if(We&&le){let s=Yi.get(e);s||Yi.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Rr),i.map=s,i.key=n),i.track()}}function vt(e,t,n,s,i,r){const o=Yi.get(e);if(!o){Zn++;return}const a=c=>{c&&c.trigger()};if(Cr(),t==="clear")o.forEach(a);else{const c=F(e),l=c&&Sr(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===Qn||!Ft(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Qn)),t){case"add":c?l&&a(o.get("length")):(a(o.get(nn)),wn(e)&&a(o.get(Xi)));break;case"delete":c||(a(o.get(nn)),wn(e)&&a(o.get(Xi)));break;case"set":wn(e)&&a(o.get(nn));break}}Ar()}function gn(e){const t=Z(e);return t===e?t:(ve(t,"iterate",Qn),Ue(e)?t:t.map(_e))}function ui(e){return ve(e=Z(e),"iterate",Qn),e}const md={__proto__:null,[Symbol.iterator](){return ki(this,Symbol.iterator,_e)},concat(...e){return gn(this).concat(...e.map(t=>F(t)?gn(t):t))},entries(){return ki(this,"entries",e=>(e[1]=_e(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(_e),arguments)},find(e,t){return ht(this,"find",e,t,_e,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,_e,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ci(this,"includes",e)},indexOf(...e){return Ci(this,"indexOf",e)},join(e){return gn(this).join(e)},lastIndexOf(...e){return Ci(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return po(this,"reduce",e,t)},reduceRight(e,...t){return po(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return gn(this).toReversed()},toSorted(e){return gn(this).toSorted(e)},toSpliced(...e){return gn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return ki(this,"values",_e)}};function ki(e,t,n){const s=ui(e),i=s[t]();return s!==e&&!Ue(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const gd=Array.prototype;function ht(e,t,n,s,i,r){const o=ui(e),a=o!==e&&!Ue(e),c=o[t];if(c!==gd[t]){const d=c.apply(e,r);return a?_e(d):d}let l=n;o!==e&&(a?l=function(d,f){return n.call(this,_e(d),f,e)}:n.length>2&&(l=function(d,f){return n.call(this,d,f,e)}));const u=c.call(o,l,s);return a&&i?i(u):u}function po(e,t,n,s){const i=ui(e);let r=n;return i!==e&&(Ue(e)?n.length>3&&(r=function(o,a,c){return n.call(this,o,a,c,e)}):r=function(o,a,c){return n.call(this,o,_e(a),c,e)}),i[t](r,...s)}function Ci(e,t,n){const s=Z(e);ve(s,"iterate",Qn);const i=s[t](...n);return(i===-1||i===!1)&&Mr(n[0])?(n[0]=Z(n[0]),s[t](...n)):i}function $n(e,t,n=[]){zt(),Cr();const s=Z(e)[t].apply(e,n);return Ar(),Kt(),s}const vd=Ir("__proto__,__v_isRef,__isVue"),wc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft));function _d(e){Ft(e)||(e=String(e));const t=Z(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Ic{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Ad:kc:r?Sc:Ec).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=F(t);if(!i){let c;if(o&&(c=md[n]))return c;if(n==="hasOwnProperty")return _d}const a=Reflect.get(t,n,ye(t)?t:s);return(Ft(n)?wc.has(n):vd(n))||(i||ve(t,"get",n),r)?a:ye(a)?o&&Sr(n)?a:a.value:ue(a)?i?Ac(a):di(a):a}}class Tc extends Ic{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const c=rn(r);if(!Ue(s)&&!rn(s)&&(r=Z(r),s=Z(s)),!F(t)&&ye(r)&&!ye(s))return c?!1:(r.value=s,!0)}const o=F(t)&&Sr(n)?Number(n)<t.length:Q(t,n),a=Reflect.set(t,n,s,ye(t)?t:i);return t===Z(i)&&(o?jt(s,r)&&vt(t,"set",n,s):vt(t,"add",n,s)),a}deleteProperty(t,n){const s=Q(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&vt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!Ft(n)||!wc.has(n))&&ve(t,"has",n),s}ownKeys(t){return ve(t,"iterate",F(t)?"length":nn),Reflect.ownKeys(t)}}class yd extends Ic{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const bd=new Tc,wd=new yd,Id=new Tc(!0);const Zi=e=>e,ws=e=>Reflect.getPrototypeOf(e);function Td(e,t,n){return function(...s){const i=this.__v_raw,r=Z(i),o=wn(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=i[e](...s),u=n?Zi:t?Qi:_e;return!t&&ve(r,"iterate",c?Xi:nn),{next(){const{value:d,done:f}=l.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Is(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ed(e,t){const n={get(i){const r=this.__v_raw,o=Z(r),a=Z(i);e||(jt(i,a)&&ve(o,"get",i),ve(o,"get",a));const{has:c}=ws(o),l=t?Zi:e?Qi:_e;if(c.call(o,i))return l(r.get(i));if(c.call(o,a))return l(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&ve(Z(i),"iterate",nn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=Z(r),a=Z(i);return e||(jt(i,a)&&ve(o,"has",i),ve(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=Z(a),l=t?Zi:e?Qi:_e;return!e&&ve(c,"iterate",nn),a.forEach((u,d)=>i.call(r,l(u),l(d),o))}};return be(n,e?{add:Is("add"),set:Is("set"),delete:Is("delete"),clear:Is("clear")}:{add(i){!t&&!Ue(i)&&!rn(i)&&(i=Z(i));const r=Z(this);return ws(r).has.call(r,i)||(r.add(i),vt(r,"add",i,i)),this},set(i,r){!t&&!Ue(r)&&!rn(r)&&(r=Z(r));const o=Z(this),{has:a,get:c}=ws(o);let l=a.call(o,i);l||(i=Z(i),l=a.call(o,i));const u=c.call(o,i);return o.set(i,r),l?jt(r,u)&&vt(o,"set",i,r):vt(o,"add",i,r),this},delete(i){const r=Z(this),{has:o,get:a}=ws(r);let c=o.call(r,i);c||(i=Z(i),c=o.call(r,i)),a&&a.call(r,i);const l=r.delete(i);return c&&vt(r,"delete",i,void 0),l},clear(){const i=Z(this),r=i.size!==0,o=i.clear();return r&&vt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Td(i,e,t)}),n}function Or(e,t){const n=Ed(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Sd={get:Or(!1,!1)},kd={get:Or(!1,!0)},Cd={get:Or(!0,!1)};const Ec=new WeakMap,Sc=new WeakMap,kc=new WeakMap,Ad=new WeakMap;function Pd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(e){return e.__v_skip||!Object.isExtensible(e)?0:Pd(nd(e))}function di(e){return rn(e)?e:xr(e,!1,bd,Sd,Ec)}function Cc(e){return xr(e,!1,Id,kd,Sc)}function Ac(e){return xr(e,!0,wd,Cd,kc)}function xr(e,t,n,s,i){if(!ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const o=Rd(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return i.set(e,a),a}function In(e){return rn(e)?In(e.__v_raw):!!(e&&e.__v_isReactive)}function rn(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function Mr(e){return e?!!e.__v_raw:!1}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function Od(e){return!Q(e,"__v_skip")&&Object.isExtensible(e)&&lc(e,"__v_skip",!0),e}const _e=e=>ue(e)?di(e):e,Qi=e=>ue(e)?Ac(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function K(e){return Pc(e,!1)}function xd(e){return Pc(e,!0)}function Pc(e,t){return ye(e)?e:new Md(e,t)}class Md{constructor(t,n){this.dep=new Rr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Z(t),this._value=n?t:_e(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ue(t)||rn(t);t=s?t:Z(t),jt(t,n)&&(this._rawValue=t,this._value=s?t:_e(t),this.dep.trigger())}}function wt(e){return ye(e)?e.value:e}const Ld={get:(e,t,n)=>t==="__v_raw"?e:wt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return ye(i)&&!ye(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Rc(e){return In(e)?e:new Proxy(e,Ld)}class Dd{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Rr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&le!==this)return mc(this,!0),!0}get value(){const t=this.dep.track();return _c(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nd(e,t,n=!1){let s,i;return z(e)?s=e:(s=e.get,i=e.set),new Dd(s,i,n)}const Ts={},$s=new WeakMap;let Zt;function $d(e,t=!1,n=Zt){if(n){let s=$s.get(n);s||$s.set(n,s=[]),s.push(e)}}function Ud(e,t,n=ie){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=n,l=L=>i?L:Ue(L)||i===!1||i===0?_t(L,1):_t(L);let u,d,f,g,I=!1,E=!1;if(ye(e)?(d=()=>e.value,I=Ue(e)):In(e)?(d=()=>l(e),I=!0):F(e)?(E=!0,I=e.some(L=>In(L)||Ue(L)),d=()=>e.map(L=>{if(ye(L))return L.value;if(In(L))return l(L);if(z(L))return c?c(L,2):L()})):z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(f){zt();try{f()}finally{Kt()}}const L=Zt;Zt=u;try{return c?c(e,3,[g]):e(g)}finally{Zt=L}}:d=st,t&&i){const L=d,q=i===!0?1/0:i;d=()=>_t(L(),q)}const x=fd(),M=()=>{u.stop(),x&&x.active&&Er(x.effects,u)};if(r&&t){const L=t;t=(...q)=>{L(...q),M()}}let R=E?new Array(e.length).fill(Ts):Ts;const C=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(t){const q=u.run();if(i||I||(E?q.some((oe,ae)=>jt(oe,R[ae])):jt(q,R))){f&&f();const oe=Zt;Zt=u;try{const ae=[q,R===Ts?void 0:E&&R[0]===Ts?[]:R,g];c?c(t,3,ae):t(...ae),R=q}finally{Zt=oe}}}else u.run()};return a&&a(C),u=new hc(d),u.scheduler=o?()=>o(C,!1):C,g=L=>$d(L,!1,u),f=u.onStop=()=>{const L=$s.get(u);if(L){if(c)c(L,4);else for(const q of L)q();$s.delete(u)}},t?s?C(!0):R=u.run():o?o(C.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function _t(e,t=1/0,n){if(t<=0||!ue(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ye(e))_t(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)_t(e[s],t,n);else if(rc(e)||wn(e))e.forEach(s=>{_t(s,t,n)});else if(cc(e)){for(const s in e)_t(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&_t(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(e,t,n,s){try{return s?e(...s):e()}catch(i){fi(i,t,n)}}function ot(e,t,n,s){if(z(e)){const i=cs(e,t,n,s);return i&&oc(i)&&i.catch(r=>{fi(r,t,n)}),i}if(F(e)){const i=[];for(let r=0;r<e.length;r++)i.push(ot(e[r],t,n,s));return i}}function fi(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ie;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,l)===!1)return}a=a.parent}if(r){zt(),cs(r,null,10,[e,c,l]),Kt();return}}Hd(e,n,i,s,o)}function Hd(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const Ie=[];let Qe=-1;const Tn=[];let xt=null,vn=0;const Oc=Promise.resolve();let Us=null;function Lr(e){const t=Us||Oc;return e?t.then(this?e.bind(this):e):t}function jd(e){let t=Qe+1,n=Ie.length;for(;t<n;){const s=t+n>>>1,i=Ie[s],r=es(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Dr(e){if(!(e.flags&1)){const t=es(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=es(n)?Ie.push(e):Ie.splice(jd(t),0,e),e.flags|=1,xc()}}function xc(){Us||(Us=Oc.then(Lc))}function Bd(e){F(e)?Tn.push(...e):xt&&e.id===-1?xt.splice(vn+1,0,e):e.flags&1||(Tn.push(e),e.flags|=1),xc()}function mo(e,t,n=Qe+1){for(;n<Ie.length;n++){const s=Ie[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ie.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Mc(e){if(Tn.length){const t=[...new Set(Tn)].sort((n,s)=>es(n)-es(s));if(Tn.length=0,xt){xt.push(...t);return}for(xt=t,vn=0;vn<xt.length;vn++){const n=xt[vn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xt=null,vn=0}}const es=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Lc(e){try{for(Qe=0;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Qe<Ie.length;Qe++){const t=Ie[Qe];t&&(t.flags&=-2)}Qe=-1,Ie.length=0,Mc(),Us=null,(Ie.length||Tn.length)&&Lc()}}let ke=null,Dc=null;function Hs(e){const t=ke;return ke=e,Dc=e&&e.type.__scopeId||null,t}function de(e,t=ke,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&So(-1);const r=Hs(t);let o;try{o=e(...i)}finally{Hs(r),s._d&&So(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function js(e,t){if(ke===null)return e;const n=gi(ke),s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[r,o,a,c=ie]=t[i];r&&(z(r)&&(r={mounted:r,updated:r}),r.deep&&_t(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Yt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let c=a.dir[s];c&&(zt(),ot(c,n,8,[e.el,a,e,t]),Kt())}}const Vd=Symbol("_vte"),Wd=e=>e.__isTeleport;function Nr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Nr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Nc(e,t){return z(e)?be({name:e.name},t,{setup:e}):e}function $c(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Bs(e,t,n,s,i=!1){if(F(e)){e.forEach((I,E)=>Bs(I,t&&(F(t)?t[E]:t),n,s,i));return}if(Fn(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bs(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?gi(s.component):s.el,o=i?null:r,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,d=a.setupState,f=Z(d),g=d===ie?()=>!1:I=>Q(f,I);if(l!=null&&l!==c&&(fe(l)?(u[l]=null,g(l)&&(d[l]=null)):ye(l)&&(l.value=null)),z(c))cs(c,a,12,[o,u]);else{const I=fe(c),E=ye(c);if(I||E){const x=()=>{if(e.f){const M=I?g(c)?d[c]:u[c]:c.value;i?F(M)&&Er(M,r):F(M)?M.includes(r)||M.push(r):I?(u[c]=[r],g(c)&&(d[c]=u[c])):(c.value=[r],e.k&&(u[e.k]=c.value))}else I?(u[c]=o,g(c)&&(d[c]=o)):E&&(c.value=o,e.k&&(u[e.k]=o))};o?(x.id=-1,Re(x,n)):x()}}}li().requestIdleCallback;li().cancelIdleCallback;const Fn=e=>!!e.type.__asyncLoader,Uc=e=>e.type.__isKeepAlive;function Hc(e,t){Bc(e,"a",t)}function jc(e,t){Bc(e,"da",t)}function Bc(e,t,n=ge){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(hi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Uc(i.parent.vnode)&&Fd(s,t,n,i),i=i.parent}}function Fd(e,t,n,s){const i=hi(t,e,s,!0);Wc(()=>{Er(s[t],i)},n)}function hi(e,t,n=ge,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{zt();const a=us(n),c=ot(t,n,e,o);return a(),Kt(),c});return s?i.unshift(r):i.push(r),r}}const kt=e=>(t,n=ge)=>{(!ns||e==="sp")&&hi(e,(...s)=>t(...s),n)},zd=kt("bm"),Wt=kt("m"),Kd=kt("bu"),qd=kt("u"),Vc=kt("bum"),Wc=kt("um"),Gd=kt("sp"),Jd=kt("rtg"),Yd=kt("rtc");function Xd(e,t=ge){hi("ec",e,t)}const Zd="components";function lt(e,t){return ef(Zd,e,!0,t)||e}const Qd=Symbol.for("v-ndc");function ef(e,t,n=!0,s=!1){const i=ke||ge;if(i){const r=i.type;{const a=Wf(r,!1);if(a&&(a===t||a===je(t)||a===ci(je(t))))return r}const o=go(i[e]||r[e],t)||go(i.appContext[e],t);return!o&&s?r:o}}function go(e,t){return e&&(e[t]||e[je(t)]||e[ci(je(t))])}function er(e,t,n,s){let i;const r=n,o=F(e);if(o||fe(e)){const a=o&&In(e);let c=!1;a&&(c=!Ue(e),e=ui(e)),i=new Array(e.length);for(let l=0,u=e.length;l<u;l++)i[l]=t(c?_e(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,r)}else if(ue(e))if(e[Symbol.iterator])i=Array.from(e,(a,c)=>t(a,c,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];i[c]=t(e[u],u,c,r)}}else i=[];return i}const tr=e=>e?ll(e)?gi(e):tr(e.parent):null,zn=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>tr(e.parent),$root:e=>tr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zc(e),$forceUpdate:e=>e.f||(e.f=()=>{Dr(e.update)}),$nextTick:e=>e.n||(e.n=Lr.bind(e.proxy)),$watch:e=>Tf.bind(e)}),Ai=(e,t)=>e!==ie&&!e.__isScriptSetup&&Q(e,t),tf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Ai(s,t))return o[t]=1,s[t];if(i!==ie&&Q(i,t))return o[t]=2,i[t];if((l=e.propsOptions[0])&&Q(l,t))return o[t]=3,r[t];if(n!==ie&&Q(n,t))return o[t]=4,n[t];nr&&(o[t]=0)}}const u=zn[t];let d,f;if(u)return t==="$attrs"&&ve(e.attrs,"get",""),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ie&&Q(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,Q(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return Ai(i,t)?(i[t]=n,!0):s!==ie&&Q(s,t)?(s[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||e!==ie&&Q(e,o)||Ai(t,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(zn,o)||Q(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function vo(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let nr=!0;function nf(e){const t=zc(e),n=e.proxy,s=e.ctx;nr=!1,t.beforeCreate&&_o(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:I,activated:E,deactivated:x,beforeDestroy:M,beforeUnmount:R,destroyed:C,unmounted:L,render:q,renderTracked:oe,renderTriggered:ae,errorCaptured:Le,serverPrefetch:De,expose:Ne,inheritAttrs:At,components:Jt,directives:qe,filters:Dn}=t;if(l&&sf(l,s,null),o)for(const te in o){const Y=o[te];z(Y)&&(s[te]=Y.bind(n))}if(i){const te=i.call(n,n);ue(te)&&(e.data=di(te))}if(nr=!0,r)for(const te in r){const Y=r[te],ft=z(Y)?Y.bind(n,n):z(Y.get)?Y.get.bind(n,n):st,Pt=!z(Y)&&z(Y.set)?Y.set.bind(n):st,Ge=Be({get:ft,set:Pt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:Ee=>Ge.value=Ee})}if(a)for(const te in a)Fc(a[te],s,n,te);if(c){const te=z(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Y=>{As(Y,te[Y])})}u&&_o(u,e,"c");function pe(te,Y){F(Y)?Y.forEach(ft=>te(ft.bind(n))):Y&&te(Y.bind(n))}if(pe(zd,d),pe(Wt,f),pe(Kd,g),pe(qd,I),pe(Hc,E),pe(jc,x),pe(Xd,Le),pe(Yd,oe),pe(Jd,ae),pe(Vc,R),pe(Wc,L),pe(Gd,De),F(Ne))if(Ne.length){const te=e.exposed||(e.exposed={});Ne.forEach(Y=>{Object.defineProperty(te,Y,{get:()=>n[Y],set:ft=>n[Y]=ft})})}else e.exposed||(e.exposed={});q&&e.render===st&&(e.render=q),At!=null&&(e.inheritAttrs=At),Jt&&(e.components=Jt),qe&&(e.directives=qe),De&&$c(e)}function sf(e,t,n=st){F(e)&&(e=sr(e));for(const s in e){const i=e[s];let r;ue(i)?"default"in i?r=He(i.from||s,i.default,!0):r=He(i.from||s):r=He(i),ye(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[s]=r}}function _o(e,t,n){ot(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Fc(e,t,n,s){let i=s.includes(".")?il(n,s):()=>n[s];if(fe(e)){const r=t[e];z(r)&&Sn(i,r)}else if(z(e))Sn(i,e.bind(n));else if(ue(e))if(F(e))e.forEach(r=>Fc(r,t,n,s));else{const r=z(e.handler)?e.handler.bind(n):t[e.handler];z(r)&&Sn(i,r,e)}}function zc(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let c;return a?c=a:!i.length&&!n&&!s?c=t:(c={},i.length&&i.forEach(l=>Vs(c,l,o,!0)),Vs(c,t,o)),ue(t)&&r.set(t,c),c}function Vs(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Vs(e,r,n,!0),i&&i.forEach(o=>Vs(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=rf[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const rf={data:yo,props:bo,emits:bo,methods:jn,computed:jn,beforeCreate:we,created:we,beforeMount:we,mounted:we,beforeUpdate:we,updated:we,beforeDestroy:we,beforeUnmount:we,destroyed:we,unmounted:we,activated:we,deactivated:we,errorCaptured:we,serverPrefetch:we,components:jn,directives:jn,watch:af,provide:yo,inject:of};function yo(e,t){return t?e?function(){return be(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function of(e,t){return jn(sr(e),sr(t))}function sr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function we(e,t){return e?[...new Set([].concat(e,t))]:t}function jn(e,t){return e?be(Object.create(null),e,t):t}function bo(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:be(Object.create(null),vo(e),vo(t??{})):t}function af(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const s in t)n[s]=we(e[s],t[s]);return n}function Kc(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cf=0;function lf(e,t){return function(s,i=null){z(s)||(s=be({},s)),i!=null&&!ue(i)&&(i=null);const r=Kc(),o=new WeakSet,a=[];let c=!1;const l=r.app={_uid:cf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:fl,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...d)):z(u)&&(o.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,f){if(!c){const g=l._ceVNode||$(s,i);return g.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(g,u,f),c=!0,l._container=u,u.__vue_app__=l,gi(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(ot(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=En;En=l;try{return u()}finally{En=d}}};return l}}let En=null;function As(e,t){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[e]=t}}function He(e,t,n=!1){const s=ge||ke;if(s||En){const i=En?En._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&z(t)?t.call(s&&s.proxy):t}}const qc={},Gc=()=>Object.create(qc),Jc=e=>Object.getPrototypeOf(e)===qc;function uf(e,t,n,s=!1){const i={},r=Gc();e.propsDefaults=Object.create(null),Yc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=s?i:Cc(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function df(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=Z(i),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(pi(e.emitsOptions,f))continue;const g=t[f];if(c)if(Q(r,f))g!==r[f]&&(r[f]=g,l=!0);else{const I=je(f);i[I]=ir(c,a,I,g,e,!1)}else g!==r[f]&&(r[f]=g,l=!0)}}}else{Yc(e,t,i,r)&&(l=!0);let u;for(const d in a)(!t||!Q(t,d)&&((u=dn(d))===d||!Q(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ir(c,a,d,void 0,e,!0)):delete i[d]);if(r!==a)for(const d in r)(!t||!Q(t,d))&&(delete r[d],l=!0)}l&&vt(e.attrs,"set","")}function Yc(e,t,n,s){const[i,r]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Bn(c))continue;const l=t[c];let u;i&&Q(i,u=je(c))?!r||!r.includes(u)?n[u]=l:(a||(a={}))[u]=l:pi(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(r){const c=Z(n),l=a||ie;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ir(i,c,d,l[d],e,!Q(l,d))}}return o}function ir(e,t,n,s,i,r){const o=e[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=i;if(n in l)s=l[n];else{const u=us(i);s=l[n]=c.call(null,t),u()}}else s=c;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===dn(n))&&(s=!0))}return s}const ff=new WeakMap;function Xc(e,t,n=!1){const s=n?ff:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let c=!1;if(!z(e)){const u=d=>{c=!0;const[f,g]=Xc(d,t,!0);be(o,f),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return ue(e)&&s.set(e,bn),bn;if(F(r))for(let u=0;u<r.length;u++){const d=je(r[u]);wo(d)&&(o[d]=ie)}else if(r)for(const u in r){const d=je(u);if(wo(d)){const f=r[u],g=o[d]=F(f)||z(f)?{type:f}:be({},f),I=g.type;let E=!1,x=!0;if(F(I))for(let M=0;M<I.length;++M){const R=I[M],C=z(R)&&R.name;if(C==="Boolean"){E=!0;break}else C==="String"&&(x=!1)}else E=z(I)&&I.name==="Boolean";g[0]=E,g[1]=x,(E||Q(g,"default"))&&a.push(d)}}const l=[o,a];return ue(e)&&s.set(e,l),l}function wo(e){return e[0]!=="$"&&!Bn(e)}const Zc=e=>e[0]==="_"||e==="$stable",$r=e=>F(e)?e.map(et):[et(e)],hf=(e,t,n)=>{if(t._n)return t;const s=de((...i)=>$r(t(...i)),n);return s._c=!1,s},Qc=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Zc(i))continue;const r=e[i];if(z(r))t[i]=hf(i,r,s);else if(r!=null){const o=$r(r);t[i]=()=>o}}},el=(e,t)=>{const n=$r(t);e.slots.default=()=>n},tl=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},pf=(e,t,n)=>{const s=e.slots=Gc();if(e.vnode.shapeFlag&32){const i=t._;i?(tl(s,t,n),n&&lc(s,"_",i,!0)):Qc(t,s)}else t&&el(e,t)},mf=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,o=ie;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:tl(i,t,n):(r=!t.$stable,Qc(t,i)),o=t}else t&&(el(e,t),o={default:1});if(r)for(const a in i)!Zc(a)&&o[a]==null&&delete i[a]},Re=Rf;function gf(e){return vf(e)}function vf(e,t){const n=li();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=st,insertStaticContent:I}=e,E=(h,m,v,_=null,w=null,b=null,A=void 0,k=null,S=!!m.dynamicChildren)=>{if(h===m)return;h&&!Un(h,m)&&(_=y(h),Ee(h,w,b,!0),h=null),m.patchFlag===-2&&(S=!1,m.dynamicChildren=null);const{type:T,ref:j,shapeFlag:O}=m;switch(T){case mi:x(h,m,v,_);break;case on:M(h,m,v,_);break;case Ps:h==null&&R(m,v,_,A);break;case re:Jt(h,m,v,_,w,b,A,k,S);break;default:O&1?q(h,m,v,_,w,b,A,k,S):O&6?qe(h,m,v,_,w,b,A,k,S):(O&64||O&128)&&T.process(h,m,v,_,w,b,A,k,S,N)}j!=null&&w&&Bs(j,h&&h.ref,b,m||h,!m)},x=(h,m,v,_)=>{if(h==null)s(m.el=a(m.children),v,_);else{const w=m.el=h.el;m.children!==h.children&&l(w,m.children)}},M=(h,m,v,_)=>{h==null?s(m.el=c(m.children||""),v,_):m.el=h.el},R=(h,m,v,_)=>{[h.el,h.anchor]=I(h.children,m,v,_,h.el,h.anchor)},C=({el:h,anchor:m},v,_)=>{let w;for(;h&&h!==m;)w=f(h),s(h,v,_),h=w;s(m,v,_)},L=({el:h,anchor:m})=>{let v;for(;h&&h!==m;)v=f(h),i(h),h=v;i(m)},q=(h,m,v,_,w,b,A,k,S)=>{m.type==="svg"?A="svg":m.type==="math"&&(A="mathml"),h==null?oe(m,v,_,w,b,A,k,S):De(h,m,w,b,A,k,S)},oe=(h,m,v,_,w,b,A,k)=>{let S,T;const{props:j,shapeFlag:O,transition:U,dirs:W}=h;if(S=h.el=o(h.type,b,j&&j.is,j),O&8?u(S,h.children):O&16&&Le(h.children,S,null,_,w,Pi(h,b),A,k),W&&Yt(h,null,_,"created"),ae(S,h,h.scopeId,A,_),j){for(const ce in j)ce!=="value"&&!Bn(ce)&&r(S,ce,null,j[ce],b,_);"value"in j&&r(S,"value",null,j.value,b),(T=j.onVnodeBeforeMount)&&Ze(T,_,h)}W&&Yt(h,null,_,"beforeMount");const J=_f(w,U);J&&U.beforeEnter(S),s(S,m,v),((T=j&&j.onVnodeMounted)||J||W)&&Re(()=>{T&&Ze(T,_,h),J&&U.enter(S),W&&Yt(h,null,_,"mounted")},w)},ae=(h,m,v,_,w)=>{if(v&&g(h,v),_)for(let b=0;b<_.length;b++)g(h,_[b]);if(w){let b=w.subTree;if(m===b||ol(b.type)&&(b.ssContent===m||b.ssFallback===m)){const A=w.vnode;ae(h,A,A.scopeId,A.slotScopeIds,w.parent)}}},Le=(h,m,v,_,w,b,A,k,S=0)=>{for(let T=S;T<h.length;T++){const j=h[T]=k?Mt(h[T]):et(h[T]);E(null,j,m,v,_,w,b,A,k)}},De=(h,m,v,_,w,b,A)=>{const k=m.el=h.el;let{patchFlag:S,dynamicChildren:T,dirs:j}=m;S|=h.patchFlag&16;const O=h.props||ie,U=m.props||ie;let W;if(v&&Xt(v,!1),(W=U.onVnodeBeforeUpdate)&&Ze(W,v,m,h),j&&Yt(m,h,v,"beforeUpdate"),v&&Xt(v,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&u(k,""),T?Ne(h.dynamicChildren,T,k,v,_,Pi(m,w),b):A||Y(h,m,k,null,v,_,Pi(m,w),b,!1),S>0){if(S&16)At(k,O,U,v,w);else if(S&2&&O.class!==U.class&&r(k,"class",null,U.class,w),S&4&&r(k,"style",O.style,U.style,w),S&8){const J=m.dynamicProps;for(let ce=0;ce<J.length;ce++){const ee=J[ce],Ae=O[ee],Se=U[ee];(Se!==Ae||ee==="value")&&r(k,ee,Ae,Se,w,v)}}S&1&&h.children!==m.children&&u(k,m.children)}else!A&&T==null&&At(k,O,U,v,w);((W=U.onVnodeUpdated)||j)&&Re(()=>{W&&Ze(W,v,m,h),j&&Yt(m,h,v,"updated")},_)},Ne=(h,m,v,_,w,b,A)=>{for(let k=0;k<m.length;k++){const S=h[k],T=m[k],j=S.el&&(S.type===re||!Un(S,T)||S.shapeFlag&70)?d(S.el):v;E(S,T,j,null,_,w,b,A,!0)}},At=(h,m,v,_,w)=>{if(m!==v){if(m!==ie)for(const b in m)!Bn(b)&&!(b in v)&&r(h,b,m[b],null,w,_);for(const b in v){if(Bn(b))continue;const A=v[b],k=m[b];A!==k&&b!=="value"&&r(h,b,k,A,w,_)}"value"in v&&r(h,"value",m.value,v.value,w)}},Jt=(h,m,v,_,w,b,A,k,S)=>{const T=m.el=h?h.el:a(""),j=m.anchor=h?h.anchor:a("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:W}=m;W&&(k=k?k.concat(W):W),h==null?(s(T,v,_),s(j,v,_),Le(m.children||[],v,j,w,b,A,k,S)):O>0&&O&64&&U&&h.dynamicChildren?(Ne(h.dynamicChildren,U,v,w,b,A,k),(m.key!=null||w&&m===w.subTree)&&nl(h,m,!0)):Y(h,m,v,j,w,b,A,k,S)},qe=(h,m,v,_,w,b,A,k,S)=>{m.slotScopeIds=k,h==null?m.shapeFlag&512?w.ctx.activate(m,v,_,A,S):Dn(m,v,_,w,b,A,S):hn(h,m,S)},Dn=(h,m,v,_,w,b,A)=>{const k=h.component=$f(h,_,w);if(Uc(h)&&(k.ctx.renderer=N),Hf(k,!1,A),k.asyncDep){if(w&&w.registerDep(k,pe,A),!h.el){const S=k.subTree=$(on);M(null,S,m,v)}}else pe(k,h,m,v,w,b,A)},hn=(h,m,v)=>{const _=m.component=h.component;if(Af(h,m,v))if(_.asyncDep&&!_.asyncResolved){te(_,m,v);return}else _.next=m,_.update();else m.el=h.el,_.vnode=m},pe=(h,m,v,_,w,b,A)=>{const k=()=>{if(h.isMounted){let{next:O,bu:U,u:W,parent:J,vnode:ce}=h;{const Ye=sl(h);if(Ye){O&&(O.el=ce.el,te(h,O,A)),Ye.asyncDep.then(()=>{h.isUnmounted||k()});return}}let ee=O,Ae;Xt(h,!1),O?(O.el=ce.el,te(h,O,A)):O=ce,U&&Cs(U),(Ae=O.props&&O.props.onVnodeBeforeUpdate)&&Ze(Ae,J,O,ce),Xt(h,!0);const Se=To(h),Je=h.subTree;h.subTree=Se,E(Je,Se,d(Je.el),y(Je),h,w,b),O.el=Se.el,ee===null&&Pf(h,Se.el),W&&Re(W,w),(Ae=O.props&&O.props.onVnodeUpdated)&&Re(()=>Ze(Ae,J,O,ce),w)}else{let O;const{el:U,props:W}=m,{bm:J,m:ce,parent:ee,root:Ae,type:Se}=h,Je=Fn(m);Xt(h,!1),J&&Cs(J),!Je&&(O=W&&W.onVnodeBeforeMount)&&Ze(O,ee,m),Xt(h,!0);{Ae.ce&&Ae.ce._injectChildStyle(Se);const Ye=h.subTree=To(h);E(null,Ye,v,_,h,w,b),m.el=Ye.el}if(ce&&Re(ce,w),!Je&&(O=W&&W.onVnodeMounted)){const Ye=m;Re(()=>Ze(O,ee,Ye),w)}(m.shapeFlag&256||ee&&Fn(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Re(h.a,w),h.isMounted=!0,m=v=_=null}};h.scope.on();const S=h.effect=new hc(k);h.scope.off();const T=h.update=S.run.bind(S),j=h.job=S.runIfDirty.bind(S);j.i=h,j.id=h.uid,S.scheduler=()=>Dr(j),Xt(h,!0),T()},te=(h,m,v)=>{m.component=h;const _=h.vnode.props;h.vnode=m,h.next=null,df(h,m.props,_,v),mf(h,m.children,v),zt(),mo(h),Kt()},Y=(h,m,v,_,w,b,A,k,S=!1)=>{const T=h&&h.children,j=h?h.shapeFlag:0,O=m.children,{patchFlag:U,shapeFlag:W}=m;if(U>0){if(U&128){Pt(T,O,v,_,w,b,A,k,S);return}else if(U&256){ft(T,O,v,_,w,b,A,k,S);return}}W&8?(j&16&&$e(T,w,b),O!==T&&u(v,O)):j&16?W&16?Pt(T,O,v,_,w,b,A,k,S):$e(T,w,b,!0):(j&8&&u(v,""),W&16&&Le(O,v,_,w,b,A,k,S))},ft=(h,m,v,_,w,b,A,k,S)=>{h=h||bn,m=m||bn;const T=h.length,j=m.length,O=Math.min(T,j);let U;for(U=0;U<O;U++){const W=m[U]=S?Mt(m[U]):et(m[U]);E(h[U],W,v,null,w,b,A,k,S)}T>j?$e(h,w,b,!0,!1,O):Le(m,v,_,w,b,A,k,S,O)},Pt=(h,m,v,_,w,b,A,k,S)=>{let T=0;const j=m.length;let O=h.length-1,U=j-1;for(;T<=O&&T<=U;){const W=h[T],J=m[T]=S?Mt(m[T]):et(m[T]);if(Un(W,J))E(W,J,v,null,w,b,A,k,S);else break;T++}for(;T<=O&&T<=U;){const W=h[O],J=m[U]=S?Mt(m[U]):et(m[U]);if(Un(W,J))E(W,J,v,null,w,b,A,k,S);else break;O--,U--}if(T>O){if(T<=U){const W=U+1,J=W<j?m[W].el:_;for(;T<=U;)E(null,m[T]=S?Mt(m[T]):et(m[T]),v,J,w,b,A,k,S),T++}}else if(T>U)for(;T<=O;)Ee(h[T],w,b,!0),T++;else{const W=T,J=T,ce=new Map;for(T=J;T<=U;T++){const Pe=m[T]=S?Mt(m[T]):et(m[T]);Pe.key!=null&&ce.set(Pe.key,T)}let ee,Ae=0;const Se=U-J+1;let Je=!1,Ye=0;const Nn=new Array(Se);for(T=0;T<Se;T++)Nn[T]=0;for(T=W;T<=O;T++){const Pe=h[T];if(Ae>=Se){Ee(Pe,w,b,!0);continue}let Xe;if(Pe.key!=null)Xe=ce.get(Pe.key);else for(ee=J;ee<=U;ee++)if(Nn[ee-J]===0&&Un(Pe,m[ee])){Xe=ee;break}Xe===void 0?Ee(Pe,w,b,!0):(Nn[Xe-J]=T+1,Xe>=Ye?Ye=Xe:Je=!0,E(Pe,m[Xe],v,null,w,b,A,k,S),Ae++)}const lo=Je?yf(Nn):bn;for(ee=lo.length-1,T=Se-1;T>=0;T--){const Pe=J+T,Xe=m[Pe],uo=Pe+1<j?m[Pe+1].el:_;Nn[T]===0?E(null,Xe,v,uo,w,b,A,k,S):Je&&(ee<0||T!==lo[ee]?Ge(Xe,v,uo,2):ee--)}}},Ge=(h,m,v,_,w=null)=>{const{el:b,type:A,transition:k,children:S,shapeFlag:T}=h;if(T&6){Ge(h.component.subTree,m,v,_);return}if(T&128){h.suspense.move(m,v,_);return}if(T&64){A.move(h,m,v,N);return}if(A===re){s(b,m,v);for(let O=0;O<S.length;O++)Ge(S[O],m,v,_);s(h.anchor,m,v);return}if(A===Ps){C(h,m,v);return}if(_!==2&&T&1&&k)if(_===0)k.beforeEnter(b),s(b,m,v),Re(()=>k.enter(b),w);else{const{leave:O,delayLeave:U,afterLeave:W}=k,J=()=>s(b,m,v),ce=()=>{O(b,()=>{J(),W&&W()})};U?U(b,J,ce):ce()}else s(b,m,v)},Ee=(h,m,v,_=!1,w=!1)=>{const{type:b,props:A,ref:k,children:S,dynamicChildren:T,shapeFlag:j,patchFlag:O,dirs:U,cacheIndex:W}=h;if(O===-2&&(w=!1),k!=null&&Bs(k,null,v,h,!0),W!=null&&(m.renderCache[W]=void 0),j&256){m.ctx.deactivate(h);return}const J=j&1&&U,ce=!Fn(h);let ee;if(ce&&(ee=A&&A.onVnodeBeforeUnmount)&&Ze(ee,m,h),j&6)bs(h.component,v,_);else{if(j&128){h.suspense.unmount(v,_);return}J&&Yt(h,null,m,"beforeUnmount"),j&64?h.type.remove(h,m,v,N,_):T&&!T.hasOnce&&(b!==re||O>0&&O&64)?$e(T,m,v,!1,!0):(b===re&&O&384||!w&&j&16)&&$e(S,m,v),_&&pn(h)}(ce&&(ee=A&&A.onVnodeUnmounted)||J)&&Re(()=>{ee&&Ze(ee,m,h),J&&Yt(h,null,m,"unmounted")},v)},pn=h=>{const{type:m,el:v,anchor:_,transition:w}=h;if(m===re){mn(v,_);return}if(m===Ps){L(h);return}const b=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:A,delayLeave:k}=w,S=()=>A(v,b);k?k(h.el,b,S):S()}else b()},mn=(h,m)=>{let v;for(;h!==m;)v=f(h),i(h),h=v;i(m)},bs=(h,m,v)=>{const{bum:_,scope:w,job:b,subTree:A,um:k,m:S,a:T}=h;Io(S),Io(T),_&&Cs(_),w.stop(),b&&(b.flags|=8,Ee(A,h,m,v)),k&&Re(k,m),Re(()=>{h.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},$e=(h,m,v,_=!1,w=!1,b=0)=>{for(let A=b;A<h.length;A++)Ee(h[A],m,v,_,w)},y=h=>{if(h.shapeFlag&6)return y(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=f(h.anchor||h.el),v=m&&m[Vd];return v?f(v):m};let D=!1;const P=(h,m,v)=>{h==null?m._vnode&&Ee(m._vnode,null,null,!0):E(m._vnode||null,h,m,null,null,null,v),m._vnode=h,D||(D=!0,mo(),Mc(),D=!1)},N={p:E,um:Ee,m:Ge,r:pn,mt:Dn,mc:Le,pc:Y,pbc:Ne,n:y,o:e};return{render:P,hydrate:void 0,createApp:lf(P)}}function Pi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function _f(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function nl(e,t,n=!1){const s=e.children,i=t.children;if(F(s)&&F(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Mt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&nl(o,a)),a.type===mi&&(a.el=o.el)}}function yf(e){const t=e.slice(),n=[0];let s,i,r,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(i=n[n.length-1],e[i]<l){t[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<l?r=a+1:o=a;l<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function sl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:sl(t)}function Io(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const bf=Symbol.for("v-scx"),wf=()=>He(bf);function If(e,t){return Ur(e,null,t)}function Sn(e,t,n){return Ur(e,t,n)}function Ur(e,t,n=ie){const{immediate:s,deep:i,flush:r,once:o}=n,a=be({},n),c=t&&s||!t&&r!=="post";let l;if(ns){if(r==="sync"){const g=wf();l=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=st,g.resume=st,g.pause=st,g}}const u=ge;a.call=(g,I,E)=>ot(g,u,I,E);let d=!1;r==="post"?a.scheduler=g=>{Re(g,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(g,I)=>{I?g():Dr(g)}),a.augmentJob=g=>{t&&(g.flags|=4),d&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const f=Ud(e,t,a);return ns&&(l?l.push(f):c&&f()),f}function Tf(e,t,n){const s=this.proxy,i=fe(e)?e.includes(".")?il(s,e):()=>s[e]:e.bind(s,s);let r;z(t)?r=t:(r=t.handler,n=t);const o=us(this),a=Ur(i,r.bind(s),n);return o(),a}function il(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ef=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${je(t)}Modifiers`]||e[`${dn(t)}Modifiers`];function Sf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ie;let i=n;const r=t.startsWith("update:"),o=r&&Ef(s,t.slice(7));o&&(o.trim&&(i=n.map(u=>fe(u)?u.trim():u)),o.number&&(i=n.map(Gi)));let a,c=s[a=Ti(t)]||s[a=Ti(je(t))];!c&&r&&(c=s[a=Ti(dn(t))]),c&&ot(c,e,6,i);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ot(l,e,6,i)}}function rl(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!z(e)){const c=l=>{const u=rl(l,t,!0);u&&(a=!0,be(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ue(e)&&s.set(e,null),null):(F(r)?r.forEach(c=>o[c]=null):be(o,r),ue(e)&&s.set(e,o),o)}function pi(e,t){return!e||!ri(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,dn(t))||Q(e,t))}function To(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:f,setupState:g,ctx:I,inheritAttrs:E}=e,x=Hs(e);let M,R;try{if(n.shapeFlag&4){const L=i||s,q=L;M=et(l.call(q,L,u,d,g,f,I)),R=a}else{const L=t;M=et(L.length>1?L(d,{attrs:a,slots:o,emit:c}):L(d,null)),R=t.props?a:kf(a)}}catch(L){Kn.length=0,fi(L,e,1),M=$(on)}let C=M;if(R&&E!==!1){const L=Object.keys(R),{shapeFlag:q}=C;L.length&&q&7&&(r&&L.some(Tr)&&(R=Cf(R,r)),C=Pn(C,R,!1,!0))}return n.dirs&&(C=Pn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&Nr(C,n.transition),M=C,Hs(x),M}const kf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ri(n))&&((t||(t={}))[n]=e[n]);return t},Cf=(e,t)=>{const n={};for(const s in e)(!Tr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Af(e,t,n){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:c}=t,l=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Eo(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==s[f]&&!pi(l,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Eo(s,o,l):!0:!!o;return!1}function Eo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!pi(n,r))return!0}return!1}function Pf({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ol=e=>e.__isSuspense;function Rf(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Bd(e)}const re=Symbol.for("v-fgt"),mi=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),Kn=[];let xe=null;function H(e=!1){Kn.push(xe=e?null:[])}function Of(){Kn.pop(),xe=Kn[Kn.length-1]||null}let ts=1;function So(e,t=!1){ts+=e,e<0&&xe&&t&&(xe.hasOnce=!0)}function al(e){return e.dynamicChildren=ts>0?xe||bn:null,Of(),ts>0&&xe&&xe.push(e),e}function V(e,t,n,s,i,r){return al(p(e,t,n,s,i,r,!0))}function ls(e,t,n,s,i){return al($(e,t,n,s,i,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function Un(e,t){return e.type===t.type&&e.key===t.key}const cl=({key:e})=>e??null,Rs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||ye(e)||z(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,s=0,i=null,r=e===re?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&cl(t),ref:t&&Rs(t),scopeId:Dc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ke};return a?(Hr(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),ts>0&&!o&&xe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&xe.push(c),c}const $=xf;function xf(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Qd)&&(e=on),Ws(e)){const a=Pn(e,t,!0);return n&&Hr(a,n),ts>0&&!r&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(Ff(e)&&(e=e.__vccOpts),t){t=Mf(t);let{class:a,style:c}=t;a&&!fe(a)&&(t.class=St(a)),ue(c)&&(Mr(c)&&!F(c)&&(c=be({},c)),t.style=kr(c))}const o=fe(e)?1:ol(e)?128:Wd(e)?64:ue(e)?4:z(e)?2:0;return p(e,t,n,s,i,o,r,!0)}function Mf(e){return e?Mr(e)||Jc(e)?be({},e):e:null}function Pn(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:c}=e,l=t?Lf(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&cl(l),ref:t&&t.ref?n&&r?F(r)?r.concat(Rs(t)):[r,Rs(t)]:Rs(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==re?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Nr(u,c.clone(u)),u}function G(e=" ",t=0){return $(mi,null,e,t)}function Ct(e,t){const n=$(Ps,null,e);return n.staticCount=t,n}function ze(e="",t=!1){return t?(H(),ls(on,null,e)):$(on,null,e)}function et(e){return e==null||typeof e=="boolean"?$(on):F(e)?$(re,null,e.slice()):Ws(e)?Mt(e):$(mi,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function Hr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Hr(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Jc(t)?t._ctx=ke:i===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),s&64?(n=16,t=[G(t)]):n=8);e.children=t,e.shapeFlag|=n}function Lf(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=St([t.class,s.class]));else if(i==="style")t.style=kr([t.style,s.style]);else if(ri(i)){const r=t[i],o=s[i];o&&r!==o&&!(F(r)&&r.includes(o))&&(t[i]=r?[].concat(r,o):o)}else i!==""&&(t[i]=s[i])}return t}function Ze(e,t,n,s=null){ot(e,t,7,[n,s])}const Df=Kc();let Nf=0;function $f(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Df,r={uid:Nf++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(s,i),emitsOptions:rl(s,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Sf.bind(null,r),e.ce&&e.ce(r),r}let ge=null;const Uf=()=>ge||ke;let Fs,rr;{const e=li(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Fs=t("__VUE_INSTANCE_SETTERS__",n=>ge=n),rr=t("__VUE_SSR_SETTERS__",n=>ns=n)}const us=e=>{const t=ge;return Fs(e),e.scope.on(),()=>{e.scope.off(),Fs(t)}},ko=()=>{ge&&ge.scope.off(),Fs(null)};function ll(e){return e.vnode.shapeFlag&4}let ns=!1;function Hf(e,t=!1,n=!1){t&&rr(t);const{props:s,children:i}=e.vnode,r=ll(e);uf(e,s,r,t),pf(e,i,n);const o=r?jf(e,t):void 0;return t&&rr(!1),o}function jf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,tf);const{setup:s}=n;if(s){zt();const i=e.setupContext=s.length>1?Vf(e):null,r=us(e),o=cs(s,e,0,[e.props,i]),a=oc(o);if(Kt(),r(),(a||e.sp)&&!Fn(e)&&$c(e),a){if(o.then(ko,ko),t)return o.then(c=>{Co(e,c)}).catch(c=>{fi(c,e,0)});e.asyncDep=o}else Co(e,o)}else ul(e)}function Co(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ue(t)&&(e.setupState=Rc(t)),ul(e)}function ul(e,t,n){const s=e.type;e.render||(e.render=s.render||st);{const i=us(e);zt();try{nf(e)}finally{Kt(),i()}}}const Bf={get(e,t){return ve(e,"get",""),e[t]}};function Vf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Bf),slots:e.slots,emit:e.emit,expose:t}}function gi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Rc(Od(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in zn)return zn[n](e)},has(t,n){return n in t||n in zn}})):e.proxy}function Wf(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function Ff(e){return z(e)&&"__vccOpts"in e}const Be=(e,t)=>Nd(e,t,ns);function dl(e,t,n){const s=arguments.length;return s===2?ue(t)&&!F(t)?Ws(t)?$(e,null,[t]):$(e,t):$(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ws(n)&&(n=[n]),$(e,t,n))}const fl="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let or;const Ao=typeof window<"u"&&window.trustedTypes;if(Ao)try{or=Ao.createPolicy("vue",{createHTML:e=>e})}catch{}const hl=or?e=>or.createHTML(e):e=>e,zf="http://www.w3.org/2000/svg",Kf="http://www.w3.org/1998/Math/MathML",mt=typeof document<"u"?document:null,Po=mt&&mt.createElement("template"),qf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?mt.createElementNS(zf,e):t==="mathml"?mt.createElementNS(Kf,e):n?mt.createElement(e,{is:n}):mt.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Po.innerHTML=hl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Po.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Gf=Symbol("_vtc");function Jf(e,t,n){const s=e[Gf];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ro=Symbol("_vod"),Yf=Symbol("_vsh"),Xf=Symbol(""),Zf=/(^|;)\s*display\s*:/;function Qf(e,t,n){const s=e.style,i=fe(n);let r=!1;if(n&&!i){if(t)if(fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Os(s,a,"")}else for(const o in t)n[o]==null&&Os(s,o,"");for(const o in n)o==="display"&&(r=!0),Os(s,o,n[o])}else if(i){if(t!==n){const o=s[Xf];o&&(n+=";"+o),s.cssText=n,r=Zf.test(n)}}else t&&e.removeAttribute("style");Ro in e&&(e[Ro]=r?s.display:"",e[Yf]&&(s.display="none"))}const Oo=/\s*!important$/;function Os(e,t,n){if(F(n))n.forEach(s=>Os(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=eh(e,t);Oo.test(n)?e.setProperty(dn(s),n.replace(Oo,""),"important"):e[s]=n}}const xo=["Webkit","Moz","ms"],Ri={};function eh(e,t){const n=Ri[t];if(n)return n;let s=je(t);if(s!=="filter"&&s in e)return Ri[t]=s;s=ci(s);for(let i=0;i<xo.length;i++){const r=xo[i]+s;if(r in e)return Ri[t]=r}return t}const Mo="http://www.w3.org/1999/xlink";function Lo(e,t,n,s,i,r=ud(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Mo,t.slice(6,t.length)):e.setAttributeNS(Mo,t,n):n==null||r&&!uc(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Ft(n)?String(n):n)}function Do(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?hl(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=uc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function _n(e,t,n,s){e.addEventListener(t,n,s)}function th(e,t,n,s){e.removeEventListener(t,n,s)}const No=Symbol("_vei");function nh(e,t,n,s,i=null){const r=e[No]||(e[No]={}),o=r[t];if(s&&o)o.value=s;else{const[a,c]=sh(t);if(s){const l=r[t]=oh(s,i);_n(e,a,l,c)}else o&&(th(e,a,o,c),r[t]=void 0)}}const $o=/(?:Once|Passive|Capture)$/;function sh(e){let t;if($o.test(e)){t={};let s;for(;s=e.match($o);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):dn(e.slice(2)),t]}let Oi=0;const ih=Promise.resolve(),rh=()=>Oi||(ih.then(()=>Oi=0),Oi=Date.now());function oh(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ot(ah(s,n.value),t,5,[s])};return n.value=e,n.attached=rh(),n}function ah(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const Uo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ch=(e,t,n,s,i,r)=>{const o=i==="svg";t==="class"?Jf(e,s,o):t==="style"?Qf(e,n,s):ri(t)?Tr(t)||nh(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lh(e,t,s,o))?(Do(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Lo(e,t,s,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(s))?Do(e,je(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Lo(e,t,s,o))};function lh(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Uo(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Uo(t)&&fe(n)?!1:t in e}const Ho=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Cs(t,n):t};function uh(e){e.target.composing=!0}function jo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const xi=Symbol("_assign"),zs={created(e,{modifiers:{lazy:t,trim:n,number:s}},i){e[xi]=Ho(i);const r=s||i.props&&i.props.type==="number";_n(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=Gi(a)),e[xi](a)}),n&&_n(e,"change",()=>{e.value=e.value.trim()}),t||(_n(e,"compositionstart",uh),_n(e,"compositionend",jo),_n(e,"change",jo))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(e[xi]=Ho(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Gi(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||i&&e.value.trim()===c)||(e.value=c))}},dh=["ctrl","shift","alt","meta"],fh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dh.some(n=>e[`${n}Key`]&&!t.includes(n))},Nt=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<t.length;o++){const a=fh[t[o]];if(a&&a(i,t))return}return e(i,...r)})},hh=be({patchProp:ch},qf);let Bo;function ph(){return Bo||(Bo=gf(hh))}const mh=(...e)=>{const t=ph().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=vh(s);if(!i)return;const r=t._component;!z(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,gh(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function gh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vh(e){return fe(e)?document.querySelector(e):e}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof document<"u";function pl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _h(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&pl(e.default)}const X=Object.assign;function Mi(e,t){const n={};for(const s in t){const i=t[s];n[s]=Ke(i)?i.map(e):e(i)}return n}const qn=()=>{},Ke=Array.isArray,ml=/#/g,yh=/&/g,bh=/\//g,wh=/=/g,Ih=/\?/g,gl=/\+/g,Th=/%5B/g,Eh=/%5D/g,vl=/%5E/g,Sh=/%60/g,_l=/%7B/g,kh=/%7C/g,yl=/%7D/g,Ch=/%20/g;function jr(e){return encodeURI(""+e).replace(kh,"|").replace(Th,"[").replace(Eh,"]")}function Ah(e){return jr(e).replace(_l,"{").replace(yl,"}").replace(vl,"^")}function ar(e){return jr(e).replace(gl,"%2B").replace(Ch,"+").replace(ml,"%23").replace(yh,"%26").replace(Sh,"`").replace(_l,"{").replace(yl,"}").replace(vl,"^")}function Ph(e){return ar(e).replace(wh,"%3D")}function Rh(e){return jr(e).replace(ml,"%23").replace(Ih,"%3F")}function Oh(e){return e==null?"":Rh(e).replace(bh,"%2F")}function ss(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const xh=/\/$/,Mh=e=>e.replace(xh,"");function Li(e,t,n="/"){let s,i={},r="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),r=t.slice(c+1,a>-1?a:t.length),i=e(r)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=$h(s??t,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ss(o)}}function Lh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Vo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dh(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Rn(t.matched[s],n.matched[i])&&bl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nh(e[n],t[n]))return!1;return!0}function Nh(e,t){return Ke(e)?Wo(e,t):Ke(t)?Wo(t,e):e===t}function Wo(e,t){return Ke(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function $h(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var is;(function(e){e.pop="pop",e.push="push"})(is||(is={}));var Gn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Gn||(Gn={}));function Uh(e){if(!e)if(yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Mh(e)}const Hh=/^[^#]+#/;function jh(e,t){return e.replace(Hh,"#")+t}function Bh(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const vi=()=>({left:window.scrollX,top:window.scrollY});function Vh(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Bh(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fo(e,t){return(history.state?history.state.position-t:-1)+e}const cr=new Map;function Wh(e,t){cr.set(e,t)}function Fh(e){const t=cr.get(e);return cr.delete(e),t}let zh=()=>location.protocol+"//"+location.host;function wl(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Vo(c,"")}return Vo(n,e)+s+i}function Kh(e,t,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const g=wl(e,location),I=n.value,E=t.value;let x=0;if(f){if(n.value=g,t.value=f,o&&o===I){o=null;return}x=E?f.position-E.position:0}else s(g);i.forEach(M=>{M(n.value,I,{delta:x,type:is.pop,direction:x?x>0?Gn.forward:Gn.back:Gn.unknown})})};function c(){o=n.value}function l(f){i.push(f);const g=()=>{const I=i.indexOf(f);I>-1&&i.splice(I,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(X({},f.state,{scroll:vi()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function zo(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?vi():null}}function qh(e){const{history:t,location:n}=window,s={value:wl(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:zh()+e+c;try{t[u?"replaceState":"pushState"](l,"",f),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=X({},t.state,zo(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});r(c,u,!0),s.value=c}function a(c,l){const u=X({},i.value,t.state,{forward:c,scroll:vi()});r(u.current,u,!0);const d=X({},zo(s.value,c,null),{position:u.position+1},l);r(c,d,!1),s.value=c}return{location:s,state:i,push:a,replace:o}}function Gh(e){e=Uh(e);const t=qh(e),n=Kh(e,t.state,t.location,t.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=X({location:"",base:e,go:s,createHref:jh.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Jh(e){return typeof e=="string"||e&&typeof e=="object"}function Il(e){return typeof e=="string"||typeof e=="symbol"}const Tl=Symbol("");var Ko;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ko||(Ko={}));function On(e,t){return X(new Error,{type:e,[Tl]:!0},t)}function pt(e,t){return e instanceof Error&&Tl in e&&(t==null||!!(e.type&t))}const qo="[^/]+?",Yh={sensitive:!1,strict:!1,start:!0,end:!0},Xh=/[.+*?^${}()[\]/\\]/g;function Zh(e,t){const n=X({},Yh,t),s=[];let i=n.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let d=0;d<l.length;d++){const f=l[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(Xh,"\\$&"),g+=40;else if(f.type===1){const{value:I,repeatable:E,optional:x,regexp:M}=f;r.push({name:I,repeatable:E,optional:x});const R=M||qo;if(R!==qo){g+=10;try{new RegExp(`(${R})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${I}" (${R}): `+L.message)}}let C=E?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(C=x&&l.length<2?`(?:/${C})`:"/"+C),x&&(C+="?"),i+=C,g+=20,x&&(g+=-8),E&&(g+=-20),R===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",I=r[f-1];d[I.name]=g&&I.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:E,optional:x}=g,M=I in l?l[I]:"";if(Ke(M)&&!E)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const R=Ke(M)?M.join("/"):M;if(!R)if(x)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:c}}function Qh(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function El(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=Qh(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Go(s))return 1;if(Go(i))return-1}return i.length-s.length}function Go(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ep={type:0,value:""},tp=/[a-zA-Z0-9_]/;function np(e){if(!e)return[[]];if(e==="/")return[[ep]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,c,l="",u="";function d(){l&&(n===0?r.push({type:0,value:l}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:tp.test(c)?f():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}function sp(e,t,n){const s=Zh(np(e.path),n),i=X(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ip(e,t){const n=[],s=new Map;t=Zo({strict:!1,end:!0,sensitive:!1},t);function i(d){return s.get(d)}function r(d,f,g){const I=!g,E=Yo(d);E.aliasOf=g&&g.record;const x=Zo(t,d),M=[E];if("alias"in d){const L=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of L)M.push(Yo(X({},E,{components:g?g.record.components:E.components,path:q,aliasOf:g?g.record:E})))}let R,C;for(const L of M){const{path:q}=L;if(f&&q[0]!=="/"){const oe=f.record.path,ae=oe[oe.length-1]==="/"?"":"/";L.path=f.record.path+(q&&ae+q)}if(R=sp(L,f,x),g?g.alias.push(R):(C=C||R,C!==R&&C.alias.push(R),I&&d.name&&!Xo(R)&&o(d.name)),Sl(R)&&c(R),E.children){const oe=E.children;for(let ae=0;ae<oe.length;ae++)r(oe[ae],R,g&&g.children[ae])}g=g||R}return C?()=>{o(C)}:qn}function o(d){if(Il(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const f=ap(d,n);n.splice(f,0,d),d.record.name&&!Xo(d)&&s.set(d.record.name,d)}function l(d,f){let g,I={},E,x;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw On(1,{location:d});x=g.record.name,I=X(Jo(f.params,g.keys.filter(C=>!C.optional).concat(g.parent?g.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),d.params&&Jo(d.params,g.keys.map(C=>C.name))),E=g.stringify(I)}else if(d.path!=null)E=d.path,g=n.find(C=>C.re.test(E)),g&&(I=g.parse(E),x=g.record.name);else{if(g=f.name?s.get(f.name):n.find(C=>C.re.test(f.path)),!g)throw On(1,{location:d,currentLocation:f});x=g.record.name,I=X({},f.params,d.params),E=g.stringify(I)}const M=[];let R=g;for(;R;)M.unshift(R.record),R=R.parent;return{name:x,path:E,params:I,matched:M,meta:op(M)}}e.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Jo(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Yo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:rp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function rp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function op(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Zo(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function ap(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;El(e,t[r])<0?s=r:n=r+1}const i=cp(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function cp(e){let t=e;for(;t=t.parent;)if(Sl(t)&&El(e,t)===0)return t}function Sl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function lp(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gl," "),o=r.indexOf("="),a=ss(o<0?r:r.slice(0,o)),c=o<0?null:ss(r.slice(o+1));if(a in t){let l=t[a];Ke(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Qo(e){let t="";for(let n in e){const s=e[n];if(n=Ph(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ke(s)?s.map(r=>r&&ar(r)):[s&&ar(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function up(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Ke(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const dp=Symbol(""),ea=Symbol(""),_i=Symbol(""),Br=Symbol(""),lr=Symbol("");function Hn(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const l=f=>{f===!1?c(On(4,{from:n,to:t})):f instanceof Error?c(f):Jh(f)?c(On(2,{from:t,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>e.call(s&&s.instances[i],t,n,l));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(f=>c(f))})}function Di(e,t,n,s,i=r=>r()){const r=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(pl(c)){const u=(c.__vccOpts||c)[t];u&&r.push(Lt(u,n,s,o,a,i))}else{let l=c();r.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=_h(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const g=(d.__vccOpts||d)[t];return g&&Lt(g,n,s,o,a,i)()}))}}return r}function ta(e){const t=He(_i),n=He(Br),s=Be(()=>{const c=wt(e.to);return t.resolve(c)}),i=Be(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Rn.bind(null,u));if(f>-1)return f;const g=na(c[l-2]);return l>1&&na(u)===g&&d[d.length-1].path!==g?d.findIndex(Rn.bind(null,c[l-2])):f}),r=Be(()=>i.value>-1&&gp(n.params,s.value.params)),o=Be(()=>i.value>-1&&i.value===n.matched.length-1&&bl(n.params,s.value.params));function a(c={}){if(mp(c)){const l=t[wt(e.replace)?"replace":"push"](wt(e.to)).catch(qn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:s,href:Be(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function fp(e){return e.length===1?e[0]:e}const hp=Nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ta,setup(e,{slots:t}){const n=di(ta(e)),{options:s}=He(_i),i=Be(()=>({[sa(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&fp(t.default(n));return e.custom?r:dl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),pp=hp;function mp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gp(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ke(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function na(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sa=(e,t,n)=>e??t??n,vp=Nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=He(lr),i=Be(()=>e.route||s.value),r=He(ea,0),o=Be(()=>{let l=wt(r);const{matched:u}=i.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Be(()=>i.value.matched[o.value]);As(ea,Be(()=>o.value+1)),As(dp,a),As(lr,i);const c=K();return Sn(()=>[c.value,a.value,e.name],([l,u,d],[f,g,I])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Rn(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,d=a.value,f=d&&d.components[u];if(!f)return ia(n.default,{Component:f,route:l});const g=d.props[u],I=g?g===!0?l.params:typeof g=="function"?g(l):g:null,x=dl(f,X({},I,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return ia(n.default,{Component:x,route:l})||x}}});function ia(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kl=vp;function _p(e){const t=ip(e.routes,e),n=e.parseQuery||lp,s=e.stringifyQuery||Qo,i=e.history,r=Hn(),o=Hn(),a=Hn(),c=xd(Rt);let l=Rt;yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Mi.bind(null,y=>""+y),d=Mi.bind(null,Oh),f=Mi.bind(null,ss);function g(y,D){let P,N;return Il(y)?(P=t.getRecordMatcher(y),N=D):N=y,t.addRoute(N,P)}function I(y){const D=t.getRecordMatcher(y);D&&t.removeRoute(D)}function E(){return t.getRoutes().map(y=>y.record)}function x(y){return!!t.getRecordMatcher(y)}function M(y,D){if(D=X({},D||c.value),typeof y=="string"){const v=Li(n,y,D.path),_=t.resolve({path:v.path},D),w=i.createHref(v.fullPath);return X(v,_,{params:f(_.params),hash:ss(v.hash),redirectedFrom:void 0,href:w})}let P;if(y.path!=null)P=X({},y,{path:Li(n,y.path,D.path).path});else{const v=X({},y.params);for(const _ in v)v[_]==null&&delete v[_];P=X({},y,{params:d(v)}),D.params=d(D.params)}const N=t.resolve(P,D),ne=y.hash||"";N.params=u(f(N.params));const h=Lh(s,X({},y,{hash:Ah(ne),path:N.path})),m=i.createHref(h);return X({fullPath:h,hash:ne,query:s===Qo?up(y.query):y.query||{}},N,{redirectedFrom:void 0,href:m})}function R(y){return typeof y=="string"?Li(n,y,c.value.path):X({},y)}function C(y,D){if(l!==y)return On(8,{from:D,to:y})}function L(y){return ae(y)}function q(y){return L(X(R(y),{replace:!0}))}function oe(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:P}=D;let N=typeof P=="function"?P(y):P;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=R(N):{path:N},N.params={}),X({query:y.query,hash:y.hash,params:N.path!=null?{}:y.params},N)}}function ae(y,D){const P=l=M(y),N=c.value,ne=y.state,h=y.force,m=y.replace===!0,v=oe(P);if(v)return ae(X(R(v),{state:typeof v=="object"?X({},ne,v.state):ne,force:h,replace:m}),D||P);const _=P;_.redirectedFrom=D;let w;return!h&&Dh(s,N,P)&&(w=On(16,{to:_,from:N}),Ge(N,N,!0,!1)),(w?Promise.resolve(w):Ne(_,N)).catch(b=>pt(b)?pt(b,2)?b:Pt(b):Y(b,_,N)).then(b=>{if(b){if(pt(b,2))return ae(X({replace:m},R(b.to),{state:typeof b.to=="object"?X({},ne,b.to.state):ne,force:h}),D||_)}else b=Jt(_,N,!0,m,ne);return At(_,N,b),b})}function Le(y,D){const P=C(y,D);return P?Promise.reject(P):Promise.resolve()}function De(y){const D=mn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function Ne(y,D){let P;const[N,ne,h]=yp(y,D);P=Di(N.reverse(),"beforeRouteLeave",y,D);for(const v of N)v.leaveGuards.forEach(_=>{P.push(Lt(_,y,D))});const m=Le.bind(null,y,D);return P.push(m),$e(P).then(()=>{P=[];for(const v of r.list())P.push(Lt(v,y,D));return P.push(m),$e(P)}).then(()=>{P=Di(ne,"beforeRouteUpdate",y,D);for(const v of ne)v.updateGuards.forEach(_=>{P.push(Lt(_,y,D))});return P.push(m),$e(P)}).then(()=>{P=[];for(const v of h)if(v.beforeEnter)if(Ke(v.beforeEnter))for(const _ of v.beforeEnter)P.push(Lt(_,y,D));else P.push(Lt(v.beforeEnter,y,D));return P.push(m),$e(P)}).then(()=>(y.matched.forEach(v=>v.enterCallbacks={}),P=Di(h,"beforeRouteEnter",y,D,De),P.push(m),$e(P))).then(()=>{P=[];for(const v of o.list())P.push(Lt(v,y,D));return P.push(m),$e(P)}).catch(v=>pt(v,8)?v:Promise.reject(v))}function At(y,D,P){a.list().forEach(N=>De(()=>N(y,D,P)))}function Jt(y,D,P,N,ne){const h=C(y,D);if(h)return h;const m=D===Rt,v=yn?history.state:{};P&&(N||m?i.replace(y.fullPath,X({scroll:m&&v&&v.scroll},ne)):i.push(y.fullPath,ne)),c.value=y,Ge(y,D,P,m),Pt()}let qe;function Dn(){qe||(qe=i.listen((y,D,P)=>{if(!bs.listening)return;const N=M(y),ne=oe(N);if(ne){ae(X(ne,{replace:!0,force:!0}),N).catch(qn);return}l=N;const h=c.value;yn&&Wh(Fo(h.fullPath,P.delta),vi()),Ne(N,h).catch(m=>pt(m,12)?m:pt(m,2)?(ae(X(R(m.to),{force:!0}),N).then(v=>{pt(v,20)&&!P.delta&&P.type===is.pop&&i.go(-1,!1)}).catch(qn),Promise.reject()):(P.delta&&i.go(-P.delta,!1),Y(m,N,h))).then(m=>{m=m||Jt(N,h,!1),m&&(P.delta&&!pt(m,8)?i.go(-P.delta,!1):P.type===is.pop&&pt(m,20)&&i.go(-1,!1)),At(N,h,m)}).catch(qn)}))}let hn=Hn(),pe=Hn(),te;function Y(y,D,P){Pt(y);const N=pe.list();return N.length?N.forEach(ne=>ne(y,D,P)):console.error(y),Promise.reject(y)}function ft(){return te&&c.value!==Rt?Promise.resolve():new Promise((y,D)=>{hn.add([y,D])})}function Pt(y){return te||(te=!y,Dn(),hn.list().forEach(([D,P])=>y?P(y):D()),hn.reset()),y}function Ge(y,D,P,N){const{scrollBehavior:ne}=e;if(!yn||!ne)return Promise.resolve();const h=!P&&Fh(Fo(y.fullPath,0))||(N||!P)&&history.state&&history.state.scroll||null;return Lr().then(()=>ne(y,D,h)).then(m=>m&&Vh(m)).catch(m=>Y(m,y,D))}const Ee=y=>i.go(y);let pn;const mn=new Set,bs={currentRoute:c,listening:!0,addRoute:g,removeRoute:I,clearRoutes:t.clearRoutes,hasRoute:x,getRoutes:E,resolve:M,options:e,push:L,replace:q,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:ft,install(y){const D=this;y.component("RouterLink",pp),y.component("RouterView",kl),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(c)}),yn&&!pn&&c.value===Rt&&(pn=!0,L(i.location).catch(ne=>{}));const P={};for(const ne in Rt)Object.defineProperty(P,ne,{get:()=>c.value[ne],enumerable:!0});y.provide(_i,D),y.provide(Br,Cc(P)),y.provide(lr,c);const N=y.unmount;mn.add(y),y.unmount=function(){mn.delete(y),mn.size<1&&(l=Rt,qe&&qe(),qe=null,c.value=Rt,pn=!1,te=!1),N()}}};function $e(y){return y.reduce((D,P)=>D.then(()=>De(P)),Promise.resolve())}return bs}function yp(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(e.matched.find(l=>Rn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Rn(l,c))||i.push(c))}return[n,s,i]}function Cl(){return He(_i)}function ds(e){return He(Br)}const bp={__name:"App",setup(e){return(t,n)=>(H(),ls(wt(kl)))}},he=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},wp={},Ip={class:"header"},Tp={class:"header__container"};function Ep(e,t){const n=lt("router-link");return H(),V("header",Ip,[p("div",Tp,[$(n,{to:"/"},{default:de(()=>t[0]||(t[0]=[p("h1",null,[p("mark",null,"LMS"),G("Lyceum173")],-1)])),_:1})])])}const qt=he(wp,[["render",Ep],["__scopeId","data-v-f9d92e6f"]]),Sp={class:"footer"},kp={class:"footer__copy"},Cp={class:"footer__copy__container"},Ap={id:"currentYear"},Gt={__name:"FooterComponent",setup(e){const t=K("");return t.value=new Date().getFullYear(),(n,s)=>(H(),V("footer",Sp,[s[7]||(s[7]=Ct('<div class="footer__top"><div class="footer__top__container"><p>Створено учнями Ліцею 173!</p><br><a href="mailto:chat-support@lyceum173.kyiv.ua"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"></path><path d="M22 7L12.8944 11.5528C12.3314 11.8343 11.6686 11.8343 11.1056 11.5528L2 7" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"></path></svg><p>chat-support@lyceum173.kyiv.ua</p></a></div></div>',1)),p("div",kp,[p("div",Cp,[s[0]||(s[0]=G(" © ")),p("span",Ap,me(t.value),1),s[1]||(s[1]=G()),s[2]||(s[2]=p("a",{href:"https://lyceum173.kyiv.ua"},"Ліцей №173",-1)),s[3]||(s[3]=G("  ")),s[4]||(s[4]=p("span",null,"|",-1)),s[5]||(s[5]=G("  ")),s[6]||(s[6]=p("a",{href:"https://pryima-oleksandr.web.app",target:"_blank"},"Pryima Oleksandr",-1))])])]))}};function Ni(e,t,n,s){function i(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function a(u){try{l(s.next(u))}catch(d){o(d)}}function c(u){try{l(s.throw(u))}catch(d){o(d)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((s=s.apply(e,[])).next())})}class Es extends Error{constructor(t,n=0,s="",i=""){super(t),this.name="AppwriteException",this.message=t,this.code=n,this.type=s,this.response=i}}class gt{constructor(){this.config={endpoint:"https://cloud.appwrite.io/v1",endpointRealtime:"",project:"",jwt:"",locale:"",session:"",devkey:""},this.headers={"x-sdk-name":"Web","x-sdk-platform":"client","x-sdk-language":"web","x-sdk-version":"18.1.1","X-Appwrite-Response-Format":"1.7.0"},this.realtime={socket:void 0,timeout:void 0,heartbeat:void 0,url:"",channels:new Set,subscriptions:new Map,subscriptionsCounter:0,reconnect:!0,reconnectAttempts:0,lastMessage:void 0,connect:()=>{clearTimeout(this.realtime.timeout),this.realtime.timeout=window==null?void 0:window.setTimeout(()=>{this.realtime.createSocket()},50)},getTimeout:()=>{switch(!0){case this.realtime.reconnectAttempts<5:return 1e3;case this.realtime.reconnectAttempts<15:return 5e3;case this.realtime.reconnectAttempts<100:return 1e4;default:return 6e4}},createHeartbeat:()=>{this.realtime.heartbeat&&clearTimeout(this.realtime.heartbeat),this.realtime.heartbeat=window==null?void 0:window.setInterval(()=>{var t;(t=this.realtime.socket)===null||t===void 0||t.send(JSON.stringify({type:"ping"}))},2e4)},createSocket:()=>{var t,n,s;if(this.realtime.channels.size<1){this.realtime.reconnect=!1,(t=this.realtime.socket)===null||t===void 0||t.close();return}const i=new URLSearchParams;i.set("project",this.config.project),this.realtime.channels.forEach(o=>{i.append("channels[]",o)});const r=this.config.endpointRealtime+"/realtime?"+i.toString();(r!==this.realtime.url||!this.realtime.socket||((n=this.realtime.socket)===null||n===void 0?void 0:n.readyState)>WebSocket.OPEN)&&(this.realtime.socket&&((s=this.realtime.socket)===null||s===void 0?void 0:s.readyState)<WebSocket.CLOSING&&(this.realtime.reconnect=!1,this.realtime.socket.close()),this.realtime.url=r,this.realtime.socket=new WebSocket(r),this.realtime.socket.addEventListener("message",this.realtime.onMessage),this.realtime.socket.addEventListener("open",o=>{this.realtime.reconnectAttempts=0,this.realtime.createHeartbeat()}),this.realtime.socket.addEventListener("close",o=>{var a,c,l;if(!this.realtime.reconnect||((c=(a=this.realtime)===null||a===void 0?void 0:a.lastMessage)===null||c===void 0?void 0:c.type)==="error"&&((l=this.realtime)===null||l===void 0?void 0:l.lastMessage.data).code===1008){this.realtime.reconnect=!0;return}const u=this.realtime.getTimeout();console.error(`Realtime got disconnected. Reconnect will be attempted in ${u/1e3} seconds.`,o.reason),setTimeout(()=>{this.realtime.reconnectAttempts++,this.realtime.createSocket()},u)}))},onMessage:t=>{var n,s;try{const i=JSON.parse(t.data);switch(this.realtime.lastMessage=i,i.type){case"connected":const r=JSON.parse((n=window.localStorage.getItem("cookieFallback"))!==null&&n!==void 0?n:"{}"),o=r==null?void 0:r[`a_session_${this.config.project}`],a=i.data;o&&!a.user&&((s=this.realtime.socket)===null||s===void 0||s.send(JSON.stringify({type:"authentication",data:{session:o}})));break;case"event":let c=i.data;if(c!=null&&c.channels){if(!c.channels.some(u=>this.realtime.channels.has(u)))return;this.realtime.subscriptions.forEach(u=>{c.channels.some(d=>u.channels.includes(d))&&setTimeout(()=>u.callback(c))})}break;case"pong":break;case"error":throw i.data;default:break}}catch(i){console.error(i)}},cleanUp:t=>{this.realtime.channels.forEach(n=>{t.includes(n)&&(Array.from(this.realtime.subscriptions).some(([i,r])=>r.channels.includes(n))||this.realtime.channels.delete(n))})}}}setEndpoint(t){if(!t.startsWith("http://")&&!t.startsWith("https://"))throw new Es("Invalid endpoint URL: "+t);return this.config.endpoint=t,this.config.endpointRealtime=t.replace("https://","wss://").replace("http://","ws://"),this}setEndpointRealtime(t){if(!t.startsWith("ws://")&&!t.startsWith("wss://"))throw new Es("Invalid realtime endpoint URL: "+t);return this.config.endpointRealtime=t,this}setProject(t){return this.headers["X-Appwrite-Project"]=t,this.config.project=t,this}setJWT(t){return this.headers["X-Appwrite-JWT"]=t,this.config.jwt=t,this}setLocale(t){return this.headers["X-Appwrite-Locale"]=t,this.config.locale=t,this}setSession(t){return this.headers["X-Appwrite-Session"]=t,this.config.session=t,this}setDevKey(t){return this.headers["X-Appwrite-Dev-Key"]=t,this.config.devkey=t,this}subscribe(t,n){let s=typeof t=="string"?[t]:t;s.forEach(r=>this.realtime.channels.add(r));const i=this.realtime.subscriptionsCounter++;return this.realtime.subscriptions.set(i,{channels:s,callback:n}),this.realtime.connect(),()=>{this.realtime.subscriptions.delete(i),this.realtime.cleanUp(s),this.realtime.connect()}}prepareRequest(t,n,s={},i={}){if(t=t.toUpperCase(),s=Object.assign({},this.headers,s),typeof window<"u"&&window.localStorage){const o=window.localStorage.getItem("cookieFallback");o&&(s["X-Fallback-Cookies"]=o)}let r={method:t,headers:s};if(s["X-Appwrite-Dev-Key"]===void 0&&(r.credentials="include"),t==="GET")for(const[o,a]of Object.entries(gt.flatten(i)))n.searchParams.append(o,a);else switch(s["content-type"]){case"application/json":r.body=JSON.stringify(i);break;case"multipart/form-data":const o=new FormData;for(const[a,c]of Object.entries(i))if(c instanceof File)o.append(a,c,c.name);else if(Array.isArray(c))for(const l of c)o.append(`${a}[]`,l);else o.append(a,c);r.body=o,delete s["content-type"];break}return{uri:n.toString(),options:r}}chunkedUpload(t,n,s={},i={},r){return Ni(this,void 0,void 0,function*(){const o=Object.values(i).find(l=>l instanceof File);if(!o)throw new Error("File not found in payload");if(o.size<=gt.CHUNK_SIZE)return yield this.call(t,n,s,i);let a=0,c=null;for(;a<o.size;){let l=a+gt.CHUNK_SIZE;l>=o.size&&(l=o.size),s["content-range"]=`bytes ${a}-${l-1}/${o.size}`;const u=o.slice(a,l);let d=Object.assign(Object.assign({},i),{file:new File([u],o.name)});c=yield this.call(t,n,s,d),r&&typeof r=="function"&&r({$id:c.$id,progress:Math.round(l/o.size*100),sizeUploaded:l,chunksTotal:Math.ceil(o.size/gt.CHUNK_SIZE),chunksUploaded:Math.ceil(l/gt.CHUNK_SIZE)}),c&&c.$id&&(s["x-appwrite-id"]=c.$id),a=l}return c})}ping(){return Ni(this,void 0,void 0,function*(){return this.call("GET",new URL(this.config.endpoint+"/ping"))})}call(t,n,s={},i={},r="json"){var o,a;return Ni(this,void 0,void 0,function*(){const{uri:c,options:l}=this.prepareRequest(t,n,s,i);let u=null;const d=yield fetch(c,l);if(d.type==="opaque")throw new Es(`Invalid Origin. Register your new client (${window.location.host}) as a new Web platform on your project console dashboard`,403,"forbidden","");const f=d.headers.get("x-appwrite-warning");if(f&&f.split(";").forEach(I=>console.warn("Warning: "+I)),!((o=d.headers.get("content-type"))===null||o===void 0)&&o.includes("application/json")?u=yield d.json():r==="arrayBuffer"?u=yield d.arrayBuffer():u={message:yield d.text()},400<=d.status){let I="";throw!((a=d.headers.get("content-type"))===null||a===void 0)&&a.includes("application/json")||r==="arrayBuffer"?I=JSON.stringify(u):I=u==null?void 0:u.message,new Es(u==null?void 0:u.message,d.status,u==null?void 0:u.type,I)}const g=d.headers.get("X-Fallback-Cookies");return typeof window<"u"&&window.localStorage&&g&&(window.console.warn("Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."),window.localStorage.setItem("cookieFallback",g)),u})}static flatten(t,n=""){let s={};for(const[i,r]of Object.entries(t)){let o=n?n+"["+i+"]":i;Array.isArray(r)?s=Object.assign(Object.assign({},s),gt.flatten(r,o)):s[o]=r}return s}}gt.CHUNK_SIZE=1024*1024*5;var ra;(function(e){e.Totp="totp"})(ra||(ra={}));var oa;(function(e){e.Email="email",e.Phone="phone",e.Totp="totp",e.Recoverycode="recoverycode"})(oa||(oa={}));var aa;(function(e){e.Amazon="amazon",e.Apple="apple",e.Auth0="auth0",e.Authentik="authentik",e.Autodesk="autodesk",e.Bitbucket="bitbucket",e.Bitly="bitly",e.Box="box",e.Dailymotion="dailymotion",e.Discord="discord",e.Disqus="disqus",e.Dropbox="dropbox",e.Etsy="etsy",e.Facebook="facebook",e.Figma="figma",e.Github="github",e.Gitlab="gitlab",e.Google="google",e.Linkedin="linkedin",e.Microsoft="microsoft",e.Notion="notion",e.Oidc="oidc",e.Okta="okta",e.Paypal="paypal",e.PaypalSandbox="paypalSandbox",e.Podio="podio",e.Salesforce="salesforce",e.Slack="slack",e.Spotify="spotify",e.Stripe="stripe",e.Tradeshift="tradeshift",e.TradeshiftBox="tradeshiftBox",e.Twitch="twitch",e.Wordpress="wordpress",e.Yahoo="yahoo",e.Yammer="yammer",e.Yandex="yandex",e.Zoho="zoho",e.Zoom="zoom",e.Mock="mock"})(aa||(aa={}));var ca;(function(e){e.AvantBrowser="aa",e.AndroidWebViewBeta="an",e.GoogleChrome="ch",e.GoogleChromeIOS="ci",e.GoogleChromeMobile="cm",e.Chromium="cr",e.MozillaFirefox="ff",e.Safari="sf",e.MobileSafari="mf",e.MicrosoftEdge="ps",e.MicrosoftEdgeIOS="oi",e.OperaMini="om",e.Opera="op",e.OperaNext="on"})(ca||(ca={}));var la;(function(e){e.AmericanExpress="amex",e.Argencard="argencard",e.Cabal="cabal",e.Cencosud="cencosud",e.DinersClub="diners",e.Discover="discover",e.Elo="elo",e.Hipercard="hipercard",e.JCB="jcb",e.Mastercard="mastercard",e.Naranja="naranja",e.TarjetaShopping="targeta-shopping",e.UnionChinaPay="union-china-pay",e.Visa="visa",e.MIR="mir",e.Maestro="maestro",e.Rupay="rupay"})(la||(la={}));var ua;(function(e){e.Afghanistan="af",e.Angola="ao",e.Albania="al",e.Andorra="ad",e.UnitedArabEmirates="ae",e.Argentina="ar",e.Armenia="am",e.AntiguaAndBarbuda="ag",e.Australia="au",e.Austria="at",e.Azerbaijan="az",e.Burundi="bi",e.Belgium="be",e.Benin="bj",e.BurkinaFaso="bf",e.Bangladesh="bd",e.Bulgaria="bg",e.Bahrain="bh",e.Bahamas="bs",e.BosniaAndHerzegovina="ba",e.Belarus="by",e.Belize="bz",e.Bolivia="bo",e.Brazil="br",e.Barbados="bb",e.BruneiDarussalam="bn",e.Bhutan="bt",e.Botswana="bw",e.CentralAfricanRepublic="cf",e.Canada="ca",e.Switzerland="ch",e.Chile="cl",e.China="cn",e.CoteDIvoire="ci",e.Cameroon="cm",e.DemocraticRepublicOfTheCongo="cd",e.RepublicOfTheCongo="cg",e.Colombia="co",e.Comoros="km",e.CapeVerde="cv",e.CostaRica="cr",e.Cuba="cu",e.Cyprus="cy",e.CzechRepublic="cz",e.Germany="de",e.Djibouti="dj",e.Dominica="dm",e.Denmark="dk",e.DominicanRepublic="do",e.Algeria="dz",e.Ecuador="ec",e.Egypt="eg",e.Eritrea="er",e.Spain="es",e.Estonia="ee",e.Ethiopia="et",e.Finland="fi",e.Fiji="fj",e.France="fr",e.MicronesiaFederatedStatesOf="fm",e.Gabon="ga",e.UnitedKingdom="gb",e.Georgia="ge",e.Ghana="gh",e.Guinea="gn",e.Gambia="gm",e.GuineaBissau="gw",e.EquatorialGuinea="gq",e.Greece="gr",e.Grenada="gd",e.Guatemala="gt",e.Guyana="gy",e.Honduras="hn",e.Croatia="hr",e.Haiti="ht",e.Hungary="hu",e.Indonesia="id",e.India="in",e.Ireland="ie",e.IranIslamicRepublicOf="ir",e.Iraq="iq",e.Iceland="is",e.Israel="il",e.Italy="it",e.Jamaica="jm",e.Jordan="jo",e.Japan="jp",e.Kazakhstan="kz",e.Kenya="ke",e.Kyrgyzstan="kg",e.Cambodia="kh",e.Kiribati="ki",e.SaintKittsAndNevis="kn",e.SouthKorea="kr",e.Kuwait="kw",e.LaoPeopleSDemocraticRepublic="la",e.Lebanon="lb",e.Liberia="lr",e.Libya="ly",e.SaintLucia="lc",e.Liechtenstein="li",e.SriLanka="lk",e.Lesotho="ls",e.Lithuania="lt",e.Luxembourg="lu",e.Latvia="lv",e.Morocco="ma",e.Monaco="mc",e.Moldova="md",e.Madagascar="mg",e.Maldives="mv",e.Mexico="mx",e.MarshallIslands="mh",e.NorthMacedonia="mk",e.Mali="ml",e.Malta="mt",e.Myanmar="mm",e.Montenegro="me",e.Mongolia="mn",e.Mozambique="mz",e.Mauritania="mr",e.Mauritius="mu",e.Malawi="mw",e.Malaysia="my",e.Namibia="na",e.Niger="ne",e.Nigeria="ng",e.Nicaragua="ni",e.Netherlands="nl",e.Norway="no",e.Nepal="np",e.Nauru="nr",e.NewZealand="nz",e.Oman="om",e.Pakistan="pk",e.Panama="pa",e.Peru="pe",e.Philippines="ph",e.Palau="pw",e.PapuaNewGuinea="pg",e.Poland="pl",e.FrenchPolynesia="pf",e.NorthKorea="kp",e.Portugal="pt",e.Paraguay="py",e.Qatar="qa",e.Romania="ro",e.Russia="ru",e.Rwanda="rw",e.SaudiArabia="sa",e.Sudan="sd",e.Senegal="sn",e.Singapore="sg",e.SolomonIslands="sb",e.SierraLeone="sl",e.ElSalvador="sv",e.SanMarino="sm",e.Somalia="so",e.Serbia="rs",e.SouthSudan="ss",e.SaoTomeAndPrincipe="st",e.Suriname="sr",e.Slovakia="sk",e.Slovenia="si",e.Sweden="se",e.Eswatini="sz",e.Seychelles="sc",e.Syria="sy",e.Chad="td",e.Togo="tg",e.Thailand="th",e.Tajikistan="tj",e.Turkmenistan="tm",e.TimorLeste="tl",e.Tonga="to",e.TrinidadAndTobago="tt",e.Tunisia="tn",e.Turkey="tr",e.Tuvalu="tv",e.Tanzania="tz",e.Uganda="ug",e.Ukraine="ua",e.Uruguay="uy",e.UnitedStates="us",e.Uzbekistan="uz",e.VaticanCity="va",e.SaintVincentAndTheGrenadines="vc",e.Venezuela="ve",e.Vietnam="vn",e.Vanuatu="vu",e.Samoa="ws",e.Yemen="ye",e.SouthAfrica="za",e.Zambia="zm",e.Zimbabwe="zw"})(ua||(ua={}));var da;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE",e.OPTIONS="OPTIONS"})(da||(da={}));var fa;(function(e){e.Center="center",e.Topleft="top-left",e.Top="top",e.Topright="top-right",e.Left="left",e.Right="right",e.Bottomleft="bottom-left",e.Bottom="bottom",e.Bottomright="bottom-right"})(fa||(fa={}));var ha;(function(e){e.Jpg="jpg",e.Jpeg="jpeg",e.Png="png",e.Webp="webp",e.Heic="heic",e.Avif="avif"})(ha||(ha={}));new gt().setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("683c81b60027617ce9c2").setDevKey("");const Pp=new Set(["title","titleTemplate","script","style","noscript"]),xs=new Set(["base","meta","link","style","script","noscript"]),Rp=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Op=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Al=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),xp=typeof window<"u";function Ks(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function ur(e){if(e._h)return e._h;if(e._d)return Ks(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Ks(t)}function Mp(e,t){return e instanceof Promise?e.then(t):t(e)}function dr(e,t,n,s){const i=s||Rl(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(i instanceof Promise)return i.then(o=>dr(e,t,n,o));const r={tag:e,props:i};for(const o of Al){const a=r.props[o]!==void 0?r.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Pp.has(r.tag))&&(r[o==="children"?"innerHTML":o]=a),delete r.props[o])}return r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(o=>({...r,props:{...r.props,content:o}})):r}function Lp(e,t){var s;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,i])=>i).map(([i,r])=>e==="style"?`${i}:${r}`:i)),(s=String(Array.isArray(t)?t.join(n):t))==null?void 0:s.split(n).filter(i=>!!i.trim()).join(n)}function Pl(e,t,n,s){for(let i=s;i<n.length;i+=1){const r=n[i];if(r==="class"||r==="style"){e[r]=Lp(r,e[r]);continue}if(e[r]instanceof Promise)return e[r].then(o=>(e[r]=o,Pl(e,t,n,i)));if(!t&&!Al.has(r)){const o=String(e[r]),a=r.startsWith("data-");o==="true"||o===""?e[r]=a?"true":!0:e[r]||(a&&o==="false"?e[r]="false":delete e[r])}}}function Rl(e,t=!1){const n=Pl(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const Dp=10;function Ol(e,t,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i instanceof Promise)return i.then(r=>(t[s]=r,Ol(e,t,s)));Array.isArray(i)?e.push(...i):e.push(i)}}function Np(e){const t=[],n=e.resolvedInput;for(const i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;const r=n[i];if(!(r===void 0||!Rp.has(i))){if(Array.isArray(r)){for(const o of r)t.push(dr(i,o,e));continue}t.push(dr(i,r,e))}}if(t.length===0)return[];const s=[];return Mp(Ol(s,t,0),()=>s.map((i,r)=>(i._e=e._i,e.mode&&(i._m=e.mode),i._p=(e._i<<Dp)+r,i)))}const pa=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ma={base:-10,title:10},ga={critical:-80,high:-10,low:20};function qs(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in ma&&(n=ma[e.tag]),t&&t in ga?n+ga[t]:n}const $p=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Up=["name","property","http-equiv"];function xl(e){const{props:t,tag:n}=e;if(Op.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const s of Up)if(t[s]!==void 0)return`${n}:${s}:${t[s]}`;return!1}const Dt="%separator";function Hp(e,t,n=!1){var i;let s;if(t==="s"||t==="pageTitle")s=e.pageTitle;else if(t.includes(".")){const r=t.indexOf(".");s=(i=e[t.substring(0,r)])==null?void 0:i[t.substring(r+1)]}else s=e[t];if(s!==void 0)return n?(s||"").replace(/"/g,'\\"'):s||""}const jp=new RegExp(`${Dt}(?:\\s*${Dt})*`,"g");function Ss(e,t,n,s=!1){if(typeof e!="string"||!e.includes("%"))return e;let i=e;try{i=decodeURI(e)}catch{}const r=i.match(/%\w+(?:\.\w+)?/g);if(!r)return e;const o=e.includes(Dt);return e=e.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Dt||!r.includes(a))return a;const c=Hp(t,a.slice(1),s);return c!==void 0?c:a}).trim(),o&&(e.endsWith(Dt)&&(e=e.slice(0,-Dt.length)),e.startsWith(Dt)&&(e=e.slice(Dt.length)),e=e.replace(jp,n).trim()),e}function va(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Bp(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const s={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async i=>{var d;const r=(await e.resolveTags()).map(f=>({tag:f,id:xs.has(f.tag)?ur(f):f.tag,shouldRender:!0}));let o=e._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const g of["body","head"]){const I=(d=n[g])==null?void 0:d.children;for(const E of I){const x=E.tagName.toLowerCase();if(!xs.has(x))continue;const M={tag:x,props:await Rl(E.getAttributeNames().reduce((q,oe)=>({...q,[oe]:E.getAttribute(oe)}),{})),innerHTML:E.innerHTML},R=xl(M);let C=R,L=1;for(;C&&f.has(C);)C=`${R}:${L++}`;C&&(M._d=C,f.add(C)),o.elMap[E.getAttribute("data-hid")||ur(M)]=E}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(f,g,I){const E=`${f}:${g}`;o.sideEffects[E]=I,delete o.pendingSideEffects[E]}function c({id:f,$el:g,tag:I}){const E=I.tag.endsWith("Attrs");if(o.elMap[f]=g,E||(I.textContent&&I.textContent!==g.textContent&&(g.textContent=I.textContent),I.innerHTML&&I.innerHTML!==g.innerHTML&&(g.innerHTML=I.innerHTML),a(f,"el",()=>{var x;(x=o.elMap[f])==null||x.remove(),delete o.elMap[f]})),I._eventHandlers)for(const x in I._eventHandlers)Object.prototype.hasOwnProperty.call(I._eventHandlers,x)&&g.getAttribute(`data-${x}`)!==""&&((I.tag==="bodyAttrs"?n.defaultView:g).addEventListener(x.substring(2),I._eventHandlers[x].bind(g)),g.setAttribute(`data-${x}`,""));for(const x in I.props){if(!Object.prototype.hasOwnProperty.call(I.props,x))continue;const M=I.props[x],R=`attr:${x}`;if(x==="class"){if(!M)continue;for(const C of M.split(" "))E&&a(f,`${R}:${C}`,()=>g.classList.remove(C)),!g.classList.contains(C)&&g.classList.add(C)}else if(x==="style"){if(!M)continue;for(const C of M.split(";")){const L=C.indexOf(":"),q=C.substring(0,L).trim(),oe=C.substring(L+1).trim();a(f,`${R}:${q}`,()=>{g.style.removeProperty(q)}),g.style.setProperty(q,oe)}}else g.getAttribute(x)!==M&&g.setAttribute(x,M===!0?"":String(M)),E&&a(f,R,()=>g.removeAttribute(x))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:g,shouldRender:I,id:E}=f;if(I){if(g.tag==="title"){n.title=g.textContent;continue}f.$el=f.$el||o.elMap[E],f.$el?c(f):xs.has(g.tag)&&l.push(f)}}for(const f of l){const g=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),c(f),u[g]=u[g]||n.createDocumentFragment(),u[g].appendChild(f.$el)}for(const f of r)await e.hooks.callHook("dom:renderTag",f,n,a);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in o.pendingSideEffects)o.pendingSideEffects[f]();e._dom=o,await e.hooks.callHook("dom:rendered",{renders:r}),i()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Vp(e,t={}){const n=t.delayFn||(s=>setTimeout(s,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(s=>n(()=>Bp(e,t).then(()=>{delete e._domDebouncedUpdatePromise,s()})))}function Wp(e){return t=>{var s,i;const n=((i=(s=t.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":r=>{Vp(r,e)}}}}}function fr(e,t={},n){for(const s in e){const i=e[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?fr(i,t,r):typeof i=="function"&&(t[r]=i)}return t}const Fp={run:e=>e()},zp=()=>Fp,Ml=typeof console.createTask<"u"?console.createTask:zp;function Kp(e,t){const n=t.shift(),s=Ml(n);return e.reduce((i,r)=>i.then(()=>s.run(()=>r(...t))),Promise.resolve())}function qp(e,t){const n=t.shift(),s=Ml(n);return Promise.all(e.map(i=>s.run(()=>i(...t))))}function $i(e,t){for(const n of[...e])n(t)}class Gp{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const i=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(t,i),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const i of s)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=fr(t),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(t){const n=fr(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Kp,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(qp,t,...n)}callHookWith(t,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&$i(this._before,i);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&$i(this._after,i)}):(this._after&&i&&$i(this._after,i),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Jp(){return new Gp}const Yp=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Xp={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=xl(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const s of e.tags){const i=(s.key?`${s.tag}:${s.key}`:s._d)||ur(s),r=t[i];if(r){let a=s==null?void 0:s.tagDuplicateStrategy;if(!a&&Yp.has(s.tag)&&(a="merge"),a==="merge"){const c=r.props;c.style&&s.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),s.props.style=`${c.style} ${s.props.style}`),c.class&&s.props.class?s.props.class=`${c.class} ${s.props.class}`:c.class&&(s.props.class=c.class),t[i].props={...c,...s.props};continue}else if(s._e===r._e){r._duped=r._duped||[],s._d=`${r._d}:${r._duped.length+1}`,r._duped.push(s);continue}else if(qs(s)>qs(r))continue}if(!(s.innerHTML||s.textContent||Object.keys(s.props).length!==0)&&xs.has(s.tag)){delete t[i];continue}t[i]=s}const n=[];for(const s in t){const i=t[s],r=i._duped;n.push(i),r&&(delete i._duped,n.push(...r))}e.tags=n,e.tags=e.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},Zp=new Set(["script","link","bodyAttrs"]),Qp=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!Zp.has(n.tag))continue;const s=n.props;for(const i in s){if(i[0]!=="o"||i[1]!=="n"||!Object.prototype.hasOwnProperty.call(s,i))continue;const r=s[i];typeof r=="function"&&(e.ssr&&pa.has(i)?s[i]=`this.dataset.${i}fired = true`:delete s[i],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[i]=r)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Ks(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var i,r;const s=t==null?void 0:t.dataset;if(s)for(const o in s){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);pa.has(a)&&((r=(i=n._eventHandlers)==null?void 0:i[a])==null||r.call(t,new Event(a.substring(2))))}}}}),em=new Set(["link","style","script","noscript"]),tm={hooks:{"tag:normalise":({tag:e})=>{e.key&&em.has(e.tag)&&(e.props["data-hid"]=e._h=Ks(e.key))}}},nm={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const s of e.tags)s._m!=="server"||s.tag!=="titleTemplate"&&s.tag!=="templateParams"&&s.tag!=="title"||(t[s.tag]=s.tag==="title"||s.tag==="titleTemplate"?s.textContent:s.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},sm={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:s,offset:i}of $p){if(!n.tagPriority.startsWith(s))continue;const r=n.tagPriority.substring(s.length),o=(t=e.tags.find(a=>a._d===r))==null?void 0:t._p;if(o!==void 0){n._p=o+i;break}}e.tags.sort((n,s)=>{const i=qs(n),r=qs(s);return i<r?-1:i>r?1:n._p-s._p})}}},im={meta:"content",link:"href",htmlAttrs:"lang"},rm=["innerHTML","textContent"],om=e=>({hooks:{"tags:resolve":t=>{var o;const{tags:n}=t;let s;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(s=t.tags.splice(a,1)[0].props,a-=1);const i=s||{},r=i.separator||"|";delete i.separator,i.pageTitle=Ss(i.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",i,r);for(const a of n){if(a.processTemplateParams===!1)continue;const c=im[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=Ss(a.props[c],i,r);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const l of rm)typeof a[l]=="string"&&(a[l]=Ss(a[l],i,r,a.tag==="script"&&a.props.type.endsWith("json")))}e._templateParams=i,e._separator=r},"tags:afterResolve":({tags:t})=>{let n;for(let s=0;s<t.length;s+=1){const i=t[s];i.tag==="title"&&i.processTemplateParams!==!1&&(n=i)}n!=null&&n.textContent&&(n.textContent=Ss(n.textContent,e._templateParams,e._separator))}}}),am={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,s;for(let i=0;i<t.length;i+=1){const r=t[i];r.tag==="title"?n=r:r.tag==="titleTemplate"&&(s=r)}if(s&&n){const i=va(s.textContent,n.textContent);i!==null?n.textContent=i||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(s){const i=va(s.textContent);i!==null&&(s.textContent=i,s.tag="title",s=void 0)}s&&e.tags.splice(e.tags.indexOf(s),1)}}},cm={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let Ll;function lm(e={}){const t=um(e);return t.use(Wp()),Ll=t}function _a(e,t){return!e||e==="server"&&t||e==="client"&&!t}function um(e={}){const t=Jp();t.addHooks(e.hooks||{}),e.document=e.document||(xp?document:void 0);const n=!e.document,s=()=>{a.dirty=!0,t.callHook("entries:updated",a)};let i=0,r=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return r},use(c){const l=typeof c=="function"?c(a):c;(!l.key||!o.some(u=>u.key===l.key))&&(o.push(l),_a(l.mode,n)&&t.addHooks(l.hooks||{}))},push(c,l){l==null||delete l.head;const u={_i:i++,input:c,...l};return _a(u.mode,n)&&(r.push(u),s()),{dispose(){r=r.filter(d=>d._i!==u._i),s()},patch(d){for(const f of r)f._i===u._i&&(f.input=u.input=d);s()}}},async resolveTags(){const c={tags:[],entries:[...r]};await t.callHook("entries:resolve",c);for(const l of c.entries){const u=l.resolvedInput||l.input;if(l.resolvedInput=await(l.transform?l.transform(u):u),l.resolvedInput)for(const d of await Np(l)){const f={tag:d,entry:l,resolvedOptions:a.resolvedOptions};await t.callHook("tag:normalise",f),c.tags.push(f.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[Xp,nm,Qp,tm,sm,om,am,cm,...(e==null?void 0:e.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function dm(){return Ll}const fm=fl[0]==="3";function hm(e){return typeof e=="function"?e():wt(e)}function Gs(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=hm(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Gs(n));if(typeof t=="object"){const n={};for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(s==="titleTemplate"||s[0]==="o"&&s[1]==="n"){n[s]=wt(t[s]);continue}n[s]=Gs(t[s])}return n}return t}const pm={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Gs(t.input)}}},Dl="usehead";function mm(e){return{install(n){fm&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Dl,e))}}.install}function gm(e={}){e.domDelayFn=e.domDelayFn||(n=>Lr(()=>setTimeout(()=>n(),0)));const t=lm(e);return t.use(pm),t.install=mm(t),t}const ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ba="__unhead_injection_handler__";function vm(){return ba in ya?ya[ba]():He(Dl)||dm()}function fs(e,t={}){const n=t.head||vm();if(n)return n.ssr?n.push(e,t):_m(n,e,t)}function _m(e,t,n={}){const s=K(!1),i=K({});If(()=>{i.value=s.value?{}:Gs(t)});const r=e.push(i.value,n);return Sn(i,a=>{r.patch(a)}),Uf()&&(Vc(()=>{r.dispose()}),jc(()=>{s.value=!0}),Hc(()=>{s.value=!1})),r}function ym(e){const t=e;return t.headTags=e.resolveTags,t.addEntry=e.push,t.addHeadObjs=e.push,t.addReactiveEntry=(n,s)=>{const i=fs(n,s);return i!==void 0?i.dispose:()=>{}},t.removeHeadObjs=()=>{},t.updateDOM=()=>{e.hooks.callHook("entries:updated",e)},t.unhead=e,t}function bm(e,t){const n=gm({});return ym(n)}const wm={__name:"HomeView",setup(e){K([]),fs({title:"Lyceum173 Web App",meta:[{name:"description",content:"Інтерактивна система Ліцею 173"},{property:"og:title",content:"Lyceum173 Web App"},{property:"og:description",content:"Інтерактивна система Ліцею 173"},{property:"og:url",content:"https://lyceum173.web.app/"}]});function t(){as.push("/auth/")}return(n,s)=>(H(),V(re,null,[$(qt),p("main",{class:"main"},[p("div",{class:"main__container"},[p("div",{class:"hero"},[s[4]||(s[4]=p("div",{class:"hero__text"},[p("div",{class:"hero__text__item"}," ІНТЕРАКТИВНА "),p("div",{class:"hero__text__item"},[p("mark",null,"WEB"),G(" ПЛАТФОРМА ")]),p("div",{class:"hero__text__item"},[p("strong",null,"ЛІЦЕЮ 173 ")])],-1)),p("div",{class:"hero__card"},[s[0]||(s[0]=G(" Інтерактивна освітня платформа для учнів, вчителів та батьків. ")),s[1]||(s[1]=p("br",null,null,-1)),s[2]||(s[2]=p("br",null,null,-1)),s[3]||(s[3]=G(" Навчайся зручно, ефективно та цікаво. ")),p("button",{onClick:t}," Увійти ")])]),s[5]||(s[5]=Ct('<br data-v-efe0d630><br data-v-efe0d630><br data-v-efe0d630><section class="about" data-v-efe0d630><div class="hr" data-v-efe0d630><span data-v-efe0d630>ПРО ПЛАТФОРМУ</span></div><strong data-v-efe0d630>🎯 Система балів і досягнень</strong> <p data-v-efe0d630>— отримуй бали за активність, участь у заходах, навчання та ініціативність. Змагайся з друзями або класами!</p><strong data-v-efe0d630>📊 Голосування та опитування</strong><p data-v-efe0d630> — впливай на події у ліцеї: обирай теми заходів, учасників конкурсів або фільм для перегляду на перерві. </p><strong data-v-efe0d630>🗳️ Соціальні ініціативи</strong><p data-v-efe0d630> — пропонуй ідеї, створюй опитування, обговорюй важливі шкільні теми.</p><strong data-v-efe0d630>🧠 Ігрові завдання та челенджі</strong><p data-v-efe0d630> — пройди квест або вікторину та виграй приємні бонуси.</p><strong data-v-efe0d630>🗓️ Календар подій</strong><p data-v-efe0d630> — слідкуй за шкільними святами, флешмобами, олімпіадами та тематичними днями</p></section>',4))])]),$(Gt)],64))}},Im=he(wm,[["__scopeId","data-v-efe0d630"]]),Tm={class:"main"},Em={class:"main__container"},Sm={class:"news"},km={class:"news-item__content"},Cm={class:"news-item__title"},Am={class:"news-item__description"},Pm={class:"news-item__date"},Rm={class:"news-item__button"},Om={key:0,class:"pagination__container"},xm={class:"pagination"},Mm=["disabled"],Lm={style:{rotate:"180deg",transform:"translateY(-5px)"},xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},Dm=["onClick"],Nm=["disabled"],$m={__name:"NewsView",setup(e){const t=K([]),n=ds();Cl(),fs({title:"Новини | Lyceum173",meta:[{name:"description",content:"Останні новини з інтерактивного життя ліцею"},{property:"og:title",content:"Новини"},{property:"og:description",content:"Останні новини з інтерактивного життя ліцею"},{property:"og:url",content:"https://lyceum173.web.app/news/"}]});const s=K(parseInt(n.query.page)||1);return Sn(()=>n.query.page,i=>{const r=parseInt(i);isNaN(r)||(s.value=r)}),(i,r)=>{const o=lt("router-link");return H(),V(re,null,[$(qt),p("main",Tm,[p("div",Em,[r[8]||(r[8]=p("div",{class:"hero"},[p("div",{class:"hero__text"},[p("div",{class:"hero__text__item"}," НОВИНИ ")])],-1)),p("section",null,[r[7]||(r[7]=p("div",{class:"hr"},[p("span",null,"ОСТАННІ НОВИНИ")],-1)),p("div",Sm,[(H(!0),V(re,null,er(i.paginatedPosts,a=>(H(),V("div",{key:a.id,class:"news-item"},[p("div",km,[p("div",Cm,[p("h3",null,me(a.title),1)]),p("div",Am,[p("p",null,me(a.description),1)]),p("div",Pm,[p("p",null,me(a.date.split(" ")[1]),1)]),p("button",Rm,[$(o,{to:`/news/${a.id}`,"news-item__button":""},{default:de(()=>r[2]||(r[2]=[G("Перейти ")])),_:2},1032,["to"])]),r[3]||(r[3]=p("div",{class:"news-item__corner"},null,-1)),r[4]||(r[4]=p("div",{class:"news-item__corner"},null,-1))])]))),128))]),t.value.length>8?(H(),V("div",Om,[p("div",xm,[p("button",{onClick:r[0]||(r[0]=a=>i.goToPage(s.value-1)),disabled:s.value===1,style:{padding:"0px"},class:"pagination__item"},[(H(),V("svg",Lm,r[5]||(r[5]=[p("path",{d:"M9.00005 6L15 12L9 18",stroke:"#000000","stroke-width":"1.5","stroke-miterlimit":"16","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])))],8,Mm),(H(!0),V(re,null,er(i.totalPages,a=>(H(),V("button",{key:a,onClick:c=>i.goToPage(a),class:St([{current:a===s.value},"pagination__item"])},me(a),11,Dm))),128)),p("button",{onClick:r[1]||(r[1]=a=>i.goToPage(s.value+1)),disabled:s.value===i.totalPages,style:{padding:"0px"},class:"pagination__item"},r[6]||(r[6]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/arrow-right-01-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},[p("path",{d:"M9.00005 6L15 12L9 18",stroke:"#000000","stroke-width":"1.5","stroke-miterlimit":"16","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),8,Nm)])])):ze("",!0)])])]),$(Gt)],64)}}},Um=he($m,[["__scopeId","data-v-8118f276"]]),Hm={__name:"NotFound",setup(e){return(t,n)=>(H(),V(re,null,[$(qt),n[0]||(n[0]=p("main",{class:"main"},[p("div",{class:"main__container"},[p("div",{id:"error"},[p("div",{class:"error-wrap"},[p("h2",null,[G("4"),p("mark",null,"0"),G("4")]),p("p",null,"Сторінку не знайдено")])])])],-1)),$(Gt)],64))}},wa=he(Hm,[["__scopeId","data-v-3aa16ef1"]]),jm={class:"main"},Bm={class:"main__container"},Vm={class:"breadcrumbs"},Wm={class:"hero"},Fm={class:"hero__text"},zm={class:"hero__text__item"},Km={class:"published-on"},qm=["innerHTML"],Gm={__name:"NewsPageView",setup(e){ds();const t=K(""),n=K(""),s=K("");return(i,r)=>{const o=lt("router-link");return H(),V(re,null,[$(qt),p("main",jm,[p("div",Bm,[p("div",Vm,[$(o,{to:"/"},{default:de(()=>r[0]||(r[0]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/home-05-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},[p("path",{d:"M2 10.5L10.7506 3.49951C11.481 2.91516 12.519 2.91516 13.2494 3.49951L22 10.5",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),p("path",{d:"M4 9V19.5C4 20.6046 4.89543 21.5 6 21.5H18C19.1046 21.5 20 20.6046 20 19.5V9",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),p("path",{d:"M12 17.5V18.5",stroke:"#000000","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})],-1)])),_:1}),r[2]||(r[2]=G(" / ")),$(o,{to:"/news/"},{default:de(()=>r[1]||(r[1]=[G(" Новини ")])),_:1}),r[3]||(r[3]=G(" / "))]),p("div",Wm,[p("div",Fm,[p("div",zm,me(t.value),1)])]),p("div",Km,me(s.value),1),p("section",null,[p("div",{class:"news-content",innerHTML:n.value},null,8,qm)])])]),$(Gt)],64)}}},Jm=he(Gm,[["__scopeId","data-v-dff73db7"]]),Ym={},Xm={class:"header"},Zm={class:"header__container"};function Qm(e,t){const n=lt("router-link");return H(),V("header",Xm,[p("div",Zm,[$(n,{to:"/manager/"},{default:de(()=>t[0]||(t[0]=[p("h1",null,[G(" Lyceum173 "),p("mark",null,"Web App")],-1)])),_:1})])])}const hs=he(Ym,[["render",Qm],["__scopeId","data-v-a0c2aa99"]]),eg=()=>{};var Ia={};/**
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
 */const Nl=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},tg=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},$l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[d],n[f],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Nl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):tg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||d==null)throw new ng;const f=r<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const I=l<<6&192|d;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sg=function(e){const t=Nl(e);return $l.encodeByteArray(t,!0)},Ul=function(e){return sg(e).replace(/\./g,"")},Hl=function(e){try{return $l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const rg=()=>ig().__FIREBASE_DEFAULTS__,og=()=>{if(typeof process>"u"||typeof Ia>"u")return;const e=Ia.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ag=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hl(e[1]);return t&&JSON.parse(t)},Vr=()=>{try{return eg()||rg()||og()||ag()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},cg=e=>{var t,n;return(n=(t=Vr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jl=()=>{var e;return(e=Vr())===null||e===void 0?void 0:e.config},Bl=e=>{var t;return(t=Vr())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */function Wr(e){return e.endsWith(".cloudworkstations.dev")}async function ug(e){return(await fetch(e,{credentials:"include"})).ok}const Jn={};function dg(){const e={prod:[],emulator:[]};for(const t of Object.keys(Jn))Jn[t]?e.emulator.push(t):e.prod.push(t);return e}function fg(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Ta=!1;function hg(e,t){if(typeof window>"u"||typeof document>"u"||!Wr(window.location.host)||Jn[e]===t||Jn[e]||Ta)return;Jn[e]=t;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=dg().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,g){f.setAttribute("width","24"),f.setAttribute("id",g),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function l(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ta=!0,o()},f}function u(f,g){f.setAttribute("id",g),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function d(){const f=fg(s),g=n("text"),I=document.getElementById(g)||document.createElement("span"),E=n("learnmore"),x=document.getElementById(E)||document.createElement("a"),M=n("preprendIcon"),R=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const C=f.element;a(C),u(x,E);const L=l();c(R,M),C.append(R,I,x,L),document.body.appendChild(C)}r?(I.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function gg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wl(){try{return typeof indexedDB=="object"}catch{return!1}}function Fl(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}function _g(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const yg="FirebaseError";class ut extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=yg,Object.setPrototypeOf(this,ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?bg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ut(i,a,s)}}function bg(e,t){return e.replace(wg,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const wg=/\{\$([^}]+)}/g;function Ig(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function an(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(Ea(r)&&Ea(o)){if(!an(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ea(e){return e!==null&&typeof e=="object"}/**
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
 */function ps(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Tg(e,t){const n=new Eg(e,t);return n.subscribe.bind(n)}class Eg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Sg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=Ui),i.error===void 0&&(i.error=Ui),i.complete===void 0&&(i.complete=Ui);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ui(){}/**
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
 */const kg=1e3,Cg=2,Ag=4*60*60*1e3,Pg=.5;function Sa(e,t=kg,n=Cg){const s=t*Math.pow(n,e),i=Math.round(Pg*s*(Math.random()-.5)*2);return Math.min(Ag,s+i)}/**
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
 */function dt(e){return e&&e._delegate?e._delegate:e}class at{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Rg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new lg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xg(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Og(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Og(e){return e===Qt?void 0:e}function xg(e){return e.instantiationMode==="EAGER"}/**
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
 */class Mg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Rg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const Lg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Dg=se.INFO,Ng={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},$g=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ng[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fr{constructor(t){this.name=t,this._logLevel=Dg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const Ug=(e,t)=>t.some(n=>e instanceof n);let ka,Ca;function Hg(){return ka||(ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jg(){return Ca||(Ca=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zl=new WeakMap,hr=new WeakMap,Kl=new WeakMap,Hi=new WeakMap,zr=new WeakMap;function Bg(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(Bt(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&zl.set(n,e)}).catch(()=>{}),zr.set(t,e),t}function Vg(e){if(hr.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});hr.set(e,t)}let pr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return hr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wg(e){pr=e(pr)}function Fg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ji(this),t,...n);return Kl.set(s,t.sort?t.sort():[t]),Bt(s)}:jg().includes(e)?function(...t){return e.apply(ji(this),t),Bt(zl.get(this))}:function(...t){return Bt(e.apply(ji(this),t))}}function zg(e){return typeof e=="function"?Fg(e):(e instanceof IDBTransaction&&Vg(e),Ug(e,Hg())?new Proxy(e,pr):e)}function Bt(e){if(e instanceof IDBRequest)return Bg(e);if(Hi.has(e))return Hi.get(e);const t=zg(e);return t!==e&&(Hi.set(e,t),zr.set(t,e)),t}const ji=e=>zr.get(e);function ql(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Bt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Bt(o.result),c.oldVersion,c.newVersion,Bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Kg=["get","getKey","getAll","getAllKeys","count"],qg=["put","add","delete","clear"],Bi=new Map;function Aa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bi.get(t))return Bi.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=qg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Kg.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Bi.set(t,r),r}Wg(e=>({...e,get:(t,n,s)=>Aa(t,n)||e.get(t,n,s),has:(t,n)=>!!Aa(t,n)||e.has(t,n)}));/**
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
 */class Gg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const mr="@firebase/app",Pa="0.13.0";/**
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
 */const It=new Fr("@firebase/app"),Yg="@firebase/app-compat",Xg="@firebase/analytics-compat",Zg="@firebase/analytics",Qg="@firebase/app-check-compat",ev="@firebase/app-check",tv="@firebase/auth",nv="@firebase/auth-compat",sv="@firebase/database",iv="@firebase/data-connect",rv="@firebase/database-compat",ov="@firebase/functions",av="@firebase/functions-compat",cv="@firebase/installations",lv="@firebase/installations-compat",uv="@firebase/messaging",dv="@firebase/messaging-compat",fv="@firebase/performance",hv="@firebase/performance-compat",pv="@firebase/remote-config",mv="@firebase/remote-config-compat",gv="@firebase/storage",vv="@firebase/storage-compat",_v="@firebase/firestore",yv="@firebase/ai",bv="@firebase/firestore-compat",wv="firebase",Iv="11.8.0";/**
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
 */const gr="[DEFAULT]",Tv={[mr]:"fire-core",[Yg]:"fire-core-compat",[Zg]:"fire-analytics",[Xg]:"fire-analytics-compat",[ev]:"fire-app-check",[Qg]:"fire-app-check-compat",[tv]:"fire-auth",[nv]:"fire-auth-compat",[sv]:"fire-rtdb",[iv]:"fire-data-connect",[rv]:"fire-rtdb-compat",[ov]:"fire-fn",[av]:"fire-fn-compat",[cv]:"fire-iid",[lv]:"fire-iid-compat",[uv]:"fire-fcm",[dv]:"fire-fcm-compat",[fv]:"fire-perf",[hv]:"fire-perf-compat",[pv]:"fire-rc",[mv]:"fire-rc-compat",[gv]:"fire-gcs",[vv]:"fire-gcs-compat",[_v]:"fire-fst",[bv]:"fire-fst-compat",[yv]:"fire-vertex","fire-js":"fire-js",[wv]:"fire-js-all"};/**
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
 */const Js=new Map,Ev=new Map,vr=new Map;function Ra(e,t){try{e.container.addComponent(t)}catch(n){It.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e){const t=e.name;if(vr.has(t))return It.debug(`There were multiple attempts to register component ${t}.`),!1;vr.set(t,e);for(const n of Js.values())Ra(n,e);for(const n of Ev.values())Ra(n,e);return!0}function Mn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e==null?!1:e.settings!==void 0}/**
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
 */const Sv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new fn("app","Firebase",Sv);/**
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
 */class kv{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const ms=Iv;function Gl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:gr,automaticDataCollectionEnabled:!0},t),i=s.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=jl()),!n)throw Vt.create("no-options");const r=Js.get(i);if(r){if(an(n,r.options)&&an(s,r.config))return r;throw Vt.create("duplicate-app",{appName:i})}const o=new Mg(i);for(const c of vr.values())o.addComponent(c);const a=new kv(n,s,o);return Js.set(i,a),a}function Jl(e=gr){const t=Js.get(e);if(!t&&e===gr&&jl())return Gl();if(!t)throw Vt.create("no-app",{appName:e});return t}function it(e,t,n){var s;let i=(s=Tv[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),It.warn(a.join(" "));return}Tt(new at(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Cv="firebase-heartbeat-database",Av=1,rs="firebase-heartbeat-store";let Vi=null;function Yl(){return Vi||(Vi=ql(Cv,Av,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rs)}catch(n){console.warn(n)}}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),Vi}async function Pv(e){try{const n=(await Yl()).transaction(rs),s=await n.objectStore(rs).get(Xl(e));return await n.done,s}catch(t){if(t instanceof ut)It.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});It.warn(n.message)}}}async function Oa(e,t){try{const s=(await Yl()).transaction(rs,"readwrite");await s.objectStore(rs).put(t,Xl(e)),await s.done}catch(n){if(n instanceof ut)It.warn(n.message);else{const s=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});It.warn(s.message)}}}function Xl(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Rv=1024,Ov=30;class xv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xa();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ov){const o=Dv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){It.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xa(),{heartbeatsToSend:s,unsentEntries:i}=Mv(this._heartbeatsCache.heartbeats),r=Ul(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return It.warn(n),""}}}function xa(){return new Date().toISOString().substring(0,10)}function Mv(e,t=Rv){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ma(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ma(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wl()?Fl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ma(e){return Ul(JSON.stringify({version:2,heartbeats:e})).length}function Dv(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
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
 */function Nv(e){Tt(new at("platform-logger",t=>new Gg(t),"PRIVATE")),Tt(new at("heartbeat",t=>new xv(t),"PRIVATE")),it(mr,Pa,e),it(mr,Pa,"esm2017"),it("fire-js","")}Nv("");var $v="firebase",Uv="11.8.1";/**
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
 */it($v,Uv,"app");function Kr(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function Zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hv=Zl,Ql=new fn("auth","Firebase",Zl());/**
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
 */const Ys=new Fr("@firebase/auth");function jv(e,...t){Ys.logLevel<=se.WARN&&Ys.warn(`Auth (${ms}): ${e}`,...t)}function Ms(e,...t){Ys.logLevel<=se.ERROR&&Ys.error(`Auth (${ms}): ${e}`,...t)}/**
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
 */function ct(e,...t){throw Gr(e,...t)}function Fe(e,...t){return Gr(e,...t)}function qr(e,t,n){const s=Object.assign(Object.assign({},Hv()),{[t]:n});return new fn("auth","Firebase",s).create(t,{appName:e.name})}function sn(e){return qr(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bv(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&ct(e,"argument-error"),qr(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gr(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Ql.create(e,...t)}function B(e,t,...n){if(!e)throw Gr(t,...n)}function yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ms(t),new Error(t)}function Et(e,t){e||yt(t)}/**
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
 */function _r(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Vv(){return La()==="http:"||La()==="https:"}function La(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Wv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vv()||Vl()||"connection"in navigator)?navigator.onLine:!0}function Fv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class gs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=pg()||gg()}get(){return Wv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jr(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class eu{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qv=new gs(3e4,6e4);function Yr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ln(e,t,n,s,i={}){return tu(e,i,async()=>{let r={},o={};s&&(t==="GET"?o=s:r={body:JSON.stringify(s)});const a=ps(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:c},r);return mg()||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&Wr(e.emulatorConfig.host)&&(l.credentials="include"),eu.fetch()(await nu(e,e.config.apiHost,n,a),l)})}async function tu(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},zv),t);try{const i=new Jv(e),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ks(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ks(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ks(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ks(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw qr(e,u,l);ct(e,u)}}catch(i){if(i instanceof ut)throw i;ct(e,"network-request-failed",{message:String(i)})}}async function Gv(e,t,n,s,i={}){const r=await Ln(e,t,n,s,i);return"mfaPendingCredential"in r&&ct(e,"multi-factor-auth-required",{_serverResponse:r}),r}async function nu(e,t,n,s){const i=`${t}${n}?${s}`,r=e,o=r.config.emulator?Jr(e.config,i):`${e.config.apiScheme}://${i}`;return Kv.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Jv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fe(this.auth,"network-request-failed")),qv.get())})}}function ks(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Fe(e,t,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Yv(e,t){return Ln(e,"POST","/v1/accounts:delete",t)}async function Xs(e,t){return Ln(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Yn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Xv(e,t=!1){const n=dt(e),s=await n.getIdToken(t),i=Xr(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yn(Wi(i.auth_time)),issuedAtTime:Yn(Wi(i.iat)),expirationTime:Yn(Wi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wi(e){return Number(e)*1e3}function Xr(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hl(n);return i?JSON.parse(i):(Ms("Failed to decode base64 JWT payload"),null)}catch(i){return Ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Da(e){const t=Xr(e);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function os(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof ut&&Zv(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Zv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yr{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zs(e){var t;const n=e.auth,s=await e.getIdToken(),i=await os(e,Xs(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=!((t=r.providerUserInfo)===null||t===void 0)&&t.length?su(r.providerUserInfo):[],a=t_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yr(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function e_(e){const t=dt(e);await Zs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function t_(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function su(e){return e.map(t=>{var{providerId:n}=t,s=Kr(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function n_(e,t){const n=await tu(e,{},async()=>{const s=ps({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=await nu(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eu.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function s_(e,t){return Ln(e,"POST","/v2/accounts:revokeToken",Yr(e,t))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Da(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){B(t.length!==0,"internal-error");const n=Da(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await n_(t,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new kn;return s&&(B(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:t}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
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
 */function Ot(e,t){B(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ve{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,r=Kr(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await os(this,this.stsTokenManager.getToken(this.auth,t));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Xv(this,t)}reload(){return e_(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ve(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Zs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(sn(this.auth));const t=await this.getIdToken();return await os(this,Yv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,r,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:L,isAnonymous:q,providerData:oe,stsTokenManager:ae}=n;B(C&&ae,t,"internal-error");const Le=kn.fromJSON(this.name,ae);B(typeof C=="string",t,"internal-error"),Ot(d,t.name),Ot(f,t.name),B(typeof L=="boolean",t,"internal-error"),B(typeof q=="boolean",t,"internal-error"),Ot(g,t.name),Ot(I,t.name),Ot(E,t.name),Ot(x,t.name),Ot(M,t.name),Ot(R,t.name);const De=new Ve({uid:C,auth:t,email:f,emailVerified:L,displayName:d,isAnonymous:q,photoURL:I,phoneNumber:g,tenantId:E,stsTokenManager:Le,createdAt:M,lastLoginAt:R});return oe&&Array.isArray(oe)&&(De.providerData=oe.map(Ne=>Object.assign({},Ne))),x&&(De._redirectEventId=x),De}static async _fromIdTokenResponse(t,n,s=!1){const i=new kn;i.updateFromServerResponse(n);const r=new Ve({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Zs(r),r}static async _fromGetAccountInfoResponse(t,n,s){const i=n.users[0];B(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?su(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new kn;a.updateFromIdToken(s);const c=new Ve({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new yr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Na=new Map;function bt(e){Et(e instanceof Function,"Expected a class definition");let t=Na.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Na.set(e,t),t)}/**
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
 */class iu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}iu.type="NONE";const $a=iu;/**
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
 */function Ls(e,t,n){return`firebase:${e}:${t}:${n}`}class Cn{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ls(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ls("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Xs(this.auth,{idToken:t}).catch(()=>{});return n?Ve._fromGetAccountInfoResponse(this.auth,n,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Cn(bt($a),t,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||bt($a);const o=Ls(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let d;if(typeof u=="string"){const f=await Xs(t,{idToken:u}).catch(()=>{});if(!f)break;d=await Ve._fromGetAccountInfoResponse(t,f,u)}else d=Ve._fromJSON(t,u);l!==r&&(a=d),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Cn(r,t,s):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Cn(r,t,s))}}/**
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
 */function Ua(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ru(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uu(t))return"Blackberry";if(du(t))return"Webos";if(ou(t))return"Safari";if((t.includes("chrome/")||au(t))&&!t.includes("edge/"))return"Chrome";if(lu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ru(e=Te()){return/firefox\//i.test(e)}function ou(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function au(e=Te()){return/crios\//i.test(e)}function cu(e=Te()){return/iemobile/i.test(e)}function lu(e=Te()){return/android/i.test(e)}function uu(e=Te()){return/blackberry/i.test(e)}function du(e=Te()){return/webos/i.test(e)}function Zr(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function i_(e=Te()){var t;return Zr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function r_(){return vg()&&document.documentMode===10}function fu(e=Te()){return Zr(e)||lu(e)||du(e)||uu(e)||/windows phone/i.test(e)||cu(e)}/**
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
 */function hu(e,t=[]){let n;switch(e){case"Browser":n=Ua(Te());break;case"Worker":n=`${Ua(Te())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${s}`}/**
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
 */async function a_(e,t={}){return Ln(e,"GET","/v2/passwordPolicy",Yr(e,t))}/**
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
 */class u_{constructor(t,n,s,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ha(this),this.idTokenSubscription=new Ha(this),this.beforeStateQueue=new o_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ql,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=bt(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xs(this,{idToken:t}),s=await Ve._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Zs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Fv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(sn(this));const n=t?dt(t):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await a_(this),n=new l_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new fn("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await s_(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&bt(t)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&jv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(e){return dt(e)}class Ha{constructor(t){this.auth=t,this.observer=null,this.addObserver=Tg(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function d_(e){Qr=e}function f_(e){return Qr.loadJS(e)}function h_(){return Qr.gapiScript}function p_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function m_(e,t){const n=Mn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(an(r,t??{}))return i;ct(i,"already-initialized")}return n.initialize({options:t})}function g_(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function v_(e,t,n){const s=vs(e);B(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,r=pu(t),{host:o,port:a}=__(t),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){B(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),B(an(l,s.config.emulator)&&an(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Wr(o)?(ug(`${r}//${o}${c}`),hg("Auth",!0)):y_()}function pu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function __(e){const t=pu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ja(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ja(o)}}}function ja(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function y_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class mu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(t){return yt("not implemented")}_linkToIdToken(t,n){return yt("not implemented")}_getReauthenticationResolver(t){return yt("not implemented")}}/**
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
 */async function An(e,t){return Gv(e,"POST","/v1/accounts:signInWithIdp",Yr(e,t))}/**
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
 */const b_="http://localhost";class cn extends mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new cn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,r=Kr(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new cn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return An(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,An(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,An(t,n)}buildRequest(){const t={requestUri:b_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ps(n)}return t}}/**
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
 */class eo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends eo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends _s{constructor(){super("facebook.com")}static credential(t){return cn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class nt extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return cn._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return nt.credential(n,s)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class Ut extends _s{constructor(){super("github.com")}static credential(t){return cn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Ht extends _s{constructor(){super("twitter.com")}static credential(t,n){return cn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Ht.credential(n,s)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */class xn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const r=await Ve._fromIdTokenResponse(t,s,i),o=Ba(s);return new xn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=Ba(s);return new xn({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function Ba(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Qs extends ut{constructor(t,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qs.prototype),this.customData={appName:t.name,tenantId:(r=t.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new Qs(t,n,s,i)}}function gu(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qs._fromErrorAndOperation(e,r,t,s):r})}async function w_(e,t,n=!1){const s=await os(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xn._forOperation(e,"link",s)}/**
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
 */async function I_(e,t,n=!1){const{auth:s}=e;if(tt(s.app))return Promise.reject(sn(s));const i="reauthenticate";try{const r=await os(e,gu(s,i,t,e),n);B(r.idToken,s,"internal-error");const o=Xr(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(e.uid===a,s,"user-mismatch"),xn._forOperation(e,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ct(s,"user-mismatch"),r}}/**
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
 */async function vu(e,t,n=!1){if(tt(e.app))return Promise.reject(sn(e));const s="signIn",i=await gu(e,s,t),r=await xn._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}async function T_(e,t){return vu(vs(e),t)}function E_(e,t,n,s){return dt(e).onIdTokenChanged(t,n,s)}function S_(e,t,n){return dt(e).beforeAuthStateChanged(t,n)}function k_(e,t,n,s){return dt(e).onAuthStateChanged(t,n,s)}function C_(e){return dt(e).signOut()}const ei="__sak";/**
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
 */class _u{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ei,"1"),this.storage.removeItem(ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const A_=1e3,P_=10;class yu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);r_()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,P_):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}yu.type="LOCAL";const R_=yu;/**
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
 */class bu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}bu.type="SESSION";const wu=bu;/**
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
 */function O_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new yi(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await O_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
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
 */function to(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class x_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=to("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function M_(e){rt().location.href=e}/**
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
 */function Iu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function L_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function N_(){return Iu()?self:null}/**
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
 */const Tu="firebaseLocalStorageDb",$_=1,ti="firebaseLocalStorage",Eu="fbase_key";class ys{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bi(e,t){return e.transaction([ti],t?"readwrite":"readonly").objectStore(ti)}function U_(){const e=indexedDB.deleteDatabase(Tu);return new ys(e).toPromise()}function br(){const e=indexedDB.open(Tu,$_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(ti,{keyPath:Eu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(ti)?t(s):(s.close(),await U_(),t(await br()))})})}async function Va(e,t,n){const s=bi(e,!0).put({[Eu]:t,value:n});return new ys(s).toPromise()}async function H_(e,t){const n=bi(e,!1).get(t),s=await new ys(n).toPromise();return s===void 0?null:s.value}function Wa(e,t){const n=bi(e,!0).delete(t);return new ys(n).toPromise()}const j_=800,B_=3;class Su{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await br(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>B_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Iu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(N_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await L_(),!this.activeServiceWorker)return;this.sender=new x_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||D_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await br();return await Va(t,ei,"1"),await Wa(t,ei),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Va(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>H_(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wa(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const r=bi(i,!1).getAll();return new ys(r).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:r}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Su.type="LOCAL";const V_=Su;new gs(3e4,6e4);/**
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
 */function ku(e,t){return t?bt(t):(B(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class no extends mu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return An(t,this._buildIdpRequest())}_linkToIdToken(t,n){return An(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return An(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function W_(e){return vu(e.auth,new no(e),e.bypassAuthState)}function F_(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),I_(n,new no(e),e.bypassAuthState)}async function z_(e){const{auth:t,user:n}=e;return B(n,t,"internal-error"),w_(n,new no(e),e.bypassAuthState)}/**
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
 */class Cu{constructor(t,n,s,i,r=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return W_;case"linkViaPopup":case"linkViaRedirect":return z_;case"reauthViaPopup":case"reauthViaRedirect":return F_;default:ct(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const K_=new gs(2e3,1e4);async function q_(e,t,n){if(tt(e.app))return Promise.reject(Fe(e,"operation-not-supported-in-this-environment"));const s=vs(e);Bv(e,t,eo);const i=ku(s,n);return new en(s,"signInViaPopup",t,i).executeNotNull()}class en extends Cu{constructor(t,n,s,i,r){super(t,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,K_.get())};t()}}en.currentPopupAction=null;/**
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
 */const G_="pendingRedirect",Ds=new Map;class J_ extends Cu{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Ds.get(this.auth._key());if(!t){try{const s=await Y_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Ds.set(this.auth._key(),t)}return this.bypassAuthState||Ds.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y_(e,t){const n=Q_(t),s=Z_(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function X_(e,t){Ds.set(e._key(),t)}function Z_(e){return bt(e._redirectPersistence)}function Q_(e){return Ls(G_,e.config.apiKey,e.name)}async function ey(e,t,n=!1){if(tt(e.app))return Promise.reject(sn(e));const s=vs(e),i=ku(s,t),o=await new J_(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
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
 */const ty=10*60*1e3;class ny{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!sy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Au(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ty&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(t))}saveEventToCache(t){this.cachedEventUids.add(Fa(t)),this.lastProcessedEventTime=Date.now()}}function Fa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Au({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function sy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Au(e);default:return!1}}/**
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
 */async function iy(e,t={}){return Ln(e,"GET","/v1/projects",t)}/**
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
 */const ry=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oy=/^https?/;async function ay(e){if(e.config.emulator)return;const{authorizedDomains:t}=await iy(e);for(const n of t)try{if(cy(n))return}catch{}ct(e,"unauthorized-domain")}function cy(e){const t=_r(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oy.test(n))return!1;if(ry.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const ly=new gs(3e4,6e4);function za(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function uy(e){return new Promise((t,n)=>{var s,i,r;function o(){za(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{za(),n(Fe(e,"network-request-failed"))},timeout:ly.get()})}if(!((i=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((r=rt().gapi)===null||r===void 0)&&r.load)o();else{const a=p_("iframefcb");return rt()[a]=()=>{gapi.load?o():n(Fe(e,"network-request-failed"))},f_(`${h_()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ns=null,t})}let Ns=null;function dy(e){return Ns=Ns||uy(e),Ns}/**
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
 */const fy=new gs(5e3,15e3),hy="__/auth/iframe",py="emulator/auth/iframe",my={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vy(e){const t=e.config;B(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Jr(t,py):`https://${e.config.authDomain}/${hy}`,s={apiKey:t.apiKey,appName:e.name,v:ms},i=gy.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ps(s).slice(1)}`}async function _y(e){const t=await dy(e),n=rt().gapi;return B(n,e,"internal-error"),t.open({where:document.body,url:vy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:my,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Fe(e,"network-request-failed"),a=rt().setTimeout(()=>{r(o)},fy.get());function c(){rt().clearTimeout(a),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const yy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},by=500,wy=600,Iy="_blank",Ty="http://localhost";class Ka{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ey(e,t,n,s=by,i=wy){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yy),{width:s.toString(),height:i.toString(),top:r,left:o}),l=Te().toLowerCase();n&&(a=au(l)?Iy:n),ru(l)&&(t=t||Ty,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,I])=>`${f}${g}=${I},`,"");if(i_(l)&&a!=="_self")return Sy(t||"",a),new Ka(null);const d=window.open(t||"",a,u);B(d,e,"popup-blocked");try{d.focus()}catch{}return new Ka(d)}function Sy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ky="__/auth/handler",Cy="emulator/auth/handler",Ay=encodeURIComponent("fac");async function qa(e,t,n,s,i,r){B(e.config.authDomain,e,"auth-domain-config-required"),B(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:ms,eventId:i};if(t instanceof eo){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ig(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(t instanceof _s){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Ay}=${encodeURIComponent(c)}`:"";return`${Py(e)}?${ps(a).slice(1)}${l}`}function Py({config:e}){return e.emulator?Jr(e,Cy):`https://${e.authDomain}/${ky}`}/**
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
 */const Fi="webStorageSupport";class Ry{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wu,this._completeRedirectFn=ey,this._overrideRedirectResult=X_}async _openPopup(t,n,s,i){var r;Et((r=this.eventManagers[t._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qa(t,n,s,_r(),i);return Ey(t,o,to())}async _openRedirect(t,n,s,i){await this._originValidation(t);const r=await qa(t,n,s,_r(),i);return M_(r),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Et(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await _y(t),s=new ny(t);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Fi,{type:Fi},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Fi];o!==void 0&&n(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ay(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return fu()||ou()||Zr()}}const Oy=Ry;var Ga="@firebase/auth",Ja="1.10.6";/**
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
 */class xy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function My(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ly(e){Tt(new at("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),r=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hu(e)},l=new u_(s,i,r,c);return g_(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Tt(new at("auth-internal",t=>{const n=vs(t.getProvider("auth").getImmediate());return(s=>new xy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Ga,Ja,My(e)),it(Ga,Ja,"esm2017")}/**
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
 */const Dy=5*60,Ny=Bl("authIdTokenMaxAge")||Dy;let Ya=null;const $y=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ny)return;const i=n==null?void 0:n.token;Ya!==i&&(Ya=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uy(e=Jl()){const t=Mn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=m_(e,{popupRedirectResolver:Oy,persistence:[V_,R_,wu]}),s=Bl("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=$y(r.toString());S_(n,o,()=>o(n.currentUser)),E_(n,a=>o(a))}}const i=cg("auth");return i&&v_(n,`http://${i}`),n}function Hy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}d_({loadJS(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const r=Fe("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Hy().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ly("Browser");const Pu="@firebase/installations",so="0.6.17";/**
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
 */const Ru=1e4,Ou=`w:${so}`,xu="FIS_v2",jy="https://firebaseinstallations.googleapis.com/v1",By=60*60*1e3,Vy="installations",Wy="Installations";/**
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
 */const Fy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ln=new fn(Vy,Wy,Fy);function Mu(e){return e instanceof ut&&e.code.includes("request-failed")}/**
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
 */function Lu({projectId:e}){return`${jy}/projects/${e}/installations`}function Du(e){return{token:e.token,requestStatus:2,expiresIn:Ky(e.expiresIn),creationTime:Date.now()}}async function Nu(e,t){const s=(await t.json()).error;return ln.create("request-failed",{requestName:e,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $u({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function zy(e,{refreshToken:t}){const n=$u(e);return n.append("Authorization",qy(t)),n}async function Uu(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Ky(e){return Number(e.replace("s","000"))}function qy(e){return`${xu} ${e}`}/**
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
 */async function Gy({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const s=Lu(e),i=$u(e),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:xu,appId:e.appId,sdkVersion:Ou},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Uu(()=>fetch(s,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Du(l.authToken)}}else throw await Nu("Create Installation",c)}/**
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
 */function Hu(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Jy(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Yy=/^[cdef][\w-]{21}$/,wr="";function Xy(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Zy(e);return Yy.test(n)?n:wr}catch{return wr}}function Zy(e){return Jy(e).substr(0,22)}/**
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
 */function wi(e){return`${e.appName}!${e.appId}`}/**
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
 */const ju=new Map;function Bu(e,t){const n=wi(e);Vu(n,t),Qy(n,t)}function Vu(e,t){const n=ju.get(e);if(n)for(const s of n)s(t)}function Qy(e,t){const n=e0();n&&n.postMessage({key:e,fid:t}),t0()}let tn=null;function e0(){return!tn&&"BroadcastChannel"in self&&(tn=new BroadcastChannel("[Firebase] FID Change"),tn.onmessage=e=>{Vu(e.data.key,e.data.fid)}),tn}function t0(){ju.size===0&&tn&&(tn.close(),tn=null)}/**
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
 */const n0="firebase-installations-database",s0=1,un="firebase-installations-store";let zi=null;function io(){return zi||(zi=ql(n0,s0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(un)}}})),zi}async function ni(e,t){const n=wi(e),i=(await io()).transaction(un,"readwrite"),r=i.objectStore(un),o=await r.get(n);return await r.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Bu(e,t.fid),t}async function Wu(e){const t=wi(e),s=(await io()).transaction(un,"readwrite");await s.objectStore(un).delete(t),await s.done}async function Ii(e,t){const n=wi(e),i=(await io()).transaction(un,"readwrite"),r=i.objectStore(un),o=await r.get(n),a=t(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Bu(e,a.fid),a}/**
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
 */async function ro(e){let t;const n=await Ii(e.appConfig,s=>{const i=i0(s),r=r0(e,i);return t=r.registrationPromise,r.installationEntry});return n.fid===wr?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function i0(e){const t=e||{fid:Xy(),registrationStatus:0};return Fu(t)}function r0(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ln.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=o0(e,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:a0(e)}:{installationEntry:t}}async function o0(e,t){try{const n=await Gy(e,t);return ni(e.appConfig,n)}catch(n){throw Mu(n)&&n.customData.serverCode===409?await Wu(e.appConfig):await ni(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function a0(e){let t=await Xa(e.appConfig);for(;t.registrationStatus===1;)await Hu(100),t=await Xa(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ro(e);return s||n}return t}function Xa(e){return Ii(e,t=>{if(!t)throw ln.create("installation-not-found");return Fu(t)})}function Fu(e){return c0(e)?{fid:e.fid,registrationStatus:0}:e}function c0(e){return e.registrationStatus===1&&e.registrationTime+Ru<Date.now()}/**
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
 */async function l0({appConfig:e,heartbeatServiceProvider:t},n){const s=u0(e,n),i=zy(e,n),r=t.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ou,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Uu(()=>fetch(s,a));if(c.ok){const l=await c.json();return Du(l)}else throw await Nu("Generate Auth Token",c)}function u0(e,{fid:t}){return`${Lu(e)}/${t}/authTokens:generate`}/**
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
 */async function oo(e,t=!1){let n;const s=await Ii(e.appConfig,r=>{if(!zu(r))throw ln.create("not-registered");const o=r.authToken;if(!t&&h0(o))return r;if(o.requestStatus===1)return n=d0(e,t),r;{if(!navigator.onLine)throw ln.create("app-offline");const a=m0(r);return n=f0(e,a),a}});return n?await n:s.authToken}async function d0(e,t){let n=await Za(e.appConfig);for(;n.authToken.requestStatus===1;)await Hu(100),n=await Za(e.appConfig);const s=n.authToken;return s.requestStatus===0?oo(e,t):s}function Za(e){return Ii(e,t=>{if(!zu(t))throw ln.create("not-registered");const n=t.authToken;return g0(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function f0(e,t){try{const n=await l0(e,t),s=Object.assign(Object.assign({},t),{authToken:n});return await ni(e.appConfig,s),n}catch(n){if(Mu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wu(e.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ni(e.appConfig,s)}throw n}}function zu(e){return e!==void 0&&e.registrationStatus===2}function h0(e){return e.requestStatus===2&&!p0(e)}function p0(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+By}function m0(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function g0(e){return e.requestStatus===1&&e.requestTime+Ru<Date.now()}/**
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
 */async function v0(e){const t=e,{installationEntry:n,registrationPromise:s}=await ro(t);return s?s.catch(console.error):oo(t).catch(console.error),n.fid}/**
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
 */async function _0(e,t=!1){const n=e;return await y0(n),(await oo(n,t)).token}async function y0(e){const{registrationPromise:t}=await ro(e);t&&await t}/**
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
 */function b0(e){if(!e||!e.options)throw Ki("App Configuration");if(!e.name)throw Ki("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ki(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ki(e){return ln.create("missing-app-config-values",{valueName:e})}/**
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
 */const Ku="installations",w0="installations-internal",I0=e=>{const t=e.getProvider("app").getImmediate(),n=b0(t),s=Mn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},T0=e=>{const t=e.getProvider("app").getImmediate(),n=Mn(t,Ku).getImmediate();return{getId:()=>v0(n),getToken:i=>_0(n,i)}};function E0(){Tt(new at(Ku,I0,"PUBLIC")),Tt(new at(w0,T0,"PRIVATE"))}E0();it(Pu,so);it(Pu,so,"esm2017");/**
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
 */const si="analytics",S0="firebase_id",k0="origin",C0=60*1e3,A0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ao="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new Fr("@firebase/analytics");/**
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
 */const P0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new fn("analytics","Analytics",P0);/**
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
 */function R0(e){if(!e.startsWith(ao)){const t=Me.create("invalid-gtag-resource",{gtagURL:e});return Ce.warn(t.message),""}return e}function qu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function O0(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function x0(e,t){const n=O0("firebase-js-sdk-policy",{createScriptURL:R0}),s=document.createElement("script"),i=`${ao}?l=${e}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function M0(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function L0(e,t,n,s,i,r){const o=s[i];try{if(o)await t[o];else{const c=(await qu(n)).find(l=>l.measurementId===i);c&&await t[c.appId]}}catch(a){Ce.error(a)}e("config",i,r)}async function D0(e,t,n,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await qu(n);for(const c of o){const l=a.find(d=>d.measurementId===c),u=l&&t[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",s,i||{})}catch(r){Ce.error(r)}}function N0(e,t,n,s){async function i(r,...o){try{if(r==="event"){const[a,c]=o;await D0(e,t,n,a,c)}else if(r==="config"){const[a,c]=o;await L0(e,t,n,s,a,c)}else if(r==="consent"){const[a,c]=o;e("consent",a,c)}else if(r==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(r==="set"){const[a]=o;e("set",a)}else e(r,...o)}catch(a){Ce.error(a)}}return i}function $0(e,t,n,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=N0(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}function U0(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ao)&&n.src.includes(e))return n;return null}/**
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
 */const H0=30,j0=1e3;class B0{constructor(t={},n=j0){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Gu=new B0;function V0(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function W0(e){var t;const{appId:n,apiKey:s}=e,i={method:"GET",headers:V0(s)},r=A0.replace("{app-id}",n),o=await fetch(r,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function F0(e,t=Gu,n){const{appId:s,apiKey:i,measurementId:r}=e.options;if(!s)throw Me.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw Me.create("no-api-key")}const o=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new q0;return setTimeout(async()=>{a.abort()},C0),Ju({appId:s,apiKey:i,measurementId:r},o,a,t)}async function Ju(e,{throttleEndTimeMillis:t,backoffCount:n},s,i=Gu){var r;const{appId:o,measurementId:a}=e;try{await z0(s,t)}catch(c){if(a)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await W0(e);return i.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!K0(l)){if(i.deleteThrottleMetadata(o),a)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Sa(n,i.intervalMillis,H0):Sa(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,d),Ce.debug(`Calling attemptFetch again in ${u} millis`),Ju(e,d,s,i)}}function z0(e,t){return new Promise((n,s)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(r),s(Me.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function K0(e){if(!(e instanceof ut)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class q0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function G0(e,t,n,s,i){if(i&&i.global){e("event",n,s);return}else{const r=await t,o=Object.assign(Object.assign({},s),{send_to:r});e("event",n,o)}}/**
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
 */async function J0(){if(Wl())try{await Fl()}catch(e){return Ce.warn(Me.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ce.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Y0(e,t,n,s,i,r,o){var a;const c=F0(e);c.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ce.error(g)),t.push(c);const l=J0().then(g=>{if(g)return s.getId()}),[u,d]=await Promise.all([c,l]);U0(r)||x0(r,u.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[k0]="firebase",f.update=!0,d!=null&&(f[S0]=d),i("config",u.measurementId,f),u.measurementId}/**
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
 */class X0{constructor(t){this.app=t}_delete(){return delete Xn[this.app.options.appId],Promise.resolve()}}let Xn={},Qa=[];const ec={};let qi="dataLayer",Z0="gtag",tc,Yu,nc=!1;function Q0(){const e=[];if(Vl()&&e.push("This is a browser extension environment."),_g()||e.push("Cookies are not available."),e.length>0){const t=e.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=Me.create("invalid-analytics-context",{errorInfo:t});Ce.warn(n.message)}}function eb(e,t,n){Q0();const s=e.options.appId;if(!s)throw Me.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Xn[s]!=null)throw Me.create("already-exists",{id:s});if(!nc){M0(qi);const{wrappedGtag:r,gtagCore:o}=$0(Xn,Qa,ec,qi,Z0);Yu=r,tc=o,nc=!0}return Xn[s]=Y0(e,Qa,ec,t,tc,qi,n),new X0(e)}function tb(e=Jl()){e=dt(e);const t=Mn(e,si);return t.isInitialized()?t.getImmediate():nb(e)}function nb(e,t={}){const n=Mn(e,si);if(n.isInitialized()){const i=n.getImmediate();if(an(t,n.getOptions()))return i;throw Me.create("already-initialized")}return n.initialize({options:t})}function sb(e,t,n,s){e=dt(e),G0(Yu,Xn[e.app.options.appId],t,n,s).catch(i=>Ce.error(i))}const sc="@firebase/analytics",ic="0.10.16";function ib(){Tt(new at(si,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return eb(s,i,n)},"PUBLIC")),Tt(new at("analytics-internal",e,"PRIVATE")),it(sc,ic),it(sc,ic,"esm2017");function e(t){try{const n=t.getProvider(si).getImmediate();return{logEvent:(s,i,r)=>sb(n,s,i,r)}}catch(n){throw Me.create("interop-component-reg-failed",{reason:n})}}}ib();const rb={apiKey:"AIzaSyD-kJUghAGDIAF6TvvoH6ePXbw4yYLqra0",authDomain:"e-lyceum173.web.app",projectId:"e-lyceum173",storageBucket:"e-lyceum173.firebasestorage.app",messagingSenderId:"1043664514681",appId:"1:1043664514681:web:0decf1168193bba9c2aea8",measurementId:"G-SM1L8RVPNG"},Xu=Gl(rb),ii=Uy(Xu),Zu=new nt;Zu.setCustomParameters({login_hint:"example@lyceum173.kyiv.ua",hd:"lyceum173.kyiv.ua",prompt:"consent select_account"});tb(Xu);const ob={class:"main__container"},ab={key:0,class:"form-after"},cb={key:1,class:"form",id:"authForm"},lb={key:2,class:"page__content"},ub={__name:"AuthView",setup(e){const t=K(!1);return K(null),Wt(()=>{document.getElementById("authForm").addEventListener("submit",n=>{n.preventDefault()})}),(n,s)=>{const i=lt("router-link");return H(),V(re,null,[t.value?(H(),ls(hs,{key:0})):ze("",!0),p("main",{class:St(["main",{auth:!t.value}])},[p("div",ob,[t.value?ze("",!0):(H(),V("div",ab)),t.value?(H(),V("div",lb,[p("aside",null,[p("nav",null,[$(i,{to:"/manager/"},{default:de(()=>s[1]||(s[1]=[G("Головна")])),_:1}),$(i,{to:"/manager/posts/"},{default:de(()=>s[2]||(s[2]=[G("Публікації")])),_:1}),$(i,{to:"/"},{default:de(()=>s[3]||(s[3]=[G("Сайт")])),_:1})])]),s[4]||(s[4]=p("div",{class:"content"}," asff ",-1))])):(H(),V("form",cb,s[0]||(s[0]=[Ct('<div class="form__content" data-v-6e7bf685><h1 class="logo" data-v-6e7bf685><mark data-v-6e7bf685>e</mark>Lyceum173</h1><p data-v-6e7bf685>Адміністрування</p><br data-v-6e7bf685><div class="input" data-v-6e7bf685><label for="username" data-v-6e7bf685>Login</label><input type="text" placeholder="-" id="username" data-v-6e7bf685></div><div class="input" data-v-6e7bf685><label for="password" data-v-6e7bf685>Password</label><input type="password" placeholder="-" id="password" data-v-6e7bf685></div><br data-v-6e7bf685><br data-v-6e7bf685><button data-v-6e7bf685><span id="auth-button-text" data-v-6e7bf685> Увійти </span><div class="loading" id="auth-button-loading" data-v-6e7bf685><span data-v-6e7bf685></span><span data-v-6e7bf685></span><span data-v-6e7bf685></span></div></button><br data-v-6e7bf685><p class="comment" data-v-6e7bf685>Використовуючи цей додаток Ви погоджуєтесь з <a class="policy" href="/privacy-policy" target="_blank" data-v-6e7bf685>політикою конфіденційності</a> та <a class="policy" href="/terms-of-service" target="_blank" data-v-6e7bf685>умовами користування</a></p></div>',1)])))])],2)],64)}}},db=he(ub,[["__scopeId","data-v-6e7bf685"]]),fb={class:"main__container"},hb={key:0,class:"form-after"},pb={class:"form__content"},mb={key:0,class:"error"},gb=["textContent"],vb={key:1},_b={key:2,class:"page__content"},yb={__name:"UserAuth",setup(e){const t=K(null);Wt(async()=>{const i=setInterval(()=>{window.google&&window.google.accounts&&window.google.accounts.id&&(clearInterval(i),window.google.accounts.id.initialize({client_id:"1043664514681-2u2p7kbqkmk4926bmqmgf91hrbluhgni.apps.googleusercontent.com",callback:n}),window.google.accounts.id.renderButton(document.getElementById("g_id_signin"),{theme:"outline",size:"large"}))},100)});const n=i=>{const r=nt.credential(i.credential);T_(ii,r).then(({user:o})=>{o.email.endsWith("@lyceum173.kyiv.ua")?as.push("/dashboard/"):alert("Увійдіть з шкільної пошти")}).catch(o=>{console.error(o),alert("Помилка входу: "+o.message)})},s=()=>{const i=document.getElementById("auth-button-text"),r=document.getElementById("auth-button-loading");i==null||i.classList.add("hide"),r==null||r.classList.add("show"),setTimeout(()=>{q_(ii,Zu).then(o=>{console.log(o),o.user.email.endsWith("@lyceum173.kyiv.ua")?as.push("/dashboard/"):(t.value={message:"Увійдіть з шкільної пошти"},i==null||i.classList.remove("hide"),r==null||r.classList.remove("show"))})},200)};return(i,r)=>{const o=lt("router-link");return H(),V(re,null,[i.authed?(H(),ls(hs,{key:0})):ze("",!0),p("main",{class:St(["main",{auth:!i.authed}])},[p("div",fb,[i.authed?ze("",!0):(H(),V("div",hb)),i.authed?(H(),V("div",_b,[p("aside",null,[p("nav",null,[$(o,{to:"/manager/"},{default:de(()=>r[12]||(r[12]=[G("Головна")])),_:1}),$(o,{to:"/manager/posts/"},{default:de(()=>r[13]||(r[13]=[G("Публікації")])),_:1}),$(o,{to:"/"},{default:de(()=>r[14]||(r[14]=[G("Сайт")])),_:1})])]),r[15]||(r[15]=p("div",{class:"content"}," asff ",-1))])):(H(),V("form",{key:1,class:"form",id:"authForm",onSubmit:r[0]||(r[0]=Nt(()=>{},["prevent"]))},[p("div",pb,[r[4]||(r[4]=p("h1",{class:"logo"},[p("mark",null,"e"),G("Lyceum173")],-1)),r[5]||(r[5]=p("p",null,"Авторизація",-1)),r[6]||(r[6]=p("br",null,null,-1)),t.value?(H(),V("div",mb,[r[1]||(r[1]=p("p",{style:{color:"red !important"}},"Помилка Авторизації",-1)),p("p",{textContent:me(t.value.message)},null,8,gb)])):(H(),V("div",vb,r[2]||(r[2]=[p("p",null,"Увійдіть, використовуючи шкільну пошту",-1),p("p",null,[G("Приклад:"),p("strong",null,"exmaple@lyceum173.kyiv.ua")],-1)]))),r[7]||(r[7]=p("br",null,null,-1)),r[8]||(r[8]=p("br",null,null,-1)),r[9]||(r[9]=p("div",{id:"g_id_signin"},null,-1)),p("button",{onClick:s,hidden:""},r[3]||(r[3]=[p("span",{id:"auth-button-text"},[G(" Увійти з "),p("mark",{class:"google"},[p("span",null,"G"),p("span",null,"o"),p("span",null,"o"),p("span",null,"g"),p("span",null,"l"),p("span",null,"e")])],-1),p("div",{class:"loading",id:"auth-button-loading"},[p("span"),p("span"),p("span")],-1)])),r[10]||(r[10]=p("br",null,null,-1)),r[11]||(r[11]=p("p",{class:"comment"},[G("Використовуючи цей додаток Ви погоджуєтесь з "),p("a",{class:"policy",href:"/privacy-policy",target:"_blank"},"політикою конфіденційності"),G(" та "),p("a",{class:"policy",href:"/terms-of-service",target:"_blank"},"умовами користування")],-1))])],32))])],2)],64)}}},bb=he(yb,[["__scopeId","data-v-72058b51"]]),wb={class:"main__container"},Ib={class:"page__content"},Tb={class:"content"},Eb={class:"post-actions"},Sb=["onClick"],kb={key:0,class:"publish"},Cb={key:1},Ab=["onClick"],Pb={__name:"PostsView",setup(e){const t=Cl(),n=K(!1),s=K([]),i=o=>{t.push(`/manager/posts/${o}/edit`)},r=o=>{t.push(`/news/${o}/`)};return setTimeout(()=>{n.value=!0},1e3),(o,a)=>{const c=lt("router-link");return H(),V(re,null,[$(hs,{tech:""}),p("main",{class:St(["main",{auth:!n.value}]),cms:""},[p("div",wb,[p("div",Ib,[p("aside",null,[p("nav",null,[$(c,{to:"/manager/"},{default:de(()=>a[0]||(a[0]=[G("Головна")])),_:1}),$(c,{to:"/manager/posts/"},{default:de(()=>a[1]||(a[1]=[G("Публікації")])),_:1}),$(c,{to:"/"},{default:de(()=>a[2]||(a[2]=[G("Сайт")])),_:1})])]),p("div",Tb,[a[6]||(a[6]=p("div",{class:"comment"},"Публікації",-1)),p("table",null,[a[5]||(a[5]=p("thead",null,[p("th",null,"№"),p("th",null,"Назва"),p("th",null,"Опис"),p("th",null,"Дії"),p("th",null,"Дата публікації"),p("th",null,"URL")],-1)),p("tbody",null,[(H(!0),V(re,null,er(s.value,(l,u)=>(H(),V("tr",null,[p("td",null,me(u+1),1),p("td",null,[p("div",null,me(l.title),1)]),p("td",null,me(l.description),1),p("td",null,[p("div",Eb,[p("button",{onClick:d=>i(l.id)},a[3]||(a[3]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/edit-03-solid-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[p("path",{d:"M19.5371 10.4763L21.0911 8.92233C21.9697 8.04364 21.9697 6.61899 21.091 5.74032L18.2595 2.90897C17.3809 2.03033 15.9563 2.03034 15.0776 2.90901L13.5237 4.46293L19.5371 10.4763Z",fill:"#FFFFFFFF"}),p("path",{d:"M18.4764 11.537L9.97772 20.0359C9.57751 20.4361 9.06355 20.7031 8.50599 20.8004L3.12908 21.7388C2.88849 21.7808 2.64251 21.703 2.46981 21.5303C2.2971 21.3576 2.21931 21.1117 2.2613 20.8711L3.1996 15.4945C3.29691 14.9369 3.56389 14.423 3.9641 14.0227L12.4631 5.5236L18.4764 11.537Z",fill:"#FFFFFFFF"})],-1)]),8,Sb),l.published?(H(),V("button",Cb,"Зняти з публікації ")):(H(),V("button",kb,"Опублікувати")),l.published?(H(),V("button",{key:2,onClick:d=>r(l.id)},a[4]||(a[4]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/view-solid-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[p("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.3815 12.1545L22.3754 12.1633C22.2302 12.372 21.8157 12.9676 21.5581 13.3017C21.0364 13.9783 20.2801 14.8824 19.3424 15.7891C17.4969 17.5738 14.814 19.5 11.75 19.5C8.68603 19.5 6.00305 17.5738 4.15756 15.7891C3.21994 14.8824 2.46362 13.9783 1.94192 13.3017C1.68461 12.968 1.27049 12.373 1.12481 12.1636L1.12477 12.1636L1.11818 12.1541C0.960607 11.9077 0.960607 11.5923 1.11818 11.3459L1.12475 11.3365C1.27037 11.1272 1.68457 10.532 1.94192 10.1983C2.46362 9.52169 3.21994 8.61758 4.15756 7.71086C6.00305 5.92619 8.68603 4 11.75 4C14.814 4 17.4969 5.92619 19.3424 7.71086C20.2801 8.61758 21.0364 9.52169 21.5581 10.1983C21.8155 10.5321 22.2298 11.1275 22.3754 11.3366L22.3818 11.3459C22.5394 11.5923 22.5391 11.9082 22.3815 12.1545ZM11.75 15.5C9.67893 15.5 8 13.8211 8 11.75C8 9.67893 9.67893 8 11.75 8C13.8211 8 15.5 9.67893 15.5 11.75C15.5 13.8211 13.8211 15.5 11.75 15.5Z",fill:"#FFFFFFFF"})],-1)]),8,Ab)):ze("",!0)])]),p("td",null,me(l.date),1),p("td",null,me(l.id),1)]))),256))])])])])])],2)],64)}}},Rb=he(Pb,[["__scopeId","data-v-9ca69502"]]),Ob={};function xb(e,t){const n=lt("router-link");return H(),V("aside",null,[p("nav",null,[$(n,{to:"/manager/"},{default:de(()=>t[0]||(t[0]=[p("p",null,"Головна",-1)])),_:1}),$(n,{to:"/manager/posts/"},{default:de(()=>t[1]||(t[1]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/sticky-note-02-stroke-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#FFFFFFFF"},[p("path",{d:"M21.8999 14.975L19.0509 14.2627C18.4846 14.1211 17.9179 14.4927 17.8219 15.0685L17.0214 19.8715M16.4626 20.1344L10.8767 21.5308C9.83026 21.7924 8.76489 21.1771 8.46857 20.14L5.54944 9.92305C5.24599 8.86098 5.86098 7.75401 6.92305 7.45056L17.0536 4.5561C18.1248 4.25006 19.2395 4.87817 19.5326 5.95291L21.6946 13.8803C21.8835 14.5727 21.6868 15.3132 21.1793 15.8207L17.3917 19.6083C17.1354 19.8646 16.8142 20.0464 16.4626 20.1344Z",stroke:"#FFFFFFFF","stroke-width":"1.5"}),p("path",{d:"M8 18H4C2.89543 18 2 17.1046 2 16V4C2 2.89543 2.89543 2 4 2H15C16.1046 2 17 2.89543 17 4V5",stroke:"#FFFFFFFF","stroke-width":"1.5"})],-1),p("p",null,"Публікації",-1)])),_:1}),$(n,{to:"/"},{default:de(()=>t[2]||(t[2]=[G("Сайт")])),_:1})])])}const Mb=he(Ob,[["render",xb],["__scopeId","data-v-dc37c9ab"]]),Lb={class:"main__container"},Db={class:"page__content"},Nb={class:"content"},$b={class:"post-edit"},Ub={class:"input"},Hb={class:"input"},jb={__name:"PostView",setup(e){const t=ds();K(t.params.id);const n=K(!1),s=K({});return K(null),(i,r)=>{const o=lt("Editor");return H(),V(re,null,[$(hs,{tech:""}),p("main",{class:St(["main",{auth:!n.value}]),cms:""},[p("div",Lb,[p("div",Db,[$(Mb),p("div",Nb,[r[7]||(r[7]=p("div",{class:"comment"},"Публікації",-1)),r[8]||(r[8]=p("br",null,null,-1)),p("div",$b,[p("div",Ub,[r[4]||(r[4]=p("label",{for:"title"},"Title",-1)),js(p("input",{type:"text",id:"title","onUpdate:modelValue":r[0]||(r[0]=a=>s.value.title=a)},null,512),[[zs,s.value.title]])]),p("div",Hb,[r[5]||(r[5]=p("label",{for:"title"},"Опис",-1)),js(p("input",{type:"text",id:"title","onUpdate:modelValue":r[1]||(r[1]=a=>s.value.description=a)},null,512),[[zs,s.value.description]])]),r[6]||(r[6]=p("br",null,null,-1)),p("button",{onClick:r[2]||(r[2]=(...a)=>i.logHtml&&i.logHtml(...a))},"Log"),$(o,{modelValue:s.value.content,"onUpdate:modelValue":r[3]||(r[3]=a=>s.value.content=a),"api-key":"h6kkl7o9fencgnuc885qssdmevh4s162qqazim8y1nni16j1",init:{height:300,menubar:!1,plugins:"code",toolbar:"undo redo | styles | bold italic underline strikethrough superscript subscript codeformat | alignleft aligncenter alignright alignjustify | outdent indent | code"}},null,8,["modelValue"])])])])])],2)],64)}}},Bb=he(jb,[["__scopeId","data-v-56fef5da"]]),Vb={__name:"PrivacyPolicy",setup(e){return ds(),K(""),K(""),K(""),(t,n)=>(H(),V(re,null,[$(qt),n[0]||(n[0]=Ct('<main class="main" data-v-e3f53a6d><div class="main__container" data-v-e3f53a6d><div class="hero" data-v-e3f53a6d><div class="hero__text" data-v-e3f53a6d><div class="hero__text__item" data-v-e3f53a6d> Політика Конфіденційності </div></div></div><section data-v-e3f53a6d><p class="published-on" data-v-e3f53a6d>Дата набуття чинності: 4 червня 2025 р.</p><p data-v-e3f53a6d>Вітаємо у вебдодатку Lyceum173 (далі — «ми», «наш» або «сервіс»). Ми поважаємо вашу приватність і прагнемо захищати вашу персональну інформацію. </p><h3 data-v-e3f53a6d>1. Яку інформацію ми збираємо</h3><p data-v-e3f53a6d>Ми можемо збирати наступні типи інформації:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>Інформація з Google-акаунту (ім’я, електронна пошта, зображення профілю) — при вході через Google.</li><li data-v-e3f53a6d>Інформація, яку ви надаєте вручну — наприклад, якщо ви заповнюєте форми на сайті.</li></ul><h3 data-v-e3f53a6d>2. Як ми використовуємо інформацію</h3><ul data-v-e3f53a6d><li data-v-e3f53a6d>Щоб надати вам доступ до функцій додатку.</li><li data-v-e3f53a6d>Для автентифікації через Google.</li><li data-v-e3f53a6d>Щоб покращити наш сервіс.</li><li data-v-e3f53a6d>Для безпеки та запобігання шахрайству.</li><li data-v-e3f53a6d>Для обмеження додатку для учнів Ліцею173</li></ul><h3 data-v-e3f53a6d>3. Чи передаємо ми дані третім особам?</h3><p data-v-e3f53a6d>Ні, ми не продаємо, не обмінюємо і не передаємо ваші особисті дані третім особам, за винятком:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>У випадку офіційного запиту з боку керівництва ліцею з обґрунтованою метою (наприклад, для адміністративних чи освітніх потреб). </li><li data-v-e3f53a6d>У випадках, передбачених чинним законодавством України. </li></ul><h3 data-v-e3f53a6d>4. Ваші права</h3><p data-v-e3f53a6d>Ви маєте право:</p><ul data-v-e3f53a6d><li data-v-e3f53a6d>Отримати доступ до своїх даних.</li><li data-v-e3f53a6d>Вимагати їх оновлення або видалення.</li><li data-v-e3f53a6d>Відкликати згоду на обробку даних. Для цього напишіть на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-e3f53a6d>пошту технічної підтримки</a>.</li><li data-v-e3f53a6d></li></ul><h3 data-v-e3f53a6d>5. Безпека</h3><p data-v-e3f53a6d> Ми впроваджуємо відповідні технічні та організаційні заходи для захисту ваших даних. </p><h3 data-v-e3f53a6d>6. Зміни до політики</h3><p data-v-e3f53a6d>Ми можемо оновлювати цю політику. Зміни будуть опубліковані на цій сторінці. </p><h3 data-v-e3f53a6d>7. Контакти</h3><p data-v-e3f53a6d>Якщо у вас є питання щодо цієї політики, звертайтесь на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-e3f53a6d>chat-support@lyceum173.kyiv.ua</a></p></section></div></main>',1)),$(Gt)],64))}},Wb=he(Vb,[["__scopeId","data-v-e3f53a6d"]]),Fb={__name:"TOSView",setup(e){return ds(),K(""),K(""),K(""),(t,n)=>(H(),V(re,null,[$(qt),n[0]||(n[0]=Ct('<main class="main" data-v-3e9623ad><div class="main__container" data-v-3e9623ad><div class="hero" data-v-3e9623ad><div class="hero__text" data-v-3e9623ad><div class="hero__text__item" data-v-3e9623ad> Умови користування </div></div></div><section data-v-3e9623ad><p class="published-on" data-v-3e9623ad>Дата набуття чинності: 4 червня 2025 р.</p><p data-v-3e9623ad>Будь ласка, уважно прочитайте ці умови перед використанням вебдодатку «Ліцей №173». Використовуючи наш додаток, ви погоджуєтесь з наведеними нижче умовами. Якщо ви не згодні з будь-яким з пунктів, будь ласка, не використовуйте сервіс. </p><h3 data-v-3e9623ad>1. Загальні положення</h3><p data-v-3e9623ad>Цей додаток створений для учнів, викладачів та адміністрації Ліцею №173 з метою покращення навчального процесу та комунікації.</p><ul data-v-3e9623ad><li data-v-3e9623ad>Інформація з Google-акаунту (ім’я, електронна пошта, зображення профілю) — при вході через Google.</li><li data-v-3e9623ad>Інформація, яку ви надаєте вручну — наприклад, якщо ви заповнюєте форми на сайті.</li></ul><h3 data-v-3e9623ad>2. Реєстрація та аутентифікація</h3><ul data-v-3e9623ad><li data-v-3e9623ad>Для доступу до деяких функцій вам може знадобитися увійти через Google-акаунт або інші засоби авторизації.</li><li data-v-3e9623ad>Ви зобов’язуєтесь використовувати лише свої особисті облікові дані та не передавати доступ третім особам.</li></ul><h3 data-v-3e9623ad>3. Використання сервісу</h3><ul data-v-3e9623ad><li data-v-3e9623ad> Ви погоджуєтесь використовувати додаток лише в освітніх та організаційних цілях. </li><li data-v-3e9623ad>Заборонено завантаження або поширення образливого, неправдивого, неетичного чи незаконного контенту. </li><li data-v-3e9623ad> Адміністрація залишає за собою право тимчасово або повністю обмежити доступ до сервісу при порушенні правил. </li></ul><h3 data-v-3e9623ad>4. Збір та обробка даних</h3><p data-v-3e9623ad>Ви маєте право:</p><ul data-v-3e9623ad><li data-v-3e9623ad>Ми можемо збирати мінімальні персональні дані, необхідні для роботи сервісу.</li><li data-v-3e9623ad>Дані можуть бути передані адміністрації ліцею у разі обґрунтованої потреби.</li><p data-v-3e9623ad>Для детальнішої інформації перегляньте нашу <a href="/privacy-policy" data-v-3e9623ad>Політику конфіденційності</a>.</p></ul><h3 data-v-3e9623ad>5. Відповідальність</h3><p data-v-3e9623ad> Ми прагнемо забезпечити безперебійну та безпечну роботу додатку, але не несемо відповідальності за можливі тимчасові збої, втрату доступу чи інші технічні несправності. </p><h3 data-v-3e9623ad>6. Зміни до умов</h3><p data-v-3e9623ad>Ми можемо періодично оновлювати ці умови. Про важливі зміни ви будете повідомлені у додатку або через електронну пошту. </p><h3 data-v-3e9623ad>7. Контакти</h3><p data-v-3e9623ad>Якщо у вас є питання щодо цих умов, звертайтесь на <a href="mailto:chat-support@lyceum173.kyiv.ua" data-v-3e9623ad>chat-support@lyceum173.kyiv.ua</a></p></section></div></main>',1)),$(Gt)],64))}},zb=he(Fb,[["__scopeId","data-v-3e9623ad"]]),Kb={class:"main"},qb={class:"main__container"},Gb={class:"account"},Jb={class:"account__mail"},Yb={__name:"DashboardView",setup(e){const t=K("");return Wt(()=>{k_(ii,n=>{n&&(t.value=n.email)})}),K([]),(n,s)=>(H(),V(re,null,[$(qt),p("main",Kb,[p("div",qb,[p("div",Gb,[p("div",Jb,me(t.value),1),s[0]||(s[0]=Ct('<div class="account__points" data-v-a67e9905><span data-v-a67e9905>173</span><svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a67e9905><g clip-path="url(#clip0_24_18)" data-v-a67e9905><circle cx="50" cy="50" r="47" fill="#C5FDF6" stroke="#2DBDAA" stroke-width="6" data-v-a67e9905></circle><path d="M51.0263 64.008C55.0796 64.008 58.3436 62.6427 60.8183 59.912L64.1463 63.88C62.6529 65.672 60.7543 67.0373 58.4503 67.976C56.1889 68.9147 53.6503 69.384 50.8343 69.384C47.2503 69.384 44.0716 68.6587 41.2983 67.208C38.5249 65.7147 36.3703 63.6453 34.8343 61C33.3409 58.3547 32.5943 55.368 32.5943 52.04C32.5943 48.7547 33.3196 45.7893 34.7703 43.144C36.2636 40.4987 38.2903 38.4507 40.8503 37C43.4529 35.5067 46.3756 34.76 49.6183 34.76C52.6903 34.76 55.4849 35.464 58.0023 36.872C60.5196 38.2373 62.5249 40.1787 64.0183 42.696C65.5116 45.2133 66.2796 48.1147 66.3223 51.4L39.3783 56.648C40.2316 58.9947 41.6609 60.808 43.6663 62.088C45.7143 63.368 48.1676 64.008 51.0263 64.008ZM49.6183 39.944C47.4849 39.944 45.5649 40.4347 43.8583 41.416C42.1943 42.3973 40.8929 43.784 39.9543 45.576C39.0156 47.3253 38.5463 49.3733 38.5463 51.72V52.36L60.2423 48.264C59.6876 45.7893 58.4503 43.784 56.5303 42.248C54.6103 40.712 52.3063 39.944 49.6183 39.944Z" fill="#2DBDAA" data-v-a67e9905></path></g><defs data-v-a67e9905><clipPath id="clip0_24_18" data-v-a67e9905><rect width="100" height="100" fill="white" data-v-a67e9905></rect></clipPath></defs></svg></div>',1))]),s[1]||(s[1]=p("a",{href:"/signout/"},"SignOut",-1))])]),$(Gt)],64))}},Xb=he(Yb,[["__scopeId","data-v-a67e9905"]]),Zb={__name:"SignOut",setup(e){return C_(ii).then(t=>{as.push("/auth/")}),(t,n)=>(H(),V(re,null,[$(qt),n[0]||(n[0]=p("main",{class:"main"},[p("div",{class:"main__container"})],-1)),$(Gt)],64))}},Qb=he(Zb,[["__scopeId","data-v-951969b4"]]),e1={class:"header"},t1={class:"header__container"},n1={key:0,class:"dropdown"},s1={__name:"HeaderLogin",setup(e){const t=K(!1);return console.log(window.location.pathname==="/nmt/login"),t.value=window.location.pathname!=="/nmt/login",(n,s)=>(H(),V("header",e1,[p("div",t1,[p("a",{href:"/nmt/",onDrag:s[0]||(s[0]=Nt(()=>{},["prevent"])),onDragstart:s[1]||(s[1]=Nt(()=>{},["prevent"]))},s[2]||(s[2]=[p("h1",null,[p("mark",null,"NMT"),G("Lyceum173")],-1)]),32),t.value?(H(),V("div",n1,s[3]||(s[3]=[p("div",{class:"dropdown__name"},[p("a",{href:"/nmt/dashboard"},"Pryima")],-1),p("div",{class:"dropdown__icon"},[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",class:"injected-svg","data-src":"https://cdn.hugeicons.com/icons/arrow-up-01-solid-standard.svg","xmlns:xlink":"http://www.w3.org/1999/xlink",role:"img",color:"#000000"},[p("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.4697 8.46967C11.7626 8.17678 12.2374 8.17678 12.5303 8.46967L18.5303 14.4697C18.7448 14.6842 18.809 15.0068 18.6929 15.287C18.5768 15.5673 18.3033 15.75 18 15.75H6C5.69665 15.75 5.42318 15.5673 5.30709 15.287C5.191 15.0068 5.25517 14.6842 5.46967 14.4697L11.4697 8.46967Z",fill:"#000000"})])],-1)]))):ze("",!0)])]))}},Qu=he(s1,[["__scopeId","data-v-4411cb6c"]]),i1={class:"main"},r1={class:"main__container"},o1={class:"form-field text-username"},a1={class:"form-field password-password"},c1={class:"footer"},l1={class:"footer__container"},u1={class:"footer__partners"},d1={class:"partner-item"},f1={class:"partner-item"},h1={class:"partner-item"},p1={class:"log-dialog"},m1={__name:"LoginView",setup(e){const t=K(""),n=K("");fs({title:"НМТ | Авторизація"});const s=K(!1);Wt(()=>{window.addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey)&&a.key.toLowerCase()==="l"&&(a.preventDefault(),prompt("Auth Code")==="log092n"&&(s.value=!0))})});function i(){s.value=!1}function r(a){document.querySelector(".auth-error").removeAttribute("hidden")}const o=K([]);return Wt(()=>{const a=console.log;console.log=function(...c){o.value.push(c.join(" ")),a.apply(console,c)},console.log("Hello World"),console.log("Another log"),console.log(window.navigator.userAgent),document.getElementById("login-username"),document.getElementById("login-password"),document.getElementById("login").addEventListener("submit",()=>{t.value==="tst2195"?n.value==="tn71p8"&&console.log("authed for demo"):(document.querySelector(".auth-error").setAttribute("hidden",!0),setTimeout(()=>{r()},300))})}),(a,c)=>(H(),V(re,null,[$(Qu),p("main",i1,[p("div",r1,[p("form",{id:"login",class:"login-form",tabindex:"-1",onSubmit:c[2]||(c[2]=Nt(()=>{},["prevent"]))},[c[10]||(c[10]=p("div",{class:"auth-error",hidden:""},[p("h4",null,"Неможливо увійти."),p("ul",null,[p("li",null,"Невірно введені логін або пароль.")])],-1)),c[11]||(c[11]=p("h2",null,"Увійти",-1)),p("div",o1,[c[6]||(c[6]=p("label",{for:"login-username"},[p("span",{class:"label-text"},"Логін"),p("span",{id:"login-username-required-label",class:"label-required"}),p("span",{class:"icon fa",id:"login-username-validation-icon"})],-1)),js(p("input",{id:"login-username",type:"text",name:"username","onUpdate:modelValue":c[0]||(c[0]=l=>t.value=l),"aria-describedby":"login-username-desc login-username-validation-error",minlength:"3",maxlength:"254",required:"",value:""},null,512),[[zs,t.value]]),c[7]||(c[7]=Ct('<span id="login-username-validation-error" class="tip error" aria-live="assertive" data-v-62b539f3><span class="sr-only" data-v-62b539f3></span><span id="login-username-validation-error-msg" data-v-62b539f3><ul class="fa-ul" data-v-62b539f3></ul></span></span><span class="tip tip-input" id="login-username-desc" data-v-62b539f3>Уведіть логін, отриманий для входу до системи</span>',2))]),p("div",a1,[c[8]||(c[8]=p("label",{for:"login-password"},[p("span",{class:"label-text"},"Пароль"),p("span",{id:"login-password-required-label",class:"label-required hidden"}),p("span",{class:"icon fa",id:"login-password-validation-icon","aria-hidden":"true"})],-1)),js(p("input",{id:"login-password",type:"password",name:"password",class:"input-block",required:"",value:"","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[zs,n.value]]),c[9]||(c[9]=p("span",{id:"login-password-validation-error",class:"tip error","aria-live":"assertive"},[p("span",{class:"sr-only"}),p("span",{id:"login-password-validation-error-msg"},[p("ul",{class:"fa-ul"})])],-1))]),c[12]||(c[12]=p("button",{type:"submit",class:"action action-primary action-update js-login login-button"},"Увійти",-1))],32)])]),p("footer",c1,[p("div",l1,[c[13]||(c[13]=p("h2",null,"СТВОРЕНО ЗА ПІДТРИМКИ",-1)),p("div",u1,[p("div",d1,[p("img",{src:"https://lyceum173.kyiv.ua/assets/img/template/logo_small.webp",alt:"",onDragstart:c[3]||(c[3]=Nt(()=>{},["prevent"]))},null,32)]),p("div",f1,[p("img",{src:"https://pryima-oleksandr.web.app/assets/logo-header-CYQuUW4g.png",alt:"",onDragstart:c[4]||(c[4]=Nt(()=>{},["prevent"]))},null,32)]),p("div",h1,[p("img",{src:"https://roskad.work/assets/img/roskad.jpg",alt:"",onDragstart:c[5]||(c[5]=Nt(()=>{},["prevent"]))},null,32)])])])]),s.value?(H(),V("div",{key:0,class:"log-dialog-overlay",onClick:Nt(i,["self"])},[p("div",p1,[c[14]||(c[14]=p("h3",null,"Console Logs",-1)),p("pre",null,me(o.value.join(`
`)),1),p("button",{onClick:i},"Close")])])):ze("",!0)],64))}},g1=he(m1,[["__scopeId","data-v-62b539f3"]]),v1={class:"main__container"},_1={key:0,class:"form-after"},y1={key:1,class:"form",id:"authForm"},b1={key:2,class:"page__content"},w1={__name:"AdminLogin",setup(e){const t=K(!1);return K(null),Wt(()=>{document.getElementById("authForm").addEventListener("submit",n=>{n.preventDefault()})}),(n,s)=>{const i=lt("router-link");return H(),V(re,null,[t.value?(H(),ls(hs,{key:0})):ze("",!0),p("main",{class:St(["main",{auth:!t.value}])},[p("div",v1,[t.value?ze("",!0):(H(),V("div",_1)),t.value?(H(),V("div",b1,[p("aside",null,[p("nav",null,[$(i,{to:"/manager/"},{default:de(()=>s[1]||(s[1]=[G("Головна")])),_:1}),$(i,{to:"/manager/posts/"},{default:de(()=>s[2]||(s[2]=[G("Публікації")])),_:1}),$(i,{to:"/"},{default:de(()=>s[3]||(s[3]=[G("Сайт")])),_:1})])]),s[4]||(s[4]=p("div",{class:"content"}," asff ",-1))])):(H(),V("form",y1,s[0]||(s[0]=[Ct('<div class="form__content" data-v-db9600d2><h1 class="logo" data-v-db9600d2><mark data-v-db9600d2>NMT</mark>Lyceum173</h1><p data-v-db9600d2>Адміністрування</p><br data-v-db9600d2><div class="input" data-v-db9600d2><label for="username" data-v-db9600d2>Login</label><input type="text" placeholder="-" id="username" data-v-db9600d2></div><div class="input" data-v-db9600d2><label for="password" data-v-db9600d2>Password</label><input type="password" placeholder="-" id="password" data-v-db9600d2></div><br data-v-db9600d2><br data-v-db9600d2><button data-v-db9600d2><span id="auth-button-text" data-v-db9600d2> Увійти </span><div class="loading" id="auth-button-loading" data-v-db9600d2><span data-v-db9600d2></span><span data-v-db9600d2></span><span data-v-db9600d2></span></div></button><br data-v-db9600d2></div>',1)])))])],2)],64)}}},I1=he(w1,[["__scopeId","data-v-db9600d2"]]),T1={class:"main"},E1={class:"main__container"},S1={key:0,class:"exam-item"},k1={class:"exam-item__info"},C1={id:"test-title"},A1={key:0},P1={key:1},R1={__name:"DashboarView",setup(e){K(""),K(""),fs({title:"НМТ | Авторизація"}),Wt(()=>{});const t=K("Demo 2025");return(n,s)=>(H(),V(re,null,[$(Qu),p("main",T1,[p("div",E1,[s[2]||(s[2]=p("p",null,"Вступні випробування",-1)),n.testEnded?ze("",!0):(H(),V("div",S1,[s[1]||(s[1]=p("div",{class:"exam-item__image",disabled:""},[p("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[p("path",{d:"M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"})])],-1)),p("div",k1,[p("p",C1,me(t.value),1),p("button",{onClick:s[0]||(s[0]=(...i)=>n.startExam&&n.startExam(...i)),disabled:"",id:"start-exam",class:"exam-button"},[n.testEnded?(H(),V("p",A1,"ТЕСТУВАННЯ ЗАВЕРШЕНО")):(H(),V("p",P1," ПЕРЕЙТИ ДО ТЕСТУ"))])])])),s[3]||(s[3]=Ct('<div class="agreement-section" hidden data-v-608c7fe6><div class="agreement-content" id="agreementContent" data-v-608c7fe6><div class="agreement-content__text" data-v-608c7fe6><div class="agreement-content-text" data-v-608c7fe6><p data-v-608c7fe6>Ви увійшли на персональну сторінку в програмному засобі, за допомогою якого проводять НМТ (далі – сервіс НМТ).<strong data-v-608c7fe6> Перевірте</strong>, будь ласка, чи <strong data-v-608c7fe6>зазначені </strong>нижче<strong data-v-608c7fe6> прізвище, ім’я, по батькові</strong> (за наявності) та <strong data-v-608c7fe6>номер Сертифіката збігаються з Вашими</strong>. Якщо ні ‒ повідомте про це старшого інструктора.</p><p data-v-608c7fe6>    ПІБ - <b data-v-608c7fe6>Прийіа Олександр</b>.<br data-v-608c7fe6>     Номер сертифіката - <b data-v-608c7fe6>749326969</b></p><p data-v-608c7fe6>Ознайомтеся з правилами проходження НМТ та правилами роботи із сервісом НМТ.</p><p data-v-608c7fe6><strong data-v-608c7fe6>Правила проходження НМТ</strong></p><p data-v-608c7fe6>1) ввічливо ставитися до учасників НМТ і працівників ТЕЦ;<br data-v-608c7fe6> 2) виконувати вказівки та вимоги працівників ТЕЦ щодо процедури проходження НМТ;<br data-v-608c7fe6> 3) ознайомитися з правилами проходження НМТ, підтвердити факт ознайомлення з ними та дотримуватися їх;<br data-v-608c7fe6> 4) після завершення часу, відведеного на виконання завдань, повернути старшому інструктору надані аркуші паперу для власних записів (далі – чернетка) та інші матеріали НМТ.</p><p data-v-608c7fe6><strong data-v-608c7fe6>Вам заборонено</strong>:</p><p data-v-608c7fe6>1) мати небезпечні предмети або речовини, що становлять загрозу для життя і здоров’я людини;<br data-v-608c7fe6> 2) копіювати (переписувати) завдання НМТ;<br data-v-608c7fe6> 3) виносити за межі аудиторії чернетку та інші матеріали НМТ;<br data-v-608c7fe6> 4) використовувати засоби зв’язку, пристрої зчитування, обробки, збереження, приймання, передавання та відтворення інформації під час перерви між етапами та протягом часу перебування в укритті.<br data-v-608c7fe6> 5) протягом часу, відведеного на виконання завдань:</p><ul data-v-608c7fe6><li data-v-608c7fe6>порушувати правила проходження НМТ;</li><li data-v-608c7fe6>заважати іншим учасникам;</li><li data-v-608c7fe6>спілкуватися в будь-якій формі з іншим учасником, отримувати від нього чи передавати йому інформацію або матеріальні носії інформації; </li><li data-v-608c7fe6>користуватися ресурсами мережі Інтернет, не передбачені процедурою НМТ;</li><li data-v-608c7fe6>мати при собі або на своєму робочому місці засоби зв’язку, пристрої зчитування, обробки, збереження, приймання, передавання та відтворення інформації, а також окремі елементи, які можуть бути складовими частинами відповідних технічних засобів чи пристроїв, друковані або рукописні матеріали, інші засоби, предмети, прилади, що не передбачені процедурою НМТ (крім дозволених виробів медичного призначення, про наявність яких маєте повідомити працівників ТЕЦ до початку виконання роботи).</li></ul><p data-v-608c7fe6>Пам’ятайте, що в разі невиконання цих вимог Вас буде позбавлено права продовжувати роботу над тестом, а Ваші <strong data-v-608c7fe6>результати анулюють</strong>.</p><p data-v-608c7fe6><strong data-v-608c7fe6>Повідомте </strong>старшому інструктору, якщо у Вас <strong data-v-608c7fe6>погіршився стан здоров’я</strong> чи виникли <strong data-v-608c7fe6>проблеми в роботі сервісу НМТ</strong>.</p><p data-v-608c7fe6>Якщо Ви вважаєте, що щодо Вас допущено порушення процедури проведення НМТ, що може вплинути на Ваш результат, – <strong data-v-608c7fe6>до виходу з ТЕЦ</strong> подайте <strong data-v-608c7fe6>відповідальному за ТЕЦ апеляційну заяву</strong> щодо порушення процедури. Зауважте, подати таку заяву <strong data-v-608c7fe6>після виходу </strong>з ТЕЦ<strong data-v-608c7fe6> не можна.</strong></p><p data-v-608c7fe6>У разі <strong data-v-608c7fe6>оголошення повітряної тривоги</strong> Вас буде повідомлено про це, а <strong data-v-608c7fe6>роботу</strong> над тестом <strong data-v-608c7fe6>заблоковано</strong>. Ви матимете чітко дотримуватися вказівок старшого інструктора.</p><p data-v-608c7fe6>Якщо Ви <strong data-v-608c7fe6>не зможете завершити виконання роботи</strong> через виникнення нестандартних ситуацій в ТЕЦ або через різке погіршення стану здоров’я – Вам <strong data-v-608c7fe6>буде надано змогу</strong> пройти тест під час <strong data-v-608c7fe6>додаткових </strong>сесій (якщо в установлені терміни подасте заяву щодо участі в додаткових сесіях).</p><p data-v-608c7fe6>Після завершення виконання <strong data-v-608c7fe6>завдань кожного етапу</strong> Ви маєте підійти до старшого інструктора, <strong data-v-608c7fe6>здати чернетку</strong> й поставити підпис в Аудиторному протоколі.</p><p data-v-608c7fe6><strong data-v-608c7fe6>Правила роботи із сервісом НМТ</strong></p><p data-v-608c7fe6>Після натискання на кнопку «Розпочати роботу над тестом» Ви маєте ввести код доступу, який повідомить старший інструктор, після чого автоматично розпочнеться відлік часу, відведеного на виконання завдань. Розпочати роботу Ви можете з будь-якого предмета певного етапу. Час між предметами розподіляйте самостійно. Переходячи від одного предмета до іншого, уважно читайте спливні повідомлення. Повернутися до виконання завдань з окремого предмета й надати та зберегти відповіді можна протягом усього часу, відведеного на виконання завдань тільки певного етапу. Зауважте: після завершення першого етапу повернутися до виконання завдань з української мови та математики буде неможливо.</p><p data-v-608c7fe6>Для зарахування відповіді на завдання потрібно натиснути на кнопку «Зберегти відповідь», для виправлення відповіді – вибрати інший варіант і повторно натиснути на кнопку «Зберегти відповідь». На бічній панелі справа відображатиметься інформація про опрацювання Вами завдань.</p><p data-v-608c7fe6>За потреби можете користуватися довідковими матеріалами, що містяться у вкладці «Довідкові матеріали».</p><p data-v-608c7fe6>Якщо дочасно завершите роботу над завданнями відповідного етапу ‒ можете завершити його, натиснувши на кнопку «Завершити роботу над тестом». <strong data-v-608c7fe6>Будьте уважні</strong>: на екрані з’явиться напис з інформацією про те, на які завдання Ви не надали та/або не зберегли відповідей, – поверніться до них, надайте і збережіть відповіді.</p><p data-v-608c7fe6>Після натискання на кнопку «Завершити роботу над тестом» буде зараховано тільки збережені відповіді, а повернутися до завдань буде неможливо.</p></div></div><div class="agreement-content__control" data-v-608c7fe6><div class="agreement-content-control" data-v-608c7fe6><div class="agreement-content-control__countdown_timer" data-v-608c7fe6><span id="countdownTimer" class="timer" data-v-608c7fe6></span></div><button id="acceptAgreementButton" class="btn" disabled data-v-608c7fe6>З правилами та правами ознайомився/ознайомилася</button></div></div></div></div>',1))])])],64))}},O1=he(R1,[["__scopeId","data-v-608c7fe6"]]),as=_p({history:Gh("/"),routes:[{path:"/",name:"home",component:Im},{path:"/privacy-policy",name:"privacy-policy",component:Wb},{path:"/terms-of-service",name:"terms-of-service",component:zb},{path:"/news/",name:"news",component:Um},{path:"/news/:id/",name:"news-view",component:Jm},{path:"/auth/",name:"auth",component:bb},{path:"/signout/",name:"signout",component:Qb},{path:"/dashboard/",name:"dashboard",component:Xb},{path:"/manager/",name:"manager-auth",component:db},{path:"/manager/posts/",name:"manager-posts",component:Rb},{path:"/manager/posts/:id/edit",name:"manager-post-edit",component:Bb},{path:"/:pathMatch(.*)*",name:"404",component:wa},{path:"/:pathMatch(.*\\.json)",name:"BlockJSON",component:wa},{path:"/nmt/",redirect:"/nmt/login"},{path:"/nmt/login",name:"nmt-login",component:g1},{path:"/nmt/dashboard/",name:"nmt-dashboard",component:O1},{path:"/nmt/admin/",name:"nmt-admin",component:I1}]}),x1="0.3.6";console.log(`%cApp Version: ${x1}`,"background: #2dbdaa; color: white; padding: 4px; border-radius: 4px;");const M1=bm(),co=mh(bp);co.use(M1);co.use(as);co.mount("#app");
