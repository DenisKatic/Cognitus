(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"39cb":function(t,e,a){t.exports=a.p+"img/gearwheel-cognitus_2.dff767ae.svg"},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c}));var n=a("b0af"),i=a("80d2"),r=Object(i["e"])("v-card__actions"),s=Object(i["e"])("v-card__subtitle"),c=Object(i["e"])("v-card__text"),o=Object(i["e"])("v-card__title");n["a"]},b390:function(t,e,a){"use strict";var n=a("d85e"),i=a.n(n);i.a},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"margin-top":"20px"},attrs:{"grid-list-md":"","justify-center":"","fill-height":"","align-center":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"margin-left":"60px","margin-right":"80px","margin-top":"5px","margin-bottom":"20px"},attrs:{xs12:""}},[n("span",{domProps:{innerHTML:t._s(t.text_data.project_description)}})])],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md5:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{ref:"card_2",staticClass:"info_cards",staticStyle:{"margin-top":"100px"},on:{click:t.open_data_collection}},[n("v-card-text",{staticStyle:{"text-align":"left"}},[n("h2",[t._v("Step 2: Data collection")]),n("div",{staticClass:"text--primary",staticStyle:{height:"55px","margin-top":"5px"}},[n("span",{domProps:{innerHTML:t._s(t.text_data.data_collection)}})])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.open_data_collection}},[t._v(" More ")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-card",{ref:"card_4",staticClass:"info_cards",staticStyle:{"margin-top":"20px"},on:{click:t.open_maintenance}},[n("v-card-text",{staticStyle:{"text-align":"left"}},[n("h2",[t._v("Step 4: Maintenance")]),n("div",{staticClass:"text--primary",staticStyle:{height:"55px","margin-top":"5px"}},[n("span",{domProps:{innerHTML:t._s(t.text_data.maintenance)}})])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.open_maintenance}},[t._v(" More ")])],1)],1)],1)],1)],1),n("v-flex",{attrs:{md2:"",xs0:""}},[n("div",{staticStyle:{width:"260px",overflow:"hidden","margin-left":"35px"}},[n("img",{staticClass:"rotating",staticStyle:{height:"550px","margin-left":"-40px"},attrs:{src:a("39cb")}})])]),n("v-flex",{attrs:{xs12:"",md5:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",{ref:"card_1",staticClass:"info_cards",staticStyle:{"margin-top":"10px"},attrs:{width:"660px",height:"160px"},on:{click:t.open_industry}},[n("v-card-text",{staticStyle:{"text-align":"left"}},[n("h2",[t._v("Step 1: Industry")]),n("div",{staticClass:"text--primary",staticStyle:{height:"55px","margin-top":"5px"}},[n("span",{domProps:{innerHTML:t._s(t.text_data.industry)}})])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.open_industry}},[t._v(" More ")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-card",{ref:"card_3",staticClass:"info_cards",staticStyle:{"margin-top":"20px"},attrs:{width:"660px",height:"160px"},on:{click:t.open_ai}},[n("v-card-text",{staticStyle:{"text-align":"left"}},[n("h2",[t._v("Step 3: Artificial Intelligence")]),n("div",{staticClass:"text--primary",staticStyle:{height:"55px","margin-top":"5px"}},[n("span",{domProps:{innerHTML:t._s(t.text_data.ai)}})])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.open_ai}},[t._v(" More ")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("v-card",{ref:"card_5",staticClass:"info_cards",staticStyle:{"margin-top":"20px"},attrs:{width:"660px",height:"160px"},on:{click:t.open_benefits}},[n("v-card-text",{staticStyle:{"text-align":"left"}},[n("h2",[t._v("Step 5: Benefits")]),n("div",{staticClass:"text--primary",staticStyle:{height:"55px","margin-top":"5px"}},[n("span",{domProps:{innerHTML:t._s(t.text_data.benefits)}})])]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.open_benefits}},[t._v(" More ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},i=[],r=(a("9911"),a("96cf"),a("1da1")),s=a("bc3a"),c=a.n(s),o={name:"Home",data:function(){return{index:0,text_data:{industry:"Industry text.....",data_collection:"Data collection text......",ai:"Artificial Intelligence text.....",maintenance:"Maintenance text.....",benefits:"Benefits text .......",project_description:"Placeholder for project description text ...."}}},mounted:function(){this.load_data(),this.start_interval()},methods:{load_data:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.get("/data.json");case 3:a=e.sent,a&&a.data&&a.data.home&&(t.text_data=a.data.home),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},open_industry:function(){this.$router.push({name:"industry"})},open_data_collection:function(){this.$router.push({name:"data_collection"})},open_ai:function(){this.$router.push({name:"ai"})},open_maintenance:function(){this.$router.push({name:"maintenance"})},open_benefits:function(){this.$router.push({name:"benefits"})},start_interval:function(){setTimeout(this.display_blocks.bind(this),1e3)},display_blocks:function(){this.$refs.card_1.$refs.link.style.display="block",this.$refs.card_2.$refs.link.style.display="block",this.$refs.card_3.$refs.link.style.display="block",this.$refs.card_4.$refs.link.style.display="block",this.$refs.card_5.$refs.link.style.display="block"}}},l=o,p=(a("b390"),a("2877")),d=a("6544"),x=a.n(d),f=a("8336"),_=a("b0af"),u=a("99d9"),v=a("a523"),h=a("0e8f"),m=a("a722"),y=Object(p["a"])(l,n,i,!1,null,"9feca070",null);e["default"]=y.exports;x()(y,{VBtn:f["a"],VCard:_["a"],VCardActions:u["a"],VCardText:u["b"],VContainer:v["a"],VFlex:h["a"],VLayout:m["a"]})},d85e:function(t,e,a){}}]);
//# sourceMappingURL=home.22593287.js.map