(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{767:function(e,c,t){"use strict";t.r(c);t(6),t(39),t(30),t(85),t(49);var o=t(168),r={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},computed:{formattedIn:function(){if(!this.securityScheme.in)return null;var e=this.securityScheme.in.toString();return e.charAt(0).toUpperCase()+e.slice(1)}},methods:{tr:o.d}},_=(t(793),t(3)),component=Object(_.a)(r,(function(){var e=this,c=e._self._c;return c("div",{staticClass:"oapi-sec-scheme"},[c("div",{staticClass:"oapi-sec-scheme__type"},[c("span",[e._v(e._s(e.securityScheme.type))])]),e._v(" "),"http"===e.securityScheme.type&&e.securityScheme.scheme?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.scheme"))+": "),c("code",[e._v(e._s(e.securityScheme.scheme))])]):e._e(),e._v(" "),"http"===e.securityScheme.type&&"bearer"===e.securityScheme.scheme&&e.securityScheme.bearerFormat?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.bearer_format"))+": "),c("code",[e._v(e._s(e.securityScheme.bearerFormat))])]):e._e(),e._v(" "),"apiKey"===e.securityScheme.type&&e.securityScheme.in?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.$openapidoc.getLocaleText("openapidoc.in"))+": "),c("code",[e._v(e._s(e.securityScheme.in))])]):e._e(),e._v(" "),"apiKey"===e.securityScheme.type&&e.formattedIn&&e.securityScheme.name?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n    "+e._s(e.formattedIn)+" name: "),c("code",[e._v(e._s(e.securityScheme.name))])]):e._e(),e._v(" "),"oauth2"===e.securityScheme.type&&e.securityScheme.flows?c("div",{staticClass:"oapi-sec-scheme__flows"},e._l(e.securityScheme.flows,(function(t,o){return c("div",{key:o,staticClass:"oapi-sec-scheme__flow"},[c("h4",[e._v(e._s(o))]),e._v(" "),t.authorizationUrl?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.authorization_url"))+": "),c("code",[e._v(e._s(t.authorizationUrl))])]):e._e(),e._v(" "),t.tokenUrl?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.token_url"))+": "),c("code",[e._v(e._s(t.tokenUrl))])]):e._e(),e._v(" "),t.refreshUrl?c("div",{staticClass:"oapi-sec-scheme__param"},[e._v("\n        "+e._s(e.$openapidoc.getLocaleText("openapidoc.refresh_url"))+": "),c("code",[e._v(e._s(t.refreshUrl))])]):e._e(),e._v(" "),t.scopes&&Object.keys(t.scopes).length?c("div",{staticClass:"oapi-sec-scheme-scopes"},[c("span",{staticClass:"oapi-sec-scheme-scopes__title"},[e._v(e._s(e.$openapidoc.getLocaleText("openapidoc.scopes"))+":")]),e._v(" "),c("ul",{staticClass:"oapi-sec-scheme-scopes__list"},e._l(t.scopes,(function(t,o){return c("li",{key:o,staticClass:"oapi-sec-scheme-scope"},[c("code",[e._v(e._s(o))]),e._v(" "),t?c("div",{staticClass:"oapi-sec-scheme-scope__descr"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)]):e._e()])})),0):e._e()])}),[],!1,null,null,null);c.default=component.exports},769:function(e,c,t){var content=t(794);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(8).default)("748557c8",content,!0,{sourceMap:!1})},793:function(e,c,t){"use strict";t(769)},794:function(e,c,t){var o=t(7)((function(i){return i[1]}));o.push([e.i,".oapi-sec-scheme{border:1px solid #e2e2e2;border-radius:6px;margin-bottom:16px;padding:16px}.oapi-sec-scheme__type{margin-bottom:1rem}.oapi-sec-scheme__type span{background:rgba(0,0,0,.03);border:1px solid #e2e2e2;border-radius:16px;color:#999;display:inline-block;font-family:var(--oapi-mono);font-size:.825rem;font-weight:600;line-height:1.2;padding:8px 16px}.oapi-sec-scheme__param{font-size:.875rem;margin-bottom:.5rem}.oapi-sec-scheme-scopes{font-size:.875rem}.oapi-sec-scheme-scopes__title{display:block;font-weight:600;margin-bottom:8px}.oapi-sec-scheme-scopes__list{list-style:none;margin:0;padding:0 0 0 1rem}.oapi-sec-scheme-scopes .oapi-sec-scheme-scope{margin:0 0 16px}",""]),o.locals={},e.exports=o}}]);