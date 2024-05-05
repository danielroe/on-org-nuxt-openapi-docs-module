import{_ as V,a as z,b as H,c as M,d as U,e as G}from"./CDLwKnfI.js";import{_ as J}from"./BhZKx7pD.js";import{g as K,E as Q,H as X,r as k,f as s,h as Y,l as Z,o as v,c as ee,u as e,I as m,b as L,w as te,q as ne}from"./P9gNwSF1.js";import{u as oe}from"./DI1Lr4aH.js";import{d as re}from"./D0EQr6Pz.js";import"./D9tvjBRz.js";import"./By7t5g6Z.js";const c={openapi:"3.0.2",info:{version:"1.0",title:"Server Variables",description:"For testing Server variables"},paths:{"/simple":{get:{summary:"When no server is specified in the spec.",description:"If there is no server specified in the spec then it should default to `location.origin`. Alternativly an API-Server can be specified in `&lt;rapi-doc&gt;` element using `server-url` attribute",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer"}}}}}}},tags:["other"]}}},tags:{}},se={class:"content-container"},fe=K({__name:"no-access",setup(ae){const f=Q(),N=X(),{$openapidoc:_,$openapidocBus:w,$openapidocRef:d}=ne(),h=k(""),I=k(0),g=k((re.path??"").toString()),l=k(c??{}),b=s(()=>"no-access"),r=s(()=>f.params.type.toString()),D=s(()=>(f.params.mathod??"default").toString()),A=s(()=>r.value==="info"),x=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),p=s(()=>_.currentLocale());d.setComponents(c.components),d.setDefinitions(c.definitions),d.setDocPath(g.value),d.setFile(b.value);const a=s(()=>{const t={...c.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return h.value=o.toString(),t[o]??null}return null}),u=s(()=>{const t={...c.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===D.value)return h.value=o.toString(),t[o][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),W=s(()=>a.value?a.value.parameters??null:null),O=s(()=>{const t=_.currentLocale()??"";return A.value?"[no-access] - Info Docs":x.value?"[no-access] - Authorization":P.value?"[no-access] - Components Docs":i.value?"[no-access] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),R=s(()=>{const t=_.currentLocale()??"";return A.value?"[no-access] - Info Docs":x.value?"[no-access] - Authorization":P.value?"[no-access] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});oe({title:O.value,meta:[{name:"description",content:R.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const $=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=I.value;if(t>0&&c.servers&&!c.servers[t]&&(t=0),!c.servers||!c.servers[t])return"";if(c.servers[t].variables){const o=Object.values(c.servers[t].variables)??[];if(o&&o.length)return o[0].default}return c.servers[t].url??""});function B(t){I.value=t}function q(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",C=>{const y=n.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+y;_.copyToClipboard(S,C,!1),N.push({path:f.path,hash:"#"+y}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{w.$on("changeServer",B),E(),q()}),Z(()=>{w.$off("changeServer",B)}),(t,o)=>{const n=V,C=z,y=H,S=M,T=U,j=G,F=J;return v(),ee("div",se,[e(A)&&e(l).info?(v(),m(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(x)&&e(l).components?(v(),m(C,{key:1,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(P)&&e(l).components?(v(),m(y,{key:2,components:e(l).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(v(),m(S,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(l).components,url:e(h),path_doc:e(g),file:e(b),server:e($),"sub-params":e(W)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),m(S,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(l).components,url:e(h),path_doc:e(g),file:e(b),server:e($),"sub-params":e(W)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),m(T,{key:5})),L(F,null,{default:te(()=>[L(j,{"current-locale":e(p),doc:e(l),path:e(g),file:e(b)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
