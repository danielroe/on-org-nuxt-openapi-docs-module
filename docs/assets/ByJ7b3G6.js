import{_ as J,a as W,b as z,c as D,d as V}from"./C6cRGFvr.js";import{g as S,r as u,i as q,l as n,M as F,h as G,m as I,o as f,c as k,b as c,w as s,a as d,u as e,n as K,aa as x,af as P,ac as Q,q as X}from"./DmzEE5X3.js";import{c as m}from"./CIjhWVM3.js";import{d as l}from"./DZQKY8E9.js";import"./D9-aD2zd.js";import"./Ca973n2n.js";const Y={class:"oapi-layout"},Z={href:"/","aria-label":"logo"},ee=["innerHTML"],oe={class:"oapi-layout__body"},ne=["innerHTML"],ue=S({__name:"apidocs.layout.oauth",setup(te){const h=u("docs"),A=q(),{$openapidoc:R,$openapidocBus:v}=X();let p={...l.servers};Array.isArray(p)||(p=[]);const B=u(p),o=u(!1),i=u(!1),_=n(()=>"oauth"),C=n(()=>l.name),M=n(()=>m.filesClean),w=n(()=>l.paths_by_tags),T=n(()=>l.localesReload??!1),H=n(()=>l.locales),b=n(()=>R.currentLocale()),N=n(()=>m.logo.replace(":name",C.value)),g=n(()=>m.footer);F(A,()=>{i.value&&(o.value=!1)},{deep:!0,immediate:!0});function j(){o.value=!o.value}function y(){const a=window.innerWidth>=1110;i.value=window.innerWidth<1110,!a&&o.value&&(o.value=!1),a&&(o.value=!0)}function L(){const a=JSON.stringify(l,null,4),O=new Blob([a],{type:"application/json"}),r=URL.createObjectURL(O),t=document.createElement("a");t.href=r,t.download=_.value+".json",document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(r)}return G(()=>{i.value=window.innerWidth<1110,o.value=window.innerWidth>=1110,window.addEventListener("resize",y),v.$on("downloadJsonDoc",L)}),I(()=>{window.removeEventListener("resize",y),v.$off("downloadJsonDoc",L)}),(a,O)=>{const r=J,t=W,U=z,$=D,E=V;return f(),k("div",Y,[c(t,{isMenuOpen:e(o),onToggleMenu:j},{logo:s(()=>[d("a",Z,[d("span",{innerHTML:e(N)},null,8,ee)])]),button:s(()=>[c(r,{"current-locale":e(b),files:e(M),file:e(_),path:e(h)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),d("div",oe,[c($,{isMenuOpen:e(o),isMobile:e(i)},{menu:s(()=>[e(w)?(f(),K(U,{key:0,routes:e(w),"current-locale":e(b),file:e(_),path:e(h),files:e(M),locales:e(H),"locales-reload":e(T),servers:e(B)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):x("",!0)]),_:1},8,["isMenuOpen","isMobile"]),c(E,null,{footer:s(()=>[e(g)?(f(),k("footer",{key:0,class:"oapi-footer",innerHTML:e(g)},null,8,ne)):x("",!0)]),default:s(()=>[c(P,{name:"oapi-fade",tag:"div"},{default:s(()=>[d("div",null,[Q(a.$slots,"default")])]),_:3})]),_:3})])])}}});export{ue as default};
