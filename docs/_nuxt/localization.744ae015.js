import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.aab76cea.js";import{f as Y,u as Z,i as ee,r as w,j as te,k as a,l as oe,m as ne,c as ae,h as e,n as v,b as I,w as le,q as re,o as i}from"./entry.f4c139f7.js";import{u as se}from"./vue.f36acd1f.8d011b12.js";import"./nuxt-link.3383537a.js";import"./OpenApiDropdown.227b3450.js";const ue={class:"content-container"},_e=Y({__name:"localization",setup(ce){var $,B;const m=Z(),N=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=re(),b=w(""),D=w(0),y=te().data,S=w((y.value.path??"").toString()),n=w(y.value.doc??{}),d=a(()=>m.params.name.toString()),r=a(()=>m.params.type.toString()),x=a(()=>(m.params.mathod??"default").toString()),A=a(()=>r.value==="info"),C=a(()=>r.value==="auth"),z=a(()=>r.value==="components"),p=a(()=>_.currentLocale());h.setComponents(($=y.value.doc)==null?void 0:$.components),h.setDefinitions((B=y.value.doc)==null?void 0:B.definitions),h.setDocPath(S.value),h.setFile(d.value);const l=a(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=o,n.value.paths[o]??null}return null}),L=a(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===x.value)return b.value=o,n.value.webhooks[o][r.value]??null}return null}),c=a(()=>l.value?l.value[r.value]??null:null),O=a(()=>l.value?l.value.parameters??null:null),U=a(()=>{const o=_.currentLocale()??"";return A.value?"[localization] - Info Docs":C.value?"[localization] - Authorization":z.value?"[localization] - Components Docs":c.value?"[localization] - "+(c.value["x-summary-"+o.value]||c.value.summary||""):""}),W=a(()=>{const o=_.currentLocale()??"";return A.value?"[localization] - Info Docs":C.value?"[localization] - Authorization":z.value?"[localization] - Components Docs":c.value&&(c.value["x-description-"+o.value]||c.value.description)||""});se({title:U.value,meta:[{name:"description",content:W.value}],bodyAttrs:{class:"oapi"}});const R=a(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function P(o){D.value=o}function q(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(s=>{s.addEventListener("click",u=>{const k=s.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+k;_.copyToClipboard(g,u),N.push({path:m.path,hash:"#"+k}),setTimeout(()=>{s.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(m.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function j(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),s=URL.createObjectURL(t),u=document.createElement("a");u.href=s,u.download=d.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(s)}return oe(()=>{f.$on("downloadJsonDoc",j),f.$on("changeServer",P),E(),q()}),ne(()=>{f.$off("downloadJsonDoc",j),f.$off("changeServer",P)}),(o,t)=>{const s=V,u=H,k=M,g=G,J=X,T=Q,F=K;return i(),ae("div",ue,[e(A)?(i(),v(s,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(C)?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(z)?(i(),v(k,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(r),components:e(n).components,url:e(b),path_doc:e(S),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(L)?(i(),v(g,{key:4,route:e(L),"current-locale":e(p),method:e(r),components:e(n).components,url:e(b),path_doc:e(S),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(J,{key:5})),I(F,null,{default:le(()=>[I(T,{"current-locale":e(p),doc:e(n),path:e(x),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};
