import{_ as V,a as H,b as M,c as Q,d as G,e as K,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as w,j as te,k as r,l as ne,m as oe,c as re,h as e,n as v,b as I,w as ae,q as se,o as i}from"./entry.f4c139f7.js";import{u as le}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"dynamic-query-params",setup(ce){var $,B;const m=Z(),N=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=se(),y=w(""),D=w(0),b=te().data,S=w((b.value.path??"").toString()),o=w(b.value.doc??{}),d=r(()=>m.params.name.toString()),s=r(()=>m.params.type.toString()),x=r(()=>(m.params.mathod??"default").toString()),A=r(()=>s.value==="info"),q=r(()=>s.value==="auth"),C=r(()=>s.value==="components"),p=r(()=>_.currentLocale());h.setComponents(($=b.value.doc)==null?void 0:$.components),h.setDefinitions((B=b.value.doc)==null?void 0:B.definitions),h.setDocPath(S.value),h.setFile(d.value);const a=r(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return y.value=n,o.value.paths[n]??null}return null}),L=r(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return y.value=n,o.value.webhooks[n][s.value]??null}return null}),c=r(()=>a.value?a.value[s.value]??null:null),O=r(()=>a.value?a.value.parameters??null:null),U=r(()=>{const n=_.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":q.value?"[dynamic-query-params] - Authorization":C.value?"[dynamic-query-params] - Components Docs":c.value?"[dynamic-query-params] - "+(c.value["x-summary-"+n.value]||c.value.summary||""):""}),W=r(()=>{const n=_.currentLocale()??"";return A.value?"[dynamic-query-params] - Info Docs":q.value?"[dynamic-query-params] - Authorization":C.value?"[dynamic-query-params] - Components Docs":c.value&&(c.value["x-description-"+n.value]||c.value.description)||""});le({title:U.value,meta:[{name:"description",content:W.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[s.value]&&a.value[s.value].servers&&a.value[s.value].servers[0])return a.value[s.value].servers[0].url??null}let n=D.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function R(n){D.value=n}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const k=l.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+k;_.copyToClipboard(g,u),N.push({path:m.path,hash:"#"+k}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(m.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function j(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),l=URL.createObjectURL(t),u=document.createElement("a");u.href=l,u.download=d.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return ne(()=>{f.$on("downloadJsonDoc",j),f.$on("changeServer",R),J(),E()}),oe(()=>{f.$off("downloadJsonDoc",j),f.$off("changeServer",R)}),(n,t)=>{const l=V,u=H,k=M,g=Q,T=X,z=K,F=G;return i(),re("div",ue,[e(A)?(i(),v(l,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(q)?(i(),v(u,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)?(i(),v(k,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(s),components:e(o).components,url:e(y),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(L)?(i(),v(g,{key:4,route:e(L),"current-locale":e(p),method:e(s),components:e(o).components,url:e(y),path_doc:e(S),file:e(d),server:e(P),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),I(F,null,{default:ae(()=>[I(z,{"current-locale":e(p),doc:e(o),path:e(x),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};
