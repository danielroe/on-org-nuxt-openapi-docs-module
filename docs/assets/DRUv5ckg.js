import{_ as J,a as W,b as z,c as D,d as S}from"./BVu0yZTF.js";import{f as V,r as u,h as X,k as n,M as q,g as F,l as G,c as k,b as c,w as s,u as e,a as d,n as I,o as f,m as K,S as x,X as P,U as Q}from"./Bl5-q_j9.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./CBVCGF1c.js";import"./6zf_jSQx.js";import"./BQtCQgIw.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=V({__name:"apidocs.layout.arr-of-arr",setup(te){const h=u("docs"),A=X(),{$openapidoc:R,$openapidocBus:v}=I();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),i=u(!1),_=n(()=>"arr-of-arr"),C=n(()=>l.name),M=n(()=>m.filesClean),w=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),b=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),g=n(()=>m.footer);q(A,()=>{i.value&&(o.value=!1)},{deep:!0,immediate:!0});function U(){o.value=!o.value}function y(){const a=window.innerWidth>=1110;i.value=window.innerWidth<1110,!a&&o.value&&(o.value=!1),a&&(o.value=!0)}function L(){const a=JSON.stringify(l,null,4),O=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{i.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",y),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",y),v.$off("downloadJsonDoc",L)}),(a,O)=>{const r=D,t=J,j=S,$=W,E=z;return f(),k("div",Y,[c(t,{isMenuOpen:e(o),onToggleMenu:U},{logo:s(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:s(()=>[c(r,{"current-locale":e(b),files:e(M),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[c($,{isMenuOpen:e(o),isMobile:e(i)},{menu:s(()=>[e(w)?(f(),K(j,{key:0,routes:e(w),"current-locale":e(b),file:e(_),path:e(h),files:e(M),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),c(E,null,{footer:s(()=>[e(g)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(g)},null,8,ne)):x("",!0)]),default:s(()=>[c(P,{name:"oapi-fade",tag:"div"},{default:s(()=>[d("div",null,[Q(a.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};