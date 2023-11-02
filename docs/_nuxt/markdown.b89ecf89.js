import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as g,j as te,k as r,l as ne,m as oe,c as re,h as e,n as v,b as N,w as ae,q as le,o as i}from"./entry.f4c139f7.js";import{u as se}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"markdown",setup(ce){var B,I;const m=Z(),U=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=le(),b=g(""),L=g(0),k=te().data,S=g((k.value.path??"").toString()),o=g(k.value.doc??{}),d=r(()=>m.params.name.toString()),l=r(()=>m.params.type.toString()),x=r(()=>(m.params.mathod??"default").toString()),A=r(()=>l.value==="info"),C=r(()=>l.value==="auth"),D=r(()=>l.value==="components"),p=r(()=>_.currentLocale());h.setComponents((B=k.value.doc)==null?void 0:B.components),h.setDefinitions((I=k.value.doc)==null?void 0:I.definitions),h.setDocPath(S.value),h.setFile(d.value);const a=r(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=n,o.value.paths[n]??null}return null}),O=r(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=n,o.value.webhooks[n][l.value]??null}return null}),c=r(()=>a.value?a.value[l.value]??null:null),R=r(()=>a.value?a.value.parameters??null:null),W=r(()=>{const n=_.currentLocale()??"";return A.value?"[markdown] - Info Docs":C.value?"[markdown] - Authorization":D.value?"[markdown] - Components Docs":c.value?"[markdown] - "+(c.value["x-summary-"+n.value]||c.value.summary||""):""}),q=r(()=>{const n=_.currentLocale()??"";return A.value?"[markdown] - Info Docs":C.value?"[markdown] - Authorization":D.value?"[markdown] - Components Docs":c.value&&(c.value["x-description-"+n.value]||c.value.description)||""});se({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[l.value]&&a.value[l.value].servers&&a.value[l.value].servers[0])return a.value[l.value].servers[0].url??null}let n=L.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){L.value=n}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",u=>{const w=s.getAttribute("id"),y=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(y,u),U.push({path:m.path,hash:"#"+w}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(m.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function $(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),s=URL.createObjectURL(t),u=document.createElement("a");u.href=s,u.download=d.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(s)}return ne(()=>{f.$on("downloadJsonDoc",$),f.$on("changeServer",j),J(),E()}),oe(()=>{f.$off("downloadJsonDoc",$),f.$off("changeServer",j)}),(n,t)=>{const s=V,u=H,w=M,y=G,T=X,z=Q,F=K;return i(),re("div",ue,[e(A)?(i(),v(s,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)?(i(),v(u,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(D)?(i(),v(w,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(y,{key:3,route:e(c),"current-locale":e(p),method:e(l),components:e(o).components,url:e(b),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(y,{key:4,route:e(O),"current-locale":e(p),method:e(l),components:e(o).components,url:e(b),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(p),doc:e(o),path:e(x),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};
