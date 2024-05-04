import{_ as M,a as z,b as V,c as H,d as J,e as U}from"./DCrr6YMj.js";import{_ as G}from"./B2qUN7ZD.js";import{f as K,h as Q,j as X,r as S,k as s,g as Y,l as Z,c as ee,u as e,m as v,b as N,w as te,n as oe,o as m}from"./tgtTgfPE.js";import{u as ne}from"./CcXODMnf.js";import{d as re}from"./DiUzA0tW.js";import"./CF6P0j7V.js";import"./jbzc-oRG.js";const a={openapi:"3.0.0",info:{title:"all-of Models",description:"Model composition using all-of",version:"1.0.0"},paths:{"/all-of/employee":{get:{summary:"List of employees",responses:{200:{description:"Checkout the model tab to view object schemas defined using all-of",content:{"application/json":{schema:"#/components/schemas/emp1"}}}},tags:["other"]}}},components:{schemas:{emp1:{type:"object",additionalProperties:!1,description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},"#/components/schemas/name","#/components/schemas/job"]},emp2:{type:"object",additionalProperties:!1,properties:{Employee:{description:"Employee Details",allOf:[{properties:{Id:{type:"string",description:"Employee ID"}}},"#/components/schemas/name","#/components/schemas/job"]}}},name:{type:"object",additionalProperties:!1,properties:{firstName:{type:"string",description:"First name"},lastName:{type:"string",description:"Last Name"}}},job:{type:"object",additionalProperties:!1,properties:{jobTitle:{type:"string",description:"Job title"},department:{type:"string",description:"Department name"}}}}},tags:{}},se={class:"content-container"},fe=K({__name:"allof",setup(le){const f=Q(),O=X(),{$openapidoc:d,$openapidocBus:C,$openapidocRef:h}=oe(),_=S(""),D=S(0),b=S((re.path??"").toString()),c=S(a??{}),y=s(()=>"allof"),r=s(()=>f.params.type.toString()),w=s(()=>(f.params.mathod??"default").toString()),x=s(()=>r.value==="info"),A=s(()=>r.value==="auth"),j=s(()=>r.value==="components"),p=s(()=>d.currentLocale());h.setComponents(a.components),h.setDefinitions(a.definitions),h.setDocPath(b.value),h.setFile(y.value);const l=s(()=>{const t={...a.paths};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===w.value)return _.value=n.toString(),t[n]??null}return null}),u=s(()=>{const t={...a.webhooks};if(!t)return null;for(const n in t){let o=n.toString();if(o.startsWith("/")&&(o=o.substring(1)),o.endsWith("/")&&(o=o.substring(-1)),o=o.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),o===w.value)return _.value=n.toString(),t[n][r.value]??null}return null}),i=s(()=>l.value?l.value[r.value]??null:null),I=s(()=>l.value?l.value.parameters??null:null),$=s(()=>{const t=d.currentLocale()??"";return x.value?"[allof] - Info Docs":A.value?"[allof] - Authorization":j.value?"[allof] - Components Docs":i.value?"[allof] - "+(i.value["x-summary-"+t.value]||i.value.summary||""):""}),B=s(()=>{const t=d.currentLocale()??"";return x.value?"[allof] - Info Docs":A.value?"[allof] - Authorization":j.value?"[allof] - Components Docs":i.value&&(i.value["x-description-"+t.value]||i.value.description)||""});ne({title:$.value,meta:[{name:"description",content:B.value}],htmlAttrs:{lang:p.value},bodyAttrs:{class:"oapi"}});const E=s(()=>{if(l.value){if(l.value.servers&&l.value.servers[0])return l.value.servers[0].url??null;if(l.value[r.value]&&l.value[r.value].servers&&l.value[r.value].servers[0])return l.value[r.value].servers[0].url??null}if(u.value){if(u.value.servers&&u.value.servers[0])return u.value.servers[0].url??null;if(u.value[r.value]&&u.value[r.value].servers&&u.value[r.value].servers[0])return u.value[r.value].servers[0].url??null}let t=D.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const n=Object.values(a.servers[t].variables)??[];if(n&&n.length)return n[0].default}return a.servers[t].url??""});function L(t){D.value=t}function R(){var n;(((n=document.querySelector(".content-container"))==null?void 0:n.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(o=>{o.addEventListener("click",P=>{const g=o.getAttribute("id"),k=window.location.origin+window.location.pathname+"#"+g;d.copyToClipboard(k,P,!1),O.push({path:f.path,hash:"#"+g}),setTimeout(()=>{o.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function T(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}return Y(()=>{C.$on("changeServer",L),T(),R()}),Z(()=>{C.$off("changeServer",L)}),(t,n)=>{const o=M,P=z,g=V,k=H,W=U,q=J,F=G;return m(),ee("div",se,[e(x)&&e(c).info?(m(),v(o,{key:0,info:e(c).info,servers:e(c).servers,"current-locale":e(p)},null,8,["info","servers","current-locale"])):e(A)&&e(c).components?(m(),v(P,{key:1,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(j)&&e(c).components?(m(),v(g,{key:2,components:e(c).components,"current-locale":e(p)},null,8,["components","current-locale"])):e(i)?(m(),v(k,{key:3,route:e(i),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(b),file:e(y),server:e(E),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(u)?(m(),v(k,{key:4,route:e(u),"current-locale":e(p),method:e(r),components:e(c).components,url:e(_),path_doc:e(b),file:e(y),server:e(E),"sub-params":e(I)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(m(),v(W,{key:5})),N(F,null,{default:te(()=>[N(q,{"current-locale":e(p),doc:e(c),path:e(b),file:e(y)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{fe as default};