import{_ as J,a as V,b as W,c as z,d as D}from"./BZ3CM_O2.js";import{g as S,r as u,j as q,m as n,N as Y,h as F,n as G,o as f,c as k,b as i,w as a,u as e,a as p,s as I,q as K,T as x,Y as P,V as Q}from"./CZbOQZ4Y.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./BPmTHwBg.js";import"./C3QBS5EZ.js";import"./BXn-I8F8.js";const X={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=S({__name:"apidocs.layout.open-api-3-1-test",setup(te){const h=u("docs"),A=q(),{$openapidoc:R,$openapidocBus:v}=I();let d={...l.servers};Array.isArray(d)||(d=[]);const T=u(d),o=u(!1),c=u(!1),_=n(()=>"open-api-3-1-test"),B=n(()=>l.name),w=n(()=>m.filesClean),M=n(()=>l.paths_by_tags),C=n(()=>l.localesReload??!1),N=n(()=>l.locales),b=n(()=>R.currentLocale()),j=n(()=>m.logo.replace(":name",B.value)),g=n(()=>m.footer);Y(A,()=>{c.value&&(o.value=!1)},{deep:!0,immediate:!0});function H(){o.value=!o.value}function y(){const s=window.innerWidth>=1110;c.value=window.innerWidth<1110,!s&&o.value&&(o.value=!1),s&&(o.value=!0)}function L(){const s=JSON.stringify(l,null,4),O=new Blob([s],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{c.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",y),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",y),v.$off("downloadJsonDoc",L)}),(s,O)=>{const r=z,t=J,U=D,$=V,E=W;return f(),k("div",X,[i(t,{isMenuOpen:e(o),onToggleMenu:H},{logo:a(()=>[p("a",Z,[p("span",{innerHTML:e(j)},null,8,ee)])]),button:a(()=>[i(r,{"current-locale":e(b),files:e(w),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),p("div",oe,[i($,{isMenuOpen:e(o),isMobile:e(c)},{menu:a(()=>[e(M)?(f(),K(U,{key:0,routes:e(M),"current-locale":e(b),file:e(_),path:e(h),files:e(w),locales:e(N),"locales-reload":e(C),servers:e(T)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),i(E,null,{footer:a(()=>[e(g)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(g)},null,8,ne)):x("",!0)]),default:a(()=>[i(P,{name:"oapi-fade",tag:"div"},{default:a(()=>[p("div",null,[Q(s.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
