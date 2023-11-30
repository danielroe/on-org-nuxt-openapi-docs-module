import{_ as V,a as H,b as M,c as G,d as K,e as Q,f as X}from"./SearchBlock.c6a56920.js";import{f as Y,u as Z,i as ee,r as A,j as te,k as a,l as oe,m as ne,c as re,h as e,n as m,b as N,w as ae,q as le,o as p}from"./entry.f7d13da3.js";import{u as se}from"./vue.f36acd1f.c0115272.js";import"./nuxt-link.4e009fe4.js";import"./OpenApiDropdown.628eeb23.js";const ue={class:"content-container"},de=Y({__name:"arr-of-arr",setup(ce){var B,I;const f=Z(),U=ee(),{$openapidoc:_,$openapidocBus:h,$openapidocRef:b}=le(),k=A(""),L=A(0),y=te().data,g=A((y.value.path??"").toString()),n=A(y.value.doc??{}),d=a(()=>f.params.name.toString()),r=a(()=>f.params.type.toString()),O=a(()=>(f.params.mathod??"default").toString()),x=a(()=>r.value==="info"),C=a(()=>r.value==="auth"),D=a(()=>r.value==="components"),v=a(()=>_.currentLocale());b.setComponents((B=y.value.doc)==null?void 0:B.components),b.setDefinitions((I=y.value.doc)==null?void 0:I.definitions),b.setDocPath(g.value),b.setFile(d.value);const l=a(()=>{if(!n.value.paths)return null;for(let o in n.value.paths){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.paths[o]??null}return null}),s=a(()=>{if(!n.value.webhooks)return null;for(let o in n.value.webhooks){let t=o;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return k.value=o,n.value.webhooks[o][r.value]??null}return null}),i=a(()=>l.value?l.value[r.value]??null:null),R=a(()=>l.value?l.value.parameters??null:null),W=a(()=>{const o=_.currentLocale()??"";return x.value?"[arr-of-arr] - Info Docs":C.value?"[arr-of-arr] - Authorization":D.value?"[arr-of-arr] - Components Docs":i.value?"[arr-of-arr] - "+(i.value["x-summary-"+o.value]||i.value.summary||""):""}),q=a(()=>{const o=_.currentLocale()??"";return x.value?"[arr-of-arr] - Info Docs":C.value?"[arr-of-arr] - Authorization":D.value?"[arr-of-arr] - Components Docs":i.value&&(i.value["x-description-"+o.value]||i.value.description)||""});se({title:W.value,meta:[{name:"description",content:q.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const P=a(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(s.value){if(s.value.servers&&s.value.servers[0])return s.value.servers[0].url??null;if(s.value[r.value]&&s.value[r.value].servers&&s.value[r.value].servers[0])return s.value[r.value].servers[0].url??null}let o=L.value;if(o>0&&n.value.servers&&!n.value.servers[o]&&(o=0),!n.value.servers||!n.value.servers[o])return"";if(n.value.servers[o].variables){const t=Object.values(n.value.servers[o].variables)??[];if(t&&t.length)return t[0].default}return n.value.servers[o].url??""});function j(o){L.value=o}function E(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const w=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+w;_.copyToClipboard(S,c,!1),U.push({path:f.path,hash:"#"+w}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function J(){if(f.hash)return;const o=document.querySelector(".oapi-content");o&&(o.scrollTop=0)}function $(){const o=JSON.stringify(n.value,null,4),t=new Blob([o],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=d.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return oe(()=>{h.$on("downloadJsonDoc",$),h.$on("changeServer",j),J(),E()}),ne(()=>{h.$off("downloadJsonDoc",$),h.$off("changeServer",j)}),(o,t)=>{const u=V,c=H,w=M,S=G,T=X,z=Q,F=K;return p(),re("div",ue,[e(x)&&e(n).info?(p(),m(u,{key:0,info:e(n).info,servers:e(n).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(C)&&e(n).components?(p(),m(c,{key:1,components:e(n).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(D)&&e(n).components?(p(),m(w,{key:2,components:e(n).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),m(S,{key:3,route:e(i),"current-locale":e(v),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(s)?(p(),m(S,{key:4,route:e(s),"current-locale":e(v),method:e(r),components:e(n).components,url:e(k),path_doc:e(g),file:e(d),server:e(P),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),m(T,{key:5})),N(F,null,{default:ae(()=>[N(z,{"current-locale":e(v),doc:e(n),path:e(g),file:e(d)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
