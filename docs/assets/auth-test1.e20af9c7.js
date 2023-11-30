import{_ as V,a as H,b as M,c as G,d as K,e as Q}from"./SearchBlock.bf00c019.js";import{_ as X}from"./client-only.0ee05525.js";import{f as Y,k as Z,m as ee,r as A,u as te,n as a,h as ne,q as oe,c as re,j as e,s as m,b as N,w as ae,v as se,o as p}from"./entry.6db5e508.js";import{u as le}from"./vue.f36acd1f.f01b2058.js";import"./nuxt-link.cca48342.js";import"./OpenApiDropdown.fb5bf8bf.js";const ue={class:"content-container"},he=Y({__name:"auth-test1",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:h,$openapidocBus:_,$openapidocRef:b}=se(),k=A(""),L=A(0),y=te().data,g=A((y.value.path??"").toString()),o=A(y.value.doc??{}),d=a(()=>f.params.name.toString()),r=a(()=>f.params.type.toString()),O=a(()=>(f.params.mathod??"default").toString()),x=a(()=>r.value==="info"),C=a(()=>r.value==="auth"),D=a(()=>r.value==="components"),v=a(()=>h.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const s=a(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=n,o.value.paths[n]??null}return null}),l=a(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=n,o.value.webhooks[n][r.value]??null}return null}),i=a(()=>s.value?s.value[r.value]??null:null),R=a(()=>s.value?s.value.parameters??null:null),W=a(()=>{const n=h.currentLocale()??"";return x.value?"[auth-test1] - Info Docs":C.value?"[auth-test1] - Authorization":D.value?"[auth-test1] - Components Docs":i.value?"[auth-test1] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),q=a(()=>{const n=h.currentLocale()??"";return x.value?"[auth-test1] - Info Docs":C.value?"[auth-test1] - Authorization":D.value?"[auth-test1] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const P=a(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let n=L.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){L.value=n}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const w=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;h.copyToClipboard(S,c,!1),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function $(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return ne(()=>{_.$on("downloadJsonDoc",$),_.$on("changeServer",j),J(),E()}),oe(()=>{_.$off("downloadJsonDoc",$),_.$off("changeServer",j)}),(n,t)=>{const u=V,c=H,w=M,S=G,T=Q,z=K,F=X;return p(),re("div",ue,[e(x)&&e(o).info?(p(),m(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(o).components?(p(),m(c,{key:1,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(D)&&e(o).components?(p(),m(w,{key:2,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),m(S,{key:3,route:e(i),"current-locale":e(v),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(p(),m(S,{key:4,route:e(l),"current-locale":e(v),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(v),doc:e(o),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
