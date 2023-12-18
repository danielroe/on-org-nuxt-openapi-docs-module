import{_ as F,a as V,b as z,c as H,d as M,e as G}from"./SearchBlock.3e19f150.js";import{_ as K}from"./client-only.45c4cd0b.js";import{f as Q,h as X,j as Y,r as w,k as s,g as Z,l as ee,c as te,u as e,m as d,b as T,w as re,n as oe,o as p}from"./entry.4698dbd5.js";import{u as ne}from"./vue.f36acd1f.e66bd35a.js";import{d as se}from"./docs.server-override.config.755fdf1b.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const P={openapi:"3.0.2",info:{version:"1.0",title:"Server Override",description:"For testing operation server override. Possible to list servers for specific operation that overrides default list."},servers:[{url:"http://www.defaultserver.com"}],paths:{"/global-api-server":{get:{summary:"This path sends request to API servers defined at global level",responses:{200:{description:"Successful operation"}},tags:["other"]}},"/path-specific-api-server":{get:{summary:"This path sends request to API servers defined at Path level",description:"`server variables` at path level is not yet supported by RapiDoc",responses:{200:{description:"Successful operation"}},tags:["other"]},servers:[{url:"http://example.com/api",description:"Test server"},{url:"/api"},{url:"{protocol}://dev.com/api",description:"Server with Variable",variables:{protocol:{default:"https",description:"Server choices:\n  * `http` Not Secured server\n  * `https` Secured server\n",enum:["http","https"]}}}]}},tags:{}},le={class:"content-container"},fe=Q({__name:"server-override",setup(ae){const f=X(),$=Y(),{$openapidoc:h,$openapidocBus:_,$openapidocRef:b}=oe(),g=w(""),R=w(0),y=w(se.path.toString()),o=w(P??{}),m=s(()=>"server-override"),n=s(()=>f.params.type.toString()),D=s(()=>(f.params.mathod??"default").toString()),A=s(()=>n.value==="info"),x=s(()=>n.value==="auth"),C=s(()=>n.value==="components"),v=s(()=>h.currentLocale());b.setComponents(P.components),b.setDefinitions(P.definitions),b.setDocPath(y.value),b.setFile(m.value);const l=s(()=>{if(!o.value.paths)return null;for(let r in o.value.paths){let t=r;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return g.value=r,o.value.paths[r]??null}return null}),a=s(()=>{if(!o.value.webhooks)return null;for(let r in o.value.webhooks){let t=r;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return g.value=r,o.value.webhooks[r][n.value]??null}return null}),i=s(()=>l.value?l.value[n.value]??null:null),L=s(()=>l.value?l.value.parameters??null:null),B=s(()=>{const r=h.currentLocale()??"";return A.value?"[server-override] - Info Docs":x.value?"[server-override] - Authorization":C.value?"[server-override] - Components Docs":i.value?"[server-override] - "+(i.value["x-summary-"+r.value]||i.value.summary||""):""}),N=s(()=>{const r=h.currentLocale()??"";return A.value?"[server-override] - Info Docs":x.value?"[server-override] - Authorization":C.value?"[server-override] - Components Docs":i.value&&(i.value["x-description-"+r.value]||i.value.description)||""});ne({title:B.value,meta:[{name:"description",content:N.value}],htmlAttrs:{lang:v.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[n.value]&&l.value[n.value].servers&&l.value[n.value].servers[0])return l.value[n.value].servers[0].url??null}if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[n.value]&&a.value[n.value].servers&&a.value[n.value].servers[0])return a.value[n.value].servers[0].url??null}let r=R.value;if(r>0&&o.value.servers&&!o.value.servers[r]&&(r=0),!o.value.servers||!o.value.servers[r])return"";if(o.value.servers[r].variables){const t=Object.values(o.value.servers[r].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[r].url??""});function I(r){R.value=r}function q(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const k=u.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+k;h.copyToClipboard(S,c,!1),$.push({path:f.path,hash:"#"+k}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function U(){if(f.hash)return;const r=document.querySelector(".oapi-content");r&&(r.scrollTop=0)}function j(){const r=JSON.stringify(o.value,null,4),t=new Blob([r],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=m.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return Z(()=>{_.$on("downloadJsonDoc",j),_.$on("changeServer",I),U(),q()}),ee(()=>{_.$off("downloadJsonDoc",j),_.$off("changeServer",I)}),(r,t)=>{const u=F,c=V,k=z,S=H,W=G,E=M,J=K;return p(),te("div",le,[e(A)&&e(o).info?(p(),d(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(v)},null,8,["info","servers","current-locale"])):e(x)&&e(o).components?(p(),d(c,{key:1,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(C)&&e(o).components?(p(),d(k,{key:2,components:e(o).components,"current-locale":e(v)},null,8,["components","current-locale"])):e(i)?(p(),d(S,{key:3,route:e(i),"current-locale":e(v),method:e(n),components:e(o).components,url:e(g),path_doc:e(y),file:e(m),server:e(O),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(a)?(p(),d(S,{key:4,route:e(a),"current-locale":e(v),method:e(n),components:e(o).components,url:e(g),path_doc:e(y),file:e(m),server:e(O),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(p(),d(W,{key:5})),T(J,null,{default:re(()=>[T(E,{"current-locale":e(v),doc:e(o),path:e(y),file:e(m)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
