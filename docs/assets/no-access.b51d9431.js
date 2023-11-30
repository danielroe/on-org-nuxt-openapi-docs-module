import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.c6a56920.js";import{f as Y,u as Z,i as ee,r as A,j as te,k as s,l as ne,m as oe,c as re,h as e,n as m,b as N,w as se,q as ae,o as p}from"./entry.f7d13da3.js";import{u as le}from"./vue.f36acd1f.c0115272.js";import"./nuxt-link.4e009fe4.js";import"./OpenApiDropdown.628eeb23.js";const ue={class:"content-container"},de=Y({__name:"no-access",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:b}=ae(),k=A(""),L=A(0),y=te().data,g=A((y.value.path??"").toString()),o=A(y.value.doc??{}),d=s(()=>f.params.name.toString()),r=s(()=>f.params.type.toString()),O=s(()=>(f.params.mathod??"default").toString()),x=s(()=>r.value==="info"),C=s(()=>r.value==="auth"),D=s(()=>r.value==="components"),v=s(()=>_.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const a=s(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=n,o.value.paths[n]??null}return null}),l=s(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=n,o.value.webhooks[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),R=s(()=>a.value?a.value.parameters??null:null),W=s(()=>{const n=_.currentLocale()??"";return x.value?"[no-access] - Info Docs":C.value?"[no-access] - Authorization":D.value?"[no-access] - Components Docs":i.value?"[no-access] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),q=s(()=>{const n=_.currentLocale()??"";return x.value?"[no-access] - Info Docs":C.value?"[no-access] - Authorization":D.value?"[no-access] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});le({title:W.value,meta:[{name:"description",content:q.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const P=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let n=L.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function j(n){L.value=n}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const w=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(S,c,!1),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function $(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return ne(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),E()}),oe(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(n,t)=>{const u=V,c=H,w=M,S=G,T=X,z=Q,F=K;return p(),re("div",ue,[e(x)&&e(o).info?(p(),m(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(o).components?(p(),m(c,{key:1,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(D)&&e(o).components?(p(),m(w,{key:2,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),m(S,{key:3,route:e(i),"current-locale":e(v),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(p(),m(S,{key:4,route:e(l),"current-locale":e(v),method:e(r),components:e(o).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(T,{key:5})),N(F,null,{default:se(()=>[N(z,{"current-locale":e(v),doc:e(o),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
