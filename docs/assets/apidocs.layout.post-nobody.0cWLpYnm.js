import{_ as z,a as E,b as V,c as $,d as S}from"./OpenApiMainContent.Kes6krjP.js";import{f as U,r as c,h as D,k as n,M as X,g as j,l as q,c as g,b as s,w as t,u as e,a as r,o as p,m as F,S as y,X as G,U as I,n as J}from"./entry.rqrYbntq.js";import{c as _}from"./config.CKPRotIq.js";import{d as a}from"./docs.post-nobody.config.INYntwV8.js";import"./nuxt-link.pO1KivtA.js";import"./OpenApiDropdown.LOTIfv3q.js";const K={class:"oapi-layout"},P={href:"/","aria-label":"logo"},Q=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],re=U({__name:"apidocs.layout.post-nobody",setup(ee){const d=c("docs"),b=D(),{$openapidoc:O,$openapidocBus:oe}=J();let u={...a.servers};Array.isArray(u)||(u=[]);const L=c(u),o=c(!1),l=c(!1),f=n(()=>"post-nobody"),x=n(()=>a.name),m=n(()=>_.filesClean),h=n(()=>a.paths_by_tags),A=n(()=>a.localesReload),k=n(()=>a.locales),v=n(()=>O.currentLocale()),T=n(()=>_.logo.replace(":name",x.value)),M=n(()=>_.footer);X(b,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return j(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),q(()=>{window.removeEventListener("resize",w)}),(i,ne)=>{const H=$,C=z,N=S,R=E,W=V;return p(),g("div",K,[s(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[r("a",P,[r("span",{innerHTML:e(T)},null,8,Q)])]),button:t(()=>[s(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),r("div",Y,[s(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(p(),F(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(k),"locales-reload":e(A),servers:e(L)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),s(W,null,{footer:t(()=>[e(M)?(p(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):y("",!0)]),default:t(()=>[s(G,{name:"oapi-fade",tag:"div"},{default:t(()=>[r("div",null,[I(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{re as default};
