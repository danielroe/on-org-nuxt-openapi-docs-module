import{_ as J,a as W,b as q,c as z,d as D}from"./Brltk6rc.js";import{g as V,r as u,E as S,f as n,m as I,h as F,l as G,o as f,c as k,b as c,w as s,u as e,a as d,q as K,I as P,a3 as x,a8 as Q,a5 as X}from"./P9gNwSF1.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./D1hVouDq.js";import"./D9tvjBRz.js";import"./By7t5g6Z.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=V({__name:"apidocs.layout.dynamic-query-params",setup(te){const h=u("docs"),A=S(),{$openapidoc:R,$openapidocBus:v}=K();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),i=u(!1),_=n(()=>"dynamic-query-params"),C=n(()=>l.name),w=n(()=>m.filesClean),M=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),y=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),b=n(()=>m.footer);I(A,()=>{i.value&&(o.value=!1)},{deep:!0,immediate:!0});function j(){o.value=!o.value}function g(){const a=window.innerWidth>=1110;i.value=window.innerWidth<1110,!a&&o.value&&(o.value=!1),a&&(o.value=!0)}function L(){const a=JSON.stringify(l,null,4),O=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{i.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",g),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",g),v.$off("downloadJsonDoc",L)}),(a,O)=>{const r=z,t=J,E=D,U=W,$=q;return f(),k("div",Y,[c(t,{isMenuOpen:e(o),onToggleMenu:j},{logo:s(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:s(()=>[c(r,{"current-locale":e(y),files:e(w),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[c(U,{isMenuOpen:e(o),isMobile:e(i)},{menu:s(()=>[e(M)?(f(),P(E,{key:0,routes:e(M),"current-locale":e(y),file:e(_),path:e(h),files:e(w),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),c($,null,{footer:s(()=>[e(b)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(b)},null,8,ne)):x("",!0)]),default:s(()=>[c(Q,{name:"oapi-fade",tag:"div"},{default:s(()=>[d("div",null,[X(a.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
