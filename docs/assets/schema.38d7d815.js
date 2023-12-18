import{_ as J,a as z,b as V,c as H,d as M,e as G}from"./SearchBlock.1e4291ad.js";import{_ as K}from"./client-only.bc1de542.js";import{f as Q,h as X,j as Y,r as C,k as s,g as Z,l as ee,c as te,u as e,m as v,b as T,w as ne,n as oe,o as d}from"./entry.02ff2795.js";import{u as re}from"./vue.f36acd1f.eda93068.js";import{d as se}from"./docs.schema.config.9922dfd9.js";import"./nuxt-link.162a37af.js";import"./OpenApiDropdown.42b99cd0.js";const a={openapi:"3.0.0",info:{description:"Schema",version:"1.0.0",title:"Schema with various data"},paths:{"/schema/person":{get:{summary:"Person Schema",description:"Sample Schema of `person`",requestBody:{content:{"applicaton/json":{schema:"#/components/schemas/Person"}}},tags:["other"]}}},components:{schemas:{Category:{type:"object",properties:{id:{description:"Category ID",allOf:["#/components/schemas/Id"]},name:{description:"Category name",type:"string",minLength:1}}},Id:{type:"integer",format:"int64",readOnly:!0},Person:{type:"object",required:["name","photoUrls"],properties:{id:{description:"Pet ID",allOf:["#/components/schemas/Id"]},category:{description:"Categories this pet belongs to",allOf:["#/components/schemas/Category"]},DependentIds:{type:"array",description:"IDs of Dependents .",items:{type:"integer"},example:[278,279,280,281]},name:{description:"Name of the person",type:"object",properties:{firstName:{description:"First name and prefix",type:"object",properties:{prefix:{description:"Prefix",type:"string"},name:{description:"First name only",type:"string"}}},lastName:{description:"Last name",type:"string",minLength:3}}},photoUrls:{description:"The list of URL to a cute photos featuring pet",type:"array",maxItems:20,items:{type:"string",format:"url"}},tags:{description:"Tags attached to the pet",type:"array",minItems:1,items:"#/components/schemas/Tag"},maritalStatus:{type:"string",description:"Pet status in the store",enum:["married","unmarried","widowed"]},phone:{description:"phone number in international format",type:"string",pattern:"/^&#x5C;+(?:[0-9]-?){6,14}[0-9]$/",example:"+1-202-555-0192",nullable:!0}}},Tag:{type:"object",properties:{id:{description:"Tag ID",allOf:["#/components/schemas/Id"]},name:{description:"Tag name",type:"string",minLength:1}}}}},tags:{}},ae={class:"content-container"},he=Q({__name:"schema",setup(ce){const f=X(),$=Y(),{$openapidoc:_,$openapidocBus:g,$openapidocRef:y}=oe(),b=C(""),L=C(0),S=C(se.path.toString()),l=C(a??{}),h=s(()=>"schema"),r=s(()=>f.params.type.toString()),P=s(()=>(f.params.mathod??"default").toString()),w=s(()=>r.value==="info"),I=s(()=>r.value==="auth"),D=s(()=>r.value==="components"),m=s(()=>_.currentLocale());y.setComponents(a.components),y.setDefinitions(a.definitions),y.setDocPath(S.value),y.setFile(h.value);const c=s(()=>{const t={...a.paths};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return b.value=o.toString(),t[o]??null}return null}),i=s(()=>{const t={...a.webhooks};if(!t)return null;for(const o in t){let n=o.toString();if(n.startsWith("/")&&(n=n.substring(1)),n.endsWith("/")&&(n=n.substring(-1)),n.replace(/[/\\.?+=&{}]/gumi,"_").replace(/__+/,"_"),n===P.value)return b.value=o.toString(),t[o][r.value]??null}return null}),p=s(()=>c.value?c.value[r.value]??null:null),j=s(()=>c.value?c.value.parameters??null:null),N=s(()=>{const t=_.currentLocale()??"";return w.value?"[schema] - Info Docs":I.value?"[schema] - Authorization":D.value?"[schema] - Components Docs":p.value?"[schema] - "+(p.value["x-summary-"+t.value]||p.value.summary||""):""}),U=s(()=>{const t=_.currentLocale()??"";return w.value?"[schema] - Info Docs":I.value?"[schema] - Authorization":D.value?"[schema] - Components Docs":p.value&&(p.value["x-description-"+t.value]||p.value.description)||""});re({title:N.value,meta:[{name:"description",content:U.value}],htmlAttrs:{lang:m.value},bodyAttrs:{class:"oapi"}});const A=s(()=>{if(c.value){if(c.value.servers&&c.value.servers[0])return c.value.servers[0].url??null;if(c.value[r.value]&&c.value[r.value].servers&&c.value[r.value].servers[0])return c.value[r.value].servers[0].url??null}if(i.value){if(i.value.servers&&i.value.servers[0])return i.value.servers[0].url??null;if(i.value[r.value]&&i.value[r.value].servers&&i.value[r.value].servers[0])return i.value[r.value].servers[0].url??null}let t=L.value;if(t>0&&a.servers&&!a.servers[t]&&(t=0),!a.servers||!a.servers[t])return"";if(a.servers[t].variables){const o=Object.values(a.servers[t].variables)??[];if(o&&o.length)return o[0].default}return a.servers[t].url??""});function O(t){L.value=t}function B(){var o;(((o=document.querySelector(".content-container"))==null?void 0:o.querySelectorAll("h1[id], h2[id], h3[id], h4[id]"))??[]).forEach(n=>{n.addEventListener("click",u=>{const k=n.getAttribute("id"),x=window.location.origin+window.location.pathname+"#"+k;_.copyToClipboard(x,u,!1),$.push({path:f.path,hash:"#"+k}),setTimeout(()=>{n.scrollIntoView({behavior:"smooth",block:"start"})},100)})})}function q(){if(f.hash)return;const t=document.querySelector(".oapi-content");t&&(t.scrollTop=0)}function R(){const t=JSON.stringify(a,null,4),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),u=document.createElement("a");u.href=n,u.download=h.value+".json",document.body.appendChild(u),u.click(),document.body.removeChild(u),URL.revokeObjectURL(n)}return Z(()=>{g.$on("downloadJsonDoc",R),g.$on("changeServer",O),q(),B()}),ee(()=>{g.$off("downloadJsonDoc",R),g.$off("changeServer",O)}),(t,o)=>{const n=J,u=z,k=V,x=H,W=G,E=M,F=K;return d(),te("div",ae,[e(w)&&e(l).info?(d(),v(n,{key:0,info:e(l).info,servers:e(l).servers,"current-locale":e(m)},null,8,["info","servers","current-locale"])):e(I)&&e(l).components?(d(),v(u,{key:1,components:e(l).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(D)&&e(l).components?(d(),v(k,{key:2,components:e(l).components,"current-locale":e(m)},null,8,["components","current-locale"])):e(p)?(d(),v(x,{key:3,route:e(p),"current-locale":e(m),method:e(r),components:e(l).components,url:e(b),path_doc:e(S),file:e(h),server:e(A),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):e(i)?(d(),v(x,{key:4,route:e(i),"current-locale":e(m),method:e(r),components:e(l).components,url:e(b),path_doc:e(S),file:e(h),server:e(A),"sub-params":e(j)},null,8,["route","current-locale","method","components","url","path_doc","file","server","sub-params"])):(d(),v(W,{key:5})),T(F,null,{default:ne(()=>[T(E,{"current-locale":e(m),doc:e(l),path:e(S),file:e(h)},null,8,["current-locale","doc","path","file"])]),_:1})])}}});export{he as default};
