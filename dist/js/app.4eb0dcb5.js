(function(){"use strict";var e={6056:function(e,t,n){n.d(t,{db:function(){return s}});var a=n(7795),r=n(4287);const o=(0,a.ZF)({apiKey:"AIzaSyBR_uCu-xgljf7JktU0RpReDO42pa7CeJ4",authDomain:"dask-finances.firebaseapp.com",projectId:"dask-finances",storageBucket:"dask-finances.appspot.com",messagingSenderId:"855301062994",appId:"1:855301062994:web:9f9de4d13f386f58b37a8b",measurementId:"G-536EGF6T1K"}),s=(0,r.ad)(o)},4044:function(e,t,n){var a=n(9242),r=n(3396),o=n(7139),s=n(6056),i=n(4287),l={__name:"ReceberDados",setup(e){const t=(0,o.oR)();return(0,r.bv)((async()=>{(0,i.cf)((0,i.hJ)(s.db,"usuarios"),(e=>{e.forEach((e=>{e.data().gmail===t.state.token.gmail&&""===t.state.token.id&&(t.state.token.id=e.id,t.commit("addToken",t.state.token),(0,i.ET)((0,i.hJ)(s.db,"saldo"),{idUser:e.id,saldo:0,receita:0,gasto:0}),(0,i.ET)((0,i.hJ)(s.db,"notifications"),{idUser:e.id,title:"DaskFinances",text:"Aproveite nossa plataforma 100% gratuita!",date:String(new Date),link:"/",unread:!0}))}))}))})),(e,t)=>((0,r.wg)(),(0,r.iD)("div"))}};const c=l;var u=c,d={__name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n),(0,r.Wm)(u)],64)}}};const f=d;var m=f,p=n(2483),g=(n(7658),n(4870)),h=n(2268),v=n(5497),_=n.p+"img/undraw_chart.92702ad2.png",b=n.p+"img/painel-de-controle.56efe102.png",w=n.p+"img/seguro.3b2bd9d1.png",k=n.p+"img/investimento.69a11cdb.png",y=n.p+"img/growth-chart.edefad82.svg",x=n.p+"img/mockup-celular.094c0fb6.png",W=n.p+"img/black-star-silhouette.c52614a4.png",j={__name:"BtnLoginNav",props:{link:String},setup(e){return(t,n)=>{const a=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(a,{class:"btn-login text-decoration-none font-weight-bold rounded",to:e.link},{default:(0,r.w5)((()=>[(0,r.WI)(t.$slots,"default")])),_:3},8,["to"])}}},O=n(89);const C=(0,O.Z)(j,[["__scopeId","data-v-009c732a"]]);var S=C,D=n(4075),U=n(1666);const E=e=>((0,r.dD)("data-v-7a63a9f1"),e=e(),(0,r.Cn)(),e),T=E((()=>(0,r._)("div",{class:"footer-text pb-6"},[(0,r.Uk)(" All rights reserved to "),(0,r._)("strong",null,"dask finances"),(0,r.Uk)(", unauthorized use will be processed without prior notice. ")],-1))),P={class:"text-white footer-copyright"},A=E((()=>(0,r._)("strong",null,"DaskFinances",-1)));function I(e,t){return(0,r.wg)(),(0,r.j4)(U.c,{class:"footer text-center d-flex flex-column py-7"},{default:(0,r.w5)((()=>[T,(0,r.Wm)(D.J),(0,r._)("div",P,[(0,r.Uk)(" All right reserved © "+(0,h.zw)((new Date).getFullYear())+" — ",1),A])])),_:1})}const N={},F=(0,O.Z)(N,[["render",I],["__scopeId","data-v-7a63a9f1"]]);var K=F,Z=n(7718),B=n(870),J=n(3324),R=n(1888),H=n(977),z=n(9843),L=n(3369),M=n(6824),q=n(8521),Y=n(8694);const G=e=>((0,r.dD)("data-v-a22f580a"),e=e(),(0,r.Cn)(),e),V={class:"d-flex"},$={class:"container-logo w-25 d-flex justify-start align-center"},Q={class:"container-menu w-75 d-flex justify-end align-center"},X={class:"d-flex align-center"},ee={class:"px-2"},te={class:"px-2"},ne={class:"d-flex align-center"},ae={class:"w-50"},re=G((()=>(0,r._)("h1",{class:"text-white"},[(0,r.Uk)("Controle melhor "),(0,r._)("span",{class:"line-headline"},"suas"),(0,r.Uk)(),(0,r._)("span",{class:"line-headline"},"finanças"),(0,r.Uk)(" conosco!")],-1))),oe=G((()=>(0,r._)("p",{class:"text-grey-lighten-2 mb-12"},"Sistema completo,rápido e moderno.",-1))),se={class:"w-50"},ie={class:"container-benefits py-7"},le={class:"container-results py-9"},ce=G((()=>(0,r._)("h1",{class:"text-white font-weight-bold"},[(0,r.Uk)(" Otimize seus resultados e cresça seu patrimônio "),(0,r._)("span",{class:"line-results"},[(0,r._)("span",{class:"number-results"},"10x"),(0,r.Uk)(" mais rápido!")])],-1))),ue={class:"container-cta-app py-7"},de=G((()=>(0,r._)("h1",{class:"mb-7 text-white"},"100% gratuito comece a usar hoje!",-1))),fe={class:"container-testimonials"},me={class:"container-card-testimonials d-flex justify-center align-center"},pe={class:"card-testimonials rounded-lg elevation-6 pa-3"},ge={class:"text-testimonials d-flex align-center"},he={class:"text-testimonials-cite text-white"},ve={class:"assessment d-flex"};var _e={__name:"HomeView",setup(e){const t=(0,p.tv)(),n=(0,o.oR)(),a=()=>n.state.token.tokenOn?t.push("/painel"):t.push("/auth/registrar");(0,r.bv)((()=>{!0===n.state.token.tokenOn&&(s.value=!0,i.value=!1)}));let s=(0,g.iH)(!1),i=(0,g.iH)(!0);const l=(0,g.iH)([{text:"Excelente sistema de controle financeiro pessoal. Recomendo!"},{text:"Simples de usar e me ajudou a economizar dinheiro."},{text:"Muito útil para organizar minhas despesas diárias."},{text:"Ótima ferramenta para alcançar metas financeiras importantes."}]);return(e,t)=>{const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(Z.q,{theme:"dark"},{default:(0,r.w5)((()=>[(0,r._)("header",null,[(0,r.Wm)(L.K,null,{default:(0,r.w5)((()=>[(0,r._)("nav",V,[(0,r._)("div",$,[(0,r.Wm)(n,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Wm)(Y.f,{class:"img-nav",src:v})])),_:1})]),(0,r._)("div",Q,[(0,r._)("ul",X,[(0,r._)("li",ee,[(0,g.SU)(s)?((0,r.wg)(),(0,r.j4)(B.T,{key:0,class:"to-enter font-weight-bold",to:"/painel"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Entrar ")])),_:1})):(0,r.kq)("",!0)]),(0,r._)("li",te,[(0,g.SU)(i)?((0,r.wg)(),(0,r.j4)(S,{key:0,link:"/auth/login"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Login ")])),_:1})):(0,r.kq)("",!0)])])])]),(0,r._)("main",ne,[(0,r._)("div",ae,[(0,r._)("div",null,[re,oe,(0,r.Wm)(S,{onClick:t[0]||(t[0]=e=>a()),link:"/auth/registrar"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Comece agora! ")])),_:1})])]),(0,r._)("div",se,[(0,r.Wm)(Y.f,{class:"img-nav",src:_})])])])),_:1})]),(0,r._)("section",ie,[(0,r.Wm)(L.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(q.D,{cols:"12",sm:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(J._,{class:"card-benefits w-100 pa-4"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(Y.f,{class:"img-benefits",src:b})]),(0,r.Wm)(R.Z,{class:"text-benefits px-0 pt-6 text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Controle suas finanças de forma fácil ")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(q.D,{cols:"12",sm:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(J._,{class:"card-benefits w-100 pa-4"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(Y.f,{class:"img-benefits",src:w})]),(0,r.Wm)(R.Z,{class:"text-benefits px-0 pt-6 text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Segurança financeira em suas mãos ")])),_:1})])),_:1})])),_:1}),(0,r.Wm)(q.D,{cols:"12",sm:"4"},{default:(0,r.w5)((()=>[(0,r.Wm)(J._,{class:"card-benefits w-100 pa-4"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[(0,r.Wm)(Y.f,{class:"img-benefits",src:k})]),(0,r.Wm)(R.Z,{class:"text-benefits px-0 pt-6 text-white"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Invista melhor o seu dinheiro ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})]),(0,r._)("section",le,[(0,r.Wm)(L.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(q.D,{cols:"12",sm:"6",class:"d-flex align-center"},{default:(0,r.w5)((()=>[ce])),_:1}),(0,r.Wm)(q.D,{cols:"12",sm:"6",class:"d-flex justify-center align-center px-8"},{default:(0,r.w5)((()=>[(0,r.Wm)(Y.f,{class:"img-results",src:y})])),_:1})])),_:1})])),_:1})]),(0,r._)("section",ue,[(0,r.Wm)(L.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(q.D,{cols:"12",sm:"6",class:"d-flex align-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(Y.f,{class:"img-results",src:x})])),_:1}),(0,r.Wm)(q.D,{cols:"12",sm:"6",class:"d-flex justify-center align-center px-8"},{default:(0,r.w5)((()=>[(0,r._)("div",null,[de,(0,r.Wm)(S,{onClick:t[1]||(t[1]=e=>a()),link:"/auth/registrar"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Comece agora! ")])),_:1})])])),_:1})])),_:1})])),_:1})]),(0,r._)("section",fe,[(0,r.Wm)(L.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(M.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(q.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(H.k,{cycle:"",height:"350","hide-delimiter-background":"","show-arrows":"hover"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.value,(e=>((0,r.wg)(),(0,r.j4)(z.f,{key:e},{default:(0,r.w5)((()=>[(0,r._)("div",me,[(0,r._)("div",pe,[(0,r._)("div",ge,[(0,r._)("cite",he,'"'+(0,h.zw)(e.text)+'"',1)]),(0,r._)("div",ve,[((0,r.wg)(),(0,r.iD)(r.HY,null,(0,r.Ko)([,,,,,],(e=>(0,r._)("div",{class:"mx-1",key:e},[(0,r.Wm)(Y.f,{class:"img-assessment",src:W})]))),64))])])])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})]),(0,r.Wm)(K)])),_:1})}}};const be=(0,O.Z)(_e,[["__scopeId","data-v-a22f580a"]]);var we=be,ke=n(4239);const ye=[{path:"/",name:"home",component:we},{path:"/auth/login",name:"login",component:()=>Promise.all([n.e(728),n.e(360),n.e(561)]).then(n.bind(n,2561))},{path:"/auth/registrar",name:"registar",component:()=>Promise.all([n.e(728),n.e(360),n.e(829)]).then(n.bind(n,4829))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(728),n.e(308)]).then(n.bind(n,7321)),beforeEnter:(e,t,n)=>ke.Z.state.token.tokenOn?n():n("/auth/registrar"),children:[{path:"/perfil",name:"perfil",component:()=>n.e(840).then(n.bind(n,3840))},{path:"/visao-geral",name:"visao-geral",component:()=>n.e(20).then(n.bind(n,3020))},{path:"/transacoes",name:"transacoes",component:()=>Promise.all([n.e(29),n.e(285)]).then(n.bind(n,1846))},{path:"/painel",name:"painel",component:()=>Promise.all([n.e(29),n.e(997)]).then(n.bind(n,338))}]}],xe=(0,p.p7)({mode:"history",history:(0,p.PO)("/"),routes:ye});var We=xe,je=(n(9773),n(8727));const Oe={dark:!1,colors:{primary:"#25272c",secondary:"#0e0e0e",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}};var Ce=(0,je.Rd)({theme:{defaultTheme:"mydefaultTheme",themes:{mydefaultTheme:Oe}}});async function Se(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var De=n(7795);Se(),(0,a.ri)(m).use(We).use(ke.Z).use(Ce).use(De["default"]).mount("#app")},4239:function(e,t,n){var a=n(7139);t["Z"]=(0,a.MT)({state:{token:JSON.parse(localStorage.getItem("token"))?JSON.parse(localStorage.getItem("token")):{tokenOn:!1}},mutations:{addToken(e,t){e.token=t,localStorage.setItem("token",JSON.stringify(t))}}})},5497:function(e,t,n){e.exports=n.p+"img/logo-daskfinances-semfundo.a62bf817.png"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var s={};e=e||[null,t({}),t([]),t(t)];for(var i=2&r&&a;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((function(e){s[e]=function(){return a[e]}}));return s["default"]=function(){return a},n.d(o,s),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{20:"b816f60c",29:"58d202a5",285:"9521582e",308:"c9c95d80",360:"83431f42",461:"c682bed3",561:"8bfd8239",728:"5917ef33",829:"461f2076",840:"da8995df",997:"509b8739"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{20:"dbfcda73",285:"8c55542b",308:"821c590d",360:"13b10142",561:"e30225f7",829:"1c99f301",840:"005e54c4",997:"b1a77e2b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app:";n.l=function(a,r,o,s){if(e[a])e[a].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,o.parentNode&&o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=s,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){r=s[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var s=n.miniCssF(a),i=n.p+s;if(t(s,i))return r();e(a,i,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={20:1,285:1,308:1,360:1,561:1,829:1,840:1,997:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var s=n.p+n.u(t),i=new Error,l=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,r[1](i)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var u=l(n)}for(t&&t(a);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4044)}));a=n.O(a)})();
//# sourceMappingURL=app.4eb0dcb5.js.map