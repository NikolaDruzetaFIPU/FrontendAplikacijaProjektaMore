(function(e){function t(t){for(var n,c,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);j&&j(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var j=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00b9":function(e,t,r){},3867:function(e,t,r){},"3bc3":function(e,t,r){"use strict";r("00b9")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"nav"},o={id:"right"};function c(e,t,r,c,i,u){var s=Object(n["resolveComponent"])("Menu"),j=Object(n["resolveComponent"])("router-view");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("div",a,[Object(n["createVNode"])(s,{id:"left"})]),Object(n["createVNode"])("p",null,"Datum: "+Object(n["toDisplayString"])(e.today),1),Object(n["createVNode"])("div",o,[Object(n["createVNode"])(j)])],64)}var i=r("1da1"),u=(r("96cf"),Object(n["createVNode"])("br",null,null,-1)),s=Object(n["createTextVNode"])("Svi uređaji"),j=Object(n["createTextVNode"])("Aktivni uređaji"),d=Object(n["createTextVNode"])("Prosla mjerenja"),l=Object(n["createTextVNode"])("Lista senzora"),p=Object(n["createTextVNode"])("NoviExperiment"),b=Object(n["createTextVNode"])("Početna stranica");function m(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[u,Object(n["createVNode"])(i,{class:"btn",to:"/SviUredjaji"},{default:Object(n["withCtx"])((function(){return[s]})),_:1}),Object(n["createVNode"])(i,{class:"btn",to:"/AktivniUredjaji"},{default:Object(n["withCtx"])((function(){return[j]})),_:1}),Object(n["createVNode"])(i,{class:"btn",to:"/ProslaMjerenja"},{default:Object(n["withCtx"])((function(){return[d]})),_:1}),Object(n["createVNode"])(i,{class:"btn",to:"/Senzori"},{default:Object(n["withCtx"])((function(){return[l]})),_:1}),Object(n["createVNode"])(i,{class:"btn",to:"/NoviExperiment"},{default:Object(n["withCtx"])((function(){return[p]})),_:1}),Object(n["createVNode"])(i,{class:"btn",to:"/"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})])}var v={name:"Menu"};v.render=m;var f=v,h={name:"App",components:{Menu:f},data:function(){return{refreshKey:0}},methods:{currentDateTime:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),r=e.getHours()+":"+e.getMinutes(),n=t+" "+r;return n},forceRerender:function(){this.refreshKey+=1}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.today=e.currentDateTime();case 1:case"end":return t.stop()}}),t)})))()}};r("3bc3");h.render=c;var O=h,k=r("6c02"),g={class:"home"};function w(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("HelloWorld");return Object(n["openBlock"])(),Object(n["createBlock"])("div",g,[Object(n["createVNode"])(i,{msg:"Projekt More"})])}var S=Object(n["withScopeId"])("data-v-e95dc580");Object(n["pushScopeId"])("data-v-e95dc580");var x={class:"hello"};Object(n["popScopeId"])();var N=S((function(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("div",x,[Object(n["createVNode"])("h1",null,Object(n["toDisplayString"])(r.msg),1)])})),V={name:"HelloWorld",props:{msg:String}};r("8c10");V.render=N,V.__scopeId="data-v-e95dc580";var y=V,z={name:"Home",components:{HelloWorld:y}};z.render=w;var B=z;function D(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("UredjajList");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{uredjaji:o.uredjaji},null,8,["uredjaji"])])}r("d3b7");function C(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("Uredjaj");return Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.uredjaji,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:e.id},[Object(n["createVNode"])(i,{uredjaj:e},null,8,["uredjaj"])])})),128)}var R={class:"ured"};function U(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("SendShutdownSignal"),u=Object(n["resolveComponent"])("ShowSenzorList"),s=Object(n["resolveComponent"])("SenzorList");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("div",R,[Object(n["createVNode"])("p",null,"Uredjaj: "+Object(n["toDisplayString"])(r.uredjaj.id),1),Object(n["createVNode"])("p",null,Object(n["toDisplayString"])(o.status),1),Object(n["createVNode"])("p",null,"Početak eksperimenta: "+Object(n["toDisplayString"])(r.uredjaj.startDate),1),Object(n["createVNode"])("p",null,"Kraj eksperimenta: "+Object(n["toDisplayString"])(o.endDate),1),Object(n["withDirectives"])(Object(n["createVNode"])("div",null,[Object(n["createVNode"])(i,{uredjajID:o.uredjajID,onShutdownSignal:c.sendEndSignal},null,8,["uredjajID","onShutdownSignal"])],512),[[n["vShow"],c.isActive()]])]),Object(n["createVNode"])(u,{onToggleSenzorList:t[1]||(t[1]=function(e){return c.toggleSenzorList()}),class:"btn",text:o.showSenzorList?"Sakrij Senzore":"Prikaži senzore"},null,8,["text"]),Object(n["withDirectives"])(Object(n["createVNode"])("div",null,[Object(n["createVNode"])(s,{senzori:o.senzori},null,8,["senzori"])],512),[[n["vShow"],o.showSenzorList]])],64)}var L=r("2909");r("a9e3"),r("99af");function E(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("Senzor");return Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(r.senzori,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])("div",{class:"senz",key:e.id},[Object(n["createVNode"])(i,{senzor:e},null,8,["senzor"])])})),128)}var T={class:"graf"},P={class:"graf"};function A(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("ShowKalibracija"),u=Object(n["resolveComponent"])("Graf"),s=Object(n["resolveComponent"])("ShowGraf");return Object(n["openBlock"])(),Object(n["createBlock"])(n["Fragment"],null,[Object(n["createVNode"])("p",null,"Senzor: "+Object(n["toDisplayString"])(r.senzor.id),1),Object(n["createVNode"])("div",null,[Object(n["createVNode"])(i,{onToggleKalibracija:t[1]||(t[1]=function(e){return c.toggleKalibracija()}),class:"btn",text:o.showKalibracija?"Sakrij Kalibracijske podatke":"Prikaži kalibracijske podatke"},null,8,["text"]),Object(n["withDirectives"])(Object(n["createVNode"])("div",T,[Object(n["createVNode"])(u,{data:o.kalibracija,timestamp:o.kalibracijaTimestamp},null,8,["data","timestamp"])],512),[[n["vShow"],o.showKalibracija]])]),Object(n["createVNode"])("div",null,[Object(n["createVNode"])(s,{onToggleGraf:t[2]||(t[2]=function(e){return c.toggleGraf()}),class:"btn",text:o.showGraf?"Sakrij Podatke eksperimenta":"Prikaži podatke eksperimenta"},null,8,["text"]),Object(n["withDirectives"])(Object(n["createVNode"])("div",P,[Object(n["createVNode"])(u,{data:o.podaci,timestamp:o.timestamp},null,8,["data","timestamp"])],512),[[n["vShow"],o.showGraf]])])],64)}function I(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("apexchart");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{width:"500",type:"line",options:e.chartOptions,series:e.series},null,8,["options","series"])])}var M=r("82c0"),_=r.n(M),K={name:"Graf",components:{apexchart:_.a},data:function(){return{chartOptions:{chart:{id:"graf"},xaxis:{categories:[]}},series:[{name:"series",data:[]}]}},props:{data:Array,timestamp:Array},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.chartOptions.xaxis.categories=e.timestamp,e.series=[{data:e.data}];case 2:case"end":return t.stop()}}),t)})))()}};K.render=I;var G=K;function F(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()}),class:"btn"},Object(n["toDisplayString"])(r.text),1)}var Y={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("toggle-Graf")}}};Y.render=F;var H=Y;function J(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()}),class:"btn"},Object(n["toDisplayString"])(r.text),1)}var $={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("toggle-kalibracija")}}};$.render=J;var W=$,Z={name:"Senzor",components:{Graf:G,ShowGraf:H,ShowKalibracija:W},props:{senzor:Object},data:function(){return{showGraf:!1,showKalibracija:!1,podaci:Array,kalibracija:Array,timestamp:Array,kalibracijaTimestamp:Array}},methods:{toggleGraf:function(){this.showGraf=!this.showGraf},toggleKalibracija:function(){this.showKalibracija=!this.showKalibracija}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.podaci=e.senzor.data,e.kalibracija=e.senzor.calibrationData,e.timestamp=e.senzor.timestamp,e.kalibracijaTimestamp=e.senzor.calibrtionTimestamp;case 4:case"end":return t.stop()}}),t)})))()}};Z.render=A;var q=Z,Q={name:"SenzorList",components:{Senzor:q},props:{senzori:Array}};Q.render=E;var X=Q;function ee(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()}),class:"btn"},Object(n["toDisplayString"])(r.text),1)}var te={name:"Button",props:{text:String,color:String},methods:{onClick:function(){this.$emit("toggle-Senzor-List")}}};te.render=ee;var re=te;function ne(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("button",{onClick:t[1]||(t[1]=function(e){return c.onClick()})}," Zaustavi eksperiment ")}var ae={name:"Button",props:{uredjajID:Number},data:function(){return{shutdownTime:Date}},methods:{onClick:function(){var e={uredjajID:this.uredjajID};this.$emit("shutdown-signal",e)}}};ae.render=ne;var oe=ae,ce={name:"Uredjaj",components:{SenzorList:X,ShowSenzorList:re,SendShutdownSignal:oe},props:{uredjaj:Object},data:function(){return{senzori:[],showSenzorList:!1,status:String,endDate:String,uredjajID:Number}},methods:{toggleSenzorList:function(){this.showSenzorList=!this.showSenzorList},isActive:function(){return 1==this.uredjaj.kalibracija&&0==this.uredjaj.active||(0==this.uredjaj.kalibracija&&1==this.uredjaj.active||(0!=this.uredjaj.kalibracija||0!=this.uredjaj.active))},setStatus:function(){var e;return e=1==this.uredjaj.kalibracija&&0==this.uredjaj.active?"Kalibracija u tjeku":0==this.uredjaj.kalibracija&&1==this.uredjaj.active?"Eksperiment u tjeku":0==this.uredjaj.kalibracija&&0==this.uredjaj.active?"Uređaj je trenutno neaktivan":"NEISPRAVNO OČITANJE",e},setEndDate:function(){var e;return e=""==this.uredjaj.endDate?"Završni datum nije postavljen":this.uredjaj.endDate,e},sendEndSignal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("api/stopsignal",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return n=r.sent,r.next=5,n.json();case 5:a=r.sent,t.stopsignal=[].concat(Object(L["a"])(t.stopsignal),[a]);case 7:case"end":return r.stop()}}),r)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showSenzorList=e.toggleSenzorList(),e.status=e.setStatus(),e.endDate=e.setEndDate(),e.senzori=e.uredjaj.senzori,e.uredjajID=e.uredjaj.id;case 5:case"end":return t.stop()}}),t)})))()}};ce.render=U;var ie=ce,ue={name:"UredjajList",components:{Uredjaj:ie},props:{uredjaji:Array},data:function(){return{today:Date}}};ue.render=C;var se=ue,je={name:"SviUredjaji",components:{UredjajList:se},data:function(){return{uredjaji:[]}},methods:{fetchUredjaji:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/uredjaji");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUredjaji();case 2:e.uredjaji=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};je.render=D;var de=je;function le(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("UredjajList");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{uredjaji:o.uredjaji},null,8,["uredjaji"])])}var pe={name:"AktivniUredjaji",components:{UredjajList:se},data:function(){return{uredjaji:[]}},methods:{fetchUredjaji:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/uredjaji");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUredjaji();case 2:for(e.uredjaji=t.sent,r=0;r<e.uredjaji.length;r++)0==e.uredjaji[r].active&&0==e.uredjaji[r].kalibracija&&e.uredjaji.pop(e.uredjaji[r]);case 4:case"end":return t.stop()}}),t)})))()}};pe.render=le;var be=pe;function me(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("UredjajList");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{uredjaji:o.uredjaji},null,8,["uredjaji"])])}var ve={name:"ProslaMjerenja",components:{UredjajList:se},data:function(){return{uredjaji:[],temp:[]}},methods:{fetchUredjaji:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/uredjaji");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUredjaji();case 2:for(e.uredjaji=t.sent,r=0;r<e.uredjaji.length;r++)0==e.uredjaji[r].kalibracija&&0==e.uredjaji[r].active&&e.temp.push(e.uredjaji[r]);e.uredjaji=e.temp;case 5:case"end":return t.stop()}}),t)})))()}};ve.render=me;var fe=ve;function he(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("NoviExperimentForma");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{onAddExperiment:c.addExperiment},null,8,["onAddExperiment"])])}var Oe=Object(n["withScopeId"])("data-v-90d47b9e");Object(n["pushScopeId"])("data-v-90d47b9e");var ke={class:"form-control"},ge=Object(n["createVNode"])("label",null,"Datum početka",-1),we={class:"form-control"},Se=Object(n["createVNode"])("label",null,"Datum zavržetka",-1),xe={class:"form-control"},Ne=Object(n["createVNode"])("label",null,"Unesi serijsku broj uređaja",-1),Ve=Object(n["createVNode"])("input",{type:"submit",value:"Zakaži Experiment",class:"btn"},null,-1);Object(n["popScopeId"])();var ye=Oe((function(e,t,r,a,o,c){return Object(n["openBlock"])(),Object(n["createBlock"])("form",{onSubmit:t[4]||(t[4]=function(){return c.onSubmit&&c.onSubmit.apply(c,arguments)}),class:"add-form"},[Object(n["createVNode"])("div",ke,[ge,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",name:"datumStart",placeholder:"dd mm YYYY","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.datumStart=e}),required:""},null,512),[[n["vModelText"],o.datumStart]])]),Object(n["createVNode"])("div",we,[Se,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"text",name:"datumEnd","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.datumEnd=e}),placeholder:"dd mm YYYY"},null,512),[[n["vModelText"],o.datumEnd]])]),Object(n["createVNode"])("div",xe,[Ne,Object(n["withDirectives"])(Object(n["createVNode"])("input",{type:"number",name:"broj","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.broj=e}),required:""},null,512),[[n["vModelText"],o.broj]])]),Ve],32)})),ze={name:"NoviExperimentForma",data:function(){return{datumStart:"",datumEnd:"",broj:""}},methods:{onSubmit:function(e){e.preventDefault();var t={datumStart:this.datumStart,datumEnd:this.datumEnd,broj:this.broj};console.log(t),this.$emit("add-experiment",t),this.datumStart="",this.datumEnd="",this.broj=""}}};r("c3dc");ze.render=ye,ze.__scopeId="data-v-90d47b9e";var Be=ze,De={name:"NoviExperiment",components:{NoviExperimentForma:Be},methods:{addExperiment:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("api/experiments",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return n=r.sent,r.next=5,n.json();case 5:a=r.sent,t.experiments=[].concat(Object(L["a"])(t.experiments),[a]);case 7:case"end":return r.stop()}}),r)})))()}}};De.render=he;var Ce=De;function Re(e,t,r,a,o,c){var i=Object(n["resolveComponent"])("SenzorList");return Object(n["openBlock"])(),Object(n["createBlock"])("div",null,[Object(n["createVNode"])(i,{senzori:o.senzori},null,8,["senzori"])])}var Ue={name:"Senzori",components:{SenzorList:X},data:function(){return{senzori:[]}},methods:{fetchSenzori:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/senzori");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchSenzori();case 2:e.senzori=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};Ue.render=Re;var Le=Ue,Ee=[{path:"/",name:"HomeView",component:B},{path:"/SviUredjaji",name:"SviUredjajiView",component:de},{path:"/AktivniUredjaji",name:"AktivniUredjajiView",component:be},{path:"/ProslaMjerenja",name:"ProslaMjerenjaView",component:fe},{path:"/NoviExperiment",name:"NoviExperimentView",component:Ce},{path:"/Senzori",name:"SenzoriView",component:Le}],Te=Object(k["a"])({history:Object(k["b"])("/"),routes:Ee}),Pe=Te;Object(n["createApp"])(O).use(Pe).mount("#app")},"8c10":function(e,t,r){"use strict";r("f006")},c3dc:function(e,t,r){"use strict";r("3867")},f006:function(e,t,r){}});
//# sourceMappingURL=app.7b200ff6.js.map