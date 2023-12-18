import{_ as M,a as $,b as z,c as V,d as Z,e as H}from"./SearchBlock.3e19f150.js";import{_ as K}from"./client-only.45c4cd0b.js";import{f as G,h as Q,j as X,r as N,k as o,g as Y,l as ee,c as te,u as e,m as d,b as I,w as ae,n as ne,o as u}from"./entry.4698dbd5.js";import{u as se}from"./vue.f36acd1f.e66bd35a.js";import{d as oe}from"./docs.examples.config.e0cc01ca.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const w={openapi:"3.0.0",info:{title:"Providing Examples",description:"Providing Examples",version:"1.0.0"},paths:{"/multiple-examples-in-request-parameters/{path-param-1}/{path-param-2}":{get:{tags:["Providing Examples"],parameters:[{name:"path-param-1",in:"path",schema:{type:"string",default:"p1-opt-2"},examples:{example1:{value:"p1-opt-1"},example2:{value:"p1-opt-2"}}},{name:"path-param-2",in:"path",schema:{type:"string"},examples:{example1:{value:"p2-opt-1"},example2:{value:"p2-opt-2"}}},{name:"age",description:"Single Example",in:"query",schema:{type:"number"},example:24},{name:"country-code",description:`<p>Multiple examples <em>(Notice <code>us</code> do not have a summary)</em></p>
`,in:"query",schema:{type:"string",default:" "},examples:{example1:{value:"uk",summary:"United Kingdom"},example2:{value:"us"},example3:{value:"ch",summary:"China"}}},{name:"marital-status",in:"query",schema:{type:"string",default:"unmarried"},examples:{example1:{value:"married"},example2:{value:"unmarried"},example3:{value:"widowed"}}},{name:"luckyNumbers",in:"query",schema:{type:"array",items:{type:"number"},minItems:4,maxItems:4,examples:["","   ",[10],[10,20,30,40]]}}]}},"/multiple-examples-by-response-type":{get:{description:"Multiple Examples provide for each media-type (`application/json` or `application/json`)",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},examples:{"valid-json":{summary:"Example with Valid JSON String",description:"If valid JSON is provided in the example, It will be displayed in JSON tree form. Allowing copy/expand/collapse functionality",value:`{
  &quot;person&quot;: {
    &quot;fullName&quot;: {
      &quot;firstName&quot;: &quot;Mickey&quot;,
      &quot;lastName&quot;: &quot;Mouse&quot;
    },
    &quot;age&quot;: &quot;9&quot;
  }
}
`},"invalid-json":{summary:"Example with Invalid JSON String",description:"Invalid JSON is displayed in text-area as is",value:`{
  person: {
    fullName: {
      firstName: Donald,
      lastName: Duck
    },
    age: 10
  }
}
`},"as-object":{summary:"Example specified as object",value:{fullName:{firstName:"Donald",lastName:"Duck"},age:10}}}},"application/xml":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},examples:{"example-1":{description:"Exmple 1 Description",value:`<root&gt;
  &lt;person&gt;
    &lt;fullName&gt;
      &lt;firstName&gt; Mickey &lt;/firstName&gt;
      &lt;lastName&gt; Mouse &lt;/lastName&gt;
    &lt;/fullName&gt;
    &lt;age&gt; 9 &lt;/age&gt;
  &lt;/person&gt;
