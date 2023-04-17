(window.webpackJsonp=window.webpackJsonp||[]).push([[43,10,17,25,26,33],{475:function(e,t,r){var content=r(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("09cf48f4",content,!0,{sourceMap:!1})},476:function(e,t,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("d41c8358",content,!0,{sourceMap:!1})},477:function(e,t,r){var content=r(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("60ee6faa",content,!0,{sourceMap:!1})},478:function(e,t,r){"use strict";r(475)},479:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),o.locals={},e.exports=o},480:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(6);var o=r(116),n={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(r(478),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(r,o){return t("li",{key:o},[t("p",[t("strong",[e._v(e._s(o)+":")])]),e._v(" "),t("ul",[r.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(r.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),r.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(r.tokenUrl)+"\n          ")]):e._e(),e._v(" "),r.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(r.refreshUrl)+"\n          ")]):e._e(),e._v(" "),r.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(r.scopes,(function(r,o){return t("li",{key:o},[t("strong",[e._v(e._s(o)+":")]),e._v(" "+e._s(r)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},481:function(e,t,r){"use strict";r(476)},482:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),o.locals={},e.exports=o},483:function(e,t,r){"use strict";r.r(t);var o=r(116),n={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(r(481),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg2 font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(r,o){return t("div",{key:o,staticClass:"mt-4"},[t("h4",{staticClass:"text-base font-bold"},[e._v(e._s(o))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:r(493).default})},484:function(e,t,r){"use strict";r.r(t);var o=r(116),n={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(r,o){return t("div",{key:o},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:o}},[e._v(" - "+e._s(o))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:r(480).default})},485:function(e,t,r){"use strict";r(477)},486:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},487:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(5),r(7);var o=r(116),n={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c,getUrl:function(e){var t=e.url,r=e.variables;for(var o in r){var n=r[o].default;if(n){var c="{".concat(o,"}");t=t.replace(c,n)}}return t}}},c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(r){return t("li",{key:r.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(r)}},[e._v(e._s(e.getUrl(r)))]),e._v(" - "),r.description?t("span",[e._v(e._s(r.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},488:function(e,t,r){"use strict";r.r(t);var o={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},n=r(1),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(r,o){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(o)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:r,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:r(491).default,OpenApiExamples:r(492).default,OpenApiRequestBodies:r(483).default,OpenApiResponses:r(494).default,OpenApiParameters:r(495).default,OpenApiSecuritySchemes:r(484).default})},489:function(e,t,r){"use strict";r.r(t);var o={name:"NotFound"},n=r(1),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},490:function(e,t,r){"use strict";r.r(t);r(5),r(139),r(41),r(54),r(7),r(68),r(138),r(266);var o=r(116),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),r=t.indexOf(e);if(-1!==r){var o=Math.max(r-50,0),n=Math.min(r+e.length+50,t.length),c="..."+t.substring(o,n)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=path;m.startsWith("/")&&(m=m.substring(1)),m.endsWith("/")&&(m=m.substring(-1)),m=m.replace(/[&\+\.\/=\?\\\{\}]/gim,"_").replace(/__+/,"_");var y=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,_=y.indexOf(e);if(-1!==_){var x=f.substring(0,100)+"...";v={path:path,title:y.replace(e,"<b>"+e+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(m)}}if(-1!==(_=f.indexOf(e))){var L=Math.max(_-50,0),j=Math.min(_+e.length+50,f.length),S="..."+f.substring(L,j)+"...";S=S.replace(e,"<b>"+e+"</b>"),v?v.description=S:v={path:path,title:y,description:S,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(m)}}v&&this.list.push(v)}}}}}},c=(r(485),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(r){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:r.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(r.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(r.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(r.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},598:function(e,t,r){"use strict";r.r(t);var o=r(2),n=(r(8),r(41),r(54),r(32),r(47),r(48),r(496),r(267),r(6),{name:"AppDocs",layout:"apidocs-layout-array-and-object-nesting",transition:{name:"fade"},head:function(){var e,t,r,o;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:"",bodyAttrs:{class:"ggggg"}};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:"",bodyAttrs:{class:"gggg"}};if(!this.activeRoute)return{};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",n=null!==(r=null!==(o=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==o?o:this.activeRoute.description)&&void 0!==r?r:"";return{title:"["+this.file+"] - "+title,description:n}},setup:function(){},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$nuxt.context;try{e.currentLocale=null!==(o=r.route.params.locale)&&void 0!==o?o:r.route.meta[0].locale,e.type=null!==(n=r.route.params.type)&&void 0!==n?n:r.route.meta[0].type,e.path=null!==(c=r.route.params.path)&&void 0!==c?c:r.route.meta[0].path,e.url=null!==(l=r.route.params.url)&&void 0!==l?l:r.route.meta[0].url}catch(e){console.error(e),console.error(r.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-array-and-object-nesting",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.3",info:{description:"Nesting of Arrays and Object",version:"0.0.0"},paths:{"/object-as-root":{get:{tags:["Array and object nesting"],summary:"Object as root",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}},"/array-of-object":{get:{tags:["Array and object nesting"],summary:"Array of Object",responses:{200:{description:"Array as root",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}},"/array-of-array":{get:{tags:["Array and object nesting"],summary:"Array of array",responses:{200:{description:"Array of array",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}},"/array-of-array-of-primitive":{get:{tags:["Array and object nesting"],summary:"Array of array of number",responses:{200:{description:"Array of array of number",content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},age:{type:"integer"},prices:{type:"array",items:{type:"array",items:{type:"number"}}}}}}}}}}},"/array-of-array-3-levels":{get:{tags:["Array and object nesting"],summary:"Array of array (3 Levels)",responses:{200:{description:"Array of array (3 Levels)",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}},"/array-of-array-4-levels":{get:{tags:["Array and object nesting"],summary:"Array of array (4 Levels)",responses:{200:{description:"Array of array (4 Levels)",content:{"application/json":{schema:{type:"array",items:{type:"array",items:{type:"array",items:{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}}},"/object-containing-array":{get:{tags:["Array and object nesting"],summary:"Object containing array",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"object",properties:{"my-array":{type:"array",items:{type:"object",properties:{"field-1":{type:"string"},"field-2":{type:"number"}}}}}}}}}}}},"/array-of-premitives":{get:{tags:["Array and object nesting"],summary:"Array of primitive types",responses:{200:{description:"Object as root",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}}}}}}},tags:[]},isNuxt3:!1,isNuxt2:!0,locales:{en:"English"},pathsByTags:{"Array and object nesting":{name:"Array and object nesting",description:"",isOpen:!0,items:[{name:"/object-as-root",path:"object-as-root",type:"get",icon:null,description:"Object as root"},{name:"/array-of-object",path:"array-of-object",type:"get",icon:null,description:"Array of Object"},{name:"/array-of-array",path:"array-of-array",type:"get",icon:null,description:"Array of array"},{name:"/array-of-array-of-primitive",path:"array-of-array-of-primitive",type:"get",icon:null,description:"Array of array of number"},{name:"/array-of-array-3-levels",path:"array-of-array-3-levels",type:"get",icon:null,description:"Array of array (3 Levels)"},{name:"/array-of-array-4-levels",path:"array-of-array-4-levels",type:"get",icon:null,description:"Array of array (4 Levels)"},{name:"/object-containing-array",path:"object-containing-array",type:"get",icon:null,description:"Object containing array"},{name:"/array-of-premitives",path:"array-of-premitives",type:"get",icon:null,description:"Array of primitive types"}]}},fileName:"array-and-object-nesting",layoutName:"apidocs-layout-array-and-object-nesting",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access",page:"Custom Page",webhook:"webhook","external-refs":"external-refs","external-refs2":"external-refs2","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"array-and-object-nesting"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path,this.url=e.url},deep:!0}},methods:{downloadJson:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),link=document.createElement("a");link.href=r,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(r)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url][this.type])&&void 0!==e?e:null},activeWebhook:function(){var e;return this.options.doc.webhooks&&this.options.doc.webhooks[this.url]&&null!==(e=this.options.doc.webhooks[this.url][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(t=this.options.doc.paths[this.url].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):e.activeWebhook?t("OpenApiRoute",{attrs:{route:e.activeWebhook,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:r(487).default,OpenApiComponents:r(488).default,OpenApiRoute:r(497).default,NotFound:r(489).default,SearchBlock:r(490).default})}}]);