(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{544:function(e,t,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},545:function(e,t,n){"use strict";n(544)},546:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},547:function(e,t,n){"use strict";n(160),n(550),n(56),n(57),n(205),n(161);var r=n(11),o={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(e){this.searchInPaths(e)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(e){if(e=e.toLowerCase(),this.list=[],""!==e){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),n=t.indexOf(e);if(-1!==n){var r=Math.max(n-50,0),o=Math.min(n+e.length+50,t.length),c="..."+t.substring(r,o)+"...";c=c.replace(e,"<b>"+e+"</b>"),this.list.push({path:"info",title:summary,description:c,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var l=this.doc.paths[path];for(var m in l){var d=l[m],h=this.tr(d,"summary",this.currentLocale).toLowerCase(),y=this.tr(d,"description",this.currentLocale).toLowerCase(),f=null,v=h.indexOf(e);if(-1!==v){var x=y.substring(0,100)+"...";f={path:d.path,title:h.replace(e,"<b>"+e+"</b>"),description:x+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}if(-1!==(v=y.indexOf(e))){var w=Math.max(v-50,0),C=Math.min(v+e.length+50,y.length),O="..."+y.substring(w,C)+"...";O=O.replace(e,"<b>"+e+"</b>"),f?f.description=O:f={path:d.path,title:h,description:O,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(m,"/").concat(path)}}f&&this.list.push(f)}}}}}},c=(n(545),n(1)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative"},[e.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e._l(e.list,(function(n){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:n.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:e._s(n.title)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:e._s(n.path)}}),e._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:e._s(n.description)}})])])])],1)}))],2)])]),e._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:e.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):e._e()])}),[],!1,null,null,null);t.a=component.exports},588:function(e,t,n){"use strict";n.r(t);var r=n(3),o=(n(21),n(160),n(205),n(343),n(342),n(344),n(548),n(549),n(17),n(6)),c=n(5),l=n(4),m=n(7),d=n(547),h=n(11),y={name:"AppDocs",layout:function(e){var t;return"apidocs-layout-".concat(null!==(t=e.route.params.file)&&void 0!==t?t:e.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:o.a,OpenApiComponents:c.a,OpenApiRoute:l.a,NotFound:m.a,SearchBlock:d.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(h.c)(this.activeRoute,"summary",this.currentLocale),description:Object(h.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.$nuxt.context;try{e.currentLocale=null!==(r=n.route.params.locale)&&void 0!==r?r:n.route.meta[0].locale,e.type=null!==(o=n.route.params.type)&&void 0!==o?o:n.route.meta[0].type,e.path=null!==(c=n.route.params.path)&&void 0!==c?c:n.route.meta[0].path}catch(e){console.error(e),console.error(n.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{description:"Contains all data types",version:"1.0.0",title:"Testing different data-types"},paths:{person:{post:{summary:"Demonstrates data-types and constraints",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below",parameters:[{in:"query",name:"search",examples:{example1:{summary:"s1",value:"v1"},example2:{summary:"s2",value:"v2"}},"x-fill-example":"no",schema:{type:"string"},description:"term to search (use &quot;*&quot; to show all)"},{in:"query",name:"id",example:"my-id",schema:{type:"string"}},{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:"integer",format:"int32",minimum:12,maximum:120}},{name:"full-name",in:"query",description:"Name of a person",required:!0,examples:{empty:{value:null,summary:"No Name"},"male-name":{value:"James",summary:"Male name"},"female-name":{value:"Ria",summary:"Female Name"},"gender-nutral-name":{value:"Charlie",summary:"Gender Neutral Name"}},schema:{type:"string",minimum:3}},{name:"social-connection",in:"query",description:"facebook, linkedin, github, instagram, twitter etc",schema:{type:"string",format:"url"}},{name:"email",in:"query",required:!0,example:"iron_man@example.com",schema:{type:"string",format:"email"}},{name:"email-password",in:"query",required:!0,schema:{type:"string",format:"password"}},{name:"date-of-birth",in:"query",required:!0,example:"01-09-2021",schema:{type:"string",format:"date"}},{name:"interests",in:"query",required:!0,"x-fill-example":"yes",examples:["computers","movies"],schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["computers","hiking","swiming","movies","music","dancing","reading","painting"],default:"hiking"}}},{name:"tags",in:"query",description:"Add tags to the person (not-exploded)",style:"form",explode:!1,examples:["robot","not-real"],schema:{type:"array",items:{type:"string"}}},{name:"maritalStatus",in:"query",description:"marital status",example:"unmarried",schema:{type:"string",enum:["married","unmarried","widowed"]}}],responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",required:["name","photoUrls"],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742},properties:{id:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},category:{description:"Categories this person belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"}]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"}}}}}},path:"/person",tags:["other"]}}},tags:[{name:"Person",description:"Person Datatype"}],components:{schemas:{Person:{type:"object",required:["name","photoUrls"],example:{name:"account-name",type:"StandardBankAccount",url:"https://api.freeagent.com/v2/bank_accounts/4093",current_balance:28742},properties:{id:{description:"Pet ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},category:{description:"Categories this person belongs to",allOf:[{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"}]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"string",minLength:4,example:"Guru"},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}},title:"schemas"},Category:{type:"object",properties:{id:{description:"Category ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Category name",type:"string",minLength:1}},title:"schemas"},Id:{type:"integer",format:"int64",readOnly:!0,title:"schemas"},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:[{type:"integer",format:"int64",readOnly:!0,title:"schemas"}]},name:{description:"Tag name",type:"string",minLength:1}},title:"schemas"}}}},locales:{en:"English"},pathsByTags:{other:{name:"other",description:"",isOpen:!0,items:[{name:"/person",path:"person",type:"post",description:"Request-Parameters and Response-Schema contains various data types and constrains. Check out how is it desplayed below"}]}},fileName:"data-types-simple"},path_doc:"docs",file:"data-types-simple",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(e){this.currentLocale=e.locale,this.type=e.type,this.path=e.path},deep:!0}},methods:{downloadYaml:function(){var e=JSON.stringify(this.doc,null,4),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),link=document.createElement("a");link.href=n,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(n)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path][this.type])&&void 0!==e?e:null},subParams:function(){var e;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(e=this.options.doc.paths[this.path].parameters)&&void 0!==e?e:null},server:function(){var e,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(e=this.options.doc.servers[0].url)&&void 0!==e?e:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},f=n(1),component=Object(f.a)(y,(function(){var e=this,t=e._self._c;return t("div",[e.isInfo?t("OpenApiInfo",{attrs:{info:e.doc.info,servers:e.doc.servers,"current-locale":e.currentLocale}}):e.isComponents?t("OpenApiComponents",{attrs:{components:e.doc.components,"current-locale":e.currentLocale}}):e.activeRoute?t("OpenApiRoute",{attrs:{route:e.activeRoute,"current-locale":e.currentLocale,method:e.type,components:e.doc.components,url:e.path,path_doc:e.path_doc,file:e.file,simples:e.simples,server:e.server,"sub-params":e.subParams}}):t("NotFound"),e._v(" "),t("SearchBlock",{attrs:{"current-locale":e.currentLocale,doc:e.doc,path:e.options.path,file:e.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);