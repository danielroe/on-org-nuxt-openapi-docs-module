import{_ as E}from"./nuxt-link.d2cc8467.js";import{_ as V,a as $,b as D,c as F,d as S}from"./OpenApiMainContent.79c4ada5.js";import{f as U,r,h as j,k as n,M as q,g as G,l as I,c as g,b as a,w as t,u as e,a as u,o as _,m as J,R as y,W as K,T as P,n as Q}from"./entry.4698dbd5.js";import{c as p}from"./config.7d840204.js";import{d as s}from"./docs.multipart-formdata.config.d32377c7.js";import"./OpenApiDropdown.6e2e3875.js";const X={class:"oapi-layout"},Y=["innerHTML"],Z={class:"oapi-layout__body"},ee=["innerHTML"],ue=U({__name:"apidocs.layout.multipart-formdata",setup(oe){const d=r("docs"),x=j(),{$openapidoc:O,$openapidocBus:ne}=Q();let c=s.servers;Array.isArray(c)||(c=[]);const b=r(c),o=r(!1),l=r(!1),m=n(()=>"multipart-formdata"),L=n(()=>s.name),f=n(()=>p.filesClean),v=n(()=>s.paths_by_tags),k=n(()=>s.localesReload),A=n(()=>s.locales),M=n(()=>O.currentLocale()),T=n(()=>p.logo.replace(":name",L.value)),h=n(()=>p.footer);q(x,()=>{l.value&&(o.value=!1)},{deep:!0,immediate:!0});function B(){o.value=!o.value}function w(){const i=window.innerWidth>=1110;l.value=window.innerWidth<1110,!i&&o.value&&(o.value=!1),i&&(o.value=!0)}return G(()=>{l.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",w)}),I(()=>{window.removeEventListener("resize",w)}),(i,te)=>{const H=E,C=F,N=V,R=S,W=$,z=D;return _(),g("div",X,[a(N,{isMenuOpen:e(o),onToggleMenu:B},{logo:t(()=>[a(H,{to:"/","active-class":"","aria-label":"logo"},{default:t(()=>[u("span",{innerHTML:e(T)},null,8,Y)]),_:1})]),button:t(()=>[a(C,{"current-locale":e(M),files:e(f),file:e(m),path:e(d)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),u("div",Z,[a(W,{isMenuOpen:e(o),isMobile:e(l)},{menu:t(()=>[e(v)?(_(),J(R,{key:0,routes:e(v),"current-locale":e(M),file:e(m),path:e(d),files:e(f),locales:e(A),"locales-reload":e(k),servers:e(b)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):y("",!0)]),_:1},8,["isMenuOpen","isMobile"]),a(z,null,{footer:t(()=>[e(h)?(_(),g("footer",{key:0,class:"oapi-footer",innerHTML:e(h)},null,8,ee)):y("",!0)]),default:t(()=>[a(K,{name:"oapi-fade",tag:"div"},{default:t(()=>[u("div",null,[P(i.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
