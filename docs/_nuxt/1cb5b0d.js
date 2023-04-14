(window.webpackJsonp=window.webpackJsonp||[]).push([[61,10,17,19,25,26,33],{466:function(e,t,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("09cf48f4",content,!0,{sourceMap:!1})},467:function(e,t,r){var content=r(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("d41c8358",content,!0,{sourceMap:!1})},468:function(e,t,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(4).default)("60ee6faa",content,!0,{sourceMap:!1})},469:function(e,t,r){"use strict";r(466)},470:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,".security-scheme__name{margin-bottom:10px;margin-top:0}.security-scheme{margin-bottom:2rem;padding:1rem}.security-scheme__details ul{list-style:disc;margin:6px 10px;padding:1px}",""]),o.locals={},e.exports=o},471:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(6);var o=r(116),n={props:{securityScheme:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(r(469),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"security-scheme border border-gray-300 rounded p-4 mb-8"},[t("h4",{staticClass:"security-scheme__name text-xl font-bold mb-4",staticStyle:{"margin-top":"0"}},[e._v("\n    "+e._s(e.tr(e.securityScheme,"name",e.currentLocale))+"\n  ")]),e._v(" "),"http"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Scheme:")]),e._v(" "+e._s(e.securityScheme.scheme))]),e._v(" "),e.securityScheme.bearerFormat?t("p",[t("strong",[e._v("Bearer format:")]),e._v(" "+e._s(e.securityScheme.bearerFormat)+"\n    ")]):e._e(),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"apiKey"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),t("p",[t("strong",[e._v("Name:")]),e._v(" "+e._s(e.securityScheme.name))]),e._v(" "),t("p",[t("strong",[e._v("In:")]),e._v(" "+e._s(e.securityScheme.in))]),e._v(" "),e.securityScheme.description?t("p",[t("strong",[e._v("Description:")]),e._v(" "+e._s(e.tr(e.securityScheme,"description",e.currentLocale))+"\n    ")]):e._e()]):"oauth2"===e.securityScheme.type?t("div",{staticClass:"security-scheme__details"},[t("p",[t("strong",[e._v("Type:")]),e._v(" "+e._s(e.securityScheme.type))]),e._v(" "),e.securityScheme.flows?t("p",[t("strong",[e._v("Flows:")])]):e._e(),e._v(" "),t("ul",e._l(e.securityScheme.flows,(function(r,o){return t("li",{key:o},[t("p",[t("strong",[e._v(e._s(o)+":")])]),e._v(" "),t("ul",[r.authorizationUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Authorization URL"))+":")]),e._v(" "+e._s(r.authorizationUrl)+"\n          ")]):e._e(),e._v(" "),r.tokenUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Token URL"))+":")]),e._v(" "+e._s(r.tokenUrl)+"\n          ")]):e._e(),e._v(" "),r.refreshUrl?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Refresh URL"))+":")]),e._v(" "+e._s(r.refreshUrl)+"\n          ")]):e._e(),e._v(" "),r.scopes?t("li",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Scopes"))+":")]),e._v(" "),t("ul",e._l(r.scopes,(function(r,o){return t("li",{key:o},[t("strong",[e._v(e._s(o)+":")]),e._v(" "+e._s(r)+"\n              ")])})),0)]):e._e()])])})),0),e._v(" "),e.securityScheme.description?t("div",[t("strong",[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Description"))+":")]),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.tr(e.securityScheme,"description",e.currentLocale))}})]):e._e()]):e._e()])}),[],!1,null,null,null);t.default=component.exports},472:function(e,t,r){"use strict";r(467)},473:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,".mt-4{margin-top:1rem}.text-lg{font-size:1.125rem}.text-lg2{font-size:1.25rem}.font-medium{font-weight:500}",""]),o.locals={},e.exports=o},474:function(e,t,r){"use strict";r.r(t);var o=r(116),n={name:"OpenApiRequestBodies",props:{requestBodies:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=(r(472),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg2 font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Request Bodies"))+": ")]),e._v(" "),e._l(e.requestBodies,(function(r,o){return t("div",{key:o,staticClass:"mt-4"},[t("h4",{staticClass:"text-base font-bold"},[e._v(e._s(o))]),e._v(" "),t("OpenApiRequestBody",{attrs:{requestBody:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiRequestBody:r(486).default})},475:function(e,t,r){"use strict";r.r(t);var o=r(116),n={name:"OpenApiSecuritySchemes",props:{securitySchemes:{type:Object,required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c}},c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h3",{staticClass:"text-lg font-bold mb-2"},[e._v(e._s(e.$openapidoc.getLocaleText(e.currentLocale,"Security Schemes"))+": ")]),e._v(" "),e._l(e.securitySchemes,(function(r,o){return t("div",{key:o},[t("h3",{staticClass:"text-base font-bold mb-2",attrs:{id:o}},[e._v(" - "+e._s(o))]),e._v(" "),t("OpenApiSecurityScheme",{attrs:{securityScheme:r,"current-locale":e.currentLocale}})],1)}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSecurityScheme:r(471).default})},476:function(e,t,r){"use strict";r(468)},477:function(e,t,r){var o=r(3)((function(i){return i[1]}));o.push([e.i,"",""]),o.locals={},e.exports=o},478:function(e,t,r){"use strict";r.r(t);r(41),r(54),r(5),r(7);var o=r(116),n={props:{info:{type:Object,required:!0},servers:{required:!0},currentLocale:{type:String,required:!0}},methods:{tr:o.c,getUrl:function(e){var t=e.url,r=e.variables;for(var o in r){var n=r[o].default;if(n){var c="{".concat(o,"}");t=t.replace(c,n)}}return t}}},c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("h2",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.tr(e.info,"title",e.currentLocale)))]),e._v(" "),t("div",{staticClass:"my-4 description doc-info",domProps:{innerHTML:e._s(e.tr(e.info,"description",e.currentLocale))}}),e._v(" "),e.servers?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Servers")]),e._v(" "),t("ul",{staticClass:"list-disc list-inside"},e._l(e.servers,(function(r){return t("li",{key:r.url},[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.getUrl(r)}},[e._v(e._s(e.getUrl(r)))]),e._v(" - "),r.description?t("span",[e._v(e._s(r.description))]):e._e()])})),0)]):e._e(),e._v(" "),e.info.externalDocs?t("h3",{staticClass:"text-lg font-bold"},[e._v("External documentation")]):e._e(),e._v(" "),e.info.externalDocs?t("ul",{staticClass:"list-disc list-inside"},[t("li",[t("a",{staticClass:"text-blue-500 hover:underline",attrs:{href:e.info.externalDocs.url}},[e._v(e._s(e.tr(e.info.externalDocs,"description",e.currentLocale)))])])]):e._e(),e._v(" "),e.info.version?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("version: "+e._s(e.info.version))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},479:function(e,t,r){"use strict";r.r(t);var o={props:{components:{type:Object,default:function(){return{}}},currentLocale:{type:String,required:!0}}},n=r(1),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.components.schemas?t("div",[t("h3",{staticClass:"text-lg font-bold"},[e._v("Schemas")]),e._v(" "),e._l(e.components.schemas,(function(r,o){return t("div",[t("h4",{staticClass:"text-base font-bold",domProps:{textContent:e._s(o)}}),e._v(" "),t("OpenApiSchema",{attrs:{components:e.components,schema:r,"current-locale":e.currentLocale}})],1)}))],2):e._e(),e._v(" "),e.components.schema?t("div",[t("OpenApiSchema",{attrs:{components:e.components,schema:e.components.schema,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.examples?t("div",[t("OpenApiExamples",{attrs:{examples:e.components.examples,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.requestBodies?t("div",[t("OpenApiRequestBodies",{attrs:{requestBodies:e.components.requestBodies,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.responses?t("div",[t("OpenApiResponses",{attrs:{responses:e.components.responses,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.parameters?t("div",[t("OpenApiParameters",{attrs:{parameters:e.components.parameters,"current-locale":e.currentLocale}})],1):e._e(),e._v(" "),e.components.securitySchemes?t("div",[t("OpenApiSecuritySchemes",{attrs:{securitySchemes:e.components.securitySchemes,"current-locale":e.currentLocale}})],1):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiSchema:r(482).default,OpenApiExamples:r(483).default,OpenApiRequestBodies:r(474).default,OpenApiResponses:r(484).default,OpenApiParameters:r(485).default,OpenApiSecuritySchemes:r(475).default})},480:function(e,t,r){"use strict";r.r(t);var o={name:"NotFound"},n=r(1),component=Object(n.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center justify-center h-screen"},[t("h1",{staticClass:"text-9xl font-bold text-gray-500 mb-0"},[e._v("404")]),e._v(" "),t("p",{staticClass:"text-lg text-gray-700 text-center"},[e._v("Not found")])])}],!1,null,null,null);t.default=component.exports},481:function(e,t,r){"use strict";r.r(t);r(5),r(139),r(41),r(54),r(7),r(68),r(138),r(263);var o=r(116),n={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$openapidocBus.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$openapidocBus.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:o.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),r=t.indexOf(e);if(-1!==r){var o=Math.max(r-50,0),n=Math.min(r+e.length+50,t.length),c="..."+t.substring(o,n)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=path;m.startsWith("/")&&(m=m.substring(1)),m.endsWith("/")&&(m=m.substring(-1)),m=m.replace(/[&\+\.\/=\?\\\{\}]/gim,"_").replace(/__+/,"_");var f=this.tr(h,"summary",this.currentLocale).toLowerCase(),y=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,x=f.indexOf(e);if(-1!==x){var _=y.substring(0,100)+"...";v={path:path,title:f.replace(e,"<b>"+e+"</b>"),description:_+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(m)}}if(-1!==(x=y.indexOf(e))){var S=Math.max(x-50,0),C=Math.min(x+e.length+50,y.length),w="..."+y.substring(S,C)+"...";w=w.replace(e,"<b>"+e+"</b>"),v?v.description=w:v={path:path,title:f,description:w,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(m)}}v&&this.list.push(v)}}}}}},c=(r(476),r(1)),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(r){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:r.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(r.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(r.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(r.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},579:function(e,t,r){"use strict";r.r(t);var o=r(2),n=(r(8),r(41),r(54),r(32),r(47),r(48),r(487),r(264),r(6),{name:"AppDocs",layout:"apidocs-layout-localization",transition:{name:"fade"},head:function(){var e,t,r,o;if(this.isInfo)return{title:"[".concat(this.file,"] - Info Docs"),description:"",bodyAttrs:{class:"ggggg"}};if(this.isComponents)return{title:"[".concat(this.file,"] - Components Docs"),description:"",bodyAttrs:{class:"gggg"}};if(!this.activeRoute)return{};var title=null!==(e=null!==(t=this.activeRoute["x-summary-".concat(this.currentLocale)])&&void 0!==t?t:this.activeRoute.summary)&&void 0!==e?e:"",n=null!==(r=null!==(o=this.activeRoute["x-description-".concat(this.currentLocale)])&&void 0!==o?o:this.activeRoute.description)&&void 0!==r?r:"";return{title:"["+this.file+"] - "+title,description:n}},setup:function(){},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$nuxt.context;try{e.currentLocale=null!==(o=r.route.params.locale)&&void 0!==o?o:r.route.meta[0].locale,e.type=null!==(n=r.route.params.type)&&void 0!==n?n:r.route.meta[0].type,e.path=null!==(c=r.route.params.path)&&void 0!==c?c:r.route.meta[0].path,e.url=null!==(l=r.route.params.url)&&void 0!==l?l:r.route.meta[0].url}catch(e){console.error(e),console.error(r.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this&&this.$fetch&&this.$fetch()},data:function(){return{layout:"apidocs-layout-localization",options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",servers:[{url:"https://petstore.swagger.io/v2",description:"Default server"},{url:"https://petstore.swagger.io/sandbox",description:"Sandbox server"}],info:{title:"Pet Store","x-title-ru":"Зоомагазин","x-title-de":"Tierhandlung",version:"1.0.0","x-locales":{en:"English",ru:"Русский",de:"Deutsch"},description:'<h1 id="introduction">Introduction</h1>\n<p>Petstore illustrate the typical design decisions and tradeoffs a developer makes when building an enterprise application. The demo shows how to document REST API services <strong>OpenAPI format</strong> and is based on <a href="http://petstore.swagger.io/">Petstore sample</a></p>\n',"x-description-ru":'<h1 id="введение">Введение</h1>\n<p>Petstore иллюстрирует типичные дизайнерские решения и компромиссы, на которые разработчик идет при создании корпоративного приложения. Демонстрация показывает, как документировать службы REST API в формате <strong>OpenAPI</strong>, и основана на <a href="http://petstore.swagger.io/">Образец зоомагазина</a></p>\n',"x-description-de":'<h1 id="einführung">Einführung</h1>\n<p>  Petstore veranschaulicht die typischen Designentscheidungen und Kompromisse, die ein Entwickler beim Erstellen einer Unternehmensanwendung trifft.\n  Die Demo zeigt, wie REST-API-Dienste im <strong>OpenAPI-Format</strong> dokumentiert werden und basiert auf\n  <a href="http://petstore.swagger.io/">Petstore-Beispiel</a></p>\n'},externalDocs:{"x-description-ru":"Узнайте, как создать репозиторий Github для вашей спецификации OpenAPI.","x-description-de":"Erfahren Sie, wie Sie ein Github-Repository für Ihre OpenAPI-Spezifikation erstellen.",description:"Find out how to create Github repo for your OpenAPI spec.",url:"https://github.com/Rebilly/generator-openapi-repo"},tags:[{name:"Pet","x-name-ru":"Питомец","x-name-de":"Haustier",description:"Everything about your Pets","x-description-ru":"Все о ваших питомцах","x-description-de":"Alles rund um Ihre Haustiere"}],paths:{"/pet":{post:{tags:["pet"],summary:"Add a new pet to the store","x-summary-ru":"Добавить нового питомца в магазин","x-summary-de":"Fügen Sie dem Geschäft ein neues Haustier hinzu",description:"Add new pet to the store inventory.","x-description-ru":"Добавьте нового питомца в инвентарь магазина.","x-description-de":"Fügen Sie dem Ladeninventar ein neues Haustier hinzu.",operationId:"addPet",responses:{405:{description:"Invalid input"}},security:[{petstore_auth:["write:pets","read:pets"]}],requestBody:{content:{"application/json":{schema:{allOf:[{description:"My Pet","x-description-ru":"Мой питомец","x-description-de":"Mein Haustier",title:"Pettie"},{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat"}},properties:{id:{externalDocs:{description:"Find more info here","x-description-ru":"Узнайте больше здесь","x-description-de":"Weitere Informationen finden Sie hier",url:"https://example.com"},description:"Pet ID"},category:{description:"Categories this pet belongs to","x-description-ru":"Категории, к которым принадлежит этот питомец","x-description-de":"Kategorien, zu denen dieses Haustier gehört",allOf:[{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:[{}]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"schemas"}]},name:{description:"The name given to a pet","x-description-ru":"Имя, данное питомцу","x-description-de":"Der Name, der einem Haustier gegeben wird",type:"string",example:"Guru"}},xml:{name:"Pet"},title:"schemas"}]}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store","x-description-ru":"Питомец, который нужно добавить в магазин","x-description-de":"Pet-Objekt, das dem Store hinzugefügt werden muss",required:!0,title:"requestBodies"}}}},components:{schemas:{ApiResponse:{type:"object",properties:{code:{type:"integer",format:"int32"},type:{type:"string"},message:{type:"string"}}},Cat:{description:"A representation of a cat","x-description-ru":"Представление о кошке","x-description-de":"Eine Darstellung einer Katze",allOf:[{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat"}},properties:{id:{externalDocs:{description:"Find more info here","x-description-ru":"Узнайте больше здесь","x-description-de":"Weitere Informationen finden Sie hier",url:"https://example.com"},description:"Pet ID"},category:{description:"Categories this pet belongs to","x-description-ru":"Категории, к которым принадлежит этот питомец","x-description-de":"Kategorien, zu denen dieses Haustier gehört",allOf:[{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:[{}]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"schemas"}]},name:{description:"The name given to a pet","x-description-ru":"Имя, данное питомцу","x-description-de":"Der Name, der einem Haustier gegeben wird",type:"string",example:"Guru"}},xml:{name:"Pet"},title:"schemas"},{type:"object",properties:{huntingSkill:{type:"string",description:"The measured skill for hunting","x-description-ru":"Измеренное умение для охоты","x-description-de":"Die gemessene Fertigkeit für die Jagd",default:"lazy",enum:["clueless","lazy","adventurous","aggressive"]}},required:["huntingSkill"]}]},Category:{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:[{}]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"schemas"},Pet:{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat"}},properties:{id:{externalDocs:{description:"Find more info here","x-description-ru":"Узнайте больше здесь","x-description-de":"Weitere Informationen finden Sie hier",url:"https://example.com"},description:"Pet ID"},category:{description:"Categories this pet belongs to","x-description-ru":"Категории, к которым принадлежит этот питомец","x-description-de":"Kategorien, zu denen dieses Haustier gehört",allOf:[{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:[{}]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"schemas"}]},name:{description:"The name given to a pet","x-description-ru":"Имя, данное питомцу","x-description-de":"Der Name, der einem Haustier gegeben wird",type:"string",example:"Guru"}},xml:{name:"Pet"},title:"schemas"},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:[{}]},name:{description:"Tag name",type:"string",minLength:1}},xml:{name:"Tag"}}},requestBodies:{Pet:{content:{"application/json":{schema:{allOf:[{description:"My Pet","x-description-ru":"Мой питомец","x-description-de":"Mein Haustier",title:"Pettie"},{type:"object",required:["name","photoUrls"],discriminator:{propertyName:"petType",mapping:{cat:"#/components/schemas/Cat"}},properties:{id:{externalDocs:{description:"Find more info here","x-description-ru":"Узнайте больше здесь","x-description-de":"Weitere Informationen finden Sie hier",url:"https://example.com"},description:"Pet ID"},category:{description:"Categories this pet belongs to","x-description-ru":"Категории, к которым принадлежит этот питомец","x-description-de":"Kategorien, zu denen dieses Haustier gehört",allOf:[{type:"object",properties:{id:{description:"Category ID","x-description-ru":"Идентификатор категории","x-description-de":"Kategorie ID",allOf:[{}]},name:{description:"Category name","x-description-ru":"Название категории","x-description-de":"Kategoriename",type:"string",minLength:1},sub:{description:"Test Sub Category","x-description-ru":"Тестовая подкатегория","x-description-de":"Unterkategorie testen",type:"object",properties:{prop1:{type:"string",description:"Dumb Property"}}}},xml:{name:"Category"},title:"schemas"}]},name:{description:"The name given to a pet","x-description-ru":"Имя, данное питомцу","x-description-de":"Der Name, der einem Haustier gegeben wird",type:"string",example:"Guru"}},xml:{name:"Pet"},title:"schemas"}]}},"application/xml":{schema:{type:"object",properties:{name:{type:"string",description:"hooray"}}}}},description:"Pet object that needs to be added to the store","x-description-ru":"Питомец, который нужно добавить в магазин","x-description-de":"Pet-Objekt, das dem Store hinzugefügt werden muss",required:!0,title:"requestBodies"},UserArray:{content:{"application/json":{schema:{type:"array",items:{}}}},description:"List of user object",required:!0}},securitySchemes:{basic:{type:"http",scheme:"basic"},petstore_auth:{description:"Get access to data while protecting your account credentials.\nOAuth2 is also a safer and more secure way to give you access.\n",type:"oauth2",flows:{implicit:{authorizationUrl:"http://petstore.swagger.io/api/oauth/dialog",scopes:{"write:pets":"modify pets in your account","read:pets":"read your pets"}}}},api_key:{description:"For this sample, you can use the api key `special-key` to test the authorization filters.\n",type:"apiKey",name:"api_key",in:"header"}},examples:{Order:{value:{quantity:"1,",shipDate:"2018-10-19T16:46:45Z,",status:"placed,",complete:!1}}}}},isNuxt3:!1,isNuxt2:!0,locales:{en:"English",ru:"Русский",de:"Deutsch"},pathsByTags:{pet:{name:"pet",description:"",isOpen:!0,items:[{name:"/pet",path:"pet",type:"post",icon:null,description:"Add a new pet to the store","x-description-ru":"Добавить нового питомца в магазин","x-description-de":"Fügen Sie dem Geschäft ein neues Haustier hinzu"}]}},fileName:"localization",layoutName:"apidocs-layout-localization",files:{petstore_extended:"Petstore Extended Api",localization:"Localization","no-access":"no access",page:"Custom Page","additional-props":"additional-props",allof:"allof","arr-of-arr":"arr-of-arr","arrange-by-tags":"arrange-by-tags","array-and-object-nesting":"array-and-object-nesting","auth-test1":"auth-test1",auth:"auth",callback:"callback",circular:"circular","code-highlight":"code-highlight",collapsable:"collapsable","data-types-simple":"data-types-simple","data-types":"data-types","dynamic-form-params":"dynamic-form-params","dynamic-query-params":"dynamic-query-params",events:"events","example-with-nested-refs":"example-with-nested-refs",examples:"examples","file-upload":"file-upload","fill-example-test":"fill-example-test","large-spec":"large-spec",links:"links","markdown-headings":"markdown-headings",markdown:"markdown",mock:"mock","multi-datatypes-test":"multi-datatypes-test","multi-datatypes":"multi-datatypes","multipart-formdata":"multipart-formdata","multiple-oneof":"multiple-oneof","multiple-security-schemes":"multiple-security-schemes","no-server":"no-server","oauth-demo":"oauth-demo","oauth-o365":"oauth-o365","oauth-vendor-extension":"oauth-vendor-extension",oauth:"oauth","oneof-allof-nested":"oneof-allof-nested","oneof-combinations":"oneof-combinations","oneof-with-refs":"oneof-with-refs",oneof:"oneof","open-api-3-1-test":"open-api-3-1-test","open-api-3-1":"open-api-3-1",parameters:"parameters",petstore:"petstore","post-nobody":"post-nobody","request-body-multiple":"request-body-multiple","schema-title-and-descriptions":"schema-title-and-descriptions",schema:"schema","server-override":"server-override",server:"server","toomany-example-generation":"toomany-example-generation",xml:"xml"}},path_doc:"docs",file:"localization"}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path,this.url=e.url},deep:!0}},methods:{downloadJson:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),link=document.createElement("a");link.href=r,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(r)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.url]&&null!==(e=this.options.doc.paths[this.url].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.url]&&this.options.doc.paths[this.url].servers&&this.options.doc.paths[this.url].servers[0]?null!==(t=this.options.doc.paths[this.url].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$openapidocBus.$on("downloadJsonDoc",this.downloadJson)},unmounted:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)},destroyed:function(){this.$openapidocBus.$off("downloadJsonDoc",this.downloadJson)}}),c=r(1),component=Object(c.a)(n,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.url,path_doc:e.path_doc,file:e.file,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OpenApiInfo:r(478).default,OpenApiComponents:r(479).default,OpenApiRoute:r(488).default,NotFound:r(480).default,SearchBlock:r(481).default})}}]);