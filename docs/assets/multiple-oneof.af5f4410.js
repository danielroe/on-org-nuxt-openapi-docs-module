import{_ as q,a as z,b as F,c as V,d as Y,e as H}from"./SearchBlock.1e4291ad.js";import{_ as G}from"./client-only.bc1de542.js";import{f as K,h as Q,j as X,r as w,k as s,g as Z,l as ee,c as te,u as e,m as f,b as N,w as oe,n as ne,o as v}from"./entry.02ff2795.js";import{u as re}from"./vue.f36acd1f.eda93068.js";import{d as se}from"./docs.multiple-oneof.config.47243042.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const l={openapi:"3.0.0",info:{title:"Multiple One-Of Test",version:"1.0.0"},paths:{"/multiple-one-of":{get:{summary:"Multiple One of",description:"Schema composition using multiple `one-of`",responses:{200:{description:"Success",content:{"application/json":{schema:"#/components/schemas/Data"}}}},tags:["other"]}}},components:{schemas:{Woman:{properties:{haircolor:{type:"string"}}},Man:{properties:{weight:{type:"integer"}}},Young:{properties:{schoolName:{type:"string"}}},Old:{properties:{employerName:{type:"string"}}},Data:{allOf:[{type:"object",properties:{id:{type:"integer"},name:{type:"string"}}},{oneOf:["#/components/schemas/Woman","#/components/schemas/Man"]},{oneOf:["#/components/schemas/Young","#/components/schemas/Old"]},{properties:{language:{type:"string"}}}]}}},tags:{}},le={class:"content-container"},de=K({__name:"multiple-oneof",setup(ae){const h=Q(),W=X(),{$openapidoc:_,$openapidocBus:g,$openapidocRef:b}=ne(),y=w(""),D=w(0),k=w(se.path.toString()),c=w(l??{}),d=s(()=>"multiple-oneof"),r=s(()=>h.params.type.toString()),j=s(()=>(h.params.mathod??"default").toString()),x=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),C=s(()=>r.value==="components"),m=s(()=>_.currentLocale());b.setComponents(l.components),b.setDefinitions(l.definitions),b.setDocPath(k.value),b.setFile(d.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===j.value)return y.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...l.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===j.value)return y.value=n.toString(),t[n][r.value]??null}return null}),p=s(()=>a.value?a.value[r.value]??null:null),L=s(()=>a.value?a.value.parameters??null:null),B=s(()=>{const t=_.currentLocale()??"";return x.value?"[multiple-oneof] - Info Docs":A.value?"[multiple-oneof] - Authorization":C.value?"[multiple-oneof] - Components Docs":p.value?"[multiple-oneof] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),I=s(()=>{const t=_.currentLocale()??"";return x.value?"[multiple-oneof] - Info Docs":A.value?"[multiple-oneof] - Authorization":C.value?"[multiple-oneof] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:B.value,meta:[{name:"description",content:I.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const R=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=D.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const n=Object.values(l.servers[t].variables)??[];if(n&&n.length)return n[0].default}return l.servers[t].url??""});function P(t){D.value=t}function M(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",i=>{const S=o.getAttribute("id"),O=window.location.origin+window.location.pathname+"#"+S;_.copyToClipboard(O,i,!1),W.push({path:h.path,hash:"#"+S}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function T(){if(h.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function $(){const t=JSON.stringify(l,null,4),n=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.download=d.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}return Z(()=>{g.$on("downloadJsonDoc",$),g.$on("changeServer",P),T(),M()}),ee(()=>{g.$off("downloadJsonDoc",$),g.$off("changeServer",P)}),(t,n)=>{const o=q,i=z,S=F,O=V,U=H,E=Y,J=G;return v(),te("div",le,[e(x)&&e(c).info?(v(),f(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(A)&&e(c).components?(v(),f(i,{key:1,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(C)&&e(c).components?(v(),f(S,{key:2,components:e(c).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(v(),f(O,{key:3,route:e(p),"current-locale":e(m),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(d),server:e(R),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(v(),f(O,{key:4,route:e(u),"current-locale":e(m),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(d),server:e(R),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),f(U,{key:5})),N(J,null,{default:oe(()=>[N(E,{"current-locale":e(m),doc:e(c),path:e(k),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
