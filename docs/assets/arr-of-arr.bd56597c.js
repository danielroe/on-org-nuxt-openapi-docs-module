import{_ as z,a as F,b as V,c as H,d as M,e as G}from"./SearchBlock.1e4291ad.js";import{_ as K}from"./client-only.bc1de542.js";import{f as Q,h as X,j as Y,r as x,k as s,g as Z,l as ee,c as te,u as e,m as f,b as B,w as oe,n as ne,o as m}from"./entry.02ff2795.js";import{u as re}from"./vue.f36acd1f.eda93068.js";import{d as se}from"./docs.arr-of-arr.config.3e6e2e9a.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const a={openapi:"3.0.0",info:{version:"1.2.3",title:"api"},paths:{"/api":{post:{summary:"api",requestBody:{content:{"application/json":{schema:"#/components/schemas/Data"}}},responses:{200:{description:"Ok"}},tags:["other"]}}},components:{schemas:{Data:{type:"object",properties:{array:{type:"array",items:{type:"array",items:{type:"array",items:{type:"number"}}}}}}}},tags:{}},ae={class:"content-container"},de=Q({__name:"arr-of-arr",setup(le){const _=X(),I=Y(),{$openapidoc:h,$openapidocBus:b,$openapidocRef:y}=ne(),g=x(""),j=x(0),k=x(se.path.toString()),c=x(a??{}),d=s(()=>"arr-of-arr"),r=s(()=>_.params.type.toString()),L=s(()=>(_.params.mathod??"default").toString()),A=s(()=>r.value==="info"),C=s(()=>r.value==="auth"),D=s(()=>r.value==="components"),v=s(()=>h.currentLocale());y.setComponents(a.components),y.setDefinitions(a.definitions),y.setDocPath(k.value),y.setFile(d.value);const l=s(()=>{const t={...a.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===L.value)return g.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...a.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===L.value)return g.value=n.toString(),t[n][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),O=s(()=>l.value?l.value.parameters??null:null),N=s(()=>{const t=h.currentLocale()??"";return A.value?"[arr-of-arr] - Info Docs":C.value?"[arr-of-arr] - Authorization":D.value?"[arr-of-arr] - Components Docs":p.value?"[arr-of-arr] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),U=s(()=>{const t=h.currentLocale()??"";return A.value?"[arr-of-arr] - Info Docs":C.value?"[arr-of-arr] - Authorization":D.value?"[arr-of-arr] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:N.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=j.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const n=Object.values(a.servers[t].variables)??[];if(n&&n.length)return n[0].default}return a.servers[t].url??""});function P(t){j.value=t}function W(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",i=>{const S=o.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+S;h.copyToClipboard(w,i,!1),I.push({path:_.path,hash:"#"+S}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function q(){if(_.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function $(){const t=JSON.stringify(a,null,4),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=d.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}return Z(()=>{b.$on("downloadJsonDoc",$),b.$on("changeServer",P),q(),W()}),ee(()=>{b.$off("downloadJsonDoc",$),b.$off("changeServer",P)}),(t,n)=>{const o=z,i=F,S=V,w=H,E=G,J=M,T=K;return m(),te("div",ae,[e(A)&&e(c).info?(m(),f(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(c).components?(m(),f(i,{key:1,components:e(c).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(D)&&e(c).components?(m(),f(S,{key:2,components:e(c).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(p)?(m(),f(w,{key:3,route:e(p),"current-locale":e(v),method:e(r),components:e(c).components,url:e(g),path_doc:e(k),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(m(),f(w,{key:4,route:e(u),"current-locale":e(v),method:e(r),components:e(c).components,url:e(g),path_doc:e(k),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),f(E,{key:5})),B(T,null,{default:oe(()=>[B(J,{"current-locale":e(v),doc:e(c),path:e(k),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
