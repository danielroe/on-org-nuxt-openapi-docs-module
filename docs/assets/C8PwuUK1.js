import{_ as J,a as W,b as z,c as D,d as V}from"./Brltk6rc.js";import{g as S,r as u,E as q,f as n,m as I,h as F,l as G,o as f,c as k,b as c,w as a,u as e,a as d,q as K,I as P,a3 as x,a8 as Q,a5 as X}from"./P9gNwSF1.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./C8GuLXVD.js";import"./D9tvjBRz.js";import"./By7t5g6Z.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=S({__name:"apidocs.layout.multiple-security-schemes",setup(te){const h=u("docs"),A=q(),{$openapidoc:R,$openapidocBus:v}=K();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),i=u(!1),_=n(()=>"multiple-security-schemes"),C=n(()=>l.name),w=n(()=>m.filesClean),M=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),b=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),y=n(()=>m.footer);I(A,()=>{i.value&&(o.value=!1)},{deep:!0,immediate:!0});function j(){o.value=!o.value}function g(){const s=window.innerWidth>=1110;i.value=window.innerWidth<1110,!s&&o.value&&(o.value=!1),s&&(o.value=!0)}function L(){const s=JSON.stringify(l,null,4),O=new Blob([s],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{i.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",g),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",g),v.$off("downloadJsonDoc",L)}),(s,O)=>{const r=D,t=J,E=V,U=W,$=z;return f(),k("div",Y,[c(t,{isMenuOpen:e(o),onToggleMenu:j},{logo:a(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:a(()=>[c(r,{"current-locale":e(b),files:e(w),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[c(U,{isMenuOpen:e(o),isMobile:e(i)},{menu:a(()=>[e(M)?(f(),P(E,{key:0,routes:e(M),"current-locale":e(b),file:e(_),path:e(h),files:e(w),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),c($,null,{footer:a(()=>[e(y)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(y)},null,8,ne)):x("",!0)]),default:a(()=>[c(Q,{name:"oapi-fade",tag:"div"},{default:a(()=>[d("div",null,[X(s.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
