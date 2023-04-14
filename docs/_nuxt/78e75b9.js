(window.webpackJsonp=window.webpackJsonp||[]).push([[53,10,17,19,25,26,33],{466:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("09cf48f4",content,!0,{sourceMap:!1})},467:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("d41c8358",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("7b1266a0",content,!0,{sourceMap:!1})},469:function(t,e,n){"use strict";n(466)},470:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),r.locals={},t.exports=r},471:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(6);var r=n(116),o={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(469),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[e("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[t._v("\n    "+t._s(t.tr(t.securityScheme,"name",t.currentLocale))+"\n  ")]),t._v(" "),"http"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Scheme:")]),t._v(" "+t._s(t.securityScheme.scheme))]),t._v(" "),t.securityScheme.bearerFormat?e("p",[e("strong",[t._v("Bearer format:")]),t._v(" "+t._s(t.securityScheme.bearerFormat)+"\n    ")]):t._e(),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"apiKey"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),e("p",[e("strong",[t._v("Name:")]),t._v(" "+t._s(t.securityScheme.name))]),t._v(" "),e("p",[e("strong",[t._v("In:")]),t._v(" "+t._s(t.securityScheme.in))]),t._v(" "),t.securityScheme.description?e("p",[e("strong",[t._v("Description:")]),t._v(" "+t._s(t.tr(t.securityScheme,"description",t.currentLocale))+"\n    ")]):t._e()]):"oauth2"===t.securityScheme.type?e("div",{staticClass:"security-scheme__details"},[e("p",[e("strong",[t._v("Type:")]),t._v(" "+t._s(t.securityScheme.type))]),t._v(" "),t.securityScheme.flows?e("p",[e("strong",[t._v("Flows:")])]):t._e(),t._v(" "),e("ul",t._l(t.securityScheme.flows,(function(n,r){return e("li",{key:r},[e("p",[e("strong",[t._v(t._s(r)+":")])]),t._v(" "),e("ul",[n.authorizationUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Authorization URL"))+":")]),t._v(" "+t._s(n.authorizationUrl)+"\n          ")]):t._e(),t._v(" "),n.tokenUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Token URL"))+":")]),t._v(" "+t._s(n.tokenUrl)+"\n          ")]):t._e(),t._v(" "),n.refreshUrl?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Refresh URL"))+":")]),t._v(" "+t._s(n.refreshUrl)+"\n          ")]):t._e(),t._v(" "),n.scopes?e("li",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Scopes"))+":")]),t._v(" "),e("ul",t._l(n.scopes,(function(n,r){return e("li",{key:r},[e("strong",[t._v(t._s(r)+":")]),t._v(" "+t._s(n)+"\n              ")])})),0)]):t._e()])])})),0),t._v(" "),t.securityScheme.description?e("div",[e("strong",[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Description"))+":")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.tr(t.securityScheme,"description",t.currentLocale))}})]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports},472:function(t,e,n){"use strict";n(467)},473:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),r.locals={},t.exports=r},474:function(t,e,n){"use strict";n.r(e);var r=n(116),o={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=(n(472),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg2 font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Request Bodies"))+": ")]),t._v(" "),t._l(t.requestBodies,(function(n,r){return e("div",{key:r,staticClass:"mt-4"},[e("h4",{staticClass:"text-base font-bold"},[t._v(t._s(r))]),t._v(" "),e("OpenApiRequestBody",{attrs:{requestBody:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiRequestBody:n(486).default})},475:function(t,e,n){"use strict";n.r(e);var r=n(116),o={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c}},l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"text-lg font-bold mb-2"},[t._v(t._s(t.$openapidoc.getLocaleText(t.currentLocale,"Security Schemes"))+": ")]),t._v(" "),t._l(t.securitySchemes,(function(n,r){return e("div",{key:r},[e("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:r}},[t._v(" - "+t._s(r))]),t._v(" "),e("OpenApiSecurityScheme",{attrs:{securityScheme:n,"current-locale":t.currentLocale}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSecurityScheme:n(471).default})},476:function(t,e,n){"use strict";n(468)},477:function(t,e,n){var r=n(3)((function(i){return i[1]}));r.push([t.i,"",""]),r.locals={},t.exports=r},478:function(t,e,n){"use strict";n.r(e);n(41),n(54),n(5),n(7);var r=n(116),o={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:r.c,getUrl:function(t){var e=t.url,n=t.variables;for(var r in n){var o=n[r].default;if(o){var l="{".concat(r,"}");e=e.replace(l,o)}}return e}}},l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"text-2xl font-bold"},[t._v(t._s(t.tr(t.info,"title",t.currentLocale)))]),t._v(" "),e("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:t._s(t.tr(t.info,"description",t.currentLocale))}}),t._v(" "),t.servers?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Servers")]),t._v(" "),e("ul",{staticClass:"list-disc list-inside"},t._l(t.servers,(function(n){return e("li",{key:n.url},[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.getUrl(n)}},[t._v(t._s(t.getUrl(n)))]),t._v(" - "),n.description?e("span",[t._v(t._s(n.description))]):t._e()])})),0)]):t._e(),t._v(" "),t.info.externalDocs?e("h3",{staticClass:"text-lg font-bold"},[t._v("External documentation")]):t._e(),t._v(" "),t.info.externalDocs?e("ul",{staticClass:"list-disc list-inside"},[e("li",[e("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:t.info.externalDocs.url}},[t._v(t._s(t.tr(t.info.externalDocs,"description",t.currentLocale)))])])]):t._e(),t._v(" "),t.info.version?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("version: "+t._s(t.info.version))])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},479:function(t,e,n){"use strict";n.r(e);var r={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},o=n(1),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t.components.schemas?e("div",[e("h3",{staticClass:"text-lg font-bold"},[t._v("Schemas")]),t._v(" "),t._l(t.components.schemas,(function(n,r){return e("div",[e("h4",{staticClass:"text-base font-bold",domProps:{textContent:t._s(r)}}),t._v(" "),e("OpenApiSchema",{attrs:{components:t.components,schema:n,"current-locale":t.currentLocale}})],1)}))],2):t._e(),t._v(" "),t.components.schema?e("div",[e("OpenApiSchema",{attrs:{components:t.components,schema:t.components.schema,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.examples?e("div",[e("OpenApiExamples",{attrs:{examples:t.components.examples,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.requestBodies?e("div",[e("OpenApiRequestBodies",{attrs:{requestBodies:t.components.requestBodies,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.responses?e("div",[e("OpenApiResponses",{attrs:{responses:t.components.responses,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.parameters?e("div",[e("OpenApiParameters",{attrs:{parameters:t.components.parameters,"current-locale":t.currentLocale}})],1):t._e(),t._v(" "),t.components.securitySchemes?e("div",[e("OpenApiSecuritySchemes",{attrs:{securitySchemes:t.components.securitySchemes,"current-locale":t.currentLocale}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiSchema:n(482).default,OpenApiExamples:n(483).default,OpenApiRequestBodies:n(474).default,OpenApiResponses:n(484).default,OpenApiParameters:n(485).default,OpenApiSecuritySchemes:n(475).default})},480:function(t,e,n){"use strict";n.r(e);var r={name:"NotFound"},o=n(1),component=Object(o.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[e("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[t._v("404")]),t._v(" "),e("p",{staticClass:"text-lg text-gray-700 text-center"},[t._v("Not found")])])}],!1,null,null,null);e.default=component.exports},481:function(t,e,n){"use strict";n.r(e);n(5),n(138),n(41),n(54),n(7),n(68);var r=n(116),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=e.indexOf(t);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+t.length+50,e.length),l="..."+e.substring(r,o)+"...";l=l.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:l,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var h in c){var d=c[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),y=this.tr(d,"description",this.currentLocale).toLowerCase(),f=null,v=m.indexOf(t);if(-1!==v){var _=y.substring(0,100)+"...";f={path:d.path,title:m.replace(t,"<b>"+t+"</b>"),description:_+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(v=y.indexOf(t))){var j=Math.max(v-50,0),x=Math.min(v+t.length+50,y.length),L="..."+y.substring(j,x)+"...";L=L.replace(t,"<b>"+t+"</b>"),f?f.description=L:f={path:d.path,title:m,description:L,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}f&&this.list.push(f)}}}}}},l=(n(476),n(1)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(n){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:n.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(n.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(n.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},596:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(8),n(41),n(54),n(32),n(47),n(48),n(487),n(263),n(6),{name:"AppDocs",layout:"apidocs-layout-dynamic-query-params",transition:{name:"fade"},head:function(){var t,e,n,r;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:"",bodyAttrs:{class:"ggggg"}};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:"",bodyAttrs:{class:"gggg"}};if(!this.activeRoute)return{};var title=null!==(t=null!==(e=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==e?e:this.activeRoute.summary)&&void 0!==t?t:"",o=null!==(n=null!==(r=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==r?r:this.activeRoute.description)&&void 0!==n?n:"";return{title:"["+this.file+"] - "+title,description:o}},setup:function(){},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.$nuxt.context;try{t.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,t.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,t.path=null!==(l=n.route.params.path)&&void 0!==l?l:n.route.meta[0].path,t.url=null!==(c=n.route.params.url)&&void 0!==c?c:n.route.meta[0].url}catch(t){console.error(t),console.error(n.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-dynamic-query-params",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"/dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:'<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>\n<ul>\n<li>you may pass predefined query params</li>\n<li>you may create dynamic query params by defining a query-param as an object,\nin that case each key of the object will be treated as a seperate param</li>\n<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>\n</ul>\n<pre><code class="hljs language-yaml"> <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">info:</span>\n    <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">paths:</span>\n    <span class="hljs-string">/dynamic-query-params:</span>\n      <span class="hljs-attr">get:</span>\n        <span class="hljs-attr">tags:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n        <span class="hljs-attr">summary:</span>  <span class="hljs-string">Various</span> <span class="hljs-string">ways</span> <span class="hljs-string">to</span> <span class="hljs-string">pass</span> <span class="hljs-string">query</span> <span class="hljs-string">params</span>\n        <span class="hljs-attr">parameters:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">limit</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">fruits</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">colors</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params1</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params2</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params3</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">pipeDelimited</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params4</span>\n            <span class="hljs-attr">content:</span>\n              <span class="hljs-attr">&quot;application/json&quot;:</span>\n                <span class="hljs-attr">schema:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n                  <span class="hljs-attr">properties:</span>\n                    <span class="hljs-attr">someProperty:</span>\n                      <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">additionalProperties:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params5</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">required:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">properties:</span>\n                <span class="hljs-attr">propertyOne:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">VALUE-2</span>\n                <span class="hljs-attr">propertyTwo:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">FLAG-1</span>\n        <span class="hljs-attr">responses:</span>\n          <span class="hljs-attr">&#x27;200&#x27;:</span>\n            <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>\n</code></pre>\n',parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;a&quot;:1,\n  &quot;b&quot;:2,\n  &quot;colors&quot;:[\n    &quot;red&quot;,\n    &quot;black&quot;\n  ],\n  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },\n  &quot;e&quot;:3\n}\n"},{in:"query",name:"dynamic-query-params2",description:"Arrays are not-exploded, therefore comma sperated &lt;br /&gt; `f=1&g=2&hobbies=music,dance`\n",style:"form",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;f&quot;:1,\n  &quot;g&quot;:2,\n  &quot;hobbies&quot;:[\n    &quot;music&quot;,\n    &quot;dance&quot;\n  ]\n}\n"},{in:"query",name:"dynamic-query-params3",description:"Arrays are not exploded, and pipe separated &lt;br /&gt; `i=1&j=2&keys=public&#x7C;private`\n",style:"pipeDelimited",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;i&quot;:1,\n  &quot;j&quot;:2,\n  &quot;keys&quot;:[&quot;public&quot;, &quot;private&quot;]\n}\n"},{in:"query",name:"dynamic-query-params4",description:"Parameters with JSON encoding are JSON encoded and escaped: &lt;br /&gt; `dynamic-query-params4=%7B%22someProperty%22%3A%22foo%22%2C%22bar%22%3A%22baz%22%7D`\n",content:{"application/json":{example:"{\n  &quot;someProperty&quot;: &quot;foo&quot;,\n  &quot;bar&quot;: &quot;baz&quot;\n}\n",schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}}}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{"Query Params":{name:"Query Params",description:"",isOpen:!0,items:[{name:"/dynamic-query-params",path:"dynamic-query-params",type:"get",icon:null,description:"Various ways to pass query params"}]}},fileName:"dynamic-query-params",layoutName:"apidocs-layout-dynamic-query-params",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access",page:"Custom Page","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"dynamic-query-params"}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path,this.url=t.url},deep:!0}},methods:{downloadJson:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(e),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(t=this.options.doc.paths[this.url].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(e=this.options.doc.paths[this.url].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.url,path_doc:t.path_doc,file:t.file,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OpenApiInfo:n(478).default,OpenApiComponents:n(479).default,OpenApiRoute:n(488).default,NotFound:n(480).default,SearchBlock:n(481).default})}}]);