&lt;/root&gt;
`}}}}}}}},"/single-example-by-response-type":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}}},example:`{
  age: 10,
  fullName: {
    firstName: Donald,
    lastName: Duck
  }
}
`}}}}}},"/example-with-array-1":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:"#/components/schemas/ArrayOfInt-1"}}}}}},"/example-with-array-2":{get:{summary:"Single Example at schema Level",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:"#/components/schemas/ArrayOfInt-2"}}}}}},"/object-example-for-a-schema":{get:{summary:"Single example having invalid JSON, under a Schema",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer"},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string"},lastName:{description:"Last name",type:"string"}}}},example:`{
  person: {
    fullName: {
      firstName: Donald,
      lastName: Duck
    },
    age: 10
  }
}
`}}}}}}},"/array-example-for-a-schema":{get:{summary:"Single Example of Type Array Under a Schema",tags:["Providing Examples"],responses:{200:{description:"An array of currency codes",content:{"application/json":{schema:"#/components/schemas/currencies"}}}}}},"/example-with-simple-object":{get:{summary:"Single Example of Type Array Under a Schema",tags:["Providing Examples"],responses:{200:{description:"An array of currency codes",content:{"application/json":{schema:"#/components/schemas/PersonObject"}}}}}},"/per-field-example-with-root-as-object":{get:{summary:"Root node of the example is an object. and the object is constituted using field level example",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"object",properties:{age:{description:"Person Age",type:"integer",example:8},fullName:{description:"Person Full name",type:"object",properties:{firstName:{description:"First name",type:"string",example:"Daisy"},lastName:{description:"Last name",type:"string",example:"Duck"}}},dependents:{type:"array",items:{type:"object",properties:{dependentName:{type:"string"},relation:{type:"string"},age:{type:"number"}}}}}}}}}}}},"/per-field-example-with-root-as-array":{get:{summary:"Root node of the example is an array. and the object is constituted using field level example",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{dependentName:{type:"string"},relation:{type:"string"},age:{type:"number"}},example:{dependentName:"Natasha",relation:"wife",age:28}}}}}}}}},"/example-with-refs":{get:{description:"When a Schema definition is `provided` as a ref  \n(provide the example at schema-level)\n",tags:["Providing Examples"],responses:{200:{description:"Successful operation",content:{"application/json":{schema:{type:"array",items:"#/components/schemas/cost"},examples:{USD:{description:"Cost in `US Dollars`",value:`{
  amount: 10,
  currency: USD
}
`},INR:{description:"Cost in `Indian Rupees`",value:`{
  amount: 700,
  currency: INR
}
`}}}}}}}},"/multiple-example-in-request-body":{post:{summary:"Request body with multiple examples",tags:["Providing Examples"],requestBody:{description:`<p>Request body containing <strong>multiple</strong> examples</p>
`,required:!0,content:{"application/json":{schema:{type:"array",items:"#/components/schemas/cost"},examples:{USD:{description:"Cost in `US Dollars`",value:`{
  amount: 10,
  currency: USD
}
`},INR:{description:"Cost in `Indian Rupees`",value:`{
  amount: 700,
  currency: INR
}
`}}}}}}},"/object-containg-array-property-with-example":{get:{summary:"Object schema with array type property containing example",tags:["Providing Examples"],responses:{200:{description:"Object with array type property containing example",content:{"application/json":{schema:"#/components/schemas/ObjectWithArrayPropExample"}}}}}},"/examples-anyOf":{get:{tags:["Providing Examples"],summary:"AnyOf schemas with examples as part of the subschema",responses:{200:{description:"AnyOf schemas with examples as part of the subschema",content:{"application/problem+json":{schema:{anyOf:[{title:"AnyOf example 1",description:"First example",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second anyOf",description:"Another example",type:"array",items:{type:"object",properties:{foo:{type:"string"},quux:{type:"array",items:{type:"number"}}}},example:{foo:"foo",quux:[42,24]}},{title:"No example defined",type:"array",items:{type:"object",properties:{foo:{type:"string"},quux:{type:"array",items:{type:"number"}}}}}]}}}}}}},"/examples-anyOf-with-general-properties":{get:{tags:["Providing Examples"],summary:"AnyOf schemas with general properties",responses:{200:{description:"AnyOf schemas with general properties",content:{"application/problem+json":{schema:{title:"A composed object",type:"object",properties:{common:{type:"string"},other:{type:"number"}},anyOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}}}},"/examples-oneOf":{get:{tags:["Providing Examples"],summary:"OneOf schema with examples as part of the subschema",responses:{200:{description:"OneOf schema with examples as part of the subschema",content:{"application/problem+json":{schema:{oneOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}},example:{foo:"foo",bar:42}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}}}},"/examples-allOf":{get:{tags:["Providing Examples"],summary:"AllOf schemas with examples as part of the subschema",responses:{200:{description:"AllOf schemas with examples as part of the subschema",content:{"application/problem+json":{schema:{allOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}}},{title:"Second schema",type:"object",properties:{baz:{type:"string",format:"url"}}}]}}}}}}},"/examples-allOf-anyOf":{get:{tags:["Providing Examples"],summary:"Combination of allOf & nested anyOf schemas",responses:{200:{description:"Combination of allOf & nested anyOf schemas",content:{"application/problem+json":{schema:{allOf:[{title:"Schema 1",type:"object",properties:{foo:{type:"string"},bar:{type:"integer"}}},{title:"Second schema",anyOf:[{type:"object",properties:{baz:{type:"string",format:"url"}}},{type:"object",properties:{foobar:{type:"string"}}}]}]}}}}}}}},components:{schemas:{cost:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{description:"Currency Code",type:"string"}}},currencies:{type:"array",items:{type:"object",properties:{currencyCode:{type:"string"},evaluationDate:{type:"string",format:"date-time"}}},example:[{currencyCode:"USD",evaluationDate:"2017-07-21T17:32:28Z"},{currencyCode:"INR",evaluationDate:"2017-07-21T17:32:28Z"}]},"ArrayOfInt-1":{type:"array",items:{type:"integer",format:"int64"},example:[1,2,3,4]},"ArrayOfInt-2":{type:"array",items:{type:"integer",format:"int64",example:1}},PersonObject:{type:"object",properties:{name:{type:"string"},age:{type:"integer"}},example:{name:"name-1",age:1}},ObjectWithArrayPropExample:{type:"object",properties:{numberProp:{type:"number",example:1e3},stringProp:{type:"string",enum:["value0","value1"]},arrayProp:{type:"array",items:{type:"number"},example:[0,1,2]}}}}},tags:{}},re={class:"content-container"},fe=G({__name:"examples",setup(ie){const f=Q(),R=X(),{$openapidoc:g,$openapidocBus:h,$openapidocRef:v}=ne(),x=N(""),A=N(0),b=N(oe.path.toString()),n=N(w??{}),y=o(()=>"examples"),s=o(()=>f.params.type.toString()),E=o(()=>(f.params.mathod??"default").toString()),S=o(()=>s.value==="info"),O=o(()=>s.value==="auth"),P=o(()=>s.value==="components"),m=o(()=>g.currentLocale());v.setComponents(w.components),v.setDefinitions(w.definitions),v.setDocPath(b.value),v.setFile(y.value);const r=o(()=>{if(!n.value.paths)return null;for(let a in n.value.paths){let t=a;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===E.value)return x.value=a,n.value.paths[a]??null}return null}),i=o(()=>{if(!n.value.webhooks)return null;for(let a in n.value.webhooks){let t=a;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===E.value)return x.value=a,n.value.webhooks[a][s.value]??null}return null}),c=o(()=>r.value?r.value[s.value]??null:null),q=o(()=>r.value?r.value.parameters??null:null),L=o(()=>{const a=g.currentLocale()??"";return S.value?"[examples] - Info Docs":O.value?"[examples] - Authorization":P.value?"[examples] - Components Docs":c.value?"[examples] - "+(c.value["x-summary-"+a.value]||c.value.summary||""):""}),U=o(()=>{const a=g.currentLocale()??"";return S.value?"[examples] - Info Docs":O.value?"[examples] - Authorization":P.value?"[examples] - Components Docs":c.value&&(c.value["x-description-"+a.value]||c.value.description)||""});se({title:L.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const k=o(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[s.value]&&r.value[s.value].servers&&r.value[s.value].servers[0])return r.value[s.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[s.value]&&i.value[s.value].servers&&i.value[s.value].servers[0])return i.value[s.value].servers[0].url??null}let a=A.value;if(a>0&&n.value.servers&&!n.value.servers[a]&&(a=0),!n.value.servers||!n.value.servers[a])return"";if(n.value.servers[a].variables){const t=Object.values(n.value.servers[a].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[a].url??""});function D(a){A.value=a}function F(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(p=>{p.addEventListener("click",l=>{const j=p.getAttribute("id"),_=window.location.origin+window.location.pathname+"#"+j;g.copyToClipboard(_,l,!1),R.push({path:f.path,hash:"#"+j}),setTimeout(()=>{p.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}function C(){const a=JSON.stringify(n.value,null,4),t=new Blob([a],{type:"application/json"}),p=URL.createObjectURL(t),l=document.createElement("a");l.href=p,l.download=y.value+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(p)}return Y(()=>{h.$on("downloadJsonDoc",C),h.$on("changeServer",D),J(),F()}),ee(()=>{h.$off("downloadJsonDoc",C),h.$off("changeServer",D)}),(a,t)=>{const p=M,l=$,j=z,_=V,T=H,W=Z,B=K;return u(),te("div",re,[e(S)&&e(n).info?(u(),d(p,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(O)&&e(n).components?(u(),d(l,{key:1,components:e(n).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(P)&&e(n).components?(u(),d(j,{key:2,components:e(n).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(c)?(u(),d(_,{key:3,route:e(c),"current-locale":e(m),method:e(s),components:e(n).components,url:e(x),path_doc:e(b),file:e(y),server:e(k),"sub-params":e(q)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(u(),d(_,{key:4,route:e(i),"current-locale":e(m),method:e(s),components:e(n).components,url:e(x),path_doc:e(b),file:e(y),server:e(k),"sub-params":e(q)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(u(),d(T,{key:5})),I(B,null,{default:ae(()=>[I(W,{"current-locale":e(m),doc:e(n),path:e(b),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
