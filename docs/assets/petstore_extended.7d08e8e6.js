import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.63e20039.js";import{f as Y,u as Z,i as ee,r as w,j as te,k as r,l as oe,m as ne,c as re,h as e,n as v,b as N,w as se,q as ae,o as i}from"./entry.44abbba3.js";import{u as le}from"./vue.f36acd1f.6855a1cb.js";import"./nuxt-link.076d9b91.js";import"./OpenApiDropdown.d8bbb9d2.js";const ue={class:"content-container"},_e=Y({__name:"petstore_extended",setup(ce){var B,I;const d=Z(),U=ee(),{$openapidoc:_,$openapidocBus:f,$openapidocRef:h}=ae(),b=w(""),D=w(0),k=te().data,x=w((k.value.path??"").toString()),n=w(k.value.doc??{}),m=r(()=>d.params.name.toString()),a=r(()=>d.params.type.toString()),L=r(()=>(d.params.mathod??"default").toString()),S=r(()=>a.value==="info"),A=r(()=>a.value==="auth"),C=r(()=>a.value==="components"),p=r(()=>_.currentLocale());h.setComponents((B=k.value.doc)==null?void 0:B.components),h.setDefinitions((I=k.value.doc)==null?void 0:I.definitions),h.setDocPath(x.value),h.setFile(m.value);const s=r(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.paths[o]??null}return null}),O=r(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return b.value=o,n.value.webhooks[o][a.value]??null}return null}),c=r(()=>s.value?s.value[a.value]??null:null),R=r(()=>s.value?s.value.parameters??null:null),W=r(()=>{const o=_.currentLocale()??"";return S.value?"[petstore_extended] - Info Docs":A.value?"[petstore_extended] - Authorization":C.value?"[petstore_extended] - Components Docs":c.value?"[petstore_extended] - "+(c.value["x-summary-"+o.value]||c.value.summary||""):""}),q=r(()=>{const o=_.currentLocale()??"";return S.value?"[petstore_extended] - Info Docs":A.value?"[petstore_extended] - Authorization":C.value?"[petstore_extended] - Components Docs":c.value&&(c.value["x-description-"+o.value]||c.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],bodyAttrs:{class:"oapi"}});const P=r(()=>{if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[a.value]&&s.value[a.value].servers&&s.value[a.value].servers[0])return s.value[a.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){D.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(l=>{l.addEventListener("click",u=>{const y=l.getAttribute("id"),g=window.location.origin+window.location.pathname+"#"+y;_.copyToClipboard(g,u),U.push({path:d.path,hash:"#"+y}),setTimeout(()=>{l.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(d.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),l=URL.createObjectURL(t),u=document.createElement("a");u.href=l,u.download=m.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(l)}return oe(()=>{f.$on("downloadJsonDoc",$),f.$on("changeServer",j),J(),E()}),ne(()=>{f.$off("downloadJsonDoc",$),f.$off("changeServer",j)}),(o,t)=>{const l=V,u=H,y=M,g=G,T=X,z=Q,F=K;return i(),re("div",ue,[e(S)&&e(n).info?(i(),v(l,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(n).components?(i(),v(u,{key:1,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(n).components?(i(),v(y,{key:2,components:e(n).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(c)?(i(),v(g,{key:3,route:e(c),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(x),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(O)?(i(),v(g,{key:4,route:e(O),"current-locale":e(p),method:e(a),components:e(n).components,url:e(b),path_doc:e(x),file:e(m),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(i(),v(T,{key:5})),N(F,null,{default:se(()=>[N(z,{"current-locale":e(p),doc:e(n),path:e(x),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};