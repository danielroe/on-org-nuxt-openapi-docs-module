import{_ as V,a as H,b as M,c as G,d as K,e as Q}from"./SearchBlock.bf00c019.js";import{_ as X}from"./client-only.0ee05525.js";import{f as Y,k as Z,m as ee,r as A,u as te,n as l,h as oe,q as ne,c as re,j as e,s as m,b as I,w as le,v as ae,o as p}from"./entry.6db5e508.js";import{u as se}from"./vue.f36acd1f.f01b2058.js";import"./nuxt-link.cca48342.js";import"./OpenApiDropdown.fb5bf8bf.js";const ue={class:"content-container"},_e=Y({__name:"localization",setup(ce){var $,B;const f=Z(),N=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:b}=ae(),k=A(""),D=A(0),y=te().data,g=A((y.value.path??"").toString()),n=A(y.value.doc??{}),d=l(()=>f.params.name.toString()),r=l(()=>f.params.type.toString()),L=l(()=>(f.params.mathod??"default").toString()),x=l(()=>r.value==="info"),C=l(()=>r.value==="auth"),z=l(()=>r.value==="components"),v=l(()=>_.currentLocale());b.setComponents(($=y.value.doc)==null?void 0:$.components),b.setDefinitions((B=y.value.doc)==null?void 0:B.definitions),b.setDocPath(g.value),b.setFile(d.value);const a=l(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return k.value=o,n.value.paths[o]??null}return null}),s=l(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===L.value)return k.value=o,n.value.webhooks[o][r.value]??null}return null}),i=l(()=>a.value?a.value[r.value]??null:null),O=l(()=>a.value?a.value.parameters??null:null),U=l(()=>{const o=_.currentLocale()??"";return x.value?"[localization] - Info Docs":C.value?"[localization] - Authorization":z.value?"[localization] - Components Docs":i.value?"[localization] - "+(i.value["x-summary-"+o.value]||i.value.summary||""):""}),W=l(()=>{const o=_.currentLocale()??"";return x.value?"[localization] - Info Docs":C.value?"[localization] - Authorization":z.value?"[localization] - Components Docs":i.value&&(i.value["x-description-"+o.value]||i.value.description)||""});se({title:U.value,meta:[{name:"description",content:W.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const R=l(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}let o=D.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function P(o){D.value=o}function q(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const w=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(S,c,!1),N.push({path:f.path,hash:"#"+w}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function E(){if(f.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function j(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return oe(()=>{h.$on("downloadJsonDoc",j),h.$on("changeServer",P),E(),q()}),ne(()=>{h.$off("downloadJsonDoc",j),h.$off("changeServer",P)}),(o,t)=>{const u=V,c=H,w=M,S=G,J=Q,T=K,F=X;return p(),re("div",ue,[e(x)&&e(n).info?(p(),m(u,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(n).components?(p(),m(c,{key:1,components:e(n).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(z)&&e(n).components?(p(),m(w,{key:2,components:e(n).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),m(S,{key:3,route:e(i),"current-locale":e(v),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(s)?(p(),m(S,{key:4,route:e(s),"current-locale":e(v),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(R),"sub-params":e(O)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(J,{key:5})),I(F,null,{default:le(()=>[I(T,{"current-locale":e(v),doc:e(n),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{_e as default};
