(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{770:function(e,t,r){var content=r(798);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("5a120da0",content,!0,{sourceMap:!1})},772:function(e,t,r){"use strict";r.r(t);r(42);var n=r(168),o={name:"OpenApiSecurityRequirement",props:{securityRequirement:{type:Object,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:n.d,getRoute:function(e){return{name:"openapi-".concat(this.path_doc,"/").concat(this.file,"/components").concat(this.$openapidoc.I18nLocaleSuffix()),hash:"#"+e,meta:{locale:"en",path:"components",file:this.file,type:"get"}}}}},c=(r(797),r(3)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-sec-requirement"},[t("ul",e._l(e.securityRequirement,(function(r,n){return t("li",{key:n,attrs:{"data-scheme":n}},[t("nuxt-link",{staticClass:"oapi-sec-requirement-item",attrs:{to:e.getRoute(n)}},[t("span",{staticClass:"oapi-sec-requirement-item__scheme"},[e._v(e._s(n))]),e._v(" "),t("ul",{staticClass:"oapi-sec-requirement-item__scopes"},e._l(r,(function(r){return t("li",{key:r},[t("code",[e._v(e._s(r))])])})),0)])],1)})),0)])}),[],!1,null,"78303952",null);t.default=component.exports},778:function(e,t,r){var content=r(810);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(8).default)("262d2a0a",content,!0,{sourceMap:!1})},785:function(e,t,r){"use strict";r.r(t);var n=r(168),o={name:"OpenApiSecurity",components:{OpenApiSecurityRequirement:r(772).default},props:{security:{type:Array,required:!0},currentLocale:{type:String,required:!0},path_doc:{type:String,required:!0},file:{type:String,required:!0}},methods:{tr:n.d}},c=(r(809),r(3)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"oapi-route-sec"},[t("h2",[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.security"))+"\n  ")]),e._v(" "),t("ul",{staticClass:"oapi-route-sec__list"},e._l(e.security,(function(r,n){return t("li",{key:n},[t("OpenApiSecurityRequirement",{attrs:{"security-requirement":r,"current-locale":e.currentLocale,path_doc:e.path_doc,file:e.file}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityRequirement:r(772).default})},797:function(e,t,r){"use strict";r(770)},798:function(e,t,r){var n=r(7)((function(i){return i[1]}));n.push([e.i,".oapi-sec-requirement[data-v-78303952]{margin-bottom:20px}.oapi-sec-requirement>ul>li[data-v-78303952]{margin-bottom:8px}.oapi-sec-requirement>ul>li[data-v-78303952]:last-child{margin-bottom:0}.oapi-sec-requirement ul[data-v-78303952]{list-style:none;margin:0}.oapi-sec-requirement-item[data-v-78303952]{background:#eaf5ff;border-radius:6px;display:block;list-style:none;padding:8px 16px;-webkit-text-decoration:none;text-decoration:none}.oapi-sec-requirement-item__scheme[data-v-78303952]{color:#000;font-family:var(--oapi-mono)}.oapi-sec-requirement-item__scopes[data-v-78303952]{padding-left:16px;padding-top:8px}.oapi-sec-requirement-item__scopes li[data-v-78303952]{margin-bottom:6px}.oapi-sec-requirement-item__scopes li code[data-v-78303952]{background:#fff;color:#333}",""]),n.locals={},e.exports=n},809:function(e,t,r){"use strict";r(778)},810:function(e,t,r){var n=r(7)((function(i){return i[1]}));n.push([e.i,".oapi-route-sec__list,.oapi-route-sec__list ul{list-style:none;margin:0;padding:0}",""]),n.locals={},e.exports=n}}]);