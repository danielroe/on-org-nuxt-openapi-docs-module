import{_ as z,a as E,b as V,c as $,d as j}from"./OpenApiMainContent.Kes6krjP.js";import{f as S,r,h as U,k as n,M as D,g as X,l as q,c as w,b as a,w as t,u as e,a as c,o as p,m as F,S as y,X as G,U as I,n as J}from"./entry.rqrYbntq.js";import{c as _}from"./config.CKPRotIq.js";import{d as s}from"./docs.array-and-object-nesting.config.LOhybwf1.js";import"./nuxt-link.pO1KivtA.js";import"./OpenApiDropdown.LOTIfv3q.js";const K={class:"oapi-layout"},P={href:"/","aria-label":"logo"},Q=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],ce=S({__name:"apidocs.layout.array-and-object-nesting",setup(ee){const d=r("docs"),b=U(),{$openapidoc:O,$openapidocBus:oe}=J();let u={...s.servers};Array.isArray(u)||(u=[]);const L=r(u),o=r(!1),l=r(!1),f=n(()=>"array-and-object-nesting"),x=n(()=>s.name),m=n(()=>_.filesClean),h=n(()=>s.paths_by_tags),A=n(()=>s.localesReload),k=n(()=>s.locales),v=n(()=>O.currentLocale()),T=n(()=>_.logo.replace(":name",x.value)),M=n(()=>_.footer);D(b,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function g(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return X(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",g)}),q(()=>{window.removeEventListener("resize",g)}),(i,ne)=>{const H=$,C=z,N=j,R=E,W=V;return p(),w("div",K,[a(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[c("a",P,[c("span",{innerHTML:e(T)},null,8,Q)])]),button:t(()=>[a(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),c("div",Y,[a(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(p(),F(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(k),"locales-reload":e(A),servers:e(L)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),a(W,null,{footer:t(()=>[e(M)?(p(),w("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):y("",!0)]),default:t(()=>[a(G,{name:"oapi-fade",tag:"div"},{default:t(()=>[c("div",null,[I(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{ce as default};
