import{_ as F,a as M,b as z,c as V,d as H,e as G}from"./SearchBlock.1e4291ad.js";import{_ as K}from"./client-only.bc1de542.js";import{f as Q,h as X,j as Y,r as w,k as r,g as Z,l as ee,c as te,u as e,m as d,b as R,w as oe,n as ne,o as v}from"./entry.02ff2795.js";import{u as se}from"./vue.f36acd1f.eda93068.js";import{d as re}from"./docs.allof.config.13610e04.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const l={openapi:"3.0.0",info:{title:"all-of Models",description:"Model composition using all-of",version:"1.0.0"},paths:{"/all-of/employee":{get:{summary:"List of employees",responses:{200:{description:"Checkout the model tab to view object schemas defined using all-of",content:{"application/json":{schema:"#/components/schemas/emp1"}}}},tags:["other"]}}},components:{schemas:{emp1:{type:"object",additionalProperties:!1,description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},"#/components/schemas/name","#/components/schemas/job"]},emp2:{type:"object",additionalProperties:!1,properties:{Employee:{description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},"#/components/schemas/name","#/components/schemas/job"]}}},name:{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}}},job:{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}}}}},tags:{}},le={class:"content-container"},fe=Q({__name:"allof",setup(ae){const h=X(),N=Y(),{$openapidoc:_,$openapidocBus:b,$openapidocRef:y}=ne(),g=w(""),D=w(0),k=w(re.path.toString()),c=w(l??{}),f=r(()=>"allof"),s=r(()=>h.params.type.toString()),P=r(()=>(h.params.mathod??"default").toString()),x=r(()=>s.value==="info"),A=r(()=>s.value==="auth"),C=r(()=>s.value==="components"),m=r(()=>_.currentLocale());y.setComponents(l.components),y.setDefinitions(l.definitions),y.setDocPath(k.value),y.setFile(f.value);const a=r(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return g.value=n.toString(),t[n]??null}return null}),u=r(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===P.value)return g.value=n.toString(),t[n][s.value]??null}return null}),p=r(()=>a.value?a.value[s.value]??null:null),L=r(()=>a.value?a.value.parameters??null:null),$=r(()=>{const t=_.currentLocale()??"";return x.value?"[allof] - Info Docs":A.value?"[allof] - Authorization":C.value?"[allof] - Components Docs":p.value?"[allof] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),B=r(()=>{const t=_.currentLocale()??"";return x.value?"[allof] - Info Docs":A.value?"[allof] - Authorization":C.value?"[allof] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});se({title:$.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const I=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[s.value]&&a.value[s.value].servers&&a.value[s.value].servers[0])return a.value[s.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[s.value]&&u.value[s.value].servers&&u.value[s.value].servers[0])return u.value[s.value].servers[0].url??null}let t=D.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function O(t){D.value=t}function J(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",i=>{const j=o.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+j;_.copyToClipboard(S,i,!1),N.push({path:h.path,hash:"#"+j}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function T(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function E(){const t=JSON.stringify(l,null,4),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=f.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}return Z(()=>{b.$on("downloadJsonDoc",E),b.$on("changeServer",O),T(),J()}),ee(()=>{b.$off("downloadJsonDoc",E),b.$off("changeServer",O)}),(t,n)=>{const o=F,i=M,j=z,S=V,U=G,W=H,q=K;return v(),te("div",le,[e(x)&&e(c).info?(v(),d(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(A)&&e(c).components?(v(),d(i,{key:1,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(C)&&e(c).components?(v(),d(j,{key:2,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(v(),d(S,{key:3,route:e(p),"current-locale":e(m),method:e(s),components:e(c).components,url:e(g),path_doc:e(k),file:e(f),server:e(I),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),d(S,{key:4,route:e(u),"current-locale":e(m),method:e(s),components:e(c).components,url:e(g),path_doc:e(k),file:e(f),server:e(I),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),d(U,{key:5})),R(q,null,{default:oe(()=>[R(W,{"current-locale":e(m),doc:e(c),path:e(k),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
