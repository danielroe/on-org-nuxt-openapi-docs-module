import{_ as z,a as K,b as F,c as V,d as H,e as M}from"./SearchBlock.3e19f150.js";import{_ as G}from"./client-only.45c4cd0b.js";import{f as Q,h as X,j as Y,r as A,k as s,g as Z,l as ee,c as te,u as e,m as v,b as j,w as ne,n as oe,o as m}from"./entry.4698dbd5.js";import{u as re}from"./vue.f36acd1f.e66bd35a.js";import{d as se}from"./docs.multiple-security-schemes.config.3ea33990.js";import"./nuxt-link.d2cc8467.js";import"./OpenApiDropdown.6e2e3875.js";const R={openapi:"3.0.1",info:{title:"Different default and per-operation security schemes",description:"Spec with multiple security schemes, not all of which are default",version:"1.0"},servers:[{url:"https://api.bitbucket.org/2.0"}],security:[{api_key1:[]},{api_key2:[]}],paths:{"/users/{username}/repositories":{get:{tags:["Repo"],description:"All repositories.",parameters:[{name:"username",in:"path",description:`This can either be the username or the UUID of the account.
`,required:!0,schema:{type:"string"}}],responses:{default:{description:"Unexpected error."}},security:[{basic:[]}]}},"/users/{username}/repositories-2":{get:{tags:["Repo"],description:"All repositories owned by a user/team. ",parameters:[{name:"username",in:"path",description:`This can either be the username or the UUID of the account.
`,required:!0,schema:{type:"string"}}],responses:{default:{description:"Unexpected error."}}}},"/no-security":{get:{tags:["Repo"],description:"An open endpoint. ",parameters:null,security:[[]],responses:{default:{description:"Unexpected error."}}}}},components:{securitySchemes:{api_key1:{type:"apiKey",name:"Authorization",in:"header"},api_key2:{type:"apiKey",name:"specialKey",in:"header"},basic:{type:"http",scheme:"basic"}}},tags:{}},ae={class:"content-container"},de=Q({__name:"multiple-security-schemes",setup(le){const d=X(),$=Y(),{$openapidoc:f,$openapidocBus:_,$openapidocRef:y}=oe(),b=A(""),U=A(0),g=A(se.path.toString()),o=A(R??{}),h=s(()=>"multiple-security-schemes"),r=s(()=>d.params.type.toString()),D=s(()=>(d.params.mathod??"default").toString()),x=s(()=>r.value==="info"),S=s(()=>r.value==="auth"),C=s(()=>r.value==="components"),p=s(()=>f.currentLocale());y.setComponents(R.components),y.setDefinitions(R.definitions),y.setDocPath(g.value),y.setFile(h.value);const a=s(()=>{if(!o.value.paths)return null;for(let n in o.value.paths){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return b.value=n,o.value.paths[n]??null}return null}),l=s(()=>{if(!o.value.webhooks)return null;for(let n in o.value.webhooks){let t=n;if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===D.value)return b.value=n,o.value.webhooks[n][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),L=s(()=>a.value?a.value.parameters??null:null),B=s(()=>{const n=f.currentLocale()??"";return x.value?"[multiple-security-schemes] - Info Docs":S.value?"[multiple-security-schemes] - Authorization":C.value?"[multiple-security-schemes] - Components Docs":i.value?"[multiple-security-schemes] - "+(i.value["x-summary-"+n.value]||i.value.summary||""):""}),T=s(()=>{const n=f.currentLocale()??"";return x.value?"[multiple-security-schemes] - Info Docs":S.value?"[multiple-security-schemes] - Authorization":C.value?"[multiple-security-schemes] - Components Docs":i.value&&(i.value["x-description-"+n.value]||i.value.description)||""});re({title:B.value,meta:[{name:"description",content:T.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const I=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}let n=U.value;if(n>0&&o.value.servers&&!o.value.servers[n]&&(n=0),!o.value.servers||!o.value.servers[n])return"";if(o.value.servers[n].variables){const t=Object.values(o.value.servers[n].variables)??[];if(t&&t.length)return t[0].default}return o.value.servers[n].url??""});function O(n){U.value=n}function q(){var t;(((t=document.querySelector(".content-container"))==null?void 0:t.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(u=>{u.addEventListener("click",c=>{const k=u.getAttribute("id"),w=window.location.origin+window.location.pathname+"#"+k;f.copyToClipboard(w,c,!1),$.push({path:d.path,hash:"#"+k}),setTimeout(()=>{u.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function N(){if(d.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function P(){const n=JSON.stringify(o.value,null,4),t=new Blob([n],{type:"application/json"}),u=URL.createObjectURL(t),c=document.createElement("a");c.href=u,c.download=h.value+".json",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u)}return Z(()=>{_.$on("downloadJsonDoc",P),_.$on("changeServer",O),N(),q()}),ee(()=>{_.$off("downloadJsonDoc",P),_.$off("changeServer",O)}),(n,t)=>{const u=z,c=K,k=F,w=V,W=M,E=H,J=G;return m(),te("div",ae,[e(x)&&e(o).info?(m(),v(u,{key:0,info:e(o).info,servers:e(o).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(S)&&e(o).components?(m(),v(c,{key:1,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(C)&&e(o).components?(m(),v(k,{key:2,components:e(o).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(m(),v(w,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(o).components,url:e(b),path_doc:e(g),file:e(h),server:e(I),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(l)?(m(),v(w,{key:4,route:e(l),"current-locale":e(p),method:e(r),components:e(o).components,url:e(b),path_doc:e(g),file:e(h),server:e(I),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(W,{key:5})),j(J,null,{default:ne(()=>[j(E,{"current-locale":e(p),doc:e(o),path:e(g),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};
