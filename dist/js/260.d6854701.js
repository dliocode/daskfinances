"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[260],{1979:function(e,a,t){t.d(a,{Z:function(){return H}});var l=t(3396),s=t(2268),n=t(4870),o=t(6056),d=t(4287),i=t(7139),u=t(6824),c=t(8521);const r=e=>((0,l.dD)("data-v-3b86cf36"),e=e(),(0,l.Cn)(),e),v={class:"saldo elevation-6 rounded-lg pa-2 d-flex ma-3"},p=r((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Saldo",-1))),w={class:"font-weight-regular text-green-accent-3 text-h6 w-100 align-self-end text-right"},f={class:"receitas elevation-6 rounded-lg pa-2 d-flex ma-3"},m=r((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Receitas",-1))),_={class:"font-weight-regular text-blue text-h6 w-100 align-self-end text-right"},h={class:"gastos elevation-6 rounded-lg pa-2 d-flex ma-3"},g=r((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Gastos",-1))),x={class:"font-weight-regular text-red-accent-3 text-h6 w-100 align-self-end text-right"};var U={__name:"BalancePanel",setup(e){const a=(0,i.oR)();let t=(0,n.iH)(0),r=(0,n.iH)(0),U=(0,n.iH)(0),b=(0,n.iH)();(0,l.bv)((async()=>{(0,d.cf)((0,d.hJ)(o.db,"saldo"),(e=>{e.forEach((e=>{a.state.token.id===e.data().idUser&&(t.value=e.data().saldo,r.value=e.data().receita,U.value=e.data().gasto,b.value=e.id)}))}))}));const y=e=>`R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;return(e,a)=>((0,l.wg)(),(0,l.j4)(u.o,{class:"container-saldo-conta w-100"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",v,[p,(0,l._)("div",w,(0,s.zw)(y((0,n.SU)(t))),1)])])),_:1}),(0,l.Wm)(c.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",f,[m,(0,l._)("div",_,(0,s.zw)(y((0,n.SU)(r))),1)])])),_:1}),(0,l.Wm)(c.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[g,(0,l._)("div",x,(0,s.zw)(y((0,n.SU)(U))),1)])])),_:1})])),_:1}))}},b=t(89);const y=(0,b.Z)(U,[["__scopeId","data-v-3b86cf36"]]);var H=y},4895:function(e,a,t){t.d(a,{Z:function(){return c}});var l=t(3396);const s=e=>((0,l.dD)("data-v-28bf1660"),e=e(),(0,l.Cn)(),e),n={key:0,class:"popup elevation-6 rounded-lg text-white overflow-hidden pa-2 d-flex justify-center align-center"},o=s((()=>(0,l._)("div",{class:"container-bar"},[(0,l._)("div",{class:"bar"})],-1)));var d={__name:"AlertPopupPanel",props:{statePopupPanel:Boolean},setup(e){return(a,t)=>e.statePopupPanel?((0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("span",null,[(0,l.WI)(a.$slots,"default")]),o])):(0,l.kq)("",!0)}},i=t(89);const u=(0,i.Z)(d,[["__scopeId","data-v-28bf1660"]]);var c=u},7419:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}});var l=t(3396),s=t(4870),n=t(9242),o=t(2268),d=t(797),i=t(7139),u=t(6056),c=t(4287),r=t(4895),v=t(5961),p=t(1979),w=t(870),f=t(6824),m=t(8521);const _=e=>((0,l.dD)("data-v-7ec4c656"),e=e(),(0,l.Cn)(),e),h={class:"container-add-finance pa-3 rounded ma-3 elevation-6"},g=_((()=>(0,l._)("div",{class:"w-100"},[(0,l._)("h1",{class:"text-white text-h6 font-weight-bold"},"Nova transação")],-1))),x=_((()=>(0,l._)("option",{value:""},"Selecione",-1))),U=_((()=>(0,l._)("option",{value:"receita"},"Receita",-1))),b=_((()=>(0,l._)("option",{value:"gasto"},"Gasto",-1))),y=[x,U,b],H={class:"w-100 d-flex justify-end"};var P={__name:"PainelView",setup(e){let a=(0,s.iH)(""),t=(0,s.iH)(""),_=(0,s.iH)(""),x=(0,s.iH)("");const U=(0,i.oR)(),b=()=>{t.value=t.value.replace(/[^0-9.]/g,"")},P=()=>""!=a.value.trim()&&""!=t.value.trim()&&""!=_.value.trim()&&""!=x.value.trim(),k=()=>{if(P()){(0,c.ET)((0,c.hJ)(u.db,"transacoes"),{idUser:U.state.token.id,nome:a.value,valor:t.value,data:_.value.replace(/-/g,"/"),tipo:x.value}),(0,c.ET)((0,c.hJ)(u.db,"notifications"),{idUser:U.state.token.id,title:"Nova transação",text:`Transação ${Z(t.value)}`,date:String(new Date),link:"/",unread:!0});const e=(0,c.JU)(u.db,"saldo",I.value);"receita"===x.value?(0,c.r7)(e,{saldo:D.value+=parseInt(t.value),receita:S.value+=parseInt(t.value)}):(0,c.r7)(e,{saldo:D.value-=parseInt(t.value),gasto:W.value+=parseInt(t.value)}),q("Transação conluída!")}else R("Preencha os campos!")};let D=(0,s.iH)(0),S=(0,s.iH)(0),W=(0,s.iH)(0),I=(0,s.iH)();(0,l.bv)((async()=>{(0,c.cf)((0,c.hJ)(u.db,"saldo"),(e=>{e.forEach((e=>{U.state.token.id===e.data().idUser&&(D.value=e.data().saldo,S.value=e.data().receita,W.value=e.data().gasto,I.value=e.id)}))}))}));const Z=e=>`R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;let T=(0,s.iH)(!1),C=(0,s.iH)("");const R=e=>{T.value=!0,C.value=e,setTimeout((()=>{T.value=!1}),2e3)};let V=(0,s.iH)(!1),$=(0,s.iH)("");const q=e=>{V.value=!0,$.value=e,setTimeout((()=>{V.value=!1}),2e3)};return(e,i)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p.Z),(0,l._)("div",h,[g,(0,l.Wm)(f.o,{class:"py-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(m.D,{cols:"12",sm:"6",md:"3"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>(0,s.dq)(a)?a.value=e:a=e),placeholder:"Transação",type:"text",class:"rounded-md text-white px-3 py-2 w-100"},null,512),[[n.nr,(0,s.SU)(a)]])])),_:1}),(0,l.Wm)(m.D,{cols:"12",sm:"6",md:"3"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>(0,s.dq)(t)?t.value=e:t=e),placeholder:"Valor",type:"text",class:"rounded-md text-white px-3 py-2 w-100",onInput:b},null,544),[[n.nr,(0,s.SU)(t)]])])),_:1}),(0,l.Wm)(m.D,{cols:"12",sm:"6",md:"3"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":i[2]||(i[2]=e=>(0,s.dq)(_)?_.value=e:_=e),placeholder:"Data",type:"date",class:"rounded-md text-white px-3 py-2 w-100"},null,512),[[n.nr,(0,s.SU)(_)]])])),_:1}),(0,l.Wm)(m.D,{cols:"12",sm:"6",md:"3"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":i[3]||(i[3]=e=>(0,s.dq)(x)?x.value=e:x=e),class:"rounded-md text-white px-3 py-2 w-100"},y,512),[[n.bM,(0,s.SU)(x)]])])),_:1})])),_:1}),(0,l._)("div",H,[(0,l.Wm)(w.T,{onClick:i[4]||(i[4]=e=>k()),class:"elevation-0 px-8 bg-green-accent-3"},{default:(0,l.w5)((()=>[(0,l.Uk)("Adicionar")])),_:1})])]),(0,l.Wm)(d.Z),(0,l.Wm)(r.Z,{statePopupPanel:(0,s.SU)(T)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,s.SU)(C)),1)])),_:1},8,["statePopupPanel"]),(0,l.Wm)(v.Z,{statePopupPanel:(0,s.SU)(V)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)((0,s.SU)($)),1)])),_:1},8,["statePopupPanel"])],64))}},k=t(89);const D=(0,k.Z)(P,[["__scopeId","data-v-7ec4c656"]]);var S=D}}]);
//# sourceMappingURL=260.d6854701.js.map