"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[751],{6144:function(e,t,o){o.d(t,{Z:function(){return l}});var n=o(3396);const a={key:0,class:"w-100 text-center text-red-accent-3 py-1"};var r={__name:"ErrorInputLogin",props:{statePopup:Boolean},setup(e){return(t,o)=>e.statePopup?((0,n.wg)(),(0,n.iD)("div",a,[(0,n.WI)(t.$slots,"default")])):(0,n.kq)("",!0)}};const i=r;var l=i},4895:function(e,t,o){o.d(t,{Z:function(){return u}});var n=o(3396);const a=e=>((0,n.dD)("data-v-28bf1660"),e=e(),(0,n.Cn)(),e),r={key:0,class:"popup elevation-6 rounded-lg text-white overflow-hidden pa-2 d-flex justify-center align-center"},i=a((()=>(0,n._)("div",{class:"container-bar"},[(0,n._)("div",{class:"bar"})],-1)));var l={__name:"AlertPopupPanel",props:{statePopupPanel:Boolean},setup(e){return(t,o)=>e.statePopupPanel?((0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("span",null,[(0,n.WI)(t.$slots,"default")]),i])):(0,n.kq)("",!0)}},s=o(89);const c=(0,s.Z)(l,[["__scopeId","data-v-28bf1660"]]);var u=c},9221:function(e,t,o){o.d(t,{B:function(){return He}});var n=o(3396),a=o(9242),r=o(1107);class i{constructor(e){let{x:t,y:o,width:n,height:a}=e;this.x=t,this.y=o,this.width=n,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function l(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function s(e){const t=e.getBoundingClientRect(),o=getComputedStyle(e),n=o.transform;if(n){let a,r,l,s,c;if(n.startsWith("matrix3d("))a=n.slice(9,-1).split(/, /),r=+a[0],l=+a[5],s=+a[12],c=+a[13];else{if(!n.startsWith("matrix("))return new i(t);a=n.slice(7,-1).split(/, /),r=+a[0],l=+a[3],s=+a[4],c=+a[5]}const u=o.transformOrigin,v=t.x-s-(1-r)*parseFloat(u),d=t.y-c-(1-l)*parseFloat(u.slice(u.indexOf(" ")+1)),f=r?t.width/r:e.offsetWidth+1,p=l?t.height/l:e.offsetHeight+1;return new i({x:v,y:d,width:f,height:p})}return new i(t)}function c(e,t,o){if("undefined"===typeof e.animate)return{finished:Promise.resolve()};let n;try{n=e.animate(t,o)}catch(a){return{finished:Promise.resolve()}}return"undefined"===typeof n.finished&&(n.finished=new Promise((e=>{n.onfinish=()=>{e(n)}}))),n}const u="cubic-bezier(0.4, 0, 0.2, 1)",v="cubic-bezier(0.0, 0, 0.2, 1)",d="cubic-bezier(0.4, 0, 1, 1)",f=(0,r.ev)()({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:o}=t;const r={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,o){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility="";const{x:n,y:a,sx:r,sy:i,speed:l}=y(e.target,t),s=c(t,[{transform:`translate(${n}px, ${a}px) scale(${r}, ${i})`,opacity:0},{}],{duration:225*l,easing:v});p(t)?.forEach((e=>{c(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*l,easing:u})})),s.finished.then((()=>o()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,o){await new Promise((e=>requestAnimationFrame(e)));const{x:n,y:a,sx:r,sy:i,speed:l}=y(e.target,t),s=c(t,[{},{transform:`translate(${n}px, ${a}px) scale(${r}, ${i})`,opacity:0}],{duration:125*l,easing:d});s.finished.then((()=>o())),p(t)?.forEach((e=>{c(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*l,easing:u})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>e.target?(0,n.Wm)(a.uT,(0,n.dG)({name:"dialog-transition"},r,{css:!1}),o):(0,n.Wm)(a.uT,{name:"dialog-transition"},o)}});function p(e){const t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;return t&&[...t]}function y(e,t){const o=e.getBoundingClientRect(),n=s(t),[a,r]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[i,l]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let c=o.left+o.width/2;"left"===i||"left"===l?c-=o.width/2:"right"!==i&&"right"!==l||(c+=o.width/2);let u=o.top+o.height/2;"top"===i||"top"===l?u-=o.height/2:"bottom"!==i&&"bottom"!==l||(u+=o.height/2);const v=o.width/n.width,d=o.height/n.height,f=Math.max(1,v,d),p=v/f||0,y=d/f||0,m=n.width*n.height/(window.innerWidth*window.innerHeight),h=m>.12?Math.min(1.5,10*(m-.12)+1):1;return{x:c-(a+n.left),y:u-(r+n.top),sx:p,sy:y,speed:h}}var m=o(836),h=o(3766),g=o(2385);const b=(0,h.U)({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function w(e,t){const o={},n=n=>()=>{if(!g.BR)return Promise.resolve(!0);const a="openDelay"===n;return o.closeDelay&&window.clearTimeout(o.closeDelay),delete o.closeDelay,o.openDelay&&window.clearTimeout(o.openDelay),delete o.openDelay,new Promise((r=>{const i=parseInt(e[n]??0,10);o[n]=window.setTimeout((()=>{t?.(a),r(a)}),i)}))};return{runCloseDelay:n("closeDelay"),runOpenDelay:n("openDelay")}}const x=Symbol.for("vuetify:v-menu");var E=o(131),k=o(7514),O=o(4870);const P=(0,h.U)({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...b()},"v-overlay-activator");function S(e,t){let{isActive:o,isTop:a}=t;const r=(0,O.iH)();let i=!1,l=!1,s=!0;const c=(0,n.Fl)((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),u=(0,n.Fl)((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!c.value)),{runOpenDelay:v,runCloseDelay:d}=w(e,(t=>{t!==(e.openOnHover&&i||c.value&&l)||e.openOnHover&&o.value&&!a.value||(o.value!==t&&(s=!0),o.value=t)})),f={click:e=>{e.stopPropagation(),r.value=e.currentTarget||e.target,o.value=!o.value},mouseenter:e=>{e.sourceCapabilities?.firesTouchEvents||(i=!0,r.value=e.currentTarget||e.target,v())},mouseleave:e=>{i=!1,d()},focus:e=>{g.Z1&&!e.target.matches(":focus-visible")||(l=!0,e.stopPropagation(),r.value=e.currentTarget||e.target,v())},blur:e=>{l=!1,e.stopPropagation(),d()}},p=(0,n.Fl)((()=>{const t={};return u.value&&(t.click=f.click),e.openOnHover&&(t.mouseenter=f.mouseenter,t.mouseleave=f.mouseleave),c.value&&(t.focus=f.focus,t.blur=f.blur),t})),y=(0,n.Fl)((()=>{const t={};if(e.openOnHover&&(t.mouseenter=()=>{i=!0,v()},t.mouseleave=()=>{i=!1,d()}),e.closeOnContentClick){const e=(0,n.f3)(x,null);t.click=()=>{o.value=!1,e?.closeParents()}}return t})),m=(0,n.Fl)((()=>{const t={};return e.openOnHover&&(t.mouseenter=()=>{s&&(i=!0,s=!1,v())},t.mouseleave=()=>{i=!1,d()}),t}));(0,n.YP)(a,(t=>{!t||(!e.openOnHover||i||c.value&&l)&&(!c.value||l||e.openOnHover&&i)||(o.value=!1)}));const h=(0,O.iH)();(0,n.m0)((()=>{h.value&&(0,n.Y3)((()=>{const e=h.value;r.value=(0,E.rU)(e)?e.$el:e}))}));const b=(0,k.FN)("useActivator");let P;return(0,n.YP)((()=>!!e.activator),(t=>{t&&g.BR?(P=(0,O.B)(),P.run((()=>{F(e,b,{activatorEl:r,activatorEvents:p})}))):P&&P.stop()}),{flush:"post",immediate:!0}),(0,O.EB)((()=>{P?.stop()})),{activatorEl:r,activatorRef:h,activatorEvents:p,contentEvents:y,scrimEvents:m}}function F(e,t,o){let{activatorEl:a,activatorEvents:r}=o;function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(r.value).forEach((e=>{let[o,n]=e;t.addEventListener(o,n)})),Object.keys(o).forEach((e=>{null==o[e]?t.removeAttribute(e):t.setAttribute(e,o[e])})))}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps;t&&(Object.entries(r.value).forEach((e=>{let[o,n]=e;t.removeEventListener(o,n)})),Object.keys(o).forEach((e=>{t.removeAttribute(e)})))}function s(){let o,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator;if(n)if("parent"===n){let e=t?.proxy?.$el?.parentNode;while(e.hasAttribute("data-no-activator"))e=e.parentNode;o=e}else o="string"===typeof n?document.querySelector(n):"$el"in n?n.$el:n;return a.value=o?.nodeType===Node.ELEMENT_NODE?o:null,a.value}(0,n.YP)((()=>e.activator),((e,t)=>{if(t&&e!==t){const e=s(t);e&&l(e)}e&&(0,n.Y3)((()=>i()))}),{immediate:!0}),(0,n.YP)((()=>e.activatorProps),(()=>{i()})),(0,O.EB)((()=>{l()}))}var B=o(9166),C=o(4544),A=o(1136);o(7658);function R(e){while(e){if("fixed"===window.getComputedStyle(e).position)return!0;e=e.offsetParent}return!1}var L=o(2879);function W(e){while(e){if(_(e))return e;e=e.parentElement}return document.scrollingElement}function H(e,t){const o=[];if(t&&e&&!t.contains(e))return o;while(e){if(_(e)&&o.push(e),e===t)break;e=e.parentElement}return o}function _(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}var T=o(6033);function D(e,t){return{x:e.x+t.x,y:e.y+t.y}}function $(e,t){return{x:e.x-t.x,y:e.y-t.y}}function M(e,t){if("top"===e.side||"bottom"===e.side){const{side:o,align:n}=e,a="left"===n?0:"center"===n?t.width/2:"right"===n?t.width:n,r="top"===o?0:"bottom"===o?t.height:o;return D({x:a,y:r},t)}if("left"===e.side||"right"===e.side){const{side:o,align:n}=e,a="left"===o?0:"right"===o?t.width:o,r="top"===n?0:"center"===n?t.height/2:"bottom"===n?t.height:n;return D({x:a,y:r},t)}return D({x:t.width/2,y:t.height/2},t)}var N=o(4770);const I={static:V,connected:z},Y=(0,h.U)({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"===typeof e||e in I},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function q(e,t){const o=(0,O.iH)({}),a=(0,O.iH)();function r(e){a.value?.(e)}return g.BR&&((0,N.U)((()=>!(!t.isActive.value||!e.locationStrategy)),(r=>{(0,n.YP)((()=>e.locationStrategy),r),(0,O.EB)((()=>{a.value=void 0})),"function"===typeof e.locationStrategy?a.value=e.locationStrategy(t,e,o)?.updateLocation:a.value=I[e.locationStrategy](t,e,o)?.updateLocation})),window.addEventListener("resize",r,{passive:!0}),(0,O.EB)((()=>{window.removeEventListener("resize",r),a.value=void 0}))),{contentStyles:o,updateLocation:a}}function V(){}function j(e,t){const o=s(e);return t?o.x+=parseFloat(e.style.right||0):o.x-=parseFloat(e.style.left||0),o.y-=parseFloat(e.style.top||0),o}function z(e,t,o){const a=R(e.activatorEl.value);a&&Object.assign(o.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:s}=(0,E.S3)((()=>{const o=(0,L.wW)(t.location,e.isRtl.value),n="overlap"===t.origin?o:"auto"===t.origin?(0,L.tb)(o):(0,L.wW)(t.origin,e.isRtl.value);return o.side===n.side&&o.align===(0,L.aw)(n).align?{preferredAnchor:(0,L.Oe)(o),preferredOrigin:(0,L.Oe)(n)}:{preferredAnchor:o,preferredOrigin:n}})),[c,u,v,d]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>(0,n.Fl)((()=>{const o=parseFloat(t[e]);return isNaN(o)?1/0:o})))),f=(0,n.Fl)((()=>{if(Array.isArray(t.offset))return t.offset;if("string"===typeof t.offset){const e=t.offset.split(" ").map(parseFloat);return e.length<2&&e.push(0),e}return"number"===typeof t.offset?[t.offset,0]:[0,0]}));let p=!1;const y=new ResizeObserver((()=>{p&&m()}));function m(){if(p=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>p=!0))})),!e.activatorEl.value||!e.contentEl.value)return;const t=e.activatorEl.value.getBoundingClientRect(),n=j(e.contentEl.value,e.isRtl.value),a=H(e.contentEl.value),y=12;a.length||(a.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(n.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),n.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const m=a.reduce(((e,t)=>{const o=t.getBoundingClientRect(),n=new i({x:t===document.documentElement?0:o.x,y:t===document.documentElement?0:o.y,width:t.clientWidth,height:t.clientHeight});return e?new i({x:Math.max(e.left,n.left),y:Math.max(e.top,n.top),width:Math.min(e.right,n.right)-Math.max(e.left,n.left),height:Math.min(e.bottom,n.bottom)-Math.max(e.top,n.top)}):n}),void 0);m.x+=y,m.y+=y,m.width-=2*y,m.height-=2*y;let h={anchor:r.value,origin:s.value};function g(e){const o=new i(n),a=M(e.anchor,t),r=M(e.origin,o);let{x:s,y:c}=$(a,r);switch(e.anchor.side){case"top":c-=f.value[0];break;case"bottom":c+=f.value[0];break;case"left":s-=f.value[0];break;case"right":s+=f.value[0];break}switch(e.anchor.align){case"top":c-=f.value[1];break;case"bottom":c+=f.value[1];break;case"left":s-=f.value[1];break;case"right":s+=f.value[1];break}o.x+=s,o.y+=c,o.width=Math.min(o.width,v.value),o.height=Math.min(o.height,d.value);const u=l(o,m);return{overflows:u,x:s,y:c}}let b=0,w=0;const x={x:0,y:0},k={x:!1,y:!1};let O=-1;while(1){if(O++>10){(0,T.N6)("Infinite loop detected in connectedLocationStrategy");break}const{x:e,y:t,overflows:o}=g(h);b+=e,w+=t,n.x+=e,n.y+=t;{const e=(0,L.dd)(h.anchor),t=o.x.before||o.x.after,n=o.y.before||o.y.after;let a=!1;if(["x","y"].forEach((r=>{if("x"===r&&t&&!k.x||"y"===r&&n&&!k.y){const t={anchor:{...h.anchor},origin:{...h.origin}},n="x"===r?"y"===e?L.aw:L.tb:"y"===e?L.tb:L.aw;t.anchor=n(t.anchor),t.origin=n(t.origin);const{overflows:i}=g(t);(i[r].before<=o[r].before&&i[r].after<=o[r].after||i[r].before+i[r].after<(o[r].before+o[r].after)/2)&&(h=t,a=k[r]=!0)}})),a)continue}o.x.before&&(b+=o.x.before,n.x+=o.x.before),o.x.after&&(b-=o.x.after,n.x-=o.x.after),o.y.before&&(w+=o.y.before,n.y+=o.y.before),o.y.after&&(w-=o.y.after,n.y-=o.y.after);{const e=l(n,m);x.x=m.width-e.x.before-e.x.after,x.y=m.height-e.y.before-e.y.after,b+=e.x.before,n.x+=e.x.before,w+=e.y.before,n.y+=e.y.before}break}const P=(0,L.dd)(h.anchor);return Object.assign(o.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:(0,E.kb)(U(w)),left:e.isRtl.value?void 0:(0,E.kb)(U(b)),right:e.isRtl.value?(0,E.kb)(U(-b)):void 0,minWidth:(0,E.kb)("y"===P?Math.min(c.value,t.width):c.value),maxWidth:(0,E.kb)(G((0,E.uZ)(x.x,c.value===1/0?0:c.value,v.value))),maxHeight:(0,E.kb)(G((0,E.uZ)(x.y,u.value===1/0?0:u.value,d.value)))}),{available:x,contentBox:n}}return(0,n.YP)([e.activatorEl,e.contentEl],((e,t)=>{let[o,n]=e,[a,r]=t;a&&y.unobserve(a),o&&y.observe(o),r&&y.unobserve(r),n&&y.observe(n)}),{immediate:!0}),(0,O.EB)((()=>{y.disconnect()})),(0,n.YP)((()=>[r.value,s.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight]),(()=>m())),(0,n.Y3)((()=>{const e=m();if(!e)return;const{available:t,contentBox:o}=e;o.height>t.y&&requestAnimationFrame((()=>{m(),requestAnimationFrame((()=>{m()}))}))})),{updateLocation:m}}function U(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function G(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Z=!0;const J=[];function K(e){!Z||J.length?(J.push(e),X()):(Z=!1,e(),X())}let Q=-1;function X(){cancelAnimationFrame(Q),Q=requestAnimationFrame((()=>{const e=J.shift();e&&e(),J.length?X():Z=!0}))}const ee={none:null,close:ne,block:ae,reposition:re},te=(0,h.U)({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"===typeof e||e in ee}},"v-overlay-scroll-strategies");function oe(e,t){if(!g.BR)return;let o;(0,n.m0)((async()=>{o?.stop(),t.isActive.value&&e.scrollStrategy&&(o=(0,O.B)(),await(0,n.Y3)(),o.active&&o.run((()=>{"function"===typeof e.scrollStrategy?e.scrollStrategy(t,e,o):ee[e.scrollStrategy]?.(t,e,o)})))})),(0,O.EB)((()=>{o?.stop()}))}function ne(e){function t(t){e.isActive.value=!1}ie(e.activatorEl.value??e.contentEl.value,t)}function ae(e,t){const o=e.root.value?.offsetParent,n=[...new Set([...H(e.activatorEl.value,t.contained?o:void 0),...H(e.contentEl.value,t.contained?o:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),a=window.innerWidth-document.documentElement.offsetWidth,r=(e=>_(e)&&e)(o||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),n.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",(0,E.kb)(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",(0,E.kb)(-e.scrollTop)),e.style.setProperty("--v-scrollbar-offset",(0,E.kb)(a)),e.classList.add("v-overlay-scroll-blocked")})),(0,O.EB)((()=>{n.forEach(((e,t)=>{const o=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),n=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"));e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-o,e.scrollTop=-n})),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))}function re(e,t,o){let n=!1,a=-1,r=-1;function i(t){K((()=>{const o=performance.now();e.updateLocation.value?.(t);const a=performance.now()-o;n=a/(1e3/60)>2}))}r=("undefined"===typeof requestIdleCallback?e=>e():requestIdleCallback)((()=>{o.run((()=>{ie(e.activatorEl.value??e.contentEl.value,(e=>{n?(cancelAnimationFrame(a),a=requestAnimationFrame((()=>{a=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}))})),(0,O.EB)((()=>{"undefined"!==typeof cancelIdleCallback&&cancelIdleCallback(r),cancelAnimationFrame(a)}))}function ie(e,t){const o=[document,...H(e)];o.forEach((e=>{e.addEventListener("scroll",t,{passive:!0})})),(0,O.EB)((()=>{o.forEach((e=>{e.removeEventListener("scroll",t)}))}))}var le=o(7041),se=o(4906),ce=o(6183),ue=o(2370),ve=o(8157);function de(){if(!g.BR)return(0,O.iH)(!1);const{ssr:e}=(0,ve.AW)();if(e){const e=(0,O.iH)(!1);return(0,n.bv)((()=>{e.value=!0})),e}return(0,O.iH)(!0)}var fe=o(8717),pe=o(1629);function ye(){const e=(0,k.FN)("useScopeId"),t=e.vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const me=Symbol.for("vuetify:stack"),he=(0,O.qj)([]);function ge(e,t,o){const a=(0,k.FN)("useStack"),r=!o,i=(0,n.f3)(me,void 0),l=(0,O.qj)({activeChildren:new Set});(0,n.JJ)(me,l);const s=(0,O.iH)(+t.value);(0,N.U)(e,(()=>{const e=he.at(-1)?.[1];s.value=e?e+10:+t.value,r&&he.push([a.uid,s.value]),i?.activeChildren.add(a.uid),(0,O.EB)((()=>{if(r){const e=(0,O.IU)(he).findIndex((e=>e[0]===a.uid));he.splice(e,1)}i?.activeChildren.delete(a.uid)}))}));const c=(0,O.iH)(!0);r&&(0,n.m0)((()=>{const e=he.at(-1)?.[0]===a.uid;setTimeout((()=>c.value=e))}));const u=(0,n.Fl)((()=>!l.activeChildren.size));return{globalTop:(0,O.OT)(c),localTop:u,stackStyles:(0,n.Fl)((()=>({zIndex:s.value})))}}function be(e){const t=(0,n.Fl)((()=>{const t=e.value;if(!0===t||!g.BR)return;const o=!1===t?document.body:"string"===typeof t?document.querySelector(t):t;if(null==o)return void(0,n.ZK)(`Unable to locate target ${t}`);let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a}));return{teleportTarget:t}}function we(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function xe(){return!0}function Ee(e,t,o){if(!e||!1===ke(e,o))return!1;const n=we(t);if("undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&n.host===e.target)return!1;const a=("object"===typeof o.value&&o.value.include||(()=>[]))();return a.push(t),!a.some((t=>t?.contains(e.target)))}function ke(e,t){const o="object"===typeof t.value&&t.value.closeConditional||xe;return o(e)}function Oe(e,t,o){const n="function"===typeof o.value?o.value:o.value.handler;t._clickOutside.lastMousedownWasOutside&&Ee(e,t,o)&&setTimeout((()=>{ke(e,o)&&n&&n(e)}),0)}function Pe(e,t){const o=we(e);t(document),"undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&t(o)}const Se={mounted(e,t){const o=o=>Oe(o,e,t),n=o=>{e._clickOutside.lastMousedownWasOutside=Ee(o,e,t)};Pe(e,(e=>{e.addEventListener("click",o,!0),e.addEventListener("mousedown",n,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:o,onMousedown:n}},unmounted(e,t){e._clickOutside&&(Pe(e,(o=>{if(!o||!e._clickOutside?.[t.instance.$.uid])return;const{onClick:n,onMousedown:a}=e._clickOutside[t.instance.$.uid];o.removeEventListener("click",n,!0),o.removeEventListener("mousedown",a,!0)})),delete e._clickOutside[t.instance.$.uid])}};var Fe=o(9888);function Be(e){const{modelValue:t,color:o,...r}=e;return(0,n.Wm)(a.uT,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&(0,n.Wm)("div",(0,n.dG)({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},r),null)]})}const Ce=(0,h.U)({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...P(),...(0,B.l)(),...(0,C.x)(),...(0,A.H)(),...Y(),...te(),...(0,le.x$)(),...(0,se.X)()},"v-overlay"),Ae=(0,r.ev)()({name:"VOverlay",directives:{ClickOutside:Se},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ce()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:o,attrs:r,emit:i}=t;const l=(0,fe.z)(e,"modelValue"),s=(0,n.Fl)({get:()=>l.value,set:t=>{t&&e.disabled||(l.value=t)}}),{teleportTarget:v}=be((0,n.Fl)((()=>e.attach||e.contained))),{themeClasses:d}=(0,le.ER)(e),{rtlClasses:f,isRtl:p}=(0,pe.Vw)(),{hasContent:y,onAfterLeave:m}=(0,A.l)(e,s),h=(0,ue.Y5)((0,n.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),{globalTop:b,localTop:w,stackStyles:x}=ge(s,(0,O.Vh)(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:P,activatorEvents:F,contentEvents:B,scrimEvents:R}=S(e,{isActive:s,isTop:w}),{dimensionStyles:L}=(0,C.$)(e),H=de(),{scopeId:_}=ye();(0,n.YP)((()=>e.disabled),(e=>{e&&(s.value=!1)}));const T=(0,O.iH)(),D=(0,O.iH)(),{contentStyles:$,updateLocation:M}=q(e,{isRtl:p,contentEl:D,activatorEl:k,isActive:s});function I(t){i("click:outside",t),e.persistent?U():s.value=!1}function Y(){return s.value&&b.value}function V(t){"Escape"===t.key&&b.value&&(e.persistent?U():s.value=!1)}oe(e,{root:T,contentEl:D,activatorEl:k,isActive:s,updateLocation:M}),g.BR&&(0,n.YP)(s,(e=>{e?window.addEventListener("keydown",V):window.removeEventListener("keydown",V)}),{immediate:!0});const j=(0,ce.tv)();(0,N.U)((()=>e.closeOnBack),(()=>{(0,ce.Kx)(j,(t=>{b.value&&s.value?(t(!1),e.persistent?U():s.value=!1):t()}))}));const z=(0,O.iH)();function U(){e.noClickAnimation||D.value&&c(D.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:u})}return(0,n.YP)((()=>s.value&&(e.absolute||e.contained)&&null==v.value),(e=>{if(e){const e=W(T.value);e&&e!==document.scrollingElement&&(z.value=e.scrollTop)}})),(0,Fe.L)((()=>(0,n.Wm)(n.HY,null,[o.activator?.({isActive:s.value,props:(0,n.dG)({ref:P},(0,n.mx)(F.value),e.activatorProps)}),H.value&&(0,n.Wm)(n.lR,{disabled:!v.value,to:v.value},{default:()=>[y.value&&(0,n.Wm)("div",(0,n.dG)({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},d.value,f.value,e.class],style:[x.value,{top:(0,E.kb)(z.value)},e.style],ref:T},_,r),[(0,n.Wm)(Be,(0,n.dG)({color:h,modelValue:s.value&&!!e.scrim},(0,n.mx)(R.value)),null),(0,n.Wm)(se.J,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{m(),i("afterLeave")}},{default:()=>[(0,n.wy)((0,n.Wm)("div",(0,n.dG)({ref:D,class:["v-overlay__content",e.contentClass],style:[L.value,$.value]},(0,n.mx)(B.value),e.contentProps),[o.default?.({isActive:s})]),[[a.F8,s.value],[(0,n.Q2)("click-outside"),{handler:I,closeConditional:Y,include:()=>[k.value]}]])]})])]})]))),{activatorEl:k,animateClick:U,contentEl:D,globalTop:b,localTop:w,updateLocation:M}}}),Re=Symbol("Forwarded refs");function Le(e,t){let o=e;while(o){const e=Reflect.getOwnPropertyDescriptor(o,t);if(e)return e;o=Object.getPrototypeOf(o)}}function We(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),n=1;n<t;n++)o[n-1]=arguments[n];return e[Re]=o,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t);if("symbol"!==typeof t&&!t.startsWith("__"))for(const n of o)if(n.value&&Reflect.has(n.value,t)){const e=Reflect.get(n.value,t);return"function"===typeof e?e.bind(n.value):e}},has(e,t){if(Reflect.has(e,t))return!0;if("symbol"===typeof t||t.startsWith("__"))return!1;for(const n of o)if(n.value&&Reflect.has(n.value,t))return!0;return!1},getOwnPropertyDescriptor(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);if(n)return n;if("symbol"!==typeof t&&!t.startsWith("__")){for(const e of o){if(!e.value)continue;const o=Le(e.value,t)??("_"in e.value?Le(e.value._?.setupState,t):void 0);if(o)return o}for(const e of o){const o=e.value&&e.value[Re];if(!o)continue;const n=o.slice();while(n.length){const e=n.shift(),o=Le(e.value,t);if(o)return o;const a=e.value&&e.value[Re];a&&n.push(...a)}}}}})}const He=(0,r.ev)()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ce({origin:"center center",scrollStrategy:"block",transition:{component:f},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const a=(0,fe.z)(e,"modelValue"),{scopeId:r}=ye(),i=(0,O.iH)();function l(e){const t=e.relatedTarget,o=e.target;if(t!==o&&i.value?.contentEl&&i.value?.globalTop&&![document,i.value.contentEl].includes(o)&&!i.value.contentEl.contains(o)){const e=(0,E.ef)(i.value.contentEl);if(!e.length)return;const o=e[0],n=e[e.length-1];t===o?n.focus():o.focus()}}g.BR&&(0,n.YP)((()=>a.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)}),{immediate:!0}),(0,n.YP)(a,(async e=>{await(0,n.Y3)(),e?i.value.contentEl?.focus({preventScroll:!0}):i.value.activatorEl?.focus({preventScroll:!0})}));const s=(0,n.Fl)((()=>(0,n.dG)({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps)));return(0,Fe.L)((()=>{const[t]=Ae.filterProps(e);return(0,n.Wm)(Ae,(0,n.dG)({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},t,{modelValue:a.value,"onUpdate:modelValue":e=>a.value=e,"aria-modal":"true",activatorProps:s.value,role:"dialog"},r),{activator:o.activator,default:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.Wm)(m.z,{root:!0},{default:()=>[o.default?.(...t)]})}})})),We({},i)}})}}]);
//# sourceMappingURL=751.ca3c597c.js.map