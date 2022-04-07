(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)s=c[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a4c41e8"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Covid-19/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),c={},i=Object(s["a"])(c,a,o,!1,null,null,null),u=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Covid")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("div",[n("select",{on:{change:function(t){return e.onChange(t)}}},[n("option",{attrs:{value:"30"}},[e._v("30 วัน")]),n("option",{attrs:{value:"15"}},[e._v("15 วัน")])])]),n("div",{attrs:{id:"chart"}},[n("apexchart",{ref:"realtimeChart",attrs:{type:"line",height:"350",options:e.chartOptions,series:e.series}})],1),n("table",{staticClass:"table table-striped mt-5"},[e._m(1),n("tbody",e._l(e.datas,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.date))]),n("td",[e._v(e._s(t.cases.toLocaleString())+" ราย")]),n("td",[e._v(e._s(t.newcase.toLocaleString())+" ราย")])])})),0)])])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-3 mb-3"},[e._v("รายงานการติดเชื้อ Covid-19 ทั่วโลก")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("วันที่")]),n("th",{attrs:{scope:"col"}},[e._v("ผู้ติดเชื้อทั้งหมด")]),n("th",{attrs:{scope:"col"}},[e._v("ผู้ติดเชื้อรายใหม่")])])])}],v=n("5530"),b=n("1da1"),m=(n("159b"),n("b64b"),n("ac1f"),n("00b4"),n("96cf"),n("bc3a")),g=n.n(m),_={data:function(){return{datas:[],series:[{name:"จำนวนผู้ติดเชื้อรายใหม่",data:[]}],chartOptions:{chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:[]}}}},mounted:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleSelect(30);case 1:case"end":return t.stop()}}),t)})))()},methods:{test:function(e){console.log("test",e)},onChange:function(e){console.log("value",e.target.value),this.handleSelect(e.target.value)},handleSelect:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,o,s,c,i,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,g.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays=".concat(e));case 2:r=n.sent,a=[],o=[],s=[],c=[],Object.keys(r.data.cases).forEach((function(e){var t=r.data.cases[e];a.push({date:e,cases:t})})),a.reverse(),i=0;case 10:if(!(i<a.length)){n.next=24;break}if(0!=i){n.next=15;break}console.log(""),n.next=21;break;case 15:if(u=a[i-1].cases-a[i].cases,o.push(u),s.push(a[i-1].date),c.push(Object(v["a"])(Object(v["a"])({},a[i-1]),{},{newcase:u})),i!=a.length-1){n.next=21;break}return n.abrupt("break",24);case 21:i++,n.next=10;break;case 24:console.log("dataNew",a),t.datas=c,t.test(r.data),t.$refs.realtimeChart.updateSeries([{data:o}],!1,!0),t.$refs.realtimeChart.updateOptions({xaxis:{categories:s}},!1,!0);case 29:case"end":return n.stop()}}),n)})))()}}},y=_,w=Object(s["a"])(y,p,h,!1,null,null,null),x=w.exports,O={name:"Home",components:{Covid:x}},j=O,C=Object(s["a"])(j,d,f,!1,null,null,null),k=C.exports;r["a"].use(l["a"]);var S=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new l["a"]({mode:"history",base:"/Covid-19/",routes:S}),P=E,$=n("2f62");r["a"].use($["a"]);var L=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}}),T=n("1321"),M=n.n(T);r["a"].config.productionTip=!1,r["a"].use(M.a),r["a"].component("apexchart",M.a),new r["a"]({router:P,store:L,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.38b0b8ea.js.map