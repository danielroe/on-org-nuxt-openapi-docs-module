(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{715:function(t,e,o){var content=o(742);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(6).default)("266eacd6",content,!0,{sourceMap:!1})},717:function(t,e,o){"use strict";o.r(e);var d={props:{items:{type:Object,required:!0}},data:function(){return{isOpen:!1,preSelectedSnippet:"javascript",selectedSnippet:"javascript",selectedLibrary:"xmlhttprequest"}},computed:{selectedText:function(){return this.selectedSnippet+" / "+this.selectedLibrary}},methods:{handleItemClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e?(this.selectedSnippet=t,this.selectedLibrary=e,this.$emit("select",t,e),this.isOpen=!1):this.preSelectedSnippet=t}}},n=d,r=(o(741),o(2)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"oapi-dd-sub"},[e("button",{staticClass:"oapi-dd-sub__btn",class:{"oapi-dd-sub__btn--is-open":t.isOpen},attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[e("b",[t._v(t._s(t.selectedText?t.selectedText:"Select Library"))]),t._v(" "),e("svg",{attrs:{fill:"none",stroke:"currentColor","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}})])]),t._v(" "),e("transition",{attrs:{name:"oapi-dropdown"}},[t.isOpen?e("ul",{staticClass:"oapi-dd-sub-list",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},t._l(t.items,(function(o,d){return e("li",{key:d,staticClass:"oapi-dd-sub-list__item",attrs:{role:"menuitem"},on:{click:function(e){return t.handleItemClick(d)}}},[o?[e("div",{staticClass:"oapi-dd-sub-item"},[e("span",{staticClass:"oapi-dd-sub-item__title"},[t._v(t._s(d))]),t._v(" "),e("span",{staticClass:"oapi-dd-sub-item__icon"},[e("svg",{attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])]),t._v(" "),t.preSelectedSnippet===d?e("ul",{staticClass:"oapi-dd-sub-sub-menu"},t._l(o,(function(o){return e("li",{key:o,staticClass:"oapi-dd-sub-sub-menu__item",on:{click:function(e){return t.handleItemClick(d,o)}}},[t._v("\n              "+t._s(o)+"\n            ")])})),0):t._e()]:[t._v("\n          "+t._s(o.snippet)+"\n        ")]],2)})),0):t._e()])],1)}),[],!1,null,"cd860a04",null);e.default=component.exports},741:function(t,e,o){"use strict";o(715)},742:function(t,e,o){var d=o(5)((function(i){return i[1]}));d.push([t.i,".oapi-dd-sub[data-v-cd860a04]{position:relative}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]{align-items:center;background-color:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);color:#374151;cursor:pointer;display:inline-flex;font-size:.875rem;font-weight:500;justify-content:center;line-height:1.25rem;max-width:100%;padding:.5rem 1rem}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]:hover{background-color:#f9fafb}.oapi-dd-sub button.oapi-dd-sub__btn[data-v-cd860a04]:focus-visible{outline:2px solid rgba(156,163,175,var(--tw-text-opacity));outline-offset:2px}.oapi-dd-sub button.oapi-dd-sub__btn svg[data-v-cd860a04]{fill:currentColor;height:1rem;transition:transform .3s ease-in-out;width:1rem}.oapi-dd-sub button.oapi-dd-sub__btn--is-open svg[data-v-cd860a04]{transform:rotate(180deg)}.oapi-dd-sub-list[data-v-cd860a04]{background-color:#fff;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);left:0;list-style:none;margin-left:0;margin-top:.5rem;max-height:300px;overflow-x:auto;padding:0;position:absolute;transform-origin:top right;width:14rem;z-index:10}.oapi-dd-sub-list[data-v-cd860a04]:focus{outline:none}@media(max-width:639px){.oapi-dd-sub-list[data-v-cd860a04]{background-color:#fff;bottom:0;left:0;position:absolute;right:0;top:0;z-index:-1}}.oapi-dd-sub-list__item[data-v-cd860a04]{border-width:1px;color:#374151;cursor:pointer;display:block;font-size:.875rem;line-height:1.25rem;margin:0;padding:.5rem 1rem}.oapi-dd-sub-list__item[data-v-cd860a04]:hover{background-color:#fff;color:#1f2937}.oapi-dd-sub-item[data-v-cd860a04]{cursor:pointer;display:flex;justify-content:space-between}.oapi-dd-sub-item__icon[data-v-cd860a04],.oapi-dd-sub-item__title[data-v-cd860a04]{display:flex;flex-grow:1}.oapi-dd-sub-item__icon[data-v-cd860a04]{justify-content:flex-end}.oapi-dd-sub-item__icon svg[data-v-cd860a04]{align-self:center;display:inline;display:initial;height:1rem;margin-left:.5rem;width:1rem}.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04]{transition:opacity .2s ease,transform .2s ease}.oapi-dropdown-enter[data-v-cd860a04],.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04],.oapi-dropdown-leave-to[data-v-cd860a04]{opacity:0;transform:translateY(-.5rem) scale(.98)}.oapi-dd-sub-sub-menu[data-v-cd860a04]{list-style:none;margin:0;padding:0}.oapi-dd-sub-sub-menu__item[data-v-cd860a04]{background-color:#f3f4f6;color:#374151;display:block;font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}.oapi-dd-sub-sub-menu__item[data-v-cd860a04]:hover{background-color:#e5e7eb;color:#111827}@media(max-width:639px){.oapi-dropdown-enter-active[data-v-cd860a04],.oapi-dropdown-leave-active[data-v-cd860a04]{transition:opacity .2s ease-out,transform .2s ease-out}.oapi-dropdown-enter[data-v-cd860a04],.oapi-dropdown-leave-to[data-v-cd860a04]{opacity:0;transform:translateY(-20px)}.oapi-dropdown-leave-active[data-v-cd860a04]{position:absolute;width:100%}}",""]),d.locals={},t.exports=d}}]);