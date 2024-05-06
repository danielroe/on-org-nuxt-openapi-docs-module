import{_ as z,a as F,b as M,c as V,d as H,e as G}from"./CcICxIlW.js";import{_ as J}from"./Cdvvw1m9.js";import{g as K,i as Q,k as X,r as x,l as s,h as Y,m as Z,o as m,c as ee,u as e,n as v,b as q,w as te,q as ne}from"./DmzEE5X3.js";import{u as oe}from"./BwBK4R7O.js";import{d as re}from"./BSVnBU--.js";import"./D9-aD2zd.js";import"./Ca973n2n.js";const l={openapi:"3.1.0",info:{title:"Support for multiple datatypes for each field",version:"1.0.1"},paths:{"/person":{post:{summary:"Demonstrates data-types and constraints",parameters:[{name:"height",in:"query",description:"height (in inches)",required:!0,example:70,schema:{type:["integer","number"]}}],responses:{200:{description:"Successful Operation",content:{"application/json":{schema:"#/components/schemas/person"}}}},tags:["other"]}}},tags:{person:{name:"Person",description:"Person Datatype"}},components:{schemas:{person:{type:"object",required:["id"],properties:{id:{description:"Person ID",type:["integer","number","string"],minLength:4,minimum:10},name:{type:"string",maxLength:100},gender:{type:["string","integer"],enum:["male","female","unknown"],minimum:4},location:{description:"location can be null, set using `nullable` property thats supported by OpenAPI `3.0.x`",type:"string",nullable:!0},age:{description:"Age of Person",type:"integer",minimum:21,exclusiveMaximum:70,multipleOf:5},photoUrls:{description:"One URL or Array or URLs or set to false",type:["array","boolean","string"],maxItems:20,items:{type:"string",format:"url"}},hobby:{description:"comma separated list of hobbies or an array of object",type:["string","array"],items:{type:"object",properties:{hobbyRank:{type:["integer","number"]},hobbyName:{type:"string"}}}}}}}}},se={class:"content-container"},de=K({__name:"multi-datatypes",setup(ae){const d=Q(),$=X(),{$openapidoc:f,$openapidocBus:C,$openapidocRef:h}=ne(),_=x(""),D=x(0),y=x((re.path??"").toString()),u=x(l??{}),g=s(()=>"multi-datatypes"),r=s(()=>d.params.type.toString()),I=s(()=>(d.params.mathod??"default").toString()),S=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),P=s(()=>r.value==="components"),p=s(()=>f.currentLocale());h.setComponents(l.components),h.setDefinitions(l.definitions),h.setDocPath(y.value),h.setFile(g.value);const a=s(()=>{const t={...l.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===I.value)return _.value=o.toString(),t[o]??null}return null}),c=s(()=>{const t={...l.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n=n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===I.value)return _.value=o.toString(),t[o][r.value]??null}return null}),i=s(()=>a.value?a.value[r.value]??null:null),L=s(()=>a.value?a.value.parameters??null:null),j=s(()=>{const t=f.currentLocale()??"";return S.value?"[multi-datatypes] - Info Docs":A.value?"[multi-datatypes] - Authorization":P.value?"[multi-datatypes] - Components Docs":i.value?"[multi-datatypes] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),B=s(()=>{const t=f.currentLocale()??"";return S.value?"[multi-datatypes] - Info Docs":A.value?"[multi-datatypes] - Authorization":P.value?"[multi-datatypes] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});oe({title:j.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const O=s(()=>{if(a.value){if(a.value.servers&&a.value.servers[0])return a.value.servers[0].url??null;if(a.value[r.value]&&a.value[r.value].servers&&a.value[r.value].servers[0])return a.value[r.value].servers[0].url??null}if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}let t=D.value;if(t>0&&l.servers&&!l.servers[t]&&(t=0),!l.servers||!l.servers[t])return"";if(l.servers[t].variables){const o=Object.values(l.servers[t].variables)??[];if(o&&o.length)return o[0].default}return l.servers[t].url??""});function R(t){D.value=t}function N(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",w=>{const b=n.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+b;f.copyToClipboard(k,w,!1),$.push({path:d.path,hash:"#"+b}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function W(){if(d.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{C.$on("changeServer",R),W(),N()}),Z(()=>{C.$off("changeServer",R)}),(t,o)=>{const n=z,w=F,b=M,k=V,T=G,U=H,E=J;return m(),ee("div",se,[e(S)&&e(u).info?(m(),v(n,{key:0,info:e(u).info,servers:e(u).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(u).components?(m(),v(w,{key:1,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(P)&&e(u).components?(m(),v(b,{key:2,components:e(u).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(m(),v(k,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(u).components,url:e(_),path_doc:e(y),file:e(g),server:e(O),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(c)?(m(),v(k,{key:4,route:e(c),"current-locale":e(p),method:e(r),components:e(u).components,url:e(_),path_doc:e(y),file:e(g),server:e(O),"sub-params":e(L)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(T,{key:5})),q(E,null,{default:te(()=>[q(U,{"current-locale":e(p),doc:e(u),path:e(y),file:e(g)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{de as default};