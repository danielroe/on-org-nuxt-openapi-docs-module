import{_ as z,a as E,b as V,c as $,d as D}from"./OpenApiMainContent.3854c2fb.js";import{f as S,r as c,h as U,k as n,M as j,g as q,l as F,c as g,b as s,w as t,u as e,a as r,o as _,m as G,R as y,W as I,T as J,n as K}from"./entry.fb805d14.js";import{c as p}from"./config.7d840204.js";import{d as a}from"./docs.schema.config.9922dfd9.js";import"./nuxt-link.c634151e.js";import"./OpenApiDropdown.4032f810.js";const P={class:"oapi-layout"},Q={href:"/","aria-label":"logo"},X=["innerHTML"],Y={class:"oapi-layout__body"},Z=["innerHTML"],re=S({__name:"apidocs.layout.schema",setup(ee){const d=c("docs"),O=U(),{$openapidoc:b,$openapidocBus:oe}=K();let u={...a.servers};Array.isArray(u)||(u=[]);const x=c(u),o=c(!1),l=c(!1),f=n(()=>"schema"),L=n(()=>a.name),m=n(()=>p.filesClean),h=n(()=>a.paths_by_tags),A=n(()=>a.localesReload),T=n(()=>a.locales),v=n(()=>b.currentLocale()),k=n(()=>p.logo.replace(":name",L.value)),M=n(()=>p.footer);j(O,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return q(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),F(()=>{window.removeEventListener("resize",w)}),(i,ne)=>{const H=$,C=z,N=D,R=E,W=V;return _(),g("div",P,[s(C,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[r("a",Q,[r("span",{innerHTML:e(k)},null,8,X)])]),button:t(()=>[s(H,{"current-locale":e(v),files:e(m),file:e(f),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),r("div",Y,[s(R,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(h)?(_(),G(N,{key:0,routes:e(h),"current-locale":e(v),file:e(f),path:e(d),files:e(m),locales:e(T),"locales-reload":e(A),servers:e(x)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),s(W,null,{footer:t(()=>[e(M)?(_(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(M)},null,8,Z)):y("",!0)]),default:t(()=>[s(I,{name:"oapi-fade",tag:"div"},{default:t(()=>[r("div",null,[J(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{re as default};
