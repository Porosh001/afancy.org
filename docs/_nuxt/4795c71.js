(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{251:function(e,n,t){"use strict";t.r(n);var r=t(252),l=t.n(r),c=t(253),o=t.n(c),d=t(254),f=t.n(d),x=t(255),h=t.n(x),m=t(256),v=t.n(m),y=t(257),_=t.n(y),j=t(258),L=t.n(j),w={props:{lang:{type:String,default:""},box_style:{type:Object,default:function(){return{}}}},mounted:function(){l.a.registerLanguage("xml",o.a),l.a.registerLanguage("css",f.a),l.a.registerLanguage("javascript",h.a),l.a.registerLanguage("typescript",v.a),l.a.registerLanguage("json",_.a),l.a.registerLanguage("bash",L.a),l.a.highlightElement(this.$refs.code)}},k=t(12),component=Object(k.a)(w,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("pre",{staticStyle:{background:"#000",margin:"0px"},style:e.box_style},[t("code",{ref:"code",class:"language-"+e.lang},[e._t("default")],2)])])}),[],!1,null,null,null);n.default=component.exports},277:function(e,n,t){"use strict";t.r(n);var r=t(1),l=t(251),c=r.a.extend({layout:"docs",components:{hljs:l.default},head:function(){return{title:"Grid"+this.$config.base.APP_TITLE}}}),o=t(12),component=Object(o.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"h1 text-center text-primary",staticStyle:{"font-family":"Fredericka the Great"}},[e._v("Grid")]),e._v(" "),t("hljs",{attrs:{lang:"css"}},[e._v("\n  /** container classes */\n  .fnc-grid\n  .fnc-col-[sm, md, lg, xl, xxl]-[1-12]\n\n  \n\n  /** breakpoints\n   *\n   * sm: 576px\n   * md: 768px\n   * lg: 992px\n   * xl: 1200px\n   * xxl: 1400px\n   *\n   */\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);