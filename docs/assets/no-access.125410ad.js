import{_ as F,a as V,b as z,c as H,d as M,e as G}from"./SearchBlock.1e4291ad.js";import{_ as K}from"./client-only.bc1de542.js";import{f as Q,h as X,j as Y,r as w,k as s,g as Z,l as ee,c as te,u as e,m as d,b as $,w as ne,n as oe,o as m}from"./entry.02ff2795.js";import{u as re}from"./vue.f36acd1f.eda93068.js";import{d as se}from"./docs.no-access.config.9fc57eaa.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const a={openapi:"3.0.2",info:{version:"1.0",title:"Server Variables",description:"For testing Server variables"},paths:{"/simple":{get:{summary:"When no server is specified in the spec.",description:"If there is no server specified in the spec then it should default to `location.origin`. Alternativly an API-Server can be specified in `&lt;rapi-doc&gt;` element using `server-url` attribute",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer"}}}}}}},tags:["other"]}}},tags:{}},ae={class:"content-container"},fe=Q({__name:"no-access",setup(ce){const h=X(),B=Y(),{$openapidoc:_,$openapidocBus:b,$openapidocRef:g}=oe(),y=w(""),j=w(0),k=w(se.path.toString()),l=w(a??{}),f=s(()=>"no-access"),r=s(()=>h.params.type.toString()),L=s(()=>(h.params.mathod??"default").toString()),x=s(()=>r.value==="info"),C=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),v=s(()=>_.currentLocale());g.setComponents(a.components),g.setDefinitions(a.definitions),g.setDocPath(k.value),g.setFile(f.value);const c=s(()=>{const t={...a.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===L.value)return y.value=o.toString(),t[o]??null}return null}),u=s(()=>{const t={...a.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===L.value)return y.value=o.toString(),t[o][r.value]??null}return null}),p=s(()=>c.value?c.value[r.value]??null:null),R=s(()=>c.value?c.value.parameters??null:null),N=s(()=>{const t=_.currentLocale()??"";return x.value?"[no-access] - Info Docs":C.value?"[no-access] - Authorization":P.value?"[no-access] - Components Docs":p.value?"[no-access] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),W=s(()=>{const t=_.currentLocale()??"";return x.value?"[no-access] - Info Docs":C.value?"[no-access] - Authorization":P.value?"[no-access] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:N.value,meta:[{name:"description",content:W.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const D=s(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=j.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const o=Object.values(a.servers[t].variables)??[];if(o&&o.length)return o[0].default}return a.servers[t].url??""});function I(t){j.value=t}function U(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",i=>{const S=n.getAttribute("id"),A=window.location.origin+window.location.pathname+"#"+S;_.copyToClipboard(A,i,!1),B.push({path:h.path,hash:"#"+S}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function O(){const t=JSON.stringify(a,null,4),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),i=document.createElement("a");i.href=n,i.download=f.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n)}return Z(()=>{b.$on("downloadJsonDoc",O),b.$on("changeServer",I),E(),U()}),ee(()=>{b.$off("downloadJsonDoc",O),b.$off("changeServer",I)}),(t,o)=>{const n=F,i=V,S=z,A=H,J=G,T=M,q=K;return m(),te("div",ae,[e(x)&&e(l).info?(m(),d(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(l).components?(m(),d(i,{key:1,components:e(l).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(P)&&e(l).components?(m(),d(S,{key:2,components:e(l).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(p)?(m(),d(A,{key:3,route:e(p),"current-locale":e(v),method:e(r),components:e(l).components,url:e(y),path_doc:e(k),file:e(f),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(m(),d(A,{key:4,route:e(u),"current-locale":e(v),method:e(r),components:e(l).components,url:e(y),path_doc:e(k),file:e(f),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(J,{key:5})),$(q,null,{default:ne(()=>[$(T,{"current-locale":e(v),doc:e(l),path:e(k),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
