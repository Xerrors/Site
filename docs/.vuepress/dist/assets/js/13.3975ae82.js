(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{246:function(t,s,a){},338:function(t,s,a){"use strict";var i=a(246);a.n(i).a},346:function(t,s,a){"use strict";a.r(s);var i={data:function(){return{show:0,cardNum:1,showButton:!0,count:0,canRotate:!1}},methods:{plusOne:function(){var t=this;this.show=(this.show+1)%this.cardNum,this.showButton=!1,setTimeout((function(){t.showButton=!0}),1e3)},clickAvatar:function(){this.count+=1,this.count>10&&(this.canRotate=!0)}}},e=(a(338),a(9)),c=Object(e.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-main-container"},[a("div",{staticClass:"my-container"},[a("el-card",{directives:[{name:"show",rawName:"v-show",value:0==t.show,expression:"show==0"}],staticClass:"my-card",attrs:{"body-style":{padding:"0px"}}},[a("div",{staticClass:"my-bg"}),t._v(" "),a("div",{staticStyle:{height:"50px",margin:"0"}}),t._v(" "),a("a",{staticClass:"my-avatar-link",class:{"my-rotate":t.canRotate},on:{click:t.clickAvatar}},[a("img",{staticClass:"my-avatar",attrs:{src:t.$withBase("/avatar.jpg")}})]),t._v(" "),a("div",{staticClass:"my-title",staticStyle:{"text-align":"center"}},[t._v("Yuchuan")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("🚩")]),t._v(" "),a("p",[t._v("计科大三在读")]),t._v(" "),a("p",[t._v("菜鸡 弱鸡 垃圾")]),t._v(" "),a("br"),t._v(" "),a("p",[a("img",{staticClass:"my-svg",attrs:{src:t.$withBase("/svg/quote-left.svg"),type:"image/svg+xml"}}),t._v("\n              敬畏代码 敬畏技术\n            "),a("img",{staticClass:"my-svg",attrs:{src:t.$withBase("/svg/quote-right.svg"),type:"image/svg+xml"}})]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("💒")]),t._v(" "),a("p",[t._v("江苏 · 无锡")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"my-something"},[a("a",{attrs:{href:"https://github.com/Xerrors"}},[a("img",{staticClass:"my-svg",attrs:{src:t.$withBase("/svg/github.svg"),type:"image/svg+xml"}})]),t._v(" "),a("a",{attrs:{href:"mailto:xerrors@163.com"}},[a("img",{staticClass:"my-svg",attrs:{src:t.$withBase("/svg/mail.svg"),type:"image/svg+xml"}})]),t._v(" "),a("a",{attrs:{href:"https://dev.tencent.com/u/Xerrors"}},[a("img",{staticClass:"my-svg",attrs:{src:t.$withBase("/svg/tencent.svg"),type:"image/svg+xml"}})])])]),t._v(" "),a("div",{staticClass:"my-button-box"},[a("div",{staticClass:"my-go-home"},[a("router-link",{staticStyle:{color:"white"},attrs:{to:"/"}},[t._v("Home")])],1)])],1)])}),[],!1,null,"7d941bbe",null);s.default=c.exports}}]);