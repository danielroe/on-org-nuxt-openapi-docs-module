(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{523:function(t,e,r){"use strict";r.r(e);r(41),r(54);var o=r(116),n={props:{path:String,method:String,tags:Array,summary:String,description:String,deprecated:Boolean,currentLocale:{type:String,required:!0}},methods:{tr:o.c,getTagColor:o.b}},d=r(1),component=Object(d.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"border border-gray-300 p-4 mb-8 doc-info"},[e("h1",{staticClass:"text-2xl font-bold mb-2"},[e("span",{staticClass:"text-xl font-medium mr-2 px-2.5 py-0.5 rounded",class:t.getTagColor(t.method)},[t._v(t._s(t.method))]),t._v("\n    "+t._s(t.path)+"\n  ")]),t._v(" "),t.deprecated?e("div",{staticClass:"flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",attrs:{role:"alert"}},[e("div",[e("span",{staticClass:"font-medium"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Deprecated!")))])])]):t._e(),t._v(" "),e("h2",{staticClass:"text-lg font-bold mb-2"},[t._v(t._s(t.summary))]),t._v(" "),e("p",{staticClass:"mb-2"},t._l(t.tags,(function(r,o){return e("span",{key:o,staticClass:"bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"},[t._v(t._s(r))])})),0),t._v(" "),e("p",{staticClass:"mb-2",domProps:{innerHTML:t._s(t.description)}})])}),[],!1,null,null,null);e.default=component.exports}}]);