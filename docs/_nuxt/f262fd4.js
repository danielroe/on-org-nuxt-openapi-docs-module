(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{544:function(n,t,e){var content=e(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(9).default)("6cb54f2e",content,!0,{sourceMap:!1})},545:function(n,t,e){"use strict";e(544)},546:function(n,t,e){var r=e(8)((function(i){return i[1]}));r.push([n.i,"",""]),r.locals={},n.exports=r},547:function(n,t,e){"use strict";e(160),e(550),e(56),e(57),e(205),e(161);var r=e(11),l={props:{currentLocale:{type:String,required:!0},doc:{type:Object,required:!0},file:{type:String,required:!0},path:{type:String,required:!0}},data:function(){return{isSearchOpen:!1,search:"",list:[]}},watch:{search:function(n){this.searchInPaths(n)}},mounted:function(){this.$nuxt.$on("toggleSearchDoc",this.toggleSearch)},beforeDestroy:function(){this.$nuxt.$off("toggleSearchDoc",this.toggleSearch)},methods:{tr:r.c,toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen,this.isSearchOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"},searchInPaths:function(n){if(n=n.toLowerCase(),this.list=[],""!==n){var summary=this.tr(this.doc.info,"title",this.currentLocale).toLowerCase(),t=this.tr(this.doc.info,"description",this.currentLocale).toLowerCase(),e=t.indexOf(n);if(-1!==e){var r=Math.max(e-50,0),l=Math.min(e+n.length+50,t.length),o="..."+t.substring(r,l)+"...";o=o.replace(n,"<b>"+n+"</b>"),this.list.push({path:"info",title:summary,description:o,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/get/info")})}for(var path in this.doc.paths)if("parameters"!==path){var c=this.doc.paths[path];for(var h in c){var d=c[h],m=this.tr(d,"summary",this.currentLocale).toLowerCase(),y=this.tr(d,"description",this.currentLocale).toLowerCase(),j=null,f=m.indexOf(n);if(-1!==f){var v=y.substring(0,100)+"...";j={path:d.path,title:m.replace(n,"<b>"+n+"</b>"),description:v+"...",url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}if(-1!==(f=y.indexOf(n))){var x=Math.max(f-50,0),w=Math.min(f+n.length+50,y.length),L="..."+y.substring(x,w)+"...";L=L.replace(n,"<b>"+n+"</b>"),j?j.description=L:j={path:d.path,title:m,description:L,url:"/".concat(this.path,"/").concat(this.file,"/").concat(this.currentLocale,"/").concat(h,"/").concat(path)}}j&&this.list.push(j)}}}}}},o=(e(545),e(1)),component=Object(o.a)(l,(function(){var n=this,t=n._self._c;return t("div",{staticClass:"relative"},[n.isSearchOpen?t("div",{staticClass:"fixed fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"},[t("div",{staticClass:"w-full max-w-lg mx-auto"},[t("div",{staticClass:"bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"},[t("div",{staticClass:"px-4 py-3 shadow border-gray-200 dark:border-gray-800",staticStyle:{height:"300px","overflow-x":"scroll"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.search,expression:"search"}],staticClass:"w-full border-gray-200 dark:bg-black dark:border-gray-800 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500",attrs:{type:"text",placeholder:"Search..."},domProps:{value:n.search},on:{input:function(t){t.target.composing||(n.search=t.target.value)}}}),n._v(" "),n._l(n.list,(function(e){return t("div",{staticClass:"mt-4"},[t("nuxt-link",{attrs:{to:e.url}},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"bg-gray-100 dark:bg-gray-900 rounded-md px-3 py-2"},[t("h5",{staticClass:"text-base font-medium text-gray-700",domProps:{innerHTML:n._s(e.title)}}),n._v(" "),t("p",{staticClass:"text-sm text-gray-400",staticStyle:{"font-size":"10px"},domProps:{textContent:n._s(e.path)}}),n._v(" "),t("p",{staticClass:"text-sm text-gray-500",domProps:{innerHTML:n._s(e.description)}})])])])],1)}))],2)])]),n._v(" "),t("button",{staticClass:"absolute top-0 right-0 m-3 text-gray-800 hover:text-gray-900 shadow bg-white/50 dark:text-gray-300/75",on:{click:n.toggleSearch}},[t("svg",{staticClass:"w-10 h-10 shadow",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]):n._e()])}),[],!1,null,null,null);t.a=component.exports},591:function(n,t,e){"use strict";e.r(t);var r=e(3),l=(e(21),e(160),e(205),e(343),e(342),e(344),e(548),e(549),e(17),e(6)),o=e(5),c=e(4),h=e(7),d=e(547),m=e(11),y={name:"AppDocs",layout:function(n){var t;return"apidocs-layout-".concat(null!==(t=n.route.params.file)&&void 0!==t?t:n.route.meta[0].file).replace(/["']/g,"").replace(/./g,"-")},components:{OpenApiInfo:l.a,OpenApiComponents:o.a,OpenApiRoute:c.a,NotFound:h.a,SearchBlock:d.a},head:function(){return this.isInfo?{title:"[".concat(this.file,"] - Info Docs"),description:""}:this.isComponents?{title:"[".concat(this.file,"] - Components Docs"),description:""}:{title:"["+this.file+"] - "+Object(m.c)(this.activeRoute,"summary",this.currentLocale),description:Object(m.c)(this.activeRoute,"description",this.currentLocale)}},fetch:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,l,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.$nuxt.context;try{n.currentLocale=null!==(r=e.route.params.locale)&&void 0!==r?r:e.route.meta[0].locale,n.type=null!==(l=e.route.params.type)&&void 0!==l?l:e.route.meta[0].type,n.path=null!==(o=e.route.params.path)&&void 0!==o?o:e.route.meta[0].path}catch(n){console.error(n),console.error(e.route)}case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.$fetch()},data:function(){return{options:{folder:"./docs/openapi",name:"Api Docs",path:"docs",debug:!0,doc:{openapi:"3.0.0",info:{title:"Dynamic Query Params",version:"1.0.0"},paths:{"dynamic-query-params":{get:{tags:["Query Params"],summary:"Various ways to pass query params",description:'<p>Following OpenAPI spec demonstrate various ways to pass query params.</p>\n<ul>\n<li>you may pass predefined query params</li>\n<li>you may create dynamic query params by defining a query-param as an object,\nin that case each key of the object will be treated as a seperate param</li>\n<li>Array serialization depends on <code>style</code> and <code>explode</code> property</li>\n</ul>\n<pre><code class="hljs language-yaml"> <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">info:</span>\n    <span class="hljs-attr">title:</span>  <span class="hljs-string">Dynamic</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>\n  <span class="hljs-attr">paths:</span>\n    <span class="hljs-string">/dynamic-query-params:</span>\n      <span class="hljs-attr">get:</span>\n        <span class="hljs-attr">tags:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-string">Query</span> <span class="hljs-string">Params</span>\n        <span class="hljs-attr">summary:</span>  <span class="hljs-string">Various</span> <span class="hljs-string">ways</span> <span class="hljs-string">to</span> <span class="hljs-string">pass</span> <span class="hljs-string">query</span> <span class="hljs-string">params</span>\n        <span class="hljs-attr">parameters:</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">limit</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">integer</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">fruits</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">colors</span>\n            <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">array</span>\n              <span class="hljs-attr">items:</span>\n                <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params1</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params2</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">form</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params3</span>\n            <span class="hljs-attr">style:</span> <span class="hljs-string">pipeDelimited</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">additionalProperties:</span> {}\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params4</span>\n            <span class="hljs-attr">content:</span>\n              <span class="hljs-attr">&quot;application/json&quot;:</span>\n                <span class="hljs-attr">schema:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n                  <span class="hljs-attr">properties:</span>\n                    <span class="hljs-attr">someProperty:</span>\n                      <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">additionalProperties:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n          <span class="hljs-bullet">-</span> <span class="hljs-attr">in:</span> <span class="hljs-string">query</span>\n            <span class="hljs-attr">name:</span> <span class="hljs-string">dynamic-query-params5</span>\n            <span class="hljs-attr">explode:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">required:</span> <span class="hljs-literal">false</span>\n            <span class="hljs-attr">schema:</span>\n              <span class="hljs-attr">type:</span> <span class="hljs-string">object</span>\n              <span class="hljs-attr">properties:</span>\n                <span class="hljs-attr">propertyOne:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">VALUE-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">VALUE-2</span>\n                <span class="hljs-attr">propertyTwo:</span>\n                  <span class="hljs-attr">type:</span> <span class="hljs-string">string</span>\n                  <span class="hljs-attr">enum:</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-1</span>\n                    <span class="hljs-bullet">-</span> <span class="hljs-string">FLAG-2</span>\n                  <span class="hljs-attr">default:</span> <span class="hljs-string">FLAG-1</span>\n        <span class="hljs-attr">responses:</span>\n          <span class="hljs-attr">&#x27;200&#x27;:</span>\n            <span class="hljs-attr">description:</span> <span class="hljs-string">successful</span> <span class="hljs-string">operation</span>\n</code></pre>\n',parameters:[{name:"limit",in:"query",example:10,description:"primitive non-dynamic parameter can coexist with dynamic parameters &lt;br /&gt; `limit=10`\n",schema:{type:"integer"}},{name:"fruits",in:"query",example:["apple","banana","grape"],description:"not-exploded array, should be serialized as &lt;br /&gt; `fruits=apple,banana,grape`\n",schema:{type:"array",items:{type:"string"}}},{name:"colors",in:"query",example:["red","black","white"],description:"exploded array, should be serialized as &lt;br /&gt; `colors=red&colors=black&colors=white`\n",schema:{type:"array",items:{type:"string"}}},{in:"query",name:"dynamic-query-params1",description:"Arrays are exploded, should be serialized as  &lt;br /&gt; `a=1&b=2&colors=red&colors=black&e=3`\n",schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;a&quot;:1,\n  &quot;b&quot;:2,\n  &quot;colors&quot;:[\n    &quot;red&quot;,\n    &quot;black&quot;\n  ],\n  &quot;d&quot;:{ &quot;d1&quot;:1, &quot;d2&quot;:2 },\n  &quot;e&quot;:3\n}\n"},{in:"query",name:"dynamic-query-params2",description:"Arrays are not-exploded, therefore comma sperated &lt;br /&gt; `f=1&g=2&hobbies=music,dance`\n",style:"form",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;f&quot;:1,\n  &quot;g&quot;:2,\n  &quot;hobbies&quot;:[\n    &quot;music&quot;,\n    &quot;dance&quot;\n  ]\n}\n"},{in:"query",name:"dynamic-query-params3",description:"Arrays are not exploded, and pipe separated &lt;br /&gt; `i=1&j=2&keys=public&#x7C;private`\n",style:"pipeDelimited",explode:!1,schema:{type:"object",additionalProperties:{}},example:"{\n  &quot;i&quot;:1,\n  &quot;j&quot;:2,\n  &quot;keys&quot;:[&quot;public&quot;, &quot;private&quot;]\n}\n"},{in:"query",name:"dynamic-query-params4",description:"Parameters with JSON encoding are JSON encoded and escaped: &lt;br /&gt; `dynamic-query-params4=%7B%22someProperty%22%3A%22foo%22%2C%22bar%22%3A%22baz%22%7D`\n",content:{"application/json":{example:"{\n  &quot;someProperty&quot;: &quot;foo&quot;,\n  &quot;bar&quot;: &quot;baz&quot;\n}\n",schema:{type:"object",properties:{someProperty:{type:"string"}},additionalProperties:{type:"string"}}}}},{in:"query",name:"dynamic-query-params5",description:"Example generation works for non-exloded objects:&lt;br /&gt; `propertyOne=VALUE-1&property2=FLAG-1`\n",explode:!1,required:!1,schema:{type:"object",properties:{propertyOne:{type:"string",enum:["VALUE-1","VALUE-2"],default:"VALUE-2"},propertyTwo:{type:"string",enum:["FLAG-1","FLAG-2"],default:"FLAG-1"}}}}],responses:{200:{description:"successful operation"}},path:"/dynamic-query-params"}}}},locales:{en:"English"},pathsByTags:{"Query Params":{name:"Query Params",description:"",isOpen:!0,items:[{name:"/dynamic-query-params",path:"dynamic-query-params",type:"get",description:"Following OpenAPI spec demonstrate various ways to pass query params.\n  - you may pass predefined query params\n  - you may create dynamic query params by defining a query-param as an object,\n    in that case each key of the object will be treated as a seperate param\n  - Array serialization depends on `style` and `explode` property\n\n```yaml\n openapi: 3.0.0\n  info:\n    title:  Dynamic Query Params\n    version: 1.0.0\n  paths:\n    /dynamic-query-params:\n      get:\n        tags:\n          - Query Params\n        summary:  Various ways to pass query params\n        parameters:\n          - name: limit\n            in: query\n            schema:\n              type: integer\n          - name: fruits\n            in: query\n            style: form\n            explode: false\n            schema:\n              type: array\n              items:\n                type: string\n          - name: colors\n            in: query\n            schema:\n              type: array\n              items:\n                type: string\n          - in: query\n            name: dynamic-query-params1\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params2\n            style: form\n            explode: false\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params3\n            style: pipeDelimited\n            explode: false\n            schema:\n              type: object\n              additionalProperties: {}\n          - in: query\n            name: dynamic-query-params4\n            content:\n              \"application/json\":\n                schema:\n                  type: object\n                  properties:\n                    someProperty:\n                      type: string\n                  additionalProperties:\n                  type: string\n          - in: query\n            name: dynamic-query-params5\n            explode: false\n            required: false\n            schema:\n              type: object\n              properties:\n                propertyOne:\n                  type: string\n                  enum:\n                    - VALUE-1\n                    - VALUE-2\n                  default: VALUE-2\n                propertyTwo:\n                  type: string\n                  enum:\n                    - FLAG-1\n                    - FLAG-2\n                  default: FLAG-1\n        responses:\n          '200':\n            description: successful operation\n  ```\n"}]}},fileName:"dynamic-query-params"},path_doc:"docs",file:"dynamic-query-params",currentLocale:"en",type:"",path:""}},watch:{"$route.meta":{handler:function(n){this.currentLocale=n.locale,this.type=n.type,this.path=n.path},deep:!0}},methods:{downloadYaml:function(){var n=JSON.stringify(this.doc,null,4),t=new Blob([n],{type:"application/json"}),e=URL.createObjectURL(t),link=document.createElement("a");link.href=e,link.download=this.file+".yaml",document.body.appendChild(link),link.click(),document.body.removeChild(link),URL.revokeObjectURL(e)}},computed:{doc:function(){return this.options.doc},name:function(){return this.options.name},simples:function(){return[{in:"queryString",name:"apikey",value:"1111"}]},isInfo:function(){return"info"===this.path},isComponents:function(){return"components"===this.path},activeRoute:function(){var n;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(n=this.options.doc.paths[this.path][this.type])&&void 0!==n?n:null},subParams:function(){var n;return this.options.doc.paths&&this.options.doc.paths[this.path]&&null!==(n=this.options.doc.paths[this.path].parameters)&&void 0!==n?n:null},server:function(){var n,t;return this.options.doc.paths&&this.options.doc.paths[this.path]&&this.options.doc.paths[this.path].servers&&this.options.doc.paths[this.path].servers[0]?null!==(t=this.options.doc.paths[this.path].servers[0].url)&&void 0!==t?t:null:this.options.doc.servers&&this.options.doc.servers[0]&&null!==(n=this.options.doc.servers[0].url)&&void 0!==n?n:null}},mounted:function(){this.$nuxt.$on("downloadYamlDoc",this.downloadYaml)},destroyed:function(){this.$nuxt.$off("downloadYamlDoc",this.downloadYaml)}},j=e(1),component=Object(j.a)(y,(function(){var n=this,t=n._self._c;return t("div",[n.isInfo?t("OpenApiInfo",{attrs:{info:n.doc.info,servers:n.doc.servers,"current-locale":n.currentLocale}}):n.isComponents?t("OpenApiComponents",{attrs:{components:n.doc.components,"current-locale":n.currentLocale}}):n.activeRoute?t("OpenApiRoute",{attrs:{route:n.activeRoute,"current-locale":n.currentLocale,method:n.type,components:n.doc.components,url:n.path,path_doc:n.path_doc,file:n.file,simples:n.simples,server:n.server,"sub-params":n.subParams}}):t("NotFound"),n._v(" "),t("SearchBlock",{attrs:{"current-locale":n.currentLocale,doc:n.doc,path:n.options.path,file:n.file}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);