(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{779:function(e,t,r){var content=r(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("290b28be",content,!0,{sourceMap:!1})},786:function(e,t,r){"use strict";r.r(t);r(34),r(50);var o=r(237),d={props:{path:{type:String,required:!0},method:{type:String,required:!0},tags:{type:Array,default:function(){return[]}},summary:{type:String,default:null},description:{type:String,default:null},deprecated:Boolean,currentLocale:{type:String,required:!0}},methods:{getTagColor:o.b}},n=(r(810),r(3)),component=Object(n.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route-header",class:{"oapi-route-header--deprecated":e.deprecated}},[t("h1",{staticClass:"oapi-route-header__title"},[t("span",{staticClass:"oapi-method-tag",class:"oapi-method-tag--".concat(e.method)},[e._v(e._s(e.method))]),e._v("\n    "+e._s(e.path)+"\n  ")]),e._v(" "),e.deprecated?t("div",{staticClass:"oapi-route-header__deprecated",attrs:{role:"alert"}},[t("span",[e._v(e._s(e.$openapidoc.getLocaleText("openapidoc.deprecated")))])]):e._e(),e._v(" "),t("div",{staticClass:"oapi-route-header__summary"},[e._v("\n    "+e._s(e.summary)+"\n  ")]),e._v(" "),t("div",{staticClass:"oapi-route-header__tags"},e._l(e.tags,(function(r){return t("span",{key:r,staticClass:"oapi-route-header__tag"},[e._v(e._s(r))])})),0),e._v(" "),t("div",{staticClass:"oapi-route-header__description",domProps:{innerHTML:e._s(e.description)}})])}),[],!1,null,null,null);t.default=component.exports},810:function(e,t,r){"use strict";r(779)},811:function(e,t,r){var o=r(7)((function(i){return i[1]}));o.push([e.i,".oapi-route-header__title{font-family:var(--oapi-mono)!important}.oapi-route-header__summary{color:#999;font-size:1.1rem;font-weight:600;margin-bottom:16px}.oapi-route-header .oapi-method-tag{border:2px solid #ddd;border-radius:6px;font-size:1.5rem;margin-right:6px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.oapi-route-header--deprecated .oapi-route-header__title{opacity:.6}.oapi-route-header__deprecated{margin-bottom:8px}.oapi-route-header__deprecated span{background:#f84545;border-radius:4px;color:#fff;display:inline-block;font-weight:600;padding:8px 16px}.oapi-route-header__tags{align-items:center;display:flex;flex-wrap:wrap;margin:0 -4px 16px}.oapi-route-header__tag{align-items:center;border:1px solid #ccc;border-radius:4px;display:inline-flex;line-height:1;margin:0 4px 4px;padding:6px 8px}",""]),o.locals={},e.exports=o}}]);