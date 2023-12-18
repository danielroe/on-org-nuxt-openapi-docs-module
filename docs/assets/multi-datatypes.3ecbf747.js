import{_ as z,a as F,b as M,c as V,d as H,e as G}from"./SearchBlock.fe27b004.js";import{_ as K}from"./client-only.ebd476aa.js";import{f as Q,h as X,j as Y,r as A,k as s,g as Z,l as ee,c as te,u as e,m as d,b as U,w as ne,n as oe,o as v}from"./entry.71760bb6.js";import{u as re}from"./vue.f36acd1f.679bd063.js";import{d as se}from"./docs.multi-datatypes.config.6433121b.js";import"./nuxt-link.ba0f9af6.js";import"./OpenApiDropdown.244fc662.js";const a={openapi:"3.1.0",info:{title:"Support for multiple datatypes for each field",version:"1.0.1"},paths:{"/person":{post:{summary:"Demonstrates data-types and constraints",parameters:[{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:["integer","number"]}}],responses:{200:{description:"Successful Operation",content:{"application/json":{schema:"#/components/schemas/person"}}}},tags:["other"]}}},tags:{person:{name:"Person",description:"Person Datatype"}},components:{schemas:{person:{type:"object",required:["id"],properties:{id:{description:"Person ID",type:["integer","number","string"],minLength:4,minimum:10},name:{type:"string",maxLength:100},gender:{type:["string","integer"],enum:["male","female","unknown"],minimum:4},location:{description:"location can be null, set using `nullable` property thats supported by OpenAPI `3.0.x`",type:"string",nullable:!0},age:{description:"Age of Person",type:"integer",minimum:21,exclusiveMaximum:70,multipleOf:5},photoUrls:{description:"One URL or Array or URLs or set to false",type:["array","boolean","string"],maxItems:20,items:{type:"string",format:"url"}},hobby:{description:"comma separated list of hobbies or an array of object",type:["string","array"],items:{type:"object",properties:{hobbyRank:{type:["integer","number"]},hobbyName:{type:"string"}}}}}}}}},ae={class:"content-container"},fe=Q({__name:"multi-datatypes",setup(le){const h=X(),$=Y(),{$openapidoc:_,$openapidocBus:y,$openapidocRef:b}=oe(),g=A(""),C=A(0),k=A(se.path.toString()),u=A(a??{}),f=s(()=>"multi-datatypes"),r=s(()=>h.params.type.toString()),O=s(()=>(h.params.mathod??"default").toString()),w=s(()=>r.value==="info"),L=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),m=s(()=>_.currentLocale());b.setComponents(a.components),b.setDefinitions(a.definitions),b.setDocPath(k.value),b.setFile(f.value);const l=s(()=>{const n={...a.paths};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return g.value=o.toString(),n[o]??null}return null}),c=s(()=>{const n={...a.webhooks};if(!n)return null;for(const o in n){let t=o.toString();if(t.startsWith("/")&&(t=t.substring(1)),t.endsWith("/")&&(t=t.substring(-1)),t=t.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),t===O.value)return g.value=o.toString(),n[o][r.value]??null}return null}),p=s(()=>l.value?l.value[r.value]??null:null),R=s(()=>l.value?l.value.parameters??null:null),q=s(()=>{const n=_.currentLocale()??"";return w.value?"[multi-datatypes] - Info Docs":L.value?"[multi-datatypes] - Authorization":P.value?"[multi-datatypes] - Components Docs":p.value?"[multi-datatypes] - "+(p.value["x-summary-"+n.value]||p.value.summary||""):""}),B=s(()=>{const n=_.currentLocale()??"";return w.value?"[multi-datatypes] - Info Docs":L.value?"[multi-datatypes] - Authorization":P.value?"[multi-datatypes] - Components Docs":p.value&&(p.value["x-description-"+n.value]||p.value.description)||""});re({title:q.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const j=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let n=C.value;if(n>0&&a.servers&&!a.servers[n]&&(n=0),!a.servers||!a.servers[n])return"";if(a.servers[n].variables){const o=Object.values(a.servers[n].variables)??[];if(o&&o.length)return o[0].default}return a.servers[n].url??""});function D(n){C.value=n}function N(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(t=>{t.addEventListener("click",i=>{const x=t.getAttribute("id"),S=window.location.origin+window.location.pathname+"#"+x;_.copyToClipboard(S,i,!1),$.push({path:h.path,hash:"#"+x}),setTimeout(()=>{t.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function W(){if(h.hash)return;const n=document.querySelector(".oapi-content");n&&(n.scrollTop=0)}function I(){const n=JSON.stringify(a,null,4),o=new Blob([n],{type:"application/json"}),t=URL.createObjectURL(o),i=document.createElement("a");i.href=t,i.download=f.value+".json",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(t)}return Z(()=>{y.$on("downloadJsonDoc",I),y.$on("changeServer",D),W(),N()}),ee(()=>{y.$off("downloadJsonDoc",I),y.$off("changeServer",D)}),(n,o)=>{const t=z,i=F,x=M,S=V,E=G,J=H,T=K;return v(),te("div",ae,[e(w)&&e(u).info?(v(),d(t,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(L)&&e(u).components?(v(),d(i,{key:1,components:e(u).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(P)&&e(u).components?(v(),d(x,{key:2,components:e(u).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(v(),d(S,{key:3,route:e(p),"current-locale":e(m),method:e(r),components:e(u).components,url:e(g),path_doc:e(k),file:e(f),server:e(j),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(v(),d(S,{key:4,route:e(c),"current-locale":e(m),method:e(r),components:e(u).components,url:e(g),path_doc:e(k),file:e(f),server:e(j),"sub-params":e(R)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(v(),d(E,{key:5})),U(T,null,{default:ne(()=>[U(J,{"current-locale":e(m),doc:e(u),path:e(k),file:e(f)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};
