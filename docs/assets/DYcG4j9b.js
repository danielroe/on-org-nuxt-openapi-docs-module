import{_ as J,a as W,b as z,c as D,d as V}from"./Brltk6rc.js";import{g as S,r as u,E as q,f as n,m as I,h as F,l as G,o as f,c as k,b as i,w as s,u as e,a as d,q as K,I as P,a3 as x,a8 as Q,a5 as X}from"./P9gNwSF1.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./BreU9qJo.js";import"./D9tvjBRz.js";import"./By7t5g6Z.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=S({__name:"apidocs.layout.file-upload",setup(te){const h=u("docs"),A=q(),{$openapidoc:R,$openapidocBus:v}=K();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),c=u(!1),_=n(()=>"file-upload"),C=n(()=>l.name),w=n(()=>m.filesClean),M=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),b=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),g=n(()=>m.footer);I(A,()=>{c.value&&(o.value=!1)},{deep:!0,immediate:!0});function j(){o.value=!o.value}function y(){const a=window.innerWidth>=1110;c.value=window.innerWidth<1110,!a&&o.value&&(o.value=!1),a&&(o.value=!0)}function L(){const a=JSON.stringify(l,null,4),O=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return F(()=>{c.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",y),v.$on("downloadJsonDoc",L)}),G(()=>{window.removeEventListener("resize",y),v.$off("downloadJsonDoc",L)}),(a,O)=>{const r=D,t=J,E=V,U=W,$=z;return f(),k("div",Y,[i(t,{isMenuOpen:e(o),onToggleMenu:j},{logo:s(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:s(()=>[i(r,{"current-locale":e(b),files:e(w),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[i(U,{isMenuOpen:e(o),isMobile:e(c)},{menu:s(()=>[e(M)?(f(),P(E,{key:0,routes:e(M),"current-locale":e(b),file:e(_),path:e(h),files:e(w),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),i($,null,{footer:s(()=>[e(g)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(g)},null,8,ne)):x("",!0)]),default:s(()=>[i(Q,{name:"oapi-fade",tag:"div"},{default:s(()=>[d("div",null,[X(a.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
