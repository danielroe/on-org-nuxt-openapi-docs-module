import{_ as z,a as U,b as V,c as H,d as M,e as G}from"./DCrr6YMj.js";import{_ as J}from"./B2qUN7ZD.js";import{f as K,h as Q,j as X,r as T,k as l,g as Y,l as Z,c as ss,u as s,m as g,b as O,w as as,n as ns,o as h}from"./tgtTgfPE.js";import{u as ts}from"./CcXODMnf.js";import{d as es}from"./rxGAEVpX.js";import"./CF6P0j7V.js";import"./jbzc-oRG.js";const o={openapi:"3.0.0",info:{version:"1.0.0",title:"Arranging Endpoints by Tags",description:`<p>Following OpenAPI spec demonstrates how to arrange the paths using tags. (even though the paths are defined in random order in the spec but they are shown in the order as they are defined under <code>tags</code> section)</p>
<ul>
<li>If there are multiple paths inside a tag, they can be further sorted. Use <code>sort-endpoints-by</code> property which can accept <code>path</code>, <code>method</code>, <code>summary</code> or <code>none</code></li>
<li>If you do not want to specify tag order, but follow certain naming conventions for tags in the spec you may use <code>sort-tags</code> property in RapiDoc element to sort tags alphabetically</li>
</ul>
<pre><code class="hljs language-yaml">  <span class="hljs-attr">openapi:</span> <span class="hljs-number">3.0</span><span class="hljs-number">.0</span>
  <span class="hljs-attr">info:</span>
    <span class="hljs-attr">title:</span> <span class="hljs-string">Arranging</span> <span class="hljs-string">by</span> <span class="hljs-string">Tags</span>
    <span class="hljs-attr">version:</span> <span class="hljs-number">1.0</span><span class="hljs-number">.0</span>

  <span class="hljs-attr">tags:</span>  <span class="hljs-comment"># &lt;&lt;&lt;&lt;&lt;&lt; Define the order of the Tags using tags object at root level</span>
    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">The</span> <span class="hljs-string">First</span> <span class="hljs-string">Tag</span>
    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">And</span> <span class="hljs-string">Second</span> <span class="hljs-string">Tag</span>
    <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">3rd</span> <span class="hljs-string">Tag</span>

  <span class="hljs-attr">paths:</span>
    <span class="hljs-string">/path-3.1:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">This</span> <span class="hljs-string">path</span> <span class="hljs-string">belongs</span> <span class="hljs-string">to</span> <span class="hljs-string">third</span> <span class="hljs-string">tag</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">3rd</span> <span class="hljs-string">Tag</span>
    <span class="hljs-string">/path-1.1:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">This</span> <span class="hljs-string">path</span> <span class="hljs-string">belongs</span> <span class="hljs-string">to</span> <span class="hljs-string">first</span> <span class="hljs-string">tag</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">The</span> <span class="hljs-string">First</span> <span class="hljs-string">Tag</span>
    <span class="hljs-string">/path-2.1:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">First</span> <span class="hljs-string">path</span> <span class="hljs-string">of</span> <span class="hljs-string">2nd</span> <span class="hljs-string">Tag</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">And</span> <span class="hljs-string">Second</span> <span class="hljs-string">Tag</span>
    <span class="hljs-string">/path-2.2:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">Second</span> <span class="hljs-string">path</span> <span class="hljs-string">of</span> <span class="hljs-string">2nd</span> <span class="hljs-string">Tag</span>
        <span class="hljs-attr">tags:</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">And</span> <span class="hljs-string">Second</span> <span class="hljs-string">Tag</span>
    <span class="hljs-string">/common-path-in-first-and-3rd-tag:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">Path</span> <span class="hljs-string">belongs</span> <span class="hljs-string">to</span> <span class="hljs-string">First</span> <span class="hljs-string">and</span> <span class="hljs-string">3rd</span> <span class="hljs-string">Tag</span>
        <span class="hljs-attr">tags:</span>    <span class="hljs-comment"># &lt;&lt;&lt; Paths can belong to multiple Tags</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">The</span> <span class="hljs-string">First</span> <span class="hljs-string">Tag</span>
          <span class="hljs-bullet">-</span> <span class="hljs-string">3rd</span> <span class="hljs-string">Tag</span>
    <span class="hljs-string">/no-tag/path:</span>
      <span class="hljs-attr">get:</span>
        <span class="hljs-attr">summary:</span> <span class="hljs-string">This</span> <span class="hljs-string">path</span> <span class="hljs-string">do</span> <span class="hljs-string">not</span> <span class="hljs-string">have</span> <span class="hljs-string">any</span> <span class="hljs-string">tag</span>
</code></pre>`},paths:{"/path-3.1":{get:{summary:"This path belongs to third tag",tags:["3rd Tag"]}},"/path-1.1":{get:{summary:"This path belongs to first tag",tags:["The First Tag"]}},"/path-2.1":{get:{summary:"First path of 2nd Tag",tags:["And Second Tag"]}},"/path-2.2":{get:{summary:"Second path of 2nd Tag",tags:["And Second Tag"]}},"/common-path-in-first-and-3rd-tag":{get:{summary:"Path belongs to First and 3rd Tag",tags:["The First Tag","3rd Tag"]}},"/no-tag/path":{get:{summary:"This path do not have any tag",tags:["other"]}}},tags:{"the first tag":{name:"The First Tag"},"and second tag":{name:"And Second Tag"},"3rd tag":{name:"3rd Tag"}}},ls={class:"content-container"},ms=K({__name:"arrange-by-tags",setup(rs){const m=Q(),R=X(),{$openapidoc:d,$openapidocBus:x,$openapidocRef:j}=ns(),v=T(""),F=T(0),f=T((es.path??"").toString()),p=T(o??{}),_=l(()=>"arrange-by-tags"),e=l(()=>m.params.type.toString()),P=l(()=>(m.params.mathod??"default").toString()),S=l(()=>e.value==="info"),A=l(()=>e.value==="auth"),k=l(()=>e.value==="components"),u=l(()=>d.currentLocale());j.setComponents(o.components),j.setDefinitions(o.definitions),j.setDocPath(f.value),j.setFile(_.value);const r=l(()=>{const a={...o.paths};if(!a)return null;for(const t in a){let n=t.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return v.value=t.toString(),a[t]??null}return null}),c=l(()=>{const a={...o.webhooks};if(!a)return null;for(const t in a){let n=t.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return v.value=t.toString(),a[t][e.value]??null}return null}),i=l(()=>r.value?r.value[e.value]??null:null),C=l(()=>r.value?r.value.parameters??null:null),$=l(()=>{const a=d.currentLocale()??"";return S.value?"[arrange-by-tags] - Info Docs":A.value?"[arrange-by-tags] - Authorization":k.value?"[arrange-by-tags] - Components Docs":i.value?"[arrange-by-tags] - "+(i.value["x-summary-"+a.value]||i.value.summary||""):""}),B=l(()=>{const a=d.currentLocale()??"";return S.value?"[arrange-by-tags] - Info Docs":A.value?"[arrange-by-tags] - Authorization":k.value?"[arrange-by-tags] - Components Docs":i.value&&(i.value["x-description-"+a.value]||i.value.description)||""});ts({title:$.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:u.value},bodyAttrs:{class:"oapi"}});const I=l(()=>{if(r.value){if(r.value.servers&&r.value.servers[0])return r.value.servers[0].url??null;if(r.value[e.value]&&r.value[e.value].servers&&r.value[e.value].servers[0])return r.value[e.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[e.value]&&c.value[e.value].servers&&c.value[e.value].servers[0])return c.value[e.value].servers[0].url??null}let a=F.value;if(a>0&&o.servers&&!o.servers[a]&&(a=0),!o.servers||!o.servers[a])return"";if(o.servers[a].variables){const t=Object.values(o.servers[a].variables)??[];if(t&&t.length)return t[0].default}return o.servers[a].url??""});function D(a){F.value=a}function L(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",w=>{const b=n.getAttribute("id"),y=window.location.origin+window.location.pathname+"#"+b;d.copyToClipboard(y,w,!1),R.push({path:m.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function W(){if(m.hash)return;const a=document.querySelector(".oapi-content");a&&(a.scrollTop=0)}return Y(()=>{x.$on("changeServer",D),W(),L()}),Z(()=>{x.$off("changeServer",D)}),(a,t)=>{const n=z,w=U,b=V,y=H,E=G,N=M,q=J;return h(),ss("div",ls,[s(S)&&s(p).info?(h(),g(n,{key:0,info:s(p).info,servers:s(p).servers,"current-locale":s(u)},null,8,["info","servers","current-locale"])):s(A)&&s(p).components?(h(),g(w,{key:1,components:s(p).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(k)&&s(p).components?(h(),g(b,{key:2,components:s(p).components,"current-locale":s(u)},null,8,["components","current-locale"])):s(i)?(h(),g(y,{key:3,route:s(i),"current-locale":s(u),method:s(e),components:s(p).components,url:s(v),path_doc:s(f),file:s(_),server:s(I),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):s(c)?(h(),g(y,{key:4,route:s(c),"current-locale":s(u),method:s(e),components:s(p).components,url:s(v),path_doc:s(f),file:s(_),server:s(I),"sub-params":s(C)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(h(),g(E,{key:5})),O(q,null,{default:as(()=>[O(N,{"current-locale":s(u),doc:s(p),path:s(f),file:s(_)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{ms as default};
