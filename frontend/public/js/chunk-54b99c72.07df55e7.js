(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54b99c72"],{"1a01":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-page-title"},[i("div",{staticClass:"page-title-wrapper"},[i("div",{staticClass:"page-title-heading"},[i("div",{staticClass:"page-title-icon"},[i("i",{class:t.icon})]),i("div",[t._v(" "+t._s(t.heading)+" "),i("div",{staticClass:"page-title-subheading"},[t._v(t._s(t.subheading))])])]),i("div",{staticClass:"page-title-actions"},[i("button",{staticClass:"btn-shadow d-inline-flex align-items-center btn btn-success",attrs:{type:"button"}},[i("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:"plus"}}),t._v("Create New ")],1)])])])},a=[],s=i("ecee"),r=i("c074"),o=i("ad3d");s["c"].add(r["X"],r["R"]);var c={components:{"font-awesome-icon":o["a"]},props:{icon:String,heading:String,subheading:String}},l=c,u=i("2877"),h=Object(u["a"])(l,n,a,!1,null,null,null);e["a"]=h.exports},b4de:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("page-title",{attrs:{heading:t.heading,subheading:t.subheading,icon:t.icon}}),i("b-row",[i("b-col",{attrs:{md:"6"}},[i("b-card",{staticClass:"main-card mb-3",attrs:{title:"Card Title"}},[i("textarea-autosize",{ref:"someName",staticClass:"form-control",attrs:{placeholder:"Type something here...","min-height":30,"max-height":200}})],1)],1),i("b-col",{attrs:{md:"6"}},[i("b-card",{staticClass:"main-card mb-3",attrs:{title:"Card Title"}},[i("textarea-autosize",{ref:"someName",staticClass:"form-control",attrs:{placeholder:"Type something here...","min-height":30,"max-height":150}})],1)],1)],1)],1)},a=[],s=i("1a01"),r=i("a026"),o={name:"TextareaAutosize",props:{value:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data:function(){return{val:null,maxHeightScroll:!1,height:"auto"}},computed:{computedStyles:function(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{}},isResizeImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("resize")},isOverflowImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("overflow")},isHeightImportant:function(){var t=this.important;return!0===t||Array.isArray(t)&&t.includes("height")}},watch:{value:function(t){this.val=t},val:function(t){this.$nextTick(this.resize),this.$emit("input",t)},minHeight:function(){this.$nextTick(this.resize)},maxHeight:function(){this.$nextTick(this.resize)},autosize:function(t){t&&this.resize()}},methods:{resize:function(){var t=this,e=this.isHeightImportant?"important":"";return this.height="auto".concat(e?" !important":""),this.$nextTick((function(){var i=t.$el.scrollHeight+1;t.minHeight&&(i=i<t.minHeight?t.minHeight:i),t.maxHeight&&(i>t.maxHeight?(i=t.maxHeight,t.maxHeightScroll=!0):t.maxHeightScroll=!1);var n=i+"px";t.height="".concat(n).concat(e?" !important":"")})),this}},created:function(){this.val=this.value},mounted:function(){this.resize()}};function c(t,e,i,n,a,s,r,o,c,l){"boolean"!==typeof r&&(c=o,o=r,r=!1);var u,h="function"===typeof i?i.options:i;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),n&&(h._scopeId=n),s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=u):e&&(u=r?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,o(t))}),u)if(h.functional){var d=h.render;h.render=function(t,e){return u.call(e),d(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,u):[u]}return i}var l=c;const u=o;var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],style:t.computedStyles,domProps:{value:t.val},on:{focus:t.resize,input:function(e){e.target.composing||(t.val=e.target.value)}}})},d=[];const m=void 0,p=void 0,g=void 0,f=!1;var v=l({render:h,staticRenderFns:d},m,u,p,f,g,void 0,void 0),b="1.1.1",x=function(t){t.component("TextareaAutosize",v)},_={install:x,version:b};"undefined"!==typeof window&&window.Vue&&window.Vue.use(_);var w=_;r["default"].use(w);var C={components:{PageTitle:s["a"]},data:function(){return{heading:"Textarea Autosize",subheading:"Create textareas that grow in height based on their content.",icon:"pe-7s-switch icon-gradient bg-plum-plate"}},methods:{}},y=C,z=i("2877"),H=Object(z["a"])(y,n,a,!1,null,null,null);e["default"]=H.exports}}]);