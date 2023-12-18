import{_ as F,a as V,b as z,c as H,d as M,e as G}from"./SearchBlock.fe27b004.js";import{_ as K}from"./client-only.ebd476aa.js";import{f as Q,h as X,j as Y,r as w,k as s,g as Z,l as ee,c as te,u as e,m as d,b as $,w as ne,n as oe,o as m}from"./entry.71760bb6.js";import{u as re}from"./vue.f36acd1f.679bd063.js";import{d as se}from"./docs.no-server.config.9fc57eaa.js";import"./nuxt-link.ba0f9af6.js";import"./OpenApiDropdown.244fc662.js";const a={openapi:"3.0.2",info:{version:"1.0",title:"Server Variables",description:"For testing Server variables"},paths:{"/simple":{get:{summary:"When no server is specified in the spec.",description:"If there is no server specified in the spec then it should default to `location.origin`. Alternativly an API-Server can be specified in `&lt;rapi-doc&gt;` element using `server-url` attribute",responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{name:{description:"Person Name",type:"string"},age:{description:"Person Age",type:"integer"}}}}}}},tags:["other"]}}},tags:{}},ae={class:"content-container"},fe=Q({__name:"no-server",setup(le){const h=X(),B=Y(),{$openapidoc:_,$openapidocBus:b,$openapidocRef:g}=oe(),y=w(""),j=w(0),k=w(se.path.toString()),c=w(a??{}),f=s(()=>"no-server"),r=s(()=>h.params.type.toString()),L=s(()=>(h.params.mathod??"default").toString()),x=s(()=>r.value==="info"),C=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),v=s(()=>_.currentLocale());g.setComponents(a.components),g.setDefinitions(a.definitions),g.setDocPath(k.value),g.setFile(f.value);const l=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return y.value=o.toString(),n[o]??null}return null}),u=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return y.value=o.toString(),n[o][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),R=s(()=>l.value?l.value.parameters??null:null),N=s(()=>{const n=_.currentLocale()??"";return x.value?"[no-server] - Info Docs":C.value?"[no-server] - Authorization":P.value?"[no-server] - Components Docs":p.value?"[no-server] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),W=s(()=>{const n=_.currentLocale()??"";return x.value?"[no-server] - Info Docs":C.value?"[no-server] - Authorization":P.value?"[no-server] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:N.value,meta:[{name:"description",content:W.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const D=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let n=j.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function I(n){j.value=n}function U(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const S=t.getAttribute("id"),A=window.location.origin+window.location.pathname+"#"+S;_.copyToClipboard(A,i,!1),B.push({path:h.path,hash:"#"+S}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function O(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=f.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{b.$on("downloadJsonDoc",O),b.$on("changeServer",I),E(),U()}),ee(()=>{b.$off("downloadJsonDoc",O),b.$off("changeServer",I)}),(n,o)=>{const t=F,i=V,S=z,A=H,J=G,T=M,q=K;return m(),te("div",ae,[e(x)&&e(c).info?(m(),d(t,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(c).components?(m(),d(i,{key:1,components:e(c).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(P)&&e(c).components?(m(),d(S,{key:2,components:e(c).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(p)?(m(),d(A,{key:3,route:e(p),"current-locale":e(v),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(f),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(m(),d(A,{key:4,route:e(u),"current-locale":e(v),method:e(r),components:e(c).components,url:e(y),path_doc:e(k),file:e(f),server:e(D),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),d(J,{key:5})),$(q,null,{default:ne(()=>[$(T,{"current-locale":e(v),doc:e(c),path:e(k),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
