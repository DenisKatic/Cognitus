(function(t){function e(e){for(var a,r,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({home:"home"}[t]||t)+"."+{"chunk-2d20f8f7":"7cb3ab1b","chunk-2d210c47":"2e5cb475","chunk-2d22d746":"fefa9b5e","chunk-48dce2a1":"72a50cba","chunk-48dd7952":"903851c9","chunk-48df4aad":"2a3b210a","chunk-48dfa47d":"0b256694","chunk-48f2cd90":"f52ace9d","chunk-4d70069b":"a8548fa9",home:"7779c721"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={home:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({home:"home"}[t]||t)+"."+{"chunk-2d20f8f7":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-48dce2a1":"31d6cfe0","chunk-48dd7952":"31d6cfe0","chunk-48df4aad":"31d6cfe0","chunk-48dfa47d":"31d6cfe0","chunk-48f2cd90":"31d6cfe0","chunk-4d70069b":"31d6cfe0",home:"852ea684"}[t]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/cognitus/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"background-color":"white"}},[n("v-content",{staticClass:"background_image"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"min-height":"80px"},attrs:{xs12:"","justify-center":"","fill-height":"","align-center":""}},[n("v-container",{attrs:{"grid-list-md":"","justify-center":"","fill-height":"","align-center":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"margin-left":"28px","margin-right":"80px"},attrs:{xs12:""}},[n("div",{staticClass:"header_div"},[n("span",{staticClass:"header_span",staticStyle:{"font-size":"40px"}},[t._v(" COGNITUS ")]),n("span",{staticClass:"header_span",staticStyle:{"font-size":"25px"},attrs:{align:"center"}},[t._v("- Deep Learnig Methods for Predicting Outages of Industrial Assets ")])])])],1)],1)],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("Menu")],1),n("v-flex",{staticStyle:{background:"white","padding-bottom":"20px"},attrs:{xs12:""}},[n("router-view",{staticStyle:{"min-height":"500px"}})],1),n("v-flex",{staticStyle:{"margin-top":"20px"},attrs:{xs12:""}}),n("v-flex",{attrs:{xs12:""}},[n("v-layout",{staticStyle:{"padding-bottom":"20px",color:"white"},attrs:{wrap:"","justify-center":"","fill-height":"","align-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-container",{attrs:{"grid-list-md":"","justify-center":"","fill-height":"","align-center":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"margin-left":"28px","margin-right":"80px","margin-bottom":"20px"},attrs:{xs12:""}},[t._v(" COGNITUS maintained by "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://github.com/behas"}},[t._v("Dr. Bernhard Haslhofer")]),n("br"),t._v(" Last update: "+t._s(t.text_data.last_update)+" "),n("br"),t._v(" Published with "),n("a",{staticStyle:{color:"white"},attrs:{href:"https://pages.github.com/"}},[t._v("GitHub Pages")])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],c=(n("96cf"),n("1da1")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{"margin-top":"-10px"},attrs:{"grid-list-md":"","justify-center":"","fill-height":"","align-center":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{staticStyle:{"margin-left":"30px"},attrs:{xs12:""}},[n("v-card",{staticStyle:{background:"none"},attrs:{flat:"",height:"38px"}},[n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_home}},a),[t._v(" Home ")])]}}])}),n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_partners}},a),[t._v(" Partners ")])]}}])}),n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_results}},a),[t._v(" Results ")])]}}])}),n("v-menu",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{color:"primary",dark:""},on:{click:t.open_contact}},a),[t._v(" Contact ")])]}}])})],1)],1)],1)],1)},u=[],s={data:function(){return{help_question:!1,interval_function:void 0,offset:!0,topics:[{title:"Step 1: Industry",topic_func:this.open_industry},{title:"Step 2: Data collection",topic_func:this.open_data_collection},{title:"Step 3: AI",topic_func:this.open_ai},{title:"Step 4: Maintenance",topic_func:this.open_maintenance},{title:"Step 5: Benefits",topic_func:this.open_benefits}]}},mounted:function(){},methods:{open_home:function(){this.$router.push({name:"home"})},open_partners:function(){this.$router.push({name:"partners"})},open_results:function(){this.$router.push({name:"results"})},open_contact:function(){this.$router.push({name:"contact"})},help_interval:function(){this.help_question=!this.help_question}}},l=s,f=n("2877"),d=n("6544"),p=n.n(d),h=n("8336"),m=n("b0af"),v=n("a523"),g=n("0e8f"),b=n("a722"),y=n("e449"),_=Object(f["a"])(l,i,u,!1,null,"2f9f3ffc",null),k=_.exports;p()(_,{VBtn:h["a"],VCard:m["a"],VContainer:v["a"],VFlex:g["a"],VLayout:b["a"],VMenu:y["a"]});var x=n("bc3a"),w=n.n(x),S={name:"App",components:{Menu:k},data:function(){return{text_data:{last_update:void 0}}},mounted:function(){this.load_data()},methods:{load_data:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/data.json");case 3:n=e.sent,n&&n.data&&n.data.partners&&(t.text_data=n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},j=S,C=(n("034f"),n("7496")),O=n("a75b"),P=Object(f["a"])(j,r,o,!1,null,null,null),A=P.exports;p()(P,{VApp:C["a"],VContainer:v["a"],VContent:O["a"],VFlex:g["a"],VLayout:b["a"]});var E=n("f309");a["a"].use(E["a"]);var V=new E["a"]({}),L=(n("d3b7"),n("8c4f"));a["a"].use(L["a"]);var T=new L["a"]({mode:"history",base:"/cognitus/",routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/industry",name:"industry",component:function(){return n.e("chunk-48df4aad").then(n.bind(null,"694a"))}},{path:"/data_collection",name:"data_collection",component:function(){return n.e("chunk-48dfa47d").then(n.bind(null,"7238"))}},{path:"/AI",name:"ai",component:function(){return n.e("chunk-48dd7952").then(n.bind(null,"295c"))}},{path:"/maintenance",name:"maintenance",component:function(){return n.e("chunk-48f2cd90").then(n.bind(null,"a5ed"))}},{path:"/benefits",name:"benefits",component:function(){return n.e("chunk-48dce2a1").then(n.bind(null,"1027"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/partners",name:"partners",component:function(){return n.e("chunk-4d70069b").then(n.bind(null,"1a8c"))}},{path:"/results",name:"results",component:function(){return n.e("chunk-2d20f8f7").then(n.bind(null,"b3c3"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}}]});a["a"].config.productionTip=!1,w.a.defaults.baseURL="https://deniskatic.github.io/cognitus/",new a["a"]({router:T,vuetify:V,render:function(t){return t(A)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.c06bcd86.js.map