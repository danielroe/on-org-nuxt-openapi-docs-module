(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{544:function(t,e,o){var content=o(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},545:function(t,e,o){"use strict";o(544)},546:function(t,e,o){var n=o(8)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},547:function(t,e,o){"use strict";o(160),o(550),o(56),o(57),o(205),o(161);var n=o(11),r={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(t){this.searchInPaths(t)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:n.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(t){if(t=t.toLowerCase(),this.list=[],""!==t){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),e=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),o=e.indexOf(t);if(-1!==o){var n=Math.max(o-50,0),r=Math.min(o+t.length+50,e.length),c="..."+e.substring(n,r)+"...";c=c.replace(t,"<b>"+t+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var d in l){var h=l[d],m=this.tr(h,"summary",this.currentLocale).toLowerCase(),f=this.tr(h,"description",this.currentLocale).toLowerCase(),v=null,y=m.indexOf(t);if(-1!==y){var w=f.substring(0,100)+"...";v={path:h.path,title:m.replace(t,"<b>"+t+"</b>"),description:w+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}if(-1!==(y=f.indexOf(t))){var x=Math.max(y-50,0),C=Math.min(y+t.length+50,f.length),L="..."+f.substring(x,C)+"...";L=L.replace(t,"<b>"+t+"</b>"),v?v.description=L:v={path:h.path,title:m,description:L,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(d,"/").concat(path)}}v&&this.list.push(v)}}}}}},c=(o(545),o(1)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.isSearchOpen?e("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[e("div",{staticClass:"w-full max-w-lg mx-auto"},[e("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[e("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),t._l(t.list,(function(o){return e("div",{staticClass:"mt-4"},[e("nuxt-link",{attrs:{to:o.url}},[e("div",{staticClass:"mt-2"},[e("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[e("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:t._s(o.title)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:t._s(o.path)}}),t._v(" "),e("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:t._s(o.description)}})])])])],1)}))],2)])]),t._v(" "),e("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:t.toggleSearch}},[e("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},577:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(21),o(160),o(205),o(343),o(342),o(344),o(548),o(549),o(17),o(6)),c=o(5),l=o(4),d=o(7),h=o(547),m=o(11),f={name:"AppDocs",layout:function(t){var e;return"apidocs-layout-".concat(null!==(e=t.route.params.file)&&void 0!==e?e:t.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:r.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:d.a,SearchBlock:h.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(m.c)(this.activeRoute,"summary",this.currentLocale),description:Object(m.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$nuxt.context;try{t.currentLocale=null!==(n=o.route.params.locale)&&void 0!==n?n:o.route.meta[0].locale,t.type=null!==(r=o.route.params.type)&&void 0!==r?r:o.route.meta[0].type,t.path=null!==(c=o.route.params.path)&&void 0!==c?c:o.route.meta[0].path}catch(t){console.error(t),console.error(o.route)}case 2:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{version:"1.0.0",title:"Additional Properties"},paths:{"additional-props_primitive":{get:{summary:"Only addtional props",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"integer"}}}}}},path:"/additional-props/primitive",tags:["other"]}},"additional-props_multiple":{get:{summary:"Defined Props and additional props",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{"defined-prop":{type:"integer"}},additionalProperties:{type:"object",properties:{"additional-prop1":{type:"integer"},"additional-prop2":{type:"string"}}}}}}}},path:"/additional-props/multiple",tags:["other"]}},"additional-props_schema":{get:{summary:"additional props as $ref",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",additionalProperties:{type:"object",properties:{Name:{type:"string"},Age:{type:"integer"}},additionalProperties:{type:"string"},title:"schemas"}}}}}},path:"/additional-props/schema",tags:["other"]}}},components:{schemas:{Person:{type:"object",properties:{Name:{type:"string"},Age:{type:"integer"}},additionalProperties:{type:"string"},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/additional-props/primitive",path:"additional-props_primitive",type:"get",description:null},{name:"/additional-props/multiple",path:"additional-props_multiple",type:"get",description:null},{name:"/additional-props/schema",path:"additional-props_schema",type:"get",description:null}]}},fileName:"additional-props"},path_doc:"docs",file:"additional-props",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(t){this.currentLocale=t.locale,this.type=t.type,this.path=t.path},deep:!0}},methods:{downloadYaml:function(){var t=JSON.stringify(this.doc,null,4),e=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(e),link=document.createElement("a");link.href=o,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(o)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path][this.type])&&void 0!==t?t:null},subParams:function(){var t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(t=this.options.doc.paths[this.path].parameters)&&void 0!==t?t:null},server:function(){var t,e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(e=this.options.doc.paths[this.path].servers[0].url)&&void 0!==e?e:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(t=this.options.doc.servers[0].url)&&void 0!==t?t:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},v=o(1),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.isInfo?e("OpenApiInfo",{attrs:{info:t.doc.info,servers:t.doc.servers,"current-locale":t.currentLocale}}):t.isComponents?e("OpenApiComponents",{attrs:{components:t.doc.components,"current-locale":t.currentLocale}}):t.activeRoute?e("OpenApiRoute",{attrs:{route:t.activeRoute,"current-locale":t.currentLocale,method:t.type,components:t.doc.components,url:t.path,path_doc:t.path_doc,file:t.file,simples:t.simples,server:t.server,"sub-params":t.subParams}}):e("NotFound"),t._v(" "),e("SearchBlock",{attrs:{"current-locale":t.currentLocale,doc:t.doc,path:t.options.path,file:t.file}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);