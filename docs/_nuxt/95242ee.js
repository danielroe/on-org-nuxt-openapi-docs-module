(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{732:function(e,r,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("95a2fb9a",content,!0,{sourceMap:!1})},759:function(e,r,n){"use strict";n(732)},760:function(e,r,n){var o=n(5)((function(i){return i[1]}));o.push([e.i,".oapi-info-head{margin-bottom:2rem}.oapi-info-head h1{display:inline-block;margin-bottom:0;margin-top:0}.oapi-info-head__version{background-color:var(--oapi-bg-code-single);border-radius:6px;display:inline-block;font-size:.75rem;margin-left:8px;margin-top:8px;padding:.2em .4em;vertical-align:top;white-space:nowrap}",""]),o.locals={},e.exports=o},767:function(e,r,n){"use strict";n.r(r);n(50),n(67),n(7),n(9);var o=n(148),t={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.d,getUrl:function(e){var r=e.url,n=e.variables;for(var o in n){var t=n[o].default;if(t){var l="{".concat(o,"}");r=r.replace(l,t)}}return r}}},l=(n(759),n(2)),component=Object(l.a)(t,(function(){var e=this,r=e._self._c;return r("div",[r("div",{staticClass:"oapi-info-head"},[r("h1",[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),e.info.version?r("span",{staticClass:"oapi-info-head__version"},[e._v("\n      "+e._s(e.info.version)+"\n    ")]):e._e()]),e._v(" "),r("div",{staticClass:"oapi-info-block",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?r("div",[r("h2",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Servers")))]),e._v(" "),r("ul",e._l(e.servers,(function(n){return r("li",{key:n.url},[r("a",{attrs:{href:e.getUrl(n)}},[e._v(e._s(e.getUrl(n)))]),e._v(" - "),n.description?r("span",[e._v(e._s(n.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?r("h2",[e._v("\n    "+e._s(e.$openapidoc.getLocaleText(e.currentLocale,"External documentation"))+"\n  ")]):e._e(),e._v(" "),e.info.externalDocs?r("ul",[r("li",[r("a",{attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e()])}),[],!1,null,null,null);r.default=component.exports}}]);