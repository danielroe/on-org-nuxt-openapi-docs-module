import{_ as $,a as E,b as J,c as M,d as z,e as G}from"./DCrr6YMj.js";import{_ as H}from"./B2qUN7ZD.js";import{f as K,h as Q,j as X,r as q,k as s,g as Y,l as Z,c as ee,u as e,m as d,b as D,w as te,n as re,o as m}from"./tgtTgfPE.js";import{u as ae}from"./CcXODMnf.js";import{d as ne}from"./BRqx9P1a.js";import"./CF6P0j7V.js";import"./jbzc-oRG.js";const u={openapi:"3.0.0",info:{title:"Request Parameters Test Cases",description:"Various request parameters types with defaults, examples and allowed values",version:"1.0.0"},paths:{"/request-parameters":{post:{tags:["Request Parameters"],summary:"1. Request parameter test cases",description:"Various request parameters types with defaults, examples and allowed values",parameters:[{name:"country-code-1",in:"query",description:"Parameter level `single` example for a string parameter (has allowed-values)",example:"us",schema:{type:"string",enum:["us","in","jp"],default:"us"}},{name:"country-code-2",in:"query",description:"Field level `single` example for a string parameter (has allowed-values)",schema:{type:"string",example:"us",enum:["us","in","jp"],default:"us"}},{name:"country-code-3",in:"query",description:"Parameter level `multiple` examples (`only values`) for a string parameter (has allowed-values)",examples:["us","jp"],schema:{type:"string",enum:["us","in","jp"],default:"us"}},{name:"country-code-4",in:"query",description:"Parameter level `multiple` examples (with `value and summary`) for a string parameter (has allowed-values)",examples:{"example-1":{value:"us",summary:"United States"},"example-2":{value:"in",summary:"India"}},schema:{type:"string",enum:["us","in","jp"]}},{name:"country-code-5",description:"Parameter level `single` example for a `array` parameter (has allowed-values)",in:"query",example:["us","jp"],schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["us","in","jp"]}}},{name:"country-code-6",description:"Parameter level `multiple` example for a `array` parameter (has allowed-values)",in:"query",examples:{"example-1":{value:["in","jp"],summary:"India and Japan"},"example-2":{value:["in","us"],summary:"India and United States"}},schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["us","in","jp"]}}},{name:"country-code-7",description:"Schema-Field level `single` examples for a `array` parameter (has allowed-values)",in:"query",schema:{type:"array",example:["us","jp"],items:{type:"string",enum:["us","in","jp"]}}},{name:"country-code-8",description:`<p>Schema-Field level <code>multiple</code> examples (with value and summary) for a <code>array</code> parameter (has allowed-values)</p>
<p><strong>INVALID</strong> &gt; <code>examples</code> under schema is <code>NOT ALLOWED</code></p>
`,in:"query",schema:{type:"array",examples:["in","jp"],items:{type:"string",enum:["us","in","jp"]}}},{name:"country-code-9",description:`<p>Schema-Field level <code>multiple</code> examples (with value and summary) for a <code>array</code> parameter (has allowed-values)</p>
<p><strong>INVALID</strong> &gt; <code>examples</code> under schema is <code>NOT ALLOWED</code></p>
`,in:"query",schema:{type:"array",examples:{"example-1":{value:["in","jp"],summary:"India and Japan"},"example-2":{value:["in","us"],summary:"India and United States"}},items:{type:"string",enum:["us","in","jp"]}}},{name:"country-code-10",in:"query",description:"No example provided for `string`",schema:{type:"string",default:"us",enum:["us","in","jp"]}},{name:"country-code-11",description:"No example provided for `array`",in:"query",default:["us","in"],schema:{type:"array",minItems:1,maxItems:3,items:{type:"string",enum:["us","in","jp"]}}}],requestBody:{content:{"multipart/form-data":{schema:{type:"object",properties:{namePart:{type:"object",description:"`firstName` and `lastName` of the person\n",properties:{firstName:{type:"string"},lastName:{type:"string"}}},agePart:{type:"integer",description:"Age of the person"},genderPart:{type:"gender",default:"male",example:"female",description:"Gender of the person"},interest:{type:"array",example:["music","dance"],items:{type:"string",enum:["music","dance","hiking"]}},photoPart:{type:"string",format:"binary"}}}}}},responses:{200:{description:"successful operation"}}}},"/request-body-data-as-json":{post:{summary:"2. Request body as JSON",tags:["Request Parameters"],requestBody:{description:`<p>Request body as <strong>JSON</strong></p>
`,required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{type:"string",description:"Currency Code"}}}},examples:{USD:{description:"Cost in `US Dollars`",value:`{
  amount: 10,
  currency: USD
}
`},INR:{description:"Cost in `Indian Rupees`",value:`{
  amount: 700,
  currency: INR
}
`}}}}},responses:{200:{description:"successful operation"}}}},"/request-body-data-as-form-data":{post:{summary:"3. Request body as FORM DATA",tags:["Request Parameters"],requestBody:{description:`<p>Request body as <strong>FORM DATA</strong></p>
`,required:!0,content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{amount:{type:"integer",description:"Amount"},currency:{type:"string",description:"Currency Code"}}}},examples:{USD:{description:"Cost in `US Dollars`",value:`{
  amount: 10,
  currency: USD
}
`},INR:{description:"Cost in `Indian Rupees`",value:`{
  amount: 700,
  currency: INR
}
`}}}}},responses:{200:{description:"successful operation"}}}}},tags:{}},se={class:"content-container"},ve=K({__name:"parameters",setup(oe){const v=Q(),O=X(),{$openapidoc:y,$openapidocBus:A,$openapidocRef:f}=re(),h=q(""),R=q(0),_=q((ne.path??"").toString()),l=q(u??{}),g=s(()=>"parameters"),n=s(()=>v.params.type.toString()),P=s(()=>(v.params.mathod??"default").toString()),S=s(()=>n.value==="info"),I=s(()=>n.value==="auth"),j=s(()=>n.value==="components"),p=s(()=>y.currentLocale());f.setComponents(u.components),f.setDefinitions(u.definitions),f.setDocPath(_.value),f.setFile(g.value);const o=s(()=>{const t={...u.paths};if(!t)return null;for(const a in t){let r=a.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===P.value)return h.value=a.toString(),t[a]??null}return null}),i=s(()=>{const t={...u.webhooks};if(!t)return null;for(const a in t){let r=a.toString();if(r.startsWith("/")&&(r=r.substring(1)),r.endsWith("/")&&(r=r.substring(-1)),r=r.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),r===P.value)return h.value=a.toString(),t[a][n.value]??null}return null}),c=s(()=>o.value?o.value[n.value]??null:null),N=s(()=>o.value?o.value.parameters??null:null),L=s(()=>{const t=y.currentLocale()??"";return S.value?"[parameters] - Info Docs":I.value?"[parameters] - Authorization":j.value?"[parameters] - Components Docs":c.value?"[parameters] - "+(c.value["x-summary-"+t.value]||c.value.summary||""):""}),U=s(()=>{const t=y.currentLocale()??"";return S.value?"[parameters] - Info Docs":I.value?"[parameters] - Authorization":j.value?"[parameters] - Components Docs":c.value&&(c.value["x-description-"+t.value]||c.value.description)||""});ae({title:L.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const C=s(()=>{if(o.value){if(o.value.servers&&o.value.servers[0])return o.value.servers[0].url??null;if(o.value[n.value]&&o.value[n.value].servers&&o.value[n.value].servers[0])return o.value[n.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[n.value]&&i.value[n.value].servers&&i.value[n.value].servers[0])return i.value[n.value].servers[0].url??null}let t=R.value;if(t>0&&u.servers&&!u.servers[t]&&(t=0),!u.servers||!u.servers[t])return"";if(u.servers[t].variables){const a=Object.values(u.servers[t].variables)??[];if(a&&a.length)return a[0].default}return u.servers[t].url??""});function k(t){R.value=t}function T(){var a;(((a=document.querySelector(".content-container"))==null?void 0:a.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(r=>{r.addEventListener("click",w=>{const x=r.getAttribute("id"),b=window.location.origin+window.location.pathname+"#"+x;y.copyToClipboard(b,w,!1),O.push({path:v.path,hash:"#"+x}),setTimeout(()=>{r.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function B(){if(v.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{A.$on("changeServer",k),B(),T()}),Z(()=>{A.$off("changeServer",k)}),(t,a)=>{const r=$,w=E,x=J,b=M,F=G,W=z,V=H;return m(),ee("div",se,[e(S)&&e(l).info?(m(),d(r,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(I)&&e(l).components?(m(),d(w,{key:1,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(j)&&e(l).components?(m(),d(x,{key:2,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(m(),d(b,{key:3,route:e(c),"current-locale":e(p),method:e(n),components:e(l).components,url:e(h),path_doc:e(_),file:e(g),server:e(C),"sub-params":e(N)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(m(),d(b,{key:4,route:e(i),"current-locale":e(p),method:e(n),components:e(l).components,url:e(h),path_doc:e(_),file:e(g),server:e(C),"sub-params":e(N)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(F,{key:5})),D(V,null,{default:te(()=>[D(W,{"current-locale":e(p),doc:e(l),path:e(_),file:e(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ve as default};