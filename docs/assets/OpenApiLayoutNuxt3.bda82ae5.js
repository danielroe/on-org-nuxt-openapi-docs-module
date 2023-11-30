import{_ as q}from"./nuxt-link.cca48342.js";import{_ as b,o as s,c as u,t as m,a,U as f,d as L,b as _,W as k,$ as V,X as S,s as x,w as c,F as T,l as B,f as K,u as Q,k as Y,r as O,n as v,P as ee,h as te,q as ne,j as i,Z as oe,v as ae}from"./entry.6db5e508.js";import{a as j}from"./OpenApiDropdown.fb5bf8bf.js";const se={data(){return{isDarkMode:!1}},methods:{darkModeClick(){this.isDarkMode=!this.isDarkMode,localStorage.setItem("isDarkMode",this.isDarkMode),this.isDarkMode?document.querySelector("html").dataset.add("dark"):document.querySelector("html").classList.remove("dark")}},mounted(){this.isDarkMode=localStorage.getItem("isDarkMode")==="true",this.isDarkMode&&document.querySelector("html").classList.add("dark")}};function ie(e,n,o,g,p,t){return s(),u("button",{class:"mr-2",onClick:n[0]||(n[0]=(...r)=>t.darkModeClick&&t.darkModeClick(...r))},m(p.isDarkMode?"Light":"Dark"),1)}const re=b(se,[["render",ie]]);const le={methods:{toggleSearch(){this.$openapidocBus.$emit("toggleSearchDoc")}}},ce=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[a("path",{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"})],-1),ue=[ce];function de(e,n,o,g,p,t){return s(),u("button",{id:"search-btn","aria-label":"Search",class:"oapi-header-btn oapi-search-btn",onClick:n[0]||(n[0]=(...r)=>t.toggleSearch&&t.toggleSearch(...r))},ue)}const I=b(le,[["render",de]]);const pe={components:{OpenApiDarkModeToggle:re,OpenApiSearch:I},props:{currentLocale:{type:String,required:!0},file:{type:String},path:{type:String,required:!0},files:{type:Object}},computed:{},methods:{downloadJson(){this.$openapidocBus.$emit("downloadJsonDoc")}}},_e={class:"oapi-header-actions"},he=a("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"})],-1);function me(e,n,o,g,p,t){const r=I;return s(),u("div",_e,[f("",!0),a("button",{type:"button",class:"oapi-header-btn oapi-header-actions__json","aria-haspopup":"true",onClick:n[0]||(n[0]=(...y)=>t.downloadJson&&t.downloadJson(...y))},[L(" Json "),he]),_(r,{"current-locale":o.currentLocale,file:o.file,path:o.path},null,8,["current-locale","file","path"])])}const fe=b(pe,[["render",me]]);const ge={props:{isMenuOpen:{type:Boolean,required:!0}},methods:{toggleMenu(){this.$emit("toggleMenu")}}},ve={class:"oapi-header"},ye=a("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},[a("path",{d:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"})],-1),be=[ye],Me={class:"oapi-header__logo"},$e={class:"oapi-header__content"};function ke(e,n,o,g,p,t){return s(),u("header",ve,[a("button",{id:"menu-btn","aria-label":"Menu",class:"oapi-header__menu-btn oapi-header-btn",onClick:n[0]||(n[0]=(...r)=>t.toggleMenu&&t.toggleMenu(...r))},be),a("div",Me,[k(e.$slots,"logo")]),a("div",$e,[k(e.$slots,"button")])])}const Le=b(ge,[["render",ke]]);const xe={props:{title:{type:String,default:""},description:{type:String,default:""},isOpen:Boolean},data(){return{open:!1}},watch:{isOpen(e){this.open=e}},mounted(){this.open=this.isOpen},methods:{toggleOpen(){this.open=this.open=!this.open,this.$emit("change",this.open)}}},Oe={class:"oapi-sub-menu-head__title"},Se=a("svg",{class:"oapi-sub-menu-head__arrow",viewBox:"0 0 64 64"},[a("path",{d:"M59.69 16.002a3.152 3.152 0 0 0-2.87-1.82H7.176a3.2 3.2 0 0 0-2.46 5.19l23.932 29.262a3.19 3.19 0 0 0 2.46 1.17c1.465.023 3.253.17 4.24-1.17l23.933-29.262a3.159 3.159 0 0 0 .41-3.37z"})],-1),we={key:0},Ce=["innerHTML"];function Ae(e,n,o,g,p,t){return s(),u("li",{class:S(["oapi-sub-menu",{"oapi-sub-menu--is-open":p.open}])},[a("div",{class:"oapi-sub-menu-head",onClick:n[0]||(n[0]=V((...r)=>t.toggleOpen&&t.toggleOpen(...r),["stop","prevent"]))},[a("span",Oe,m(o.title),1),Se]),p.open?(s(),u("ul",we,[o.description&&o.description!==""?(s(),u("li",{key:0,class:"oapi-menu-description oapi-sub-menu-description",innerHTML:o.description},null,8,Ce)):f("",!0),k(e.$slots,"default")])):f("",!0)],2)}const N=b(xe,[["render",Ae]]);function Re(e){switch(e.toUpperCase()){case"GET":return"bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border border-green-400";case"POST":return"bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border border-blue-400";case"PUT":return"bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400";case"PATCH":return"bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300";case"DELETE":return"bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border border-red-400";default:return"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"}}const He={components:{MainLeftMenuSubMenu:N,OpenApiDropdown:j},data(){return{currentServer:0}},props:{routes:{type:Object,required:!0},currentLocale:{type:String,required:!0},file:{type:String,required:!0},path:{type:String,required:!0},files:{type:Object,required:!0},locales:{type:Object,required:!0},servers:{type:Array,required:!0},localesReload:{type:Boolean,required:!0}},computed:{currentRouteName(){return this.$route.name||""},localesOptions(){return Object.keys(this.locales).map(e=>({value:e,text:this.locales[e]}))},serversOptions(){return Object.keys(this.servers).map(e=>({value:e,text:this.servers[e].description??this.servers[e].url}))},hasMultipleFiles(){return Object.keys(this.files).length>1},hasLocalization(){return this.$openapidoc.hasI18n()&&Object.keys(this.locales).length>1},hasServers(){return Object.keys(this.servers).length>1},filesAccessor(){const e=[];for(const n in this.files)this.$openapidoc.hasAccess(n)&&e.push({value:n,text:this.files[n]});return e}},methods:{getTagColor:Re,genUrl(e){return encodeURI(e)},onLocalesReload(e){this.localesReload&&setTimeout(()=>{location.reload()},1e3)},getRoute(e){return{name:`openapi-${this.path}${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:e}}},getSubRoute(e){const n=this.genUrl(e.path),o=e.type;return e.type==="custom"?{name:`${this.path}-${this.file}-${o}-${n}${this.$openapidoc.I18nLocaleSuffix()}`}:{name:`openapi-${this.path}/type-mathod${this.$openapidoc.I18nLocaleSuffix()}`,params:{name:this.file,type:o,mathod:n}}},changeRoute(e){},changeDoc(e){return{name:`openapi-${this.path}${this.$openapidoc.I18nLocaleSuffix("en")}`,params:{name:e,type:"info"}}},changeServer(e){this.currentServer=e,this.$openapidocBus.$emit("changeServer",e)},changeLocale(e){return{name:`openapi-${this.path}${this.$openapidoc.I18nLocaleSuffix(e)}`,params:{name:this.file,type:"info"}}}}},De={class:"oapi-aside-content"},Te={class:"oapi-aside-content__dds"},Be=["onClick"],qe={class:"oapi-menu"},Ve={class:"oapi-menu-item__title"},je={key:0,class:"oapi-menu-description"};function Ie(e,n,o,g,p,t){const r=q,y=j,h=N;return s(),u("div",De,[a("div",Te,[t.hasMultipleFiles?(s(),x(y,{key:0,class:"oapi-aside-content__files",options:t.filesAccessor,placeholder:o.files[o.file],value:o.file},{default:c(({item:l})=>[_(r,{to:t.changeDoc(l.value)},{default:c(()=>[L(m(l.text),1)]),_:2},1032,["to"])]),_:1},8,["options","placeholder","value"])):f("",!0),t.hasLocalization?(s(),x(y,{key:1,class:"oapi-aside-content__locales",options:t.localesOptions,placeholder:o.locales[o.currentLocale],value:o.currentLocale},{default:c(({item:l})=>[a("div",{onClick:n[0]||(n[0]=(...M)=>t.onLocalesReload&&t.onLocalesReload(...M))},[_(r,{to:t.changeLocale(l.value)},{default:c(()=>[L(m(l.text),1)]),_:2},1032,["to"])])]),_:1},8,["options","placeholder","value"])):f("",!0),t.hasServers?(s(),x(y,{key:2,class:"oapi-aside-content__locales",options:t.serversOptions,placeholder:o.servers[p.currentServer].description??o.servers[p.currentServer].url,value:p.currentServer},{default:c(({item:l})=>[a("div",{onClick:M=>t.changeServer(l.value)},m(l.text),9,Be)]),_:1},8,["options","placeholder","value"])):f("",!0)]),a("ul",qe,[a("li",null,[_(r,{to:t.getRoute("info"),class:"oapi-menu-item oapi-menu-item-head","active-class":"oapi-menu-item--is-active"},{default:c(()=>[L(m(e.$openapidoc.getLocaleText("openapidoc.info")),1)]),_:1},8,["to"])]),a("li",null,[_(r,{to:t.getRoute("auth"),class:"oapi-menu-item oapi-menu-item-head","active-class":"oapi-menu-item--is-active"},{default:c(()=>[L(m(e.$openapidoc.getLocaleText("openapidoc.auth")),1)]),_:1},8,["to"])]),a("li",null,[_(r,{to:t.getRoute("components"),class:"oapi-menu-item oapi-menu-item-head","active-class":"oapi-menu-item--is-active"},{default:c(()=>[L(m(e.$openapidoc.getLocaleText("openapidoc.components")),1)]),_:1},8,["to"])]),(s(!0),u(T,null,B(o.routes,(l,M)=>(s(),x(h,{key:M,class:"sub-menu",title:e.$openapidocRef.tr(l,"name",o.currentLocale),description:e.$openapidocRef.tr(l,"description",o.currentLocale),"is-open":l.isOpen},{default:c(()=>[(s(!0),u(T,null,B(l.items,d=>(s(),u("li",{key:`${d.path}-${d.type}`},[_(r,{id:`${d.path}-${d.type}`,to:t.getSubRoute(d),class:"oapi-menu-item","active-class":"oapi-menu-item--is-active",onClick:V(w=>t.changeRoute(d),["stop","prevent"])},{default:c(()=>[a("div",Ve,[d.type.toLowerCase()!=="custom"?(s(),u("span",{key:0,class:S(["oapi-menu-item-tag",[`oapi-menu-item-tag--${d.type.toLowerCase()}`]])},m(d.type.toUpperCase()),3)):f("",!0),a("span",{class:S(["oapi-mono bold",{deprecated:d.deprecated}])},m(e.$openapidocRef.tr(d,"name",o.currentLocale)),3)]),e.$openapidocRef.tr(d,"description",o.currentLocale)?(s(),u("div",je,m(e.$openapidocRef.tr(d,"description",o.currentLocale)),1)):f("",!0)]),_:2},1032,["id","to","onClick"])]))),128))]),_:2},1032,["title","description","is-open"]))),128))])])}const Ne=b(He,[["render",Ie]]);const Ue={props:{isMenuOpen:Boolean,isMobile:Boolean},computed:{shouldRender(){return!this.isMobile||this.isMenuOpen},computedClass(){return{"oapi-aside--mobile-invisible":this.isMobile&&!this.isMenuOpen,"oapi-aside--mobile-visible":this.isMobile&&this.isMenuOpen}}}};function ze(e,n,o,g,p,t){return t.shouldRender?(s(),u("aside",{key:0,class:S(["oapi-aside",t.computedClass])},[k(e.$slots,"menu",{},void 0,!0)],2)):f("",!0)}const Ee=b(Ue,[["render",ze],["__scopeId","data-v-8d21b7cd"]]);const Fe={},Je={class:"oapi-content"},We={class:"oapi-content__container"},Pe={class:"oapi-content__footer"};function Ze(e,n){return s(),u("main",Je,[a("div",We,[k(e.$slots,"default",{},void 0,!0)]),a("div",Pe,[k(e.$slots,"footer",{},void 0,!0)])])}const Ge=b(Fe,[["render",Ze],["__scopeId","data-v-fc4d98a1"]]),Xe={class:"oapi-layout"},Ke=["innerHTML"],Qe={class:"oapi-layout__body"},Ye=["innerHTML"],ot=K({__name:"OpenApiLayoutNuxt3",setup(e){const n=Q().data,o=Y(),{$openapidoc:g,$openapidocBus:p}=ae();let t=n.value.servers;Array.isArray(t)||(t=[]);const r=O(t),y=O("docs"),h=O(!1),l=O(!1),M=v(()=>{var $,C;return(($=o.params.name)==null?void 0:$.toString())??((C=n.value.name)==null?void 0:C.toString())}),d=v(()=>n.value.name),w=v(()=>n.value.files),A=v(()=>n.value.pathsByTags),U=v(()=>n.value.localesReload??!1),z=v(()=>n.value.locales),R=v(()=>g.currentLocale()),E=v(()=>g.getLogo().replace(":name",d.value)),H=v(()=>g.getFooter());ee(o,()=>{l.value&&(h.value=!1)},{deep:!0,immediate:!0});function F(){h.value=!h.value}function D(){const $=window.innerWidth>=1110;l.value=window.innerWidth<1110,!$&&h.value&&(h.value=!1),$&&(h.value=!0)}return te(()=>{l.value=window.innerWidth<1110,h.value=window.innerWidth>=1110,window.addEventListener("resize",D)}),ne(()=>{window.removeEventListener("resize",D)}),($,C)=>{const J=q,W=fe,P=Le,Z=Ne,G=Ee,X=Ge;return s(),u("div",Xe,[_(P,{isMenuOpen:i(h),onToggleMenu:F},{logo:c(()=>[_(J,{to:"/","active-class":"","aria-label":"logo"},{default:c(()=>[a("span",{innerHTML:i(E)},null,8,Ke)]),_:1})]),button:c(()=>[_(W,{"current-locale":i(R),files:i(w),file:i(M),path:i(y)},null,8,["current-locale","files","file","path"])]),_:1},8,["isMenuOpen"]),a("div",Qe,[_(G,{isMenuOpen:i(h),isMobile:i(l)},{menu:c(()=>[i(A)?(s(),x(Z,{key:0,routes:i(A),"current-locale":i(R),file:i(M),path:i(y),files:i(w),locales:i(z),"locales-reload":i(U),servers:i(r)},null,8,["routes","current-locale","file","path","files","locales","locales-reload","servers"])):f("",!0)]),_:1},8,["isMenuOpen","isMobile"]),_(X,null,{footer:c(()=>[i(H)?(s(),u("footer",{key:0,class:"oapi-footer",innerHTML:i(H)},null,8,Ye)):f("",!0)]),default:c(()=>[_(oe,{name:"oapi-fade",tag:"div"},{default:c(()=>[a("div",null,[k($.$slots,"default")])]),_:3})]),_:3})])])}}});export{ot as default};
